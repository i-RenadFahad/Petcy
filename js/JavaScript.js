/////////////////////////////////////////////////////Check login input form is not empty ///////////////////////////////////////////// 
 function test(){
	   //Check that the user name field is not empty 
if(document.getElementById("Lemail").value==""){
					//if is empty show this error message 
                document.getElementById("EML").innerHTML="  plase fill email !!";
					// the outline of input will be red 
                document.getElementById("Lemail").style.outline = "2px inset red";
					// if outline of password input red will be none
                document.getElementById("Lpass").style.outline = " none"
				    // return false to not submit before check other input 
                return false;
}else if(document.getElementById("Lpass").value==""){//Check that the user password field is not empty 
				    //if is empty show this error message
                document.getElementById("EML").innerHTML="  plase fill Password!!";
				   // the outline of input will be red 
                document.getElementById("Lpass").style.outline = "2px inset red";
				   // if outline of name input red will be none
                document.getElementById("Lemail").style.outline = " none"; 
			      // return false to not submit before check other input 				
                return false;
        }else if (document.getElementById("Lemail").value.includes("@")!=true){
             			//if is empty show this error message 
              document.getElementById("EML").innerHTML="  the emali most inclides @ !!";
                                     // the outline of input will be red 
             document.getElementById("Lemail").style.outline = "2px inset red";
                                     // if outline of password input red will be none
             document.getElementById("Lpass").style.outline = " none"
                                 // return false to not submit before check other input
               
                        return false;
}else{
                        return true;
        }

}


/////////////////////////////////////////////////////Check singup input form is not empty(friend) /////////////////////////////////////////////
function test2(){
        var num = /[0-9]/   //RegExp of number 
		
		//Check that the user emil field is not empty 
        if(document.getElementById("Uemail").value==""){       
                document.getElementById("EM").innerHTML="  plase fill email fields !!";//error message with red color 
                document.getElementById("Upass1").style.outline = "none";//send none outline
                document.getElementById("Uemail").style.outline = "2px inset red ";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "none";//send none outline 
                document.getElementById("Ugen").style.outline = "none";//send none outline    
                return false;
    //Check that the user name field is not empty 
        }else if (document.getElementById("Uusername").value==""){
                document.getElementById("EM").innerHTML="  plase fill username fields !!";//send none message 
                document.getElementById("Uemail").style.outline = "none";//send none outline
                document.getElementById("Upass1").style.outline = "none";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "2px inset red";//send none outline
                document.getElementById("Ugen").style.outline = "none";//send none outline
                return false;
		//Check that the user password field is not empty 
        }else if (document.getElementById("Upass1").value==""){
                document.getElementById("EM").innerHTML="  plase fill password fields !!";//error message with red colo
                document.getElementById("Uemail").style.outline = "none";//send none outline
                document.getElementById("Upass1").style.outline = "2px inset red";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "none";//send none outline
                document.getElementById("Ugen").style.outline = "none";//send none outline
                return false;
       }else if (document.getElementById("Upass2").value==""){
                document.getElementById("WM").innerHTML="  plase fill Confirm password fields !!";//error message with red colo
                document.getElementById("Uemail").style.outline = "none";//send none outline
                document.getElementById("Upass1").style.outline = "2px inset red";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "none";//send none outline
                document.getElementById("Ugen").style.outline = "none";//send none outline
                return false;
              }else if (document.getElementById("Ugen").value==""){
                document.getElementById("WM").innerHTML="  plase fill gender fields !!";//error message with red colo
                document.getElementById("Uemail").style.outline = "none";//send none outline
                document.getElementById("Upass1").style.outline = "none";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "none";//send none outline
                document.getElementById("Ugen").style.outline = "2px inset red";//send none outline
                return false;
     //Check that the length of user name field not less than 8 
       }else if (document.getElementById("Uusername").value.length<8){
                document.getElementById("EM").innerHTML="  valid username the username must by grad than 8 plase try agin!!";//send none message 
                document.getElementById("Uemail").style.outline = "none";//send none outline
                document.getElementById("Upass1").style.outline = "none";//send red outline
                document.getElementById("Upass2").style.outline = "none";//send none outline
                document.getElementById("Uusername").style.outline = "2px inset red";//send none outline
                document.getElementById("Ugen").style.outline = "none";//send none outline

                return false;
		//Check that the user emil field includes @ or not  
    }else if (document.getElementById("Uemail").value.includes("@")!=true){
        document.getElementById("EM").innerHTML="  valid email the emil most includes @ plase try agin!! ";//error message with red color 
        document.getElementById("Upass1").style.outline = "none";//send none outline
        document.getElementById("Uemail").style.outline = "2px inset red";//send red outline
        document.getElementById("Upass2").style.outline = "none";//send none outline
        document.getElementById("Uusername").style.outline = "none";//send none outline 
        document.getElementById("Ugen").style.outline = "none";//send none outline
       
                return false;
		//Check that the user password field includes number or not 
        }else if (document.getElementById("Upass1").value.match(num)!=true){
        document.getElementById("EM").innerHTML=" valid password the Password must includes a number plase try agin!!";//error message with red color 
        document.getElementById("Uemail").style.outline = "none";//send none outline
        document.getElementById("Upass1").style.outline = "2px inset red";//send red outline
        document.getElementById("Upass2").style.outline = "none";//send none outline
        document.getElementById("Uusername").style.outline = "none";//send none outline
        document.getElementById("Ugen").style.outline = "none";//send none outline

                return false;
		//Check that the length of user password field not less than 8 
        }else if (document.getElementById("Upass1").value.length<8){
        document.getElementById("EM").innerHTML="  valid password the Password must by grad than 8 plase try agin!!";//error message with red color 
        document.getElementById("Uemail").style.outline = "none";//send none outline
        document.getElementById("Upass1").style.outline = "2px inset red";//send red outline
        document.getElementById("Upass2").style.outline = "none";//send none outline
        document.getElementById("Uusername").style.outline = "none";//send none outline
        document.getElementById("Ugen").style.outline = "none";//send none outline

                return false;
		//Check that the password and Rpassword are same  
        }else if(document.getElementById("Upass1").value!=document.getElementById("Dpass2").value){
        document.getElementById("EM").innerHTML=" valid password the Password not match plase try agin !!";//error message with red color 
        document.getElementById("Uemail").style.outline = "none";//send none outline
        document.getElementById("Uusername").style.outline = "none";//send none outline
        document.getElementById("Ugen").style.outline = "none";//send none outline
        document.getElementById("Upass1").style.outline = "2px inset red";//send red outline
        document.getElementById("Upass2").style.outline = "2px inset red";//send red outline
                return false;
		// if all conditions true will acceptance the form 
        }else{
				// send acceptance message with green color
         return true;
        }

        }
        
/////////////////////////////////////////////////////Check singup input form is not empty(DR) /////////////////////////////////////////////
function test3(){
  var num = /[0-9]/   //RegExp of number 

//Check that the user emil field is not empty 
  if(document.getElementById("Demail").value==""){       
          document.getElementById("EMD").innerHTML="  plase fill email fields !!";//error message with red color 
          document.getElementById("Dpass1").style.outline = "none";//send none outline
          document.getElementById("Demail").style.outline = "2px inset red ";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "none";//send none outline 
          document.getElementById("Dgen").style.outline = "none";//send none outline    
          return false;
//Check that the user name field is not empty 
  }else if (document.getElementById("Dusername").value==""){
          document.getElementById("EMD").innerHTML="  plase fill username fields !!";//send none message 
          document.getElementById("Demail").style.outline = "none";//send none outline
          document.getElementById("Dpass1").style.outline = "none";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "2px inset red";//send none outline
          document.getElementById("Dgen").style.outline = "none";//send none outline
          return false;
//Check that the user password field is not empty 
  }else if (document.getElementById("Dpass1").value==""){
          document.getElementById("EMD").innerHTML="  plase fill password fields !!";//error message with red colo
          document.getElementById("Demail").style.outline = "none";//send none outline
          document.getElementById("Dpass1").style.outline = "2px inset red";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "none";//send none outline
          document.getElementById("Dgen").style.outline = "none";//send none outline
          return false;
 }else if (document.getElementById("Dpass2").value==""){
          document.getElementById("EMD").innerHTML="  plase fill Confirm password fields !!";//error message with red colo
          document.getElementById("Demail").style.outline = "none";//send none outline
          document.getElementById("Dpass1").style.outline = "2px inset red";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "none";//send none outline
          document.getElementById("Dgen").style.outline = "none";//send none outline
          return false;
        }else if (document.getElementById("Dgen").value==""){
          document.getElementById("EM").innerHTML="  plase fill gender fields !!";//error message with red colo
          document.getElementById("Demail").style.outline = "none";//send none outline
          document.getElementById("Dpass1").style.outline = "none";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "none";//send none outline
          document.getElementById("Dgen").style.outline = "2px inset red";//send none outline
          return false;
//Check that the length of user name field not less than 8 
 }else if (document.getElementById("Dusername").value.length<8){
          document.getElementById("EM").innerHTML="  valid username the username must by grad than 8 plase try agin!!";//send none message 
          document.getElementById("Demail").style.outline = "none";//send none outline
          document.getElementById("Dpass1").style.outline = "none";//send red outline
          document.getElementById("Dpass2").style.outline = "none";//send none outline
          document.getElementById("Dusername").style.outline = "2px inset red";//send none outline
          document.getElementById("Dgen").style.outline = "none";//send none outline

          return false;
//Check that the user emil field includes @ or not  
}else if (document.getElementById("Demail").value.includes("@")!=true){
  document.getElementById("EMD").innerHTML="  valid email the emil most includes @ plase try agin!! ";//error message with red color 
  document.getElementById("Dpass1").style.outline = "none";//send none outline
  document.getElementById("Demail").style.outline = "2px inset red";//send red outline
  document.getElementById("Dpass2").style.outline = "none";//send none outline
  document.getElementById("Dusername").style.outline = "none";//send none outline 
  document.getElementById("Dgen").style.outline = "none";//send none outline
 
          return false;
//Check that the user password field includes number or not 
  }else if (document.getElementById("Dpass1").value.match(num)!=true){
  document.getElementById("EM").innerHTML=" valid password the Password must includes a number plase try agin!!";//error message with red color 
  document.getElementById("Demail").style.outline = "none";//send none outline
  document.getElementById("Dpass1").style.outline = "2px inset red";//send red outline
  document.getElementById("Dpass2").style.outline = "none";//send none outline
  document.getElementById("Dusername").style.outline = "none";//send none outline
  document.getElementById("Dgen").style.outline = "none";//send none outline

          return false;
//Check that the length of user password field not less than 8 
  }else if (document.getElementById("Dpass1").value.length<8){
  document.getElementById("EMD").innerHTML="  valid password the Password must by grad than 8 plase try agin!!";//error message with red color 
  document.getElementById("Demail").style.outline = "none";//send none outline
  document.getElementById("Dpass1").style.outline = "2px inset red";//send red outline
  document.getElementById("Dpass2").style.outline = "none";//send none outline
  document.getElementById("Dusername").style.outline = "none";//send none outline
  document.getElementById("Dgen").style.outline = "none";//send none outline

          return false;
//Check that the password and Rpassword are same  
  }else if(document.getElementById("Dpass1").value!=document.getElementById("Dpass2").value){
  document.getElementById("EMD").innerHTML=" valid password the Password not match plase try agin !!";//error message with red color 
  document.getElementById("Demail").style.outline = "none";//send none outline
  document.getElementById("Dusername").style.outline = "none";//send none outline
  document.getElementById("Dgen").style.outline = "none";//send none outline
  document.getElementById("Dpass1").style.outline = "2px inset red";//send red outline
  document.getElementById("Dpass2").style.outline = "2px inset red";//send red outline
          return false;
// if all conditions true will acceptance the form 
  }else{
  
  return true;
  }

  }
	
	
	
	