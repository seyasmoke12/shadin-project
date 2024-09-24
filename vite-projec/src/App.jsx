import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
function App() {
 

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div><ModeToggle></ModeToggle></div>
      
    <div className=' justify-content-center'>
      <div className='flex items-center justify-center mt-8'>
      <Login />
      </div>
    </div>
      </ThemeProvider>
  )
}

export default App
