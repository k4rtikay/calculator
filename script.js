const display=document.querySelector('.display');


let previousOperand='';
let currentOperand='';
let op='';
let total ='';

function show(str){
    display.textContent=str;
}

const equals =document.querySelector('.equals');
const ac = document.querySelector('.ac');
const clear = document.querySelector('.clr');

numarr = [...document.querySelectorAll('.number')];

numarr.forEach(number=>{
    number.addEventListener('click',()=>{
        if(total!=''){
            show('');
            total='';
        }
        let val = display.textContent.concat(number.value);
    show(val);
    })
})

oparr = [...document.querySelectorAll('.operator')];

oparr.forEach(element => {
    element.addEventListener('click',()=>{
        let content = parseFloat(display.textContent);
        if(content==''){
            return;
        }
        else if(currentOperand==''){
            currentOperand=content;
            op=element.value;
            show('');
        }
        else if(currentOperand!=''){
            if(typeof content !=="number"){
                return;
            }
            previousOperand=currentOperand;
            currentOperand=content;
            total = operate(previousOperand,currentOperand,op);
            show(total);
            currentOperand=total;
            op=element.value;
        }
    });    
});


equals.addEventListener('click',()=>{
    if(currentOperand==''){
        show('ERROR!');
        return;
    }
    previousOperand=currentOperand;
    currentOperand=display.textContent;
    total = operate(previousOperand,currentOperand,op);
    show(total);
    previousOperand='';
    currentOperand='';
    total='';
    op='';
})

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click',()=>{
    if(display.textContent.includes('.')) return;
    else{
        let val = display.textContent.concat(decimal.value);
        show(val);
    }
})

ac.addEventListener('click',()=>{
    display.textContent='';
    previousOperand='';
    currentOperand='';
    total='';
    op='';
})

clear.addEventListener('click',()=>{
    let str = display.textContent;
    display.textContent=str.slice(0,-1);
})

function operate(num1,num2,operator){
    let final;
    if(operator=='+'){
        final = parseFloat(num1) + parseFloat(num2);
        return (final);
    }else if(operator=='-'){
        final = num1-num2;
        if(final%1!==0){
            final=final.toFixed(4);
        }
        return (final);
    }else if(operator=='x'){
        final = num1*num2;
        return (final);
    }else if(operator=='/'){
        if(num2==0){
            return 'INVALID!';
        }else{
            final = num1/num2;
            final = final.toFixed(5);

            return (final);
        }
    }else if(operator=='%'){
        if(num2==0){
            return 'INVALID!';
        }else{
            final = num1%num2;
            final=Math.round((final + Number.EPSILON) * 100) / 100;
            return (final);
        }
    }
}


