const perguntas = [
  {
    texto: `Consider the presented application architecture diagram. The application has two front-end modules (Mod A and Mod B) and a core module (Mod C) that abstracts some reusable services. Dependencies exist because Mod A needs to reuse some logic from Mod B, and both use a business concept being implemented in Mod C. Comment on the architectural problems and alternatives.<br> <img src="imagens/diagrama.png" alt="diagram" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "The diagram does not present architectural problems, as there are only side references in the end-user layer or downward references.",
      "The logic from Mod B being used in Mod A should be moved to Mod C. Both Mod A and Mod B can reference this new module, avoiding circular dependency.",
      "The diagram does not present architectural problems, as there are no circular dependencies.",
      "The logic from Mod B being used in Mod A should be moved to a new core module, Mod AB. Both Mod A and Mod B can reference this new module, avoiding side reference."
    ],
    correta: 1,
    explicacao: "Shared logic between Mod A and Mod B should be moved to Mod C, which already abstracts reusable services. This avoids side references and promotes a decoupled and scalable architecture.",
    tema: "Best Practices"
  },
  {
    texto: "To avoid tight coupling and simplify dependencies, you can...",
    opcoes: [
      "Create a BPT process that is implicitly configured to start on the update of a specific action and react to changes made.",
      "Use a local web service instead of a public action.",
      "Merge two modules into a single module, avoiding the need for dependencies, as this will not impact the module size.",
      "Use a timer that will listen for changes in one of the modules and react to them."
    ],
    correta: 1,
    explicacao: "Using a local web service allows modules to communicate without creating direct dependencies, promoting a decoupled architecture.",
    tema: "Best Practices"
  },
  {
    texto: "When does the On Destroy event occur?",
    opcoes: [
      "It occurs before destroying a screen or block and removing it from the DOM.",
      "It occurs after all child components of the parent component are destroyed.",
      "It is triggered when the browser unloads the web page or closes the window.",
      "The event occurs during the re-rendering process of a component."
    ],
    correta: 0,
    explicacao: "The OnDestroy event is executed before a screen or block is destroyed. It is useful for freeing resources or clearing variables.",
    tema: "Logic"
  },
  {
    texto: "When using Expand Inline parameters in SQL queries, which of the following is NOT a best practice?",
    opcoes: [
      "Using EncodeSql to encode the full content of a SQL parameter before expanding it.",
      "Building dynamic clauses like ORDER BY @SortField using Expand Inline.",
      "Creating WHERE column IN (@values) clauses with Expand Inline, correctly handling each value.",
      "Performing manual string encoding using the Replace function."
    ],
    correta: 3,
    explicacao: "Manual string encoding using the Replace function is not a best practice as it can lead to security flaws and encoding errors.",
    tema: "Queries"
  },
  {
    texto: "When using the API, we noticed that the City field in the Response does not bring values. Why?",
    opcoes: [
      "There is a problem in the configuration or mapping of the API that prevents the City field from being correctly filled.",
      "The JSON name of the City field in the structure is not the same as the City field in the API Response.",
      "The endpoint is wrong.",
      "The City field is not being returned because it is null or missing."
    ],
    correta: 1,
    explicacao: "If the JSON name in the structure doesn't match the API response, the mapping fails. Ensuring names are aligned is essential.",
    tema: "REST APIs"
  },
  {
    texto: "When building a SQL query (Advanced Query), what should you consider to avoid performance issues?",
    opcoes: [
      "The platform automatically optimizes SQL queries to fetch only the attributes that will be used.",
      "Use SELECT {Entity}.* to avoid errors and increase performance.",
      "Create a specific output structure with only the returned attributes.",
      "Create a view in the database to execute the query."
    ],
    correta: 2,
    explicacao: "Creating an output structure with only necessary attributes reduces the volume of data processed and transferred.",
    tema: "Queries"
  },
  {
    texto: "Where should you place extensive JavaScript code used only in one Web Screen of your application?",
    opcoes: [
      "In the module's JavaScript property because it's the only place allowing browser caching.",
      "In the Web Screen's JavaScript property because it allows browser caching.",
      "In an unescaped expression on the Web Screen, as it's used only once.",
      "As the return parameter of a function used as an unescaped expression."
    ],
    correta: 1,
    explicacao: "Placing it in the Screen's JavaScript property allows browser caching and ensures it only loads for that specific screen.",
    tema: "Screens"
  },
  {
    texto: "Why is data archiving important for performance?",
    opcoes: [
      "It merges old and new data.",
      "It allows faster indexing of all databases.",
      "It minimizes the volume of primary data.",
      "It eliminates unused applications."
    ],
    correta: 2,
    explicacao: "Archiving moves old records to secondary storage, reducing the active data volume and improving performance.",
    tema: "Best Practices"
  },
  {
    texto: "Why should the archiving Timer run during off-peak hours?",
    opcoes: [
      "To reduce the load on the database.",
      "To simplify user access.",
      "To improve indexing performance.",
      "To reduce system downtime."
    ],
    correta: 0,
    explicacao: "Running the archiving process during off-peak hours avoids overloading the database during active periods.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the purpose of the 'IsArchived' control column?",
    opcoes: [
      "Deletes data after archiving.",
      "Marks records as archived.",
      "Marks records for deletion.",
      "Marks data as active."
    ],
    correta: 1,
    explicacao: "The 'IsArchived' column identifies records that have been moved to an archive area so they can be filtered out of active data.",
    tema: "Best Practices"
  },
  {
    texto: "Which property is removed when copying entities to the archive catalog?",
    opcoes: [
      "AutoNumber property.",
      "Primary keys.",
      "IsActive flag.",
      "IsArchived attribute."
    ],
    correta: 0,
    explicacao: "AutoNumber is removed to avoid conflicts, as archived data should not continue generating new automatic values.",
    tema: "Best Practices"
  },
  {
    texto: "Regarding Web References, which of the following statements is true?",
    opcoes: [
      "If the Web Service is deleted, Service Studio will show a warning when publishing a module that references that Web Service.",
      "Both the Web Reference action and the Screen Action that calls it use the same transaction.",
      "If the Web Service is deleted, Service Studio will show an error when publishing a module that references that Web Service.",
      "The 'Timeout in Seconds' property of a Web Reference must be configured when using it in a Screen Action."
    ],
    correta: 2,
    explicacao: "If a referenced Web Service is deleted, Service Studio cannot resolve the dependency and displays an error during publication.",
    tema: "REST APIs"
  },
  {
    texto: "I have a record with 20 attributes, but I want to update only 3 values. What is the best practice?",
    opcoes: [
      "Use a partial update API to modify only the fields.",
      "Validate the updated fields before saving changes.",
      "Perform batch updates to minimize resource usage.",
      "Update the values in the record and perform a CreatorUpdate."
    ],
    correta: 0,
    explicacao: "Using a partial update API allows you to modify only the necessary fields, avoiding overhead and maintaining data integrity. This approach is efficient and aligned with integration best practices.",
    tema: "REST APIs"
  },
  {
    texto: "You have two entities: Product (external) and OrderProduct (local). What is the best practice for joining these entities?",
    opcoes: [
      "The platform does not allow local entities to reference external entities.",
      "Fetch the minimum subset of data required from the external database before performing the join.",
      "Query the entities separately and use loops to match them.",
      "Perform the join with the entire dataset from the external table."
    ],
    correta: 1,
    explicacao: "When joining local entities with external ones, it is recommended to fetch only the necessary subset from the external base. This reduces the volume of data transferred and improves application performance.",
    tema: "External Databases"
  },
  {
    texto: "A Timer processes data from ClientEnergyData and then deletes them. How to avoid timeouts?",
    opcoes: [
      "In a For-Each loop, delete the record and perform an explicit commit.",
      "Process a batch of records and commit them. Control the time and wake up the timer again.",
      "Maintain control over the timer's execution time and stop it before the timeout.",
      "Fetch only a fixed number of records to process each time the timer runs."
    ],
    correta: 1,
    explicacao: "The best practice to avoid timeouts in timers is to process data in batches and perform partial commits. This allows you to control execution time and re-trigger the timer to continue processing without overloading the system.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "An action has a CRUD flow and an exception handler with Abort=Yes and another CRUD. What happens?",
    opcoes: [
      "A rollback is performed and a record is created in the Audit entity.",
      "A rollback is performed and no record is created.",
      "The transaction continues after the handler and the second CRUD is executed.",
      "The handler ignores the Abort and allows the second CRUD to be persisted."
    ],
    correta: 1,
    explicacao: "When Abort is set to Yes, the entire transaction is rolled back. Even if there is another CRUD after the handler, it will not be executed, and no record will be created.",
    tema: "Exception/Transaction Handling"
  },
  {
    texto: "Under what circumstances can a Process be started?",
    opcoes: [
      "Only through an explicit call from an Action Flow, using the LaunchProcess function.",
      "Automatically when a record of an Entity that exposes process events is created, or explicitly started via Action Flow.",
      "Both upon creation and updating of records of any existing Entity in the application.",
      "Only when the module is published, requiring a manual restart of the Process in Service Center."
    ],
    correta: 1,
    explicacao: "A Process can be started automatically when a record of an Entity exposing process events is created, or it can be launched explicitly through an Action Flow using the LaunchProcess function.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Which of the following is NOT a recommended architectural best practice by OutSystems?",
    opcoes: [
      "Foundation modules should have Core entities as read-only.",
      "Foundation modules should be independent and have no upward references.",
      "Foundation modules cannot have any UI Patterns.",
      "Foundation modules can have upward references to Core Services modules."
    ],
    correta: 3,
    explicacao: "Upward references to Core Services modules break the principle of unidirectional dependency and make the maintenance and scalability of the architecture difficult.",
    tema: "Best Practices"
  },
  {
    texto: "How to avoid manipulation of sensitive data via URL or form?",
    opcoes: [
      "Use the SUBMIT method instead of NAVIGATE.",
      "Enable HTTP Security (SSL).",
      "Audit system activity.",
      "Use Session Variables instead of Input Parameters."
    ],
    correta: 3,
    explicacao: "Session Variables are stored on the server and are not visible or manipulable via URL or form, protecting sensitive data from exposure or improper alteration.",
    tema: "Best Practices"
  },
  {
    texto: "I want to migrate small batches of data. What is the best way?",
    opcoes: [
      "BPT",
      "Light Process",
      "Timer",
      "REST API"
    ],
    correta: 2,
    explicacao: "Timers are ideal for executing recurring or background tasks, such as migrating small batches of data, without overloading the system.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Which option should be in the Core Business layer?",
    opcoes: [
      "Definition of process workflows to orchestrate use cases.",
      "Business log records.",
      "Theme definitions.",
      "Home pages with dashboards."
    ],
    correta: 0,
    explicacao: "The Core Business layer is responsible for the central business logic, including the definition of workflows that orchestrate the main use cases of the application.",
    tema: "Logic"
  },
  {
    texto: "How does planning for data growth during the design phase help?",
    opcoes: [
      "Reduces the need for database monitoring.",
      "Eliminates the need for archiving.",
      "Avoids performance issues in the application.",
      "Ensures that all active data remains permanent."
    ],
    correta: 2,
    explicacao: "Planning for data growth from the design stage allows for predicting future volumes and structuring the database to avoid slowness, bottlenecks, and scalability issues.",
    tema: "Best Practices"
  },
  {
    texto: "When you convert an Entity to a Static Entity...",
    opcoes: [
      "You can obtain all records of the Entity data in Service Studio.",
      "The Static Entity keeps the Entity's attributes and also adds the Order, Label, and Is_Active attributes.",
      "The Static Entity does not maintain the Entity's indexes.",
      "You get a Static Entity in Service Studio with all records filled with the Entity's data."
    ],
    correta: 2,
    explicacao: "When converting an Entity to a Static Entity, the original Entity's indexes are not maintained, as Static Entities are designed to store a fixed set of values that do not change frequently.",
    tema: "Data"
  },
  {
    texto: "What does 'main catalog' refer to?",
    opcoes: [
      "Historical archive",
      "Secondary storage",
      "External APIs",
      "Primary storage"
    ],
    correta: 3,
    explicacao: "The 'main catalog' refers to the primary storage where the application's active data is kept and accessed most frequently.",
    tema: "Data"
  },
  {
    texto: "For OutSystems Cloud, where can archived data be stored?",
    opcoes: [
      "On on-premises servers.",
      "In JSON files.",
      "In external databases or the OutSystems database.",
      "In APIs exposed by the application."
    ],
    correta: 2,
    explicacao: "In OutSystems Cloud, archived data can be stored in both external databases and the platform's own database, depending on the defined retention and performance strategy.",
    tema: "External Databases"
  },
  {
    texto: "What is the best way to refactor the Finance module?",
    opcoes: [
      "Create two new modules, Finance and Finance_CS, and move elements as needed.",
      "Clone the Finance module, rename it to Finance_CS, and delete UI flows.",
      "Rename the original module to Finance_CS and clone it to Finance, deleting entities and actions.",
      "Rename the original module to Finance_CS and use the Refactor component to migrate screens."
    ],
    correta: 2,
    explicacao: "The best practice is to split the original module into two new modules with distinct responsibilities, separating business logic and core services, which facilitates maintenance and scalability.",
    tema: "Best Practices"
  },
  {
    texto: "What is incorrect about Automatic Activities in the answers below?",
    opcoes: [
      "They cannot be scheduled automatically.",
      "They do not have oncallback actions.",
      "They are not executed under success conditions.",
      "They are executed by an asynchronous engine."
    ],
    correta: 0,
    explicacao: "Automatic Activities can be scheduled automatically based on events or conditions defined in the process, allowing automatic execution without manual intervention.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Consider the following Timer definition for processing expense files. Before finishing its logic, the Timer activates a second Timer to process expenses extracted from files and saved in the database. What happens if the first Timer reaches a timeout?",
    opcoes: [
      "Changes made by the Action are rolled back and the second Timer is not executed.",
      "Changes made by the Action are saved, but the second Timer is not executed.",
      "Changes made by the Action are saved and the second Timer is activated for execution.",
      "Changes made by the Action are rolled back, but the second Timer is activated for execution."
    ],
    correta: 0,
    explicacao: "If the first Timer reaches a timeout, all changes made during its execution are rolled back, including the activation of the second Timer, which will not be executed.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the main benefit of data archiving for end users?",
    opcoes: [
      "Better runtime performance.",
      "Encrypted access to archived data.",
      "Reduction in data compression.",
      "Additional options for data recovery."
    ],
    correta: 0,
    explicacao: "Data archiving reduces the volume of active data, which improves application performance for end users by speeding up queries and operations.",
    tema: "Best Practices"
  },
  {
    texto: "What is the consequence of lack of purging in the archive catalog?",
    opcoes: [
      "Archived data remains accessible.",
      "Data is automatically compressed.",
      "Database performance improves.",
      "Archived data continues to grow in volume."
    ],
    correta: 3,
    explicacao: "Without purging, archived data accumulates indefinitely, increasing total volume and potentially impacting storage costs and performance.",
    tema: "Best Practices"
  },
  {
    texto: "How can inadequate archiving frequency affect performance?",
    opcoes: [
      "Ensures that archived data is not accessed.",
      "Speeds up indexing unnecessarily.",
      "Slows down the primary catalog.",
      "Prevents data from being archived."
    ],
    correta: 2,
    explicacao: "Inadequate frequency keeps old data in the primary catalog longer than necessary, increasing active data volume and slowing down access and queries.",
    tema: "Data"
  },
  {
    texto: "Regarding Expand Inline parameters in SQL queries, what is the best answer to explain why to use them?",
    opcoes: [
      "To avoid SQL injection, which is possible with normal parameters.",
      "To implement dynamic conditions by injecting the necessary clauses.",
      "To prevent SQL injection using this option together with the EncodeSql function.",
      "To prevent any clause from using this parameter, making it optional."
    ],
    correta: 1,
    explicacao: "Expand Inline parameters allow the dynamic construction of SQL queries by injecting fragments of SQL code (like dynamic WHERE or ORDER BY clauses).",
    tema: "Queries"
  },
  {
    texto: "Where should I place extensive JavaScript code used only in one Web Screen of my application?",
    opcoes: [
      "In the module's JavaScript property because it's the only place that allows browser caching.",
      "In the Web Screen's JavaScript property because it allows browser caching.",
      "In an unescaped expression on the Web Screen, as it's used only once.",
      "As the return parameter of a function used as an unescaped expression."
    ],
    correta: 1,
    explicacao: "Placing JavaScript in the Screen property is a best practice because it allows the browser to cache the code, improving performance and ensuring it only loads when that specific screen is accessed.",
    tema: "Screens"
  },
  {
    texto: "What are the two types of archiving variants mentioned?",
    opcoes: [
      "Light and historical archiving.",
      "Historical and temporary archiving.",
      "Internal and external archiving.",
      "Fast and heavy archiving."
    ],
    correta: 0,
    explicacao: "Light archiving typically keeps data accessible for quick retrieval or search, while historical archiving is used for data that is rarely accessed and can be moved to cheaper, long-term storage.",
    tema: "Data"
  },
  {
    texto: "Which column is added to entities for timestamp-based archiving?",
    opcoes: [
      "IsArchived",
      "IsDraft",
      "LastUpdatedOn",
      "IsActive"
    ],
    correta: 0,
    explicacao: "The 'IsArchived' attribute is commonly used as a flag to distinguish between active records and those that have been logically archived.",
    tema: "Data"
  },
  {
    texto: "A Client Variable:",
    opcoes: [
      "Resets values upon logout or closing the browser.",
      "Is not a good practice for storing large text values.",
      "Automatically encrypts the value for extra security.",
      "Always saves values in local storage for reuse."
    ],
    correta: 1,
    explicacao: "Client Variables are stored in the browser's memory. Storing large amounts of data in them can degrade application performance and increase memory consumption.",
    tema: "Screens"
  },
  {
    texto: "When using an API, I noticed I have no logs or little information in Service Center. What is the most likely cause?",
    opcoes: [
      "The logging level must be configured for troubleshooting.",
      "The logging level must be changed to 'Full' to see all Request and Response information.",
      "The endpoint is wrong.",
      "Service Center does not support API logs."
    ],
    correta: 1,
    explicacao: "By default, OutSystems logs basic information. To see the full details of the Request and Response payloads, the logging level must be set to 'Full' in Service Center.",
    tema: "REST APIs"
  },
  {
    texto: "What does 'archive catalog' mean?",
    opcoes: [
      "A secondary storage for archived data.",
      "A primary catalog.",
      "Data directly related to cloud applications.",
      "The largest database in the system."
    ],
    correta: 0,
    explicacao: "The archive catalog refers to the specific database or storage area designated to hold data that has been removed from the main operational tables.",
    tema: "Data"
  },
  {
    texto: "What is data archiving?",
    opcoes: [
      "Encrypting current data for future use.",
      "Storing all data in the main catalog.",
      "Deleting irrelevant data permanently.",
      "Moving data to secondary storage."
    ],
    correta: 3,
    explicacao: "Data archiving is the process of moving data that is no longer frequently accessed to a separate storage system for long-term retention.",
    tema: "Data"
  },
  {
    texto: "What can't we do with entities from an external database?",
    opcoes: [
      "Use the entity as output in a SQL query.",
      "Create or delete actions from an Aggregate.",
      "Perform joins with OutSystems entities from different catalog schemas.",
      "Use filters on entity attributes in Aggregates."
    ],
    correta: 2,
    explicacao: "The platform does not support server-side joins between entities residing in different database catalogs or schemas (e.g., joining a local OutSystems entity with an external one in a single Aggregate).",
    tema: "External Databases"
  },
  {
    texto: "What is a key characteristic of light archiving?",
    opcoes: [
      "Archived data is deleted immediately.",
      "Archived data can be searched and retrieved.",
      "Archived data becomes permanently inaccessible.",
      "Archived data is stored only externally."
    ],
    correta: 1,
    explicacao: "Light archiving allows the data to remain discoverable and restorable within the application context, unlike deep historical archiving.",
    tema: "Data"
  },
  {
    texto: "Select the option that makes the statement true. If a user does not have the Manager role:",
    opcoes: [
      "Neither button will be displayed at runtime. But in the Container scenario (left), the button is still part of the generated HTML.",
      "Neither button will be displayed at runtime. But in the If scenario (right), the button is still part of the generated HTML.",
      "Both buttons are displayed and part of the HTML.",
      "Neither button is displayed or part of the HTML."
    ],
    correta: 0,
    explicacao: "Setting the 'Visible' property of a container to false hides it via CSS, but it remains in the DOM. Using an 'If' widget with a false condition prevents the element from being rendered in the HTML at all.",
    tema: "Screens"
  },
  {
    texto: "Consider the following Client Action that obtains the location of various customers. Which statement is correct?",
    opcoes: [
      "The GetCustomerCountries action should be replaced by a direct SQL query to improve performance.",
      "You should avoid calling multiple Server Actions in a loop within a Client Action, as it causes multiple round trips to the server.",
      "Service Studio will show an error because it is not possible to call Server Actions within a loop.",
      "You should set the 'Cache in Minutes' property for the GetCitiesByCountry call."
    ],
    correta: 1,
    explicacao: "Calling Server Actions inside a loop in a Client Action is a bad practice. Each call represents a separate request to the server, which significantly increases latency and degrades performance.",
    tema: "Screens"
  },
  {
    texto: "Regarding Site Properties, which of the following statements is true?",
    opcoes: [
      "The effective values of Site Properties can be modified in Service Center, but the default value defined in Service Studio remains unchanged.",
      "Client Variables persist as long as the user session is active, even after the browser is closed.",
      "Site Properties can be used directly in Screen expressions without impacting performance.",
      "Client Variables do not support complex data types, such as Identifiers or Records."
    ],
    correta: 0,
    explicacao: "Site Properties allow their 'Effective Value' to be changed in Service Center for each environment without requiring a new publish or changing the original code value.",
    tema: "Logic"
  },
  {
    texto: "Which of the following is a recommended best practice for UI development in OutSystems?",
    opcoes: [
      "Use the built-in Styles editor to customize all UI elements individually instead of using CSS classes.",
      "Promote 'lazy load' strategies in Screens with many records, such as using the On Scroll Ending event.",
      "Use the CheckRole function on the client side to hide sensitive data from the DOM.",
      "Always use Screen Events to fetch data synchronously to ensure the user sees all information at once."
    ],
    correta: 1,
    explicacao: "Using 'On Scroll Ending' to implement lazy loading is a best practice for performance, as it avoids loading all data at once and reduces the initial load time of the screen.",
    tema: "Screens"
  },
  {
    texto: "Which logging level for REST or SOAP integrations saves information on failed requests including HTTP tracing?",
    opcoes: [
      "Only the Troubleshooting level.",
      "Both Troubleshooting and Full levels.",
      "All levels (Default, Troubleshooting, and Full).",
      "Only the Full level."
    ],
    correta: 1,
    explicacao: "Both Troubleshooting and Full levels provide detailed tracing information that is essential for debugging failed requests and analyzing the HTTP flow.",
    tema: "Troubleshooting"
  },
  {
    texto: "A developer wants to debug a public Server Action that is defined in another module. Which of the following is FALSE?",
    opcoes: [
      "The developer needs permissions to publish the consumer module to start debugging.",
      "The reference to the producer module must be updated in the consumer module.",
      "The Server Action must be correctly referenced in the consumer module.",
      "The trigger to run the action must necessarily come from a Screen."
    ],
    correta: 3,
    explicacao: "The execution of a Server Action can be triggered by various sources, such as Timers, Processes, or other Service Actions, not exclusively from a Screen.",
    tema: "Logic"
  },
  {
    texto: "In a scenario where one Aggregate depends on the output of another Aggregate, and only the second output is used on the screen, what is the best practice?",
    opcoes: [
      "Use the On Ready event to run both and save the results to a local variable.",
      "Set both Aggregates to 'Fetch: At Start'.",
      "Set the first to 'Fetch: At Start' and the second to 'Fetch: Only on Demand', calling the second in the first's On After Fetch.",
      "Use a Data Action to run both sequentially on the server side."
    ],
    correta: 3,
    explicacao: "Using a Data Action is the most efficient way to handle sequential dependencies, as it performs all logic in a single server call instead of multiple requests from the client.",
    tema: "Queries"
  },
  {
    texto: "Which statement about Client Variables is correct?",
    opcoes: [
      "Site Properties can be used as the value of an Expression widget directly.",
      "Client Variable values can be of basic types, Identifiers, or Records.",
      "Client Variables are reset when the user closes the browser.",
      "The effective value of Site Properties can be modified in Service Center."
    ],
    correta: 3,
    explicacao: "The effective value of a Site Property can be changed in Service Center to adapt the application behavior without changing the code.",
    tema: "Logic"
  },
  {
    texto: "What is the primary benefit of data archiving for end users?",
    opcoes: [
      "Better runtime performance when querying active data.",
      "Encrypted access to archived data for better security.",
      "Reduction in data compression requirements.",
      "Additional options for immediate data recovery in case of accidental deletion."
    ],
    correta: 0,
    explicacao: "By reducing the size of the tables in the main catalog, database queries become faster, which directly improves the application's responsiveness for the end user.",
    tema: "Best Practices"
  },
  {
    texto: "How can inadequate archiving frequency affect application performance?",
    opcoes: [
      "It ensures that archived data is never accessed by unauthorized users.",
      "It speeds up the indexing process unnecessarily.",
      "It leads to a slowdown of the primary catalog due to excessive data volume.",
      "It prevents new data from being written to the database."
    ],
    correta: 2,
    explicacao: "If archiving is not done frequently enough, the primary tables grow too large, causing indexes to be less efficient and queries to take longer to execute.",
    tema: "Data"
  },
  {
    texto: "What is incorrect about Automatic Activities in a Process (BPT)?",
    opcoes: [
      "They cannot be scheduled to run at a specific time.",
      "They do not have On Callback actions.",
      "They are only executed when a success condition is met in the previous activity.",
      "They are executed asynchronously by the OutSystems Deployment Controller service."
    ],
    correta: 0,
    explicacao: "Automatic Activities are designed to run as soon as they are reached in the flow, but they are managed by the scheduler and can be retried or delayed if necessary.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "When building a SQL query (Advanced SQL), why is it a best practice to create a specific output structure with only the necessary attributes?",
    opcoes: [
      "Because the platform cannot automatically optimize SQL queries to fetch only the required attributes like it does with Aggregates.",
      "To allow the use of the 'SELECT *' statement without affecting performance.",
      "To ensure the query is compatible with all types of external databases.",
      "Because it is mandatory for the platform to compile the module without errors."
    ],
    correta: 0,
    explicacao: "Unlike Aggregates, the platform does not optimize 'Advanced SQL' queries. If you select all columns but only use two, the database still transfers all data. Creating a specific structure ensures only the necessary data is retrieved.",
    tema: "Queries"
  },
  {
    texto: "Regarding the 'Expand Inline' property in a SQL Query parameter, which of the following is true?",
    opcoes: [
      "It should be used for all parameters to ensure maximum flexibility.",
      "It allows you to dynamically change parts of the SQL statement, such as a WHERE clause or an ORDER BY.",
      "It automatically protects the query against any type of SQL Injection attack.",
      "It is used to transform a list into a single string without needing manual processing."
    ],
    correta: 1,
    explicacao: "The 'Expand Inline' property allows the parameter's content to be treated as part of the SQL command itself, enabling the creation of dynamic clauses.",
    tema: "Queries"
  },
  {
    texto: "What happens if a developer changes the Data Type of a Site Property that is being used in several modules?",
    opcoes: [
      "The platform automatically updates all references and converts existing values.",
      "A compilation error will occur in all consumer modules until they are refreshed and republished.",
      "The Site Property will lose its 'Effective Value' in Service Center, returning to the default value.",
      "The change is only allowed if the Site Property is not marked as Public."
    ],
    correta: 1,
    explicacao: "Changing a signature (like a data type) of a public element causes broken references in consumer modules. They must be updated to recognize the new type.",
    tema: "Logic"
  },
  {
    texto: "In a 'Light Process' (BPT), which of the following statements is correct?",
    opcoes: [
      "It supports multiple execution paths and complex decision activities.",
      "It is optimized for high-volume, simple parallel processing with a single automatic activity.",
      "It allows human intervention via 'Wait' or 'Human Activity' widgets.",
      "It has a maximum execution time of 5 minutes, after which it is terminated."
    ],
    correta: 1,
    explicacao: "Light Processes are designed for high performance and scalability, being limited to a single automatic activity and triggered by entity events (CRUD).",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Why is it recommended to use 'Service Actions' instead of 'Server Actions' to achieve loose coupling between modules?",
    opcoes: [
      "Service Actions run faster because they do not use the database transaction.",
      "Service Actions create a weak dependency, meaning changes in the logic do not always require a republish of consumer modules.",
      "Service Actions are the only way to expose logic to mobile applications.",
      "Server Actions cannot be set as Public in Core modules."
    ],
    correta: 1,
    explicacao: "Service Actions work like internal REST services. Since the dependency is at the contract level (interface), changes to the implementation don't break consumers as long as the input/output signature remains the same.",
    tema: "Best Practices"
  },
  {
    texto: "What is the behavior of a 'CommitTransaction' action inside a Loop?",
    opcoes: [
      "It is a best practice to ensure that each record is saved immediately.",
      "It should be avoided unless strictly necessary, as it significantly impacts performance and resource locking.",
      "It automatically closes the current Screen and returns the user to the home page.",
      "It resets the values of all local variables in the Action."
    ],
    correta: 1,
    explicacao: "Each 'CommitTransaction' forces a physical write to the disk and releases/re-acquires locks. Using it inside a loop can slow down processing and cause overhead in the database.",
    tema: "Logic"
  },
  {
    texto: "Regarding the 'On After Fetch' event of an Aggregate, which statement is correct?",
    opcoes: [
      "It is the ideal place to perform complex data formatting or aggregate extra data before displaying it on the screen.",
      "It runs on the server before the data is sent to the client browser.",
      "It is triggered every time the user scrolls a list (Lazy Load).",
      "It is used to define the visual styles of the widgets that display the data."
    ],
    correta: 0,
    explicacao: "The 'On After Fetch' is a client-side event that runs immediately after the data arrives from the server, allowing for post-processing of the results.",
    tema: "Screens"
  },
  {
    texto: "A developer needs to ensure that an 'Advanced SQL' query does not return more than 50 records to save memory. What is the best approach?",
    opcoes: [
      "Use the 'Max. Records' property of the SQL tool.",
      "Manually add a 'TOP 50' or 'OFFSET/FETCH' clause to the SQL statement depending on the database engine.",
      "Use a ListFilter after the query is executed to keep only the first 50 items.",
      "It is not possible to limit records in Advanced SQL; you must use an Aggregate for this."
    ],
    correta: 1,
    explicacao: "The 'Max. Records' property in Advanced SQL only informs the platform how many records to fetch into memory, but to optimize the database execution, the developer must manually include the limitation in the SQL syntax.",
    tema: "Queries"
  },
  {
    texto: "What is the risk of using 'Session Variables' to store large amounts of data?",
    opcoes: [
      "Session data is public and can be read by any user of the application.",
      "The session is stored on the server (RAM or Database), and large volumes of data can degrade overall server performance and scalability.",
      "Session variables are lost every time the user navigates between screens.",
      "There is no risk, as OutSystems automatically compresses session data."
    ],
    correta: 1,
    explicacao: "Since sessions consume server resources, storing large objects or lists in session variables can lead to high memory consumption and impact all users on the same front-end.",
    tema: "Best Practices"
  },
  {
    texto: "In the 'Compare and Merge' process, what does it mean when a 'Conflict' is detected?",
    opcoes: [
      "Two developers deleted the same module at the same time.",
      "The same element was modified in both the local version and the version currently published on the server.",
      "The platform found a circular dependency between the modules being merged.",
      "The developer does not have sufficient permissions to merge changes."
    ],
    correta: 1,
    explicacao: "A conflict occurs when Service Studio cannot automatically determine which change to keep because the same property or logic was altered by different people/versions.",
    tema: "Work in Teams"
  },
  {
    texto: "What is the recommended approach for handling a scenario where a Screen needs to display data from an Aggregate and also perform a heavy calculation on that data before showing it?",
    opcoes: [
      "Perform the calculation directly in an Expression widget on the screen.",
      "Use the 'On After Fetch' event of the Aggregate to execute a Client Action that performs the calculation.",
      "Move the Aggregate and the calculation logic into a Data Action to process everything on the server side.",
      "Create a Timer to perform the calculation and store the result in a Database Entity."
    ],
    correta: 2,
    explicacao: "Using a Data Action is more efficient for heavy processing because it keeps the logic on the server, sending only the final result to the client, which avoids multiple data transfers and improves performance.",
    tema: "Screens"
  },
  {
    texto: "Regarding the 'Public' property of an Element (Action, Entity, etc.), what happens when it is set to 'No'?",
    opcoes: [
      "The element can only be used by modules within the same Application.",
      "The element is only accessible and visible within the module where it was defined.",
      "The element can be seen by other modules but cannot be executed.",
      "The element is deleted from the database upon the next publication."
    ],
    correta: 1,
    explicacao: "When an element is not public, it is encapsulated within its own module, promoting modularity and preventing external dependencies on internal logic.",
    tema: "Best Practices"
  },
  {
    texto: "When integrating with an External Database using Integration Studio, what is the role of the 'External Name' property?",
    opcoes: [
      "It defines the name that the entity will have inside Service Studio.",
      "It represents the real name of the table or view as it exists in the external database engine.",
      "It is a mandatory alias used only for documentation purposes.",
      "It defines the connection string used to reach the database."
    ],
    correta: 1,
    explicacao: "The 'External Name' maps the OutSystems Entity to the specific physical table or view in the external system, allowing the platform to generate the correct SQL queries.",
    tema: "External Databases"
  },
  {
    texto: "In an Aggregate, what is the effect of using a 'Left Join' (With or Without) between two entities?",
    opcoes: [
      "It only returns records where there is a match in both entities.",
      "It returns all records from the first entity, regardless of whether there is a match in the second entity.",
      "It returns all records from both entities, creating a Cartesian product.",
      "It is only used when the entities are from different database catalogs."
    ],
    correta: 1,
    explicacao: "A 'Left Join' ensures that all primary records (left side) are displayed, and matching data from the joined entity is shown where available, otherwise appearing as null/empty.",
    tema: "Queries"
  },
  {
    texto: "Why is it important to use 'CheckRole' in the 'Server Actions' that handle sensitive data, even if the UI already hides the buttons based on roles?",
    opcoes: [
      "Because Client-side role checks are only for UI/UX and can be bypassed by technically skilled users.",
      "Because 'CheckRole' on the server side automatically encrypts the database communication.",
      "It is not necessary if the 'Visible' property of the buttons is already configured.",
      "To improve the application's performance by reducing the number of server calls."
    ],
    correta: 0,
    explicacao: "Security must be implemented in layers. Hiding a button prevents accidental access, but server-side validation is the only way to truly secure the data against unauthorized API calls or manipulated requests.",
    tema: "Best Practices"
  },
  {
    texto: "What is the primary purpose of the 'Service Center' in the OutSystems ecosystem?",
    opcoes: [
      "To design the user interface and business logic of the modules.",
      "To manage environment configurations, monitor logs, and manage dependencies between modules.",
      "To edit CSS and JavaScript files directly in the browser.",
      "To manage the life cycle of mobile applications in the App Store or Google Play."
    ],
    correta: 1,
    explicacao: "Service Center is the central administration console for an OutSystems environment, used for monitoring, configuration, and troubleshooting.",
    tema: "Troubleshooting"
  },
  {
    texto: "Regarding 'Structures' in OutSystems, which statement is true?",
    opcoes: [
      "Structures are used to store data permanently in the database.",
      "Structures are in-memory data definitions used to hold complex data types, often used in APIs or complex logic.",
      "Structures cannot contain other structures as attributes.",
      "Changing a Structure automatically updates all tables in the database."
    ],
    correta: 1,
    explicacao: "Structures do not have a physical representation in the database; they are used to define the shape of data in memory during the execution of the application.",
    tema: "Data"
  },
  {
    texto: "How does the platform handle 'Circular Dependencies' during the publication of a Solution?",
    opcoes: [
      "It prevents the publication of the solution entirely until the cycle is broken.",
      "It attempts to publish the modules in multiple passes to resolve references, but may still show warnings.",
      "It automatically merges the modules involved in the cycle into a single module.",
      "It ignores the dependencies and publishes the modules in alphabetical order."
    ],
    correta: 1,
    explicacao: "While the platform tries to handle cycles during publication, circular dependencies are an architectural flaw that makes maintenance difficult and should be avoided.",
    tema: "Best Practices"
  },
  {
    texto: "What is the main advantage of using 'External Entities' in OutSystems?",
    opcoes: [
      "They are always faster than local entities.",
      "They allow OutSystems applications to work with data from legacy systems or external databases without migrating the data.",
      "They do not count towards the platform's database storage limit.",
      "They automatically create a REST API for the external system."
    ],
    correta: 1,
    explicacao: "External entities provide a way to integrate and manipulate data residing in other systems as if they were native OutSystems entities.",
    tema: "External Databases"
  },
  {
    texto: "In a 'Screen Aggregate', what does the 'Max Records' property define?",
    opcoes: [
      "The total number of records that exist in the database table.",
      "The maximum number of records that will be fetched from the database in a single request.",
      "The maximum number of attributes that can be returned by the query.",
      "The maximum number of users that can access the data simultaneously."
    ],
    correta: 1,
    explicacao: "The 'Max Records' property is used to limit the result set, which is essential for implementing pagination and improving performance.",
    tema: "Queries"
  },
  {
    texto: "In a Screen with a List widget, what is the impact of setting the 'Line Count' property to a very high value?",
    opcoes: [
      "It improves the performance of the screen because all data is pre-rendered.",
      "It can significantly degrade performance, as the browser will have to render many DOM elements at once, leading to high memory consumption.",
      "The platform automatically ignores this property and uses a default value of 10.",
      "It only affects the visual size of the list, not the number of records fetched."
    ],
    correta: 1,
    explicacao: "Rendering too many elements in the DOM at once is a common cause of performance issues in web applications. It is better to use pagination or 'on scroll' loading.",
    tema: "Screens"
  },
  {
    texto: "Regarding 'Exception Handlers', what happens if an exception is thrown in a Server Action and there is no handler defined in that specific action?",
    opcoes: [
      "The application crashes and displays a generic server error to the user.",
      "The exception is propagated to the calling action, which will then check for its own exception handlers.",
      "The platform automatically creates a record in the database and continues the flow as if nothing happened.",
      "The transaction is immediately committed before the action terminates."
    ],
    correta: 1,
    explicacao: "Exceptions bubble up through the call stack. If a child action doesn't handle an error, the parent action is responsible for catching it.",
    tema: "Logic"
  },
  {
    texto: "What is the function of the 'Aborted' property in a BPT (Business Process Technology) Process?",
    opcoes: [
      "It marks the process as completed with success.",
      "It indicates that the process was manually or automatically terminated before finishing all its activities.",
      "It is used to pause the process until a certain date.",
      "It defines that the process should be restarted from the first activity."
    ],
    correta: 1,
    explicacao: "The 'Aborted' state is used when a process is cancelled, preventing any further activities from being executed within that instance.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "When using the 'SQL' tool, what is the purpose of the '{Entity}' syntax?",
    opcoes: [
      "It is used to comment out a line of SQL code.",
      "It tells the platform to replace it with the physical name of the table in the database, ensuring compatibility across environments.",
      "It is used to define a temporary variable within the query.",
      "It is a mandatory prefix for all SQL reserved keywords."
    ],
    correta: 1,
    explicacao: "Using curly braces allows the platform to map the entity to the correct table name, which might change depending on the environment or catalog schema.",
    tema: "Queries"
  },
  {
    texto: "Which of the following elements can be used as a 'Consumer' of a Service Action?",
    opcoes: [
      "Only modules within the same environment.",
      "Any OutSystems module, regardless of the application it belongs to.",
      "Only modules that share the same User Provider.",
      "Any external application through a standard REST endpoint."
    ],
    correta: 1,
    explicacao: "Service Actions are accessible to other OutSystems modules in the same environment, creating a weak dependency between them.",
    tema: "Best Practices"
  },
  {
    texto: "In an Aggregate, what is the 'Group By' feature used for?",
    opcoes: [
      "To sort the records in alphabetical order.",
      "To combine records with identical values in specific columns and perform calculations like Sum, Count, or Average on them.",
      "To create a visual grouping of widgets on the screen.",
      "To limit the access of certain users to a specific set of records."
    ],
    correta: 1,
    explicacao: "Grouping is fundamental for generating reports and statistics directly from the database query.",
    tema: "Queries"
  },
  {
    texto: "What is a 'Cold Fetch' in the context of Screen data optimization?",
    opcoes: [
      "When the data is retrieved from the browser's local cache without a server call.",
      "When the data is requested from the server for the first time, requiring a full query execution and transfer.",
      "When the data is fetched using an encrypted connection.",
      "When an Aggregate is set to 'Fetch: Only on Demand'."
    ],
    correta: 1,
    explicacao: "A 'Cold Fetch' implies the cost of a full round trip and database execution, whereas subsequent requests might benefit from caching mechanisms.",
    tema: "Screens"
  },
  {
    texto: "Regarding 'Data Actions', which statement is true about their execution?",
    opcoes: [
      "Multiple Data Actions on a screen always run sequentially in alphabetical order.",
      "Data Actions run on the client side and can access local variables directly.",
      "Data Actions on a screen run in parallel on the server, which can reduce the total time needed to fetch data.",
      "A Data Action cannot return more than one output parameter."
    ],
    correta: 2,
    explicacao: "Running Data Actions in parallel is an advantage of Reactive and Mobile apps, as it speeds up the screen initialization.",
    tema: "Screens"
  },
  {
    texto: "What happens if you delete an Attribute from an Entity that already contains data in the database?",
    opcoes: [
      "The column is immediately dropped from the physical table, and the data is lost.",
      "The attribute is marked as inactive in Service Studio, but the column remains in the database until a manual cleanup is performed.",
      "The platform prevents the publication if there is any data in that column.",
      "The data is automatically moved to an archive table."
    ],
    correta: 1,
    explicacao: "OutSystems follows a 'soft-delete' approach for database schema changes to prevent accidental data loss. The column remains in the database engine.",
    tema: "Data"
  },
  {
    texto: "In the 'Application Life Cycle Management' (LifeTime), what is a 'Hotfix' deployment?",
    opcoes: [
      "A scheduled deployment that occurs once a month.",
      "An urgent deployment of a specific fix to a production environment to resolve a critical issue.",
      "A deployment that only updates the CSS styles of the application.",
      "The process of reverting an environment to a previous state."
    ],
    correta: 1,
    explicacao: "Hotfixes are critical patches applied outside the normal release cycle to minimize downtime or fix security vulnerabilities.",
    tema: "Best Practices"
  },
  {
    texto: "What is the behavior of a 'Server Action' when an 'Exception Handler' with the 'Abort Transaction' property set to 'Yes' is triggered?",
    opcoes: [
      "The platform saves the changes made before the exception and only aborts the subsequent steps.",
      "The entire database transaction is rolled back, undoing all changes made since the start of the request (or the last commit).",
      "The transaction is kept open, and the developer must manually call 'AbortTransaction'.",
      "Only the changes made within the specific action where the exception occurred are undone."
    ],
    correta: 1,
    explicacao: "When 'Abort Transaction' is set to 'Yes', the system ensures data integrity by reverting all database operations performed during that transaction.",
    tema: "Logic"
  },
  {
    texto: "In a Reactive Web App, where is the logic of a 'Client Action' executed?",
    opcoes: [
      "On the Web Server (IIS).",
      "Directly in the end-user's browser using JavaScript.",
      "In the database as a stored procedure.",
      "In a dedicated OutSystems cloud service for asynchronous logic."
    ],
    correta: 1,
    explicacao: "Client Actions are compiled into JavaScript and run locally in the user's browser, which provides a faster and more responsive experience.",
    tema: "Logic"
  },
  {
    texto: "What is the main difference between an 'Aggregate' and a 'Data Action' on a screen?",
    opcoes: [
      "Aggregates can only fetch data from one entity, while Data Actions can fetch from multiple.",
      "Aggregates are optimized for simple database queries, while Data Actions allow for complex logic and multiple outputs.",
      "Data Actions are faster than Aggregates because they don't run on the server.",
      "Aggregates can only be used in Mobile Apps, and Data Actions in Reactive Web Apps."
    ],
    correta: 1,
    explicacao: "Aggregates are easier to use and highly optimized for basic CRUD operations, whereas Data Actions provide the flexibility to run complex server-side code (loops, multiple queries, etc.).",
    tema: "Screens"
  },
  {
    texto: "When using 'External Entities', what happens if the external database table structure is changed without updating the extension in Integration Studio?",
    opcoes: [
      "The platform automatically detects the change and updates the module during the next publish.",
      "Runtime errors will likely occur when the application tries to access or map the modified columns.",
      "The application will continue to work perfectly using a cached version of the schema.",
      "Service Studio will prevent any user from logging into the application."
    ],
    correta: 1,
    explicacao: "The mapping between OutSystems and the external database is static. If the external schema changes, the extension must be refreshed to avoid runtime mismatches.",
    tema: "External Databases"
  },
  {
    texto: "Regarding the 'Security' of an application, what is the 'User Provider' used for?",
    opcoes: [
      "To define which database engine the application will use.",
      "To share user sessions and end-user information between different modules and applications.",
      "To provide the CSS themes for the login screens.",
      "To manage the deployment permissions of the developers in Service Center."
    ],
    correta: 1,
    explicacao: "The User Provider module acts as the central authority for authentication, allowing single sign-on (SSO) across multiple modules.",
    tema: "Best Practices"
  },
  {
    texto: "In a SQL query, what is the 'IN' operator used for?",
    opcoes: [
      "To join two tables together based on a primary key.",
      "To filter a query based on a list of specific values.",
      "To insert a new record into the database.",
      "To check if a column value is null."
    ],
    correta: 1,
    explicacao: "The 'IN' operator allows you to specify multiple values in a WHERE clause, making it easier to filter data against a set of IDs or strings.",
    tema: "Queries"
  },
  {
    texto: "What is the purpose of the 'On Initialize' event on a Screen?",
    opcoes: [
      "To run logic after the screen has been completely rendered on the browser.",
      "To set default values for variables or perform logic before the screen starts fetching data and rendering.",
      "To redirect the user to a different application before the login.",
      "To clear the browser's cache every time the user visits the page."
    ],
    correta: 1,
    explicacao: "OnInitialize is the first event to trigger, making it ideal for preparation logic that doesn't depend on DOM elements.",
    tema: "Screens"
  },
  {
    texto: "Regarding 'Timers', what is the 'Next Run' property in Service Center?",
    opcoes: [
      "A read-only log of when the timer last finished its execution.",
      "The scheduled time for the next automatic execution, which can be manually overridden by an administrator.",
      "The duration in seconds that the timer is allowed to run before a timeout.",
      "The number of times the timer has failed in the last 24 hours."
    ],
    correta: 1,
    explicacao: "Service Center allows administrators to monitor and reschedule timer executions to avoid peak hours or resolve processing backlogs.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the 'Output Structure' of an Advanced SQL tool?",
    opcoes: [
      "A mandatory list of all entities used in the query.",
      "A definition of the columns and data types that the query will return, which must match the SELECT statement.",
      "A visual diagram of the database relationships.",
      "A temporary table created in the database during execution."
    ],
    correta: 1,
    explicacao: "Since the platform cannot guess what a custom SQL query returns, the developer must provide a structure (Entity or Structure) to map the results.",
    tema: "Queries"
  },
  {
    texto: "In OutSystems, what is a 'Module'?",
    opcoes: [
      "A collection of applications bundled together for deployment.",
      "The smallest unit of development and deployment, containing logic, data, and UI elements.",
      "A specific server in the infrastructure where the database is hosted.",
      "A user role that grants administrative access to LifeTime."
    ],
    correta: 1,
    explicacao: "Modules are the building blocks of an application. They contain the implementation of specific features and can reference or be referenced by other modules.",
    tema: "Best Practices"
  },
  {
    texto: "What is the primary function of the 'Deployment Controller' service in an OutSystems infrastructure?",
    opcoes: [
      "To monitor the health of the database in real-time.",
      "To compile the visual models (OML files) into standard .NET code and deploy them to the front-end servers.",
      "To manage the login and logout sessions of end-users.",
      "To provide a visual interface for editing CSS and JavaScript files."
    ],
    correta: 1,
    explicacao: "The Deployment Controller is responsible for transforming the visual models designed in Service Studio into executable code on the web servers.",
    tema: "Best Practices"
  },
  {
    texto: "In the context of 'BPT' (Business Process Technology), what is a 'Human Activity'?",
    opcoes: [
      "An activity that is automatically executed by the system without intervention.",
      "A step in the process that requires an action or decision from an end-user, usually through a task box or a specific screen.",
      "A JavaScript function that runs in the browser to improve the user interface.",
      "A scheduled task that runs every night to clean up old process data."
    ],
    correta: 1,
    explicacao: "Human Activities represent tasks that people must perform, such as approvals or data entry, integrating human workflows into the automated process.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Regarding the 'Preparation' (in Traditional Web) or 'Data Actions' (in Reactive), why is it a bad practice to perform long-running logic during screen initialization?",
    opcoes: [
      "Because the platform will automatically cancel any request that takes more than 1 second.",
      "Because it blocks the screen rendering or makes the user wait with a loading spinner for too long, degrading the User Experience (UX).",
      "Because long-running logic can only be executed within Timers.",
      "Because it consumes all the available licenses of the OutSystems environment."
    ],
    correta: 1,
    explicacao: "Fast screen initialization is key to a good UX. Heavy logic should be optimized, moved to asynchronous processes, or handled with lazy loading strategies.",
    tema: "Best Practices"
  },
  {
    texto: "What is the purpose of the 'Entity Identifier' in OutSystems?",
    opcoes: [
      "To define the icon that represents the entity in the database diagram.",
      "To act as the Primary Key, uniquely identifying each record within the entity.",
      "To store the name of the user who created the record.",
      "To limit the number of records that can be stored in the entity."
    ],
    correta: 1,
    explicacao: "The Identifier is a mandatory attribute (usually an AutoNumber integer) that ensures each record can be specifically referenced and linked to other entities via Foreign Keys.",
    tema: "Data"
  },
  {
    texto: "When using a 'Rest API' integration, what does the 'On Before Request' callback allow a developer to do?",
    opcoes: [
      "Modify the request data, headers, or URL before it is sent to the external service.",
      "Cancel the request if the server is taking too long to respond.",
      "Automatically retry the request if it fails with a 500 error.",
      "Log the response received from the server into a custom database table."
    ],
    correta: 0,
    explicacao: "The 'On Before Request' is useful for adding authentication tokens, custom headers, or transforming the payload to match the external service's requirements.",
    tema: "REST APIs"
  },
  {
    texto: "What is the difference between 'Client Side Validation' and 'Server Side Validation' in a Form?",
    opcoes: [
      "There is no difference; the platform handles both equally.",
      "Client side provides immediate feedback to the user, while server side is the final security check to ensure data integrity.",
      "Server side validation is only possible if the application is offline.",
      "Client side validation is mandatory for the application to be published."
    ],
    correta: 1,
    explicacao: "Validation should happen on both sides: the client side improves UX, while the server side protects the system against malicious or malformed data.",
    tema: "Screens"
  },
  {
    texto: "Regarding 'Indexes' in a database entity, which statement is correct?",
    opcoes: [
      "Adding an index to every attribute is a best practice to make the application faster.",
      "Indexes speed up data retrieval (SELECT) but can slightly slow down data insertion and updates (INSERT/UPDATE).",
      "Indexes are only used to ensure that a value is unique.",
      "The platform does not support custom indexes; they must be created manually in the database."
    ],
    correta: 1,
    explicacao: "Indexes are a trade-off: they provide faster queries but require the database to maintain additional data structures during writes.",
    tema: "Data"
  },
  {
    texto: "What is the function of the 'Service Studio' 'Debugger'?",
    opcoes: [
      "To automatically fix all logic errors in the code.",
      "To pause the execution of the application at specific breakpoints to inspect variable values and the logic flow.",
      "To measure the network speed between the client and the server.",
      "To simulate different types of mobile devices and screen resolutions."
    ],
    correta: 1,
    explicacao: "The Debugger is the primary tool for troubleshooting and understanding how the logic behaves during runtime.",
    tema: "Troubleshooting"
  },
  {
    texto: "In an OutSystems environment, what does '1-Click Publish' do?",
    opcoes: [
      "It only saves the changes to the developer's local machine.",
      "It uploads the module, analyzes dependencies, compiles the code, updates the database schema, and deploys the new version.",
      "It sends an email to the administrator requesting permission to deploy.",
      "It deletes the previous version of the module and starts a new one from scratch."
    ],
    correta: 1,
    explicacao: "1-Click Publish is the automated process that handles all the complex steps of deploying a web application in one go.",
    tema: "Best Practices"
  },
  {
    texto: "Which of the following is a characteristic of a 'Static Entity'?",
    opcoes: [
      "Its records can be modified by end-users at runtime through a screen.",
      "It is used to store a fixed set of values (like statuses or types) that are known at design time.",
      "It does not have an Identifier attribute.",
      "It cannot be referenced by other entities in the database."
    ],
    correta: 1,
    explicacao: "Static Entities act like enumerations in other languages, providing a way to manage constants with the benefit of referential integrity in the database.",
    tema: "Data"
  },
  {
    texto: `Consider the following image that shows the dependencies between three modules: A, B, and E. Which statement is correct?<br>
<img src="imagens/blockmodules.png" alt="module dependencies" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "There is a circular dependency between Modules A, B, and E, which can cause maintenance problems and deployment cycles.",
      "A Solution is the only way to publish all modules without reference warnings.",
      "Publishing a Solution will generate an infinite loop in the database.",
      "Publishing a new version of Module A will never impact Module B or E."
    ],
    correta: 0,
    explicacao: "Circular dependencies (A -> B -> E -> A) are an architectural anti-pattern. They make the system hard to maintain and can lead to unexpected behavior during deployments.",
    tema: "Best Practices"
  },
  {
    texto: `Looking at the Compare and Merge window below, what will happen if you click the 'Merge' button with the current selections?<br>
<img src="imagens/merge.png" alt="merge window" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "Your version will lose the CheckSuperUserRole action and keep your versions of the RefreshCaseTable action.",
      "The platform will automatically create a third version combining both changes into a new module.",
      "The publish will fail because there are unresolved conflicts in the Screen 'Company_Show'.",
      "All changes from the server version will be ignored, and only your local changes will be kept."
    ],
    correta: 0,
    explicacao: "In the Merge dialog, the checkboxes you select determine which implementation (yours or the server's) will prevail in the final version of the module.",
    tema: "Work in Teams"
  },
  {
    texto: "When a Timer is set to run 'When Published', what is the expected behavior?",
    opcoes: [
      "The Timer will run every time any user logs into the application.",
      "The Timer will be triggered automatically as soon as the 1-Click Publish process finishes successfully.",
      "The Timer will only run if the administrator manually clicks 'Run Now' in Service Center.",
      "The Timer will run every hour to check if there are new versions of the module."
    ],
    correta: 1,
    explicacao: "The 'Schedule' property set to 'When Published' is useful for data migrations or bootstrap logic that needs to execute immediately after code changes are deployed.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the result of a 'SQL Join' between two entities where the 'Only With' (Inner Join) condition is not met for some records?",
    opcoes: [
      "The query returns a runtime error.",
      "The records that do not meet the condition are excluded from the result set.",
      "The query returns the records from the first entity with null values for the second entity.",
      "The platform automatically changes the join type to 'With or Without' (Left Join)."
    ],
    correta: 1,
    explicacao: "An Inner Join (Only With) only includes records that have matching values in both entities. Records without a match are discarded from the output.",
    tema: "Queries"
  },
  {
    texto: `A developer created the following logic to handle an Excel upload. Which statement correctly identifies a potential issue?<br>
<img src="imagens/logic_excel.png" alt="excel logic" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "The use of a loop to insert records one by one without 'CommitTransaction' will cause a timeout if the file is very large.",
      "Excel files cannot be read directly in Server Actions.",
      "The 'Record List to Excel' widget should be used instead of 'Excel to Record List'.",
      "The transaction will automatically commit every 10 records, so there is no risk of timeout."
    ],
    correta: 0,
    explicacao: "Processing large files in a single transaction without time management can exceed the server's request timeout limit. Best practice involves batching and using Timers.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Regarding the 'On Render' event, which of the following actions should be avoided?",
    opcoes: [
      "Updating a screen variable that triggers a re-render, potentially causing an infinite loop.",
      "Using JavaScript to initialize a third-party UI library.",
      "Reading the value of a local variable to decide which container to show.",
      "Adding a CSS class to a widget dynamically."
    ],
    correta: 0,
    explicacao: "Since 'On Render' runs every time the screen changes, modifying a variable that causes a refresh inside this event will trigger the event again, creating a loop.",
    tema: "Screens"
  },
  {
    texto: "In a 'Service Action', how is the 'Transaction' handled compared to a 'Server Action'?",
    opcoes: [
      "It uses the same transaction as the caller.",
      "It starts its own transaction; if it fails, it doesn't automatically roll back the caller's transaction.",
      "Service Actions do not support database transactions.",
      "The transaction is only committed if the caller explicitly calls 'CommitTransaction'."
    ],
    correta: 1,
    explicacao: "Service Actions are REST-based under the hood. They run in a separate process and transaction from the caller, which is key for loose coupling.",
    tema: "Best Practices"
  },
  {
    texto: "What is the purpose of the 'Exposed Process Events' property in an Entity?",
    opcoes: [
      "To allow the entity to be used as a source for a 'Light Process' or a standard BPT process.",
      "To encrypt the data of the entity automatically.",
      "To create a log of all manual changes made to the records in Service Center.",
      "To allow other applications to read the entity's data via OData."
    ],
    correta: 0,
    explicacao: "Exposing process events allows the BPT engine to 'listen' for inserts or updates on that table and trigger process activities automatically.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Which of the following is a limitation of 'Light Processes'?",
    opcoes: [
      "They cannot have 'Human Activities' or 'Wait' activities.",
      "They can only run once per day.",
      "They cannot access the database.",
      "They only work in Traditional Web applications."
    ],
    correta: 0,
    explicacao: "Light Processes are stripped-down versions of BPT designed for speed. They only support a single Automatic Activity to ensure high-throughput execution.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "Why is it important to set the 'Is Active' attribute to 'False' instead of deleting a record in some business scenarios?",
    opcoes: [
      "To maintain referential integrity (historical data) while hiding the record from the current application flow.",
      "Because deleting records is not possible in OutSystems.",
      "To save space in the database, as inactive records are compressed.",
      "Because inactive records do not count towards the 'Database Capacity' limit."
    ],
    correta: 0,
    explicacao: "Soft-delete (Is Active = False) is a common pattern to preserve audit trails and avoid breaking foreign key relationships in other tables.",
    tema: "Data"
  },
  {
    texto: `Analyze the logic flow in the image below, which handles a customer registration. What is the main security risk identified?<br>
<img src="imagens/logic_security.png" alt="security logic flow" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "The flow does not check if the user has the 'Manager' role before executing the CreateCustomer action on the server side.",
      "The use of a Client Action to start the process is inherently insecure.",
      "The flow uses a local variable to store the customer name temporarily.",
      "The exception handler is missing an 'Audit' log to record the failure."
    ],
    correta: 0,
    explicacao: "Security must be validated on the server. Even if the UI hides the registration button, a malicious user could still call the Server Action if there is no internal 'CheckRole' validation.",
    tema: "Best Practices"
  },
  {
    texto: "When a REST API returns a '401 Unauthorized' status code, what does it typically mean?",
    opcoes: [
      "The server is down for maintenance.",
      "The request was successful, but there is no data to return.",
      "The authentication credentials provided are invalid or missing.",
      "The URL of the endpoint is incorrect."
    ],
    correta: 2,
    explicacao: "The 401 error specifically refers to authentication issues. It means the system does not know who the user is or the provided token is invalid.",
    tema: "REST APIs"
  },
  {
    texto: `Consider the following architecture diagram with four layers. In which layer should a 'Core Entity' that is shared across multiple applications be placed?<br>
<img src="imagens/architecture_layers.png" alt="4 layers architecture" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "End-User Layer",
      "Core Services Layer",
      "Foundation Layer",
      "Orchestration Layer"
    ],
    correta: 1,
    explicacao: "Core Entities represent business concepts and should reside in the Core Services layer to be reusable and maintain business rules consistency across the ecosystem.",
    tema: "Best Practices"
  },
  {
    texto: "What is the primary purpose of using 'Service Actions' in a large-scale OutSystems factory?",
    opcoes: [
      "To reduce the number of database tables.",
      "To minimize the impact of changes (breaking changes) and reduce deployment times by using weak dependencies.",
      "To allow the execution of logic in offline mode.",
      "To replace all Client Actions in Reactive Web Apps."
    ],
    correta: 1,
    explicacao: "Service Actions provide loose coupling. When a Service Action is modified, the consumer modules do not necessarily need to be republished immediately unless the interface changes.",
    tema: "Best Practices"
  },
  {
    texto: "What happens if a 'Timer' execution exceeds the 'Timeout' defined in its properties?",
    opcoes: [
      "The platform restarts the server automatically.",
      "The execution is aborted, and all database changes in that transaction are rolled back.",
      "The timer continues to run until it finishes, but a warning is logged in Service Center.",
      "The platform creates a copy of the timer to run the remaining logic in parallel."
    ],
    correta: 1,
    explicacao: "A timeout is a safety mechanism. When reached, the transaction is aborted to free up system resources, and no changes from that specific run are saved.",
    tema: "Asynchronous Processes"
  },
  {
    texto: `A developer is using the 'Compare and Merge' tool and sees a red icon next to a Screen Action. What does this icon indicate?<br>
<img src="imagens/merge_conflict_icon.png" alt="conflict icon" style="max-width:100%;margin:10px 0"></img><br>`,
    opcoes: [
      "The action was deleted in both versions.",
      "There is a conflict that cannot be merged automatically because the same logic was changed in both versions.",
      "The action is public and cannot be modified during a merge.",
      "The action contains a syntax error that prevents the merge."
    ],
    correta: 1,
    explicacao: "Red icons in the merge tool represent conflicts where human intervention is required to decide which version of the logic should be kept.",
    tema: "Work in Teams"
  },
  {
    texto: "Regarding the 'On After Fetch' event of a Data Action, which statement is true?",
    opcoes: [
      "It is used to modify the request headers before sending them to the database.",
      "It is a client-side event that runs after the Data Action finishes its server-side execution and returns the results.",
      "It only triggers if the query returns an error.",
      "It is used to define the database indexes for the results."
    ],
    correta: 1,
    explicacao: "This event allows for post-processing of data (like filtering or sorting on the client) once it has arrived from the server.",
    tema: "Screens"
  },
  {
    texto: "What is a 'Site Property' usually used for?",
    opcoes: [
      "To store user-specific preferences like a profile picture.",
      "To store environment-wide configurations, such as an API endpoint URL or a feature toggle.",
      "To store large binary files like PDFs.",
      "To store sensitive passwords that need to be encrypted at the database level."
    ],
    correta: 1,
    explicacao: "Site Properties are global variables for a module that can be adjusted in Service Center per environment without code changes.",
    tema: "Logic"
  },
  {
    texto: "In an Aggregate, what is the 'New Attribute' feature used for?",
    opcoes: [
      "To add a new physical column to the database entity.",
      "To create a calculated value (e.g., Price * Quantity) that exists only in the query result set.",
      "To rename an existing attribute of the entity.",
      "To create a foreign key relationship between two entities."
    ],
    correta: 1,
    explicacao: "Calculated attributes in Aggregates are processed by the database engine, making them more efficient than calculating values in a loop in memory.",
    tema: "Queries"
  },
  {
    texto: "What is the correct way to handle a 'User Not Logged In' exception in a Reactive Web App?",
    opcoes: [
      "The platform automatically handles it by showing a generic error message.",
      "Redirect the user to the Login screen within a Global Exception Handler.",
      "Ignore the exception and let the user continue using the cached data.",
      "Create a Timer to log the user in automatically after 5 seconds."
    ],
    correta: 1,
    explicacao: "The Global Exception Handler is the best place to intercept authentication errors and redirect the user to the login page consistently.",
    tema: "Logic"
  },
  {
    texto: "Which of the following scenarios is a valid use case for a 'Light Process' in OutSystems?",
    opcoes: [
      "A complex approval workflow with multiple human decision steps and notifications.",
      "A high-volume integration scenario where every time a record is inserted into an entity, a set of calculations must be performed and synced with an external system.",
      "A screen-based process that guides the user through a multi-step form wizard.",
      "A scheduled batch job that runs once a week to generate PDF reports."
    ],
    correta: 1,
    explicacao: "Light Processes are optimized for high-scale, event-driven triggers (like Entity Inserts) that require simple logic without human intervention.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the main advantage of using a 'Service Action' over a 'Server Action' regarding the deployment cycle?",
    opcoes: [
      "Service Actions are automatically published when the consumer module is published.",
      "Service Actions don't require the consumer modules to be republished when the implementation logic changes, as long as the signature remains the same.",
      "Service Actions are faster because they run on the client side.",
      "Service Actions can only be used in the same application, ensuring tighter security."
    ],
    correta: 1,
    explicacao: "Service Actions provide weak dependencies. This 'loose coupling' is essential in large factories to avoid the 'side-effects' of having to republish dozens of consumer modules.",
    tema: "Best Practices"
  },
  {
    texto: "Regarding 'Data Archiving', which statement best describes the 'Purge' strategy?",
    opcoes: [
      "Moving data from the primary database to a secondary 'Archive' database.",
      "The process of permanently deleting old or archived data that is no longer needed to free up storage space.",
      "Compressing the database indexes to improve query performance.",
      "Encrypting sensitive data before it is moved to an external storage."
    ],
    correta: 1,
    explicacao: "Purging is the final stage of data lifecycle management, ensuring that the archive doesn't grow indefinitely and become a performance bottleneck itself.",
    tema: "Best Practices"
  },
  {
    texto: "In a 'Business Process' (BPT), what happens if an Automatic Activity raises an unhandled exception?",
    opcoes: [
      "The process is immediately deleted from the system.",
      "The activity is retried several times with increasing intervals (exponential backoff) before the process execution is suspended.",
      "The platform automatically ignores the error and moves to the next activity.",
      "The entire database is rolled back to the state it was in before the process started."
    ],
    correta: 1,
    explicacao: "BPT has built-in retry mechanisms for automatic activities to handle transient errors, such as temporary database deadlocks or external API unavailability.",
    tema: "Asynchronous Processes"
  },
  {
    texto: "What is the best way to ensure a 'Secret Key' or 'API Password' is not exposed in the application logs?",
    opcoes: [
      "Store it in a Site Property and never use it in a 'LogMessage' action.",
      "Use 'Session Variables' to store the key at runtime.",
      "The platform automatically masks any variable named 'Password' in the logs.",
      "Hardcode the key directly in the JavaScript of the screen."
    ],
    correta: 0,
    explicacao: "Security best practices involve keeping secrets in Site Properties (or secret managers) and ensuring they are never printed to logs or shown in the UI.",
    tema: "Best Practices"
  },
  {
    texto: "Consider an application that needs to display: 1. Basic team info; 2. Player stats; 3. News clips from the last 24h from various external sources. Which solution offers the best performance and UX?",
    opcoes: [
      "Define two Screen Aggregates (Team info and Stats) and create a Data Action for each news source to fetch clips.",
      "Define two Screen Aggregates (Team info and Stats) and a single Data Action to fetch news clips from all sources for the last 24h.",
      "Define one single Data Action to fetch Team info, Stats, and all News clips at once.",
      "Define a Screen Aggregate for Team info, an OnReady handler for Stats, and a Data Action for News."
    ],
    correta: 1,
    explicacao: "The best practice is Option B: use Aggregates for structured data (optimized by the platform) and a single Data Action for the news clips. This avoids redundant calls and keeps the UI fluid by parallelizing the server requests.",
    tema: "Screens"
  }
];

window.perguntas = perguntas; // expõe para o escopo global
console.log("Total de perguntas EN:", perguntas.length);