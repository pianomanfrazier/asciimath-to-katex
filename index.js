var ascii2latex = require('asciimath-to-latex')
var katex = require('katex');

// for demo index.html
Window.ascii2latex = ascii2latex;
Window.katex = katex;

function renderAsciiMath(string) {
    var latex = ascii2latex(string);
    return katex.renderToString(latex);
}

Window.renderAsciiMath = renderAsciiMath;