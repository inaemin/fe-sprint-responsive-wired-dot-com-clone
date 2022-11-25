import styled from "styled-components";
import "../App.css";
import Article from "./Article";
import { data } from "../data/dummyData";

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const MainArea = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0px 50px 0px;
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    padding: 100px 30px 50px 30px;
    display: flex;
    > div:first-child {
      margin-right: 20px;
      width: 70%;
    }
    > div:last-child {
      padding-left: 20px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      width: 30%;
    }
  }
`;

const SectionTitle = styled.div`
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Grid1 = styled.div`
  display: grid;
  > article:first-child {
    h1 {
      font-size: 35px;
      font-weight: 700;
      line-height: 100%;
      margin-bottom: 10px;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 40px;

    > article:nth-child(1) {
      grid-area: 1 / 2 / -1 / -1;
    }
    > article:nth-child(2) {
      grid-area: 1 / 1 / 2 / 2;
    }
    > article:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
      margin: 0;
    }
  }
`;

const Grid2 = styled.div`
  display: grid;

  > article {
    margin: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h1 {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    h3 {
      margin-bottom: 15px;
    }
    img {
      display: none;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) and (max-width: ${BREAK_POINT_PC}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0px;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    display: grid;
    > article {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      height: 160px;
      padding: 10px;

      img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center;
      }

      > div {
        display: flex;
        flex-direction: column;
        width: 60%;
      }
    }
  }

  // 모바일 : 768px ~ :: 768px 미만 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) and (max-width: ${BREAK_POINT_PC}px) {
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

const Render = () => {
  return (
    <MainArea>
      <div>
        <SectionTitle>TODAY'S PICKS</SectionTitle>
        <Grid1>
          {data["today-picks"].map((el) => (
            <Article
              theme={el.theme}
              title={el.title}
              summary={el.summary}
              author={el.author}
              img={el.img}
            />
          ))}
        </Grid1>
      </div>
      <div>
        <SectionTitle>MOST RECENT</SectionTitle>
        <Grid2>
          {data["most-recent"].map((el) => (
            <Article title={el.title} author={el.author} img={el.img} />
          ))}
        </Grid2>
      </div>
    </MainArea>
  );
};

export default Render;
