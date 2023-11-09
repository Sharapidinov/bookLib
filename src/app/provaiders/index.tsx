import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withRedux } from  "./withRedux"

export const withProviders = compose(withRouter, withRedux);