import { useState } from "react";

export default function useSelected<T extends HTMLElement>() {
  const [selected, setSelected] = useState<null | string>(null);

  const handleSelected = (e: React.MouseEvent<T, MouseEvent>) => {
    const id = e.currentTarget.id;
    setSelected(prev => prev === id ? null : id);
  }

  return { handleSelected, selected, setSelected };
}