import { render } from 'preact'
import './index.css'
import App from './app.jsx'
import { init } from './api/api.js'

init();
render(<App></App>, document.getElementById('app'))