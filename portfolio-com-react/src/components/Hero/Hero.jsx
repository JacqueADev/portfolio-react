import React from "react";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, Jacqueline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          deserunt impedit nobis vero magni, labore autem hic? Culpa temporibus
          ab explicabo exercitationem, odio alias quos tempore? Architecto quasi
          quae distinctio.
        </p>
        <a href="mailto:myemail@email.com">Contact me</a>
      </div>
      <img src={getImageUrl("img-section/heroImage.png")} alt="Hero image of me" />
    </section>
  );
};
