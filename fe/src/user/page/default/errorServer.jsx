import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
const { Search } = Input
const { Title, Text } = Typography
import BG from '../../../assets/ItmLogo.png'
import 'moment/locale/vi'
import '../../static/css/scroll_container.css'

export default function ErrorServer() {
  const { t } = useTranslation()

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Error')}</title>
      </Helmet>

      <div className="grid h-screen place-content-center bg-px-4 ">
        <div className="text-center flex flex-col  justify-center items-center">
          <img src={BG} className=" w-full  opacity-45 h-auto mb-10" />

          <div className="container mx-auto px-4">
            <p className="mt-4 text-gray-500 text-sm">
              {t(
                'Hiện tại, không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn hoặc thử lại sau.',
              )}
            </p>

            <p className=" text-gray-500 text-sm ">
              {t(
                'Nếu sự cố vẫn tiếp diễn, vui lòng liên hệ với bộ phận hỗ trợ.',
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
