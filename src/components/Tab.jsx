import { React, useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "The content of the Section 1",
  },
  {
    tab: "Section2",
    content: "The content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex,
  };
};

function Tab() {
  const { currentItem, chageItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => chageItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default Tab;
