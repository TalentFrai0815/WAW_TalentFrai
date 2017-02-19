var tokenString = localStorage.getItem('token');
var token = JSON.parse(tokenString);
var student={};
var avatare=[];
var educationplan={};
var scroll =1;
var scrollCounter=0;

function profilBildAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilBildAendern');
    $(document).ready(function() {
        $(document).ready(function() {
            $("#profilePicChange").attr("src",avatare[student.avatarId].avatarBigUrl);
        });
    });
}

function passwortAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #passwortAendern');
}

function profilLöschen(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilLöschen');
}

function chapter1(){
    document.body.style.backgroundColor = "#a1c153";
    $('#content').load('ChangeBody.html #chapter1');
}

function chapter2(){
    document.body.style.backgroundColor = "#dbe283";
    $('#content').load('ChangeBody.html #chapter2');
}

function chapter3(){
    document.body.style.backgroundColor = "#bad151";
    $('#content').load('ChangeBody.html #chapter3');
}

function chapter4(){
    document.body.style.backgroundColor = "#7cc3a3";
    $('#content').load('ChangeBody.html #chapter4');
}

function chapter5(){
    document.body.style.backgroundColor = "#ffea64";
    $('#content').load('ChangeBody.html #chapter5');
}

function chapter6(){
    document.body.style.backgroundColor = "#fff3d8";
    $('#content').load('ChangeBody.html #chapter6');
}

function chapter7(){
    document.body.style.backgroundColor = "#ffcf53";
    $('#content').load('ChangeBody.html #chapter7');
}

function chapter8(){
    document.body.style.backgroundColor = "#f5a04c";
    $('#content').load('ChangeBody.html #chapter8');
}

function chapter9(){
    document.body.style.backgroundColor = "#e35184";
    $('#content').load('ChangeBody.html #chapter9');
}

function chapter10(){
    document.body.style.backgroundColor = "#ee7ba9";
    $('#content').load('ChangeBody.html #chapter10');
}

function chapter11(){
    document.body.style.backgroundColor = "#f7bed2";
    $('#content').load('ChangeBody.html #chapter11');
}

function chapter12(){
    document.body.style.backgroundColor = "#c9427e";
    $('#content').load('ChangeBody.html #chapter12');
}

function chapter13(){
    document.body.style.backgroundColor = "#4fa8da";
    $('#content').load('ChangeBody.html #chapter13');
}

function chapter14(){
    document.body.style.backgroundColor = "#94d3e5";
    $('#content').load('ChangeBody.html #chapter14');
}

function chapter15(){
    document.body.style.backgroundColor = "#005daa";
    $('#content').load('ChangeBody.html #chapter15');
}

function chapter16(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #chapter16');
}

function alleKompetenzenStyle(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #alleKompetenzen');
}

function educationalPlanStyle(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #educationalPlans');
}

function startBild(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #startBild');
}

function login(){
    if(token==null){
        window.document.location.href = "index.html";
        alert("Bitte Einloggen");
    }

    //JSON um den Student zu bekommen
    var studentJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/student",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //JSON Avatare
    var avatareJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/avatar",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //ändere den token in studentJSON und avatareJSON
    studentJSON.headers.authorization = token.token;
    avatareJSON.headers.authorization = token.token;

    //Befehl um student zu bekommen
    $.ajax(studentJSON).done(function (response) {
        student=response;
    });

    //Befehl um avatare zu bekommen
    $.ajax(avatareJSON).done(function (response) {
        avatare=response;
    });
}

function setInfos(){
  $('#name').html(student.forename+'<br>'+student.surname);
  $("#nameImg").attr("src",avatare[student.avatarId].avatarBigUrl);
  $("#profilePic").attr("src",avatare[student.avatarId].avatarInactiveUrl);
  $("#schoolPic").attr("src",student.school.imageUrlBig);
  $('#schoolName').html(student.school.name);

  var adresse = student.school.address;
  var resAdresse = adresse.split(",");
  $('#dropdownInfos').html(resAdresse[0]+"<br>"+resAdresse[1]+"<br>"+student.school.country);
  $('#dropdownInfosLast').html("<br>"+student.school.email+"<br>"+student.school.telefon);

  $("#klassePic").attr("src",student.studyGroups.imageUrlInactive);
  $("#klassePicBig").attr("src",student.studyGroups.imageUrlBig);
  $('#klasseName').html("Klasse<br>"+student.studyGroups.class);
  $('#dropdownInfosLastName').html(student.formteacher);
  $('#mobileName').html(student.forename+'  '+student.surname);
  $('#mobileSchule').html(student.school.name);
  $('#mobileKlasse').html("Klasse: "+student.studyGroups.class);
}

var picChange=avatare[student.avatarId];
function changePic(pic){
    picChange=pic;
    window.setTimeout(10);
    $("#profilePicChange").attr("src",avatare[pic].avatarBigUrl);
}

function changePicSave(){
    var changePicJSON = {
        "async": false,
        "url": "",
        "method": "PUT",
        "headers": {
            "authorization":""}
    }

    changePicJSON.headers.authorization = token.token;
    changePicJSON.url = "http://46.101.204.215:1337/api/V1/avatar/"+picChange;
    $.ajax(changePicJSON).done(function (response) {
        if(response.message ="Avatar wurde erfolgreich geändert"){
               startBild();
                login();
                $(document).ready(function(){
                    $('#fehlermeldungContainer').load('ChangeBody.html #error3',function(){
                        $('#textFieldError').html(response.message);
                    });
                });
        }
    });
};

function kompetenz(id){
    switch(id){
        case 1:chapter1(); break;
        case 2:chapter2(); break;
        case 3:chapter3(); break;
        case 4:chapter4(); break;
        case 5:chapter5(); break;
        case 6:chapter6(); break;
        case 7:chapter7(); break;
        case 8:chapter8(); break;
        case 9:chapter9(); break;
        case 10:chapter10(); break;
        case 11:chapter11(); break;
        case 12:chapter12(); break;
        case 13:chapter13(); break;
        case 14:chapter14(); break;
        case 15:chapter15(); break;
        case 16:chapter16(); break;
    }

        bindButtons();
        scrollTop();
        var kompetenzJSON = {
            "async": false,
            "url": "",
            "method": "GET",
            "headers": {
                "authorization":""}
        }

        kompetenzJSON.headers.authorization = token.token;
        kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId="+id;
        var  kompetenz={};
        $.ajax(kompetenzJSON).done(function (response) {
            kompetenz=response;
        });

        var bubbles="";
        kompetenz.sort(function(a,b){
            return new Date(b.fromDate) - new Date(a.fromDate);
        });
        for(i=0;i<kompetenz.length;i++){
            bubbles+=getBubble(kompetenz[i],true);
        }

    $(document).ready(function(){
        $('#middleContent').html(bubbles);
        hoverBubbles();
    });
}

function kompetenzAlle(id){
    switch(id){
        case 1:chapter1(); break;
        case 2:chapter2(); break;
        case 3:chapter3(); break;
        case 4:chapter4(); break;
        case 5:chapter5(); break;
        case 6:chapter6(); break;
        case 7:chapter7(); break;
        case 8:chapter8(); break;
        case 9:chapter9(); break;
        case 10:chapter10(); break;
        case 11:chapter11(); break;
        case 12:chapter12(); break;
        case 13:chapter13(); break;
        case 14:chapter14(); break;
        case 15:chapter15(); break;
        case 16:chapter16(); break;
    }

        bindButtons();
        scrollTop();
        var kompetenzJSON = {
            "async": false,
            "url": "",
            "method": "GET",
            "headers": {
                "authorization":""}
        }

        kompetenzJSON.headers.authorization = token.token;
        kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId="+id;
        var  kompetenz={};
        $.ajax(kompetenzJSON).done(function (response) {
            kompetenz=response;
        });
        kompetenz.sort(function(a,b){
            return new Date(b.fromDate) - new Date(a.fromDate);
        });
        var bubblesDone="";
        var bubblesUndone="";
        var bubblesEducation="";
        var educationsPrüfen;

        for(i=0;i<kompetenz.length;i++){
            if(kompetenz[i].checked){
                bubblesDone+=getBubble(kompetenz[i],true);
            }
            else{
                if(isEducation(kompetenz[i])){
                    for (o=0; o<educationplan.length;o++) {
                        educationsPrüfen = JSON.parse(localStorage.getItem('education'+o));
                        for(x=0;x<educationsPrüfen[0].competences.length;x++){
                            if(educationsPrüfen[0].competences[x].competenceId==kompetenz[i].id){                  bubblesEducation+=getBubbleEducation(educationsPrüfen[0].competences[x],kompetenz[i],educationsPrüfen[0].educationalPlanId);
                            }
                        }
                    }
                }
                else{
                    bubblesUndone+=getBubble(kompetenz[i],false);
                }
            }
        }

        var bubbles = bubblesDone+bubblesEducation+bubblesUndone;
        $(document).ready(function(){
            $('#middleContent').html(bubbles);
            hoverBubbles();
        });
}

function alleKompetenzen(){
    alleKompetenzenStyle();
    bindButtons();
    scrollTop();
    var bubbles="";
    var number="";
    var numberID="";
    var  kompetenz={};
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     kompetenzJSON.headers.authorization = token.token;

     for(a=1;a<=16;a++){
        kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId="+a;

        $.ajax(kompetenzJSON).done(function (response) {
            kompetenz=response;
        });
        kompetenz.sort(function(a,b){
            return new Date(b.fromDate) - new Date(a.fromDate);
        });
        for(i=0;i<kompetenz.length;i++){
              bubbles+=getBubble(kompetenz[i],true);
        }
     }

        $(document).ready(function(){
            $('#middleContent').html(bubbles);
            hoverBubbles();
        });
}

function getBubble(kompetenz, done){
    var bubble="";
    var number="";
    var chapter="";
    scrollCounter++;
    if(kompetenz.number<1000){
               if(kompetenz.number<100){
                   if(kompetenz.number<10){
                       number="000"+kompetenz.number;
                   }
                   else{
                       number="00"+kompetenz.number;
                   }
               }
               else{
                   number="0"+kompetenz.number;
               }
    }
    else{
        number=kompetenz.number;
    }
    (kompetenz.chapterId<10)?(chapter="0"+kompetenz.chapterId):(chapter=""+kompetenz.chapterId);
        bubble+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
            if(done){
                bubble+="images/chapter"+(chapter)+"/competenceDone.png\"><div id=\"rechtsAb\"><div id=\"rechts\">Du hast diese Kompetenz      am<br>"+kompetenz.fromDate+" erreicht!</div></div></div><div id=\"bubbleText\"><p>"
            }
            else{
                bubble+="images/chapter"+(chapter)+"/competenceUndone.png\">"
            }
            bubble+=kompetenz.studentText+"</p></div>"
            bubble+="<div id=\"bubbleID\"><p>"+chapter+"."+number+"</p></div></div></div>"

            return bubble;
}

function getBubbleEducation(education, kompetenz, educationalPlanId){
    var bubble="";
    var number="";
    var chapter="";
    scrollCounter++;
    if(kompetenz.number<1000){
               if(kompetenz.number<100){
                   if(kompetenz.number<10){
                       number="000"+kompetenz.number;
                   }
                   else{
                       number="00"+kompetenz.number;
                   }
               }
               else{
                   number="0"+kompetenz.number;
               }
           }
    else{
        number=kompetenz.number;
    }
    (kompetenz.chapterId<10)?(chapter="0"+kompetenz.chapterId):(chapter=""+kompetenz.chapterId);
    console.log(educationalPlanId);
        bubble+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
            bubble+="images/isInEducationalPlan.png\"><div id=\"rechtsAb\"><div id=\"rechtsEducation\">"+educationplan[educationalPlanId-1].name+"<br><br>"+education.note+"</div></div></div><div id=\"bubbleText\"><p>"
        bubble+=kompetenz.studentText+"</p></div>"
        bubble+="<div id=\"bubbleID\"><p>"+chapter+"."+number+"</p></div></div></div>"
    return bubble;
}

function educationplanSet(){
    var string="";
    var educationplanJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     educationplanJSON.headers.authorization = token.token; educationplanJSON.url="http://46.101.204.215:1337/api/V1/educationalPlan";
        $.ajax(educationplanJSON).done(function (response) {
            educationplan=response;
        });
    if(educationplan.length-1>0){
        for(i=0;i<(educationplan.length-1);i++){
            string+="<li ><a href=\"#\" onclick=\"educationplanContent("+educationplan[i]._id+")\">"+educationplan[i].name+"</a></li>";
        }
       string+="<li class=\"lastListItem\"><a href=\"#\" onclick=\"educationplanContent("+educationplan[i]._id+")\">"+educationplan[i].name+"</a></li>";
    }
   $('#educationplan').html(string);
}

function educationplanContent(id){
    educationalPlanStyle();
    bindButtons();
    scrollTop();

    window.setTimeout(10);
    $(document).ready(function(){
        $('#educationName').html(educationplan[id-1].name);
     });

    var kompetenzen;
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     kompetenzJSON.headers.authorization = token.token; kompetenzJSON.url="http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId=0";
        $.ajax(kompetenzJSON).done(function (response) {
            kompetenzen=response;
        });

    var education;
    var educationJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}
    }
        educationJSON.headers.authorization = token.token; educationJSON.url="http://46.101.204.215:1337/api/V1/educationalPlan/"+id;
        $.ajax(educationJSON).done(function (response) {
          education=response;
        });

    var bubbles="";
    var bubblesDone="";

    for(i=0;i<(education[0].competences.length);i++){
        if(kompetenzen[education[0].competences[i].competenceId].checked){
          bubblesDone+=getBubble(kompetenzen[education[0].competences[i].competenceId],true);
        }
    }
    for(i=0;i<(education[0].competences.length);i++){
        if(!kompetenzen[education[0].competences[i].competenceId].checked){
            bubbles+=getBubbleEducation(education[0].competences[i],kompetenzen[education[0].competences[i].competenceId],education[0].educationalPlanId);
        }
    }

    var erg= bubblesDone+bubbles;
     $(document).ready(function(){
        $('#middleContent').html(erg);
        hoverBubbles();
     });
}

function isEducation(kompetenz){
  var educationsPrüfen;
    for (e=0; e<educationplan.length;e++) {
       educationsPrüfen = JSON.parse(localStorage.getItem('education'+e));
       for(j=0;j<educationsPrüfen[0].competences.length;j++){
           if(educationsPrüfen[0].competences[j].competenceId==kompetenz.id){
               return true;
           }
       }
    }
   return false;
}

function bindButtons(){
    scrollCounter=0;
    scroll =1;
        $(document).ready(function(){
            $("#scrollButtonUp").click(function() {
                if(scroll>1){
                    scroll--;
                }
                $('html, body').animate({
                    scrollTop: $("#scroll"+scroll).offset().top -65
                }, 500);
            });
            $("#scrollButtonDown").click(function() {
                if(scroll<scrollCounter){
                    scroll++;
                }
            $('html, body').animate({
                scrollTop: $("#scroll"+scroll).offset().top -65
            }, 500);
            });
        });
}

function scrollTop(){
    $(document).ready(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 0);
        return false;
    });
}

function hoverBubbles(){
    $(".bubbleImg").hover(
        function() {
           $(this).parent().children('#rechtsAb').show();
        },
        function(){
            $(this).parent().children('#rechtsAb').hide();
        }
    );
}

function dynamischeBilderDropdown(){
    var sheet = document.createElement('style')
    sheet.innerHTML =
        ".open .dropdown-toggle-profil {content:url(\""
        +avatare[(student.avatarId)].avatarUrl +"\")}"
        +".open .dropdown-toggle-school {content:url(\""
        +student.school.imageUrl+"\")}"
        +".open .dropdown-toggle-studyGroup {content:url(\""
        +student.studyGroups.imageUrl +"\")}";
    document.body.appendChild(sheet);
}

function passwordChange(){
        if($("#passwordinputNew1").val()==$("#passwordinputNew2").val()){
            var form = new FormData();
            form.append("oldPassword", $("#PasswordOld").val());
            form.append("newPassword", $("#PasswordNew1").val());

            var settings = {
                "url": "http://46.101.204.215:1337/api/V1/requestPasswordRecovery",
                "method": "PUT",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form,
                "headers": {
                "authorization":""}
            }
            settings.headers.authorization = token.token;
            $.ajax(settings).done(function (response) {
                     startBild();
                     $(document).ready(function(){
                        $('#fehlermeldungContainer').load('ChangeBody.html #error3',function(){
                                        $('#textFieldError').html(JSON.parse(response).message);
                        });
                    });
            })
            .fail(function(){
                $('#fehlermeldungContainer').load('ChangeBody.html #error1',function(){
                    $('#textFieldError').html("Passwort falsch!");
                });
            });
        }
        else{
            $('#fehlermeldungContainer').load('ChangeBody.html #error1',function(){
                $('#textFieldError').html("Passwörter sind nicht gleich!");
            });
        }
}

function deleteAccount(){
        var form = new FormData();
        form.append("Password", $("#passwordinput").val());
        var settings = {
            "url": "http://46.101.204.215:1337/api/V1/student",
            "method": "Delete",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form,
            "headers": {
            "authorization":""}
        }

        settings.headers.authorization = token.token;
        $.ajax(settings).done(function (response) {
            startBild();
            $(document).ready(function(){
                 $('#fehlermeldungContainer').load('ChangeBody.html #error3',function(){
                     $('#textFieldError').html(JSON.parse(response).message);
                 });
            });
        })
        .fail(function(){
           $('#fehlermeldungContainer').load('ChangeBody.html #error1',function(){
               $('#textFieldError').html("Passwort falsch!");
           });
        });
}

function logout(){
    localStorage.clear();
    window.document.location.href = "index.html";
}

$(document).ready(function(){
    login();
    setInfos();
    educationplanSet();
    dynamischeBilderDropdown();
    var educationJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     educationJSON.headers.authorization = token.token;

        for (e=0; e<educationplan.length;e++) {
            educationJSON.url="http://46.101.204.215:1337/api/V1/educationalPlan/"+educationplan[e]._id;
            $.ajax(educationJSON).done(function (response) {
                localStorage.setItem('education'+e, JSON.stringify(response));
            })
        };
});
