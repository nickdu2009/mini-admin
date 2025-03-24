import { LOGIN_URL, PROFILE_URL } from '@/config';
import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, message, Modal, MenuProps } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "./InfoModal";
import PasswordModal from "./PasswordModal";
import { useGlobalStore } from '@/stores';

const AvatarIcon : React.FC = () => {
	const setToken = useGlobalStore(state => state.setToken);
	const userInfo = useGlobalStore(state => state.userInfo);
	const navigate = useNavigate();

	interface ModalProps {
		showModal: (params: { name: number }) => void;
	}

	const passRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null);

	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				setToken("");
				message.success("退出登录成功！");
				navigate(LOGIN_URL);
			}
		});
	};

	const menuItems  : MenuProps['items'] = [
		{
			key: "1",
			label: <span className="dropdown-item">个人信息</span>,
			icon: <UserOutlined />,
			onClick: () => {
				navigate(PROFILE_URL);
			}
		},
		{
			type: "divider"
		},
		{
			key: "2",
			label: <span className="dropdown-item">退出登录</span>,
			onClick: logout
		}
	]

	return (
		<>
			<Dropdown menu={{items: menuItems}} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={userInfo?.avatar || 'http://www.bitxx.top/images/my_head-touch-icon-next.png'} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

export default AvatarIcon;
