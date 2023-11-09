import React from 'react';
import {Provider} from "react-redux";
import store from "../../store/store";

export const withRedux = (component: () => React.ReactNode) => {
    return (
            <Provider store={store}>
                {component()}
            </Provider>
    );
};