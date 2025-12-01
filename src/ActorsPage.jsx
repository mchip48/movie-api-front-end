import { ActorsIndex } from "./ActorsIndex";
import { ActorsNew } from "./ActorsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function ActorsPage() {
  
  const [actors, setActors] = useState([]);

  const handleIndex = () => {
    axios.get("/actors.json").then((response) => {
      console.log(response.data);
      setActors(response.data);
    })
  }

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/actors.json", params).then((response) => {
      setActors([...actors, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <ActorsNew onCreate={handleCreate}/>
      <ActorsIndex actorsProp={actors} />
    </div>
  );
}