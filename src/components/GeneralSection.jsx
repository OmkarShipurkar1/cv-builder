import InputField from "./InputField";

export default function GeneralSection({ data, onAddInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onAddInfo(name, value);
  };

  return (
    <form onSubmit={handleChange}>
      <InputField
        label="Name :"
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />

      <InputField
        label="Email: "
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />

      <InputField
        label="Phone No:"
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
