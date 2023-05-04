import React from "react";
import { Link } from "@mui/material";

const Resume = () => {
  const resumePath = "/myResume.pdf";

  return (
    <div className="resume-container">
      <Link
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        View My Resume
      </Link>
    </div>
  );
};

export default Resume;
