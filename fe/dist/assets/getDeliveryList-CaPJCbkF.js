import { f as p, d as i } from './index-C0Ym1P--.js'
import { E as t } from './constants-DL4lOElu.js'
const y = async (r, o, c, n, s, e, l, R, m) => {
    try {
      const a = `${p}/mssql/code-help-combo-query`,
        u = await i.get(a, {
          params: {
            workingTag: r,
            languageSeq: o,
            codeHelpSeq: c,
            companySeq: n,
            keyword: s,
            param1: e,
            param2: l,
            param3: R,
            param4: m,
          },
          headers: { 'Content-Type': 'application/json' },
        })
      return u.status === 200
        ? { success: !0, data: u.data.data }
        : { success: !1, message: t.ERROR }
    } catch (a) {
      return {
        success: !1,
        message: a.response ? a.response.data.message : t.ERROR,
      }
    }
  },
  E = async (r, o, c, n) => {
    try {
      const s = `${p}/mssql/deliverry-list/itm-sug-get-active-delivery-web`,
        e = await i.get(s, {
          params: {
            fromDate: r,
            toDate: o,
            deliveryNo: c,
            delivbizUniteryNo: n,
          },
          headers: { 'Content-Type': 'application/json' },
        })
      return e.status === 200
        ? { success: !0, data: e.data.data }
        : { success: !1, message: t.ERROR }
    } catch (s) {
      return {
        success: !1,
        message: s.response ? s.response.data.message : t.ERROR,
      }
    }
  }
export { E as G, y as a }
