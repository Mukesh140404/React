import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
    <Chai />
)
 