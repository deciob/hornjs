# Global mocha! Evviva!
mocha.setup('bdd')

cfg =
  baseUrl: "./"
  paths:
    chai: "./vendor/chai/chai"
    sinonChai: "./vendor/sinon-chai/lib/sinon-chai"
    sinon: "./vendor/sinon/index"
    horn: "./../horn"
    spec_data: "./js/spec_data"

curl(cfg, [
  "chai"
  "sinonChai"
  "spec_data"
  "horn"
]).then (chai, sinonChai, specData, horn) ->

  should = chai.should()

  describe 'max', ->
    it 'should return the max value of a numeric array', ->
      arr = specData.arr_of_numbers
      mx = specData.max_arr_of_numbers
      horn.max(arr).should.equal mx

  mocha.run()