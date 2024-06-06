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

## Usage

### Adding Nodes

To add a node, click the "Add Node" button in the `NodesPanel`. This will add a new node to the flow.

### Connecting Nodes

Drag from one node's handle to another node's handle to create an edge (connection) between them.

### Updating Node Settings

Click on a node to open the `SettingsPanel`. Update the node's text in the input field, and the changes will be reflected in the node label.

### Saving the Flow

Click the "Save" button to save the current state of the nodes and edges. The application will log the saved flow to the console.

## Custom Node Types

You can create custom node types by defining new components and registering them with React Flow. An example of a custom node is the `TextUpdaterNode`:

```tsx
import { useCallback, ChangeEvent } from "react";
import { Handle, Position, NodeProps } from "reactflow";

const handleStyle = { left: 10 };

type TextUpdaterNodeProps = NodeProps<{
    label: string;
}>;

export default function TextUpdaterNode({ data }: TextUpdaterNodeProps) {
    const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag"
                />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={handleStyle}
            />
        </>
    );
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   [React Flow](https://reactflow.dev/)
-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [shadcn](https://shadcn.dev/)
