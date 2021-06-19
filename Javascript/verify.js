$(document).ready(function(){

    // $('.error').hide();

    $('button').click(function(){
        $('.error').empty();


        //empty validation
        $('input').each(function(){
            if( $(this).val()==''){
                $(this).siblings('.error').append('Please fill out this field.');
            }
            else{
                $(this).siblings('.error').empty();
            }
        });

        if(document.getElementById('agree').checked){
            $('#agree').parent().siblings('.error').empty();
        }
        else{
            $('#agree').parent().siblings('.error').append('Please check this field.');
        }

        //username validation
        if($('#username-txt').val()){
            if($('#username-txt').length < 3){
                $('#username-txt').siblings('.error').append('Please input minimum of 3 characters.');
           }
           else{
                $('#username-txt').siblings('.error').empty();
           }
        }
      
       //email validation
       var email =  document.getElementById('email-txt').value;
       var atIndex = email.indexOf('@');
       var dotIndex = email.indexOf('.');
       if ($('#email-txt').val()){
        if(atIndex < 1 || dotIndex <= atIndex + 2 || dotIndex == email.length - 1 ){
            $('#email-txt').siblings('.error').append('Please input a valid email address consist of a @ and .');
        }
        else{
            $('#email-txt').siblings('.error').empty();
        }
       }

       //password validation
       var pass = document.getElementById('password-txt').value;
       var passLen = pass.length;

       if($('#password-txt').val()){
           if(passLen < 8 || !isNaN(pass)){
            $('#password-txt').siblings('.error').append('Password must consist of at least 8 characters and an alphabet.');
        }
           else{
            $('#password-txt').siblings('.error').empty();
           }
       }
       

       // confirm password validation
       if($('#confirm-password-txt').val()){
           if($('#confirm-password-txt').val() != $('#password-txt').val()){
                $('#confirm-password-txt').siblings('.error').append('Password confirmation does not match.');
            }
            else{
                $('#confirm-password-txt').siblings('.error').empty();
            }
        }


        
    })

});