import { useState } from "react";

type Props = {
  items: string[];
  onSelectItem: (item: string) => void;
};

const PropsListGroup = ({ items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h3>List</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PropsListGroup;
