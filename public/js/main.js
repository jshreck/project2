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

 
 
}
// Get the element with id="defaultOpen" and click on it
$("document").ready(function(){
document.getElementById("defaultOpen").click();

    var $newUser = $("#createUser");
    var $newEmail = $("#createEmail");
    var $newPass = $("#password1");
    var $newPass2 = $("#password2");
    var $currentUser = $("#userName");
    var $currentPass = $("#passWord");
    var $submit = $("#submit");
    var $createSubmit = $("#createSubmit");
    var password1;
    var password2;
    var newUser;
    var newEmail;
    var $userHtml=$("#userPage");
    
    $createSubmit.on("click",function(){

        event.preventDefault();
        console.log("create submit button");
        password1 = $newPass.val().trim();
        password2 = $newPass2.val().trim();
        newEmail = $newEmail.val().trim();
        newUser = $newUser.val().trim().toLowerCase();
        if(password1!="" && newUser!="" && password1==password2){
            newUser = {
                name: newUser,
                password: password1,
                email: newEmail
            }
            console.log(newUser);
            $.post("/api/newUsers", newUser).then(function(data){
                console.log("Data from user.js");
                console.log(data);
            });
        }
        else{
            alert("Invalid information or Password do not match try again!");
        }
    })
    //==============================
    $submit.on("click", function(){
        event.preventDefault();
        console.log("User Sign In");
        currentUser = $currentUser.val().trim().toLowerCase();
        currentPass = $currentPass.val().trim();
        console.log(currentUser +"\n" + currentPass);
        var userSignIn = { 
            name: currentUser, 
            password: currentPass 
        } 
        $.post("/api/login", userSignIn).then(function(data){ 
                console.log("Sign In info: " + userSignIn); 
                console.log("Data coming back: " + data); 
                sessionStorage.id = data.id;
                
                if (data == "Nothing"){ 
                    alert("User Name or Password is incorrect"); 

                } 
                if(data!="Nothing"){ 
                    console.log("Not Nothing"); 
                    sessionStorage.name = data.name; 
                    sessionStorage.password = data.password;
                    //route to after sign in
                    window.location.replace("/welcome");
                    
                }
                 
            }); 
        });

//+++++++++++++++++++++++++++    
});