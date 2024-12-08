import { Helmet } from 'react-helmet'
import BG from '../../../assets/defaultLogo.png'

export default function ErrorPage() {
  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM</title>
      </Helmet>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <img src={BG} className=" w-auto  opacity-45 h-auto mb-10" />
        </div>
      </div>
    </div>
  )
}
