function ListGroup() {
  const item = ["Blue", "Baney"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
