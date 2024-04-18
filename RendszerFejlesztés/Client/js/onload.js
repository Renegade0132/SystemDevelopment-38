const language = 'en';
var text;

window.onload = async function() {
  try {
      await loadText();
      menu_login();   
  } catch (error) {
      console.error('Error loading text:', error);
  }
};