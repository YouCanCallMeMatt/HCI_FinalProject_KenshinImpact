$(document).ready(function(){

    function success(res){
        if(res){
            alert('Register Successful.');
            $('input').each(function(){
                $(this).val('');
            });
            $( "#agree" ).prop( "checked", false );
        }
    }
    

    function validation(callback1){
        var i = true;

        //empty validation
        $('input').each(function(){
            if( $(this).val()==''){
                $(this).siblings('.error').append('Please fill out this field.');
                i = false;
            } else{
                $(this).siblings('.error').empty();
            }
        });

        if(document.getElementById('agree').checked){
            $('#agree').parent().siblings('.error').empty();
        } else{
            $('#agree').parent().siblings('.error').append('Please check this field.');
            i = false;
        }

        //username validation
        if($('#username-txt').val()){
            if($('#username-txt').val().length < 3){
                $('#username-txt').siblings('.error').append('Please input minimum of 3 characters.');
                i = false;
            } else{
                $('#username-txt').siblings('.error').empty();
            }
        }
    
        //email validation
        var email =  document.getElementById('email-txt').value;
        if(email){
            if((email[0] == '@' || email[0] == '.' || email[0] == '_' || email[0] == '-') || (email.indexOf('@') == -1) || (email[email.indexOf('@') - 1] == '.' || email[email.indexOf('@') + 1] == '.') || (email.endsWith(".com") == false)){
                $('#email-txt').siblings('.error').append('Please input a valid email address.');
                i = false;
            } else{
                $('#email-txt').siblings('.error').empty();
            }
        }

        //password validation
        var pass = document.getElementById('password-txt').value;
        var passLen = pass.length;

        if($('#password-txt').val()){
            if(passLen < 8 || !isNaN(pass)){
                $('#password-txt').siblings('.error').append('Password must consist of at least 8 characters and an alphabet.');
                i = false;
            } else{
                $('#password-txt').siblings('.error').empty();
            }
        }
    

        // confirm password validation
        if($('#confirm-password-txt').val()){
            if($('#confirm-password-txt').val() != $('#password-txt').val()){
                $('#confirm-password-txt').siblings('.error').append('Password confirmation does not match.');
                i = false;
            } else{
                $('#confirm-password-txt').siblings('.error').empty();
            }
        }
        callback1(i);
    }

    $('#reg-form').submit(function(e){
        e.preventDefault();
        $('.error').empty();

        validation(success);
        // success();
    });

});