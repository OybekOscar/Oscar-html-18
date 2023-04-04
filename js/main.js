function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.bottom = "50px";
    } else {
      backtop.style.bottom = "-50px";
    }
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("myteam").style.fill = "#F67E7E";
    document.getElementById("nav").style.boxShadow="0px 5px 5px #F67E7E";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("myteam").style.fill = "white";
    document.getElementById("nav").style.boxShadow="none";
  }
}