$(document).on("turbolinks:load", function(){
  var selectedInput = null;
  $(function() {
    // for more inputs use $('input, select, textarea')
      $('input, select, textarea').focus(function() {
          selectedInput = this;
      }).blur(function(){
        if (selectedInput.value == "") {
          // if the input is empty but already has an error message
          try {
            var id_to_remove = "added-error" + selectedInput.id;
            document.getElementById(id_to_remove).remove();
          } catch (e) {
            console.log("Continue ...");
          }
          // if input is empty -> get the error message
          try {
            var error_message = selectedInput.getAttribute("message");
          } catch (e) {
            console.log("Continue ...");
          }

          if (error_message != null) {
            // add error message if given
            var element_id = selectedInput.id;
            var el = document.createElement("span");
            el.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>' + " " + error_message;
            el.id = "added-error" + element_id;
            el.className += " scv-error-message"
            var div = document.getElementById(element_id);
            insertAfter(div, el);
          }
        }else {
          // if input is not empty -> remove error message if any
          try {
            var id_to_remove = "added-error" + selectedInput.id;
            document.getElementById(id_to_remove).remove();
          } catch (e) {
            console.log("Continue ...");
          }

          // check if valid Email if the input type is email
          if(selectedInput.type == "email"){
            var get_value = selectedInput.value; // get the email address
            var atpos = get_value.indexOf("@");
            var dotpos = get_value.lastIndexOf(".");
            // check if the email address is valid
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=get_value.length) {
              var error_message = "Not a valid e-mail address";
              var element_id = selectedInput.id;
              var el = document.createElement("span");
              el.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>' + " " + error_message;
              el.id = "added-error" + element_id;
              el.className += " scv-error-message"
              var div = document.getElementById(element_id);
              insertAfter(div, el);
            }else{
              // if the email is valid -> remove the error message if any
              try {
                var id_to_remove = "added-error" + selectedInput.id;
                document.getElementById(id_to_remove).remove();
              } catch (e) {
                console.log("Continue ...");
              }
            }
          }
          // check if the input is password and its length
          if(selectedInput.type == "password"){
            if (selectedInput.value.length < 6) {
              var error_message = "Password must be at least 6 characters";
              var element_id = selectedInput.id;
              var el = document.createElement("span");
              el.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>' + " " + error_message;
              el.id = "added-error" + element_id;
              el.className += " scv-error-message"
              var div = document.getElementById(element_id);
              insertAfter(div, el);
            }else{
              // if the email is valid -> remove the error message if any
              try {
                var id_to_remove = "added-error" + selectedInput.id;
                document.getElementById(id_to_remove).remove();
              } catch (e) {
                console.log("Continue ...");
              }
            }
          }
        }
        // forget the input element
        selectedInput = null;

      });
  });
  // add error message after input
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
});
