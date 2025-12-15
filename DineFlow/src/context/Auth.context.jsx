import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setIsAdmin(parsed.role === "admin");
    }
  }, []);


  const login = (email, password) => {

    if (email === "admin@graphura.com" && password === "admin123") {
      const adminUser = { email, role: "admin" };
      setUser(adminUser);
      setIsAdmin(true);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return { success: true, role: "admin" };
    }

    const normalUser = { email, role: "user" };
    setUser(normalUser);
    setIsAdmin(false);
    localStorage.setItem("user", JSON.stringify(normalUser));
    return { success: true, role: "user" };
  };

  // Signup function
  const signup = (email, password) => {
    const normalUser = { email, role: "user" };
    setUser(normalUser);
    setIsAdmin(false);
    localStorage.setItem("user", JSON.stringify(normalUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);