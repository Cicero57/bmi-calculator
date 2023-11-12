
let timesClicked = 0;

function check() {
    timesClicked++;

    if (timesClicked>1) {
        //run second function
        reload()
    } else {
        //run first function
        bmi()

    }
}




let resultMessage = document.getElementById("result-el")
function bmi() {
    let weightEl = document.getElementById("weight-el").value
    let heightEl = document.getElementById("height-el").value
  let Bmi = weightEl/(heightEl * heightEl)
 if (Bmi < 18.5) {
     resultMessage.innerHTML += "Your Bmi result is " + Bmi.toFixed(1) + ", this means you are underweight!"
 }else if (Bmi < 25 ) {
     resultMessage.innerHTML += "Your Bmi result is " + Bmi.toFixed(1) + ", this means you have healthy weight."
 }else if (Bmi < 30) {
     resultMessage.innerHTML += "Your Bmi result is " + Bmi.toFixed(1) + ", this means you are overweight!"
 }else if(Bmi < 100) {
     resultMessage.innerHTML += "Your Bmi result is " + Bmi.toFixed(1) + ", you are dangeruosly overweight. You need to hit the gym!"
 }else{
    validate ()
 }

// bmi = weight/(height * height) 
}

function reload() {
    document.location.reload()
}

function validate () {
   resultMessage.innerHTML += "Please provide valid weight in kg and height in meters in the input field above!"
    }
