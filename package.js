Package.describe({
  name: "lsun:ckeditor",
  summary: "Latest version CKEditor loaded via CDN",
  version: "4.5.2",
  git: "https://github.com/liangsun/meteor-ckeditor.git"
});

Package.onUse(function (api){
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('load.js', 'browser');
});
