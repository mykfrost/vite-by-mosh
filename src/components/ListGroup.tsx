import { Fragment } from "react";
function ListGroup() {
  let items = [
    "New York",
    "Nairobi",
    "Egypt",
    "Lagos",
    "San Francisco",
    "Tokyo",
  ];
  items = [];
  if (items.length === 0) return <p>No Items</p>;
  return (
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
