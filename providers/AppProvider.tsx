"use client";
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import {
    Node,
    Edge,
    Connection,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from "reactflow";
import { toast } from "sonner";

type AppContextType = {
    nodes: Node[];
    edges: Edge[];
    selectedNode: Node | null;
    setSelectedNode: (node: Node | null) => void;
    addNode: (node: Node) => void;
    updateNode: (node: Node) => void;
    onNodesChange: (changes: any) => void;
    onEdgesChange: (changes: any) => void;
    onConnect: (params: Edge | Connection) => void;
    isMessageSheetOpen: boolean;
    setIsMessageSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onSave: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const [isMessageSheetOpen, setIsMessageSheetOpen] =
        useState<boolean>(false);

    const addNode = (node: Node) => {
        setNodes((prevNodes) => [...prevNodes, node]);
    };

    const updateNode = (updatedNode: Node) => {
        setNodes((prevNodes) =>
            prevNodes.map((node) =>
                node.id === updatedNode.id ? updatedNode : node
            )
        );
    };

    const onNodesChange = (changes: any) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    };

    const onEdgesChange = (changes: any) => {
        setEdges((eds) => applyEdgeChanges(changes, eds));
    };

    const onConnect = (params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds));
    };

    const onSave = () => {
        localStorage.setItem(
            "data",
            JSON.stringify({
                nodes,
                edges,
            })
        );

        toast("Your changes is saved on the local storage of your browser");
    };

    useEffect(() => {
        const data = localStorage.getItem("data");
        if (data) {
            const parsedData = JSON.parse(data);
            setNodes(parsedData?.nodes);
            setEdges(parsedData?.edges);
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                nodes,
                edges,
                selectedNode,
                setSelectedNode,
                addNode,
                updateNode,
                onNodesChange,
                onEdgesChange,
                onConnect,
                isMessageSheetOpen,
                setIsMessageSheetOpen,
                onSave,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
