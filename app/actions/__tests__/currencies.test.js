import { getInitialConversion, changeCurrencyAmount } from '../currencies';

describe('getInitialConversion', () => {
    it('creates a properly formatted action', () => {
        const expected = { type: 'GET_INITIAL_CONVERSION' }
        const actual = getInitialConversion();
        expect(expected).toEqual(actual);
    });
});

describe('getInitialConversionSnapshot', () => {
    expect(getInitialConversion()).toMatchSnapshot();
});

describe('changeCurrencyAmount', () => {
    it('creates an action with an amount of 100', () => {
        const expected = { type: 'CHANGE_CURRENCY_AMOUNT', amount: 100 }
        const actual = changeCurrencyAmount(100);
        expect(expected).toEqual(actual);
    });

    it('converts a string value to a float', () => {
        const expected = { type: 'CHANGE_CURRENCY_AMOUNT', amount: 100 }
        const actual = changeCurrencyAmount('100');
        expect(expected).toEqual(actual);
    });
});

describe('changeCurrencyAmountSnapshot', () => {
    it('creates an action with an amount of 100', () => {
        expect(changeCurrencyAmount(100)).toMatchSnapshot();
    });

    it('converts a string value to a float', () => {
        expect(changeCurrencyAmount('100')).toMatchSnapshot();
    });
});
