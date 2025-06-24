import "./CVPreview.css";

export default function CVPreview({
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <div className="cv-name">{generalInfo.name || "Your Name"}</div>
        <div className="cv-contact">
          {generalInfo.email} | {generalInfo.phone}
        </div>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <div className="cv-title">{educationInfo.school_name}</div>
          <div className="cv-subtitle">{educationInfo.title_of_study}</div>
          <div className="cv-subtitle">{educationInfo.date_of_study}</div>
        </div>
      </div>

      <div className="cv-section">
        <h2>Experience</h2>
        <div className="cv-item">
          <div className="cv-title">{experienceInfo.company_name}</div>
          <div className="cv-subtitle">{experienceInfo.position_title}</div>
          <div className="cv-subtitle">{experienceInfo.date_worked}</div>
          <div className="cv-desc">{experienceInfo.main_responsibilities}</div>
        </div>
      </div>
    </div>
  );
}
