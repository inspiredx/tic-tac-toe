const area = document.getElementById('area');
let move = 0; //Переменная определяет, чей ход
let result = '';
const contentWrapper = document.getElementById('content');
const resultWrapper = document.getElementById('result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', e => {
    if (e.target.innerHTML === '') {
        // move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        // e.target.style.color = 'rgb(85,107,47)';
        // e.target.style.backgroundColor = 'rgb(0,255,127)';
        // e.target.style.pointerEvents = 'none';
        if (move % 2 === 0) {
            e.target.innerHTML = 'X';
            e.target.style.color = 'rgb(105,105,105)';
            e.target.style.backgroundColor = 'rgb(250,128,114)';
            e.target.style.pointerEvents = 'none';

        } else {
            e.target.innerHTML = 'O';
            e.target.style.color = 'rgb(85,107,47)';
            e.target.style.backgroundColor = 'rgb(0,255,127)';
            e.target.style.pointerEvents = 'none';
        }
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'крестики';
            preResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'нолики';
            preResult(result);
        }
    }
}

const preResult = winner => {
    contentWrapper.innerHTML = `Победили ${winner} !`;
    resultWrapper.style.display = 'block';
}

let closeModal = () => {
    resultWrapper.style.display = 'none';
    location.reload()

}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);