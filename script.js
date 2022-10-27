let str = "";
var input = document.querySelector(".resultado");
input.disabled = true;
let buttons = document.querySelectorAll('.botao');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (calc)=>{
    if(calc.target.innerHTML == '='){
      if(str != ""){
      str = eval(str);
      document.querySelector('input').value = str;
      }
    }
    else if(calc.target.innerHTML == 'C'){
      str = ""
      document.querySelector('input').value = str;
    }
    else{ 
    str = str + calc.target.innerHTML;
    document.querySelector('input').value = str;
      }
  })
})
