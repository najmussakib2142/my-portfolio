const ResumeButton = ({ className = "" }) => {
  // If resume file exists in public/assets/resume.pdf, clicking will open/download
  return (
    <a
      href="/assets/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 btn btn-primary ${className}`}
    >
      View / Download Resume
    </a>
  );
};
export default ResumeButton;
