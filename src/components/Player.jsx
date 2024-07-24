import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName}) {
  const [PlayerName, setPlayername] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);


 
  function HandleEditClick() {
    setIsEditing((editing) => !editing);
   if(isEditing){
    onChangeName(symbol, PlayerName)
   } 
  }


  function HandleChange(event){
    setPlayername(event.target.value);
  }

  

  let editablePlayerName = <span className="player-name">{PlayerName}</span>;
  // letBtnCaption = 'Edit;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={PlayerName} onChange={HandleChange} />;
  }
  // letBtnCaption = 'Save';

  return (
    <li className={isActive ? 'active' : undefined}>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
