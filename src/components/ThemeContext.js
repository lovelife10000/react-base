import React, {Component} from 'react';

const ThemeContext = React.createContext({
    theme: {
        foreground: '#ffffff',
        background: '#222222',
    },
    toggleTheme: (x,y,z) => {
        //说明此函数只有一个参数，且x是触发这个函数的dom节点的对象
        console.log(this);
        debugger
    },
});



export default ThemeContext;