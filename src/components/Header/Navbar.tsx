/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface MenuItem {
  intlId: string;
  link: string;
}

const navigation: MenuItem[] = [
  { intlId: "experiments", link: "/experiments" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = "fruit-predictor";

  return (
    <Wrapper>
      {navigation.map((el) => (
        <NavItem
          key={`header-navbar-${el.intlId}`}
          $isActive={pathname === el.link}
        >
          <Link to={el.link}>{t(`Navigation.${el.intlId}` as any)}</Link>
        </NavItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
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

export default Navbar;
