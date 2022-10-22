{
    // status check
    console.log('connected');
}
{
    // send mail clicked
    function sendClick(){

       let userMail = document.getElementById("email").value;

       document.getElementById("user-email").innerHTML = userMail;

       let x = document.getElementsByClassName("first-section");
       
        let y = document.getElementsByClassName("second-section");

       x[0].style.display = 'none';
       y[0].style.display = 'flex';
    }
}
{
    function edit(){
        let x = document.getElementsByClassName("first-section");
       
        let y = document.getElementsByClassName("second-section");


       y[0].style.display = 'none';
       x[0].style.display = 'block';
    }
}