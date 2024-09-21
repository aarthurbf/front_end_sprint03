import styled from "styled-components"

export const NavStyle = styled.section`
    .header{
        background-color: var(--color1);
    }
    .logo{
        width: 40%;
        height: 40%;
    }
    .header .header-container{
        display:flex;
        padding: 1rem 1.8rem;
        justify-content:space-between;
        align-items:center;
    }
    .header ul{
        display:flex;
    }
    .header .link{
        font-size: 1.3rem;
        padding: 0.6rem;
    }
    .name{
        color: var(--color6);
    }
    .name:hover{
        font-weight: 550;
    }
    .header .link:hover{
        cursor:pointer;
    }
`   