/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

function trapInsideModal(container, firstToFocus, allFocus) {
  const focusableContent = container.querySelectorAll(allFocus);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

  document.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab';
    if (isTabPressed && document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstToFocus.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  });
}
export { trapInsideModal };
