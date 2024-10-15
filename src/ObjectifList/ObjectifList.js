import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import './ObjectifList.css'

function ObjectifList({ objectif, removeObj, editObj }) {
    const [selectedObj, setSelectedObj] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newValue, setNewValue] = useState('');



    /*
    *  Fonction de supréssion d'objectif
    */
    const confirmDelete = (obj) => {
        removeObj(obj); // Supprime l'objectif
        setShowModal(false);    // Ferme la modal
        setSelectedObj(null);   // Réinitialise l'objectif sélectionné
    };

    /*
    *  Fonction d edition d'objectif
    */
    const confirmEdit = (obj, newValue) => {
        console.log("newValue => ",newValue , "obj =>", obj);
        editObj(obj, newValue);
        setShowModal(false);
        setSelectedObj(null);
        setNewValue('');
    };

    return (
        <ul>
            {objectif.map((obj, index) => (
                <li key={index} className="objectifItem">

                    <span>{obj}</span>
                    <div className="button-container">
                        <EditModal value={obj} newValue={newValue} setNewValue={setNewValue}
                                   onClose={() => setShowModal(false)} onConfirm={() => confirmEdit(obj, newValue)}/>
                        <DeleteModal onClose={() => setShowModal(false)} onConfirm={() => confirmDelete(obj)}/>
                    </div>
                </li>

            ))}
        </ul>
    );
}

export default ObjectifList;
