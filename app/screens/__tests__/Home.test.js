import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Home from '../Home';

const mockStore = configureStore([]);

it('successfully renders', () => {
    const initialState = {
    }
    const rendered = shallow(<Home />, {
        context: { store: mockStore(initialState) }
    });
    expect(rendered.dive()).toMatchSnapshot();
})