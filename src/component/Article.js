import styled from "styled-components";

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.article`
  margin: 20px 0px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0px;
`;

const Theme = styled.h3`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Summary = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 15px;
`;

const Author = styled.h3`
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0px 10px 10px 0px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    display: inline-block;
    line-height: 0px;
  }
`;

const Article = ({ theme, title, summary, author, img }) => {
  return (
    <Wrapper>
      <Img src={img} />
      <Theme>{theme}</Theme>
      <div>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        {Array.isArray(author) ? (
          author.map((el) => <Author>{el}</Author>)
        ) : (
          <Author>{author}</Author>
        )}
      </div>
    </Wrapper>
  );
};

export default Article;
