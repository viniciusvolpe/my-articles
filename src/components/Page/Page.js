// @flow
import * as React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: calc(100% - 68px);
  padding: 15px 100px 0 100px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

type Props = {
  title: string,
  children: React.Node,
};

function Page({ title, children }: Props): React.Node {
  return (
    <PageContainer>
      <Title>{title}</Title>
      {children}
    </PageContainer>
  );
}

export default Page;
