const DisplayMon = ({ mon }) => {

    const artworkUrl = mon?.sprites?.other?.['official-artwork']?.front_default;
    const type = mon?.types?.map(t => t.type.name) || [];

    if (!mon){
        return(<p>Loading...</p>)
      }

    return(
        <>
        <div id="card">
            <p>{mon.name}</p>
            <div id="image-box">
                <img src={artworkUrl} alt="A pokemon" />
            </div>
        </div>
        </>
    )
}

export default DisplayMon;