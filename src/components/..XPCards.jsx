import React, { useState, useEffect } from "react";
import Img1 from "/src/components/Images/Apple.png"
import Img2 from "/src/components/Images/Consumer cell.png"
import Img3 from "/src/components/Images/Legacy Health.png"
import Img4 from "/src/components/Images/Nike.png"
import Img5 from "/src/components/Images/PPS.png"
import Img6 from "/src/components/Images/SimpliSafe.png"
import Img7 from "/src/components/Images/Supra.png"
import "./component.css"
import job from "/src/components/jobs.json"


// A custom component that renders a logo and a job content
const JobItem = ({ logo, title, company,  duties }) => {
  // A state variable to track if the logo is clicked
  const [clicked, setClicked] = useState(false);
  // A state variable to track if the job content is hydrated
  const [hydrated, setHydrated] = useState(false);

  // A function to handle the click event
  const handleClick = () => {
    // Toggle the clicked state
    setClicked(!clicked);
  };// A custom component that renders the job content based on the clicked and hydrated states
  const JobContent = ({ clicked, hydrated }) => {
    // If the clicked and hydrated states are both true, render the title and description
    if (clicked && hydrated) {
      return (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>{job.duties}</p>
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
      <div className="JobCard">
      <img src={job.logo} alt="logo" width="20%" onClick={handleClick} />
      {/* Render the job content as a separate component and pass the clicked and hydrated states as props */}
      <JobContent
        title={job.title}
        company={job.company}
        duties={job.duties}
        clicked={clicked}
        hydrated={hydrated}
      />
      </div>
    </div>
  );
};



// The main component that renders a list of job items
export const XPCards = () => {
  return (
    <div className="XPCards" >
      {/* Map over the jobs array and render each item as a JobItem component */}
      {job.map((job) => (
        <JobItem
          key={job.id}
          logo={job.logo}
          title={job.title}
          company={job.company}
          duties={job.duties}
        />
      ))}
    </div>
  );
};

// Change the majority of this keep const use state and the event listener for the click on the image but Add a logic statement that checks the state to then render the rest of the job information