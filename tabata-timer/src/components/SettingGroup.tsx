import Setting from "./Setting";

interface SettingsProps {
  onValueChange: (name: string, newValue: number) => void;
}

const SettingGroup = ({ onValueChange }: SettingsProps) => {
  return (
    <div className="container text-center">
      <Setting
        name="Rounds"
        defaultValue={5}
        delta={1}
        min={1}
        max={10}
        onValueChange={onValueChange}
      />
      <Setting
        name="Sets/Round"
        defaultValue={6}
        delta={1}
        min={1}
        max={10}
        onValueChange={onValueChange}
      />
      <Setting
        name="Round Break Duration"
        defaultValue={60}
        delta={10}
        min={10}
        max={300}
        onValueChange={onValueChange}
      />
      <Setting
        name="Set Duration"
        defaultValue={35}
        delta={5}
        min={10}
        max={300}
        onValueChange={onValueChange}
      />
      <Setting
        name="Set Break Duration"
        defaultValue={10}
        delta={5}
        min={5}
        max={300}
        onValueChange={onValueChange}
      />
    </div>
  );
};

export default SettingGroup;
