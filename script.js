let name = document.getElementById("bride_name").value;
let love_letter = document.getElementById("letter").value;
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age");


calculate = () => {
  let price = Number(document.getElementById("first_bid").value);
  price = getCheckboxValuesReduce(skills, price);
  price = getRadioValue(age, price);
  price = getCheckboxValuesForLoop(reputation, price);
    if (document.getElementById("bride_name").value && price == ""){
        alert ("Please, fill in name and first bid!");
    }
    else{
    var num1 = Number(document.getElementById("education").value);
    price = price * num1;

    var num2 = Number(document.getElementById("networth").value);
    price = price * num2;


    const getCheckboxValuesReduce = (document.getElementsByClassName("skills"), price) =>
     {
      let list = Array.from(document.getElementsByClassName("skills"))
      let price = list.reduce((price, item) => {
        if (item.checked) {
            return price + Number(item.value)  
    }, price)
    return price;
}
const getRadioValue = (document.getElementsByName("age"), price) => {  
  (document.getElementsByName("age").forEach(item => {
      if (item.checked) {
          price = price * Number(item.value)
      }
  })
  return price;
}

const getCheckboxValuesForLoop = (document.getElementsByClassName('reputation'), price) => { 
  for (let i=0; i < document.getElementsByClassName('reputation').length; i++) {  
      if (document.getElementsByClassName('reputation')[i].checked) {
          price = price * Number(document.getElementsByClassName('reputation')[i].value)
      }
  }
  return price;
}

localStorage.setItem("price",price);
return false;
}}
document.getElementById("myBtn").addEventListener("click",
function() {
  document.getElementById("result").innerHTML = `The price for ${document.getElementById("bride_name").value} 
  is ${price}$. Your love letter is "${love_letter}"`;
}
);
