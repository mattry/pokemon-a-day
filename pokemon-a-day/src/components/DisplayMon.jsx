const DisplayMon = ({ mon }) => {

    const artworkUrl = mon?.sprites?.other?.['official-artwork']?.front_default;
    const type = mon?.types?.map(t => t.type.name) || [];

    if (!mon){
        return(<p>Loading...</p>)
      }

    return(
        <div id="card">
            <div id="mon-name">
                <h1>{mon.name}</h1>
            </div>
            <div id="image-box">
                <img src={artworkUrl} alt="A pokemon" />
            </div>
        </div>
    )
}

export default DisplayMon;