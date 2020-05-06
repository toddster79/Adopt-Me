import React from "react"
import { Router } from '@reach/router'
import SearchParams from "./SearchParams"
import Details from "./Details"
import NavBar from "./NavBar"

const App = () => {
return (
    <div> 
        <NavBar />
        <Router>    
            <SearchParams path="/" /> 
            <Details path="/details/:id" />
        </Router>
    </div>
)
};
export default App 