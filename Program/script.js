
// // -------------------- on page load ----------------

// window.onload = function(){

//     defineData();
//     drawStartPage();
//     drawTimeline();
//     scrollToBottom();
  
//     document.getElementById("timeline").focus();
//     window.onscroll = function() { pageScrolled() };
//     window.onresize = function() { drawStartPage(); };
//     window.onbeforeunload = function() { scrollToBottom(); } // scroll down on refresh
  
//   };
  
//   // -------------------- set data --------------------
  
//   function defineData(){
  
//     window.incrementHeight = 25;
//     window.scrollUp = document.getElementById("scrollUp");
//     window.skipAhead = document.getElementById("skipAhead");
//     window.navFull = document.getElementById("navFull");
//     window.pageMap = document.getElementById("map");
//     window.windowHeight = 0;
//     window.maxTop = 0;
//     window.animatingNow = "no";
  
//     window.items = '{ "items" : [' +
//     '{"year":"0","t1":"Humans","t2":"Only the last 300 thousand years<br />(thickness of line!)","pic":"0"},'+
//     '{"year":"14","t1":"Great Apes","t2":"They&#39;rrrrre great!","pic":"1"},'+
//     '{"year":"65","t1":"RIP Dinosaurs","t2":"Dinosaurs go extinct","pic":"2"},'+
//     '{"year":"90","t1":"Snakes","t2":"Slither in","pic":"4"},'+
//     '{"year":"100","t1":"Bees","t2":"Bzzzzzzzzzzz","pic":"5"},'+
//     '{"year":"130","t1":"Flowers","t2":"Flowering plants evolve","pic":"6"},'+
//     '{"year":"140","t1":"Ants","t2":"Come marching in","pic":"3"},'+
//     '{"year":"150","t1":"Birds","t2":"Take to the skies","pic":"7"},'+
//     '{"year":"200","t1":"Mammals","t2":"Getting kind of hairy","pic":"8"},'+
//     '{"year":"225","t1":"Finally Dinosaurs!","t2":"Dinosaurs evolve","pic":"9"},'+
//     '{"year":"250","t1":"Siberian Volcano","t2":"Kills 70% of land species","pic":"10"},'+
//     '{"year":"280","t1":"Beetles","t2":"Meet the beetles","pic":"11"},'+
//     '{"year":"320","t1":"Reptiles","t2":"But still no dinosaurs!","pic":"12"},'+
//     '{"year":"360","t1":"Crabs","t2":"Just a pinch","pic":"13"},'+
//     '{"year":"370","t1":"Amphibians","t2":"On land and water","pic":"14"},'+
//     '{"year":"385","t1":"Forests","t2":"First forests","pic":"15"},'+
//     '{"year":"395","t1":"First Tetrapods","t2":"Fish out of water!","pic":"16"},'+
//     '{"year":"420","t1":"Arachnids","t2":"Creep in","pic":"17"},'+
//     '{"year":"475","t1":"Land plants","t2":"It&#39;s getting green","pic":"18"},'+
//     '{"year":"500","t1":"Euthycarcinoids","t2":"First land explorers","pic":"19"},'+
//     '{"year":"530","t1":"Jawless Fish","t2":"First fish evolve","pic":"20"},'+
//     '{"year":"570","t1":"Arthropods","t2":"Arthropods evolve","pic":"21"},'+
//     '{"year":"600","t1":"You Skipped 4 Billion Years!","t2":"Keep scrolling up","pic":"22"},'+
//     '{"year":"1100","t1":"Reproduction","t2":"Reproducing organisms","pic":"23"},'+
//     '{"year":"2100","t1":"Eukaryotes","t2":"Membrane-bound organelles","pic":"24"},'+
//     '{"year":"2300","t1":"Earth Freezes Over","t2":"Brrrrrrrrrrr!","pic":"25"},'+
//     '{"year":"3500","t1":"Oxygen","t2":"Air time!","pic":"26"},'+
//     '{"year":"3800","t1":"Life","t2":"Single cell organisms","pic":"27"},'+
//     '{"year":"4400","t1":"First water","t2":"Thirsty?","pic":"28"},'+
//     '{"year":"4580","t1":"Skip Ahead","t2":"Things are slow for a while","pic":"29"},'+
//     '{"year":"4600","t1":"Hello World!","t2":"Earth is formed","pic":"30"}'+
//     ']}';
  
//     window.eraYears = [65,250,540,1000,1600,2500,2800,3200,3600,4000];
//     window.eraNames = ['Cenozoic Era','Mesozoic Era','Paleozoic Era','Neoproterozoic Era','Mesoproterozoic Era','Paleoproterozoic Era','Neoarchean Era','Mesoarchean Era','Paleoarchean Era','Eoarchean Era'];
//     window.eraColors = ['89a6b8','ffa154','ffc32f','ffa154','89a6b8','ffc32f','ffa154','89a6b8','ffc32f','ffa154'];
  
//   }
  
//   // -------------------- size start page --------------------
  
//   function drawStartPage() {
  
//     // change if resized more than 100px - avoids ios header change
//     if ( Math.abs(document.body.clientHeight - windowHeight) > 100 ){
  
//       // get sizes
//       windowHeight = document.body.clientHeight;
//       var startPage = document.getElementById("startPage");
//       var startPageContent = document.getElementById("startPageContent");
//       var startPageContentHeight = startPageContent.clientHeight;
  
//       // set styles
//       startPage.style.height = windowHeight+"px";
//       var topOfContent = (windowHeight/2) - (startPageContentHeight/2);
//       startPageContent.style.marginTop = topOfContent+"px";
  
//     }
  
//   }
  
//   // -------------------- draw page --------------------
  
//   function drawTimeline() {
  
//     // parse json
//     var itm = JSON.parse(window.items);
//     window.elements = [];
  
//     // set current era
//     var currentEra = 0;
  
//     // loop through years
//     for (year = 0; year <= 4610; year++) {
  
//       // set variables
//       var t1 = "";
//       var t2 = "";
//       var pic = "";
//       var contentDiv = "";
  
//       // date markers
//       if (year == 0) { var dateDiv = "<div class='date'><span class='dateNum'>Today</span></div>"; }
//       else if (year == 4610) { var dateDiv = ""; }
//       else if (year % 10 === 0) {
//         if (year >= 1000) { var dateDiv = "<div class='date'><span class='dateNum'>"+(year/1000).toFixed(2)+"</span><span class='dateM'> B<br /></span><span class='dateLabel'>years ago</span></div>"; }
//         else { var dateDiv = "<div class='date'><span class='dateNum'>"+year+"</span><span class='dateM'> M<br /></span><span class='dateLabel'>years ago</span></div>"; }
//       }
//       else { dateDiv=""; }
  
//       // loop through all items
//       for (n = 0; n < itm.items.length; n++){
  
//         // see if this year is in array
//         if ( itm.items[n].year == year ){
  
//           // if in array - set parameters of item
//           t1 = itm.items[n].t1;
//           t2 = itm.items[n].t2;
//           pic = itm.items[n].pic;
  
//           // add to elements array
//           elements.push(year);
  
//         }
//       }
  
//       // adjust for image size
//       var imageAdjust = pic * -160;
  
//       // define content div
//       if (t1){
//         if (year == 4580) { contentDiv = "<div class='content contentClick' id='section"+year+"' onclick='jumpTo(600)' ><div class='tImage' style='background-position: 0px "+imageAdjust+"px;''></div><br /><span class='t1'>"+t1+"<br /></span><span class='t2'>"+t2+"</span></div>"; }
//         else if (year == 0) { contentDiv = "<div class='contentHumans' id='section"+year+"'><div class='tImage' style='background-position: 0px "+imageAdjust+"px;''></div><br /><span class='t1'>"+t1+"<br /></span><span class='t2'>"+t2+"</span></div>"; }
//         else { contentDiv = "<div class='content' id='section"+year+"'><div class='tImage' style='background-position: 0px "+imageAdjust+"px;''></div><br /><span class='t1'>"+t1+"<br /></span><span class='t2'>"+t2+"</span></div>"; }
//       }
//       else { contentDiv = ""; }
  
//       // create div
//       var iDiv = document.createElement('div');
  
//       // determine section background color
//       var theColor = "#"+eraColors[currentEra];
//       if (year == (eraYears[currentEra]-1)){
//         eraDiv = "<div class='eraLabel' id='thisEra"+year+"'>"+eraNames[currentEra]+"</div>";
//         currentEra = currentEra + 1;
//       }
//       else { eraDiv="";}
  
//       // set div properties
//       iDiv.className = 'yearsBlock';
//       iDiv.innerHTML = dateDiv+eraDiv+contentDiv;
//       iDiv.style.backgroundColor = theColor;
  
//       // add div to page
//       document.getElementById("timeline").appendChild(iDiv);
  
//     } // end loop
  
//   } // end function
  
//   // -------------------- scroll to bottom --------------------
  
//   function scrollToBottom(){
  
//     window.scrollTo(0,document.body.scrollHeight);
  
//   }
  
//   // -------------------- on scrolling --------------------
  
//   function pageScrolled() {
  
//     // get body heights
//     var scrollTop = document.body.scrollTop;
//     var scrollHeight = document.body.scrollHeight;
//     var windowHeight = document.body.clientHeight;
  
//     // calculate percentage down
//     maxTop = scrollHeight - windowHeight;
//     var percentDown = scrollTop / maxTop;
  
//     // adjust map line
//     var mapHeight = pageMap.clientHeight;
//     var mapDot = percentDown * mapHeight;
//     document.getElementById("mapDot").style.top = mapDot;
  
//     // loop through elements
//     for (g = 0; g < elements.length; g++) {
  
//       // set divnum
//       var divnum = elements[g];
  
//       // calculate placement
//       var elementTop = document.getElementById("section"+divnum).offsetTop;
//       var elementHeight = document.getElementById("section"+divnum).clientHeight;
//       var elementTopOfScreen = elementTop - scrollTop;
//       var elementCenterOfScreen = elementTopOfScreen - (windowHeight/2) + (elementHeight/2);
//       var absoluteCenterDistance = Math.abs(elementCenterOfScreen);
//       var halfWindowHeight = windowHeight/2;
  
//       // scale content
//       var percentElementDownScreen = 1.5 - (absoluteCenterDistance / halfWindowHeight) ;
//       var shouldScale = "yes";
//       if (percentElementDownScreen < 0.1) { shouldScale = "no"; }
//       if (percentElementDownScreen < 0.3) { percentElementDownScreen = 0.3; }
//       else if (percentElementDownScreen > 1) { percentElementDownScreen = 1; }
  
//       // scale div only if near screen
//       if (shouldScale == "yes"){
//         document.getElementById("section"+divnum).style.transform = "scale("+percentElementDownScreen+")";
//         document.getElementById("section"+divnum).style.opacity = percentElementDownScreen;
//       }
  
//     }
  
//     // adjust top message
//     adjustTopMessage(scrollTop);
//     mapVisibility(scrollTop);
//     navVisibility(scrollTop);
//     deloreanVisibility(scrollTop);
//     otherwayVisibility(scrollTop);
  
//   }
  
//   // -------------------- years to pixels --------------------
  
//   function yearsToPixels(years){
//     return years * incrementHeight;
//   }
  
//   // -------------------- adjust top message --------------------
  
//   function adjustTopMessage(scrollTop){
  
//     // scroll up
//     if (scrollTop > yearsToPixels(4610)){ scrollUp.style.display = "inherit"; }
//     else { scrollUp.style.display = "none"; }
  
//     // skip ahead
//     if (scrollTop < yearsToPixels(4560) && scrollTop > yearsToPixels(610) && animatingNow == "no"){ skipAhead.style.display = "inherit"; }
//     else { skipAhead.style.display = "none"; }
  
//   }
  
//   // -------------------- show hide map --------------------
  
//   function mapVisibility(scrollTop){
  
//     if (scrollTop < yearsToPixels(4610)){ pageMap.style.display = "inherit"; }
//     else { pageMap.style.display = "none"; }
  
//   }
  
//   // -------------------- adjust nav visibility --------------------
  
//   function navVisibility(scrollTop){
  
//     if (scrollTop < yearsToPixels(4610)){ navFull.style.display = "inherit"; }
//     else { navFull.style.display = "none"; }
  
//   }
  
//   // -------------------- delorean visibility --------------------
  
//   function deloreanVisibility(scrollTop) {
  
//     if (animatingNow == "up" ){
//       document.getElementById("section600").style.display = "inherit";
//     }
//     else if (scrollTop < yearsToPixels(570) || scrollTop > yearsToPixels(630)) {
//       document.getElementById("section600").style.display = "none";
//     }
  
//   }
  
//   // -------------------- other way message - -------------------
  
//   function otherwayVisibility(scrollTop) {
  
//     if (scrollTop > maxTop) { document.getElementById("otherWay").style.display = "inherit"; }
//     else { document.getElementById("otherWay").style.display = "none"; }
  
//   }
  
//   // -------------------- jump to page section --------------------
  
//   function jumpTo(newYear) {
  
//     // animate if not already animating
//     if (animatingNow == "no"){
  
//       // set parameters
//       animatingNow = "yes";
//       var duration = 4000;
//       if (newYear == 4600){ duration = 2000; }
//       var toPos = yearsToPixels(newYear);
  
//       // center icon on page if higher up
//       if (newYear < 4200) {
//         windowHeight = document.body.clientHeight;
//         toPos = toPos - ((windowHeight/2)-200);
//       }
  
//       // dont scroll past bottom
//       if (toPos >= maxTop) { toPos = maxTop; }
  
//       // set animation parameters
//       var startPos = window.scrollY,
//           changePos = toPos - startPos,
//           increment = 20;
  
//       // animating direction
//       if (startPos >= toPos) { animatingNow = "up"; }
//       else { animatingNow = "down"; }
  
//       // animate function
//       var animateScroll = function(elapsedTime) {
//           elapsedTime += increment;
//           var position = easeInOut(elapsedTime, startPos, changePos, duration);
//           window.scrollTo( 0, position );
//           if (elapsedTime < duration) {
//               setTimeout(function() {
//                   animateScroll(elapsedTime);
//               }, increment);
//           }
//           else { animatingNow = "no"; }
//       };
  
//       // start animation
//       animateScroll(0);
  
//     }
  
//   }
  
//   // -------------------- ease in out --------------------
  
//   function easeInOut(currentTime, start, change, duration) {
  
//       currentTime /= duration / 2;
//       if (currentTime < 1) { return change / 2 * currentTime * currentTime + start; }
//       currentTime -= 1;
//       return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  
//   }
  
  // -------------------- Sildeshow -----------------------

  var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}