import { useState } from "react";
import "./OrderElement.css";

function OrderElement(props) {
  const [deleteorder, setDelete] = useState(true);
  function onDeleteHandler() {
    localStorage.removeItem(props.id);
    setDelete(false);
  }
  return (
    <div className="element">
      {deleteorder && (
        <ul className="elements">
          {`${props.price},${props.dish}`}
          <button onClick={onDeleteHandler}>Delete</button>
        </ul>
      )}
    </div>
  );
}

export default OrderElement;
