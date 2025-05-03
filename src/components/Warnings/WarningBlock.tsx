/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { WarningIcon } from "../Icons/Icons";
import Typography from "../Typography/Typography";

interface Props {
  children: any;
}

const WarningBlock = ({ children }: Props) => {
  return (
    <Wrapper>
      <WarningIcon />
     <Typography.Text> {children}</Typography.Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 250, 225);
  margin: 20px 0;
  border: 1px solid rgb(165, 140, 0);
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 15px;


  & > svg {
    fill: rgb(165, 140, 0);
    width: 40px;
  }
`;
export default WarningBlock;
