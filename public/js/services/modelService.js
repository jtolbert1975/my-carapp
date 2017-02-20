// public/js/services/modelService.js
angular.module('modelService', []).factory('Model', ['$http', function($http) {

    return {
        // call to get all models
        get : function() {
            return $http.get('/api/models');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new model
        create : function(makeData) {
            return $http.post('/api/models', makeData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/models/' + id);
        }
    }

}]);