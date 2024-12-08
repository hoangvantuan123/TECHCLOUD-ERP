import {
  y as hn,
  r as s,
  b5 as ha,
  D as Bt,
  Z as Sn,
  P as wn,
  a1 as Lt,
  Q as z,
  b6 as sn,
  ab as Nt,
  b7 as ba,
  ah as ya,
  ae as Qn,
  ag as xa,
  l as Y,
  b8 as Ca,
  b9 as Sa,
  ba as wa,
  x as bn,
  af as Zn,
  J as Wt,
  v as it,
  o as he,
  p as j,
  z as wt,
  aB as mo,
  K as pt,
  N as go,
  bb as $r,
  I as vt,
  _ as se,
  t as oe,
  q as ye,
  aw as Je,
  m as I,
  aC as $a,
  U as Ea,
  $ as Na,
  bc as ka,
  bd as Ra,
  be as Ia,
  bf as Oa,
  aT as Ka,
  a_ as er,
  ai as Pa,
  bg as Ta,
  bh as Er,
  bi as Nr,
  w as $t,
  bj as Da,
  bk as cn,
  bl as kr,
  bm as ho,
  bn as tr,
  G as nr,
  bo as Rr,
  aO as Ma,
  bp as Ir,
  E as Ba,
  bq as Or,
  br as La,
  bs as za,
  bt as bo,
  bu as yo,
  M as xo,
  bv as H,
  L as Co,
  ar as yn,
  bw as rr,
  bx as So,
  ay as _a,
  by as Ha,
  bz as ja,
  aH as Aa,
  h as Fa,
  bA as Kr,
  bB as Wa,
  bC as Va,
  b as qa,
  ap as Xa,
  B as Pr,
  aq as Ua,
  bD as Ga,
  bE as Tr,
  a8 as Ya,
  bF as Ja,
  aU as Qa,
  S as rn,
  bG as Za,
  b3 as el,
} from './index-C0Ym1P--.js'
import {
  S as $n,
  L as wo,
  R as tl,
  E as Dr,
  D as nl,
} from './index-BMponDaS.js'
function Hn(e) {
  return e != null && e === e.window
}
const rl = (e) => {
  var t, r
  if (typeof window > 'u') return 0
  let n = 0
  return (
    Hn(e)
      ? (n = e.pageYOffset)
      : e instanceof Document
        ? (n = e.documentElement.scrollTop)
        : (e instanceof HTMLElement || e) && (n = e.scrollTop),
    e &&
      !Hn(e) &&
      typeof n != 'number' &&
      (n =
        (r = ((t = e.ownerDocument) !== null && t !== void 0 ? t : e)
          .documentElement) === null || r === void 0
          ? void 0
          : r.scrollTop),
    n
  )
}
function ol(e, t, r, n) {
  const o = r - t
  return (
    (e /= n / 2),
    e < 1 ? (o / 2) * e * e * e + t : (o / 2) * ((e -= 2) * e * e + 2) + t
  )
}
function al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { getContainer: r = () => window, callback: n, duration: o = 450 } = t,
    l = r(),
    d = rl(l),
    a = Date.now(),
    i = () => {
      const p = Date.now() - a,
        f = ol(p > o ? o : p, d, e, o)
      Hn(l)
        ? l.scrollTo(window.pageXOffset, f)
        : l instanceof Document || l.constructor.name === 'HTMLDocument'
          ? (l.documentElement.scrollTop = f)
          : (l.scrollTop = f),
        p < o ? hn(i) : typeof n == 'function' && n()
    }
  hn(i)
}
function $o() {
  const [, e] = s.useReducer((t) => t + 1, 0)
  return e
}
function Eo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  const t = s.useRef({}),
    r = $o(),
    n = ha()
  return (
    Bt(() => {
      const o = n.subscribe((l) => {
        ;(t.current = l), e && r()
      })
      return () => n.unsubscribe(o)
    }, []),
    t.current
  )
}
const No = s.createContext(null),
  ll = No.Provider,
  ko = s.createContext(null),
  il = ko.Provider,
  sl = (e) => {
    const { componentCls: t, antCls: r } = e,
      n = `${t}-group`
    return {
      [n]: Object.assign(Object.assign({}, Lt(e)), {
        display: 'inline-block',
        fontSize: 0,
        [`&${n}-rtl`]: { direction: 'rtl' },
        [`&${n}-block`]: { display: 'flex' },
        [`${r}-badge ${r}-badge-count`]: { zIndex: 1 },
        [`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]: {
          borderInlineStart: 'none',
        },
      }),
    }
  },
  cl = (e) => {
    const {
        componentCls: t,
        wrapperMarginInlineEnd: r,
        colorPrimary: n,
        radioSize: o,
        motionDurationSlow: l,
        motionDurationMid: d,
        motionEaseInOutCirc: a,
        colorBgContainer: i,
        colorBorder: c,
        lineWidth: p,
        colorBgContainerDisabled: f,
        colorTextDisabled: u,
        paddingXS: v,
        dotColorDisabled: m,
        lineType: b,
        radioColor: g,
        radioBgColor: h,
        calc: y,
      } = e,
      x = `${t}-inner`,
      S = y(o).sub(y(4).mul(2)),
      R = y(1).mul(o).equal({ unit: !0 })
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, Lt(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        marginInlineStart: 0,
        marginInlineEnd: r,
        cursor: 'pointer',
        [`&${t}-wrapper-rtl`]: { direction: 'rtl' },
        '&-disabled': { cursor: 'not-allowed', color: e.colorTextDisabled },
        '&::after': {
          display: 'inline-block',
          width: 0,
          overflow: 'hidden',
          content: '"\\a0"',
        },
        '&-block': { flex: 1, justifyContent: 'center' },
        [`${t}-checked::after`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: '100%',
          height: '100%',
          border: `${z(p)} ${b} ${n}`,
          borderRadius: '50%',
          visibility: 'hidden',
          opacity: 0,
          content: '""',
        },
        [t]: Object.assign(Object.assign({}, Lt(e)), {
          position: 'relative',
          display: 'inline-block',
          outline: 'none',
          cursor: 'pointer',
          alignSelf: 'center',
          borderRadius: '50%',
        }),
        [`${t}-wrapper:hover &,
        &:hover ${x}`]: { borderColor: n },
        [`${t}-input:focus-visible + ${x}`]: Object.assign({}, sn(e)),
        [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
          visibility: 'visible',
        },
        [`${t}-inner`]: {
          '&::after': {
            boxSizing: 'border-box',
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineStart: '50%',
            display: 'block',
            width: R,
            height: R,
            marginBlockStart: y(1).mul(o).div(-2).equal({ unit: !0 }),
            marginInlineStart: y(1).mul(o).div(-2).equal({ unit: !0 }),
            backgroundColor: g,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: R,
            transform: 'scale(0)',
            opacity: 0,
            transition: `all ${l} ${a}`,
            content: '""',
          },
          boxSizing: 'border-box',
          position: 'relative',
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: 'block',
          width: R,
          height: R,
          backgroundColor: i,
          borderColor: c,
          borderStyle: 'solid',
          borderWidth: p,
          borderRadius: '50%',
          transition: `all ${d}`,
        },
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
        },
        [`${t}-checked`]: {
          [x]: {
            borderColor: n,
            backgroundColor: h,
            '&::after': {
              transform: `scale(${e.calc(e.dotSize).div(o).equal()})`,
              opacity: 1,
              transition: `all ${l} ${a}`,
            },
          },
        },
        [`${t}-disabled`]: {
          cursor: 'not-allowed',
          [x]: {
            backgroundColor: f,
            borderColor: c,
            cursor: 'not-allowed',
            '&::after': { backgroundColor: m },
          },
          [`${t}-input`]: { cursor: 'not-allowed' },
          [`${t}-disabled + span`]: { color: u, cursor: 'not-allowed' },
          [`&${t}-checked`]: {
            [x]: { '&::after': { transform: `scale(${y(S).div(o).equal()})` } },
          },
        },
        [`span${t} + *`]: { paddingInlineStart: v, paddingInlineEnd: v },
      }),
    }
  },
  dl = (e) => {
    const {
      buttonColor: t,
      controlHeight: r,
      componentCls: n,
      lineWidth: o,
      lineType: l,
      colorBorder: d,
      motionDurationSlow: a,
      motionDurationMid: i,
      buttonPaddingInline: c,
      fontSize: p,
      buttonBg: f,
      fontSizeLG: u,
      controlHeightLG: v,
      controlHeightSM: m,
      paddingXS: b,
      borderRadius: g,
      borderRadiusSM: h,
      borderRadiusLG: y,
      buttonCheckedBg: x,
      buttonSolidCheckedColor: C,
      colorTextDisabled: S,
      colorBgContainerDisabled: R,
      buttonCheckedBgDisabled: K,
      buttonCheckedColorDisabled: T,
      colorPrimary: N,
      colorPrimaryHover: O,
      colorPrimaryActive: P,
      buttonSolidCheckedBg: E,
      buttonSolidCheckedHoverBg: $,
      buttonSolidCheckedActiveBg: k,
      calc: w,
    } = e
    return {
      [`${n}-button-wrapper`]: {
        position: 'relative',
        display: 'inline-block',
        height: r,
        margin: 0,
        paddingInline: c,
        paddingBlock: 0,
        color: t,
        fontSize: p,
        lineHeight: z(w(r).sub(w(o).mul(2)).equal()),
        background: f,
        border: `${z(o)} ${l} ${d}`,
        borderBlockStartWidth: w(o).add(0.02).equal(),
        borderInlineStartWidth: 0,
        borderInlineEndWidth: o,
        cursor: 'pointer',
        transition: [`color ${i}`, `background ${i}`, `box-shadow ${i}`].join(
          ',',
        ),
        a: { color: t },
        [`> ${n}-button`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
        },
        '&:not(:first-child)': {
          '&::before': {
            position: 'absolute',
            insetBlockStart: w(o).mul(-1).equal(),
            insetInlineStart: w(o).mul(-1).equal(),
            display: 'block',
            boxSizing: 'content-box',
            width: 1,
            height: '100%',
            paddingBlock: o,
            paddingInline: 0,
            backgroundColor: d,
            transition: `background-color ${a}`,
            content: '""',
          },
        },
        '&:first-child': {
          borderInlineStart: `${z(o)} ${l} ${d}`,
          borderStartStartRadius: g,
          borderEndStartRadius: g,
        },
        '&:last-child': { borderStartEndRadius: g, borderEndEndRadius: g },
        '&:first-child:last-child': { borderRadius: g },
        [`${n}-group-large &`]: {
          height: v,
          fontSize: u,
          lineHeight: z(w(v).sub(w(o).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: y,
            borderEndStartRadius: y,
          },
          '&:last-child': { borderStartEndRadius: y, borderEndEndRadius: y },
        },
        [`${n}-group-small &`]: {
          height: m,
          paddingInline: w(b).sub(o).equal(),
          paddingBlock: 0,
          lineHeight: z(w(m).sub(w(o).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: h,
            borderEndStartRadius: h,
          },
          '&:last-child': { borderStartEndRadius: h, borderEndEndRadius: h },
        },
        '&:hover': { position: 'relative', color: N },
        '&:has(:focus-visible)': Object.assign({}, sn(e)),
        [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
        },
        [`&-checked:not(${n}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: N,
          background: x,
          borderColor: N,
          '&::before': { backgroundColor: N },
          '&:first-child': { borderColor: N },
          '&:hover': {
            color: O,
            borderColor: O,
            '&::before': { backgroundColor: O },
          },
          '&:active': {
            color: P,
            borderColor: P,
            '&::before': { backgroundColor: P },
          },
        },
        [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
          color: C,
          background: E,
          borderColor: E,
          '&:hover': { color: C, background: $, borderColor: $ },
          '&:active': { color: C, background: k, borderColor: k },
        },
        '&-disabled': {
          color: S,
          backgroundColor: R,
          borderColor: d,
          cursor: 'not-allowed',
          '&:first-child, &:hover': {
            color: S,
            backgroundColor: R,
            borderColor: d,
          },
        },
        [`&-disabled${n}-button-wrapper-checked`]: {
          color: T,
          backgroundColor: K,
          borderColor: d,
          boxShadow: 'none',
        },
        '&-block': { flex: 1, textAlign: 'center' },
      },
    }
  },
  ul = (e) => {
    const {
        wireframe: t,
        padding: r,
        marginXS: n,
        lineWidth: o,
        fontSizeLG: l,
        colorText: d,
        colorBgContainer: a,
        colorTextDisabled: i,
        controlItemBgActiveDisabled: c,
        colorTextLightSolid: p,
        colorPrimary: f,
        colorPrimaryHover: u,
        colorPrimaryActive: v,
        colorWhite: m,
      } = e,
      b = 4,
      g = l,
      h = t ? g - b * 2 : g - (b + o) * 2
    return {
      radioSize: g,
      dotSize: h,
      dotColorDisabled: i,
      buttonSolidCheckedColor: p,
      buttonSolidCheckedBg: f,
      buttonSolidCheckedHoverBg: u,
      buttonSolidCheckedActiveBg: v,
      buttonBg: a,
      buttonCheckedBg: a,
      buttonColor: d,
      buttonCheckedBgDisabled: c,
      buttonCheckedColorDisabled: i,
      buttonPaddingInline: r - o,
      wrapperMarginInlineEnd: n,
      radioColor: t ? f : m,
      radioBgColor: t ? a : f,
    }
  },
  Ro = Sn(
    'Radio',
    (e) => {
      const { controlOutline: t, controlOutlineWidth: r } = e,
        n = `0 0 0 ${z(r)} ${t}`,
        l = wn(e, { radioFocusShadow: n, radioButtonFocusShadow: n })
      return [sl(l), cl(l), dl(l)]
    },
    ul,
    { unitless: { radioSize: !0, dotSize: !0 } },
  )
var fl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const pl = (e, t) => {
    var r, n
    const o = s.useContext(No),
      l = s.useContext(ko),
      { getPrefixCls: d, direction: a, radio: i } = s.useContext(Nt),
      c = s.useRef(null),
      p = ba(t, c),
      { isFormItemInput: f } = s.useContext(ya),
      u = (k) => {
        var w, B
        ;(w = e.onChange) === null || w === void 0 || w.call(e, k),
          (B = o == null ? void 0 : o.onChange) === null ||
            B === void 0 ||
            B.call(o, k)
      },
      {
        prefixCls: v,
        className: m,
        rootClassName: b,
        children: g,
        style: h,
        title: y,
      } = e,
      x = fl(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'style',
        'title',
      ]),
      C = d('radio', v),
      S = ((o == null ? void 0 : o.optionType) || l) === 'button',
      R = S ? `${C}-button` : C,
      K = Qn(C),
      [T, N, O] = Ro(C, K),
      P = Object.assign({}, x),
      E = s.useContext(xa)
    o &&
      ((P.name = o.name),
      (P.onChange = u),
      (P.checked = e.value === o.value),
      (P.disabled =
        (r = P.disabled) !== null && r !== void 0 ? r : o.disabled)),
      (P.disabled = (n = P.disabled) !== null && n !== void 0 ? n : E)
    const $ = Y(
      `${R}-wrapper`,
      {
        [`${R}-wrapper-checked`]: P.checked,
        [`${R}-wrapper-disabled`]: P.disabled,
        [`${R}-wrapper-rtl`]: a === 'rtl',
        [`${R}-wrapper-in-form-item`]: f,
        [`${R}-wrapper-block`]: !!(o != null && o.block),
      },
      i == null ? void 0 : i.className,
      m,
      b,
      N,
      O,
      K,
    )
    return T(
      s.createElement(
        Ca,
        { component: 'Radio', disabled: P.disabled },
        s.createElement(
          'label',
          {
            className: $,
            style: Object.assign(
              Object.assign({}, i == null ? void 0 : i.style),
              h,
            ),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            title: y,
          },
          s.createElement(
            Sa,
            Object.assign({}, P, {
              className: Y(P.className, { [wa]: !S }),
              type: 'radio',
              prefixCls: R,
              ref: p,
            }),
          ),
          g !== void 0 ? s.createElement('span', null, g) : null,
        ),
      ),
    )
  },
  xn = s.forwardRef(pl),
  vl = s.forwardRef((e, t) => {
    const { getPrefixCls: r, direction: n } = s.useContext(Nt),
      {
        prefixCls: o,
        className: l,
        rootClassName: d,
        options: a,
        buttonStyle: i = 'outline',
        disabled: c,
        children: p,
        size: f,
        style: u,
        id: v,
        optionType: m,
        name: b,
        defaultValue: g,
        value: h,
        block: y = !1,
        onChange: x,
        onMouseEnter: C,
        onMouseLeave: S,
        onFocus: R,
        onBlur: K,
      } = e,
      [T, N] = bn(g, { value: h }),
      O = s.useCallback(
        (_) => {
          const ae = T,
            te = _.target.value
          'value' in e || N(te), te !== ae && (x == null || x(_))
        },
        [T, N, x],
      ),
      P = r('radio', o),
      E = `${P}-group`,
      $ = Qn(P),
      [k, w, B] = Ro(P, $)
    let L = p
    a &&
      a.length > 0 &&
      (L = a.map((_) =>
        typeof _ == 'string' || typeof _ == 'number'
          ? s.createElement(
              xn,
              {
                key: _.toString(),
                prefixCls: P,
                disabled: c,
                value: _,
                checked: T === _,
              },
              _,
            )
          : s.createElement(
              xn,
              {
                key: `radio-group-value-options-${_.value}`,
                prefixCls: P,
                disabled: _.disabled || c,
                value: _.value,
                checked: T === _.value,
                title: _.title,
                style: _.style,
                id: _.id,
                required: _.required,
              },
              _.label,
            ),
      ))
    const M = Zn(f),
      D = Y(
        E,
        `${E}-${i}`,
        { [`${E}-${M}`]: M, [`${E}-rtl`]: n === 'rtl', [`${E}-block`]: y },
        l,
        d,
        w,
        B,
        $,
      ),
      X = s.useMemo(
        () => ({
          onChange: O,
          value: T,
          disabled: c,
          name: b,
          optionType: m,
          block: y,
        }),
        [O, T, c, b, m, y],
      )
    return k(
      s.createElement(
        'div',
        Object.assign({}, Wt(e, { aria: !0, data: !0 }), {
          className: D,
          style: u,
          onMouseEnter: C,
          onMouseLeave: S,
          onFocus: R,
          onBlur: K,
          id: v,
          ref: t,
        }),
        s.createElement(ll, { value: X }, L),
      ),
    )
  }),
  ml = s.memo(vl)
var gl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const hl = (e, t) => {
    const { getPrefixCls: r } = s.useContext(Nt),
      { prefixCls: n } = e,
      o = gl(e, ['prefixCls']),
      l = r('radio', n)
    return s.createElement(
      il,
      { value: 'button' },
      s.createElement(
        xn,
        Object.assign({ prefixCls: l }, o, { type: 'radio', ref: t }),
      ),
    )
  },
  bl = s.forwardRef(hl),
  dn = xn
dn.Button = bl
dn.Group = ml
dn.__ANT_RADIO = !0
function lt(e, t) {
  return e[t]
}
var yl = ['children']
function Io(e, t) {
  return ''.concat(e, '-').concat(t)
}
function xl(e) {
  return e && e.type && e.type.isTreeNode
}
function un(e, t) {
  return e ?? t
}
function Vt(e) {
  var t = e || {},
    r = t.title,
    n = t._title,
    o = t.key,
    l = t.children,
    d = r || 'title'
  return {
    title: d,
    _title: n || [d],
    key: o || 'key',
    children: l || 'children',
  }
}
function Oo(e) {
  function t(r) {
    var n = mo(r)
    return n
      .map(function (o) {
        if (!xl(o))
          return (
            wt(!o, 'Tree/TreeNode can only accept TreeNode as children.'), null
          )
        var l = o.key,
          d = o.props,
          a = d.children,
          i = pt(d, yl),
          c = j({ key: l }, i),
          p = t(a)
        return p.length && (c.children = p), c
      })
      .filter(function (o) {
        return o
      })
  }
  return t(e)
}
function Dn(e, t, r) {
  var n = Vt(r),
    o = n._title,
    l = n.key,
    d = n.children,
    a = new Set(t === !0 ? [] : t),
    i = []
  function c(p) {
    var f =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
    return p.map(function (u, v) {
      for (
        var m = Io(f ? f.pos : '0', v), b = un(u[l], m), g, h = 0;
        h < o.length;
        h += 1
      ) {
        var y = o[h]
        if (u[y] !== void 0) {
          g = u[y]
          break
        }
      }
      var x = Object.assign(go(u, [].concat(he(o), [l, d])), {
        title: g,
        key: b,
        parent: f,
        pos: m,
        children: null,
        data: u,
        isStart: [].concat(he(f ? f.isStart : []), [v === 0]),
        isEnd: [].concat(he(f ? f.isEnd : []), [v === p.length - 1]),
      })
      return (
        i.push(x),
        t === !0 || a.has(b)
          ? (x.children = c(u[d] || [], x))
          : (x.children = []),
        x
      )
    })
  }
  return c(e), i
}
function Cl(e, t, r) {
  var n = {}
  it(r) === 'object' ? (n = r) : (n = { externalGetKey: r }), (n = n || {})
  var o = n,
    l = o.childrenPropName,
    d = o.externalGetKey,
    a = o.fieldNames,
    i = Vt(a),
    c = i.key,
    p = i.children,
    f = l || p,
    u
  d
    ? typeof d == 'string'
      ? (u = function (b) {
          return b[d]
        })
      : typeof d == 'function' &&
        (u = function (b) {
          return d(b)
        })
    : (u = function (b, g) {
        return un(b[c], g)
      })
  function v(m, b, g, h) {
    var y = m ? m[f] : e,
      x = m ? Io(g.pos, b) : '0',
      C = m ? [].concat(he(h), [m]) : []
    if (m) {
      var S = u(m, x),
        R = {
          node: m,
          index: b,
          pos: x,
          key: S,
          parentPos: g.node ? g.pos : null,
          level: g.level + 1,
          nodes: C,
        }
      t(R)
    }
    y &&
      y.forEach(function (K, T) {
        v(K, T, { node: m, pos: x, level: g ? g.level + 1 : -1 }, C)
      })
  }
  v(null)
}
function or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = t.initWrapper,
    n = t.processEntity,
    o = t.onProcessFinished,
    l = t.externalGetKey,
    d = t.childrenPropName,
    a = t.fieldNames,
    i = arguments.length > 2 ? arguments[2] : void 0,
    c = l || i,
    p = {},
    f = {},
    u = { posEntities: p, keyEntities: f }
  return (
    r && (u = r(u) || u),
    Cl(
      e,
      function (v) {
        var m = v.node,
          b = v.index,
          g = v.pos,
          h = v.key,
          y = v.parentPos,
          x = v.level,
          C = v.nodes,
          S = { node: m, nodes: C, index: b, key: h, pos: g, level: x },
          R = un(h, g)
        ;(p[g] = S),
          (f[R] = S),
          (S.parent = p[y]),
          S.parent &&
            ((S.parent.children = S.parent.children || []),
            S.parent.children.push(S)),
          n && n(S, u)
      },
      { externalGetKey: c, childrenPropName: d, fieldNames: a },
    ),
    o && o(u),
    u
  )
}
function an(e, t) {
  var r = t.expandedKeys,
    n = t.selectedKeys,
    o = t.loadedKeys,
    l = t.loadingKeys,
    d = t.checkedKeys,
    a = t.halfCheckedKeys,
    i = t.dragOverNodeKey,
    c = t.dropPosition,
    p = t.keyEntities,
    f = lt(p, e),
    u = {
      eventKey: e,
      expanded: r.indexOf(e) !== -1,
      selected: n.indexOf(e) !== -1,
      loaded: o.indexOf(e) !== -1,
      loading: l.indexOf(e) !== -1,
      checked: d.indexOf(e) !== -1,
      halfChecked: a.indexOf(e) !== -1,
      pos: String(f ? f.pos : ''),
      dragOver: i === e && c === 0,
      dragOverGapTop: i === e && c === -1,
      dragOverGapBottom: i === e && c === 1,
    }
  return u
}
function Ae(e) {
  var t = e.data,
    r = e.expanded,
    n = e.selected,
    o = e.checked,
    l = e.loaded,
    d = e.loading,
    a = e.halfChecked,
    i = e.dragOver,
    c = e.dragOverGapTop,
    p = e.dragOverGapBottom,
    f = e.pos,
    u = e.active,
    v = e.eventKey,
    m = j(
      j({}, t),
      {},
      {
        expanded: r,
        selected: n,
        checked: o,
        loaded: l,
        loading: d,
        halfChecked: a,
        dragOver: i,
        dragOverGapTop: c,
        dragOverGapBottom: p,
        pos: f,
        active: u,
        key: v,
      },
    )
  return (
    'props' in m ||
      Object.defineProperty(m, 'props', {
        get: function () {
          return (
            wt(
              !1,
              'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
            ),
            e
          )
        },
      }),
    m
  )
}
function Ko(e, t) {
  var r = new Set()
  return (
    e.forEach(function (n) {
      t.has(n) || r.add(n)
    }),
    r
  )
}
function Sl(e) {
  var t = e || {},
    r = t.disabled,
    n = t.disableCheckbox,
    o = t.checkable
  return !!(r || n) || o === !1
}
function wl(e, t, r, n) {
  for (var o = new Set(e), l = new Set(), d = 0; d <= r; d += 1) {
    var a = t.get(d) || new Set()
    a.forEach(function (f) {
      var u = f.key,
        v = f.node,
        m = f.children,
        b = m === void 0 ? [] : m
      o.has(u) &&
        !n(v) &&
        b
          .filter(function (g) {
            return !n(g.node)
          })
          .forEach(function (g) {
            o.add(g.key)
          })
    })
  }
  for (var i = new Set(), c = r; c >= 0; c -= 1) {
    var p = t.get(c) || new Set()
    p.forEach(function (f) {
      var u = f.parent,
        v = f.node
      if (!(n(v) || !f.parent || i.has(f.parent.key))) {
        if (n(f.parent.node)) {
          i.add(u.key)
          return
        }
        var m = !0,
          b = !1
        ;(u.children || [])
          .filter(function (g) {
            return !n(g.node)
          })
          .forEach(function (g) {
            var h = g.key,
              y = o.has(h)
            m && !y && (m = !1), !b && (y || l.has(h)) && (b = !0)
          }),
          m && o.add(u.key),
          b && l.add(u.key),
          i.add(u.key)
      }
    })
  }
  return { checkedKeys: Array.from(o), halfCheckedKeys: Array.from(Ko(l, o)) }
}
function $l(e, t, r, n, o) {
  for (var l = new Set(e), d = new Set(t), a = 0; a <= n; a += 1) {
    var i = r.get(a) || new Set()
    i.forEach(function (u) {
      var v = u.key,
        m = u.node,
        b = u.children,
        g = b === void 0 ? [] : b
      !l.has(v) &&
        !d.has(v) &&
        !o(m) &&
        g
          .filter(function (h) {
            return !o(h.node)
          })
          .forEach(function (h) {
            l.delete(h.key)
          })
    })
  }
  d = new Set()
  for (var c = new Set(), p = n; p >= 0; p -= 1) {
    var f = r.get(p) || new Set()
    f.forEach(function (u) {
      var v = u.parent,
        m = u.node
      if (!(o(m) || !u.parent || c.has(u.parent.key))) {
        if (o(u.parent.node)) {
          c.add(v.key)
          return
        }
        var b = !0,
          g = !1
        ;(v.children || [])
          .filter(function (h) {
            return !o(h.node)
          })
          .forEach(function (h) {
            var y = h.key,
              x = l.has(y)
            b && !x && (b = !1), !g && (x || d.has(y)) && (g = !0)
          }),
          b || l.delete(v.key),
          g && d.add(v.key),
          c.add(v.key)
      }
    })
  }
  return { checkedKeys: Array.from(l), halfCheckedKeys: Array.from(Ko(d, l)) }
}
function At(e, t, r, n) {
  var o = [],
    l
  n ? (l = n) : (l = Sl)
  var d = new Set(
      e.filter(function (p) {
        var f = !!lt(r, p)
        return f || o.push(p), f
      }),
    ),
    a = new Map(),
    i = 0
  Object.keys(r).forEach(function (p) {
    var f = r[p],
      u = f.level,
      v = a.get(u)
    v || ((v = new Set()), a.set(u, v)), v.add(f), (i = Math.max(i, u))
  }),
    wt(
      !o.length,
      'Tree missing follow keys: '.concat(
        o
          .slice(0, 100)
          .map(function (p) {
            return "'".concat(p, "'")
          })
          .join(', '),
      ),
    )
  var c
  return (
    t === !0 ? (c = wl(d, a, i, l)) : (c = $l(d, t.halfCheckedKeys, a, i, l)), c
  )
}
function Mr(e) {
  var t = e.getBoundingClientRect(),
    r = document.documentElement
  return {
    left:
      t.left +
      (window.pageXOffset || r.scrollLeft) -
      (r.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.pageYOffset || r.scrollTop) -
      (r.clientTop || document.body.clientTop || 0),
  }
}
function vn(e, t, r, n) {
  var o = $r.unstable_batchedUpdates
    ? function (d) {
        $r.unstable_batchedUpdates(r, d)
      }
    : r
  return (
    e != null && e.addEventListener && e.addEventListener(t, o, n),
    {
      remove: function () {
        e != null && e.removeEventListener && e.removeEventListener(t, o, n)
      },
    }
  )
}
const El = function () {
  const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0])
  for (let t = 1; t < arguments.length; t++) {
    const r = t < 0 || arguments.length <= t ? void 0 : arguments[t]
    r &&
      Object.keys(r).forEach((n) => {
        const o = r[n]
        o !== void 0 && (e[n] = o)
      })
  }
  return e
}
var Nl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
          },
        },
      ],
    },
    name: 'double-left',
    theme: 'outlined',
  },
  kl = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: Nl }))
  },
  Br = s.forwardRef(kl),
  Rl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
          },
        },
      ],
    },
    name: 'double-right',
    theme: 'outlined',
  },
  Il = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: Rl }))
  },
  Lr = s.forwardRef(Il),
  Ol = {
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页',
    page_size: '页码',
  },
  Kl = ['10', '20', '50', '100'],
  Pl = function (t) {
    var r = t.pageSizeOptions,
      n = r === void 0 ? Kl : r,
      o = t.locale,
      l = t.changeSize,
      d = t.pageSize,
      a = t.goButton,
      i = t.quickGo,
      c = t.rootPrefixCls,
      p = t.selectComponentClass,
      f = t.selectPrefixCls,
      u = t.disabled,
      v = t.buildOptionText,
      m = t.showSizeChanger,
      b = oe.useState(''),
      g = ye(b, 2),
      h = g[0],
      y = g[1],
      x = function () {
        return !h || Number.isNaN(h) ? void 0 : Number(h)
      },
      C =
        typeof v == 'function'
          ? v
          : function (M) {
              return ''.concat(M, ' ').concat(o.items_per_page)
            },
      S = function (D, X) {
        if ((l == null || l(Number(D)), it(m) === 'object')) {
          var _
          ;(_ = m.onChange) === null || _ === void 0 || _.call(m, D, X)
        }
      },
      R = function (D) {
        y(D.target.value)
      },
      K = function (D) {
        a ||
          h === '' ||
          (y(''),
          !(
            D.relatedTarget &&
            (D.relatedTarget.className.indexOf(''.concat(c, '-item-link')) >=
              0 ||
              D.relatedTarget.className.indexOf(''.concat(c, '-item')) >= 0)
          ) &&
            (i == null || i(x())))
      },
      T = function (D) {
        h !== '' &&
          (D.keyCode === Je.ENTER || D.type === 'click') &&
          (y(''), i == null || i(x()))
      },
      N = function () {
        return n.some(function (D) {
          return D.toString() === d.toString()
        })
          ? n
          : n.concat([d.toString()]).sort(function (D, X) {
              var _ = Number.isNaN(Number(D)) ? 0 : Number(D),
                ae = Number.isNaN(Number(X)) ? 0 : Number(X)
              return _ - ae
            })
      },
      O = ''.concat(c, '-options')
    if (!m && !i) return null
    var P = null,
      E = null,
      $ = null
    if (m && p) {
      var k = it(m) === 'object' ? m : {},
        w = k.options,
        B = k.className,
        L = w
          ? void 0
          : N().map(function (M, D) {
              return oe.createElement(
                p.Option,
                { key: D, value: M.toString() },
                C(M),
              )
            })
      P = oe.createElement(
        p,
        se(
          {
            disabled: u,
            prefixCls: f,
            showSearch: !1,
            optionLabelProp: w ? 'label' : 'children',
            popupMatchSelectWidth: !1,
            value: (d || n[0]).toString(),
            getPopupContainer: function (D) {
              return D.parentNode
            },
            'aria-label': o.page_size,
            defaultOpen: !1,
          },
          it(m) === 'object' ? m : null,
          {
            className: Y(''.concat(O, '-size-changer'), B),
            options: w,
            onChange: S,
          },
        ),
        L,
      )
    }
    return (
      i &&
        (a &&
          ($ =
            typeof a == 'boolean'
              ? oe.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: T,
                    onKeyUp: T,
                    disabled: u,
                    className: ''.concat(O, '-quick-jumper-button'),
                  },
                  o.jump_to_confirm,
                )
              : oe.createElement('span', { onClick: T, onKeyUp: T }, a)),
        (E = oe.createElement(
          'div',
          { className: ''.concat(O, '-quick-jumper') },
          o.jump_to,
          oe.createElement('input', {
            disabled: u,
            type: 'text',
            value: h,
            onChange: R,
            onKeyUp: T,
            onBlur: K,
            'aria-label': o.page,
          }),
          o.page,
          $,
        ))),
      oe.createElement('li', { className: O }, P, E)
    )
  },
  on = function (t) {
    var r = t.rootPrefixCls,
      n = t.page,
      o = t.active,
      l = t.className,
      d = t.showTitle,
      a = t.onClick,
      i = t.onKeyPress,
      c = t.itemRender,
      p = ''.concat(r, '-item'),
      f = Y(
        p,
        ''.concat(p, '-').concat(n),
        I(I({}, ''.concat(p, '-active'), o), ''.concat(p, '-disabled'), !n),
        l,
      ),
      u = function () {
        a(n)
      },
      v = function (g) {
        i(g, a, n)
      },
      m = c(n, 'page', oe.createElement('a', { rel: 'nofollow' }, n))
    return m
      ? oe.createElement(
          'li',
          {
            title: d ? String(n) : null,
            className: f,
            onClick: u,
            onKeyDown: v,
            tabIndex: 0,
          },
          m,
        )
      : null
  },
  Tl = function (t, r, n) {
    return n
  }
function zr() {}
function _r(e) {
  var t = Number(e)
  return (
    typeof t == 'number' &&
    !Number.isNaN(t) &&
    isFinite(t) &&
    Math.floor(t) === t
  )
}
function Mt(e, t, r) {
  var n = typeof e > 'u' ? t : e
  return Math.floor((r - 1) / n) + 1
}
var Dl = function (t) {
  var r = t.prefixCls,
    n = r === void 0 ? 'rc-pagination' : r,
    o = t.selectPrefixCls,
    l = o === void 0 ? 'rc-select' : o,
    d = t.className,
    a = t.selectComponentClass,
    i = t.current,
    c = t.defaultCurrent,
    p = c === void 0 ? 1 : c,
    f = t.total,
    u = f === void 0 ? 0 : f,
    v = t.pageSize,
    m = t.defaultPageSize,
    b = m === void 0 ? 10 : m,
    g = t.onChange,
    h = g === void 0 ? zr : g,
    y = t.hideOnSinglePage,
    x = t.align,
    C = t.showPrevNextJumpers,
    S = C === void 0 ? !0 : C,
    R = t.showQuickJumper,
    K = t.showLessItems,
    T = t.showTitle,
    N = T === void 0 ? !0 : T,
    O = t.onShowSizeChange,
    P = O === void 0 ? zr : O,
    E = t.locale,
    $ = E === void 0 ? Ol : E,
    k = t.style,
    w = t.totalBoundaryShowSizeChanger,
    B = w === void 0 ? 50 : w,
    L = t.disabled,
    M = t.simple,
    D = t.showTotal,
    X = t.showSizeChanger,
    _ = X === void 0 ? u > B : X,
    ae = t.pageSizeOptions,
    te = t.itemRender,
    Ee = te === void 0 ? Tl : te,
    xe = t.jumpPrevIcon,
    Me = t.jumpNextIcon,
    J = t.prevIcon,
    le = t.nextIcon,
    ke = oe.useRef(null),
    Z = bn(10, { value: v, defaultValue: b }),
    U = ye(Z, 2),
    A = U[0],
    F = U[1],
    q = bn(1, {
      value: i,
      defaultValue: p,
      postState: function (me) {
        return Math.max(1, Math.min(me, Mt(void 0, A, u)))
      },
    }),
    ie = ye(q, 2),
    V = ie[0],
    ee = ie[1],
    W = oe.useState(V),
    de = ye(W, 2),
    G = de[0],
    pe = de[1]
  s.useEffect(
    function () {
      pe(V)
    },
    [V],
  )
  var ne = Math.max(1, V - (K ? 3 : 5)),
    Se = Math.min(Mt(void 0, A, u), V + (K ? 3 : 5))
  function we(Q, me) {
    var ze =
      Q ||
      oe.createElement('button', {
        type: 'button',
        'aria-label': me,
        className: ''.concat(n, '-item-link'),
      })
    return typeof Q == 'function' && (ze = oe.createElement(Q, j({}, t))), ze
  }
  function be(Q) {
    var me = Q.target.value,
      ze = Mt(void 0, A, u),
      mt
    return (
      me === ''
        ? (mt = me)
        : Number.isNaN(Number(me))
          ? (mt = G)
          : me >= ze
            ? (mt = ze)
            : (mt = Number(me)),
      mt
    )
  }
  function Re(Q) {
    return _r(Q) && Q !== V && _r(u) && u > 0
  }
  var _e = u > A ? R : !1
  function nt(Q) {
    ;(Q.keyCode === Je.UP || Q.keyCode === Je.DOWN) && Q.preventDefault()
  }
  function Ie(Q) {
    var me = be(Q)
    switch ((me !== G && pe(me), Q.keyCode)) {
      case Je.ENTER:
        ue(me)
        break
      case Je.UP:
        ue(me - 1)
        break
      case Je.DOWN:
        ue(me + 1)
        break
    }
  }
  function ve(Q) {
    ue(be(Q))
  }
  function Ne(Q) {
    var me = Mt(Q, A, u),
      ze = V > me && me !== 0 ? me : V
    F(Q), pe(ze), P == null || P(V, Q), ee(ze), h == null || h(ze, Q)
  }
  function ue(Q) {
    if (Re(Q) && !L) {
      var me = Mt(void 0, A, u),
        ze = Q
      return (
        Q > me ? (ze = me) : Q < 1 && (ze = 1),
        ze !== G && pe(ze),
        ee(ze),
        h == null || h(ze, A),
        ze
      )
    }
    return V
  }
  var Te = V > 1,
    Ke = V < Mt(void 0, A, u)
  function Ce() {
    Te && ue(V - 1)
  }
  function je() {
    Ke && ue(V + 1)
  }
  function He() {
    ue(ne)
  }
  function Be() {
    ue(Se)
  }
  function We(Q, me) {
    if (
      Q.key === 'Enter' ||
      Q.charCode === Je.ENTER ||
      Q.keyCode === Je.ENTER
    ) {
      for (
        var ze = arguments.length, mt = new Array(ze > 2 ? ze - 2 : 0), Pt = 2;
        Pt < ze;
        Pt++
      )
        mt[Pt - 2] = arguments[Pt]
      me.apply(void 0, mt)
    }
  }
  function st(Q) {
    We(Q, Ce)
  }
  function yt(Q) {
    We(Q, je)
  }
  function Oe(Q) {
    We(Q, He)
  }
  function Rt(Q) {
    We(Q, Be)
  }
  function Ze(Q) {
    var me = Ee(Q, 'prev', we(J, 'prev page'))
    return oe.isValidElement(me) ? oe.cloneElement(me, { disabled: !Te }) : me
  }
  function ot(Q) {
    var me = Ee(Q, 'next', we(le, 'next page'))
    return oe.isValidElement(me) ? oe.cloneElement(me, { disabled: !Ke }) : me
  }
  function et(Q) {
    ;(Q.type === 'click' || Q.keyCode === Je.ENTER) && ue(G)
  }
  var dt = null,
    Ve = Wt(t, { aria: !0, data: !0 }),
    qe =
      D &&
      oe.createElement(
        'li',
        { className: ''.concat(n, '-total-text') },
        D(u, [u === 0 ? 0 : (V - 1) * A + 1, V * A > u ? u : V * A]),
      ),
    at = null,
    Pe = Mt(void 0, A, u)
  if (y && u <= A) return null
  var Le = [],
    tt = {
      rootPrefixCls: n,
      onClick: ue,
      onKeyPress: We,
      showTitle: N,
      itemRender: Ee,
      page: -1,
    },
    Jt = V - 1 > 0 ? V - 1 : 0,
    Qt = V + 1 < Pe ? V + 1 : Pe,
    ht = R && R.goButton,
    Zt = it(M) === 'object' ? M.readOnly : !M,
    re = ht,
    ce = null
  M &&
    (ht &&
      (typeof ht == 'boolean'
        ? (re = oe.createElement(
            'button',
            { type: 'button', onClick: et, onKeyUp: et },
            $.jump_to_confirm,
          ))
        : (re = oe.createElement('span', { onClick: et, onKeyUp: et }, ht)),
      (re = oe.createElement(
        'li',
        {
          title: N ? ''.concat($.jump_to).concat(V, '/').concat(Pe) : null,
          className: ''.concat(n, '-simple-pager'),
        },
        re,
      ))),
    (ce = oe.createElement(
      'li',
      {
        title: N ? ''.concat(V, '/').concat(Pe) : null,
        className: ''.concat(n, '-simple-pager'),
      },
      Zt
        ? G
        : oe.createElement('input', {
            type: 'text',
            value: G,
            disabled: L,
            onKeyDown: nt,
            onKeyUp: Ie,
            onChange: Ie,
            onBlur: ve,
            size: 3,
          }),
      oe.createElement('span', { className: ''.concat(n, '-slash') }, '/'),
      Pe,
    )))
  var $e = K ? 1 : 2
  if (Pe <= 3 + $e * 2) {
    Pe ||
      Le.push(
        oe.createElement(
          on,
          se({}, tt, {
            key: 'noPager',
            page: 1,
            className: ''.concat(n, '-item-disabled'),
          }),
        ),
      )
    for (var De = 1; De <= Pe; De += 1)
      Le.push(
        oe.createElement(
          on,
          se({}, tt, { key: De, page: De, active: V === De }),
        ),
      )
  } else {
    var Xe = K ? $.prev_3 : $.prev_5,
      Ue = K ? $.next_3 : $.next_5,
      ut = Ee(ne, 'jump-prev', we(xe, 'prev page')),
      Fe = Ee(Se, 'jump-next', we(Me, 'next page'))
    S &&
      ((dt = ut
        ? oe.createElement(
            'li',
            {
              title: N ? Xe : null,
              key: 'prev',
              onClick: He,
              tabIndex: 0,
              onKeyDown: Oe,
              className: Y(
                ''.concat(n, '-jump-prev'),
                I({}, ''.concat(n, '-jump-prev-custom-icon'), !!xe),
              ),
            },
            ut,
          )
        : null),
      (at = Fe
        ? oe.createElement(
            'li',
            {
              title: N ? Ue : null,
              key: 'next',
              onClick: Be,
              tabIndex: 0,
              onKeyDown: Rt,
              className: Y(
                ''.concat(n, '-jump-next'),
                I({}, ''.concat(n, '-jump-next-custom-icon'), !!Me),
              ),
            },
            Fe,
          )
        : null))
    var _t = Math.max(1, V - $e),
      en = Math.min(V + $e, Pe)
    V - 1 <= $e && (en = 1 + $e * 2), Pe - V <= $e && (_t = Pe - $e * 2)
    for (var xt = _t; xt <= en; xt += 1)
      Le.push(
        oe.createElement(
          on,
          se({}, tt, { key: xt, page: xt, active: V === xt }),
        ),
      )
    if (
      (V - 1 >= $e * 2 &&
        V !== 3 &&
        ((Le[0] = oe.cloneElement(Le[0], {
          className: Y(
            ''.concat(n, '-item-after-jump-prev'),
            Le[0].props.className,
          ),
        })),
        Le.unshift(dt)),
      Pe - V >= $e * 2 && V !== Pe - 2)
    ) {
      var It = Le[Le.length - 1]
      ;(Le[Le.length - 1] = oe.cloneElement(It, {
        className: Y(
          ''.concat(n, '-item-before-jump-next'),
          It.props.className,
        ),
      })),
        Le.push(at)
    }
    _t !== 1 &&
      Le.unshift(oe.createElement(on, se({}, tt, { key: 1, page: 1 }))),
      en !== Pe &&
        Le.push(oe.createElement(on, se({}, tt, { key: Pe, page: Pe })))
  }
  var ft = Ze(Jt)
  if (ft) {
    var tn = !Te || !Pe
    ft = oe.createElement(
      'li',
      {
        title: N ? $.prev_page : null,
        onClick: Ce,
        tabIndex: tn ? null : 0,
        onKeyDown: st,
        className: Y(
          ''.concat(n, '-prev'),
          I({}, ''.concat(n, '-disabled'), tn),
        ),
        'aria-disabled': tn,
      },
      ft,
    )
  }
  var Ot = ot(Qt)
  if (Ot) {
    var Kt, Ht
    M
      ? ((Kt = !Ke), (Ht = Te ? 0 : null))
      : ((Kt = !Ke || !Pe), (Ht = Kt ? null : 0)),
      (Ot = oe.createElement(
        'li',
        {
          title: N ? $.next_page : null,
          onClick: je,
          tabIndex: Ht,
          onKeyDown: yt,
          className: Y(
            ''.concat(n, '-next'),
            I({}, ''.concat(n, '-disabled'), Kt),
          ),
          'aria-disabled': Kt,
        },
        Ot,
      ))
  }
  var Rn = Y(
    n,
    d,
    I(
      I(
        I(
          I(
            I({}, ''.concat(n, '-start'), x === 'start'),
            ''.concat(n, '-center'),
            x === 'center',
          ),
          ''.concat(n, '-end'),
          x === 'end',
        ),
        ''.concat(n, '-simple'),
        M,
      ),
      ''.concat(n, '-disabled'),
      L,
    ),
  )
  return oe.createElement(
    'ul',
    se({ className: Rn, style: k, ref: ke }, Ve),
    qe,
    ft,
    M ? ce : Le,
    Ot,
    oe.createElement(Pl, {
      locale: $,
      rootPrefixCls: n,
      disabled: L,
      selectComponentClass: a,
      selectPrefixCls: l,
      changeSize: Ne,
      pageSize: A,
      pageSizeOptions: ae,
      quickGo: _e ? ue : null,
      goButton: re,
      showSizeChanger: _,
    }),
  )
}
const Po = (e) =>
    s.createElement(
      $n,
      Object.assign({}, e, { showSearch: !0, size: 'small' }),
    ),
  To = (e) =>
    s.createElement(
      $n,
      Object.assign({}, e, { showSearch: !0, size: 'middle' }),
    )
Po.Option = $n.Option
To.Option = $n.Option
const Ml = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`${t}-item`]: {
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed',
          },
          '&-active': {
            borderColor: e.colorBorder,
            backgroundColor: e.itemActiveBgDisabled,
            '&:hover, &:active': { backgroundColor: e.itemActiveBgDisabled },
            a: { color: e.itemActiveColorDisabled },
          },
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: {
            backgroundColor: 'transparent',
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&${t}-disabled ${t}-item-link`]: {
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
      },
    }
  },
  Bl = (e) => {
    const { componentCls: t } = e
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.itemSizeSM,
        lineHeight: z(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: z(e.calc(e.itemSizeSM).sub(2).equal()),
      },
      [`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:hover': { backgroundColor: e.colorBgTextHover },
        '&:active': { backgroundColor: e.colorBgTextActive },
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: z(e.itemSizeSM),
      },
      [`&${t}-mini:not(${t}-disabled)`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
          [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
          [`&${t}-disabled:hover ${t}-item-link`]: {
            backgroundColor: 'transparent',
          },
        },
      },
      [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&::after': { height: e.itemSizeSM, lineHeight: z(e.itemSizeSM) },
      },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.itemSizeSM,
        marginInlineEnd: 0,
        lineHeight: z(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        '&-size-changer': { top: e.miniOptionsSizeChangerTop },
        '&-quick-jumper': {
          height: e.itemSizeSM,
          lineHeight: z(e.itemSizeSM),
          input: Object.assign(Object.assign({}, ka(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM,
          }),
        },
      },
    }
  },
  Ll = (e) => {
    const { componentCls: t } = e
    return {
      [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
        height: e.itemSizeSM,
        lineHeight: z(e.itemSizeSM),
        verticalAlign: 'top',
        [`${t}-item-link`]: {
          height: e.itemSizeSM,
          backgroundColor: 'transparent',
          border: 0,
          '&:hover': { backgroundColor: e.colorBgTextHover },
          '&:active': { backgroundColor: e.colorBgTextActive },
          '&::after': { height: e.itemSizeSM, lineHeight: z(e.itemSizeSM) },
        },
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: 'inline-block',
        height: e.itemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: 'border-box',
          height: '100%',
          padding: `0 ${z(e.paginationItemPaddingInline)}`,
          textAlign: 'center',
          backgroundColor: e.itemInputBg,
          border: `${z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `border-color ${e.motionDurationMid}`,
          color: 'inherit',
          '&:hover': { borderColor: e.colorPrimary },
          '&:focus': {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${z(e.inputOutlineOffset)} 0 ${z(e.controlOutlineWidth)} ${e.controlOutline}`,
          },
          '&[disabled]': {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: 'not-allowed',
          },
        },
      },
    }
  },
  zl = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            '&-svg': {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: 'auto',
            },
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: 'inline-block',
        minWidth: e.itemSize,
        height: e.itemSize,
        color: e.colorText,
        fontFamily: e.fontFamily,
        lineHeight: z(e.itemSize),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: e.borderRadius,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid}`,
      },
      [`${t}-prev, ${t}-next`]: {
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${z(e.lineWidth)} ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `all ${e.motionDurationMid}`,
        },
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: 'transparent' },
        },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        display: 'inline-block',
        marginInlineStart: e.margin,
        verticalAlign: 'middle',
        '&-size-changer': { display: 'inline-block', width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: z(e.controlHeight),
          verticalAlign: 'top',
          input: Object.assign(
            Object.assign(
              Object.assign({}, Ra(e)),
              Ia(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.colorPrimaryHover,
                activeBorderColor: e.colorPrimary,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              '&[disabled]': Object.assign({}, Oa(e)),
              width: e.calc(e.controlHeightLG).mul(1.25).equal(),
              height: e.controlHeight,
              boxSizing: 'border-box',
              margin: 0,
              marginInlineStart: e.marginXS,
              marginInlineEnd: e.marginXS,
            },
          ),
        },
      },
    }
  },
  _l = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-item`]: {
        display: 'inline-block',
        minWidth: e.itemSize,
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        fontFamily: e.fontFamily,
        lineHeight: z(e.calc(e.itemSize).sub(2).equal()),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        backgroundColor: e.itemBg,
        border: `${z(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: 0,
        cursor: 'pointer',
        userSelect: 'none',
        a: {
          display: 'block',
          padding: `0 ${z(e.paginationItemPaddingInline)}`,
          color: e.colorText,
          '&:hover': { textDecoration: 'none' },
        },
        [`&:not(${t}-item-active)`]: {
          '&:hover': {
            transition: `all ${e.motionDurationMid}`,
            backgroundColor: e.colorBgTextHover,
          },
          '&:active': { backgroundColor: e.colorBgTextActive },
        },
        '&-active': {
          fontWeight: e.fontWeightStrong,
          backgroundColor: e.itemActiveBg,
          borderColor: e.colorPrimary,
          a: { color: e.colorPrimary },
          '&:hover': { borderColor: e.colorPrimaryHover },
          '&:hover a': { color: e.colorPrimaryHover },
        },
      },
    }
  },
  Hl = (e) => {
    const { componentCls: t } = e
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, Lt(e)), {
                    display: 'flex',
                    '&-start': { justifyContent: 'start' },
                    '&-center': { justifyContent: 'center' },
                    '&-end': { justifyContent: 'end' },
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&::after': {
                      display: 'block',
                      clear: 'both',
                      height: 0,
                      overflow: 'hidden',
                      visibility: 'hidden',
                      content: '""',
                    },
                    [`${t}-total-text`]: {
                      display: 'inline-block',
                      height: e.itemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: z(e.calc(e.itemSize).sub(2).equal()),
                      verticalAlign: 'middle',
                    },
                  }),
                  _l(e),
                ),
                zl(e),
              ),
              Ll(e),
            ),
            Bl(e),
          ),
          Ml(e),
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              '&-after-jump-prev, &-before-jump-next': { display: 'none' },
            },
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: 'none' },
          },
        },
      ),
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
    }
  },
  jl = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}:not(${t}-disabled)`]: {
        [`${t}-item`]: Object.assign({}, $a(e)),
        [`${t}-jump-prev, ${t}-jump-next`]: {
          '&:focus-visible': Object.assign(
            {
              [`${t}-item-link-icon`]: { opacity: 1 },
              [`${t}-item-ellipsis`]: { opacity: 0 },
            },
            sn(e),
          ),
        },
        [`${t}-prev, ${t}-next`]: {
          [`&:focus-visible ${t}-item-link`]: Object.assign({}, sn(e)),
        },
      },
    }
  },
  Do = (e) =>
    Object.assign(
      {
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0,
      },
      Ea(e),
    ),
  Mo = (e) =>
    wn(
      e,
      {
        inputOutlineOffset: 0,
        paginationMiniOptionsMarginInlineStart: e
          .calc(e.marginXXS)
          .div(2)
          .equal(),
        paginationMiniQuickJumperInputWidth: e
          .calc(e.controlHeightLG)
          .mul(1.1)
          .equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em',
      },
      Na(e),
    ),
  Al = Sn(
    'Pagination',
    (e) => {
      const t = Mo(e)
      return [Hl(t), jl(t)]
    },
    Do,
  ),
  Fl = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
        '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        '&:focus-visible': {
          [`${t}-item-link`]: { borderColor: e.colorBorder },
        },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled },
          },
          [`&${t}-item-active`]: { backgroundColor: e.itemActiveBgDisabled },
        },
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
          },
        },
      },
      [`${t}${t}-bordered:not(${t}-mini)`]: {
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.itemBg,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.itemLinkBg,
            borderColor: e.colorBorder,
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            color: e.colorPrimary,
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: {
              borderColor: e.colorBorder,
              color: e.colorTextDisabled,
            },
          },
        },
        [`${t}-item`]: {
          backgroundColor: e.itemBg,
          border: `${z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            a: { color: e.colorPrimary },
          },
          '&-active': { borderColor: e.colorPrimary },
        },
      },
    }
  },
  Wl = Ka(
    ['Pagination', 'bordered'],
    (e) => {
      const t = Mo(e)
      return [Fl(t)]
    },
    Do,
  )
var Vl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const ql = (e) => {
  const {
      align: t,
      prefixCls: r,
      selectPrefixCls: n,
      className: o,
      rootClassName: l,
      style: d,
      size: a,
      locale: i,
      selectComponentClass: c,
      responsive: p,
      showSizeChanger: f,
    } = e,
    u = Vl(e, [
      'align',
      'prefixCls',
      'selectPrefixCls',
      'className',
      'rootClassName',
      'style',
      'size',
      'locale',
      'selectComponentClass',
      'responsive',
      'showSizeChanger',
    ]),
    { xs: v } = Eo(p),
    [, m] = er(),
    { getPrefixCls: b, direction: g, pagination: h = {} } = s.useContext(Nt),
    y = b('pagination', r),
    [x, C, S] = Al(y),
    R = f ?? h.showSizeChanger,
    K = s.useMemo(() => {
      const w = s.createElement(
          'span',
          { className: `${y}-item-ellipsis` },
          '•••',
        ),
        B = s.createElement(
          'button',
          { className: `${y}-item-link`, type: 'button', tabIndex: -1 },
          g === 'rtl' ? s.createElement(Er, null) : s.createElement(Nr, null),
        ),
        L = s.createElement(
          'button',
          { className: `${y}-item-link`, type: 'button', tabIndex: -1 },
          g === 'rtl' ? s.createElement(Nr, null) : s.createElement(Er, null),
        ),
        M = s.createElement(
          'a',
          { className: `${y}-item-link` },
          s.createElement(
            'div',
            { className: `${y}-item-container` },
            g === 'rtl'
              ? s.createElement(Lr, { className: `${y}-item-link-icon` })
              : s.createElement(Br, { className: `${y}-item-link-icon` }),
            w,
          ),
        ),
        D = s.createElement(
          'a',
          { className: `${y}-item-link` },
          s.createElement(
            'div',
            { className: `${y}-item-container` },
            g === 'rtl'
              ? s.createElement(Br, { className: `${y}-item-link-icon` })
              : s.createElement(Lr, { className: `${y}-item-link-icon` }),
            w,
          ),
        )
      return { prevIcon: B, nextIcon: L, jumpPrevIcon: M, jumpNextIcon: D }
    }, [g, y]),
    [T] = Pa('Pagination', Ta),
    N = Object.assign(Object.assign({}, T), i),
    O = Zn(a),
    P = O === 'small' || !!(v && !O && p),
    E = b('select', n),
    $ = Y(
      {
        [`${y}-${t}`]: !!t,
        [`${y}-mini`]: P,
        [`${y}-rtl`]: g === 'rtl',
        [`${y}-bordered`]: m.wireframe,
      },
      h == null ? void 0 : h.className,
      o,
      l,
      C,
      S,
    ),
    k = Object.assign(Object.assign({}, h == null ? void 0 : h.style), d)
  return x(
    s.createElement(
      s.Fragment,
      null,
      m.wireframe && s.createElement(Wl, { prefixCls: y }),
      s.createElement(
        Dl,
        Object.assign({}, K, u, {
          style: k,
          prefixCls: y,
          selectPrefixCls: E,
          className: $,
          selectComponentClass: c || (P ? Po : To),
          locale: N,
          showSizeChanger: R,
        }),
      ),
    ),
  )
}
var Xl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
          },
        },
      ],
    },
    name: 'caret-down',
    theme: 'filled',
  },
  Ul = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: Xl }))
  },
  Gl = s.forwardRef(Ul),
  Yl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
          },
        },
      ],
    },
    name: 'caret-down',
    theme: 'outlined',
  },
  Jl = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: Yl }))
  },
  Ql = s.forwardRef(Jl),
  Zl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
          },
        },
      ],
    },
    name: 'caret-up',
    theme: 'outlined',
  },
  ei = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: Zl }))
  },
  ti = s.forwardRef(ei),
  ni = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z',
          },
        },
      ],
    },
    name: 'file',
    theme: 'outlined',
  },
  ri = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: ni }))
  },
  Bo = s.forwardRef(ri),
  oi = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z',
          },
        },
      ],
    },
    name: 'filter',
    theme: 'filled',
  },
  ai = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: oi }))
  },
  li = s.forwardRef(ai),
  ii = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z',
          },
        },
      ],
    },
    name: 'folder',
    theme: 'outlined',
  },
  si = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: ii }))
  },
  ci = s.forwardRef(si),
  di = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z',
          },
        },
      ],
    },
    name: 'holder',
    theme: 'outlined',
  },
  ui = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: di }))
  },
  fi = s.forwardRef(ui),
  pi = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
          },
        },
      ],
    },
    name: 'minus-square',
    theme: 'outlined',
  },
  vi = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: pi }))
  },
  mi = s.forwardRef(vi),
  gi = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
          },
        },
      ],
    },
    name: 'plus-square',
    theme: 'outlined',
  },
  hi = function (t, r) {
    return s.createElement(vt, se({}, t, { ref: r, icon: gi }))
  },
  bi = s.forwardRef(hi),
  St = {},
  fn = 'rc-table-internal-hook'
function ar(e) {
  var t = s.createContext(void 0),
    r = function (o) {
      var l = o.value,
        d = o.children,
        a = s.useRef(l)
      a.current = l
      var i = s.useState(function () {
          return {
            getValue: function () {
              return a.current
            },
            listeners: new Set(),
          }
        }),
        c = ye(i, 1),
        p = c[0]
      return (
        Bt(
          function () {
            Da.unstable_batchedUpdates(function () {
              p.listeners.forEach(function (f) {
                f(l)
              })
            })
          },
          [l],
        ),
        s.createElement(t.Provider, { value: p }, d)
      )
    }
  return { Context: t, Provider: r, defaultValue: e }
}
function Qe(e, t) {
  var r = $t(
      typeof t == 'function'
        ? t
        : function (f) {
            if (t === void 0) return f
            if (!Array.isArray(t)) return f[t]
            var u = {}
            return (
              t.forEach(function (v) {
                u[v] = f[v]
              }),
              u
            )
          },
    ),
    n = s.useContext(e == null ? void 0 : e.Context),
    o = n || {},
    l = o.listeners,
    d = o.getValue,
    a = s.useRef()
  a.current = r(n ? d() : e == null ? void 0 : e.defaultValue)
  var i = s.useState({}),
    c = ye(i, 2),
    p = c[1]
  return (
    Bt(
      function () {
        if (!n) return
        function f(u) {
          var v = r(u)
          cn(a.current, v, !0) || p({})
        }
        return (
          l.add(f),
          function () {
            l.delete(f)
          }
        )
      },
      [n],
    ),
    a.current
  )
}
function yi() {
  var e = s.createContext(null)
  function t() {
    return s.useContext(e)
  }
  function r(o, l) {
    var d = kr(o),
      a = function (c, p) {
        var f = d ? { ref: p } : {},
          u = s.useRef(0),
          v = s.useRef(c),
          m = t()
        return m !== null
          ? s.createElement(o, se({}, c, f))
          : ((!l || l(v.current, c)) && (u.current += 1),
            (v.current = c),
            s.createElement(
              e.Provider,
              { value: u.current },
              s.createElement(o, se({}, c, f)),
            ))
      }
    return d ? s.forwardRef(a) : a
  }
  function n(o, l) {
    var d = kr(o),
      a = function (c, p) {
        var f = d ? { ref: p } : {}
        return t(), s.createElement(o, se({}, c, f))
      }
    return d ? s.memo(s.forwardRef(a), l) : s.memo(a, l)
  }
  return { makeImmutable: r, responseImmutable: n, useImmutableMark: t }
}
var lr = yi(),
  Lo = lr.makeImmutable,
  Xt = lr.responseImmutable,
  xi = lr.useImmutableMark,
  rt = ar(),
  zo = s.createContext({ renderWithProps: !1 }),
  Ci = 'RC_TABLE_KEY'
function Si(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function En(e) {
  var t = [],
    r = {}
  return (
    e.forEach(function (n) {
      for (
        var o = n || {},
          l = o.key,
          d = o.dataIndex,
          a = l || Si(d).join('-') || Ci;
        r[a];

      )
        a = ''.concat(a, '_next')
      ;(r[a] = !0), t.push(a)
    }),
    t
  )
}
function jn(e) {
  return e != null
}
function wi(e) {
  return typeof e == 'number' && !Number.isNaN(e)
}
function $i(e) {
  return e && it(e) === 'object' && !Array.isArray(e) && !s.isValidElement(e)
}
function Ei(e, t, r, n, o, l) {
  var d = s.useContext(zo),
    a = xi(),
    i = ho(
      function () {
        if (jn(n)) return [n]
        var c = t == null || t === '' ? [] : Array.isArray(t) ? t : [t],
          p = tr(e, c),
          f = p,
          u = void 0
        if (o) {
          var v = o(p, e, r)
          $i(v)
            ? ((f = v.children), (u = v.props), (d.renderWithProps = !0))
            : (f = v)
        }
        return [f, u]
      },
      [a, e, n, t, o, r],
      function (c, p) {
        if (l) {
          var f = ye(c, 2),
            u = f[1],
            v = ye(p, 2),
            m = v[1]
          return l(m, u)
        }
        return d.renderWithProps ? !0 : !cn(c, p, !0)
      },
    )
  return i
}
function Ni(e, t, r, n) {
  var o = e + t - 1
  return e <= n && o >= r
}
function ki(e, t) {
  return Qe(rt, function (r) {
    var n = Ni(e, t || 1, r.hoverStartRow, r.hoverEndRow)
    return [n, r.onHover]
  })
}
var Ri = function (t) {
  var r = t.ellipsis,
    n = t.rowType,
    o = t.children,
    l,
    d = r === !0 ? { showTitle: !0 } : r
  return (
    d &&
      (d.showTitle || n === 'header') &&
      (typeof o == 'string' || typeof o == 'number'
        ? (l = o.toString())
        : s.isValidElement(o) &&
          typeof o.props.children == 'string' &&
          (l = o.props.children)),
    l
  )
}
function Ii(e) {
  var t,
    r,
    n,
    o,
    l,
    d,
    a,
    i,
    c = e.component,
    p = e.children,
    f = e.ellipsis,
    u = e.scope,
    v = e.prefixCls,
    m = e.className,
    b = e.align,
    g = e.record,
    h = e.render,
    y = e.dataIndex,
    x = e.renderIndex,
    C = e.shouldCellUpdate,
    S = e.index,
    R = e.rowType,
    K = e.colSpan,
    T = e.rowSpan,
    N = e.fixLeft,
    O = e.fixRight,
    P = e.firstFixLeft,
    E = e.lastFixLeft,
    $ = e.firstFixRight,
    k = e.lastFixRight,
    w = e.appendNode,
    B = e.additionalProps,
    L = B === void 0 ? {} : B,
    M = e.isSticky,
    D = ''.concat(v, '-cell'),
    X = Qe(rt, ['supportSticky', 'allColumnsFixedLeft', 'rowHoverable']),
    _ = X.supportSticky,
    ae = X.allColumnsFixedLeft,
    te = X.rowHoverable,
    Ee = Ei(g, y, x, p, h, C),
    xe = ye(Ee, 2),
    Me = xe[0],
    J = xe[1],
    le = {},
    ke = typeof N == 'number' && _,
    Z = typeof O == 'number' && _
  ke && ((le.position = 'sticky'), (le.left = N)),
    Z && ((le.position = 'sticky'), (le.right = O))
  var U =
      (t =
        (r =
          (n = J == null ? void 0 : J.colSpan) !== null && n !== void 0
            ? n
            : L.colSpan) !== null && r !== void 0
          ? r
          : K) !== null && t !== void 0
        ? t
        : 1,
    A =
      (o =
        (l =
          (d = J == null ? void 0 : J.rowSpan) !== null && d !== void 0
            ? d
            : L.rowSpan) !== null && l !== void 0
          ? l
          : T) !== null && o !== void 0
        ? o
        : 1,
    F = ki(S, A),
    q = ye(F, 2),
    ie = q[0],
    V = q[1],
    ee = $t(function (we) {
      var be
      g && V(S, S + A - 1),
        L == null ||
          (be = L.onMouseEnter) === null ||
          be === void 0 ||
          be.call(L, we)
    }),
    W = $t(function (we) {
      var be
      g && V(-1, -1),
        L == null ||
          (be = L.onMouseLeave) === null ||
          be === void 0 ||
          be.call(L, we)
    })
  if (U === 0 || A === 0) return null
  var de =
      (a = L.title) !== null && a !== void 0
        ? a
        : Ri({ rowType: R, ellipsis: f, children: Me }),
    G = Y(
      D,
      m,
      ((i = {}),
      I(
        I(
          I(
            I(
              I(
                I(
                  I(
                    I(
                      I(
                        I(i, ''.concat(D, '-fix-left'), ke && _),
                        ''.concat(D, '-fix-left-first'),
                        P && _,
                      ),
                      ''.concat(D, '-fix-left-last'),
                      E && _,
                    ),
                    ''.concat(D, '-fix-left-all'),
                    E && ae && _,
                  ),
                  ''.concat(D, '-fix-right'),
                  Z && _,
                ),
                ''.concat(D, '-fix-right-first'),
                $ && _,
              ),
              ''.concat(D, '-fix-right-last'),
              k && _,
            ),
            ''.concat(D, '-ellipsis'),
            f,
          ),
          ''.concat(D, '-with-append'),
          w,
        ),
        ''.concat(D, '-fix-sticky'),
        (ke || Z) && M && _,
      ),
      I(i, ''.concat(D, '-row-hover'), !J && ie)),
      L.className,
      J == null ? void 0 : J.className,
    ),
    pe = {}
  b && (pe.textAlign = b)
  var ne = j(j(j(j({}, le), L.style), pe), J == null ? void 0 : J.style),
    Se = Me
  return (
    it(Se) === 'object' &&
      !Array.isArray(Se) &&
      !s.isValidElement(Se) &&
      (Se = null),
    f &&
      (E || $) &&
      (Se = s.createElement(
        'span',
        { className: ''.concat(D, '-content') },
        Se,
      )),
    s.createElement(
      c,
      se({}, J, L, {
        className: G,
        style: ne,
        title: de,
        scope: u,
        onMouseEnter: te ? ee : void 0,
        onMouseLeave: te ? W : void 0,
        colSpan: U !== 1 ? U : null,
        rowSpan: A !== 1 ? A : null,
      }),
      w,
      Se,
    )
  )
}
const Ut = s.memo(Ii)
function ir(e, t, r, n, o) {
  var l = r[e] || {},
    d = r[t] || {},
    a,
    i
  l.fixed === 'left'
    ? (a = n.left[o === 'rtl' ? t : e])
    : d.fixed === 'right' && (i = n.right[o === 'rtl' ? e : t])
  var c = !1,
    p = !1,
    f = !1,
    u = !1,
    v = r[t + 1],
    m = r[e - 1],
    b =
      (v && !v.fixed) ||
      (m && !m.fixed) ||
      r.every(function (C) {
        return C.fixed === 'left'
      })
  if (o === 'rtl') {
    if (a !== void 0) {
      var g = m && m.fixed === 'left'
      u = !g && b
    } else if (i !== void 0) {
      var h = v && v.fixed === 'right'
      f = !h && b
    }
  } else if (a !== void 0) {
    var y = v && v.fixed === 'left'
    c = !y && b
  } else if (i !== void 0) {
    var x = m && m.fixed === 'right'
    p = !x && b
  }
  return {
    fixLeft: a,
    fixRight: i,
    lastFixLeft: c,
    firstFixRight: p,
    lastFixRight: f,
    firstFixLeft: u,
    isSticky: n.isSticky,
  }
}
var _o = s.createContext({})
function Oi(e) {
  var t = e.className,
    r = e.index,
    n = e.children,
    o = e.colSpan,
    l = o === void 0 ? 1 : o,
    d = e.rowSpan,
    a = e.align,
    i = Qe(rt, ['prefixCls', 'direction']),
    c = i.prefixCls,
    p = i.direction,
    f = s.useContext(_o),
    u = f.scrollColumnIndex,
    v = f.stickyOffsets,
    m = f.flattenColumns,
    b = r + l - 1,
    g = b + 1 === u ? l + 1 : l,
    h = ir(r, r + g - 1, m, v, p)
  return s.createElement(
    Ut,
    se(
      {
        className: t,
        index: r,
        component: 'td',
        prefixCls: c,
        record: null,
        dataIndex: null,
        align: a,
        colSpan: g,
        rowSpan: d,
        render: function () {
          return n
        },
      },
      h,
    ),
  )
}
var Ki = ['children']
function Pi(e) {
  var t = e.children,
    r = pt(e, Ki)
  return s.createElement('tr', r, t)
}
function Nn(e) {
  var t = e.children
  return t
}
Nn.Row = Pi
Nn.Cell = Oi
function Ti(e) {
  var t = e.children,
    r = e.stickyOffsets,
    n = e.flattenColumns,
    o = Qe(rt, 'prefixCls'),
    l = n.length - 1,
    d = n[l],
    a = s.useMemo(
      function () {
        return {
          stickyOffsets: r,
          flattenColumns: n,
          scrollColumnIndex: d != null && d.scrollbar ? l : null,
        }
      },
      [d, n, l, r],
    )
  return s.createElement(
    _o.Provider,
    { value: a },
    s.createElement('tfoot', { className: ''.concat(o, '-summary') }, t),
  )
}
const mn = Xt(Ti)
var Ho = Nn
function Di(e) {
  return null
}
function Mi(e) {
  return null
}
function jo(e, t, r, n, o, l, d) {
  e.push({ record: t, indent: r, index: d })
  var a = l(t),
    i = o == null ? void 0 : o.has(a)
  if (t && Array.isArray(t[n]) && i)
    for (var c = 0; c < t[n].length; c += 1) jo(e, t[n][c], r + 1, n, o, l, c)
}
function Ao(e, t, r, n) {
  var o = s.useMemo(
    function () {
      if (r != null && r.size) {
        for (var l = [], d = 0; d < (e == null ? void 0 : e.length); d += 1) {
          var a = e[d]
          jo(l, a, 0, t, r, n, d)
        }
        return l
      }
      return e == null
        ? void 0
        : e.map(function (i, c) {
            return { record: i, indent: 0, index: c }
          })
    },
    [e, t, r, n],
  )
  return o
}
function Fo(e, t, r, n) {
  var o = Qe(rt, [
      'prefixCls',
      'fixedInfoList',
      'flattenColumns',
      'expandableType',
      'expandRowByClick',
      'onTriggerExpand',
      'rowClassName',
      'expandedRowClassName',
      'indentSize',
      'expandIcon',
      'expandedRowRender',
      'expandIconColumnIndex',
      'expandedKeys',
      'childrenColumnName',
      'rowExpandable',
      'onRow',
    ]),
    l = o.flattenColumns,
    d = o.expandableType,
    a = o.expandedKeys,
    i = o.childrenColumnName,
    c = o.onTriggerExpand,
    p = o.rowExpandable,
    f = o.onRow,
    u = o.expandRowByClick,
    v = o.rowClassName,
    m = d === 'nest',
    b = d === 'row' && (!p || p(e)),
    g = b || m,
    h = a && a.has(t),
    y = i && e && e[i],
    x = $t(c),
    C = f == null ? void 0 : f(e, r),
    S = C == null ? void 0 : C.onClick,
    R = function (O) {
      u && g && c(e, O)
      for (
        var P = arguments.length, E = new Array(P > 1 ? P - 1 : 0), $ = 1;
        $ < P;
        $++
      )
        E[$ - 1] = arguments[$]
      S == null || S.apply(void 0, [O].concat(E))
    },
    K
  typeof v == 'string' ? (K = v) : typeof v == 'function' && (K = v(e, r, n))
  var T = En(l)
  return j(
    j({}, o),
    {},
    {
      columnsKey: T,
      nestExpandable: m,
      expanded: h,
      hasNestChildren: y,
      record: e,
      onTriggerExpand: x,
      rowSupportExpand: b,
      expandable: g,
      rowProps: j(
        j({}, C),
        {},
        { className: Y(K, C == null ? void 0 : C.className), onClick: R },
      ),
    },
  )
}
function Wo(e) {
  var t = e.prefixCls,
    r = e.children,
    n = e.component,
    o = e.cellComponent,
    l = e.className,
    d = e.expanded,
    a = e.colSpan,
    i = e.isEmpty,
    c = Qe(rt, [
      'scrollbarSize',
      'fixHeader',
      'fixColumn',
      'componentWidth',
      'horizonScroll',
    ]),
    p = c.scrollbarSize,
    f = c.fixHeader,
    u = c.fixColumn,
    v = c.componentWidth,
    m = c.horizonScroll,
    b = r
  return (
    (i ? m && v : u) &&
      (b = s.createElement(
        'div',
        {
          style: {
            width: v - (f && !i ? p : 0),
            position: 'sticky',
            left: 0,
            overflow: 'hidden',
          },
          className: ''.concat(t, '-expanded-row-fixed'),
        },
        b,
      )),
    s.createElement(
      n,
      { className: l, style: { display: d ? null : 'none' } },
      s.createElement(Ut, { component: o, prefixCls: t, colSpan: a }, b),
    )
  )
}
function Vo(e, t, r, n, o) {
  var l = e.record,
    d = e.prefixCls,
    a = e.columnsKey,
    i = e.fixedInfoList,
    c = e.expandIconColumnIndex,
    p = e.nestExpandable,
    f = e.indentSize,
    u = e.expandIcon,
    v = e.expanded,
    m = e.hasNestChildren,
    b = e.onTriggerExpand,
    g = a[r],
    h = i[r],
    y
  r === (c || 0) &&
    p &&
    (y = s.createElement(
      s.Fragment,
      null,
      s.createElement('span', {
        style: { paddingLeft: ''.concat(f * n, 'px') },
        className: ''.concat(d, '-row-indent indent-level-').concat(n),
      }),
      u({ prefixCls: d, expanded: v, expandable: m, record: l, onExpand: b }),
    ))
  var x
  return (
    t.onCell && (x = t.onCell(l, o)),
    { key: g, fixedInfo: h, appendCellNode: y, additionalCellProps: x || {} }
  )
}
function Bi(e) {
  var t = e.className,
    r = e.style,
    n = e.record,
    o = e.index,
    l = e.renderIndex,
    d = e.rowKey,
    a = e.indent,
    i = a === void 0 ? 0 : a,
    c = e.rowComponent,
    p = e.cellComponent,
    f = e.scopeCellComponent,
    u = Fo(n, d, o, i),
    v = u.prefixCls,
    m = u.flattenColumns,
    b = u.expandedRowClassName,
    g = u.expandedRowRender,
    h = u.rowProps,
    y = u.expanded,
    x = u.rowSupportExpand,
    C = s.useRef(!1)
  C.current || (C.current = y)
  var S = b && b(n, o, i),
    R = s.createElement(
      c,
      se({}, h, {
        'data-row-key': d,
        className: Y(
          t,
          ''.concat(v, '-row'),
          ''.concat(v, '-row-level-').concat(i),
          h == null ? void 0 : h.className,
          i >= 1 ? S : '',
        ),
        style: j(j({}, r), h == null ? void 0 : h.style),
      }),
      m.map(function (N, O) {
        var P = N.render,
          E = N.dataIndex,
          $ = N.className,
          k = Vo(u, N, O, i, o),
          w = k.key,
          B = k.fixedInfo,
          L = k.appendCellNode,
          M = k.additionalCellProps
        return s.createElement(
          Ut,
          se(
            {
              className: $,
              ellipsis: N.ellipsis,
              align: N.align,
              scope: N.rowScope,
              component: N.rowScope ? f : p,
              prefixCls: v,
              key: w,
              record: n,
              index: o,
              renderIndex: l,
              dataIndex: E,
              render: P,
              shouldCellUpdate: N.shouldCellUpdate,
            },
            B,
            { appendNode: L, additionalProps: M },
          ),
        )
      }),
    ),
    K
  if (x && (C.current || y)) {
    var T = g(n, o, i + 1, y)
    K = s.createElement(
      Wo,
      {
        expanded: y,
        className: Y(
          ''.concat(v, '-expanded-row'),
          ''.concat(v, '-expanded-row-level-').concat(i + 1),
          S,
        ),
        prefixCls: v,
        component: c,
        cellComponent: p,
        colSpan: m.length,
        isEmpty: !1,
      },
      T,
    )
  }
  return s.createElement(s.Fragment, null, R, K)
}
const Li = Xt(Bi)
function zi(e) {
  var t = e.columnKey,
    r = e.onColumnResize,
    n = s.useRef()
  return (
    s.useEffect(function () {
      n.current && r(t, n.current.offsetWidth)
    }, []),
    s.createElement(
      nr,
      { data: t },
      s.createElement(
        'td',
        { ref: n, style: { padding: 0, border: 0, height: 0 } },
        s.createElement(
          'div',
          { style: { height: 0, overflow: 'hidden' } },
          ' ',
        ),
      ),
    )
  )
}
function _i(e) {
  var t = e.prefixCls,
    r = e.columnsKey,
    n = e.onColumnResize
  return s.createElement(
    'tr',
    {
      'aria-hidden': 'true',
      className: ''.concat(t, '-measure-row'),
      style: { height: 0, fontSize: 0 },
    },
    s.createElement(
      nr.Collection,
      {
        onBatchResize: function (l) {
          l.forEach(function (d) {
            var a = d.data,
              i = d.size
            n(a, i.offsetWidth)
          })
        },
      },
      r.map(function (o) {
        return s.createElement(zi, { key: o, columnKey: o, onColumnResize: n })
      }),
    ),
  )
}
function Hi(e) {
  var t = e.data,
    r = e.measureColumnWidth,
    n = Qe(rt, [
      'prefixCls',
      'getComponent',
      'onColumnResize',
      'flattenColumns',
      'getRowKey',
      'expandedKeys',
      'childrenColumnName',
      'emptyNode',
    ]),
    o = n.prefixCls,
    l = n.getComponent,
    d = n.onColumnResize,
    a = n.flattenColumns,
    i = n.getRowKey,
    c = n.expandedKeys,
    p = n.childrenColumnName,
    f = n.emptyNode,
    u = Ao(t, p, c, i),
    v = s.useRef({ renderWithProps: !1 }),
    m = l(['body', 'wrapper'], 'tbody'),
    b = l(['body', 'row'], 'tr'),
    g = l(['body', 'cell'], 'td'),
    h = l(['body', 'cell'], 'th'),
    y
  t.length
    ? (y = u.map(function (C, S) {
        var R = C.record,
          K = C.indent,
          T = C.index,
          N = i(R, S)
        return s.createElement(Li, {
          key: N,
          rowKey: N,
          record: R,
          index: S,
          renderIndex: T,
          rowComponent: b,
          cellComponent: g,
          scopeCellComponent: h,
          getRowKey: i,
          indent: K,
        })
      }))
    : (y = s.createElement(
        Wo,
        {
          expanded: !0,
          className: ''.concat(o, '-placeholder'),
          prefixCls: o,
          component: b,
          cellComponent: g,
          colSpan: a.length,
          isEmpty: !0,
        },
        f,
      ))
  var x = En(a)
  return s.createElement(
    zo.Provider,
    { value: v.current },
    s.createElement(
      m,
      { className: ''.concat(o, '-tbody') },
      r &&
        s.createElement(_i, { prefixCls: o, columnsKey: x, onColumnResize: d }),
      y,
    ),
  )
}
const ji = Xt(Hi)
var Ai = ['expandable'],
  ln = 'RC_TABLE_INTERNAL_COL_DEFINE'
function Fi(e) {
  var t = e.expandable,
    r = pt(e, Ai),
    n
  return (
    'expandable' in e ? (n = j(j({}, r), t)) : (n = r),
    n.showExpandColumn === !1 && (n.expandIconColumnIndex = -1),
    n
  )
}
var Wi = ['columnType']
function qo(e) {
  for (
    var t = e.colWidths,
      r = e.columns,
      n = e.columCount,
      o = Qe(rt, ['tableLayout']),
      l = o.tableLayout,
      d = [],
      a = n || r.length,
      i = !1,
      c = a - 1;
    c >= 0;
    c -= 1
  ) {
    var p = t[c],
      f = r && r[c],
      u = void 0,
      v = void 0
    if (
      (f && ((u = f[ln]), l === 'auto' && (v = f.minWidth)), p || v || u || i)
    ) {
      var m = u || {}
      m.columnType
      var b = pt(m, Wi)
      d.unshift(
        s.createElement(
          'col',
          se({ key: c, style: { width: p, minWidth: v } }, b),
        ),
      ),
        (i = !0)
    }
  }
  return s.createElement('colgroup', null, d)
}
var Vi = [
  'className',
  'noData',
  'columns',
  'flattenColumns',
  'colWidths',
  'columCount',
  'stickyOffsets',
  'direction',
  'fixHeader',
  'stickyTopOffset',
  'stickyBottomOffset',
  'stickyClassName',
  'onScroll',
  'maxContentScroll',
  'children',
]
function qi(e, t) {
  return s.useMemo(
    function () {
      for (var r = [], n = 0; n < t; n += 1) {
        var o = e[n]
        if (o !== void 0) r[n] = o
        else return null
      }
      return r
    },
    [e.join('_'), t],
  )
}
var Xi = s.forwardRef(function (e, t) {
  var r = e.className,
    n = e.noData,
    o = e.columns,
    l = e.flattenColumns,
    d = e.colWidths,
    a = e.columCount,
    i = e.stickyOffsets,
    c = e.direction,
    p = e.fixHeader,
    f = e.stickyTopOffset,
    u = e.stickyBottomOffset,
    v = e.stickyClassName,
    m = e.onScroll,
    b = e.maxContentScroll,
    g = e.children,
    h = pt(e, Vi),
    y = Qe(rt, ['prefixCls', 'scrollbarSize', 'isSticky', 'getComponent']),
    x = y.prefixCls,
    C = y.scrollbarSize,
    S = y.isSticky,
    R = y.getComponent,
    K = R(['header', 'table'], 'table'),
    T = S && !p ? 0 : C,
    N = s.useRef(null),
    O = s.useCallback(function (M) {
      Rr(t, M), Rr(N, M)
    }, [])
  s.useEffect(function () {
    var M
    function D(X) {
      var _ = X,
        ae = _.currentTarget,
        te = _.deltaX
      te &&
        (m({ currentTarget: ae, scrollLeft: ae.scrollLeft + te }),
        X.preventDefault())
    }
    return (
      (M = N.current) === null ||
        M === void 0 ||
        M.addEventListener('wheel', D, { passive: !1 }),
      function () {
        var X
        ;(X = N.current) === null ||
          X === void 0 ||
          X.removeEventListener('wheel', D)
      }
    )
  }, [])
  var P = s.useMemo(
      function () {
        return l.every(function (M) {
          return M.width
        })
      },
      [l],
    ),
    E = l[l.length - 1],
    $ = {
      fixed: E ? E.fixed : null,
      scrollbar: !0,
      onHeaderCell: function () {
        return { className: ''.concat(x, '-cell-scrollbar') }
      },
    },
    k = s.useMemo(
      function () {
        return T ? [].concat(he(o), [$]) : o
      },
      [T, o],
    ),
    w = s.useMemo(
      function () {
        return T ? [].concat(he(l), [$]) : l
      },
      [T, l],
    ),
    B = s.useMemo(
      function () {
        var M = i.right,
          D = i.left
        return j(
          j({}, i),
          {},
          {
            left:
              c === 'rtl'
                ? [].concat(
                    he(
                      D.map(function (X) {
                        return X + T
                      }),
                    ),
                    [0],
                  )
                : D,
            right:
              c === 'rtl'
                ? M
                : [].concat(
                    he(
                      M.map(function (X) {
                        return X + T
                      }),
                    ),
                    [0],
                  ),
            isSticky: S,
          },
        )
      },
      [T, i, S],
    ),
    L = qi(d, a)
  return s.createElement(
    'div',
    {
      style: j({ overflow: 'hidden' }, S ? { top: f, bottom: u } : {}),
      ref: O,
      className: Y(r, I({}, v, !!v)),
    },
    s.createElement(
      K,
      { style: { tableLayout: 'fixed', visibility: n || L ? null : 'hidden' } },
      (!n || !b || P) &&
        s.createElement(qo, {
          colWidths: L ? [].concat(he(L), [T]) : [],
          columCount: a + 1,
          columns: w,
        }),
      g(j(j({}, h), {}, { stickyOffsets: B, columns: k, flattenColumns: w })),
    ),
  )
})
const Hr = s.memo(Xi)
var Ui = function (t) {
  var r = t.cells,
    n = t.stickyOffsets,
    o = t.flattenColumns,
    l = t.rowComponent,
    d = t.cellComponent,
    a = t.onHeaderRow,
    i = t.index,
    c = Qe(rt, ['prefixCls', 'direction']),
    p = c.prefixCls,
    f = c.direction,
    u
  a &&
    (u = a(
      r.map(function (m) {
        return m.column
      }),
      i,
    ))
  var v = En(
    r.map(function (m) {
      return m.column
    }),
  )
  return s.createElement(
    l,
    u,
    r.map(function (m, b) {
      var g = m.column,
        h = ir(m.colStart, m.colEnd, o, n, f),
        y
      return (
        g && g.onHeaderCell && (y = m.column.onHeaderCell(g)),
        s.createElement(
          Ut,
          se(
            {},
            m,
            {
              scope: g.title ? (m.colSpan > 1 ? 'colgroup' : 'col') : null,
              ellipsis: g.ellipsis,
              align: g.align,
              component: d,
              prefixCls: p,
              key: v[b],
            },
            h,
            { additionalProps: y, rowType: 'header' },
          ),
        )
      )
    }),
  )
}
function Gi(e) {
  var t = []
  function r(d, a) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
    t[i] = t[i] || []
    var c = a,
      p = d.filter(Boolean).map(function (f) {
        var u = {
            key: f.key,
            className: f.className || '',
            children: f.title,
            column: f,
            colStart: c,
          },
          v = 1,
          m = f.children
        return (
          m &&
            m.length > 0 &&
            ((v = r(m, c, i + 1).reduce(function (b, g) {
              return b + g
            }, 0)),
            (u.hasSubColumns = !0)),
          'colSpan' in f && (v = f.colSpan),
          'rowSpan' in f && (u.rowSpan = f.rowSpan),
          (u.colSpan = v),
          (u.colEnd = u.colStart + v - 1),
          t[i].push(u),
          (c += v),
          v
        )
      })
    return p
  }
  r(e, 0)
  for (
    var n = t.length,
      o = function (a) {
        t[a].forEach(function (i) {
          !('rowSpan' in i) && !i.hasSubColumns && (i.rowSpan = n - a)
        })
      },
      l = 0;
    l < n;
    l += 1
  )
    o(l)
  return t
}
var Yi = function (t) {
  var r = t.stickyOffsets,
    n = t.columns,
    o = t.flattenColumns,
    l = t.onHeaderRow,
    d = Qe(rt, ['prefixCls', 'getComponent']),
    a = d.prefixCls,
    i = d.getComponent,
    c = s.useMemo(
      function () {
        return Gi(n)
      },
      [n],
    ),
    p = i(['header', 'wrapper'], 'thead'),
    f = i(['header', 'row'], 'tr'),
    u = i(['header', 'cell'], 'th')
  return s.createElement(
    p,
    { className: ''.concat(a, '-thead') },
    c.map(function (v, m) {
      var b = s.createElement(Ui, {
        key: m,
        flattenColumns: o,
        cells: v,
        stickyOffsets: r,
        rowComponent: f,
        cellComponent: u,
        onHeaderRow: l,
        index: m,
      })
      return b
    }),
  )
}
const jr = Xt(Yi)
function Ar(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
  return typeof t == 'number'
    ? t
    : t.endsWith('%')
      ? (e * parseFloat(t)) / 100
      : null
}
function Ji(e, t, r) {
  return s.useMemo(
    function () {
      if (t && t > 0) {
        var n = 0,
          o = 0
        e.forEach(function (u) {
          var v = Ar(t, u.width)
          v ? (n += v) : (o += 1)
        })
        var l = Math.max(t, r),
          d = Math.max(l - n, o),
          a = o,
          i = d / o,
          c = 0,
          p = e.map(function (u) {
            var v = j({}, u),
              m = Ar(t, v.width)
            if (m) v.width = m
            else {
              var b = Math.floor(i)
              ;(v.width = a === 1 ? d : b), (d -= b), (a -= 1)
            }
            return (c += v.width), v
          })
        if (c < l) {
          var f = l / c
          ;(d = l),
            p.forEach(function (u, v) {
              var m = Math.floor(u.width * f)
              ;(u.width = v === p.length - 1 ? d : m), (d -= m)
            })
        }
        return [p, Math.max(c, l)]
      }
      return [e, t]
    },
    [e, t, r],
  )
}
var Qi = ['children'],
  Zi = ['fixed']
function sr(e) {
  return mo(e)
    .filter(function (t) {
      return s.isValidElement(t)
    })
    .map(function (t) {
      var r = t.key,
        n = t.props,
        o = n.children,
        l = pt(n, Qi),
        d = j({ key: r }, l)
      return o && (d.children = sr(o)), d
    })
}
function Xo(e) {
  return e
    .filter(function (t) {
      return t && it(t) === 'object' && !t.hidden
    })
    .map(function (t) {
      var r = t.children
      return r && r.length > 0 ? j(j({}, t), {}, { children: Xo(r) }) : t
    })
}
function An(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'key'
  return e
    .filter(function (r) {
      return r && it(r) === 'object'
    })
    .reduce(function (r, n, o) {
      var l = n.fixed,
        d = l === !0 ? 'left' : l,
        a = ''.concat(t, '-').concat(o),
        i = n.children
      return i && i.length > 0
        ? [].concat(
            he(r),
            he(
              An(i, a).map(function (c) {
                return j({ fixed: d }, c)
              }),
            ),
          )
        : [].concat(he(r), [j(j({ key: a }, n), {}, { fixed: d })])
    }, [])
}
function es(e) {
  return e.map(function (t) {
    var r = t.fixed,
      n = pt(t, Zi),
      o = r
    return (
      r === 'left' ? (o = 'right') : r === 'right' && (o = 'left'),
      j({ fixed: o }, n)
    )
  })
}
function ts(e, t) {
  var r = e.prefixCls,
    n = e.columns,
    o = e.children,
    l = e.expandable,
    d = e.expandedKeys,
    a = e.columnTitle,
    i = e.getRowKey,
    c = e.onTriggerExpand,
    p = e.expandIcon,
    f = e.rowExpandable,
    u = e.expandIconColumnIndex,
    v = e.direction,
    m = e.expandRowByClick,
    b = e.columnWidth,
    g = e.fixed,
    h = e.scrollWidth,
    y = e.clientWidth,
    x = s.useMemo(
      function () {
        var E = n || sr(o) || []
        return Xo(E.slice())
      },
      [n, o],
    ),
    C = s.useMemo(
      function () {
        if (l) {
          var E = x.slice()
          if (!E.includes(St)) {
            var $ = u || 0
            $ >= 0 && E.splice($, 0, St)
          }
          var k = E.indexOf(St)
          E = E.filter(function (M, D) {
            return M !== St || D === k
          })
          var w = x[k],
            B
          ;(g === 'left' || g) && !u
            ? (B = 'left')
            : (g === 'right' || g) && u === x.length
              ? (B = 'right')
              : (B = w ? w.fixed : null)
          var L = I(
            I(
              I(
                I(
                  I(
                    I({}, ln, {
                      className: ''.concat(r, '-expand-icon-col'),
                      columnType: 'EXPAND_COLUMN',
                    }),
                    'title',
                    a,
                  ),
                  'fixed',
                  B,
                ),
                'className',
                ''.concat(r, '-row-expand-icon-cell'),
              ),
              'width',
              b,
            ),
            'render',
            function (D, X, _) {
              var ae = i(X, _),
                te = d.has(ae),
                Ee = f ? f(X) : !0,
                xe = p({
                  prefixCls: r,
                  expanded: te,
                  expandable: Ee,
                  record: X,
                  onExpand: c,
                })
              return m
                ? s.createElement(
                    'span',
                    {
                      onClick: function (J) {
                        return J.stopPropagation()
                      },
                    },
                    xe,
                  )
                : xe
            },
          )
          return E.map(function (M) {
            return M === St ? L : M
          })
        }
        return x.filter(function (M) {
          return M !== St
        })
      },
      [l, x, i, d, p, v],
    ),
    S = s.useMemo(
      function () {
        var E = C
        return (
          t && (E = t(E)),
          E.length ||
            (E = [
              {
                render: function () {
                  return null
                },
              },
            ]),
          E
        )
      },
      [t, C, v],
    ),
    R = s.useMemo(
      function () {
        return v === 'rtl' ? es(An(S)) : An(S)
      },
      [S, v, h],
    ),
    K = s.useMemo(
      function () {
        for (var E = -1, $ = R.length - 1; $ >= 0; $ -= 1) {
          var k = R[$].fixed
          if (k === 'left' || k === !0) {
            E = $
            break
          }
        }
        if (E >= 0)
          for (var w = 0; w <= E; w += 1) {
            var B = R[w].fixed
            if (B !== 'left' && B !== !0) return !0
          }
        var L = R.findIndex(function (X) {
          var _ = X.fixed
          return _ === 'right'
        })
        if (L >= 0)
          for (var M = L; M < R.length; M += 1) {
            var D = R[M].fixed
            if (D !== 'right') return !0
          }
        return !1
      },
      [R],
    ),
    T = Ji(R, h, y),
    N = ye(T, 2),
    O = N[0],
    P = N[1]
  return [S, O, P, K]
}
function ns(e) {
  var t = e.prefixCls,
    r = e.record,
    n = e.onExpand,
    o = e.expanded,
    l = e.expandable,
    d = ''.concat(t, '-row-expand-icon')
  if (!l)
    return s.createElement('span', {
      className: Y(d, ''.concat(t, '-row-spaced')),
    })
  var a = function (c) {
    n(r, c), c.stopPropagation()
  }
  return s.createElement('span', {
    className: Y(
      d,
      I(
        I({}, ''.concat(t, '-row-expanded'), o),
        ''.concat(t, '-row-collapsed'),
        !o,
      ),
    ),
    onClick: a,
  })
}
function rs(e, t, r) {
  var n = []
  function o(l) {
    ;(l || []).forEach(function (d, a) {
      n.push(t(d, a)), o(d[r])
    })
  }
  return o(e), n
}
function os(e, t, r) {
  var n = Fi(e),
    o = n.expandIcon,
    l = n.expandedRowKeys,
    d = n.defaultExpandedRowKeys,
    a = n.defaultExpandAllRows,
    i = n.expandedRowRender,
    c = n.onExpand,
    p = n.onExpandedRowsChange,
    f = n.childrenColumnName,
    u = o || ns,
    v = f || 'children',
    m = s.useMemo(
      function () {
        return i
          ? 'row'
          : (e.expandable &&
                e.internalHooks === fn &&
                e.expandable.__PARENT_RENDER_ICON__) ||
              t.some(function (S) {
                return S && it(S) === 'object' && S[v]
              })
            ? 'nest'
            : !1
      },
      [!!i, t],
    ),
    b = s.useState(function () {
      return d || (a ? rs(t, r, v) : [])
    }),
    g = ye(b, 2),
    h = g[0],
    y = g[1],
    x = s.useMemo(
      function () {
        return new Set(l || h || [])
      },
      [l, h],
    ),
    C = s.useCallback(
      function (S) {
        var R = r(S, t.indexOf(S)),
          K,
          T = x.has(R)
        T ? (x.delete(R), (K = he(x))) : (K = [].concat(he(x), [R])),
          y(K),
          c && c(!T, S),
          p && p(K)
      },
      [r, x, t, c, p],
    )
  return [n, m, x, u, v, C]
}
function as(e, t, r) {
  var n = e.map(function (o, l) {
    return ir(l, l, e, t, r)
  })
  return ho(
    function () {
      return n
    },
    [n],
    function (o, l) {
      return !cn(o, l)
    },
  )
}
function Uo(e) {
  var t = s.useRef(e),
    r = s.useState({}),
    n = ye(r, 2),
    o = n[1],
    l = s.useRef(null),
    d = s.useRef([])
  function a(i) {
    d.current.push(i)
    var c = Promise.resolve()
    ;(l.current = c),
      c.then(function () {
        if (l.current === c) {
          var p = d.current,
            f = t.current
          ;(d.current = []),
            p.forEach(function (u) {
              t.current = u(t.current)
            }),
            (l.current = null),
            f !== t.current && o({})
        }
      })
  }
  return (
    s.useEffect(function () {
      return function () {
        l.current = null
      }
    }, []),
    [t.current, a]
  )
}
function ls(e) {
  var t = s.useRef(null),
    r = s.useRef()
  function n() {
    window.clearTimeout(r.current)
  }
  function o(d) {
    ;(t.current = d),
      n(),
      (r.current = window.setTimeout(function () {
        ;(t.current = null), (r.current = void 0)
      }, 100))
  }
  function l() {
    return t.current
  }
  return (
    s.useEffect(function () {
      return n
    }, []),
    [o, l]
  )
}
function is() {
  var e = s.useState(-1),
    t = ye(e, 2),
    r = t[0],
    n = t[1],
    o = s.useState(-1),
    l = ye(o, 2),
    d = l[0],
    a = l[1],
    i = s.useCallback(function (c, p) {
      n(c), a(p)
    }, [])
  return [r, d, i]
}
var Fr = Ma() ? window : null
function ss(e, t) {
  var r = it(e) === 'object' ? e : {},
    n = r.offsetHeader,
    o = n === void 0 ? 0 : n,
    l = r.offsetSummary,
    d = l === void 0 ? 0 : l,
    a = r.offsetScroll,
    i = a === void 0 ? 0 : a,
    c = r.getContainer,
    p =
      c === void 0
        ? function () {
            return Fr
          }
        : c,
    f = p() || Fr,
    u = !!e
  return s.useMemo(
    function () {
      return {
        isSticky: u,
        stickyClassName: u ? ''.concat(t, '-sticky-holder') : '',
        offsetHeader: o,
        offsetSummary: d,
        offsetScroll: i,
        container: f,
      }
    },
    [u, i, o, d, t, f],
  )
}
function cs(e, t, r) {
  var n = s.useMemo(
    function () {
      var o = t.length,
        l = function (c, p, f) {
          for (var u = [], v = 0, m = c; m !== p; m += f)
            u.push(v), t[m].fixed && (v += e[m] || 0)
          return u
        },
        d = l(0, o, 1),
        a = l(o - 1, -1, -1).reverse()
      return r === 'rtl' ? { left: a, right: d } : { left: d, right: a }
    },
    [e, t, r],
  )
  return n
}
function Wr(e) {
  var t = e.className,
    r = e.children
  return s.createElement('div', { className: t }, r)
}
var ds = function (t, r) {
  var n,
    o,
    l = t.scrollBodyRef,
    d = t.onScroll,
    a = t.offsetScroll,
    i = t.container,
    c = Qe(rt, 'prefixCls'),
    p =
      ((n = l.current) === null || n === void 0 ? void 0 : n.scrollWidth) || 0,
    f =
      ((o = l.current) === null || o === void 0 ? void 0 : o.clientWidth) || 0,
    u = p && f * (f / p),
    v = s.useRef(),
    m = Uo({ scrollLeft: 0, isHiddenScrollBar: !0 }),
    b = ye(m, 2),
    g = b[0],
    h = b[1],
    y = s.useRef({ delta: 0, x: 0 }),
    x = s.useState(!1),
    C = ye(x, 2),
    S = C[0],
    R = C[1],
    K = s.useRef(null)
  s.useEffect(function () {
    return function () {
      hn.cancel(K.current)
    }
  }, [])
  var T = function () {
      R(!1)
    },
    N = function (k) {
      k.persist(),
        (y.current.delta = k.pageX - g.scrollLeft),
        (y.current.x = 0),
        R(!0),
        k.preventDefault()
    },
    O = function (k) {
      var w,
        B = k || ((w = window) === null || w === void 0 ? void 0 : w.event),
        L = B.buttons
      if (!S || L === 0) {
        S && R(!1)
        return
      }
      var M = y.current.x + k.pageX - y.current.x - y.current.delta
      M <= 0 && (M = 0),
        M + u >= f && (M = f - u),
        d({ scrollLeft: (M / f) * (p + 2) }),
        (y.current.x = k.pageX)
    },
    P = function () {
      K.current = hn(function () {
        if (l.current) {
          var k = Mr(l.current).top,
            w = k + l.current.offsetHeight,
            B =
              i === window
                ? document.documentElement.scrollTop + window.innerHeight
                : Mr(i).top + i.clientHeight
          w - Ir() <= B || k >= B - a
            ? h(function (L) {
                return j(j({}, L), {}, { isHiddenScrollBar: !0 })
              })
            : h(function (L) {
                return j(j({}, L), {}, { isHiddenScrollBar: !1 })
              })
        }
      })
    },
    E = function (k) {
      h(function (w) {
        return j(j({}, w), {}, { scrollLeft: (k / p) * f || 0 })
      })
    }
  return (
    s.useImperativeHandle(r, function () {
      return { setScrollLeft: E, checkScrollBarVisible: P }
    }),
    s.useEffect(
      function () {
        var $ = vn(document.body, 'mouseup', T, !1),
          k = vn(document.body, 'mousemove', O, !1)
        return (
          P(),
          function () {
            $.remove(), k.remove()
          }
        )
      },
      [u, S],
    ),
    s.useEffect(
      function () {
        var $ = vn(i, 'scroll', P, !1),
          k = vn(window, 'resize', P, !1)
        return function () {
          $.remove(), k.remove()
        }
      },
      [i],
    ),
    s.useEffect(
      function () {
        g.isHiddenScrollBar ||
          h(function ($) {
            var k = l.current
            return k
              ? j(
                  j({}, $),
                  {},
                  {
                    scrollLeft: (k.scrollLeft / k.scrollWidth) * k.clientWidth,
                  },
                )
              : $
          })
      },
      [g.isHiddenScrollBar],
    ),
    p <= f || !u || g.isHiddenScrollBar
      ? null
      : s.createElement(
          'div',
          {
            style: { height: Ir(), width: f, bottom: a },
            className: ''.concat(c, '-sticky-scroll'),
          },
          s.createElement('div', {
            onMouseDown: N,
            ref: v,
            className: Y(
              ''.concat(c, '-sticky-scroll-bar'),
              I({}, ''.concat(c, '-sticky-scroll-bar-active'), S),
            ),
            style: {
              width: ''.concat(u, 'px'),
              transform: 'translate3d('.concat(g.scrollLeft, 'px, 0, 0)'),
            },
          }),
        )
  )
}
const us = s.forwardRef(ds)
var Go = 'rc-table',
  fs = [],
  ps = {}
function vs() {
  return 'No Data'
}
function ms(e, t) {
  var r = j({ rowKey: 'key', prefixCls: Go, emptyText: vs }, e),
    n = r.prefixCls,
    o = r.className,
    l = r.rowClassName,
    d = r.style,
    a = r.data,
    i = r.rowKey,
    c = r.scroll,
    p = r.tableLayout,
    f = r.direction,
    u = r.title,
    v = r.footer,
    m = r.summary,
    b = r.caption,
    g = r.id,
    h = r.showHeader,
    y = r.components,
    x = r.emptyText,
    C = r.onRow,
    S = r.onHeaderRow,
    R = r.onScroll,
    K = r.internalHooks,
    T = r.transformColumns,
    N = r.internalRefs,
    O = r.tailor,
    P = r.getContainerWidth,
    E = r.sticky,
    $ = r.rowHoverable,
    k = $ === void 0 ? !0 : $,
    w = a || fs,
    B = !!w.length,
    L = K === fn,
    M = s.useCallback(
      function (fe, ge) {
        return tr(y, fe) || ge
      },
      [y],
    ),
    D = s.useMemo(
      function () {
        return typeof i == 'function'
          ? i
          : function (fe) {
              var ge = fe && fe[i]
              return ge
            }
      },
      [i],
    ),
    X = M(['body']),
    _ = is(),
    ae = ye(_, 3),
    te = ae[0],
    Ee = ae[1],
    xe = ae[2],
    Me = os(r, w, D),
    J = ye(Me, 6),
    le = J[0],
    ke = J[1],
    Z = J[2],
    U = J[3],
    A = J[4],
    F = J[5],
    q = c == null ? void 0 : c.x,
    ie = s.useState(0),
    V = ye(ie, 2),
    ee = V[0],
    W = V[1],
    de = ts(
      j(
        j(j({}, r), le),
        {},
        {
          expandable: !!le.expandedRowRender,
          columnTitle: le.columnTitle,
          expandedKeys: Z,
          getRowKey: D,
          onTriggerExpand: F,
          expandIcon: U,
          expandIconColumnIndex: le.expandIconColumnIndex,
          direction: f,
          scrollWidth: L && O && typeof q == 'number' ? q : null,
          clientWidth: ee,
        },
      ),
      L ? T : null,
    ),
    G = ye(de, 4),
    pe = G[0],
    ne = G[1],
    Se = G[2],
    we = G[3],
    be = Se ?? q,
    Re = s.useMemo(
      function () {
        return { columns: pe, flattenColumns: ne }
      },
      [pe, ne],
    ),
    _e = s.useRef(),
    nt = s.useRef(),
    Ie = s.useRef(),
    ve = s.useRef()
  s.useImperativeHandle(t, function () {
    return {
      nativeElement: _e.current,
      scrollTo: function (ge) {
        var Ge
        if (Ie.current instanceof HTMLElement) {
          var ct = ge.index,
            Ye = ge.top,
            jt = ge.key
          if (wi(Ye)) {
            var Tt
            ;(Tt = Ie.current) === null ||
              Tt === void 0 ||
              Tt.scrollTo({ top: Ye })
          } else {
            var Dt,
              nn = jt ?? D(w[ct])
            ;(Dt = Ie.current.querySelector(
              '[data-row-key="'.concat(nn, '"]'),
            )) === null ||
              Dt === void 0 ||
              Dt.scrollIntoView()
          }
        } else
          (Ge = Ie.current) !== null &&
            Ge !== void 0 &&
            Ge.scrollTo &&
            Ie.current.scrollTo(ge)
      },
    }
  })
  var Ne = s.useRef(),
    ue = s.useState(!1),
    Te = ye(ue, 2),
    Ke = Te[0],
    Ce = Te[1],
    je = s.useState(!1),
    He = ye(je, 2),
    Be = He[0],
    We = He[1],
    st = Uo(new Map()),
    yt = ye(st, 2),
    Oe = yt[0],
    Rt = yt[1],
    Ze = En(ne),
    ot = Ze.map(function (fe) {
      return Oe.get(fe)
    }),
    et = s.useMemo(
      function () {
        return ot
      },
      [ot.join('_')],
    ),
    dt = cs(et, ne, f),
    Ve = c && jn(c.y),
    qe = (c && jn(be)) || !!le.fixed,
    at =
      qe &&
      ne.some(function (fe) {
        var ge = fe.fixed
        return ge
      }),
    Pe = s.useRef(),
    Le = ss(E, n),
    tt = Le.isSticky,
    Jt = Le.offsetHeader,
    Qt = Le.offsetSummary,
    ht = Le.offsetScroll,
    Zt = Le.stickyClassName,
    re = Le.container,
    ce = s.useMemo(
      function () {
        return m == null ? void 0 : m(w)
      },
      [m, w],
    ),
    $e = (Ve || tt) && s.isValidElement(ce) && ce.type === Nn && ce.props.fixed,
    De,
    Xe,
    Ue
  Ve && (Xe = { overflowY: B ? 'scroll' : 'auto', maxHeight: c.y }),
    qe &&
      ((De = { overflowX: 'auto' }),
      Ve || (Xe = { overflowY: 'hidden' }),
      (Ue = { width: be === !0 ? 'auto' : be, minWidth: '100%' }))
  var ut = s.useCallback(function (fe, ge) {
      Ba(_e.current) &&
        Rt(function (Ge) {
          if (Ge.get(fe) !== ge) {
            var ct = new Map(Ge)
            return ct.set(fe, ge), ct
          }
          return Ge
        })
    }, []),
    Fe = ls(),
    _t = ye(Fe, 2),
    en = _t[0],
    xt = _t[1]
  function It(fe, ge) {
    ge &&
      (typeof ge == 'function'
        ? ge(fe)
        : ge.scrollLeft !== fe &&
          ((ge.scrollLeft = fe),
          ge.scrollLeft !== fe &&
            setTimeout(function () {
              ge.scrollLeft = fe
            }, 0)))
  }
  var ft = $t(function (fe) {
      var ge = fe.currentTarget,
        Ge = fe.scrollLeft,
        ct = f === 'rtl',
        Ye = typeof Ge == 'number' ? Ge : ge.scrollLeft,
        jt = ge || ps
      if (!xt() || xt() === jt) {
        var Tt
        en(jt),
          It(Ye, nt.current),
          It(Ye, Ie.current),
          It(Ye, Ne.current),
          It(
            Ye,
            (Tt = Pe.current) === null || Tt === void 0
              ? void 0
              : Tt.setScrollLeft,
          )
      }
      var Dt = ge || nt.current
      if (Dt) {
        var nn = typeof be == 'number' ? be : Dt.scrollWidth,
          Tn = Dt.clientWidth
        if (nn === Tn) {
          Ce(!1), We(!1)
          return
        }
        ct ? (Ce(-Ye < nn - Tn), We(-Ye > 0)) : (Ce(Ye > 0), We(Ye < nn - Tn))
      }
    }),
    tn = $t(function (fe) {
      ft(fe), R == null || R(fe)
    }),
    Ot = function () {
      if (qe && Ie.current) {
        var ge
        ft({
          currentTarget: za(Ie.current),
          scrollLeft:
            (ge = Ie.current) === null || ge === void 0
              ? void 0
              : ge.scrollLeft,
        })
      } else Ce(!1), We(!1)
    },
    Kt = function (ge) {
      var Ge,
        ct = ge.width
      ;(Ge = Pe.current) === null || Ge === void 0 || Ge.checkScrollBarVisible()
      var Ye = _e.current ? _e.current.offsetWidth : ct
      L && P && _e.current && (Ye = P(_e.current, Ye) || Ye),
        Ye !== ee && (Ot(), W(Ye))
    },
    Ht = s.useRef(!1)
  s.useEffect(
    function () {
      Ht.current && Ot()
    },
    [qe, a, pe.length],
  ),
    s.useEffect(function () {
      Ht.current = !0
    }, [])
  var Rn = s.useState(0),
    Q = ye(Rn, 2),
    me = Q[0],
    ze = Q[1],
    mt = s.useState(!0),
    Pt = ye(mt, 2),
    mr = Pt[0],
    fa = Pt[1]
  s.useEffect(function () {
    ;(!O || !L) &&
      (Ie.current instanceof Element
        ? ze(Or(Ie.current).width)
        : ze(Or(ve.current).width)),
      fa(La('position', 'sticky'))
  }, []),
    s.useEffect(function () {
      L && N && (N.body.current = Ie.current)
    })
  var pa = s.useCallback(
      function (fe) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(jr, fe),
          $e === 'top' && s.createElement(mn, fe, ce),
        )
      },
      [$e, ce],
    ),
    va = s.useCallback(
      function (fe) {
        return s.createElement(mn, fe, ce)
      },
      [ce],
    ),
    gr = M(['table'], 'table'),
    pn = s.useMemo(
      function () {
        return (
          p ||
          (at
            ? be === 'max-content'
              ? 'auto'
              : 'fixed'
            : Ve ||
                tt ||
                ne.some(function (fe) {
                  var ge = fe.ellipsis
                  return ge
                })
              ? 'fixed'
              : 'auto')
        )
      },
      [Ve, at, ne, p, tt],
    ),
    In,
    On = {
      colWidths: et,
      columCount: ne.length,
      stickyOffsets: dt,
      onHeaderRow: S,
      fixHeader: Ve,
      scroll: c,
    },
    hr = s.useMemo(
      function () {
        return B ? null : typeof x == 'function' ? x() : x
      },
      [B, x],
    ),
    br = s.createElement(ji, { data: w, measureColumnWidth: Ve || qe || tt }),
    yr = s.createElement(qo, {
      colWidths: ne.map(function (fe) {
        var ge = fe.width
        return ge
      }),
      columns: ne,
    }),
    xr =
      b != null
        ? s.createElement('caption', { className: ''.concat(n, '-caption') }, b)
        : void 0,
    ma = Wt(r, { data: !0 }),
    Cr = Wt(r, { aria: !0 })
  if (Ve || tt) {
    var Kn
    typeof X == 'function'
      ? ((Kn = X(w, { scrollbarSize: me, ref: Ie, onScroll: ft })),
        (On.colWidths = ne.map(function (fe, ge) {
          var Ge = fe.width,
            ct = ge === ne.length - 1 ? Ge - me : Ge
          return typeof ct == 'number' && !Number.isNaN(ct) ? ct : 0
        })))
      : (Kn = s.createElement(
          'div',
          {
            style: j(j({}, De), Xe),
            onScroll: tn,
            ref: Ie,
            className: Y(''.concat(n, '-body')),
          },
          s.createElement(
            gr,
            se({ style: j(j({}, Ue), {}, { tableLayout: pn }) }, Cr),
            xr,
            yr,
            br,
            !$e &&
              ce &&
              s.createElement(
                mn,
                { stickyOffsets: dt, flattenColumns: ne },
                ce,
              ),
          ),
        ))
    var Sr = j(
      j(
        j(
          { noData: !w.length, maxContentScroll: qe && be === 'max-content' },
          On,
        ),
        Re,
      ),
      {},
      { direction: f, stickyClassName: Zt, onScroll: ft },
    )
    In = s.createElement(
      s.Fragment,
      null,
      h !== !1 &&
        s.createElement(
          Hr,
          se({}, Sr, {
            stickyTopOffset: Jt,
            className: ''.concat(n, '-header'),
            ref: nt,
          }),
          pa,
        ),
      Kn,
      $e &&
        $e !== 'top' &&
        s.createElement(
          Hr,
          se({}, Sr, {
            stickyBottomOffset: Qt,
            className: ''.concat(n, '-summary'),
            ref: Ne,
          }),
          va,
        ),
      tt &&
        Ie.current &&
        Ie.current instanceof Element &&
        s.createElement(us, {
          ref: Pe,
          offsetScroll: ht,
          scrollBodyRef: Ie,
          onScroll: ft,
          container: re,
        }),
    )
  } else
    In = s.createElement(
      'div',
      {
        style: j(j({}, De), Xe),
        className: Y(''.concat(n, '-content')),
        onScroll: ft,
        ref: Ie,
      },
      s.createElement(
        gr,
        se({ style: j(j({}, Ue), {}, { tableLayout: pn }) }, Cr),
        xr,
        yr,
        h !== !1 && s.createElement(jr, se({}, On, Re)),
        br,
        ce &&
          s.createElement(mn, { stickyOffsets: dt, flattenColumns: ne }, ce),
      ),
    )
  var Pn = s.createElement(
    'div',
    se(
      {
        className: Y(
          n,
          o,
          I(
            I(
              I(
                I(
                  I(
                    I(
                      I(
                        I(
                          I(
                            I({}, ''.concat(n, '-rtl'), f === 'rtl'),
                            ''.concat(n, '-ping-left'),
                            Ke,
                          ),
                          ''.concat(n, '-ping-right'),
                          Be,
                        ),
                        ''.concat(n, '-layout-fixed'),
                        p === 'fixed',
                      ),
                      ''.concat(n, '-fixed-header'),
                      Ve,
                    ),
                    ''.concat(n, '-fixed-column'),
                    at,
                  ),
                  ''.concat(n, '-fixed-column-gapped'),
                  at && we,
                ),
                ''.concat(n, '-scroll-horizontal'),
                qe,
              ),
              ''.concat(n, '-has-fix-left'),
              ne[0] && ne[0].fixed,
            ),
            ''.concat(n, '-has-fix-right'),
            ne[ne.length - 1] && ne[ne.length - 1].fixed === 'right',
          ),
        ),
        style: d,
        id: g,
        ref: _e,
      },
      ma,
    ),
    u && s.createElement(Wr, { className: ''.concat(n, '-title') }, u(w)),
    s.createElement(
      'div',
      { ref: ve, className: ''.concat(n, '-container') },
      In,
    ),
    v && s.createElement(Wr, { className: ''.concat(n, '-footer') }, v(w)),
  )
  qe && (Pn = s.createElement(nr, { onResize: Kt }, Pn))
  var wr = as(ne, dt, f),
    ga = s.useMemo(
      function () {
        return {
          scrollX: be,
          prefixCls: n,
          getComponent: M,
          scrollbarSize: me,
          direction: f,
          fixedInfoList: wr,
          isSticky: tt,
          supportSticky: mr,
          componentWidth: ee,
          fixHeader: Ve,
          fixColumn: at,
          horizonScroll: qe,
          tableLayout: pn,
          rowClassName: l,
          expandedRowClassName: le.expandedRowClassName,
          expandIcon: U,
          expandableType: ke,
          expandRowByClick: le.expandRowByClick,
          expandedRowRender: le.expandedRowRender,
          onTriggerExpand: F,
          expandIconColumnIndex: le.expandIconColumnIndex,
          indentSize: le.indentSize,
          allColumnsFixedLeft: ne.every(function (fe) {
            return fe.fixed === 'left'
          }),
          emptyNode: hr,
          columns: pe,
          flattenColumns: ne,
          onColumnResize: ut,
          hoverStartRow: te,
          hoverEndRow: Ee,
          onHover: xe,
          rowExpandable: le.rowExpandable,
          onRow: C,
          getRowKey: D,
          expandedKeys: Z,
          childrenColumnName: A,
          rowHoverable: k,
        }
      },
      [
        be,
        n,
        M,
        me,
        f,
        wr,
        tt,
        mr,
        ee,
        Ve,
        at,
        qe,
        pn,
        l,
        le.expandedRowClassName,
        U,
        ke,
        le.expandRowByClick,
        le.expandedRowRender,
        F,
        le.expandIconColumnIndex,
        le.indentSize,
        hr,
        pe,
        ne,
        ut,
        te,
        Ee,
        xe,
        le.rowExpandable,
        C,
        D,
        Z,
        A,
        k,
      ],
    )
  return s.createElement(rt.Provider, { value: ga }, Pn)
}
var gs = s.forwardRef(ms)
function Yo(e) {
  return Lo(gs, e)
}
var Gt = Yo()
Gt.EXPAND_COLUMN = St
Gt.INTERNAL_HOOKS = fn
Gt.Column = Di
Gt.ColumnGroup = Mi
Gt.Summary = Ho
var cr = ar(null),
  Jo = ar(null)
function hs(e, t, r) {
  var n = t || 1
  return r[e + n] - (r[e] || 0)
}
function bs(e) {
  var t = e.rowInfo,
    r = e.column,
    n = e.colIndex,
    o = e.indent,
    l = e.index,
    d = e.component,
    a = e.renderIndex,
    i = e.record,
    c = e.style,
    p = e.className,
    f = e.inverse,
    u = e.getHeight,
    v = r.render,
    m = r.dataIndex,
    b = r.className,
    g = r.width,
    h = Qe(Jo, ['columnsOffset']),
    y = h.columnsOffset,
    x = Vo(t, r, n, o, l),
    C = x.key,
    S = x.fixedInfo,
    R = x.appendCellNode,
    K = x.additionalCellProps,
    T = K.style,
    N = K.colSpan,
    O = N === void 0 ? 1 : N,
    P = K.rowSpan,
    E = P === void 0 ? 1 : P,
    $ = n - 1,
    k = hs($, O, y),
    w = O > 1 ? g - k : 0,
    B = j(
      j(j({}, T), c),
      {},
      {
        flex: '0 0 '.concat(k, 'px'),
        width: ''.concat(k, 'px'),
        marginRight: w,
        pointerEvents: 'auto',
      },
    ),
    L = s.useMemo(
      function () {
        return f ? E <= 1 : O === 0 || E === 0 || E > 1
      },
      [E, O, f],
    )
  L ? (B.visibility = 'hidden') : f && (B.height = u == null ? void 0 : u(E))
  var M = L
      ? function () {
          return null
        }
      : v,
    D = {}
  return (
    (E === 0 || O === 0) && ((D.rowSpan = 1), (D.colSpan = 1)),
    s.createElement(
      Ut,
      se(
        {
          className: Y(b, p),
          ellipsis: r.ellipsis,
          align: r.align,
          scope: r.rowScope,
          component: d,
          prefixCls: t.prefixCls,
          key: C,
          record: i,
          index: l,
          renderIndex: a,
          dataIndex: m,
          render: M,
          shouldCellUpdate: r.shouldCellUpdate,
        },
        S,
        { appendNode: R, additionalProps: j(j({}, K), {}, { style: B }, D) },
      ),
    )
  )
}
var ys = [
    'data',
    'index',
    'className',
    'rowKey',
    'style',
    'extra',
    'getHeight',
  ],
  xs = s.forwardRef(function (e, t) {
    var r = e.data,
      n = e.index,
      o = e.className,
      l = e.rowKey,
      d = e.style,
      a = e.extra,
      i = e.getHeight,
      c = pt(e, ys),
      p = r.record,
      f = r.indent,
      u = r.index,
      v = Qe(rt, [
        'prefixCls',
        'flattenColumns',
        'fixColumn',
        'componentWidth',
        'scrollX',
      ]),
      m = v.scrollX,
      b = v.flattenColumns,
      g = v.prefixCls,
      h = v.fixColumn,
      y = v.componentWidth,
      x = Qe(cr, ['getComponent']),
      C = x.getComponent,
      S = Fo(p, l, n, f),
      R = C(['body', 'row'], 'div'),
      K = C(['body', 'cell'], 'div'),
      T = S.rowSupportExpand,
      N = S.expanded,
      O = S.rowProps,
      P = S.expandedRowRender,
      E = S.expandedRowClassName,
      $
    if (T && N) {
      var k = P(p, n, f + 1, N),
        w = E == null ? void 0 : E(p, n, f),
        B = {}
      h && (B = { style: I({}, '--virtual-width', ''.concat(y, 'px')) })
      var L = ''.concat(g, '-expanded-row-cell')
      $ = s.createElement(
        R,
        {
          className: Y(
            ''.concat(g, '-expanded-row'),
            ''.concat(g, '-expanded-row-level-').concat(f + 1),
            w,
          ),
        },
        s.createElement(
          Ut,
          {
            component: K,
            prefixCls: g,
            className: Y(L, I({}, ''.concat(L, '-fixed'), h)),
            additionalProps: B,
          },
          k,
        ),
      )
    }
    var M = j(j({}, d), {}, { width: m })
    a && ((M.position = 'absolute'), (M.pointerEvents = 'none'))
    var D = s.createElement(
      R,
      se({}, O, c, {
        'data-row-key': l,
        ref: T ? null : t,
        className: Y(
          o,
          ''.concat(g, '-row'),
          O == null ? void 0 : O.className,
          I({}, ''.concat(g, '-row-extra'), a),
        ),
        style: j(j({}, M), O == null ? void 0 : O.style),
      }),
      b.map(function (X, _) {
        return s.createElement(bs, {
          key: _,
          component: K,
          rowInfo: S,
          column: X,
          colIndex: _,
          indent: f,
          index: n,
          renderIndex: u,
          record: p,
          inverse: a,
          getHeight: i,
        })
      }),
    )
    return T ? s.createElement('div', { ref: t }, D, $) : D
  }),
  Vr = Xt(xs),
  Cs = s.forwardRef(function (e, t) {
    var r = e.data,
      n = e.onScroll,
      o = Qe(rt, [
        'flattenColumns',
        'onColumnResize',
        'getRowKey',
        'prefixCls',
        'expandedKeys',
        'childrenColumnName',
        'scrollX',
      ]),
      l = o.flattenColumns,
      d = o.onColumnResize,
      a = o.getRowKey,
      i = o.expandedKeys,
      c = o.prefixCls,
      p = o.childrenColumnName,
      f = o.scrollX,
      u = Qe(cr),
      v = u.sticky,
      m = u.scrollY,
      b = u.listItemHeight,
      g = u.getComponent,
      h = u.onScroll,
      y = s.useRef(),
      x = Ao(r, p, i, a),
      C = s.useMemo(
        function () {
          var E = 0
          return l.map(function ($) {
            var k = $.width,
              w = $.key
            return (E += k), [w, k, E]
          })
        },
        [l],
      ),
      S = s.useMemo(
        function () {
          return C.map(function (E) {
            return E[2]
          })
        },
        [C],
      )
    s.useEffect(
      function () {
        C.forEach(function (E) {
          var $ = ye(E, 2),
            k = $[0],
            w = $[1]
          d(k, w)
        })
      },
      [C],
    ),
      s.useImperativeHandle(t, function () {
        var E,
          $ = {
            scrollTo: function (w) {
              var B
              ;(B = y.current) === null || B === void 0 || B.scrollTo(w)
            },
            nativeElement:
              (E = y.current) === null || E === void 0
                ? void 0
                : E.nativeElement,
          }
        return (
          Object.defineProperty($, 'scrollLeft', {
            get: function () {
              var w
              return (
                ((w = y.current) === null || w === void 0
                  ? void 0
                  : w.getScrollInfo().x) || 0
              )
            },
            set: function (w) {
              var B
              ;(B = y.current) === null ||
                B === void 0 ||
                B.scrollTo({ left: w })
            },
          }),
          $
        )
      })
    var R = function ($, k) {
        var w,
          B = (w = x[k]) === null || w === void 0 ? void 0 : w.record,
          L = $.onCell
        if (L) {
          var M,
            D = L(B, k)
          return (M = D == null ? void 0 : D.rowSpan) !== null && M !== void 0
            ? M
            : 1
        }
        return 1
      },
      K = function ($) {
        var k = $.start,
          w = $.end,
          B = $.getSize,
          L = $.offsetY
        if (w < 0) return null
        for (
          var M = l.filter(function (Z) {
              return R(Z, k) === 0
            }),
            D = k,
            X = function (U) {
              if (
                ((M = M.filter(function (A) {
                  return R(A, U) === 0
                })),
                !M.length)
              )
                return (D = U), 1
            },
            _ = k;
          _ >= 0 && !X(_);
          _ -= 1
        );
        for (
          var ae = l.filter(function (Z) {
              return R(Z, w) !== 1
            }),
            te = w,
            Ee = function (U) {
              if (
                ((ae = ae.filter(function (A) {
                  return R(A, U) !== 1
                })),
                !ae.length)
              )
                return (te = Math.max(U - 1, w)), 1
            },
            xe = w;
          xe < x.length && !Ee(xe);
          xe += 1
        );
        for (
          var Me = [],
            J = function (U) {
              var A = x[U]
              if (!A) return 1
              l.some(function (F) {
                return R(F, U) > 1
              }) && Me.push(U)
            },
            le = D;
          le <= te;
          le += 1
        )
          J(le)
        var ke = Me.map(function (Z) {
          var U = x[Z],
            A = a(U.record, Z),
            F = function (V) {
              var ee = Z + V - 1,
                W = a(x[ee].record, ee),
                de = B(A, W)
              return de.bottom - de.top
            },
            q = B(A)
          return s.createElement(Vr, {
            key: Z,
            data: U,
            rowKey: A,
            index: Z,
            style: { top: -L + q.top },
            extra: !0,
            getHeight: F,
          })
        })
        return ke
      },
      T = s.useMemo(
        function () {
          return { columnsOffset: S }
        },
        [S],
      ),
      N = ''.concat(c, '-tbody'),
      O = g(['body', 'wrapper']),
      P = {}
    return (
      v &&
        ((P.position = 'sticky'),
        (P.bottom = 0),
        it(v) === 'object' && v.offsetScroll && (P.bottom = v.offsetScroll)),
      s.createElement(
        Jo.Provider,
        { value: T },
        s.createElement(
          wo,
          {
            fullHeight: !1,
            ref: y,
            prefixCls: ''.concat(N, '-virtual'),
            styles: { horizontalScrollBar: P },
            className: N,
            height: m,
            itemHeight: b || 24,
            data: x,
            itemKey: function ($) {
              return a($.record)
            },
            component: O,
            scrollWidth: f,
            onVirtualScroll: function ($) {
              var k,
                w = $.x
              n({
                currentTarget:
                  (k = y.current) === null || k === void 0
                    ? void 0
                    : k.nativeElement,
                scrollLeft: w,
              })
            },
            onScroll: h,
            extraRender: K,
          },
          function (E, $, k) {
            var w = a(E.record, $)
            return s.createElement(Vr, {
              data: E,
              rowKey: w,
              index: $,
              style: k.style,
            })
          },
        ),
      )
    )
  }),
  Ss = Xt(Cs),
  ws = function (t, r) {
    var n = r.ref,
      o = r.onScroll
    return s.createElement(Ss, { ref: n, data: t, onScroll: o })
  }
function $s(e, t) {
  var r = e.data,
    n = e.columns,
    o = e.scroll,
    l = e.sticky,
    d = e.prefixCls,
    a = d === void 0 ? Go : d,
    i = e.className,
    c = e.listItemHeight,
    p = e.components,
    f = e.onScroll,
    u = o || {},
    v = u.x,
    m = u.y
  typeof v != 'number' && (v = 1), typeof m != 'number' && (m = 500)
  var b = $t(function (y, x) {
      return tr(p, y) || x
    }),
    g = $t(f),
    h = s.useMemo(
      function () {
        return {
          sticky: l,
          scrollY: m,
          listItemHeight: c,
          getComponent: b,
          onScroll: g,
        }
      },
      [l, m, c, b, g],
    )
  return s.createElement(
    cr.Provider,
    { value: h },
    s.createElement(
      Gt,
      se({}, e, {
        className: Y(i, ''.concat(a, '-virtual')),
        scroll: j(j({}, o), {}, { x: v }),
        components: j(
          j({}, p),
          {},
          { body: r != null && r.length ? ws : void 0 },
        ),
        columns: n,
        internalHooks: fn,
        tailor: !0,
        ref: t,
      }),
    ),
  )
}
var Es = s.forwardRef($s)
function Qo(e) {
  return Lo(Es, e)
}
Qo()
const Ns = (e) => null,
  ks = (e) => null
var dr = s.createContext(null),
  Rs = function (t) {
    for (
      var r = t.prefixCls,
        n = t.level,
        o = t.isStart,
        l = t.isEnd,
        d = ''.concat(r, '-indent-unit'),
        a = [],
        i = 0;
      i < n;
      i += 1
    )
      a.push(
        s.createElement('span', {
          key: i,
          className: Y(
            d,
            I(I({}, ''.concat(d, '-start'), o[i]), ''.concat(d, '-end'), l[i]),
          ),
        }),
      )
    return s.createElement(
      'span',
      { 'aria-hidden': 'true', className: ''.concat(r, '-indent') },
      a,
    )
  }
const Is = s.memo(Rs)
var Os = [
    'eventKey',
    'className',
    'style',
    'dragOver',
    'dragOverGapTop',
    'dragOverGapBottom',
    'isLeaf',
    'isStart',
    'isEnd',
    'expanded',
    'selected',
    'checked',
    'halfChecked',
    'loading',
    'domRef',
    'active',
    'data',
    'onMouseMove',
    'selectable',
  ],
  qr = 'open',
  Xr = 'close',
  Ks = '---',
  Ps = (function (e) {
    bo(r, e)
    var t = yo(r)
    function r() {
      var n
      xo(this, r)
      for (var o = arguments.length, l = new Array(o), d = 0; d < o; d++)
        l[d] = arguments[d]
      return (
        (n = t.call.apply(t, [this].concat(l))),
        I(H(n), 'state', { dragNodeHighlight: !1 }),
        I(H(n), 'selectHandle', void 0),
        I(H(n), 'cacheIndent', void 0),
        I(H(n), 'onSelectorClick', function (a) {
          var i = n.props.context.onNodeClick
          i(a, Ae(n.props)), n.isSelectable() ? n.onSelect(a) : n.onCheck(a)
        }),
        I(H(n), 'onSelectorDoubleClick', function (a) {
          var i = n.props.context.onNodeDoubleClick
          i(a, Ae(n.props))
        }),
        I(H(n), 'onSelect', function (a) {
          if (!n.isDisabled()) {
            var i = n.props.context.onNodeSelect
            i(a, Ae(n.props))
          }
        }),
        I(H(n), 'onCheck', function (a) {
          if (!n.isDisabled()) {
            var i = n.props,
              c = i.disableCheckbox,
              p = i.checked,
              f = n.props.context.onNodeCheck
            if (!(!n.isCheckable() || c)) {
              var u = !p
              f(a, Ae(n.props), u)
            }
          }
        }),
        I(H(n), 'onMouseEnter', function (a) {
          var i = n.props.context.onNodeMouseEnter
          i(a, Ae(n.props))
        }),
        I(H(n), 'onMouseLeave', function (a) {
          var i = n.props.context.onNodeMouseLeave
          i(a, Ae(n.props))
        }),
        I(H(n), 'onContextMenu', function (a) {
          var i = n.props.context.onNodeContextMenu
          i(a, Ae(n.props))
        }),
        I(H(n), 'onDragStart', function (a) {
          var i = n.props.context.onNodeDragStart
          a.stopPropagation(), n.setState({ dragNodeHighlight: !0 }), i(a, H(n))
          try {
            a.dataTransfer.setData('text/plain', '')
          } catch {}
        }),
        I(H(n), 'onDragEnter', function (a) {
          var i = n.props.context.onNodeDragEnter
          a.preventDefault(), a.stopPropagation(), i(a, H(n))
        }),
        I(H(n), 'onDragOver', function (a) {
          var i = n.props.context.onNodeDragOver
          a.preventDefault(), a.stopPropagation(), i(a, H(n))
        }),
        I(H(n), 'onDragLeave', function (a) {
          var i = n.props.context.onNodeDragLeave
          a.stopPropagation(), i(a, H(n))
        }),
        I(H(n), 'onDragEnd', function (a) {
          var i = n.props.context.onNodeDragEnd
          a.stopPropagation(), n.setState({ dragNodeHighlight: !1 }), i(a, H(n))
        }),
        I(H(n), 'onDrop', function (a) {
          var i = n.props.context.onNodeDrop
          a.preventDefault(),
            a.stopPropagation(),
            n.setState({ dragNodeHighlight: !1 }),
            i(a, H(n))
        }),
        I(H(n), 'onExpand', function (a) {
          var i = n.props,
            c = i.loading,
            p = i.context.onNodeExpand
          c || p(a, Ae(n.props))
        }),
        I(H(n), 'setSelectHandle', function (a) {
          n.selectHandle = a
        }),
        I(H(n), 'getNodeState', function () {
          var a = n.props.expanded
          return n.isLeaf() ? null : a ? qr : Xr
        }),
        I(H(n), 'hasChildren', function () {
          var a = n.props.eventKey,
            i = n.props.context.keyEntities,
            c = lt(i, a) || {},
            p = c.children
          return !!(p || []).length
        }),
        I(H(n), 'isLeaf', function () {
          var a = n.props,
            i = a.isLeaf,
            c = a.loaded,
            p = n.props.context.loadData,
            f = n.hasChildren()
          return i === !1 ? !1 : i || (!p && !f) || (p && c && !f)
        }),
        I(H(n), 'isDisabled', function () {
          var a = n.props.disabled,
            i = n.props.context.disabled
          return !!(i || a)
        }),
        I(H(n), 'isCheckable', function () {
          var a = n.props.checkable,
            i = n.props.context.checkable
          return !i || a === !1 ? !1 : i
        }),
        I(H(n), 'syncLoadData', function (a) {
          var i = a.expanded,
            c = a.loading,
            p = a.loaded,
            f = n.props.context,
            u = f.loadData,
            v = f.onNodeLoad
          c || (u && i && !n.isLeaf() && !p && v(Ae(n.props)))
        }),
        I(H(n), 'isDraggable', function () {
          var a = n.props,
            i = a.data,
            c = a.context.draggable
          return !!(c && (!c.nodeDraggable || c.nodeDraggable(i)))
        }),
        I(H(n), 'renderDragHandler', function () {
          var a = n.props.context,
            i = a.draggable,
            c = a.prefixCls
          return i != null && i.icon
            ? s.createElement(
                'span',
                { className: ''.concat(c, '-draggable-icon') },
                i.icon,
              )
            : null
        }),
        I(H(n), 'renderSwitcherIconDom', function (a) {
          var i = n.props.switcherIcon,
            c = n.props.context.switcherIcon,
            p = i || c
          return typeof p == 'function'
            ? p(j(j({}, n.props), {}, { isLeaf: a }))
            : p
        }),
        I(H(n), 'renderSwitcher', function () {
          var a = n.props.expanded,
            i = n.props.context.prefixCls
          if (n.isLeaf()) {
            var c = n.renderSwitcherIconDom(!0)
            return c !== !1
              ? s.createElement(
                  'span',
                  {
                    className: Y(
                      ''.concat(i, '-switcher'),
                      ''.concat(i, '-switcher-noop'),
                    ),
                  },
                  c,
                )
              : null
          }
          var p = Y(
              ''.concat(i, '-switcher'),
              ''.concat(i, '-switcher_').concat(a ? qr : Xr),
            ),
            f = n.renderSwitcherIconDom(!1)
          return f !== !1
            ? s.createElement('span', { onClick: n.onExpand, className: p }, f)
            : null
        }),
        I(H(n), 'renderCheckbox', function () {
          var a = n.props,
            i = a.checked,
            c = a.halfChecked,
            p = a.disableCheckbox,
            f = n.props.context.prefixCls,
            u = n.isDisabled(),
            v = n.isCheckable()
          if (!v) return null
          var m = typeof v != 'boolean' ? v : null
          return s.createElement(
            'span',
            {
              className: Y(
                ''.concat(f, '-checkbox'),
                i && ''.concat(f, '-checkbox-checked'),
                !i && c && ''.concat(f, '-checkbox-indeterminate'),
                (u || p) && ''.concat(f, '-checkbox-disabled'),
              ),
              onClick: n.onCheck,
            },
            m,
          )
        }),
        I(H(n), 'renderIcon', function () {
          var a = n.props.loading,
            i = n.props.context.prefixCls
          return s.createElement('span', {
            className: Y(
              ''.concat(i, '-iconEle'),
              ''.concat(i, '-icon__').concat(n.getNodeState() || 'docu'),
              a && ''.concat(i, '-icon_loading'),
            ),
          })
        }),
        I(H(n), 'renderSelector', function () {
          var a = n.state.dragNodeHighlight,
            i = n.props,
            c = i.title,
            p = c === void 0 ? Ks : c,
            f = i.selected,
            u = i.icon,
            v = i.loading,
            m = i.data,
            b = n.props.context,
            g = b.prefixCls,
            h = b.showIcon,
            y = b.icon,
            x = b.loadData,
            C = b.titleRender,
            S = n.isDisabled(),
            R = ''.concat(g, '-node-content-wrapper'),
            K
          if (h) {
            var T = u || y
            K = T
              ? s.createElement(
                  'span',
                  {
                    className: Y(
                      ''.concat(g, '-iconEle'),
                      ''.concat(g, '-icon__customize'),
                    ),
                  },
                  typeof T == 'function' ? T(n.props) : T,
                )
              : n.renderIcon()
          } else x && v && (K = n.renderIcon())
          var N
          typeof p == 'function' ? (N = p(m)) : C ? (N = C(m)) : (N = p)
          var O = s.createElement(
            'span',
            { className: ''.concat(g, '-title') },
            N,
          )
          return s.createElement(
            'span',
            {
              ref: n.setSelectHandle,
              title: typeof p == 'string' ? p : '',
              className: Y(
                ''.concat(R),
                ''.concat(R, '-').concat(n.getNodeState() || 'normal'),
                !S && (f || a) && ''.concat(g, '-node-selected'),
              ),
              onMouseEnter: n.onMouseEnter,
              onMouseLeave: n.onMouseLeave,
              onContextMenu: n.onContextMenu,
              onClick: n.onSelectorClick,
              onDoubleClick: n.onSelectorDoubleClick,
            },
            K,
            O,
            n.renderDropIndicator(),
          )
        }),
        I(H(n), 'renderDropIndicator', function () {
          var a = n.props,
            i = a.disabled,
            c = a.eventKey,
            p = n.props.context,
            f = p.draggable,
            u = p.dropLevelOffset,
            v = p.dropPosition,
            m = p.prefixCls,
            b = p.indent,
            g = p.dropIndicatorRender,
            h = p.dragOverNodeKey,
            y = p.direction,
            x = !!f,
            C = !i && x && h === c,
            S = b ?? n.cacheIndent
          return (
            (n.cacheIndent = b),
            C
              ? g({
                  dropPosition: v,
                  dropLevelOffset: u,
                  indent: S,
                  prefixCls: m,
                  direction: y,
                })
              : null
          )
        }),
        n
      )
    }
    return (
      Co(r, [
        {
          key: 'componentDidMount',
          value: function () {
            this.syncLoadData(this.props)
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            this.syncLoadData(this.props)
          },
        },
        {
          key: 'isSelectable',
          value: function () {
            var o = this.props.selectable,
              l = this.props.context.selectable
            return typeof o == 'boolean' ? o : l
          },
        },
        {
          key: 'render',
          value: function () {
            var o,
              l = this.props,
              d = l.eventKey,
              a = l.className,
              i = l.style,
              c = l.dragOver,
              p = l.dragOverGapTop,
              f = l.dragOverGapBottom,
              u = l.isLeaf,
              v = l.isStart,
              m = l.isEnd,
              b = l.expanded,
              g = l.selected,
              h = l.checked,
              y = l.halfChecked,
              x = l.loading,
              C = l.domRef,
              S = l.active
            l.data
            var R = l.onMouseMove,
              K = l.selectable,
              T = pt(l, Os),
              N = this.props.context,
              O = N.prefixCls,
              P = N.filterTreeNode,
              E = N.keyEntities,
              $ = N.dropContainerKey,
              k = N.dropTargetKey,
              w = N.draggingNodeKey,
              B = this.isDisabled(),
              L = Wt(T, { aria: !0, data: !0 }),
              M = lt(E, d) || {},
              D = M.level,
              X = m[m.length - 1],
              _ = this.isDraggable(),
              ae = !B && _,
              te = w === d,
              Ee = K !== void 0 ? { 'aria-selected': !!K } : void 0
            return s.createElement(
              'div',
              se(
                {
                  ref: C,
                  className: Y(
                    a,
                    ''.concat(O, '-treenode'),
                    ((o = {}),
                    I(
                      I(
                        I(
                          I(
                            I(
                              I(
                                I(
                                  I(
                                    I(
                                      I(
                                        o,
                                        ''.concat(O, '-treenode-disabled'),
                                        B,
                                      ),
                                      ''
                                        .concat(O, '-treenode-switcher-')
                                        .concat(b ? 'open' : 'close'),
                                      !u,
                                    ),
                                    ''.concat(O, '-treenode-checkbox-checked'),
                                    h,
                                  ),
                                  ''.concat(
                                    O,
                                    '-treenode-checkbox-indeterminate',
                                  ),
                                  y,
                                ),
                                ''.concat(O, '-treenode-selected'),
                                g,
                              ),
                              ''.concat(O, '-treenode-loading'),
                              x,
                            ),
                            ''.concat(O, '-treenode-active'),
                            S,
                          ),
                          ''.concat(O, '-treenode-leaf-last'),
                          X,
                        ),
                        ''.concat(O, '-treenode-draggable'),
                        _,
                      ),
                      'dragging',
                      te,
                    ),
                    I(
                      I(
                        I(
                          I(
                            I(
                              I(o, 'drop-target', k === d),
                              'drop-container',
                              $ === d,
                            ),
                            'drag-over',
                            !B && c,
                          ),
                          'drag-over-gap-top',
                          !B && p,
                        ),
                        'drag-over-gap-bottom',
                        !B && f,
                      ),
                      'filter-node',
                      P && P(Ae(this.props)),
                    )),
                  ),
                  style: i,
                  draggable: ae,
                  'aria-grabbed': te,
                  onDragStart: ae ? this.onDragStart : void 0,
                  onDragEnter: _ ? this.onDragEnter : void 0,
                  onDragOver: _ ? this.onDragOver : void 0,
                  onDragLeave: _ ? this.onDragLeave : void 0,
                  onDrop: _ ? this.onDrop : void 0,
                  onDragEnd: _ ? this.onDragEnd : void 0,
                  onMouseMove: R,
                },
                Ee,
                L,
              ),
              s.createElement(Is, {
                prefixCls: O,
                level: D,
                isStart: v,
                isEnd: m,
              }),
              this.renderDragHandler(),
              this.renderSwitcher(),
              this.renderCheckbox(),
              this.renderSelector(),
            )
          },
        },
      ]),
      r
    )
  })(s.Component),
  qt = function (t) {
    return s.createElement(dr.Consumer, null, function (r) {
      return s.createElement(Ps, se({}, t, { context: r }))
    })
  }
qt.displayName = 'TreeNode'
qt.isTreeNode = 1
function gt(e, t) {
  if (!e) return []
  var r = e.slice(),
    n = r.indexOf(t)
  return n >= 0 && r.splice(n, 1), r
}
function bt(e, t) {
  var r = (e || []).slice()
  return r.indexOf(t) === -1 && r.push(t), r
}
function ur(e) {
  return e.split('-')
}
function Ts(e, t) {
  var r = [],
    n = lt(t, e)
  function o() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    l.forEach(function (d) {
      var a = d.key,
        i = d.children
      r.push(a), o(i)
    })
  }
  return o(n.children), r
}
function Ds(e) {
  if (e.parent) {
    var t = ur(e.pos)
    return Number(t[t.length - 1]) === e.parent.children.length - 1
  }
  return !1
}
function Ms(e) {
  var t = ur(e.pos)
  return Number(t[t.length - 1]) === 0
}
function Ur(e, t, r, n, o, l, d, a, i, c) {
  var p,
    f = e.clientX,
    u = e.clientY,
    v = e.target.getBoundingClientRect(),
    m = v.top,
    b = v.height,
    g = (c === 'rtl' ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - f),
    h = (g - 12) / n,
    y = i.filter(function (B) {
      var L
      return (L = a[B]) === null ||
        L === void 0 ||
        (L = L.children) === null ||
        L === void 0
        ? void 0
        : L.length
    }),
    x = lt(a, r.props.eventKey)
  if (u < m + b / 2) {
    var C = d.findIndex(function (B) {
        return B.key === x.key
      }),
      S = C <= 0 ? 0 : C - 1,
      R = d[S].key
    x = lt(a, R)
  }
  var K = x.key,
    T = x,
    N = x.key,
    O = 0,
    P = 0
  if (!y.includes(K))
    for (var E = 0; E < h && Ds(x); E += 1) (x = x.parent), (P += 1)
  var $ = t.props.data,
    k = x.node,
    w = !0
  return (
    Ms(x) &&
    x.level === 0 &&
    u < m + b / 2 &&
    l({ dragNode: $, dropNode: k, dropPosition: -1 }) &&
    x.key === r.props.eventKey
      ? (O = -1)
      : (T.children || []).length && y.includes(N)
        ? l({ dragNode: $, dropNode: k, dropPosition: 0 })
          ? (O = 0)
          : (w = !1)
        : P === 0
          ? h > -1.5
            ? l({ dragNode: $, dropNode: k, dropPosition: 1 })
              ? (O = 1)
              : (w = !1)
            : l({ dragNode: $, dropNode: k, dropPosition: 0 })
              ? (O = 0)
              : l({ dragNode: $, dropNode: k, dropPosition: 1 })
                ? (O = 1)
                : (w = !1)
          : l({ dragNode: $, dropNode: k, dropPosition: 1 })
            ? (O = 1)
            : (w = !1),
    {
      dropPosition: O,
      dropLevelOffset: P,
      dropTargetKey: x.key,
      dropTargetPos: x.pos,
      dragOverNodeKey: N,
      dropContainerKey:
        O === 0
          ? null
          : ((p = x.parent) === null || p === void 0 ? void 0 : p.key) || null,
      dropAllowed: w,
    }
  )
}
function Gr(e, t) {
  if (e) {
    var r = t.multiple
    return r ? e.slice() : e.length ? [e[0]] : e
  }
}
function Mn(e) {
  if (!e) return null
  var t
  if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 }
  else if (it(e) === 'object')
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0,
    }
  else return wt(!1, '`checkedKeys` is not an array or an object'), null
  return t
}
function Fn(e, t) {
  var r = new Set()
  function n(o) {
    if (!r.has(o)) {
      var l = lt(t, o)
      if (l) {
        r.add(o)
        var d = l.parent,
          a = l.node
        a.disabled || (d && n(d.key))
      }
    }
  }
  return (
    (e || []).forEach(function (o) {
      n(o)
    }),
    he(r)
  )
}
function Bs(e) {
  const [t, r] = s.useState(null)
  return [
    s.useCallback(
      (l, d, a) => {
        const i = t ?? l,
          c = Math.min(i || 0, l),
          p = Math.max(i || 0, l),
          f = d.slice(c, p + 1).map((m) => e(m)),
          u = f.some((m) => !a.has(m)),
          v = []
        return (
          f.forEach((m) => {
            u ? (a.has(m) || v.push(m), a.add(m)) : (a.delete(m), v.push(m))
          }),
          r(u ? p : null),
          v
        )
      },
      [t],
    ),
    (l) => {
      r(l)
    },
  ]
}
const Ct = {},
  Wn = 'SELECT_ALL',
  Vn = 'SELECT_INVERT',
  qn = 'SELECT_NONE',
  Yr = [],
  Zo = (e, t) => {
    let r = []
    return (
      (t || []).forEach((n) => {
        r.push(n),
          n &&
            typeof n == 'object' &&
            e in n &&
            (r = [].concat(he(r), he(Zo(e, n[e]))))
      }),
      r
    )
  },
  Ls = (e, t) => {
    const {
        preserveSelectedRowKeys: r,
        selectedRowKeys: n,
        defaultSelectedRowKeys: o,
        getCheckboxProps: l,
        onChange: d,
        onSelect: a,
        onSelectAll: i,
        onSelectInvert: c,
        onSelectNone: p,
        onSelectMultiple: f,
        columnWidth: u,
        type: v,
        selections: m,
        fixed: b,
        renderCell: g,
        hideSelectAll: h,
        checkStrictly: y = !0,
      } = t || {},
      {
        prefixCls: x,
        data: C,
        pageData: S,
        getRecordByKey: R,
        getRowKey: K,
        expandType: T,
        childrenColumnName: N,
        locale: O,
        getPopupContainer: P,
      } = e,
      E = rr(),
      [$, k] = Bs((U) => U),
      [w, B] = bn(n || o || Yr, { value: n }),
      L = s.useRef(new Map()),
      M = s.useCallback(
        (U) => {
          if (r) {
            const A = new Map()
            U.forEach((F) => {
              let q = R(F)
              !q && L.current.has(F) && (q = L.current.get(F)), A.set(F, q)
            }),
              (L.current = A)
          }
        },
        [R, r],
      )
    s.useEffect(() => {
      M(w)
    }, [w])
    const D = s.useMemo(() => Zo(N, S), [N, S]),
      { keyEntities: X } = s.useMemo(() => {
        if (y) return { keyEntities: null }
        let U = C
        if (r) {
          const A = new Set(D.map((q, ie) => K(q, ie))),
            F = Array.from(L.current).reduce((q, ie) => {
              let [V, ee] = ie
              return A.has(V) ? q : q.concat(ee)
            }, [])
          U = [].concat(he(U), he(F))
        }
        return or(U, { externalGetKey: K, childrenPropName: N })
      }, [C, K, y, N, r, D]),
      _ = s.useMemo(() => {
        const U = new Map()
        return (
          D.forEach((A, F) => {
            const q = K(A, F),
              ie = (l ? l(A) : null) || {}
            U.set(q, ie)
          }),
          U
        )
      }, [D, K, l]),
      ae = s.useCallback(
        (U) => {
          var A
          return !!(!((A = _.get(K(U))) === null || A === void 0) && A.disabled)
        },
        [_, K],
      ),
      [te, Ee] = s.useMemo(() => {
        if (y) return [w || [], []]
        const { checkedKeys: U, halfCheckedKeys: A } = At(w, !0, X, ae)
        return [U || [], A]
      }, [w, y, X, ae]),
      xe = s.useMemo(() => {
        const U = v === 'radio' ? te.slice(0, 1) : te
        return new Set(U)
      }, [te, v]),
      Me = s.useMemo(() => (v === 'radio' ? new Set() : new Set(Ee)), [Ee, v])
    s.useEffect(() => {
      t || B(Yr)
    }, [!!t])
    const J = s.useCallback(
        (U, A) => {
          let F, q
          M(U),
            r
              ? ((F = U), (q = U.map((ie) => L.current.get(ie))))
              : ((F = []),
                (q = []),
                U.forEach((ie) => {
                  const V = R(ie)
                  V !== void 0 && (F.push(ie), q.push(V))
                })),
            B(F),
            d == null || d(F, q, { type: A })
        },
        [B, R, d, r],
      ),
      le = s.useCallback(
        (U, A, F, q) => {
          if (a) {
            const ie = F.map((V) => R(V))
            a(R(U), A, ie, q)
          }
          J(F, 'single')
        },
        [a, R, J],
      ),
      ke = s.useMemo(
        () =>
          !m || h
            ? null
            : (m === !0 ? [Wn, Vn, qn] : m)
                .map((A) =>
                  A === Wn
                    ? {
                        key: 'all',
                        text: O.selectionAll,
                        onSelect() {
                          J(
                            C.map((F, q) => K(F, q)).filter((F) => {
                              const q = _.get(F)
                              return !(q != null && q.disabled) || xe.has(F)
                            }),
                            'all',
                          )
                        },
                      }
                    : A === Vn
                      ? {
                          key: 'invert',
                          text: O.selectInvert,
                          onSelect() {
                            const F = new Set(xe)
                            S.forEach((ie, V) => {
                              const ee = K(ie, V),
                                W = _.get(ee)
                              ;(W != null && W.disabled) ||
                                (F.has(ee) ? F.delete(ee) : F.add(ee))
                            })
                            const q = Array.from(F)
                            c &&
                              (E.deprecated(!1, 'onSelectInvert', 'onChange'),
                              c(q)),
                              J(q, 'invert')
                          },
                        }
                      : A === qn
                        ? {
                            key: 'none',
                            text: O.selectNone,
                            onSelect() {
                              p == null || p(),
                                J(
                                  Array.from(xe).filter((F) => {
                                    const q = _.get(F)
                                    return q == null ? void 0 : q.disabled
                                  }),
                                  'none',
                                )
                            },
                          }
                        : A,
                )
                .map((A) =>
                  Object.assign(Object.assign({}, A), {
                    onSelect: function () {
                      for (
                        var F,
                          q,
                          ie = arguments.length,
                          V = new Array(ie),
                          ee = 0;
                        ee < ie;
                        ee++
                      )
                        V[ee] = arguments[ee]
                      ;(q = A.onSelect) === null ||
                        q === void 0 ||
                        (F = q).call.apply(F, [A].concat(V)),
                        k(null)
                    },
                  }),
                ),
        [m, xe, S, K, c, J],
      )
    return [
      s.useCallback(
        (U) => {
          var A
          if (!t) return U.filter((ve) => ve !== Ct)
          let F = he(U)
          const q = new Set(xe),
            ie = D.map(K).filter((ve) => !_.get(ve).disabled),
            V = ie.every((ve) => q.has(ve)),
            ee = ie.some((ve) => q.has(ve)),
            W = () => {
              const ve = []
              V
                ? ie.forEach((ue) => {
                    q.delete(ue), ve.push(ue)
                  })
                : ie.forEach((ue) => {
                    q.has(ue) || (q.add(ue), ve.push(ue))
                  })
              const Ne = Array.from(q)
              i == null ||
                i(
                  !V,
                  Ne.map((ue) => R(ue)),
                  ve.map((ue) => R(ue)),
                ),
                J(Ne, 'all'),
                k(null)
            }
          let de, G
          if (v !== 'radio') {
            let ve
            if (ke) {
              const Ce = {
                getPopupContainer: P,
                items: ke.map((je, He) => {
                  const { key: Be, text: We, onSelect: st } = je
                  return {
                    key: Be ?? He,
                    onClick: () => {
                      st == null || st(ie)
                    },
                    label: We,
                  }
                }),
              }
              ve = s.createElement(
                'div',
                { className: `${x}-selection-extra` },
                s.createElement(
                  So,
                  { menu: Ce, getPopupContainer: P },
                  s.createElement('span', null, s.createElement(tl, null)),
                ),
              )
            }
            const Ne = D.map((Ce, je) => {
                const He = K(Ce, je),
                  Be = _.get(He) || {}
                return Object.assign({ checked: q.has(He) }, Be)
              }).filter((Ce) => {
                let { disabled: je } = Ce
                return je
              }),
              ue = !!Ne.length && Ne.length === D.length,
              Te =
                ue &&
                Ne.every((Ce) => {
                  let { checked: je } = Ce
                  return je
                }),
              Ke =
                ue &&
                Ne.some((Ce) => {
                  let { checked: je } = Ce
                  return je
                })
            ;(G = s.createElement(yn, {
              checked: ue ? Te : !!D.length && V,
              indeterminate: ue ? !Te && Ke : !V && ee,
              onChange: W,
              disabled: D.length === 0 || ue,
              'aria-label': ve ? 'Custom selection' : 'Select all',
              skipGroup: !0,
            })),
              (de =
                !h &&
                s.createElement('div', { className: `${x}-selection` }, G, ve))
          }
          let pe
          v === 'radio'
            ? (pe = (ve, Ne, ue) => {
                const Te = K(Ne, ue),
                  Ke = q.has(Te)
                return {
                  node: s.createElement(
                    dn,
                    Object.assign({}, _.get(Te), {
                      checked: Ke,
                      onClick: (Ce) => Ce.stopPropagation(),
                      onChange: (Ce) => {
                        q.has(Te) || le(Te, !0, [Te], Ce.nativeEvent)
                      },
                    }),
                  ),
                  checked: Ke,
                }
              })
            : (pe = (ve, Ne, ue) => {
                var Te
                const Ke = K(Ne, ue),
                  Ce = q.has(Ke),
                  je = Me.has(Ke),
                  He = _.get(Ke)
                let Be
                return (
                  T === 'nest'
                    ? (Be = je)
                    : (Be =
                        (Te = He == null ? void 0 : He.indeterminate) !==
                          null && Te !== void 0
                          ? Te
                          : je),
                  {
                    node: s.createElement(
                      yn,
                      Object.assign({}, He, {
                        indeterminate: Be,
                        checked: Ce,
                        skipGroup: !0,
                        onClick: (We) => We.stopPropagation(),
                        onChange: (We) => {
                          let { nativeEvent: st } = We
                          const { shiftKey: yt } = st,
                            Oe = ie.findIndex((Ze) => Ze === Ke),
                            Rt = te.some((Ze) => ie.includes(Ze))
                          if (yt && y && Rt) {
                            const Ze = $(Oe, ie, q),
                              ot = Array.from(q)
                            f == null ||
                              f(
                                !Ce,
                                ot.map((et) => R(et)),
                                Ze.map((et) => R(et)),
                              ),
                              J(ot, 'multiple')
                          } else {
                            const Ze = te
                            if (y) {
                              const ot = Ce ? gt(Ze, Ke) : bt(Ze, Ke)
                              le(Ke, !Ce, ot, st)
                            } else {
                              const ot = At([].concat(he(Ze), [Ke]), !0, X, ae),
                                { checkedKeys: et, halfCheckedKeys: dt } = ot
                              let Ve = et
                              if (Ce) {
                                const qe = new Set(et)
                                qe.delete(Ke),
                                  (Ve = At(
                                    Array.from(qe),
                                    { checked: !1, halfCheckedKeys: dt },
                                    X,
                                    ae,
                                  ).checkedKeys)
                              }
                              le(Ke, !Ce, Ve, st)
                            }
                          }
                          k(Ce ? null : Oe)
                        },
                      }),
                    ),
                    checked: Ce,
                  }
                )
              })
          const ne = (ve, Ne, ue) => {
            const { node: Te, checked: Ke } = pe(ve, Ne, ue)
            return g ? g(Ke, Ne, ue, Te) : Te
          }
          if (!F.includes(Ct))
            if (
              F.findIndex((ve) => {
                var Ne
                return (
                  ((Ne = ve[ln]) === null || Ne === void 0
                    ? void 0
                    : Ne.columnType) === 'EXPAND_COLUMN'
                )
              }) === 0
            ) {
              const [ve, ...Ne] = F
              F = [ve, Ct].concat(he(Ne))
            } else F = [Ct].concat(he(F))
          const Se = F.indexOf(Ct)
          F = F.filter((ve, Ne) => ve !== Ct || Ne === Se)
          const we = F[Se - 1],
            be = F[Se + 1]
          let Re = b
          Re === void 0 &&
            ((be == null ? void 0 : be.fixed) !== void 0
              ? (Re = be.fixed)
              : (we == null ? void 0 : we.fixed) !== void 0 && (Re = we.fixed)),
            Re &&
              we &&
              ((A = we[ln]) === null || A === void 0
                ? void 0
                : A.columnType) === 'EXPAND_COLUMN' &&
              we.fixed === void 0 &&
              (we.fixed = Re)
          const _e = Y(`${x}-selection-col`, {
              [`${x}-selection-col-with-dropdown`]: m && v === 'checkbox',
            }),
            nt = () =>
              t != null && t.columnTitle
                ? typeof t.columnTitle == 'function'
                  ? t.columnTitle(G)
                  : t.columnTitle
                : de,
            Ie = {
              fixed: Re,
              width: u,
              className: `${x}-selection-column`,
              title: nt(),
              render: ne,
              onCell: t.onCell,
              [ln]: { className: _e },
            }
          return F.map((ve) => (ve === Ct ? Ie : ve))
        },
        [K, D, t, te, xe, Me, u, ke, T, _, f, le, ae],
      ),
      xe,
    ]
  }
function zs(e, t) {
  return (
    (e._antProxy = e._antProxy || {}),
    Object.keys(t).forEach((r) => {
      if (!(r in e._antProxy)) {
        const n = e[r]
        ;(e._antProxy[r] = n), (e[r] = t[r])
      }
    }),
    e
  )
}
function _s(e, t) {
  return s.useImperativeHandle(e, () => {
    const r = t(),
      { nativeElement: n } = r
    return typeof Proxy < 'u'
      ? new Proxy(n, {
          get(o, l) {
            return r[l] ? r[l] : Reflect.get(o, l)
          },
        })
      : zs(n, r)
  })
}
function Hs(e) {
  return (t) => {
    const {
        prefixCls: r,
        onExpand: n,
        record: o,
        expanded: l,
        expandable: d,
      } = t,
      a = `${r}-row-expand-icon`
    return s.createElement('button', {
      type: 'button',
      onClick: (i) => {
        n(o, i), i.stopPropagation()
      },
      className: Y(a, {
        [`${a}-spaced`]: !d,
        [`${a}-expanded`]: d && l,
        [`${a}-collapsed`]: d && !l,
      }),
      'aria-label': l ? e.collapse : e.expand,
      'aria-expanded': l,
    })
  }
}
function js(e) {
  return (r, n) => {
    const o = r.querySelector(`.${e}-container`)
    let l = n
    if (o) {
      const d = getComputedStyle(o),
        a = parseInt(d.borderLeftWidth, 10),
        i = parseInt(d.borderRightWidth, 10)
      l = n - a - i
    }
    return l
  }
}
const Et = (e, t) =>
  'key' in e && e.key !== void 0 && e.key !== null
    ? e.key
    : e.dataIndex
      ? Array.isArray(e.dataIndex)
        ? e.dataIndex.join('.')
        : e.dataIndex
      : t
function Yt(e, t) {
  return t ? `${t}-${e}` : `${e}`
}
const kn = (e, t) => (typeof e == 'function' ? e(t) : e),
  As = (e, t) => {
    const r = kn(e, t)
    return Object.prototype.toString.call(r) === '[object Object]' ? '' : r
  }
function Fs(e) {
  const t = s.useRef(e),
    r = $o()
  return [
    () => t.current,
    (n) => {
      ;(t.current = n), r()
    },
  ]
}
function Ws(e) {
  var t = e.dropPosition,
    r = e.dropLevelOffset,
    n = e.indent,
    o = {
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      backgroundColor: 'red',
      height: 2,
    }
  switch (t) {
    case -1:
      ;(o.top = 0), (o.left = -r * n)
      break
    case 1:
      ;(o.bottom = 0), (o.left = -r * n)
      break
    case 0:
      ;(o.bottom = 0), (o.left = n)
      break
  }
  return s.createElement('div', { style: o })
}
function ea(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e)
}
function Vs(e, t) {
  var r = s.useState(!1),
    n = ye(r, 2),
    o = n[0],
    l = n[1]
  Bt(
    function () {
      if (o)
        return (
          e(),
          function () {
            t()
          }
        )
    },
    [o],
  ),
    Bt(function () {
      return (
        l(!0),
        function () {
          l(!1)
        }
      )
    }, [])
}
var qs = [
    'className',
    'style',
    'motion',
    'motionNodes',
    'motionType',
    'onMotionStart',
    'onMotionEnd',
    'active',
    'treeNodeRequiredProps',
  ],
  ta = function (t, r) {
    var n = t.className,
      o = t.style,
      l = t.motion,
      d = t.motionNodes,
      a = t.motionType,
      i = t.onMotionStart,
      c = t.onMotionEnd,
      p = t.active,
      f = t.treeNodeRequiredProps,
      u = pt(t, qs),
      v = s.useState(!0),
      m = ye(v, 2),
      b = m[0],
      g = m[1],
      h = s.useContext(dr),
      y = h.prefixCls,
      x = d && a !== 'hide'
    Bt(
      function () {
        d && x !== b && g(x)
      },
      [d],
    )
    var C = function () {
        d && i()
      },
      S = s.useRef(!1),
      R = function () {
        d && !S.current && ((S.current = !0), c())
      }
    Vs(C, R)
    var K = function (N) {
      x === N && R()
    }
    return d
      ? s.createElement(
          _a,
          se({ ref: r, visible: b }, l, {
            motionAppear: a === 'show',
            onVisibleChanged: K,
          }),
          function (T, N) {
            var O = T.className,
              P = T.style
            return s.createElement(
              'div',
              {
                ref: N,
                className: Y(''.concat(y, '-treenode-motion'), O),
                style: P,
              },
              d.map(function (E) {
                var $ = Object.assign({}, (ea(E.data), E.data)),
                  k = E.title,
                  w = E.key,
                  B = E.isStart,
                  L = E.isEnd
                delete $.children
                var M = an(w, f)
                return s.createElement(
                  qt,
                  se({}, $, M, {
                    title: k,
                    active: p,
                    data: E.data,
                    key: w,
                    isStart: B,
                    isEnd: L,
                  }),
                )
              }),
            )
          },
        )
      : s.createElement(
          qt,
          se({ domRef: r, className: n, style: o }, u, { active: p }),
        )
  }
ta.displayName = 'MotionTreeNode'
var Xs = s.forwardRef(ta)
function Us() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = e.length,
    n = t.length
  if (Math.abs(r - n) !== 1) return { add: !1, key: null }
  function o(l, d) {
    var a = new Map()
    l.forEach(function (c) {
      a.set(c, !0)
    })
    var i = d.filter(function (c) {
      return !a.has(c)
    })
    return i.length === 1 ? i[0] : null
  }
  return r < n ? { add: !0, key: o(e, t) } : { add: !1, key: o(t, e) }
}
function Jr(e, t, r) {
  var n = e.findIndex(function (a) {
      return a.key === r
    }),
    o = e[n + 1],
    l = t.findIndex(function (a) {
      return a.key === r
    })
  if (o) {
    var d = t.findIndex(function (a) {
      return a.key === o.key
    })
    return t.slice(l + 1, d)
  }
  return t.slice(l + 1)
}
var Gs = [
    'prefixCls',
    'data',
    'selectable',
    'checkable',
    'expandedKeys',
    'selectedKeys',
    'checkedKeys',
    'loadedKeys',
    'loadingKeys',
    'halfCheckedKeys',
    'keyEntities',
    'disabled',
    'dragging',
    'dragOverNodeKey',
    'dropPosition',
    'motion',
    'height',
    'itemHeight',
    'virtual',
    'focusable',
    'activeItem',
    'focused',
    'tabIndex',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'onActiveChange',
    'onListChangeStart',
    'onListChangeEnd',
  ],
  Qr = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Ys = function () {},
  zt = 'RC_TREE_MOTION_'.concat(Math.random()),
  Xn = { key: zt },
  na = { key: zt, level: 0, index: 0, pos: '0', node: Xn, nodes: [Xn] },
  Zr = {
    parent: null,
    children: [],
    pos: na.pos,
    data: Xn,
    title: null,
    key: zt,
    isStart: [],
    isEnd: [],
  }
function eo(e, t, r, n) {
  return t === !1 || !r ? e : e.slice(0, Math.ceil(r / n) + 1)
}
function to(e) {
  var t = e.key,
    r = e.pos
  return un(t, r)
}
function Js(e) {
  for (var t = String(e.data.key), r = e; r.parent; )
    (r = r.parent), (t = ''.concat(r.data.key, ' > ').concat(t))
  return t
}
var ra = s.forwardRef(function (e, t) {
  var r = e.prefixCls,
    n = e.data
  e.selectable, e.checkable
  var o = e.expandedKeys,
    l = e.selectedKeys,
    d = e.checkedKeys,
    a = e.loadedKeys,
    i = e.loadingKeys,
    c = e.halfCheckedKeys,
    p = e.keyEntities,
    f = e.disabled,
    u = e.dragging,
    v = e.dragOverNodeKey,
    m = e.dropPosition,
    b = e.motion,
    g = e.height,
    h = e.itemHeight,
    y = e.virtual,
    x = e.focusable,
    C = e.activeItem,
    S = e.focused,
    R = e.tabIndex,
    K = e.onKeyDown,
    T = e.onFocus,
    N = e.onBlur,
    O = e.onActiveChange,
    P = e.onListChangeStart,
    E = e.onListChangeEnd,
    $ = pt(e, Gs),
    k = s.useRef(null),
    w = s.useRef(null)
  s.useImperativeHandle(t, function () {
    return {
      scrollTo: function (pe) {
        k.current.scrollTo(pe)
      },
      getIndentWidth: function () {
        return w.current.offsetWidth
      },
    }
  })
  var B = s.useState(o),
    L = ye(B, 2),
    M = L[0],
    D = L[1],
    X = s.useState(n),
    _ = ye(X, 2),
    ae = _[0],
    te = _[1],
    Ee = s.useState(n),
    xe = ye(Ee, 2),
    Me = xe[0],
    J = xe[1],
    le = s.useState([]),
    ke = ye(le, 2),
    Z = ke[0],
    U = ke[1],
    A = s.useState(null),
    F = ye(A, 2),
    q = F[0],
    ie = F[1],
    V = s.useRef(n)
  V.current = n
  function ee() {
    var G = V.current
    te(G), J(G), U([]), ie(null), E()
  }
  Bt(
    function () {
      D(o)
      var G = Us(M, o)
      if (G.key !== null)
        if (G.add) {
          var pe = ae.findIndex(function (_e) {
              var nt = _e.key
              return nt === G.key
            }),
            ne = eo(Jr(ae, n, G.key), y, g, h),
            Se = ae.slice()
          Se.splice(pe + 1, 0, Zr), J(Se), U(ne), ie('show')
        } else {
          var we = n.findIndex(function (_e) {
              var nt = _e.key
              return nt === G.key
            }),
            be = eo(Jr(n, ae, G.key), y, g, h),
            Re = n.slice()
          Re.splice(we + 1, 0, Zr), J(Re), U(be), ie('hide')
        }
      else ae !== n && (te(n), J(n))
    },
    [o, n],
  ),
    s.useEffect(
      function () {
        u || ee()
      },
      [u],
    )
  var W = b ? Me : n,
    de = {
      expandedKeys: o,
      selectedKeys: l,
      loadedKeys: a,
      loadingKeys: i,
      checkedKeys: d,
      halfCheckedKeys: c,
      dragOverNodeKey: v,
      dropPosition: m,
      keyEntities: p,
    }
  return s.createElement(
    s.Fragment,
    null,
    S &&
      C &&
      s.createElement('span', { style: Qr, 'aria-live': 'assertive' }, Js(C)),
    s.createElement(
      'div',
      null,
      s.createElement('input', {
        style: Qr,
        disabled: x === !1 || f,
        tabIndex: x !== !1 ? R : null,
        onKeyDown: K,
        onFocus: T,
        onBlur: N,
        value: '',
        onChange: Ys,
        'aria-label': 'for screen reader',
      }),
    ),
    s.createElement(
      'div',
      {
        className: ''.concat(r, '-treenode'),
        'aria-hidden': !0,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          border: 0,
          padding: 0,
        },
      },
      s.createElement(
        'div',
        { className: ''.concat(r, '-indent') },
        s.createElement('div', {
          ref: w,
          className: ''.concat(r, '-indent-unit'),
        }),
      ),
    ),
    s.createElement(
      wo,
      se({}, $, {
        data: W,
        itemKey: to,
        height: g,
        fullHeight: !1,
        virtual: y,
        itemHeight: h,
        prefixCls: ''.concat(r, '-list'),
        ref: k,
        onVisibleChange: function (pe) {
          pe.every(function (ne) {
            return to(ne) !== zt
          }) && ee()
        },
      }),
      function (G) {
        var pe = G.pos,
          ne = Object.assign({}, (ea(G.data), G.data)),
          Se = G.title,
          we = G.key,
          be = G.isStart,
          Re = G.isEnd,
          _e = un(we, pe)
        delete ne.key, delete ne.children
        var nt = an(_e, de)
        return s.createElement(
          Xs,
          se({}, ne, nt, {
            title: Se,
            active: !!C && we === C.key,
            pos: pe,
            data: G.data,
            isStart: be,
            isEnd: Re,
            motion: b,
            motionNodes: we === zt ? Z : null,
            motionType: q,
            onMotionStart: P,
            onMotionEnd: ee,
            treeNodeRequiredProps: de,
            onMouseMove: function () {
              O(null)
            },
          }),
        )
      },
    ),
  )
})
ra.displayName = 'NodeList'
var Qs = 10,
  fr = (function (e) {
    bo(r, e)
    var t = yo(r)
    function r() {
      var n
      xo(this, r)
      for (var o = arguments.length, l = new Array(o), d = 0; d < o; d++)
        l[d] = arguments[d]
      return (
        (n = t.call.apply(t, [this].concat(l))),
        I(H(n), 'destroyed', !1),
        I(H(n), 'delayedDragEnterLogic', void 0),
        I(H(n), 'loadingRetryTimes', {}),
        I(H(n), 'state', {
          keyEntities: {},
          indent: null,
          selectedKeys: [],
          checkedKeys: [],
          halfCheckedKeys: [],
          loadedKeys: [],
          loadingKeys: [],
          expandedKeys: [],
          draggingNodeKey: null,
          dragChildrenKeys: [],
          dropTargetKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropLevelOffset: null,
          dropTargetPos: null,
          dropAllowed: !0,
          dragOverNodeKey: null,
          treeData: [],
          flattenNodes: [],
          focused: !1,
          activeKey: null,
          listChanging: !1,
          prevProps: null,
          fieldNames: Vt(),
        }),
        I(H(n), 'dragStartMousePosition', null),
        I(H(n), 'dragNode', void 0),
        I(H(n), 'currentMouseOverDroppableNodeKey', null),
        I(H(n), 'listRef', s.createRef()),
        I(H(n), 'onNodeDragStart', function (a, i) {
          var c = n.state,
            p = c.expandedKeys,
            f = c.keyEntities,
            u = n.props.onDragStart,
            v = i.props.eventKey
          ;(n.dragNode = i),
            (n.dragStartMousePosition = { x: a.clientX, y: a.clientY })
          var m = gt(p, v)
          n.setState({
            draggingNodeKey: v,
            dragChildrenKeys: Ts(v, f),
            indent: n.listRef.current.getIndentWidth(),
          }),
            n.setExpandedKeys(m),
            window.addEventListener('dragend', n.onWindowDragEnd),
            u == null || u({ event: a, node: Ae(i.props) })
        }),
        I(H(n), 'onNodeDragEnter', function (a, i) {
          var c = n.state,
            p = c.expandedKeys,
            f = c.keyEntities,
            u = c.dragChildrenKeys,
            v = c.flattenNodes,
            m = c.indent,
            b = n.props,
            g = b.onDragEnter,
            h = b.onExpand,
            y = b.allowDrop,
            x = b.direction,
            C = i.props,
            S = C.pos,
            R = C.eventKey,
            K = H(n),
            T = K.dragNode
          if (
            (n.currentMouseOverDroppableNodeKey !== R &&
              (n.currentMouseOverDroppableNodeKey = R),
            !T)
          ) {
            n.resetDragState()
            return
          }
          var N = Ur(a, T, i, m, n.dragStartMousePosition, y, v, f, p, x),
            O = N.dropPosition,
            P = N.dropLevelOffset,
            E = N.dropTargetKey,
            $ = N.dropContainerKey,
            k = N.dropTargetPos,
            w = N.dropAllowed,
            B = N.dragOverNodeKey
          if (u.indexOf(E) !== -1 || !w) {
            n.resetDragState()
            return
          }
          if (
            (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}),
            Object.keys(n.delayedDragEnterLogic).forEach(function (L) {
              clearTimeout(n.delayedDragEnterLogic[L])
            }),
            T.props.eventKey !== i.props.eventKey &&
              (a.persist(),
              (n.delayedDragEnterLogic[S] = window.setTimeout(function () {
                if (n.state.draggingNodeKey !== null) {
                  var L = he(p),
                    M = lt(f, i.props.eventKey)
                  M &&
                    (M.children || []).length &&
                    (L = bt(p, i.props.eventKey)),
                    'expandedKeys' in n.props || n.setExpandedKeys(L),
                    h == null ||
                      h(L, {
                        node: Ae(i.props),
                        expanded: !0,
                        nativeEvent: a.nativeEvent,
                      })
                }
              }, 800))),
            T.props.eventKey === E && P === 0)
          ) {
            n.resetDragState()
            return
          }
          n.setState({
            dragOverNodeKey: B,
            dropPosition: O,
            dropLevelOffset: P,
            dropTargetKey: E,
            dropContainerKey: $,
            dropTargetPos: k,
            dropAllowed: w,
          }),
            g == null || g({ event: a, node: Ae(i.props), expandedKeys: p })
        }),
        I(H(n), 'onNodeDragOver', function (a, i) {
          var c = n.state,
            p = c.dragChildrenKeys,
            f = c.flattenNodes,
            u = c.keyEntities,
            v = c.expandedKeys,
            m = c.indent,
            b = n.props,
            g = b.onDragOver,
            h = b.allowDrop,
            y = b.direction,
            x = H(n),
            C = x.dragNode
          if (C) {
            var S = Ur(a, C, i, m, n.dragStartMousePosition, h, f, u, v, y),
              R = S.dropPosition,
              K = S.dropLevelOffset,
              T = S.dropTargetKey,
              N = S.dropContainerKey,
              O = S.dropAllowed,
              P = S.dropTargetPos,
              E = S.dragOverNodeKey
            p.indexOf(T) !== -1 ||
              !O ||
              (C.props.eventKey === T && K === 0
                ? (n.state.dropPosition === null &&
                    n.state.dropLevelOffset === null &&
                    n.state.dropTargetKey === null &&
                    n.state.dropContainerKey === null &&
                    n.state.dropTargetPos === null &&
                    n.state.dropAllowed === !1 &&
                    n.state.dragOverNodeKey === null) ||
                  n.resetDragState()
                : (R === n.state.dropPosition &&
                    K === n.state.dropLevelOffset &&
                    T === n.state.dropTargetKey &&
                    N === n.state.dropContainerKey &&
                    P === n.state.dropTargetPos &&
                    O === n.state.dropAllowed &&
                    E === n.state.dragOverNodeKey) ||
                  n.setState({
                    dropPosition: R,
                    dropLevelOffset: K,
                    dropTargetKey: T,
                    dropContainerKey: N,
                    dropTargetPos: P,
                    dropAllowed: O,
                    dragOverNodeKey: E,
                  }),
              g == null || g({ event: a, node: Ae(i.props) }))
          }
        }),
        I(H(n), 'onNodeDragLeave', function (a, i) {
          n.currentMouseOverDroppableNodeKey === i.props.eventKey &&
            !a.currentTarget.contains(a.relatedTarget) &&
            (n.resetDragState(), (n.currentMouseOverDroppableNodeKey = null))
          var c = n.props.onDragLeave
          c == null || c({ event: a, node: Ae(i.props) })
        }),
        I(H(n), 'onWindowDragEnd', function (a) {
          n.onNodeDragEnd(a, null, !0),
            window.removeEventListener('dragend', n.onWindowDragEnd)
        }),
        I(H(n), 'onNodeDragEnd', function (a, i) {
          var c = n.props.onDragEnd
          n.setState({ dragOverNodeKey: null }),
            n.cleanDragState(),
            c == null || c({ event: a, node: Ae(i.props) }),
            (n.dragNode = null),
            window.removeEventListener('dragend', n.onWindowDragEnd)
        }),
        I(H(n), 'onNodeDrop', function (a, i) {
          var c,
            p =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1,
            f = n.state,
            u = f.dragChildrenKeys,
            v = f.dropPosition,
            m = f.dropTargetKey,
            b = f.dropTargetPos,
            g = f.dropAllowed
          if (g) {
            var h = n.props.onDrop
            if (
              (n.setState({ dragOverNodeKey: null }),
              n.cleanDragState(),
              m !== null)
            ) {
              var y = j(
                  j({}, an(m, n.getTreeNodeRequiredProps())),
                  {},
                  {
                    active:
                      ((c = n.getActiveItem()) === null || c === void 0
                        ? void 0
                        : c.key) === m,
                    data: lt(n.state.keyEntities, m).node,
                  },
                ),
                x = u.indexOf(m) !== -1
              wt(
                !x,
                "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
              )
              var C = ur(b),
                S = {
                  event: a,
                  node: Ae(y),
                  dragNode: n.dragNode ? Ae(n.dragNode.props) : null,
                  dragNodesKeys: [n.dragNode.props.eventKey].concat(u),
                  dropToGap: v !== 0,
                  dropPosition: v + Number(C[C.length - 1]),
                }
              p || h == null || h(S), (n.dragNode = null)
            }
          }
        }),
        I(H(n), 'cleanDragState', function () {
          var a = n.state.draggingNodeKey
          a !== null &&
            n.setState({
              draggingNodeKey: null,
              dropPosition: null,
              dropContainerKey: null,
              dropTargetKey: null,
              dropLevelOffset: null,
              dropAllowed: !0,
              dragOverNodeKey: null,
            }),
            (n.dragStartMousePosition = null),
            (n.currentMouseOverDroppableNodeKey = null)
        }),
        I(H(n), 'triggerExpandActionExpand', function (a, i) {
          var c = n.state,
            p = c.expandedKeys,
            f = c.flattenNodes,
            u = i.expanded,
            v = i.key,
            m = i.isLeaf
          if (!(m || a.shiftKey || a.metaKey || a.ctrlKey)) {
            var b = f.filter(function (h) {
                return h.key === v
              })[0],
              g = Ae(
                j(
                  j({}, an(v, n.getTreeNodeRequiredProps())),
                  {},
                  { data: b.data },
                ),
              )
            n.setExpandedKeys(u ? gt(p, v) : bt(p, v)), n.onNodeExpand(a, g)
          }
        }),
        I(H(n), 'onNodeClick', function (a, i) {
          var c = n.props,
            p = c.onClick,
            f = c.expandAction
          f === 'click' && n.triggerExpandActionExpand(a, i),
            p == null || p(a, i)
        }),
        I(H(n), 'onNodeDoubleClick', function (a, i) {
          var c = n.props,
            p = c.onDoubleClick,
            f = c.expandAction
          f === 'doubleClick' && n.triggerExpandActionExpand(a, i),
            p == null || p(a, i)
        }),
        I(H(n), 'onNodeSelect', function (a, i) {
          var c = n.state.selectedKeys,
            p = n.state,
            f = p.keyEntities,
            u = p.fieldNames,
            v = n.props,
            m = v.onSelect,
            b = v.multiple,
            g = i.selected,
            h = i[u.key],
            y = !g
          y ? (b ? (c = bt(c, h)) : (c = [h])) : (c = gt(c, h))
          var x = c
            .map(function (C) {
              var S = lt(f, C)
              return S ? S.node : null
            })
            .filter(function (C) {
              return C
            })
          n.setUncontrolledState({ selectedKeys: c }),
            m == null ||
              m(c, {
                event: 'select',
                selected: y,
                node: i,
                selectedNodes: x,
                nativeEvent: a.nativeEvent,
              })
        }),
        I(H(n), 'onNodeCheck', function (a, i, c) {
          var p = n.state,
            f = p.keyEntities,
            u = p.checkedKeys,
            v = p.halfCheckedKeys,
            m = n.props,
            b = m.checkStrictly,
            g = m.onCheck,
            h = i.key,
            y,
            x = {
              event: 'check',
              node: i,
              checked: c,
              nativeEvent: a.nativeEvent,
            }
          if (b) {
            var C = c ? bt(u, h) : gt(u, h),
              S = gt(v, h)
            ;(y = { checked: C, halfChecked: S }),
              (x.checkedNodes = C.map(function (P) {
                return lt(f, P)
              })
                .filter(function (P) {
                  return P
                })
                .map(function (P) {
                  return P.node
                })),
              n.setUncontrolledState({ checkedKeys: C })
          } else {
            var R = At([].concat(he(u), [h]), !0, f),
              K = R.checkedKeys,
              T = R.halfCheckedKeys
            if (!c) {
              var N = new Set(K)
              N.delete(h)
              var O = At(Array.from(N), { checked: !1, halfCheckedKeys: T }, f)
              ;(K = O.checkedKeys), (T = O.halfCheckedKeys)
            }
            ;(y = K),
              (x.checkedNodes = []),
              (x.checkedNodesPositions = []),
              (x.halfCheckedKeys = T),
              K.forEach(function (P) {
                var E = lt(f, P)
                if (E) {
                  var $ = E.node,
                    k = E.pos
                  x.checkedNodes.push($),
                    x.checkedNodesPositions.push({ node: $, pos: k })
                }
              }),
              n.setUncontrolledState({ checkedKeys: K }, !1, {
                halfCheckedKeys: T,
              })
          }
          g == null || g(y, x)
        }),
        I(H(n), 'onNodeLoad', function (a) {
          var i,
            c = a.key,
            p = n.state.keyEntities,
            f = lt(p, c)
          if (
            !(
              f != null &&
              (i = f.children) !== null &&
              i !== void 0 &&
              i.length
            )
          ) {
            var u = new Promise(function (v, m) {
              n.setState(function (b) {
                var g = b.loadedKeys,
                  h = g === void 0 ? [] : g,
                  y = b.loadingKeys,
                  x = y === void 0 ? [] : y,
                  C = n.props,
                  S = C.loadData,
                  R = C.onLoad
                if (!S || h.indexOf(c) !== -1 || x.indexOf(c) !== -1)
                  return null
                var K = S(a)
                return (
                  K.then(function () {
                    var T = n.state.loadedKeys,
                      N = bt(T, c)
                    R == null || R(N, { event: 'load', node: a }),
                      n.setUncontrolledState({ loadedKeys: N }),
                      n.setState(function (O) {
                        return { loadingKeys: gt(O.loadingKeys, c) }
                      }),
                      v()
                  }).catch(function (T) {
                    if (
                      (n.setState(function (O) {
                        return { loadingKeys: gt(O.loadingKeys, c) }
                      }),
                      (n.loadingRetryTimes[c] =
                        (n.loadingRetryTimes[c] || 0) + 1),
                      n.loadingRetryTimes[c] >= Qs)
                    ) {
                      var N = n.state.loadedKeys
                      wt(
                        !1,
                        'Retry for `loadData` many times but still failed. No more retry.',
                      ),
                        n.setUncontrolledState({ loadedKeys: bt(N, c) }),
                        v()
                    }
                    m(T)
                  }),
                  { loadingKeys: bt(x, c) }
                )
              })
            })
            return u.catch(function () {}), u
          }
        }),
        I(H(n), 'onNodeMouseEnter', function (a, i) {
          var c = n.props.onMouseEnter
          c == null || c({ event: a, node: i })
        }),
        I(H(n), 'onNodeMouseLeave', function (a, i) {
          var c = n.props.onMouseLeave
          c == null || c({ event: a, node: i })
        }),
        I(H(n), 'onNodeContextMenu', function (a, i) {
          var c = n.props.onRightClick
          c && (a.preventDefault(), c({ event: a, node: i }))
        }),
        I(H(n), 'onFocus', function () {
          var a = n.props.onFocus
          n.setState({ focused: !0 })
          for (var i = arguments.length, c = new Array(i), p = 0; p < i; p++)
            c[p] = arguments[p]
          a == null || a.apply(void 0, c)
        }),
        I(H(n), 'onBlur', function () {
          var a = n.props.onBlur
          n.setState({ focused: !1 }), n.onActiveChange(null)
          for (var i = arguments.length, c = new Array(i), p = 0; p < i; p++)
            c[p] = arguments[p]
          a == null || a.apply(void 0, c)
        }),
        I(H(n), 'getTreeNodeRequiredProps', function () {
          var a = n.state,
            i = a.expandedKeys,
            c = a.selectedKeys,
            p = a.loadedKeys,
            f = a.loadingKeys,
            u = a.checkedKeys,
            v = a.halfCheckedKeys,
            m = a.dragOverNodeKey,
            b = a.dropPosition,
            g = a.keyEntities
          return {
            expandedKeys: i || [],
            selectedKeys: c || [],
            loadedKeys: p || [],
            loadingKeys: f || [],
            checkedKeys: u || [],
            halfCheckedKeys: v || [],
            dragOverNodeKey: m,
            dropPosition: b,
            keyEntities: g,
          }
        }),
        I(H(n), 'setExpandedKeys', function (a) {
          var i = n.state,
            c = i.treeData,
            p = i.fieldNames,
            f = Dn(c, a, p)
          n.setUncontrolledState({ expandedKeys: a, flattenNodes: f }, !0)
        }),
        I(H(n), 'onNodeExpand', function (a, i) {
          var c = n.state.expandedKeys,
            p = n.state,
            f = p.listChanging,
            u = p.fieldNames,
            v = n.props,
            m = v.onExpand,
            b = v.loadData,
            g = i.expanded,
            h = i[u.key]
          if (!f) {
            var y = c.indexOf(h),
              x = !g
            if (
              (wt(
                (g && y !== -1) || (!g && y === -1),
                'Expand state not sync with index check',
              ),
              x ? (c = bt(c, h)) : (c = gt(c, h)),
              n.setExpandedKeys(c),
              m == null ||
                m(c, { node: i, expanded: x, nativeEvent: a.nativeEvent }),
              x && b)
            ) {
              var C = n.onNodeLoad(i)
              C &&
                C.then(function () {
                  var S = Dn(n.state.treeData, c, u)
                  n.setUncontrolledState({ flattenNodes: S })
                }).catch(function () {
                  var S = n.state.expandedKeys,
                    R = gt(S, h)
                  n.setExpandedKeys(R)
                })
            }
          }
        }),
        I(H(n), 'onListChangeStart', function () {
          n.setUncontrolledState({ listChanging: !0 })
        }),
        I(H(n), 'onListChangeEnd', function () {
          setTimeout(function () {
            n.setUncontrolledState({ listChanging: !1 })
          })
        }),
        I(H(n), 'onActiveChange', function (a) {
          var i = n.state.activeKey,
            c = n.props,
            p = c.onActiveChange,
            f = c.itemScrollOffset,
            u = f === void 0 ? 0 : f
          i !== a &&
            (n.setState({ activeKey: a }),
            a !== null && n.scrollTo({ key: a, offset: u }),
            p == null || p(a))
        }),
        I(H(n), 'getActiveItem', function () {
          var a = n.state,
            i = a.activeKey,
            c = a.flattenNodes
          return i === null
            ? null
            : c.find(function (p) {
                var f = p.key
                return f === i
              }) || null
        }),
        I(H(n), 'offsetActiveKey', function (a) {
          var i = n.state,
            c = i.flattenNodes,
            p = i.activeKey,
            f = c.findIndex(function (m) {
              var b = m.key
              return b === p
            })
          f === -1 && a < 0 && (f = c.length),
            (f = (f + a + c.length) % c.length)
          var u = c[f]
          if (u) {
            var v = u.key
            n.onActiveChange(v)
          } else n.onActiveChange(null)
        }),
        I(H(n), 'onKeyDown', function (a) {
          var i = n.state,
            c = i.activeKey,
            p = i.expandedKeys,
            f = i.checkedKeys,
            u = i.fieldNames,
            v = n.props,
            m = v.onKeyDown,
            b = v.checkable,
            g = v.selectable
          switch (a.which) {
            case Je.UP: {
              n.offsetActiveKey(-1), a.preventDefault()
              break
            }
            case Je.DOWN: {
              n.offsetActiveKey(1), a.preventDefault()
              break
            }
          }
          var h = n.getActiveItem()
          if (h && h.data) {
            var y = n.getTreeNodeRequiredProps(),
              x = h.data.isLeaf === !1 || !!(h.data[u.children] || []).length,
              C = Ae(j(j({}, an(c, y)), {}, { data: h.data, active: !0 }))
            switch (a.which) {
              case Je.LEFT: {
                x && p.includes(c)
                  ? n.onNodeExpand({}, C)
                  : h.parent && n.onActiveChange(h.parent.key),
                  a.preventDefault()
                break
              }
              case Je.RIGHT: {
                x && !p.includes(c)
                  ? n.onNodeExpand({}, C)
                  : h.children &&
                    h.children.length &&
                    n.onActiveChange(h.children[0].key),
                  a.preventDefault()
                break
              }
              case Je.ENTER:
              case Je.SPACE: {
                b && !C.disabled && C.checkable !== !1 && !C.disableCheckbox
                  ? n.onNodeCheck({}, C, !f.includes(c))
                  : !b &&
                    g &&
                    !C.disabled &&
                    C.selectable !== !1 &&
                    n.onNodeSelect({}, C)
                break
              }
            }
          }
          m == null || m(a)
        }),
        I(H(n), 'setUncontrolledState', function (a) {
          var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            c =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null
          if (!n.destroyed) {
            var p = !1,
              f = !0,
              u = {}
            Object.keys(a).forEach(function (v) {
              if (v in n.props) {
                f = !1
                return
              }
              ;(p = !0), (u[v] = a[v])
            }),
              p && (!i || f) && n.setState(j(j({}, u), c))
          }
        }),
        I(H(n), 'scrollTo', function (a) {
          n.listRef.current.scrollTo(a)
        }),
        n
      )
    }
    return (
      Co(
        r,
        [
          {
            key: 'componentDidMount',
            value: function () {
              ;(this.destroyed = !1), this.onUpdated()
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.onUpdated()
            },
          },
          {
            key: 'onUpdated',
            value: function () {
              var o = this.props,
                l = o.activeKey,
                d = o.itemScrollOffset,
                a = d === void 0 ? 0 : d
              l !== void 0 &&
                l !== this.state.activeKey &&
                (this.setState({ activeKey: l }),
                l !== null && this.scrollTo({ key: l, offset: a }))
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              window.removeEventListener('dragend', this.onWindowDragEnd),
                (this.destroyed = !0)
            },
          },
          {
            key: 'resetDragState',
            value: function () {
              this.setState({
                dragOverNodeKey: null,
                dropPosition: null,
                dropLevelOffset: null,
                dropTargetKey: null,
                dropContainerKey: null,
                dropTargetPos: null,
                dropAllowed: !1,
              })
            },
          },
          {
            key: 'render',
            value: function () {
              var o = this.state,
                l = o.focused,
                d = o.flattenNodes,
                a = o.keyEntities,
                i = o.draggingNodeKey,
                c = o.activeKey,
                p = o.dropLevelOffset,
                f = o.dropContainerKey,
                u = o.dropTargetKey,
                v = o.dropPosition,
                m = o.dragOverNodeKey,
                b = o.indent,
                g = this.props,
                h = g.prefixCls,
                y = g.className,
                x = g.style,
                C = g.showLine,
                S = g.focusable,
                R = g.tabIndex,
                K = R === void 0 ? 0 : R,
                T = g.selectable,
                N = g.showIcon,
                O = g.icon,
                P = g.switcherIcon,
                E = g.draggable,
                $ = g.checkable,
                k = g.checkStrictly,
                w = g.disabled,
                B = g.motion,
                L = g.loadData,
                M = g.filterTreeNode,
                D = g.height,
                X = g.itemHeight,
                _ = g.virtual,
                ae = g.titleRender,
                te = g.dropIndicatorRender,
                Ee = g.onContextMenu,
                xe = g.onScroll,
                Me = g.direction,
                J = g.rootClassName,
                le = g.rootStyle,
                ke = Wt(this.props, { aria: !0, data: !0 }),
                Z
              return (
                E &&
                  (it(E) === 'object'
                    ? (Z = E)
                    : typeof E == 'function'
                      ? (Z = { nodeDraggable: E })
                      : (Z = {})),
                s.createElement(
                  dr.Provider,
                  {
                    value: {
                      prefixCls: h,
                      selectable: T,
                      showIcon: N,
                      icon: O,
                      switcherIcon: P,
                      draggable: Z,
                      draggingNodeKey: i,
                      checkable: $,
                      checkStrictly: k,
                      disabled: w,
                      keyEntities: a,
                      dropLevelOffset: p,
                      dropContainerKey: f,
                      dropTargetKey: u,
                      dropPosition: v,
                      dragOverNodeKey: m,
                      indent: b,
                      direction: Me,
                      dropIndicatorRender: te,
                      loadData: L,
                      filterTreeNode: M,
                      titleRender: ae,
                      onNodeClick: this.onNodeClick,
                      onNodeDoubleClick: this.onNodeDoubleClick,
                      onNodeExpand: this.onNodeExpand,
                      onNodeSelect: this.onNodeSelect,
                      onNodeCheck: this.onNodeCheck,
                      onNodeLoad: this.onNodeLoad,
                      onNodeMouseEnter: this.onNodeMouseEnter,
                      onNodeMouseLeave: this.onNodeMouseLeave,
                      onNodeContextMenu: this.onNodeContextMenu,
                      onNodeDragStart: this.onNodeDragStart,
                      onNodeDragEnter: this.onNodeDragEnter,
                      onNodeDragOver: this.onNodeDragOver,
                      onNodeDragLeave: this.onNodeDragLeave,
                      onNodeDragEnd: this.onNodeDragEnd,
                      onNodeDrop: this.onNodeDrop,
                    },
                  },
                  s.createElement(
                    'div',
                    {
                      role: 'tree',
                      className: Y(
                        h,
                        y,
                        J,
                        I(
                          I(
                            I({}, ''.concat(h, '-show-line'), C),
                            ''.concat(h, '-focused'),
                            l,
                          ),
                          ''.concat(h, '-active-focused'),
                          c !== null,
                        ),
                      ),
                      style: le,
                    },
                    s.createElement(
                      ra,
                      se(
                        {
                          ref: this.listRef,
                          prefixCls: h,
                          style: x,
                          data: d,
                          disabled: w,
                          selectable: T,
                          checkable: !!$,
                          motion: B,
                          dragging: i !== null,
                          height: D,
                          itemHeight: X,
                          virtual: _,
                          focusable: S,
                          focused: l,
                          tabIndex: K,
                          activeItem: this.getActiveItem(),
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown: this.onKeyDown,
                          onActiveChange: this.onActiveChange,
                          onListChangeStart: this.onListChangeStart,
                          onListChangeEnd: this.onListChangeEnd,
                          onContextMenu: Ee,
                          onScroll: xe,
                        },
                        this.getTreeNodeRequiredProps(),
                        ke,
                      ),
                    ),
                  ),
                )
              )
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (o, l) {
              var d = l.prevProps,
                a = { prevProps: o }
              function i(K) {
                return (!d && K in o) || (d && d[K] !== o[K])
              }
              var c,
                p = l.fieldNames
              if (
                (i('fieldNames') &&
                  ((p = Vt(o.fieldNames)), (a.fieldNames = p)),
                i('treeData')
                  ? (c = o.treeData)
                  : i('children') &&
                    (wt(
                      !1,
                      '`children` of Tree is deprecated. Please use `treeData` instead.',
                    ),
                    (c = Oo(o.children))),
                c)
              ) {
                a.treeData = c
                var f = or(c, { fieldNames: p })
                a.keyEntities = j(I({}, zt, na), f.keyEntities)
              }
              var u = a.keyEntities || l.keyEntities
              if (i('expandedKeys') || (d && i('autoExpandParent')))
                a.expandedKeys =
                  o.autoExpandParent || (!d && o.defaultExpandParent)
                    ? Fn(o.expandedKeys, u)
                    : o.expandedKeys
              else if (!d && o.defaultExpandAll) {
                var v = j({}, u)
                delete v[zt]
                var m = []
                Object.keys(v).forEach(function (K) {
                  var T = v[K]
                  T.children && T.children.length && m.push(T.key)
                }),
                  (a.expandedKeys = m)
              } else
                !d &&
                  o.defaultExpandedKeys &&
                  (a.expandedKeys =
                    o.autoExpandParent || o.defaultExpandParent
                      ? Fn(o.defaultExpandedKeys, u)
                      : o.defaultExpandedKeys)
              if (
                (a.expandedKeys || delete a.expandedKeys, c || a.expandedKeys)
              ) {
                var b = Dn(c || l.treeData, a.expandedKeys || l.expandedKeys, p)
                a.flattenNodes = b
              }
              if (
                (o.selectable &&
                  (i('selectedKeys')
                    ? (a.selectedKeys = Gr(o.selectedKeys, o))
                    : !d &&
                      o.defaultSelectedKeys &&
                      (a.selectedKeys = Gr(o.defaultSelectedKeys, o))),
                o.checkable)
              ) {
                var g
                if (
                  (i('checkedKeys')
                    ? (g = Mn(o.checkedKeys) || {})
                    : !d && o.defaultCheckedKeys
                      ? (g = Mn(o.defaultCheckedKeys) || {})
                      : c &&
                        (g = Mn(o.checkedKeys) || {
                          checkedKeys: l.checkedKeys,
                          halfCheckedKeys: l.halfCheckedKeys,
                        }),
                  g)
                ) {
                  var h = g,
                    y = h.checkedKeys,
                    x = y === void 0 ? [] : y,
                    C = h.halfCheckedKeys,
                    S = C === void 0 ? [] : C
                  if (!o.checkStrictly) {
                    var R = At(x, !0, u)
                    ;(x = R.checkedKeys), (S = R.halfCheckedKeys)
                  }
                  ;(a.checkedKeys = x), (a.halfCheckedKeys = S)
                }
              }
              return i('loadedKeys') && (a.loadedKeys = o.loadedKeys), a
            },
          },
        ],
      ),
      r
    )
  })(s.Component)
I(fr, 'defaultProps', {
  prefixCls: 'rc-tree',
  showLine: !1,
  showIcon: !0,
  selectable: !0,
  multiple: !1,
  checkable: !1,
  disabled: !1,
  checkStrictly: !1,
  draggable: !1,
  defaultExpandParent: !0,
  autoExpandParent: !1,
  defaultExpandAll: !1,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: Ws,
  allowDrop: function () {
    return !0
  },
  expandAction: !1,
})
I(fr, 'TreeNode', qt)
const Zs = new Aa('ant-tree-node-fx-do-not-use', {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  }),
  ec = (e, t) => ({
    [`.${e}-switcher-icon`]: {
      display: 'inline-block',
      fontSize: 10,
      verticalAlign: 'baseline',
      svg: { transition: `transform ${t.motionDurationSlow}` },
    },
  }),
  tc = (e, t) => ({
    [`.${e}-drop-indicator`]: {
      position: 'absolute',
      zIndex: 1,
      height: 2,
      backgroundColor: t.colorPrimary,
      borderRadius: 1,
      pointerEvents: 'none',
      '&:after': {
        position: 'absolute',
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        border: `${z(t.lineWidthBold)} solid ${t.colorPrimary}`,
        borderRadius: '50%',
        content: '""',
      },
    },
  }),
  nc = (e, t) => {
    const {
        treeCls: r,
        treeNodeCls: n,
        treeNodePadding: o,
        titleHeight: l,
        nodeSelectedBg: d,
        nodeHoverBg: a,
      } = t,
      i = t.paddingXS
    return {
      [r]: Object.assign(Object.assign({}, Lt(t)), {
        background: t.colorBgContainer,
        borderRadius: t.borderRadius,
        transition: `background-color ${t.motionDurationSlow}`,
        [`&${r}-rtl`]: {
          [`${r}-switcher`]: {
            '&_close': {
              [`${r}-switcher-icon`]: { svg: { transform: 'rotate(90deg)' } },
            },
          },
        },
        [`&-focused:not(:hover):not(${r}-active-focused)`]: Object.assign(
          {},
          sn(t),
        ),
        [`${r}-list-holder-inner`]: { alignItems: 'flex-start' },
        [`&${r}-block-node`]: {
          [`${r}-list-holder-inner`]: {
            alignItems: 'stretch',
            [`${r}-node-content-wrapper`]: { flex: 'auto' },
            [`${n}.dragging`]: {
              position: 'relative',
              '&:after': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                bottom: o,
                insetInlineStart: 0,
                border: `1px solid ${t.colorPrimary}`,
                opacity: 0,
                animationName: Zs,
                animationDuration: t.motionDurationSlow,
                animationPlayState: 'running',
                animationFillMode: 'forwards',
                content: '""',
                pointerEvents: 'none',
              },
            },
          },
        },
        [n]: {
          display: 'flex',
          alignItems: 'flex-start',
          padding: `0 0 ${z(o)} 0`,
          outline: 'none',
          '&-rtl': { direction: 'rtl' },
          '&-disabled': {
            [`${r}-node-content-wrapper`]: {
              color: t.colorTextDisabled,
              cursor: 'not-allowed',
              '&:hover': { background: 'transparent' },
            },
          },
          [`&-active ${r}-node-content-wrapper`]: {
            background: t.controlItemBgHover,
          },
          [`&:not(${n}-disabled).filter-node ${r}-title`]: {
            color: t.colorPrimary,
            fontWeight: 500,
          },
          '&-draggable': {
            cursor: 'grab',
            [`${r}-draggable-icon`]: {
              flexShrink: 0,
              width: l,
              lineHeight: z(l),
              textAlign: 'center',
              visibility: 'visible',
              opacity: 0.2,
              transition: `opacity ${t.motionDurationSlow}`,
              [`${n}:hover &`]: { opacity: 0.45 },
            },
            [`&${n}-disabled`]: {
              [`${r}-draggable-icon`]: { visibility: 'hidden' },
            },
          },
        },
        [`${r}-indent`]: {
          alignSelf: 'stretch',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          '&-unit': { display: 'inline-block', width: l },
        },
        [`${r}-draggable-icon`]: { visibility: 'hidden' },
        [`${r}-switcher`]: Object.assign(Object.assign({}, ec(e, t)), {
          position: 'relative',
          flex: 'none',
          alignSelf: 'stretch',
          width: l,
          margin: 0,
          lineHeight: z(l),
          textAlign: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          transition: `all ${t.motionDurationSlow}`,
          marginInlineEnd: t
            .calc(t.calc(l).sub(t.controlInteractiveSize))
            .div(2)
            .equal(),
          '&-noop': { cursor: 'unset' },
          '&:before': {
            pointerEvents: 'none',
            content: '""',
            width: l,
            height: l,
            position: 'absolute',
            left: { _skip_check_: !0, value: 0 },
            top: 0,
            borderRadius: t.borderRadius,
            transition: `all ${t.motionDurationSlow}`,
          },
          [`&:not(${r}-switcher-noop):hover:before`]: {
            backgroundColor: t.colorBgTextHover,
          },
          '&_close': {
            [`${r}-switcher-icon`]: { svg: { transform: 'rotate(-90deg)' } },
          },
          '&-loading-icon': { color: t.colorPrimary },
          '&-leaf-line': {
            position: 'relative',
            zIndex: 1,
            display: 'inline-block',
            width: '100%',
            height: '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: t.calc(l).div(2).equal(),
              bottom: t.calc(o).mul(-1).equal(),
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${t.colorBorder}`,
              content: '""',
            },
            '&:after': {
              position: 'absolute',
              width: t.calc(t.calc(l).div(2).equal()).mul(0.8).equal(),
              height: t.calc(l).div(2).equal(),
              borderBottom: `1px solid ${t.colorBorder}`,
              content: '""',
            },
          },
        }),
        [`${r}-checkbox`]: {
          top: 'initial',
          marginInlineEnd: i,
          alignSelf: 'flex-start',
          marginTop: t.marginXXS,
        },
        [`${r}-node-content-wrapper, ${r}-checkbox + span`]: {
          position: 'relative',
          zIndex: 'auto',
          minHeight: l,
          margin: 0,
          padding: `0 ${z(t.calc(t.paddingXS).div(2).equal())}`,
          color: 'inherit',
          lineHeight: z(l),
          background: 'transparent',
          borderRadius: t.borderRadius,
          cursor: 'pointer',
          transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          '&:hover': { backgroundColor: a },
          [`&${r}-node-selected`]: { backgroundColor: d },
          [`${r}-iconEle`]: {
            display: 'inline-block',
            width: l,
            height: l,
            lineHeight: z(l),
            textAlign: 'center',
            verticalAlign: 'top',
            '&:empty': { display: 'none' },
          },
        },
        [`${r}-unselectable ${r}-node-content-wrapper:hover`]: {
          backgroundColor: 'transparent',
        },
        [`${r}-node-content-wrapper`]: Object.assign(
          { lineHeight: z(l), userSelect: 'none' },
          tc(e, t),
        ),
        [`${n}.drop-container`]: {
          '> [draggable]': { boxShadow: `0 0 0 2px ${t.colorPrimary}` },
        },
        '&-show-line': {
          [`${r}-indent`]: {
            '&-unit': {
              position: 'relative',
              height: '100%',
              '&:before': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: t.calc(l).div(2).equal(),
                bottom: t.calc(o).mul(-1).equal(),
                borderInlineEnd: `1px solid ${t.colorBorder}`,
                content: '""',
              },
              '&-end': { '&:before': { display: 'none' } },
            },
          },
          [`${r}-switcher`]: {
            background: 'transparent',
            '&-line-icon': { verticalAlign: '-0.15em' },
          },
        },
        [`${n}-leaf-last`]: {
          [`${r}-switcher`]: {
            '&-leaf-line': {
              '&:before': {
                top: 'auto !important',
                bottom: 'auto !important',
                height: `${z(t.calc(l).div(2).equal())} !important`,
              },
            },
          },
        },
      }),
    }
  },
  rc = (e) => {
    const {
      treeCls: t,
      treeNodeCls: r,
      treeNodePadding: n,
      directoryNodeSelectedBg: o,
      directoryNodeSelectedColor: l,
    } = e
    return {
      [`${t}${t}-directory`]: {
        [r]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: n,
            insetInlineStart: 0,
            transition: `background-color ${e.motionDurationMid}`,
            content: '""',
            pointerEvents: 'none',
          },
          '&:hover': { '&:before': { background: e.controlItemBgHover } },
          '> *': { zIndex: 1 },
          [`${t}-switcher`]: { transition: `color ${e.motionDurationMid}` },
          [`${t}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: 'none',
            '&:hover': { background: 'transparent' },
            [`&${t}-node-selected`]: { color: l, background: 'transparent' },
          },
          '&-selected': {
            '\n            &:hover::before,\n            &::before\n          ':
              { background: o },
            [`${t}-switcher`]: { color: l },
            [`${t}-node-content-wrapper`]: {
              color: l,
              background: 'transparent',
            },
          },
        },
      },
    }
  },
  oc = (e, t) => {
    const r = `.${e}`,
      n = `${r}-treenode`,
      o = t.calc(t.paddingXS).div(2).equal(),
      l = wn(t, { treeCls: r, treeNodeCls: n, treeNodePadding: o })
    return [nc(e, l), rc(l)]
  },
  ac = (e) => {
    const { controlHeightSM: t } = e
    return {
      titleHeight: t,
      nodeHoverBg: e.controlItemBgHover,
      nodeSelectedBg: e.controlItemBgActive,
    }
  },
  lc = (e) => {
    const { colorTextLightSolid: t, colorPrimary: r } = e
    return Object.assign(Object.assign({}, ac(e)), {
      directoryNodeSelectedColor: t,
      directoryNodeSelectedBg: r,
    })
  },
  ic = Sn(
    'Tree',
    (e, t) => {
      let { prefixCls: r } = t
      return [{ [e.componentCls]: Ha(`${r}-checkbox`, e) }, oc(r, e), ja(e)]
    },
    lc,
  ),
  no = 4
function sc(e) {
  const {
      dropPosition: t,
      dropLevelOffset: r,
      prefixCls: n,
      indent: o,
      direction: l = 'ltr',
    } = e,
    d = l === 'ltr' ? 'left' : 'right',
    a = l === 'ltr' ? 'right' : 'left',
    i = { [d]: -r * o + no, [a]: 0 }
  switch (t) {
    case -1:
      i.top = -3
      break
    case 1:
      i.bottom = -3
      break
    default:
      ;(i.bottom = -3), (i[d] = o + no)
      break
  }
  return oe.createElement('div', { style: i, className: `${n}-drop-indicator` })
}
const cc = (e) => {
    const {
        prefixCls: t,
        switcherIcon: r,
        treeNodeProps: n,
        showLine: o,
        switcherLoadingIcon: l,
      } = e,
      { isLeaf: d, expanded: a, loading: i } = n
    if (i)
      return s.isValidElement(l)
        ? l
        : s.createElement(Fa, { className: `${t}-switcher-loading-icon` })
    let c
    if ((o && typeof o == 'object' && (c = o.showLeafIcon), d)) {
      if (!o) return null
      if (typeof c != 'boolean' && c) {
        const u = typeof c == 'function' ? c(n) : c,
          v = `${t}-switcher-line-custom-icon`
        return s.isValidElement(u)
          ? Kr(u, { className: Y(u.props.className || '', v) })
          : u
      }
      return c
        ? s.createElement(Bo, { className: `${t}-switcher-line-icon` })
        : s.createElement('span', { className: `${t}-switcher-leaf-line` })
    }
    const p = `${t}-switcher-icon`,
      f = typeof r == 'function' ? r(n) : r
    return s.isValidElement(f)
      ? Kr(f, { className: Y(f.props.className || '', p) })
      : f !== void 0
        ? f
        : o
          ? a
            ? s.createElement(mi, { className: `${t}-switcher-line-icon` })
            : s.createElement(bi, { className: `${t}-switcher-line-icon` })
          : s.createElement(Gl, { className: p })
  },
  oa = oe.forwardRef((e, t) => {
    var r
    const {
        getPrefixCls: n,
        direction: o,
        virtual: l,
        tree: d,
      } = oe.useContext(Nt),
      {
        prefixCls: a,
        className: i,
        showIcon: c = !1,
        showLine: p,
        switcherIcon: f,
        switcherLoadingIcon: u,
        blockNode: v = !1,
        children: m,
        checkable: b = !1,
        selectable: g = !0,
        draggable: h,
        motion: y,
        style: x,
      } = e,
      C = n('tree', a),
      S = n(),
      R = y ?? Object.assign(Object.assign({}, Wa(S)), { motionAppear: !1 }),
      K = Object.assign(Object.assign({}, e), {
        checkable: b,
        selectable: g,
        showIcon: c,
        motion: R,
        blockNode: v,
        showLine: !!p,
        dropIndicatorRender: sc,
      }),
      [T, N, O] = ic(C),
      [, P] = er(),
      E =
        P.paddingXS / 2 +
        (((r = P.Tree) === null || r === void 0 ? void 0 : r.titleHeight) ||
          P.controlHeightSM),
      $ = oe.useMemo(() => {
        if (!h) return !1
        let w = {}
        switch (typeof h) {
          case 'function':
            w.nodeDraggable = h
            break
          case 'object':
            w = Object.assign({}, h)
            break
        }
        return (
          w.icon !== !1 && (w.icon = w.icon || oe.createElement(fi, null)), w
        )
      }, [h]),
      k = (w) =>
        oe.createElement(cc, {
          prefixCls: C,
          switcherIcon: f,
          switcherLoadingIcon: u,
          treeNodeProps: w,
          showLine: p,
        })
    return T(
      oe.createElement(
        fr,
        Object.assign({ itemHeight: E, ref: t, virtual: l }, K, {
          style: Object.assign(
            Object.assign({}, d == null ? void 0 : d.style),
            x,
          ),
          prefixCls: C,
          className: Y(
            {
              [`${C}-icon-hide`]: !c,
              [`${C}-block-node`]: v,
              [`${C}-unselectable`]: !g,
              [`${C}-rtl`]: o === 'rtl',
            },
            d == null ? void 0 : d.className,
            i,
            N,
            O,
          ),
          direction: o,
          checkable:
            b && oe.createElement('span', { className: `${C}-checkbox-inner` }),
          selectable: g,
          switcherIcon: k,
          draggable: $,
        }),
        m,
      ),
    )
  }),
  ro = 0,
  Bn = 1,
  oo = 2
function pr(e, t, r) {
  const { key: n, children: o } = r
  function l(d) {
    const a = d[n],
      i = d[o]
    t(a, d) !== !1 && pr(i || [], t, r)
  }
  e.forEach(l)
}
function dc(e) {
  let {
    treeData: t,
    expandedKeys: r,
    startKey: n,
    endKey: o,
    fieldNames: l,
  } = e
  const d = []
  let a = ro
  if (n && n === o) return [n]
  if (!n || !o) return []
  function i(c) {
    return c === n || c === o
  }
  return (
    pr(
      t,
      (c) => {
        if (a === oo) return !1
        if (i(c)) {
          if ((d.push(c), a === ro)) a = Bn
          else if (a === Bn) return (a = oo), !1
        } else a === Bn && d.push(c)
        return r.includes(c)
      },
      Vt(l),
    ),
    d
  )
}
function Ln(e, t, r) {
  const n = he(t),
    o = []
  return (
    pr(
      e,
      (l, d) => {
        const a = n.indexOf(l)
        return a !== -1 && (o.push(d), n.splice(a, 1)), !!n.length
      },
      Vt(r),
    ),
    o
  )
}
var ao = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
function uc(e) {
  const { isLeaf: t, expanded: r } = e
  return t
    ? s.createElement(Bo, null)
    : r
      ? s.createElement(Va, null)
      : s.createElement(ci, null)
}
function lo(e) {
  let { treeData: t, children: r } = e
  return t || Oo(r)
}
const fc = (e, t) => {
    var {
        defaultExpandAll: r,
        defaultExpandParent: n,
        defaultExpandedKeys: o,
      } = e,
      l = ao(e, [
        'defaultExpandAll',
        'defaultExpandParent',
        'defaultExpandedKeys',
      ])
    const d = s.useRef(),
      a = s.useRef(),
      i = () => {
        const { keyEntities: T } = or(lo(l))
        let N
        return (
          r
            ? (N = Object.keys(T))
            : n
              ? (N = Fn(l.expandedKeys || o || [], T))
              : (N = l.expandedKeys || o || []),
          N
        )
      },
      [c, p] = s.useState(l.selectedKeys || l.defaultSelectedKeys || []),
      [f, u] = s.useState(() => i())
    s.useEffect(() => {
      'selectedKeys' in l && p(l.selectedKeys)
    }, [l.selectedKeys]),
      s.useEffect(() => {
        'expandedKeys' in l && u(l.expandedKeys)
      }, [l.expandedKeys])
    const v = (T, N) => {
        var O
        return (
          'expandedKeys' in l || u(T),
          (O = l.onExpand) === null || O === void 0 ? void 0 : O.call(l, T, N)
        )
      },
      m = (T, N) => {
        var O
        const { multiple: P, fieldNames: E } = l,
          { node: $, nativeEvent: k } = N,
          { key: w = '' } = $,
          B = lo(l),
          L = Object.assign(Object.assign({}, N), { selected: !0 }),
          M =
            (k == null ? void 0 : k.ctrlKey) ||
            (k == null ? void 0 : k.metaKey),
          D = k == null ? void 0 : k.shiftKey
        let X
        P && M
          ? ((X = T),
            (d.current = w),
            (a.current = X),
            (L.selectedNodes = Ln(B, X, E)))
          : P && D
            ? ((X = Array.from(
                new Set(
                  [].concat(
                    he(a.current || []),
                    he(
                      dc({
                        treeData: B,
                        expandedKeys: f,
                        startKey: w,
                        endKey: d.current,
                        fieldNames: E,
                      }),
                    ),
                  ),
                ),
              )),
              (L.selectedNodes = Ln(B, X, E)))
            : ((X = [w]),
              (d.current = w),
              (a.current = X),
              (L.selectedNodes = Ln(B, X, E))),
          (O = l.onSelect) === null || O === void 0 || O.call(l, X, L),
          'selectedKeys' in l || p(X)
      },
      { getPrefixCls: b, direction: g } = s.useContext(Nt),
      {
        prefixCls: h,
        className: y,
        showIcon: x = !0,
        expandAction: C = 'click',
      } = l,
      S = ao(l, ['prefixCls', 'className', 'showIcon', 'expandAction']),
      R = b('tree', h),
      K = Y(`${R}-directory`, { [`${R}-directory-rtl`]: g === 'rtl' }, y)
    return s.createElement(
      oa,
      Object.assign({ icon: uc, ref: t, blockNode: !0 }, S, {
        showIcon: x,
        expandAction: C,
        prefixCls: R,
        className: K,
        expandedKeys: f,
        selectedKeys: c,
        onSelect: m,
        onExpand: v,
      }),
    )
  },
  pc = s.forwardRef(fc),
  vr = oa
vr.DirectoryTree = pc
vr.TreeNode = qt
const io = (e) => {
    const {
      value: t,
      filterSearch: r,
      tablePrefixCls: n,
      locale: o,
      onChange: l,
    } = e
    return r
      ? s.createElement(
          'div',
          { className: `${n}-filter-dropdown-search` },
          s.createElement(qa, {
            prefix: s.createElement(Xa, null),
            placeholder: o.filterSearchPlaceholder,
            onChange: l,
            value: t,
            htmlSize: 1,
            className: `${n}-filter-dropdown-search-input`,
          }),
        )
      : null
  },
  vc = (e) => {
    const { keyCode: t } = e
    t === Je.ENTER && e.stopPropagation()
  },
  mc = s.forwardRef((e, t) =>
    s.createElement(
      'div',
      {
        className: e.className,
        onClick: (r) => r.stopPropagation(),
        onKeyDown: vc,
        ref: t,
      },
      e.children,
    ),
  )
function Ft(e) {
  let t = []
  return (
    (e || []).forEach((r) => {
      let { value: n, children: o } = r
      t.push(n), o && (t = [].concat(he(t), he(Ft(o))))
    }),
    t
  )
}
function gc(e) {
  return e.some((t) => {
    let { children: r } = t
    return r
  })
}
function aa(e, t) {
  return typeof t == 'string' || typeof t == 'number'
    ? t == null
      ? void 0
      : t.toString().toLowerCase().includes(e.trim().toLowerCase())
    : !1
}
function la(e) {
  let {
    filters: t,
    prefixCls: r,
    filteredKeys: n,
    filterMultiple: o,
    searchValue: l,
    filterSearch: d,
  } = e
  return t.map((a, i) => {
    const c = String(a.value)
    if (a.children)
      return {
        key: c || i,
        label: a.text,
        popupClassName: `${r}-dropdown-submenu`,
        children: la({
          filters: a.children,
          prefixCls: r,
          filteredKeys: n,
          filterMultiple: o,
          searchValue: l,
          filterSearch: d,
        }),
      }
    const p = o ? yn : dn,
      f = {
        key: a.value !== void 0 ? c : i,
        label: s.createElement(
          s.Fragment,
          null,
          s.createElement(p, { checked: n.includes(c) }),
          s.createElement('span', null, a.text),
        ),
      }
    return l.trim()
      ? typeof d == 'function'
        ? d(l, a)
          ? f
          : null
        : aa(l, a.text)
          ? f
          : null
      : f
  })
}
function zn(e) {
  return e || []
}
const hc = (e) => {
    var t, r
    const {
        tablePrefixCls: n,
        prefixCls: o,
        column: l,
        dropdownPrefixCls: d,
        columnKey: a,
        filterOnClose: i,
        filterMultiple: c,
        filterMode: p = 'menu',
        filterSearch: f = !1,
        filterState: u,
        triggerFilter: v,
        locale: m,
        children: b,
        getPopupContainer: g,
        rootClassName: h,
      } = e,
      {
        filterDropdownOpen: y,
        onFilterDropdownOpenChange: x,
        filterResetToDefaultFilteredValue: C,
        defaultFilteredValue: S,
        filterDropdownVisible: R,
        onFilterDropdownVisibleChange: K,
      } = l,
      [T, N] = s.useState(!1),
      O = !!(
        u &&
        ((!((t = u.filteredKeys) === null || t === void 0) && t.length) ||
          u.forceFiltered)
      ),
      P = (W) => {
        N(W), x == null || x(W), K == null || K(W)
      },
      E = (r = y ?? R) !== null && r !== void 0 ? r : T,
      $ = u == null ? void 0 : u.filteredKeys,
      [k, w] = Fs(zn($)),
      B = (W) => {
        let { selectedKeys: de } = W
        w(de)
      },
      L = (W, de) => {
        let { node: G, checked: pe } = de
        B(
          c
            ? { selectedKeys: W }
            : { selectedKeys: pe && G.key ? [G.key] : [] },
        )
      }
    s.useEffect(() => {
      T && B({ selectedKeys: zn($) })
    }, [$])
    const [M, D] = s.useState([]),
      X = (W) => {
        D(W)
      },
      [_, ae] = s.useState(''),
      te = (W) => {
        const { value: de } = W.target
        ae(de)
      }
    s.useEffect(() => {
      T || ae('')
    }, [T])
    const Ee = (W) => {
        const de = W != null && W.length ? W : null
        if (
          (de === null && (!u || !u.filteredKeys)) ||
          cn(de, u == null ? void 0 : u.filteredKeys, !0)
        )
          return null
        v({ column: l, key: a, filteredKeys: de })
      },
      xe = () => {
        P(!1), Ee(k())
      },
      Me = function () {
        let { confirm: W, closeDropdown: de } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { confirm: !1, closeDropdown: !1 }
        W && Ee([]),
          de && P(!1),
          ae(''),
          w(C ? (S || []).map((G) => String(G)) : [])
      },
      J = function () {
        let { closeDropdown: W } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { closeDropdown: !0 }
        W && P(!1), Ee(k())
      },
      le = (W, de) => {
        de.source === 'trigger' &&
          (W && $ !== void 0 && w(zn($)),
          P(W),
          !W && !l.filterDropdown && i && xe())
      },
      ke = Y({ [`${d}-menu-without-submenu`]: !gc(l.filters || []) }),
      Z = (W) => {
        if (W.target.checked) {
          const de = Ft(l == null ? void 0 : l.filters).map((G) => String(G))
          w(de)
        } else w([])
      },
      U = (W) => {
        let { filters: de } = W
        return (de || []).map((G, pe) => {
          const ne = String(G.value),
            Se = { title: G.text, key: G.value !== void 0 ? ne : String(pe) }
          return G.children && (Se.children = U({ filters: G.children })), Se
        })
      },
      A = (W) => {
        var de
        return Object.assign(Object.assign({}, W), {
          text: W.title,
          value: W.key,
          children:
            ((de = W.children) === null || de === void 0
              ? void 0
              : de.map((G) => A(G))) || [],
        })
      }
    let F
    const { direction: q, renderEmpty: ie } = s.useContext(Nt)
    if (typeof l.filterDropdown == 'function')
      F = l.filterDropdown({
        prefixCls: `${d}-custom`,
        setSelectedKeys: (W) => B({ selectedKeys: W }),
        selectedKeys: k(),
        confirm: J,
        clearFilters: Me,
        filters: l.filters,
        visible: E,
        close: () => {
          P(!1)
        },
      })
    else if (l.filterDropdown) F = l.filterDropdown
    else {
      const W = k() || [],
        de = () => {
          var pe
          const ne =
            (pe = ie == null ? void 0 : ie('Table.filter')) !== null &&
            pe !== void 0
              ? pe
              : s.createElement(Dr, {
                  image: Dr.PRESENTED_IMAGE_SIMPLE,
                  description: m.filterEmptyText,
                  imageStyle: { height: 24 },
                  style: { margin: 0, padding: '16px 0' },
                })
          if ((l.filters || []).length === 0) return ne
          if (p === 'tree')
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(io, {
                filterSearch: f,
                value: _,
                onChange: te,
                tablePrefixCls: n,
                locale: m,
              }),
              s.createElement(
                'div',
                { className: `${n}-filter-dropdown-tree` },
                c
                  ? s.createElement(
                      yn,
                      {
                        checked: W.length === Ft(l.filters).length,
                        indeterminate:
                          W.length > 0 && W.length < Ft(l.filters).length,
                        className: `${n}-filter-dropdown-checkall`,
                        onChange: Z,
                      },
                      m.filterCheckall,
                    )
                  : null,
                s.createElement(vr, {
                  checkable: !0,
                  selectable: !1,
                  blockNode: !0,
                  multiple: c,
                  checkStrictly: !c,
                  className: `${d}-menu`,
                  onCheck: L,
                  checkedKeys: W,
                  selectedKeys: W,
                  showIcon: !1,
                  treeData: U({ filters: l.filters }),
                  autoExpandParent: !0,
                  defaultExpandAll: !0,
                  filterTreeNode: _.trim()
                    ? (be) =>
                        typeof f == 'function' ? f(_, A(be)) : aa(_, be.title)
                    : void 0,
                }),
              ),
            )
          const Se = la({
              filters: l.filters || [],
              filterSearch: f,
              prefixCls: o,
              filteredKeys: k(),
              filterMultiple: c,
              searchValue: _,
            }),
            we = Se.every((be) => be === null)
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(io, {
              filterSearch: f,
              value: _,
              onChange: te,
              tablePrefixCls: n,
              locale: m,
            }),
            we
              ? ne
              : s.createElement(Ua, {
                  selectable: !0,
                  multiple: c,
                  prefixCls: `${d}-menu`,
                  className: ke,
                  onSelect: B,
                  onDeselect: B,
                  selectedKeys: W,
                  getPopupContainer: g,
                  openKeys: M,
                  onOpenChange: X,
                  items: Se,
                }),
          )
        },
        G = () =>
          C
            ? cn(
                (S || []).map((pe) => String(pe)),
                W,
                !0,
              )
            : W.length === 0
      F = s.createElement(
        s.Fragment,
        null,
        de(),
        s.createElement(
          'div',
          { className: `${o}-dropdown-btns` },
          s.createElement(
            Pr,
            { type: 'link', size: 'small', disabled: G(), onClick: () => Me() },
            m.filterReset,
          ),
          s.createElement(
            Pr,
            { type: 'primary', size: 'small', onClick: xe },
            m.filterConfirm,
          ),
        ),
      )
    }
    l.filterDropdown && (F = s.createElement(Ga, { selectable: void 0 }, F))
    const V = () => s.createElement(mc, { className: `${o}-dropdown` }, F)
    let ee
    return (
      typeof l.filterIcon == 'function'
        ? (ee = l.filterIcon(O))
        : l.filterIcon
          ? (ee = l.filterIcon)
          : (ee = s.createElement(li, null)),
      s.createElement(
        'div',
        { className: `${o}-column` },
        s.createElement('span', { className: `${n}-column-title` }, b),
        s.createElement(
          So,
          {
            dropdownRender: V,
            trigger: ['click'],
            open: E,
            onOpenChange: le,
            getPopupContainer: g,
            placement: q === 'rtl' ? 'bottomLeft' : 'bottomRight',
            rootClassName: h,
          },
          s.createElement(
            'span',
            {
              role: 'button',
              tabIndex: -1,
              className: Y(`${o}-trigger`, { active: O }),
              onClick: (W) => {
                W.stopPropagation()
              },
            },
            ee,
          ),
        ),
      )
    )
  },
  Un = (e, t, r) => {
    let n = []
    return (
      (e || []).forEach((o, l) => {
        var d
        const a = Yt(l, r)
        if (o.filters || 'filterDropdown' in o || 'onFilter' in o)
          if ('filteredValue' in o) {
            let i = o.filteredValue
            'filterDropdown' in o ||
              (i =
                (d = i == null ? void 0 : i.map(String)) !== null &&
                d !== void 0
                  ? d
                  : i),
              n.push({
                column: o,
                key: Et(o, a),
                filteredKeys: i,
                forceFiltered: o.filtered,
              })
          } else
            n.push({
              column: o,
              key: Et(o, a),
              filteredKeys:
                t && o.defaultFilteredValue ? o.defaultFilteredValue : void 0,
              forceFiltered: o.filtered,
            })
        'children' in o && (n = [].concat(he(n), he(Un(o.children, t, a))))
      }),
      n
    )
  }
function ia(e, t, r, n, o, l, d, a, i) {
  return r.map((c, p) => {
    const f = Yt(p, a),
      {
        filterOnClose: u = !0,
        filterMultiple: v = !0,
        filterMode: m,
        filterSearch: b,
      } = c
    let g = c
    if (g.filters || g.filterDropdown) {
      const h = Et(g, f),
        y = n.find((x) => {
          let { key: C } = x
          return h === C
        })
      g = Object.assign(Object.assign({}, g), {
        title: (x) =>
          s.createElement(
            hc,
            {
              tablePrefixCls: e,
              prefixCls: `${e}-filter`,
              dropdownPrefixCls: t,
              column: g,
              columnKey: h,
              filterState: y,
              filterOnClose: u,
              filterMultiple: v,
              filterMode: m,
              filterSearch: b,
              triggerFilter: l,
              locale: o,
              getPopupContainer: d,
              rootClassName: i,
            },
            kn(c.title, x),
          ),
      })
    }
    return (
      'children' in g &&
        (g = Object.assign(Object.assign({}, g), {
          children: ia(e, t, g.children, n, o, l, d, f, i),
        })),
      g
    )
  })
}
const so = (e) => {
    const t = {}
    return (
      e.forEach((r) => {
        let { key: n, filteredKeys: o, column: l } = r
        const d = n,
          { filters: a, filterDropdown: i } = l
        if (i) t[d] = o || null
        else if (Array.isArray(o)) {
          const c = Ft(a)
          t[d] = c.filter((p) => o.includes(String(p)))
        } else t[d] = null
      }),
      t
    )
  },
  Gn = (e, t, r) =>
    t.reduce((o, l) => {
      const {
        column: { onFilter: d, filters: a },
        filteredKeys: i,
      } = l
      return d && i && i.length
        ? o
            .map((c) => Object.assign({}, c))
            .filter((c) =>
              i.some((p) => {
                const f = Ft(a),
                  u = f.findIndex((m) => String(m) === String(p)),
                  v = u !== -1 ? f[u] : p
                return c[r] && (c[r] = Gn(c[r], t, r)), d(v, c)
              }),
            )
        : o
    }, e),
  sa = (e) =>
    e.flatMap((t) =>
      'children' in t ? [t].concat(he(sa(t.children || []))) : [t],
    ),
  bc = (e) => {
    const {
      prefixCls: t,
      dropdownPrefixCls: r,
      mergedColumns: n,
      onFilterChange: o,
      getPopupContainer: l,
      locale: d,
      rootClassName: a,
    } = e
    rr()
    const i = s.useMemo(() => sa(n || []), [n]),
      [c, p] = s.useState(() => Un(i, !0)),
      f = s.useMemo(() => {
        const b = Un(i, !1)
        if (b.length === 0) return b
        let g = !0
        if (
          (b.forEach((h) => {
            let { filteredKeys: y } = h
            y !== void 0 && (g = !1)
          }),
          g)
        ) {
          const h = (i || []).map((y, x) => Et(y, Yt(x)))
          return c
            .filter((y) => {
              let { key: x } = y
              return h.includes(x)
            })
            .map((y) => {
              const x = i[h.findIndex((C) => C === y.key)]
              return Object.assign(Object.assign({}, y), {
                column: Object.assign(Object.assign({}, y.column), x),
                forceFiltered: x.filtered,
              })
            })
        }
        return b
      }, [i, c]),
      u = s.useMemo(() => so(f), [f]),
      v = (b) => {
        const g = f.filter((h) => {
          let { key: y } = h
          return y !== b.key
        })
        g.push(b), p(g), o(so(g), g)
      }
    return [(b) => ia(t, r, b, f, d, v, l, void 0, a), f, u]
  },
  yc = (e, t, r) => {
    const n = s.useRef({})
    function o(l) {
      var d
      if (
        !n.current ||
        n.current.data !== e ||
        n.current.childrenColumnName !== t ||
        n.current.getRowKey !== r
      ) {
        let i = function (c) {
          c.forEach((p, f) => {
            const u = r(p, f)
            a.set(u, p), p && typeof p == 'object' && t in p && i(p[t] || [])
          })
        }
        const a = new Map()
        i(e),
          (n.current = {
            data: e,
            childrenColumnName: t,
            kvMap: a,
            getRowKey: r,
          })
      }
      return (d = n.current.kvMap) === null || d === void 0 ? void 0 : d.get(l)
    }
    return [o]
  }
var xc = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const ca = 10
function Cc(e, t) {
  const r = { current: e.current, pageSize: e.pageSize }
  return (
    Object.keys(t && typeof t == 'object' ? t : {}).forEach((o) => {
      const l = e[o]
      typeof l != 'function' && (r[o] = l)
    }),
    r
  )
}
function Sc(e, t, r) {
  const n = r && typeof r == 'object' ? r : {},
    { total: o = 0 } = n,
    l = xc(n, ['total']),
    [d, a] = s.useState(() => ({
      current: 'defaultCurrent' in l ? l.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in l ? l.defaultPageSize : ca,
    })),
    i = El(d, l, { total: o > 0 ? o : e }),
    c = Math.ceil((o || e) / i.pageSize)
  i.current > c && (i.current = c || 1)
  const p = (u, v) => {
      a({ current: u ?? 1, pageSize: v || i.pageSize })
    },
    f = (u, v) => {
      var m
      r && ((m = r.onChange) === null || m === void 0 || m.call(r, u, v)),
        p(u, v),
        t(u, v || (i == null ? void 0 : i.pageSize))
    }
  return r === !1
    ? [{}, () => {}]
    : [Object.assign(Object.assign({}, i), { onChange: f }), p]
}
const gn = 'ascend',
  _n = 'descend',
  Cn = (e) =>
    typeof e.sorter == 'object' && typeof e.sorter.multiple == 'number'
      ? e.sorter.multiple
      : !1,
  co = (e) =>
    typeof e == 'function'
      ? e
      : e && typeof e == 'object' && e.compare
        ? e.compare
        : !1,
  wc = (e, t) => (t ? e[e.indexOf(t) + 1] : e[0]),
  Yn = (e, t, r) => {
    let n = []
    const o = (l, d) => {
      n.push({
        column: l,
        key: Et(l, d),
        multiplePriority: Cn(l),
        sortOrder: l.sortOrder,
      })
    }
    return (
      (e || []).forEach((l, d) => {
        const a = Yt(d, r)
        l.children
          ? ('sortOrder' in l && o(l, a),
            (n = [].concat(he(n), he(Yn(l.children, t, a)))))
          : l.sorter &&
            ('sortOrder' in l
              ? o(l, a)
              : t &&
                l.defaultSortOrder &&
                n.push({
                  column: l,
                  key: Et(l, a),
                  multiplePriority: Cn(l),
                  sortOrder: l.defaultSortOrder,
                }))
      }),
      n
    )
  },
  da = (e, t, r, n, o, l, d, a) =>
    (t || []).map((c, p) => {
      const f = Yt(p, a)
      let u = c
      if (u.sorter) {
        const v = u.sortDirections || o,
          m = u.showSorterTooltip === void 0 ? d : u.showSorterTooltip,
          b = Et(u, f),
          g = r.find((N) => {
            let { key: O } = N
            return O === b
          }),
          h = g ? g.sortOrder : null,
          y = wc(v, h)
        let x
        if (c.sortIcon) x = c.sortIcon({ sortOrder: h })
        else {
          const N =
              v.includes(gn) &&
              s.createElement(ti, {
                className: Y(`${e}-column-sorter-up`, { active: h === gn }),
              }),
            O =
              v.includes(_n) &&
              s.createElement(Ql, {
                className: Y(`${e}-column-sorter-down`, { active: h === _n }),
              })
          x = s.createElement(
            'span',
            {
              className: Y(`${e}-column-sorter`, {
                [`${e}-column-sorter-full`]: !!(N && O),
              }),
            },
            s.createElement(
              'span',
              { className: `${e}-column-sorter-inner`, 'aria-hidden': 'true' },
              N,
              O,
            ),
          )
        }
        const { cancelSort: C, triggerAsc: S, triggerDesc: R } = l || {}
        let K = C
        y === _n ? (K = R) : y === gn && (K = S)
        const T =
          typeof m == 'object' ? Object.assign({ title: K }, m) : { title: K }
        u = Object.assign(Object.assign({}, u), {
          className: Y(u.className, { [`${e}-column-sort`]: h }),
          title: (N) => {
            const O = `${e}-column-sorters`,
              P = s.createElement(
                'span',
                { className: `${e}-column-title` },
                kn(c.title, N),
              ),
              E = s.createElement('div', { className: O }, P, x)
            return m
              ? typeof m != 'boolean' &&
                (m == null ? void 0 : m.target) === 'sorter-icon'
                ? s.createElement(
                    'div',
                    {
                      className: `${O} ${e}-column-sorters-tooltip-target-sorter`,
                    },
                    P,
                    s.createElement(Tr, Object.assign({}, T), x),
                  )
                : s.createElement(Tr, Object.assign({}, T), E)
              : E
          },
          onHeaderCell: (N) => {
            var O
            const P =
                ((O = c.onHeaderCell) === null || O === void 0
                  ? void 0
                  : O.call(c, N)) || {},
              E = P.onClick,
              $ = P.onKeyDown
            ;(P.onClick = (B) => {
              n({ column: c, key: b, sortOrder: y, multiplePriority: Cn(c) }),
                E == null || E(B)
            }),
              (P.onKeyDown = (B) => {
                B.keyCode === Je.ENTER &&
                  (n({
                    column: c,
                    key: b,
                    sortOrder: y,
                    multiplePriority: Cn(c),
                  }),
                  $ == null || $(B))
              })
            const k = As(c.title, {}),
              w = k == null ? void 0 : k.toString()
            return (
              h
                ? (P['aria-sort'] = h === 'ascend' ? 'ascending' : 'descending')
                : (P['aria-label'] = w || ''),
              (P.className = Y(P.className, `${e}-column-has-sorters`)),
              (P.tabIndex = 0),
              c.ellipsis && (P.title = (k ?? '').toString()),
              P
            )
          },
        })
      }
      return (
        'children' in u &&
          (u = Object.assign(Object.assign({}, u), {
            children: da(e, u.children, r, n, o, l, d, f),
          })),
        u
      )
    }),
  uo = (e) => {
    const { column: t, sortOrder: r } = e
    return { column: t, order: r, field: t.dataIndex, columnKey: t.key }
  },
  fo = (e) => {
    const t = e
      .filter((r) => {
        let { sortOrder: n } = r
        return n
      })
      .map(uo)
    if (t.length === 0 && e.length) {
      const r = e.length - 1
      return Object.assign(Object.assign({}, uo(e[r])), {
        column: void 0,
        order: void 0,
        field: void 0,
        columnKey: void 0,
      })
    }
    return t.length <= 1 ? t[0] || {} : t
  },
  Jn = (e, t, r) => {
    const n = t.slice().sort((d, a) => a.multiplePriority - d.multiplePriority),
      o = e.slice(),
      l = n.filter((d) => {
        let {
          column: { sorter: a },
          sortOrder: i,
        } = d
        return co(a) && i
      })
    return l.length
      ? o
          .sort((d, a) => {
            for (let i = 0; i < l.length; i += 1) {
              const c = l[i],
                {
                  column: { sorter: p },
                  sortOrder: f,
                } = c,
                u = co(p)
              if (u && f) {
                const v = u(d, a, f)
                if (v !== 0) return f === gn ? v : -v
              }
            }
            return 0
          })
          .map((d) => {
            const a = d[r]
            return a
              ? Object.assign(Object.assign({}, d), { [r]: Jn(a, t, r) })
              : d
          })
      : o
  },
  $c = (e) => {
    const {
        prefixCls: t,
        mergedColumns: r,
        sortDirections: n,
        tableLocale: o,
        showSorterTooltip: l,
        onSorterChange: d,
      } = e,
      [a, i] = s.useState(Yn(r, !0)),
      c = (b, g) => {
        const h = []
        return (
          b.forEach((y, x) => {
            const C = Yt(x, g)
            if ((h.push(Et(y, C)), Array.isArray(y.children))) {
              const S = c(y.children, C)
              h.push.apply(h, he(S))
            }
          }),
          h
        )
      },
      p = s.useMemo(() => {
        let b = !0
        const g = Yn(r, !1)
        if (!g.length) {
          const C = c(r)
          return a.filter((S) => {
            let { key: R } = S
            return C.includes(R)
          })
        }
        const h = []
        function y(C) {
          b
            ? h.push(C)
            : h.push(Object.assign(Object.assign({}, C), { sortOrder: null }))
        }
        let x = null
        return (
          g.forEach((C) => {
            x === null
              ? (y(C),
                C.sortOrder &&
                  (C.multiplePriority === !1 ? (b = !1) : (x = !0)))
              : ((x && C.multiplePriority !== !1) || (b = !1), y(C))
          }),
          h
        )
      }, [r, a]),
      f = s.useMemo(() => {
        var b, g
        const h = p.map((y) => {
          let { column: x, sortOrder: C } = y
          return { column: x, order: C }
        })
        return {
          sortColumns: h,
          sortColumn: (b = h[0]) === null || b === void 0 ? void 0 : b.column,
          sortOrder: (g = h[0]) === null || g === void 0 ? void 0 : g.order,
        }
      }, [p]),
      u = (b) => {
        let g
        b.multiplePriority === !1 || !p.length || p[0].multiplePriority === !1
          ? (g = [b])
          : (g = [].concat(
              he(
                p.filter((h) => {
                  let { key: y } = h
                  return y !== b.key
                }),
              ),
              [b],
            )),
          i(g),
          d(fo(g), g)
      }
    return [(b) => da(t, b, p, u, n, o, l), p, f, () => fo(p)]
  },
  ua = (e, t) =>
    e.map((n) => {
      const o = Object.assign({}, n)
      return (
        (o.title = kn(n.title, t)),
        'children' in o && (o.children = ua(o.children, t)),
        o
      )
    }),
  Ec = (e) => [s.useCallback((r) => ua(r, e), [e])],
  Nc = Yo((e, t) => {
    const { _renderTimes: r } = e,
      { _renderTimes: n } = t
    return r !== n
  }),
  kc = Qo((e, t) => {
    const { _renderTimes: r } = e,
      { _renderTimes: n } = t
    return r !== n
  }),
  Rc = (e) => {
    const {
        componentCls: t,
        lineWidth: r,
        lineType: n,
        tableBorderColor: o,
        tableHeaderBg: l,
        tablePaddingVertical: d,
        tablePaddingHorizontal: a,
        calc: i,
      } = e,
      c = `${z(r)} ${n} ${o}`,
      p = (f, u, v) => ({
        [`&${t}-${f}`]: {
          [`> ${t}-container`]: {
            [`> ${t}-content, > ${t}-body`]: {
              '\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ':
                {
                  [`> ${t}-expanded-row-fixed`]: {
                    margin: `${z(i(u).mul(-1).equal())}
              ${z(i(i(v).add(r)).mul(-1).equal())}`,
                  },
                },
            },
          },
        },
      })
    return {
      [`${t}-wrapper`]: {
        [`${t}${t}-bordered`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                [`> ${t}-title`]: { border: c, borderBottom: 0 },
                [`> ${t}-container`]: {
                  borderInlineStart: c,
                  borderTop: c,
                  [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                    '> table': {
                      '\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ':
                        { borderInlineEnd: c },
                      '> thead': {
                        '> tr:not(:last-child) > th': { borderBottom: c },
                        '> tr > th::before': {
                          backgroundColor: 'transparent !important',
                        },
                      },
                      '\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ':
                        {
                          [`> ${t}-cell-fix-right-first::after`]: {
                            borderInlineEnd: c,
                          },
                        },
                      '\n                > tbody > tr > th,\n                > tbody > tr > td\n              ':
                        {
                          [`> ${t}-expanded-row-fixed`]: {
                            margin: `${z(i(d).mul(-1).equal())} ${z(i(i(a).add(r)).mul(-1).equal())}`,
                            '&::after': {
                              position: 'absolute',
                              top: 0,
                              insetInlineEnd: r,
                              bottom: 0,
                              borderInlineEnd: c,
                              content: '""',
                            },
                          },
                        },
                    },
                  },
                },
                [`&${t}-scroll-horizontal`]: {
                  [`> ${t}-container > ${t}-body`]: {
                    '> table > tbody': {
                      [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: { '> th, > td': { borderInlineEnd: 0 } },
                    },
                  },
                },
              },
              p(
                'middle',
                e.tablePaddingVerticalMiddle,
                e.tablePaddingHorizontalMiddle,
              ),
            ),
            p(
              'small',
              e.tablePaddingVerticalSmall,
              e.tablePaddingHorizontalSmall,
            ),
          ),
          { [`> ${t}-footer`]: { border: c, borderTop: 0 } },
        ),
        [`${t}-cell`]: {
          [`${t}-container:first-child`]: { borderTop: 0 },
          '&-scrollbar:not([rowspan])': {
            boxShadow: `0 ${z(r)} 0 ${z(r)} ${l}`,
          },
        },
        [`${t}-bordered ${t}-cell-scrollbar`]: { borderInlineEnd: c },
      },
    }
  },
  Ic = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, Ya), {
          wordBreak: 'keep-all',
          [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
            overflow: 'visible',
            [`${t}-cell-content`]: {
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
          [`${t}-column-title`]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordBreak: 'keep-all',
          },
        }),
      },
    }
  },
  Oc = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody > tr${t}-placeholder`]: {
          textAlign: 'center',
          color: e.colorTextDisabled,
          '\n          &:hover > th,\n          &:hover > td,\n        ': {
            background: e.colorBgContainer,
          },
        },
      },
    }
  },
  Kc = (e) => {
    const {
        componentCls: t,
        antCls: r,
        motionDurationSlow: n,
        lineWidth: o,
        paddingXS: l,
        lineType: d,
        tableBorderColor: a,
        tableExpandIconBg: i,
        tableExpandColumnWidth: c,
        borderRadius: p,
        tablePaddingVertical: f,
        tablePaddingHorizontal: u,
        tableExpandedRowBg: v,
        paddingXXS: m,
        expandIconMarginTop: b,
        expandIconSize: g,
        expandIconHalfInner: h,
        expandIconScale: y,
        calc: x,
      } = e,
      C = `${z(o)} ${d} ${a}`,
      S = x(m).sub(o).equal()
    return {
      [`${t}-wrapper`]: {
        [`${t}-expand-icon-col`]: { width: c },
        [`${t}-row-expand-icon-cell`]: {
          textAlign: 'center',
          [`${t}-row-expand-icon`]: {
            display: 'inline-flex',
            float: 'none',
            verticalAlign: 'sub',
          },
        },
        [`${t}-row-indent`]: { height: 1, float: 'left' },
        [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, Ja(e)), {
          position: 'relative',
          float: 'left',
          width: g,
          height: g,
          color: 'inherit',
          lineHeight: z(g),
          background: i,
          border: C,
          borderRadius: p,
          transform: `scale(${y})`,
          '&:focus, &:hover, &:active': { borderColor: 'currentcolor' },
          '&::before, &::after': {
            position: 'absolute',
            background: 'currentcolor',
            transition: `transform ${n} ease-out`,
            content: '""',
          },
          '&::before': {
            top: h,
            insetInlineEnd: S,
            insetInlineStart: S,
            height: o,
          },
          '&::after': {
            top: S,
            bottom: S,
            insetInlineStart: h,
            width: o,
            transform: 'rotate(90deg)',
          },
          '&-collapsed::before': { transform: 'rotate(-180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
          '&-spaced': {
            '&::before, &::after': { display: 'none', content: 'none' },
            background: 'transparent',
            border: 0,
            visibility: 'hidden',
          },
        }),
        [`${t}-row-indent + ${t}-row-expand-icon`]: {
          marginTop: b,
          marginInlineEnd: l,
        },
        [`tr${t}-expanded-row`]: {
          '&, &:hover': { '> th, > td': { background: v } },
          [`${r}-descriptions-view`]: {
            display: 'flex',
            table: { flex: 'auto', width: '100%' },
          },
        },
        [`${t}-expanded-row-fixed`]: {
          position: 'relative',
          margin: `${z(x(f).mul(-1).equal())} ${z(x(u).mul(-1).equal())}`,
          padding: `${z(f)} ${z(u)}`,
        },
      },
    }
  },
  Pc = (e) => {
    const {
        componentCls: t,
        antCls: r,
        iconCls: n,
        tableFilterDropdownWidth: o,
        tableFilterDropdownSearchWidth: l,
        paddingXXS: d,
        paddingXS: a,
        colorText: i,
        lineWidth: c,
        lineType: p,
        tableBorderColor: f,
        headerIconColor: u,
        fontSizeSM: v,
        tablePaddingHorizontal: m,
        borderRadius: b,
        motionDurationSlow: g,
        colorTextDescription: h,
        colorPrimary: y,
        tableHeaderFilterActiveBg: x,
        colorTextDisabled: C,
        tableFilterDropdownBg: S,
        tableFilterDropdownHeight: R,
        controlItemBgHover: K,
        controlItemBgActive: T,
        boxShadowSecondary: N,
        filterDropdownMenuBg: O,
        calc: P,
      } = e,
      E = `${r}-dropdown`,
      $ = `${t}-filter-dropdown`,
      k = `${r}-tree`,
      w = `${z(c)} ${p} ${f}`
    return [
      {
        [`${t}-wrapper`]: {
          [`${t}-filter-column`]: {
            display: 'flex',
            justifyContent: 'space-between',
          },
          [`${t}-filter-trigger`]: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginBlock: P(d).mul(-1).equal(),
            marginInline: `${z(d)} ${z(P(m).div(2).mul(-1).equal())}`,
            padding: `0 ${z(d)}`,
            color: u,
            fontSize: v,
            borderRadius: b,
            cursor: 'pointer',
            transition: `all ${g}`,
            '&:hover': { color: h, background: x },
            '&.active': { color: y },
          },
        },
      },
      {
        [`${r}-dropdown`]: {
          [$]: Object.assign(Object.assign({}, Lt(e)), {
            minWidth: o,
            backgroundColor: S,
            borderRadius: b,
            boxShadow: N,
            overflow: 'hidden',
            [`${E}-menu`]: {
              maxHeight: R,
              overflowX: 'hidden',
              border: 0,
              boxShadow: 'none',
              borderRadius: 'unset',
              backgroundColor: O,
              '&:empty::after': {
                display: 'block',
                padding: `${z(a)} 0`,
                color: C,
                fontSize: v,
                textAlign: 'center',
                content: '"Not Found"',
              },
            },
            [`${$}-tree`]: {
              paddingBlock: `${z(a)} 0`,
              paddingInline: a,
              [k]: { padding: 0 },
              [`${k}-treenode ${k}-node-content-wrapper:hover`]: {
                backgroundColor: K,
              },
              [`${k}-treenode-checkbox-checked ${k}-node-content-wrapper`]: {
                '&, &:hover': { backgroundColor: T },
              },
            },
            [`${$}-search`]: {
              padding: a,
              borderBottom: w,
              '&-input': { input: { minWidth: l }, [n]: { color: C } },
            },
            [`${$}-checkall`]: {
              width: '100%',
              marginBottom: d,
              marginInlineStart: d,
            },
            [`${$}-btns`]: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: `${z(P(a).sub(c).equal())} ${z(a)}`,
              overflow: 'hidden',
              borderTop: w,
            },
          }),
        },
      },
      {
        [`${r}-dropdown ${$}, ${$}-submenu`]: {
          [`${r}-checkbox-wrapper + span`]: { paddingInlineStart: a, color: i },
          '> ul': {
            maxHeight: 'calc(100vh - 130px)',
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        },
      },
    ]
  },
  Tc = (e) => {
    const {
        componentCls: t,
        lineWidth: r,
        colorSplit: n,
        motionDurationSlow: o,
        zIndexTableFixed: l,
        tableBg: d,
        zIndexTableSticky: a,
        calc: i,
      } = e,
      c = n
    return {
      [`${t}-wrapper`]: {
        [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: { position: 'sticky !important', zIndex: l, background: d },
        [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
          position: 'absolute',
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: i(r).mul(-1).equal(),
          width: 30,
          transform: 'translateX(100%)',
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: 'none',
        },
        [`${t}-cell-fix-left-all::after`]: { display: 'none' },
        [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
          position: 'absolute',
          top: 0,
          bottom: i(r).mul(-1).equal(),
          left: { _skip_check_: !0, value: 0 },
          width: 30,
          transform: 'translateX(-100%)',
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: 'none',
        },
        [`${t}-container`]: {
          position: 'relative',
          '&::before, &::after': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: i(a).add(1).equal({ unit: !1 }),
            width: 30,
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: 'none',
          },
          '&::before': { insetInlineStart: 0 },
          '&::after': { insetInlineEnd: 0 },
        },
        [`${t}-ping-left`]: {
          [`&:not(${t}-has-fix-left) ${t}-container::before`]: {
            boxShadow: `inset 10px 0 8px -8px ${c}`,
          },
          [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: { boxShadow: `inset 10px 0 8px -8px ${c}` },
          [`${t}-cell-fix-left-last::before`]: {
            backgroundColor: 'transparent !important',
          },
        },
        [`${t}-ping-right`]: {
          [`&:not(${t}-has-fix-right) ${t}-container::after`]: {
            boxShadow: `inset -10px 0 8px -8px ${c}`,
          },
          [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: { boxShadow: `inset -10px 0 8px -8px ${c}` },
        },
        [`${t}-fixed-column-gapped`]: {
          [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after,
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: { boxShadow: 'none' },
        },
      },
    }
  },
  Dc = (e) => {
    const { componentCls: t, antCls: r, margin: n } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-pagination${r}-pagination`]: { margin: `${z(n)} 0` },
        [`${t}-pagination`]: {
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: e.paddingXS,
          '> *': { flex: 'none' },
          '&-left': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-right': { justifyContent: 'flex-end' },
        },
      },
    }
  },
  Mc = (e) => {
    const { componentCls: t, tableRadius: r } = e
    return {
      [`${t}-wrapper`]: {
        [t]: {
          [`${t}-title, ${t}-header`]: { borderRadius: `${z(r)} ${z(r)} 0 0` },
          [`${t}-title + ${t}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            [`${t}-header, table`]: { borderRadius: 0 },
            'table > thead > tr:first-child': {
              'th:first-child, th:last-child, td:first-child, td:last-child': {
                borderRadius: 0,
              },
            },
          },
          '&-container': {
            borderStartStartRadius: r,
            borderStartEndRadius: r,
            'table > thead > tr:first-child': {
              '> *:first-child': { borderStartStartRadius: r },
              '> *:last-child': { borderStartEndRadius: r },
            },
          },
          '&-footer': { borderRadius: `0 0 ${z(r)} ${z(r)}` },
        },
      },
    }
  },
  Bc = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper-rtl`]: {
        direction: 'rtl',
        table: { direction: 'rtl' },
        [`${t}-pagination-left`]: { justifyContent: 'flex-end' },
        [`${t}-pagination-right`]: { justifyContent: 'flex-start' },
        [`${t}-row-expand-icon`]: {
          float: 'right',
          '&::after': { transform: 'rotate(-90deg)' },
          '&-collapsed::before': { transform: 'rotate(180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
        },
        [`${t}-container`]: {
          '&::before': { insetInlineStart: 'unset', insetInlineEnd: 0 },
          '&::after': { insetInlineStart: 0, insetInlineEnd: 'unset' },
          [`${t}-row-indent`]: { float: 'right' },
        },
      },
    }
  },
  Lc = (e) => {
    const {
      componentCls: t,
      antCls: r,
      iconCls: n,
      fontSizeIcon: o,
      padding: l,
      paddingXS: d,
      headerIconColor: a,
      headerIconHoverColor: i,
      tableSelectionColumnWidth: c,
      tableSelectedRowBg: p,
      tableSelectedRowHoverBg: f,
      tableRowHoverBg: u,
      tablePaddingHorizontal: v,
      calc: m,
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-selection-col`]: {
          width: c,
          [`&${t}-selection-col-with-dropdown`]: {
            width: m(c).add(o).add(m(l).div(4)).equal(),
          },
        },
        [`${t}-bordered ${t}-selection-col`]: {
          width: m(c).add(m(d).mul(2)).equal(),
          [`&${t}-selection-col-with-dropdown`]: {
            width: m(c).add(o).add(m(l).div(4)).add(m(d).mul(2)).equal(),
          },
        },
        [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
          paddingInlineEnd: e.paddingXS,
          paddingInlineStart: e.paddingXS,
          textAlign: 'center',
          [`${r}-radio-wrapper`]: { marginInlineEnd: 0 },
        },
        [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
          zIndex: m(e.zIndexTableFixed).add(1).equal({ unit: !1 }),
        },
        [`table tr th${t}-selection-column::after`]: {
          backgroundColor: 'transparent !important',
        },
        [`${t}-selection`]: {
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
        },
        [`${t}-selection-extra`]: {
          position: 'absolute',
          top: 0,
          zIndex: 1,
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          marginInlineStart: '100%',
          paddingInlineStart: z(m(v).div(4).equal()),
          [n]: {
            color: a,
            fontSize: o,
            verticalAlign: 'baseline',
            '&:hover': { color: i },
          },
        },
        [`${t}-tbody`]: {
          [`${t}-row`]: {
            [`&${t}-row-selected`]: {
              [`> ${t}-cell`]: {
                background: p,
                '&-row-hover': { background: f },
              },
            },
            [`> ${t}-cell-row-hover`]: { background: u },
          },
        },
      },
    }
  },
  zc = (e) => {
    const { componentCls: t, tableExpandColumnWidth: r, calc: n } = e,
      o = (l, d, a, i) => ({
        [`${t}${t}-${l}`]: {
          fontSize: i,
          [`
        ${t}-title,
        ${t}-footer,
        ${t}-cell,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${z(d)} ${z(a)}` },
          [`${t}-filter-trigger`]: {
            marginInlineEnd: z(n(a).div(2).mul(-1).equal()),
          },
          [`${t}-expanded-row-fixed`]: {
            margin: `${z(n(d).mul(-1).equal())} ${z(n(a).mul(-1).equal())}`,
          },
          [`${t}-tbody`]: {
            [`${t}-wrapper:only-child ${t}`]: {
              marginBlock: z(n(d).mul(-1).equal()),
              marginInline: `${z(n(r).sub(a).equal())} ${z(n(a).mul(-1).equal())}`,
            },
          },
          [`${t}-selection-extra`]: {
            paddingInlineStart: z(n(a).div(4).equal()),
          },
        },
      })
    return {
      [`${t}-wrapper`]: Object.assign(
        Object.assign(
          {},
          o(
            'middle',
            e.tablePaddingVerticalMiddle,
            e.tablePaddingHorizontalMiddle,
            e.tableFontSizeMiddle,
          ),
        ),
        o(
          'small',
          e.tablePaddingVerticalSmall,
          e.tablePaddingHorizontalSmall,
          e.tableFontSizeSmall,
        ),
      ),
    }
  },
  _c = (e) => {
    const {
      componentCls: t,
      marginXXS: r,
      fontSizeIcon: n,
      headerIconColor: o,
      headerIconHoverColor: l,
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-thead th${t}-column-has-sorters`]: {
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}, left 0s`,
          '&:hover': {
            background: e.tableHeaderSortHoverBg,
            '&::before': { backgroundColor: 'transparent !important' },
          },
          '&:focus-visible': { color: e.colorPrimary },
          [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: { background: e.tableFixedHeaderSortActiveBg },
        },
        [`${t}-thead th${t}-column-sort`]: {
          background: e.tableHeaderSortBg,
          '&::before': { backgroundColor: 'transparent !important' },
        },
        [`td${t}-column-sort`]: { background: e.tableBodySortBg },
        [`${t}-column-title`]: { position: 'relative', zIndex: 1, flex: 1 },
        [`${t}-column-sorters`]: {
          display: 'flex',
          flex: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&::after': {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            content: '""',
          },
        },
        [`${t}-column-sorters-tooltip-target-sorter`]: {
          '&::after': { content: 'none' },
        },
        [`${t}-column-sorter`]: {
          marginInlineStart: r,
          color: o,
          fontSize: 0,
          transition: `color ${e.motionDurationSlow}`,
          '&-inner': {
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          '&-up, &-down': {
            fontSize: n,
            '&.active': { color: e.colorPrimary },
          },
          [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
            marginTop: '-0.3em',
          },
        },
        [`${t}-column-sorters:hover ${t}-column-sorter`]: { color: l },
      },
    }
  },
  Hc = (e) => {
    const {
        componentCls: t,
        opacityLoading: r,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: o,
        tableScrollThumbSize: l,
        tableScrollBg: d,
        zIndexTableSticky: a,
        stickyScrollBarBorderRadius: i,
        lineWidth: c,
        lineType: p,
        tableBorderColor: f,
      } = e,
      u = `${z(c)} ${p} ${f}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-sticky`]: {
          '&-holder': {
            position: 'sticky',
            zIndex: a,
            background: e.colorBgContainer,
          },
          '&-scroll': {
            position: 'sticky',
            bottom: 0,
            height: `${z(l)} !important`,
            zIndex: a,
            display: 'flex',
            alignItems: 'center',
            background: d,
            borderTop: u,
            opacity: r,
            '&:hover': { transformOrigin: 'center bottom' },
            '&-bar': {
              height: l,
              backgroundColor: n,
              borderRadius: i,
              transition: `all ${e.motionDurationSlow}, transform none`,
              position: 'absolute',
              bottom: 0,
              '&:hover, &-active': { backgroundColor: o },
            },
          },
        },
      },
    }
  },
  po = (e) => {
    const { componentCls: t, lineWidth: r, tableBorderColor: n, calc: o } = e,
      l = `${z(r)} ${e.lineType} ${n}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-summary`]: {
          position: 'relative',
          zIndex: e.zIndexTableFixed,
          background: e.tableBg,
          '> tr': { '> th, > td': { borderBottom: l } },
        },
        [`div${t}-summary`]: {
          boxShadow: `0 ${z(o(r).mul(-1).equal())} 0 ${n}`,
        },
      },
    }
  },
  jc = (e) => {
    const {
        componentCls: t,
        motionDurationMid: r,
        lineWidth: n,
        lineType: o,
        tableBorderColor: l,
        calc: d,
      } = e,
      a = `${z(n)} ${o} ${l}`,
      i = `${t}-expanded-row-cell`
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody-virtual`]: {
          [`${t}-tbody-virtual-holder-inner`]: {
            [`
            & > ${t}-row, 
            & > div:not(${t}-row) > ${t}-row
          `]: { display: 'flex', boxSizing: 'border-box', width: '100%' },
          },
          [`${t}-cell`]: { borderBottom: a, transition: `background ${r}` },
          [`${t}-expanded-row`]: {
            [`${i}${i}-fixed`]: {
              position: 'sticky',
              insetInlineStart: 0,
              overflow: 'hidden',
              width: `calc(var(--virtual-width) - ${z(n)})`,
              borderInlineEnd: 'none',
            },
          },
        },
        [`${t}-bordered`]: {
          [`${t}-tbody-virtual`]: {
            '&:after': {
              content: '""',
              insetInline: 0,
              bottom: 0,
              borderBottom: a,
              position: 'absolute',
            },
            [`${t}-cell`]: {
              borderInlineEnd: a,
              [`&${t}-cell-fix-right-first:before`]: {
                content: '""',
                position: 'absolute',
                insetBlock: 0,
                insetInlineStart: d(n).mul(-1).equal(),
                borderInlineStart: a,
              },
            },
          },
          [`&${t}-virtual`]: {
            [`${t}-placeholder ${t}-cell`]: {
              borderInlineEnd: a,
              borderBottom: a,
            },
          },
        },
      },
    }
  },
  Ac = (e) => {
    const {
        componentCls: t,
        fontWeightStrong: r,
        tablePaddingVertical: n,
        tablePaddingHorizontal: o,
        tableExpandColumnWidth: l,
        lineWidth: d,
        lineType: a,
        tableBorderColor: i,
        tableFontSize: c,
        tableBg: p,
        tableRadius: f,
        tableHeaderTextColor: u,
        motionDurationMid: v,
        tableHeaderBg: m,
        tableHeaderCellSplitColor: b,
        tableFooterTextColor: g,
        tableFooterBg: h,
        calc: y,
      } = e,
      x = `${z(d)} ${a} ${i}`
    return {
      [`${t}-wrapper`]: Object.assign(
        Object.assign({ clear: 'both', maxWidth: '100%' }, Qa()),
        {
          [t]: Object.assign(Object.assign({}, Lt(e)), {
            fontSize: c,
            background: p,
            borderRadius: `${z(f)} ${z(f)} 0 0`,
            scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`,
          }),
          table: {
            width: '100%',
            textAlign: 'start',
            borderRadius: `${z(f)} ${z(f)} 0 0`,
            borderCollapse: 'separate',
            borderSpacing: 0,
          },
          [`
          ${t}-cell,
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
            position: 'relative',
            padding: `${z(n)} ${z(o)}`,
            overflowWrap: 'break-word',
          },
          [`${t}-title`]: { padding: `${z(n)} ${z(o)}` },
          [`${t}-thead`]: {
            '\n          > tr > th,\n          > tr > td\n        ': {
              position: 'relative',
              color: u,
              fontWeight: r,
              textAlign: 'start',
              background: m,
              borderBottom: x,
              transition: `background ${v} ease`,
              "&[colspan]:not([colspan='1'])": { textAlign: 'center' },
              [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
                {
                  position: 'absolute',
                  top: '50%',
                  insetInlineEnd: 0,
                  width: 1,
                  height: '1.6em',
                  backgroundColor: b,
                  transform: 'translateY(-50%)',
                  transition: `background-color ${v}`,
                  content: '""',
                },
            },
            '> tr:not(:last-child) > th[colspan]': { borderBottom: 0 },
          },
          [`${t}-tbody`]: {
            '> tr': {
              '> th, > td': {
                transition: `background ${v}, border-color ${v}`,
                borderBottom: x,
                [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                  [t]: {
                    marginBlock: z(y(n).mul(-1).equal()),
                    marginInline: `${z(y(l).sub(o).equal())}
                ${z(y(o).mul(-1).equal())}`,
                    [`${t}-tbody > tr:last-child > td`]: {
                      borderBottom: 0,
                      '&:first-child, &:last-child': { borderRadius: 0 },
                    },
                  },
                },
              },
              '> th': {
                position: 'relative',
                color: u,
                fontWeight: r,
                textAlign: 'start',
                background: m,
                borderBottom: x,
                transition: `background ${v} ease`,
              },
            },
          },
          [`${t}-footer`]: {
            padding: `${z(n)} ${z(o)}`,
            color: g,
            background: h,
          },
        },
      ),
    }
  },
  Fc = (e) => {
    const {
        colorFillAlter: t,
        colorBgContainer: r,
        colorTextHeading: n,
        colorFillSecondary: o,
        colorFillContent: l,
        controlItemBgActive: d,
        controlItemBgActiveHover: a,
        padding: i,
        paddingSM: c,
        paddingXS: p,
        colorBorderSecondary: f,
        borderRadiusLG: u,
        controlHeight: v,
        colorTextPlaceholder: m,
        fontSize: b,
        fontSizeSM: g,
        lineHeight: h,
        lineWidth: y,
        colorIcon: x,
        colorIconHover: C,
        opacityLoading: S,
        controlInteractiveSize: R,
      } = e,
      K = new rn(o).onBackground(r).toHexShortString(),
      T = new rn(l).onBackground(r).toHexShortString(),
      N = new rn(t).onBackground(r).toHexShortString(),
      O = new rn(x),
      P = new rn(C),
      E = R / 2 - y,
      $ = E * 2 + y * 3
    return {
      headerBg: N,
      headerColor: n,
      headerSortActiveBg: K,
      headerSortHoverBg: T,
      bodySortBg: N,
      rowHoverBg: N,
      rowSelectedBg: d,
      rowSelectedHoverBg: a,
      rowExpandedBg: t,
      cellPaddingBlock: i,
      cellPaddingInline: i,
      cellPaddingBlockMD: c,
      cellPaddingInlineMD: p,
      cellPaddingBlockSM: p,
      cellPaddingInlineSM: p,
      borderColor: f,
      headerBorderRadius: u,
      footerBg: N,
      footerColor: n,
      cellFontSize: b,
      cellFontSizeMD: b,
      cellFontSizeSM: b,
      headerSplitColor: f,
      fixedHeaderSortActiveBg: K,
      headerFilterHoverBg: l,
      filterDropdownMenuBg: r,
      filterDropdownBg: r,
      expandIconBg: r,
      selectionColumnWidth: v,
      stickyScrollBarBg: m,
      stickyScrollBarBorderRadius: 100,
      expandIconMarginTop:
        (b * h - y * 3) / 2 - Math.ceil((g * 1.4 - y * 3) / 2),
      headerIconColor: O.clone()
        .setAlpha(O.getAlpha() * S)
        .toRgbString(),
      headerIconHoverColor: P.clone()
        .setAlpha(P.getAlpha() * S)
        .toRgbString(),
      expandIconHalfInner: E,
      expandIconSize: $,
      expandIconScale: R / $,
    }
  },
  vo = 2,
  Wc = Sn(
    'Table',
    (e) => {
      const {
          colorTextHeading: t,
          colorSplit: r,
          colorBgContainer: n,
          controlInteractiveSize: o,
          headerBg: l,
          headerColor: d,
          headerSortActiveBg: a,
          headerSortHoverBg: i,
          bodySortBg: c,
          rowHoverBg: p,
          rowSelectedBg: f,
          rowSelectedHoverBg: u,
          rowExpandedBg: v,
          cellPaddingBlock: m,
          cellPaddingInline: b,
          cellPaddingBlockMD: g,
          cellPaddingInlineMD: h,
          cellPaddingBlockSM: y,
          cellPaddingInlineSM: x,
          borderColor: C,
          footerBg: S,
          footerColor: R,
          headerBorderRadius: K,
          cellFontSize: T,
          cellFontSizeMD: N,
          cellFontSizeSM: O,
          headerSplitColor: P,
          fixedHeaderSortActiveBg: E,
          headerFilterHoverBg: $,
          filterDropdownBg: k,
          expandIconBg: w,
          selectionColumnWidth: B,
          stickyScrollBarBg: L,
          calc: M,
        } = e,
        D = wn(e, {
          tableFontSize: T,
          tableBg: n,
          tableRadius: K,
          tablePaddingVertical: m,
          tablePaddingHorizontal: b,
          tablePaddingVerticalMiddle: g,
          tablePaddingHorizontalMiddle: h,
          tablePaddingVerticalSmall: y,
          tablePaddingHorizontalSmall: x,
          tableBorderColor: C,
          tableHeaderTextColor: d,
          tableHeaderBg: l,
          tableFooterTextColor: R,
          tableFooterBg: S,
          tableHeaderCellSplitColor: P,
          tableHeaderSortBg: a,
          tableHeaderSortHoverBg: i,
          tableBodySortBg: c,
          tableFixedHeaderSortActiveBg: E,
          tableHeaderFilterActiveBg: $,
          tableFilterDropdownBg: k,
          tableRowHoverBg: p,
          tableSelectedRowBg: f,
          tableSelectedRowHoverBg: u,
          zIndexTableFixed: vo,
          zIndexTableSticky: M(vo).add(1).equal({ unit: !1 }),
          tableFontSizeMiddle: N,
          tableFontSizeSmall: O,
          tableSelectionColumnWidth: B,
          tableExpandIconBg: w,
          tableExpandColumnWidth: M(o).add(M(e.padding).mul(2)).equal(),
          tableExpandedRowBg: v,
          tableFilterDropdownWidth: 120,
          tableFilterDropdownHeight: 264,
          tableFilterDropdownSearchWidth: 140,
          tableScrollThumbSize: 8,
          tableScrollThumbBg: L,
          tableScrollThumbBgHover: t,
          tableScrollBg: r,
        })
      return [
        Ac(D),
        Dc(D),
        po(D),
        _c(D),
        Pc(D),
        Rc(D),
        Mc(D),
        Kc(D),
        po(D),
        Oc(D),
        Lc(D),
        Tc(D),
        Hc(D),
        Ic(D),
        zc(D),
        Bc(D),
        jc(D),
      ]
    },
    Fc,
    { unitless: { expandIconScale: !0 } },
  ),
  Vc = [],
  qc = (e, t) => {
    var r, n
    const {
      prefixCls: o,
      className: l,
      rootClassName: d,
      style: a,
      size: i,
      bordered: c,
      dropdownPrefixCls: p,
      dataSource: f,
      pagination: u,
      rowSelection: v,
      rowKey: m = 'key',
      rowClassName: b,
      columns: g,
      children: h,
      childrenColumnName: y,
      onChange: x,
      getPopupContainer: C,
      loading: S,
      expandIcon: R,
      expandable: K,
      expandedRowRender: T,
      expandIconColumnIndex: N,
      indentSize: O,
      scroll: P,
      sortDirections: E,
      locale: $,
      showSorterTooltip: k = { target: 'full-header' },
      virtual: w,
    } = e
    rr()
    const B = s.useMemo(() => g || sr(h), [g, h]),
      L = s.useMemo(() => B.some((re) => re.responsive), [B]),
      M = Eo(L),
      D = s.useMemo(() => {
        const re = new Set(Object.keys(M).filter((ce) => M[ce]))
        return B.filter(
          (ce) => !ce.responsive || ce.responsive.some(($e) => re.has($e)),
        )
      }, [B, M]),
      X = go(e, ['className', 'style', 'columns']),
      {
        locale: _ = el,
        direction: ae,
        table: te,
        renderEmpty: Ee,
        getPrefixCls: xe,
        getPopupContainer: Me,
      } = s.useContext(Nt),
      J = Zn(i),
      le = Object.assign(Object.assign({}, _.Table), $),
      ke = f || Vc,
      Z = xe('table', o),
      U = xe('dropdown', p),
      [, A] = er(),
      F = Qn(Z),
      [q, ie, V] = Wc(Z, F),
      ee = Object.assign(
        Object.assign({ childrenColumnName: y, expandIconColumnIndex: N }, K),
        {
          expandIcon:
            (r = K == null ? void 0 : K.expandIcon) !== null && r !== void 0
              ? r
              : (n = te == null ? void 0 : te.expandable) === null ||
                  n === void 0
                ? void 0
                : n.expandIcon,
        },
      ),
      { childrenColumnName: W = 'children' } = ee,
      de = s.useMemo(
        () =>
          ke.some((re) => (re == null ? void 0 : re[W]))
            ? 'nest'
            : T || (K != null && K.expandedRowRender)
              ? 'row'
              : null,
        [ke],
      ),
      G = { body: s.useRef() },
      pe = js(Z),
      ne = s.useRef(null),
      Se = s.useRef(null)
    _s(t, () =>
      Object.assign(Object.assign({}, Se.current), {
        nativeElement: ne.current,
      }),
    )
    const we = s.useMemo(
        () =>
          typeof m == 'function' ? m : (re) => (re == null ? void 0 : re[m]),
        [m],
      ),
      [be] = yc(ke, W, we),
      Re = {},
      _e = function (re, ce) {
        let $e =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
        var De, Xe, Ue, ut
        const Fe = Object.assign(Object.assign({}, Re), re)
        $e &&
          ((De = Re.resetPagination) === null || De === void 0 || De.call(Re),
          !((Xe = Fe.pagination) === null || Xe === void 0) &&
            Xe.current &&
            (Fe.pagination.current = 1),
          u &&
            ((Ue = u.onChange) === null ||
              Ue === void 0 ||
              Ue.call(
                u,
                1,
                (ut = Fe.pagination) === null || ut === void 0
                  ? void 0
                  : ut.pageSize,
              ))),
          P &&
            P.scrollToFirstRowOnChange !== !1 &&
            G.body.current &&
            al(0, { getContainer: () => G.body.current }),
          x == null ||
            x(Fe.pagination, Fe.filters, Fe.sorter, {
              currentDataSource: Gn(
                Jn(ke, Fe.sorterStates, W),
                Fe.filterStates,
                W,
              ),
              action: ce,
            })
      },
      nt = (re, ce) => {
        _e({ sorter: re, sorterStates: ce }, 'sort', !1)
      },
      [Ie, ve, Ne, ue] = $c({
        prefixCls: Z,
        mergedColumns: D,
        onSorterChange: nt,
        sortDirections: E || ['ascend', 'descend'],
        tableLocale: le,
        showSorterTooltip: k,
      }),
      Te = s.useMemo(() => Jn(ke, ve, W), [ke, ve])
    ;(Re.sorter = ue()), (Re.sorterStates = ve)
    const Ke = (re, ce) => {
        _e({ filters: re, filterStates: ce }, 'filter', !0)
      },
      [Ce, je, He] = bc({
        prefixCls: Z,
        locale: le,
        dropdownPrefixCls: U,
        mergedColumns: D,
        onFilterChange: Ke,
        getPopupContainer: C || Me,
        rootClassName: Y(d, F),
      }),
      Be = Gn(Te, je, W)
    ;(Re.filters = He), (Re.filterStates = je)
    const We = s.useMemo(() => {
        const re = {}
        return (
          Object.keys(He).forEach((ce) => {
            He[ce] !== null && (re[ce] = He[ce])
          }),
          Object.assign(Object.assign({}, Ne), { filters: re })
        )
      }, [Ne, He]),
      [st] = Ec(We),
      yt = (re, ce) => {
        _e(
          {
            pagination: Object.assign(Object.assign({}, Re.pagination), {
              current: re,
              pageSize: ce,
            }),
          },
          'paginate',
        )
      },
      [Oe, Rt] = Sc(Be.length, yt, u)
    ;(Re.pagination = u === !1 ? {} : Cc(Oe, u)), (Re.resetPagination = Rt)
    const Ze = s.useMemo(() => {
        if (u === !1 || !Oe.pageSize) return Be
        const { current: re = 1, total: ce, pageSize: $e = ca } = Oe
        return Be.length < ce
          ? Be.length > $e
            ? Be.slice((re - 1) * $e, re * $e)
            : Be
          : Be.slice((re - 1) * $e, re * $e)
      }, [
        !!u,
        Be,
        Oe == null ? void 0 : Oe.current,
        Oe == null ? void 0 : Oe.pageSize,
        Oe == null ? void 0 : Oe.total,
      ]),
      [ot, et] = Ls(
        {
          prefixCls: Z,
          data: Be,
          pageData: Ze,
          getRowKey: we,
          getRecordByKey: be,
          expandType: de,
          childrenColumnName: W,
          locale: le,
          getPopupContainer: C || Me,
        },
        v,
      ),
      dt = (re, ce, $e) => {
        let De
        return (
          typeof b == 'function' ? (De = Y(b(re, ce, $e))) : (De = Y(b)),
          Y({ [`${Z}-row-selected`]: et.has(we(re, ce)) }, De)
        )
      }
    ;(ee.__PARENT_RENDER_ICON__ = ee.expandIcon),
      (ee.expandIcon = ee.expandIcon || R || Hs(le)),
      de === 'nest' && ee.expandIconColumnIndex === void 0
        ? (ee.expandIconColumnIndex = v ? 1 : 0)
        : ee.expandIconColumnIndex > 0 && v && (ee.expandIconColumnIndex -= 1),
      typeof ee.indentSize != 'number' &&
        (ee.indentSize = typeof O == 'number' ? O : 15)
    const Ve = s.useCallback((re) => st(ot(Ce(Ie(re)))), [Ie, Ce, ot])
    let qe, at
    if (u !== !1 && Oe != null && Oe.total) {
      let re
      Oe.size
        ? (re = Oe.size)
        : (re = J === 'small' || J === 'middle' ? 'small' : void 0)
      const ce = (Xe) =>
          s.createElement(
            ql,
            Object.assign({}, Oe, {
              className: Y(
                `${Z}-pagination ${Z}-pagination-${Xe}`,
                Oe.className,
              ),
              size: re,
            }),
          ),
        $e = ae === 'rtl' ? 'left' : 'right',
        { position: De } = Oe
      if (De !== null && Array.isArray(De)) {
        const Xe = De.find((Fe) => Fe.includes('top')),
          Ue = De.find((Fe) => Fe.includes('bottom')),
          ut = De.every((Fe) => `${Fe}` == 'none')
        !Xe && !Ue && !ut && (at = ce($e)),
          Xe && (qe = ce(Xe.toLowerCase().replace('top', ''))),
          Ue && (at = ce(Ue.toLowerCase().replace('bottom', '')))
      } else at = ce($e)
    }
    let Pe
    typeof S == 'boolean'
      ? (Pe = { spinning: S })
      : typeof S == 'object' && (Pe = Object.assign({ spinning: !0 }, S))
    const Le = Y(
        V,
        F,
        `${Z}-wrapper`,
        te == null ? void 0 : te.className,
        { [`${Z}-wrapper-rtl`]: ae === 'rtl' },
        l,
        d,
        ie,
      ),
      tt = Object.assign(Object.assign({}, te == null ? void 0 : te.style), a),
      Jt =
        typeof ($ == null ? void 0 : $.emptyText) < 'u'
          ? $.emptyText
          : (Ee == null ? void 0 : Ee('Table')) ||
            s.createElement(nl, { componentName: 'Table' }),
      Qt = w ? kc : Nc,
      ht = {},
      Zt = s.useMemo(() => {
        const {
            fontSize: re,
            lineHeight: ce,
            padding: $e,
            paddingXS: De,
            paddingSM: Xe,
          } = A,
          Ue = Math.floor(re * ce)
        switch (J) {
          case 'large':
            return $e * 2 + Ue
          case 'small':
            return De * 2 + Ue
          default:
            return Xe * 2 + Ue
        }
      }, [A, J])
    return (
      w && (ht.listItemHeight = Zt),
      q(
        s.createElement(
          'div',
          { ref: ne, className: Le, style: tt },
          s.createElement(
            Za,
            Object.assign({ spinning: !1 }, Pe),
            qe,
            s.createElement(
              Qt,
              Object.assign({}, ht, X, {
                ref: Se,
                columns: D,
                direction: ae,
                expandable: ee,
                prefixCls: Z,
                className: Y(
                  {
                    [`${Z}-middle`]: J === 'middle',
                    [`${Z}-small`]: J === 'small',
                    [`${Z}-bordered`]: c,
                    [`${Z}-empty`]: ke.length === 0,
                  },
                  V,
                  F,
                  ie,
                ),
                data: Ze,
                rowKey: we,
                rowClassName: dt,
                emptyText: Jt,
                internalHooks: fn,
                internalRefs: G,
                transformColumns: Ve,
                getContainerWidth: pe,
              }),
            ),
            at,
          ),
        ),
      )
    )
  },
  Xc = s.forwardRef(qc),
  Uc = (e, t) => {
    const r = s.useRef(0)
    return (
      (r.current += 1),
      s.createElement(
        Xc,
        Object.assign({}, e, { ref: t, _renderTimes: r.current }),
      )
    )
  },
  kt = s.forwardRef(Uc)
kt.SELECTION_COLUMN = Ct
kt.EXPAND_COLUMN = St
kt.SELECTION_ALL = Wn
kt.SELECTION_INVERT = Vn
kt.SELECTION_NONE = qn
kt.Column = Ns
kt.ColumnGroup = ks
kt.Summary = Ho
export { kt as F }
