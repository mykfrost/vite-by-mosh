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
  // const message = items.length === 0 ? <p>No Items</p> : null;

  const GetMessage = () => {
    return items.length === 0 ? <p>No Items</p> : null;
  };
  // if (items.length === 0)
  //   return (
  //     <Fragment>
  //       <h1>List</h1>
  //       <p>No Items</p>
  //     </Fragment>
  //   );
  return (
    <Fragment>
      <h1>List Group</h1>
      {GetMessage()}
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
