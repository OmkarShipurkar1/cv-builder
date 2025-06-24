import GeneralSection from "./GeneralSection";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm({
  generalInfo,
  educationInfo,
  experienceInfo,
  onAddGeneralInfo,
  onAddEducation,
  onAddExperience,
}) {
  return (
    <div>
      <GeneralSection data={generalInfo} onAddInfo={onAddGeneralInfo} />
      <Education data={educationInfo} onAddEducation={onAddEducation} />
      <Experience data={experienceInfo} onAddExperience={onAddExperience} />
    </div>
  );
}
