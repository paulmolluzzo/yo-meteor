Package.describe({
  summary: "Yo API wrapper for Meteor",
  git: "https://github.com/paulmolluzzo/yo-meteor.git",
  version: "1.0.0",
  name: "paulm:yo-meteor",
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
    api.export('yoAPI', 'server');
    api.add_files('lib/yo.js', ['client', 'server']);
});

Package.on_test(function (api, where){
});