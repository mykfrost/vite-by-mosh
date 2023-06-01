import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Alert from "./components/Alert";

function App() {
  let items = [
    "New York",
    "Nairobi",
    "Egypt",
    "Lagos",
    "San Francisco",
    "Tokyo",
  ];

  const handleSelectItem = (item: String) => {
    console.log("Selected" + item);
  };
  return (
    <div>
      {/* <Message/> */}
      <Card />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert />
    </div>
  );
}

export default App;
