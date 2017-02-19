function loginButton(){
    if($("#emailinput").val()!=""&&$("#passwordinput").val()!=""){
        var form = new FormData();
        form.append("username", $("#emailinput").val());
        form.append("password", $("#passwordinput").val());
        var settings = {
            "url": "http://46.101.204.215:1337/api/V1/login",
            "method": "PUT",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        }
        $.ajax(settings).done(function (response) {
            window.document.location.href = "main.html";
            localStorage.setItem('token', response);
        })
        .fail(function(){
           $('#fehlermeldungContainer').load('ChangeBody.html #error1',function(){
                $('#textFieldError').html("Benutzername oder Passwort falsch!");
           });
        });
    }
    else{
        $('#fehlermeldungContainer').load('ChangeBody.html #error1',function(){
            $('#textFieldError').html("Geben Sie Benutzername und Passwort ein!");
        });
   }
}

function error1(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error1');
}

function error2(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error2');
}

function error3(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error3');
}

function errorDelete(){
    $('#fehlermeldungContainer').load('ChangeBody.html #errorDelete');
}
