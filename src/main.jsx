import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../router/router.jsx'
import Authprovider from './coponent/Authprovider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div>
    <React.StrictMode>
      <Authprovider>
        <React.StrictMode >
          <RouterProvider router={router} />
        </React.StrictMode>
      </Authprovider>
    </React.StrictMode>
  </div>

)
