let posX, posY;
//const array1, array2;

var a1 = [];
var a2 = [];

// function init() {
//     boardUser();
//     boardAttack();
//     // createArray();
//     console.log(a1, a2);
//     drawBoard();
//     check();
// }

function init() {
    for (let i = 0; i < playField.length; i++) {
        for (let j = 0; j < playField.length; j++) {
            let box = document.createElement("div");
            box.classList = "box";
            box.column = i;
            box.row = j;
            document.querySelector(".row").appendChild(box);
        }
        let box = document.createElement("break");
        document.querySelector(".row").appendChild(box);
    }
}
init();

function createArray() {
    for (var i = 1; i <= 11; i++) {
        for (var j = 1; j <= 11; j++) {
            a1[i][j] = [i, j];
            a2[i][j] = [i, j];
        }
    }
}

function boardUser() {

    const board = document.getElementsByClassName('table');

    var table = document.createElement("array1");
    for (var i = 0; i <= 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j <= 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    td.addEventListener('click', function onClick() {
        board.style.backgroundColor = 'salmon';
    });
}

function boardAttack() {
    var board = document.getElementsByClassName("table");
    var table = document.createElement("array2");
    for (var i = 0; i <= 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j <= 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    for (var o = 1; o <= 5; o++) {
        var posX = getRandom();
        var posY = getRandom();
    }
}

function getRandom() {
    return Math.random(1, 10);
}

var sols = [
    [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1]
    ],
    [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0]
    ],
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]
]

var playField = [
    [(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (1, 9), (1, 10)],
    [(2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 8), (2, 9), (2, 10)],
    [(3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10)],
    [(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 8), (4, 9), (4, 10)],
    [(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7), (5, 8), (5, 9), (5, 10)],
    [(6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6), (6, 7), (6, 8), (6, 9), (6, 10)],
    [(7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6), (7, 7), (7, 8), (7, 9), (7, 10)],
    [(8, 1), (8, 2), (8, 3), (8, 4), (8, 5), (8, 6), (8, 7), (8, 8), (8, 9), (8, 10)],
    [(9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6), (9, 7), (9, 8), (9, 9), (9, 10)],
    [(10, 1), (10, 2), (10, 3), (10, 4), (10, 5), (10, 6), (10, 7), (10, 8), (10, 9), (10, 10)],
];

var change = 0;

function drawBoard() {
    for (let i = 0; i < playField.length; i++) {
        for (let j = 0; j < playField.length; j++) {
            let box = document.createElement('div');
            box.classList = 'box';
            box.column = i;
            box.row = j;
            document.querySelector('.row').appendChild(box);
        }
        let box = document.createElement('break');
        document.querySelector('.row').appendChild(box);
    }
}

function check() {
    let x1Count = 0;
    let x2Count = 0;
    for (let i = 0; i < sols.length; i++) {
        for (let j = 0; j < sols[i].length; j++) {
            for (let k = 0; k < sols[j].length; k++) {
                if (sols[i][j][k] == 1 && playField[j][k] == 1) {
                    x1Count++;
                    if (x1Count == 3) {
                        x1Count = 0;
                        alert('cross won!');
                        return 0;
                    }
                }
                if (sols[i][j][k] == 1 && playField[j][k] == 2) {
                    x2Count++;
                    if (x2Count == 3) {
                        x2Count = 0;
                        alert('circle won!');
                        return 0;
                    }
                }
            }
        }
        x1Count = 0;
        x2Count = 0;
    }
}
console.log(playField);