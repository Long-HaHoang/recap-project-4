export default function List({ activities, onGoodWeather }) {
  const goodWeatherActivities = activities.filter(
    (activiy) => activiy.isForGoodWeather === onGoodWeather
  );

  return (
    <>
      <h2>{onGoodWeather ? "Wow, good weather!" : "Stay at home!"}</h2>
      <ul>
        {goodWeatherActivities.map((activiy) => (
          <li key={activiy.id}>{activiy.name}</li>
        ))}
      </ul>
    </>
  );
}
