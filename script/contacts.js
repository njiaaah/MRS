if (document.querySelector('.contacts-info-top-select')) {

const selectSingle = document.querySelector('.contacts-info-top-select');
const selectSingle_title = selectSingle.querySelector('.contacts-info-top-title');
const selectSingle_labels = selectSingle.querySelectorAll('.contacts-info-top-label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close menu
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
}