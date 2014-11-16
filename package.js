Package.describe({
  name: 'grigio:overlay',
  summary: 'A little wrapper to manage a fullscreen animated overlay',
  version: '0.0.2',
  git: 'https://github.com/grigio/meteor-overlay'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('standard-app-packages','client');
  api.use('templating','client');
  api.use('underscore','client');
  api.use('reactive-var','client');
  api.use('percolate:momentum@0.6.2');

  api.addFiles(
            [
                'overlay.html',
                'overlay.css',
                'overlay.js'
            ],
            ['client']);

  api.export(['Overlay'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grigio:overlay');
  api.addFiles('grigio:overlay-tests.js');
});
