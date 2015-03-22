# grid

A responsive grid. 

Uses flexbox and gracefully degrades to inline-blocks in older browsers.

## Installation

### Component

    composer install digitaledgeit/css-grid
    
### DuoJS

In a stylesheet:

    @import "digitaledgeit/css-grid";
   
## Usage
    
    <html class="flexbox"><!-- you'll probably use Modernizr and won't need to manually put this class here --!>
    ...
    
        <div class="grid">
            <div class="grid__unit" g-xs="cols:12" g-sm="cols:6">100% for extra-small devices but 50% for all other devices</div>
            <div class="grid__unit" g-xs="invisible" g-sm="cols:3 visible">hidden on extra-small devices but 25% for all other devices</div>
            <div class="grid__unit" g-xs="invisible" g-sm="cols:2 visible">hidden on extra-small devices but 16% for all other devices</div>
            <div class="grid__unit" g-xs="invisible" g-sm="cols:1 visible">hidden on extra-small devices but 8% for all other devices</div>
        </div>
        
    ...
    </html>

Find more examples on the [example/example.html](http://digitaledgeit.github.io/css-grid/example/example.html) page.

## Breakpoints

 - xs - target devices >=0px
 - sm - target devices >=569px
 - md - target devices >=769px
 - lg - target devices >=1004px

## Building your own grid

1. Requires sass >=3.4
2. Customise the settings in `config.scss`
3. Run `npm install`
4. Run `gulp`
   
## Notes

### Why 12 columns? 
Twelve is easily divisible by lots of numbers e.g. 2, 3, 4, 6

## TODO

- Test IE
- mixins
- margins and padding. in another component?
- offsets?
- Provide a stylesheet for IE<=8 to provide the desktop equivalent?

## License

The MIT License (MIT)

Copyright (c) 2014 James Newell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.