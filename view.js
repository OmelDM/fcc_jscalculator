(function(window) {
  'use strict';

  function View() {
    this.numericalButtons = document.querySelectorAll('.js_numerical');
    this.signButtons = document.querySelectorAll('.js_operation_sign');
    this.clearButton = document.querySelector('.js_clear');
    this.backspaceButton = document.querySelector('.js_backspace');
    this.display = document.querySelector('.js_display');
    this.equalsButton = document.querySelector('.js_equals');
    this.percentageButton = document.querySelector('.js_percentage');
  }

  View.prototype.bind = function (eventName, handler) {
    var self = this;

    switch (eventName) {

      case 'numberEntered':
        self.numericalButtons.forEach(function(button) {
          button.addEventListener('click', function (event) {
            handler(event.target.innerHTML);
          });
        });
        break;

      case 'operationEntered':
        self.signButtons.forEach(function(button) {
          button.addEventListener('click', function (event) {
            handler(event.target.innerHTML);
          });
        });
        break;

      case 'equalsEntered':
        self.equalsButton.addEventListener('click', function () {
          handler();
        });
        break;

      case 'clear':
        self.clearButton.addEventListener('click', function () {
          handler();
        });
        break;

      case 'deleteLastNumber':
        self.backspaceButton.addEventListener('click', function () {
          handler();
        });
        break;
      case 'percentage':
      self.percentageButton.addEventListener('click', function () {
        handler();
      })
      default:

    }

  };

  View.prototype.updateDisplay = function (newValue) {
    this.display.innerHTML = newValue;
  };

  window.app = window.app || {};
  window.app.View = View;

})(window);
