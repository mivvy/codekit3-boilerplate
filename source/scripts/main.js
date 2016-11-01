// @codekit-prepend '../../bower_components/jquery/dist/jquery.js'

var vRndNumber = null;

$(document).ready(function(){
  vRndNumber = Math.floor((Math.random() * 5) + 1);
  console.log('Random number:' + vRndNumber);
});
