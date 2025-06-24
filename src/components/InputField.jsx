export default function InputField({ label, type, name, value, onChange }) {
  return (
    <div className="">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}
