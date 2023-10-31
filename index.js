// ************************************************************************************ Screening page ************************************************************************************
// $(function() {
//   for (var i = 1; i <=8; i + 2) {
//     $(".sample" + i).click(function() {
//       $("#teal" + i).css("opacity", "0.5");
//     });
//   };
// });

$(function() {
  $("#screening_tile").css("background-color", "#007AB6");
});

$(function() {
  $(".sample1").click(function() {
    $("#teal1").css("opacity", "0.5");
  });
});

$(function() {
  $(".sample2").click(function() {
    $("#pink2").css("opacity", "0.5");
  });
});


// ************************************************************************************ Reading page ************************************************************************************

//turn submit button green when resulting option is selected
$(".form-check-input").click(function() {
  $(".submit").css("background-color", "green");
});


// turn reading tile blue when on pre-reading or reading page
$(function() {
  $("#reading_tile").css("background-color", "#007AB6");
});

// toggle lighting
var select_illumination_dropdown = document.getElementById("selectIllumination");
select_illumination_dropdown.addEventListener("change", function() {
  var selectedIllumination = select_illumination_dropdown.value;
  $("#lighting").attr("src", selectedIllumination);
});

// New Pickpoint button
$(function() {
  $(".pic").on("contextmenu", function(event) {
    // hides button until right click in plate image
    event.preventDefault();
    // shows button at location of right click
    $(".context-menu").css({
      top: event.pageY + "px",
      left: event.pageX + "px"
    }).show();
  });

  // Opens New Pickpoint modal when button is clicked 
  $("#pickpointBtn").on("click", function() {
    $("#modal-pickpoint").modal("show");
  });



$(function() {
  var selectedIsolate, selectedQuantity, selectedWorkup, pickpointSummary;

  $("#btnAdd").click(function() {
    selectedIsolate = $("#isolate").find(":selected").text();
    selectedQuantity = $("#quantity").find(":selected").text();
    selectedWorkup = $("input[name='workup_options']:checked").val();
    pickpointpointSummary = document.getElementById("pickpointSummary");
    pickpointpointSummary.innerHTML = selectedIsolate + "<br>" + "1) " + selectedWorkup + "<br>" + "Isolate: A" + "<br>" + "Load: " + selectedQuantity;
  }); 
});

  // show pickpoint data on hover over circle
  $(function() {
    $("#circle").hover(
      function() {
        // mouse enter event: show pickpoint summary
        $(this).find("#pickpointSummary").show();
      },
      function() {
        // mouse leave event: hide the pickpoint summary
        $(this).find("#pickpointSummary").hide();
      }
    );
  });

  $('#modal-pickpoint').on('hidden.bs.modal', function () {
    // When the modal is closed, hide the button
    $('#pickpointBtn').hide();
  });

  // Add button click event
  $("#btnAdd").on("click", function() {
    $("#pickpointBtn").hide();
    $("#circle").show();
    $("#modal-pickpoint").modal("hide");
  });

  // Cancel button click event
  $("#btnCancel").on("click", function() {
    $("#pickpointBtn").hide();
    $("#pickpoint-modal").modal("hide");
  });
});



