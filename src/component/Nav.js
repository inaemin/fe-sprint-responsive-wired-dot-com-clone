import { useState } from "react";
import styled from "styled-components";
import "../App.css";
import Logo from "./Logo";

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const TopButton = styled.div`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background-color: #bfd780;
  box-shadow: 2px 4px 7px 1px #00000012;
  bottom: 24px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.hidden {
    display: none;
  }
  i {
    color: white;
    font-size: 25px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .fa-bars {
    margin: 0px 20px;
    font-size: 25px;
  }

  .subscribe-btn {
    padding: 5px 10px;
    background-color: var(--blue);
    color: white;
    letter-spacing: 2px;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }

  .fa-magnifying-glass {
    margin: 0px 20px;
    display: none;
    &:hover {
      color: var(--blue);
      text-decoration: none;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    // 모바일 : 768px ~ :: 768px 미만 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      display: block;
    }
  }
`;

const Menu = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  flex-grow: 2;
  margin-left: 20px;

  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    padding: 0px 10px;
    display: none;
    &:hover {
      color: var(--blue);
      text-decoration: underline;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      display: block;
    }

    &:nth-child(n + 4) {
      display: none;
      @media only screen and (min-width: ${BREAK_POINT_PC}px) {
        display: block;
      }
    }

    &:last-child {
      position: relative;
      display: none;

      // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
      @media only screen and (min-width: ${BREAK_POINT_TABLET}px) and (max-width: ${BREAK_POINT_PC}px) {
        display: block;
      }
    }

    .fa-chevron-down {
      padding-left: 3px;
    }
  }

  span {
    padding: 5px 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    display: none;
    &:hover {
      color: var(--blue);
      text-decoration: underline;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    // 모바일 : 768px ~ :: 768px 미만 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      display: block;
    }
  }

  .bollom {
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    left: -40px;
    bottom: -275px;
    font-size: 16px;
    text-align: left;
    ul {
      display: block;
      margin: 10px 0px;
      li {
        text-align: left;
        padding: 20px 40px;
        color: black;
        text-decoration: none;
        font-size: 12px;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
          transition: none;
        }
      }
    }
  }

  .bollom:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -18.5px;
    left: 49px;
  }

  .bollom:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #7f7f7f transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -20px;
    left: 49px;
  }
`;

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  // 제일 위로 올라가는 함수
  const toTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <TopButton onClick={toTop}>
        <i className="fa-solid fa-arrow-up-long"></i>
      </TopButton>
      <div className="header">
        <Wrapper>
          <div>
            <i className="fa-solid fa-bars"></i>
            <Logo reverse={false} />
          </div>
          <Menu>
            <ul>
              <li>BACKCHANNEL</li>
              <li>BUSINESS</li>
              <li>CULTURE</li>
              <li>GEAR</li>
              <li>IDEAS</li>
              <li>SCIENCE</li>
              <li>SECURITY</li>
              <li
                onMouseOver={() => {
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
              >
                MORE<i className="fa-solid fa-chevron-down"></i>
                {isHovering ? (
                  <div className="bollom">
                    <ul>
                      <li>GEAR</li>
                      <li>IDEAS</li>
                      <li>SCIENCE</li>
                      <li>SECURITY</li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>

            <span>SIGN IN</span>
          </Menu>
          <div>
            <span className="subscribe-btn">SUBSCRIBE</span>
          </div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
