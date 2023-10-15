import React, { useContext, useState } from "react";
import { CartItemsContext } from "../../../context/CartContext";

export const FlowersDialog = () => {
  const { dialogPageRef } = useContext(CartItemsContext);

  const [isClosing, setIsClosing] = useState(false);

  const toggleButtonClose = () => {
    const refShrt = dialogPageRef.current;

    if (isClosing === false) {
      refShrt.classList.add("closing");
      setIsClosing(true);
      refShrt.addEventListener(
        "animationend",
        () => {
          refShrt.classList.remove("closing");
          setIsClosing(false);
          refShrt.close();
        },
        { once: true }
      );
    }
  };

  return (
    <dialog ref={dialogPageRef}>
      <div className="dialog">
        <section className="dialog__message">
          <h2>This is portfolio page</h2>
          <p>
            If you enjoed by this page, please, contact with me on{" "}
            <a href="https://www.linkedin.com/in/karanelus/" target="_blank" rel="noopener">
              LinkedIn
            </a>
            ,{" "}
            <a href="https://www.facebook.com/profile.php?id=100008296452572" target="_blank" rel="noopener">
              Facebook
            </a>{" "}
            or{" "}
            <a href="https://t.me/Karane1us" target="_blank" rel="noopener">
              Telegram
            </a>
            . I'm will be happy to connect and, hopefully, find my first Frontend Developer job
          </p>
          <button onClick={toggleButtonClose}>OK</button>
        </section>
      </div>
    </dialog>
  );
};
