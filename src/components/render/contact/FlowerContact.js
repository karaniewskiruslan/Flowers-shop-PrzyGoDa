import React from "react";

export const FlowerContact = () => {
  return (
    <section className="Flowers__Contact">
      <img
        alt=""
        src="https://img.freepik.com/free-vector/phone-telephone-contact_24908-54804.jpg"
      />
      <article>
        To contact with us:
        <div>
          Mail:{" "}
          <a
            href="mailto:karaniewski.ruslan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            karaniewski.ruslan@gmail.com
          </a>
        </div>
        <div>
          Telephone:{" "}
          <a href="tel:+48519825196" target="_blank" rel="noreferrer">
            +48 519 825 196
          </a>
        </div>
      </article>
    </section>
  );
};
