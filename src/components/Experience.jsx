import './Experience.css'

function Experience({ 
  experiences = [
    {
      id: 1,
      company: "Banco Ripley",
      position: "Full Stack Developer",
      period: "2025 - Actualidad",
      location: "Santiago, Chile/Perú",
      description: "Lideré el desarrollo de microservicios críticos aplicando principios de Clean Architecture y tecnologías de seguridad avanzadas para entornos de alta regulación financiera.",
      achievements: [
        "Lideré el desarrollo de microservicios escritos en Golang usando Gorilla Mux como router principal, aplicando principios de Clean Architecture para mantener un código desacoplado y escalable.",
        "Implementé el AWS SDK para consumir y procesar información sensible almacenada de forma cifrada mediante AWS KMS con llaves AES-256, además de integrar la gestión de secretos con AWS Secrets Manager.",
        "Configuré y validé la comunicación HTTP/HTTPS entre microservicios dentro del mismo clúster Kubernetes, garantizando interoperabilidad segura con un proveedor externo."
      ],
      technologies: ["Golang", "Gorilla Mux", "AWS SDK", "AWS KMS", "AWS Secrets Manager", "Kubernetes", "Clean Architecture", "HTTP/HTTPS", "AES-256", "Microservices"]
    },
    {
      id: 2,
      company: "BancoEstado",
      position: "Ingeniero de Software Full Stack",
      period: "2021 - 2025",
      location: "Santiago, Chile",
      description: "Participé en el diseño y desarrollo de soluciones críticas para canales digitales, incluyendo funcionalidades como Transferencia Electrónica de Fondos (TEF), Transferencia Programada, Ahorro Previsional Voluntario (APV), FOGAES, Donaciones de Emergencia y Donaciones Teletón.",
      achievements: [
        "Diseñé e implementé aplicaciones full stack con Angular (v11+) y Node.js (NestJS y Express), siguiendo principios de arquitectura limpia y desarrollo modular.",
        "Integré múltiples microservicios mediante API RESTful robustas, con autenticación basada en JWT, uso de Redis y Memcached para cacheo y manejo de sesiones.",
        "Me conecté a sistemas críticos del banco, incluyendo procedimientos almacenados en MySQL, IBM Service Bus y CICS.",
        "Lideré el desarrollo frontend de la segunda versión del módulo TEF, aplicando lazy loading, ChangeDetectionStrategy.OnPush, NgRx y Container/Presentational Components.",
        "Logré mejorar la aprobación de usuarios en un 6% respecto a la versión anterior.",
        "Aporté en buenas prácticas de desarrollo, revisión de código y pruebas unitarias con Jest y Jasmine."
      ],
      technologies: ["Angular", "Node.js", "NestJS", "Express", "TypeScript", "JWT", "Redis", "Memcached", "MySQL", "NgRx", "Jest", "Jasmine"]
    },
    {
      id: 3,
      company: "Netcomm (Cliente: Agrosuper)",
      position: "Desarrollador Full Stack",
      period: "2017 - 2021",
      location: "Rancagua, Chile",
      description: "Desarrollé el Portal de Promociones y Reposiciones, optimizando procesos internos de Agrosuper.",
      achievements: [
        "Desarrollé el frontend con Angular 8, aplicando lazy loading, ChangeDetectionStrategy.Default, tree-shaking y encapsulamiento de estilos.",
        "Implementé autenticación Microsoft 365 con MSAL, OAuth2/OpenID y protección de rutas con guards.",
        "Backend construido con ASP.NET 6 Minimal API, patrón Repository y conexión a MySQL via Entity Framework Core.",
        "Integración con DataLake para visualizaciones analíticas.",
        "Apliqué modularización, Reactive Forms, interceptores HTTP, manejo de errores y gestión del ciclo de vida con `ngOnDestroy`.",
        "Documenté y aseguré estándares de seguridad y mantenibilidad en el proyecto."
      ],
      technologies: ["Angular 8", "ASP.NET 6", "Entity Framework Core", "MySQL", "Microsoft 365", "MSAL", "OAuth2", "OpenID", "DataLake", "Reactive Forms"]
    }
  ]
}) {
  return (
    <div className="experience">
      <div className="experience-content">
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <div className="experience-company-info">
                <h4 className="experience-company">{exp.company}</h4>
                {exp.location && <span className="experience-location">{exp.location}</span>}
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              {exp.achievements && (
                <div className="experience-achievements">
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="experience-technologies">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience