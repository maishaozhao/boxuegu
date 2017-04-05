define(['jquery'], function ($) {

    // 兼听表单提交事件， 并阻止， 转而变成ajax请求
    $('#login-form').on('submit', function () {
       //
    console.log($(this).serialize());
    console.log($(this).serializeArray());
     
        $.ajax({
            url: '/v6/login',
            type: 'POST',
            data: $(this).serialize(),
            success:function(data){
                 if(data.code==200){
                     location.href='/';
                 }
             
            },
             error:function(){
                 alert(arguments[2]);
              }
        });
       return false;
    });

});