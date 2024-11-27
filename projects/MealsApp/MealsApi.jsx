import {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";


const MealsApi = () => {
    const [mealsItems, setMealsItems] = useState([]);
    // useEffect to automatically fetch data on first render to populate the page
    // send request to url, chain promises to get response and catch errors if any
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response) => {setMealsItems(response.data.meals)})
            .catch((error) => {console.log(error)});
    }, []);
    // after useEffect mealsItems contains array of objects containing meal info
    // the mealsItems has objects where each object contains fields like mealname, mealid and image mealthumb,
    // destructure the data and return jsx code for rendering each item
    const itemList = mealsItems.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card">
                <img src={strMealThumb} alt={strMeal}/>
                <section className="content" key={idMeal}>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
    // finally render the itemList object containing destructured jsx code
    return (<div className="items-container">
        {itemList}
        </div>
    );
};

export default MealsApi;
