import FlowBuilder from "./components/FlowBuilder";
import Navbar from "./components/Navbar";
import NodesPannel from "./components/NodesPannel";

export default function Home() {
    return (
        <div className="h-screen w-full flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-1 border-purple-400 bottom-2 w-full flex overflow-hidden">
                <FlowBuilder />
                <NodesPannel />
            </div>
        </div>
    );
}
