import InputField from "./InputField";

export default function Education({ data, onAddEducation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onAddEducation(name, value);
  };

  return (
    <form>
      <InputField
        label="School Name: "
        type="text"
        name="school_name"
        value={data.school_name}
        onChange={handleChange}
      />
      <InputField
        label="Title of study: "
        type="text"
        name="title_of_study"
        value={data.title_of_study}
        onChange={handleChange}
      />
      <InputField
        label="Date of study: "
        type="date"
        name="date_of_study"
        value={data.date_of_study}
        onChange={handleChange}
      />
    </form>
  );
}
