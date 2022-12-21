export default function List({ activities, onGoodWeather, onDeleteActivity }) {
  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === onGoodWeather
  );

  return (
    <>
      <h2>{onGoodWeather ? "Wow, good weather!" : "Stay at home!"}</h2>
      <ul>
        {goodWeatherActivities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button type="button" onClick={() => onDeleteActivity(activity.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
