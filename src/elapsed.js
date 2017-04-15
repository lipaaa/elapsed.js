(function(global) {


    // Creating a new object
    var Elapsed = function(timestamp) {
        return new Elapsed.init(timestamp);
    }

    // variables not accessible from outside
    var version = '0.1';

    Elapsed.prototype = {

        version: function() {
            console.log('elapsed.js: ' + version);

            return this;
        },


        currentTime: function() {

            return Date.now();

        },


        checkElapsedTime: function() {

            return this.currentTime() - this.timestamp;

        },

        seconds: function() {

            return Math.floor(this.checkElapsedTime() / 1000);

        }

    };


    // Creating actual object
    Elapsed.init = function(timestamp) {

        var self = this;
        self.timestamp = timestamp || '';

    }

    Elapsed.init.prototype = Elapsed.prototype;


    // attach names to global object
    global.elapsed = Elapsed;


}(window));