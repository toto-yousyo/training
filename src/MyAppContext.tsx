import { useState, createContext, Dispatch, SetStateAction } from "react";

interface MyAppContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
const MyAppContext = createContext<MyAppContextType | undefined>(undefined);

const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);
const value = { count, setCount, count2, setCount2 };

export default MyAppContext;
