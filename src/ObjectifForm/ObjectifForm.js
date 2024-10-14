import { useState } from "react";
import './ObjectifForm.css'; // Importation du fichier CSS

function ObjectifForm({ addObjectif }) {
    const [newObjectif, setNewObjectif] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addObjectif(newObjectif);
        setNewObjectif("");  // Réinitialiser le champ après ajout
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="objectif"
                placeholder="Add"
                value={newObjectif}
                onChange={(e) => setNewObjectif(e.target.value)} // Met à jour l'input
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ObjectifForm;
