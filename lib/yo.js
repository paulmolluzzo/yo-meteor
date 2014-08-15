yoAPI = function(API_key) {
  this.token = API_key;
  this._url = 'http://api.justyo.co/';
  this._data = {params: {'api_token': this.token }};
};

yoAPI.prototype.all = function(link) {
    var data = JSON.parse(JSON.stringify(this._data));

    if (link !== 'undefined') {
        data.params['link'] = link;
    }

    return HTTP.post(this._url+'yoall/', data);
};

yoAPI.prototype.one = function(user, link) {
    var oneData = JSON.parse(JSON.stringify(this._data));
    oneData.params['username'] = user.toUpperCase();

    if (link !== 'undefined') {
        oneData.params['link'] = link;
    }

    return HTTP.post(this._url+'yo/', oneData);
};

yoAPI.prototype.subscribers = function() {
    return HTTP.get(this._url+'subscribers_count/', this._data);
};