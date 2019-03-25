import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/App';

ReactDom.render(<App>调用了this.props.children</App>,document.getElementById('root'));