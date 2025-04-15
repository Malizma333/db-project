import { render } from 'preact'
import './index.css'
import App from './app.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api.js'

// TODO: Create wrapper to verify :id param is valid collection id
render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App collectionDef={false}></App>}></Route>
        <Route path="/:id" element={<App collectionDef={true}></App>}></Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('app')
);