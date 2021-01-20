import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface CellItemProps {
	isFilled: number,
	width: number,
}

const BaseCell = css`
  position: relative;
  display: inline-block;
  transition: .1s;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  border-right: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;

  &:hover {
    background: #ececec;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FilledCell = css`
    background: #000;
`;

export const CellItem = styled.span<CellItemProps>`
	${BaseCell};
	width: ${({ width }) => width}px;
	${({ isFilled }) => isFilled ? FilledCell : ''};
`;