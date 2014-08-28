Package.describe({
  summary: "Yo API wrapper for Meteor",
  git: "https://github.com/paulmolluzzo/yo-meteor.git",
  version: "1.1.0",
  name: "paulm:yo-meteor",
});

Package.on_use(function (api, where) {
    api.versionsFrom("METEOR@0.9.0");
    api.use('http', 'server');
    api.export('yoAPI', 'server');
    api.add_files('lib/yo.js', 'server');
});

Package.on_test(function (api, where){
});