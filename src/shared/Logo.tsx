import React, { FC } from 'react';
import styled from '@emotion/styled';
import logoImage  from '@/assets/images/logo.png';

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	
	img {
		margin-right: 10px;
		width: 45px;
		height: 45px;
	}

	a {
		color: ${(props:any) => props.theme.colors.primary}
	}
`;

export const Logo: FC = () => {
	return (
		<LogoWrapper color="red">
			<img src={logoImage} alt="Game of life"/>
			<div>Design and code by <a href="https://github.com/arturhimself" target="_blank">Artur Sitnikov</a></div>		
		</LogoWrapper>
	)
};
