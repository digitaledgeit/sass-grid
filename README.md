# grid

A responsive grid

## Installation

### DuoJS

    @import "digitaledgeit/css-grid";

### Component

    composer install digitaledgeit/css-grid
    
## Usage
    
    <div class="grid">
        <div class="grid__unit" u-xs="twelve" u-sm="six">100% for extra-small devices but 50% for all other devices</div>
        <div class="grid__unit" u-xs="hidden" u-sm="three">hidden on extra-small devices but 25% for all other devices</div>
        <div class="grid__unit" u-xs="hidden" u-sm="two">hidden on extra-small devices but 16% for all other devices</div>
        <div class="grid__unit" u-xs="hidden" u-sm="one">hidden on extra-small devices but 8% for all other devices</div>
    </div>

## Breakpoints

 - xs - target devices >=0px
 - sm - target devices >=569px
 - md - target devices >=769px
 - lg - target devices >=1004px

## Utility classes

## Building a custom version

    sassc index.scss > index.css
    
## Notes

Why 12 columns? A number easily divisible by many numbers - 2, 3, 4, 6
    
## License

The MIT License (MIT)

Copyright (c) 2014 James Newell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.