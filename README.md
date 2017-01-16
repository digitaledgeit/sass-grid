# sass-grid

A responsive grid built on flexbox.

Uses `flexbox` and gracefully degrades in older browsers, supporting *most* of the same functionality using an `inline-block` grid.

## Installation

### Browserify

    npm install --save sass-grid

### Component

    component install sass-grid

**Note**: You are limited to using the compiled version.

## Usage

### Using mixins

CSS:

    @import "sass-grid"
    @import "sass-named-breakpoints";

    .feature-panel {
      @include grid();
      @include grid--halign-justify-center()
    }

    .feature-panel__feature {
      @include grid__unit();

      @include named_breakpoint('md') {
        @include grid__unit--cols(3);
      }

    }

HTML:

    <html class="flexbox"><!-- you'll probably use Modernizr and won't need to manually put this class here --!>
    ...

        <div class="feature-panel">
            <div class="feature-panel__feature">Does stuff</div>
            <div class="feature-panel__feature">Does more stuff</div>
            <div class="feature-panel__feature">Does even more stuff</div>
            <div class="feature-panel__feature">It just does all the stuff!</div>
        </div>

    ...
    </html>

### Using a compiled grid

CSS:

    @import "sass-grid/index.css"

HTML:

    <html class="flexbox"><!-- you'll probably use Modernizr and won't need to manually put this class here --!>
    ...

        <div class="grid grid--halign:justify-center">
            <div class="grid__unit grid__unit--cols:3">Does stuff</div>
            <div class="grid__unit grid__unit--cols:3">Does more stuff</div>
            <div class="grid__unit grid__unit--cols:3">Does even more stuff</div>
            <div class="grid__unit grid__unit--cols:3">It just does all the stuff!</div>
        </div>

    ...
    </html>

Find more examples on the [example/example.html](http://digitaledgeit.github.io/sass-grid/example/example.html) page.

## Breakpoints

See [sass-breakpoints](https://www.npmjs.com/package/sass-breakpoints).

## Building your own grid

1. Requires sass >=3.4
2. Customise the grid settings in `config.scss`
3. Run `npm install`
4. Run `npm run build`

## Notes

### Why 12 columns?
Twelve is easily divisible by lots of numbers e.g. 2, 3, 4, 6

### Why mixins over extends?

https://tech.bellycard.com/blog/sass-mixins-vs-extends-the-data/

### Other responsive utils

Checkout [sass-breakpoints](https://www.npmjs.com/package/sass-breakpoints) and [sass-spacing](https://www.npmjs.com/package/sass-spacing).

## License

The MIT License (MIT)

Copyright (c) 2014 James Newell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
