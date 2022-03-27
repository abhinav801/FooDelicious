import React, {useEffect , useState} from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'



function Veggie() {
  const [Veggie , setVeggie] = useState([]);

   

    useEffect( () => {
        getVeggie()
    }, [])

const getVeggie = async () =>{
    
    const check = localStorage.getItem('veggie');

    if(check){
        setVeggie(JSON.parse(check));
    }
    else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const data= await api.json();

        localStorage.setItem('veggie' , JSON.stringify(data.recipes));

        setVeggie(data.recipes);
        console.log(data.recipes)
    }
        
                  
}

  return (
    
    <Wrapper>
            < h3>Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                
                pagination: false,
                drag: 'free',
                gap: '2%'
            }}>
           {Veggie.map((recipe)=>{
                return(
                    <SplideSlide key={recipe.id}>
                        <Card >
                        <Link to={"/recipes/" + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                        <Gradient/>
                        </Link>
                    </Card>
                    </SplideSlide>
                   
                    

                )
            })}
            </Splide>
    </Wrapper>
        
        
    
  )
}

const Wrapper = styled.div`
margin : 4rem 0rem;
h3{
    color:#454444;
    }
`;
const Card = styled.div`
min-height: 15rem;
min-width: 15rem;
border-radius: 2rem;
overflow:hidden;
position: relative;

img
 {
     border-radius:2rem;
     position: absolute;
     left: 0;
     width: 100%;
     height:100%;
     object-fit: cover;
     margin:10px;
 }
 p{
     position:absolute;
     z-index:5;
     left:3%;
     bottom:0%;
     transform: teranslate(-10%,0%);
     color:white;
     width:100%;
     text-align:center;
     
     font-size:0.83rem;
     height:20%;
     display:flex;
     justify-content:center;
     align-item:center;
     cursor:pointer;
 }
 `;

const Gradient = styled.div`
left:3.4%;
border-radius:1rem;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`



export default Veggie;