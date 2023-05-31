import React, { useState, useEffect } from "react";
import Img1 from "./Images/Apple.png"
import Img2 from "./Images/Consumer cell.png"

// A mock array of logos and job details
let apple = Img1;
const jobs = [
  {
    logo: {apple},
    title: "Software Engineer",
    description: "Developed web applications using React and Firebase.",
  },
  {
    logo: {Img2},
    title: "iOS Developer",
    description: "Built native iOS apps using Swift and UIKit.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/800px-Microsoft_logo_%282012%29.svg.png",
    title: "Program Manager",
    description: "Managed software projects using Agile methodologies.",
  },
];

// A custom component that renders a logo and a job content
const JobItem = ({ logo, title, description }) => {
  // A state variable to track if the logo is clicked
  const [clicked, setClicked] = useState(false);
  // A state variable to track if the job content is hydrated
  const [hydrated, setHydrated] = useState(false);

  // A function to handle the click event
  const handleClick = () => {
    // Toggle the clicked state
    setClicked(!clicked);
    // Display a success message in the console
    console.log("Success!");
  };// A custom component that renders the job content based on the clicked and hydrated states
  const JobContent = ({ title, description, clicked, hydrated }) => {
    // If the clicked and hydrated states are both true, render the title and description
    if (clicked && hydrated) {
      return (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
    }
    // Otherwise, render nothing
    else {
      return null;
    }
  };

  // A useEffect hook to hydrate the job content after the logo is clicked
  useEffect(() => {
    // If the clicked state is true, set a timeout to hydrate the job content after 1 second
    if (clicked) {
      setTimeout(() => {
        setHydrated(true);
      }, );
    }
    // Otherwise, reset the hydrated state to false
    else {
      setHydrated(false);
    }
  }, [clicked]); // Run the effect only when the clicked state changes

  return (
    <div>
      {/* Render the logo as an image and attach the click handler */}
      <img src={logo} alt="logo" width="100" height="100" onClick={handleClick} />
      {/* Render the job content as a separate component and pass the clicked and hydrated states as props */}
      <JobContent
        title={title}
        description={description}
        clicked={clicked}
        hydrated={hydrated}
      />
    </div>
  );
};



// The main component that renders a list of job items
export const ResumePage = () => {
  return (
    <div>
      {/* Map over the jobs array and render each item as a JobItem component */}
      {jobs.map((job) => (
        <JobItem
          key={job.title}
          logo={job.logo}
          title={job.title}
          description={job.description}
        />
      ))}
    </div>
  );
};