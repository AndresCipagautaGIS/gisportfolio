import { Button } from "@/components/ui/button";
import { MapPin, Globe, Database, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-space via-background to-matrix-green/10">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neon-green/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-neon-magenta/20 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Matrix-style typing effect simulation */}
        <div className="mb-6">
          <p className="font-mono text-terminal-green text-sm mb-2">
            $ whoami
          </p>
          <div className="font-mono text-neon-green text-lg">
            {'>'} Ingeniero_Ambiental_SIG.exe
          </div>
        </div>
        
        <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6 bg-gradient-cyber bg-clip-text text-transparent drop-shadow-lg">
          ANDRÉS
          <br />
          <span className="text-neon-cyan">CIPAGAUTA</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground mb-4 font-mono">
            <span className="text-neon-green">[</span>
            Especialista en Sistemas de Información Geográfica
            <span className="text-neon-green">]</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformando datos geoespaciales en soluciones innovadoras para un futuro sostenible
          </p>
        </div>
        
        {/* Animated Tech Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="group">
            <MapPin className="w-8 h-8 text-neon-green group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-glow-green" />
          </div>
          <div className="group">
            <Globe className="w-8 h-8 text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300 drop-shadow-glow-cyan" />
          </div>
          <div className="group">
            <Database className="w-8 h-8 text-neon-magenta group-hover:text-neon-green transition-colors duration-300 drop-shadow-glow-magenta" />
          </div>
          <div className="group">
            <Zap className="w-8 h-8 text-electric-blue group-hover:text-neon-green transition-colors duration-300" />
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="font-mono bg-gradient-cyber hover:shadow-glow-green transition-all duration-300 transform hover:scale-105"
          >
            Ver Proyectos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-mono border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan transition-all duration-300"
          >
            Contactar
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;