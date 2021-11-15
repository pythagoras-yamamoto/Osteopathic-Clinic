import styled from "styled-components";
import React from "react";
import { FooterMenuButton } from "./FooterMenuButton";

export const FooterMenu = () => {
  return (
    <SFooterMenu>
      <FooterMenuButton />
      <SFormList>
        <ul>
          <li className="form-list">
            <p>電話番号</p>
          </li>
          <li className="form-list">
            <p>住所</p>
          </li>
        </ul>
      </SFormList>
      <br></br>
      <SHosName>根津整体院</SHosName>
    </SFooterMenu>
  );
};

const SFooterMenu = styled.div`
  height: 120px;
  background-color: #faf0e6;
  border-top: solid 5px #ffb6c1;
  border-bottom: solid 5px #ffb6c1;
`;
const SFormList = styled.div`
  display: flex;
  justify-content: flex-end;
  .form-list {
    margin: 5px;
    border: solid 2px;
    list-style: none;
  }
`;
const SHosName = styled.p`
  text-align: center;
  position: center;
`;
