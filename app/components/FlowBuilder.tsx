"use client";
import { useAppContext } from "@/providers/AppProvider";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "@/components/CustomNode";
import { useMemo } from "react";

export default function FlowBuilder() {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
        useAppContext();

    const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

    return (
        <main className="flex-1 border  h-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </main>
    );
}
