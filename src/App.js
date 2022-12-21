import "./App.css";
import Form from "./component/Form";
import List from "./component/List";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import useLocalStorageState from "use-local-storage-state";

const initalArrayObject = [
  {
    id: uuid(),
    name: "Sitzen unter Palmen",
    isForGoodWeather: true,
  },
  {
    id: uuid(),
    name: "Laufen im Wald",
    isForGoodWeather: true,
  },
  {
    id: uuid(),
    name: "Bücher lesen",
    isForGoodWeather: false,
  },
];
// const isGoodWeather = true;

function App() {
  // TODO: use local-storage
  // const [activities, setActivity] = useState(initalArrayObject);

  const [activities, setActivity] = useLocalStorageState("activities", {
    defaultValue: initalArrayObject,
  });

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Sie haben Post");
      }
    }
    getWeather();
    const intervalId = setInterval(getWeather, 15000);
    return () => clearInterval(intervalId);
  }, []);

  function handleAddActivity(data) {
    const newData = {
      id: uuid(),
      name: data.name,
      isForGoodWeather: data.isForGoodWeather ? true : false,
    };

    setActivity([newData, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivity(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <Header
        condition={weather.condition}
        temperature={weather.temperature}
      ></Header>
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={activities}
        onGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}

export default App;
