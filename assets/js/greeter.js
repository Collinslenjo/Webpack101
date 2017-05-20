import moment from 'moment';
// iNitialize the first function
//require("css-loader!../public/css/bootstrap.css");
function greet(){
  var day = moment().format('dddd');
  var printer = ("Greetings Man, The day today is " + day +"!"); 
  '<div><h4>console.log(printer);</h4></div>'
}

export default greet;
