import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${({theme}) => css`
        html,
        body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            background: url('/static/background.png');
            background-position: 60%;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            color: ${theme.colors.purple700};
        }

        a {
            color: inherit;
        }

        * {
            box-sizing: border-box;
        }
    `}
`

export default GlobalStyle