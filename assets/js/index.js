import { lang } from "./init.js";

export function copyButtonValue()
{
  var emailBtnEl = document.getElementById('email');
  var emailValue = emailBtnEl.value;

  navigator.clipboard.writeText(emailValue)
  .then(()=>
  {
    alert("You copied my email successfully👍");
  }).catch((error)=>{
    alert("Copying failed😫");
  });
};

export function f_langHandler()
{
  
};