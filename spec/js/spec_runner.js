(function() {
  var cfg;

  mocha.setup('bdd');

  cfg = {
    baseUrl: "./",
    paths: {
      chai: "./vendor/chai/chai",
      sinonChai: "./vendor/sinon-chai/lib/sinon-chai",
      sinon: "./vendor/sinon/index",
      horn: "./../horn",
      spec_data: "./js/spec_data"
    }
  };

  curl(cfg, ["chai", "sinonChai", "spec_data", "horn"]).then(function(chai, sinonChai, specData, horn) {
    var should;

    should = chai.should();
    describe('max', function() {
      return it('should return the max value of a numeric array', function() {
        var arr, mx;

        arr = specData.arr_of_numbers;
        mx = specData.max_arr_of_numbers;
        return horn.max(arr).should.equal(mx);
      });
    });
    return mocha.run();
  });

}).call(this);
