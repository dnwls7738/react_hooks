import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function Title() {
  const titleUpdater = useTitle("Loading....");
  setTimeout(() => {
    titleUpdater("useTitle");
  }, 2000);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default Title;
