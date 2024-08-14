const cardHolderName = document.getElementById('cardholderName')
const name = document.getElementById('name')

const cardNumber = document.getElementById('cardNumber')
const number = document.getElementById('number')

const month = document.getElementById('month')
const expirationMonth = document.getElementById('expirationMonth')

const year = document.getElementById('year')
const expirationYear = document.getElementById('expirationYear')

const ccvNumber = document.getElementById('ccvNumber')
const ccvBack = document.getElementById('ccvBack')

const confirm = document.getElementById('confirm')
const cardInfo = document.getElementById('cardInformation')

const formInformation = document.getElementById('formInformation')

cardHolderName.addEventListener('change', (e) => {
    const value = e.target.value;
    //console.log(value)
    name.innerText = value
})

cardNumber.addEventListener('change', (e) => {
    const value = e.target.value;
    //console.log(value)
    number.innerText = value
})

month.addEventListener('change', (e) => {
    const value = e.target.value;
    //console.log(value)
    expirationMonth.innerText = value
})

year.addEventListener('change', (e) => {
    const value = e.target.value;
    //console.log(value)
    expirationYear.innerText = value
})

ccvNumber.addEventListener('change', (e) => {
    const value = e.target.value;
    //console.log(value)
    ccvBack.innerText = value
})

confirm.addEventListener('click', () => {
   // console.log("clicked")
   if(cardHolderName.value === ''){ 
        cardHolderName.style.borderColor = 'red'
   }
   else if(cardNumber.value === ''){
        cardNumber.style.borderColor = 'red'
   } 
   else if(month.value === ''){
        month.style.borderColor = 'red'
   }
   else if(year.value === ''){
    year.style.borderColor = 'red'
    }
    else if(ccvNumber.value === ''){
        ccvNumber.style.borderColor = 'red'
   }
   else{
    formInformation.innerHTML = `
    
    <div class="thankYou">
      <img src="images/icon-complete.png" alt="" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
    </div> 
    <button id="confirm" type="submit">Continue</button>

`
        cardInfo.appendChild(formInformation)
   }
    

})