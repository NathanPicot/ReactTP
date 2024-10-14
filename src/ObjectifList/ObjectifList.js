import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import './ObjectifList.css'

function ObjectifList({ objectif, removeObj }) {
    const [selectedObj, setSelectedObj] = useState(null);
    const [showModal, setShowModal] = useState(false);



    const confirmDelete = (obj) => {
        removeObj(obj); // Supprime l'objectif
        setShowModal(false);    // Ferme la modal
        setSelectedObj(null);   // Réinitialise l'objectif sélectionné
    };

    return (
        <ul>
            {objectif.map((obj, index) => (
                <li key={index} className="objectifItem">
                    <span>{obj}</span>
                    <DeleteModal onClose={() => setShowModal(false)} onConfirm={() => confirmDelete(obj)} />
                </li>

            ))}
        </ul>
    );
}

export default ObjectifList;
