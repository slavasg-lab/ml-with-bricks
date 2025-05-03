/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Typography from "../Typography/Typography";

interface Props {
  to: string;
  children: any;
  icon?: any;
}

const InTextLink = ({ to, children, icon }: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper href={to} target="_blank">
      {!!icon && icon}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display:  inline-flex;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    bottom: 0;
    width: 100%;
    border-bottom: 2px dotted currentColor;
  }

  & > p {
    width: auto;
  }
`;
export default InTextLink;
