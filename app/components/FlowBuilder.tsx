"use client";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function FlowBuilder() {
    return (
        <main className="flex-1 border-slate-500 border-2 h-full">
            <ReactFlow>
                <Background />
                <Controls />
            </ReactFlow>
        </main>
    );
}
