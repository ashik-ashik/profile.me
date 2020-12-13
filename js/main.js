
var typed3 = new Typed('#name', {
  strings: ['ashik ali'],
  typeSpeed: 90,
  backSpeed: 70,
  cursorChar: '|',
  smartBackspace: true,
  loop: true
});
// 
$(document).ready(function(){
    // Init AOS
    function aos_init() {
        AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });
})




  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("formal-webpage");
    var button = document.getElementById("submit");
    var status = document.getElementById("submition-info");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.classList.add('success');
      status.innerHTML = "Thank You!";
    }

    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }