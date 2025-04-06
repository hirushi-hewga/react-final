import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import "primereact/resources/themes/lara-light-cyan/theme.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)