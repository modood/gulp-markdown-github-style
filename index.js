'use strict';

var fs = require('fs');
var path = require('path');

var gutil = require('gulp-util');
var through = require('through2');
var markdownIt = require('markdown-it');
var cheerio = require('cheerio');

var $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'template.html')), 'utf-8');

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-markdown-github-style', 'Streaming not supported'));
      return;
    }

    var md = markdownIt(options);
    var data = md.render(file.contents.toString());
    $('article')
      .empty()
      .append(data)
      .find('a[href*=".md"]').each(function () {
        $(this).attr('href', $(this).attr('href').replace('.md', '.html'));
      });

    file.contents = new Buffer($.html());
    file.path = gutil.replaceExtension(file.path, '.html');

    cb(null, file);
  });
};
