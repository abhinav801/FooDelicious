import React , {useState , useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'

function Cuisine() {
const [cuisine , setCuisine] = useState([]);
let param = useParams();

useEffect(()=>{
getCuisine(param.type);
console.log(param.type)
},[param.type])

const getCuisine = async (name) => {
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
  const recipes = await data.json();
  console.log(recipes)
  setCuisine(recipes.results)
}

  return (
    <Grid>
      {cuisine.map((item)=>{

        return(
          <Card key={item.id}>
            <Link to={"/recipes/" + item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
          </Card>

        )
      })
      }
    </Grid>
  )
}
const Grid = styled.div`
display:grid;
grid-template-columns: 20rem 20rem 20rem;
grid-template-rows:20rem 20rem 20rem 20rem;
grid-gap: 1rem;
justify-content:center;
`
const Card= styled.div`
img{
  width:100%;
  border-radius:2rem;
  cursor:pointer;
}
a{
text-decoration:none;
}
h4{
  text-align:center;
  
  cursor:pointer;
}
`
export default Cuisine;
// grid-template-columns:repeat(auto-fit, minax(20rem, 1fr));