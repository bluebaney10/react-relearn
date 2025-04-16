import { create } from "zustand";

interface CounterStore {
  votes: number;
  increment: () => void;
}

const useVoteStore = create<CounterStore>((set) => ({
  votes: 0,
  increment: () => set((state) => ({ votes: state.votes + 1 })),
}));

function AppZustand() {
  const votes = useVoteStore((state) => state.votes);
  const increment = useVoteStore((state) => state.increment);

  return (
    <>
      <h2>State management by zustand</h2>
      <p>{votes} people have cst their votes</p>
      <button onClick={increment}>Vote</button>
    </>
  );
}

export default AppZustand;
