import styled from '@emotion/styled';

export interface BaseTemplateProps {
  sampleTextProp: string;
}

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.seaFoam,
}));

const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return (
    <Container>
      {/* This is just an example */}
      {sampleTextProp}
    </Container>
  );
};

export default BaseTemplate;
