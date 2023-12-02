import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;

    h3{
        font-size: 32px;
        color: #fafafa;
        margin-top: 20px;
    }

    P{
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a{
        color: #66b0f0;
        text-decoration: none;
        cursor: pointer;
    }

    a.remover{
        color: red;
        margin-top: 10px;
    }
        
    hr{
        margin-top: 20px;
        border: 1px solid #fafafa60;
    }

    .links{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`