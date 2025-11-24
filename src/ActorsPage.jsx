import { ActorsIndex } from "./ActorsIndex";
import { ActorsNew } from "./ActorsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function ActorsPage() {
  
  const [actors, setActors] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/actors.json").then((response) => {
      console.log(response.data);
      setActors(response.data);
    })
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <ActorsNew />
      <ActorsIndex actorsPage={actors} />
    </div>
  );
}