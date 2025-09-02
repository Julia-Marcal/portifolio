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
    }
];

