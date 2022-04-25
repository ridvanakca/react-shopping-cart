import React, { useState } from "react";

function useLocalStorage(key) {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : [];
  });

  const updateStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setState(data);
  };

  return [state, updateStorage];
}

export default useLocalStorage;
