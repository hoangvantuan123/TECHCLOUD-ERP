import { ChevronsLeftIcon } from '../icon'
const SidebarContent = ({ collapsed, toggleSidebar }) => {
  return (
    <>
      <div
        className=" flex items-end justify-end cursor-pointer "
        onClick={toggleSidebar}
      >
        {collapsed ? (
          <div className="p-1 hover:bg-slate-100 rounded-lg hover:opacity-85 opacity-60 ">
            <ChevronsLeftIcon />
          </div>
        ) : (
          <div className="p-1 hover:bg-slate-100 rounded-lg hover:opacity-85 opacity-60 ">
            <ChevronsLeftIcon />
          </div>
        )}
      </div>
    </>
  )
}

export default SidebarContent
