import { getDataFromAreaCode } from "..";

test('gets zipcode from areacode', () => {
    const result = getDataFromAreaCode(212);
    expect(result).toEqual({
        city: "New York City",
        state: "NY",
        zipCode: '10024'
    });
});

test('gets zipcode from toll-free areacode', () => {
    const result = getDataFromAreaCode(887);
    expect(result).toEqual({ city: null, state: null, zipCode: null });
});