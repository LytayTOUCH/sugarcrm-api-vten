var request = require('request');
var api_vten = {
  init: function(){
    console.log('api_vten initialize...');
  },
  showRequestProperties: function(){
    console.log(request);
  }
};
module.exports = api_vten;
