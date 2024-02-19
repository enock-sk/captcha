const captcha = document.querySelector('.captcha_num'),
reloadBtn=document.querySelector('.reload-btn'),
inputField=document.querySelector('input'),
checkBtn=document.querySelector('.check_btn'),
statusText=document.querySelector('.status_text');
let allCharacters =[
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
function getCaptch(){
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerHTML +=` ${randomChar}`;

    }
}
getCaptch();
reloadBtn.addEventListener('click',() =>{
    captcha.innerHTML= '';
    getCaptch();
});
checkBtn.addEventListener('click', e=>{
e.preventDefault();
statusText.style.display = "block";
let inputValue=inputField.value.split(' ').join(' ');
if(inputValue===captcha.innerHTML){
    statusText.style.color="#FF0000";
    statusText.innerHTML="Good you are a robot!";
}else{
    statusText.style.color="#ff0000;";
   statusText.innerHTML="Captcha not Matched. Please try again!";
}
})
