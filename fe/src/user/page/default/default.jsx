import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Search } = Input
const { Title, Text } = Typography
const { TabPane } = Tabs
const { Header, Content, Footer } = Layout
import 'moment/locale/vi'
import BG from '../../../assets/ItmLogo.png'

export default function Default({ permissions, isMobile }) {
  const { t } = useTranslation()

  return (
    <Layout className="h-screen  bg-slate-50">
      <Helmet>
        <title>ITM - {t('Work Page')}</title>
      </Helmet>

      <div className="h-[calc(100vh-100px)] overflow-auto">
        <Header className="bg-white shadow-md px-4">
          <Title level={3} className="text-center">
            {t('Work Page Header')}
          </Title>
        </Header>

        <Content className="flex flex-col  justify-center items-center bg-slate-50 px-4">
          <div className="text-center">
            <img
              src={BG}
              className="w-full opacity-45 h-auto mb-10"
              alt="Background"
            />
          </div>
        </Content>

        <Footer className="text-center bg-gray-100">
          <Text className="text-base">ITM SEMICONDUCTOR CO.,LTD ©2024</Text>
        </Footer>
      </div>
    </Layout>
  )
}
