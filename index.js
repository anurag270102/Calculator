var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
            if(btntext=='x'){
                btntext="*";
            }
            screen.value += btntext;
    });
}
{
    addEventListener('keypress',(e)=>{
        btntext = e.key;
        // console.log(btntext);
        if((e.key=='=')||(e.key=='Enter')){
            screen.value=eval(screen.value);
            $('button').removeClass('btn');
        }
        if(e.key=='!'){
            fact();
        }
    });
}
function sin(params) {
    screen.value=Math.sin(screen.value);
}
function cos(params) {
    screen.value=Math.cos(screen.value);
}
function tan(params) {
    screen.value=Math.tan(screen.value);
}
function log(params) {
    screen.value=Math.log10(screen.value);
}
function e(params) {
    screen.value=Math.E;
}
function pi(params) {
    screen.value=Math.PI;
}
function power(params) {
    screen.value=Math.pow(screen.value,2);
}
function powercube() {
    screen.value=Math.pow(screen.value,3);
}
function sininv() {
    screen.value=Math.sinh(screen.value);
}
function cosinv() {
    screen.value=Math.cosh(screen.value);
}
function taninv() {
    screen.value=Math.tanh(screen.value);
}
function power10() {
    screen.value=Math.pow(10,screen.value);
}
function  fact(params) {
    var i=1;
    var f=1;
    while(screen.value!=1){
        f=f*screen.value;
        screen.value--;
    }
    screen.value=f;
}
function sqroot(){
    screen.value=Math.sqrt(screen.value);
}
function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}
function cls(){
    screen.value=0;
}
