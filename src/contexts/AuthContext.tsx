import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { AuthContextType } from '../types/User';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
    const auth = useContext(AuthContext);

    if (auth === undefined) {
        throw new Error("useAuthContext must be used within an AuthContext");
    }

    return auth;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            setIsAuthenticated(true);
        }
    }, []);

    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</AuthContext.Provider>;
}