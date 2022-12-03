let password = document.getElementById('password');
let genPass = document.getElementById('generate');
let copyPass = document.getElementById('copy');

// function genPasssword(){
    // let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*_+.,/+=-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let passLen = 12;
    // let password ='';
    //  for(let i =0; i<passLen; i++){
    //     randomNum=Math.floor(Math.random()*chars.length);
    //     password+= chars.substring(randomNum,randomNum+1)
    //     // console.log(password)
    //  }
    //  document.getElementById('password').value = password;
// }

// For Generate Button
genPass.addEventListener('click',()=>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*_+.,/+=-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLen = 12;
    let password ='';
     for(let i =0; i<passLen; i++){
        randomNum=Math.floor(Math.random()*chars.length);
        password+= chars.substring(randomNum,randomNum+1)
        console.log(password)
     }
     document.getElementById('password').value = password;
    // navigator.clipboard.writeText(password); <= Copy the password while generating
})
// For Copy Button 
copyPass.addEventListener("click",()=>{
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand('copy');
})
