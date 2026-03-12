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
    <div className="min-h-screen font-sans">
      {/* HEADER */}
      <header className="py-6 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-b border-brand-text/10">
        <div className="font-serif font-bold text-xl tracking-wider text-brand-text">
          FILIPE CUNHA <span className="font-light">ADVOCACIA</span>
        </div>
        <div className="text-sm text-brand-text/70 mt-2 md:mt-0 flex items-center gap-2 flex-wrap justify-center">
          <span>OAB/RJ 221.727</span>
          <span className="hidden md:inline">•</span>
          <span>Direito do Trabalho</span>
          <span className="hidden md:inline">•</span>
          <span className="font-medium text-brand-accent">Gestantes Dispensadas</span>
        </div>
      </header>

      {/* BLOCO 1 — HERO + FORMULÁRIO */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-text">
            Fui demitida grávida.<br />
            <span className="text-brand-accent italic font-normal">Ainda tenho direitos?</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/80 leading-relaxed">
            Muitas gestantes demitidas têm direito a mais de <strong>R$ 30.000 de indenização</strong> — e nem sabem disso. Responda algumas perguntas e nossa equipe entra em contato para explicar sua situação.
          </p>
          
          {/* Formulário Interativo */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-light">
            <div className="mb-6 flex justify-between items-center text-sm font-medium text-brand-text/50">
              <span>Formulário de Qualificação</span>
              <span>Passo {formStep} de 3</span>
            </div>

            {formStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-semibold text-lg text-brand-text">Você foi dispensada ou pediu demissão?</h3>
                <div className="space-y-2">
                  {['Fui dispensada (demitida pela empresa)', 'Fui pressionada a pedir demissão', 'Pedi demissão por conta própria'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q1', opt)} className="w-full text-left px-4 py-3 rounded-xl border border-brand-light hover:border-brand-accent hover:bg-brand-light/30 transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-semibold text-lg text-brand-text">Você estava grávida na época da demissão — ou descobriu a gravidez depois?</h3>
                <div className="space-y-2">
                  {['Já sabia que estava grávida', 'Descobri a gravidez depois da demissão', 'Ainda não sei ao certo'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q2', opt)} className="w-full text-left px-4 py-3 rounded-xl border border-brand-light hover:border-brand-accent hover:bg-brand-light/30 transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="font-semibold text-lg text-brand-text">Há quanto tempo você foi demitida?</h3>
                <div className="space-y-2">
                  {['Menos de 3 meses', 'Entre 3 e 6 meses', 'Entre 6 meses e 1 ano', 'Entre 1 e 2 anos', 'Mais de 2 anos'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('q3', opt)} className="w-full text-left px-4 py-3 rounded-xl border border-brand-light hover:border-brand-accent hover:bg-brand-light/30 transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-amber-50 rounded-xl flex items-start gap-3 text-sm text-amber-900">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
              <p>O prazo legal para exercer esse direito é de <strong>2 anos</strong> a partir da demissão. Quanto antes você agir, mais você pode recuperar.</p>
            </div>

            <button className="w-full mt-6 bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-brand-cta/20">
              Entender minha situação agora <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-brand-text/60 mt-4">Sem custo inicial. Você só paga se receber.</p>
          </div>
        </div>

        <div className="relative h-[500px] md:h-full rounded-3xl overflow-hidden shadow-xl">
          {/* Placeholder Imagem Hero */}
          <img 
            src="https://images.unsplash.com/photo-1517856497829-3047e3af23b5?q=80&w=2069&auto=format&fit=crop" 
            alt="Mulher grávida pensativa" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* BARRA DE CREDIBILIDADE */}
      <div className="bg-white border-y border-brand-light py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-brand-text font-medium">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-accent">
              <Lock className="w-5 h-5" />
            </div>
            Sem custo inicial
          </div>
          <div className="flex items-center gap-3 text-brand-text font-medium">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-accent">
              <Scale className="w-5 h-5" />
            </div>
            +10 anos de experiência
          </div>
          <div className="flex items-center gap-3 text-brand-text font-medium">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-accent">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            Atendimento 100% digital
          </div>
        </div>
      </div>

      {/* BLOCO 2 — QUEBRA DE OBJEÇÕES */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text mb-6">
            O que a maioria das gestantes não sabe — mas precisava saber antes de aceitar a demissão
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-accent">
              <h4 className="font-semibold text-lg text-brand-text flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cta"></span>
                "A empresa disse que não sabia da minha gravidez."
              </h4>
              <p className="text-brand-text/80 leading-relaxed">Isso não muda nada. O Supremo Tribunal Federal já decidiu: o desconhecimento da gravidez pelo empregador não elimina o seu direito. A proteção nasce com a gravidez — não com o aviso.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-accent">
              <h4 className="font-semibold text-lg text-brand-text flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cta"></span>
                "Eu assinei a rescisão. Já perdi meus direitos?"
              </h4>
              <p className="text-brand-text/80 leading-relaxed">Não necessariamente. A estabilidade da gestante é garantida pela Constituição Federal — e um documento assinado sem o pleno conhecimento da situação não apaga um direito constitucional. Muitas mulheres que assinaram a rescisão ainda conseguiram indenização.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-accent">
              <h4 className="font-semibold text-lg text-brand-text flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cta"></span>
                "Descobri a gravidez depois de ser demitida. Ainda conta?"
              </h4>
              <p className="text-brand-text/80 leading-relaxed">Sim. O que importa é que a gravidez já existia na data da demissão — não a data em que você descobriu. Exames médicos conseguem confirmar isso com precisão.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-accent">
              <h4 className="font-semibold text-lg text-brand-text flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cta"></span>
                "Tenho que voltar a trabalhar para ter direito?"
              </h4>
              <p className="text-brand-text/80 leading-relaxed">Não. Você pode escolher entre retornar ao emprego ou receber uma indenização substitutiva — que cobre salários, 13º, férias, FGTS e outros direitos de todo o período de estabilidade. A maioria das mulheres opta pela indenização.</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            {/* Placeholder Ilustração */}
            <div className="aspect-square rounded-3xl bg-brand-light flex items-center justify-center p-8 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                alt="Mulher lendo documento" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/10"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-center">
                <p className="font-serif text-2xl italic text-brand-text font-medium leading-snug">
                  "Se a gravidez existia na data da demissão, o direito também existia — mesmo que ninguém soubesse."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 — SIMULAÇÃO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Exemplo ilustrativo • Caso típico</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-text mt-3 mb-4">
              Quanto uma gestante demitida pode receber na prática?
            </h2>
            <p className="text-lg text-brand-text/70">Veja como funciona o cálculo para uma trabalhadora com salário de R$ 2.000 por mês:</p>
          </div>

          <div className="bg-brand-bg rounded-3xl p-6 md:p-10 shadow-sm border border-brand-light mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-brand-text/10 text-brand-text/60 text-sm uppercase tracking-wider">
                    <th className="pb-4 font-medium">Direito</th>
                    <th className="pb-4 font-medium hidden md:table-cell">Como é calculado</th>
                    <th className="pb-4 font-medium text-right">Valor estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-text/5">
                  <tr>
                    <td className="py-4 font-medium text-brand-text">Salários do período de estabilidade</td>
                    <td className="py-4 text-brand-text/60 text-sm hidden md:table-cell">~12 meses × R$ 2.000</td>
                    <td className="py-4 text-right font-mono text-brand-text">R$ 24.000</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-brand-text">13º salário</td>
                    <td className="py-4 text-brand-text/60 text-sm hidden md:table-cell">Proporcional ao período</td>
                    <td className="py-4 text-right font-mono text-brand-text">R$ 2.000</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-brand-text">Férias + 1/3</td>
                    <td className="py-4 text-brand-text/60 text-sm hidden md:table-cell">Proporcional ao período</td>
                    <td className="py-4 text-right font-mono text-brand-text">R$ 2.667</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-brand-text">FGTS + multa de 40%</td>
                    <td className="py-4 text-brand-text/60 text-sm hidden md:table-cell">8% do salário × meses + 40%</td>
                    <td className="py-4 text-right font-mono text-brand-text">R$ 3.200</td>
                  </tr>
                  <tr className="bg-brand-light/50">
                    <td className="py-6 font-bold text-brand-text text-lg rounded-l-xl pl-4">Total estimado</td>
                    <td className="py-6 hidden md:table-cell"></td>
                    <td className="py-6 text-right font-bold text-brand-accent text-xl rounded-r-xl pr-4">R$ 31.867</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block bg-brand-light/50 px-6 py-2 rounded-full text-brand-text/60 text-sm font-medium mb-4">
              Pela estabilidade violada de uma trabalhadora com salário de R$ 2.000
            </div>
            <div className="font-serif text-6xl md:text-8xl font-bold text-brand-cta tracking-tighter mb-6">
              Mais de R$ 30.000
            </div>
            <p className="max-w-2xl mx-auto text-brand-text/80 leading-relaxed">
              Esse não é um valor excepcional. É o cálculo padrão para um caso típico — salário médio, demissão no início da gestação, sem horas extras ou benefícios adicionais.
              <br /><br />
              <strong>Se o seu salário era maior</strong>, ou se havia plano de saúde, vale-refeição, comissões ou outros benefícios, o valor tende a ser ainda mais alto.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-center font-serif text-2xl font-bold text-brand-text mb-8">Com esse valor, dá para:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-bg p-6 rounded-2xl text-center border border-brand-light">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-4">
                  <Baby className="w-6 h-6" />
                </div>
                <p className="font-medium text-brand-text">Pagar todas as despesas do parto e do enxoval com folga</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-2xl text-center border border-brand-light">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <p className="font-medium text-brand-text">Ficar tranquila financeiramente durante toda a licença-maternidade</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-2xl text-center border border-brand-light">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-4">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <p className="font-medium text-brand-text">Montar uma reserva para os primeiros meses do bebê</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-2xl text-center border border-brand-light">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-4">
                  <UserCheck className="w-6 h-6" />
                </div>
                <p className="font-medium text-brand-text">Não depender de ninguém para cuidar do seu filho</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-brand-text/50 text-center max-w-3xl mx-auto mb-10">
            Valores ilustrativos com base em cálculo proporcional ao período de estabilidade (art. 10, II, "b", ADCT). O valor real depende do salário, dos benefícios, da data de demissão e do tempo de gestação de cada caso.
          </p>

          <div className="flex justify-center">
            <button className="bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-brand-cta/20 text-lg">
              Quero saber quanto eu tenho direito a receber <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOCO 4 — QUEM É FILIPE CUNHA */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            {/* Placeholder Foto Advogado */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Filipe Cunha - Advogado" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Advogado da Gestante</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text">
              Filipe Cunha
            </h2>
            <div className="space-y-4 text-lg text-brand-text/80 leading-relaxed">
              <p>
                Sou Filipe Cunha, advogado trabalhista inscrito na OAB/RJ sob o nº 221.727, com mais de 10 anos de atuação em Direito do Trabalho.
              </p>
              <p>
                Escolhi me especializar na defesa de gestantes dispensadas porque vi — muitas vezes — mulheres chegando convictas de que haviam perdido tudo. Que a assinatura encerrava qualquer possibilidade. Que a empresa estava certa.
              </p>
              <p className="font-medium text-brand-text">
                Na maior parte dos casos, elas estavam erradas. E essa informação mudou tudo.
              </p>
              <p>
                Sou casado com Jussara, também advogada, e pai do Paulo Miguel. Entendo o que significa querer proteger uma família — e é com esse mesmo senso de responsabilidade que conduzo cada caso.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-brand-light">
                <div className="text-brand-accent"><Scale className="w-5 h-5" /></div>
                <span className="text-sm font-medium text-brand-text">OAB/RJ 221.727</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-brand-light">
                <div className="text-brand-accent"><ClipboardCheck className="w-5 h-5" /></div>
                <span className="text-sm font-medium text-brand-text">+10 anos atuação</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-brand-light">
                <div className="text-brand-accent"><Shield className="w-5 h-5" /></div>
                <span className="text-sm font-medium text-brand-text">Delegado OAB/RJ</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-brand-light">
                <div className="text-brand-accent"><Baby className="w-5 h-5" /></div>
                <span className="text-sm font-medium text-brand-text">Especialista Gestantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 — GARANTIA */}
      <section className="py-16 md:py-24 bg-brand-text text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-brand-accent mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Sem risco. Sem custo inicial.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            O escritório Filipe Cunha Advocacia trabalha com honorários de êxito — você só paga ao final, se receber. Nenhum valor é cobrado antes do resultado.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
              <h4 className="font-bold text-lg mb-2">Preencha o formulário</h4>
              <p className="text-white/60 text-sm">Rápido e 100% digital</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
              <h4 className="font-bold text-lg mb-2">Nossa equipe entra em contato</h4>
              <p className="text-white/60 text-sm">Para orientar sua situação</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">3</div>
              <h4 className="font-bold text-lg mb-2">Você só paga se receber</h4>
              <p className="text-white/60 text-sm">Sem risco. Sem custo inicial.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3 text-sm text-white/80 text-left max-w-2xl mx-auto">
            <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400" />
            <p><strong>Atenção:</strong> Se alguém entrar em contato dizendo ser do nosso escritório e pedir qualquer dinheiro antecipado: é golpe. Não pague.</p>
          </div>
        </div>
      </section>

      {/* BLOCO 6 — CTA FINAL */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-light flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-text mb-6">
              O tempo é um fator real
            </h2>
            <p className="text-lg text-brand-text/80 mb-4">
              Existe um prazo legal para exercer esses direitos — e cada dia que passa é um dia a menos para agir. Não porque é uma frase de efeito. Porque é o que diz a lei.
            </p>
            <p className="text-lg font-medium text-brand-text mb-10">
              Se você foi demitida grávida, a única coisa que pode custar caro é não buscar informação.
            </p>
            
            <button className="bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-cta/20 w-full md:w-auto">
              Responder as perguntas e entender minha situação <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-brand-text/60">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-accent" /> Atendimento 100% digital</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-accent" /> Sem custo inicial</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-accent" /> Você só paga se receber</span>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[400px]">
            {/* Placeholder Imagem Final */}
            <img 
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2069&auto=format&fit=crop" 
              alt="Mulher grávida tranquila" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-brand-text text-white/60 py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-xl tracking-wider text-white mb-2">
              FILIPE CUNHA <span className="font-light">ADVOCACIA</span>
            </div>
            <p className="text-sm mb-1">Filipe Oliveira da Cunha • OAB/RJ 221.727</p>
            <p className="text-sm">Direito do Trabalho • Reclamações Trabalhistas de Gestantes Dispensadas</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white font-medium mb-1">📱 (21) 97350-8920</p>
            <p className="text-white font-medium">📷 @filipecunha.adv</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs text-center md:text-left">
          <p>Este site tem caráter exclusivamente informativo e educativo. As informações aqui apresentadas não constituem consultoria jurídica individualizada.</p>
        </div>
      </footer>
    </div>
  );
}
