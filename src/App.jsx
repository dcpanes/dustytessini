import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      
      // Actualizar las variables CSS para el degradado
      document.documentElement.style.setProperty('--mouse-x', `${x}%`)
      document.documentElement.style.setProperty('--mouse-y', `${y}%`)
    }

    const handleMouseLeave = () => {
      // Cuando el mouse sale de la ventana, centrar el efecto
      document.documentElement.style.setProperty('--mouse-x', '50%')
      document.documentElement.style.setProperty('--mouse-y', '50%')
    }

    // Agregar event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="app">
      {/* Capa del degradado que sigue el mouse */}
      <div className="mouse-gradient"></div>
      
      {/* Layout de 2 columnas */}
      <div className="app-layout">
        {/* Columna izquierda - Perfil (estática) */}
        <div className="profile-column">
          <Profile 
            name="Dusty Tessini"
            summary="Construyo aplicaciones web escalables y seguras, aplicando arquitectura limpia y buenas prácticas, y comparto ese conocimiento formando nuevos desarrolladores."
            githubUsername="dcpanes"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        
        {/* Columna derecha - Contenido dinámico */}
        <div className="content-column">
          {activeSection === 'about' && <AboutMe />}
          {activeSection === 'experience' && <Experience />}
        </div>
      </div>
    </div>
  )
}

export default App
