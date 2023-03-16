
function Home({currentTeacher}) {

    return(
        <>
            <h1>You are logged in as {currentTeacher.first_name} {currentTeacher.last_name}</h1>
            <button className="minty-button">Logout</button>
        </>
    )
}

export default Home;