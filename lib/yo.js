yoAPI = function(api_token) {
  this.data = { 'api_token' : api_token };
};

yoAPI.prototype.yoall = function(){
  return HTTP.post('http://api.justyo.co/yoall/', this.data);
};