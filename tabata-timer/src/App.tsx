import ListGroup from "./components/ListGroup";
import Settings from "./components/Settings";
import Controls from "./components/Controls";

function App() {
  return (
    <div>
      <h1>Tabata Timer</h1>
      <Settings />
      <Controls />
      <ListGroup
        items={["test1", "test2"]}
        heading="Test"
        onSelectItem={() => {
          console.log(0);
        }}
      />
    </div>
  );
}

export default App;
