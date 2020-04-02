const arrayInsertion = (toAddArray, sheet, idPrefix, courseName) => {
  if (toAddArray[1] != null) {
    const itemArray = [];
    let itemId;
    let itemNo;
    let i;

    itemNo = sheet.getLastRow() - 1;

    for (i = 0; i < toAddArray.length; i += 1) {
      itemNo += 1;
      itemId = idPrefix + itemNo;
      itemArray.push([itemId, courseName, toAddArray[i]]);
    }

    sheet.getRange(sheet.getLastRow() + 1, 1, toAddArray.length, 3).setValues(itemArray);
  }
};

const processForm = (courseDetails) => {
  const url =
    'https://docs.google.com/spreadsheets/d/1ykn43-IQIJsHo1irRPwqXrWZmfmdtu6z-TZabdIS9Nk/edit#gid=0';
  const ss = SpreadsheetApp.openByUrl(url);
  const courseSheet = ss.getSheetByName('courses');
  const ws = ss.getSheetByName('quizes');
  const as = ss.getSheetByName('assignments');
  const ts = ss.getSheetByName('tutorials');

  courseSheet.appendRow([courseSheet.getLastRow(), courseDetails.name]);

  arrayInsertion(courseDetails.quizes, ws, 'QZ', courseDetails.name);
  arrayInsertion(courseDetails.assignments, as, 'ASN', courseDetails.name);
  arrayInsertion(courseDetails.tutorials, ts, 'TUTE', courseDetails.name);
};

export default processForm;
