LEVELUPS = [];

var lvl = 2;
LevelUp = Ice.$extend('LevelUp', {
    __init__: function(perk) {
        this.$super();
        this.level = lvl;
        lvl ++;
        this.perk = perk;
        perk.name = 'Level ' + this.level;
        perk.id = 'LevelUp.' + this.level;

        LEVELUPS.push(this);
    }
});




// Subtract 20 for level
LevelUp(FreeGold(50));
LevelUp(LearnTrick('Ace'));
LevelUp(FreeMultiplier(0.25));
LevelUp(FreePower());
LevelUp(LearnTrick('Plank'));
LevelUp(FreePower());
LevelUp(LearnTrick('Three in a Row'));
LevelUp(FreeGold(250));
LevelUp(FreePower());
LevelUp(LearnTrick('Three of a Kind'));
LevelUp(FreeDie());
LevelUp(FreePower());
LevelUp(FreeGold(500));
LevelUp(LearnTrick('Easy As'));
LevelUp(FreeDie());
LevelUp(FreeMultiplier(0.25));
LevelUp(LearnTrick('Patriot'));
LevelUp(FreeDie());
LevelUp(FreePower());
LevelUp(LearnTrick('Evil'));

var levelup_tricks = [
'Lucky 7',
'Information',
'Hup!',
'Five and Dime',
'Primer',
'Frightened Six',
'Unlucky',
'Cursed',
'Natural',
'Long Haul',
'Do You Feel Lucky?',
'Travis Combo 11 3 1',
'Eeyore',
'Auld Lang Syne',
'Toll Free',
'On the Clock',
'Dynamite',
'Jaybirds',
'Ladies',
'Cowboys',
'Snake Eyes',
'Australian Yo',
'Easy Four',
'Little Phoebe',
'Sixie From Dixie',
'The Devil',
'Ballerina',
'OJ',
'Jimmie Hicks',
'Benny Blue',
'Easy Eight',
'Big Red',
'Eighter from Decatur',
'Nina from Pasadena',
'Square Pair',
'Railroad Nine',
'Tennessee',
'Puppy Paws',
'No Jive',
'Boxcars',
'3 Straight Pairs',
'Get Even',
'Three by Three',
'Five by Five',
'Still Lucky',
'Skipping Fours',
'Byte',
'Bitwise',
'Pascal',
'If You Leave',
'Diary',
'B-52s',
'Baby Got Back',
'Tommy Tutone',
];

_.each(levelup_tricks, function(name) {
		LevelUp(FreePower());
		LevelUp(FreeGold(500));
		LevelUp(FreeMultiplier(0.25));
		LevelUp(FreeDie());
		LevelUp(FreePower());
		LevelUp(FreeGold(500));
		LevelUp(FreeMultiplier(0.25));
    		LevelUp(LearnTrick(name));
});

//Adding new shit

var levelup_new_tricks = [
'Biggun','Biggerun','Biggestun','???un','Just take the money','Big Dubs','Gigatonne','Teratonne','Exatonne','e','e boring','nice','Bonhonogaloogs!','Mal0','Peanut','Teentacle','Actual Canibal','Reluctant','Mr Chompy','Cuddleslime','What happened?','Do not listen to them','Fuzzy and creative','You are a great feat','Excellent pianist','British','Silver bullets required','Level seven','Dialup','Look at dado Etsy!','Longboi','Cry everytime','Something tub','Saint Nick?','DO NOT stop ;)','Keep going!','Rollin down the Eyre','Dubai 85','Direct ascent to mars','Interstellar shot','Bye :)',
];

_.each(levelup_new_tricks, function(name, index) {
		var num_pads = Math.round(7 * (index+1)/levelup_new_tricks.length)
		for(var i = 0; i < num_pads; i++){
			LevelUp(DummyPerk());
			LevelUp(DummyPerk());
			LevelUp(DummyPerk());
			LevelUp(FreeGold((index+1)*(index+1)*100));
			LevelUp(DummyPerk());
			LevelUp(DummyPerk());
			LevelUp(DummyPerk());
			LevelUp(FreeMultiplier((index+1)*(index+1)*0.01));
			
			
		}
		LevelUp(LearnTrick(name));
});

