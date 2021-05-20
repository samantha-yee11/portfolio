
var current = null;

$(document).ready(function(){
  
  $('.play-icon').click(function () {
    play();  }
  );
  $('#prev').click(function () {
    console.log("prev clicked");
    prev();
  });
  
  $('#next').on("click", function () {
    next();
    console.log("next clicked");
  });



function next() {
  if ($('#item-1').is(':checked')) {
    console.log("item one test done");
    $("#item-1").prop('checked', false);
    $("#item-2").prop('checked', true);
  } else if ($('#item-2').is(':checked')) {
    $("#item-2").prop('checked', false);
    $("#item-3").prop('checked', true);
  } else if ($('#item-3').is(':checked')) {
    $("#item-3").prop('checked', false);
    $("#item-4").prop('checked', true);
  } else if ($('#item-4').is(':checked')) {
    $("#item-4").prop('checked', false);
    $("#item-5").prop('checked', true);
  } else if ($('#item-5').is(':checked')) {
    $("#item-5").prop('checked', false);
    $("#item-1").prop('checked', true);
  } else {
    console.log("failed");
  }
}

function prev() {
  if ($('#item-1').is(':checked')) {
    $("#item-1").prop('checked', false);
    $("#item-5").prop('checked', true);
  } else if ($('#item-2').is(':checked')) {
    $("#item-2").prop('checked', false);
    $("#item-1").prop('checked', true);
  } else if ($('#item-3').is(':checked')) {
    $("#item-3").prop('checked', false);
    $("#item-2").prop('checked', true);
  } else if ($('#item-4').is(':checked')) {
    $("#item-4").prop('checked', false);
    $("#item-3").prop('checked', true);
  } else if ($('#item-5').is(':checked')) {
    $("#item-5").prop('checked', false);
    $("#item-4").prop('checked', true);
  } else {
    console.log("failed");
  }

}

function play() {
  if ($("#item-1").is(':checked')) {
    window.location.href = 'projects/WeHoElementary/westHollywood.html';
  } else if ($("#item-2").is(':checked')) {
    window.location.href = "projects/SaveTheWhales/SaveTheWhales.html";
  } else if ($("#item-3").is(':checked')) {
    window.location.href = "projects/USDA/USDA.html";
  } else if ($("#item-4").is(':checked')) {
    window.location.href = "projects/KidsTeam/KidsTeam.html";
  } else if ($("#item-5").is(':checked')) {
    window.location.href = "projects/Navi/Navi.html";
  } else {
    console.log("failed");
  }

}

});
