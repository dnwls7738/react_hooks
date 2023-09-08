import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      window.Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function Notification() {
  const triggerNotif = useNotification("Hello", {
    body: "Hello",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

export default Notification;
