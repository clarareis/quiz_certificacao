const perguntas = [
  // ===============================
  // Tema: Agent Roles (questão revisada)
  // ===============================
  {
    texto: `Which agent is responsible for analyzing the type of request and directing it to the most appropriate specialized agent, rather than distributing tasks simultaneously to multiple agents?`,
    opcoes: ["Router Agent", "Supervisor Agent", "Aggregator Agent", "Dispatcher Agent"],
    correta: 0,
    explicacao: "The Router Agent analyzes the request type and directs it to the correct specialized agent. The Dispatcher Agent, in contrast, distributes tasks to multiple agents for parallel execution.",
    tema: "Agent Roles"
  },

  // ===============================
  // Tema: Generative AI Key Concepts (2 questões oficiais)
  // ===============================
  {
    texto: `What is the main problem of pre-trained LLMs that Retrieval-Augmented Generation (RAG) aims to solve?`,
    opcoes: [
      "High computational cost",
      "Difficulty with complex, multi-step reasoning",
      "Lack of updated or domain-specific knowledge",
      "Difficulty maintaining a consistent tone throughout a long conversation"
    ],
    correta: 2,
    explicacao: "RAG addresses the limitation of LLMs by providing updated and domain-specific knowledge.",
    tema: "Generative AI Key Concepts"
  },
  {
    texto: `Which LLM prompt configuration controls the randomness of the model’s output?`,
    opcoes: [
      "Presence penalty",
      "Maximum tokens",
      "Context window",
      "Temperature"
    ],
    correta: 3,
    explicacao: "Temperature controls the randomness of the model’s output.",
    tema: "Generative AI Key Concepts"
  },

  // ===============================
  // Tema: Core and Agentic Design (3 questões oficiais)
  // ===============================
  {
    texto: `Which agent memory system provides persistent storage, allowing the agent to retrieve information across multiple sessions?`,
    opcoes: [
      "Short-term memory",
      "Long-term memory",
      "Working memory",
      "Domain knowledge"
    ],
    correta: 1,
    explicacao: "Long-term memory allows agents to recall information across sessions.",
    tema: "Core and Agentic Design"
  },
  {
    texto: `Which statement accurately describes the difference in task execution between single-agent and multi-agent workflows?`,
    opcoes: [
      "Single-agent workflows achieve greater scalability for complex tasks by using one powerful reasoning model.",
      "Multi-agent workflows naturally require simpler governance and fewer observability tools.",
      "Single-agent workflows have lower fault tolerance because the entire task flow represents a single point of failure.",
      "Multi-agent workflows exhibit high modularity, allowing agents to be developed, tested, and replaced independently"
    ],
    correta: 3,
    explicacao: "Multi-agent workflows are modular, enabling independent development and replacement of agents.",
    tema: "Core and Agentic Design"
  },
  {
    texto: `A project requires an agentic AI system to process a massive dataset divided into five completely separate and independent segments (A–E). The system must analyze each segment simultaneously and quickly combine the findings into a comprehensive report. Which statement best describes how the Parallel Agent pattern achieves this efficiency?`,
    opcoes: [
      "The Dispatcher Agent receives the segmented results (A–E) and calculates the final output, eliminating the need for simultaneous execution.",
      "The Dispatcher Agent splits the problem into five independent segments and distributes them to five Worker Agents, which execute sequentially, passing partial results along until the last agent produces the final report.",
      "The Dispatcher Agent splits the problem into five independent segments and distributes them to five Worker Agents, which execute simultaneously. The Aggregator Agent then gathers the five individual results and synthesizes them into a unified final report",
      "The Dispatcher Agent splits the problem into five independent segments and distributes them to five Worker Agents, which continuously collaborate in a shared workspace, refining the content iteratively until a termination condition is met."
    ],
    correta: 2,
    explicacao: "Parallel Agents execute tasks simultaneously, and the Aggregator combines results.",
    tema: "Core and Agentic Design"
  },

  // ===============================
  // Tema: Agentic AI in OutSystems (5 questões oficiais)
  // ===============================
  {
    texto: `What is the main architectural purpose of connecting an external AI search service (e.g., Azure AI Search or Amazon Kendra) in ODC for use with an agentic application?`,
    opcoes: [
      "To enable the Agent to perform RAG, providing current and domain-specific grounding context",
      "To handle final aggregation and reporting of the agent’s response to the end user",
      "To provide the agent with a dedicated memory system to store conversation history across sessions",
      "To supply fixed instructions and persona to the LLM"
    ],
    correta: 0,
    explicacao: "External search services provide grounding context for RAG.",
    tema: "Agentic AI in OutSystems"
  },
  {
    texto: `How does the Call Condition configuration affect the execution of the Action Calling feature in an AI Agent?`,
    opcoes: [
      "It evaluates an expression designed to stop the agent’s execution and raise an error",
      "It is a mandatory input parameter for the external API the agent is calling",
      "It defines the maximum number of retries for a failed action call",
      "It sets the minimum confidence score the AI must have before attempting an action"
    ],
    correta: 0,
    explicacao: "Call Condition evaluates an expression to stop execution and raise an error.",
    tema: "Agentic AI in OutSystems"
  },
  {
    texto: `How does an agentic application in ODC ensure that a server action (tool) can be reliably interpreted and called by the LLM?`,
    opcoes: [
      "By automatically converting the server action logic into a Python script within the agentic runtime environment",
      "By parsing the action’s name, description, and parameter types and converting them into a structured JSON schema for the LLM",
      "By creating a direct synchronous REST API endpoint that the LLM calls without needing to know input parameters",
      "By ignoring the action definition and relying solely on the system prompt to infer inputs"
    ],
    correta: 1,
    explicacao: "Server actions are converted into structured JSON schemas for the LLM.",
    tema: "Agentic AI in OutSystems"
  },
  {
    texto: `What is the purpose of the UserInput variable inside the AgentFlow action?`,
    opcoes: [
      "It is the instruction text that defines the agent’s persona and general constraints",
      "It is the unique key used to search and store past conversations in memory",
      "It is formatted as the system message, providing initial context to the LLM",
      "It is formatted as a user message, representing the current query for the LLM"
    ],
    correta: 3,
    explicacao: "UserInput represents the current user query for the LLM.",
    tema: "Agentic AI in OutSystems"
  },
  {
    texto: `If a developer wants to update the system prompt to change the agent’s personality from “formal” to “casual,” which action is used to format and insert this updated instruction as the fundamental message in the LLM’s context?`,
    opcoes: [
      "StoreMemory",
      "BuildMessages",
      "GetGroundingData",
      "Call <AgentName>"
    ],
    correta: 1,
    explicacao: "BuildMessages formats and inserts the updated system prompt.",
    tema: "Agentic AI in OutSystems"
  }
];
