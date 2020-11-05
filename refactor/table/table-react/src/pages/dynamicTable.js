import React, { useState } from "react";
import "../App.css";

function DynamicTable(props) {
  const [state, setState] = useState({
    message: "",
    items: []
  });

  const updateMessage = e => {
    setState({ message: e.target.value });
  };

  const handleClick = () => {
    let items = state.items;
    // items.push(state.message);
    setState({ items: items, message: "" });
  };

  const handleItemChanged = (i, e) => {
    let items = state.items;
    items[i] = e.target.value;
    setState({ items: items });
  };

  const handleItemDeleted = i => {
    let items = state.items;
    items.splice(i, 1);
    setState({
      items: items
    });
  };

  const renderRows = () => {
    var context = this;

    return state.items.map(function(o, i) {
      return (
        <tr key={"item-" + i}>
          <td>
            <input type="text" value={o} onChange={handleItemChanged(i)} />
          </td>
          <td>
            <button onClick={handleItemDeleted(i)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  // const renderRows = () => {
  //   // let context = state;

  //   return state.items.map((o, i) => {
  //     return (
  //       <tr key={"item-" + i}>
  //         <td>
  //           <input
  //             type="text"
  //             value={o}
  //             onChange={handleItemChanged(state, i)}
  //           />
  //         </td>
  //         <td>
  //           <button onClick={handleItemDeleted(i)}>Delete</button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  return (
    <div>
      <table className="simple-input">
        <thead>
          <tr>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
      <hr />
      <input type="text" value={state.message} onChange={updateMessage} />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

export default DynamicTable;
