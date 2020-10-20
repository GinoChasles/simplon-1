import React from 'react'

const CityList = ({ id, cities }) => {
    const render = cities.map(c => <div className="city">{c}</div>);

    return (
        <div id={id}>
            {render}
        </div>
    )
}

export default CityList;