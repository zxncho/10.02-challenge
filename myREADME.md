## Description

This project is a logo generator. It uses an API to generate a logo based on command line inputs.

# Application Demo

[demo] (https://zxncho.github.io/06.02-challenge/)


## Usage

This tool is used to generate a logo with a name and two colors

## License

MIT License

Copyright (c) [2023] [Tyler J. Stubbs]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISINqG FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Features

-Input for name
-Input for text color
-Input for background color
-Choice of shape

## Tests

There was extensive testing. On the git repository it will be seen that there was a method of rendering the shapes that did not work. The issue was with the SVG.js file itself. The method I used led to 5/13 tests being passed. 

Once changes were made, I was able to generate the file correctly as well as pass all tests.