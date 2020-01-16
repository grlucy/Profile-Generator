# Profile Generator

## Description

A command-line application that uses a user-entered GitHub username and color scheme to dynamically generate a profile in an HTML webpage and a PDF file. Intended for use by developers who need to quickly prepare multiple profiles.

| Technologies Used                               |
| ----------------------------------------------- |
| Node.js, JavaScript, HTML, CSS, Sass, Bootstrap |

## Demo

![Profile Generator Demo](/assets/screenshots/Profile-Generator-demo.gif)

## Usage

Requires Node.js and installation of these dependencies:

- axios
- debug
- inquirer
- puppeteer

From the command line, open the profile-generator folder and enter:

```sh
node index.js
```

User will be prompted for their GitHub username and favorite color. Once prompts are completed, the HTML and PDF files are generated and saved in the profile-generator folder.

## Credits

- "Generate PDFs (From HTML & CSS) with NodeJS and Puppeteer" tutorial by optikalefx on YouTube: https://www.youtube.com/watch?v=9VgghGKx_1c

## License

&copy; 2020 Gina Lucy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
