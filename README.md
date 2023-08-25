# Design Decisions
- As per the project structure, it is scaffolded with create-next-app and uses TypeScript, TailwindCSS ESLint.
- With the limited time frame and scope of requirements, I tried to separate out the concerns as much as possible with distinctive folders for pages, components, utility functions and context(for state management).
- The UI has been kept simple yet functional and responsive since we're considering it as a prototype.

# Technical Choices
- I chose the pages directory over the app router while setting up the project, since I'm more familiar with the pages directory and also because app router has been notorious for being not as stable as it was advocated. The simple requirements also played a part.
- Choosing Tailwind was a no-brainer since it was required, but I would have used it anyway since it is one of the best CSS styling solutions. Tailwind provides us with just the right balance of primitives and customizables that makes it immensely intuitive to style our components and pages.
- Choosing TypeScript was a bit of a personal dare since I had a limited time frame. But also I didn't want to skip out on the industry standard approach, and if we consider scaling this project, sooner or later TS would find it's way in the discussions.
- For State Management, I chose to go with React Context since our requirements were simple and context is more than capable of handling these use cases. Also, using redux would have been an overkill.

# Trade offs
- For now, I'm handling API calls inside useEffects, which works but isn't as much advised as it was before. I had thought of using react-query, which would have simplified the whole handling loading state, error state, fetching data and persisting it concerns, but didn't go for it considering the scope of the application. However, I could refactor the current functions into using react-query if the project increases in scope and functionality.
- React Context is good for now since our use cases are simple and less, but with more functionality, we might need to opt for a full-fledged state management solution like redux or zustand. However, we can also combine Context and react-query for the same.
- The components can be structured in a better way, and more reusability can be utilised with more brainstorming. Same goes for styling.
