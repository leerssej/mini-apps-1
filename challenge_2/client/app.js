
$(document).ready(() => {
  console.log("doc loaded");
  $('.submit').click(function() {
    console.log('submit clicked');
    let inputJson = $('#json-input').val();
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