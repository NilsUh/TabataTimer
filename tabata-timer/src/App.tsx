import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Set 1/3 - Round 1/2",
    "Set 2/3 - Round 1/2",
    "Set 3/3 - Round 1/2",
    "Set 1/3 - Round 2/2",
    "Set 2/3 - Round 2/2",
    "Set 3/3 - Round 2/2",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Sets and Rounds"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={["TestA", "TestB"]}
        heading="Test List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
