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
        padding: 0.7rem;
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
    .icon{
        width:1.2rem;        
    }

    @media (max-width: 768px) {
        .header .header-container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .logo {
            width: 50%;
            height: auto;
            margin: 0 auto;
            display: block;
        }

        .header ul {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .header .link {
            padding: 0.5rem;
            font-size: 1.2rem;
        }
    }
    @media (max-width: 425px){
        .header ul{
            flex-direction: column;
        }
    }
    
`   