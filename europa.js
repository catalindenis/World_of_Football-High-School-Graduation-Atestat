function openCity2(evt2, cityName2) {
    var j, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (j = 0; j < tabcontent2.length; j++) 
    {
      tabcontent2[j].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (j = 0; j < tablinks2.length; j++) {
      tablinks2[j].className = tablinks2[j].className.replace(" active", "");
    }
    document.getElementById(cityName2).style.display = "block";
    evt2.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();
      function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
      
      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }
      function openCity(evt, cityName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " w3-red";
      }
  const h = document.querySelector("#h");
  const b = document.body;
  
  let base = (e) => {
      var x = e.pageX / window.innerWidth - 0.5;
      var y = e.pageY / window.innerHeight - 0.5;
      h.style.transform = `
          perspective(90vw)
          rotateX(${ y * 4  + 75}deg)
          rotateZ(${ -x * 12  + 45}deg)
          translateZ(-9vw)
      `;
  }
  
  b.addEventListener("pointermove", base);
  
        
      // <![CDATA[  <-- For SVG support
      if ('WebSocket' in window) {
          (function () {
              function refreshCSS() {
                  var sheets = [].slice.call(document.getElementsByTagName("link"));
                  var head = document.getElementsByTagName("head")[0];
                  for (var i = 0; i < sheets.length; ++i) {
                      var elem = sheets[i];
                      var parent = elem.parentElement || head;
                      parent.removeChild(elem);
                      var rel = elem.rel;
                      if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                          var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                          elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                      }
                      parent.appendChild(elem);
                  }
              }
              var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
              var address = protocol + window.location.host + window.location.pathname + '/ws';
              var socket = new WebSocket(address);
              socket.onmessage = function (msg) {
                  if (msg.data == 'reload') window.location.reload();
                  else if (msg.data == 'refreshcss') refreshCSS();
              };
              if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                  console.log('Live reload enabled.');
                  sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
              }
          })();
      }
      else {
          console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
      }
      // ]]>
    let heading = document.querySelector(".heading");
  let count = 0;
  let countTwo = heading.dataset.title.length;
  
  setTimeout(myFunc, 1000);
  
  function myFunc() {
    let name = heading.dataset.title;
    heading.innerHTML = "";
  
    setInterval(() => {
      runFunc();
    }, 1200);
  
    function runFunc() {
      if (count < name.length) {
        let createSpan = document.createElement("span");
        createSpan.setAttribute("class", " ");
        createSpan.setAttribute("class", "animationOne");
        createSpan.innerHTML = name.charAt(count);
        heading.append(createSpan);
        count++;
      } else {
        heading.children[countTwo-1].className = "animationTwo";
        countTwo--;
        if (countTwo <= 0) {
          heading.innerHTML = " ";
          count = 0;
          countTwo = heading.dataset.title.length;
        }
      }
    }
  }
  
  function openCity4(evt4, cityName4) {
    var i4, tabcontent4, tablinks4;
    tabcontent4 = document.getElementsByClassName("tabcontent4");
    for (i4 = 0; i4 < tabcontent4.length; i4++) {
      tabcontent4[i4].style.display = "none";
    }
    tablinks4 = document.getElementsByClassName("tablinks4");
    for (i4 = 0; i4 < tablinks4.length; i4++) {
      tablinks4[i4].className = tablinks4[i4].className.replace(" active", "");
    }
    document.getElementById(cityName4).style.display = "block";
    evt4.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen4").click();

  function openCity8(evt8, cityName8) 
{
  var i8, tabcontent8, tablinks8;
  tabcontent8 = document.getElementsByClassName("tabcontent8");
  for (i8 = 0; i8 < tabcontent8.length; i8++) {
    tabcontent8[i8].style.display = "none";
  }
  tablinks8 = document.getElementsByClassName("tablinks8");
  for (i8 = 0; i8 < tablinks8.length; i8++) {
    tablinks8[i8].className = tablinks8[i8].className.replace(" active", "");
  }
  document.getElementById(cityName8).style.display = "block";
  evt8.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen8").click();

function openCity9(evt9, cityName9) 
{
  var i9, tabcontent9, tablinks9;
  tabcontent9 = document.getElementsByClassName("tabcontent9");
  for (i9 = 0; i9 < tabcontent9.length; i9++) {
    tabcontent9[i9].style.display = "none";
  }
  tablinks9 = document.getElementsByClassName("tablinks9");
  for (i9 = 0; i9 < tablinks9.length; i9++) {
    tablinks9[i9].className = tablinks9[i9].className.replace(" active", "");
  }
  document.getElementById(cityName9).style.display = "block";
  evt9.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen9").click();

function openCity11(evt11, cityName11) 
{
  var i11, tabcontent11, tablinks11;
  tabcontent11 = document.getElementsByClassName("tabcontent11");
  for (i11 = 0; i11 < tabcontent11.length; i11++) {
    tabcontent11[i11].style.display = "none";
  }
  tablinks11 = document.getElementsByClassName("tablinks11");
  for (i11 = 0; i11 < tablinks11.length; i11++) {
    tablinks11[i11].className = tablinks11[i11].className.replace(" active", "");
  }
  document.getElementById(cityName11).style.display = "block";
  evt11.currentTarget.className += " active";
}
document.getElementById("defaultOpen11").click();

function openCity12(evt12, cityName12) 
{
  var i12, tabcontent12, tablinks12;
  tabcontent12 = document.getElementsByClassName("tabcontent12");
  for (i12 = 0; i12 < tabcontent12.length; i12++) {
    tabcontent12[i12].style.display = "none";
  }
  tablinks12 = document.getElementsByClassName("tablinks12");
  for (i12 = 0; i12 < tablinks12.length; i12++) {
    tablinks12[i12].className = tablinks12[i12].className.replace(" active", "");
  }
  document.getElementById(cityName12).style.display = "block";
  evt12.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen12").click();

function openCity13(evt13, cityName13) 
{
  var i13, tabcontent13, tablinks13;
  tabcontent13 = document.getElementsByClassName("tabcontent13");
  for (i13 = 0; i13 < tabcontent13.length; i13++) {
    tabcontent13[i13].style.display = "none";
  }
  tablinks13 = document.getElementsByClassName("tablinks13");
  for (i13 = 0; i13 < tablinks13.length; i13++) {
    tablinks13[i13].className = tablinks13[i13].className.replace(" active", "");
  }
  document.getElementById(cityName13).style.display = "block";
  evt13.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen13").click();

function openCity14(evt14, cityName14) 
{
  var i14, tabcontent14, tablinks14;
  tabcontent14 = document.getElementsByClassName("tabcontent14");
  for (i14 = 0; i14 < tabcontent14.length; i14++) {
    tabcontent14[i14].style.display = "none";
  }
  tablinks14 = document.getElementsByClassName("tablinks14");
  for (i14 = 0; i14 < tablinks14.length; i14++) {
    tablinks14[i14].className = tablinks14[i14].className.replace(" active", "");
  }
  document.getElementById(cityName14).style.display = "block";
  evt14.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen14").click();

function openCity15(evt15, cityName15) 
{
  var i15, tabcontent15, tablinks15;
  tabcontent15 = document.getElementsByClassName("tabcontent15");
  for (i15 = 0; i15 < tabcontent15.length; i15++) {
    tabcontent15[i15].style.display = "none";
  }
  tablinks15 = document.getElementsByClassName("tablinks15");
  for (i15 = 0; i15 < tablinks15.length; i15++) {
    tablinks15[i15].className = tablinks15[i15].className.replace(" active", "");
  }
  document.getElementById(cityName15).style.display = "block";
  evt15.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen15").click();
function openCity16(evt16, cityName16) 
{
  var i16, tabcontent16, tablinks16;
  tabcontent16 = document.getElementsByClassName("tabcontent16");
  for (i16 = 0; i16 < tabcontent16.length; i16++) {
    tabcontent16[i16].style.display = "none";
  }
  tablinks16 = document.getElementsByClassName("tablinks16");
  for (i16 = 0; i16 < tablinks16.length; i16++) {
    tablinks16[i16].className = tablinks16[i16].className.replace(" active", "");
  }
  document.getElementById(cityName16).style.display = "block";
  evt16.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen16").click();

function openCity17(evt17, cityName17) 
{
  var i17, tabcontent17, tablinks17;
  tabcontent17 = document.getElementsByClassName("tabcontent17");
  for (i17 = 0; i17 < tabcontent17.length; i17++) {
    tabcontent17[i17].style.display = "none";
  }
  tablinks17 = document.getElementsByClassName("tablinks17");
  for (i17 = 0; i17 < tablinks17.length; i17++) {
    tablinks17[i17].className = tablinks17[i17].className.replace(" active", "");
  }
  document.getElementById(cityName17).style.display = "block";
  evt17.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen17").click();
function openCity18(evt18, cityName18) 
{
  var i18, tabcontent18, tablinks18;
  tabcontent18 = document.getElementsByClassName("tabcontent18");
  for (i18 = 0; i18 < tabcontent18.length; i18++) {
    tabcontent18[i18].style.display = "none";
  }
  tablinks18 = document.getElementsByClassName("tablinks18");
  for (i18 = 0; i18 < tablinks18.length; i18++) {
    tablinks18[i18].className = tablinks18[i18].className.replace(" active", "");
  }
  document.getElementById(cityName18).style.display = "block";
  evt18.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen18").click();

function openCity19(evt19, cityName19) 
{
  var i19, tabcontent19, tablinks19;
  tabcontent19 = document.getElementsByClassName("tabcontent19");
  for (i19 = 0; i19 < tabcontent19.length; i19++) {
    tabcontent19[i19].style.display = "none";
  }
  tablinks19 = document.getElementsByClassName("tablinks19");
  for (i19 = 0; i19 < tablinks19.length; i19++) {
    tablinks19[i19].className = tablinks19[i19].className.replace(" active", "");
  }
  document.getElementById(cityName19).style.display = "block";
  evt19.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen19").click();
function openCity191(evt191, cityName191) 
{
  var i191, tabcontent191, tablinks191;
  tabcontent191 = document.getElementsByClassName("tabcontent191");
  for (i191 = 0; i191 < tabcontent191.length; i191++) {
    tabcontent191[i191].style.display = "none";
  }
  tablinks191 = document.getElementsByClassName("tablinks191");
  for (i191 = 0; i191 < tablinks191.length; i191++) {
    tablinks191[i191].className = tablinks191[i191].className.replace(" active", "");
  }
  document.getElementById(cityName191).style.display = "block";
  evt191.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen191").click();

function openCity192(evt192, cityName192) 
{
  var i192, tabcontent192, tablinks192;
  tabcontent192 = document.getElementsByClassName("tabcontent192");
  for (i192 = 0; i192 < tabcontent192.length; i192++) {
    tabcontent192[i192].style.display = "none";
  }
  tablinks192 = document.getElementsByClassName("tablinks192");
  for (i192 = 0; i192 < tablinks192.length; i192++) {
    tablinks192[i192].className = tablinks192[i192].className.replace(" active", "");
  }
  document.getElementById(cityName192).style.display = "block";
  evt192.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen192").click();

function openCity193(evt193, cityName193) 
{
  var i193, tabcontent193, tablinks193;
  tabcontent193 = document.getElementsByClassName("tabcontent193");
  for (i193 = 0; i193 < tabcontent193.length; i193++) {
    tabcontent193[i193].style.display = "none";
  }
  tablinks193 = document.getElementsByClassName("tablinks193");
  for (i193 = 0; i193 < tablinks193.length; i193++) {
    tablinks193[i193].className = tablinks193[i193].className.replace(" active", "");
  }
  document.getElementById(cityName193).style.display = "block";
  evt193.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen193").click();
function openCity194(evt194, cityName194) 
{
  var i194, tabcontent194, tablinks194;
  tabcontent194 = document.getElementsByClassName("tabcontent194");
  for (i194 = 0; i194 < tabcontent194.length; i194++) {
    tabcontent194[i194].style.display = "none";
  }
  tablinks194 = document.getElementsByClassName("tablinks194");
  for (i194 = 0; i194 < tablinks194.length; i194++) {
    tablinks194[i194].className = tablinks194[i194].className.replace(" active", "");
  }
  document.getElementById(cityName194).style.display = "block";
  evt194.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen194").click();
function openCity195(evt195, cityName195) 
{
  var i195, tabcontent195, tablinks195;
  tabcontent195 = document.getElementsByClassName("tabcontent195");
  for (i195 = 0; i195 < tabcontent195.length; i195++) {
    tabcontent195[i195].style.display = "none";
  }
  tablinks195 = document.getElementsByClassName("tablinks195");
  for (i195 = 0; i195 < tablinks195.length; i195++) {
    tablinks195[i195].className = tablinks195[i195].className.replace(" active", "");
  }
  document.getElementById(cityName195).style.display = "block";
  evt195.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen195").click();
function openCity196(evt196, cityName196) 
{
  var i196, tabcontent196, tablinks196;
  tabcontent196 = document.getElementsByClassName("tabcontent196");
  for (i196 = 0; i196 < tabcontent196.length; i196++) {
    tabcontent196[i196].style.display = "none";
  }
  tablinks196 = document.getElementsByClassName("tablinks196");
  for (i196 = 0; i196 < tablinks196.length; i196++) {
    tablinks196[i196].className = tablinks196[i196].className.replace(" active", "");
  }
  document.getElementById(cityName196).style.display = "block";
  evt196.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen196").click();

function openCity197(evt197, cityName197) 
{
  var i197, tabcontent197, tablinks197;
  tabcontent197 = document.getElementsByClassName("tabcontent197");
  for (i197 = 0; i197 < tabcontent197.length; i197++) {
    tabcontent197[i197].style.display = "none";
  }
  tablinks197 = document.getElementsByClassName("tablinks197");
  for (i197 = 0; i197 < tablinks197.length; i197++) {
    tablinks197[i197].className = tablinks197[i197].className.replace(" active", "");
  }
  document.getElementById(cityName197).style.display = "block";
  evt197.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen197").click();
function openCity198(evt198, cityName198) 
{
  var i198, tabcontent198, tablinks198;
  tabcontent198 = document.getElementsByClassName("tabcontent198");
  for (i198 = 0; i198 < tabcontent198.length; i198++) {
    tabcontent198[i198].style.display = "none";
  }
  tablinks198 = document.getElementsByClassName("tablinks198");
  for (i198 = 0; i198 < tablinks198.length; i198++) {
    tablinks198[i198].className = tablinks198[i198].className.replace(" active", "");
  }
  document.getElementById(cityName198).style.display = "block";
  evt198.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen198").click();

function openCity110(evt110, cityName110) 
{
  var i110, tabcontent110, tablinks110;
  tabcontent110 = document.getElementsByClassName("tabcontent110");
  for (i110 = 0; i110 < tabcontent110.length; i110++) {
    tabcontent110[i110].style.display = "none";
  }
  tablinks110 = document.getElementsByClassName("tablinks110");
  for (i110 = 0; i110 < tablinks110.length; i110++) {
    tablinks110[i110].className = tablinks110[i110].className.replace(" active", "");
  }
  document.getElementById(cityName110).style.display = "block";
  evt110.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen110").click();
function openCity109(evt109, cityName109) 
{
  var i109, tabcontent109, tablinks109;
  tabcontent109 = document.getElementsByClassName("tabcontent109");
  for (i109 = 0; i109 < tabcontent109.length; i109++) {
    tabcontent109[i109].style.display = "none";
  }
  tablinks109 = document.getElementsByClassName("tablinks109");
  for (i109 = 0; i109 < tablinks109.length; i109++) {
    tablinks109[i109].className = tablinks109[i109].className.replace(" active", "");
  }
  document.getElementById(cityName109).style.display = "block";
  evt109.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen109").click();
function openCity108(evt108, cityName108) 
{
  var i108, tabcontent108, tablinks108;
  tabcontent108 = document.getElementsByClassName("tabcontent108");
  for (i108 = 0; i108 < tabcontent108.length; i108++)
  {
    tabcontent108[i108].style.display = "none";
  }
  tablinks108 = document.getElementsByClassName("tablinks108");
  for (i108 = 0; i108 < tablinks108.length; i108++) 
  {
    tablinks108[i108].className = tablinks108[i108].className.replace(" active", "");
  }
  document.getElementById(cityName108).style.display = "block";
  evt108.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen108").click();
function openCity107(evt107, cityName107) 
{
  var i107, tabcontent107, tablinks107;
  tabcontent107 = document.getElementsByClassName("tabcontent107");
  for (i107 = 0; i107 < tabcontent107.length; i107++)
  {
    tabcontent107[i107].style.display = "none";
  }
  tablinks107 = document.getElementsByClassName("tablinks107");
  for (i107 = 0; i107 < tablinks107.length; i107++) 
  {
    tablinks107[i107].className = tablinks107[i107].className.replace(" active", "");
  }
  document.getElementById(cityName107).style.display = "block";
  evt107.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen107").click();
function openCity106(evt106, cityName106) 
{
  var i106, tabcontent106, tablinks106;
  tabcontent106 = document.getElementsByClassName("tabcontent106");
  for (i106 = 0; i106 < tabcontent106.length; i106++)
  {
    tabcontent106[i106].style.display = "none";
  }
  tablinks106 = document.getElementsByClassName("tablinks106");
  for (i106 = 0; i106 < tablinks106.length; i106++) 
  {
    tablinks106[i106].className = tablinks106[i106].className.replace(" active", "");
  }
  document.getElementById(cityName106).style.display = "block";
  evt106.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen106").click();
function openCity105(evt105, cityName105) 
{
  var i105, tabcontent105, tablinks105;
  tabcontent105 = document.getElementsByClassName("tabcontent105");
  for (i105 = 0; i105 < tabcontent105.length; i105++)
  {
    tabcontent105[i105].style.display = "none";
  }
  tablinks105 = document.getElementsByClassName("tablinks105");
  for (i105 = 0; i105 < tablinks105.length; i105++) 
  {
    tablinks105[i105].className = tablinks105[i105].className.replace(" active", "");
  }
  document.getElementById(cityName105).style.display = "block";
  evt105.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen105").click();
function openCity104(evt104, cityName104) 
{
  var i104, tabcontent104, tablinks104;
  tabcontent104 = document.getElementsByClassName("tabcontent104");
  for (i104 = 0; i104 < tabcontent104.length; i104++)
  {
    tabcontent104[i104].style.display = "none";
  }
  tablinks104 = document.getElementsByClassName("tablinks104");
  for (i104 = 0; i104 < tablinks104.length; i104++) 
  {
    tablinks104[i104].className = tablinks104[i104].className.replace(" active", "");
  }
  document.getElementById(cityName104).style.display = "block";
  evt104.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen104").click();

function openCity103(evt103, cityName103) 
{
  var i103, tabcontent103, tablinks103;
  tabcontent103 = document.getElementsByClassName("tabcontent103");
  for (i103 = 0; i103 < tabcontent103.length; i103++)
  {
    tabcontent103[i103].style.display = "none";
  }
  tablinks103 = document.getElementsByClassName("tablinks103");
  for (i103 = 0; i103 < tablinks103.length; i103++) 
  {
    tablinks103[i103].className = tablinks103[i103].className.replace(" active", "");
  }
  document.getElementById(cityName103).style.display = "block";
  evt103.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen103").click();

function openCity102(evt102, cityName102) 
{
  var i102, tabcontent102, tablinks102;
  tabcontent102 = document.getElementsByClassName("tabcontent102");
  for (i102 = 0; i102 < tabcontent102.length; i102++)
  {
    tabcontent102[i102].style.display = "none";
  }
  tablinks102 = document.getElementsByClassName("tablinks102");
  for (i102 = 0; i102 < tablinks102.length; i102++) 
  {
    tablinks102[i102].className = tablinks102[i102].className.replace(" active", "");
  }
  document.getElementById(cityName102).style.display = "block";
  evt102.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen102").click();

function openCity101(evt101, cityName101) 
{
  var i101, tabcontent101, tablinks101;
  tabcontent101 = document.getElementsByClassName("tabcontent101");
  for (i101 = 0; i101 < tabcontent101.length; i101++)
  {
    tabcontent101[i101].style.display = "none";
  }
  tablinks101 = document.getElementsByClassName("tablinks101");
  for (i101 = 0; i101 < tablinks101.length; i101++) 
  {
    tablinks101[i101].className = tablinks101[i101].className.replace(" active", "");
  }
  document.getElementById(cityName101).style.display = "block";
  evt101.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen101").click();

function openCity100(evt100, cityName100) 
{
  var i100, tabcontent100, tablinks100;
  tabcontent100 = document.getElementsByClassName("tabcontent100");
  for (i100 = 0; i100 < tabcontent100.length; i100++)
  {
    tabcontent100[i100].style.display = "none";
  }
  tablinks100 = document.getElementsByClassName("tablinks100");
  for (i100 = 0; i100 < tablinks100.length; i100++) 
  {
    tablinks100[i100].className = tablinks100[i100].className.replace(" active", "");
  }
  document.getElementById(cityName100).style.display = "block";
  evt100.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen100").click();

function openCity1000(evt1000, cityName1000) 
{
  var i1000, tabcontent1000, tablinks1000;
  tabcontent1000 = document.getElementsByClassName("tabcontent1000");
  for (i1000 = 0; i1000 < tabcontent1000.length; i1000++)
  {
    tabcontent1000[i1000].style.display = "none";
  }
  tablinks1000 = document.getElementsByClassName("tablinks1000");
  for (i1000 = 0; i1000 < tablinks1000.length; i1000++) 
  {
    tablinks1000[i1000].className = tablinks1000[i1000].className.replace(" active", "");
  }
  document.getElementById(cityName1000).style.display = "block";
  evt1000.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1000").click();

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

function openCity7I(evt7I, cityName7I) 
{
  var i7I, tabcontent7I, tablinks7I;
  tabcontent7I = document.getElementsByClassName("tabcontent7I");
  for (i7I = 0; i7I < tabcontent7I.length; i7I++) 
  {
    tabcontent7I[i7I].style.display = "none";
  }
  tablinks7I = document.getElementsByClassName("tablinks7I");
  for (i7I = 0; i7I < tablinks7I.length; i7I++) 
  {
    tablinks7I[i7I].className = tablinks7I[i7I].className.replace(" active", "");
  }
  document.getElementById(cityName7I).style.display = "block";
  evt7I.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen7I").click();