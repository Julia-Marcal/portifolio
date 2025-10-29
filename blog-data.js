const blogPosts = [
    {
        title: "O poder de registrar: Brag Document e Humble Document",
        date: "02 de Setembro de 2025",
        year: 2025,
        author: "Ana Julia Marçal",
        excerpt: "Como o brag document e o humble document podem ajudar no crescimento profissional, combatendo a síndrome do impostor e promovendo aprendizado contínuo.",
        link: "article.html?id=5",
        content: `
            <h3>O que é um <em>Brag Document</em>?</h3>
            <p class="mb-6">De forma simples, um <strong>brag document</strong> é uma lista das suas conquistas profissionais. Ele serve como um registro da sua evolução, sendo especialmente útil em <em>performance reviews</em> ou quando você precisa mostrar à sua liderança por que merece uma promoção ou aumento.</p>

            <p class="mb-6">Mas os benefícios não param aí. Ter esse tipo de documento ajuda você a acompanhar seu crescimento de carreira e a perceber o valor real das suas contribuições dentro de um time ou projeto.</p>

            <p class="mb-6">É natural termos altos e baixos na forma como enxergamos nossa própria performance. Nessas horas, o <strong>brag document</strong> pode ser um antídoto para a famosa “síndrome do impostor”, tão comum entre desenvolvedores. Ao anotar suas conquistas, você passa a observar sua evolução de maneira mais racional e analítica.</p>

            <p class="mb-6">Confesso que no início eu via esse hábito de anotações como perda de tempo, por que escrever em vez de colocar a mão na massa? Hoje penso diferente: registrar pontos relacionados ao trabalho, à carreira e ao desenvolvimento de hard e soft skills é a forma mais prática de identificar áreas de melhoria. Além disso, o documento acaba funcionando como um guia sobre o que estudar e aprofundar, evitando que você gaste energia em tópicos aleatórios que não contribuem de fato para sua evolução profissional.</p>

            <h3>E o <em>Humble Document</em>?</h3>
            <p class="mb-6">Se o <strong>brag document</strong> foca nas conquistas, o <strong>humble document</strong> tem o objetivo oposto: registrar seus erros. Ele ajuda a identificar padrões de falhas, revelando pontos de melhoria em você, no time ou até mesmo nos processos da equipe.</p>

            <p class="mb-6">Esse hábito de documentar é essencial no ambiente de trabalho. Afinal, não conseguimos guardar todos os detalhes na memória principalmente aqueles erros aparentemente pequenos, mas que podem trazer aprendizados valiosos. Com registros claros, você ainda terá um “backup” de informações para embasar melhor sugestões e discussões.</p>

            <h3>Como utilizar essas anotações?</h3>
            <p class="mb-6">Não leve esses documentos como uma obrigação chata ou um checklist que precisa ser preenchido toda semana. Se em uma semana você não conseguiu anotar nada no seu <em>brag document</em> ou <em>humble document</em>, tudo bem. Isso não significa que você não evoluiu ou que não fez nada relevante, apenas que naquele momento não houve algo que você julgou digno de registrar (ou até esqueceu).</p>

            <p class="mb-6">A ideia é que esses documentos estejam sempre à mão como uma forma de <strong>autoanálise</strong> e <strong>memória de carreira</strong>. Quando usados dessa maneira, eles deixam de ser uma cobrança e passam a ser um suporte real para seu desenvolvimento.</p>

            <p class="mb-6">No fim das contas, o importante é que eles trabalhem a seu favor, para valorizar suas conquistas, aprender com os erros e manter sua evolução visível para você mesma.</p>

            <p class="text-sm text-gray-400 mt-8">Publicado em 02 de Setembro de 2025 por Ana Julia Marçal</p>
        `
    },

    {
        title: "O ganho técnico por trás do Over Engineering",
        date: "19 de Agosto de 2025",
        year: 2025,
        author: "Ana Julia Marçal",
        excerpt: "Uma reflexão sobre como o over engineering pode ser um aliado no aprendizado técnico em projetos pet, especialmente quando combinado com IA.",
        link: "article.html?id=4",
        content: `
            <p class="mb-6">Cada vez mais <strong>over engineering</strong> é visto com maus olhos por conta do contexto atual do mercado. Nesse artigo vou mostrar por que pode ser que não seja tão ruim assim. Hoje em dia, projetos são apresentados com rapidez muito por conta das ferramentas que facilitam a vida dos programadores, e muitos usam a filosofia de <em>vibe coding</em> e MVP. Isso não necessariamente é algo ruim se o seu propósito for entregar um produto rápido sem se preocupar tanto com a qualidade.</p>
            
            <p class="mb-6">Mas, para quem procura se aprofundar em assuntos específicos, um projeto <em>pet</em> com <strong>over engineering</strong> é extremamente importante. Ele te dá autonomia total sobre o que está construindo, faz você participar de todo o fluxo, desde levantamento de requisitos até o deploy, e ainda cria o melhor espaço para aprender mais sobre ferramentas, design e arquitetura que você quer dominar ou trabalhar no futuro.</p>
            
            <h3>O Papel da IA</h3>
            <p class="mb-6">É importante também entender como a IA pode ajudar nesse processo de evolução do conhecimento como um todo. Assim como cair em <em>tutorial hell</em> ou ficar preso em cursos pode te deixar dependente de um guia, os agentes de IA também podem acabar criando essa dependência.</p>
            
            <p class="mb-6">No meu caso, uso a IA como uma assistente para analisar minhas escolhas técnicas. No meu projeto <em>pet</em>, o <strong>"fake-fintech"</strong>, por exemplo, eu estava adicionando uma arquitetura de microserviços com comunicação entre esses serviços e o monólito via mensageria assíncrona. Para ter uma visão mais ampla sobre quais ferramentas usar e entender o nível de complexidade dos serviços, pedi ajuda ao ChatGPT/DeepSeek. Assim fui aprendendo os pontos fortes e fracos de cada alternativa.</p>
            
            <h3>Fontes e Estudos</h3>
            <p class="mb-6">Quanto ao código em si, fui atrás das bibliotecas usadas no Laravel (monólito) e no Golang (serviços) em artigos no Medium e em projetos do GitHub. Também li sobre alguns padrões de mensageria no RabbitMQ (acabei escolhendo <em>Publish/Subscribe</em>) e, em alguns casos específicos de bug/debug, usei a IA para entender o porquê dos erros.</p>
            
            <p class="mb-6">Quando estava aprendendo mais sobre as linguagens que uso hoje, também usei IA para achar fontes confiáveis e referências conhecidas sobre o ferramental. No caso do Golang, por exemplo, li <em>Effective Go</em>, olhei os projetos <em>go-patterns</em> e <em>golang-standards/project-layout</em> no GitHub para entender como usar a linguagem de forma efetiva (até porque não adianta nada programar em Go como se fosse em Python).</p>
            
            <h3>Conclusão</h3>
            <p class="mb-6">No fim, o que percebo é que o <strong>over engineering</strong> não precisa ser visto apenas como desperdício de tempo. Em projetos <em>pet</em>, ele é uma forma prática de experimentar e aprender sobre arquitetura, ferramentas e boas práticas de desenvolvimento. Quando esse estudo é auxiliado pela IA, o aprendizado pode ser acelerado, desde que ela não substitua o estudo, a prática e o pensamento crítico real.</p>
            
            <p class="mb-6">O equilíbrio entre <strong>over engineering</strong>, usar a <strong>IA</strong> e outras ferramentas como apoio pode ser justamente o que transforma sua evolução técnica.</p>
            
            <p class="text-sm text-gray-400 mt-8">Publicado em 19 de Agosto de 2025 por Ana Julia Marçal</p>
        `
    },
    {
        title: "Minha perspectiva sobre Código Limpo",
        date: "17 de Fevereiro de 2024",
        year: 2024,
        author: "Ana Julia Marçal",
        excerpt: "Uma análise pessoal sobre os princípios do livro Código Limpo e como aplicá-los no desenvolvimento de software.",
        image: "https://via.placeholder.com/400x200/6A00FF/FFFFFF?text=Clean+Code",
        link: "article.html?id=3",
        content: `
            
            <p class="mb-6">"Código Limpo" é um livro que divide opiniões entre os leitores; alguns o consideram raso e repetitivo. Porém, é sem dúvida uma ótima leitura para formar suas opiniões.</p>
            
            <p class="mb-6">Neste artigo, irei fazer um resumo dos pontos que me ajudaram a ter uma nova perspectiva sobre o desenvolvimento de software.</p>
            
            <h3>Exemplo Prático</h3>
            <p class="mb-4">Considere este exemplo:</p>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>var ServiceOnlineFlag = emManutencao 
var ServiceStatus = emManutencao</code></pre>
            
            <p class="mb-6">Esse exemplo parece simples, porém, em um contexto geral, apenas o nome de uma variável pode confundir totalmente a percepção de um desenvolvedor sobre um módulo.</p>
            
            <h3>Nomenclatura</h3>
            <p class="mb-4">Utilize nomes descritivos, isso ajudará muito no processo de compreensão de terceiros quando algum código for modificado. Deixar seu código padronizado e legível ajuda no entendimento do contexto geral.</p>
            
            <h3>Funções</h3>
            <p class="mb-4">Crie funções com um único propósito, utilize poucos parâmetros e desenvolva de maneira sucinta. Exceções podem existir, porém, sempre tente manter seu módulo contínuo, como um livro que seu propósito se revela ao longo da leitura.</p>
            
            <h3>Comentários</h3>
            <p class="mb-4">Evite-os. Não deixe códigos comentados para o futuro, não utilize comentários para contextualizar seu código. Use-os estrategicamente, em casos como contextualização de regra de negócio ou em códigos complexos. Lembre-se de que códigos estão constantemente sendo atualizados, seu bubble sort de hoje pode se tornar um selection sort amanhã.</p>
            
            <h3>Limites</h3>
            <p class="mb-4">Estabeleça limites entre os módulos do seu sistema. Sempre mantenha uma interface intermediária com código externo; evite que módulos acessem diretamente o interior de um objeto, mantendo suas classes encapsuladas e suas informações protegidas. Mantenha suas interfaces pequenas e bem específicadas.</p>
            
            <h3>Erros e Emergências</h3>
            <p class="mb-4">Use exceções em casos de erros, padronize ao máximo suas mensagens, forneça contexto sobre a situação, porém não quebre o fluxo da aplicação e nem se limite a usar apenas return.</p>
            
            <p class="mb-4">Sobre as emergências, mantenha o contexto da aplicação claro. Teste de maneiras diversificadas, refatore frequentemente e torne isso uma rotina. Lembre-se de que a refatoração geral do sistema é quase sempre inviável e ineficaz. Portanto, não deixe para pensar em refatoração apenas quando tudo estiver uma bagunça.</p>
            
            <h3>Construção do Zero</h3>
            <p class="mb-4">Não se perca em detalhes mínimos, escalabilidade ou qualquer outro aspecto de desempenho enquanto seu sistema não estiver funcional. A otimização prematura, muitas vezes, acaba atrapalhando. Embora regras e limites possam ser úteis para futuras refatorações, o desenvolvimento de um sistema é um processo gradual.</p>
            
            <p class="mb-4">Concentre-se no que precisa ser feito agora, desenvolva bem, mas não antecipe que seu site se torne o novo Instagram e transforme tudo em microsserviços com load balancers infinitos. Soluções devem ser criadas para problemas existentes. Então, mantenha seu sistema facilmente modificável, focando em sua funcionalidade. Estabeleça padrões, teste e observe a evolução e as alterações necessárias, mantenha seu design flexível.</p>
            
            <p class="mb-4">Expresse claramente o significado de cada linha e minimize seus códigos. Contudo, a legibilidade pode afetar a otimização da aplicação, é uma balança que deve pender para o que a aplicação tem mais necessidade.</p>
            
            <h3>Conclusão</h3>
            <p class="mb-4">Particularmente, a moral do livro é: seja sucinto e direto em seu código, tente expressar-se de forma que o sistema seja performático e, mais importante, de fácil manutenção. Faça testes contínuos e diversificados, mantenha seu sistema flexível e refatore frequentemente pequenos pedaços para que tudo não se torne uma grande bola de neve de código ruim.</p>
            
            <p class="text-sm text-gray-400 mt-8">Publicado em 17 de Fevereiro de 2024 por Ana Julia Marçal</p>
        `
    },
    {
        title: "Estratégias de Migração de Banco de Dados",
        date: "22 de Fevereiro de 2023",
        year: 2023,
        author: "Ana Julia Marçal",
        excerpt: "Um guia prático sobre como escolher a melhor estratégia de migração de banco de dados — do Big Bang à Zero Downtime — com dicas para evitar perdas e garantir uma transição segura.",
        image: "https://via.placeholder.com/400x200/6A00FF/FFFFFF?text=Clean+Code",
        link: "article.html?id=2",
        content: `
            <p>Neste artigo, vamos falar sobre estratégias de migração de banco de dados, por que ela deve acontecer, como deve acontecer e qual é a melhor opção para cada caso.</p>

            <p>Vamos imaginar que você iniciou uma startup com alguns amigos há alguns meses. É uma ideia inovadora que explodiu em pouco tempo. No início do projeto, vocês desenharam o banco de dados de uma forma esperando poucos usuários e pouco tráfego, mas agora percebem que o design não é tão direto, e vocês gostariam de mudar o banco de dados, o design e alguns relacionamentos também.</p>

            <p>O que fazer agora? Você deve redesenhar tudo nesse mesmo banco SQL? Ou migrar para outro? Minha resposta é: migre!</p>

            <h2>Coisas para pensar antes de migrar</h2>

            <p>Primeiro, você precisa pensar sobre a quantidade de dados sendo transferida. Se a quantidade não for tão alta, é possível escolher uma estratégia de migração que não seja tão segura. Claro, a quantidade de dados vai definir se você pode migrar com um simples arquivo JSON ou precisará de uma ferramenta exclusiva para essa ação.</p>

            <p>Pense na importância dos dados do banco: eles são realmente tão importantes que seria impensável perdê-los?</p>

            <p>Se você estiver migrando para um banco completamente diferente do anterior, precisa considerar como adaptar os dados à nuvem/SQL/NoSQL da sua escolha. Quanto maior o volume de dados, mais trabalho você terá para configurar e ajustar os dados ou o novo banco da forma correta.</p>

            <p>Pense em quanto tempo essa migração e configuração vão levar. Você precisa da migração com urgência? Tem alguém para analisar os dados depois? Vai migrar uma parte menor dos dados primeiro para análise?</p>

            <h2>Estratégias de Migração e qual escolher</h2>

            <h3>Grande Migração (Big Bang)</h3>

            <p>É um esforço único para migrar todo o banco de dados de uma vez. É um processo relativamente simples, mas com grande tempo de inatividade e maior risco de corromper ou perder dados. Normalmente é feito em horários em que o servidor não está ativo para os usuários.</p>

            <p>Essa estratégia pode ser útil para empresas pequenas, com bancos de dados mais simples que não funcionam 24/7. Escolher horários fora de pico ajuda a reduzir os erros durante a migração.</p>

            <h3>Migração em Etapas (Trickle)</h3>

            <p>É uma forma mais lenta de migrar dados de um servidor para outro, mas mais metódica e ágil. Envolve submigrações com escopos, prazos e metas. Isso facilita para a equipe de migração analisar cada etapa e confirmar o sucesso ou perda de dados em cada submigração.</p>

            <p>Claro que essa estratégia exige mais tempo e mais recursos, pois os dois bancos de dados precisam funcionar ao mesmo tempo. É indicada para projetos maiores ou empresas que tenham mais tempo para migrar e equipes disponíveis para validar os dados.</p>

            <h3>Migração com Zero Downtime</h3>

            <p>É uma abordagem que permite migrar o banco de dados sem pausar a disponibilidade da base original, migrando pequenos blocos de dados e utilizando ferramentas que mantêm os dois bancos sincronizados.</p>

            <p>É uma ótima opção para empresas ou projetos que precisam de migrações mais rápidas, mesmo com muitos dados e relações complexas. É uma opção de baixo custo, sem necessidade de verificar se os dados foram corrompidos ou perdidos — mas requer um planejamento cuidadoso e testes para garantir que tudo funcione perfeitamente.</p>

            <p>Com este artigo da OpenGenus, você deve ter agora uma visão completa sobre as diferentes estratégias de migração de banco de dados.</p>
        `
    },
    {
        title: "Tolerância a Partições após os anos 2000",
        date: "15 de Março de 2023",
        year: 2023,
        author: "Ana Julia Marçal",
        excerpt: "Uma análise sobre como a tolerância a partições evoluiu após os anos 2000 e o que isso significa na prática para sistemas distribuídos e o Teorema CAP.",
        image: "https://via.placeholder.com/400x200/FF7A00/FFFFFF?text=Partition+Tolerance",
        link: "article.html?id=1",
        content: `
          <p>Neste artigo, vamos focar na tolerância a partições ao projetar um sistema e como essa ideia mudou com a evolução da conexão de internet. A ideia de escolher 2 dos 3 itens do Teorema CAP ainda existe? Se sim, ainda é a mesma de antigamente? Existe uma forma de ter tolerância a partições sem nenhuma falha? Vamos conversar sobre isso.</p>
      
          <h2>O que é uma partição?</h2>
          <p>Partição é um erro de comunicação de rede que ocorre em sistemas distribuídos. Exemplo: você está escrevendo um artigo em um site e sua internet cai — seu progresso é perdido porque nada foi salvo.</p>
      
          <h2>O que é tolerância a partições?</h2>
          <p>Você já deve ter ouvido falar do Teorema CAP, mas vamos revisar a letra P. Partição, nesse contexto, é a capacidade do sistema de continuar funcionando mesmo quando há falhas de comunicação entre alguns nós.</p>
      
          <p>Imagine um jogo multiplayer com 14 servidores no mundo. Você entra em um servidor próximo, mas ele falha. Você sai, volta e entra em outro servidor. O sistema continua funcional — isso é tolerância a partições.</p>
      
          <p>Porém, e o progresso do jogo? Ele conta no ranking? Não. Houve uma falha. Quanto mais tolerante a partições um sistema for, menos consistente ele tende a ser, porém mais disponível ele estará.</p>
      
          <h2>3 de 3 no Teorema CAP</h2>
          <p>Quando se fala em escolher 2 de 3 no CAP, geralmente se assume que P está sempre presente. Mas por quê?</p>
      
          <p>É possível ter consistência e disponibilidade sem tolerância a partições, usando um servidor monolítico. Mas isso traz desvantagens como dificuldade de escalabilidade e alta latência em operações simultâneas.</p>
      
          <p>Microserviços resolvem parte desses problemas, mas envolvem abrir mão de uma das garantias do CAP. Em projetos iniciais, o foco não deve ser desempenho — crie um protótipo e evolua conforme necessário.</p>
      
          <h2>Tolerância a partições hoje</h2>
          <p>Com a evolução da comunicação de rede, o Teorema CAP tornou-se mais flexível. Partições são raras, mas ainda existem estratégias para lidar com elas.</p>
      
          <p>Um sistema pode detectar partições ou latência e entrar em modo de partição, recuperando dados perdidos ou reiniciando solicitações para manter a disponibilidade.</p>
      
          <p>Essa estratégia precisa ser bem planejada. Um sistema com limiar baixo de detecção de partições pode ativar esse modo com frequência, sobrecarregando o banco de dados e a rede.</p>
      
          <h2>Tolerância a falhas</h2>
          <p>Uma forma de minimizar os danos de uma partição é implementar tolerância a falhas. Isso envolve dados redundantes em múltiplos servidores, onde, se um falhar, outro assume seu lugar automaticamente.</p>
      
          <h2>Tolerância a falhas vs Tolerância a partições</h2>
            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
                <thead>
                    <tr style="text-align: left;">
                    <th style="padding: 12px; border: 1px solid #ddd;">Prós da Tolerância a Falhas</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Contras da Tolerância a Falhas</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Prós da Tolerância a Partições</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Contras da Tolerância a Partições</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Sistema nunca fica indisponível</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Alto custo de hardware</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Sistema continua mesmo com falhas</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Dados inconsistentes</td>
                    </tr>
                    <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Dados consistentes</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Alto custo de desempenho</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Possível restauração de falhas</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Dificuldade de configuração</td>
                    </tr>
                </tbody>
            </table>

            <br>
      
          <p>Cada abordagem tem suas vantagens e limitações. A escolha deve considerar o contexto do sistema e os requisitos do negócio.</p>
        `
    },
    {
        title: "DDD na prática: mantendo o domínio seguro",
        date: "29 de Setembro de 2025",
        year: 2025,
        author: "Ana Julia Marçal",
        excerpt: "Como separar o domínio de negócio da infraestrutura e da aplicação usando DDD e ACLs, garantindo que seu software evolua sem dores de cabeça.",
        image: "https://via.placeholder.com/400x200/007ACC/FFFFFF?text=Packet+Scope",
        link: "article.html?id=6",
        content: `
            <p>Se tem uma coisa que o <strong>Domain-Driven Design</strong> deixa claro é que nada deve bagunçar o domínio de um projeto. Frameworks mudam, bibliotecas somem, linguagens evoluem, mas a lógica de negócio precisa ficar protegida. É isso que garante que o sistema não se perca quando o mundo ao redor muda. O livro ajuda muito a entender por que projetos <strong>brownfield</strong> muitas vezes dão errado durante a construção.</p>

            <p>Pra mostrar isso de um jeito mais prático, além dos exemplos que darei no artigo, eu criei um projeto pet chamado <strong>Packet Scope</strong>. Ele é um analisador de pacotes de rede escrito em Go, bem leve e simples, mas que já mostra como separar domínio de infraestrutura usando DDD. A ideia não é ser um Wireshark da vida, e sim servir de laboratório pra aplicar arquitetura limpa enquanto mexo com captura de pacotes em tempo real.</p>

            <p>Com o <strong>Packet Scope</strong>, dá pra ver bem como cada camada tem seu papel: o domínio cuida dos conceitos da rede (pacotes, conexões, protocolos), a infraestrutura lida com bibliotecas externas como o <code>gopacket</code>, e a application layer coordena o fluxo e a concorrência entre as goroutines. Tudo separado, cada coisa no seu lugar, sem deixar que dependências externas invadam o core.</p>

            <p>E essa lógica não vale só pra projetos pequenos de estudo. Se a gente olhar para um caso real e de grande escala, como o <strong>Discord</strong>, dá pra perceber exatamente o mesmo princípio em ação.</p>

            <p>O projeto nasceu em 2015 com a missão de competir com o Skype e outros apps parecidos, oferecendo algo leve e estável que não atrapalhasse o desempenho do PC no meio de uma partida. No começo eles usaram <strong>Elixir</strong> no backend e <strong>Electron</strong> no frontend, mas à medida que foram crescendo, adicionaram <strong>Rust</strong> pra ganhar desempenho e adaptaram tudo pra rodar também no <strong>mobile</strong> e na <strong>web</strong> com React Native e React. Mesmo com todas essas mudanças, o domínio continuou o mesmo: ser um canal de comunicação para gamers. As ferramentas mudam, as camadas se ajustam, mas o coração do projeto não pode ser comprometido por detalhes externos.</p>

            <p>Mas como garantir isso? Adotar uma arquitetura hexagonal ou Ports and Adapters nem sempre é necessário. Eu sigo a filosofia do <strong>Keep It Simple, Stupid (KISS)</strong>: essas arquiteturas são boas, mas funcionam melhor em projetos mais complexos.</p>

            <p>O essencial é separar a lógica de negócio das outras regras, seja de infraestrutura, aplicação e apresentação. Isso deixa o projeto organizado e facilita que qualquer desenvolvedor consiga entender e evoluir o sistema. A camada de <strong>domínio</strong> vai carregar a lógica de negócio, agregados, entidades e outros elementos essenciais. Para que ferramentas ou escolhas externas não afetem essa camada, dá pra usar <strong>inversão de dependência</strong> ou apenas tomar cuidado maior com os imports, usando interfaces e outras abstrações de forma consciente. Assim, o domínio depende só das regras e comportamentos essenciais, sem se amarrar a bibliotecas externas.</p>

            <h2>Layers</h2>

            <h3>Application Layer</h3>
            <p>Esse layer coordena o que precisa acontecer antes de qualquer regra de negócio ser executada. Por exemplo: se um usuário faz uma request sobre pacotes de rede em tempo real, mas essa request depende dos protocolos filtrados, a verificação acontece no Application Layer. Só depois que a request é validada ela vai para o domínio, que processa os pacotes, e a resposta volta pelo Application Layer até a camada de apresentação. Assim, o domínio continua limpo e focado só na lógica de negócio.</p>

            <p>Além disso, o Application Layer também pode ter funções mais complexas. No <strong>Packet Scope</strong>, ele também <strong>orquestra a concorrência</strong>. O <code>analyzer.go</code> é um exemplo claro disso: ele coordena múltiplas goroutines para capturar pacotes em paralelo nas diferentes interfaces de rede. Esse tipo de controle de fluxo e concorrência não pertence ao domínio, mas sim à aplicação, pois trata de como o sistema organiza a execução das regras de negócio no mundo real.</p>

            <h3>Infrastructure Layer</h3>
            <p>Aqui ficam as implementações concretas que lidam com variáveis externas. É onde entram detalhes como persistência, rede, logs ou, nesse caso, a captura de pacotes com <code>gopacket</code> e <code>pcap</code>. O domínio não precisa saber como abrir uma interface de rede, filtrar protocolos ou registrar pacotes; ele só delega essas tarefas. Assim, a Infra Layer traduz as necessidades do domínio em chamadas para bibliotecas, sistemas ou dispositivos reais.</p>

            <h3>Presentation Layer</h3>
            <p>Essa camada é a “porta de entrada” para o usuário ou cliente da aplicação. Pode ser uma API HTTP, uma interface de linha de comando, ou até um dashboard web. Ela recebe as interações externas, transforma em comandos que o Application Layer entende, e depois devolve o resultado em um formato acessível para quem fez a requisição. Assim, o usuário não lida com regras de negócio nem detalhes de infraestrutura, só com a interface exposta.</p>

            <pre>
        ┌───────────────────────────────────────┐
        │       Infrastructure Layer            │
        │ • Acesso a banco de dados (SQL/NoSQL) │
        │ • APIs externas / HTTP clients        │
        │ • Sistemas de mensageria (Kafka, NATS)│
        │ • Bibliotecas de captura (GoPacket)   │
        │ • Logs, métricas, configurações       │
        └───────────▲───────────────────────────┘
                    │ dados crus (externos)
                    │
        ┌─────────────────────────────────────┐
        │             Domain / Core           │
        │ • Regras de negócio puras           │
        │ • Entidades e agregados             │
        │ • Serviços de domínio               │
        │ • Sem dependências externas         │
        │ Ex: NetworkFrame, Connection, Alert │
        └───────────▲─────────────────────────┘
                    │ resultado puro
                    │
        ┌─────────────────────────────────────┐
        │          Application Layer          │
        │ • Coordena casos de uso             │
        │ • Orquestra chamadas ao domínio     │
        │ • Aplica validações de negócio      │
        │ • Lida com regras de autorização    │
        │ • Define fluxos antes/depois do core│
        └───────────▲─────────────────────────┘
                    │ dados validados
                    │
        ┌─────────────────────────────────────┐
        │         Presentation Layer          │
        │ • Controllers REST/GraphQL          │
        │ • CLI commands                      │
        │ • WebSocket handlers                │
        │ • Formatação de responses (JSON)    │
        │ • Validação/parsing de entrada      │
        └─────────────────────────────────────┘
            </pre>

            <h2>Quando uma ferramenta afeta o core</h2>
            <p>Algumas bibliotecas acabam mexendo direto no domínio, e aí o risco aumenta. No <strong>Packet Scope</strong>, por exemplo, precisamos de uma biblioteca para capturar pacotes, como <strong>GoPacket</strong>. O problema é o risco desse acoplamento: se a biblioteca parar de ser desenvolvida ou mudar de forma incompatível, atualizar a aplicação pode virar um pesadelo, exigindo fork ou até uma implementação interna.</p>

            <p>Uma forma de resolver isso é usar um <strong>Anti-Corruption Layer (ACL)</strong>. A ideia é criar uma camada que pega os dados brutos da biblioteca e transforma em um modelo que faz sentido pro nosso domínio (<code>NetworkFrame</code>, <code>Connection</code>, <code>Alert</code>). Assim, o core da aplicação nunca depende diretamente da biblioteca. Qualquer mudança externa afeta só a camada de tradução, deixando o domínio seguro, limpo e pronto para evoluir sem problemas.</p>

            <pre>
        // ❌ Acoplamento direto
        type AllowedProtocols struct {
            Protocols map[gopacket.LayerType]bool // <- dependência externa
        }

        // ✅ Domínio puro (como deveria ser)
        type NetworkProtocol int

        const (
            IPv4 NetworkProtocol = iota
            IPv6
            TCP
            UDP
        )

        type PacketFilter struct {
            AllowedProtocols []NetworkProtocol
        }
            </pre>

            <h3>Boas práticas de ACL</h3>
            <ul>
                <li><strong>Isolar dependências externas</strong>: nunca deixe o domínio conhecer tipos ou estruturas de uma lib de terceiros.</li>
                <li><strong>Modelar no idioma do domínio</strong>: traduza dados crus (<code>gopacket.LayerType</code>) para conceitos que fazem sentido pro negócio (<code>NetworkProtocol</code>, <code>Connection</code>, <code>Alert</code>).</li>
                <li><strong>Manter o ACL fino e objetivo</strong>: ele não deve virar uma segunda camada de negócio, só traduz formatos externos para internos.</li>
                <li><strong>Documentar as conversões</strong>: deixe claro no código onde acontece a tradução para evitar bypass.</li>
                <li><strong>Facilitar substituição de bibliotecas</strong>: se amanhã trocar <code>GoPacket</code> por <code>Go-Pcap</code>, só o ACL muda. O domínio continua intacto.</li>
            </ul>

            <p>Com esse artigo não quero ditar regras nem dizer que todo projeto precisa nascer em cima de arquitetura hexagonal, entidades e agregados. O que quero reforçar é que proteger o domínio de negócio faz uma diferença enorme na evolução do software. Se a ideia é transformar um MVP em produto de longo prazo, desacoplar as bibliotecas e criar camadas de tradução (ACL) já é meio caminho andado. Pode parecer detalhe, mas é esse cuidado que garante tranquilidade lá na frente, quando uma dependência parar de ter suporte ou não acompanhar mais as versões das ferramentas que você usa. O domínio segue intacto, e o sistema continua evoluindo sem dor de cabeça.</p>

            <p>Se você quiser dar uma olhada mais a fundo no código que fiz, dá uma passada no repositório do <strong>Packet Scope</strong>: <a href="https://github.com/Julia-Marcal/packet-scope">https://github.com/Julia-Marcal/packet-scope</a></p>
            `
    },
    {
        title: "Dicas de performance em Go",
        date: "30 de outubro de 2025",
        year: 2025,
        author: "Ana Julia Marçal",
        excerpt: "Aprenda práticas e técnicas para extrair o máximo de performance do Go, evitando alocações desnecessárias e usando ponteiros, sync.Pool, copy e strings.Builder de forma eficiente.",
        image: "https://via.placeholder.com/400x200/007ACC/FFFFFF?text=Packet+Scope",
        link: "article.html?id=7",
        content: `
            <p class="mb-6">Go já é uma linguagem naturalmente rápida, mas sempre é possível melhorar seu código para alcançar uma performance ainda mais eficiente. Neste artigo, vou mostrar algumas práticas que podem te ajudar a extrair o máximo da linguagem, com exemplos reais e explicações que fazem sentido no dia a dia de um programador.</p>

            <h2>Use ponteiros (mas nem sempre)</h2>
            <p class="mb-6"><strong>Ponteiros</strong> são uma das funcionalidades mais interessantes (e, ao mesmo tempo, mais mal utilizadas) em Go. Principalmente pra quem vem de outra linguagem, entender <strong>o propósito</strong>, <strong>como</strong> e <strong>quando</strong> usar ponteiros faz toda a diferença.</p>

            <h3>Mas então, quando vale usar?</h3>
            <p class="mb-6">Geralmente, quando o dado que você está passando é grande (mais de 8 bytes). Isso porque um ponteiro ocupa 8 bytes, então, se você <strong>não</strong> usar ponteiros, o Go vai <strong>copiar a variável</strong> dentro da função (mesmo que desnecessariamente) o que acaba prejudicando a performance.</p>

            <h3>Quando não usar ponteiros?</h3>
            <p class="mb-6">Existem casos em que usar ponteiros não é bom. Retornar um ponteiro, por exemplo, só faz sentido quando o dado realmente precisa continuar existindo fora do escopo da função, isso causa um escape. Caso contrário, o Go acaba mandando seus dados pro <strong>heap</strong>, o que é mais pesado e faz o <strong>Garbage Collector</strong> entrar em ação para gerenciar a memória e isso custa performance.</p>

            <h3>Entendendo o escape</h3>
            <h4>Exemplo - sem ponteiro</h4>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>func createUser() User {
    u := User{Name: "Julia", Age: 25}
    return u
}</code></pre>
            <p class="mb-6"><code>u</code> fica na <strong>stack</strong> — simples e rápido.</p>

            <h4>Exemplo - com ponteiro</h4>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>func createUser() *User {
    u := User{Name: "Julia", Age: 25}
    return &u
}</code></pre>
            <p class="mb-6">Agora <code>u</code> vai pro <strong>heap</strong>, porque o Go precisa garantir que ele continue existindo fora da função.</p>

            <h4>Como ver se algo escapou pro heap</h4>
            <p class="mb-6">Execute o comando abaixo e veja o que o compilador está fazendo por baixo dos panos:</p>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>go build -gcflags="-m"</code></pre>

            <p class="mb-6">Se alguma variável tiver ido pro heap, vai aparecer algo como:</p>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>./main.go:5:6: moved to heap: u</code></pre>

            <h2>Use sync.Pool pra objetos temporários</h2>
            <p class="mb-6">O <code>sync.Pool</code> pode ser usado quando o seu código cria e destrói muitos objetos pesados (tipo structs grandes em loops ou requisições HTTP). Nessas situações o garbage collector acaba tendo que gerenciar as mesmas variáveis repetidas múltiplas vezes, e isso consome CPU. Com <code>sync.Pool</code> você guarda os objetos temporários e os reaproveita, evitando alocações desnecessárias e deixando o código mais leve.</p>

            <h3>Sem sync.Pool</h3>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>type User struct {
    Name string
    Data [1024]byte
}

func process() {
    u := new(User)
    u.Name = "Ana"
    fmt.Println("Processando", u.Name)
}

func main() {
    for i := 0; i < 1_000_000; i++ {
        process()
    }
}</code></pre>
            <p class="mb-6">Aqui o GC precisa lidar com 1 milhão de <code>User</code> alocados e descartados.</p>

            <h3>Com sync.Pool</h3>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>var userPool = sync.Pool{
    New: func() any {
        return new(User)
    },
}

func process() {
    u := userPool.Get().(*User)
    u.Name = "Ana"
    fmt.Println("Processando", u.Name)
    userPool.Put(u)
}

func main() {
    for i := 0; i < 1_000_000; i++ {
        process()
    }
}</code></pre>
            <p class="mb-6">Aqui, os objetos são reutilizados, e o GC quase não precisa fazer nada. Perfeito pra casos com <strong>requisições curtas</strong>, <strong>serialização de JSON</strong> ou <strong>buffers temporários</strong>.</p>

            <h2>Cuidado com closures que capturam variáveis grandes</h2>
            <p class="mb-6">Funções anônimas (<em>closures</em>) podem acessar variáveis de fora do seu escopo (mas isso não significa que seja uma boa ideia em todos os casos). Se a variável for grande, o compilador pode mandar ela direto pro <strong>heap</strong>, fazendo com que fique armazenada desnecessariamente e acabe pesando na performance, fazendo diferença em situações com muitas goroutines, quando você usa closures em loops ou manipula slices, mapas e structs grandes.</p>

            <h3>Exemplo ruim</h3>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>big := make([]byte, 1<<20)

go func() {
    fmt.Println(len(big))
}()</code></pre>
            <p class="mb-6">Como a goroutine pode rodar depois do <code>main</code>, o Go precisa garantir que <code>big</code> continue existindo. Resultado: vai pro heap.</p>

            <h3>Exemplo bom</h3>
            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>big := make([]byte, 1<<20)

go func(data []byte) {
    fmt.Println(len(data))
}(big)</code></pre>
            <p class="mb-6">Agora o Go entende que <code>data</code> é só uma <strong>referência</strong>, sem precisar mover <code>big</code> pro heap.</p>

            <h2>Prefira copy() a loops pra duplicar slices</h2>
            <p class="mb-6">Sempre que precisar duplicar slices, utilize a função built-in <code>copy()</code>. Ela é implementada em baixo nível, garantindo que a cópia seja <strong>idêntica</strong>, <strong>profunda</strong> e geralmente <strong>mais rápida</strong> do que criar a cópia manualmente. Para slices pequenos ou operações ocasionais, não há muita diferença. Mas em loops com muitas iterações ou slices grandes, <code>copy()</code> evita cópias desnecessárias e alocações extras, tornando o código mais eficiente e previsível.</p>

            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>dst := make([]byte, len(src))
copy(dst, src)</code></pre>

            <h2>Use buffers pra concatenar strings</h2>
            <p class="mb-6">Concatenar strings com <code>+</code> dentro de loops pode gerar alocações desnecessárias de memória. O mais eficiente é usar <code>strings.Builder</code>, que mantém um <strong>buffer interno</strong>, evitando cópias repetidas e reduzindo o trabalho do <strong>garbage collector</strong>:</p>

            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>var builder strings.Builder
for i := 0; i < 1000; i++ {
    builder.WriteString("Olá ")
}
result := builder.String()</code></pre>

            <h2>Dica final</h2>
            <p class="mb-6">Nem todo cenário exige performance extraordinária, onde nenhum pequeno gargalo pode passar despercebido, <strong>na maioria das vezes, nitpicking demais não é necessário</strong>.</p>

            <p class="mb-6">Se ainda assim você quiser garantir que sua aplicação está otimizada, lembre-se de que pequenas mudanças podem gerar ganhos, mas nem sempre o gargalo está onde se imagina. Para identificar a raiz do problema, use o <strong>profiler nativo <code>pprof</code></strong> e descubra exatamente o que está deixando seu código mais lento.</p>

            <pre class="bg-gray-800 p-4 rounded mb-4 overflow-x-auto"><code>go test -bench=. -benchmem
go tool pprof ./myapp cpu.pprof</code></pre>

            <p class="text-sm text-gray-400 mt-8">Publicado em 30 de Setembro de 2025 por Ana Julia Marçal</p>
        `
    }


];

