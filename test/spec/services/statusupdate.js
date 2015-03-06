'use strict';

describe('Service: statusupdate', function () {

  // load the service's module
  beforeEach(module('yookoreApp'));

  // instantiate service
  var statusupdate;
  beforeEach(inject(function (_statusupdate_) {
    statusupdate = _statusupdate_;
  }));

  it('should do something', function () {
    expect(!!statusupdate).toBe(true);
  });

});
