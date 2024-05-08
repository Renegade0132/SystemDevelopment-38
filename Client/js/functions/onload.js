var text;

window.onload = async function () {
  try {
    const fileNames = await getFileNames();
    await loadText(fileNames[0]);
    login();
  } catch (error) {
    console.error('Error loading text:', error);
  }
};