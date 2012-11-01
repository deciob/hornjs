define(["js/func"], function(Func) {

    buster.testCase("func.seq", {

        "An array of numbers is a sequence" : function() {
            var numbers = [1, 2, 5, 236, 9];
            assert.equals(Func.isSeq(numbers), true);
        },

        "An string is not a sequence" : function() {
            var letters = "totoro";
            assert.equals(Func.isSeq(letters), false);
        },

        "Arguments is a sequence too" : function() {
            var f = function (a, b) {
                assert.equals(Func.isSeq(arguments), true);
            };
            f(1,2);
        },

        "toSeq(undefined) should return an empty array": function() {
            var t;
            assert.equals(Func.toSeq(t), []);
        }

    });

    buster.testCase("func.map", {

        // from MDN:
        // Array.prototype.map() 
        // creates a new array with the results of calling a provided 
        // function on every element in this array.

        "Should map to a new array with doubled values": function() {
            var numbers = [1, 2, 5, 2, 9],
                doubles = [2, 4, 10, 4, 18],
                double = function (number) {
                    return number * 2;
                };
            assert.equals( Func.map(double, numbers), doubles);
        }

    });



});