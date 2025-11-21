import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const { data } = await api.get("/teams");
    setTeams(data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Teams</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Team Name</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="border p-2">{team.id}</td>
                <td className="border p-2">{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
