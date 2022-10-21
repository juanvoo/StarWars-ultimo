import React, {useContext} from "react";
import { Login } from "../component/login.jsx";
import { Context } from "../store/appContext";

export const Authentication = () => {
	const {store} = useContext(Context)
	let auth = store.auth
    return(
		<>
		<div className="container-fluid p-3 border">
                {!auth ? <Login/> :null}
            </div>
	
	</>
)}