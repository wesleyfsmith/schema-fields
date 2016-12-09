Package.describe({
  name: 'wesleyfsmith:schema-fields',
  version: '1.1.3',
  // Brief, one-line summary of the package.
  summary: 'Easily grab a list of fields off simple-schema.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wesleyfsmith/schema-fields.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.5.3')
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.mainModule('schema-fields.js');
});
