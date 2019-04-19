import React from 'react';
console.log(React);
debugger
import ReactDom from 'react-dom';
import App from '../components/App';

ReactDom.render(
    <App>
        调用了this.props.children
        <div>111</div>
        <div>222</div>
    </App>, document.getElementById('root')
);