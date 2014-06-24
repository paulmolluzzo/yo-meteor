Package.describe({
  summary: "Yo API wrapper for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/yo.js', ['client', 'server']);
});

Package.on_test(function (api, where){
});