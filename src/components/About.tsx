import { Card, CardContent } from "@/components/ui/card";
import { Cpu, MapPin, Satellite, TreePine } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: MapPin,
      title: "SIG & Cartografía",
      description: "Desarrollo de mapas temáticos, análisis espacial y modelamiento geográfico avanzado",
      color: "text-neon-green"
    },
    {
      icon: Satellite,
      title: "Teledetección",
      description: "Análisis de imágenes satelitales, monitoreo ambiental y detección de cambios",
      color: "text-neon-cyan"
    },
    {
      icon: Cpu,
      title: "Geoprocesamiento",
      description: "Automatización de flujos de trabajo, scripts Python y desarrollo de geoservicios",
      color: "text-neon-magenta"
    },
    {
      icon: TreePine,
      title: "Ingeniería Ambiental",
      description: "Evaluación de impacto ambiental, gestión de recursos naturales y sostenibilidad",
      color: "text-electric-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-matrix-green/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-neon-green">[</span>
            PERFIL PROFESIONAL
            <span className="text-neon-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto mb-8" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="border-l-4 border-neon-green pl-6">
              <h3 className="font-mono text-2xl text-neon-cyan mb-4">
                {'>'} Sobre mí
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Soy Andrés Cipagauta, Ingeniero Ambiental con especialización en 
                <span className="text-neon-green font-semibold"> Sistemas de Información Geográfica</span>. 
                Mi pasión es transformar datos geoespaciales complejos en soluciones visuales 
                y analíticas que impulsen la toma de decisiones estratégicas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Con experiencia en tecnologías de vanguardia como Python, R, QGIS, ArcGIS, 
                Google Earth Engine y PostgreSQL/PostGIS, desarrollo soluciones innovadoras 
                para challenges ambientales y territoriales.
              </p>
              <p className="text-foreground leading-relaxed">
                Mi enfoque combina rigor científico con creatividad tecnológica, 
                creando <span className="text-neon-cyan font-semibold">geovisores interactivos</span> y 
                sistemas de análisis espacial que revelan patrones ocultos en los datos.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-8 border border-neon-green/30 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="font-mono text-terminal-green text-sm mb-4">
                $ cat especialidades.json
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-neon-green">
                  {'"'}<span className="text-foreground">gis_software</span>{'"'}: [<span className="text-neon-cyan">"QGIS", "ArcGIS", "GRASS"</span>],
                </div>
                <div className="text-neon-green">
                  {'"'}<span className="text-foreground">programming</span>{'"'}: [<span className="text-neon-cyan">"Python", "R", "JavaScript"</span>],
                </div>
                <div className="text-neon-green">
                  {'"'}<span className="text-foreground">databases</span>{'"'}: [<span className="text-neon-cyan">"PostgreSQL", "PostGIS", "MongoDB"</span>],
                </div>
                <div className="text-neon-green">
                  {'"'}<span className="text-foreground">cloud_platforms</span>{'"'}: [<span className="text-neon-cyan">"Google Earth Engine", "AWS", "Azure"</span>],
                </div>
                <div className="text-neon-green">
                  {'"'}<span className="text-foreground">web_mapping</span>{'"'}: [<span className="text-neon-cyan">"Leaflet", "Mapbox", "OpenLayers"</span>]
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-cyber opacity-10 rounded-lg blur-xl" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group bg-card/30 border-border/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-glow-green backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h4 className="font-mono font-semibold text-foreground mb-3">
                  {skill.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;