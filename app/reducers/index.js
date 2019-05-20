import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './themes';

export default combineReducers({
    currencies,
    theme
});