import ListGroup from "./components/ListGroup";
import SettingGroup from "./components/SettingGroup";
import Controls from "./components/Controls";

function App() {
  //ToDo: Pass an onChangeCallback to the settings and read the values into variables in this component
  //ToDo: Create a list of task based on the read settings
  //ToDo: Create control handlers

  return (
    <div>
      <h1>Tabata Timer</h1>
      <SettingGroup />
      <Controls />
      <ListGroup
        items={["test1", "test2"]}
        heading="Task List"
        onSelectItem={() => {
          console.log(0);
        }}
      />
    </div>
  );
}

export default App;
