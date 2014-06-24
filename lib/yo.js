yoAPI = function(API_key) {
  this.token = API_key;
  this.all = function(){
    return HTTP.post('http://api.justyo.co/yoall/', {params: {'api_token': this.token }});
  }
};