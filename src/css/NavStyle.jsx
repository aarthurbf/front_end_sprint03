import styled from "styled-components"

export const NavStyle = styled.section`
    .header{
        background: #3D40F5;
    }

    .header .header-container{
        display:flex;
        padding:30px 40px;
        justify-content:space-between;
        align-items:center;
    }
    .header ul{
        display:flex;
    }
    .header .link{
        font-size:1.5rem;
        padding:10px;
        color:#00ffff;
    }
    .header .link:hover{
        border-bottom:2px solid #fff;
        cursor:pointer;
    }
`   