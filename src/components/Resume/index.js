import React from "react";
import resume from "../../assets/resume.pdf"

function Resume() {
  return (
    <div class="resume">
      <ul class="front">
        Front End:
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>

      <ul class="back">
        Back End:
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
        <a href={resume} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="button1"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
            </svg>
            <span>Download Resume</span>
          </button>
        </a>
      </ul>
    </div>
  );
}

export default Resume;
