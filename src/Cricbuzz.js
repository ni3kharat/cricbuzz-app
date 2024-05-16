function Cricbuzz({imgLink, imgHeading}){
    return (
        <div>
            <img src={imgLink} alt="Ipl 2024"/>
        <h4>{imgHeading}</h4>
        <p>The eight-team 50-over competition is expected to kick off in mid-February next year, with Karachi and Rawalpindi being the other designated venues</p>
        </div>
    );
}

export default Cricbuzz;