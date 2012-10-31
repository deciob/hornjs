
define([
    'func'
], 
function (f) {

    "use strict";

    function append(content, element) {
        content = f.toSeq(content);
        var i, l;
        for (i = 0, l = content.length; i < l; ++i) {
            if (typeof content[i] === "string") {
                element.appendChild(document.createTextNode(content[i]));
            } else {
                element.appendChild(content[i]);
            }
        }
    }

    var el = function (tagName, attrProps, content) {
        var element = document.createElement(tagName);
        f.setProp(attrProps, element);
        append(content || [], element);
        return element;
    };
    
    f.doall(function (tagName) { el[tagName] = f.makePartial(el, tagName); }, [
        "a", "abbr", "acronym", "address", "area", "article", "aside", "audio",
        "b", "bdi", "bdo", "big", "blockquote", "body", "br", "button",
        "canvas", "caption", "cite", "code", "col", "colgroup", "command",
        "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em",
        "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame",
        "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header",
        "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd",
        "keygen", "label", "legend", "li", "link", "map", "mark", "meta",
        "meter", "nav", "noscript", "object", "ol", "optgroup", "option",
        "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby",
        "samp", "script", "section", "select", "small", "source", "span",
        "split", "strong", "style", "sub", "summary", "sup", "table", "tbody",
        "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr",
        "track", "tt", "ul", "var", "video", "wbr"
    ]);

    return {el: el};

});

