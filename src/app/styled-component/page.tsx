// styled-component 사용시 use client 가 없으면 에러 발생
'use client';

import styled from 'styled-components';

export default function My() {
  return (
    <main>
      <Container>Styled Component</Container>
    </main>
  );
}

const Container = styled.div`
  border: 1px solid red;
`;
