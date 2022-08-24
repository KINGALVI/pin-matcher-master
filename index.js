function GeneratePin() {
  const Random = Math.round(Math.random() * 10000)
  return Random;
}

function Getpin() {
  const pin = GeneratePin();
  const pinString = pin + '';
  if (pinString.length == 4) {
    return pin;
  }
  else {
    return ('pin not a digit four');
  }
}

document.getElementById('generate-pin').addEventListener('click',function(){
  const pin=Getpin();
  const displaypin=document.getElementById('show-pin');
  displaypin.value=pin;
})