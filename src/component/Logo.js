import styled from "styled-components";

const Title = styled.a`
  .logo {
    font-family: "Nanum Gothic Coding", monospace;
    height: 100%;
    font-size: 30px;
    background-color: black;
    color: white;
    padding: 0px 5px;
    width: 50px;
  }

  .logo:nth-child(${(props) => (props.reverse ? "odd" : "even")}) {
    background-color: white;
    color: black;
  }

  &:hover {
    .logo:nth-child(1) {
      background-color: red;
      color: white;
    }
    .logo:nth-child(2) {
      background-color: #ffac1c;
      color: white;
      transition-delay: 0.3s;
    }
    .logo:nth-child(3) {
      background-color: yellowgreen;
      color: white;
      transition-delay: 0.6s;
    }
    .logo:nth-child(4) {
      background-color: blue;
      color: white;
      transition-delay: 0.9s;
    }
    .logo:nth-child(5) {
      background-color: purple;
      color: white;
      transition-delay: 1.2s;
    }
  }
`;

const Logo = ({ reverse }) => {
  return (
    <Title href="#" reverse={reverse}>
      <span className="logo">W</span>
      <span className="logo">E</span>
      <span className="logo">I</span>
      <span className="logo">R</span>
      <span className="logo">D</span>
    </Title>
  );
};

export default Logo;
