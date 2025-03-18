import React from "react";
import { User} from "../types/User";
import {useAuthContext} from "../contexts/AuthContext";
import "../css/LoginForm.css"

export default function LoginForm() {
    const {setIsAuthenticated} = useAuthContext();

    const authUserCreds = (user : User) => {
        //TODO: Send login info to laravel backend for auth
        console.log("Authenticating user...");

        localStorage.setItem("email", JSON.stringify(user.email)); //Temporary storage of email to mock login routing

        setIsAuthenticated(true);
    }

    const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = new FormData(e.currentTarget);

        const userCredentials: User = {
            email: userData.get("email") as string,
            password: userData.get("password") as string
        }

        authUserCreds(userCredentials);
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={onLoginSubmit}>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" name="email" type="email" placeholder="Email" />
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" name="password" type="password" placeholder="Password" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">Login</button>
            </form>
        </div>
    );
}