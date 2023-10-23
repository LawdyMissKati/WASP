$(".form-check-input").click(function() {
    $(".submit").css("background-color", "green");
});

// turn reading tile blue when on pre-reading or reading page
$(document).ready(function() {
  $("#reading-tile").css("background-color", "#007AB6");
});

// toggle lighting
var select_illumination_dropdown = document.getElementById("selectIllumination");
select_illumination_dropdown.addEventListener("change", function() {
  var selectedIllumination = select_illumination_dropdown.value;
$("#lighting").attr("src", selectedIllumination);
});



// New Pickpoint button
$(document).ready(function() {
    $("#targetElement").on("contextmenu", function(e) {
      // hides button until right click in plate image
      e.preventDefault();
      // shows button at location of right click
      $(".context-menu").css({
        top: e.pageY + "px",
        left: e.pageX + "px"
      }).show();
    });

    // Opens New Pickpoint modal when button is clicked 
    $("#pickpointBtn").on("click", function() {
      $("#modal-pickpoint").modal("show");
    });

    $('#modal-pickpoint').on('hidden.bs.modal', function () {
      // When the modal is closed, hide the button
      $('#pickpointBtn').hide();
    });

    // Add button click event
    $("#btnAdd").on("click", function() {
      $("#pickpointBtn").hide();
      $("#circle").show().draggable();
      $("#modal-pickpoint").modal("hide");
    });

    // Cancel button click event
    $("#btnCancel").on("click", function() {
      $("#pickpointBtn").hide();
      $("#pickpoint-modal").modal("hide");
    });
  });



// store options selected in new pickpoint modal
var select_isolate_dropdown = document.getElementById("isolate");
var select_quantity_dropdown = document.getElementById("quantity");
var selected_workup;
var selectedIsolate, selectedQuantity;
var pickpointpointSummary = document.getElementById("pickpointSummary");

select_isolate_dropdown.addEventListener("change", updatePickpointSummary);
select_quantity_dropdown.addEventListener("change", updatePickpointSummary);

// displays pickpoint summary
function updatePickpointSummary() {
  selectedIsolate = select_isolate_dropdown.value;
  selectedQuantity = select_quantity_dropdown.value;

  pickpointpointSummary.innerHTML = selectedIsolate + "<br>" + "1) Selected Test(s)<br>Isolate: A<br>Load: " + selectedQuantity;
};

// show pickpoint summary on hover over circle
$(document).ready(function() {
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


