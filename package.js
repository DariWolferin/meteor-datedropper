Package.describe({
  name: "bjimdar:datedropper",
  version: "1.0.0-0",
  summary: "Fancy date picker for text input. A Meteor wrapper for dateDropper from Felice Gattuso",
  git: "https://github.com/bjimdar/meteor-datedropper",
});

//See: http://felicegattuso.com/projects/datedropper/

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0.1");
  api.use('jquery@1.7.0', 'client');

  // javascript
  api.addFiles('datedropper.js', 'client');
  api.addFiles('datedropper.css', 'client');

  api.addFiles('icons/done.png', 'client');
  api.addFiles('icons/done.svg', 'client');

  api.addFiles('icons/next.png', 'client');
  //api.addFiles('icons/next.svg', 'client');

  api.addFiles('icons/prev.png', 'client');
  //api.addFiles('icons/next.svg', 'client');

});
