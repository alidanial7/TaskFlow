import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="basis-3/4 bg-secondary">02</div>
    </div>
  );
}
