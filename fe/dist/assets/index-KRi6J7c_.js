import {
  r as l,
  o as W,
  aH as ve,
  aI as xt,
  aJ as $t,
  B as be,
  aK as ke,
  t as h,
  ax as St,
  l as S,
  p as I,
  v as Oe,
  J as pe,
  _ as G,
  q as he,
  ay as De,
  aL as Ot,
  aM as Ee,
  aw as we,
  aN as Et,
  aD as ye,
  aO as wt,
  Z as qe,
  P as We,
  Q as N,
  ab as F,
  N as xe,
  w as Pt,
  ai as $e,
  aP as Nt,
  aQ as Ve,
  aR as jt,
  a1 as It,
  aC as Rt,
  ae as _e,
  ak as Tt,
  al as Bt,
  aS as Mt,
  aA as ae,
  aT as zt,
  aU as Ht,
  aV as Ge,
  aW as At,
  aX as Ft,
  aY as Lt,
  aZ as kt,
  a_ as Dt,
  a$ as qt,
  b0 as Wt,
  b1 as Vt,
  b2 as _t,
  b3 as Gt,
  b4 as Xt,
} from './index-C0Ym1P--.js'
function Ut() {
  const [e, t] = l.useState([]),
    o = l.useCallback(
      (n) => (
        t((a) => [].concat(W(a), [n])),
        () => {
          t((a) => a.filter((r) => r !== n))
        }
      ),
      [],
    )
  return [e, o]
}
const Kt = new ve('antFadeIn', {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  }),
  Qt = new ve('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
  Zt = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    const { antCls: o } = e,
      n = `${o}-fade`,
      a = t ? '&' : ''
    return [
      xt(n, Kt, Qt, e.motionDurationMid, t),
      {
        [`
        ${a}${n}-enter,
        ${a}${n}-appear
      `]: { opacity: 0, animationTimingFunction: 'linear' },
        [`${a}${n}-leave`]: { animationTimingFunction: 'linear' },
      },
    ]
  }
function de(e) {
  return !!(e != null && e.then)
}
const Xe = (e) => {
    const {
        type: t,
        children: o,
        prefixCls: n,
        buttonProps: a,
        close: r,
        autoFocus: d,
        emitEvent: c,
        isSilent: i,
        quitOnNullishReturnValue: u,
        actionFn: s,
      } = e,
      m = l.useRef(!1),
      g = l.useRef(null),
      [v, b] = $t(!1),
      f = function () {
        r == null || r.apply(void 0, arguments)
      }
    l.useEffect(() => {
      let C = null
      return (
        d &&
          (C = setTimeout(() => {
            var y
            ;(y = g.current) === null || y === void 0 || y.focus()
          })),
        () => {
          C && clearTimeout(C)
        }
      )
    }, [])
    const x = (C) => {
        de(C) &&
          (b(!0),
          C.then(
            function () {
              b(!1, !0), f.apply(void 0, arguments), (m.current = !1)
            },
            (y) => {
              if ((b(!1, !0), (m.current = !1), !(i != null && i())))
                return Promise.reject(y)
            },
          ))
      },
      p = (C) => {
        if (m.current) return
        if (((m.current = !0), !s)) {
          f()
          return
        }
        let y
        if (c) {
          if (((y = s(C)), u && !de(y))) {
            ;(m.current = !1), f(C)
            return
          }
        } else if (s.length) (y = s(r)), (m.current = !1)
        else if (((y = s()), !de(y))) {
          f()
          return
        }
        x(y)
      }
    return l.createElement(
      be,
      Object.assign({}, ke(t), { onClick: p, loading: v, prefixCls: n }, a, {
        ref: g,
      }),
      o,
    )
  },
  te = h.createContext({}),
  { Provider: Ue } = te,
  Pe = () => {
    const {
      autoFocusButton: e,
      cancelButtonProps: t,
      cancelTextLocale: o,
      isSilent: n,
      mergedOkCancel: a,
      rootPrefixCls: r,
      close: d,
      onCancel: c,
      onConfirm: i,
    } = l.useContext(te)
    return a
      ? h.createElement(
          Xe,
          {
            isSilent: n,
            actionFn: c,
            close: function () {
              d == null || d.apply(void 0, arguments), i == null || i(!1)
            },
            autoFocus: e === 'cancel',
            buttonProps: t,
            prefixCls: `${r}-btn`,
          },
          o,
        )
      : null
  },
  Ne = () => {
    const {
      autoFocusButton: e,
      close: t,
      isSilent: o,
      okButtonProps: n,
      rootPrefixCls: a,
      okTextLocale: r,
      okType: d,
      onConfirm: c,
      onOk: i,
    } = l.useContext(te)
    return h.createElement(
      Xe,
      {
        isSilent: o,
        type: d || 'primary',
        actionFn: i,
        close: function () {
          t == null || t.apply(void 0, arguments), c == null || c(!0)
        },
        autoFocus: e === 'ok',
        buttonProps: n,
        prefixCls: `${a}-btn`,
      },
      r,
    )
  }
var Ke = l.createContext({})
function je(e, t, o) {
  var n = t
  return !n && o && (n = ''.concat(e, '-').concat(o)), n
}
function Ie(e, t) {
  var o = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    n = 'scroll'.concat(t ? 'Top' : 'Left')
  if (typeof o != 'number') {
    var a = e.document
    ;(o = a.documentElement[n]), typeof o != 'number' && (o = a.body[n])
  }
  return o
}
function Yt(e) {
  var t = e.getBoundingClientRect(),
    o = { left: t.left, top: t.top },
    n = e.ownerDocument,
    a = n.defaultView || n.parentWindow
  return (o.left += Ie(a)), (o.top += Ie(a, !0)), o
}
const Jt = l.memo(
  function (e) {
    var t = e.children
    return t
  },
  function (e, t) {
    var o = t.shouldUpdate
    return !o
  },
)
var en = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
  tn = { outline: 'none' },
  Qe = h.forwardRef(function (e, t) {
    var o = e.prefixCls,
      n = e.className,
      a = e.style,
      r = e.title,
      d = e.ariaId,
      c = e.footer,
      i = e.closable,
      u = e.closeIcon,
      s = e.onClose,
      m = e.children,
      g = e.bodyStyle,
      v = e.bodyProps,
      b = e.modalRender,
      f = e.onMouseDown,
      x = e.onMouseUp,
      p = e.holderRef,
      C = e.visible,
      y = e.forceRender,
      $ = e.width,
      w = e.height,
      O = e.classNames,
      E = e.styles,
      R = h.useContext(Ke),
      P = R.panel,
      B = St(p, P),
      T = l.useRef(),
      X = l.useRef()
    h.useImperativeHandle(t, function () {
      return {
        focus: function () {
          var z
          ;(z = T.current) === null ||
            z === void 0 ||
            z.focus({ preventScroll: !0 })
        },
        changeActive: function (z) {
          var q = document,
            M = q.activeElement
          z && M === X.current
            ? T.current.focus({ preventScroll: !0 })
            : !z && M === T.current && X.current.focus({ preventScroll: !0 })
        },
      }
    })
    var V = {}
    $ !== void 0 && (V.width = $), w !== void 0 && (V.height = w)
    var H = c
        ? h.createElement(
            'div',
            {
              className: S(
                ''.concat(o, '-footer'),
                O == null ? void 0 : O.footer,
              ),
              style: I({}, E == null ? void 0 : E.footer),
            },
            c,
          )
        : null,
      A = r
        ? h.createElement(
            'div',
            {
              className: S(
                ''.concat(o, '-header'),
                O == null ? void 0 : O.header,
              ),
              style: I({}, E == null ? void 0 : E.header),
            },
            h.createElement(
              'div',
              { className: ''.concat(o, '-title'), id: d },
              r,
            ),
          )
        : null,
      k = l.useMemo(
        function () {
          return Oe(i) === 'object' && i !== null
            ? i
            : i
              ? {
                  closeIcon:
                    u ??
                    h.createElement('span', {
                      className: ''.concat(o, '-close-x'),
                    }),
                }
              : {}
        },
        [i, u, o],
      ),
      D = pe(k, !0),
      _ = Oe(i) === 'object' && i.disabled,
      ee = i
        ? h.createElement(
            'button',
            G({ type: 'button', onClick: s, 'aria-label': 'Close' }, D, {
              className: ''.concat(o, '-close'),
              disabled: _,
            }),
            k.closeIcon,
          )
        : null,
      U = h.createElement(
        'div',
        {
          className: S(
            ''.concat(o, '-content'),
            O == null ? void 0 : O.content,
          ),
          style: E == null ? void 0 : E.content,
        },
        ee,
        A,
        h.createElement(
          'div',
          G(
            {
              className: S(''.concat(o, '-body'), O == null ? void 0 : O.body),
              style: I(I({}, g), E == null ? void 0 : E.body),
            },
            v,
          ),
          m,
        ),
        H,
      )
    return h.createElement(
      'div',
      {
        key: 'dialog-element',
        role: 'dialog',
        'aria-labelledby': r ? d : null,
        'aria-modal': 'true',
        ref: B,
        style: I(I({}, a), V),
        className: S(o, n),
        onMouseDown: f,
        onMouseUp: x,
      },
      h.createElement(
        'div',
        { ref: T, tabIndex: 0, style: tn },
        h.createElement(Jt, { shouldUpdate: C || y }, b ? b(U) : U),
      ),
      h.createElement('div', { tabIndex: 0, ref: X, style: en }),
    )
  }),
  Ze = l.forwardRef(function (e, t) {
    var o = e.prefixCls,
      n = e.title,
      a = e.style,
      r = e.className,
      d = e.visible,
      c = e.forceRender,
      i = e.destroyOnClose,
      u = e.motionName,
      s = e.ariaId,
      m = e.onVisibleChanged,
      g = e.mousePosition,
      v = l.useRef(),
      b = l.useState(),
      f = he(b, 2),
      x = f[0],
      p = f[1],
      C = {}
    x && (C.transformOrigin = x)
    function y() {
      var $ = Yt(v.current)
      p(
        g && (g.x || g.y)
          ? ''.concat(g.x - $.left, 'px ').concat(g.y - $.top, 'px')
          : '',
      )
    }
    return l.createElement(
      De,
      {
        visible: d,
        onVisibleChanged: m,
        onAppearPrepare: y,
        onEnterPrepare: y,
        forceRender: c,
        motionName: u,
        removeOnLeave: i,
        ref: v,
      },
      function ($, w) {
        var O = $.className,
          E = $.style
        return l.createElement(
          Qe,
          G({}, e, {
            ref: t,
            title: n,
            ariaId: s,
            prefixCls: o,
            holderRef: w,
            style: I(I(I({}, E), a), C),
            className: S(r, O),
          }),
        )
      },
    )
  })
Ze.displayName = 'Content'
var nn = function (t) {
    var o = t.prefixCls,
      n = t.style,
      a = t.visible,
      r = t.maskProps,
      d = t.motionName,
      c = t.className
    return l.createElement(
      De,
      {
        key: 'mask',
        visible: a,
        motionName: d,
        leavedClassName: ''.concat(o, '-mask-hidden'),
      },
      function (i, u) {
        var s = i.className,
          m = i.style
        return l.createElement(
          'div',
          G(
            {
              ref: u,
              style: I(I({}, m), n),
              className: S(''.concat(o, '-mask'), s, c),
            },
            r,
          ),
        )
      },
    )
  },
  on = function (t) {
    var o = t.prefixCls,
      n = o === void 0 ? 'rc-dialog' : o,
      a = t.zIndex,
      r = t.visible,
      d = r === void 0 ? !1 : r,
      c = t.keyboard,
      i = c === void 0 ? !0 : c,
      u = t.focusTriggerAfterClose,
      s = u === void 0 ? !0 : u,
      m = t.wrapStyle,
      g = t.wrapClassName,
      v = t.wrapProps,
      b = t.onClose,
      f = t.afterOpenChange,
      x = t.afterClose,
      p = t.transitionName,
      C = t.animation,
      y = t.closable,
      $ = y === void 0 ? !0 : y,
      w = t.mask,
      O = w === void 0 ? !0 : w,
      E = t.maskTransitionName,
      R = t.maskAnimation,
      P = t.maskClosable,
      B = P === void 0 ? !0 : P,
      T = t.maskStyle,
      X = t.maskProps,
      V = t.rootClassName,
      H = t.classNames,
      A = t.styles,
      k = l.useRef(),
      D = l.useRef(),
      _ = l.useRef(),
      ee = l.useState(d),
      U = he(ee, 2),
      K = U[0],
      z = U[1],
      q = Ot()
    function M() {
      Ee(D.current, document.activeElement) ||
        (k.current = document.activeElement)
    }
    function Ct() {
      if (!Ee(D.current, document.activeElement)) {
        var j
        ;(j = _.current) === null || j === void 0 || j.focus()
      }
    }
    function vt(j) {
      if (j) Ct()
      else {
        if ((z(!1), O && k.current && s)) {
          try {
            k.current.focus({ preventScroll: !0 })
          } catch {}
          k.current = null
        }
        K && (x == null || x())
      }
      f == null || f(j)
    }
    function ie(j) {
      b == null || b(j)
    }
    var oe = l.useRef(!1),
      se = l.useRef(),
      bt = function () {
        clearTimeout(se.current), (oe.current = !0)
      },
      pt = function () {
        se.current = setTimeout(function () {
          oe.current = !1
        })
      },
      Se = null
    B &&
      (Se = function (ce) {
        oe.current ? (oe.current = !1) : D.current === ce.target && ie(ce)
      })
    function ht(j) {
      if (i && j.keyCode === we.ESC) {
        j.stopPropagation(), ie(j)
        return
      }
      d && j.keyCode === we.TAB && _.current.changeActive(!j.shiftKey)
    }
    l.useEffect(
      function () {
        d && (z(!0), M())
      },
      [d],
    ),
      l.useEffect(function () {
        return function () {
          clearTimeout(se.current)
        }
      }, [])
    var yt = I(
      I(I({ zIndex: a }, m), A == null ? void 0 : A.wrapper),
      {},
      { display: K ? null : 'none' },
    )
    return l.createElement(
      'div',
      G({ className: S(''.concat(n, '-root'), V) }, pe(t, { data: !0 })),
      l.createElement(nn, {
        prefixCls: n,
        visible: O && d,
        motionName: je(n, E, R),
        style: I(I({ zIndex: a }, T), A == null ? void 0 : A.mask),
        maskProps: X,
        className: H == null ? void 0 : H.mask,
      }),
      l.createElement(
        'div',
        G(
          {
            tabIndex: -1,
            onKeyDown: ht,
            className: S(
              ''.concat(n, '-wrap'),
              g,
              H == null ? void 0 : H.wrapper,
            ),
            ref: D,
            onClick: Se,
            style: yt,
          },
          v,
        ),
        l.createElement(
          Ze,
          G({}, t, {
            onMouseDown: bt,
            onMouseUp: pt,
            ref: _,
            closable: $,
            ariaId: q,
            prefixCls: n,
            visible: d && K,
            onClose: ie,
            onVisibleChanged: vt,
            motionName: je(n, p, C),
          }),
        ),
      ),
    )
  },
  Ye = function (t) {
    var o = t.visible,
      n = t.getContainer,
      a = t.forceRender,
      r = t.destroyOnClose,
      d = r === void 0 ? !1 : r,
      c = t.afterClose,
      i = t.panelRef,
      u = l.useState(o),
      s = he(u, 2),
      m = s[0],
      g = s[1],
      v = l.useMemo(
        function () {
          return { panel: i }
        },
        [i],
      )
    return (
      l.useEffect(
        function () {
          o && g(!0)
        },
        [o],
      ),
      !a && d && !m
        ? null
        : l.createElement(
            Ke.Provider,
            { value: v },
            l.createElement(
              Et,
              {
                open: o || a || m,
                autoDestroy: !1,
                getContainer: n,
                autoLock: o || m,
              },
              l.createElement(
                on,
                G({}, t, {
                  destroyOnClose: d,
                  afterClose: function () {
                    c == null || c(), g(!1)
                  },
                }),
              ),
            ),
          )
    )
  }
Ye.displayName = 'Dialog'
function Re(e) {
  if (e) return { closable: e.closable, closeIcon: e.closeIcon }
}
function Te(e) {
  const { closable: t, closeIcon: o } = e || {}
  return h.useMemo(() => {
    if (!t && (t === !1 || o === !1 || o === null)) return !1
    if (t === void 0 && o === void 0) return null
    let n = { closeIcon: typeof o != 'boolean' && o !== null ? o : void 0 }
    return (
      t && typeof t == 'object' && (n = Object.assign(Object.assign({}, n), t)),
      n
    )
  }, [t, o])
}
function Be() {
  const e = {}
  for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++)
    o[n] = arguments[n]
  return (
    o.forEach((a) => {
      a &&
        Object.keys(a).forEach((r) => {
          a[r] !== void 0 && (e[r] = a[r])
        })
    }),
    e
  )
}
const an = {}
function ln(e, t) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : an
  const n = Te(e),
    a = Te(t),
    r = typeof n != 'boolean' ? !!(n != null && n.disabled) : !1,
    d = h.useMemo(
      () => Object.assign({ closeIcon: h.createElement(ye, null) }, o),
      [o],
    ),
    c = h.useMemo(
      () =>
        n === !1
          ? !1
          : n
            ? Be(d, a, n)
            : a === !1
              ? !1
              : a
                ? Be(d, a)
                : d.closable
                  ? d
                  : !1,
      [n, a, d],
    )
  return h.useMemo(() => {
    if (c === !1) return [!1, null, r]
    const { closeIconRender: i } = d,
      { closeIcon: u } = c
    let s = u
    if (s != null) {
      i && (s = i(u))
      const m = pe(c, !0)
      Object.keys(m).length &&
        (s = h.isValidElement(s)
          ? h.cloneElement(s, m)
          : h.createElement('span', Object.assign({}, m), s))
    }
    return [!0, s, r]
  }, [c, d])
}
const rn = () => wt() && window.document.documentElement,
  le = (e) => {
    const { prefixCls: t, className: o, style: n, size: a, shape: r } = e,
      d = S({ [`${t}-lg`]: a === 'large', [`${t}-sm`]: a === 'small' }),
      c = S({
        [`${t}-circle`]: r === 'circle',
        [`${t}-square`]: r === 'square',
        [`${t}-round`]: r === 'round',
      }),
      i = l.useMemo(
        () =>
          typeof a == 'number'
            ? { width: a, height: a, lineHeight: `${a}px` }
            : {},
        [a],
      )
    return l.createElement('span', {
      className: S(t, d, c, o),
      style: Object.assign(Object.assign({}, i), n),
    })
  },
  sn = new ve('ant-skeleton-loading', {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  }),
  re = (e) => ({ height: e, lineHeight: N(e) }),
  Z = (e) => Object.assign({ width: e }, re(e)),
  cn = (e) => ({
    background: e.skeletonLoadingBackground,
    backgroundSize: '400% 100%',
    animationName: sn,
    animationDuration: e.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
  }),
  ue = (e, t) =>
    Object.assign(
      { width: t(e).mul(5).equal(), minWidth: t(e).mul(5).equal() },
      re(e),
    ),
  dn = (e) => {
    const {
      skeletonAvatarCls: t,
      gradientFromColor: o,
      controlHeight: n,
      controlHeightLG: a,
      controlHeightSM: r,
    } = e
    return {
      [t]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: o },
        Z(n),
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
      [`${t}${t}-lg`]: Object.assign({}, Z(a)),
      [`${t}${t}-sm`]: Object.assign({}, Z(r)),
    }
  },
  un = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: o,
      skeletonInputCls: n,
      controlHeightLG: a,
      controlHeightSM: r,
      gradientFromColor: d,
      calc: c,
    } = e
    return {
      [n]: Object.assign(
        {
          display: 'inline-block',
          verticalAlign: 'top',
          background: d,
          borderRadius: o,
        },
        ue(t, c),
      ),
      [`${n}-lg`]: Object.assign({}, ue(a, c)),
      [`${n}-sm`]: Object.assign({}, ue(r, c)),
    }
  },
  Me = (e) => Object.assign({ width: e }, re(e)),
  mn = (e) => {
    const {
      skeletonImageCls: t,
      imageSizeBase: o,
      gradientFromColor: n,
      borderRadiusSM: a,
      calc: r,
    } = e
    return {
      [t]: Object.assign(
        Object.assign(
          {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            background: n,
            borderRadius: a,
          },
          Me(r(o).mul(2).equal()),
        ),
        {
          [`${t}-path`]: { fill: '#bfbfbf' },
          [`${t}-svg`]: Object.assign(Object.assign({}, Me(o)), {
            maxWidth: r(o).mul(4).equal(),
            maxHeight: r(o).mul(4).equal(),
          }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
        },
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
    }
  },
  me = (e, t, o) => {
    const { skeletonButtonCls: n } = e
    return {
      [`${o}${n}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
      [`${o}${n}-round`]: { borderRadius: t },
    }
  },
  fe = (e, t) =>
    Object.assign(
      { width: t(e).mul(2).equal(), minWidth: t(e).mul(2).equal() },
      re(e),
    ),
  fn = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: o,
      controlHeight: n,
      controlHeightLG: a,
      controlHeightSM: r,
      gradientFromColor: d,
      calc: c,
    } = e
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [o]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: d,
                    borderRadius: t,
                    width: c(n).mul(2).equal(),
                    minWidth: c(n).mul(2).equal(),
                  },
                  fe(n, c),
                ),
              },
              me(e, n, o),
            ),
            { [`${o}-lg`]: Object.assign({}, fe(a, c)) },
          ),
          me(e, a, `${o}-lg`),
        ),
        { [`${o}-sm`]: Object.assign({}, fe(r, c)) },
      ),
      me(e, r, `${o}-sm`),
    )
  },
  gn = (e) => {
    const {
      componentCls: t,
      skeletonAvatarCls: o,
      skeletonTitleCls: n,
      skeletonParagraphCls: a,
      skeletonButtonCls: r,
      skeletonInputCls: d,
      skeletonImageCls: c,
      controlHeight: i,
      controlHeightLG: u,
      controlHeightSM: s,
      gradientFromColor: m,
      padding: g,
      marginSM: v,
      borderRadius: b,
      titleHeight: f,
      blockRadius: x,
      paragraphLiHeight: p,
      controlHeightXS: C,
      paragraphMarginTop: y,
    } = e
    return {
      [t]: {
        display: 'table',
        width: '100%',
        [`${t}-header`]: {
          display: 'table-cell',
          paddingInlineEnd: g,
          verticalAlign: 'top',
          [o]: Object.assign(
            { display: 'inline-block', verticalAlign: 'top', background: m },
            Z(i),
          ),
          [`${o}-circle`]: { borderRadius: '50%' },
          [`${o}-lg`]: Object.assign({}, Z(u)),
          [`${o}-sm`]: Object.assign({}, Z(s)),
        },
        [`${t}-content`]: {
          display: 'table-cell',
          width: '100%',
          verticalAlign: 'top',
          [n]: {
            width: '100%',
            height: f,
            background: m,
            borderRadius: x,
            [`+ ${a}`]: { marginBlockStart: s },
          },
          [a]: {
            padding: 0,
            '> li': {
              width: '100%',
              height: p,
              listStyle: 'none',
              background: m,
              borderRadius: x,
              '+ li': { marginBlockStart: C },
            },
          },
          [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: '61%',
          },
        },
        [`&-round ${t}-content`]: { [`${n}, ${a} > li`]: { borderRadius: b } },
      },
      [`${t}-with-avatar ${t}-content`]: {
        [n]: { marginBlockStart: v, [`+ ${a}`]: { marginBlockStart: y } },
      },
      [`${t}${t}-element`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({ display: 'inline-block', width: 'auto' }, fn(e)),
            dn(e),
          ),
          un(e),
        ),
        mn(e),
      ),
      [`${t}${t}-block`]: {
        width: '100%',
        [r]: { width: '100%' },
        [d]: { width: '100%' },
      },
      [`${t}${t}-active`]: {
        [`
        ${n},
        ${a} > li,
        ${o},
        ${r},
        ${d},
        ${c}
      `]: Object.assign({}, cn(e)),
      },
    }
  },
  Cn = (e) => {
    const { colorFillContent: t, colorFill: o } = e,
      n = t,
      a = o
    return {
      color: n,
      colorGradientEnd: a,
      gradientFromColor: n,
      gradientToColor: a,
      titleHeight: e.controlHeight / 2,
      blockRadius: e.borderRadiusSM,
      paragraphMarginTop: e.marginLG + e.marginXXS,
      paragraphLiHeight: e.controlHeight / 2,
    }
  },
  Y = qe(
    'Skeleton',
    (e) => {
      const { componentCls: t, calc: o } = e,
        n = We(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: o(e.controlHeight).mul(1.5).equal(),
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
          skeletonLoadingMotionDuration: '1.4s',
        })
      return [gn(n)]
    },
    Cn,
    {
      deprecatedTokens: [
        ['color', 'gradientFromColor'],
        ['colorGradientEnd', 'gradientToColor'],
      ],
    },
  ),
  vn = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        active: a,
        shape: r = 'circle',
        size: d = 'default',
      } = e,
      { getPrefixCls: c } = l.useContext(F),
      i = c('skeleton', t),
      [u, s, m] = Y(i),
      g = xe(e, ['prefixCls', 'className']),
      v = S(i, `${i}-element`, { [`${i}-active`]: a }, o, n, s, m)
    return u(
      l.createElement(
        'div',
        { className: v },
        l.createElement(
          le,
          Object.assign({ prefixCls: `${i}-avatar`, shape: r, size: d }, g),
        ),
      ),
    )
  },
  bn = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        active: a,
        block: r = !1,
        size: d = 'default',
      } = e,
      { getPrefixCls: c } = l.useContext(F),
      i = c('skeleton', t),
      [u, s, m] = Y(i),
      g = xe(e, ['prefixCls']),
      v = S(
        i,
        `${i}-element`,
        { [`${i}-active`]: a, [`${i}-block`]: r },
        o,
        n,
        s,
        m,
      )
    return u(
      l.createElement(
        'div',
        { className: v },
        l.createElement(
          le,
          Object.assign({ prefixCls: `${i}-button`, size: d }, g),
        ),
      ),
    )
  },
  pn =
    'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
  hn = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        style: a,
        active: r,
      } = e,
      { getPrefixCls: d } = l.useContext(F),
      c = d('skeleton', t),
      [i, u, s] = Y(c),
      m = S(c, `${c}-element`, { [`${c}-active`]: r }, o, n, u, s)
    return i(
      l.createElement(
        'div',
        { className: m },
        l.createElement(
          'div',
          { className: S(`${c}-image`, o), style: a },
          l.createElement(
            'svg',
            {
              viewBox: '0 0 1098 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              className: `${c}-image-svg`,
            },
            l.createElement('title', null, 'Image placeholder'),
            l.createElement('path', { d: pn, className: `${c}-image-path` }),
          ),
        ),
      ),
    )
  },
  yn = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        active: a,
        block: r,
        size: d = 'default',
      } = e,
      { getPrefixCls: c } = l.useContext(F),
      i = c('skeleton', t),
      [u, s, m] = Y(i),
      g = xe(e, ['prefixCls']),
      v = S(
        i,
        `${i}-element`,
        { [`${i}-active`]: a, [`${i}-block`]: r },
        o,
        n,
        s,
        m,
      )
    return u(
      l.createElement(
        'div',
        { className: v },
        l.createElement(
          le,
          Object.assign({ prefixCls: `${i}-input`, size: d }, g),
        ),
      ),
    )
  },
  xn = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        style: a,
        active: r,
        children: d,
      } = e,
      { getPrefixCls: c } = l.useContext(F),
      i = c('skeleton', t),
      [u, s, m] = Y(i),
      g = S(i, `${i}-element`, { [`${i}-active`]: r }, s, o, n, m)
    return u(
      l.createElement(
        'div',
        { className: g },
        l.createElement('div', { className: S(`${i}-image`, o), style: a }, d),
      ),
    )
  },
  $n = (e, t) => {
    const { width: o, rows: n = 2 } = t
    if (Array.isArray(o)) return o[e]
    if (n - 1 === e) return o
  },
  Sn = (e) => {
    const { prefixCls: t, className: o, style: n, rows: a } = e,
      r = W(new Array(a)).map((d, c) =>
        l.createElement('li', { key: c, style: { width: $n(c, e) } }),
      )
    return l.createElement('ul', { className: S(t, o), style: n }, r)
  },
  On = (e) => {
    let { prefixCls: t, className: o, width: n, style: a } = e
    return l.createElement('h3', {
      className: S(t, o),
      style: Object.assign({ width: n }, a),
    })
  }
function ge(e) {
  return e && typeof e == 'object' ? e : {}
}
function En(e, t) {
  return e && !t
    ? { size: 'large', shape: 'square' }
    : { size: 'large', shape: 'circle' }
}
function wn(e, t) {
  return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {}
}
function Pn(e, t) {
  const o = {}
  return (
    (!e || !t) && (o.width = '61%'), !e && t ? (o.rows = 3) : (o.rows = 2), o
  )
}
const J = (e) => {
  const {
      prefixCls: t,
      loading: o,
      className: n,
      rootClassName: a,
      style: r,
      children: d,
      avatar: c = !1,
      title: i = !0,
      paragraph: u = !0,
      active: s,
      round: m,
    } = e,
    { getPrefixCls: g, direction: v, skeleton: b } = l.useContext(F),
    f = g('skeleton', t),
    [x, p, C] = Y(f)
  if (o || !('loading' in e)) {
    const y = !!c,
      $ = !!i,
      w = !!u
    let O
    if (y) {
      const P = Object.assign(
        Object.assign({ prefixCls: `${f}-avatar` }, En($, w)),
        ge(c),
      )
      O = l.createElement(
        'div',
        { className: `${f}-header` },
        l.createElement(le, Object.assign({}, P)),
      )
    }
    let E
    if ($ || w) {
      let P
      if ($) {
        const T = Object.assign(
          Object.assign({ prefixCls: `${f}-title` }, wn(y, w)),
          ge(i),
        )
        P = l.createElement(On, Object.assign({}, T))
      }
      let B
      if (w) {
        const T = Object.assign(
          Object.assign({ prefixCls: `${f}-paragraph` }, Pn(y, $)),
          ge(u),
        )
        B = l.createElement(Sn, Object.assign({}, T))
      }
      E = l.createElement('div', { className: `${f}-content` }, P, B)
    }
    const R = S(
      f,
      {
        [`${f}-with-avatar`]: y,
        [`${f}-active`]: s,
        [`${f}-rtl`]: v === 'rtl',
        [`${f}-round`]: m,
      },
      b == null ? void 0 : b.className,
      n,
      a,
      p,
      C,
    )
    return x(
      l.createElement(
        'div',
        {
          className: R,
          style: Object.assign(
            Object.assign({}, b == null ? void 0 : b.style),
            r,
          ),
        },
        O,
        E,
      ),
    )
  }
  return d ?? null
}
J.Button = bn
J.Avatar = vn
J.Input = yn
J.Image = hn
J.Node = xn
function ze() {}
const Nn = l.createContext({ add: ze, remove: ze })
function jn(e) {
  const t = l.useContext(Nn),
    o = l.useRef()
  return Pt((a) => {
    if (a) {
      const r = e ? a.querySelector(e) : a
      t.add(r), (o.current = r)
    } else t.remove(o.current)
  })
}
const He = () => {
    const {
      cancelButtonProps: e,
      cancelTextLocale: t,
      onCancel: o,
    } = l.useContext(te)
    return h.createElement(be, Object.assign({ onClick: o }, e), t)
  },
  Ae = () => {
    const {
      confirmLoading: e,
      okButtonProps: t,
      okType: o,
      okTextLocale: n,
      onOk: a,
    } = l.useContext(te)
    return h.createElement(
      be,
      Object.assign({}, ke(o), { loading: e, onClick: a }, t),
      n,
    )
  }
function Je(e, t) {
  return h.createElement(
    'span',
    { className: `${e}-close-x` },
    t || h.createElement(ye, { className: `${e}-close-icon` }),
  )
}
const et = (e) => {
  const {
      okText: t,
      okType: o = 'primary',
      cancelText: n,
      confirmLoading: a,
      onOk: r,
      onCancel: d,
      okButtonProps: c,
      cancelButtonProps: i,
      footer: u,
    } = e,
    [s] = $e('Modal', Ve()),
    m = t || (s == null ? void 0 : s.okText),
    g = n || (s == null ? void 0 : s.cancelText),
    v = {
      confirmLoading: a,
      okButtonProps: c,
      cancelButtonProps: i,
      okTextLocale: m,
      cancelTextLocale: g,
      okType: o,
      onOk: r,
      onCancel: d,
    },
    b = h.useMemo(() => v, W(Object.values(v)))
  let f
  return (
    typeof u == 'function' || typeof u > 'u'
      ? ((f = h.createElement(
          h.Fragment,
          null,
          h.createElement(He, null),
          h.createElement(Ae, null),
        )),
        typeof u == 'function' && (f = u(f, { OkBtn: Ae, CancelBtn: He })),
        (f = h.createElement(Ue, { value: b }, f)))
      : (f = u),
    h.createElement(Nt, { disabled: !1 }, f)
  )
}
function Fe(e) {
  return { position: e, inset: 0 }
}
const In = (e) => {
    const { componentCls: t, antCls: o } = e
    return [
      {
        [`${t}-root`]: {
          [`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]: {
            transform: 'none',
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: 'none',
          },
          [`${t}${o}-zoom-leave ${t}-content`]: { pointerEvents: 'none' },
          [`${t}-mask`]: Object.assign(Object.assign({}, Fe('fixed')), {
            zIndex: e.zIndexPopupBase,
            height: '100%',
            backgroundColor: e.colorBgMask,
            pointerEvents: 'none',
            [`${t}-hidden`]: { display: 'none' },
          }),
          [`${t}-wrap`]: Object.assign(Object.assign({}, Fe('fixed')), {
            zIndex: e.zIndexPopupBase,
            overflow: 'auto',
            outline: 0,
            WebkitOverflowScrolling: 'touch',
          }),
        },
      },
      { [`${t}-root`]: Zt(e) },
    ]
  },
  Rn = (e) => {
    const { componentCls: t } = e
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap-rtl`]: { direction: 'rtl' },
          [`${t}-centered`]: {
            textAlign: 'center',
            '&::before': {
              display: 'inline-block',
              width: 0,
              height: '100%',
              verticalAlign: 'middle',
              content: '""',
            },
            [t]: {
              top: 0,
              display: 'inline-block',
              paddingBottom: 0,
              textAlign: 'start',
              verticalAlign: 'middle',
            },
          },
          [`@media (max-width: ${e.screenSMMax}px)`]: {
            [t]: {
              maxWidth: 'calc(100vw - 16px)',
              margin: `${N(e.marginXS)} auto`,
            },
            [`${t}-centered`]: { [t]: { flex: 1 } },
          },
        },
      },
      {
        [t]: Object.assign(Object.assign({}, It(e)), {
          pointerEvents: 'none',
          position: 'relative',
          top: 100,
          width: 'auto',
          maxWidth: `calc(100vw - ${N(e.calc(e.margin).mul(2).equal())})`,
          margin: '0 auto',
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.titleColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.titleFontSize,
            lineHeight: e.titleLineHeight,
            wordWrap: 'break-word',
          },
          [`${t}-content`]: {
            position: 'relative',
            backgroundColor: e.contentBg,
            backgroundClip: 'padding-box',
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadow,
            pointerEvents: 'auto',
            padding: e.contentPadding,
          },
          [`${t}-close`]: Object.assign(
            {
              position: 'absolute',
              top: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              insetInlineEnd: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
              padding: 0,
              color: e.modalCloseIconColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: 'none',
              background: 'transparent',
              borderRadius: e.borderRadiusSM,
              width: e.modalCloseBtnSize,
              height: e.modalCloseBtnSize,
              border: 0,
              outline: 0,
              cursor: 'pointer',
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              '&-x': {
                display: 'flex',
                fontSize: e.fontSizeLG,
                fontStyle: 'normal',
                lineHeight: N(e.modalCloseBtnSize),
                justifyContent: 'center',
                textTransform: 'none',
                textRendering: 'auto',
              },
              '&:disabled': { pointerEvents: 'none' },
              '&:hover': {
                color: e.modalCloseIconHoverColor,
                backgroundColor: e.colorBgTextHover,
                textDecoration: 'none',
              },
              '&:active': { backgroundColor: e.colorBgTextActive },
            },
            Rt(e),
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.headerBg,
            borderRadius: `${N(e.borderRadiusLG)} ${N(e.borderRadiusLG)} 0 0`,
            marginBottom: e.headerMarginBottom,
            padding: e.headerPadding,
            borderBottom: e.headerBorderBottom,
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: 'break-word',
            padding: e.bodyPadding,
            [`${t}-body-skeleton`]: {
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: `${N(e.margin)} auto`,
            },
          },
          [`${t}-footer`]: {
            textAlign: 'end',
            background: e.footerBg,
            marginTop: e.footerMarginTop,
            padding: e.footerPadding,
            borderTop: e.footerBorderTop,
            borderRadius: e.footerBorderRadius,
            [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
              marginInlineStart: e.marginXS,
            },
          },
          [`${t}-open`]: { overflow: 'hidden' },
        }),
      },
      {
        [`${t}-pure-panel`]: {
          top: 'auto',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
            display: 'flex',
            flexDirection: 'column',
            flex: 'auto',
          },
          [`${t}-confirm-body`]: { marginBottom: 'auto' },
        },
      },
    ]
  },
  Tn = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: 'rtl',
          [`${t}-confirm-body`]: { direction: 'rtl' },
        },
      },
    }
  },
  tt = (e) => {
    const t = e.padding,
      o = e.fontSizeHeading5,
      n = e.lineHeightHeading5
    return We(e, {
      modalHeaderHeight: e
        .calc(e.calc(n).mul(o).equal())
        .add(e.calc(t).mul(2).equal())
        .equal(),
      modalFooterBorderColorSplit: e.colorSplit,
      modalFooterBorderStyle: e.lineType,
      modalFooterBorderWidth: e.lineWidth,
      modalCloseIconColor: e.colorIcon,
      modalCloseIconHoverColor: e.colorIconHover,
      modalCloseBtnSize: e.controlHeight,
      modalConfirmIconSize: e.fontHeight,
      modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal(),
    })
  },
  nt = (e) => ({
    footerBg: 'transparent',
    headerBg: e.colorBgElevated,
    titleLineHeight: e.lineHeightHeading5,
    titleFontSize: e.fontSizeHeading5,
    contentBg: e.colorBgElevated,
    titleColor: e.colorTextHeading,
    contentPadding: e.wireframe
      ? 0
      : `${N(e.paddingMD)} ${N(e.paddingContentHorizontalLG)}`,
    headerPadding: e.wireframe ? `${N(e.padding)} ${N(e.paddingLG)}` : 0,
    headerBorderBottom: e.wireframe
      ? `${N(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    headerMarginBottom: e.wireframe ? 0 : e.marginXS,
    bodyPadding: e.wireframe ? e.paddingLG : 0,
    footerPadding: e.wireframe ? `${N(e.paddingXS)} ${N(e.padding)}` : 0,
    footerBorderTop: e.wireframe
      ? `${N(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    footerBorderRadius: e.wireframe
      ? `0 0 ${N(e.borderRadiusLG)} ${N(e.borderRadiusLG)}`
      : 0,
    footerMarginTop: e.wireframe ? 0 : e.marginSM,
    confirmBodyPadding: e.wireframe
      ? `${N(e.padding * 2)} ${N(e.padding * 2)} ${N(e.paddingLG)}`
      : 0,
    confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
    confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM,
  }),
  ot = qe(
    'Modal',
    (e) => {
      const t = tt(e)
      return [Rn(t), Tn(t), In(t), jt(t, 'zoom')]
    },
    nt,
    { unitless: { titleLineHeight: !0 } },
  )
var Bn = function (e, t) {
  var o = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]])
  return o
}
let Ce
const Mn = (e) => {
  ;(Ce = { x: e.pageX, y: e.pageY }),
    setTimeout(() => {
      Ce = null
    }, 100)
}
rn() && document.documentElement.addEventListener('click', Mn, !0)
const at = (e) => {
    var t
    const {
        getPopupContainer: o,
        getPrefixCls: n,
        direction: a,
        modal: r,
      } = l.useContext(F),
      d = (q) => {
        const { onCancel: M } = e
        M == null || M(q)
      },
      c = (q) => {
        const { onOk: M } = e
        M == null || M(q)
      },
      {
        prefixCls: i,
        className: u,
        rootClassName: s,
        open: m,
        wrapClassName: g,
        centered: v,
        getContainer: b,
        focusTriggerAfterClose: f = !0,
        style: x,
        visible: p,
        width: C = 520,
        footer: y,
        classNames: $,
        styles: w,
        children: O,
        loading: E,
      } = e,
      R = Bn(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'open',
        'wrapClassName',
        'centered',
        'getContainer',
        'focusTriggerAfterClose',
        'style',
        'visible',
        'width',
        'footer',
        'classNames',
        'styles',
        'children',
        'loading',
      ]),
      P = n('modal', i),
      B = n(),
      T = _e(P),
      [X, V, H] = ot(P, T),
      A = S(g, { [`${P}-centered`]: !!v, [`${P}-wrap-rtl`]: a === 'rtl' }),
      k =
        y !== null && !E
          ? l.createElement(et, Object.assign({}, e, { onOk: c, onCancel: d }))
          : null,
      [D, _, ee] = ln(Re(e), Re(r), {
        closable: !0,
        closeIcon: l.createElement(ye, { className: `${P}-close-icon` }),
        closeIconRender: (q) => Je(P, q),
      }),
      U = jn(`.${P}-content`),
      [K, z] = Tt('Modal', R.zIndex)
    return X(
      l.createElement(
        Bt,
        { form: !0, space: !0 },
        l.createElement(
          Mt.Provider,
          { value: z },
          l.createElement(
            Ye,
            Object.assign({ width: C }, R, {
              zIndex: K,
              getContainer: b === void 0 ? o : b,
              prefixCls: P,
              rootClassName: S(V, s, H, T),
              footer: k,
              visible: m ?? p,
              mousePosition:
                (t = R.mousePosition) !== null && t !== void 0 ? t : Ce,
              onClose: d,
              closable: D && { disabled: ee, closeIcon: _ },
              closeIcon: _,
              focusTriggerAfterClose: f,
              transitionName: ae(B, 'zoom', e.transitionName),
              maskTransitionName: ae(B, 'fade', e.maskTransitionName),
              className: S(V, u, r == null ? void 0 : r.className),
              style: Object.assign(
                Object.assign({}, r == null ? void 0 : r.style),
                x,
              ),
              classNames: Object.assign(
                Object.assign(
                  Object.assign({}, r == null ? void 0 : r.classNames),
                  $,
                ),
                { wrapper: S(A, $ == null ? void 0 : $.wrapper) },
              ),
              styles: Object.assign(
                Object.assign({}, r == null ? void 0 : r.styles),
                w,
              ),
              panelRef: U,
            }),
            E
              ? l.createElement(J, {
                  active: !0,
                  title: !1,
                  paragraph: { rows: 4 },
                  className: `${P}-body-skeleton`,
                })
              : O,
          ),
        ),
      ),
    )
  },
  zn = (e) => {
    const {
        componentCls: t,
        titleFontSize: o,
        titleLineHeight: n,
        modalConfirmIconSize: a,
        fontSize: r,
        lineHeight: d,
        modalTitleHeight: c,
        fontHeight: i,
        confirmBodyPadding: u,
      } = e,
      s = `${t}-confirm`
    return {
      [s]: {
        '&-rtl': { direction: 'rtl' },
        [`${e.antCls}-modal-header`]: { display: 'none' },
        [`${s}-body-wrapper`]: Object.assign({}, Ht()),
        [`&${t} ${t}-body`]: { padding: u },
        [`${s}-body`]: {
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'start',
          [`> ${e.iconCls}`]: {
            flex: 'none',
            fontSize: a,
            marginInlineEnd: e.confirmIconMarginInlineEnd,
            marginTop: e.calc(e.calc(i).sub(a).equal()).div(2).equal(),
          },
          [`&-has-title > ${e.iconCls}`]: {
            marginTop: e.calc(e.calc(c).sub(a).equal()).div(2).equal(),
          },
        },
        [`${s}-paragraph`]: {
          display: 'flex',
          flexDirection: 'column',
          flex: 'auto',
          rowGap: e.marginXS,
        },
        [`${e.iconCls} + ${s}-paragraph`]: {
          maxWidth: `calc(100% - ${N(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`,
        },
        [`${s}-title`]: {
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: o,
          lineHeight: n,
        },
        [`${s}-content`]: { color: e.colorText, fontSize: r, lineHeight: d },
        [`${s}-btns`]: {
          textAlign: 'end',
          marginTop: e.confirmBtnsMarginTop,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS,
          },
        },
      },
      [`${s}-error ${s}-body > ${e.iconCls}`]: { color: e.colorError },
      [`${s}-warning ${s}-body > ${e.iconCls},
        ${s}-confirm ${s}-body > ${e.iconCls}`]: { color: e.colorWarning },
      [`${s}-info ${s}-body > ${e.iconCls}`]: { color: e.colorInfo },
      [`${s}-success ${s}-body > ${e.iconCls}`]: { color: e.colorSuccess },
    }
  },
  Hn = zt(
    ['Modal', 'confirm'],
    (e) => {
      const t = tt(e)
      return [zn(t)]
    },
    nt,
    { order: -1e3 },
  )
var An = function (e, t) {
  var o = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]])
  return o
}
function lt(e) {
  const {
      prefixCls: t,
      icon: o,
      okText: n,
      cancelText: a,
      confirmPrefixCls: r,
      type: d,
      okCancel: c,
      footer: i,
      locale: u,
    } = e,
    s = An(e, [
      'prefixCls',
      'icon',
      'okText',
      'cancelText',
      'confirmPrefixCls',
      'type',
      'okCancel',
      'footer',
      'locale',
    ])
  let m = o
  if (!o && o !== null)
    switch (d) {
      case 'info':
        m = l.createElement(kt, null)
        break
      case 'success':
        m = l.createElement(Lt, null)
        break
      case 'error':
        m = l.createElement(Ft, null)
        break
      default:
        m = l.createElement(At, null)
    }
  const g = c ?? d === 'confirm',
    v = e.autoFocusButton === null ? !1 : e.autoFocusButton || 'ok',
    [b] = $e('Modal'),
    f = u || b,
    x =
      n ||
      (g ? (f == null ? void 0 : f.okText) : f == null ? void 0 : f.justOkText),
    p = a || (f == null ? void 0 : f.cancelText),
    C = Object.assign(
      {
        autoFocusButton: v,
        cancelTextLocale: p,
        okTextLocale: x,
        mergedOkCancel: g,
      },
      s,
    ),
    y = l.useMemo(() => C, W(Object.values(C))),
    $ = l.createElement(
      l.Fragment,
      null,
      l.createElement(Pe, null),
      l.createElement(Ne, null),
    ),
    w = e.title !== void 0 && e.title !== null,
    O = `${r}-body`
  return l.createElement(
    'div',
    { className: `${r}-body-wrapper` },
    l.createElement(
      'div',
      { className: S(O, { [`${O}-has-title`]: w }) },
      m,
      l.createElement(
        'div',
        { className: `${r}-paragraph` },
        w && l.createElement('span', { className: `${r}-title` }, e.title),
        l.createElement('div', { className: `${r}-content` }, e.content),
      ),
    ),
    i === void 0 || typeof i == 'function'
      ? l.createElement(
          Ue,
          { value: y },
          l.createElement(
            'div',
            { className: `${r}-btns` },
            typeof i == 'function' ? i($, { OkBtn: Ne, CancelBtn: Pe }) : $,
          ),
        )
      : i,
    l.createElement(Hn, { prefixCls: t }),
  )
}
const Fn = (e) => {
    const {
        close: t,
        zIndex: o,
        afterClose: n,
        open: a,
        keyboard: r,
        centered: d,
        getContainer: c,
        maskStyle: i,
        direction: u,
        prefixCls: s,
        wrapClassName: m,
        rootPrefixCls: g,
        bodyStyle: v,
        closable: b = !1,
        closeIcon: f,
        modalRender: x,
        focusTriggerAfterClose: p,
        onConfirm: C,
        styles: y,
      } = e,
      $ = `${s}-confirm`,
      w = e.width || 416,
      O = e.style || {},
      E = e.mask === void 0 ? !0 : e.mask,
      R = e.maskClosable === void 0 ? !1 : e.maskClosable,
      P = S($, `${$}-${e.type}`, { [`${$}-rtl`]: u === 'rtl' }, e.className),
      [, B] = Dt(),
      T = l.useMemo(() => (o !== void 0 ? o : B.zIndexPopupBase + qt), [o, B])
    return l.createElement(
      at,
      {
        prefixCls: s,
        className: P,
        wrapClassName: S({ [`${$}-centered`]: !!e.centered }, m),
        onCancel: () => {
          t == null || t({ triggerCancel: !0 }), C == null || C(!1)
        },
        open: a,
        title: '',
        footer: null,
        transitionName: ae(g || '', 'zoom', e.transitionName),
        maskTransitionName: ae(g || '', 'fade', e.maskTransitionName),
        mask: E,
        maskClosable: R,
        style: O,
        styles: Object.assign({ body: v, mask: i }, y),
        width: w,
        zIndex: T,
        afterClose: n,
        keyboard: r,
        centered: d,
        getContainer: c,
        closable: b,
        closeIcon: f,
        modalRender: x,
        focusTriggerAfterClose: p,
      },
      l.createElement(lt, Object.assign({}, e, { confirmPrefixCls: $ })),
    )
  },
  rt = (e) => {
    const { rootPrefixCls: t, iconPrefixCls: o, direction: n, theme: a } = e
    return l.createElement(
      Ge,
      { prefixCls: t, iconPrefixCls: o, direction: n, theme: a },
      l.createElement(Fn, Object.assign({}, e)),
    )
  },
  Q = []
let it = ''
function st() {
  return it
}
const Ln = (e) => {
  var t, o
  const { prefixCls: n, getContainer: a, direction: r } = e,
    d = Ve(),
    c = l.useContext(F),
    i = st() || c.getPrefixCls(),
    u = n || `${i}-modal`
  let s = a
  return (
    s === !1 && (s = void 0),
    h.createElement(
      rt,
      Object.assign({}, e, {
        rootPrefixCls: i,
        prefixCls: u,
        iconPrefixCls: c.iconPrefixCls,
        theme: c.theme,
        direction: r ?? c.direction,
        locale:
          (o = (t = c.locale) === null || t === void 0 ? void 0 : t.Modal) !==
            null && o !== void 0
            ? o
            : d,
        getContainer: s,
      }),
    )
  )
}
function ne(e) {
  const t = _t(),
    o = document.createDocumentFragment()
  let n = Object.assign(Object.assign({}, e), { close: c, open: !0 }),
    a
  function r() {
    for (var u, s = arguments.length, m = new Array(s), g = 0; g < s; g++)
      m[g] = arguments[g]
    if (m.some((f) => (f == null ? void 0 : f.triggerCancel))) {
      var b
      ;(u = e.onCancel) === null ||
        u === void 0 ||
        (b = u).call.apply(b, [e, () => {}].concat(W(m.slice(1))))
    }
    for (let f = 0; f < Q.length; f++)
      if (Q[f] === c) {
        Q.splice(f, 1)
        break
      }
    Wt(o)
  }
  function d(u) {
    clearTimeout(a),
      (a = setTimeout(() => {
        const s = t.getPrefixCls(void 0, st()),
          m = t.getIconPrefixCls(),
          g = t.getTheme(),
          v = h.createElement(Ln, Object.assign({}, u))
        Vt(
          h.createElement(
            Ge,
            { prefixCls: s, iconPrefixCls: m, theme: g },
            t.holderRender ? t.holderRender(v) : v,
          ),
          o,
        )
      }))
  }
  function c() {
    for (var u = arguments.length, s = new Array(u), m = 0; m < u; m++)
      s[m] = arguments[m]
    ;(n = Object.assign(Object.assign({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == 'function' && e.afterClose(), r.apply(this, s)
      },
    })),
      n.visible && delete n.visible,
      d(n)
  }
  function i(u) {
    typeof u == 'function'
      ? (n = u(n))
      : (n = Object.assign(Object.assign({}, n), u)),
      d(n)
  }
  return d(n), Q.push(c), { destroy: c, update: i }
}
function ct(e) {
  return Object.assign(Object.assign({}, e), { type: 'warning' })
}
function dt(e) {
  return Object.assign(Object.assign({}, e), { type: 'info' })
}
function ut(e) {
  return Object.assign(Object.assign({}, e), { type: 'success' })
}
function mt(e) {
  return Object.assign(Object.assign({}, e), { type: 'error' })
}
function ft(e) {
  return Object.assign(Object.assign({}, e), { type: 'confirm' })
}
function kn(e) {
  let { rootPrefixCls: t } = e
  it = t
}
var Dn = function (e, t) {
  var o = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]])
  return o
}
const qn = (e, t) => {
    var o,
      { afterClose: n, config: a } = e,
      r = Dn(e, ['afterClose', 'config'])
    const [d, c] = l.useState(!0),
      [i, u] = l.useState(a),
      { direction: s, getPrefixCls: m } = l.useContext(F),
      g = m('modal'),
      v = m(),
      b = () => {
        var C
        n(), (C = i.afterClose) === null || C === void 0 || C.call(i)
      },
      f = function () {
        var C
        c(!1)
        for (var y = arguments.length, $ = new Array(y), w = 0; w < y; w++)
          $[w] = arguments[w]
        if ($.some((R) => (R == null ? void 0 : R.triggerCancel))) {
          var E
          ;(C = i.onCancel) === null ||
            C === void 0 ||
            (E = C).call.apply(E, [i, () => {}].concat(W($.slice(1))))
        }
      }
    l.useImperativeHandle(t, () => ({
      destroy: f,
      update: (C) => {
        u((y) => Object.assign(Object.assign({}, y), C))
      },
    }))
    const x =
        (o = i.okCancel) !== null && o !== void 0 ? o : i.type === 'confirm',
      [p] = $e('Modal', Gt.Modal)
    return l.createElement(
      rt,
      Object.assign(
        { prefixCls: g, rootPrefixCls: v },
        i,
        {
          close: f,
          open: d,
          afterClose: b,
          okText:
            i.okText ||
            (x
              ? p == null
                ? void 0
                : p.okText
              : p == null
                ? void 0
                : p.justOkText),
          direction: i.direction || s,
          cancelText: i.cancelText || (p == null ? void 0 : p.cancelText),
        },
        r,
      ),
    )
  },
  Wn = l.forwardRef(qn)
let Le = 0
const Vn = l.memo(
  l.forwardRef((e, t) => {
    const [o, n] = Ut()
    return (
      l.useImperativeHandle(t, () => ({ patchElement: n }), []),
      l.createElement(l.Fragment, null, o)
    )
  }),
)
function _n() {
  const e = l.useRef(null),
    [t, o] = l.useState([])
  l.useEffect(() => {
    t.length &&
      (W(t).forEach((d) => {
        d()
      }),
      o([]))
  }, [t])
  const n = l.useCallback(
    (r) =>
      function (c) {
        var i
        Le += 1
        const u = l.createRef()
        let s
        const m = new Promise((x) => {
          s = x
        })
        let g = !1,
          v
        const b = l.createElement(Wn, {
          key: `modal-${Le}`,
          config: r(c),
          ref: u,
          afterClose: () => {
            v == null || v()
          },
          isSilent: () => g,
          onConfirm: (x) => {
            s(x)
          },
        })
        return (
          (v =
            (i = e.current) === null || i === void 0
              ? void 0
              : i.patchElement(b)),
          v && Q.push(v),
          {
            destroy: () => {
              function x() {
                var p
                ;(p = u.current) === null || p === void 0 || p.destroy()
              }
              u.current ? x() : o((p) => [].concat(W(p), [x]))
            },
            update: (x) => {
              function p() {
                var C
                ;(C = u.current) === null || C === void 0 || C.update(x)
              }
              u.current ? p() : o((C) => [].concat(W(C), [p]))
            },
            then: (x) => ((g = !0), m.then(x)),
          }
        )
      },
    [],
  )
  return [
    l.useMemo(
      () => ({
        info: n(dt),
        success: n(ut),
        error: n(mt),
        warning: n(ct),
        confirm: n(ft),
      }),
      [],
    ),
    l.createElement(Vn, { key: 'modal-holder', ref: e }),
  ]
}
var Gn = function (e, t) {
  var o = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]])
  return o
}
const Xn = (e) => {
    const {
        prefixCls: t,
        className: o,
        closeIcon: n,
        closable: a,
        type: r,
        title: d,
        children: c,
        footer: i,
      } = e,
      u = Gn(e, [
        'prefixCls',
        'className',
        'closeIcon',
        'closable',
        'type',
        'title',
        'children',
        'footer',
      ]),
      { getPrefixCls: s } = l.useContext(F),
      m = s(),
      g = t || s('modal'),
      v = _e(m),
      [b, f, x] = ot(g, v),
      p = `${g}-confirm`
    let C = {}
    return (
      r
        ? (C = {
            closable: a ?? !1,
            title: '',
            footer: '',
            children: l.createElement(
              lt,
              Object.assign({}, e, {
                prefixCls: g,
                confirmPrefixCls: p,
                rootPrefixCls: m,
                content: c,
              }),
            ),
          })
        : (C = {
            closable: a ?? !0,
            title: d,
            footer: i !== null && l.createElement(et, Object.assign({}, e)),
            children: c,
          }),
      b(
        l.createElement(
          Qe,
          Object.assign(
            {
              prefixCls: g,
              className: S(
                f,
                `${g}-pure-panel`,
                r && p,
                r && `${p}-${r}`,
                o,
                x,
                v,
              ),
            },
            u,
            { closeIcon: Je(g, n), closable: a },
            C,
          ),
        ),
      )
    )
  },
  Un = Xt(Xn)
function gt(e) {
  return ne(ct(e))
}
const L = at
L.useModal = _n
L.info = function (t) {
  return ne(dt(t))
}
L.success = function (t) {
  return ne(ut(t))
}
L.error = function (t) {
  return ne(mt(t))
}
L.warning = gt
L.warn = gt
L.confirm = function (t) {
  return ne(ft(t))
}
L.destroyAll = function () {
  for (; Q.length; ) {
    const t = Q.pop()
    t && t()
  }
}
L.config = kn
L._InternalPanelDoNotUseOrYouWillBeFired = Un
export { L as M }
