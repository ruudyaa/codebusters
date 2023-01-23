document.addEventListener('DOMContentLoaded', function () {
  var toggleModalButtons = document.querySelectorAll('.toggle-modal');
  var toggleModalCloseButtons = document.querySelectorAll(
    '.toggle-modal-close'
  );
  var body = document.querySelector('body');

  toggleModalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.add('disable-scroll');
    });
  });

  toggleModalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.remove('disable-scroll');
    });
  });
});
