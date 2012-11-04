define(["js/func"], function(f) {

    buster.testCase("func.seq", {

        "An array of numbers is a sequence" : function() {
            var numbers = [1, 2, 5, 236, 9];
            assert.equals(f.isSeq(numbers), true);
        },

        "An string is not a sequence" : function() {
            var letters = "totoro";
            assert.equals(f.isSeq(letters), false);
        },

        "Arguments is a sequence too" : function() {
            var fun = function (a, b) {
                assert.equals(f.isSeq(arguments), true);
            };
            fun(1,2);
        },

        "toSeq(undefined) should return an empty array": function() {
            var t;
            assert.equals(f.toSeq(t), []);
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
            assert.equals( f.map(double, numbers), doubles);
        }

    });


    buster.testCase("func.prop", {

        "Director should have films as property": function() {
            var director = { name: "Hayao Miyazaki" },
                films = { films: ["My Neighbor Totoro", "Castle in the Sky"] };
            f.setProp(films, director);
            assert.equals( director.films, films.films);
        }

    });

});