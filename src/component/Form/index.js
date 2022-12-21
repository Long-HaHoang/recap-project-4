import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function Form({ onAddActivity }) {
  function handleData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    event.target.reset();
    event.target.elements.name.focus();

    return onAddActivity(data);
  }

  return (
    <StyledForm type="submit" onSubmit={handleData}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">
        Name: <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="isForGoodWeather">
        good-weather Activity:{" "}
        <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" />
      </label>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
