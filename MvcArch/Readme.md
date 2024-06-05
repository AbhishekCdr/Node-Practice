The MVC architechure pattern turns complex application development into a much more managable process.

MVC =>
MODEL: The backend that contains all the data logic

-> Responsibilities:

> Interact with the database to retrieve, store, and update data.
> Apply business rules and logic.
> Notify the View of any data changes so that the display can be updated.

VIEW: The fontend or graphical user interface (GUI)

-> Responsibilities:

> Render data from the Model to the user.
> Present data in a specific format or layout.
> Send user commands to the Controller (e.g., form submissions, button clicks).

CONTROLLER: Th ebrain of the application that controls how data is displayed.

->Responsibilities:

> Receive input from the View.
> Process user commands.
> Update the Model based on user actions.
> Determine which View should be displayed based on the Model's state.

=>BENEFITS OF MVC

> Separation of Concerns: Each component has a distinct responsibility, making the application easier to manage and scale.
> Reusability: Components can be reused across different parts of the application or even in different projects.
> Maintainability: Changes to one part of the application (e.g., the UI) do not directly affect other parts (e.g., the business logic).
> Testability: The separation of the components makes unit testing easier, as individual parts can be tested in isolation.
