import PropsListGroup from "./components/PropsListGroup";

function AppProps() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleItem = (item: string) => {
    console.log("item:", item);
  };

  return (
    <>
      <h2>Send data via props</h2>
      <PropsListGroup items={items} onSelectItem={handleItem} />
    </>
  );
}

export default AppProps;
