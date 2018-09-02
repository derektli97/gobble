import styled from "styled-components";

export const Background = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SponsorContainer = styled.div`
  width: 100%;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export const SponsorRow = styled.div`
  width: 100%;
  text-align: middle;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-wrap: wrap;
`;

export const SponsorLogo = styled.img`
  width: 200px;
  text-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SponsorTitleRow = styled.div`
  width: 100%;
  text-align: middle;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-bottom: 40px;
`;

export const SponsorTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin: 40px;
  margin-bottom: 0px;
`;
