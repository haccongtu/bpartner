angular.module("lumx.button").run(['$templateCache', function(a) { a.put('link.html', '<a ng-transclude lx-ripple></a>\n' +
    '');
	a.put('button.html', '<button ng-transclude lx-ripple></button>\n' +
    '');
	 }]);