export default function Header({ condition, temperature }) {
  return (
    <h2>
      {condition} {temperature} °C
    </h2>
  );
}
