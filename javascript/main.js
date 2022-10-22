var i;
var x;
{
    // status check
    console.log('connected');
}
// function inf(){
//     document.getElementById("name").focus();
//     x = 1;
// }
// window.onload = function(){
//     document.getElementById("first-name").focus();
//     i = 1;
   
// }
{
    // send mail clicked
    function sendClick(){
        
       let userMail = document.getElementById("email").value;
       let emailLength = userMail.length;
       let emailValid = userMail.includes("@");
       if (emailValid == true) {

     
                if (emailLength == 0) {
            alert(`Please enter your email adress`);
            
        } else {
            
            
       document.getElementById("user-email").innerHTML = userMail;

       let x = document.getElementsByClassName("first-section");
       
        let y = document.getElementsByClassName("second-section");

       x[0].style.display = 'none';
       y[0].style.display = 'flex';
        }

       } else {
        alert(`Not a valid email adress`)
        
       }



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
//loginClicked Function
{
   
    function loginClicked(){
        let userMail = document.getElementById("name").value;
        let emailLength = userMail.length;
        let emailValid = userMail.includes("@");

         let userPassword = document.getElementById("password").value;
         let passwordLength = userPassword.length;
         if (emailLength !== 0) {
            if (emailValid == true) {
                if (passwordLength >= 6) {
                   
                } else {
                    alert("Password must be at least 6 character")
                }
            } else {
                alert("Not a Valid Email")
            }
         } else {
            alert("Enter your Email adress")
         }


    }

}

// signup function
{
    function signUp(){
        let firstName = document.getElementById("first-name").value;
        let secondName = document.getElementById("second-name").value;
        let userEmail = document.getElementById("email").value;
        let mainPassword = document.getElementById("main-password").value;
        let confirmPassword = document.getElementById("second-password").value;

        if (firstName.length !== 0 && secondName.length !== 0) {
            
            if (userEmail.length !== 0 && userEmail.includes("@")) {

                if (mainPassword.length >= 6 && confirmPassword.length >= 6) {

                    if (confirmPassword.includes(mainPassword)) {
                        
                    } else {
                        alert(`Password did not matching`)
                    }
                    
                } else {
                    alert(`Password must be at least 6 character`);
                }
                
            } else {
                alert(`Not valid email adress`);
            }

        } else {
            alert(`Enter your first name and last name `);
        }




    }
}
// Key Event listener 
{

    function fm() {
         i = 1;
    }
    function sm() {
         i = 2 ;
    }
    function i3() {
        i = 3;
    }
    function i4() {
        i = 4;
    }
    function i5() {
         i = 5;
    }
    // keydown eventlistener
    document.addEventListener('keydown', (event) => {
        var n = event.key;
        var c = event.code;
        if (event.code === "ArrowDown") {
              

                switch (i) {
                    case 1: 
 document.getElementById("second-name").focus();
                 i = 2;
                    break;
                    case 2:
 document.getElementById("email").focus();
                 i = 3;
    
                    break;

                    case 3:
 document.getElementById("main-password").focus();
                 i = 4;
                 break;
                 case 4: 
                 document.getElementById("second-password").focus();
                 i = 5;
                 break;
                }
            
        }
        if (event.code === "ArrowUp") {
            switch (i) {
                case 5:
                    document.getElementById("main-password").focus();
                    i=4;

                    break;
                case 4:
                    document.getElementById("email").focus();
                    i= 3;

                    break;
                case 3:
                    document.getElementById("second-name").focus();
                    i = 2;

                    break;
                case 2:
                    document.getElementById("first-name").focus();
                    i=1;

                    break;
            }
            
        }
        
    }, false);

}
// Landing page cursor key event
{
    function ne(){
        x = 1;
    }
    function pd() {
        x = 2;
    }
    
    // ARROW KEY DOWN EVENT

    document.addEventListener( 'keydown', (event) =>{
         if (event.code === "ArrowDown") {
            switch (x) {
                case 1:
                    document.getElementById("password").focus();
                    x = 2;
                    
                    break;
                case 2:
                    document.getElementById("name").focus();
                    x = 1;
                break;
            }
            
         }
        if (event.code === "ArrowUp") {
            switch(x) {
                case 2: 
                document.getElementById("name").focus();
                x = 1;
                break;
                case 1:
                    document.getElementById("password").focus();
                    x = 2;
                break;
            }
        }
    }, false)

}
// Forget password page

{

   function sb() {
    let c1 = document.getElementById("n1").value; 
    let c2 = document.getElementById("n2").value; 
    let c3 = document.getElementById("n3").value; 
    let c4 = document.getElementById("n4").value; 
    let c5 = document.getElementById("n5").value; 
    let c6 = document.getElementById("n6").value; 

    let vc ="c1" + "c2" + "c3" + "c4" + "c5" + "c6" ;
    let len = vc.length;
    
    if ( len => 6) {
        
        
    } else {
        alert('enter verification code');
    }

} 
}