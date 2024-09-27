import Setting from "./Setting";

const Settings = () => {
  return (
    <div className="container text-center">
      <Setting name="Sets/Round" defaultValue={10} />
      <Setting name="Round Break Duration" defaultValue={10} />
      <Setting name="Set Duration" defaultValue={10} />
      <Setting name="Set Break Duration" defaultValue={20} />
    </div>
  );
};

export default Settings;
