const blogPosts = [
    {
        title: "Minha perspectiva sobre Código Limpo",
        date: "17 de Fevereiro de 2024",
        year: 2024,
        author: "Ana Julia Marçal",
        excerpt: "Uma análise pessoal sobre os princípios do livro Código Limpo e como aplicá-los no desenvolvimento de software.",
        image: "https://via.placeholder.com/400x200/6A00FF/FFFFFF?text=Clean+Code",
        link: "article.html?id=clean-code",
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
    }
];

