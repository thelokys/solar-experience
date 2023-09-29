import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  width: 1200px;
  height: 800px;
  border: 1px solid black;
`;
export const Whiteboard = styled.div`
  flex: 1;
  position: relative;
  background-color: #fff;
`;

export const Toolbar = styled.div`
  display: grid;
  position: relative;

  width: 100px;
  height: 100%;
  background-color: #5c5c5c;
`;

export const Tool = styled.button`
  height: 50px;

  &:hover {
    filter: opacity(0.9);
    transition: all 0.4s ease;
  }
`;
