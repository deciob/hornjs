// ripped off from: https://github.com/magnars/culljs

var horn = (function (global) {

	"use strict";

	var slice = Array.prototype.slice;


	function isSeq(seq) {
        return !!seq &&
            typeof seq === "object" &&
            typeof seq.length === "number" &&
            !seq.tagName;
    }

	function toSeq(value, begin) {
		// From MDN:
		// Slice does not alter the original array, but returns a new 
		// "one level deep" copy that contains copies of the elements 
		// sliced from the original array.
		// Slice method can also be called to convert Array-like objects / 
		// collections to a new Array.
		begin = begin || 0;
        if (toString.call(value) === "[object Array]") { return value; }
        if (isSeq(value)) { return slice.call(value, begin); }
        if (typeof value === "undefined" || value === null) { return []; }
        return slice.call(arguments, begin);
    }

    function doall(fn, seq) {
        var i, l;
        for (i = 0, l = seq.length; i < l; ++i) {
            fn(seq[i], i, seq);
        }
    }

	function makePartial(fn) {
		var stored_args = toSeq(arguments, 1); // slice.call(arguments, 1);
		return function() {
			var new_args = toSeq(arguments), //slice.call(arguments),
			    args = stored_args.concat(new_args);
			return fn.apply(null, args);
		}
	}

	function prop(name) {
        return function (object) {
            return object[name];
        };
    }

    function setProp(properties, element) {
        var name;
        properties = properties || {};
        for (name in properties) {
            if (properties.hasOwnProperty(name)) {
                element[name] = properties[name];
            }
        }
    }

    function append(content, element) {
        content = toSeq(content);
        var i, l;
        for (i = 0, l = content.length; i < l; ++i) {
            if (typeof content[i] === "string") {
                element.appendChild(document.createTextNode(content[i]));
            } else {
                element.appendChild(content[i]);
            }
        }
    }

	horn = {};

	var el = function (tagName, attrProps, content) {
        var element = document.createElement(tagName);
        setProp(attrProps, element);
        append(content || [], element);
        return element;
    };
    
    doall(function (tagName) { el[tagName] = makePartial(el, tagName); }, [
        "a", "br", "div", "fieldset", "form", "h2", "h3", "h4",
        "h5", "img", "input", "label", "li", "p", "span", "strong",
        "textarea", "ul", "span", "select", "option", "ol", "iframe",
        "table", "tr", "td", "pre", "button"
    ]);


    horn.el = el;


	return horn;

}(this));


if (typeof define === "function" && define.amd) {
  define("horn", [], function() {
    return horn;
  });
}