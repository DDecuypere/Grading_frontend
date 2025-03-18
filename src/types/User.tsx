export type User = {
    email: string;
    password: string;
}

export type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
}

