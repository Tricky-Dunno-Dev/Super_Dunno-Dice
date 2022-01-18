TRICKS = {

};
function add_trick(opts) {
    var trick = Trick(opts);
    TRICKS[trick.name] = trick;
}

add_trick({
    name: 'Salary',
    test: SalaryTest(),
    description: 'Earn a little gold, experience, and bonus points based on your die rolls.',
    rewards: [
        SalaryReward()
    ]
});



add_trick({
    name: 'One Pair',
    test: ComboSets({
        sets: 1,
        of_a_kind: 2
    }),
    rewards: [
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 100, perk: LearnTrick('Two Pair')},
        3: { at: 250, perk: FreePower() }
    }
});


add_trick({
    name: 'Two Pair',
    test: ComboSets({
        sets: 2,
        of_a_kind: 2
    }),
    rewards: [
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(25) },
        2: { at: 100, perk: LearnTrick('Three Pair')},
        3: { at: 250, perk: FreePower() }
    }
});


add_trick({
    name: 'Three Pair',
    test: ComboSets({
        sets: 3,
        of_a_kind: 2
    }),
    rewards: [
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(150) },
        2: { at: 100, perk: LearnTrick('Four Pair')},
        3: { at: 250, perk: FreePower() }
    }
});

add_trick({
    name: 'Four Pair',
    test: ComboSets({
        sets: 4,
        of_a_kind: 2
    }),
    rewards: [
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(1.0) },
        2: { at: 25, perk: LearnTrick('Five Pair')},
        3: { at: 100, perk: FreePower() }
    }
});



add_trick({
    name: 'Five Pair',
    test: ComboSets({
        sets: 5,
        of_a_kind: 2
    }),
    rewards: [
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 5, perk: FreePower(150) },
        2: { at: 25, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Ace',
    test: ComboSequence({
        seq: [1]
    }),
    rewards:[
        SalaryBonus(11)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: LearnTrick('Micro-fib') },
        3: { at: 100, perk: LearnTrick('Aces') }
    }
});


add_trick({
    name: 'Aces',
    test: ComboSequence({
        seq: [1, 1]
    }),
    rewards:[
        SalaryBonus(11)
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: FreeMultiplier(0.25) },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Dueces',
    test: ComboSequence({
        seq: [2, 2]
    }),
    rewards:[
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: FreeMultiplier(0.25) },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Triple Triad',
    test: ComboSequence({
        seq: [3,3,3]
    }),
    rewards:[
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(0.25) },
        2: { at: 25, perk: FreeMultiplier(0.25) },
        3: { at: 50, perk: FreePower() }
    }
});

add_trick({
    name: 'Four Wheel Drive',
    test: ComboSequence({
        seq: [4,4,4,4]
    }),
    rewards:[
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(0.25) },
        2: { at: 25, perk: FreeMultiplier(0.25) },
        3: { at: 50, perk: FreePower() }
    }
});

add_trick({
    name: 'Ezekiel',
    test: ComboSequence({
        seq: [5,5,5,5,5]
    }),
    rewards:[
        SalaryBonus(5)
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(0.25) },
        2: { at: 25, perk: FreeMultiplier(0.25) },
        3: { at: 50, perk: FreePower() }
    }
});







add_trick({
    name: 'Micro-fib',
    test: ComboSequence({
        seq: [1,1,2]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: LearnTrick('Mini-fib') },
        3: { at: 100, perk: FreeMultiplier(0.25) }
    }
});

add_trick({
    name: 'Mini-fib',
    test: ComboSequence({
        seq: [1,1,2,3]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: LearnTrick('Fibonacci') },
        3: { at: 100, perk: FreeMultiplier(0.25) }
    }
});


add_trick({
    name: 'Fibonacci',
    test: ComboSequence({
        seq: [1,1,2,3,5]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 25, perk: LearnTrick('Kilo-fib') },
        3: { at: 50, perk: FreePower() }
    }
});


add_trick({
    name: 'Kilo-fib',
    test: ComboSequence({
        seq: [1,1,2,3,5,8]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 25, perk: LearnTrick('Mega-fib') },
        3: { at: 50, perk: FreePower() }
    }
});


add_trick({
    name: 'Mega-fib',
    test: ComboSequence({
        seq: [1,1,2,3,5,8,13]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: LearnTrick('Giga-fib') }
    }
});

add_trick({
    name: 'Giga-fib',
    test: ComboSequence({
        seq: [1,1,2,3,5,8,13,21]
    }),
    rewards: [
        SalaryBonus(13)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: LearnTrick('Ultimate Fibonacci') }
    }
});

add_trick({
    name: 'Ultimate Fibonacci',
    test: ComboSequence({
        seq: [1,1,2,3,5,8,13, 21, 34]
    }),
    rewards: [
        SalaryBonus(34)
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 10, perk: FreePower() },
        3: { at: 20, perk: FreePower() }
    }
});
//////////////////////////////////////////////////


add_trick({
    name: 'Easy As',
    test: ComboSequence({
        seq: [1,2,3]
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 25, perk: LearnTrick('Three in a Row') },
        2: { at: 50, perk: FreeGold(100) },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Three in a Row',
    test: ComboStraight({
        in_a_row: 3
    }),
    rewards:[
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: LearnTrick('Short Straight') },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Short Straight',
    test: ComboStraight({
        in_a_row: 4
    }),
    rewards:[
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: LearnTrick('Straight') },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Straight',
    test: ComboStraight({
        in_a_row: 5
    }),
    rewards:[
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(0.25) },
        2: { at: 25, perk: LearnTrick('Long Straight') },
        3: { at: 50, perk: FreePower() }
    }
});


add_trick({
    name: 'Long Straight',
    test: ComboStraight({
        in_a_row: 6
    }),
    rewards:[
        SalaryBonus(1),
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 25, perk: LearnTrick('STAHP') },
        3: { at: 50, perk: FreePower() }
    }
});


add_trick({
    name: 'STAHP',
    test: ComboStraight({
        in_a_row: 7
    }),
    rewards:[
        SalaryBonus(4),
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 25, perk: FreePower() },
        3: { at: 50, perk: FreePower() }
    }
});


/////////////////////////////////////////////////////



add_trick({
    name: 'Three of a Kind',
    test: ComboSets({
        sets: 1,
        of_a_kind: 3
    }),
    rewards: [
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(100) },
        2: { at: 100, perk: LearnTrick('Four of a Kind') },
        3: { at: 200, perk: LearnTrick('Two Triples') }
    }
});


add_trick({
    name: 'Two Triples',
    test: ComboSets({
        sets: 2,
        of_a_kind: 3
    }),
    rewards: [
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(100) },
        2: { at: 50, perk: LearnTrick('Three by Three') },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Three by Three',
    test: ComboSets({
        sets: 3,
        of_a_kind: 3
    }),
    rewards: [
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 5, perk: FreeGold(100) },
        2: { at: 25, perk: FreePower() },
        3: { at: 50, perk: FreeMultiplier(0.25) }
    }
});

add_trick({
    name: 'Four of a Kind',
    test: ComboSets({
        sets: 1,
        of_a_kind: 4
    }),
    rewards: [
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 25, perk: FreeMultiplier(0.25) },
        2: { at: 50, perk: LearnTrick('Six of a Kind') },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Six of a Kind',
    test: ComboSets({
        sets: 1,
        of_a_kind: 6
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 5, perk: LearnTrick('Round of Nine') },
        2: { at: 25, perk: FreeGold(1000) },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Round of Nine',
    test: ComboSets({
        sets: 1,
        of_a_kind: 9
    }),
    rewards: [
        SalaryBonus(4),
    ],
    levels: {
        1: { at: 5, perk: FreePower() },
        2: { at: 10, perk: FreePower() },
        3: { at: 25, perk: FreePower() }
    }
});

////////////////////////////////


add_trick({
    name: 'Information',
    test: ComboSequence({
        seq: [4,1,1]
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 25, perk: LearnTrick('Customer Service?') },
        2: { at: 50, perk: FreeGold(411) },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Customer Service?',
    test: ComboSequence({
        seq: [6,1,1]
    }),
    rewards: [
        SalaryBonus(6)
    ],
    levels: {
        1: { at: 25, perk: LearnTrick('Fake Area Code') },
        2: { at: 50, perk: FreeGold(611) },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Fake Area Code',
    test: ComboSequence({
        seq: [5,5,5]
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
        1: { at: 25, perk: LearnTrick('HALP!') },
        2: { at: 50, perk: FreeMultiplier(0.55) },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'HALP!',
    test: ComboSequence({
        seq: [9,1,1]
    }),
    rewards: [
        SalaryBonus(9)
    ],
    levels: {
        1: { at: 5, perk: FreeGold(911) },
        2: { at: 25, perk: FreePower() },
        3: { at: 50, perk: FreePower() }
    }
});

//////////////////////////////////////////////
// PI tricks
add_trick({
    name: 'Tasty Pi',
    test: ComboSequence({
        seq: [3, 1, 4]
    }),
    rewards:[
        SalaryBonus(3.14),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(314) },
        2: { at: 50, perk: LearnTrick('Two Slices') },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Two Slices',
    test: ComboSequence({
        seq: [3,1,4,3,1,4]
    }),
    rewards:[
        SalaryBonus(3.14 * 3.14),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(314) },
        2: { at: 50, perk: LearnTrick('Proper Pi') },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Proper Pi',
    test: ComboSequence({
        seq: [3,14]
    }),
    rewards:[
        SalaryBonus(8),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(314) },
        2: { at: 50, perk: LearnTrick('Longer Pi') },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Longer Pi',
    test: ComboSequence({
        seq: [3,14,15]
    }),
    rewards:[
        SalaryBonus(12),
    ],
    levels: {
        1: { at: 50, perk: FreeGold(314) },
        2: { at: 100, perk: LearnTrick('Pie') },
        3: { at: 300, perk: FreePower() }
    }
});


add_trick({
    name: 'Pie',
    test: ComboSequence({
        seq: [3,14,15,9]
    }),
    rewards:[
        SalaryBonus(20),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(314) },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});




////////


///

add_trick({
    name: 'Lucky 7',
    test: ComboSequence({
        seq: [7]
    }),
    rewards:[
        FlatReward({
            gold: 7,
            xp: 7,
            bp: 7
        })
    ],
    levels: {
        1: { at: 7, perk: FreeGold(777) },
        2: { at: 77, perk: FreePower() },
        3: { at: 777, perk: FreePower() }
    }
});


add_trick({
    name: 'Holy Hand Grenade',
    test: ComboSequence({
        seq: [1,2,5,3,3]
    }),
    rewards:[
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'They See Me Rollin',
    test: ComboSets({
        sets: 2,
        of_a_kind: 5
    }),
    rewards:[
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Roll Your Boat',
    test: ComboSets({
        sets: 2,
        of_a_kind: 6
    }),
    rewards:[
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Hexadecimal',
    test: ComboSequence({
        seq: [16, 10]
    }),
    rewards:[
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

///////////////////////////////////////////////////



add_trick({
    name: 'Patriot',
    test: ComboSequence({
        seq: [7,4]
    }),
    rewards:[
        SalaryBonus(2),
    ],
    levels: {
        1: { at: 25, perk: FreeGold(1776) },
        2: { at: 50, perk: FreeMultiplier(0.74) },
        3: { at: 100, perk: FreePower() }
    }

});



add_trick({
    name: 'Evil',
    test: ComboSequence({
        seq: [6,6,6]
    }),
    rewards: [
        SalaryBonus(6)
    ],
    levels: {
        1: { at: 25, perk: LearnTrick('Yahtzee!') },
        2: { at: 50, perk: FreeMultiplier(0.25) },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Yahtzee!',
    test: ComboSequence({
        seq: [6,6,6,6,6,6]
    }),
    rewards: [
        SalaryBonus(6)
    ],
    levels: {
        1: { at: 5, perk: FreeMultiplier(0.66) },
        2: { at: 25, perk: FreePower() },
        3: { at: 50, perk: FreePower() }
    }
});

///////////////////////////////////////


add_trick({
    name: 'Plank',
    test: ComboSequence({
        seq: [2,4]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreeGold(42) },
        2: { at: 100, perk: LearnTrick('Planking') },
        3: { at: 200, perk: FreePower() }
    }
});

add_trick({
    name: 'Planking',
    test: ComboSequence({
        seq: [2,4,2,4]
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 25, perk: FreeGold(42) },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

/////////////////////////////////////////////////


add_trick({
    name: 'Hup!',
    test: ComboSequence({
        seq: [2,3,4]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 25, perk: FreeGold(234) },
        2: { at: 100, perk: FreePower() },
        3: { at: 400, perk: LearnTrick('Max Damage') }
    }
});

add_trick({
    name: 'Max Damage',
    test: ComboSequence({
        seq: [9,9,9,9]
    }),
    rewards: [
        SalaryBonus(9)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 100, perk: FreeGold(9999) },
        3: { at: 200, perk: LearnTrick('Up to 11') }
    }
});

add_trick({
    name: 'Up to 11',
    test: ComboSequence({
        seq: [9,10,11]
    }),
    rewards: [
        SalaryBonus(11)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 100, perk: FreePower() },
        3: { at: 200, perk: FreeGold(11111) }
    }
});


//////////////////////////////////////////////////////////

add_trick({
    name: 'Five and Dime',
    test: ComboSequence({
        seq: [5,10]
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: LearnTrick('Baseball') }
    }
});

add_trick({
    name: 'Baseball',
    test: ComboSequence({
        seq: [3,4,9]
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: LearnTrick('Blackjack') }
    }
});

add_trick({
    name: 'Blackjack',
    test: ComboSequence({
        seq: [10,11]
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: FreePower() }
    }
});


/////////////////////////////////////////////

add_trick({
    name: 'Primer',
    test: ComboSequence({
        seq: [2,3,5,7]
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: LearnTrick('Primacy') }
    }
});

add_trick({
    name: 'Primacy',
    test: ComboSequence({
        seq: [3,5,7,11]
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: LearnTrick('Optimus') }
    }
});

add_trick({
    name: 'Optimus',
    test: ComboSequence({
        seq: [5,7,11,13]
    }),
    rewards: [
        SalaryBonus(7)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 150, perk: FreePower() },
        3: { at: 300, perk: FreePower() }
    }
});


/////////////////////////////////////////////////////////////////


function make_seq_set(set) {
    var keys = _.keys(set);
    _.each(set, function(seq, name) {
        var rew = set[keys.indexOf(name) + 1] || FreePower();

        add_trick({
            name: name,
            test: ComboSequence({
                'seq': seq,
            }),
            rewards: [
                SalaryBonus(_.max(seq)),
            ],
            levels: {
                1: { at: 500, perk: rew },
                2: { at: 5000, perk: FreePower() },
                3: { at: 50000, perk: FreePower() }
            }
        });
    });
}

function make_seq_tricks(set) {
    _.each(set, function(seq, name) {
        add_trick({
            name: name,
            test: ComboSequence({
                'seq': seq,
            }),
            rewards: [
                SalaryBonus(seq[0]),
            ],
            levels: {
                1: { at: 500, perk: FreePower() },
                2: { at: 5000, perk: FreePower() },
                3: { at: 50000, perk: FreePower() }
            }
        });
    });

}



var craps = {
    'Snake Eyes': [1,1],
    'Australian Yo': [1,2],
    'Easy Four': [1,3],
    'Little Phoebe': [1,4],
    'Sixie From Dixie': [1,5],
    'The Devil': [1,6],

    'Ballerina': [2,2],
    'OJ': [2,3],
    'Jimmie Hicks': [2,4],
    'Benny Blue': [2,5],
    'Easy Eight': [2,6],

    'Brooklyn Forest': [3,3],
    'Big Red': [3,4],
    'Eighter from Decatur': [3,5],
    'Nina from Pasadena': [3,6],

    'Square Pair': [4,4],
    'Railroad Nine': [4,5],
    'Tennessee': [4,6],

    'Puppy Paws': [5,5],
    'No Jive': [6,5],

    'Boxcars': [6,6],

}

make_seq_tricks(craps);

var kings = {
    'Kevin': [13,7],
    'Kate': [13,8],
    'Canine': [13,9],
    'Ken': [13, 10],
    'Just Kidding': [13, 11],
    'Divorce': [13, 12],
    'Cowboys': [13,13],
}

make_seq_set(kings);

make_seq_set({
    'Kuwait': [12,8],
    'Quinine': [12,9],
    'Cutie': [12,10],
    'Quack': [12,11],
    'Ladies': [12,12],
});

make_seq_set({
    'Jack Daniels': [11, 7],
    'Jacket': [11, 8],
    'Braggars': [11, 9],
    'Timberlake': [11, 10],
    'Jaybirds': [11, 11],
});

make_seq_set({
    'Sweet Sixteen': [10, 6],
    'Bowling Hand': [10, 7],
    'Tetris': [10, 8],
    'Texting': [10, 9],
    'Dynamite': [10, 10],

});

make_seq_set({
    'On the Clock': [9, 5],
    'The Dirty': [6,9],
    'Oldsmobile': [9, 8],
    'German Nos': [9, 9],
});

// Even more levelup tricks


/////////////////////
// more levelup tricks


add_trick({
    name: 'Frightened Six',
    test: ComboSequence({
        seq: [7,8,9]
    }),
    rewards: [
        SalaryBonus(6)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Unlucky',
    test: ComboSequence({
        seq: [1,1,1,1,1,1]
    }),
    rewards: [
        SalaryBonus(10)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Cursed',
    test: ComboSequence({
        seq: [1,1,1,1,1,1,1,1,1]
    }),
    rewards: [
        SalaryBonus(20)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Natural',
    test: ComboSequence({
        seq: [20]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Long Haul',
    test: ComboSequence({
        seq: [18]
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Do You Feel Lucky?',
    test: ComboSequence({
        seq: [2,3,3,1,7,19,1,7,4,2,9]
    }),
    rewards: [
        SalaryBonus(50)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});


add_trick({
    name: 'Travis Combo 11 3 1',
    test: ComboSequence({
        seq: [11, 3, 1]
    }),
    rewards:[
        SalaryBonus(12),
        FlatReward({
            gold: 12,
            xp: 12
        })
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Eeyore',
    test: ComboSequence({
        seq: [4,20]
    }),
    rewards: [
        SalaryBonus(4.20)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Auld Lang Syne',
    test: ComboSequence({
        seq: [12, 31]
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

add_trick({
    name: 'Toll Free',
    test: ComboSequence({
        seq: [1,8,8,8]
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});

///////////////////////////
// Complex tricks


add_trick({
    name: '3 Straight Pairs',
    test: ComboStraight({
        in_a_row: 3,
        of_a_kind: 2,
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: LearnTrick('4 Straight Pairs') },
            3: { at: 1000, perk: FreePower() }
    }
});


add_trick({
    name: '4 Straight Pairs',
    test: ComboStraight({
        in_a_row: 3,
        of_a_kind: 2,
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: LearnTrick('5 Straight Pairs') },
            3: { at: 1000, perk: FreePower() }
    }
});


add_trick({
    name: '5 Straight Pairs',
    test: ComboStraight({
        in_a_row: 5,
        of_a_kind: 2,
    }),
    rewards: [
        SalaryBonus(5)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 1000, perk: FreePower() }
    }
});


add_trick({
    name: 'Get Even',
    test: ComboStraight({
        in_a_row: 4,
        multiple: 2,
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: LearnTrick('Even Steven') },
            3: { at: 2000, perk: FreePower() }
    }
});


add_trick({
    name: 'Even Steven',
    test: ComboStraight({
        in_a_row: 8,
        multiple: 2,
    }),
    rewards: [
        SalaryBonus(8)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});



add_trick({
    name: 'Three by Three',
    test: ComboStraight({
        in_a_row: 3,
        multiple: 3,
    }),
    rewards: [
        SalaryBonus(9)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: LearnTrick('Three Cubed') },
            3: { at: 2000, perk: FreePower() }
    }
});


add_trick({
    name: 'Three Cubed',
    test: ComboStraight({
        in_a_row: 3,
        multiple: 3,
        of_a_kind: 3,
    }),
    rewards: [
        SalaryBonus(27)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 1000, perk: FreeDie() }
    }
});


add_trick({
    name: 'Five by Five',
    test: ComboStraight({
        in_a_row: 5,
        multiple: 5,
    }),
    rewards: [
        SalaryBonus(25)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});


add_trick({
    name: 'Still Lucky',
    test: ComboStraight({
        in_a_row: 2,
        multiple: 7,
    }),
    rewards: [
        SalaryBonus(7)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});


add_trick({
    name: 'Skipping Fours',
    test: ComboStraight({
        in_a_row: 4,
        multiple: 4,
    }),
    rewards: [
        SalaryBonus(16)
    ],
    levels: {
            1: { at: 50, perk: FreePower() },
            2: { at: 500, perk: FreePower() },
            3: { at: 2000, perk: FreePower() }
    }
});


////////////////////////
//// Famous Phone Numbers

add_trick({
    name: 'Tommy Tutone',
    test: ComboSequence({
        seq: [8, 6, 7, 5, 3, 9]
    }),
    rewards: [
        SalaryBonus(9)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Baby Got Back',
    test: ComboSequence({
        seq: [6,4,9,2,5,6,8]
    }),
    rewards: [
        SalaryBonus(9)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'B-52s',
    test: ComboSequence({
        seq: [6,6,8,4,2]
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Diary',
    test: ComboSequence({
        seq: [4,8,9,4,6,8]
    }),
    rewards: [
        SalaryBonus(8)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'If You Leave',
    test: ComboSequence({
        seq: [6,1,2,5,5,5,2,4,2,2]
    }),
    rewards: [
        SalaryBonus(12)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Pascal',
    test: ComboSequence({
        seq: [1,3,3,1]
    }),
    rewards: [
        SalaryBonus(3)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: LearnTrick('Rascal')},
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Rascal',
    test: ComboSequence({
        seq: [1,4,6,4,1]
    }),
    rewards: [
        SalaryBonus(6)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: LearnTrick('Sixth Row') },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Sixth Row',
    test: ComboSequence({
        seq: [1,5,10,10,5,1]
    }),
    rewards: [
        SalaryBonus(10)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Bitwise',
    test: ComboSequence({
        seq: [1,2,4,8]
    }),
    rewards: [
        SalaryBonus(8)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 100, perk: FreePower() },
        3: { at: 400, perk: LearnTrick('Bitwise Shift') }
    }
});

add_trick({
    name: 'Bitwise Shift',
    test: ComboSequence({
        seq: [2,4,8,16]
    }),
    rewards: [
        SalaryBonus(8)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: LearnTrick('Bit Bucket') }
    }
});


add_trick({
    name: 'Bit Bucket',
    test: ComboSequence({
        seq: [2,2,2,2,2,2,2,2]
    }),
    rewards: [
        SalaryBonus(16)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: FreePower() },
        3: { at: 100, perk: FreePower() }
    }
});


add_trick({
    name: 'Byte',
    test: ComboSequence({
        seq: [2, 5, 5]
    }),
    rewards: [
        SalaryBonus(2)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 100, perk: FreePower() },
        3: { at: 500, perk: LearnTrick('Short') }
    }
});

add_trick({
    name: 'Short',
    test: ComboSequence({
        seq: [6,5,5,3,5]
    }),
    rewards: [
        SalaryBonus(4)
    ],
    levels: {
        1: { at: 50, perk: FreePower() },
        2: { at: 200, perk: LearnTrick('Long') },
        3: { at: 500, perk: FreePower() }
    }
});

add_trick({
    name: 'Long',
    test: ComboSequence({
        seq: [4,2,9,4,9,6,7,2,9,5]
    }),
    rewards: [
        SalaryBonus(8)
    ],
    levels: {
        1: { at: 25, perk: FreePower() },
        2: { at: 50, perk: LearnTrick('Long Long') },
        3: { at: 100, perk: FreePower() }
    }
});

add_trick({
    name: 'Long Long',
    test: ComboSequence({
        seq: [1,8,4,4,6,7,4,4,7,3,7,9,5,5,1,6,1,5]
    }),
    rewards: [
        SalaryBonus(16)
    ],
    levels: {
        1: { at: 25, perk: MagicBoost('green', 1) },
        2: { at: 50, perk: MagicBoost('yellow', 1) },
        3: { at: 100, perk: MagicBoost('blue', 1) }
    }
});

//     NEW TRICKS

add_trick({
    name: 'Biggun',
    test: ComboSequence({
        seq: [100]
    }),
    rewards: [
        SalaryBonus(40)
    ],
    levels: {
        1: { at: 100, perk: FreePower() },
        2: { at: 1000, perk: FreePower() },
        3: { at: 2000, perk: FreePower() }
    }
});

//SCP themed tricks

add_trick({name: 'Mal0', test: ComboSequence ({seq: [1,4,71]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(6000) }, 2: { at: 200, perk: MagicBoost('green', 0.5) }, 3: { at: 400, perk: MagicBoost('green', 1) }}});
add_trick({name: 'Peanut', test: ComboSequence ({seq: [1,73]}), rewards: [SalaryBonus(8)], levels: {1: { at: 100, perk: FreeGold(7000) }, 2: { at: 200, perk: MagicBoost('pink', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'Teentacle', test: ComboSequence ({seq: [2,6,62]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(8000) }, 2: { at: 200, perk: MagicBoost('blue', 0.5) }, 3: { at: 400, perk: MagicBoost('blue', 1) }}});
add_trick({name: 'Actual Canibal', test: ComboSequence ({seq: [12,47]}), rewards: [SalaryBonus(6)], levels: {1: { at: 100, perk: FreeGold(9000) }, 2: { at: 200, perk: MagicBoost('yellow', 0.5) }, 3: { at: 400, perk: MagicBoost('yellow', 1) }}});
add_trick({name: 'Reluctant', test: ComboSequence ({seq: [50,7]}), rewards: [SalaryBonus(6)], levels: {1: { at: 100, perk: FreeGold(10000) }, 2: { at: 200, perk: MagicBoost('red', 0.5) }, 3: { at: 400, perk: MagicBoost('red', 1) }}});
add_trick({name: 'Mr Chompy', test: ComboSequence ({seq: [6,82]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(11000) }, 2: { at: 200, perk: MagicBoost('purple', 0.5) }, 3: { at: 400, perk: MagicBoost('purple', 1) }}});
add_trick({name: 'Cuddleslime', test: ComboSequence ({seq: [99,9]}), rewards: [SalaryBonus(8)], levels: {1: { at: 100, perk: FreeGold(12000) }, 2: { at: 200, perk: MagicBoost('green', 0.5) }, 3: { at: 400, perk: MagicBoost('green', 1) }}});
add_trick({name: 'What happened?', test: ComboSequence ({seq: [1,7,30]}), rewards: [SalaryBonus(10)], levels: {1: { at: 100, perk: FreeGold(13000) }, 2: { at: 200, perk: MagicBoost('pink', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'Do not listen to them', test: ComboSequence ({seq: [93,9]}), rewards: [SalaryBonus(8)], levels: {1: { at: 100, perk: FreeGold(14000) }, 2: { at: 200, perk: MagicBoost('blue', 0.5) }, 3: { at: 400, perk: MagicBoost('blue', 1) }}});
add_trick({name: 'Fuzzy and creative', test: ComboSequence ({seq: [10,48]}), rewards: [SalaryBonus(6)], levels: {1: { at: 100, perk: FreeGold(15000) }, 2: { at: 200, perk: MagicBoost('yellow', 0.5) }, 3: { at: 400, perk: MagicBoost('yellow', 1) }}});
add_trick({name: 'You are a great feat', test: ComboSequence ({seq: [4,26]}), rewards: [SalaryBonus(4)], levels: {1: { at: 100, perk: FreeGold(16000) }, 2: { at: 200, perk: MagicBoost('red', 0.5) }, 3: { at: 400, perk: MagicBoost('red', 1) }}});
add_trick({name: 'Excellent pianist', test: ComboSequence ({seq: [50,31]}), rewards: [SalaryBonus(6)], levels: {1: { at: 100, perk: FreeGold(17000) }, 2: { at: 200, perk: MagicBoost('purple', 0.5) }, 3: { at: 400, perk: MagicBoost('purple', 1) }}});
add_trick({name: 'British', test: ComboSequence ({seq: [3,2,88]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(18000) }, 2: { at: 200, perk: MagicBoost('green', 0.5) }, 3: { at: 400, perk: MagicBoost('green', 1) }}});
add_trick({name: 'Silver bullets required', test: ComboSequence ({seq: [1,9,83]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(19000) }, 2: { at: 200, perk: MagicBoost('pink', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'Level seven', test: ComboSequence ({seq: [3,7,90]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(20000) }, 2: { at: 200, perk: MagicBoost('blue', 0.5) }, 3: { at: 400, perk: MagicBoost('green', 1) }}});
add_trick({name: 'Dialup', test: ComboSequence ({seq: [1,4,98]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(21000) }, 2: { at: 200, perk: MagicBoost('yellow', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'Look at dado Etsy!', test: ComboSequence ({seq: [32,51]}), rewards: [SalaryBonus(6)], levels: {1: { at: 100, perk: FreeGold(22000) }, 2: { at: 200, perk: MagicBoost('red', 0.5) }, 3: { at: 400, perk: MagicBoost('blue', 1) }}});
add_trick({name: 'Longboi', test: ComboSequence ({seq: [119,3]}), rewards: [SalaryBonus(10)], levels: {1: { at: 100, perk: FreeGold(23000) }, 2: { at: 200, perk: MagicBoost('purple', 0.5) }, 3: { at: 400, perk: MagicBoost('yellow', 1) }}});
add_trick({name: 'Cry everytime', test: ComboSequence ({seq: [1,7,62]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(24000) }, 2: { at: 200, perk: MagicBoost('green', 0.5) }, 3: { at: 400, perk: MagicBoost('green', 1) }}});
add_trick({name: 'Something tub', test: ComboSequence ({seq: [1,2,99]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(25000) }, 2: { at: 200, perk: MagicBoost('pink', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'Saint Nick?', test: ComboSequence ({seq: [4,6,66]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(26000) }, 2: { at: 200, perk: MagicBoost('blue', 0.5) }, 3: { at: 400, perk: MagicBoost('blue', 1) }}});


//Big Number Tricks

add_trick({name: 'Biggun', test: ComboSequence ({seq: [100]}), rewards: [SalaryBonus(30)], levels: {1: { at: 200, perk: FreeMultiplier(25) }, 2: { at: 500, perk: FreeGold(1000) }, 3: { at: 750, perk: FreeDie() }}});
add_trick({name: 'Biggerun', test: ComboSequence ({seq: [125]}), rewards: [SalaryBonus(80)], levels: {1: { at: 200, perk: FreeMultiplier(100) }, 2: { at: 400, perk: FreeGold(1000) }, 3: { at: 600, perk: FreeDie() }}});
add_trick({name: 'Biggestun', test: ComboSequence ({seq: [150]}), rewards: [SalaryBonus(100)], levels: {1: { at: 100, perk: FreeMultiplier(200) }, 2: { at: 250, perk: FreeGold(1000) }, 3: { at: 400, perk: FreeDie() }}});
add_trick({name: '???un', test: ComboSequence ({seq: [200]}), rewards: [SalaryBonus(150)], levels: {1: { at: 80, perk: FreeMultiplier(500) }, 2: { at: 150, perk: FreeGold(1000) }, 3: { at: 250, perk: FreeDie() }}});
add_trick({name: 'Just take the money', test: ComboSequence ({seq: [500]}), rewards: [SalaryBonus(1000)], levels: {1: { at: 80, perk: FreeMultiplier(10000) }, 2: { at: 150, perk: FreeGold(100000000) }, 3: { at: 250, perk: FreeDie() }}});
add_trick({name: 'Big Dubs', test: ComboSequence ({seq: [100,100]}), rewards: [SalaryBonus(30)], levels: {1: { at: 200, perk: FreeMultiplier(100) }, 2: { at: 400, perk: FreeGold(1000) }, 3: { at: 650, perk: FreeDie() }}});
add_trick({name: 'Gigatonne', test: ComboSequence ({seq: [100,100,100,100,100]}), rewards: [SalaryBonus(64)], levels: {1: { at: 15, perk: FreeMultiplier(200) }, 2: { at: 30, perk: FreeGold(1000) }, 3: { at: 75, perk: FreeDie() }}});
add_trick({name: 'Teratonne', test: ComboSequence ({seq: [100,100,100,100,100,100,100,100]}), rewards: [SalaryBonus(128)], levels: {1: { at: 5, perk: FreeMultiplier(500) }, 2: { at: 10, perk: FreeGold(1000) }, 3: { at: 20, perk: FreeDie() }}});
add_trick({name: 'Exatonne', test: ComboSequence ({seq: [100,100,100,100,100,100,100,100,100,100]}), rewards: [SalaryBonus(192)], levels: {1: { at: 5, perk: FreeMultiplier(1000) }, 2: { at: 10, perk: FreeGold(1000) }, 3: { at: 20, perk: FreeDie() }}});

//Misc new tricks

add_trick({name: 'e', test: ComboSequence ({seq: [62,1]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(2000) }, 2: { at: 200, perk: MagicBoost('pink', 0.5) }, 3: { at: 400, perk: MagicBoost('pink', 1) }}});
add_trick({name: 'e boring', test: ComboSequence ({seq: [92,6]}), rewards: [SalaryBonus(25)], levels: {1: { at: 100, perk: FreeGold(3000) }, 2: { at: 200, perk: MagicBoost('blue', 0.5) }, 3: { at: 400, perk: MagicBoost('blue', 1) }}});
add_trick({name: 'nice', test: ComboSequence ({seq: [6,94,20]}), rewards: [SalaryBonus(16)], levels: {1: { at: 100, perk: FreeGold(4000) }, 2: { at: 200, perk: MagicBoost('yellow', 0.5) }, 3: { at: 400, perk: MagicBoost('yellow', 1) }}});
add_trick({name: 'Bonhonogaloogs!', test: ComboSequence ({seq: [80,8,1,35]}), rewards: [SalaryBonus(32)], levels: {1: { at: 100, perk: FreeGold(5000) }, 2: { at: 200, perk: MagicBoost('red', 0.5) }, 3: { at: 400, perk: MagicBoost('red', 1) }}});

//Longer Straights

add_trick({name: 'DO NOT stop ;)', test: ComboStraight({in_a_row: 8 }), rewards: [SalaryBonus(8)], levels: {1: { at: 200, perk: FreeMultiplier(2.5) }, 2: { at: 500, perk: FreePower() }, 3: { at: 1000, perk: FreeGold(1000) }}});
add_trick({name: 'Keep going!', test: ComboStraight({in_a_row: 10 }), rewards: [SalaryBonus(20)], levels: {1: { at: 100, perk: FreeMultiplier(5) }, 2: { at: 250, perk: FreePower() }, 3: { at: 750, perk: FreeGold(1000) }}});
add_trick({name: 'Rollin down the Eyre', test: ComboStraight({in_a_row: 12 }), rewards: [SalaryBonus(32)], levels: {1: { at: 25, perk: FreeMultiplier(5) }, 2: { at: 100, perk: FreePower() }, 3: { at: 250, perk: FreeDie() }}});
add_trick({name: 'Dubai 85', test: ComboStraight({in_a_row: 15 }), rewards: [SalaryBonus(64)], levels: {1: { at: 10, perk: FreeMultiplier(7.5) }, 2: { at: 20, perk: FreePower() }, 3: { at: 30, perk: FreeDie() }}});
add_trick({name: 'Direct ascent to mars', test: ComboStraight({in_a_row: 18 }), rewards: [SalaryBonus(80)], levels: {1: { at: 10, perk: FreeMultiplier(7.5) }, 2: { at: 20, perk: FreeGold(10000) }, 3: { at: 30, perk: FreeDie() }}});
add_trick({name: 'Interstellar shot', test: ComboStraight({in_a_row: 22 }), rewards: [SalaryBonus(120)], levels: {1: { at: 5, perk: FreeMultiplier(10) }, 2: { at: 10, perk: FreeDie() }, 3: { at: 20, perk: FreeDie() }}});
add_trick({name: 'Bye :)', test: ComboStraight({in_a_row: 28 }), rewards: [SalaryBonus(200)], levels: {1: { at: 5, perk: FreeMultiplier(10) }, 2: { at: 10, perk: FreeDie() }, 3: { at: 20, perk: FreeDie() }}});








