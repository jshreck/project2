function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

 
 var newUser = $("#createUser").val.trim;
 var newEmail = $("#createEmail").val.trim;
 var newPass = $("#createPass").val.trim;
 var currentUser = $("#userName").val.trim;
 var currentPass = $("#passWord").val.trim;
}
// Get the element with id="defaultOpen" and click on it
$("document").ready(function(){
document.getElementById("defaultOpen").click();

});