import { ContainerNode, render } from 'preact'
import './index.css'
import App from './app'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api.js'

// TODO: Create wrapper to verify :id param is valid collection id
render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/:id" element={<App></App>}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('app') as ContainerNode
);