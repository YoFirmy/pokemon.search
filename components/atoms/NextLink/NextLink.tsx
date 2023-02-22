import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface NextLinkProps {
  href: string;
  children: ReactNode;
  isDisabled?: boolean;
}

const Wrapper = styled.div<{ isDisabled?: boolean }>(({ isDisabled, theme }) => ({
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: '6px',
  borderColor: theme.colors[isDisabled ? 'greyDark' : 'brownDark'],
  padding: '16px',
  textAlign: 'center',
  backgroundColor: theme.colors[isDisabled ? 'greyLight' : 'brownLight'],
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  color: theme.colors.greyDark,

  '&:hover': {
    backgroundColor: theme.colors[isDisabled ? 'greyLight' : 'brown'],
  },
}));

const NextLink: React.FC<NextLinkProps> = ({ href, isDisabled, children }) =>
  isDisabled ? (
    <Wrapper role="link" aria-disabled={true} isDisabled>
      {children}
    </Wrapper>
  ) : (
    <Link href={href} role="link" aria-disabled={false}>
      <Wrapper>{children}</Wrapper>
    </Link>
  );

export default NextLink;
