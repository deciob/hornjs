(function() {
  var arr, bool, func, horn, max, num, obj, str, toString, typeOf, undef;

  horn = {};

  toString = Object.prototype.toString;

  str = function(s) {
    if (toString.call(s) === "[object String]") {
      return s;
    } else {
      return trow(new TypeError("It is not a string!"));
    }
  };

  typeOf = function(type) {
    type = str(type);
    return function(o) {
      if (toString.call(o) === type) {
        return o;
      } else {
        throw new TypeError("" + o + " is not a " + type + "!");
      }
    };
  };

  num = typeOf("[object Number]");

  bool = typeOf("[object Boolean]");

  obj = typeOf("[object Object]");

  undef = typeOf("[object Undefined]");

  arr = typeOf("[object Array]");

  func = typeOf("[object Function]");

  max = function(seq, mx) {
    var head;

    mx = mx || 0;
    seq = arr(seq);
    mx = num(mx);
    if (seq.length === 0) {
      throw new Error("maximum of empty list");
    }
    if (seq.length === 1 && seq[0] >= mx) {
      return seq[0];
    }
    if (seq.length === 1 && seq[0] < mx) {
      return mx;
    }
    head = seq.shift();
    if (head > mx) {
      mx = head;
    }
    return max(seq, mx);
  };

  horn.max = max;

  if (typeof define === "function" && define.amd) {
    define("horn", [], function() {
      return horn;
    });
  } else {
    this.horn = horn;
  }

}).call(this);
