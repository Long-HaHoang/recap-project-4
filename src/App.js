import "./App.css";
import Form from "./component/Form";
import List from "./component/List";
import { useState } from "react";
import uuid from "react-uuid";
console.clear();
const initalArrayObject = [
  {
    id: uuid,
    name: "Sitzen unter Palmen",
    isForGoodWeather: true,
  },
];
const isGoodWeather = true;

function App() {
  const [activities, setActivity] = useState(initalArrayObject);

  function handleAddActivity(data) {
    const newData = {
      id: uuid,
      name: data.name,
      isForGoodWeather: data.isForGoodWeather ? true : false,
    };

    setActivity([newData, ...activities]);
    console.log(activities);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} onGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
