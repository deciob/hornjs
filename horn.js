(function() {
  var horn, max;

  horn = {};

  max = function(seq, mx) {
    var head;

    mx = mx || 0;
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
