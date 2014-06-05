



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
                    console.log('ajax call succeeded!');
                }   
            };
            console.log('Request = ' + request);
            return $.ajax(request);
        }

        checkWord= function (word) {
            var deferredObject = self.ajax('http://localhost:3000/check/isWordValid', 'GET', 'word=bottle');
            deferredObject.done(function (result) {
                console.log(' checkWord: got ajax callback, result = ' + JSON.stringify(result));
            });
        }

        getWords = function( letters, size ) {
            var deferredObject = self.ajax('http://localhost:3000/check/getWords', 'GET', { letters: letters, size: size });
            deferredObject.done(function (result) {
                console.log(' getWords: got ajax callback, result = ' + JSON.stringify(result));
            });
        }

        return {
            checkWord: checkWord,
            getWords: getWords
        };
            
    }


