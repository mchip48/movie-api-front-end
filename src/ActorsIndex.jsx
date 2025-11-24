function ActorsIndex() {
  return (
    <div id="actors-index">
      <h1>All {actors.actorsProp.length} Actors</h1>
      {props.actorsProp.map((actor) => (
        <div key={actor.id} className="actors">
          <h2>{actor.first_name} {actor.last_name}</h2>
          <p>{actor.known_for}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}
