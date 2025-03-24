import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {useMenuStore} from '@/stores';
import React from 'react';

const CollapseIcon : React.FC = () => {
	const isCollapse = useMenuStore((state) => state.isCollapse);
	const setIsCollapse = useMenuStore((state) => state.setIsCollapse);
	return (
		<div
			className="collapsed"
			onClick={() => {
				setIsCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default CollapseIcon;
