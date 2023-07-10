import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Array from "./pages/array/Array";
import LinkedList from "./pages/linked-list/LinkedList";
import Queue from "./pages/queue/Queue";
import Stack from "./pages/stack/Stack";
import HashTable from "./pages/hash-table/HashTable";
import Graph from "./pages/graph/Graph";
import Tree from "./pages/tree/Tree";
import Heap from "./pages/heap/Heap";

function App() {
  let supportedDataStructures = [
    "Array",
    "Linked List",
    "Queue",
    "Stack",
    "Hash Map/Table",
    "Tree",
    "Heap",
    "Graph",
  ];

  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="array" element={<Array />} />
          <Route path="linked-list" element={<LinkedList />} />
          <Route path="queue" element={<Queue />} />
          <Route path="stack" element={<Stack />} />
          <Route path="hash-table" element={<HashTable />} />
          <Route path="graph" element={<Graph />} />
          <Route path="tree" element={<Tree />} />
          <Route path="heap" element={<Heap />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/*
      <nav>
        <ul>
          <li>Home</li>
          {supportedDataStructures.map((dataStructure) => (
            <li>{dataStructure}</li>
          ))}
        </ul>
      </nav>
      <main>
        <h1>Data Structure Visualizer</h1>
      </main>
          */}
    </>
  );
}

const Root = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/array">Array</Link>
        <Link to="/linked-list">Linked List</Link>
        <Link to="/queue">Queue</Link>
        <Link to="/stack">Stack</Link>
        <Link to="/hash-table">Hash Table</Link>
        <Link to="/graph">Graph</Link>
        <Link to="/tree">Tree</Link>
        <Link to="/heap">Heap</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
