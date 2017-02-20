// public/js/services/makeService.js
angular.module('makeService', []).factory('Make', ['$http', function($http) {

    return {
        // call to get all makes
        get : function() {
            return $http.get('/api/makes');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new make
        create : function(makeData) {
            return $http.post('/api/makes', makeData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/makes/' + id);
        }
    }

}]);