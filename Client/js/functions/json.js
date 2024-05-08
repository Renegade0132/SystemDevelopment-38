async function fetchJson(fileName) {
  try {
    const response = await fetch('json/' + fileName);
    if (!response.ok) {
      throw new Error('Failed to fetch ' + fileName);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading JSON:', error);
    return null;
  }
}

async function jsonToObject(fileName) {
  const jsonData = await fetchJson(fileName);
  function convertObject(obj) {
    const newObj = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          newObj[key] = value.map(item => convertObject(item));
        } else {
          newObj[key] = convertObject(value);
        }
      } else {
        newObj[key] = value;
      }
    });
    return newObj;
  }
  return convertObject(jsonData);
}

async function processJson(fileName) {
  try {
    const jsonObject = await jsonToObject(fileName);
    text = jsonObject;
    console.log(text);
    return text;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function loadText(fileName) {
  return new Promise(async function(resolve, reject) {
      try {
          await processJson(fileName);
          document.title = text.title;
          resolve();
      } catch (error) {
          console.error('Error:', error);
          reject(error);
      }
  });
}