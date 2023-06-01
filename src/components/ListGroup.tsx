import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

//{items[] , heading : string}

interface Props {
  items: String[];
  heading: String;
  //(Item:string) => void
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //event handler

  // const handleClick = (event: MouseEvent) => console.log(event);

  // const selectedIndex = 0; //-1 means no item is selected while 0 means first item is selected

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //Adding a hook for use state
  // const arr = useState(-1);
  // arr[0]; // variable (selected index)
  // arr[1]; // updater function
  // items = [];
  // const message = items.length === 0 ? <p>No Items</p> : null;

  // const GetMessage = () => {
  //   return items.length === 0 ? <p>No Items</p> : null;
  // };
  // if (items.length === 0)
  //   return (
  //     <Fragment>
  //       <h1>List</h1>
  //       <p>No Items</p>
  //     </Fragment>
  //   );
  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items</p> : null} */}
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
