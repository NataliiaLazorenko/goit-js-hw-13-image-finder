import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

function showNotification(message, type) {
  const myNotification = alert({
    type: `${type}`,
    text: `${message}`,
    mode: 'light',
    delay: 3000,
    sticker: false,
    maxTextHeight: null,
    addClass: 'notification',
  });

  myNotification.on('click', () => {
    myNotification.close();
  });
}

function showSuccessMessage() {
  const successMessage =
    "Picture uploaded. To get more, click 'Load more' button";
  const type = 'success';
  showNotification(successMessage, type);
}

function showErrorMessage() {
  const errorMessage = 'No matche found. Please specify your query';
  const type = 'error';
  showNotification(errorMessage, type);
}

export default { showSuccessMessage, showErrorMessage };
