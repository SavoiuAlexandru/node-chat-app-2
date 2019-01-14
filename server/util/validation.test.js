var expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var input = 74;

        var res = isRealString(input);

        expect(res).toBe(false);
    })
});

describe('isRealString', () => {
    it('should reject string with only spaces', () => {
        var input = '     ';

        var res = isRealString(input);

        expect(res).toBe(false);
    })
});

describe('isRealString', () => {
    it('should allow string with non-space characters', () => {
        var input = '   real string  ';

        var res = isRealString(input);

        expect(res).toBe(true);
    })
});

