var expect = require('expect.js'),
    SerialisedError = require('../index');

var GUID_V4_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

describe('serialised error', function () {
    it('must extract required properties', function () {
        var error = SerialisedError(new Error('Error Name'));

        error.extra = 'Extra Property';

        expect(error).to.have.property('name');
        expect(error).to.have.property('message');
        expect(error).to.have.property('stack');
        expect(error).to.have.property('extra');
    });

    it('must not contain any stray properties', function () {
        var error = SerialisedError(new Error('Error Name'));
        error.extra = 'Extra Property';

        expect(Object.keys(error)).to.eql(['name', 'message', 'stack', 'extra']);
    });

    it('must add error meta when specified', function () {
        var error = SerialisedError(new Error('Error Name'), true);
        error.extra = 'Extra Property';

        expect(Object.keys(error)).to.eql(['name', 'message', 'stack', 'checksum', 'id', 'timestamp', 'stacktrace',
            'extra']);
    });

    it('must add guid to the error', function () {
        var error = SerialisedError(new Error('Error Name'), true);
        expect(error.id).to.match(GUID_V4_RE);
    });
});
