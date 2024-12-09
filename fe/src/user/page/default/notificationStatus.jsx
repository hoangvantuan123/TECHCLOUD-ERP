import { useMemo, useState, useEffect } from 'react';
import { notification, Spin } from 'antd';
import { CheckCircleTwoTone, WarningOutlined, LoadingOutlined } from '@ant-design/icons';
const Context = React.createContext({
    name: 'Default',
});

const NotificationApp = ({ loading, error }) => {
    const [api, contextHolder] = notification.useNotification();
    const [isLoading, setIsLoading] = useState(loading);
    console.log('loading', loading)
    useEffect(() => {
        if (isLoading) {
            api.info({
                message: 'Đang tải...',
                description: 'Vui lòng đợi trong khi trang đang được tải.',
                placement: 'bottomRight',
                duration: 0,
                icon: <Spin indicator={<LoadingOutlined spin />} />,
                closable: false,
            });
        } else {
            api.destroy();
        }
    }, [loading, api]);

    useEffect(() => {
        if (error) {
            api.error({
                message: 'Có lỗi xảy ra!',
                description: 'Vui lòng thử lại sau.',
                placement: 'bottomRight',
                duration: 2,
                icon: <WarningOutlined style={{ color: 'red' }} />,
                closable: false,
            });
        }
    }, [error, api]);

    useEffect(() => {
        if (!loading && !error) {
            api.success({
                message: 'Thành công!',
                description: 'Dữ liệu đã được tải thành công.',
                placement: 'bottomRight',
                duration: 2,
                icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
                closable: false,
            });
        }
    }, [loading, error, api]);

    return (
        <>
            {contextHolder}
        </>
    );
};

export default NotificationApp;
