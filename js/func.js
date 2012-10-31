//Calling define with a dependency array and a factory function
define([
], 
function () {

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
        // "one level deep" copy... that can also be called to convert 
        // Array-like objects / collections to a new Array.
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
        var stored_args = toSeq(arguments, 1);
        return function() {
            var new_args = toSeq(arguments),
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

    return {
        isSeq: isSeq,
        toSeq: toSeq,
        doall: doall,
        makePartial: makePartial,
        prop: prop,
        setProp: setProp
    };

});


    