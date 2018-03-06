import styled, { css } from "styled-components";

// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
export default styled.section`
    > * {
        color: black;
    }

    @media (min-width: 500px) {
        > * {
            color: green;
        }
    }

    /* Awesome version */
    ${props =>
        props.isAwesome &&
        css`
            > * {
                color: blue;
                @media (min-width: 500px) {
                    color: pink;
                }
            }
        `};
`;
