import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {Toaster} from 'react-hot-toast'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Toaster
  toastOptions={{
    style:{
         background: '#111827',
          color: '#fff',
          border: '1px solid #1f2937',
          fontSize: '13px',
          padding:'16px'
    },
    success:{
      iconTheme:{
        primary:'green',
        secondary:"#fff",
      },
    },
    error:{
      iconTheme:{
        primary:'#f87171',
        secondary:'#fff'
      },
    },

  }}
  />
  <App/>
  </BrowserRouter>
)
