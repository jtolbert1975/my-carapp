var app = angular.module('MainCtrl', []);
app.controller('MainController', function($scope) {
    //$scope.tagline = 'To the moon and back!';

    $scope.makes = [{
        name: "Ford"

    }, {
        name: "Acura"

    }
    ];
    $scope.make = "";

    $scope.models = [
        {
            m_name: "Edge",
            name: "Ford"
        },
        {
            m_name: "Escape",
            b_name:"Ford",
        },
        {
            m_name:"ILX",
            b_name: "Acura",
        },
        {
            m_name: "MDX",
            b_name: "Acura",
        }
    ];

    $scope.model = "";


});

app.run(function($rootScope) {
    angular.element(document).on("click", function(e) {
        $rootScope.$broadcast("documentClicked", angular.element(e.target));
    });
});

app.directive("dropdown", function($rootScope) {
    return {
        restrict: "E",
        templateUrl: "/views/dropdown.html",
        scope: {
            placeholder: "@",
            list: "=",
            selected: "=",
            property: "@"
        },
        link: function(scope) {
            scope.listVisible = false;
            scope.isPlaceholder = true;

            scope.select = function(item) {
                scope.isPlaceholder = false;
                scope.selected = item;
            };

            scope.isSelected = function(item) {
                return item[scope.property] === scope.selected[scope.property];
            };

            scope.show = function() {
                scope.listVisible = true;
            };

            $rootScope.$on("click", function(inner, target) {
                console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
                if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
                    scope.$apply(function() {
                        scope.listVisible = false;
                    });
            });

            scope.$watch("selected", function(value) {
                scope.isPlaceholder = scope.selected[scope.property] === undefined;
                scope.display = scope.selected[scope.property];
            });
        }
    }
});

app.directive("dropdownmodel", function($rootScope) {
    return {
        restrict: "E",
        templateUrl: "/views/dropdownmodel.html",
        scope: {
            placeholder: "@",
            list: "=",
            selected: "=",
            property: "@"
        },
        link: function(scope) {
            scope.listVisibleM = false;
            scope.isPlaceholderM = true;

            scope.select = function(item) {
                scope.isPlaceholderM = false;
                scope.selected = item;
            };

            scope.isSelected = function(item) {
                return item[scope.property] === scope.selected[scope.property];
            };

            scope.show = function() {
                scope.listVisibleM = true;
            };

            $rootScope.$on("click", function(inner, target) {
                console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
                if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
                    scope.$apply(function() {
                        scope.listVisibleM = false;
                    });
            });

            scope.$watch("selected", function(value) {
                scope.isPlaceholderM = scope.selected[scope.property] === undefined;
                scope.display = scope.selected[scope.property];
            });
        }
    }
});

