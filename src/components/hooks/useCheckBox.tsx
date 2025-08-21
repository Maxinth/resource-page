import { useState } from "react";

export type CheckboxItem = {
  id: string;
  label: string;
};

export function useCheckboxes(initialItems: CheckboxItem[]) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    () =>
      initialItems.reduce((acc, item) => {
        acc[item.id] = false;
        return acc;
      }, {} as Record<string, boolean>)
  );

  const toggle = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isChecked = (id: string) => checkedItems[id];

  return { checkedItems, toggle, isChecked };
}
