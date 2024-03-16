var number = document.getElementsByTagName('b')[0];
var error = document.getElementById('div3');
var buttonClear = document.getElementById('button3');

buttonClear.style.display = 'none';

function increment(){
    number.innerHTML++;
    error.innerHTML = '';
    if(number.innerHTML > 0){
        buttonClear.style.display = 'inline-block';
    }
}

function decrement(){
    if(number.innerText > 0){
        number.innerHTML--;
    } else if(number.innerHTML == 0){
        error.innerHTML = 'Error: Cannot go below 0';
        buttonClear.style.display = 'none';
    }
}

buttonClear.onclick = function clear(){
    number.innerText = 0;
    error.innerHTML = '';
    buttonClear.style.display = 'none';
};