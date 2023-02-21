import { NextLinkProps } from 'components/atoms/NextLink/NextLink';

const base: NextLinkProps = {
  href: '#',
  children: 'link text',
};

const disabled: NextLinkProps = {
  href: '#',
  children: 'link text',
  isDisabled: true,
};

const mockNextLinkProps = {
  base,
  disabled,
};

export default mockNextLinkProps;
