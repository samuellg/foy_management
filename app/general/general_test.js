'use strict';

describe('myApp.general module', function() {

  beforeEach(module('myApp.general'));

  describe('general controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});