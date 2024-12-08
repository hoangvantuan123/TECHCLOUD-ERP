import {
  useEffect,
  useState,
  useMemo,
  lazy,
  Suspense,
  useCallback,
} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Sidebar from '../components/sildebar/sidebar'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { checkActionPermission } from '../../permissions'
import BreadcrumbRouter from '../components/sildebar/breadcrumb'
import Spinner from '../page/default/load'
import ViewTest from '../page/test/viewTest'
import Home from '../page/home/home'
import Login from '../auth/login'
import decodeJWT from '../../utils/decode-JWT'
import { transformDataMenu } from '../../utils/transformDataMenu'
import ErrorPage from '../page/default/errorPage'
const DeliveryList = lazy(() => import('../page/material/deliveryList'))
const WaitingIqcStockIn = lazy(
  () => import('../page/material/waitingIqcStockIn'),
)

const StockOutRequest = lazy(() => import('../page/material/stockOutRequest'))
const UserManagement = lazy(() => import('../page/system/userManagement'))
const RoleManagement = lazy(() => import('../page/system/roleManagement'))
const ProfileUserId = lazy(() => import('../page/system/profileUserId'))
const MenuTechnique = lazy(() => import('../page/system/menuTechnique'))
const RootMenuTechnique = lazy(() => import('../page/system/rootMenuTechnique'))
const StockOutRequestFiFo = lazy(() => import('../page/material/stockOutFiFo'))

const { Content } = Layout

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuTransForm, setMenuTransForm] = useState([])
  const [rootMenuItems, setRootMenuItems] = useState([])
  const [errorMenu, setErrorMenu] = useState(false)
  const [userPermissions, setUserPermissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const rolesMenu = localStorage.getItem('roles_menu')

  const processRolesMenu = useCallback(async () => {
    if (!rolesMenu) return
    try {
      const data = decodeJWT(rolesMenu)
      const settingItems = data?.data[0]?.menu || []
      const rootMenuItems = data?.data[1]?.rootMenu || []
      setUserPermissions(settingItems)
      setRootMenuItems(rootMenuItems)
      const transformedMenu = transformDataMenu(settingItems)
      setMenuTransForm(transformedMenu)
    } catch (error) {
      setErrorMenu(true)
    }
  }, [rolesMenu])

  useEffect(() => {
    processRolesMenu()
  }, [processRolesMenu])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const skippedRoutes = ['/u/login', '/u/home']

  const checkLoginStatus = () => {
    const token = Cookies.get('a_a')
    const userInfo = localStorage.getItem('userInfo')
    const rolesMenu = localStorage.getItem('roles_menu')

    if (token && userInfo && rolesMenu) {
      setIsLoggedIn(true)
    } else {
      Cookies.remove('a_a')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('rolesMenu')
      navigate('/u/login')
    }
  }

  useEffect(() => {
    if (
      !skippedRoutes.includes(location.pathname) &&
      !location.pathname.startsWith('/test/') &&
      !location.pathname.startsWith('/downloads/')
    ) {
      checkLoginStatus()
    }
  }, [location.pathname])

  if (errorMenu) return <ErrorPage />

  return (
    <Routes>
      <Route
        path="u/login"
        element={<Login processRolesMenu={processRolesMenu} />}
      />
      <Route
        path="/*"
        element={
          <Layout className="h-[calc(100vh-30px)]">
            <Sidebar
              permissions={userPermissions}
              rootMenu={rootMenuItems}
              menuTransForm={menuTransForm}
            />
            <Layout>
              <Content className="bg-slate-50">
                <Suspense fallback={<Spinner />}>
                  <BreadcrumbRouter />
                  <Routes>
                    <Route
                      path="u/warehouse/material/delivery-list"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'material-1-1',
                          'View',
                        ) ? (
                          <DeliveryList
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/warehouse/material/waiting-iqc-stock-in/:id"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'material-1-1',
                          'View',
                        ) ? (
                          <WaitingIqcStockIn
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/warehouse/material/stock-out-request"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'material-1-4',
                          'View',
                        ) ? (
                          <StockOutRequest
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/user-management"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'user_management-1-1',
                          'View',
                        ) ? (
                          <UserManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/warehouse/material/stock-out-request/:id"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'material-1-4',
                          'View',
                        ) ? (
                          <StockOutRequestFiFo
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/user-management/profile/:id/:name"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'user_management-1-2',
                          'View',
                        ) ? (
                          <ProfileUserId
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/role-management"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'user_management-1-2',
                          'View',
                        ) ? (
                          <RoleManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/technique/menu-items"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'technique-1-2',
                          'View',
                        ) ? (
                          <MenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/technique/root-menu"
                      element={
                        checkActionPermission(
                          userPermissions,
                          'technique-1-1',
                          'View',
                        ) ? (
                          <RootMenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ErrorPage />
                        )
                      }
                    />
                    <Route
                      path=""
                      element={
                        <Home
                          permissions={userPermissions}
                          isMobile={isMobile}
                        />
                      }
                    />
                    <Route
                      path="/u/home"
                      element={
                        <Home
                          permissions={userPermissions}
                          isMobile={isMobile}
                        />
                      }
                    />
                  </Routes>
                </Suspense>
              </Content>
            </Layout>
          </Layout>
        }
      />
    </Routes>
  )
}

const App = () => (
  <Router>
    <UserRouter />
  </Router>
)

export default App
