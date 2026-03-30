let display = document.getElementById("display");

function add(value){
  if(display.value.length < 20){
    display.value += value;
  }
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error";
  }
}

function backspace(){
  display.value = display.value.slice(0,-1);
}
