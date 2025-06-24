export default function handleChange(e, change) {
  const { name, value } = e.target;
  change(name, value);
}
