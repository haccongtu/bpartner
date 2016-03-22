angular.module("lumx.text-field").run(['$templateCache', function(a) { a.put('text-field.html', '<div class="text-field"\n' +
    '     ng-class="{ \'text-field--error\': lxTextField.error,\n' +
    '                 \'text-field--fixed-label\': lxTextField.fixedLabel,\n' +
    '                 \'text-field--has-icon\': lxTextField.icon,\n' +
    '                 \'text-field--has-value\': lxTextField.hasValue(),\n' +
    '                 \'text-field--is-active\': lxTextField.isActive,\n' +
    '                 \'text-field--is-disabled\': lxTextField.ngDisabled,\n' +
    '                 \'text-field--is-focus\': lxTextField.isFocus,\n' +
    '                 \'text-field--theme-light\': !lxTextField.theme || lxTextField.theme === \'light\',\n' +
    '                 \'text-field--theme-dark\': lxTextField.theme === \'dark\',\n' +
    '                 \'text-field--valid\': lxTextField.valid }">\n' +
    '    <div class="text-field__icon" ng-if="lxTextField.icon">\n' +
    '        <i class="mdi mdi-{{ lxTextField.icon }}"></i>\n' +
    '    </div>\n' +
    '\n' +
    '    <label class="text-field__label">\n' +
    '        {{ lxTextField.label }}\n' +
    '    </label>\n' +
    '\n' +
    '    <div ng-transclude></div>\n' +
    '\n' +
    '    <span class="text-field__clear" ng-click="lxTextField.clearInput()" ng-if="lxTextField.allowClear">\n' +
    '        <i class="mdi mdi-close-circle"></i>\n' +
    '    </span>\n' +
    '</div>\n' +
    '');
	 }]);