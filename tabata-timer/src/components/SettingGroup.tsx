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
        onValueChange={onValueChange}
      />
      <Setting
        name="Sets/Round"
        defaultValue={6}
        delta={1}
        onValueChange={onValueChange}
      />
      <Setting
        name="Round Break Duration"
        defaultValue={60}
        delta={10}
        onValueChange={onValueChange}
      />
      <Setting
        name="Set Duration"
        defaultValue={35}
        delta={5}
        onValueChange={onValueChange}
      />
      <Setting
        name="Set Break Duration"
        defaultValue={20}
        delta={5}
        onValueChange={onValueChange}
      />
    </div>
  );
};

export default SettingGroup;
