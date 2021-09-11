const genresURL = (SelectedGennres) => {
    if( SelectedGennres.length < 1 )
        { return ""}
    const gID = SelectedGennres.map((i) => i.id);
    
    return gID.reduce((ack, current) => ack + ',' + current)
}

export default genresURL