const Navbar = () => { 
    return ( 
        <nav className="navbar">
            <h1>SFU Available Classroom Finder</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/'>Search By Date</a>
                <a href='/QuickSearch'>Quick Search</a>
                <a href='/SearchByRoom'>Search By Room</a>

               
            </div>
        </nav>


    );
}
export default Navbar;