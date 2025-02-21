const DisplayMon = ({ mon }) => {

    if (!mon){
        return(<p>Loading...</p>)
      }

    return(
        <>
        {mon.name}
        </>
    )
}

export default DisplayMon;