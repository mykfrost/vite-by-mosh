import { Fragment } from "react";
function ListGroup() {
  const items = [
    "New York",
    "Nairobi",
    "Egypt",
    "Lagos",
    "San Francisco",
    "Tokyo",
  ];

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
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
