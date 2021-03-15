import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './ServiceWorker';
import BlogPost from "./container/BlogPost/BlogPost";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<BlogPost />, document.getElementById('content'));

serviceWorker.unregister();