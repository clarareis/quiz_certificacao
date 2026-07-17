const perguntas = [
  {
    texto: `Which architectural pattern describes a complex task broken down into smaller steps, where each step is handled sequentially by specialized agents and the output of one becomes the input of the next?`,
    opcoes: [
      "Loop Flow",
      "Sequential Flow",
      "Parallel Flow",
      "Hierarchical Flow"
    ],
    correta: 1,
    explicacao: "Sequential Flow is highly modular, with each agent processing a step in sequence and passing its output forward.",
    tema: "Architectural Patterns"
  },
  {
    texto: `In which flow do agents work together on a shared task, iteratively improving and critiquing each other's outputs until an acceptance condition is met?`,
    opcoes: [
      "Loop Flow",
      "Parallel Flow",
      "Shared Memory Flow",
      "Human-in-the-loop Flow"
    ],
    correta: 0,
    explicacao: "Loop Flow involves agents iterating over a task, with one proposing improvements and another critiquing until the condition is satisfied.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which agent receives multiple inputs and unifies them into a single output, applying logic to filter, rank, and combine information?`,
    opcoes: [
      "Router Agent",
      "Supervisor Agent",
      "Aggregator Agent",
      "Dispatcher Agent"
    ],
    correta: 2,
    explicacao: "The Aggregator Agent consolidates multiple inputs into one coherent output.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent analyzes requests and divides them into multiple outputs depending on criteria, effectively routing tasks to specialized agents?`,
    opcoes: [
      "Supervisor Agent",
      "Router/Dispatcher Agent",
      "Aggregator Agent",
      "Human-in-the-loop Agent"
    ],
    correta: 1,
    explicacao: "The Router/Dispatcher Agent classifies the scope and distributes tasks accordingly.",
    tema: "Agent Roles"
  },
  {
    texto: `Which workflow element in ODC should be added to implement parallel flows, allowing tasks to run asynchronously?`,
    opcoes: [
      "Decision (If)",
      "Parallel",
      "Human Activity",
      "Automatic Activity"
    ],
    correta: 1,
    explicacao: "The Parallel element defines parallel paths in the workflow, enabling asynchronous execution.",
    tema: "ODC Implementation"
  }
];
