import { useContext, useState } from "react";
import { ListContext } from "../store/ToDoContext";

export default function Form() {
  const { dispatch } = useContext(ListContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name,
        email
      },
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Ad
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Göndər</button>
    </form>
  );
}
