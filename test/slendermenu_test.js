(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#slenmenu', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.slenmenu(), this.elems, 'should be chainable');
  });

  test('is slenmenu', function() {
    expect(1);
    strictEqual(this.elems.slenmenu().text(), 'slenmenu0slenmenu1slenmenu2', 'should be slenmenu');
  });

  module('jQuery.slenmenu');

  test('is slenmenu', function() {
    expect(2);
    strictEqual($.slenmenu(), 'slenmenu.', 'should be slenmenu');
    strictEqual($.slenmenu({punctuation: '!'}), 'slenmenu!', 'should be thoroughly slenmenu');
  });

  module(':slenmenu selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
  
}(jQuery));
