import React from 'react';

import Pages from './pages/pages'
import Category from './components/category'
import {Link,  BrowserRouter} from 'react-router-dom'
import Search  from './components/search';
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'

function App (){


  return(
    <div>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>FooDelicious</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>

  )
}
const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight: 400;
font-family:'Lobster Two' , cursive;
`

const Nav = styled.div`
padding: 1rem 0rem;
display flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size:2rem;
}
`

export default App;