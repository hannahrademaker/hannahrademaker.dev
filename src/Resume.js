const Resume = () => {
  const resumePath = "/myResume.pdf";

  return (
    <div className="resume-container">
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View My Resume
      </a>
    </div>
  );
};

export default Resume;
