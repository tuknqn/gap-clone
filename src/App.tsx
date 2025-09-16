import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { ChevronRight, ChevronLeft, Menu, X, Mail, Phone, MapPin } from 'lucide-react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      title: "El éxito depende de elegir la opción correcta",
      subtitle: "Tecnología e innovación para tu empresa"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
      title: "Soluciones tecnológicas innovadoras",
      subtitle: "Desarrollo de software de última generación"
    }
  ]

  const technologies = [
    { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Apache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" }
  ]

  const clients = [
    { name: "Microsoft", logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" },
    { name: "SAP", logo: "https://logos-world.net/wp-content/uploads/2020/06/SAP-Logo.png" },
    { name: "Adobe", logo: "https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png" },
    { name: "Cisco", logo: "https://logos-world.net/wp-content/uploads/2020/06/Cisco-Logo.png" }
  ]

  const navigationItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Que ofrecemos?', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'RR.HH.', href: '#rrhh' },
    { name: 'Acerca De', href: '#acerca' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">PUNTOGAP</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen">
        <div className="relative h-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Software Factory */}
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h2 className="text-3xl font-bold text-center text-primary">FABRICA DE SOFTWARE</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Trabajamos en múltiples tecnologías y lenguajes de programación, ofreciendo soluciones 
                  innovadoras y competitivas a nuestros clientes. Usamos herramientas de ingeniería de 
                  software para el modelado y desarrollo de sistemas bajo patrones de desarrollo de alto 
                  nivel y basados en nuestra experiencia y casos de éxito. Nos enfocamos en plataformas 
                  abiertas. Desarrollamos aplicaciones online web, mobile y desktop.
                </p>
              </CardContent>
            </Card>

            {/* Network Monitoring */}
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h2 className="text-3xl font-bold text-center text-primary">MONITOREO DE REDES Y SISTEMAS</h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  PUNTOGAP es desde 2017 Partner Tecnológico en Argentina de QualityNOC, una empresa 
                  española especializada en servicios de monitoreo de redes y sistemas, fundada por 
                  experimentados ingenieros en telecomunicaciones de diferentes países. Para más 
                  información envíanos un mail a qualitynoc_arg@puntogap.com
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <a href="http://www.qualitynoc.com/" target="_blank" rel="noopener noreferrer">
                      Visitar QualityNOC
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">TECNOLOGÍAS</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desarrollamos sistemas a medida, sin restricciones de licencias y con total disponibilidad 
              del código fuente. Cada uno de nuestros trabajos es una obra única, pensada de acuerdo a 
              las necesidades de nuestros clientes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">CONTACTO</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Domicilio</h3>
                  <p className="text-muted-foreground">
                    Buenos Aires, Argentina<br />
                    Zona Metropolitana
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Teléfono / Cel</h3>
                  <p className="text-muted-foreground">
                    +54 11 1234-5678<br />
                    +54 9 11 9876-5432
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@puntogap.com<br />
                    contacto@puntogap.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Asunto</label>
                  <Input placeholder="Asunto de tu consulta" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje</label>
                  <Textarea 
                    placeholder="Escribe tu mensaje aquí..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HR Section */}
      <section id="rrhh" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">RECURSOS HUMANOS</h2>
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">NUESTRAS BÚSQUEDAS ACTUALES</h3>
            <p className="text-muted-foreground mb-6">
              Estamos en la búsqueda permanente de personas creativas para nuestro TEAM.
            </p>
            <p className="mb-6">
              Mandanos tu CV a <strong>rrhh@puntogap.com</strong>
            </p>
            <Button asChild>
              <a href="mailto:rrhh@puntogap.com">Enviar CV</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            ¿QUIENES SOMOS Y QUÉ HACEMOS EN PUNTOGAP?
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              PUNTOGAP es una empresa especializada en el diseño, desarrollo e implementación de 
              software con una importante orientación a tecnologías de Internet/Web de última generación.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trabajamos con metodologías ágiles, que son base de toda transformación digital, ofreciendo 
              soluciones innovadoras y competitivas a nuestros clientes. Usamos técnicas y herramientas 
              de ingeniería de software para el modelado y desarrollo de sistemas con un enfoque en 
              plataformas abiertas, que nos permiten hacer una eficiente orquestación de microservicios 
              aprovechando las infraestructuras altamente escalables de kubernetes montadas en la cloud 
              computing, tanto para proyectos de data analytic, edge data computing y edge computing 
              analytic over IoT.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desarrollamos sistemas a medida, sin restricciones de licencias y con total disponibilidad 
              del código fuente, tanto en proyectos aplicados a las industrias del sector público, oil&gas, 
              sector financiero y mercados verticales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada uno de nuestros trabajos son una obra única, pensada de acuerdo a las necesidades 
              de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">
              Copyright © 2005-2025{' '}
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground underline"
              >
                - Política de privacidad
              </a>
            </p>
            <p className="text-sm text-primary-foreground/80">
              Desarrollado por PUNTOGAP
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App