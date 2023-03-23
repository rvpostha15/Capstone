
function Home({currentTeacher, setIsAuthenticated, currentStudent}) {

    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'DELETE',
            });
    
            if (response.ok) {
                setIsAuthenticated(false);
            } else {
                console.error('Failed to log out');
            }
        } catch (err) {
          console.error('Error while logging out:', err);
        }
    };

    return(
        <>
            <h1>You are logged in as {currentTeacher.first_name} {currentTeacher.last_name}</h1>
            <button onClick={handleLogout} className="minty-button">Logout</button>
        </>
    )
}

export default Home;