import './App.css';

const nameText = "Anton";
const urlObj = {
  name: "Google", url: "https://www.google.com/"
}
const numOne = 2;
const numTwo = 2;
const colorsArr = ["Червоний", "Синій", "Зелений"];

const App = () => {
  return (
    <>
      <h1>{nameText}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb2CFhB8FIMxvTkVr25gGh1McXEMhBkpgoA&s" alt="Пінгвіни" />
      <a href={urlObj.url}>{urlObj.name}</a>
      <p>{numOne + numTwo}</p>
      <ul>
        {colorsArr.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
