import { process_params } from "express/lib/router";
import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
   
    setNote((prevItems) => {
      return {
        ...prevItems,
        [name]:value
      };
    });
    
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }




  return (
    <div>
      <form>
        <input onChange = {handleChange} name="title" placeholder="Title" value = {note.title}/>
        <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value = {note.content}/>
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
