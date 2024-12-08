import { Spin } from 'antd'
import BG from '../../../assets/ItmLogo.png'
import { LoadingOutlined } from '@ant-design/icons'
const Spinner = () => {
  return (
    <div className="grid h-screen place-content-center items-center  justify-center bg-slate-50 ">
      <img src={BG} className=" w-52  opacity-55 h-auto mb-10" />
      <Spin indicator={<LoadingOutlined spin />} />
    </div>
  )
}

export default Spinner
