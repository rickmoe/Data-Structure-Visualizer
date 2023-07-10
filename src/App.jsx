import "./App.css";

function App() {
  let supportedDataStructures = [
    "Array",
    "Linked List",
    "Queue",
    "Stack",
    "Hash Map/Hash Table",
    "Tree",
    "Heap",
    "Graph",
  ];

  return (
    <>
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
    </>
  );
}

export default App;
