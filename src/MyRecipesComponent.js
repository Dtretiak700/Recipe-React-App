function MyRecipesComponent({label, calories, image, ingredients, cautions, dietLabels, cuisineType}) {
    
    return (
        <div>
            <div className="recipe-container">
                <h2 className="title">{label}</h2>
                <img src={image} alt="Recipe" className="image"/>
                <h4 className="text-title">Cuisine - {cuisineType.join(", ")}</h4>
                <ul className="list-style">
                    {ingredients.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="info-container">
                    <h4 className="text-info">Calories: {calories.toFixed()}</h4>
                    <h4 className="text-info">Cautions: {cautions.join(", ")}</h4>
                    <h4 className="text-info">Diet Labels: {dietLabels.join(", ")}</h4>
                </div>
            </div>            
        </div>
    )
}

export default MyRecipesComponent;