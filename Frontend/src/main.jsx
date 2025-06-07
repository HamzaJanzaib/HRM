import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AppContextProvider } from './context/AppContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ThemeProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ThemeProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)