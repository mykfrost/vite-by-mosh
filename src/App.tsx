import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Alert from "./components/Alert";
import Container from "./components/Container";
import { NavBar } from "./components/NavBar";
import { Input } from "./components/Input";

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
      <NavBar />
      <Card />
      <Container>
        <h1>This is the heading</h1>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <Input />
      </Container>

      <Alert>
        Hello World ! This is Mr <h1>Okello</h1>
      </Alert>
    </div>
  );
}

export default App;
