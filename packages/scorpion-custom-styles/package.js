Package.describe({
  name: "scorpion:custom-styles",
  summary: "Custom styles for this app"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use(['telescope:core@0.25.7']);

  api.addFiles(['lib/client/stylesheets/styles.scss'], ['client']);

});
