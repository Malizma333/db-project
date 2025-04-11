import { render } from 'preact'
import './index.css'
import App from './app.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api.js'

render(<QueryClientProvider client={queryClient}><App></App></QueryClientProvider>, document.getElementById('app'))