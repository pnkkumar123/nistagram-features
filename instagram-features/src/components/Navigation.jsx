import React from 'react'
import { CiHome,CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineExplore, MdLocalMovies,MdCreateNewFolder } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import {styled} from 'styled-components'
import {NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
    <Wrapper>
     <div className='navigation'>
        <div className="logo">
            <img src="\public\_97f4a9cd-c353-4575-9093-118aed203bc9.jpeg" alt="" />
        </div>
      <div className='home'>
      <CiHome  />
      <label htmlFor="#"><NavLink to='/' className='nav-link'>Home</NavLink></label>
      </div>
      <div className='home'>
       
      <CiSearch />
      
           <label ><NavLink to='/search' className='nav-link'>Search</NavLink></label>
     
      </div>
      <div className='home'>
      <MdOutlineExplore  /><label htmlFor="#"><NavLink to='/explore' className='nav-link'>Explore</NavLink></label>
      </div>
      <div className='home'>
      <MdLocalMovies /><label htmlFor="#"><NavLink to='/shorts' className='nav-link'>Shorts</NavLink></label>
      </div>
      <div className='home'>
      <LuMessageCircle /><label htmlFor="#"><NavLink to='/messages' className='nav-link'>Message</NavLink></label>
      </div>
      <div className='home'>
      <CiHeart /><label htmlFor="#"><NavLink to='/notification' className='nav-link'>Notifications</NavLink></label>
      </div>
      <div className='home'>
      <MdCreateNewFolder /><label htmlFor="#"><NavLink to='/create' className='nav-link'>Create</NavLink></label>
      </div>
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
height:100%;
width:260px;
top:0;
left:0;
bottom:0;
.navigation{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
    box-shadow: #000;
    border-right: 1px solid #ccc;
}
.logo{
   img{
    width:70px;
    height:70px;
    justify-content:center;
    align-items:center;
   }
}
}
.home{
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:20px;
}
.nav-link{
    text-decoration:none;
    color:gray;
}
.nav-link:hover{
    color:black;

}
@media (max-width:767px){
    .navigation{
        flex-direction:row;
        width:100%;
        height:50px;
        jusitfy-content:space-around;
        padding:0.5rem;
    }
    .home{
        flex-direction:row;
        align-items:center
    }
}
`


export default Navigation