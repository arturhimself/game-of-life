import React, { FC } from 'react';
import { Logo } from '@/shared';

export const Header: FC = () => {
	return (
		<div>
			<Logo />
			<ul>
				<li><a href="/game">Start</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	);
};