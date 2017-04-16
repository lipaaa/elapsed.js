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

        //Current Time in seconds
        currentTime: function() {

            return Math.floor(Date.now() / 1000);

        },

        seconds: function() {

            return this.currentTime() - this.timestamp;

        },

        secondsText: function() {

            return this.seconds() + ' ' + 'sekund';
        },

        minutes: function() {

            return Math.floor(this.seconds() / 60);

        },

        minutesText: function() {

            return this.minutes() + ' ' + 'minut';

        },

        hours: function() {

            return Math.floor(this.minutes() / 60);
        },

        hoursText: function() {

            return this.hours() + ' ' + 'godzin';
        },

        HHMMSS: function() {

            var sec_num = parseInt(this.seconds(), 10);
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}

            return hours+':'+minutes+':'+seconds;
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