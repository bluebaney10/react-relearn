// Zustand store with TypeScript
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role?: "admin" | "user" | "guest";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: () =>
    set({
      user: { id: "1", name: "blue", email: "b@blue.com" },
      isAuthenticated: true,
    }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

function AppZustandAuthState() {
  const { user, isAuthenticated, logout, login } = useAuthStore();

  return (
    <header className="p-4 bg-sky-600 text-white">
      {isAuthenticated ? (
        <div className="flex justify-between items-center">
          <span>Welcome, {user?.name}</span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span onClick={login}>Please login</span>
          <button
            onClick={login}
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800"
          >
            login
          </button>
        </div>
      )}
    </header>
  );
}

export default AppZustandAuthState;
