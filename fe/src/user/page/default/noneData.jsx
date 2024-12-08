import 'moment/locale/vi'
import BG from '../../../assets/ItmLogo.png'

export default function NoneData({ permissions, isMobile }) {
    return (
        <div className="grid h-full place-content-center items-center justify-center bg-white border rounded-lg">
            <img src={BG} className="w-80 opacity-50 h-auto" />
        </div>
    )
}
