$(function() {
  $("#hamburger-nav-icon").click(function(){
    $("#filter-form").toggleClass("hide");
  });

  $("#filter-form").submit(function(event) {
    event.preventDefault();

    $("#filter-form").toggleClass("hide");
  })
});
