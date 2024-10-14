function ObjectifList({ objectif, removeObj }) {
    return (
        <ul>
            {objectif.map((obj, index) => (
                <li key={index}>
                    {obj}
                    <button onClick={() => removeObj(obj)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default ObjectifList;
