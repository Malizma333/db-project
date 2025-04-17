import { ContainerNode, render } from 'preact'
import './index.css'
import App from './app'
import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api.js'
import FourOFourPage from './components/pages/404'

// TODO: Create wrapper to verify :id param is valid collection id
render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/collection/:id" element={<App></App>}></Route>
        <Route path="*" element={<FourOFourPage></FourOFourPage>} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('app') as ContainerNode
);