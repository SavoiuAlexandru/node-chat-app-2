var expect = require('expect');
const {generateMessage} = require('./message');

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