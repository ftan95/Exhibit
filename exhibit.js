function myFunction() {
  var w = window.innerWidth;
  if (w < 480) {
    var check1 = document.getElementById("rest");
    check1.classList.add("moreContent");
    var footer = document.getElementById("foot");
    footer.classList.add("showFooter");
    var check2 = document.getElementById("more");
    check2.classList.add("lessContent");
    var spanning = document.getElementById("mobile");
    spanning.classList.add("textpic");
    var test = document.getElementById("sketchcopy");
    test.classList.add("please");
  } else {
    var check1 = document.getElementById("rest");
    check1.classList.add("moreContent");
    var footer = document.getElementById("foot");
    footer.classList.add("showFooter");
    var check2 = document.getElementById("more");
    check2.classList.add("lessContent");
  
  }
}

function myFunction2() {
  var w = window.innerWidth;
  if (w < 480) {
    var check3 = document.getElementById("rest");
    check3.classList.remove("moreContent");
    var check4 = document.getElementById("more");
    check4.classList.remove("lessContent");
    var footer = document.getElementById("foot");
    footer.classList.remove("showFooter");
    var spanning = document.getElementById("mobile");
    spanning.classList.remove("textpic");
    var test = document.getElementById("sketchcopy");
    test.classList.remove("please");
  } 
  else if (w < 780) {
    var check3 = document.getElementById("rest");
    check3.classList.remove("moreContent");
    var check4 = document.getElementById("more");
    check4.classList.remove("lessContent");
  } else {
    var check3 = document.getElementById("rest");
    check3.classList.remove("moreContent");
    var check4 = document.getElementById("more");
    check4.classList.remove("lessContent");
    var footer = document.getElementById("foot");
    footer.classList.remove("showFooter");
  }
}

