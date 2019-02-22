import React, {Component} from 'react';

const ThemeContext = React.createContext({
    theme: {
        foreground: '#ffffff',
        background: '#222222',
    },
    toggleTheme: () => {},
});

export default ThemeContext;