let mix = require('laravel-mix');

mix.setPublicPath('web/assets')
  .sass('resources/scss/app.scss', 'web/assets')
  .js('src/app.js', 'web/assets')
  .version();