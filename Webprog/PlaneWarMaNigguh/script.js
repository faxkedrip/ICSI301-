data = {
    1: {
        6: "SH", 8: "SH", 13: "C", 16: "SH", 17: "SH", 18: "SH", 19: "C", 22: "SH", 23: "SH", 24: "SH", 26: "SH", 28: "SH", 33: "SH", 42: "SH", 43: "SH", 44: "SH", 56: "C", 65: "SH", 66: "SH", 67: "SH", 76: "SH", 85: "SH", 86: "SH", 87: "SH",
    },
    2: {
        0: "SH", 2: "SH", 5: "SH", 7: "SH", 10: "SH", 11: "SH", 12: "SH", 13: "C", 15: "SH", 16: "SH", 17: "SH", 18: "C", 20: "SH", 22: "SH", 25: "SH", 27: "SH", 43: "SH", 44: "SH", 45: "SH", 54: "SH", 63: "SH", 64: "SH", 65: "SH", 74: "C",
    },
    3: {
        22: "SH", 23: "SH", 24: "SH", 26: "SH", 27: "SH", 28: "SH", 33: "SH", 37: "SH", 42: "SH", 43: "SH", 44: "SH", 46: "SH", 47: "SH", 48: "SH", 53: "C", 57: "C", 64: "SH", 65: "SH", 66: "SH", 75: "SH", 84: "SH", 85: "SH", 86: "SH", 95: "C",
    },
    4: {
        0: "SH", 2: "SH", 5: "SH", 7: "SH", 10: "SH", 11: "SH", 12: "SH", 13: "C", 15: "SH", 16: "SH", 17: "SH", 18: "C", 20: "SH", 22: "SH", 25: "SH", 27: "SH", 40: "SH", 42: "SH", 50: "SH", 51: "SH", 52: "SH", 53: "C", 60: "SH", 62: "SH",
    },
    5: {
        37: "SH", 39: "SH", 46: "C", 47: "SH", 48: "SH", 49: "SH", 52: "SH", 54: "SH", 57: "SH", 59: "SH", 62: "SH", 63: "SH", 64: "SH", 65: "C", 72: "SH", 74: "SH", 77: "SH", 79: "SH", 86: "C", 87: "SH", 88: "SH", 89: "SH", 97: "SH", 99: "SH",
    },
}

let totalPlane = 0;
let array = [], size = 0, array2 = [], size2 = 0;
let humanPoint = 0, computerPoint = 0;
let myTurn = false;

const winner = (info) => {
    e = document.getElementById("boards");
    e.remove();
    e1 = document.getElementById("playerOne");
    e1.remove();
    e2 = document.getElementById('playerTwo');
    e2.remove();
    if(info == "You"){
        const winnertext = document.createElement("h2");
        winnertext.setAttribute("class", 'winnerText');
        const content = document.createTextNode(`Well played dog haha`);
        winnertext.appendChild(content);
        const winnerDiv = document.createElement('div');
        winnerDiv.setAttribute('id', 'winner');
        winnerDiv.append(winnertext);
        document.getElementById('players').append(winnerDiv);
    }else{
        const winnertext = document.createElement("h2");
        winnertext.setAttribute("class", 'winnerText');
        const content = document.createTextNode(`Better luck next time.`);
        winnertext.appendChild(content);
        const winnerDiv = document.createElement('div');
        winnerDiv.setAttribute('id', 'winner');
        winnerDiv.append(winnertext);
        document.getElementById('players').append(winnerDiv);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const reset = () => {
    e = document.getElementById("title");
    e1 = document.getElementById("players");
    e2 = document.getElementById("boards");
    e3 = document.getElementById("buttons");
    e3.remove();
    e.remove();
    e1.remove();
    e2.remove();
    e3.remove();
    totalPlane = 0;
    array = [], size = 0, array2 = [], size2 = 0;
    humanPoint = 0, computerPoint = 0;
    myTurn = false;
    gameStart();
}

//hamgiin gadna start
const gameStart = () =>{
    totalPlane = 0;
    array = [], size = 0, array2 = [], size2 = 0;
    humanPoint = 0, computerPoint = 0;
    myTurn = false;
    createGame();
}
//dotor start
const start = () => {
    if(totalPlane == 3){
    createMap();
    computerAttack();
    }else{
        window.alert("First, please place your all planes and hit battle button. GL HF");
    }
}

const createMap = () => {
    let random = getRandomInt(5) + 1;
    for (let [key, events] of Object.entries(data)) {
        if (random == key) {
            for (let [key1, event] of Object.entries(events)) {
                document.querySelector(`.y${key1}`).setAttribute('data', event);
            }
        }
    }
}

const humanAttack = (index) => {
    if (myTurn == true) {
        myTurn = false;
        for (let i = 0; i < size2; i++) {
            if (index == array2[i]) {
                myTurn = true;
                return 0;
            }
        }
        array2[size2] = index;
        size2++;
        const node = document.querySelector(`.y${index}`);
        const text = node.getAttribute('data')
        node.append(text);
        if (node.getAttribute('data') == 'C') {
            humanPoint = humanPoint + 1;
            document.querySelector(`.y${index}`).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }
        if (node.getAttribute('data') == 'SH') {
            document.querySelector(`.y${index}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        }        
        if (node.getAttribute('data') == 'X') {
            document.querySelector(`.y${index}`).style.backgroundColor = "rgba(0,0,190, 0.5)";
        }
        computerAttack();
    }
}

const computerAttack = () => {
    console.log('Humanpoint => ' + humanPoint);

    console.log('Computerpoint => ' + computerPoint);
    if (humanPoint == 3) {
        winner('You');
        return 0;
    }
    if (computerPoint == 3) {
        winner('Computer');
        return 0;
    }
    if (myTurn == false) {
        myTurn = true;
        let x = getRandomInt(10);
        let y = getRandomInt(10);
        for (let i = 0; i < size; i++) {
            if (array[i] == x * 10 + y) {
                myTurn = false;
                computerAttack();
                return 0;
            }
        }
        array[size] = x * 10 + y;
        size++;

        const node = document.querySelector(`.x${x * 10 + y}`);
        node.append(node.getAttribute('data'));
        if (node.getAttribute('data') == 'C') {
            computerPoint++;
        }

    }
}

const removePlane = (index) => {
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("removePlane");
    document.querySelector(`.x${index}`).setAttribute('totalClicked', '0');
    console.log(index);
    if (
        document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index - 10}`).getAttribute('style') &&
        document.querySelector(`.x${index - 20}`).getAttribute('style') &&
        document.querySelector(`.x${index - 30}`).getAttribute('style') &&
        document.querySelector(`.x${index - 9}`).getAttribute('style') &&
        document.querySelector(`.x${index - 31}`).getAttribute('style') &&
        document.querySelector(`.x${index - 11}`).getAttribute('style') &&
        document.querySelector(`.x${index - 29}`).getAttribute('style')
    ) {
        document.querySelector(`.x${index}`).removeAttribute('style');
        document.querySelector(`.x${index - 10}`).removeAttribute('style');
        document.querySelector(`.x${index - 20}`).removeAttribute('style');
        document.querySelector(`.x${index - 30}`).removeAttribute('style');
        document.querySelector(`.x${index - 9}`).removeAttribute('style');
        document.querySelector(`.x${index - 31}`).removeAttribute('style');
        document.querySelector(`.x${index - 11}`).removeAttribute('style');
        document.querySelector(`.x${index - 29}`).removeAttribute('style');

        document.querySelector(`.x${index}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 10}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 20}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 30}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 31}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 29}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 11}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 9}`).setAttribute('data', 'X');
    }

    document.querySelector(`.x${index}`).setAttribute('totalClicked', '0');
    console.log(index + ' totalCLiked' + document.querySelector(`.x${index}`).getAttribute('totalClicked'));
    totalPlane--;
}

const topBuild = (index) => {
    console.log(`topBuild successful. TOTALCLICKED ${document.querySelector(`.x${index}`).getAttribute('totalClicked')}`)
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("x " + x + " y " + y);
    if (document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index - 1}`).getAttribute('style') &&
        document.querySelector(`.x${index - 2}`).getAttribute('style') &&
        document.querySelector(`.x${index - 3}`).getAttribute('style') &&
        document.querySelector(`.x${index + 9}`).getAttribute('style') &&
        document.querySelector(`.x${index + 7}`).getAttribute('style') &&
        document.querySelector(`.x${index - 11}`).getAttribute('style') &&
        document.querySelector(`.x${index - 13}`).getAttribute('style')
    ) {
        document.querySelector(`.x${index}`).removeAttribute('style');
        document.querySelector(`.x${index - 1}`).removeAttribute('style');
        document.querySelector(`.x${index - 2}`).removeAttribute('style');
        document.querySelector(`.x${index - 3}`).removeAttribute('style');
        document.querySelector(`.x${index + 9}`).removeAttribute('style');
        document.querySelector(`.x${index + 7}`).removeAttribute('style');
        document.querySelector(`.x${index - 11}`).removeAttribute('style');
        document.querySelector(`.x${index - 13}`).removeAttribute('style');

        document.querySelector(`.x${index}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 1}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 2}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 3}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 7}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 9}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 11}`).setAttribute('data', 'X');
        document.querySelector(`.x${index - 13}`).setAttribute('data', 'X');
    }


    if ((x - 3 > -1) && (y + 1 < 10) && (y - 1 > -1) &&
        document.querySelector(`.x${index}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 10}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 20}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 30}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 11}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 9}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 31}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 29}`).getAttribute('data') == 'X') {
        document.querySelector(`.x${index}`).setAttribute('data', 'C');
        document.querySelector(`.x${index - 10}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 20}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 30}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 11}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 9}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 31}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 29}`).setAttribute('data', 'SH');

        document.querySelector(`.x${index}`).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.querySelector(`.x${index - 10}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 20}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 30}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 11}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 9}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 31}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 29}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
    }
    else {
        removePlane(index);
        return 0;
    }
    document.querySelector(`.x${index}`).setAttribute('totalClicked', '4');
}
const leftBuild = (index) => {
    console.log(`leftBuild successful. TOTALCLICKED ${document.querySelector(`.x${index}`).getAttribute('totalClicked')}`)
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("x " + x + " y " + y);
    if (document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index + 10}`).getAttribute('style') &&
        document.querySelector(`.x${index + 20}`).getAttribute('style') &&
        document.querySelector(`.x${index + 30}`).getAttribute('style') &&
        document.querySelector(`.x${index + 31}`).getAttribute('style') &&
        document.querySelector(`.x${index + 29}`).getAttribute('style') &&
        document.querySelector(`.x${index + 11}`).getAttribute('style') &&
        document.querySelector(`.x${index + 9}`).getAttribute('style')
    ) {
        document.querySelector(`.x${index}`).removeAttribute('style');
        document.querySelector(`.x${index + 10}`).removeAttribute('style');
        document.querySelector(`.x${index + 20}`).removeAttribute('style');
        document.querySelector(`.x${index + 30}`).removeAttribute('style');
        document.querySelector(`.x${index + 31}`).removeAttribute('style');
        document.querySelector(`.x${index + 29}`).removeAttribute('style');
        document.querySelector(`.x${index + 11}`).removeAttribute('style');
        document.querySelector(`.x${index + 9}`).removeAttribute('style');

        document.querySelector(`.x${index}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 10}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 20}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 30}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 11}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 9}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 31}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 29}`).setAttribute('data', 'X');
        console.log("remove bottomBuild successful.");
    }

    if ((y - 3 > -1) && (x + 1 < 10) && (x - 1 > -1) &&
        document.querySelector(`.x${index}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 1}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 2}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 3}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 11}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index - 13}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 9}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 7}`).getAttribute('data') == 'X') {
        document.querySelector(`.x${index}`).setAttribute('data', 'C');
        document.querySelector(`.x${index - 1}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 2}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 3}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 11}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index - 13}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 9}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 7}`).setAttribute('data', 'SH');

        document.querySelector(`.x${index}`).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.querySelector(`.x${index - 1}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 2}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 3}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 11}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index - 13}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 7}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 9}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
    }
    else {
        topBuild(index);
        return 0;
    }
    document.querySelector(`.x${index}`).setAttribute('totalClicked', '3');
}
const bottomBuild = (index) => {
    console.log(`bottomBuild successful. TOTALCLICKED ${document.querySelector(`.x${index}`).getAttribute('totalClicked')}`)
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("x " + x + " y " + y);
    if (document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index}`).getAttribute('style') &&
        document.querySelector(`.x${index + 1}`).getAttribute('style') &&
        document.querySelector(`.x${index + 2}`).getAttribute('style') &&
        document.querySelector(`.x${index + 3}`).getAttribute('style') &&
        document.querySelector(`.x${(x - 1) * 10 + y + 1}`).getAttribute('style') &&
        document.querySelector(`.x${(x - 1) * 10 + y + 3}`).getAttribute('style') &&
        document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).getAttribute('style') &&
        document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).getAttribute('style')
    ) {
        document.querySelector(`.x${index}`).removeAttribute('style');
        document.querySelector(`.x${index + 1}`).removeAttribute('style');
        document.querySelector(`.x${index + 2}`).removeAttribute('style');
        document.querySelector(`.x${index + 3}`).removeAttribute('style');
        document.querySelector(`.x${(x - 1) * 10 + y + 1}`).removeAttribute('style');
        document.querySelector(`.x${(x - 1) * 10 + y + 3}`).removeAttribute('style');
        document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).removeAttribute('style');
        document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).removeAttribute('style');

        document.querySelector(`.x${index}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 1}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 2}`).setAttribute('data', 'X');
        document.querySelector(`.x${index + 3}`).setAttribute('data', 'X');
        document.querySelector(`.x${(x - 1) * 10 + y + 1}`).setAttribute('data', 'X');
        document.querySelector(`.x${(x - 1) * 10 + y + 3}`).setAttribute('data', 'X');
        document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).setAttribute('data', 'X');
        document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).setAttribute('data', 'X');
        console.log("remove rightBuild successful.");
    }
    
    if ((y - 1 > -1) && (x + 3 < 10) && (y + 1 < 10) &&
        document.querySelector(`.x${index}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 10}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 20}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 30}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 11}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 9}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 31}`).getAttribute('data') == 'X' &&
        document.querySelector(`.x${index + 29}`).getAttribute('data') == 'X') {
        document.querySelector(`.x${index}`).setAttribute('data', 'C');
        document.querySelector(`.x${index + 10}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 20}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 30}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 31}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 11}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 9}`).setAttribute('data', 'SH');
        document.querySelector(`.x${index + 29}`).setAttribute('data', 'SH');

        document.querySelector(`.x${index}`).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.querySelector(`.x${index + 10}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 20}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 30}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 31}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 29}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 11}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        document.querySelector(`.x${index + 9}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
    }
    else {
        leftBuild(index);
        return 0;
    }
    document.querySelector(`.x${index}`).setAttribute('totalClicked', '2');
}
const rightBuild = (index) => {
    console.log(`rightBuild successful. TOTALCLICKED ${document.querySelector(`.x${index}`).getAttribute('totalClicked')}`);
    totalPlane++;
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("x " + x + " y " + y);
    if (document.querySelector(`.x${index}`).getAttribute('data') == 'X')
        if ((x - 1 > -1) && (y + 3 < 10) && (x + 1 < 10) &&
            document.querySelector(`.x${index}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${index + 1}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${index + 2}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${index + 3}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${(x - 1) * 10 + y + 1}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${(x - 1) * 10 + y + 3}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).getAttribute('data') == 'X' &&
            document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).getAttribute('data') == 'X') {
            document.querySelector(`.x${index}`).setAttribute('data', 'C');
            document.querySelector(`.x${index + 1}`).setAttribute('data', 'SH');
            document.querySelector(`.x${index + 2}`).setAttribute('data', 'SH');
            document.querySelector(`.x${index + 3}`).setAttribute('data', 'SH');
            document.querySelector(`.x${(x - 1) * 10 + y + 1}`).setAttribute('data', 'SH');
            document.querySelector(`.x${(x - 1) * 10 + y + 3}`).setAttribute('data', 'SH');
            document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).setAttribute('data', 'SH');
            document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).setAttribute('data', 'SH');

            document.querySelector(`.x${index}`).style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            document.querySelector(`.x${index + 1}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${index + 2}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${index + 3}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${(x - 1) * 10 + y + 1}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${(x - 1) * 10 + y + 3}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${((x + 1)) * 10 + y + 1}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
            document.querySelector(`.x${((x + 1)) * 10 + y + 3}`).style.backgroundColor = "rgba(255, 255, 0, 0.6)";
        }
        else {
            bottomBuild(index);
            return 0;
        }
    document.querySelector(`.x${index}`).setAttribute('totalClicked', '1');
}
const buildPlane = (index) => {
    let totalClicked = document.querySelector(`.x${index}`).getAttribute('totalClicked');
    console.log("buildPlane " + index + " clicked " + totalClicked);
    console.log("total clicked => " + totalClicked);

    switch (totalClicked) {
        case '0': rightBuild(index);
            break;
        case '1':
            bottomBuild(index);
            break;
        case '2':
            leftBuild(index);
            break;
        case '3':
            topBuild(index);
            break;
        case '4':
            removePlane(index);
            break;
    }
}
const canBuild = (index) => {
    let x = Math.floor(index / 10);
    let y = index % 10;
    console.log("total plane => " + totalPlane + '  data => ' + document.querySelector(`.x${index}`).getAttribute('data'));
    if (totalPlane == 3 && document.querySelector(`.x${index}`).getAttribute('data') == 'X') {
        return alert("Three planes are already formed, if you want change remove some plane using head click.");
    }
    if (!((x == 0 && y == 0) || (x == 0 && y == 9) || (x == 9 && y == 0) || (x == 9 && y == 9)) && (document.querySelector(`.x${index}`).getAttribute('totalClicked') == '0')) {
        let count = 0;
        if (x + 1 < 10 && y + 3 < 10 && x - 1 > -1) {
            if (document.querySelector(`.x${index}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 1}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 2}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 3}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 9}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 7}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 11}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 13}`).getAttribute('data') == 'X') {
                count++;
            }
        }
        if (y + 1 < 10 && x + 3 < 10 && y - 1 > -1) {
            if (document.querySelector(`.x${index}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 10}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 20}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 30}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 9}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 11}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 29}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 31}`).getAttribute('data') == 'X') {
                count++;
            }
        }
        if (x + 1 < 10 && y - 3 > -1 && x - 1 > -1) {
            if (document.querySelector(`.x${index}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 1}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 2}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 3}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 11}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 13}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 7}`).getAttribute('data') == 'X' && document.querySelector(`.x${index + 9}`).getAttribute('data') == 'X') {
                count++;
            }
        }
        if (y + 1 < 10 && x - 3 > -1 && y - 1 > -1) {
            if (document.querySelector(`.x${index}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 10}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 20}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 30}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 9}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 11}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 29}`).getAttribute('data') == 'X' && document.querySelector(`.x${index - 31}`).getAttribute('data') == 'X') {
                count++;
            }
        }
        console.log('count ' + count);
        if (count == 0) {
            return alert("Cant put plane here! please choose another cell :)");
        }
    }
    if ((x == 0 && y == 0) || (x == 0 && y == 9) || (x == 9 && y == 0) || (x == 9 && y == 9)) {
        return alert("Cannot put plane here! please choose another cell :)")
    }
    else {
        buildPlane(index);
    }
}

const createGame = () => {
    const node = document.querySelector(".container");
    
    // Title
    const gameTitle = document.createElement("h1");
    gameTitle.setAttribute("id", "title");
    const titleText = document.createTextNode("FIGHT!");
    gameTitle.appendChild(titleText);
    node.append(gameTitle);
    
    
    // players Name
    const players = document.createElement('div');
    players.setAttribute("id", "players")
    const playerOne = document.createElement('h3');
    playerOne.setAttribute("id", "playerOne");
    const playerOneText = document.createTextNode("Player");
    playerOne.appendChild(playerOneText)
    const playerTwo = document.createElement('h3');
    playerTwo.setAttribute("id", "playerTwo");
    const playerTwoText = document.createTextNode("Computer");
    playerTwo.appendChild(playerTwoText);
    players.append(playerOne, playerTwo);
    node.append(players)


    // boards
    const boards = document.createElement("div");
    boards.setAttribute("id", "boards");
    const boardOne = document.createElement("div");
    boardOne.setAttribute("id", "boardOne");
    const boardTwo = document.createElement("div");
    boardTwo.setAttribute("id", "boardTwo");
    for (let i = 0; i < 10; i++) {
        for (let l = 0; l < 10; l++) {
            let divBox = document.createElement('div');
            divBox.setAttribute("onClick", `canBuild(${i * 10 + l})`)
            divBox.setAttribute("class", `x${i * 10 + l}`);
            divBox.setAttribute("totalClicked", '0')
            divBox.setAttribute("data", "X");
            boardOne.append(divBox);
        }
    }
    for (let i = 0; i < 10; i++) {
        for (let l = 0; l < 10; l++) {
            let divBox = document.createElement('div');
            divBox.setAttribute("class", `y${i * 10 + l}`);
            divBox.setAttribute("data", "X");
            divBox.setAttribute("onClick", `humanAttack(${i * 10 + l})`)
            boardTwo.append(divBox);
        }
    }
    boards.append(boardOne, boardTwo);
    node.append(boards);


    // reset and start button
    const buttons = document.createElement("div");
    buttons.setAttribute("id", "buttons");
    const startButton = document.createElement('div');
    startButton.setAttribute("onclick", `start()`)
    startButton.setAttribute("class", "button");
    const startButtonText = document.createTextNode("Battle");
    startButton.appendChild(startButtonText);
    const resetButton = document.createElement('div');
    resetButton.setAttribute('onclick', 'reset()')
    resetButton.setAttribute("class", "button");
    const resetButtonText = document.createTextNode("Restart");
    resetButton.appendChild(resetButtonText);
    buttons.append(startButton, resetButton);
    node.append(buttons);
}
// createGame();