import Button from "./Button";

interface SettingsRowProps {
  name: string;
  defaultValue: number;
}

const Setting = ({ name, defaultValue }: SettingsRowProps) => {
  return (
    <div className="row">
      <div className="col-6">{name}</div>
      <div className="col">
        <Button>-</Button>
      </div>
      <div className="col">{defaultValue}</div>
      <div className="col">
        <Button>+</Button>
      </div>
    </div>
  );
};

export default Setting;
