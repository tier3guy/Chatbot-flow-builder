# Chatbot Flow Builder

This project is a Chatbot Flow Builder application built with Next.js, TypeScript, Tailwind CSS, shadcn, and React Flow. The application allows users to visually build and manage chatbot conversation flows.

Live Demo: https://chatbot-flow-builder-teal.vercel.app/

## Features

-   **Node Management**: Add, update, and connect nodes representing chatbot steps.
-   **Edge Management**: Create and manage connections between nodes.
-   **Settings Panel**: Update node settings dynamically.
-   **Context API**: Centralized state management using React Context API.
-   **React Flow**: Visualize and interact with the chatbot flow.

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [shadcn](https://shadcn.dev/)
-   [React Flow](https://reactflow.dev/)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/tier3guy/Chatbot-flow-builder
    cd chatbot-flow-builder
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `components/`: Contains the UI components like `NodesPanel`, `SettingsPanel`, and `SaveButton`.
-   `context/`: Contains the `AppContext` for state management.
-   `pages/`: Contains the Next.js pages, including the main `index.tsx` page.
-   `styles/`: Contains global styles.
-   `types/`: Contains TypeScript type definitions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   [React Flow](https://reactflow.dev/)
-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [shadcn](https://shadcn.dev/)
