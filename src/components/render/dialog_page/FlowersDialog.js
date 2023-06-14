import React from "react";

export const FlowersDialog = () => {
  return (
    <dialog>
      <h2>This is portfolio page</h2>
      <div>
        If you enjoed by this page, please, contact with me on{" "}
        <a href="https://www.linkedin.com/in/karanelus/">LinkedIn</a>,{" "}
        <a href="https://www.facebook.com/profile.php?id=100008296452572">
          Facebook
        </a>{" "}
        or <a href="https://t.me/Karane1us">Telegram</a>. I'm will be happy to
        connect and, hopefully, find my first Frontend Developer job
      </div>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
};
