import React, { useState } from 'react';
import { Shield, Scale, ClipboardCheck, Lock, Baby, Home, PiggyBank, UserCheck, ChevronRight, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [formStep, setFormStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

  const handleAnswer = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  return (
    <div className="min-h-screen font-sans marble-bg">
      {/* GREEK KEY TOP DECORATION */}
      <div className="greek-key-border opacity-20"></div>

      {/* HEADER */}
      <header className="py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="font-serif font-black text-2xl tracking-[0.2em] text-brand-text flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-brand-accent flex items-center justify-center rotate-45">
            <Scale className="w-5 h-5 -rotate-45 text-brand-accent" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none">FILIPE CUNHA</span>
            <span className="text-sm font-light tracking-[0.4em] text-brand-accent">ADVOCACIA</span>
          </div>
        </div>
        <div className="text-xs font-bold tracking-widest text-brand-text/60 mt-4 md:mt-0 flex items-center gap-4 flex-wrap justify-center uppercase">
          <span className="border-b border-brand-accent/30 pb-1">OAB/RJ 221.727</span>
          <span className="hidden md:inline text-brand-accent">•</span>
          <span className="border-b border-brand-accent/30 pb-1">Direito do Trabalho</span>
          <span className="hidden md:inline text-brand-accent">•</span>
          <span className="text-brand-accent font-black tracking-normal">Gestantes</span>
        </div>
      </header>

      {/* BLOCO 1 — HERO + FORMULÁRIO */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        {/* DECORATIVE COLUMN SHADOW */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-brand-accent/5 pointer-events-none blur-3xl rounded-full"></div>
        
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-3 py-1 border border-brand-accent/30 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-2">
            Justiça e Dignidade
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1] text-brand-text uppercase">
            Fui demitida <span className="text-brand-accent italic font-normal">Grávida.</span><br />
          </h1>
          <p className="font-serif text-xl md:text-2xl text-brand-text/70 leading-relaxed italic border-l-2 border-brand-accent pl-6">
            "A lei protege a vida que renasce. Seus direitos não são favores, são conquistas constitucionais."
          </p>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            Muitas gestantes têm direito a mais de <strong>R$ 30.000 de indenização</strong>. Deixe nosso escritório analisar seu caso com o rigor que ele merece.
          </p>
          
          {/* Formulário Interativo */}
          <div className="bg-white p-8 md:p-10 rounded-none shadow-2xl border-t-4 border-brand-text relative overflow-hidden group">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-brand-accent opacity-40"></div>
            </div>

            <div className="mb-8 flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase text-brand-text/40">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45"></div>
                Consulta Preliminar
              </span>
              <span>Parte {formStep} / 3</span>
            </div>

            {formStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="font-serif text-2xl font-bold text-brand-text leading-tight">Sobre a natureza do desligamento:</h3>
                <div className="space-y-3">
                  {['Fui dispensada (demitida pela empresa)', 'Fui pressionada a pedir demissão', 'Pedi demissão por conta própria'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q1', opt)} className="w-full text-left px-6 py-4 border border-brand-light hover:border-brand-accent bg-transparent hover:bg-brand-accent/5 transition-all text-sm font-medium tracking-wide uppercase group/btn flex items-center justify-between">
                      {opt}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity text-brand-accent" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="font-serif text-2xl font-bold text-brand-text leading-tight">Ciência do estado gravídico:</h3>
                <div className="space-y-3">
                  {['Já sabia que estava grávida', 'Descobri a gravidez após a demissão', 'Ainda não sei ao certo'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q2', opt)} className="w-full text-left px-6 py-4 border border-brand-light hover:border-brand-accent bg-transparent hover:bg-brand-accent/5 transition-all text-sm font-medium tracking-wide uppercase group/btn flex items-center justify-between">
                      {opt}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity text-brand-accent" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="font-serif text-2xl font-bold text-brand-text leading-tight">Temporalidade da ocorrência:</h3>
                <div className="space-y-3">
                  {['Menos de 3 meses', 'Entre 3 e 6 meses', 'Entre 6 meses e 1 ano', 'Entre 1 e 2 anos', 'Mais de 2 anos'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q3', opt)} className="w-full text-left px-6 py-4 border border-brand-light hover:border-brand-accent bg-transparent hover:bg-brand-accent/5 transition-all text-sm font-medium tracking-wide uppercase group/btn flex items-center justify-between">
                      {opt}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity text-brand-accent" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 p-5 bg-brand-light/30 border-l-2 border-brand-accent flex items-start gap-4 text-xs text-brand-text/70 italic">
              <AlertTriangle className="w-5 h-5 shrink-0 text-brand-accent" />
              <p>O prazo decadencial é de <strong>2 anos</strong>. O tempo é rigoroso com quem negligencia seus próprios direitos.</p>
            </div>

            <button className="w-full mt-8 bg-brand-text hover:bg-brand-accent text-white font-serif font-black tracking-[0.2em] py-5 px-6 uppercase transition-all shadow-xl hover:shadow-brand-accent/20 flex items-center justify-center gap-3">
              Solicitar Exegese Jurídica <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] font-bold tracking-widest text-brand-text/40 mt-4 uppercase italic">Honores ad exitum — Só recebemos pelo sucesso.</p>
          </div>
        </div>

        <div className="relative h-[600px] md:h-full group">
          <div className="absolute -inset-4 border border-brand-accent/20 pointer-events-none group-hover:inset-0 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-brand-text/10 mix-blend-multiply transition-opacity group-hover:opacity-0 duration-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1544207240-8b1025eb7aeb?q=80&w=2070&auto=format&fit=crop" 
            alt="Escultura grega clássica ou estética atemporal" 
            className="w-full h-full object-cover shadow-2xl grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
        </div>
      </section>

      {/* BARRA DE CREDIBILIDADE */}
      <div className="bg-brand-text py-12 relative overflow-hidden">
        <div className="greek-key-border opacity-10 absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative z-10">
          <div className="flex flex-col items-center gap-4 text-white text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
              <Lock className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black tracking-[0.2em] text-sm uppercase">Custo Zero</span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase">Investimento inicial inexistente</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-white text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
              <Scale className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black tracking-[0.2em] text-sm uppercase">Tradição</span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase">+10 anos de excelência jurídica</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-white text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black tracking-[0.2em] text-sm uppercase">Modernidade</span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase">Atendimento 100% Digital</span>
            </div>
          </div>
        </div>
        <div className="greek-key-border opacity-10 absolute bottom-0 left-0 right-0"></div>
      </div>

      {/* BLOCO 2 — QUEBRA DE OBJEÇÕES */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-brand-text mb-8 uppercase tracking-tight">
            Dogmas Jurídicos <span className="text-brand-accent italic font-normal lowercase tracking-normal">& Fatos.</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-10">
            <div className="group">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-brand-accent font-serif font-black text-xl">I.</span>
                <h4 className="font-serif font-bold text-xl text-brand-text uppercase tracking-wide">
                  O Desconhecimento do Empregador
                </h4>
              </div>
              <p className="text-brand-text/70 leading-relaxed pl-8 border-l border-brand-accent/20 transition-all group-hover:border-brand-accent">
                Irrelevante. A responsabilidade é objetiva. A proteção emana do fato biológico da concepção, não da ciência do contratante.
              </p>
            </div>
            
            <div className="group">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-brand-accent font-serif font-black text-xl">II.</span>
                <h4 className="font-serif font-bold text-xl text-brand-text uppercase tracking-wide">
                  A Quitação do Termo Rescisório
                </h4>
              </div>
              <p className="text-brand-text/70 leading-relaxed pl-8 border-l border-brand-accent/20 transition-all group-hover:border-brand-accent">
                A assinatura não anula a Constituição. Direitos indisponíveis e de ordem pública prevalecem sobre qualquer documento subscrito sem o pleno gozo da estabilidade.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-brand-accent font-serif font-black text-xl">III.</span>
                <h4 className="font-serif font-bold text-xl text-brand-text uppercase tracking-wide">
                  Descoberta Posterior do Estado
                </h4>
              </div>
              <p className="text-brand-text/70 leading-relaxed pl-8 border-l border-brand-accent/20 transition-all group-hover:border-brand-accent">
                Legítimo. Se o nascituro já existia no momento da ruptura contratual, a estabilidade retroage ao momento da concepção por força do Direito.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-brand-text p-8 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1965&auto=format&fit=crop" 
                alt="Colunas de templo ou Direito" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-[2s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 h-full flex flex-col justify-end border-2 border-brand-accent/30 p-8">
                <p className="font-serif text-3xl italic text-white font-medium leading-snug">
                  "Ubi eadem ratio, ibi eadem legis dispositio."
                </p>
                <div className="w-12 h-0.5 bg-brand-accent my-6"></div>
                <p className="text-white/60 text-sm uppercase tracking-widest font-black">Onde houver a mesma razão, aplica-se o mesmo direito.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 — SIMULAÇÃO */}
      <section className="py-24 md:py-32 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent"></div>
        <div className="greek-key-border opacity-5 absolute inset-0 bg-repeat opacity-5 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">Análise de Indenização</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase leading-tight">
              O Rigor do Cálculo<br />
              <span className="text-brand-accent italic font-normal lowercase tracking-normal">Justiça Quantificável.</span>
            </h2>
            <p className="text-xl text-white/60 font-serif italic">Base: Salário Mensal de R$ 2.000,00</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-brand-accent text-[10px] font-black uppercase tracking-[0.2em]">
                    <th className="pb-6 font-medium">Descrição do Direito</th>
                    <th className="pb-6 font-medium hidden md:table-cell text-center">Fórmula Analítica</th>
                    <th className="pb-6 font-medium text-right">Montante Estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-serif">
                  <tr className="group">
                    <td className="py-6 text-white text-lg group-hover:text-brand-accent transition-colors">Salários (Período de Estabilidade)</td>
                    <td className="py-6 text-white/40 text-sm hidden md:table-cell text-center italic">12 meses × Base Salarial</td>
                    <td className="py-6 text-right font-black text-white text-xl">R$ 24.000,00</td>
                  </tr>
                  <tr className="group">
                    <td className="py-6 text-white text-lg group-hover:text-brand-accent transition-colors">Décimo Terceiro Salário</td>
                    <td className="py-6 text-white/40 text-sm hidden md:table-cell text-center italic">Proporcionalidade Legal</td>
                    <td className="py-6 text-right font-black text-white text-xl">R$ 2.000,00</td>
                  </tr>
                  <tr className="group">
                    <td className="py-6 text-white text-lg group-hover:text-brand-accent transition-colors">Férias + 1/3 Constitucional</td>
                    <td className="py-6 text-white/40 text-sm hidden md:table-cell text-center italic">Acréscimo Constitucional</td>
                    <td className="py-6 text-right font-black text-white text-xl">R$ 2.667,00</td>
                  </tr>
                  <tr className="group">
                    <td className="py-6 text-white text-lg group-hover:text-brand-accent transition-colors">FGTS + Indenização de 40%</td>
                    <td className="py-6 text-white/40 text-sm hidden md:table-cell text-center italic">Fundo de Garantia Corrigido</td>
                    <td className="py-6 text-right font-black text-white text-xl">R$ 3.200,00</td>
                  </tr>
                  <tr className="bg-brand-accent/10 border-t-2 border-brand-accent">
                    <td className="py-8 font-black text-brand-accent text-2xl uppercase tracking-widest pl-4">Indenização Total</td>
                    <td className="py-8 hidden md:table-cell"></td>
                    <td className="py-8 text-right font-black text-white text-3xl pr-4">R$ 31.867,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="font-serif text-7xl md:text-9xl font-black text-brand-accent tracking-tighter mb-8 group">
              + R$ 30.000,00
              <div className="h-2 w-24 bg-brand-accent mx-auto mt-2 transition-all duration-700 group-hover:w-48"></div>
            </div>
            <p className="max-w-3xl mx-auto text-white/70 leading-relaxed text-lg italic">
              Este valor não representa uma exceção, mas a aplicação rigorosa da legislação vigente para um caso de remuneração mediana. Em casos de salários superiores ou benefícios acessórios (Plano de Saúde, Auxílio Alimentação), o patrimônio indenizatório expande-se proporcionalmente.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-center font-serif text-3xl font-black text-brand-text mb-12 uppercase tracking-wide">Legados da Justiça:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Baby, text: "Segurança total para o enxoval e o nascimento", title: "Progenitor" },
                { icon: Home, text: "Estabilidade habitacional e nutritiva durante a licença", title: "Dignidade" },
                { icon: PiggyBank, text: "Garantia de reserva patrimonial para o lactante", title: "Provisão" },
                { icon: UserCheck, text: "Autonomia absoluta na criação do seu sucessor", title: "Soberania" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border-t-2 border-brand-accent shadow-xl hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-brand-text rounded-none flex items-center justify-center text-brand-accent mb-6 transform rotate-45 mx-auto">
                    <item.icon className="w-6 h-6 -rotate-45" />
                  </div>
                  <h5 className="font-serif font-black text-brand-text uppercase tracking-widest text-xs mb-3">{item.title}</h5>
                  <p className="text-sm font-medium text-brand-text/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-text/30 text-center max-w-3xl mx-auto mb-12 italic border-y border-brand-text/5 py-4">
            Previsão Analítica com base no Art. 10, II, "b", ADCT. A exatidão depende da análise documental individualizada.
          </p>

          <div className="flex justify-center">
            <button className="bg-brand-accent hover:bg-brand-text text-white font-serif font-black py-6 px-12 uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center gap-4 text-lg">
              Iniciar Pleito <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOCO 4 — QUEM É FILIPE CUNHA */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto border-y border-brand-accent/10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative p-4 border-2 border-brand-accent/30 group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-brand-accent"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-brand-accent"></div>
            <div className="relative h-[650px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Filipe Cunha - Jurista" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <span className="text-brand-accent font-black tracking-[0.5em] uppercase text-xs mb-4 block">Patrono das Gestantes</span>
              <h2 className="font-serif text-5xl md:text-6xl font-black text-brand-text uppercase leading-none">
                Filipe Cunha
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-brand-text/80 leading-relaxed font-serif italic border-l-4 border-brand-accent pl-10">
              <p>
                "Escolhi o Direito como instrumento de proteção à vida. Vi gestantes chegando ao meu escritório despojadas de sua dignidade, convencidas de que a demissão era o fim irremediável."
              </p>
              <p className="font-black text-brand-text not-italic uppercase tracking-wider text-sm">
                Eu lhes disse que a lei era o seu escudo. E os fatos lhes deram a vitória.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-brand-text/5">
              {[
                { label: "OAB/RJ 221.727", icon: Scale },
                { label: "+10 Anos de Labuta", icon: ClipboardCheck },
                { label: "Delegado OAB/RJ", icon: Shield },
                { label: "Expertise Gravídica", icon: Baby }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-brand-accent group-hover:scale-125 transition-transform"><badge.icon className="w-6 h-6" /></div>
                  <span className="text-xs font-black tracking-widest text-brand-text uppercase">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 — GARANTIA */}
      <section className="py-24 md:py-32 bg-brand-text text-white relative">
        <div className="greek-key-border opacity-5 absolute top-0 left-0 right-0"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="w-24 h-24 mx-auto border-2 border-brand-accent rounded-none flex items-center justify-center text-brand-accent mb-10 rotate-45">
            <Shield className="w-10 h-10 -rotate-45" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            Decreto de Segurança.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-16 font-serif italic">
            "Filipe Cunha Advocacia opera sob o estrito regime de êxito: Nosso sucesso está indissociavelmente vinculado ao seu."
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-20 relative">
            {[
              { num: "I", title: "Vocação", desc: "Análise Preliminar" },
              { num: "II", title: "Consilium", desc: "Diretriz Jurídica" },
              { num: "III", title: "Exitus", desc: "Resultados Obtidos" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 border border-brand-accent/50 text-brand-accent flex items-center justify-center font-serif font-black text-2xl mb-6 shadow-2xl group-hover:bg-brand-accent group-hover:text-brand-text transition-all">{step.num}</div>
                <h4 className="font-serif font-black text-lg mb-2 uppercase tracking-widest">{step.title}</h4>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-accent/10 border border-brand-accent/30 p-6 flex items-start gap-4 text-xs text-white/60 text-left max-w-2xl mx-auto italic">
            <AlertTriangle className="w-6 h-6 shrink-0 text-brand-accent" />
            <p><strong>Cláusula de Segurança:</strong> Não solicitamos aportes financeiros antecipados. Qualquer pedido de transação pecuniária prévia deve ser ignorado e reportado.</p>
          </div>
        </div>
      </section>

      {/* BLOCO 6 — CTA FINAL */}
      <section className="py-24 md:py-40 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]"></div>
        <div className="bg-white border-2 border-brand-text flex flex-col md:flex-row relative z-10 shadow-3xl">
          <div className="md:w-3/5 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-6xl font-black text-brand-text mb-8 uppercase leading-none">
              O Tempo é a <br />
              <span className="text-brand-accent italic font-normal lowercase tracking-normal">Medida de Todas as Coisas.</span>
            </h2>
            <p className="text-xl text-brand-text/70 mb-8 font-serif italic border-l-2 border-brand-accent pl-8">
              A inércia é a maior inimiga do Direito. Cada ciclo solar que se encerra aproxima seu caso do prazo fatal da prescrição.
            </p>
            
            <button className="bg-brand-text hover:bg-brand-accent text-white font-serif font-black py-6 px-8 uppercase tracking-[0.2em] transition-all shadow-2xl w-full md:w-auto self-start mr-auto mb-10 flex items-center gap-4">
              Reivindicar Meus Direitos <ArrowRight className="w-6 h-6" />
            </button>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-black tracking-widest text-brand-text/50 uppercase">
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rotate-45"></div> 100% Digital</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rotate-45"></div> Sem Custo Inicial</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rotate-45"></div> Honorários de Êxito</span>
            </div>
          </div>
          <div className="md:w-2/5 relative min-h-[500px] border-l-2 border-brand-text">
            <img 
              src="https://images.unsplash.com/photo-1544415847-1ad578e381ec?q=80&w=2066&auto=format&fit=crop" 
              alt="Estátua de Têmis ou estética jurídica clássica" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-black/80 to-transparent">
              <p className="font-serif italic text-white/80 text-lg uppercase tracking-widest">Justitia Omnibus</p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-brand-text text-white/40 py-20 px-4 md:px-8 border-t-4 border-brand-accent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="font-serif font-black text-2xl tracking-[0.3em] text-white uppercase flex items-center justify-center md:justify-start gap-4">
              <div className="w-8 h-8 border border-brand-accent flex items-center justify-center rotate-45"><Scale className="w-4 h-4 -rotate-45 text-brand-accent" /></div>
              FILIPE CUNHA <span className="font-light text-brand-accent">ADVOCACIA</span>
            </div>
            <div className="space-y-1 text-[10px] font-bold tracking-widest uppercase text-white/30 italic">
              <p>Filipe Oliveira da Cunha • OAB/RJ 221.727</p>
              <p>Especialista em Reclamações Trabalhistas para Gestantes</p>
            </div>
          </div>
          
          <div className="text-center md:text-right space-y-4">
            <p className="text-brand-accent font-serif font-black text-2xl tracking-widest uppercase">📱 (21) 97350-8920</p>
            <p className="text-white/60 font-serif italic text-lg tracking-widest">📷 @filipecunha.adv</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-[9px] font-black tracking-[0.3em] uppercase text-center md:text-left text-white/10 italic">
          <p>Ex nihilo nihil fit. Este conteúdo possui finalidade exclusivamente informativa. Consulte sempre um advogado.</p>
        </div>
      </footer>
    </div>
  );
}
