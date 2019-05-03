var ascii2latex = require('asciimath-to-latex')
var katex = require('katex');

// for demo index.html
Window.ascii2latex = ascii2latex;
Window.katex = katex;

/**
 * Render asciiMath to Katex output
 * 
 * @param {String} string - asciimath input
 * @param {Object} katexOpts - Katex Options see https://katex.org/docs/options.html
 */
function renderAsciiMath(string, katexOpts) {
    var latex = ascii2latex(string);
    return katex.renderToString(latex, katexOpts);
}

Window.renderAsciiMath = renderAsciiMath;