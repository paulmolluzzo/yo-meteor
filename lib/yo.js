yoAPI = function(API_key) {
  this.token = API_key;
  this._url = 'http://api.justyo.co/'
  this._data = {params: {'api_token': this.token }};
};

yoAPI.prototype.all = function() {
    return HTTP.post(this._url+'yoall/', this._data);
};

yoAPI.prototype.one = function(user) {
    this._data.params['username'] = user.toUpperCase();
    return HTTP.post(this._url+'yo/', this._data);
};

yoAPI.prototype.subscribers = function() {
    return HTTP.get(this._url+'subscribers_count/', this._data);
};