$(document).ready(function(){
    $("#design").click(function(){
       $(".pic1-onclick").toggle();
       $(".design-pic").toggle();
    });
 
    $("#development").click(function(){
       $(".pic2-onclick").toggle();
       $(".dev-pic").toggle();
    });
 
    $("#product").click(function(){
        $(".pic3-onclick").toggle();
        $(".product-pic").toggle();
    });
    $(".inquiry").click(function(event)
    {
       event.preventDefault();
       var email=$("#email").val();
       if ($("#name").val()==""){
          alert("please insert name")
       }
       else if ($("email").val()==""){
          alert("please insert email")
       }
       else if ($("#subject").val()==""){
           alert("Please insert your subject")
       }
       else{
        alert("Hey!!"+ email + "Thank you for patnering with us,will get intouch soon");}
    });
 });