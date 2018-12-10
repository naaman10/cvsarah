$(document).ready(function() {
  window.scrollTo(0, 0);
  $("#content").load('/ajax/about.html');
  $("#about").addClass('active');
});
$(".nav-item").on('click', function() {
  event.preventDefault();
  $(".nav-item.active").removeClass('active');
  var pageID = $( this ).attr('data-pageID');
  console.log('item click: ' + pageID)
  $("#content").load('/ajax/' + pageID +'.html',   function() {
    $( "#" + pageID ).addClass('active');
  });
});
