'use strict';

describe('Service: actvTrack', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var actvTrack;
  beforeEach(inject(function (_actvTrack_) {
    actvTrack = _actvTrack_;
  }));

  it('should do something', function () {
    expect(!!actvTrack).toBe(true);
  });

});
