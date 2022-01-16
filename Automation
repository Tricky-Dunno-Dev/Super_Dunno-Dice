//  Digging for useful calls

purchase_die: function(forfree) {
        if(!forfree) {
            if(this.gold() < this.next_die_cost()) {
                return false;
            }
            this.gold.dec(this.next_die_cost());
            this.purchased_die.inc(1);
            this.stats.dice_purchased.inc(1);

        }


        var d = new Die(this, this.new_dice_blob());
        this.dice.push(d);
        this.evChanged(this.dice);

    }




























