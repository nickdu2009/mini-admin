import { Dropdown, MenuProps } from 'antd';
import { useGlobalStore } from '@/stores';
import React from 'react';

const Language : React.FC  =  () => {
	const language = useGlobalStore(state => state.language);
	const setLanguage = useGlobalStore(state => state.setLanguage);

	const menuItems : MenuProps['items'] = [
		{
			key: "1",
			label: <span>简体中文</span>,
			onClick: () => setLanguage("zh"),
			disabled: language === "zh"
		},
		{
			key: "2",
			label: <span>English</span>,
			onClick: () => setLanguage("en"),
			disabled: language === "en"
		}
	];

	return (
		<Dropdown menu={{ items: menuItems }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};

export default Language;