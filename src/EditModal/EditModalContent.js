import './EditModalContent.css';
import {useState} from "react";

export default function ModalContent({ onClose, onConfirm, value, newValue, setNewValue }) {

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Modification</h2>
                <form onSubmit={onConfirm}>
                    <input
                        name="objectif"
                        placeholder={value}
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)} // Met à jour l'input
                    />
                </form>
                <button onClick={() => {
                    onConfirm();
                    onClose();
                }}>Oui
                </button>
                <button onClick={onClose}>Annuler</button>
            </div>
        </div>
    );
}
