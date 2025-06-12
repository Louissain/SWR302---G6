import React from 'react';
import MedicalList from "../Components/MedicalList";
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MedicalContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  min-height: calc(100vh - 64px);
`;

export default function Medical() {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;
  if (currentUser && currentUser.role === 'parent') {
    return (
      <MedicalContainer style={{ textAlign: 'center', paddingTop: 80 }}>
        <h2 style={{ color: '#ff4d4f', marginBottom: 24 }}>Bạn không có quyền truy cập trang này!</h2>
        <button
          onClick={() => navigate('/')}
          style={{ padding: '10px 24px', background: '#1890ff', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Về trang chủ
        </button>
      </MedicalContainer>
    );
  }

  return (
    <MedicalContainer>
      
      <MedicalList />
    </MedicalContainer>
  );
}