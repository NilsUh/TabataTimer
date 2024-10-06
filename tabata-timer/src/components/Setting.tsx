import { useState } from "react";
import Button from "./Button";

interface SettingsRowProps {
  name: string;
  defaultValue: number;
  delta: number;
  min: number;
  max: number;
  onValueChange: (name: string, newValue: number) => void;
}

const Setting = ({
  name,
  defaultValue,
  delta,
  min,
  max,
  onValueChange,
}: SettingsRowProps) => {
  const [value, setValue] = useState(defaultValue);

  const onClickIncreaseCallback = () => {
    if (value + delta <= max) {
      setValue(value + delta);
      //ToDo: Clarify why the state is not updated immediately
      onValueChange(name, value + delta);
    }
  };

  const onClickDecreaseCallback = () => {
    if (value - delta >= min) {
      setValue(value - delta);
      onValueChange(name, value - delta);
    }
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
