function controller($scope, $http) {
    $scope.msg = 'world'
}

controller.$inject = ['$scope', '$http']

export default function () {
    return {
        template: require('./hello.html'),
        replace: true,
        restrict: 'EA',
        scope: {},
        controller: controller,
        link: function (scope, element, attrs) {

        }
    }
}