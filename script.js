

const billInput = document.querySelector('#bill-value');
const peopleInput = document.querySelector('#number-of-people');
const resetBtn = document.querySelector('.reset');
const tipAmount = document.querySelector('.tip-value');
const totalPerson = document.querySelector('.person-value');
const tipPercent = document.querySelectorAll('.value');
const customTip = document.querySelector('#tip-custom');
const error = document.querySelector('.error');
const errorBill = document.querySelector('.bill-error');
const tipBlock = document.querySelector('.tip-container__error');

let percent = 0.15;

let billCond = false;
let peopleCond = false;
let tipAmountPerson = 0;
let totalAmountPerson = 0;



disableDiv();


resetBtn.addEventListener('click',() => {
    billInput.value = '';
    peopleInput.value = '';
    tipAmount.innerHTML = '$0';
    totalPerson.innerHTML= '$0';
    customTip.value = '';

})




function zeroCheck() {

    
    let number = Number(peopleInput.value);
    if(peopleInput.value == '')
    {
        error.style.visibility = 'hidden';
        disableDiv();
        peopleCond = false;
    }
    else if(number <= 0  || (Number.isInteger(number) == false))
    {

        
        error.style.visibility = 'visible';
        disableDiv();
        peopleCond = false;
    }
    else
    {
        error.style.visibility = 'hidden';
        
        peopleCond = true;
        enableDiv();
    }
}

function custopTipValue() {




    tipPercent.forEach( tip2 => {
        tip2.classList.remove('active');
    })
    let customTipNumber = customTip.value;
    percent = parseFloat(customTipNumber)/100;
    totalAmountPerson = (parseFloat(billPerPerson()) + parseFloat(tipAmountPersonValue())).toFixed(2);
    tipAmount.innerHTML = '$' +tipAmountPersonValue();
    totalPerson.innerHTML = '$' + totalAmountPerson;



}


function billCheck() {
    if(billInput.value.includes(','))
    {
        billInput.value = billInput.value.replace(',','.');
    }

    if(billInput.value == '')
    {
        errorBill.style.visibility = 'hidden';
        disableDiv();
        billCond = false;
    }
    
    else if(isNaN(billInput.value) || (billInput.value <=0 ) )
    {
        errorBill.style.visibility = 'visible';
        disableDiv();
        billCond = false;

    }
    else
    {
        errorBill.style.visibility = 'hidden';
        
        billCond = true;
        enableDiv();
    }
}


const tipAmountPersonValue = () =>{

    let billValue = billInput.value;
    let numberpeopleValue = peopleInput.value;

    tipAmountPerson = ((billValue / numberpeopleValue) * percent).toFixed(2);
    

    return tipAmountPerson;


}


const billPerPerson = () => {

    let billValue = billInput.value;
    let numberpeopleValue = peopleInput.value;

    return (billValue / numberpeopleValue).toFixed(2);



}



billInput.addEventListener('input', billCheck );


peopleInput.addEventListener('input',zeroCheck);


customTip.addEventListener('input',custopTipValue);











tipPercent.forEach( tip => {


    
    tip.addEventListener('click',(e) => {

         tipPercent.forEach( tip2 => {
             tip2.classList.remove('active');
         })
        

         customTip.value = '';
        e.target.classList.add('active');
         percent = parseFloat(e.target.innerHTML)/100;
         totalAmountPerson = (parseFloat(billPerPerson()) + parseFloat(tipAmountPersonValue())).toFixed(2);
         tipAmount.innerHTML = '$' +tipAmountPersonValue();
         totalPerson.innerHTML = '$' + totalAmountPerson;
        
        
    })
})


function disableDiv(){

    
    tipBlock.style.visibility = 'visible';
}

function enableDiv(){


    if((billCond == true) && (peopleCond == true))
    {
        
        tipBlock.style.visibility = 'hidden';
        
    }
    
}


