import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom';
import styled from 'styled-components'

function Searched() {

const [searchedRecipes , getSearchedRecipes] = useState([]);
const param = useParams();

useEffect( ()=>{
    console.log(param.search)
getSearched(param.search)
}, [param.search])

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        console.log(recipes)
        getSearchedRecipes(recipes.results)
      }

  return (
    <Grid>
      {searchedRecipes.map((item)=>{

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

export default Searched;