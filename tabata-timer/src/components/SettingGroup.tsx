import Setting from "./Setting";

const SettingGroup = () => {
  const onValueChange = (name: string, newValue: number) => {
    console.log(name + newValue);
  };

  return (
    <div className="container text-center">
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
