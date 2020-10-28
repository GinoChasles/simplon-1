import React, { useState } from 'react'

export default function FetchForm({ action, limit, offset, handleFetch, localstorageMessage }) {

    const [of, setOf] = useState("");
    const [lim, setLim] = useState("");

    const handleOffsetChange = (event) => setOf(event.target.value);
    const handleLimitChange = (event) => setLim(event.target.value);

    return (<>
        <div id="form-container">
            <div id="pokedexTitle">POKEDEX</div>
            <form id="fetch-form" action={action} method="GET" onSubmit={(e) => { e.preventDefault(); handleFetch(of, lim) }}>
                <input type="text" id="offset" name="offset" value={of} onChange={handleOffsetChange} placeholder="offset" />
                <input type="text" id="limit" name="limit" value={lim} onChange={handleLimitChange} placeholder="limit" />
                <button type="submit"> Catch'em!</button>
                <div className="info small">{localstorageMessage}</div>
            </form >
        </div>
    </  >
    )
}
