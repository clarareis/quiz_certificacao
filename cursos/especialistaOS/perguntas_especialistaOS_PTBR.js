const perguntas = [
  {
    texto: `Considera o diagrama de arquitetura da aplicação apresentado.
A aplicação possui dois módulos front-end (Mod A e Mod B) e um módulo central (Mod C) que abstrai alguns serviços reutilizáveis.
As dependências existem porque o Mod A precisa reutilizar alguma lógica do Mod B, e ambos utilizam um conceito de negócio que está a ser implementado no Mod C.
Comenta sobre os problemas de arquitetura e alternativas.<br>
<img src="imagens/diagrama.png" alt="diagrama" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "O diagrama não apresenta problemas de arquitetura, uma vez que existem apenas referências laterais na camada do utilizador final ou referências para baixo.",
      "A lógica do Mod B que está a ser utilizada no Mod A deveria ser movida para o Mod C. O Mod A e o Mod B podem referenciar este novo módulo, evitando a dependência circular.",
      "O diagrama não apresenta problemas de arquitetura, uma vez que não existem dependências circulares.",
      "A lógica do Mod B que está a ser utilizada no Mod A deveria ser movida para um novo módulo central, o Mod AB. O Mod A e o Mod B podem referenciar este novo módulo, evitando a referência lateral."
    ],
    correta: 1,
    explicacao: "A lógica compartilhada entre Mod A e Mod B deve ser movida para o Mod C, que já abstrai serviços reutilizáveis. Isso evita dependência lateral e promove uma arquitetura desacoplada e escalável.",
    tema: "Best Practices"
  },
  {
    texto: "Para evitar um forte acoplamento e simplificar as dependências, podes...",
    opcoes: [
      "Criar um processo BPT que é implicitamente configurado para iniciar na atualização de uma ação específica e reagir às alterações feitas.",
      "Utilizar um serviço web local em vez de uma ação pública.",
      "Fundir dois módulos num único módulo, evitando a necessidade de dependências, uma vez que isso não terá impacto no tamanho do módulo.",
      "Usar um temporizador que estará a escutar alterações num dos módulos e a reagir a elas."
    ],
    correta: 1,
    explicacao: "Utilizar um serviço web local permite que módulos comuniquem entre si sem criar dependências diretas, promovendo uma arquitetura desacoplada e mais fácil de manter.",
    tema: "Best Practices"
  },
  {
    texto: "Quando ocorre o evento On Destroy?",
    opcoes: [
      "Ocorre antes de destruir um ecrã ou bloco e de o remover do DOM.",
      "Ocorre após todos os componentes filhos do componente pai serem destruídos.",
      "É acionado quando o navegador descarrega a página web ou fecha a janela.",
      "O evento ocorre durante o processo de re-renderização de um componente."
    ],
    correta: 0,
    explicacao: "O evento OnDestroy é executado antes de um ecrã ou bloco ser destruído e removido do DOM. Ele é útil para liberar recursos, cancelar timers ou limpar variáveis locais.",
    tema: "Logic"
  },
  {
    texto: "Ao usar os parâmetros Expand Inline em consultas SQL, qual das opções não é uma boa prática?",
    opcoes: [
      "Usar EncodeSql para codificar o conteúdo completo de um parâmetro SQL antes de expandi-lo.",
      "Construir cláusulas dinâmicas como ORDER BY @SortField utilizando Expand Inline.",
      "Criar cláusulas WHERE column IN (@values) com Expand Inline, tratando corretamente cada valor.",
      "Realizar a codificação manual de strings utilizando a função Replace."
    ],
    correta: 3,
    explicacao: "A codificação manual de strings utilizando a função Replace não é uma boa prática, pois pode levar a falhas de segurança e erros de codificação se não for feita corretamente.",
    tema: "Queries"
  },
  {
    texto: "Ao usar a API, notamos que no Response o campo City não traz valores. Por quê?",
    opcoes: [
      "Há um problema na configuração ou mapeamento da API que impede que o campo City seja preenchido corretamente.",
      "O nome JSON do campo City na estrutura não é o mesmo que o campo City no Response da API.",
      "O endpoint está errado.",
      "O campo City não está a ser retornado porque está nulo ou ausente."
    ],
    correta: 1,
    explicacao: "Se o nome JSON do campo na estrutura não corresponder ao nome retornado pela API, o mapeamento falha e o campo não é preenchido. É essencial garantir que os nomes estejam alinhados para que os dados sejam corretamente atribuídos.",
    tema: "REST APIs"
  },
  {
    texto: "Ao construir uma consulta SQL (Advanced Query), o que deves considerar para evitar problemas de desempenho?",
    opcoes: [
      "A plataforma otimiza automaticamente as consultas SQL para buscar apenas os atributos que serão utilizados.",
      "Usa um SELECT {Entity}.* para evitar erros e aumentar o desempenho.",
      "Cria uma estrutura de saída específica com apenas os atributos retornados.",
      "Cria uma vista na base de dados para executar a consulta."
    ],
    correta: 2,
    explicacao: "Ao criar uma estrutura de saída com apenas os atributos necessários, reduz-se o volume de dados processados e transferidos, melhorando o desempenho da consulta e evitando sobrecarga desnecessária.",
    tema: "Queries"
  },
  {
    texto: "Por que o arquivamento de dados é importante para o desempenho?",
    opcoes: [
      "Ele funde dados antigos e novos.",
      "Permite uma indexação mais rápida de todas as bases de dados.",
      "Minimiza o volume de dados primários.",
      "Elimina aplicações não utilizadas."
    ],
    correta: 2,
    explicacao: "O arquivamento de dados move registros antigos para áreas separadas, reduzindo o volume de dados ativos e melhorando o desempenho das consultas e operações no banco de dados principal.",
    tema: "Best Practices"
},
  {
    texto: "Por que o Timer de arquivamento deve ser executado durante horas de menor utilização?",
    opcoes: [
      "Para reduzir a carga na base de dados.",
      "Para simplificar o acesso dos utilizadores.",
      "Para melhorar o desempenho da indexação.",
      "Para reduzir o tempo de inatividade do sistema."
    ],
    correta: 0,
    explicacao: "Executar o Timer de arquivamento fora do horário de pico evita sobrecarga na base de dados, garantindo que o sistema continue responsivo para os utilizadores ativos.",
    tema: "Asynchronous Processes"
  },
  {
    texto: `Veja a imagem abaixo:<br>
    <img src="imagens/merge.png" alt="merge" style="max-width:100%;margin:10px 0"></img><br>
    Considerando a seguinte janela de diálogo Compare and Merge, qual das seguintes afirmações está correta:`,
    opcoes: [
      "Se selecionares ambas as caixas de verificação para o ecrã Company_Show, o Service Studio abrirá uma comparação lado a lado.",
      "Se clicares em Merge, a tua versão perderá a ação CheckSuperUserRole e manterá as tuas versões da ação RefreshCaseTable.",
      "A tua versão foi atualizada depois de o utilizador ford publicar a outra versão, portanto, uma fusão é necessária.",
      "Existe apenas o ecrã Company_Show no Company UI Flow."
    ],
    correta: 1,
    explicacao: "Ao clicar em Merge, o Service Studio aplica as alterações da versão publicada, substituindo a ação CheckSuperUserRole pela versão do outro desenvolvedor, mas mantendo a tua versão da ação RefreshCaseTable conforme selecionado.",
    tema: "Work in Teams"
  },
  {
    texto: "Qual é o propósito da coluna de controlo 'IsArchived'?",
    opcoes: [
      "Apaga os dados após o arquivamento.",
      "Marca os registos como arquivados.",
      "Marca os registos para exclusão.",
      "Marca os dados como ativos."
    ],
    correta: 1,
    explicacao: "A coluna 'IsArchived' é usada para identificar registros que foram movidos para uma área de arquivamento, permitindo que sejam excluídos da base ativa sem serem apagados do sistema.",
    tema: "Best Practices"
  },
    {
    texto: "Qual propriedade é removida ao copiar entidades para o catálogo de arquivamento?",
    opcoes: [
      "Propriedade AutoNumber.",
      "Chaves primárias.",
      "Flag IsActive.",
      "Atributo IsArchived."
    ],
    correta: 0,
    explicacao: "Ao copiar entidades para o catálogo de arquivamento, a propriedade AutoNumber é removida para evitar conflitos na geração automática de identificadores, já que os dados arquivados não devem continuar gerando novos valores.",
    tema: "Best Practices"
  },
  {
    texto: "Em relação às Web References, qual das seguintes afirmações é verdadeira?",
    opcoes: [
      "Se o Web Service for eliminado, o Service Studio mostrará um aviso ao publicar um módulo que referencia esse Web Service.",
      "Tanto a ação da Web Reference quanto a Screen Action que a chama utilizam a mesma transação.",
      "Se o Web Service for eliminado, o Service Studio mostrará um erro ao publicar um módulo que referencia esse Web Service.",
      "A propriedade Timeout in Seconds de uma Web Reference deve ser configurada ao utilizá-la numa Screen Action."
    ],
    correta: 2,
    explicacao: "Quando um Web Service referenciado é eliminado, o Service Studio não consegue resolver a dependência e exibe um erro ao tentar publicar o módulo, impedindo a publicação até que o problema seja resolvido.",
    tema: "REST APIs"
  },
  {
    texto: "Tenho um registo com 20 atributos, mas quero atualizar apenas 3 valores. Qual é a melhor prática?",
    opcoes: [
    "Usar uma API de atualização parcial para modificar apenas os campos.",
    "Validar os campos atualizados antes de guardar as alterações.",
    "Realizar atualizações em lote para minimizar o uso de recursos.",
    "Fazer a atualização dos valores no registo e realizar um CreatorUpdate."
    ],
    correta: 0,
    explicacao: "Utilizar uma API de atualização parcial permite modificar apenas os campos necessários, evitando sobrecarga e mantendo a integridade dos dados. Essa abordagem é eficiente e alinhada com boas práticas de integração.",
    tema: "REST APIs"
  },
  {
    texto: "Tens duas entidades: Product (externa) e OrderProduct (local). Qual é a melhor prática para unir essas entidades?",
    opcoes: [
      "A plataforma não permite que entidades locais façam referência a entidades externas.",
      "Buscar o subconjunto mínimo de dados necessário da base externa antes de realizar a união.",
      "Consultar as entidades separadamente e usar ciclos para fazer a correspondência.",
      "Realizar a união com todo o conjunto de dados da tabela externa."
    ],
    correta: 1,
    explicacao: "Ao unir entidades locais com externas, é recomendável buscar apenas o subconjunto necessário da base externa. Isso reduz o volume de dados transferidos e melhora o desempenho da aplicação.",
    tema: "External Databases"
  },
  {
    texto: "Timer processa dados de ClientEnergyData e depois os elimina. Como evitar timeouts?",
    opcoes: [
      "Num loop For-Each, faz a eliminação do registo e um commit explícito.",
      "Processa um lote de registos e faz commit deles. Controla o tempo e reativa o timer.",
      "Mantém o controlo sobre o tempo de execução do timer e para-o antes do timeout.",
      "Obtém apenas um número fixo de registos para processar cada vez que o timer é executado."
    ],
    correta: 1,
    explicacao: "A melhor prática para evitar timeouts em timers é processar os dados em lotes e fazer commit parcial. Isso permite controlar o tempo de execução e reativar o timer para continuar o processamento sem sobrecarregar o sistema.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Uma ação tem um fluxo CRUD e um exception handler com Abort=Yes e outro CRUD. O que acontece?",
    opcoes: [
    "É feito um rollback e um registo é criado na entidade Audit.",
    "É feito um rollback e nenhum registo é criado.",
    "A transação continua após o handler e o segundo CRUD é executado.",
    "O handler ignora o Abort e permite que o segundo CRUD seja persistido."
    ],
    correta: 1,
    explicacao: "Quando o Abort está definido como Yes, toda a transação é revertida. Mesmo que haja outro CRUD após o handler, ele não será executado, e nenhum registo será criado.",
    tema: "Exception/Transaction Handling"
  },
  {
    texto: "Em que circunstâncias um Process pode ser iniciado?",
    opcoes: [
      "Apenas através de uma chamada explícita a partir de um Action Flow, utilizando a função LaunchProcess.",
      "Automaticamente quando um registo de uma Entity que expõe eventos de processo é criado, ou iniciado explicitamente via Action Flow.",
      "Tanto na criação como na atualização de registos de qualquer Entity existente na aplicação.",
      "Apenas quando o módulo é publicado, sendo necessário reiniciar manualmente o Process no Service Center."
    ],
    correta: 1,
    explicacao: "Um Process pode ser iniciado automaticamente quando um registo de uma Entity que expõe eventos de processo é criado, ou pode ser iniciado explicitamente através de uma chamada em um Action Flow usando a função LaunchProcess.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Qual das seguintes opções não é uma boa prática de arquitetura recomendada pela OutSystems?",
    opcoes: [
      "Os módulos Foundation devem ter entidades Core apenas para leitura.",
      "Os módulos Foundation devem ser independentes e não ter referências ascendentes.",
      "Os módulos Foundation não podem ter quaisquer UI Patterns.",
      "Os módulos Foundation podem ter referências ascendentes para módulos de Core Services."
    ],
    correta: 3,
    explicacao: "Referências ascendentes para módulos de Core Services quebram o princípio de dependência unidirecional e dificultam a manutenção e escalabilidade da arquitetura.",
    tema: "Best Practices"
  },
  {
    texto: "Como evitar manipulação de dados sensíveis via URL ou formulário?",
    opcoes: [
      "Usar método SUBMIT em vez de NAVIGATE.",
      "Ativar Segurança HTTP (SSL).",
      "Auditar a atividade no sistema.",
      "Usar Variáveis de Sessão em vez de Input Parameters."
    ],
    correta: 3,
    explicacao: "Variáveis de Sessão são armazenadas no servidor e não são visíveis ou manipuláveis via URL ou formulário, protegendo dados sensíveis contra exposição ou alteração indevida.",
    tema: "Best Practices"
  },
  {
    texto: "Quero fazer a migração de pequenos lotes de dados. Qual é a melhor forma?",
    opcoes: [
    "BPT",
    "Light Process",
    "Timer",
    "REST API"
    ],
    correta: 2,
    explicacao: "Timers são ideais para executar tarefas recorrentes ou em segundo plano, como a migração de pequenos lotes de dados, sem sobrecarregar o sistema.",
    tema: "Asynchronous Processes"
  },
    {
    texto: "Qual opção deve estar na camada Core Business?",
    opcoes: [
      "Definição de workflows de processos para orquestrar casos de uso.",
      "Registos de logs de negócio.",
      "Definições de temas.",
      "Páginas iniciais com dashboards."
    ],
    correta: 0,
    explicacao: "A camada Core Business é responsável pela lógica de negócio central, incluindo a definição de workflows que orquestram os principais casos de uso da aplicação.",
    tema: "Logic"
  },
  {
    texto: "Como o planeamento do crescimento de dados durante a fase de design ajuda?",
    opcoes: [
      "Reduz a necessidade de monitorização da base de dados.",
      "Elimina a necessidade de arquivamento.",
      "Evita problemas de desempenho na aplicação.",
      "Garante que todos os dados ativos permanecem permanentes."
    ],
    correta: 2,
    explicacao: "Planejar o crescimento de dados desde o design permite prever volumes futuros e estruturar a base de dados para evitar lentidão, gargalos e problemas de escalabilidade.",
    tema: "Best Practices"
  },
  {
    texto: "Quando converte uma Entity para uma Static Entity...",
    opcoes: [
      "Consegue obter no Service Studio todos os registos dos dados da Entity.",
      "A Static Entity mantém os atributos da Entity e adiciona também os atributos Order, Label e Is_Active.",
      "A Static Entity não mantém os índices da Entity.",
      "Obtém no Service Studio uma Static Entity com todos os registos preenchidos com os dados da Entity."
    ],
    correta: 2,
    explicacao: "Ao converter uma Entity para uma Static Entity, os índices da Entity original não são mantidos, pois as Static Entities são projetadas para armazenar um conjunto fixo de valores que não mudam com frequência.",
    tema: "Data"
  },
  {
    texto: "A que se refere o 'main catalog'?",
    opcoes: [
      "Arquivo histórico",
      "Armazenamento secundário",
      "APIs externas",
      "Armazenamento primário"
    ],
    correta: 3,
    explicacao: "O 'main catalog' refere-se ao armazenamento primário onde os dados ativos da aplicação são mantidos e acessados com maior frequência.",
    tema: "Data"
  },
  {
    texto: "Para o OutSystems Cloud, onde podem ser armazenados os dados arquivados?",
    opcoes: [
      "Em servidores on-premises.",
      "Em ficheiros JSON.",
      "Em bases de dados externas ou base de dados do OutSystems.",
      "Em APIs expostas pela aplicação."
    ],
    correta: 2,
    explicacao: "No OutSystems Cloud, os dados arquivados podem ser armazenados tanto em bases de dados externas quanto na própria base de dados da plataforma, conforme a estratégia de retenção e desempenho definida.",
    tema: "External Databases"
  },
  {
    texto: "Qual é a melhor maneira de refatorar o módulo Finance?",
    opcoes: [
      "Criar dois novos módulos, Finance e Finance_CS, e mover os elementos conforme necessário.",
      "Clonar o módulo Finance, renomear para Finance_CS e eliminar os fluxos de UI.",
      "Renomear o módulo original para Finance_CS e clonar para Finance, eliminando entidades e ações.",
      "Renomear o módulo original para Finance_CS e usar o componente Refactor para migrar os ecrãs."
    ],
    correta: 2,
    explicacao: "A melhor prática é dividir o módulo original em dois novos módulos com responsabilidades distintas, separando lógica de negócio e serviços core, o que facilita a manutenção e escalabilidade.",
    tema: "Best Practices"
  },
  {
    texto: "O que está incorreto sobre Automatic Activities, nas respostas abaixo?",
    opcoes: [
    "Não podem ser agendadas automaticamente.",
    "Não têm ações oncallback.",
    "Não são executadas em condições de sucesso.",
    "São executadas por um motor assíncrono."
    ],
    correta: 0,
    explicacao: "Automatic Activities podem ser agendadas automaticamente com base em eventos ou condições definidas no processo, permitindo a execução automática sem intervenção manual.",
    tema: "Asynchronous Processes"
  },
  {
    texto: `Considera a seguinte definição de Timer para processar despesas de ficheiros.
    Antes de terminar a sua lógica, o Timer ativa um segundo Timer para processar as despesas extraídas dos ficheiros e guardadas na base de dados.
    O que acontece se o primeiro Timer atingir o timeout?
    <br>
    <img src="imagens/timerscompare.png" alt="timerscompare" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "As alterações realizadas pela Ação são revertidas e o segundo Timer não é executado.",
      "As alterações realizadas pela Ação são guardadas, mas o segundo Timer não é executado.",
      "As alterações realizadas pela Ação são guardadas e o segundo Timer é ativado para execução.",
      "As alterações realizadas pela Ação são revertidas, mas o segundo Timer é ativado para execução.",
    ],
    correta: 0,
    explicacao: "Se o primeiro Timer atingir o timeout, todas as alterações feitas durante sua execução são revertidas, incluindo a ativação do segundo Timer, que não será executado.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Qual é o principal benefício do arquivamento de dados para os utilizadores finais?",
    opcoes: [
      "Melhor desempenho em tempo de execução.",
      "Acesso encriptado aos dados arquivados.",
      "Redução na compressão de dados.",
      "Opções adicionais para recuperação de dados."
    ],
    correta: 0,
    explicacao: "O arquivamento de dados reduz o volume de dados ativos, o que melhora o desempenho da aplicação para os utilizadores finais ao acelerar consultas e operações.",
    tema: "Best Practices"
  },
  {
    texto: "Qual é a consequência da falta de purga no catálogo de arquivamento?",
    opcoes: [
      "Os dados arquivados permanecem acessíveis.",
      "Os dados são automaticamente comprimidos.",
      "O desempenho da base de dados melhora.",
      "Os dados arquivados continuam a crescer em volume."
    ],
    correta: 3,
    explicacao: "Sem purga, os dados arquivados acumulam-se indefinidamente, aumentando o volume total e podendo impactar o desempenho e os custos de armazenamento.",
    tema: "Best Practices"
  },
    {
    texto: "Como a periodicidade inadequada de arquivamento pode afetar o desempenho?",
    opcoes: [
      "Garante que os dados arquivados não sejam acedidos.",
      "Acelera a indexação desnecessariamente.",
      "Diminui a velocidade do catálogo primário.",
      "Impede que os dados sejam arquivados."
    ],
    correta: 2,
    explicacao: "A periodicidade inadequada de arquivamento pode fazer com que dados antigos permaneçam no catálogo primário por mais tempo do que o necessário. Isso aumenta o volume de dados ativos, o que pode reduzir a velocidade de acesso e consulta, especialmente em sistemas que não foram otimizados para lidar com grandes volumes. Ao não arquivar regularmente, o sistema continua indexando e processando dados que deveriam estar em camadas secundárias, impactando diretamente o desempenho.",
    tema: "Data"
  },
  {
    texto: "Sobre os parâmetros Expand Inline em consultas SQL, qual é a melhor resposta para explicar por que usá-los?",
    opcoes: [
      "Para evitar SQL injection, que é possível com o uso de parâmetros normais.",
      "Para implementar condições dinâmicas através da injeção das cláusulas necessárias.",
      "Para evitar a injeção de SQL utilizando esta opção juntamente com a função EncodeSql.",
      "Para impedir qualquer cláusula de usar este parâmetro, tornando-o opcional."
    ],
    correta: 1,
    explicacao: "Os parâmetros Expand Inline permitem a construção dinâmica de consultas SQL, mas podem introduzir riscos de SQL injection se não forem usados corretamente. Ao utilizar a função EncodeSql em conjunto com esses parâmetros, é possível mitigar esses riscos, garantindo que os valores inseridos sejam devidamente escapados e seguros.",
    tema: "Queries"
  },
  {
    texto: "Onde devo colocar um código JavaScript extenso que é usado apenas num Web Screen da minha aplicação?",
    opcoes: [
      "Na propriedade JavaScript do módulo porque é o único local que permite o caching do JavaScript pelo navegador.",
      "Na propriedade JavaScript do Web Screen porque permite o caching pelo navegador.",
      "Numa expressão não escapada no Web Screen, já que é usado apenas uma vez e é mais explícito para os programadores.",
      "Como o parâmetro de retorno de uma função que é posteriormente usada como uma expressão não escapada nesse Web Screen, permitindo a reutilização."
    ],
    correta: 1,
    explicacao: "Colocar o código JavaScript na propriedade JavaScript do Web Screen é a melhor prática, pois permite que o navegador faça caching do código, melhorando o desempenho e garantindo que o código seja carregado apenas quando necessário para aquele ecrã específico.",
    tema: "Screens"
  },
  {
    texto: "Quais são os dois tipos de variantes de arquivamento mencionados?",
    opcoes: [
      "Arquivamento Light e historical.",
      "Arquivamento histórico e temporário.",
      "Arquivamento interno e externo.",
      "Arquivamento rápido e pesado."
    ],
    correta: 0,
    explicacao: "Os dois tipos de variantes de arquivamento são o arquivamento leve (light) e o arquivamento histórico. O arquivamento leve permite que os dados arquivados sejam pesquisados e recuperados, enquanto o arquivamento histórico é usado para armazenar dados que não são mais necessários para operações ativas.",
    tema: "Data"
  },
  {
    texto: "Qual coluna é adicionada às entidades para arquivamento baseado em timestamp?",
    opcoes: [
      "IsArchived",
      "IsDraft",
      "LastUpdatedOn",
      "IsActive"
    ],
    correta: 0,
    explicacao: "A coluna 'IsArchived' é adicionada às entidades para indicar se um registro foi arquivado. Isso permite que o sistema identifique e gerencie registros arquivados de forma eficiente.",
    tema: "Data"
  },
  {
    texto: "Uma variável Client:",
    opcoes: [
      "Reinicia os valores ao fazer logout ou fechar o navegador.",
      "Não é uma boa prática armazenar valores de texto grandes.",
      "Encripta automaticamente o valor para segurança adicional.",
      "Sempre salva os valores no armazenamento local para reutilização."
    ],
    correta: 1,
    explicacao: "Variáveis Client são armazenadas na sessão do navegador e reiniciam seus valores quando o usuário faz logout ou fecha o navegador, garantindo que os dados não persistam além da sessão ativa.",
    tema: "Screens"
  },
  {
    texto: "Ao usar uma API, notei que não tenho logs ou tenho pouca informação no Service Center. Qual é a causa mais provável?",
    opcoes: [
      "O nível de Logging deve ser configurado para troubleshooting.",
      "O nível de Logging deve ser alterado para Full temos todas as informações sobre a Request e Response da API.",
      "O endpoint está errado.",
      "O Service Center não suporta logs de APIs."
    ],
    correta: 1,
    explicacao: "Para obter logs detalhados sobre as chamadas de API, o nível de Logging deve ser configurado para Full. Isso garante que todas as informações relevantes sobre a Request e Response sejam registradas no Service Center para análise.",
    tema: "REST APIs"
  },
  {
    texto: "O que significa 'archive catalog'?",
    opcoes: [
      "Armazenamento secundário para dados arquivados.",
      "Um catálogo primário.",
      "Dados diretamente relacionados a aplicações na cloud.",
      "A maior base de dados do sistema."
    ],
    correta: 0,
    explicacao: "O 'archive catalog' refere-se ao armazenamento secundário onde os dados arquivados são mantidos, separados do catálogo primário para melhorar o desempenho e a gestão de dados.",
    tema: "Data"
  },
  {
    texto: "O que é arquivamento de dados?",
    opcoes: [
    "Encriptar dados atuais para uso futuro.",
    "Armazenar todos os dados no catálogo principal.",
    "Excluir dados irrelevantes permanentemente.",
    "Mover dados para um armazenamento secundário."
    ],
    correta: 3,
    explicacao: "O arquivamento de dados envolve mover registros antigos ou menos utilizados para um armazenamento secundário, liberando espaço no catálogo principal e melhorando o desempenho da aplicação.",
    tema: "Data"
  },
  {
    texto: "O que não podemos fazer com entidades de uma base de dados externa?",
    opcoes: [
    "Usar a entidade como output numa consulta SQL.",
    "Criar ou excluir ações de um Aggregate.",
    "Fazer joins com entidades do OutSystems de esquemas de catálogo diferentes.",
    "Utilizar filtros em atributos da entidade em Aggregates."
    ],
    correta: 2,
    explicacao: "Entidades de bases de dados externas não podem ser unidas (joins) com entidades do OutSystems que pertencem a esquemas de catálogo diferentes, devido a limitações na forma como as bases de dados externas são integradas e gerenciadas pela plataforma.",
    tema: "External Databases"
  },
    {
    texto: "Qual é uma característica chave do arquivamento leve?",
    opcoes: [
      "Os dados arquivados são excluídos imediatamente.",
      "Os dados arquivados podem ser pesquisados e recuperados.",
      "Os dados arquivados tornam-se inacessíveis permanentemente.",
      "Os dados arquivados são armazenados apenas externamente."
    ],
    correta: 1,
    explicacao: "O arquivamento leve permite que os dados arquivados sejam pesquisados e recuperados quando necessário, mantendo a acessibilidade dos dados mesmo após serem movidos para o armazenamento secundário.",
    tema: "Data"
  },
  {
    texto: `Considere os Módulos A, B e E com dependências cruzadas. Qual afirmação é verdadeira?<br>
    <img src="imagens/blockmodules.png" alt="blockmodules" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "Uma Solution é a única forma de publicar todos os Módulos sem quaisquer avisos de referência.",
      "Publicar uma Solution gerará um loop infinito, o principal problema com dependências circulares.",
      "Publicar uma nova versão do Módulo A nunca impactará o Módulo B.",
      "Não há dependência circular, pois não há Módulo produtor a consumir um de seus Módulos consumidores."
    ],
    correta: 1,
    explicacao: "As dependências circulares entre módulos podem levar a loops infinitos durante a publicação, pois cada módulo depende de outro para ser publicado. Isso pode causar falhas na publicação e complicar a gestão das dependências.",
    tema: "Best Practices"
  },
  {
    texto: "Qual é um benefício dos planos de manutenção da base de dados para dados arquivados?",
    opcoes: [
      "Elimina dados arquivados automaticamente.",
      "Evita todos os atrasos em consultas.",
      "Garante a saúde e otimização da base de dados.",
      "Reduz a necessidade de indexação."
    ],
    correta: 2,
    explicacao: "Os planos de manutenção da base de dados ajudam a garantir que os dados arquivados sejam gerenciados de forma eficiente, mantendo a saúde e o desempenho da base de dados através de tarefas regulares de otimização e limpeza.",
    tema: "Data"
  },
  {
    texto: "Como alterar o nível de detalhe do registo para Service Actions?",
    opcoes: [
      "Não é possível alterar o nível de detalhe do registo.",
      "No Service Center, na aba Operation do Módulo, define o nível de registo das Service Actions.",
      "No Service Studio, seleciona Start Debugging com Troubleshooting.",
      "No Service Center, na aba Operation da Aplicação, define o nível de registo das Service Actions."
    ],
    correta: 3,
    explicacao: "No Service Center, é possível ajustar o nível de detalhe do registo para Service Actions na aba Operation do Módulo, permitindo um controle mais granular sobre o que é registrado durante a execução dessas ações.",
    tema: "Troubleshooting"
  },
  {
    texto: "Por que os índices são importantes no catálogo de arquivamento?",
    opcoes: [
      "Para permitir um desempenho mais rápido em buscas.",
      "Para reduzir o uso de recursos do sistema.",
      "Para permitir a purga automática.",
      "Para excluir registos sem intervenção do utilizador."
    ],
    correta: 0,
    explicacao: "Índices são cruciais para melhorar o desempenho das consultas no catálogo de arquivamento, permitindo buscas mais rápidas e eficientes entre grandes volumes de dados arquivados.",
    tema: "Best Practices"
  },
  {
    texto: `A seguinte ação é executada por um Timer lançado a partir de uma Screen Action.
    Ela cria novos registos de Traveler com base em dados brutos de trânsito de aeroporto que foram previamente colocados numa entidade temporária. 
    Após o processamento, os registos da entidade temporária devem ser limpos para evitar trabalho repetido na próxima execução do Timer.
    Dado o grande número de passageiros que transitam diariamente, frequentemente ocorre timeout, e novos dados de trânsito começam a acumular-se enquanto os dados de Traveler não são gerados.
    Qual das seguintes opções evita timeouts, garante que o Timer não repita trabalho e consegue processar todos os dados de trânsito a tempo?
    <br>
    <img src="imagens/timer.png" alt="timer" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "Controla o tempo de execução do Timer e para de iterar assim que o timeout estiver prestes a ser atingido",
      "Obtém apenas 1K registos de trânsito em cada execução do Timer e garante excluir esses mesmos 1K registos no final da execução do Timer",
      `"Lê um lote configurável de registos de trânsito, processa-os e confirma as alterações. Continua a ler e processar mais lotes enquanto ainda houver trabalho a ser feito.
      Se o timeout estiver prestes a ser atingido, acorda o Timer e encerra a execução."`,
      "Para cada iteração, confirma a criação de cada registo de Traveler e exclui imediatamente os dados de trânsito usados para gerá-lo."
    ],
    correta: 2,
    explicacao: "A abordagem de ler e processar dados em lotes, com commits parciais, permite que o Timer gerencie grandes volumes de dados sem atingir timeouts. Ao acordar o Timer antes do timeout, garante-se que o processamento continue de onde parou, evitando trabalho repetido e garantindo que todos os dados sejam processados a tempo.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Como evitar lentidão ou timeout ao usar Aggregate com máximo de 50 registos?",
    opcoes: [
        "Cria um Timer para processar os registos em pequenos lotes.",
        "Usa Cache no Aggregate.",
        "Altera o máximo de registos.",
        "Divide a lógica em múltiplas Aggregates com filtros específicos."
    ],
    correta: 1,
    explicacao: "Usar Cache no Aggregate permite armazenar os resultados das consultas, reduzindo a necessidade de reprocessar os dados a cada chamada e melhorando o desempenho geral da aplicação.",
    tema: "Queries"
  },
  {
    texto: "O que faz o módulo Archiving Engine?",
    opcoes: [
      "Exclui tabelas desatualizadas.",
      "Automatiza os backups da base de dados.",
      "Gere apenas dados relacionados à interface do utilizador.",
      "Implementa arquivamento, purga e restauração."
    ],
    correta: 3,
    explicacao: "O módulo Archiving Engine é responsável por implementar funcionalidades de arquivamento, purga e restauração de dados, facilitando a gestão eficiente dos dados ao longo do tempo.",
    tema: "Data"
  },
  {
    texto: "Qual é a vantagem da nova arquitetura que usa URLs externas?",
    opcoes: [
      "A nova solução expõe a mesma funcionalidade via URLs externas, permitindo ciclos de lançamento independentes.",
      "A nova solução usa Service Actions, exigindo lógica adicional para múltiplos pedidos.",
      "A nova solução usa Web Services, garantindo ciclos de lançamento independentes.",
      "Todas as opções estão corretas."
    ],
    correta: 0,
    explicacao: "A nova arquitetura adota uma abordagem baseada em URLs externas, permitindo que as aplicações consumidoras acessem funcionalidades do produtor sem dependência direta, facilitando ciclos de lançamento independentes.",
    tema: "REST APIs"
  },
  {
    texto: "Por que as entidades arquivadas são armazenadas em formato JSON no arquivamento histórico?",
    opcoes: [
      "Para permitir a marcação de metadados.",
      "Para permitir a exclusão em massa.",
      "Para otimizar todas as consultas.",
      "Para reduzir riscos de segurança."
    ],
    correta: 0,
    explicacao: "Armazenar entidades arquivadas em formato JSON permite a inclusão de metadados adicionais, facilitando a gestão e recuperação dos dados arquivados conforme necessário.",  
    tema: "Data"
  },
    {
    texto: "Quando tens um Aggregate altamente reutilizado, é sempre uma boa prática isolá-lo numa Server Action?",
    opcoes: [
      "Falso, porque pode levar à ofuscação do código.",
      "Verdadeiro, porque agora existe um único local onde as alterações precisam ser realizadas.",
      "Verdadeiro, porque promove a abstração ao ocultar os detalhes de implementação.",
      "Falso, porque pode impedir a otimização automática de consultas com base nos atributos utilizados."
    ],
    correta: 1,
    explicacao: "Isolar um Aggregate altamente reutilizado numa Server Action é uma boa prática, pois centraliza a lógica, facilitando a manutenção e garantindo que quaisquer alterações sejam aplicadas de forma consistente em todos os pontos de uso.",
    tema: "Best Practices"
  },
  {
    texto: "Como o arquivamento de dados reduz os custos de TI?",
    opcoes: [
      "Elimina registos importantes do sistema.",
      "Reduz os tempos de backup e recuperação.",
      "Aumenta o uso do armazenamento principal.",
      "Comprime todos os dados ativos."
    ],
    correta: 1,
    explicacao: "O arquivamento de dados reduz o volume de dados ativos, o que diminui os tempos necessários para backup e recuperação, resultando em menores custos operacionais de TI.",
    tema: "Data"
  },
  {
    texto: "Ao importar entidades usando o Import Entities from Database Wizard:",
    opcoes: [
      "Será possível consultar essas entidades e usar Joins com Entidades definidas no Service Studio.",
      "É necessário ir primeiro ao Service Center e configurar a ligação à base de dados.",
      "A plataforma permitirá Entidades com chaves primárias compostas e gerará a ação Get <Entity> com múltiplos parâmetros.",
      "A ligação à base de dados externa deve ser criada manualmente no Service Studio antes de usar o wizard."
    ],
    correta: 0,
    explicacao: "Entidades importadas de bases de dados externas podem ser consultadas e unidas (joins) com entidades definidas no Service Studio, permitindo uma integração fluida entre dados internos e externos.",
    tema: "External Databases"
  },
  {
    texto: "Precisas de realizar um join entre uma entidade externa com milhares de registos e uma entidade da plataforma. O que deves fazer?",
    opcoes: [
      "Não podes fazer um join diretamente entre entidades externas e entidades da plataforma.",
      "Cria índices para otimizar o desempenho da consulta geral.",
      "Cria uma Tabela Temporária para armazenar um subconjunto menor de dados e faz o join com a entidade da plataforma.",
      "Executa uma consulta sobre a entidade e, iterando cada registo, seleciona os dados combinados."
    ],
    correta: 2,
    explicacao: "Ao lidar com grandes volumes de dados em entidades externas, é recomendável criar uma Tabela Temporária para armazenar um subconjunto relevante de dados. Isso permite realizar joins mais eficientes com entidades da plataforma, melhorando o desempenho geral da consulta.",
    tema: "External Databases"
  },
  {
    texto: "O que acontece se o primeiro Timer atingir o timeout antes de ativar o segundo Timer?",
    opcoes: [
      "As alterações são revertidas e o segundo Timer não é executado.",
      "As alterações são guardadas, mas o segundo Timer não é executado.",
      "As alterações são guardadas e o segundo Timer é ativado.",
      "As alterações são revertidas, mas o segundo Timer é ativado."
    ],
    correta: 1,
    explicacao: "Se o primeiro Timer atingir o timeout antes de completar sua lógica, as alterações feitas até aquele ponto são guardadas, mas o segundo Timer não é ativado, pois a transação é interrompida antes de chegar a essa etapa.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Qual é a abordagem mais eficiente para garantir que nenhum dado seja perdido ao enviar um formulário com API REST?",
    opcoes: [
      "Guardar os dados numa Entidade temporária e usar um Timer para enviar à API.",
      "Apenas chamar a ação SendForm com validações.",
      "Adicionar tratamento de erros na ação SendForm para tentar novamente.",
      "Criar um OnAfterResponse Handler para informar o utilizador sobre sucesso ou erro."
    ],
    correta: 0,
    explicacao: "Guardar os dados numa Entidade temporária antes de enviar o formulário via API REST garante que, mesmo que ocorra uma falha na comunicação, os dados não serão perdidos e poderão ser reenviados posteriormente por um Timer.",
    tema: "REST APIs"
  },
  {
    texto: "Qual é a melhor forma de suportar percentagens que mudam com frequência no cálculo de bônus?",
    opcoes: [
    "Criar uma Entidade para guardar as percentagens e permitir edição por administradores.",
    "Criar uma entidade estática com um registo para cada percentagem distinta.",
    "Definir as percentagens diretamente no código para facilitar a leitura.",
    "Armazenar as percentagens em variáveis locais para cada cálculo."
    ],
    correta: 0,
    explicacao: "Criar uma Entidade para armazenar as percentagens permite que elas sejam facilmente atualizadas por administradores sem a necessidade de modificar o código ou redeploy da aplicação, proporcionando flexibilidade e manutenção simplificada.",
    tema: "Data"
  },
  {
  texto: `Uma empresa que gere várias aplicações tem enfrentado dificuldades com implementações. As aplicações possuem ciclos de lançamento independentes, mas algumas delas consomem funcionalidades de um produtor comum. A empresa decidiu fazer algumas alterações na arquitetura das aplicações.<br><br>
  Considerando a imagem abaixo, à esquerda está a arquitetura original e à direita está a nova solução adotada pela empresa:<br>
  <img src="imagens/arquitetura.png" alt="Arquitetura original e nova solução" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
    "A nova arquitetura elimina a dependência direta entre consumidor e produtor, usando APIs como camada intermediária.",
    "A nova arquitetura centraliza todas as funcionalidades em uma única aplicação monolítica.",
    "A arquitetura original já utilizava APIs para desacoplamento entre aplicações.",
    "A nova arquitetura exige que todos os consumidores sejam atualizados simultaneamente com o produtor."
  ],
  correta: 0,
  explicacao: "A nova arquitetura adota uma abordagem baseada em APIs, permitindo que os consumidores acessem funcionalidades do produtor sem dependência direta, o que facilita ciclos de lançamento independentes.",
  tema: "REST APIs"
},
{
  texto: `Considere que estamos a testar uma chamada para um endpoint da API REST para obter informações sobre um IP específico. Ao testar o método antes de o consumir, obtemos uma resposta 200 OK. Porém, no app, o valor do campo City aparece vazio após a chamada da API, ao utilizar o mesmo IP testado anteriormente. Qual pode ser a causa deste problema?<br><br>
  <img src="imagens/API.jpg" alt="API" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
    "O conteúdo do resultado do teste de resposta retornado pela chamada de API durante o teste não foi copiado para o corpo da resposta da API REST.",
    `O atributo City na Estrutura de resposta (GetIPInfoResponse) tem sua propriedade Default Value configurada para o texto vazio (" ").`,
    "Os atributos na Estrutura de resposta (GetIPInfoResponse) não seguem exatamente a mesma ordem da resposta JSON original.",
    "O atributo City na Estrutura de resposta (GetIPInfoResponse) tem sua propriedade Name in JSON definida com um valor diferente daquele especificado na resposta JSON.",
  ],
    correta: 3,
    explicacao: "Se o nome do atributo na Estrutura de resposta não corresponder exatamente ao nome usado na resposta JSON (considerando maiúsculas e minúsculas), o valor não será mapeado corretamente, resultando em campos vazios.",
    tema: "REST APIs"
},
{
  texto: `Como parte do sistema que está sendo desenvolvido, precisamos adicionar uma funcionalidade de visualização de cores a uma Screen baseada nas cores dos semáforos. O utilizador pressionará um botão para selecionar a cor e a Screen mostrará apenas aquele botão como selecionado e exibirá a respetiva cor imediatamente. Qual das seguintes abordagens deve ser usada para implementar esse comportamento?<br><br>
  <img src="imagens/screencolors.jpg" alt="screencolors" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
    "Adicione três widgets ButtonGroupItem à Screen e substitua seus textos pelos nomes das cores. Adicione um Container abaixo do ButtonGroupItems e crie uma nova Screen Action com um parâmetro de entrada Color do tipo Text. No fluxo da Action, use um elemento JavaScript para selecionar o Container com base em sua Id e atualize seu atributo className para “background-” + Color. Por fim, defina cada propriedade OnClick dos ButtonGroupItems para a nova Screen Action e defina seu parâmetro de entrada para o respetivo valor de cor.",
    "Adicione três widgets Button à Screen e substitua seus textos pelos nomes das cores. Adicione um Container abaixo dos Buttons e crie uma nova Screen Action com um parâmetro de entrada Color do tipo Text. Configure a propriedade de tempo de execução BackgroundColor do Container como a entrada Color no fluxo da Action. Por fim, defina a propriedade OnClick de cada Button para a nova Screen Action e defina seu parâmetro de entrada para o respetivo valor de cor.",
    `Adicione um widget ButtonGroup à Screen e, para cada ButtonGroupItem, substitua o texto pelo nome da cor e defina sua propriedade Value com a cor correspondente. Adicione um Container abaixo do ButtonGroup e adicione um Event "onchange". Por fim, defina o valor do Attribute como uma string JavaScript que seleciona o Container com base em sua Id e atualiza sua cor de fundo para o respetivo valor de cor.`,
    "Crie uma nova Local Variable, SelectedColor, do tipo Text. Adicione um widget ButtonGroup à Screen e defina sua propriedade Variable como SelectedColor. Em seguida, para cada ButtonGroupItem, substitua o texto pelo nome da cor e defina sua propriedade Value com a cor correspondente. Por fim, adicione um Container abaixo do ButtonGroup e defina suas Style Classes como “background-” + SelectedColor.",
  ],
  correta: 3,
  explicacao: "Usar uma Local Variable para armazenar a cor selecionada e vincular essa variável ao ButtonGroup permite que o Container atualize sua cor de fundo automaticamente com base na seleção do utilizador, proporcionando uma solução simples e eficiente.",
  tema: "Screens"
},
{
  texto: `A Action GetAllApplications retorna uma lista de aplicativos e é usada por outras Actions. Qual poderia ser um bom motivo para usar o Aggregate GetApplications diretamente em vez de uma chamada para a Action GetAllApplications?<br>
  <img src="imagens/getallaplications.jpg" alt="getallaplications" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "Chamar o Aggregate diretamente permite que as Actions armazenem em cache seus resultados, com base em suas necessidades, uma vez que o cache só pode ser executado em Aggregates.",
  "Chamar o Aggregate diretamente permite que a plataforma otimize o Aggregate e sua saída com base no que está sendo usado em cada Action que o chama.",
  "Chamar o Aggregate promove diretamente a independência entre as Actions que o utilizam, facilitando a evolução delas separadamente.",
  "Não haveria razão para substituir a chamada de Action GetAllApplications por uma execução direta do Aggregate GetApplications.",
  ],
  correta: 1,
  explicacao: "Chamar o Aggregate diretamente permite que a plataforma otimize a consulta com base nos atributos realmente utilizados em cada Action, potencialmente melhorando o desempenho ao evitar a recuperação de dados desnecessários.",
  tema: "Best Practices"
},
{
  texto: `Considerando o Data Model na imagem, qual das seguintes afirmações é correta em relação à integridade referencial?<br>
  <img src="imagens/datamodel.jpg" alt="datamodel" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "Uma Solution é a única forma de publicar todos os Módulos sem quaisquer avisos de referência.",
  "Publicar uma Solution gerará um loop infinito, o principal problema com dependências circulares.",
  "Publicar uma nova versão do Módulo A nunca impactará o Módulo B, uma vez que o Módulo B não referencia nada do Módulo A. ",
  "Existe uma dependência circular entre os Módulos A, B e E, o que pode causar problemas de manutenção e evolução da aplicação."
  ],
  correta: 3,
  explicacao: "As dependências circulares entre módulos podem levar a loops infinitos durante a publicação, pois cada módulo depende de outro para ser publicado. Isso pode causar falhas na publicação e complicar a gestão das dependências.",
  tema: "Best Practices"
},
{
texto:`Seleciona a opção que torna a afirmação verdadeira. Se um utilizador não tiver a role de Manager:
  <img src="imagens/role.jpg" alt="role" style="max-width:100%;margin:10px 0"/>`,
  opcoes: [
  "Nenhum dos botões será exibido em runtime. Mas, no cenário à esquerda, com o elemento Container, o botão ainda faz parte do código HTML gerado.",
  "Nenhum dos botões será exibido em runtime. Mas, no cenário à direita, com o elemento If, o botão ainda faz parte do código HTML gerado.",
  "Ambos os botões são exibidos em runtime e fazem parte do código HTML gerado.",
  "Nenhum dos botões será exibido em runtime, e nenhum faz parte do código HTML gerado."
  ],
  correta: 0 ,
  explicacao: "Usar um Container com visibilidade condicional mantém o botão no código HTML, mesmo que não seja exibido, enquanto o uso de um elemento If remove completamente o botão do código HTML quando a condição não é atendida.",
  tema: "Screens"
},
{
  texto: `A seguinte ação processa um ficheiro Excel com faturas de uma cadeia de supermercados e insere os seus registos nas entidades Invoice e InvoiceDetails. Esta implementação é muito ineficiente devido ao número de faturas e à complexidade de processar uma única fatura, o que frequentemente resulta em timeout e perda de esforço computacional. Seleciona a alternativa que abordará tanto a eficiência quanto a prevenção de timeouts. <br><br>
  <img src="imagens/excelprocess.png" alt="excelprocess" style="max-width:100%;margin:10px 0"></img><br>`,
  opcoes: [
  "Cria um Timer para processar o ficheiro Excel e inserir faturas de forma assíncrona. Transforma os aggregates numa única consulta cacheável.",
  "Cria uma tabela temporária para armazenar os dados recuperados do ficheiro Excel e cria um Timer para processar faturas de forma assíncrona, chamando a ação integrada CommitTransaction no final de cada iteração.",
  "Cria uma tabela temporária para armazenar os dados recuperados do ficheiro Excel e cria um Timer com gestão de timeout que processa as faturas de forma assíncrona. Isola os aggregates GetProduct e GetWarehouse numa ação separada e guarda a sua execução em cache.",
  "Guarda em cache os aggregates GetProduct e GetWarehouse para evitar timeouts nos pedidos."
  ],
  correta: 1,
  explicacao: "Usar uma tabela temporária para armazenar os dados do ficheiro Excel permite processar as faturas de forma assíncrona através de um Timer, evitando timeouts. Além disso, chamar CommitTransaction após cada iteração garante que o trabalho realizado seja salvo, prevenindo a perda de esforço computacional em caso de falhas.",
  tema: "Asynchronous Processes"
},
{
  texto: `A Client Action na imagem foi criada para obter a localização dos clientes (país e cidade). Considerando que quaisquer indicadores de possíveis erros ou avisos foram digitalmente removidos, qual das seguintes afirmações é correta?<br>
  <img src="imagens/clientaction.png" alt="clientaction" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "A ação GetCustomerCountries deve ser substituída por uma consulta direta à base de dados, utilizando um Aggregate ou um elemento Advance SQL.",
  "Deves evitar chamar múltiplas Server Actions no mesmo fluxo de uma Client Action, especialmente quando essas chamadas são feitas num loop.",
  "O Sevice Studio exibirá um erro na chamada da ação GetCitiesByCountry porque não podes chamar Server Actions num loop no fluxo lógico de uma ação.",
  "Deves definir a propriedade cache in Minutes da chamada da ação GetCitiesByCountry para um valor que permita que o seu valor seja armazenado em cache até que o loop termine."
  ],
  correta: 1,
  explicacao: `Boa prática: não chamar Server Actions repetidamente dentro de loops em Client Actions.
- Isso causa múltiplas viagens ao servidor (round trips), degradando desempenho.
- O ideal seria reformular a lógica para trazer todos os dados numa única chamada (Aggregate com join ou Server Action que já devolva países+cidades).
`,
  tema: "Best Practices"
},
{
  texto: `A lógica da Service Action CreateInterest foi alterada para garantir que regista a criação de um registo Interest no Service Center. Os módulos consumidores desta ação precisam de ser atualizados para começar a registar quando um Interest é criado na base de dados?<br><br>
  <img src="imagens/sa_CreateInterest.png" alt="sa_CreateInterest" style="max-width:100%;margin:10px 0" /><br>`,
  opcoes: [
  "Não. Alterações em Service Actions nunca exigem que os consumidores sejam atualizados.",
  "Não. Alterações na lógica das Service Actions não exigem que os consumidores sejam atualizados. ",
  "Sim. Alterações em Service Actions com inputs ou outputs sempre exigem que os consumidores sejam atualizados. ",
  "Sim. Alterações em Service Actions sempre exigem que os consumidores sejam atualizados. "
  ],
  correta: 1,
  explicacao: "Alterações na lógica interna de uma Service Action não afetam sua interface pública (inputs e outputs). Portanto, os módulos consumidores não precisam ser atualizados para refletir essas mudanças internas.",
  tema: "Logic"
},
{
  texto: `Sobre o seguinte modelo de dados e suas relações, escolhe a declaração correta:<br><br>
  <img src="imagens/modelodados.png" alt="modelodados" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "Os registos de Patient não podem ser excluídos, a menos que primeiro excluamos os registos correspondentes de Visit e Disease. ",
  "Excluir um registo de Visit continuará a garantir a integridade referencial no modelo de dados. ",
  "Excluir um registo de Doctor só é possível se primeiro excluirmos os registos correspondentes de Visit. ",
  "Excluir um registo de Visit também excluirá o registo correspondente de Doctor. "
  ],
  correta: 1,
  explicacao: `No modelo de dados, cada relação tem uma regra que define o que acontece quando tentamos apagar um registo:
- Protect → não deixa apagar o registo pai se existirem filhos
- Delete → apagar o pai apaga automaticamente os filhos
- Ignore → apagar o pai deixa os filhos órfãos, sem erro
Com isso, a única afirmação realmente correta é:
Apagar um registo de Visit não quebra a integridade referencial.
Isso acontece porque:
- A relação Visit → Disease é Ignore, então apagar Visit não causa erro.
- A relação Visit → Doctor só apaga Visits quando o Doctor é apagado, não o contrário.
Portanto, apagar Visit é seguro e não viola nenhuma regra de integridade.`,
  tema: "Data"
},
{
  texto: `Considera a ação representada na imagem. Quando chamada em runtime, ocorre uma exceção na chamada destacada da ação CreateAddress. Qual é o comportamento esperado das ações após a exceção ser gerada?<br><br>
  <img src="imagens/databaseexception.png" alt="databaseexception" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "Apenas um novo registo Audit é adicionado à base de dados. ",
  "São adicionados novos registos de City, Address e Audit à base de dados. ",
  "Apenas novos registos de City e Audit são adicionados à base de dados. ",
  "Nenhum novo registo é adicionado à base de dados. "
  ],
  correta: 0,
  explicacao: "Quando uma exceção ocorre durante a execução de uma ação, todas as alterações feitas na base de dados durante essa ação são revertidas, exceto aquelas que foram confirmadas antes da exceção. Neste caso, apenas o registo Audit é adicionado, enquanto os registos City e Address são revertidos devido à exceção.",
  tema: "Exception/Transaction Handling"
},
{
  texto: `Considera o seguinte diagrama de entidades. O sistema exclui regularmente todas as informações de cidades que não estão atribuídas a um país ou não são referenciadas por qualquer endereço. Qual das abordagens teria o melhor desempenho?<br><br>
  <img src="imagens/diagramaentidades.png" alt="diagramaentidades" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  "Usar um único elemento Advanced SQL com uma instrução DELETE. ",
  "Usar um Aggregate para obter a lista de registos de cidades a excluir, iterar pela lista e usar a ação DeleteCity da entidade. ",
  "Usar um elemento Advanced SQL para selecionar os IDs dos registos de cidades a excluir, iterar pela lista e usar a ação DeleteCity da entidade. ",
  "Usar um Aggregate para obter a lista de registos de cidades a excluir, gerar uma lista com os IDs dos registos e fornecê-la a um elemento Advanced SQL com uma única instrução DELETE. "
  ],
  correta: 0,
  explicacao: "Usar um único elemento Advanced SQL com uma instrução DELETE é a abordagem mais eficiente, pois permite excluir todos os registos necessários em uma única operação de base de dados, reduzindo a sobrecarga de múltiplas chamadas e iterações.",
  tema: "Queries"
},
{
  texto: `Considera o seguinte modelo de dados, onde a descrição é um texto com 1500 caracteres e a HighlightedPicture é um atributo binaryData. Qual das seguintes alterações melhora o desempenho das consultas sobre o registo de Property que são filtradas por correspondência parcial na descrição?<br><br>
  <img src="imagens/HighlightedPicture.png" alt="HighlightedPicture " style="max-width:100%;margin:10px 0" />`,
  opcoes: [ 
  " Substituir o atributo Boolean HasParking por um novo atributo inteiro NumberOfParkingSpaces, e o atributo Boolean HasGarage por um novo inteiro, garageSize. ",
  " Dividir a entidade Property em duas entidades distintas: uma com os detalhes básicos, como propertyTypeId, HighlightedPicture, HighlightedLabel, NumberOfRooms e NumberOfBathrooms, e outra com os atributos restantes. ",
  " Criar um índice para o atributo Description. ",
  " Criar uma nova entidade de extensão com os atributos HighlightedPicture e HighlightedLabel. "
  ],
  correta: 3,
  explicacao: "Criar uma nova entidade de extensão para os atributos HighlightedPicture e HighlightedLabel permite que a entidade principal Property seja mais leve, melhorando o desempenho das consultas que filtram por correspondência parcial na descrição, já que esses atributos não são necessários para essas consultas.",
  tema: "Data"
},
{
  texto: `A ação nas imagens é acionada por um timer. Considerando que queres garantir que a lógica seja executada durante 10 minutos e que uma nova instância do timer seja ativada após esses 10 minutos, quais devem ser o valor de atribuição no Assign Timeout e a condição no Timeout If?<br><br>
  <img src="imagens/timer10min.png" alt="timer10min" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  " Assign: Timeout += 10; Condition: Timeout < CurrDateTime()",
  " Assign: Timeout += 10; Condition: CurrDateTime() = Timeout",
  " Assign: Timeout = AddMinutes(CurrDateTime(),10); Condition: CurrDateTime() >= Timeout",
  " Assign: Timeout = AddMinutes(CurrDateTime(),10); Condition: Timeout < CurrDateTime()"
  ],
  correta: 2,
  explicacao: "A atribuição correta para o Timeout deve definir o tempo atual mais 10 minutos, e a condição deve verificar se o tempo atual é maior ou igual ao Timeout para garantir que a lógica seja executada por 10 minutos antes de ativar uma nova instância do timer.",
  tema: "Asynchronous Processes"
},
{
  texto: `Uma empresa precisa construir uma aplicação para gerir pedidos de refeições online. Os clientes irão registar contas com os seus nomes, endereços e informações do PayPal, fazer pedidos e pagar online; cada restaurante registado recebe os pedidos, prepara as refeições e notifica a pessoa responsável pela entrega.
  Atualmente, as entregas são feitas por um serviço externo, utilizando web services para interação.
  Dependendo da evolução do negócio, os planos futuros podem incluir uma aplicação móvel para ajudar a gerir as entregas diretamente, sem usar serviços externos.
  A aplicação deve ter a mesma aparência para todos os seus utilizadores.<br><br> 
  <img src="imagens/app_pedidos.png" alt="app_pedidos" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  " Nenhuma das opções está correta. ",
  " Opção 1. ",
  " Opção 2. ",
  " Opção 3. "
  ],
  correta: 2,
  explicacao: "A Opção 2 é a mais adequada, pois utiliza uma arquitetura baseada em APIs REST para desacoplar os componentes da aplicação, permitindo ciclos de lançamento independentes e facilitando futuras expansões, como a adição de uma aplicação móvel.",
  tema: "REST APIs"
},
{
 texto: `Considera o fluxo da Server Action AddStock, onde há um requisito de reverter qualquer alteração na base de dados caso uma das ações falhe. Qual das opções a seguir está correta?<br><br>
  <img src="imagens/addstock.png" alt="addstock" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  " Se a Server Action OrderProductsCreate falhar, ambas as ações no fluxo lógico serão automaticamente revertidas. ",
  " Se a Server Action OrderProductsCreate falhar, será necessário criar lógica adicional para reverter as alterações feitas na Service Action OrderCreate. ",
  " Como ambas as ações estão a ser chamadas dentro de uma Server Action, não é necessário realizar nenhum tratamento de transações. A Server Action AddStock continua tentando até que a operação seja bem-sucedida. ",
  " Se a Service Action OrderCreate falhar, quaisquer alterações feitas por ela são automaticamente revertidas e a Server Action AddStock não continua sua execução. "
  ],
  correta: 3,
  explicacao: "Se a Service Action OrderCreate falhar, todas as alterações feitas por ela são revertidas automaticamente pela plataforma, e a execução da Server Action AddStock é interrompida, garantindo a integridade dos dados.",
  tema: "Exception/Transaction Handling"
},
{
  texto: `Considerando o Data Model na imagem, qual das seguintes opções é correta em relação à integridade referencial?<br><br>
  <img src="imagens/datamodel2.png" alt="datamodel2" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  " A integridade referencial é garantida para a maioria das relações de Entities no modelo de dados, exceto entre Employee e EmployeePicture. ",
  " A integridade referencial só é garantida entre Employee e EmployeeTeam, e entre EmployeeTeam e Team. ",
  " A integridade referencial é garantida para a maioria das relações de Entities no modelo de dados, exceto entre Department e Employee. ",
  " A integridade referencial é garantida para todas as relações de Entities representadas no modelo de dados. "
  ],
  correta: 2,
  explicacao: "A integridade referencial não é garantida entre Department e Employee porque a relação é opcional (um departamento pode não ter funcionários atribuídos). Em todas as outras relações, a integridade referencial é mantida.",
  tema: "Data"
},
{
  texto: `Considere uma Client Action definida no escopo de uma Screen que adiciona um ouvinte de evento JavaScript. Qual lógica adicional o desenvolvedor deve adicionar ao aplicativo, se houver, para garantir que não haja erros quando o usuário final navegar para uma nova Screen?<br><br>
  <img src="imagens/javascript.png" alt="javascript" style="max-width:100%;margin:10px 0"></img><br>`,
  opcoes: [
  " O desenvolvedor deve criar um Exception Handler na mesma Action onde o ouvinte está definido para remover o ouvinte do evento do DOM. ",
  " O desenvolvedor deve remover o ouvinte de eventos do DOM na Event Handler Action da Screen OnDestroy. ",
  " O desenvolvedor deve remover o ouvinte de eventos do DOM na Event Handler Action da Screen OnInitialize. ",
  " Nenhuma lógica adicional é necessária. Quando o usuário navega para uma Screen diferente, o ouvinte do evento é automaticamente removido do DOM. "
  ],
  correta: 1,
  explicacao: "Para evitar erros e vazamentos de memória, é importante remover os ouvintes de eventos quando a Screen é destruída. Isso pode ser feito na Event Handler Action da Screen OnDestroy.",
  tema: "Screens"
},
{
  texto: `Considerando o cenário e a seleção dos elementos representados na imagem, qual das afirmações a seguir está incorreta?<br><br>
  <img src="imagens/incorretmerge.png" alt="incorretmerge" style="max-width:100%;margin:10px 0"></img><br>`,
  opcoes: [
  " A versão Data Action GetDashboardHistory de Jane será incluída na versão mesclada. ",
  " A Função OrderApproval não será incluída na versão mesclada. ",
  " O Parâmetro de Saída Success será adicionado à Action UpdateOrderAmount, junto com quaisquer alterações em seu fluxo lógico, após mesclar as duas versões. ",
  " O conflito precisa ser resolvido pelo desenvolvedor antes de mesclar as duas versões do módulo."
  ],
  correta: 0,
  explicacao: "A versão Data Action GetDashboardHistory de Jane não será incluída na versão mesclada, pois John não fez alterações nessa Action. Apenas as alterações feitas por John serão consideradas na mesclagem.",
  tema: "Work in Teams"
},
{
  texto: `Como poderíamos maximizar o desempenho do fluxo da Action na imagem abaixo, se possível?<br><br>
  <img src="imagens/performanceflow.png" alt="performanceflow" style="max-width:100%;margin:10px 0" />`,
  opcoes: [
  " Substituir ambos os Aggregates por elementos Advanced SQL otimizados, com ambos tendo estruturas de saída com um único atributo Text: o primeiro elemento SQL retorna o nome da cidade e o segundo elemento SQL retorna o nome do país. ",
  " Substituir o Aggregate GetCities e o loop por um Aggregate GetCitiesWithCountry que busca as cidades e os respetivos países. Em seguida, adicionar um elemento Assign para definir o parâmetro de saída da Action na lista de saída do Aggregate. ",
  " Não é possível maximizar o desempenho do fluxo da Action. A implementação atual já utiliza Aggregates otimizados automaticamente pela plataforma para buscar os dados necessários. ",
  " Substituir o Aggregate GetCountryById por uma chamada para a Entity Action GetCountry otimizada. "
  ],
  correta: 1,
  explicacao: "Ao combinar as consultas em um único Aggregate que busca tanto as cidades quanto os países, reduzimos o número de chamadas à base de dados, o que melhora significativamente o desempenho do fluxo da Action.",
  tema: "Queries"
},
{
  texto: `Qual é o propósito da coluna de controle "IsArchived"?`,
  opcoes: [
  " Apaga os dados após o arquivamento. ",
  " Marca os registos como arquivados. ",
  " Marca os registos para exclusão. ",
  " Marca os dados como ativos. "
  ],
  correta: 1,
  explicacao: "A coluna de controle 'IsArchived' é usada para marcar os registos que foram arquivados, permitindo que o sistema identifique quais dados não estão mais ativos, mas ainda precisam ser mantidos para referência futura.",
  tema: "Data"
},
{
  texto: `Qual seria uma forma possível de evitar que um utilizador manipule informações sensíveis da aplicação (por exemplo, através da manipulação de parâmetros na URL ou dados ocultos de formulário)?`,
  opcoes: [
  "Ao navegar para um novo ecrã, utiliza o método SUBMIT em vez de NAVIGATE, pois este usa POST e os parâmetros não são exibidos na URL. ",
  "Ativa a Segurança HTTP (configurada para SSL) para encriptar os parâmetros que são exibidos na URL. ",
  "Audita a atividade no sistema para identificar qualquer utilizador que esteja a tentar aceder a informações que não deveria. ",
  "Podes ocultar informações sensíveis utilizando Variáveis de Sessão em vez de Input Parameters do ecrã. "
  ],
  correta: 3,
  explicacao: "Usar Variáveis de Sessão para armazenar informações sensíveis evita que esses dados sejam expostos na URL ou em formulários, reduzindo o risco de manipulação por parte do utilizador.",
  tema: "Best Practices"
},
{
  texto: `Existe uma aplicação que começou como um projeto muito pequeno e agora evoluiu para uma aplicação muito maior. As implementações estão muito lentas e alguns módulos têm todos os elementos de UI misturados com a definição da base de dados e a lógica. Para separar as funcionalidades e obter uma arquitetura melhor, a equipa precisa de refatorar esses módulos separando os elementos de UI da base de dados e da lógica sem perder nenhum dado. Qual é a melhor maneira de realizar isso para o módulo chamado Finance?`,
  opcoes: [
  `Cria dois novos módulos, um chamado Finance e outro chamado Finance_CS. Move os fluxos de UI do módulo original para o novo módulo Finance e move as entidades e ações do módulo original para o novo Finance_CS. Cria as dependências necessárias do novo módulo "Finance" para o "Finance_CS". Elimina o módulo original e publica os novos módulos. `,
  " Abre o módulo Finance e clona esse módulo. Renomeia o módulo clonado para Finance_CS e elimina todos os fluxos de UI. Elimina todas as entidades de base de dados e ações do módulo original. Publica o módulo clonado e referencia as suas entidades e ações no módulo original. Por fim, publica o módulo original. ",
  " Abre o módulo Finance e clona esse módulo. Renomeia o módulo original para Finance_CS e elimina todos os fluxos de UI. Renomeia o módulo clonado para Finance e elimina todas as entidades de base de dados e ações. Publica o módulo original e referencia as suas entidades e ações no módulo clonado. Por fim, publica o módulo clonado. ",
  " Renomeia o módulo original para Finance_CS e cria um novo módulo chamado Finance. Segue as instruções do componente Refactor para migrar os ecrãs do módulo original para o novo módulo Finance. "
  ],
  correta: 2,
  explicacao: "Ao renomear o módulo original para Finance_CS e criar um novo módulo Finance, a equipa pode mover os fluxos de UI para o novo módulo enquanto mantém as entidades e ações no módulo Finance_CS. Isso permite uma separação clara entre a UI e a lógica de negócios, melhorando a arquitetura da aplicação.",
  tema: "Best Practices"
},
{
  texto: `Temos um Timer que ativa o Timer2. Se o Timer tiver um Timeout, o que acontece ao Timer2?`,
  opcoes: [
    "O Timer2 é ativado após um atraso fixo, mesmo que o Timer1 falhe ao acioná-lo.",
    "Nada acontece, o Timer tenta novamente 3 vezes e, se ocorrer um erro/timeout, o Timer2 nunca é ativado.",
    "O Timer2 entra num estado de espera até que o Timer1 seja concluído com sucesso numa nova tentativa.",
    "O Timer2 permanece inativo indefinidamente, pois o Timer1 falhou em ativá-lo devido a um erro de timeout."
  ],
  correta: 1,
  explicacao: "Se o Timer1 atingir o timeout antes de completar sua lógica, o Timer2 não será ativado, pois a transação é interrompida antes de chegar a essa etapa. O Timer tentará novamente conforme configurado, mas se continuar a falhar, o Timer2 permanecerá inativo.",
  tema: "Asynchronous Processes"  
},
{
  texto: "Qual coluna é adicionada às entidades para arquivamento baseado em carimbo de data/hora?",
  opcoes: [
    "IsArchived",
    "IsDraft",
    "LastUpdatedOn",
    "IsActive"
  ],
  correta: 2,
  explicacao: "A coluna LastUpdatedOn é utilizada para arquivamento baseado em carimbo de data/hora, pois registra a última atualização da entidade.",
  tema: "Data"
},
{
  texto: "Por padrão, o OutSystems não regista detalhes sobre erros em pedidos para Service Actions, dificultando a resolução de problemas. Considerando esse facto, o que deves fazer para alterar o nível de detalhe do registo para Service Actions?",
  opcoes: [
    "Não é possível alterar o nível de detalhe do registo.",
    "No Service Center, abre a página de detalhes do teu Módulo e, na aba Operation, define o nível de registo das Service Actions para o valor desejado.",
    "No Service Studio, seleciona o botão Start Debugging com a opção Troubleshooting selecionada no menu suspenso do nível de detalhe do registo.",
    "No Service Center, abre a página de detalhes da tua Aplicação e, na aba Operation, define o nível de registo das Service Actions para o valor desejado."
  ],
  correta: 3,
  explicacao: "Para alterar o nível de detalhe do registo das Service Actions, deve-se configurar no Service Center, na página de detalhes do Módulo, aba Operation.",
  tema: "Troubleshooting"
},
{
  texto: "Temos uma aplicação que até agora está a funcionar bem, mas a partir de amanhã começará a ter muitos acessos de novos utilizadores. Na Data Action, tens um Aggregate com um máximo de 50 registos e a saída da lista. Qual é a melhor prática para evitar lentidão ou timeout de dados?",
  opcoes: [
    "Cria um Timer para processar os registos em pequenos lotes.",
    "Usa Cache no Aggregate.",
    "Altera o máximo de registos.",
    "Divide o Aggregate em várias chamadas separadas para cada utilizador."
  ],
  correta: 1,
  explicacao: "A melhor prática é usar Cache no Aggregate, pois reduz chamadas repetidas à base de dados e melhora o desempenho em cenários com muitos acessos simultâneos.",
  tema: "Best Practices"
},
{
  texto: "Se o objetivo principal é garantir que nenhum dado seja perdido, mesmo que a API REST externa esteja indisponível no momento da submissão, qual é a abordagem mais robusta?",
  opcoes: [
    "Guardar os dados numa entidade temporária e usar um Timer para enviá-los de forma assíncrona e resiliente.",
    "Repetir a chamada REST em loop até que a API responda com sucesso.",
    "Mostrar uma mensagem ao utilizador pedindo para tentar novamente manualmente.",
    "Usar apenas validações no formulário antes de chamar a API."
  ],
  correta: 0,
  explicacao: `Guardar os dados numa entidade temporária e usar um Timer para enviá-los de forma assíncrona e resiliente.
  Essa abordagem:
• 	Garante persistência dos dados antes de chamar a API
• 	Evita perda de informação mesmo com falhas externas
• 	Permite reenvio automático e seguro
• 	Evita timeouts e bloqueios na UI`,
  tema: "Asynchronous Processes"
},
{
  texto: "Quando um utilizador submete um formulário com dados médicos e upload de ficheiro, a aplicação chama uma API REST externa para armazenar as informações. Qual é a melhor forma de garantir que o utilizador saiba se o envio foi bem-sucedido ou se precisa tentar novamente?",
  opcoes: [
    "Guardar os dados numa entidade temporária e enviá-los mais tarde através de um Timer.",
    "Criar uma lógica de retry dentro da Server Action até a API responder com sucesso.",
    "Mostrar sempre uma mensagem de sucesso, independentemente da resposta da API.",
    "Criar um OnAfterResponse Handler para capturar o sucesso ou erro da API e informar o utilizador."
  ],
  correta: 3,
  explicacao: "A melhor prática é criar um OnAfterResponse Handler para a API REST, que permite capturar a resposta da API e informar o utilizador sobre o sucesso ou falha do envio dos dados.",
  tema: "Exception/Transaction Handling"
},
{
  texto: "Considera que tens uma ação que calcula o bônus anual dos funcionários de uma empresa. Esta ação utiliza alguns valores hardcoded de percentagens, essenciais para realizar os cálculos e que podem mudar com frequência. Qual é a melhor forma de suportar este cenário enquanto garantimos que a ação segue as boas práticas recomendadas pela OutSystems?",
  opcoes: [
    "Cria uma Entidade para guardar as diferentes percentagens usadas para calcular o bônus e um Screen que permita a um administrador editá-las e guardá-las novamente na Entidade. A lógica pode recuperar esses valores da base de dados e usá-los quando necessário.",
    "Cria uma entidade estática que tenha um registo para cada percentagem distinta usada para calcular o bônus. Com esta estratégia, os valores serão armazenados num único local e podem ser facilmente alterados, enquanto a lógica pode usar diretamente esses registos quando necessário.",
    "Cria uma propriedade de Site para cada percentagem distinta usada para calcular o bônus. O valor efetivo destas propriedades de Site pode ser facilmente alterado no Service Center enquanto a lógica pode usar diretamente esses valores quando necessário.",
    "Cria vários elementos de comentário na Ação com a propriedade Reminder definida como Yes, para facilitar a localização dos valores hardcoded sempre que precisarem de ser alterados."
  ],
  correta: 0,
  explicacao: "A melhor prática é criar uma Entidade para armazenar as percentagens e permitir que um administrador as edite via Screen. Assim, a lógica recupera os valores da base de dados, evitando hardcoding e garantindo flexibilidade.",
  tema: "Best Practices"
},
{
  texto: "Considera que queremos processar um ficheiro Excel que contém milhares de registos com informações dos KPI's da empresa, com o objetivo de calcular o bônus anual dos funcionários. Qual é a melhor abordagem para definir este processo?",
  opcoes: [
    "Lê 2000 registos do ficheiro Excel e envia-os para um Timer para processá-los. Usa o atributo Last_Run da entidade Cyclic_Job para definir quando deves chamar uma nova instância do Timer para executar os próximos 2000 registos. Isto deve continuar até que todos os registos sejam processados.",
    "Cria um Timer para processar todos os registos do ficheiro Excel. A lógica buscará um lote de registos, processá-los-á e, após o processamento do lote, controlará o timeout para reativar o Timer antes de atingir o limite de timeout.",
    "Cria um Timer para processar todos os registos do ficheiro Excel. Na Ação acionada pelo Timer, controla a duração da execução para parar o Timer antes de atingir o seu timeout. Agenda o Timer para ser executado a cada 5 minutos para garantir que todos os registos sejam processados.",
    "Cria um Timer para processar todos os registos do ficheiro Excel. No momento do design, aumenta a propriedade Timeout do Timer para garantir que a execução nunca atinja o timeout. Define também a prioridade do Timer como Baixa para garantir que ele não bloqueie a execução de outros Timers."
  ],
  correta: 1,
  explicacao: "A melhor abordagem é criar um Timer que processe os registos em lotes e controle o timeout, reativando o Timer antes de atingir o limite. Isso garante que todos os registos sejam processados sem falhas por excesso de tempo.",
  tema: "Asynchronous Processes"
},
{
  texto: "Quando o evento On Destroy é acionado em Blocks?",
  opcoes: [
    "Antes de o Block ser removido do DOM e depois de o evento OnDestroy do ecrã pai ser acionado.",
    "Após o Block e o ecrã serem ambos removidos do DOM.",
    "Antes de o Block ser removido do DOM e antes de o evento OnDestroy do ecrã pai ser acionado.",
    "Nunca, Blocks não acionam o evento OnDestroy."
  ],
  correta: 2,
  explicacao: "O evento On Destroy em Blocks é acionado antes de o Block ser removido do DOM e antes de o evento OnDestroy do ecrã pai ser acionado. Isso permite que qualquer lógica de limpeza específica do Block seja executada antes da remoção.",
  tema: "Screens"
},
{
  texto: "Sobre a afirmação 'Site properties são uma boa escolha para armazenar estruturas numa aplicação desde que não sejam alteradas frequentemente,' escolhe a declaração correta.",
  opcoes: [
    "Verdadeiro. Alterar uma Site Property invalida o cache, por isso não deve ser alterada frequentemente.",
    "Falso. As Site Properties podem ser alteradas tão frequentemente quanto qualquer outra variável.",
    "Falso. Os tipos de Site Properties são limitados a tipos básicos.",
    "Verdadeiro. As Site Properties podem ser usadas para armazenar estruturas que podem ser usadas independentemente da sessão do utilizador."
  ],
  correta: 2,
  explicacao: "Alterar uma Site Property invalida o cache da aplicação e força o reinício, por isso não deve ser alterada frequentemente. São adequadas para valores estáticos ou raramente modificados.",
  tema: "Best Practices"
},
{
  texto: "Uma empresa global de seguros desenvolveu um sistema interno para gerir todos os seus sinistros e documentos de campo associados. O SLA para a resolução de sinistros é de 4 meses. Uma fração de qualquer sinistro fechado será selecionada para auditoria a cada 6 meses, e os registos são mantidos por pelo menos a duração da relação entre a empresa e os clientes. Todos os dados relevantes do sinistro são armazenados num registo da entidade Claim e em um ou mais registos da entidade ClaimDocument. Com o aumento contínuo de sinistros, o sistema começou a ficar cada vez mais lento. O que podes fazer para melhorar o desempenho?",
  opcoes: [
    "Define duas novas variáveis locais, StartIndex e MaxRecords, no Screen de listagem de Claims. Usa estas variáveis como valores para as propriedades com o mesmo nome no Aggregate do ecrã que busca todos os Claims da base de dados. Finalmente, define o On Scroll Ending Event Handler da tabela para uma nova Screen Action que incrementa o valor de registos para buscar mais Claims.",
    "Define índices em todos os atributos pesquisáveis da entidade Claim e em todos os atributos da entidade ClaimDocument, bem como em qualquer combinação de atributos das duas entidades utilizados para buscar sinistros. Modifica a lógica de gravação de Claims na base de dados para acionar um Timer que grava as informações de Claims de forma assíncrona.",
    "Replica a definição das entidades Claim e ClaimDocument nas entidades ClaimBackup e ClaimDocumentBackup. Configura um Timer que move os sinistros fechados há mais de 4 meses das entidades originais para as novas entidades de backup. Finalmente, cria um conjunto separado de Screens que permita o acesso aos dados de backup dos sinistros quando necessário.",
    "Cria uma nova entidade ClaimBackup com todos os atributos das entidades Claim e ClaimDocument. Configura um Light Process que periodicamente move registos de sinistros fechados há mais de 4 meses das entidades originais para a nova entidade de backup. Finalmente, cria um conjunto separado de Screens que permita o acesso aos dados de backup dos sinistros quando necessário."
  ],
  correta: 2,
  explicacao: "A melhor prática é mover sinistros fechados há mais de 4 meses para entidades de backup, usando um Timer para processar os dados de forma assíncrona. Isso reduz a carga sobre as entidades principais e melhora o desempenho do sistema.",
  tema: "Data"
},
{
  texto: "Considera uma aplicação de homebanking com um dashboard que exibe informações básicas da conta, mais as 50 transações mais recentes da conta corrente e um gráfico que mostra o saldo global, dividido de acordo com os produtos financeiros detidos. As informações do gráfico baseiam-se em dados de vários sistemas independentes que precisam ser combinados para serem apresentados no dashboard. Qual das seguintes opções fornece o melhor desempenho e experiência do utilizador ao buscar e exibir todas as informações necessárias?",
  opcoes: [
    "Define um único Screen Aggregate para as informações da conta e as transações mais recentes, e uma Data Action para calcular as informações do gráfico do saldo global.",
    "Define um OnInitialize Event Handler que chama três Server Actions: a primeira para obter informações da conta, a segunda para obter as transações mais recentes e a terceira para calcular as informações do gráfico do saldo global.",
    "Define dois Screen Aggregates, um para as informações da conta e outro para as transações mais recentes, e uma Data Action para calcular as informações do gráfico do saldo global.",
    "Define uma única Data Action para obter as informações da conta, as transações mais recentes e calcular as informações do gráfico do saldo global."
  ],
  correta: 0,
  explicacao: "A melhor prática é usar um único Screen Aggregate para informações da conta e transações recentes, garantindo carregamento eficiente, e uma Data Action separada para calcular o gráfico do saldo global, que depende de múltiplos sistemas externos.",
  tema: "Best Practices"
},
{
  texto: "Considera a necessidade de fornecer uma interface móvel semelhante a uma aplicação nativa sobre uma aplicação Web de Despesas existente. Qual das seguintes opções é recomendada para alcançar este objetivo?",
  opcoes: [
    "Cria um Mobile Web Flow na aplicação de Despesas com os ecrãs móveis, reutilizando as entidades, ações e tema já definidos nela.",
    "No Service Studio, configura o separador Native Platforms da aplicação de Despesas existente com informações para geração da app nativa e reutiliza as entidades e ações existentes.",
    "Cria uma app móvel que reutiliza os ecrãs da aplicação de Despesas e aplica a estes ecrãs referenciados o tema móvel da nova app.",
    "Cria uma app móvel, utilizando referências às ações e entidades existentes da aplicação de Despesas, e depois constrói os ecrãs para a interface móvel."
  ],
  correta: 3,
  explicacao: "A abordagem recomendada é criar uma nova app móvel, reutilizando as entidades e ações da aplicação Web existente, mas construindo ecrãs específicos para a interface móvel. Isso garante melhor experiência de utilizador e aproveita os recursos já implementados.",
  tema: "Best Practices"
},
{
  texto: "Considera que queremos redirecionar um utilizador da aplicação Doctors para um ecrã na aplicação Appointments (AppointmentList). Isso deve acontecer quando o utilizador clicar no botão Check.Appointment no ecrã DoctorDetail. Qual é a melhor forma de realizar isso?",
  opcoes: [
    "Referenciar o ecrã da aplicação Appointments e selecioná-lo como o Destination do botão.",
    "Definir o Destination do botão como um RedirectToURL. Configurar a propriedade URL para uma Site Property que armazene a URL do ecrã AppointmentList, garantindo a configuração de URLs diferentes em ambientes distintos.",
    "Usar um Iframe com a URL do ecrã AppointmentList definida na tag source.",
    "Definir o Destination do botão como um RedirectToURL, com a URL do ecrã AppointmentList codificada diretamente na propriedade URL."
  ],
  correta: 1,
  explicacao: "A melhor prática é usar RedirectToURL com a URL armazenada numa Site Property, pois isso permite configurar URLs diferentes em ambientes distintos sem necessidade de alterar a lógica da aplicação.",
  tema: "Integrations"
},
{
  texto: "Qual das seguintes informações aparece nos General Logs no Service Center?",
  opcoes: [
    "Acessos a ecrãs e logins de utilizadores.",
    "Consultas lentas e a duração da execução de Timers.",
    "Logs criados com a ação LogMessage e consultas lentas.",
    "Logs criados por exceções de base de dados e acessos a ecrãs."
  ],
  correta: 2,
  explicacao: "Os General Logs no Service Center registam acessos a ecrãs e logins de utilizadores, permitindo monitorar a utilização da aplicação.",
  tema: "Troubleshooting"
},
{
  texto: "Considera um sistema de suporte ao cliente usado por uma operadora móvel. O sistema precisa armazenar registos de todas as comunicações com clientes por um período de cinco anos, para fins de auditoria. Ao mesmo tempo, apenas comunicações com clientes ativos nos últimos três meses são usadas para consultas de acompanhamento e campanhas de marketing. Qual é a melhor abordagem para evitar deterioração de desempenho ao acessar a entidade Communication?",
  opcoes: [
    "Configurar um Timer que arquive regularmente as comunicações inativas por mais de três meses numa entidade diferente e criar ecrãs especiais que mostrem a união de ambas as entidades, para situações de auditoria.",
    "Configurar o cache de todas as consultas na entidade Communication, para que o acesso seja sempre rápido, mesmo que os registos de comunicação cresçam rapidamente.",
    "Criar uma stored procedure que possa ser executada manualmente para limpar registos quando a tabela subjacente da entidade estiver a ocupar muito espaço ou o acesso à entidade estiver muito lento.",
    "Criar índices para os critérios de consulta mais comuns (por exemplo, data da última atualização) para acelerar as operações mais frequentes."
  ],
  correta: 0,
  explicacao: "A melhor prática é arquivar periodicamente as comunicações inativas em entidades de backup usando um Timer. Isso mantém a entidade principal leve e eficiente para consultas frequentes, enquanto ainda garante retenção dos dados para auditoria.",
  tema: "Data"
},
{
  texto: "Considera um cenário em que consegues verificar e analisar os logs de um web service consumido. No entanto, não consegues ver os valores de request e response do serviço. Qual poderia ser uma possível razão para esse comportamento?",
  opcoes: [
    "O web service está a gerar um erro.",
    "Os logs do Service Center não exibem essa informação. Deves verificar os valores de request e response no Service Studio.",
    "O nível de logging do web service em questão não está corretamente definido.",
    "Os web services não estão a ser utilizados por nenhuma das aplicações no ambiente."
  ],
  correta: 2,
  explicacao: "Se não consegues ver os valores de request e response nos logs, uma possível razão é que o nível de logging do web service não está corretamente definido. É necessário configurar o nível de logging adequado para capturar essas informações.",
  tema: "Troubleshooting"
},
{
  texto: "Foi pedido para alterar o modelo de dados de uma aplicação de Agência de Viagens. É necessário registar Lugares em Pacotes de Viagem, com uma imagem associada e a possibilidade de ter a descrição traduzida para vários idiomas pré-definidos. Escolhe o melhor cenário de modelo de dados para implementar este requisito.",
  opcoes: [
    "Criar uma entidade [Place] ligada a [TravelPackage], contendo atributos fixos para cada idioma (ex.: Description_PT, Description_EN, Description_ES) e um atributo para a imagem.",
    "Criar uma entidade [Place] ligada a [TravelPackage], com um atributo de imagem e uma entidade auxiliar [PlaceTranslation] que guarda a descrição em diferentes idiomas, referenciando [Place] e [Language].",
    "Criar uma entidade [Place] com atributos de imagem e descrição única, e duplicar registos de Place para cada idioma necessário.",
    "Criar uma entidade [Place] com imagem e descrição, e armazenar traduções em formato JSON dentro de um único atributo Text."
  ],
  correta: 1,
  explicacao: "A melhor prática é criar uma entidade [Place] para os lugares e uma entidade auxiliar [PlaceTranslation] para armazenar as descrições em diferentes idiomas. Isso permite flexibilidade na adição de novos idiomas sem alterar a estrutura da entidade principal. Esse é um modelo flexível, permite múltiplos idiomas sem alterar estrutura, segue boas práticas de normalização.",
  tema: "Data"
},
{
  texto: "Considera que um programador quer fazer o debug de uma Server Action pública em outro módulo. Qual das seguintes afirmações é falsa?",
  opcoes: [
    "A referência ao módulo produtor precisa estar atualizada.",
    "O acionador para executar a ação precisa vir de um ecrã.",
    "A Server Action precisa ser referenciada no módulo consumidor.",
    "Precisas de ter permissão para publicar o módulo consumidor."
  ],
  correta: 1,
  explicacao: "A afirmação falsa é a B. O acionador para executar a ação não precisa obrigatoriamente vir de um ecrã; pode ser chamado por outras ações ou processos. As demais afirmações são verdadeiras: é necessário ter a referência atualizada, referenciar a Server Action no módulo consumidor e ter permissão para publicar o módulo consumidor para realizar o debug.",
  tema: "Logic"
},
{
  texto: "Considera uma entidade de crescimento rápido, onde apenas uma pequena parte dos registos está em uso ativo. Por razões de auditoria e legais, a aplicação precisa manter todos os registos, independentemente da frequência com que são acedidos. Qual é a melhor abordagem para evitar deterioração do desempenho ao aceder aos registos da entidade?",
  opcoes: [
    "Ter um script de base de dados para arquivar manualmente registos não utilizados sempre que precisares recuperar espaço ou acelerar acessos à entidade.",
    "Configurar um timer que periodicamente mova registos não utilizados para uma entidade de arquivo. Criar um ecrã adicional para acessar todos os dados, se necessário, tanto da entidade original quanto da entidade de arquivo.",
    "Adicionar um novo atributo booleano IsArchived à entidade, criar um índice para ele e adicionar um filtro no ecrã de listagem. Configurar um timer para definir regularmente este novo atributo como True para quaisquer registos não utilizados.",
    "Criar índices para os critérios de acesso mais comuns (por exemplo, data de criação) para acelerar as operações mais frequentes."
  ],
  correta: 1,
  explicacao: "A melhor prática é configurar um timer que mova registos não utilizados para uma entidade de arquivo. Isso mantém a entidade principal leve e eficiente para os acessos ativos, enquanto garante a retenção de todos os registos para fins de auditoria e legais.",
  tema: "Data"
},
{
  texto: "Quando a aplicação precisa coletar informações de vários sistemas externos distintos:",
  opcoes: [
    "Para cada sistema externo existem diferentes entidades core que armazenam as informações.",
    "Para cada sistema há uma integração específica, todas fornecendo dados normalizados. Um Timer separado sincroniza os dados normalizados nas entidades core da aplicação.",
    "Todos os sistemas externos devem fornecer uma API de web services comum para realizar as integrações. A aplicação chamará dinamicamente esta API em cada sistema.",
    "Todos os sistemas externos devem ser integrados entre si fora da plataforma e somente então podem ser integrados na nossa aplicação."
  ],
  correta: 1,
  explicacao: "A melhor prática é criar integrações específicas para cada sistema externo, garantindo que os dados sejam normalizados. Um Timer separado sincroniza esses dados nas entidades core da aplicação, evitando acoplamento excessivo e mantendo a consistência.",
  tema: "Integrations"
},
{
  texto: "Qual das seguintes diretrizes representa uma boa prática de desempenho ao otimizar ações que fazem múltiplas consultas à base de dados?",
  opcoes: [
    "Preferir Aggregates em vez de Advanced SQL porque o output dos Aggregates pode ser armazenado em cache automaticamente.",
    "Refatorar Aggregates em Client Actions independentes para aumentar a reutilização e reduzir o tempo de execução.",
    "Preferir sempre Advanced SQL em vez de Aggregates, uma vez que consultas SQL são sempre mais rápidas.",
    "Substituir múltiplas consultas à base de dados por uma única consulta sempre que possível, mesmo que essa consulta seja mais complexa."
  ],
  correta: 3,
  explicacao: "A melhor prática é substituir múltiplas consultas à base de dados por uma única consulta sempre que possível, mesmo que essa consulta seja mais complexa. Isso reduz o número de chamadas à base de dados, melhorando o desempenho geral da aplicação.",
  tema: "Queries"
},
{
  texto: "Para evitar forte acoplamento e simplificar as dependências, podes:",
  opcoes: [
    "Usar um Timer que estará a escutar mudanças em um dos módulos e reagirá a elas.",
    "Criar um processo BPT configurado implicitamente para iniciar na atualização de uma ação específica e reagir às alterações feitas.",
    "Usar um web service local em vez de uma ação pública.",
    "Fundir dois módulos em um único, evitando a necessidade de dependências, uma vez que isso não terá impacto no tamanho do módulo."
  ],
  correta: 2,
  explicacao: "A melhor prática para evitar forte acoplamento e simplificar dependências é usar um web service local em vez de uma ação pública. Isso permite que os módulos comuniquem-se de forma desacoplada, mantendo a independência e reduzindo complexidade.",
  tema: "Integrations"
},
{
  texto: "Imagina que tens uma aplicação web com seu próprio Tema, e agora precisas suportar uma versão móvel dela. O que deves fazer?",
  opcoes: [
    "Criar novos Web Flows na aplicação existente para suportar a versão móvel.",
    "Criar uma nova aplicação móvel com seu próprio Tema e consumir as ações públicas e entidades da aplicação web.",
    "Criar uma nova aplicação móvel com seu próprio Tema e consumir os ecrãs da aplicação web.",
    "Qualquer uma das opções acima, porque todas são válidas."
  ],
  correta: 1,
  explicacao: "A melhor prática é criar uma nova aplicação móvel com seu próprio Tema e reutilizar as entidades e ações públicas da aplicação web. Isso garante uma experiência otimizada para dispositivos móveis, mantendo a separação entre interfaces web e móveis.",
  tema: "Screens"
},
{
  texto: "Considera as configurações padrão de tratamento de valores NULL no Integration Builder da base de dados. Nesse contexto, o que significa a opção keep database NULLs?",
  opcoes: [
    "Significa que valores NULL são buscados da base de dados externa e guardados novamente como os valores padrão do Integration Builder.",
    "Significa que os valores NULL são buscados da base de dados externa e guardados novamente como NULL. Esses valores NULL são mantidos na lógica de runtime e não são convertidos nos valores padrão do Integration Builder.",
    "Significa que os valores NULL são buscados da base de dados externa como NULL e guardados novamente com os valores padrão do Integration Builder.",
    "Significa que valores NULL são buscados da base de dados externa e guardados novamente como NULL, mas serão representados nas Entidades do OutSystems com os valores padrão do Integration Builder."
  ],
  correta: 3,
  explicacao: "A opção 'keep database NULLs' garante que os valores NULL vindos da base de dados externa sejam mantidos como NULL dentro da aplicação. Eles não são convertidos para os valores padrão definidos pelo Integration Builder, preservando assim a semântica original dos dados.",
  tema: "Data"
},
{
  texto: "Um programador tem a tarefa de criar um modelo de dados para gerir os funcionários de uma empresa. Este modelo será utilizado em várias aplicações internas (Diretório, Férias, etc.) e inclui a entidade Employee, que contém as informações mais importantes de um funcionário. Estas aplicações precisarão de buscar frequentemente as informações dos funcionários e têm funcionalidades que podem exigir a criação/atualização de funcionários. Esta funcionalidade não estará acessível a todos, devendo seguir algumas regras de negócio e restrições partilhadas entre as aplicações. Qual estratégia deve ser seguida para definir a entidade Employee e suportar as funcionalidades desejadas?",
  opcoes: [
    "Define a propriedade Public da entidade Employee como Yes e a propriedade Expose Read Only como No. As aplicações consumidoras buscarão as informações dos funcionários usando Aggregates e chamarão as ações da entidade para criar/atualizar as informações conforme necessário. As regras de negócio são definidas em cada aplicação, antes de criar/atualizar as informações dos funcionários.",
    "Define a propriedade Public da entidade Employee como Yes e a propriedade Expose Read Only como No. Cria as ações wrapper necessárias para criar/atualizar informações dos funcionários na base de dados com as regras de negócio definidas e expõe essas ações para outros módulos. As aplicações consumidoras buscarão os dados dos funcionários usando Aggregates e chamarão as ações wrapper para criar/atualizar as informações conforme necessário.",
    "Define a propriedade Public da entidade Employee como No. Cria as ações wrapper necessárias para criar/atualizar e buscar informações dos funcionários na base de dados, com as regras de negócio definidas, e expõe essas ações para outros módulos. As aplicações consumidoras usarão as ações wrapper para buscar os dados dos funcionários e para criar/atualizar as informações conforme necessário.",
    "Define a propriedade Public da entidade Employee como Yes e a propriedade Expose Read Only como Yes. Cria as ações wrapper necessárias para criar/atualizar informações dos funcionários na base de dados, com as regras de negócio definidas, e expõe essas ações para outros módulos. As aplicações consumidoras buscarão os dados dos funcionários usando Aggregates e chamarão as ações wrapper para criar/atualizar as informações conforme necessário."
  ],
  correta: 3,
  explicacao: "A melhor prática é expor a entidade Employee como pública para permitir consultas diretas via Aggregates, mas controlar a criação e atualização através de ações wrapper que encapsulam as regras de negócio. Dessa forma, garante-se consistência, segurança e reutilização das regras em todas as aplicações consumidoras.",
  tema: "Data"
},
{
  texto: "Considera que queres expor uma REST API que exige autenticação utilizando duas chaves de segurança: uma API Key e um App Identifier. Ao chamar este método, os clientes da API devem incluir a API Key e o App Identifier no pedido, e o método deve validar esses valores para autenticar o cliente. Qual das opções a seguir não é válida para este cenário?",
  opcoes: [
    "Criar uma entidade para armazenar os pares de API Key e App Identifier usados para autenticar com sucesso todos os pedidos para a REST API.",
    "Definir a lógica para ler o par API Key – App Identifier em cada pedido para a REST API na ação OnRequest callback.",
    "Configurar a propriedade Authentication da REST API exposta para Custom.",
    "Validar as chaves de autenticação na ação OnAuthentication callback associada à REST API exposta."
  ],
  correta: 1,
  explicacao: "A opção inválida é a B. A ação OnRequest não deve ser usada para autenticação, pois sua função é manipular o pedido após a autenticação já ter ocorrido. A validação das chaves deve ser feita na ação OnAuthentication callback, com a propriedade Authentication configurada como Custom e, se necessário, armazenando os pares de API Key e App Identifier em uma entidade.",
  tema: "REST APIs"
},
{
  texto: "Qual das seguintes afirmações é correta?",
  opcoes: [
    "Os valores efetivos das Site Properties podem ser modificados no Service Center, mas não o valor padrão.",
    "As Client Variables são redefinidas para seus valores padrão quando o utilizador fecha o navegador.",
    "As Site Properties podem ser usadas como valor de um Widget Expression no ecrã.",
    "O valor de uma Client Variable pode ser de qualquer tipo básico de dados, incluindo Identificadores de Entidades e Registos de Entidades."
  ],
  correta: 0,
  explicacao: "A afirmação correta é a A. Os valores efetivos das Site Properties podem ser alterados no Service Center, mas o valor padrão definido no Service Studio permanece inalterado. As demais afirmações estão incorretas: Client Variables persistem enquanto a sessão do utilizador estiver ativa, Site Properties não podem ser usadas diretamente em expressões de ecrã, e Client Variables não suportam tipos complexos como identificadores ou registos de entidades.",
  tema: "Logic"
},
{
  texto: "Qual das estratégias a seguir é uma melhor prática recomendada que deve ser seguida ao criar a interface do utilizador do seu aplicativo?",
  opcoes: [
    "Promover o uso do editor Styles embutido para personalizar os elementos da IU quando necessário.",
    "Promover o uso de estratégias 'lazy load' em Screens com muitos registos a serem exibidos, como o On Scroll Ending Event em widgets de List.",
    "Promover o uso da Action CheckRole do lado do cliente para impor o controlo de acesso em Screens onde os dados devem ser ocultados de determinadas funções.",
    "Promover o uso de Screen Events e suas Actions de manipulação para buscar dados de forma síncrona para suas Screens."
  ],
  correta: 1,
  explicacao: "A melhor prática é promover o uso de estratégias 'lazy load' em Screens com muitos registos. Isso melhora o desempenho e a experiência do utilizador, carregando dados apenas quando necessário, como no evento On Scroll Ending em listas.",
  tema: "Screens"
},
{
  texto: "Qual dos níveis de registo a seguir para APIs REST e SOAP Web Services consumidos salva informações relativas a solicitações com erros, juntamente com informações adicionais de rastreamento HTTP?",
  opcoes: [
    "Somente Troubleshooting.",
    "Somente Troubleshooting e Full.",
    "Todos os níveis de registo salvam essas informações (Default, Troubleshooting e Full).",
    "Somente Full."
  ],
  correta: 1,
  explicacao: "Os níveis Troubleshooting e Full guardam informações detalhadas sobre solicitações com erros, incluindo rastreamento HTTP. O nível Default apenas regista informações básicas e não inclui detalhes adicionais de rastreamento.",
  tema: "Troubleshooting"
},
{
  texto: "Considere que um desenvolvedor deseja depurar uma Server Action pública em outro módulo. Qual das seguintes declarações é falsa?",
  opcoes: [
    "Você precisa ter permissões para publicar o Módulo consumidor.",
    "A referência ao Módulo produtor precisa estar atualizada.",
    "A Server Action precisa ser referenciada no Módulo consumidor.",
    "O gatilho para executar a Action precisa vir de uma Screen."
  ],
  correta: 3,
  explicacao: "A afirmação falsa é a D. O gatilho para executar a Action não precisa obrigatoriamente vir de uma Screen; pode ser chamado por outras ações, processos ou timers. As demais afirmações são verdadeiras: é necessário ter permissões para publicar o módulo consumidor, manter a referência ao módulo produtor atualizada e referenciar a Server Action no módulo consumidor.",
  tema: "Logic"
},
{
  texto: "Qual das seguintes declarações é correta?",
  opcoes: [
    "As Site Properties podem ser utilizadas como o valor de um widget de Expression na Screen.",
    "O valor de uma Client Variable pode ser de qualquer tipo de dados básico, identificadores de Entity e registos de Entity.",
    "As Client Variables são redefinidas para seus valores padrão quando o utilizador fecha o navegador.",
    "O valor efetivo das Site Properties pode ser modificado no Service Center, mas não o valor padrão."
  ],
  correta: 3,
  explicacao: "A afirmação correta é a D. As Site Properties têm um valor padrão definido no Service Studio, mas o valor efetivo pode ser alterado no Service Center. As demais afirmações estão incorretas: Site Properties não podem ser usadas diretamente em Expressions na interface, Client Variables não suportam tipos complexos como identificadores ou registos de entidades, e elas não são redefinidas apenas ao fechar o navegador, mas sim quando a sessão do utilizador termina.",
  tema: "Logic"
},
{
  texto: "Considere que você tem dois Aggregates em uma Screen onde um depende da saída do outro, e apenas a saída do segundo Aggregate será utilizada na Screen. De acordo com as melhores práticas da OutSystems, qual a melhor opção para implementar tal cenário?",
  opcoes: [
    "Utilizar o Event Handler On Ready da Screen para executar os dois Aggregates seguindo a ordem desejada. Salvar as informações exigidas pela Screen em uma Local Variable.",
    "Criar os dois Aggregates diretamente na Screen, ambos com a propriedade Fetch definida como At Start.",
    "Criar os dois Aggregates diretamente na Screen. Definir a propriedade Fetch do primeiro como At Start e a propriedade Fetch do segundo como Only on demand. Em seguida, usar o Event Handler On After Fetch do primeiro Aggregate para executar o segundo Aggregate.",
    "Usar uma Data Action para executar os dois Aggregates seguindo a ordem desejada. Definir o parâmetro de saída da Data Action para incluir as informações exigidas pela Screen."
  ],
  correta: 3,
  explicacao: "A melhor prática é definir o primeiro Aggregate como At Start e o segundo como Only on demand, utilizando o Event Handler On After Fetch do primeiro para executar o segundo. Isso garante que o segundo Aggregate só seja chamado quando os dados do primeiro já estiverem disponíveis, evitando chamadas desnecessárias e melhorando o desempenho da Screen.",
  tema: "Queries"
},
{
  texto: "Um desenvolvedor acabou de criar uma nova integração com uma base de dados externa SQL Server no Integration Builder. Considere que você deseja usar algumas dessas Entities em seu aplicativo para buscar e criar/atualizar dados. Qual das seguintes frases é verdadeira?",
  opcoes: [
    "Você pode usar as Entities como qualquer outra Entity OutSystems, mas só pode realizar joins com Entities do mesmo base de dados externa.",
    "Você pode usar as Entities como qualquer outra Entity OutSystems, mas só pode usar elementos Advanced SQL para buscar dados e criar/atualizar registos na base de dados externa.",
    "Você só pode usar as Entities exclusivamente para buscar dados. Para isso, você só pode usar elementos Advanced SQL.",
    "Você só pode usar as Entities exclusivamente para buscar dados. Para essa finalidade, você pode usar Aggregates, elementos Advanced SQL e a Entity Action Get<Entity>."
  ],
  correta: 0,
  explicacao: "A afirmação correta é a A. As Entities criadas pelo Integration Builder podem ser usadas como qualquer outra Entity OutSystems, incluindo em Aggregates e ações, mas os joins só são permitidos entre Entities que pertencem ao mesmo base de dados externo. Isso garante consistência e evita problemas de desempenho ou incompatibilidade entre diferentes fontes de dados.",
  tema: "Data"
},
{
  texto: "Em que circunstâncias você deve utilizar um elemento Advanced SQL numa aplicação OutSystems?",
  opcoes: [
    "Quando se deseja atualizar o valor de um atributo com base no seu valor anterior e outro valor fixo, para todos os registos de uma Entity que correspondam a uma determinada condição.",
    "Quando você tiver duas Entities e quiser selecionar todos os registos da primeira Entity e, se eles corresponderem a algum registo da segunda Entity, retornar esses dois registos juntos.",
    "Quando sua Entity possuir um número muito grande de registos, por exemplo 40, e você só está interessado em selecionar 3 de seus 40 atributos em uma consulta.",
    "Quando você deseja ter certeza de que uma consulta em uma Entity grande é otimizada usando índices de base de dados."
  ],
  correta: 0,
  explicacao: "A melhor circunstância para usar Advanced SQL é quando você precisa executar operações complexas diretamente na base de dados, como atualizar atributos com base em seus valores anteriores e em condições específicas. Esse tipo de lógica não pode ser facilmente implementado com Aggregates ou simples Entity Actions, tornando o Advanced SQL a ferramenta adequada.",
  tema: "Queries"
},
{
  texto: "Considere que queremos processar um arquivo Excel que possui milhares de registos com informações de KPIs da empresa, com a finalidade de calcular o bônus anual dos funcionários. Qual é a melhor abordagem para definir esse processo?",
  opcoes: [
    "Criar um Timer para processar todos os registos do arquivo Excel. Na Action acionada pelo Timer, controlar a duração da execução para parar o Timer antes de atingir seu tempo limite. Programar o Timer para ser executado a cada 5 minutos para garantir que todos os registos sejam processados.",
    "Criar um Timer para processar todos os registos do arquivo Excel. A lógica irá buscar um lote de registos, processá-los e confirmar a transação após processar esse lote de registos. Deve também controlar o tempo limite, para reativar o temporizador antes de atingir o tempo limite.",
    "Criar um Timer para processar todos os registos do arquivo Excel. Ao fazer o design, aumentar a propriedade Timeout do Timer, para garantir que a execução nunca atinja o tempo limite. Além disso, definir a prioridade do Timer como Low (Baixa), para garantir que ele não bloqueie a execução de outros Timers.",
    "Ler 2.000 registos do arquivo Excel e enviar-os para um Timer para processá-los. Controlar o final da execução do Timer através do atributo Last_Run da Entity Cyclic_Job, para definir quando deverá chamar uma nova instância do Timer para executar os próximos 2.000 registos. Isso deve continuar até que todos os registos sejam processados."
  ],
  correta: 1,
  explicacao: "A melhor prática é usar um Timer para processar os registos em lotes, confirmando a transação após cada lote e controlando o tempo limite para evitar que a execução ultrapasse o limite máximo. Isso garante escalabilidade, evita bloqueios e permite que o processamento seja retomado de forma segura e eficiente.",
  tema: "Logic"
},
{
  texto: "Qual das informações a seguir aparece nos General Logs do Service Center?",
  opcoes: [
    "Logs criados por exceções de base de dados e acessos de tela.",
    "Logs criados com a Action LogMessage e consultas lentas.",
    "Consultas lentas e duração das execuções de Timers.",
    "Acessos à tela e logins de utilizadores."
  ],
  correta: 1,
  explicacao: "Os General Logs do Service Center registam informações relacionadas a acessos às Screens e logins de utilizadores. Outros tipos de logs, como exceções de base de dados, consultas lentas ou execução de Timers, são registados em categorias específicas (Error Logs, Slow Queries Logs e Timer Logs, respetivamente).",
  tema: "Asynchronous Processes"
},
{
  texto: "Qual dos seguintes sistemas se beneficiaria mais com o arquivamento de dados antigos em Entities separadas?",
  opcoes: [
    "Um sistema de gerenciamento de fábrica de produtos químicos que precisa manter registos de todos os produtos que estão sendo produzidos atualmente no local.",
    "Um sistema de gerenciamento de reclamações que lida com centenas de reclamações por dia e que precisa permitir que os utilizadores acessem reclamações em andamento ou resolvidas recentemente. As reclamações levam em média um mês para serem resolvidas e podem ser reabertas até duas semanas após serem resolvidas.",
    "Um sistema financeiro que lida com milhares de grandes transações por dia precisa fornecer acesso rápido às transações dos últimos 6 meses e uma forma de solicitar detalhes de transações com até 5 anos.",
    "Um sistema de auditoria de armazém que mantém registos de todos os produtos já estocados por armazém, até 4 anos desde a última vez que esteve em estoque."
  ],
  correta: 2,
  explicacao: "O sistema financeiro descrito na opção C é o que mais se beneficia do arquivamento de dados antigos em Entities separadas. Isso porque há um grande volume de transações diárias e é necessário garantir acesso rápido às transações recentes, enquanto as transações mais antigas podem ser armazenadas em Entities de histórico, acessadas apenas quando necessário. Essa estratégia melhora a performance e mantém a escalabilidade do sistema.",
  tema: "Data"
},
{
  texto: "Um aplicativo de rastreamento esportivo possui uma Screen que exibe informações básicas sobre um time, além de estatísticas esportivas relevantes para cada jogador e as notícias das últimas 24 horas sobre o time de diversas fontes de meios de comunicação. Qual das soluções a seguir oferece o melhor desempenho e experiência do usuário ao recuperar e exibir todas as informações necessárias?",
  opcoes: [
    "Definir dois Screen Aggregates, um para buscar as informações do time e outro para as estatísticas esportivas, e criar uma Data Action para cada fonte de notícias a fim de buscar os clipes de notícias das últimas 24 horas.",
    "Definir dois Screen Aggregates, um para buscar as informações do time e outro para as estatísticas esportivas, e uma única Data Action para buscar os novos clipes de notícias das últimas 24h de todas as fontes de notícias.",
    "Definir uma Data Action para obter as informações do time, as estatísticas esportivas e os clipes de notícias das últimas 24h de todas as fontes de notícias.",
    "Definir um Screen Aggregate para buscar as informações do time, um OnReady Event Handler que chama uma Server Action para buscar as estatísticas esportivas e uma Data Action para buscar os clipes de notícias das últimas 24 horas de todas as fontes de notícias."
  ],
  correta: 1,
  explicacao: "A melhor prática é a opção B: usar dois Screen Aggregates para buscar os dados estruturados (informações do time e estatísticas dos jogadores) e uma única Data Action para recuperar as notícias das últimas 24 horas de todas as fontes. Isso garante melhor desempenho, pois evita múltiplas chamadas redundantes às fontes de notícias e mantém a experiência do utilizador mais fluida e eficiente.",
  tema: "Screens"
}
];

window.perguntas = perguntas; // expõe para o escopo global
console.log("Total de perguntas PT:", perguntas.length);