document.addEventListener('DOMContentLoaded',function(){
    const button=document.getElementById('but');
    const greeting = document.getElementById('greet');
    button.addEventListener('click',function(){
        greeting.textContent='Congratulation Dear! you are successfully complete your gradutation ';
    });
});