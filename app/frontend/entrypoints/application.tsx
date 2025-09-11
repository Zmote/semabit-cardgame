import React from 'react';

import { createRoot } from 'react-dom/client';
import '../App.scss'
import "fonts/Roboto-Regular.ttf"

import App from '../App';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

console.log('Vite ⚡️ Rails');
console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails');

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);