function sendDataToServer(inputJson) {
  $.post({
    url: 'http://localhost:3001/data',
    contentType: 'text/plain',
    data: {inputJson},
  }).done(function (reply) {
    console.log("successfully sent to server, and response from server is: ", reply );
  }).fail(function () {
    console.log("error: data never left client")
  });
  // console.log("POST sent from client");
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

console.log("Script Was Run outside of docReady")