import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?:</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "40%" }}
        alt="cover"
      />
      <div class="about">
      I'm a student at the Vanderbilt Coding Bootcamp working to get my certificate and become a licensed Full Stack Developer. I have a strong work ethic and an extensive background in communication. My hobbies include beekeeping, camping and kayaking. I also have a passion for video games and spending time with my family!
      </div>
    </section>
  );
}

export default About;
