import ListGroup from "./components/ListGroup";
import ListUser from "./components/ListUser";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleItem = (item: string) => {
    console.log("item:", item);
  };

  return (
    <>
      <ListGroup items={items} onSelectItem={handleItem} />
      <ListUser />
    </>
  );
}

export default App;
