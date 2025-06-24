import InputField from "./InputField";
import handleChange from "./HandleChange";

export default function Experience({ data, onAddExperience }) {
  return (
    <form>
      <InputField
        label="Company Name: "
        type="text"
        name="company_name"
        value={data.company_name}
        onChange={(e) => handleChange(e, onAddExperience)}
      />
      <InputField
        label="Position Title: "
        type="text"
        name="position_title"
        value={data.position_title}
        onChange={(e) => handleChange(e, onAddExperience)}
      />
      <InputField
        label="Main responsibilities of your jobs : "
        type="text"
        name="main_responsibilities"
        value={data.main_responsibilities}
        onChange={(e) => handleChange(e, onAddExperience)}
      />
      <InputField
        label="Date from and until when you worked for that company: "
        type="date"
        name="date_worked"
        value={data.date_worked}
        onChange={(e) => handleChange(e, onAddExperience)}
      />
    </form>
  );
}
