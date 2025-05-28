import { getZipcodeFromAreaCode } from '../lib';

test('gets zipcode from areacode', () => {
    const result = getZipcodeFromAreaCode(212);
    expect(result).toBe('10024');
});

test('gets zipcode from toll-free areacode', () => {
    const result = getZipcodeFromAreaCode(887);
    expect(result).toBe(null);
});