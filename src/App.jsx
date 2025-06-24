import { useState } from "react";
import "./styles.css";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school_name: "",
    title_of_study: "",
    date_of_study: "",
  });

  const [experience, setExperience] = useState({
    company_name: "",
    position_title: "",
    main_responsibilities: "",
    date_worked: "",
  });

  function handleAddGeneralInfo(field, value) {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  }

  function handleEducationInfo(field, value) {
    setEducation((prev) => ({ ...prev, [field]: value }));
  }

  function handleExperienceInfo(field, value) {
    setExperience((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="cv">
      <CVForm
        generalInfo={generalInfo}
        educationInfo={education}
        handleCurrentEducation={handleEducationInfo}
        experienceInfo={experience}
        onAddGeneralInfo={handleAddGeneralInfo}
        onAddEducation={handleEducationInfo}
        onAddExperience={handleExperienceInfo}
      />
      <CVPreview
        generalInfo={generalInfo}
        educationInfo={education}
        experienceInfo={experience}
      />
    </div>
  );
}

export default App;
