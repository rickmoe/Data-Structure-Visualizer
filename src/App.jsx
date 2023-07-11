import {
  createBrowserRouter,
  createRoutesFromElements,
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
import Navbar from "./components/Navbar";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
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
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
