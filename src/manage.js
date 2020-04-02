function manageSheets() {
  const ss = SpreadsheetApp.openById('1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk');
  const sheets = ss.getSheets();
  const courses = ss.getSheetByName('courses').getDataRange().getValues();
  const quizes = ss.getSheetByName('quizes').getDataRange().getValues();
  const assignments = ss.getSheetByName('assignments').getDataRange().getValues();
  const tutorials = ss.getSheetByName('tutorials').getDataRange().getValues();
  const sheetNames = [];

  for (let x = 0; x < sheets.length; x += 1) {
    sheetNames.push(sheets[x].getName());
  }

  const sheetData = {
    names: sheetNames,
    courses,
    assignments,
    tutorials,
    quizes,
  };

  return sheetData;
}

export default manageSheets;
