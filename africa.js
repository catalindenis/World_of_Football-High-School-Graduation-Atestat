(function (el) {
    window.addEventListener("message", (event) => {
      if (event.origin.startsWith("https://www.sofascore")) {
        if (el.id === event.data.id) {
          el.style.height = event.data.height + "px";
        }
      }
    });
  })(document.getElementById("sofa-totw-embed-1848-41862-8890"));

  let videoList = document.querySelectorAll('.video-list-container .list');
  videoList.forEach(vid => {
    vid.onclick = () => {
      videoList.forEach(remove => { remove.classList.remove('active') });
      vid.classList.add('active');
      let src = vid.querySelector('iframe').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container iframe').src = src;
      document.querySelector('.main-video-container iframe').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
  });
  $(document).ready(function () {
    // set video srs 
    $('a').click(function () {
      $("video").html('<source src="' + $(this).data('link') + '"></source>');
    });
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlider: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
  var radius = 240;
  var autoRotate = true;
  var rotateSpeed = -60;
  var imgWidth = 120;
  var imgHeight = 170;

  var bgMusicControls = true;



  setTimeout(init, 100);

  var obox = document.getElementById('drag-container');
  var ospin = document.getElementById('spin-container');
  var aImg = ospin.getElementsByTagName('img');
  var aVid = ospin.getElementsByTagName('video');
  var aEle = [...aImg, ...aVid];


  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";


  var ground = document.getElementById('ground');
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {

    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }

  function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
  }

  var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;


  if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  }





  document.onpointerdown = function (e) {
    clearInterval(obox.timer);
    e = e || window.event;
    var sX = e.clientX,
      sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
        nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      obox.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(obox);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(obox.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };
  const navbarToggle = document.querySelector(".toggle");


  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
  });

  sr.reveal(
    `nav, .main-container,
.services-container,
.about-container,
.milestones-container,
.about-us-container,
.questions-container`,
    {
      interval: 200,
    }
  );
  /*tabs*/
  function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent22");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink22");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen22").click();


  /* LINEUPS*/
  function openCity(evt, cityName) {
    var j, t, ta;
    t = document.getElementsByClassName("t");
    for (j = 0; j < t.length; j++) {
      t[j].style.display = "none";
    }
    ta = document.getElementsByClassName("ta");
    for (j = 0; j < ta.length; j++) {
      ta[j].className = ta[j].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openCity2(e, c) {
    var k, tabcontent4, tablinks4;
    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for (k = 0; k < tabcontent4.length; k++) {
      tabcontent4[k].style.display = "none";
    }
    tablinks4 = document.getElementsByClassName("tablinks4");
    for (k = 0; k < tablinks4.length; k++) {
      tablinks4[k].className = tablinks4[k].className.replace(" active", "");
    }
    document.getElementById(c).style.display = "block";
    e.currentTarget.className += " active";
  }

  function openCity5(f, d) {
    var o, tabcontent5, tablinks5;
    tabcontent5 = document.getElementsByClassName("tabcontent5");
    for (o = 0; o < tabcontent5.length; o++) {
      tabcontent5[o].style.display = "none";
    }
    tablinks5 = document.getElementsByClassName("tablinks5");
    for (o = 0; o < tablinks5.length; o++) {
      tablinks5[o].className = tablinks5[o].className.replace(" active", "");
    }
    document.getElementById(d).style.display = "block";
    f.currentTarget.className += " active";
  }

  function openCity6(f6, d6) {
    var o6, tabcontent6, tablinks6;
    tabcontent6 = document.getElementsByClassName("tabcontent6");
    for (o6 = 0; o6 < tabcontent6.length; o6++) {
      tabcontent6[o6].style.display = "none";
    }
    tablinks6 = document.getElementsByClassName("tablinks6");
    for (o6 = 0; o6 < tablinks6.length; o6++) {
      tablinks6[o6].className = tablinks6[o6].className.replace(" active", "");
    }
    document.getElementById(d6).style.display = "block";
    f6.currentTarget.className += " active";
  }
  function openCity7(f7, d7) {
    var o7, tabcontent7, tablinks7;
    tabcontent7 = document.getElementsByClassName("tabcontent7");
    for (o7 = 0; o7 < tabcontent7.length; o7++) {
      tabcontent7[o7].style.display = "none";
    }
    tablinks7 = document.getElementsByClassName("tablinks7");
    for (o7 = 0; o7 < tablinks7.length; o7++) {
      tablinks7[o7].className = tablinks7[o7].className.replace(" active", "");
    }
    document.getElementById(d7).style.display = "block";
    f7.currentTarget.className += " active";
  }


  function openCity8(f8, d8) {
    var o8, tabcontent8, tablinks8;
    tabcontent8 = document.getElementsByClassName("tabcontent8");
    for (o8 = 0; o8 < tabcontent8.length; o8++) {
      tabcontent8[o8].style.display = "none";
    }
    tablinks8 = document.getElementsByClassName("tablinks8");
    for (o8 = 0; o8 < tablinks8.length; o8++) {
      tablinks8[o8].className = tablinks8[o8].className.replace(" active", "");
    }
    document.getElementById(d8).style.display = "block";
    f8.currentTarget.className += " active";
  }


  function openCity9(f9, d9) {
    var o9, tabcontent9, tablinks9;
    tabcontent9 = document.getElementsByClassName("tabcontent9");
    for (o9 = 0; o9 < tabcontent9.length; o9++) {
      tabcontent9[o9].style.display = "none";
    }
    tablinks9 = document.getElementsByClassName("tablinks9");
    for (o9 = 0; o9 < tablinks9.length; o9++) {
      tablinks9[o9].className = tablinks9[o9].className.replace(" active", "");
    }
    document.getElementById(d9).style.display = "block";
    f9.currentTarget.className += " active";
  }
  document.getElementById("dO9").click();
  document.getElementById("dO8").click();
  document.getElementById("dO7").click();
  document.getElementById("dO6").click();
  document.getElementById("dO5").click();
  document.getElementById("dO4").click();
  document.getElementById("dO3").click();

  function myFunctionC() {
    var x = document.getElementById("myLinksC");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }