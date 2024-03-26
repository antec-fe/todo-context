import { useContext } from "react";
import { ListContext } from "../store/ToDoContext";

export default function List() {
  const { state: list, dispatch } = useContext(ListContext);
  return (
    <>
      {list && (
        <div className="list-container">
          {list.map((item, id) => (
            <div className="item" key={item.id}>
              <p>{id}</p>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <button
                className="delete"
                id={id}
                onClick={() =>
                  dispatch({
                    type: "DELETE",
                    payload: item.id,
                  })
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </>
    //
  );
}
