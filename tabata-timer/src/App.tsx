import ListGroup from "./components/ListGroup";
import SettingGroup from "./components/SettingGroup";
import Controls from "./components/Controls";
import { TabataTimer } from "./tabataTimer";
import { useState } from "react";
import { getMinSecString } from "./utils";

// Custom hook to force a re-render
function useForceUpdate() {
  const [_, setState] = useState(0); // State variable is not used
  return () => setState((prev) => prev + 1); // Function to trigger re-render
}

let tabataTimer = new TabataTimer(5, 6, 60, 35, 20);

function App() {
  //ToDo: Create a list of task based on the read settings
  //ToDo: Create control handlers
  const forceUpdate = useForceUpdate();

  const onSettingsChanged = (name: string, newValue: number): void => {
    tabataTimer.onSettingsChanged(name, newValue);
    forceUpdate();
  };

  return (
    <div>
      <h1>Tabata Timer</h1>
      <SettingGroup onValueChange={onSettingsChanged} />
      <Controls />
      <ListGroup
        items={["test1", "test2"]}
        heading="Task List"
        onSelectItem={() => {
          console.log(0);
        }}
      />
      <div>{getMinSecString(tabataTimer.getRemainingTime())}</div>
    </div>
  );
}

export default App;
