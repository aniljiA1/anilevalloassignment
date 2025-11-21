import { useState } from "react";
import API from "../api/api";

export default function TeamForm({ refreshed }) {
  const [name, setName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/teams", { name });
    refreshed();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Team name" onChange={(e) => setName(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
