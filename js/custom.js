$("#bars").click(function () {
  $(".mobile-nav").toggle(200);
});
$("#close").click(function () {
  $(".mobile-nav").hide(200);
});
$(".mobile-nav li a").click(function () {
  $(".mobile-nav").hide(200);
});

// aos init
AOS.init();

// progress bar

$(document).ready(function () {
  $("#bar1").barfiller();
  $("#bar2").barfiller();
  $("#bar3").barfiller({ barColor: "#fc6" });
  $("#bar4").barfiller({ barColor: "#900", duration: 3000 });
  $("#bar5").barfiller({ barColor: "#200", duration: 3000 });
});

// const mail= document.getElementById("Email").value;
// const message = document.getElementById("message").value;

// smtp email sending server
function SendEmail(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ariyanmahmud02019@gmail.com",
    Password: "ariyanmahmud12345",
    To: "ariyanmahmud02019@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This email from Portfolio Website",
    Body: "message" + document.getElementById("message"),
  }).then((message) => alert(message));
}
