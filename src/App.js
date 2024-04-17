import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import HomePage from './HomePage';

function App() {
  const MY_ID = '3852453b';
  const MY_KEY = '208150be6e38eae2d9dee7f16793b663c7';

  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=%${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  return (
    <div className="App">
      <HomePage setWordSubmitted={setWordSubmitted}/>

      <div className='recipes-block'>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent key={index}
                              label={element.recipe.label}
                              calories={element.recipe.calories}
                              image={element.recipe.image}
                              ingredients={element.recipe.ingredientLines}
                              cautions={element.recipe.cautions}
                              dietLabels={element.recipe.dietLabels}
                              cuisineType={element.recipe.cuisineType} />
          ))}
      </div>
    </div>
  );
}

export default App;
