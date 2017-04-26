'use strict';

var fs = require('fs');
var path = require('path');

var gutil = require('gulp-util');
var through = require('through2');
var marked = require('marked');
var cheerio = require('cheerio');

var $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'template.html')), 'utf-8');

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-markdown', 'Streaming not supported'));
      return;
    }

    marked(file.contents.toString(), options, function (err, data) {
      if (err) {
        cb(new gutil.PluginError('gulp-markdown', err, {fileName: file.path}));
        return;
      }

      $('article').empty().append(data);

      file.contents = new Buffer($.html());
      file.path = gutil.replaceExtension(file.path, '.html');

      cb(null, file);
    });
  });
};

