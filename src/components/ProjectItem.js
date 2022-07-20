import React from "react";

function ProjectItem({ name, about, technologies }) {

  // console.log(technologies)
  
  const techItem = technologies.map((techItem) => {
    return <span key={techItem}>{techItem}</span>
  })

  // console.log(techItem)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
        techItem}
      </div>
    </div>
  );
}

export default ProjectItem;
