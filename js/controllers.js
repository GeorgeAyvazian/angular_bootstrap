var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3
        }
    ];
    $scope.name = "World";
    $scope.orderProp = '-age';

    $http.get('js/phones.json').success(function (data) {
        $scope.ajaxPhones = data.splice(0, 5);
    });
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
        $scope.phone = data;
    });
}]);
