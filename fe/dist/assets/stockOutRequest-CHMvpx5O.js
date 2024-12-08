import {
  u as Y,
  r as t,
  a as F,
  e as H,
  j as s,
  H as _,
  T as G,
} from './index-C0Ym1P--.js'
import { R as J, A as $ } from './customTabe-DIylON-a.js'
import { d as q } from './dayjs.min-BjUcqBoK.js'
import { D as V, a as W, T as X } from './deliveryListQuery-C9p_n0ra.js'
import { G as Z, a as ee } from './getDeliveryList-CaPJCbkF.js'
import { l as R } from './lodash-CkJfpJgw.js'
import { C as te } from './constants-DL4lOElu.js'
import './SaveOutlined-C3P3HbZc.js'
import './moment-kKzuUq52.js'
import './index-BMponDaS.js'
const { Title: se, Text: he } = G
function De({ permissions: ae, isMobile: re }) {
  const { t: o } = Y(),
    g = t.useRef(null),
    c = F(),
    [I, r] = t.useState(!1),
    [n, i] = t.useState([]),
    [U, v] = t.useState([]),
    [l, K] = t.useState(q().startOf('month')),
    [u, M] = t.useState(q()),
    [m, z] = t.useState(''),
    [d, O] = t.useState(4),
    [N, P] = t.useState(null),
    [p, S] = t.useState(null),
    [f, j] = t.useState(!1),
    y = t.useCallback((a) => a.format('YYYYMMDD'), []),
    h = t.useCallback(async () => {
      r(!0)
      try {
        const a = await Z(y(l), y(u), m, d)
        i(a == null ? void 0 : a.data)
      } catch {
        i([])
      } finally {
        r(!1)
      }
    }, [l, u, m, d, y]),
    k = t.useCallback(async () => {
      r(!0)
      try {
        const a = await ee('', 6, 10003, 1, '%', '', '', '', '')
        v((a == null ? void 0 : a.data) || [])
      } catch {
        v([])
      } finally {
        r(!1)
      }
    }, []),
    D = t.useMemo(() => R.debounce(h, 100), [h]),
    x = t.useMemo(() => R.debounce(k, 100), [k]),
    Q = t.useCallback(
      (a) => {
        var E
        const { rowKey: C } = a,
          w = (E = g.current) == null ? void 0 : E.getInstance(),
          b = N
        b !== null && w && w.uncheck(b)
        const e = n[C],
          L = {
            DelvNo: e.DelvNo,
            DelvMngNo: e.DelvMngNo,
            ImpType: e.ImpType,
            TotalQty: e.TotalQty,
            OkQty: e.OkQty,
            RemainQty: e.RemainQty,
            DelvDate: e.DelvDate,
            CustSeq: e.CustSeq,
            CustNm: e.CustNm,
            DomOrImp: e.DomOrImp,
            PurchaseType: e.PurchaseType,
            BizUnitName: e.BizUnitName,
            BizUnit: e.BizUnit,
            EmpSeq: e.EmpSeq,
            EmpName: e.EmpName,
            DeptSeq: e.DeptSeq,
            DeptName: e.DeptName,
            CurrSeq: e.CurrSeq,
            CurrName: e.CurrName,
            ExRate: e.ExRate,
          },
          A = te.AES.encrypt(JSON.stringify(L), 'TEST_ACCESS_KEY').toString(),
          T = H(A)
        P(C), S(T), c(`/u/warehouse/material/waiting-iqc-stock-in/${T}`)
      },
      [N, n],
    ),
    B = t.useCallback(() => {
      p && !f && (j(!0), c(`/u/warehouse/material/waiting-iqc-stock-in/${p}`))
    }, [p, f, c])
  return (
    t.useEffect(
      () => (
        D(),
        () => {
          D.cancel()
        }
      ),
      [D],
    ),
    t.useEffect(
      () => (
        x(),
        () => {
          x.cancel()
        }
      ),
      [x],
    ),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(_, {
          children: s.jsxs('title', {
            children: ['ITM - ', o('Delivery List')],
          }),
        }),
        s.jsx('div', {
          className: 'bg-slate-50 p-3 h-screen overflow-hidden',
          children: s.jsxs('div', {
            className:
              'flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full',
            children: [
              s.jsxs('div', {
                className:
                  'col-start-1 col-end-5 row-start-1 w-full rounded-lg ',
                children: [
                  s.jsxs('div', {
                    className: 'flex items-center justify-between mb-2',
                    children: [
                      s.jsx(se, {
                        level: 4,
                        className: 'mt-2 uppercase opacity-85 ',
                        children: o('Delivery List'),
                      }),
                      s.jsx(V, { fetchData: h, nextPageStockIn: B }),
                    ],
                  }),
                  s.jsxs('details', {
                    className:
                      'group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white',
                    open: !0,
                    children: [
                      s.jsxs('summary', {
                        className:
                          'flex cursor-pointer items-center justify-between gap-1.5 text-gray-900',
                        children: [
                          s.jsxs('h2', {
                            className:
                              'text-xs font-medium flex items-center gap-2 text-blue-600',
                            children: [s.jsx(J, {}), o('Điều kiện truy vấn')],
                          }),
                          s.jsx('span', {
                            className: 'relative size-5 shrink-0',
                            children: s.jsx($, {}),
                          }),
                        ],
                      }),
                      s.jsx('div', {
                        className: 'flex p-2 gap-4',
                        children: s.jsx(W, {
                          formData: l,
                          setFormData: K,
                          setDeliveryNo: z,
                          setToDate: M,
                          toDate: u,
                          deliveryNo: m,
                          bizUnit: d,
                          setBizUnit: O,
                          dataUnit: U,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx('div', {
                className:
                  'col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto',
                children: s.jsx(X, {
                  data: n,
                  setCheckedPath: j,
                  checkedPath: f,
                  setKeyPath: S,
                  loading: I,
                  handleCheck: Q,
                  gridRef: g,
                  setData: i,
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
