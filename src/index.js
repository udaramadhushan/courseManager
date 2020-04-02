import processForm from './processForm';
import manageSheets from './manage';

const doGet = () => {
  return HtmlService.createTemplateFromFile('Index').evaluate();
};

const htmlTemplete = HtmlService.createTemplateFromFile('Index');
htmlTemplete.data = manageSheets();

global.doGet = doGet;
global.processForm = processForm;
global.manageSheets = manageSheets;
