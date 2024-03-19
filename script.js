$(document).ready(function () {
  $('#regForm').submit(function (event) {
    event.preventDefault();

    var id = $('#id').val();
    var fullname = $('#fullname').val();
    var address = $('#address').val();
    var status = $('#status').val();

    const data = {
      id,
      fullname,
      address,
      status,
    };

    $.post('http://localhost:3000/register', data, function (data) {
      var confirmationMsg = `
      <h2>Confirmation</h2>
      <p><b>ID:</b> ${data.id}</p>
      <p><b>Full Name:</b> ${data.fullname}</p>
      <p><b>Address:</b> ${data.address}</p>
      <p><b>Status:</b> ${data.status}</p>
      <p><b>Fee:</b> ${data.fee}</p>

      <button type="button" id="register">Register new attendee</button>
      `;

      $('#confirmation-notice').html(confirmationMsg).show();

      $('#register').on('click', function () {
        $('#confirmation-notice').hide();
        $('#registration-form').show();
      });
      $('#registration-form').hide();
    });
  });
});
