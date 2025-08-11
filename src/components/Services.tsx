import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  Satellite, 
  BarChart3, 
  Database, 
  Code, 
  Globe,
  Layers,
  TrendingUp,
  Monitor,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Map,
      title: "Cartografía Digital",
      description: "Creación de mapas temáticos interactivos y estáticos para visualización de datos geoespaciales complejos",
      features: ["Mapas web interactivos", "Cartografía temática", "Simbología avanzada", "Diseño cartográfico"],
      color: "neon-green",
      gradient: "from-neon-green/20 to-neon-green/5"
    },
    {
      icon: Satellite,
      title: "Análisis de Imágenes Satelitales",
      description: "Procesamiento y análisis de imágenes de teledetección para monitoreo ambiental y detección de cambios",
      features: ["Clasificación supervisada", "Índices de vegetación", "Detección de cambios", "Análisis temporal"],
      color: "neon-cyan",
      gradient: "from-neon-cyan/20 to-neon-cyan/5"
    },
    {
      icon: BarChart3,
      title: "Análisis Espacial Avanzado",
      description: "Modelamiento geográfico y análisis estadístico espacial para la toma de decisiones estratégicas",
      features: ["Análisis de patrones", "Interpolación espacial", "Análisis de redes", "Modelamiento predictivo"],
      color: "neon-magenta",
      gradient: "from-neon-magenta/20 to-neon-magenta/5"
    },
    {
      icon: Database,
      title: "Bases de Datos Geoespaciales",
      description: "Diseño e implementación de bases de datos espaciales optimizadas para consultas geográficas",
      features: ["PostgreSQL/PostGIS", "Optimización espacial", "ETL geoespacial", "APIs REST/GraphQL"],
      color: "electric-blue",
      gradient: "from-electric-blue/20 to-electric-blue/5"
    },
    {
      icon: Code,
      title: "Desarrollo de Geoaplicaciones",
      description: "Creación de aplicaciones web personalizadas con funcionalidades SIG integradas",
      features: ["React/Vue.js", "Leaflet/Mapbox", "D3.js visualizations", "PWA geoespaciales"],
      color: "terminal-green",
      gradient: "from-terminal-green/20 to-terminal-green/5"
    },
    {
      icon: Globe,
      title: "Geoservicios Web",
      description: "Implementación de servicios web estándar OGC para compartir y distribuir información geográfica",
      features: ["WMS/WFS/WCS", "GeoServer/MapServer", "APIs geoespaciales", "Metadatos ISO 19115"],
      color: "neon-green",
      gradient: "from-neon-green/20 to-matrix-green/5"
    }
  ];

  const consultingAreas = [
    { icon: Layers, title: "Planificación Territorial", desc: "Ordenamiento territorial y uso del suelo" },
    { icon: TrendingUp, title: "Evaluación Ambiental", desc: "EIA y monitoreo de recursos naturales" },
    { icon: Monitor, title: "Smart Cities", desc: "Soluciones IoT y ciudades inteligentes" },
    { icon: Zap, title: "Emergencias", desc: "Gestión de riesgos y respuesta a desastres" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-matrix-green/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-neon-cyan">[</span>
            SERVICIOS PROFESIONALES
            <span className="text-neon-cyan">]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas avanzadas en Sistemas de Información Geográfica 
            para impulsar tu proyecto al siguiente nivel
          </p>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${service.gradient} border-border/50 hover:border-${service.color}/50 transition-all duration-500 hover:shadow-glow-green backdrop-blur-sm hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-${service.color}/10 border border-${service.color}/30`}>
                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <CardTitle className="font-mono text-lg text-foreground group-hover:text-neon-green transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full font-mono border-${service.color}/50 text-${service.color} hover:bg-${service.color}/10 transition-all duration-300`}
                >
                  Más información
                </Button>
              </CardContent>
              
              {/* Cyber decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Consulting Areas */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="text-neon-magenta">{'>'}</span> Áreas de Consultoría
            </h3>
            <p className="text-muted-foreground">
              Especialización en sectores estratégicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingAreas.map((area, index) => (
              <div 
                key={index}
                className="group p-6 border border-border/50 rounded-lg bg-card/30 hover:bg-card/50 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300"
              >
                <area.icon className="w-8 h-8 text-neon-cyan mb-4 group-hover:text-neon-green transition-colors" />
                <h4 className="font-mono font-semibold text-foreground mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-lg blur-xl" />
            <div className="relative bg-card/50 border border-neon-green/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
                ¿Listo para transformar tus datos geoespaciales?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Contacta conmigo para discutir cómo puedo ayudarte a implementar 
                soluciones SIG innovadoras en tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="font-mono bg-gradient-cyber hover:shadow-glow-green transition-all duration-300"
                  onClick={() => window.open('https://wa.me/573057288260', '_blank')}
                >
                  Iniciar Proyecto
                </Button>
                <Button 
                  variant="outline" 
                  className="font-mono border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                >
                  Ver Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;