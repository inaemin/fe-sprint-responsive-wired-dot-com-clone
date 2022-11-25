import styled from "styled-components";
import "../App.css";
import Logo from "./Logo";

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-family: "Times New Roman", Times, serif;
    font-size: 14px;
    margin: 40px 0px;
    padding: 0px 20px;
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      padding: 0px;
      line-height: 120%;
      width: 50%;
    }
  }

  div:first-child {
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      width: 33%;
      text-align: left;
    }
  }

  .footer-menu {
    display: none;
    width: 33%;
    text-align: left;
    h5 {
      margin-bottom: 15px;
    }
    li {
      color: grey;
      padding: 5px 0px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      display: block;
    }
  }

  // 모바일 : 768px ~ :: 768px 미만 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  padding-bottom: 50px;
  color: grey;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    padding: 20px;
    font-size: 25px;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <Wrapper>
        <div>
          <Logo reverse={true} />
          <p>
            WEIRD is where tomorrow is realized. It is the essential source of information and ideas
            that make sense of a world in constant transformation. The WEIRD conversation
            illuminates how technology is changing every aspect of our lives—from culture to
            business, science to design. The breakthroughs and innovations that we uncover lead to
            new ways of thinking, new connections, and new industries.
          </p>
        </div>
        <div className="footer-menu">
          <h5>MORE FROM WEIRD</h5>
          <ul>
            <li>Subscibe</li>
            <li>Newsletters</li>
            <li>FAQ</li>
            <li>Weird Staff</li>
            <li>Press Center</li>
            <li>Coupons</li>
            <li>Editorial Standards</li>
            <li>Prime Day</li>
          </ul>
        </div>
        <div className="footer-menu">
          <h5>CONTACT</h5>
          <ul>
            <li>Advertise</li>
            <li>Contact Us</li>
            <li>Customer Care</li>
            <li>Jobs</li>
          </ul>
        </div>
      </Wrapper>
      <FooterBottom>
        <div>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
        <span>© Copyright ⓒ 2022 WEIRD</span>
      </FooterBottom>
    </div>
  );
};

export default Footer;
