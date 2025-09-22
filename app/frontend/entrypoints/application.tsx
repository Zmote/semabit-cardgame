import React from 'react'

import { createRoot } from 'react-dom/client'

import App from '../App'

import '@/styles/application.scss'

import '@/types/modules'
import '@/fonts/Roboto-Regular.ttf'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
