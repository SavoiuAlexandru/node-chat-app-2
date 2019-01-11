var expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var expectedFrom = 'test user';
        var expectedText = 'test text';

        var res = generateMessage(expectedFrom, expectedText);

        expect(res).toInclude({
            from: expectedFrom,
            text: expectedText
        });
        expect(res.createdAt).toBeA('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var expectedFrom = 'test user';
        var expectedLatitude = 1;
        var expectedLongitude = 2;

        var res = generateLocationMessage(expectedFrom, expectedLatitude, expectedLongitude);

        expect(res).toInclude({
            from: expectedFrom,
            url: 'https://www.google.com/maps?q=1,2'
        });
        expect(res.createdAt).toBeA('number');
    })
});