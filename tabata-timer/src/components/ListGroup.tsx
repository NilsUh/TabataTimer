function ListGroup() {
  let items = [
    "Set 1/3 - Round 1/2",
    "Set 2/3 - Round 1/2",
    "Set 3/3 - Round 1/2",
    "Set 1/3 - Round 2/2",
    "Set 2/3 - Round 2/2",
    "Set 3/3 - Round 2/2",
  ];

  // event handler
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
    console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
