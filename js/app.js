// Define variables here
let tipButtons = document.getElementsByClassName("tip-amount");
let billAmount = document.getElementById("bill");
let numPeople = document.getElementById("people");
let tipPerPersonDisplay = document.getElementById("tip-per-person");
let totalPerPersonDisplay = document.getElementById("per-person-cost");
let errorMessage = document.getElementById("error");
let tip;
let tipPerPerson;
let customTip = document.getElementById("custom-tip");

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener("click", setTip);
}

function setTip() {
    let tipButton = this;

    if(!isNaN(customTip.value))
    {
        tip = customTip.value / 100;

        for(let i = 0; i < tipButtons.length; i++)
        {
            tipButtons[i].classList.remove("active");
        }

        calcGratuity();

    }
    for (let i = 0; i < tipButtons.length; i++) 
    {
      if(tipButton.value === tipButtons[i].value)
      {
          tipButton.classList.add("active");
          tip = tipButton.value / 100;
          calcGratuity();
      }
      else
      {
          tipButtons[i].classList.remove("active");
      }
    }
  }

billAmount.addEventListener("input",calcGratuity);
numPeople.addEventListener("input",calcGratuity);
customTip.addEventListener("input",setTip);
function calcTipPerPerson()
{
    tipPerPerson;
    let calcTip;
    calcTip = billAmount.value * tip / numPeople.value;
    if(isNaN(calcTip) || calcTip == Infinity)
        {
            tipPerPerson = 0.00;
        }
        else
        {
            tipPerPerson = calcTip;
        }
    
    return tipPerPerson.toFixed(2);
}

function calcTotalPerPerson()
{
    let totalPerPerson;
    let calcTotal;
    

    calcTotal = (billAmount.value / numPeople.value) + tipPerPerson;

    if(isNaN(calcTotal) || calcTotal == Infinity)
    {
        totalPerPerson = 0.00;
    }
    else
    {
        totalPerPerson = calcTotal;
    }
    console.log(totalPerPerson);
    return totalPerPerson.toFixed(2);
}


function calcGratuity()
{
    if(numPeople.value == 0)
    {
        errorMessage.innerHTML = "Can't be 0";
    }
    else
    {
        errorMessage.innerHTML = " ";
    }
    tipPerPersonDisplay.innerHTML = calcTipPerPerson();
    totalPerPersonDisplay.innerHTML = calcTotalPerPerson();
}

function reset()
{
    window.location.reload();
}




