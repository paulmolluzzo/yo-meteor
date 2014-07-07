yoAPI = function(API_key) {
  this.token = API_key;
};

yoAPI.prototype.all = function() {
    return HTTP.post('http://api.justyo.co/yoall/', {params: {'api_token': this.token }});
};

yoAPI.prototype.one = function(user) {
    return HTTP.post('http://api.justyo.co/yo/', {params: {'api_token': this.token, 'username': user.toUpperCase() }});
};