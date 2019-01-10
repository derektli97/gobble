import styled from "styled-components";
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 80vh;
  box-shadow: 0px 0px 10px #888888;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const MapTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  height: 8%;
  color: white;
  letter-spacing: 2px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Image = styled.img`
  display: flex;
  width: 78%;
  justify-content: center;
  align-items: center;
`;
