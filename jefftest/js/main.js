



function requestData() {
        var self = this;
        self.URI = 'http://localhost:1337/todo/api/v1.0/tasks';

        self.ajax = function(uri, method, data) {
            var request = {
                url: uri,
                type: method,
                contentType: "application/json",
                accepts: "application/json",
                cache: false,
                dataType: 'json',
                data: data,
                beforeSend: function (xhr) {
                    //xhr.setRequestHeader("Authorization", 
                    //    "Basic " + btoa(self.username + ":" + self.password));
                },
                error: function(jqXHR) {
                    console.log("ajax error " + jqXHR.status);
                },
                success: function( data, status, jqXHR ){

            }
            };
            console.log('Request = ' + request);
            return $.ajax(request);
        }

        requestWords = function( letters, size ) {
            var stuff = self.ajax('http://localhost:1337/check/isWordValid', 'GET', 'word=bottle');
            console.log('returned from self.ajax call ' + stuff);
        }

        return {
            requestWords: requestWords
        };
            
    }


