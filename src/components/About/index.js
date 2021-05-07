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
      <div>
        Maecenas eleifend velit id tempor bibendum. Maecenas ullamcorper risus
        in tellus facilisis egestas. Quisque nisi velit, ultricies non turpis
        eu, lacinia egestas sem. Nam hendrerit elementum congue. Fusce congue
        augue at purus dictum tempor. In justo leo, accumsan non ante a, dapibus
        volutpat ligula. Mauris condimentum urna ut quam sollicitudin consequat.
        Etiam vitae felis vitae nunc euismod congue. Pellentesque auctor enim ut
        nunc auctor, imperdiet vestibulum ipsum ultricies. Quisque ligula felis,
        luctus blandit mi dictum, maximus tempor mauris. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </div>
    </section>
  );
}

export default About;
