export function ActorsNew( {onCreate} ) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);

    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div id="actors-new">
      <h1>New Actor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Known For: <input name="known_for" type="text" />
        </div>
        <button type="submit">Create Actor</button>
      </form>
    </div>
  );
}