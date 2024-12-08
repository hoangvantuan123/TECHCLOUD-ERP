import {
  f as Q,
  d as V,
  j as e,
  B as X,
  ap as J,
  r as s,
  F as x,
  R as W,
  C,
  b as E,
  a as D,
  u as Z,
  H as ee,
  T as se,
} from './index-C0Ym1P--.js'
import { T as te, G as ae, R as re, A as le } from './customTabe-DIylON-a.js'
import { d as I } from './dayjs.min-BjUcqBoK.js'
import { E as T } from './constants-DL4lOElu.js'
import { l as M } from './lodash-CkJfpJgw.js'
import './moment-kKzuUq52.js'
const z = async (l, o) => {
  try {
    const a = `${Q}/mssql/system-users/itm-roles-data-users-web`,
      r = await V.get(a, {
        params: { userId: l, userName: o },
        headers: { 'Content-Type': 'application/json' },
      })
    return r.status === 200
      ? { success: !0, data: r.data.data }
      : { success: !1, message: T.ERROR }
  } catch (a) {
    return {
      success: !1,
      message: a.response ? a.response.data.message : T.ERROR,
    }
  }
}
function ne({ handleSearch: l }) {
  return e.jsx('div', {
    className: 'flex items-center gap-2',
    children: e.jsx(
      X,
      {
        type: 'primary',
        icon: e.jsx(J, {}),
        size: 'middle',
        onClick: l,
        className: 'uppercase',
        children: 'SEARCH',
      },
      'Save',
    ),
  })
}
function ce({ userId2: l, setUserId2: o, setUserName2: a, userName2: r }) {
  const u = s.useCallback((n) => {
      o(n.target.value)
    }, []),
    c = s.useCallback((n) => {
      a(n.target.value)
    }, [])
  return e.jsx('div', {
    className: 'flex items-center gap-2',
    children: e.jsx(x, {
      layout: 'vertical',
      children: e.jsxs(W, {
        className: 'gap-4 flex items-center ',
        children: [
          e.jsx(C, {
            children: e.jsx(x.Item, {
              label: e.jsx('span', {
                className: 'uppercase text-xs',
                children: 'Họ và Tên',
              }),
              className: 'mb-0',
              children: e.jsx(E, {
                value: r,
                size: 'small',
                onChange: c,
                className: ' text-sm p-2',
              }),
            }),
          }),
          e.jsx(C, {
            children: e.jsx(x.Item, {
              label: e.jsx('span', {
                className: 'uppercase text-xs',
                children: 'Mã nhân viên',
              }),
              className: 'mb-0',
              children: e.jsx(E, {
                value: l,
                size: 'small',
                onChange: u,
                className: ' text-sm p-2',
              }),
            }),
          }),
        ],
      }),
    }),
  })
}
function ie({
  data: l,
  loading: o,
  handleCheck: a,
  gridRef: r,
  setKeyPath: u,
  checkedPath: c,
  setCheckedPath: n,
}) {
  D()
  const g = [
    {
      name: 'UserSeq',
      header: 'UserSeq',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 240,
    },
    {
      name: 'UserName',
      header: 'UserName',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 240,
    },
    {
      name: 'UserId',
      header: 'UserId',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 200,
    },
    {
      name: 'DeptSeq',
      header: 'DeptSeq',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 200,
    },
    {
      name: 'Remark',
      header: 'Remark',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 200,
    },
    {
      name: 'LoginDate',
      header: 'LoginDate',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 200,
    },
    {
      name: 'LoginStatus',
      header: 'LoginStatus',
      sortable: !0,
      filter: 'text',
      resizable: !0,
      width: 200,
    },
  ]
  return (
    s.useEffect(() => {
      c === !0 && (u(null), n(!1))
    }, [c]),
    te.applyTheme('striped'),
    e.jsx('div', {
      className: 'w-full gap-1 h-full flex items-center justify-center',
      children: e.jsx('div', {
        className:
          'w-full h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-5',
        children: e.jsx(ae, {
          ref: r,
          data: l,
          columns: g,
          rowHeight: 40,
          bodyHeight: 'fitToParent',
          rowHeaders: ['rowNum', 'checkbox'],
          pagination: { perPage: 100 },
          scrollX: !0,
          heightResizable: !0,
          usageStatistics: !0,
          hoverable: !0,
          autoResize: !0,
          onDblclick: a,
        }),
      }),
    })
  )
}
const { Title: oe, Text: ye } = se
function Ne({ permissions: l, isMobile: o }) {
  const { t: a } = Z(),
    r = s.useRef(null),
    u = D(),
    [c, n] = s.useState(!1),
    [g, p] = s.useState(!1),
    [m, d] = s.useState([]),
    [A, H] = s.useState(I().startOf('month')),
    [L, _] = s.useState(I()),
    [b, ue] = s.useState(''),
    [j, de] = s.useState(''),
    [y, G] = s.useState(''),
    [N, P] = s.useState(''),
    [S, q] = s.useState(null),
    [me, F] = s.useState(null),
    [K, O] = s.useState(!1),
    [he, Y] = s.useState(!1)
  s.useCallback((t) => t.format('YYYYMMDD'), [])
  const w = s.useCallback(async () => {
      p(!0)
      try {
        const t = await z(b, j)
        d((t == null ? void 0 : t.data) || [])
      } catch {
        d([])
      } finally {
        p(!1)
      }
    }, [b, j]),
    h = async () => {
      n(!0)
      try {
        const t = await z(y, N)
        d((t == null ? void 0 : t.data) || [])
      } catch {
        d([])
      } finally {
        n(!1)
      }
    },
    f = s.useMemo(() => M.debounce(w, 500), [w])
  s.useMemo(() => M.debounce(h, 500), [h])
  const $ = () => {
      Y(!0), h()
    },
    B = s.useCallback(
      (t) => {
        var k
        const { rowKey: v } = t,
          R = (k = r.current) == null ? void 0 : k.getInstance(),
          U = S
        U !== null && R && R.uncheck(U)
        const i = m[v]
        q(v),
          u(
            `/u/system_settings/users/user-management/profile/${i == null ? void 0 : i.UserId}/${i == null ? void 0 : i.UserName}`,
          )
      },
      [S, m],
    )
  return (
    s.useEffect(
      () => (
        f(),
        () => {
          f.cancel()
        }
      ),
      [f],
    ),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(ee, {
          children: e.jsxs('title', {
            children: ['ITM - ', a('User Management')],
          }),
        }),
        e.jsx('div', {
          className: 'bg-slate-50 p-3 h-screen overflow-hidden',
          children: e.jsxs('div', {
            className:
              'flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full',
            children: [
              e.jsxs('div', {
                className:
                  'col-start-1 col-end-5 row-start-1 w-full rounded-lg ',
                children: [
                  e.jsxs('div', {
                    className: 'flex items-center justify-between mb-2',
                    children: [
                      e.jsx(oe, {
                        level: 4,
                        className: 'mt-2 uppercase opacity-85 ',
                        children: a('USER MANAGEMENT'),
                      }),
                      e.jsx(ne, { handleSearch: $ }),
                    ],
                  }),
                  e.jsxs('details', {
                    className:
                      'group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white',
                    open: !0,
                    children: [
                      e.jsxs('summary', {
                        className:
                          'flex cursor-pointer items-center justify-between gap-1.5 text-gray-900',
                        children: [
                          e.jsxs('h2', {
                            className:
                              'text-xs font-medium flex items-center gap-2 text-blue-600',
                            children: [e.jsx(re, {}), a('Điều kiện truy vấn')],
                          }),
                          e.jsx('span', {
                            className: 'relative size-5 shrink-0',
                            children: e.jsx(le, {}),
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className: 'flex p-2 gap-4',
                        children: e.jsx(ce, {
                          formData: A,
                          setFormData: H,
                          setToDate: _,
                          toDate: L,
                          userId2: y,
                          setUserId2: G,
                          userName2: N,
                          setUserName2: P,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className:
                  'col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg overflow-auto',
                children: e.jsx(ie, {
                  data: m,
                  setCheckedPath: O,
                  checkedPath: K,
                  setKeyPath: F,
                  loading: c,
                  handleCheck: B,
                  gridRef: r,
                  setData: d,
                }),
              }),
            ],
          }),
        }),
      ],
    })
  )
}
export { Ne as default }
