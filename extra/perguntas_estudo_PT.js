const perguntasestudo = [
  {
    texto: "Qual é a principal boa prática ao criar Screens em OutSystems?",
    opcoes: [
      "Colocar toda a lógica dentro da Screen.",
      "Separar lógica em Actions reutilizáveis e manter a Screen simples.",
      "Evitar usar Aggregates.",
      "Sempre duplicar elementos para facilitar manutenção."
    ],
    correta: 1,
    tema: "Screens",
    grupo: "errei",
    explicacao: "A boa prática é manter a Screen limpa e delegar lógica para Actions reutilizáveis."
  },
  {
    texto: "Ao investigar um erro em produção, qual é o primeiro passo recomendado?",
    opcoes: [
      "Recriar o erro no ambiente de desenvolvimento.",
      "Alterar diretamente o código em produção.",
      "Consultar os logs no Service Center.",
      "Desinstalar o módulo problemático."
    ],
    correta: 2,
    tema: "Troubleshooting",
    grupo: "errei",
    explicacao: "O primeiro passo é verificar os logs no Service Center para entender o erro."
  },
  {
    texto: "Qual é a forma correta de consumir uma API externa em OutSystems?",
    opcoes: [
      "Criar uma SQL Query que chama a API.",
      "Usar a funcionalidade de REST Integrations no Service Studio.",
      "Adicionar código JavaScript customizado.",
      "Criar uma Screen com botão que chama a API diretamente."
    ],
    correta: 1,
    tema: "Integrations",
    grupo: "errei",
    explicacao: "OutSystems tem suporte nativo para REST Integrations, que é a forma correta."
  },
  {
    texto: "Qual é a vantagem de usar Actions reutilizáveis na lógica?",
    opcoes: [
      "Facilitam manutenção e reduzem duplicação de código.",
      "Aumentam o tempo de execução.",
      "Impedem o uso de variáveis locais.",
      "São obrigatórias em todos os módulos."
    ],
    correta: 0,
    tema: "Logic",
    grupo: "aperfeiçoar",
    explicacao: "Actions reutilizáveis promovem manutenção e reduzem duplicação."
  },
  {
    texto: "Como OutSystems trata exceções em transações?",
    opcoes: [
      "Ignora exceções e continua execução.",
      "Faz rollback automático da transação.",
      "Executa a transação parcialmente.",
      "Salva dados corrompidos para análise."
    ],
    correta: 1,
    tema: "Exception/Transaction Handling",
    grupo: "aperfeiçoar",
    explicacao: "Por padrão, OutSystems faz rollback da transação quando ocorre uma exceção."
  },
  {
    texto: "Qual é a boa prática ao definir entidades de Dados?",
    opcoes: [
      "Criar atributos sem normalização.",
      "Usar nomes claros e consistentes para atributos.",
      "Evitar relacionamentos entre entidades.",
      "Duplicar atributos para facilitar consultas."
    ],
    correta: 1,
    tema: "Data",
    grupo: "revisão",
    explicacao: "Nomes claros e consistentes são essenciais para manutenção e entendimento."
  },
  {
    texto: "Qual é o uso típico de Processos Assíncronos?",
    opcoes: [
      "Executar lógica pesada fora do fluxo principal.",
      "Substituir todas as Actions síncronas.",
      "Evitar uso de timers.",
      "Executar lógica apenas em tempo de design."
    ],
    correta: 0,
    tema: "Asynchronous Processes",
    grupo: "revisão",
    explicacao: "Processos assíncronos são usados para lógica pesada ou que não precisa ser imediata."
  },
  {
    texto: "Qual é a vantagem de usar REST APIs em OutSystems?",
    opcoes: [
      "Permitem integração com sistemas externos de forma simples.",
      "Eliminam necessidade de usar Aggregates.",
      "Substituem completamente SQL Queries.",
      "São usadas apenas para autenticação."
    ],
    correta: 0,
    tema: "REST APIs",
    grupo: "revisão",
    explicacao: "REST APIs permitem integração simples e segura com sistemas externos."
  },
  {
    texto: "Qual é a principal prática ao trabalhar em equipes no OutSystems?",
    opcoes: [
      "Cada desenvolvedor deve publicar sem coordenação.",
      "Usar LifeTime e boas práticas de versionamento.",
      "Evitar comunicação entre membros.",
      "Duplicar módulos para cada desenvolvedor."
    ],
    correta: 1,
    tema: "Work in Teams",
    grupo: "revisão",
    explicacao: "Trabalho em equipe exige coordenação via LifeTime e boas práticas de versionamento."
  },
  {
    texto: "Considere a Action acionada pelo Timer SyncExtSystemUsers para sincronizar milhares de usuários com um sistema externo. O que falta para seguir as melhores práticas?",
    opcoes: [
      "Não falta nada. O Timer já segue as boas práticas.",
      "Configurar Timeout in Minutes com valor maior.",
      "CommitTransaction deve ser chamado apenas antes de WakeSyncExtSystemUsers.",
      "Adicionar lógica para controlar tempo limite e reativar o Timer."
    ],
    correta: 3,
    tema: "Asynchronous Processes",
    grupo: "aperfeiçoar",
    explicacao: "Timers em batch devem controlar o tempo limite e reativar o Timer para evitar falhas."
  },
  {
    texto: "Em uma API REST POST para atualizar cliente, ocorre erro: 'PhoneNumber não deve ser nulo'. Como resolver?",
    opcoes: [
      "Configurar Default Value do parâmetro PhoneNumber.",
      "Configurar Send Default Value como Yes.",
      "Usar OnBeforeRequest para preencher PhoneNumber.",
      "Configurar IsMandatory como Yes."
    ],
    correta: 1,
    tema: "Integrations",
    grupo: "errei",
    explicacao: "Send Default Value garante que o parâmetro seja enviado mesmo vazio, evitando erro na API."
  },
  {
    texto: "O que acontece ao selecionar Merge and Publish em um conflito de módulo?",
    opcoes: [
      "Mescla mantendo conflitos locais e publica.",
      "Mescla mantendo conflitos da outra versão e publica.",
      "Mescla descartando alterações conflitantes e publica.",
      "Recebemos mensagem para resolver o conflito antes de publicar."
    ],
    correta: 3,
    tema: "Work in Teams",
    grupo: "revisão",
    explicacao: "O Service Studio exige resolver conflitos antes de publicar, não permite mesclar com conflito pendente."
  },
  {
    texto: "O que acontece com a transação se ocorrer erro na Action UpdateCustomerDB?",
    opcoes: [
      "Alterações de UpdateCustomerExternal e UpdateCustomerDB são revertidas.",
      "Alterações de ambas são confirmadas.",
      "Alterações de UpdateCustomerDB são revertidas, mas de External não.",
      "Alterações de External são revertidas, mas de DB são confirmadas."
    ],
    correta: 2,
    tema: "Exception/Transaction Handling",
    grupo: "aperfeiçoar",
    explicacao: "Rollback afeta apenas a transação atual. External não é revertido, DB sim."
  },
  {
    texto: "Qual a melhor forma de modelar uma descrição de Order com mais de 2000 caracteres?",
    opcoes: [
      "Atributo Text dentro da Entity Order.",
      "Entity de extensão 1-1 com atributo Text.",
      "Atributo Binary Data dentro da Entity Order.",
      "Entity de extensão 1-N com atributo Binary Data."
    ],
    correta: 1,
    tema: "Data",
    grupo: "revisão",
    explicacao: "Campos muito grandes devem ser modelados em entidade de extensão 1-1 para melhor performance."
  },
  {
    texto: "Qual das opções é correta em relação a Site Properties?",
    opcoes: [
      "Alterar valor requer republicação.",
      "Alterar valor invalida cache do aplicativo.",
      "Podem armazenar registros de entidade.",
      "São redefinidas no logout."
    ],
    correta: 1,
    tema: "Logic",
    grupo: "aperfeiçoar",
    explicacao: "Alterar Site Property invalida cache, não requer republicação."
  },
  {
    texto: "Como gerenciar registros de bônus anuais que devem ser guardados por 5 anos e depois descartados mensalmente?",
    opcoes: [
      "Timer com exclusão em massa via Advanced SQL.",
      "Atributo IsActive e atualização em massa via Advanced SQL.",
      "Loop excluindo registros um por um.",
      "Entity Archive e inserção em massa via Advanced SQL."
    ],
    correta: 0,
    tema: "Data",
    grupo: "revisão",
    explicacao: "Exclusão em massa via SQL é mais eficiente para grandes volumes."
  },
  {
    texto: "Qual a melhor forma de buscar dados de Customer e CustomerThumbnail para exibir em uma lista?",
    opcoes: [
      "Usar GetCustomerIds e buscar cada um.",
      "Usar GetCustomers com join em CustomerThumbnail.",
      "Usar GetCustomers e depois GetCustomerThumbnail.",
      "Usar GetCustomers e join em CustomerThumbnail para passar ao Block."
    ],
    correta: 3,
    tema: "Screens",
    grupo: "errei",
    explicacao: "A melhor prática é usar join entre Customer e CustomerThumbnail e passar ao Block."
  },
  {
    texto: "Em relação aos logs do Service Center, qual opção é verdadeira?",
    opcoes: [
      "Logs criados com LogMessage aparecem nos General logs.",
      "Nível Default para APIs REST garante todas as solicitações/respostas.",
      "Erros em APIs REST aparecem apenas nos Integration logs.",
      "Service Center exibe logs da semana atual e últimas 9 semanas."
    ],
    correta: 0,
    tema: "Troubleshooting",
    grupo: "errei",
    explicacao: "LogMessage gera logs personalizados que aparecem nos General logs."
  },
  {
    texto: "Qual abordagem segue melhores práticas para buscar consumo diário de energia e exibir em gráfico?",
    opcoes: [
      "Solução A.",
      "Solução B.",
      "Solução C.",
      "Todas as soluções seguem boas práticas."
    ],
    correta: 2,
    tema: "Logic",
    grupo: "aperfeiçoar",
    explicacao: "A solução C encapsula lógica em Server Action reutilizável, seguindo boas práticas."
  },
  {
  texto: "Qual é a melhor prática ao projetar uma Screen que exibe dados de uma Entity?",
  opcoes: [
    "Carregar todos os registros da Entity sem filtros.",
    "Usar Aggregates com filtros e paginação.",
    "Criar uma SQL Query manual para cada consulta.",
    "Duplicar a lógica em cada Screen para independência."
  ],
  correta: 1,
  tema: "Screens",
  grupo: "errei",
  explicacao: "A prática correta é usar Aggregates com filtros e paginação para performance e manutenção."
},
{
  texto: "Ao analisar erros intermitentes em produção, qual recurso do Service Center é mais útil?",
  opcoes: [
    "General Logs para mensagens personalizadas.",
    "Error Logs para detalhes de exceções.",
    "Analytics para estatísticas de uso.",
    "Deployment Logs para histórico de publicações."
  ],
  correta: 1,
  tema: "Troubleshooting",
  grupo: "errei",
  explicacao: "Error Logs mostram detalhes das exceções ocorridas, sendo essenciais para investigar falhas."
},
{
  texto: "Qual é a prática correta ao expor uma API REST em OutSystems?",
  opcoes: [
    "Permitir acesso sem autenticação para facilitar integração.",
    "Configurar autenticação e validar parâmetros recebidos.",
    "Usar apenas métodos GET para simplificar.",
    "Evitar documentação da API para reduzir esforço."
  ],
  correta: 1,
  tema: "Integrations",
  grupo: "errei",
  explicacao: "APIs devem ter autenticação e validação de parâmetros para segurança e confiabilidade."
},
{
  texto: "Qual é a vantagem de usar Server Actions em vez de Client Actions para lógica complexa?",
  opcoes: [
    "Executam no servidor, permitindo acesso a dados e maior performance.",
    "São mais rápidas em qualquer cenário.",
    "Eliminam a necessidade de Aggregates.",
    "Podem ser usadas apenas em módulos Foundation."
  ],
  correta: 0,
  tema: "Logic",
  grupo: "aperfeiçoar",
  explicacao: "Server Actions permitem lógica complexa com acesso a dados e são reutilizáveis em vários módulos."
},
{
  texto: "Qual é a prática recomendada ao lidar com exceções em transações?",
  opcoes: [
    "Ignorar exceções para não interromper o fluxo.",
    "Registrar o erro e abortar a transação.",
    "Confirmar parcialmente os dados válidos.",
    "Executar rollback apenas se o erro for crítico."
  ],
  correta: 1,
  tema: "Exception/Transaction Handling",
  grupo: "aperfeiçoar",
  explicacao: "A prática correta é registrar o erro e abortar a transação para garantir consistência dos dados."
},
{
  texto: "Qual é a melhor forma de organizar lógica repetitiva em um módulo?",
  opcoes: [
    "Duplicar a lógica em cada Screen.",
    "Criar Server Actions reutilizáveis.",
    "Usar Aggregates em todas as situações.",
    "Colocar toda a lógica em Site Properties."
  ],
  correta: 1,
  tema: "Logic",
  grupo: "aperfeiçoar",
  explicacao: "Server Actions reutilizáveis evitam duplicação e facilitam manutenção."
},
{
  texto: "Qual é a melhor prática ao carregar dados em uma Screen com listas grandes?",
  opcoes: [
    "Carregar todos os registros de uma vez.",
    "Usar paginação ou scroll infinito.",
    "Duplicar a lógica em várias Aggregates.",
    "Evitar filtros para simplificar."
  ],
  correta: 1,
  tema: "Screens",
  grupo: "errei",
  explicacao: "Paginação ou scroll infinito garantem performance e melhor experiência do usuário."
},
{
  texto: "Ao investigar falhas em integrações, qual log do Service Center deve ser consultado?",
  opcoes: [
    "General Logs.",
    "Error Logs.",
    "Integration Logs.",
    "Deployment Logs."
  ],
  correta: 2,
  tema: "Troubleshooting",
  grupo: "errei",
  explicacao: "Integration Logs mostram detalhes de chamadas a APIs externas, essenciais para investigar falhas."
},
{
  texto: "Qual é a prática correta ao consumir uma API REST externa que exige autenticação?",
  opcoes: [
    "Enviar credenciais em texto plano.",
    "Configurar autenticação no Service Studio.",
    "Ignorar autenticação para simplificar.",
    "Criar SQL Query para simular chamada."
  ],
  correta: 1,
  tema: "Integrations",
  grupo: "errei",
  explicacao: "OutSystems permite configurar autenticação diretamente na integração REST, garantindo segurança."
},
{
  texto: "Qual é a vantagem de usar Exception Handlers em Actions?",
  opcoes: [
    "Permitem capturar erros e decidir se aborta ou continua.",
    "Eliminam necessidade de logs.",
    "Confirmam transações automaticamente.",
    "Ignoram erros para não interromper fluxo."
  ],
  correta: 0,
  tema: "Exception/Transaction Handling",
  grupo: "aperfeiçoar",
  explicacao: "Exception Handlers permitem capturar erros e decidir se abortar ou continuar a execução."
},
{
  texto: "Qual é a prática recomendada ao criar lógica complexa em OutSystems?",
  opcoes: [
    "Colocar toda a lógica em uma única Action.",
    "Dividir em Actions menores e reutilizáveis.",
    "Duplicar lógica em cada módulo.",
    "Evitar modularização para simplificar."
  ],
  correta: 1,
  tema: "Logic",
  grupo: "aperfeiçoar",
  explicacao: "Dividir lógica em Actions menores e reutilizáveis facilita manutenção e promove boas práticas."
},
{
  texto: "O que acontece com uma transação se uma exceção não for tratada?",
  opcoes: [
    "A transação é confirmada mesmo com erro.",
    "A transação é revertida automaticamente.",
    "A execução continua normalmente.",
    "Os dados são salvos parcialmente."
  ],
  correta: 1,
  tema: "Exception/Transaction Handling",
  grupo: "aperfeiçoar",
  explicacao: "Se não houver tratamento, OutSystems faz rollback automático para garantir consistência dos dados."
},
{
  texto: "Qual é a prática correta ao projetar uma Screen que consome dados de várias Entities?",
  opcoes: [
    "Criar um Aggregate com joins necessários.",
    "Fazer várias queries separadas e juntar manualmente.",
    "Duplicar atributos em cada Entity.",
    "Evitar relacionamentos para simplificar."
  ],
  correta: 0,
  tema: "Screens",
  grupo: "errei",
  explicacao: "Aggregates com joins são a forma recomendada para buscar dados relacionados em uma única consulta."
},
{
  texto: "Ao investigar um erro que só ocorre em ambiente de produção, qual recurso é mais indicado?",
  opcoes: [
    "Reproduzir o erro em ambiente de desenvolvimento.",
    "Consultar os Error Logs no Service Center.",
    "Alterar diretamente o código em produção.",
    "Desinstalar o módulo problemático."
  ],
  correta: 1,
  tema: "Troubleshooting",
  grupo: "errei",
  explicacao: "Os Error Logs do Service Center mostram detalhes das exceções ocorridas em produção."
},
{
  texto: "Qual é a prática correta ao consumir uma API REST que retorna grandes volumes de dados?",
  opcoes: [
    "Configurar paginação na chamada da API.",
    "Carregar todos os registros de uma vez.",
    "Ignorar parâmetros de filtro.",
    "Duplicar chamadas para dividir os dados."
  ],
  correta: 0,
  tema: "Integrations",
  grupo: "errei",
  explicacao: "Paginação evita sobrecarga e melhora performance ao consumir APIs com grandes volumes de dados."
},
{
  texto: "Qual é a prática recomendada ao lidar com lógica que será usada em vários módulos?",
  opcoes: [
    "Criar Server Actions reutilizáveis em um módulo Core.",
    "Duplicar a lógica em cada módulo.",
    "Colocar toda a lógica em Client Actions.",
    "Evitar modularização para simplificar."
  ],
  correta: 0,
  tema: "Logic",
  grupo: "aperfeiçoar",
  explicacao: "Server Actions em módulos Core permitem reutilização e manutenção centralizada."
},
{
  texto: "O que acontece se uma exceção não for tratada em uma transação?",
  opcoes: [
    "A transação é confirmada mesmo com erro.",
    "A transação é revertida automaticamente.",
    "A execução continua normalmente.",
    "Os dados são salvos parcialmente."
  ],
  correta: 1,
  tema: "Exception/Transaction Handling",
  grupo: "aperfeiçoar",
  explicacao: "OutSystems faz rollback automático para garantir consistência dos dados quando não há tratamento."
},
{
  texto: "Qual é a vantagem de usar Client Actions para lógica simples?",
  opcoes: [
    "Executam no navegador, melhorando responsividade.",
    "Podem acessar diretamente o banco de dados.",
    "Eliminam necessidade de Server Actions.",
    "São usadas apenas em módulos Foundation."
  ],
  correta: 0,
  tema: "Logic",
  grupo: "aperfeiçoar",
  explicacao: "Client Actions rodam no navegador e são ideais para lógica simples e responsiva."
},
{
  texto: "Qual é a prática correta ao definir atributos em uma Entity?",
  opcoes: [
    "Usar nomes claros e consistentes.",
    "Evitar chaves primárias.",
    "Duplicar atributos em várias Entities.",
    "Criar atributos sem normalização."
  ],
  correta: 0,
  tema: "Data",
  grupo: "revisão",
  explicacao: "Nomes claros e consistentes facilitam manutenção e entendimento do modelo de dados."
},
{
  texto: "Qual é a vantagem de usar Processos Assíncronos em OutSystems?",
  opcoes: [
    "Executar lógica pesada sem bloquear o usuário.",
    "Substituir todas as Server Actions.",
    "Evitar uso de Aggregates.",
    "Executar lógica apenas em tempo de design."
  ],
  correta: 0,
  tema: "Asynchronous Processes",
  grupo: "revisão",
  explicacao: "Processos assíncronos permitem executar lógica em segundo plano sem impactar a experiência do usuário."
},
{
  texto: "Qual é a prática recomendada ao consumir REST APIs externas?",
  opcoes: [
    "Configurar autenticação e validar parâmetros.",
    "Permitir acesso sem autenticação.",
    "Ignorar documentação da API.",
    "Duplicar chamadas para dividir dados."
  ],
  correta: 0,
  tema: "REST APIs",
  grupo: "revisão",
  explicacao: "Autenticação e validação de parâmetros garantem segurança e confiabilidade na integração."
},
{
  texto: "Qual é a prática correta ao trabalhar em equipes com OutSystems?",
  opcoes: [
    "Publicar sem coordenação.",
    "Usar LifeTime e boas práticas de versionamento.",
    "Duplicar módulos para cada desenvolvedor.",
    "Evitar comunicação entre membros."
  ],
  correta: 1,
  tema: "Work in Teams",
  grupo: "revisão",
  explicacao: "Coordenação via LifeTime e versionamento garante colaboração eficiente e evita conflitos."
},
{
  texto: "Qual é a vantagem de usar Entities de extensão?",
  opcoes: [
    "Permitem armazenar atributos adicionais sem alterar a Entity principal.",
    "Eliminam necessidade de relacionamentos.",
    "Substituem completamente Aggregates.",
    "São usadas apenas em módulos Foundation."
  ],
  correta: 0,
  tema: "Data",
  grupo: "revisão",
  explicacao: "Entities de extensão permitem adicionar atributos sem modificar a Entity principal, mantendo flexibilidade."
},
{
  texto: "Durante a publicação de um módulo, um erro ocorre ao tentar inserir registros na tabela Orders. A mensagem indica: 'Cannot insert duplicate key in object dbo.Orders. The duplicate key value is (102)'. Considerando que a coluna OrderId é chave primária e já existe um registro com valor 102, qual seria a prática correta para resolver esse problema?",
  opcoes: [
    "Alterar a chave primária para permitir duplicados.",
    "Excluir manualmente o registro duplicado e tentar novamente.",
    "Garantir que a lógica de criação de pedidos gere IDs únicos, usando AutoNumber ou GUID.",
    "Ignorar o erro e continuar a publicação."
  ],
  correta: 2,
  tema: "Data",
  grupo: "errei",
  explicacao: "O erro indica violação de chave primária. A solução correta é garantir IDs únicos, usando AutoNumber ou GUID, evitando duplicação."
},
{
  texto: "Ao tentar excluir um cliente da Entity Customers, ocorre o erro: 'The DELETE statement conflicted with the REFERENCE constraint FK_Orders_Customers'. Isso significa que existem pedidos vinculados a esse cliente. Qual é a prática correta para resolver esse problema?",
  opcoes: [
    "Remover a constraint FK_Orders_Customers para permitir exclusão.",
    "Excluir primeiro os pedidos relacionados ou configurar cascade delete.",
    "Alterar o tipo da chave estrangeira para opcional.",
    "Ignorar o erro e tentar novamente."
  ],
  correta: 1,
  tema: "Data",
  grupo: "errei",
  explicacao: "O erro indica violação de chave estrangeira. É necessário excluir os registros dependentes ou configurar cascade delete para manter integridade."
},
{
  texto: "Durante testes de performance, uma consulta que usa a tabela Products demora vários segundos para retornar resultados. A análise mostra que a coluna ProductName é usada em filtros, mas não possui índice. Qual seria a prática correta para melhorar esse cenário?",
  opcoes: [
    "Criar um índice na coluna ProductName.",
    "Remover filtros da consulta.",
    "Duplicar a tabela Products para dividir os dados.",
    "Ignorar o problema, pois não afeta funcionalidade."
  ],
  correta: 0,
  tema: "Data",
  grupo: "aperfeiçoar",
  explicacao: "Filtros em colunas sem índice podem causar lentidão. Criar índice em ProductName melhora performance sem alterar funcionalidade."
},
{
  texto: "Um desenvolvedor cria uma lógica para inserir registros em uma tabela de relacionamento N-N entre Students e Courses. Durante os testes, percebe que ao tentar inserir o mesmo aluno no mesmo curso duas vezes, ocorre o erro: 'Violation of UNIQUE KEY constraint'. Considerando boas práticas de modelagem, qual seria a forma correta de evitar esse problema sem remover a constraint?",
  opcoes: [
    "Permitir duplicação de registros para simplificar.",
    "Validar previamente se o relacionamento já existe antes de inserir.",
    "Remover a constraint UNIQUE para não bloquear inserções.",
    "Criar uma nova tabela auxiliar para armazenar duplicações."
  ],
  correta: 1,
  tema: "Data",
  grupo: "aperfeiçoar",
  explicacao: "A constraint UNIQUE garante que não haja duplicação no relacionamento. A prática correta é validar antes de inserir, evitando erros e mantendo integridade."
},
{
  texto: "Durante a execução de um Timer que processa milhares de registros de vendas, ocorre o erro: 'Transaction log is full due to ACTIVE_TRANSACTION'. Isso indica que a transação está muito longa e não foi concluída. Qual seria a prática correta para resolver esse problema?",
  opcoes: [
    "Dividir o processamento em lotes menores, confirmando transações parciais.",
    "Aumentar indefinidamente o tamanho do transaction log.",
    "Desativar o uso de transações para evitar bloqueios.",
    "Ignorar o erro e tentar novamente."
  ],
  correta: 0,
  tema: "Asynchronous Processes",
  grupo: "revisão",
  explicacao: "Transações muito longas podem encher o log. A prática correta é dividir em lotes menores e confirmar transações parciais."
},
{
  texto: "Considere a Action abaixo acionada pelo Timer SyncExtSystemUsers, com o objetivo de sincronizar milhares de usuários com um sistema externo. O que falta, se é que falta alguma coisa, para que este Timer siga as melhores práticas da OutSystems para processamento embatch? <br>" 
    `<img src="imagens/action.png" alt="action" style="max-width:100%;margin:10px 0"></img><br>`,
  opções: [
    "Não falta nada. O Timer e sua Action já seguem as melhores práticas da OutSystems.",
    "A propriedade Timeout in Minutes deve ser configurada com um valor maior, para garantir que todos os registros sejam processados dentro da execução do Timer.",
    "A Action CommitTransaction está sendo chamada com muita frequência e deve ser chamada logo antes da chamada de WakeSyncExtSystemUsers.",
    "A Action deve ter alguma lógica para controlar o tempo limite usando uma Local Variable. Quando atingirmos o limite de tempo definido, a lógica reativa o Timer."
  ],
  correta: 3,
  tema: "Asynchronous Processes",
  grupo: "revisão",
  explicacao: "A melhor prática para Timers que processam grandes volumes de dados é controlar o tempo limite e reativar o Timer quando necessário, garantindo que todo o processamento seja concluído sem falhas."
},
];


window.perguntasestudo = perguntasestudo;
console.log("Total de perguntas de estudo:", perguntasestudo.length);