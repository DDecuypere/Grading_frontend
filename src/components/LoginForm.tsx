import React, { useState } from "react";
import { User } from "../types/User";
import "../css/LoginForm.css"

export default function LoginForm() {
    const [user, setUser] = useState<User | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    const onLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //TODO: Send login info to laravel backend for auth
    }

    return (
        <form className="" onSubmit={onLoginSubmit}>
            <input type="email" placeholder="Email" onChange={handleInputChange} />
            <input type="password" placeholder="Password" onChange={handleInputChange} />
            <button type="submit">Login</button>
        </form>
    );
}