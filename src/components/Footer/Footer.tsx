import styled from "styled-components";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import Typography from "../Typography/Typography";
import { Link } from "react-router-dom";

interface MenuItem {
  intlId: string;
  link: string;
}

const navigation: MenuItem[] = [
  { intlId: "privacyPolicy", link: "/privacy-policy" },
  { intlId: "imprint", link: "/imprint" },
];

const Footer = () => {
  const { t } = useTranslation();
  const pathname = "";
  return (
    <Wrapper>
      <Container>
        <Row>
          <Typography.Text>
            © 2025 Viacheslav Sydora. All rights reserved.
          </Typography.Text>
          <NavBox>
            {navigation.map((el) => (
              <NavItem
                key={`header-navbar-${el.intlId}`}
                $isActive={pathname === el.link}
              >
                <Link to={el.link}>{t(`Navigation.${el.intlId}` as any)}</Link>
              </NavItem>
            ))}
          </NavBox>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: lightgray; */
  width: 100%;
  position: relative;
  margin: 50px 0 20px;
  /* 
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: black;
  } */
  /* &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #303030;
  } */
  .copyright {
    text-align: center;
  }
`;

const Row = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

const LogoText = styled.p`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 24px;
`;

const NavBox = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 50px;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  font-family: var(--main-font);
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  font-size: 16px;
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 5px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.black : "transparent"};
    transition: all 0.15s ease;
  }

  &:hover::after {
    width: ${({ $isActive }) => ($isActive ? "0" : "100%")};
    background-color: ${({ theme }) => theme.black};
  }
`;

export default Footer;
