import { MapPin, Phone, CheckCircle, Star, Instagram, ChevronRight, ShieldCheck, Landmark, PiggyBank, BriefcaseBusiness, Quote } from 'lucide-react';
import { motion } from 'motion/react';

function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img src="/logo1.png" alt="Logo Apoio Solução" className="h-14 sm:h-16 w-auto object-contain drop-shadow-md" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-sm font-display text-gold uppercase tracking-widest">Apoio</span>
              <span className="text-3xl font-display font-bold text-white tracking-tighter italic">Solução</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servicos" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors">Serviços</a>
            <a href="#sobre" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors">Sobre Nós</a>
            <a href="#depoimentos" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors">Depoimentos</a>
            <a href="#contato" className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors">Contato</a>
            <a href="https://wa.me/554730358050" target="_blank" rel="noopener noreferrer" className="bg-gold hover:brightness-110 text-slate-950 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent z-10" />
        <img 
          src="/cliente.png" 
          alt="Cliente sendo atendido" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase">22 Anos de Credibilidade</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-white mb-6 tracking-tight"
          >
            A tranquilidade financeira que você merece com as <span className="italic text-gold">menores taxas</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
          >
            Empréstimos consignados seguros para aposentados, pensionistas INSS, servidores públicos e saldo FGTS. Mais de 45.000 clientes atendidos em Blumenau.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/554730358050" target="_blank" rel="noopener noreferrer" className="bg-gold hover:brightness-110 text-slate-950 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
              Fazer uma Simulação Grátis
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs tracking-widest uppercase font-semibold text-slate-400 ml-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover opacity-80" src="https://picsum.photos/seed/face1/100/100" alt="Cliente" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover opacity-80" src="https://picsum.photos/seed/face2/100/100" alt="Cliente" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover opacity-80" src="https://picsum.photos/seed/face3/100/100" alt="Cliente" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="block font-bold text-white text-sm">+45 mil</span>
                Clientes atendidos
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: 'Anos de Mercado', value: '22+' },
    { label: 'Clientes Satisfeitos', value: '45.000+' },
    { label: 'Aprovação Rápida', value: '100%' },
    { label: 'Avaliações Positivas', value: '4.9/5' },
  ];

  return (
    <div className="bg-[#020617] border-y border-white/10 text-white py-12 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${i % 2 !== 0 ? 'pl-8' : ''}`}
            >
              <div className="text-3xl md:text-5xl font-display font-light text-gold mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Consignado INSS",
      description: "As melhores taxas para aposentados e pensionistas do INSS com aprovação ágil.",
      icon: <PiggyBank size={24} className="text-gold" />,
    },
    {
      title: "Servidores Públicos",
      description: "Condições exclusivas de crédito consignado para funcionários de órgãos públicos.",
      icon: <Landmark size={24} className="text-gold" />,
    },
    {
      title: "Antecipação FGTS",
      description: "Dinheiro rápido na conta usando o saldo do seu FGTS, sem comprometer sua renda mensal.",
      icon: <BriefcaseBusiness size={24} className="text-gold" />,
    },
    {
      title: "Cartão Consignado",
      description: "Mais praticidade pro seu dia a dia com limite de crédito atrelado ao seu benefício.",
      icon: <CheckCircle size={24} className="text-gold" />,
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Especialistas em Soluções Financeiras</h2>
          <p className="text-slate-400 text-lg">Nosso objetivo é oferecer as melhores condições do mercado para que você tenha crédito de forma segura e transparente, reduzindo seus juros.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl glass hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/5 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-gold text-lg font-bold font-display mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 bg-[#020617] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-2 shadow-2xl">
              <img 
                src="/nova_imagem.jpeg" 
                alt="Escritório Apoio Solução" 
                className="w-full h-auto rounded-xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold -z-10 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-slate-700 -z-10 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">22 Anos de Confiança em Blumenau</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                A <strong className="text-gold font-semibold">Apoio Solução</strong> é especialista em empréstimos consignados, construindo uma trajetória de credibilidade atuando no mesmo endereço no coração de Blumenau há 22 anos.
              </p>
              <p>
                Nossa equipe altamente qualificada garante um atendimento humanizado, ágil e personalizado. Trabalhamos para entender sua necessidade real, sugerindo a melhor opção, seja reduzindo suas parcelas via portabilidade ou liberando novo crédito com as menores taxas do mercado.
              </p>
              <ul className="space-y-3 mt-6">
                {["Ambiente seguro e transparente", "Simulação rápida e sem compromisso", "Redução de juros e portabilidade", "Atendimento focado na sua necessidade"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold flex-shrink-0" size={20} />
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Maria de Lourdes Santos",
      text: "Atendimento excelente fui muito bem recebida, funcionarias atenciosas a Marcela resolveu meus problemas de juros e cobriu a oferta de outros bancos. Muito simpática ela uma querida estão de parabéns.",
      rating: 5,
      time: "9 meses atrás"
    },
    {
      name: "Andre Lebre",
      text: "A Sabrina ajudou a gente a cancelar tudo e ainda conseguiu tirar um seguro que estava sendo cobrado. Saímos de um juros que só crescia e não acabava nunca. Muita paciência e atendimento ótimo.",
      rating: 5,
      time: "1 mês atrás"
    },
    {
      name: "Arnilda Elias",
      text: "Ja sou cliente a mais de 15 anos, sempre fui muito bem atendida! Baixam meus juros e ainda fazem de tudo para liberar mais dinheiro.",
      rating: 5,
      time: "3 anos atrás"
    },
    {
      name: "Clayton Silva",
      text: "Já fiz meu aumento com Sabrina, adoro as meninas sempre atendem bem. Sou cliente desde de 2015 sempre me ajudaram com tudo com os meus benefícios do meus empréstimos.",
      rating: 5,
      time: "1 ano atrás"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-5xl mx-auto border-b border-white/5 pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold text-white mb-4">O que nossos clientes dizem</h2>
            <p className="text-slate-400 text-lg">A satisfação de quem confia na Apoio Solução há anos.</p>
          </div>
          <div className="flex items-center gap-2 mt-6 md:mt-0 glass px-4 py-2 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-current" />
              ))}
            </div>
            <span className="text-xs tracking-widest text-slate-400 font-semibold uppercase">Google Review</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-gold opacity-10" size={48} />
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-200 italic mb-6 relative z-10 leading-relaxed font-display tracking-wide">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gold font-bold font-display border border-white/10">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-slate-500">{review.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#020617] text-white relative border-t border-white/5">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Venha nos visitar</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Estamos localizados no coração de Blumenau há 22 anos. Nossa equipe está pronta para receber você para uma simulação sem compromisso.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Nosso Endereço</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Edifício Catarinense<br/>
                    R. XV de Novembro, 550 - Sala 601 - 6º andar<br/>
                    Centro, Blumenau - SC, 89010-901
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Contato</h4>
                  <p className="text-slate-400 text-sm">
                    Telefone: (47) 3035-8050<br/>
                    WhatsApp disponível no mesmo número.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Horário de Funcionamento</h4>
                  <p className="text-slate-400 text-sm">
                    Segunda a Sexta-feira: das 8:30 às 18:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/554730358050" target="_blank" rel="noopener noreferrer" className="bg-gold text-slate-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-colors flex items-center justify-center gap-2">
                Falar no WhatsApp
              </a>
              <a href="https://www.instagram.com/apoio.solucao" target="_blank" rel="noopener noreferrer" className="glass text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Instagram size={18} className="text-gold" />
                Instagram
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl relative glass p-2">
             <iframe 
              src="https://maps.google.com/maps?q=Apoio%20Solu%C3%A7%C3%A3o%20Emprestimo%20Blumenau&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 rounded-xl opacity-90"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Apoio Solução"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo1.png" alt="Logo Apoio Solução" className="h-12 sm:h-14 w-auto object-contain opacity-90 drop-shadow-sm" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-display text-gold uppercase tracking-widest">Apoio</span>
              <span className="text-xl font-display font-bold text-white tracking-tighter italic">Solução</span>
            </div>
          </div>
          <p className="text-center md:text-left text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Apoio Solução - Especialistas em Crédito
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
             <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
             <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
             <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-white bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
