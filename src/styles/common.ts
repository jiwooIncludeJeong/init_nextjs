import styled, { css } from 'styled-components';

export const Col = css`
  display: flex;
  flex-direction: column;
`;
export const Row = css`
  display: flex;
  flex-direction: row;
`;
export const HoverBackground = css`
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const Btn = css`
  cursor: pointer;
  ${Row}
`;

export const Span = styled.span<{
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}>`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ color }) => color && `color: ${color}`};
`;
