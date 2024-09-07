import { createRoot } from 'react-dom/client'
import Navhero from './Navhero.jsx'
import './index.css'
import Experiences from './Experiences.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Navhero />
    <div>
      <Experiences />
    </div>
  </div>,
)
