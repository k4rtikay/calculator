const display=document.querySelector('.display');


console.log(display.textContent);

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function modulo(a,b){
    return a%b;
}

let num1=0;
let num2=0;
let op='';
let runningTotal=0;

function show(str){
    display.textContent=str;
}


const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const equals =document.querySelector('.equals');
const ac = document.querySelector('.ac');
const clear = document.querySelector('.clr');

seven.addEventListener('click',()=>{
    console.log(seven.value);
    let val = display.textContent.concat(seven.value);
    show(val);
})

eight.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(eight.value);
    show(val);
})

nine.addEventListener('click',()=>{
    console.log(nine.value);
    let val = display.textContent.concat(nine.value);
    show(val);
})

four.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(four.value);
    show(val);
})

five.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(five.value);
    show(val);
})

six.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(six.value);
    show(val);
})

one.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(one.value);
    show(val);
})

two.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(two.value);
    show(val);
})

three.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(three.value);
    show(val);
})

zero.addEventListener('click',()=>{
    console.log(eight.value);
    let val = display.textContent.concat(zero.value);
    show(val);
})

oparr = [...document.querySelectorAll('.operator')];

oparr.forEach(element => {
    element.addEventListener('click',()=>{
        let content = parseFloat(display.textContent);
        op = element.value;
        console.log(content);
        if(content!=NaN){
            num1=content;
        }else{
            display.textContent='INVALID INPUT'
        }
        display.textContent='';
    });    
});

equals.addEventListener('click',()=>{
    let content = parseInt(display.textContent);
    num2 = content;
    console.log(num1+' '+num2);
    let result = operate(num1,num2,op);
    if(result!=undefined){
        display.textContent=result;
    }else{
        display.textContent='Error!';
    }
    runningTotal=0;
    console.log(result);
})

ac.addEventListener('click',()=>{
    display.textContent='';
    num1=0;
    num2=0;
    runningTotal=0;
    op='';
})

clear.addEventListener('click',()=>{
    let str = display.textContent;
    display.textContent=str.slice(0,-1);
})

function operate(num1,num2,operator){
    if(operator=='+') return add(num1,num2);
    else if(operator=='-') return subtract(num1,num2);
    else if(operator=='x') return multiply(num1,num2);
    else if(operator=='/') return divide(num1,num2);
    else if(operator=='%') return modulo(num1,num2);
}


