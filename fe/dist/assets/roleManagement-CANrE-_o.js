import {
  r as t,
  I as L,
  _ as F,
  j as e,
  B as $,
  aq as K,
  b as O,
  ar as N,
  u as J,
  a as X,
  e as Z,
  H as ee,
  T as ae,
} from './index-C0Ym1P--.js'
import { d as q } from './dayjs.min-BjUcqBoK.js'
import { G as te, a as se } from './getDeliveryList-CaPJCbkF.js'
import { l as z } from './lodash-CkJfpJgw.js'
import { C as ne } from './constants-DL4lOElu.js'
import './moment-kKzuUq52.js'
import { R as ie } from './SaveOutlined-C3P3HbZc.js'
import { F as A } from './Table-CEIi7oGT.js'
import './index-BMponDaS.js'
var le = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z',
          },
        },
      ],
    },
    name: 'usergroup-add',
    theme: 'outlined',
  },
  re = function (y, u) {
    return t.createElement(L, F({}, y, { ref: u, icon: le }))
  },
  ce = t.forwardRef(re)
function oe({ fetchData: x }) {
  return e.jsx('div', {
    className: 'flex items-center gap-2',
    children: e.jsx(
      $,
      {
        type: 'primary',
        icon: e.jsx(ie, {}),
        size: 'middle',
        className: 'uppercase',
        style: { backgroundColor: '#52c41a', borderColor: '#52c41a' },
        children: 'Save',
      },
      'Save',
    ),
  })
}
function de({
  data: x,
  loading: y,
  handleCheck: u,
  gridRef: C,
  setKeyPath: p,
  checkedPath: T,
  setCheckedPath: m,
}) {
  const [r, g] = t.useState(null),
    [o, d] = t.useState({ groupName: '', note: '' }),
    f = [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Editor' },
      { id: 3, name: 'Viewer' },
    ],
    I = [
      {
        id: 5441,
        user_id: 17696,
        login: 'VW12403433',
        name: 'BÙI QUỲNH HƯƠNG',
        language: 'vi',
        active: !0,
      },
      {
        id: 5440,
        user_id: 17695,
        login: 'VW12403432',
        name: 'LỮ ĐÌNH ANH',
        language: 'vi',
        active: !1,
      },
      {
        id: 5439,
        user_id: 17694,
        login: 'VW12403431',
        name: 'NÔNG HOÀNG YẾN',
        language: 'vi',
        active: !1,
      },
      {
        id: 5438,
        user_id: 17691,
        login: 'VW12403428',
        name: 'LÊ TÙNG DUY',
        language: 'vi',
        active: !0,
      },
      {
        id: 5437,
        user_id: 17693,
        login: 'VW12403430',
        name: 'TRIỆU THÙY LINH',
        language: 'vi',
        active: !1,
      },
      {
        id: 5436,
        user_id: 17692,
        login: 'VW12403429',
        name: 'HOÀNG NHƯ TỈNH',
        language: 'vi',
        active: !1,
      },
      {
        id: 5435,
        user_id: 17690,
        login: 'VW12403427',
        name: 'NGUYỄN TRỌNG LUÂN',
        language: 'vi',
        active: !1,
      },
      {
        id: 5434,
        user_id: 17689,
        login: 'VW12403426',
        name: 'TRƯƠNG NGỌC VŨ',
        language: 'vi',
        active: !1,
      },
      {
        id: 5433,
        user_id: 17688,
        login: 'VW12403425',
        name: 'NÔNG VĂN DOÃN',
        language: 'vi',
        active: !1,
      },
      {
        id: 5432,
        user_id: 17687,
        login: 'VW12403424',
        name: 'PHẠM THU TRANG',
        language: 'vi',
        active: !1,
      },
    ],
    h = [
      {
        id: 92,
        permission: 'Bảng công tổng hợp',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 90,
        permission: 'Bảng lương cá nhân',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 77,
        permission: 'Dữ liệu công theo tháng',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 75,
        permission: 'Công việc',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 74,
        permission: 'Thông báo',
        view: !1,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 76,
        permission: 'Chấm công',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
      {
        id: 73,
        permission: 'Home',
        view: !0,
        edit: !1,
        create: !1,
        delete: !1,
      },
    ],
    R = (a) => {
      g(a)
      const n = f.find((l) => l.id === a)
      d({ groupName: n.name, note: `Notes for ${n.name}` })
    },
    c = (a, n) => {
      h.map((l) => (l.id === a ? { ...l, [n]: !l[n] } : l))
    },
    G = [
      { title: 'Tên Người Dùng', dataIndex: 'name', key: 'name' },
      { title: 'Login', dataIndex: 'login', key: 'login' },
      { title: 'Ngôn ngữ', dataIndex: 'language', key: 'language' },
      { title: 'Ngày Tạo', dataIndex: 'create_date', key: 'create_date' },
      {
        title: 'Trạng Thái',
        dataIndex: 'active',
        key: 'active',
        render: (a) => (a ? 'Active' : 'Inactive'),
      },
    ],
    v = [
      { title: 'Permission', dataIndex: 'permission', key: 'permission' },
      {
        title: 'View',
        dataIndex: 'view',
        key: 'view',
        render: (a, n) =>
          e.jsx(N, { checked: a, onChange: () => c(n.id, 'view') }),
      },
      {
        title: 'Edit',
        dataIndex: 'edit',
        key: 'edit',
        render: (a, n) =>
          e.jsx(N, { checked: a, onChange: () => c(n.id, 'edit') }),
      },
      {
        title: 'Create',
        dataIndex: 'create',
        key: 'create',
        render: (a, n) =>
          e.jsx(N, { checked: a, onChange: () => c(n.id, 'create') }),
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
        key: 'delete',
        render: (a, n) =>
          e.jsx(N, { checked: a, onChange: () => c(n.id, 'delete') }),
      },
    ]
  return e.jsxs('div', {
    className: 'w-full gap-3 h-full flex items-center justify-center',
    children: [
      e.jsxs('div', {
        className:
          'w-1/4 h-full flex flex-col bg-white border rounded-lg overflow-hidden pb-10',
        children: [
          e.jsx('div', {
            className: 'font-medium text-xs mb-4 text-gray-700 uppercase p-3',
            children: 'NHÓM NGƯỜI DÙNG',
          }),
          e.jsx(K, {
            mode: 'inline',
            selectedKeys: [r == null ? void 0 : r.toString()],
            onClick: (a) => R(Number(a.key)),
            children: f.map((a) =>
              e.jsx(K.Item, { icon: e.jsx(ce, {}), children: a.name }, a.id),
            ),
          }),
        ],
      }),
      e.jsxs('div', {
        className:
          'w-10/12 h-full flex flex-col border bg-white p-3 rounded-lg  overflow-auto  scroll-container pb-10',
        children: [
          e.jsx('div', {
            className: 'font-medium text-xs mb-4',
            children: 'NGƯỜI DÙNG',
          }),
          e.jsxs('div', {
            className: 'mb-4',
            children: [
              e.jsx(O, {
                value: o.groupName,
                onChange: (a) => d({ ...o, groupName: a.target.value }),
                placeholder: 'Nhập tên nhóm',
                className: 'w-full mb-2',
              }),
              e.jsx(O.TextArea, {
                value: o.note,
                onChange: (a) => d({ ...o, note: a.target.value }),
                placeholder: 'Ghi chú',
                rows: 4,
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'mb-4',
            children: [
              e.jsx('div', {
                className: 'font-medium text-xs mb-2',
                children: 'Quyền Truy Cập',
              }),
              e.jsx(A, {
                dataSource: h,
                columns: v,
                pagination: !1,
                rowKey: 'id',
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'mb-4',
            children: [
              e.jsx('div', {
                className: 'font-medium text-xs mb-2',
                children: 'Danh Sách Người Dùng',
              }),
              e.jsx(A, {
                dataSource: I.filter((a) => a.group === o.groupName),
                columns: G,
                pagination: !1,
                rowKey: 'id',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
const { Title: ue, Text: we } = ae
function De({ permissions: x, isMobile: y }) {
  const { t: u } = J(),
    C = t.useRef(null),
    p = X(),
    [T, m] = t.useState(!1),
    [r, g] = t.useState([]),
    [o, d] = t.useState([]),
    [f, I] = t.useState(q().startOf('month')),
    [h, R] = t.useState(q()),
    [c, G] = t.useState(''),
    [v, a] = t.useState(4),
    [n, l] = t.useState(null),
    [w, U] = t.useState(null),
    [D, E] = t.useState(!1),
    j = t.useCallback((i) => i.format('YYYYMMDD'), []),
    k = t.useCallback(async () => {
      m(!0)
      try {
        const i = await te(j(f), j(h), c, v)
        g((i == null ? void 0 : i.data) || [])
      } catch {
        g([])
      } finally {
        m(!1)
      }
    }, [f, h, c, v, j]),
    M = t.useCallback(async () => {
      m(!0)
      try {
        const i = await se('', 6, 10003, 1, '%', '', '', '', '')
        d((i == null ? void 0 : i.data) || [])
      } catch {
        d([])
      } finally {
        m(!1)
      }
    }, []),
    b = t.useMemo(() => z.debounce(k, 100), [k]),
    S = t.useMemo(() => z.debounce(M, 100), [M]),
    W = t.useCallback(
      (i) => {
        var B
        const { rowKey: H } = i,
          _ = (B = C.current) == null ? void 0 : B.getInstance(),
          V = n
        V !== null && _ && _.uncheck(V)
        const s = r[H],
          Y = {
            DelvNo: s.DelvNo,
            DelvMngNo: s.DelvMngNo,
            ImpType: s.ImpType,
            TotalQty: s.TotalQty,
            OkQty: s.OkQty,
            RemainQty: s.RemainQty,
            DelvDate: s.DelvDate,
            CustSeq: s.CustSeq,
            CustNm: s.CustNm,
            DomOrImp: s.DomOrImp,
            PurchaseType: s.PurchaseType,
            BizUnitName: s.BizUnitName,
            BizUnit: s.BizUnit,
            EmpSeq: s.EmpSeq,
            EmpName: s.EmpName,
            DeptSeq: s.DeptSeq,
            DeptName: s.DeptName,
            CurrSeq: s.CurrSeq,
            CurrName: s.CurrName,
            ExRate: s.ExRate,
          },
          Q = ne.AES.encrypt(JSON.stringify(Y), 'TEST_ACCESS_KEY').toString(),
          P = Z(Q)
        l(H), U(P), p(`/u/warehouse/material/waiting-iqc-stock-in/${P}`)
      },
      [n, r],
    )
  return (
    t.useCallback(() => {
      w && !D && (E(!0), p(`/u/warehouse/material/waiting-iqc-stock-in/${w}`))
    }, [w, D, p]),
    t.useEffect(
      () => (
        b(),
        () => {
          b.cancel()
        }
      ),
      [b],
    ),
    t.useEffect(
      () => (
        S(),
        () => {
          S.cancel()
        }
      ),
      [S],
    ),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(ee, {
          children: e.jsxs('title', {
            children: ['ITM - ', u('Role Management')],
          }),
        }),
        e.jsx('div', {
          className: 'bg-slate-50 p-3 h-screen overflow-hidden',
          children: e.jsxs('div', {
            className:
              'flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full',
            children: [
              e.jsx('div', {
                className:
                  'col-start-1 col-end-5 row-start-1 w-full rounded-lg ',
                children: e.jsxs('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    e.jsx(ue, {
                      level: 4,
                      className: 'mt-2 uppercase opacity-85 ',
                      children: u('Role Management'),
                    }),
                    e.jsx(oe, { fetchData: k }),
                  ],
                }),
              }),
              e.jsx('div', {
                className:
                  'col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto',
                children: e.jsx(de, {
                  data: r,
                  setCheckedPath: E,
                  checkedPath: D,
                  setKeyPath: U,
                  loading: T,
                  handleCheck: W,
                  gridRef: C,
                  setData: g,
                }),
              }),
            ],
          }),
        }),
      ],
    })
  )
}
export { De as default }
