import { useState } from "react";
import Button from "./Button";

interface SettingsRowProps {
  name: string;
  defaultValue: number;
  delta: number;
  onValueChange: (name: string, newValue: number) => void;
}

const Setting = ({
  name,
  defaultValue,
  delta,
  //ToDo: Add min and max values
  onValueChange,
}: SettingsRowProps) => {
  const [value, setValue] = useState(defaultValue);

  const onClickIncreaseCallback = () => {
    setValue(value + delta);
    //ToDo: Clarify why the state is not updated immediately
    onValueChange(name, value + delta);
  };

  const onClickDecreaseCallback = () => {
    setValue(value - delta);
    onValueChange(name, value - delta);
  };

  return (
    <div className="row">
      <div className="col-6">{name}</div>
      <div className="col">
        <Button onClickCallback={onClickDecreaseCallback}>-</Button>
      </div>
      <div className="col">{value}</div>
      <div className="col">
        <Button onClickCallback={onClickIncreaseCallback}>+</Button>
      </div>
    </div>
  );
};

export default Setting;
