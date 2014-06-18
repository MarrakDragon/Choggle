

//
// Connect to the node endpoint and request data.
//

function requestData() {
        var self = this;

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

        checkWord= function (wordToCheck, dictionary) {
            var deferredObject = self.ajax('http://localhost:3000/check/isWordValid', 'GET', {word: wordToCheck, dictionaryToUse: dictionary } );// 'word=bottle');
            deferredObject.done(function (result) {
                console.log(' checkWord: got ajax callback, result = ' + JSON.stringify(result));
            });
        }

        getWords = function( letters, size, dictionary ) {
            var deferredObject = self.ajax('http://localhost:3000/check/getWords', 'GET', { letters: letters, size: size, dictionaryToUse: dictionary });
            deferredObject.done(function (result) {
                console.log(' getWords: got ajax callback, result = ' + JSON.stringify(result));
            });
        }

        return {
            checkWord: checkWord,
            getWords: getWords
        };
            
    }


