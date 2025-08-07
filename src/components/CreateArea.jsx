import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
