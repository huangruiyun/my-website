$(document).ready(function(){
  $(".title").click(function(){
    $(this).next().slideToggle("slow");
  });
  $("li").click(function(){
    $(this).children(".prodetail").slideToggle("slow");
  });
   $("#blog-btn").click(function(){
    $(this).siblings("#javacode").slideToggle("slow");
  });
});

var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
