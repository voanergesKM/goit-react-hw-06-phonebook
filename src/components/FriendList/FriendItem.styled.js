import styled from 'styled-components';

export const StyledFrendItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
