import { useEffect, useState } from "react";

export default function useLocalStorageTate(key, initialState) {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialState
  );

  const toggleDarkMode = () => setValue((prev) => !prev);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue, storedValue]);

  return [value, setValue, toggleDarkMode];
}
