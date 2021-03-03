import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: boder-box;
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webskit-scrollbar-thumb {
        background-color: darkgrey;
    }
}
body {
    font-family: 'Monsterrat', sans-serif;
    width: 100%;
}
h1 {
    padding: 2rem 0rem;
}
h3 {
    font-size: 2rem;
    font-family: 'Abril FatFace', cursive;
    font-weight: lighter;
}
p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a {
    text-decoration: none;
}
`
export default GlobalStyle;