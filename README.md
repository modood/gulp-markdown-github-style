# gulp-markdown-github-style

[![Deps](https://david-dm.org/modood/gulp-markdown-github-style.svg)](https://david-dm.org/modood/gulp-markdown-github-style)
[![npm](https://img.shields.io/npm/v/gulp-markdown-github-style.svg)](https://www.npmjs.com/package/gulp-markdown-github-style)
[![npm](https://img.shields.io/npm/dt/gulp-markdown-github-style.svg)](https://www.npmjs.com/package/gulp-markdown-github-style)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/modood/gulp-markdown-github-style/master/LICENSE)

Markdown to HTML with github style, inspired by gulp-markdown.

## Install

```
$ npm install --save-dev gulp-markdown-github-style
```


## Usage

```js
var gulp = require('gulp');
var markdown = require('gulp-markdown-github-style');

gulp.task('default', function () {
	return gulp.src('README.md').pipe(markdown()).pipe(gulp.dest('dist'));
});
```

## Options

### markdown(options)

See the marked [options](https://github.com/chjj/marked#options-1).

Issues with the output should be reported on the marked [issue tracker](https://github.com/chjj/marked/issues).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

this repo is released under the [MIT License](http://www.opensource.org/licenses/MIT).
