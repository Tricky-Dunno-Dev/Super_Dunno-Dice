
RoundProcessor = Ice.$extend('RoundProcessor', {
    __init__: function(game, starting_phase) {
        this.game = game;
        this.tricks_by_mode = _.groupBy(game.owned_tricks, function(trick) {
            return trick.test.phase;
        });
        this.matches = [];
        this.round_earnings = Earnings();

        // The phases of a round: tumble, streak, combo, meta, base,
        this.phase = null;
        this.starting_phase = starting_phase;
        if(starting_phase) {
            this.set_phase(starting_phase);
        }
    },
    set_phase: function(phase) {
        this.phase = phase;
        this.step = 0;
        this.trick_index = 0;
        //this.resume();
    },
    resume: function() {
        while(this[this.phase]());
    },

    // These phase functions must be re-entrant.
    tumble: function() {
        if(this.step == 1) {
            this.anal = new DiceAnalysis(this.game.dice);
            this.set_phase('find_tricks');
            return true;
        } else {
            this.step = 1;
            this.start_tumble_anim();
        }
    },
    start_tumble_anim: function() {
        var self = this;
        var steps = 7;
        var interval = 50;
        var ticks = 0;

        function rollanimtick() {
            ticks ++;
            if(ticks < steps) {
                _.each(self.game.dice, function(die) {
                    die.tumble();
                });
                window.setTimeout(rollanimtick, interval);
            } else {
                _.each(self.game.dice, function(die) {
                    die.roll();
                });

                _.each(self.game.dice, function(die) {
                    die.apply_special_effects();
                });
                self.resume();
            }
        }
        rollanimtick();
    },
    find_tricks: function() {
        var self = this;
        this.matches = [];
        _.each(['streak', 'combo', 'salary'], function(phase) {
            var tricks = self.tricks_by_mode[phase] || [];
            _.each(tricks, function(trick) {
                var matches = trick.get_matches(self.game.dice);
                self.matches = self.matches.concat(matches);
            });
        });

        self.match_count = this.matches.length;
        /*        var cnt = 0;
        _.each(this.matches, function(m) {
            cnt += m.sub_matches ? m.sub_matches.length : 1;
        });*/

        if(this.matches.length > 100) {
            var merge_count = 5;
            var merged_matches = [];
            var matches_by_trick = _.groupBy(this.matches, 'trick_name');
            _.each(_.omit(matches_by_trick), function(ms, trick_name) {
                
                if(ms.length < merge_count) return;
                
                delete matches_by_trick[trick_name];
                
                var mm = MergeMatch(ms);
                merged_matches.push(mm);
            });
            

            this.matches = merged_matches.concat(_.flatten(_.values(matches_by_trick)));
        }
        

        // Let's sort them.
        this.matches = _.sortBy(this.matches, function(m) {
            if(m.trick.test.phase === 'salary') {
                return Infinity;  // This is LAST.
            }
            return m.earnings.total();
        });

        if(this.matches.length > 100) {
            var grouped = _.groupBy(this.matches, function(m) {
                if(m.sub_matches) {
                    return 'must_keep';
                }
                if(m.trick.test.phase === 'salary')
                    return 'salary';
                return 'mergable';
            });


            var keep = grouped.mergable.slice(-100);
            merging = grouped.mergable.slice(0, -100);
            
            var merged = MergeAnyMatch(merging);
            // Keep salary at the end, but stick mergable before it.

            var kept = grouped.must_keep.concat(keep);
            kept = _.sortBy(kept, function(m) { return m.earnings.total(); });

            this.matches = _.flatten([kept, [merged], grouped.salary]);
        }
        this.set_phase('play_tricks');
        return true;
    },
    play_tricks: function() {
        var matches = this.matches;
        this.trick_interval = (2000 + 16 * matches.length) / matches.length;
        if(this.trick_index === 0) {
            this.game.sidebar.round_pane.$round_log.empty();
        }
        if(this.trick_index < matches.length) {
            var match = matches[this.trick_index++];
            this.play_trick(match);
            return false;
        }
        this.set_phase('play_total');
        return true;
    },
    play_trick: function(match) {
        this.match = match;
        
        var trick = match.trick;

        var matched = match.dice;

        var $round_log = this.game.sidebar.round_pane.$round_log;
        var $trick_div = match.play_match(this.game, matched);
        $trick_div.css({backgroundColor: 'rgba(255, 255, 255, 0.1)'});
        $trick_div.animate({backgroundColor: 'rgba(255, 255, 255, 0)'}, 1000, 'linear');
        $round_log.prepend($trick_div);
        _.each(this.game.dice, function(die) {
            if(!_.contains(matched, die)) {
                die.container.$el.css('opacity', '0.25');
            }
        });
        var delay = trick && trick.test.phase == 'salary' ? 0 : this.trick_interval;
        if(trick && trick.test.phase == 'salary') {
            audio['dundundun'].play();
            //createjs.Sound.play('dundundun');
        } else {
            audio.play_trick(this.trick_index);
            //TRICK_SOUNDS_SHUFFLE[this.trick_index % TRICK_SOUNDS_SHUFFLE.length].play();
        }
        _.delay(_.bind(this.end_trick, this), delay);

    },
    end_trick: function() {
        var match = this.match;
        _.each(this.game.dice, function(die) {
            if(!_.contains(match.dice, die)) {
                die.container.$el.css('opacity', '1');
            }
        });
        this.resume();
    },
    play_total: function() {
        var $round_log = this.game.sidebar.round_pane.$round_log;
        var $total_div = $('<div class="trick_log total"><div id="name_holder"><p><span id="name">Roll Total</span> (<span id="trick_count"></span> tricks)</p></div></div>');
        $total_div.append(this.round_earnings.make_reward_line());
        $round_log.prepend($total_div);

        $total_div.find('#trick_count').text(self.match_count);
        this.set_phase('update_stats');
        return true;
    },
    check_achievements: function() {
        var self = this;
        _.each(self.game.achievements, function(ach) {
            if(!ach.earned) {
                ach.test(self.game);
            }
        });
        this.set_phase('apply_perks');
        return true;
    },
    apply_perks: function() {
        var self = this;
        this.perks_to_apply = this.game.pending_perks;

        if(!this.perks_to_apply.length) {
            if(settings.automation_on()) {
                self.set_phase('automate')
            } else {
                self.set_phase('cleanup')
            } 
            return true;
            
        }

        var flyers = _.map(this.perks_to_apply, function(perk) {
            var auto_dismiss = self.starting_phase == 'apply_perks' ? 0 : undefined;
            var flyer = new PerkFlyer(perk, auto_dismiss);
            return flyer;
        });
        this.game.pending_perks = [];
        var flytime = 1000 / flyers.length;
        if(flytime > 400) flytime = 400;
        if(flytime < 50) flytime = 50;
        this.game.scene.banner.play_flyers(flyers, 0, _.bind(this.resume, this));

        return false;
    },
    update_stats: function() {
        if(this.starting_phase !== 'apply_perks') {
            this.round_earnings.apply_stats(this.game);

            this.game.stats.dice_rolled.inc(this.game.dice.length);
            this.game.stats.dice_rolled_this_game.inc(this.game.dice.length);

            this.game.stats.tricks_performed.inc(this.match_count);
            this.game.stats.tricks_performed_this_game.inc(this.match_count);

            this.game.stats.highest_gold_turn.higher(this.round_earnings.gold);
            this.game.stats.most_dice_rolled.higher(this.game.dice.length);
            this.game.stats.most_tricks_turn.higher(this.match_count);

            this.game.stats.turns_this_game.inc(1);
            this.game.stats.turns_alltime.inc(1);
        }
        this.set_phase('check_achievements');
        return true;
    },
    
    automate: function(){
        
        //this should be set in options and alterable by users, hard code for now
        // -------------- actions in turn approach ----------------------
        // loop through options in priority order
        // for each loop, execute the options until one returns false (i.e. cannot afford this option)
      
        var self = this;
        
        var auto_options = [
            {do:'purchase_die', percentage_threshold:50, priority:1},
            {do:'increase_die_power', percentage_threshold:30, priority: 0},
            {do:'die_power_to_sides', percentage_threshold:20, priority: 3}
        ];
        var buy_partial_bag = false;
        
        var sorted_options = auto_options.sort((a, b) => (a.priority > b.priority) ? 1 : -1).filter(a => a.priority > 0);
        
        while(true){
            for(const option of sorted_options){
                var purchase_dice_result = false;
                var increase_dice_power_result = false;
                var die_power_to_sides_result = false;
                
                if(option.do == 'purchase_die'){
                    if(this.game.gold() >= game.next_die_cost()){
                        this.game.purchase_die(false);
                        purchase_dice_result = true
                    }
                }
                
                if(option.do == 'increase_die_power'){
                    // will only purchase if we can afford for all of them
                    var total_purchase_power_cost = 0;
                    for(const die of game.dice){
                        total_purchase_power_cost = total_purchase_power_cost + die.next_power_cost();
                    }
                    if(this.game.gold() >= total_purchase_power_cost){
                        for(const die of game.dice){
                            die.purchase_power();
                        }
                        purchase_dice_result = true;
                    }
                }
                
                if(option.do == 'die_power_to_sides'){
                        
                    var total_to_sides_cost = 0;
                    
                    _.each(this.game.dice, function(die) {
                        var next_star = die.game.next_magic_at(die);
                        var needed_points = next_star - die.power() - 1;
                        for(var x=0; x < needed_points; x++) {
                             total_to_sides_cost += die.game.next_power_cost(die.purchased_power() + x);   
                        }
                    });
                        
                    if(this.game.gold() >= total_to_sides_cost){
                        _.each(this.game.dice, function(die) {
                            var next_star = this.game.next_magic_at(die);
                            var needed_points = next_star - die.power() - 1;
                            die.purchase_x_power(needed_points);
                        });
                        
                        die_power_to_sides_result = true;
                    }       
                }
            }
            
            if(buy_partial_bag){
                // exit the outer loop only if all of the results are false
                if (!increase_dice_power_result && !purchase_dice_result && !die_power_to_sides_result){
                    break;
                }
            } 
             else {
                // exit the outer loop if any of the results were false
                if (!(increase_dice_power_result && purchase_dice_result && die_power_to_sides_result)){
                    break;
                }
            }
        }

        self.set_phase('cleanup');
        return true;
    
    },
    
    cleanup: function() {
        this.game.lastroll = this;
        this.game.rolling = false;
        this.game.sidebar.upgrade_pane.render();
        this.game.save_game();
        this.game.submit_statistics();

        var won = this.game.achievements['You Win The Game More'].earned;
        if(this.game.rolls_remaining() <= 0 || (won && !game.won())) {
            game.won(won);
            var flyer_class = won ? YouWinFlyer : GameOverFlyer;
            var gameoverflyer = flyer_class(this.game);
            this.game.scene.banner.play_flyers([gameoverflyer]);
        }
    }

});

