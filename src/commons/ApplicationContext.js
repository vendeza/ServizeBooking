import React, { useState } from 'react';

const AppContext = React.createContext({});

/**
 * Провайдер контекста
 * Из вне контекст должен быть сгруппирован в объект global
 */
export const ContextProvider = props => {
    return (
        <AppContext.Provider value={{ ...props.global }}>
            {props.children}
        </AppContext.Provider>
    );
};

/**
 * HOC
 * usage export withGlobalContext(<your component here>)
 */
export const withGlobalContext = ChildComponent => props => (
    <AppContext.Consumer>
        {context => <ChildComponent {...props} global={context} />}
    </AppContext.Consumer>
);
