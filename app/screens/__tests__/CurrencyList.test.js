import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CurrencyList from '../CurrencyList';
import { initialState as initialCurrency } from '../../reducers/currencies'
import { initialState as initialTheme } from '../../reducers/theme'

const mockStore = configureStore([]);

it('successfully renders', () => {
    const navigation = { state: { params: { type: 'quote'} } };
    const initialState = { 
        currencies: initialCurrency, 
        theme: initialTheme 
    }
    const rendered = shallow(<CurrencyList navigation={navigation} />, {
        context: { store: mockStore(initialState) }
    });
    expect(rendered.dive()).toMatchSnapshot();
})