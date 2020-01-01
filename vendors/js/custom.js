$(document).ready(function(){

  //Sticky Menu
  $(".js_services_section").waypoint(function(direction){
    if(direction=="down"){
          $("nav").addClass("sticky");
    } else {
          $("nav").removeClass("sticky");
    }
  });

  // Smooth Scroll for IE/ Edge / Safari
  $("a").on('click', function(event){
      if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                  scrollTop: $(hash).offset().top}, 800, function(){
                    window.location.has = hash;
                });
      } else {

      }
  });

  //MixItUp for (Portfolio Section)
  var mix = mixitup('.container');
});
function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
