// $('.js-open-modal').click(function (event) {
//   event.preventDefault();

//   var modalName = $(this).attr('data-modal');
//   var modal = $('.js-modal[data-modal="' + modalName + '"]');
//   modal.addClass('is-hidden');
//   $('.js-overlay-modal').addClass('is-hidden');
// });

// $('.js-modal-close').click(function () {
//   $(this).parent('.js-modal').removeClass('is-hidden');
//   $('.js-overlay-modal').removeClass('is-hidden');
// });

// $('.js-overlay-modal').click(function () {
//   $('.js-modal.is-hidden').removeClass('is-hidden');
//   $(this).removeClass('is-hidden');
// });

// var linkArray = document.querySelectorAll('.js-open-modal');

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
