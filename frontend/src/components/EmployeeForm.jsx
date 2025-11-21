import { useState } from "react";
import API from "../api/api";

export default function EmployeeForm({ refreshed }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/employees", { name, email, salary });
    refreshed();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="salary" onChange={(e) => setSalary(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
