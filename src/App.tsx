import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Card from "./components/Card";

function App() {
  let items = [
    "New York",
    "Nairobi",
    "Egypt",
    "Lagos",
    "San Francisco",
    "Tokyo",
  ];
  return (
    <div>
      {/* <Message/> */}
      <Card />
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
