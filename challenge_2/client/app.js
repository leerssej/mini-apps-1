function sendDataToServer(inputJson) {
  $.get({
    url: 'http://localhost:3001/data',
    contentType: 'plain/text',
  }).done(function (data) {
    console.log(data);
  });
  console.log("load performed");
}


$(document).ready(() => {
  console.log("doc loaded");

  $('.submit').click(function(e) {
    e.preventDefault();
    console.log('submit clicked');
    let inputJson = $('#json-input').val();
    console.log("sending: ", inputJson);
    sendDataToServer(inputJson);
  });

});

// $("#target").click(function () {
//   alert("Handler for .click() called.");
// });

// // A $( document ).ready() block.
// $(document).ready(function () {
//   console.log("ready!");
// });

console.log("Script Was Run outside of docReady")