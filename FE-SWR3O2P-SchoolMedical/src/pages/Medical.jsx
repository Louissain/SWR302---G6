import React from 'react';
import MedicalList from "../Components/MedicalList";
import styled from 'styled-components';

const MedicalContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  min-height: calc(100vh - 64px);
`;

export default function Medical() {

  return (
    <MedicalContainer>
      
      <MedicalList />
    </MedicalContainer>
  );
}