$(document).ready(function(){

    $('.error').hide();

    $('button').click(function(){
        $('input').each(function(){
            if( $(this).val()==''){
                $(this).siblings('.error').show();
            }
            else{
                $(this).siblings('.error').hide();
            }
        });

        if(document.getElementById('agree').checked){
            $('#agree').parent().siblings('.error').hide();
        }
        else{
            $('#agree').parent().siblings('.error').show();
        }

       


        
    })

});