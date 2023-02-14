#!/bin/bash

if [ $# -ne 2 ]
then
  echo "Must give 2 arguments: atoms/molecules/organisms, followed by the component name"
  exit 1
elif [[ ! "|atoms|molecules|organisms|" =~ "|${1}|" ]]
then
  echo "1st argument must be either 'atoms', 'molecules', or 'organisms'"
  exit 2
elif [[ ! "${2}" =~ ^[A-Z] ]]
then
  echo "The component name must be capitalised"
  exit 3
else
  mkDir "./components/${1}/${2}"
  cd "./components/${1}/${2}"
  cat > "${2}.tsx" << EOF
import styled from '@emotion/styled';

export interface ${2}Props {
  sampleTextProp: string;
}

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.seaFoam,
}));

const ${2}: React.FC<${2}Props> = ({ sampleTextProp }) => {
  return (
    <Container>
      {/* This is just an example */}
      {sampleTextProp}
    </Container>
  );
};

export default ${2};
EOF
  cat > "${2}.stories.tsx" << EOF
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ${2} from './${2}';
import mock${2}Props from './${2}.mocks';

export default {
  title: '${1}/${2}',
  component: ${2},
  argTypes: {},
} as ComponentMeta<typeof ${2}>;

const Template: ComponentStory<typeof ${2}> = (args) => <${2} {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mock${2}Props.base,
};
EOF
  cat > "${2}.mocks.tsx" << EOF
import { ${2}Props } from 'components/${1}/${2}/${2}';

const base: ${2}Props = {
  sampleTextProp: 'Hello world!',
};

const mock${2}Props = {
  base,
};

export default mock${2}Props;
EOF
fi
