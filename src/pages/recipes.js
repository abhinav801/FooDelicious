import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components'

function Recipes() {
     const [recipedata, setrecipedata] = useState({})
     const[activeTab , setActiveTab] = useState('instructions')

    const param = useParams();


    const recipesDetail = async () =>{
        const data= await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const recipeDetail= await data.json();
        setrecipedata(recipeDetail);
    }


useEffect(()=>{
recipesDetail();
} , [param.name])

  return (
    <DetailWrapper>
        <Imagesection>
            <h3>
                {recipedata.title}
            </h3>
            <img src={recipedata.image} />
        </Imagesection>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' :''} onClick={()=> setActiveTab('instructions') }>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' :''} onClick={()=> setActiveTab('ingredients') }>Ingredients</Button>
           {activeTab === 'instructions' &&  <div>
                <h3 dangerouslySetInnerHTML={{__html: recipedata.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: recipedata.instructions}}></h3>
            </div> }
           {activeTab === 'ingredients' && <ul>
                {recipedata.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>}
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top: 5rem;
margin-bottom:5em;
margin-left:7rem;
display:flex;
.active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
}


`
const Imagesection= styled.div`
img{
    padding:2rem;
    height:23rem;
    width:23rem;
    border-radius:2rem;
}
h3{
    margin-left:8%;
    color:#454444;
}
`
const Button= styled.button`

padding:1rem 1rem;
font-size:1rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:500;
cursor:pointer;
`
const Info = styled.div`
margin-left:5%;
h3{
    margin-top:2rem;
    margin-bottom:0.5rem;
    font-size:1rem;
    line-height:1.18rem;
    font-weight:200;
}
li{
    font-size:1rem;
    line-height:1.5rem;
}
ul{
    margin-top:2rem;
}
`
export default Recipes;