
import { ReactNode, createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({
    user: null, 
    login: (username: string, password: string) => {}, 
    logout: () => {}
});

type AuthContextType = {
    children: ReactNode;
  }
export const AuthProvider = ({ children }: AuthContextType) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter()

  const credentials = {
    username: 'Username',
    password: 'Password',
  }

  const login = (username: string, password: string) => {
    if(username !== credentials.username || password !== credentials.password) {
      alert('Wrong username or password');
      return;  
    }
    setUser({ username, password });
    console.log(username, password)
    router.push('/')
  }

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
