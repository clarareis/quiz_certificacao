const perguntas = [
  // ===============================
  // Tema: Architectural Patterns (7 questões)
  // ===============================
  {
    texto: `Which architectural pattern describes a complex task broken down into smaller steps, where each step is handled sequentially by specialized agents and the output of one becomes the input of the next?`,
    opcoes: ["Loop Flow", "Sequential Flow", "Parallel Flow", "Hierarchical Flow"],
    correta: 1,
    explicacao: "Sequential Flow is highly modular, with each agent processing a step in sequence and passing its output forward.",
    tema: "Architectural Patterns"
  },
  {
    texto: `In which flow do agents work together on a shared task, iteratively improving and critiquing each other's outputs until an acceptance condition is met?`,
    opcoes: ["Loop Flow", "Parallel Flow", "Shared Memory Flow", "Human-in-the-loop Flow"],
    correta: 0,
    explicacao: "Loop Flow involves agents iterating over a task, with one proposing improvements and another critiquing until the condition is satisfied.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which architectural pattern allows tasks to be executed simultaneously by multiple agents, improving efficiency for independent subtasks?`,
    opcoes: ["Sequential Flow", "Parallel Flow", "Hierarchical Flow", "Loop Flow"],
    correta: 1,
    explicacao: "Parallel Flow enables multiple agents to work concurrently on independent subtasks.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which architectural pattern organizes agents in a tree-like structure, where higher-level agents supervise and delegate tasks to lower-level agents?`,
    opcoes: ["Hierarchical Flow", "Sequential Flow", "Parallel Flow", "Shared Memory Flow"],
    correta: 0,
    explicacao: "Hierarchical Flow uses a tree structure with supervisors delegating tasks to specialized agents.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which architectural pattern uses a shared memory space where agents contribute and refine information collaboratively?`,
    opcoes: ["Shared Memory Flow", "Loop Flow", "Sequential Flow", "Parallel Flow"],
    correta: 0,
    explicacao: "Shared Memory Flow allows agents to iteratively refine outputs in a common workspace.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which architectural pattern integrates human feedback into the agent workflow to validate or adjust outputs?`,
    opcoes: ["Human-in-the-loop Flow", "Sequential Flow", "Parallel Flow", "Loop Flow"],
    correta: 0,
    explicacao: "Human-in-the-loop Flow ensures human oversight and validation during agent execution.",
    tema: "Architectural Patterns"
  },
  {
    texto: `Which architectural pattern is best suited for tasks requiring iterative refinement until a quality threshold is met?`,
    opcoes: ["Loop Flow", "Parallel Flow", "Hierarchical Flow", "Sequential Flow"],
    correta: 0,
    explicacao: "Loop Flow is ideal for iterative refinement with agents critiquing and improving outputs.",
    tema: "Architectural Patterns"
  },

  // ===============================
  // Tema: Agent Roles (7 questões)
  // ===============================
  {
    texto: `Which agent receives multiple inputs and unifies them into a single output, applying logic to filter, rank, and combine information?`,
    opcoes: ["Router Agent", "Supervisor Agent", "Aggregator Agent", "Dispatcher Agent"],
    correta: 2,
    explicacao: "The Aggregator Agent consolidates multiple inputs into one coherent output.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent analyzes requests and divides them into multiple outputs depending on criteria, effectively routing tasks to specialized agents?`,
    opcoes: ["Supervisor Agent", "Router/Dispatcher Agent", "Aggregator Agent", "Human-in-the-loop Agent"],
    correta: 1,
    explicacao: "The Router/Dispatcher Agent classifies the scope and distributes tasks accordingly.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent oversees the execution of tasks, ensuring that subtasks are completed and coordinating between agents?`,
    opcoes: ["Supervisor Agent", "Router Agent", "Aggregator Agent", "Dispatcher Agent"],
    correta: 0,
    explicacao: "The Supervisor Agent manages task execution and coordinates agents.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent is responsible for introducing human validation into the workflow?`,
    opcoes: ["Human-in-the-loop Agent", "Router Agent", "Supervisor Agent", "Aggregator Agent"],
    correta: 0,
    explicacao: "The Human-in-the-loop Agent integrates human oversight into the process.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent specializes in distributing tasks to multiple agents simultaneously?`,
    opcoes: ["Dispatcher Agent", "Supervisor Agent", "Aggregator Agent", "Router Agent"],
    correta: 0,
    explicacao: "The Dispatcher Agent distributes tasks to multiple agents for parallel execution.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent is best suited for filtering and ranking multiple candidate outputs before producing a final answer?`,
    opcoes: ["Aggregator Agent", "Supervisor Agent", "Router Agent", "Human-in-the-loop Agent"],
    correta: 0,
    explicacao: "The Aggregator Agent consolidates and ranks multiple outputs.",
    tema: "Agent Roles"
  },
  {
    texto: `Which agent decides which specialized agent should handle a given request based on its type?`,
    opcoes: ["Router Agent", "Supervisor Agent", "Aggregator Agent", "Dispatcher Agent"],
    correta: 0,
    explicacao: "The Router Agent directs requests to the appropriate specialized agent.",
    tema: "Agent Roles"
  },

  // ===============================
  // Tema: ODC Implementation (6 questões)
  // ===============================
  {
    texto: `Which workflow element in ODC should be added to implement parallel flows, allowing tasks to run asynchronously?`,
    opcoes: ["Decision (If)", "Parallel", "Human Activity", "Automatic Activity"],
    correta: 1,
    explicacao: "The Parallel element defines parallel paths in the workflow, enabling asynchronous execution.",
    tema: "ODC Implementation"
  },
  {
    texto: `Which ODC element is used to branch execution based on conditions?`,
    opcoes: ["Decision (If)", "Parallel", "Human Activity", "Automatic Activity"],
    correta: 0,
    explicacao: "The Decision element allows conditional branching in workflows.",
    tema: "ODC Implementation"
  },
  {
    texto: `Which ODC element assigns a task to a human user for validation or input?`,
    opcoes: ["Human Activity", "Automatic Activity", "Parallel", "Decision (If)"],
    correta: 0,
    explicacao: "Human Activity assigns tasks to users for manual input or validation.",
    tema: "ODC Implementation"
  },
  {
    texto: `Which ODC element executes a task automatically without human intervention?`,
    opcoes: ["Automatic Activity", "Human Activity", "Parallel", "Decision (If)"],
    correta: 0,
    explicacao: "Automatic Activity executes tasks automatically.",
    tema: "ODC Implementation"
  },
  {
    texto: `Which ODC element is best suited for implementing asynchronous background processes?`,
    opcoes: ["Automatic Activity", "Parallel", "Human Activity", "Decision (If)"],
    correta: 0,
    explicacao: "Automatic Activity can be used for background processes.",
    tema: "ODC Implementation"
  },
  {
    texto: `Which ODC element allows combining multiple paths back into a single flow after parallel execution?`,
    opcoes: ["Join", "Parallel", "Decision (If)", "Human Activity"],
    correta: 0,
    explicacao: "The Join element synchronizes parallel paths back into one flow.",
    tema: "ODC Implementation"
  }
];
