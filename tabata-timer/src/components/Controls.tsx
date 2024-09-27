import Button from "./Button";

const Controls = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Button>&#9198;</Button>
        </div>
        <div className="col">
          <Button>&#9654;</Button>
        </div>
        <div className="col">
          <Button>&#9208;</Button>
        </div>
        <div className="col">
          <Button>&#9197;</Button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
