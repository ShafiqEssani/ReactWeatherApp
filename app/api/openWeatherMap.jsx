var axios = require('axios');

const URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f8dd05692467cdb00205e1615dae8985';

module.exports = {
  getTemp: function(location){
    var encodeLoc = encodeURIComponent(location);
    var requestURL = `${URL}&q=${encodeLoc}`;

    return axios.get(requestURL).then(function(res){
      if ( res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
