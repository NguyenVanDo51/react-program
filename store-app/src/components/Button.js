import styled from 'styled-components';

export default styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.07rem solid var(--lightBlue);
border-color: ${ props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${ props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.3rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
&:hover {
background-color: ${ props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: var(--mainWhite);
}
&:focus {
outline: none;
}
`;