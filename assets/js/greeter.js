import moment from 'moment';
// iNitialize the first function
function greet(){
  var day = moment().format('dddd');
  console.log("Greetings Man, The day today is " + day +"!");
}

export default greet;
