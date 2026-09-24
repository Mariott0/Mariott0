const capabilities = [
  {
    number: "01",
    title: "Estratégia de testes",
    text: "Cenários, casos de teste e critérios de aceite construídos a partir das regras de negócio — não apenas da interface.",
    tags: ["Planejamento", "Testes funcionais", "Regressão"],
  },
  {
    number: "02",
    title: "Automação",
    text: "Verificações consistentes para reduzir trabalho repetitivo, ampliar a cobertura e dar velocidade às entregas.",
    tags: ["Selenium", "JavaScript", "Power Automate"],
  },
  {
    number: "03",
    title: "APIs & integrações",
    text: "Validação de contratos, requisições, respostas e fluxos entre sistemas corporativos complexos.",
    tags: ["REST", "Postman", "Insomnia"],
  },
  {
    number: "04",
    title: "Desenvolvimento",
    text: "Visão prática de código para investigar falhas com profundidade e conversar de igual para igual com engenharia.",
    tags: ["TypeScript", "Angular", "Node.js"],
  },
];

const stack = [
  "Selenium", "Postman", "TypeScript", "JavaScript", "SQL", "PL/SQL",
  "Angular", "React Native", "Node.js", "PostgreSQL", "Oracle", "Docker",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">NM<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#processo">Processo</a>
          <a className="nav-cta" href="#contato">Vamos conversar</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="eyebrow"><span /> Qualidade que sustenta grandes produtos</div>
        <h1>Eu encontro o que pode <em>dar errado.</em><br />Antes do usuário.</h1>
        <div className="hero-footer">
          <p>Sou Nathan Mariotto, profissional de Quality Assurance e estudante de Engenharia de Software. Transformo cenários complexos em experiências confiáveis.</p>
          <a className="circle-link" href="#sobre" aria-label="Conheça meu trabalho">
            <span>Conheça<br />meu trabalho</span><b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="hero-meta" aria-label="Áreas de atuação">
          <span>01 — QA &amp; TESTES</span><span>02 — AUTOMAÇÃO</span><span>03 — DESENVOLVIMENTO</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>QUALIDADE É PRODUTO <i>✳</i> TESTAR É INVESTIGAR <i>✳</i> AUTOMATIZAR É EVOLUIR <i>✳</i></div>
      </div>

      <section className="about dark-section" id="sobre">
        <p className="section-index">01 / SOBRE</p>
        <h2>Qualidade não é a última etapa. É como eu penso o produto inteiro.</h2>
        <div className="about-grid">
          <p className="lead">Uno visão técnica, contexto de negócio e curiosidade investigativa para prevenir problemas antes que eles cheguem à produção.</p>
          <div className="about-copy">
            <p>Atuo no planejamento, execução e documentação de testes em ambientes corporativos. Entendo as regras do negócio, exploro comportamentos inesperados e traduzo riscos em informações claras para produto e engenharia.</p>
            <p>Minha experiência com desenvolvimento amplia essa leitura: não observo apenas o sintoma. Procuro a origem, colaboro na solução e ajudo a construir processos mais confiáveis.</p>
          </div>
        </div>
        <div className="principles">
          <div><b>Entender</b><span>o contexto antes do cenário</span></div>
          <div><b>Investigar</b><span>além do caminho feliz</span></div>
          <div><b>Comunicar</b><span>riscos com clareza</span></div>
          <div><b>Melhorar</b><span>produto e processo</span></div>
        </div>
      </section>

      <section className="capabilities" id="atuacao">
        <div className="section-heading">
          <p className="section-index">02 / ATUAÇÃO</p>
          <h2>Da estratégia ao código.</h2>
          <p>Uma visão ampla para cuidar de cada ponto crítico da experiência.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability" key={item.number}>
              <span className="cap-number">{item.number}</span>
              <h3>{item.title}</h3>
              <div className="cap-detail">
                <p>{item.text}</p>
                <ul aria-label={`Tecnologias de ${item.title}`}>
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process dark-section" id="processo">
        <div className="section-heading">
          <p className="section-index">03 / PROCESSO</p>
          <h2>Como eu trabalho.</h2>
        </div>
        <div className="process-grid">
          <article><span>01</span><div className="process-mark">?</div><h3>Contexto primeiro</h3><p>Entendo as pessoas, as regras e o risco real antes de decidir o que testar.</p></article>
          <article><span>02</span><div className="process-mark">⌁</div><h3>Evidência sempre</h3><p>Registro cenários e resultados para tornar decisões e correções mais rápidas.</p></article>
          <article><span>03</span><div className="process-mark">✓</div><h3>Evolução contínua</h3><p>Automatizo o repetitivo e transformo cada falha em aprendizado para o processo.</p></article>
        </div>
      </section>

      <section className="stack" aria-labelledby="stack-title">
        <p className="section-index">04 / FERRAMENTAS</p>
        <h2 id="stack-title">Tecnologia é meio.<br /><em>Confiança é o resultado.</em></h2>
        <div className="stack-list">
          {stack.map((item, index) => <span key={item}>{String(index + 1).padStart(2, "0")} — {item}</span>)}
        </div>
      </section>

      <section className="contact" id="contato">
        <p className="section-index">05 / CONTATO</p>
        <p className="contact-kicker">Tem um produto complexo ou um desafio de qualidade?</p>
        <h2>Vamos construir<br />algo <em>confiável.</em></h2>
        <div className="contact-actions">
          <a href="https://www.linkedin.com/in/nathanmariotto/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="https://github.com/Mariott0" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">NM<span>.</span></a>
        <p>Quality Assurance · Automação · Desenvolvimento</p>
        <p>© {new Date().getFullYear()} Nathan Mariotto</p>
      </footer>
    </main>
  );
}
