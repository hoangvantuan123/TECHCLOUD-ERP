import {
  r,
  l as Be,
  t as wt,
  v as St,
  q as te,
  aw as q,
  bH as Gn,
  p as Q,
  b7 as Yn,
  J as _t,
  O as qn,
  m as oe,
  _ as Je,
  K as bt,
  k as Qn,
  z as Jn,
  bI as Zn,
  o as Qe,
  az as kn,
  ax as er,
  D as yt,
  x as Wt,
  G as In,
  y as rt,
  L as tr,
  M as nr,
  bJ as rr,
  w as on,
  bj as an,
  bm as or,
  N as En,
  aO as ar,
  aB as ir,
  a_ as Gt,
  S as Nt,
  Z as Rn,
  P as It,
  ab as Yt,
  ai as lr,
  a1 as qt,
  a4 as cr,
  a3 as ur,
  a6 as sr,
  a5 as dr,
  a8 as jt,
  a9 as ln,
  aa as cn,
  Q as De,
  bK as xn,
  a0 as fr,
  I as vr,
  aX as mr,
  bL as gr,
  aD as pr,
  h as hr,
  ap as Sr,
  ac as br,
  ad as Cr,
  ae as wr,
  ah as yr,
  af as Ir,
  ag as Er,
  am as Rr,
  ak as xr,
  aA as Mr,
  ao as $r,
  an as Or,
} from './index-C0Ym1P--.js'
var zt = function (t) {
    var n = t.className,
      o = t.customizeIcon,
      a = t.customizeIconProps,
      l = t.children,
      i = t.onMouseDown,
      c = t.onClick,
      v = typeof o == 'function' ? o(a) : o
    return r.createElement(
      'span',
      {
        className: n,
        onMouseDown: function (f) {
          f.preventDefault(), i == null || i(f)
        },
        style: { userSelect: 'none', WebkitUserSelect: 'none' },
        unselectable: 'on',
        onClick: c,
        'aria-hidden': !0,
      },
      v !== void 0
        ? v
        : r.createElement(
            'span',
            {
              className: Be(
                n.split(/\s+/).map(function (m) {
                  return ''.concat(m, '-icon')
                }),
              ),
            },
            l,
          ),
    )
  },
  Dr = function (t, n, o, a, l) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1,
      c = arguments.length > 6 ? arguments[6] : void 0,
      v = arguments.length > 7 ? arguments[7] : void 0,
      m = wt.useMemo(
        function () {
          if (St(a) === 'object') return a.clearIcon
          if (l) return l
        },
        [a, l],
      ),
      f = wt.useMemo(
        function () {
          return !!(
            !i &&
            a &&
            (o.length || c) &&
            !(v === 'combobox' && c === '')
          )
        },
        [a, i, o.length, c, v],
      )
    return {
      allowClear: f,
      clearIcon: wt.createElement(
        zt,
        { className: ''.concat(t, '-clear'), onMouseDown: n, customizeIcon: m },
        '×',
      ),
    }
  },
  Mn = r.createContext(null)
function Pr() {
  return r.useContext(Mn)
}
function Tr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    t = r.useState(!1),
    n = te(t, 2),
    o = n[0],
    a = n[1],
    l = r.useRef(null),
    i = function () {
      window.clearTimeout(l.current)
    }
  r.useEffect(function () {
    return i
  }, [])
  var c = function (m, f) {
    i(),
      (l.current = window.setTimeout(function () {
        a(m), f && f()
      }, e))
  }
  return [o, c, i]
}
function $n() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    t = r.useRef(null),
    n = r.useRef(null)
  r.useEffect(function () {
    return function () {
      window.clearTimeout(n.current)
    }
  }, [])
  function o(a) {
    ;(a || t.current === null) && (t.current = a),
      window.clearTimeout(n.current),
      (n.current = window.setTimeout(function () {
        t.current = null
      }, e))
  }
  return [
    function () {
      return t.current
    },
    o,
  ]
}
function Nr(e, t, n, o) {
  var a = r.useRef(null)
  ;(a.current = { open: t, triggerOpen: n, customizedTrigger: o }),
    r.useEffect(function () {
      function l(i) {
        var c
        if (
          !((c = a.current) !== null && c !== void 0 && c.customizedTrigger)
        ) {
          var v = i.target
          v.shadowRoot && i.composed && (v = i.composedPath()[0] || v),
            a.current.open &&
              e()
                .filter(function (m) {
                  return m
                })
                .every(function (m) {
                  return !m.contains(v) && m !== v
                }) &&
              a.current.triggerOpen(!1)
        }
      }
      return (
        window.addEventListener('mousedown', l),
        function () {
          return window.removeEventListener('mousedown', l)
        }
      )
    }, [])
}
function _r(e) {
  return ![
    q.ESC,
    q.SHIFT,
    q.BACKSPACE,
    q.TAB,
    q.WIN_KEY,
    q.ALT,
    q.META,
    q.WIN_KEY_RIGHT,
    q.CTRL,
    q.SEMICOLON,
    q.EQUALS,
    q.CAPS_LOCK,
    q.CONTEXT_MENU,
    q.F1,
    q.F2,
    q.F3,
    q.F4,
    q.F5,
    q.F6,
    q.F7,
    q.F8,
    q.F9,
    q.F10,
    q.F11,
    q.F12,
  ].includes(e)
}
var zr = function (t, n) {
    var o,
      a = t.prefixCls,
      l = t.id,
      i = t.inputElement,
      c = t.disabled,
      v = t.tabIndex,
      m = t.autoFocus,
      f = t.autoComplete,
      s = t.editable,
      h = t.activeDescendantId,
      u = t.value,
      g = t.maxLength,
      d = t.onKeyDown,
      p = t.onMouseDown,
      w = t.onChange,
      b = t.onPaste,
      E = t.onCompositionStart,
      C = t.onCompositionEnd,
      F = t.open,
      V = t.attrs,
      M = i || r.createElement('input', null),
      j = M,
      X = j.ref,
      J = j.props,
      U = J.onKeyDown,
      G = J.onChange,
      ne = J.onMouseDown,
      L = J.onCompositionStart,
      re = J.onCompositionEnd,
      W = J.style
    return (
      Gn(!('maxLength' in M.props)),
      (M = r.cloneElement(
        M,
        Q(
          Q(
            Q({ type: 'search' }, J),
            {},
            {
              id: l,
              ref: Yn(n, X),
              disabled: c,
              tabIndex: v,
              autoComplete: f || 'off',
              autoFocus: m,
              className: Be(
                ''.concat(a, '-selection-search-input'),
                (o = M) === null ||
                  o === void 0 ||
                  (o = o.props) === null ||
                  o === void 0
                  ? void 0
                  : o.className,
              ),
              role: 'combobox',
              'aria-expanded': F || !1,
              'aria-haspopup': 'listbox',
              'aria-owns': ''.concat(l, '_list'),
              'aria-autocomplete': 'list',
              'aria-controls': ''.concat(l, '_list'),
              'aria-activedescendant': F ? h : void 0,
            },
            V,
          ),
          {},
          {
            value: s ? u : '',
            maxLength: g,
            readOnly: !s,
            unselectable: s ? null : 'on',
            style: Q(Q({}, W), {}, { opacity: s ? null : 0 }),
            onKeyDown: function (R) {
              d(R), U && U(R)
            },
            onMouseDown: function (R) {
              p(R), ne && ne(R)
            },
            onChange: function (R) {
              w(R), G && G(R)
            },
            onCompositionStart: function (R) {
              E(R), L && L(R)
            },
            onCompositionEnd: function (R) {
              C(R), re && re(R)
            },
            onPaste: b,
          },
        ),
      )),
      M
    )
  },
  On = r.forwardRef(zr)
function Dn(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : []
}
var Lr =
    typeof window < 'u' && window.document && window.document.documentElement,
  Hr = Lr
function Br(e) {
  return e != null
}
function Fr(e) {
  return !e && e !== 0
}
function un(e) {
  return ['string', 'number'].includes(St(e))
}
function Pn(e) {
  var t = void 0
  return (
    e &&
      (un(e.title)
        ? (t = e.title.toString())
        : un(e.label) && (t = e.label.toString())),
    t
  )
}
function Vr(e, t) {
  Hr ? r.useLayoutEffect(e, t) : r.useEffect(e, t)
}
function Ar(e) {
  var t
  return (t = e.key) !== null && t !== void 0 ? t : e.value
}
var sn = function (t) {
    t.preventDefault(), t.stopPropagation()
  },
  Wr = function (t) {
    var n = t.id,
      o = t.prefixCls,
      a = t.values,
      l = t.open,
      i = t.searchValue,
      c = t.autoClearSearchValue,
      v = t.inputRef,
      m = t.placeholder,
      f = t.disabled,
      s = t.mode,
      h = t.showSearch,
      u = t.autoFocus,
      g = t.autoComplete,
      d = t.activeDescendantId,
      p = t.tabIndex,
      w = t.removeIcon,
      b = t.maxTagCount,
      E = t.maxTagTextLength,
      C = t.maxTagPlaceholder,
      F =
        C === void 0
          ? function (B) {
              return '+ '.concat(B.length, ' ...')
            }
          : C,
      V = t.tagRender,
      M = t.onToggleOpen,
      j = t.onRemove,
      X = t.onInputChange,
      J = t.onInputPaste,
      U = t.onInputKeyDown,
      G = t.onInputMouseDown,
      ne = t.onInputCompositionStart,
      L = t.onInputCompositionEnd,
      re = r.useRef(null),
      W = r.useState(0),
      z = te(W, 2),
      R = z[0],
      N = z[1],
      Y = r.useState(!1),
      Z = te(Y, 2),
      we = Z[0],
      ce = Z[1],
      ue = ''.concat(o, '-selection'),
      de = l || (s === 'multiple' && c === !1) || s === 'tags' ? i : '',
      Ne = s === 'tags' || (s === 'multiple' && c === !1) || (h && (l || we))
    Vr(
      function () {
        N(re.current.scrollWidth)
      },
      [de],
    )
    var K = function (x, H, k, se, ae) {
        return r.createElement(
          'span',
          {
            title: Pn(x),
            className: Be(
              ''.concat(ue, '-item'),
              oe({}, ''.concat(ue, '-item-disabled'), k),
            ),
          },
          r.createElement(
            'span',
            { className: ''.concat(ue, '-item-content') },
            H,
          ),
          se &&
            r.createElement(
              zt,
              {
                className: ''.concat(ue, '-item-remove'),
                onMouseDown: sn,
                onClick: ae,
                customizeIcon: w,
              },
              '×',
            ),
        )
      },
      pe = function (x, H, k, se, ae, ge) {
        var Ie = function (Pe) {
          sn(Pe), M(!l)
        }
        return r.createElement(
          'span',
          { onMouseDown: Ie },
          V({
            label: H,
            value: x,
            disabled: k,
            closable: se,
            onClose: ae,
            isMaxTag: !!ge,
          }),
        )
      },
      ye = function (x) {
        var H = x.disabled,
          k = x.label,
          se = x.value,
          ae = !f && !H,
          ge = k
        if (
          typeof E == 'number' &&
          (typeof k == 'string' || typeof k == 'number')
        ) {
          var Ie = String(ge)
          Ie.length > E && (ge = ''.concat(Ie.slice(0, E), '...'))
        }
        var Oe = function (Re) {
          Re && Re.stopPropagation(), j(x)
        }
        return typeof V == 'function'
          ? pe(se, ge, H, ae, Oe)
          : K(x, ge, H, ae, Oe)
      },
      y = function (x) {
        var H = typeof F == 'function' ? F(x) : F
        return typeof V == 'function'
          ? pe(void 0, H, !1, !1, void 0, !0)
          : K({ title: H }, H, !1)
      },
      S = r.createElement(
        'div',
        {
          className: ''.concat(ue, '-search'),
          style: { width: R },
          onFocus: function () {
            ce(!0)
          },
          onBlur: function () {
            ce(!1)
          },
        },
        r.createElement(On, {
          ref: v,
          open: l,
          prefixCls: o,
          id: n,
          inputElement: null,
          disabled: f,
          autoFocus: u,
          autoComplete: g,
          editable: Ne,
          activeDescendantId: d,
          value: de,
          onKeyDown: U,
          onMouseDown: G,
          onChange: X,
          onPaste: J,
          onCompositionStart: ne,
          onCompositionEnd: L,
          tabIndex: p,
          attrs: _t(t, !0),
        }),
        r.createElement(
          'span',
          {
            ref: re,
            className: ''.concat(ue, '-search-mirror'),
            'aria-hidden': !0,
          },
          de,
          ' ',
        ),
      ),
      D = r.createElement(qn, {
        prefixCls: ''.concat(ue, '-overflow'),
        data: a,
        renderItem: ye,
        renderRest: y,
        suffix: S,
        itemKey: Ar,
        maxCount: b,
      })
    return r.createElement(
      r.Fragment,
      null,
      D,
      !a.length &&
        !de &&
        r.createElement(
          'span',
          { className: ''.concat(ue, '-placeholder') },
          m,
        ),
    )
  },
  jr = function (t) {
    var n = t.inputElement,
      o = t.prefixCls,
      a = t.id,
      l = t.inputRef,
      i = t.disabled,
      c = t.autoFocus,
      v = t.autoComplete,
      m = t.activeDescendantId,
      f = t.mode,
      s = t.open,
      h = t.values,
      u = t.placeholder,
      g = t.tabIndex,
      d = t.showSearch,
      p = t.searchValue,
      w = t.activeValue,
      b = t.maxLength,
      E = t.onInputKeyDown,
      C = t.onInputMouseDown,
      F = t.onInputChange,
      V = t.onInputPaste,
      M = t.onInputCompositionStart,
      j = t.onInputCompositionEnd,
      X = t.title,
      J = r.useState(!1),
      U = te(J, 2),
      G = U[0],
      ne = U[1],
      L = f === 'combobox',
      re = L || d,
      W = h[0],
      z = p || ''
    L && w && !G && (z = w),
      r.useEffect(
        function () {
          L && ne(!1)
        },
        [L, w],
      )
    var R = f !== 'combobox' && !s && !d ? !1 : !!z,
      N = X === void 0 ? Pn(W) : X,
      Y = r.useMemo(
        function () {
          return W
            ? null
            : r.createElement(
                'span',
                {
                  className: ''.concat(o, '-selection-placeholder'),
                  style: R ? { visibility: 'hidden' } : void 0,
                },
                u,
              )
        },
        [W, R, u, o],
      )
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        'span',
        { className: ''.concat(o, '-selection-search') },
        r.createElement(On, {
          ref: l,
          prefixCls: o,
          id: a,
          open: s,
          inputElement: n,
          disabled: i,
          autoFocus: c,
          autoComplete: v,
          editable: re,
          activeDescendantId: m,
          value: z,
          onKeyDown: E,
          onMouseDown: C,
          onChange: function (we) {
            ne(!0), F(we)
          },
          onPaste: V,
          onCompositionStart: M,
          onCompositionEnd: j,
          tabIndex: g,
          attrs: _t(t, !0),
          maxLength: L ? b : void 0,
        }),
      ),
      !L && W
        ? r.createElement(
            'span',
            {
              className: ''.concat(o, '-selection-item'),
              title: N,
              style: R ? { visibility: 'hidden' } : void 0,
            },
            W.label,
          )
        : null,
      Y,
    )
  },
  Kr = function (t, n) {
    var o = r.useRef(null),
      a = r.useRef(!1),
      l = t.prefixCls,
      i = t.open,
      c = t.mode,
      v = t.showSearch,
      m = t.tokenWithEnter,
      f = t.disabled,
      s = t.autoClearSearchValue,
      h = t.onSearch,
      u = t.onSearchSubmit,
      g = t.onToggleOpen,
      d = t.onInputKeyDown,
      p = t.domRef
    r.useImperativeHandle(n, function () {
      return {
        focus: function (R) {
          o.current.focus(R)
        },
        blur: function () {
          o.current.blur()
        },
      }
    })
    var w = $n(0),
      b = te(w, 2),
      E = b[0],
      C = b[1],
      F = function (R) {
        var N = R.which
        ;(N === q.UP || N === q.DOWN) && R.preventDefault(),
          d && d(R),
          N === q.ENTER &&
            c === 'tags' &&
            !a.current &&
            !i &&
            (u == null || u(R.target.value)),
          _r(N) && g(!0)
      },
      V = function () {
        C(!0)
      },
      M = r.useRef(null),
      j = function (R) {
        h(R, !0, a.current) !== !1 && g(!0)
      },
      X = function () {
        a.current = !0
      },
      J = function (R) {
        ;(a.current = !1), c !== 'combobox' && j(R.target.value)
      },
      U = function (R) {
        var N = R.target.value
        if (m && M.current && /[\r\n]/.test(M.current)) {
          var Y = M.current
            .replace(/[\r\n]+$/, '')
            .replace(/\r\n/g, ' ')
            .replace(/[\r\n]/g, ' ')
          N = N.replace(Y, M.current)
        }
        ;(M.current = null), j(N)
      },
      G = function (R) {
        var N = R.clipboardData,
          Y = N == null ? void 0 : N.getData('text')
        M.current = Y || ''
      },
      ne = function (R) {
        var N = R.target
        if (N !== o.current) {
          var Y = document.body.style.msTouchAction !== void 0
          Y
            ? setTimeout(function () {
                o.current.focus()
              })
            : o.current.focus()
        }
      },
      L = function (R) {
        var N = E()
        R.target !== o.current &&
          !N &&
          !(c === 'combobox' && f) &&
          R.preventDefault(),
          ((c !== 'combobox' && (!v || !N)) || !i) &&
            (i && s !== !1 && h('', !0, !1), g())
      },
      re = {
        inputRef: o,
        onInputKeyDown: F,
        onInputMouseDown: V,
        onInputChange: U,
        onInputPaste: G,
        onInputCompositionStart: X,
        onInputCompositionEnd: J,
      },
      W =
        c === 'multiple' || c === 'tags'
          ? r.createElement(Wr, Je({}, t, re))
          : r.createElement(jr, Je({}, t, re))
    return r.createElement(
      'div',
      {
        ref: p,
        className: ''.concat(l, '-selector'),
        onClick: ne,
        onMouseDown: L,
      },
      W,
    )
  },
  Xr = r.forwardRef(Kr),
  Ur = [
    'prefixCls',
    'disabled',
    'visible',
    'children',
    'popupElement',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'direction',
    'placement',
    'builtinPlacements',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'getPopupContainer',
    'empty',
    'getTriggerDOMNode',
    'onPopupVisibleChange',
    'onPopupMouseEnter',
  ],
  Gr = function (t) {
    var n = t === !0 ? 0 : 1
    return {
      bottomLeft: {
        points: ['tl', 'bl'],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      bottomRight: {
        points: ['tr', 'br'],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      topLeft: {
        points: ['bl', 'tl'],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      topRight: {
        points: ['br', 'tr'],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: 'scroll',
      },
    }
  },
  Yr = function (t, n) {
    var o = t.prefixCls
    t.disabled
    var a = t.visible,
      l = t.children,
      i = t.popupElement,
      c = t.animation,
      v = t.transitionName,
      m = t.dropdownStyle,
      f = t.dropdownClassName,
      s = t.direction,
      h = s === void 0 ? 'ltr' : s,
      u = t.placement,
      g = t.builtinPlacements,
      d = t.dropdownMatchSelectWidth,
      p = t.dropdownRender,
      w = t.dropdownAlign,
      b = t.getPopupContainer,
      E = t.empty,
      C = t.getTriggerDOMNode,
      F = t.onPopupVisibleChange,
      V = t.onPopupMouseEnter,
      M = bt(t, Ur),
      j = ''.concat(o, '-dropdown'),
      X = i
    p && (X = p(i))
    var J = r.useMemo(
        function () {
          return g || Gr(d)
        },
        [g, d],
      ),
      U = c ? ''.concat(j, '-').concat(c) : v,
      G = typeof d == 'number',
      ne = r.useMemo(
        function () {
          return G ? null : d === !1 ? 'minWidth' : 'width'
        },
        [d, G],
      ),
      L = m
    G && (L = Q(Q({}, L), {}, { width: d }))
    var re = r.useRef(null)
    return (
      r.useImperativeHandle(n, function () {
        return {
          getPopupElement: function () {
            var z
            return (z = re.current) === null || z === void 0
              ? void 0
              : z.popupElement
          },
        }
      }),
      r.createElement(
        Qn,
        Je({}, M, {
          showAction: F ? ['click'] : [],
          hideAction: F ? ['click'] : [],
          popupPlacement: u || (h === 'rtl' ? 'bottomRight' : 'bottomLeft'),
          builtinPlacements: J,
          prefixCls: j,
          popupTransitionName: U,
          popup: r.createElement('div', { onMouseEnter: V }, X),
          ref: re,
          stretch: ne,
          popupAlign: w,
          popupVisible: a,
          getPopupContainer: b,
          popupClassName: Be(f, oe({}, ''.concat(j, '-empty'), E)),
          popupStyle: L,
          getTriggerDOMNode: C,
          onPopupVisibleChange: F,
        }),
        l,
      )
    )
  },
  qr = r.forwardRef(Yr)
function dn(e, t) {
  var n = e.key,
    o
  return (
    'value' in e && (o = e.value),
    n ?? (o !== void 0 ? o : 'rc-index-key-'.concat(t))
  )
}
function Kt(e) {
  return typeof e < 'u' && !Number.isNaN(e)
}
function Tn(e, t) {
  var n = e || {},
    o = n.label,
    a = n.value,
    l = n.options,
    i = n.groupLabel,
    c = o || (t ? 'children' : 'label')
  return {
    label: c,
    value: a || 'value',
    options: l || 'options',
    groupLabel: i || c,
  }
}
function Qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.fieldNames,
    o = t.childrenAsData,
    a = [],
    l = Tn(n, !1),
    i = l.label,
    c = l.value,
    v = l.options,
    m = l.groupLabel
  function f(s, h) {
    Array.isArray(s) &&
      s.forEach(function (u) {
        if (h || !(v in u)) {
          var g = u[c]
          a.push({
            key: dn(u, a.length),
            groupOption: h,
            data: u,
            label: u[i],
            value: g,
          })
        } else {
          var d = u[m]
          d === void 0 && o && (d = u.label),
            a.push({ key: dn(u, a.length), group: !0, data: u, label: d }),
            f(u[v], !0)
        }
      })
  }
  return f(e, !1), a
}
function Xt(e) {
  var t = Q({}, e)
  return (
    'props' in t ||
      Object.defineProperty(t, 'props', {
        get: function () {
          return (
            Jn(
              !1,
              'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.',
            ),
            t
          )
        },
      }),
    t
  )
}
var Jr = function (t, n, o) {
    if (!n || !n.length) return null
    var a = !1,
      l = function c(v, m) {
        var f = Zn(m),
          s = f[0],
          h = f.slice(1)
        if (!s) return [v]
        var u = v.split(s)
        return (
          (a = a || u.length > 1),
          u
            .reduce(function (g, d) {
              return [].concat(Qe(g), Qe(c(d, h)))
            }, [])
            .filter(Boolean)
        )
      },
      i = l(t, n)
    return a ? (typeof o < 'u' ? i.slice(0, o) : i) : null
  },
  Qt = r.createContext(null)
function Zr(e) {
  var t = e.visible,
    n = e.values
  if (!t) return null
  var o = 50
  return r.createElement(
    'span',
    {
      'aria-live': 'polite',
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0,
      },
    },
    ''.concat(
      n
        .slice(0, o)
        .map(function (a) {
          var l = a.label,
            i = a.value
          return ['number', 'string'].includes(St(l)) ? l : i
        })
        .join(', '),
    ),
    n.length > o ? ', ...' : null,
  )
}
var kr = [
    'id',
    'prefixCls',
    'className',
    'showSearch',
    'tagRender',
    'direction',
    'omitDomProps',
    'displayValues',
    'onDisplayValuesChange',
    'emptyOptions',
    'notFoundContent',
    'onClear',
    'mode',
    'disabled',
    'loading',
    'getInputElement',
    'getRawInputElement',
    'open',
    'defaultOpen',
    'onDropdownVisibleChange',
    'activeValue',
    'onActiveValueChange',
    'activeDescendantId',
    'searchValue',
    'autoClearSearchValue',
    'onSearch',
    'onSearchSplit',
    'tokenSeparators',
    'allowClear',
    'suffixIcon',
    'clearIcon',
    'OptionList',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'placement',
    'builtinPlacements',
    'getPopupContainer',
    'showAction',
    'onFocus',
    'onBlur',
    'onKeyUp',
    'onKeyDown',
    'onMouseDown',
  ],
  eo = [
    'value',
    'onChange',
    'removeIcon',
    'placeholder',
    'autoFocus',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'choiceTransitionName',
    'onInputKeyDown',
    'onPopupScroll',
    'tabIndex',
  ],
  Ut = function (t) {
    return t === 'tags' || t === 'multiple'
  },
  to = r.forwardRef(function (e, t) {
    var n,
      o = e.id,
      a = e.prefixCls,
      l = e.className,
      i = e.showSearch,
      c = e.tagRender,
      v = e.direction,
      m = e.omitDomProps,
      f = e.displayValues,
      s = e.onDisplayValuesChange,
      h = e.emptyOptions,
      u = e.notFoundContent,
      g = u === void 0 ? 'Not Found' : u,
      d = e.onClear,
      p = e.mode,
      w = e.disabled,
      b = e.loading,
      E = e.getInputElement,
      C = e.getRawInputElement,
      F = e.open,
      V = e.defaultOpen,
      M = e.onDropdownVisibleChange,
      j = e.activeValue,
      X = e.onActiveValueChange,
      J = e.activeDescendantId,
      U = e.searchValue,
      G = e.autoClearSearchValue,
      ne = e.onSearch,
      L = e.onSearchSplit,
      re = e.tokenSeparators,
      W = e.allowClear,
      z = e.suffixIcon,
      R = e.clearIcon,
      N = e.OptionList,
      Y = e.animation,
      Z = e.transitionName,
      we = e.dropdownStyle,
      ce = e.dropdownClassName,
      ue = e.dropdownMatchSelectWidth,
      de = e.dropdownRender,
      Ne = e.dropdownAlign,
      K = e.placement,
      pe = e.builtinPlacements,
      ye = e.getPopupContainer,
      y = e.showAction,
      S = y === void 0 ? [] : y,
      D = e.onFocus,
      B = e.onBlur,
      x = e.onKeyUp,
      H = e.onKeyDown,
      k = e.onMouseDown,
      se = bt(e, kr),
      ae = Ut(p),
      ge = (i !== void 0 ? i : ae) || p === 'combobox',
      Ie = Q({}, se)
    eo.forEach(function (le) {
      delete Ie[le]
    }),
      m == null ||
        m.forEach(function (le) {
          delete Ie[le]
        })
    var Oe = r.useState(!1),
      Pe = te(Oe, 2),
      Re = Pe[0],
      he = Pe[1]
    r.useEffect(function () {
      he(kn())
    }, [])
    var Fe = r.useRef(null),
      ve = r.useRef(null),
      be = r.useRef(null),
      Se = r.useRef(null),
      _e = r.useRef(null),
      xe = r.useRef(!1),
      Ge = Tr(),
      Ve = te(Ge, 3),
      Ee = Ve[0],
      Ue = Ve[1],
      Ze = Ve[2]
    r.useImperativeHandle(t, function () {
      var le, A
      return {
        focus: (le = Se.current) === null || le === void 0 ? void 0 : le.focus,
        blur: (A = Se.current) === null || A === void 0 ? void 0 : A.blur,
        scrollTo: function (Xe) {
          var $e
          return ($e = _e.current) === null || $e === void 0
            ? void 0
            : $e.scrollTo(Xe)
        },
        nativeElement: Fe.current || ve.current,
      }
    })
    var He = r.useMemo(
        function () {
          var le
          if (p !== 'combobox') return U
          var A = (le = f[0]) === null || le === void 0 ? void 0 : le.value
          return typeof A == 'string' || typeof A == 'number' ? String(A) : ''
        },
        [U, p, f],
      ),
      Ae = (p === 'combobox' && typeof E == 'function' && E()) || null,
      ze = typeof C == 'function' && C(),
      ct = er(
        ve,
        ze == null || (n = ze.props) === null || n === void 0 ? void 0 : n.ref,
      ),
      vt = r.useState(!1),
      ot = te(vt, 2),
      Et = ot[0],
      ut = ot[1]
    yt(function () {
      ut(!0)
    }, [])
    var at = Wt(!1, { defaultValue: V, value: F }),
      st = te(at, 2),
      et = st[0],
      dt = st[1],
      Ce = Et ? et : !1,
      ft = !g && h
    ;(w || (ft && Ce && p === 'combobox')) && (Ce = !1)
    var ke = ft ? !1 : Ce,
      We = r.useCallback(
        function (le) {
          var A = le !== void 0 ? le : !Ce
          w || (dt(A), Ce !== A && (M == null || M(A)))
        },
        [w, Ce, dt, M],
      ),
      _ = r.useMemo(
        function () {
          return (re || []).some(function (le) {
            return [
              `
`,
              `\r
`,
            ].includes(le)
          })
        },
        [re],
      ),
      T = r.useContext(Qt) || {},
      $ = T.maxCount,
      P = T.rawValues,
      ie = function (A, Ke, Xe) {
        if (!(ae && Kt($) && (P == null ? void 0 : P.size) >= $)) {
          var $e = !0,
            Le = A
          X == null || X(null)
          var lt = Jr(A, re, Kt($) ? $ - P.size : void 0),
            nt = Xe ? null : lt
          return (
            p !== 'combobox' &&
              nt &&
              ((Le = ''), L == null || L(nt), We(!1), ($e = !1)),
            ne && He !== Le && ne(Le, { source: Ke ? 'typing' : 'effect' }),
            $e
          )
        }
      },
      me = function (A) {
        !A || !A.trim() || ne(A, { source: 'submit' })
      }
    r.useEffect(
      function () {
        !Ce && !ae && p !== 'combobox' && ie('', !1, !1)
      },
      [Ce],
    ),
      r.useEffect(
        function () {
          et && w && dt(!1), w && !xe.current && Ue(!1)
        },
        [w],
      )
    var Ye = $n(),
      je = te(Ye, 2),
      tt = je[0],
      Me = je[1],
      qe = r.useRef(!1),
      Rt = function (A) {
        var Ke = tt(),
          Xe = A.key,
          $e = Xe === 'Enter'
        if (
          ($e && (p !== 'combobox' && A.preventDefault(), Ce || We(!0)),
          Me(!!He),
          Xe === 'Backspace' && !Ke && ae && !He && f.length)
        ) {
          for (
            var Le = Qe(f), lt = null, nt = Le.length - 1;
            nt >= 0;
            nt -= 1
          ) {
            var gt = Le[nt]
            if (!gt.disabled) {
              Le.splice(nt, 1), (lt = gt)
              break
            }
          }
          lt && s(Le, { type: 'remove', values: [lt] })
        }
        for (
          var Ct = arguments.length,
            pt = new Array(Ct > 1 ? Ct - 1 : 0),
            Pt = 1;
          Pt < Ct;
          Pt++
        )
          pt[Pt - 1] = arguments[Pt]
        if (Ce && (!$e || !qe.current)) {
          var Tt
          ;(Tt = _e.current) === null ||
            Tt === void 0 ||
            Tt.onKeyDown.apply(Tt, [A].concat(pt))
        }
        $e && (qe.current = !0), H == null || H.apply(void 0, [A].concat(pt))
      },
      it = function (A) {
        for (
          var Ke = arguments.length,
            Xe = new Array(Ke > 1 ? Ke - 1 : 0),
            $e = 1;
          $e < Ke;
          $e++
        )
          Xe[$e - 1] = arguments[$e]
        if (Ce) {
          var Le
          ;(Le = _e.current) === null ||
            Le === void 0 ||
            Le.onKeyUp.apply(Le, [A].concat(Xe))
        }
        A.key === 'Enter' && (qe.current = !1),
          x == null || x.apply(void 0, [A].concat(Xe))
      },
      xt = function (A) {
        var Ke = f.filter(function (Xe) {
          return Xe !== A
        })
        s(Ke, { type: 'remove', values: [A] })
      },
      O = r.useRef(!1),
      I = function () {
        Ue(!0),
          w ||
            (D && !O.current && D.apply(void 0, arguments),
            S.includes('focus') && We(!0)),
          (O.current = !0)
      },
      ee = function () {
        ;(xe.current = !0),
          Ue(!1, function () {
            ;(O.current = !1), (xe.current = !1), We(!1)
          }),
          !w &&
            (He &&
              (p === 'tags'
                ? ne(He, { source: 'submit' })
                : p === 'multiple' && ne('', { source: 'blur' })),
            B && B.apply(void 0, arguments))
      },
      fe = []
    r.useEffect(function () {
      return function () {
        fe.forEach(function (le) {
          return clearTimeout(le)
        }),
          fe.splice(0, fe.length)
      }
    }, [])
    var Te = function (A) {
        var Ke,
          Xe = A.target,
          $e =
            (Ke = be.current) === null || Ke === void 0
              ? void 0
              : Ke.getPopupElement()
        if ($e && $e.contains(Xe)) {
          var Le = setTimeout(function () {
            var Ct = fe.indexOf(Le)
            if (
              (Ct !== -1 && fe.splice(Ct, 1),
              Ze(),
              !Re && !$e.contains(document.activeElement))
            ) {
              var pt
              ;(pt = Se.current) === null || pt === void 0 || pt.focus()
            }
          })
          fe.push(Le)
        }
        for (
          var lt = arguments.length,
            nt = new Array(lt > 1 ? lt - 1 : 0),
            gt = 1;
          gt < lt;
          gt++
        )
          nt[gt - 1] = arguments[gt]
        k == null || k.apply(void 0, [A].concat(nt))
      },
      Dt = r.useState({}),
      mt = te(Dt, 2),
      Lt = mt[1]
    function Ht() {
      Lt({})
    }
    var Mt
    ze &&
      (Mt = function (A) {
        We(A)
      }),
      Nr(
        function () {
          var le
          return [
            Fe.current,
            (le = be.current) === null || le === void 0
              ? void 0
              : le.getPopupElement(),
          ]
        },
        ke,
        We,
        !!ze,
      )
    var $t = r.useMemo(
        function () {
          return Q(
            Q({}, e),
            {},
            {
              notFoundContent: g,
              open: Ce,
              triggerOpen: ke,
              id: o,
              showSearch: ge,
              multiple: ae,
              toggleOpen: We,
            },
          )
        },
        [e, g, ke, Ce, o, ge, ae, We],
      ),
      en = !!z || b,
      tn
    en &&
      (tn = r.createElement(zt, {
        className: Be(
          ''.concat(a, '-arrow'),
          oe({}, ''.concat(a, '-arrow-loading'), b),
        ),
        customizeIcon: z,
        customizeIconProps: {
          loading: b,
          searchValue: He,
          open: Ce,
          focused: Ee,
          showSearch: ge,
        },
      }))
    var Wn = function () {
        var A
        d == null || d(),
          (A = Se.current) === null || A === void 0 || A.focus(),
          s([], { type: 'clear', values: f }),
          ie('', !1, !1)
      },
      nn = Dr(a, Wn, f, W, R, w, He, p),
      jn = nn.allowClear,
      Kn = nn.clearIcon,
      Xn = r.createElement(N, { ref: _e }),
      Un = Be(
        a,
        l,
        oe(
          oe(
            oe(
              oe(
                oe(
                  oe(
                    oe(
                      oe(
                        oe(
                          oe({}, ''.concat(a, '-focused'), Ee),
                          ''.concat(a, '-multiple'),
                          ae,
                        ),
                        ''.concat(a, '-single'),
                        !ae,
                      ),
                      ''.concat(a, '-allow-clear'),
                      W,
                    ),
                    ''.concat(a, '-show-arrow'),
                    en,
                  ),
                  ''.concat(a, '-disabled'),
                  w,
                ),
                ''.concat(a, '-loading'),
                b,
              ),
              ''.concat(a, '-open'),
              Ce,
            ),
            ''.concat(a, '-customize-input'),
            Ae,
          ),
          ''.concat(a, '-show-search'),
          ge,
        ),
      ),
      rn = r.createElement(
        qr,
        {
          ref: be,
          disabled: w,
          prefixCls: a,
          visible: ke,
          popupElement: Xn,
          animation: Y,
          transitionName: Z,
          dropdownStyle: we,
          dropdownClassName: ce,
          direction: v,
          dropdownMatchSelectWidth: ue,
          dropdownRender: de,
          dropdownAlign: Ne,
          placement: K,
          builtinPlacements: pe,
          getPopupContainer: ye,
          empty: h,
          getTriggerDOMNode: function (A) {
            return ve.current || A
          },
          onPopupVisibleChange: Mt,
          onPopupMouseEnter: Ht,
        },
        ze
          ? r.cloneElement(ze, { ref: ct })
          : r.createElement(
              Xr,
              Je({}, e, {
                domRef: ve,
                prefixCls: a,
                inputElement: Ae,
                ref: Se,
                id: o,
                showSearch: ge,
                autoClearSearchValue: G,
                mode: p,
                activeDescendantId: J,
                tagRender: c,
                values: f,
                open: Ce,
                onToggleOpen: We,
                activeValue: j,
                searchValue: He,
                onSearch: ie,
                onSearchSubmit: me,
                onRemove: xt,
                tokenWithEnter: _,
              }),
            ),
      ),
      Bt
    return (
      ze
        ? (Bt = rn)
        : (Bt = r.createElement(
            'div',
            Je({ className: Un }, Ie, {
              ref: Fe,
              onMouseDown: Te,
              onKeyDown: Rt,
              onKeyUp: it,
              onFocus: I,
              onBlur: ee,
            }),
            r.createElement(Zr, { visible: Ee && !Ce, values: f }),
            rn,
            tn,
            jn && Kn,
          )),
      r.createElement(Mn.Provider, { value: $t }, Bt)
    )
  }),
  Jt = function () {
    return null
  }
Jt.isSelectOptGroup = !0
var Zt = function () {
  return null
}
Zt.isSelectOption = !0
var Nn = r.forwardRef(function (e, t) {
  var n = e.height,
    o = e.offsetY,
    a = e.offsetX,
    l = e.children,
    i = e.prefixCls,
    c = e.onInnerResize,
    v = e.innerProps,
    m = e.rtl,
    f = e.extra,
    s = {},
    h = { display: 'flex', flexDirection: 'column' }
  return (
    o !== void 0 &&
      ((s = { height: n, position: 'relative', overflow: 'hidden' }),
      (h = Q(
        Q({}, h),
        {},
        oe(
          oe(
            oe(
              oe(
                oe(
                  { transform: 'translateY('.concat(o, 'px)') },
                  m ? 'marginRight' : 'marginLeft',
                  -a,
                ),
                'position',
                'absolute',
              ),
              'left',
              0,
            ),
            'right',
            0,
          ),
          'top',
          0,
        ),
      ))),
    r.createElement(
      'div',
      { style: s },
      r.createElement(
        In,
        {
          onResize: function (g) {
            var d = g.offsetHeight
            d && c && c()
          },
        },
        r.createElement(
          'div',
          Je(
            {
              style: h,
              className: Be(oe({}, ''.concat(i, '-holder-inner'), i)),
              ref: t,
            },
            v,
          ),
          l,
          f,
        ),
      ),
    )
  )
})
Nn.displayName = 'Filler'
function no(e) {
  var t = e.children,
    n = e.setRef,
    o = r.useCallback(function (a) {
      n(a)
    }, [])
  return r.cloneElement(t, { ref: o })
}
function ro(e, t, n, o, a, l, i, c) {
  var v = c.getKey
  return e.slice(t, n + 1).map(function (m, f) {
    var s = t + f,
      h = i(m, s, { style: { width: o }, offsetX: a }),
      u = v(m)
    return r.createElement(
      no,
      {
        key: u,
        setRef: function (d) {
          return l(m, d)
        },
      },
      h,
    )
  })
}
function oo(e, t, n) {
  var o = e.length,
    a = t.length,
    l,
    i
  if (o === 0 && a === 0) return null
  o < a ? ((l = e), (i = t)) : ((l = t), (i = e))
  var c = { __EMPTY_ITEM__: !0 }
  function v(g) {
    return g !== void 0 ? n(g) : c
  }
  for (var m = null, f = Math.abs(o - a) !== 1, s = 0; s < i.length; s += 1) {
    var h = v(l[s]),
      u = v(i[s])
    if (h !== u) {
      ;(m = s), (f = f || h !== v(i[s + 1]))
      break
    }
  }
  return m === null ? null : { index: m, multiple: f }
}
function ao(e, t, n) {
  var o = r.useState(e),
    a = te(o, 2),
    l = a[0],
    i = a[1],
    c = r.useState(null),
    v = te(c, 2),
    m = v[0],
    f = v[1]
  return (
    r.useEffect(
      function () {
        var s = oo(l || [], e || [], t)
        ;(s == null ? void 0 : s.index) !== void 0 && f(e[s.index]), i(e)
      },
      [e],
    ),
    [m]
  )
}
var fn =
  (typeof navigator > 'u' ? 'undefined' : St(navigator)) === 'object' &&
  /Firefox/i.test(navigator.userAgent)
const _n = function (e, t, n, o) {
  var a = r.useRef(!1),
    l = r.useRef(null)
  function i() {
    clearTimeout(l.current),
      (a.current = !0),
      (l.current = setTimeout(function () {
        a.current = !1
      }, 50))
  }
  var c = r.useRef({ top: e, bottom: t, left: n, right: o })
  return (
    (c.current.top = e),
    (c.current.bottom = t),
    (c.current.left = n),
    (c.current.right = o),
    function (v, m) {
      var f =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        s = v
          ? (m < 0 && c.current.left) || (m > 0 && c.current.right)
          : (m < 0 && c.current.top) || (m > 0 && c.current.bottom)
      return (
        f && s
          ? (clearTimeout(l.current), (a.current = !1))
          : (!s || a.current) && i(),
        !a.current && s
      )
    }
  )
}
function io(e, t, n, o, a, l, i) {
  var c = r.useRef(0),
    v = r.useRef(null),
    m = r.useRef(null),
    f = r.useRef(!1),
    s = _n(t, n, o, a)
  function h(b, E) {
    if ((rt.cancel(v.current), !s(!1, E))) {
      var C = b
      if (!C._virtualHandled) C._virtualHandled = !0
      else return
      ;(c.current += E),
        (m.current = E),
        fn || C.preventDefault(),
        (v.current = rt(function () {
          var F = f.current ? 10 : 1
          i(c.current * F, !1), (c.current = 0)
        }))
    }
  }
  function u(b, E) {
    i(E, !0), fn || b.preventDefault()
  }
  var g = r.useRef(null),
    d = r.useRef(null)
  function p(b) {
    if (e) {
      rt.cancel(d.current),
        (d.current = rt(function () {
          g.current = null
        }, 2))
      var E = b.deltaX,
        C = b.deltaY,
        F = b.shiftKey,
        V = E,
        M = C
      ;(g.current === 'sx' || (!g.current && F && C && !E)) &&
        ((V = C), (M = 0), (g.current = 'sx'))
      var j = Math.abs(V),
        X = Math.abs(M)
      g.current === null && (g.current = l && j > X ? 'x' : 'y'),
        g.current === 'y' ? h(b, M) : u(b, V)
    }
  }
  function w(b) {
    e && (f.current = b.detail === m.current)
  }
  return [p, w]
}
function lo(e, t, n, o) {
  var a = r.useMemo(
      function () {
        return [new Map(), []]
      },
      [e, n.id, o],
    ),
    l = te(a, 2),
    i = l[0],
    c = l[1],
    v = function (f) {
      var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f,
        h = i.get(f),
        u = i.get(s)
      if (h === void 0 || u === void 0)
        for (var g = e.length, d = c.length; d < g; d += 1) {
          var p,
            w = e[d],
            b = t(w)
          i.set(b, d)
          var E = (p = n.get(b)) !== null && p !== void 0 ? p : o
          if (
            ((c[d] = (c[d - 1] || 0) + E),
            b === f && (h = d),
            b === s && (u = d),
            h !== void 0 && u !== void 0)
          )
            break
        }
      return { top: c[h - 1] || 0, bottom: c[u] }
    }
  return v
}
var co = (function () {
  function e() {
    nr(this, e),
      oe(this, 'maps', void 0),
      oe(this, 'id', 0),
      (this.maps = Object.create(null))
  }
  return (
    tr(e, [
      {
        key: 'set',
        value: function (n, o) {
          ;(this.maps[n] = o), (this.id += 1)
        },
      },
      {
        key: 'get',
        value: function (n) {
          return this.maps[n]
        },
      },
    ]),
    e
  )
})()
function uo(e, t, n) {
  var o = r.useState(0),
    a = te(o, 2),
    l = a[0],
    i = a[1],
    c = r.useRef(new Map()),
    v = r.useRef(new co()),
    m = r.useRef()
  function f() {
    rt.cancel(m.current)
  }
  function s() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    f()
    var g = function () {
      c.current.forEach(function (p, w) {
        if (p && p.offsetParent) {
          var b = rr(p),
            E = b.offsetHeight
          v.current.get(w) !== E && v.current.set(w, b.offsetHeight)
        }
      }),
        i(function (p) {
          return p + 1
        })
    }
    u ? g() : (m.current = rt(g))
  }
  function h(u, g) {
    var d = e(u)
    c.current.get(d), g ? (c.current.set(d, g), s()) : c.current.delete(d)
  }
  return (
    r.useEffect(function () {
      return f
    }, []),
    [h, s, v.current, l]
  )
}
var vn = 14 / 15
function so(e, t, n) {
  var o = r.useRef(!1),
    a = r.useRef(0),
    l = r.useRef(0),
    i = r.useRef(null),
    c = r.useRef(null),
    v,
    m = function (u) {
      if (o.current) {
        var g = Math.ceil(u.touches[0].pageX),
          d = Math.ceil(u.touches[0].pageY),
          p = a.current - g,
          w = l.current - d,
          b = Math.abs(p) > Math.abs(w)
        b ? (a.current = g) : (l.current = d)
        var E = n(b, b ? p : w, !1, u)
        E && u.preventDefault(),
          clearInterval(c.current),
          E &&
            (c.current = setInterval(function () {
              b ? (p *= vn) : (w *= vn)
              var C = Math.floor(b ? p : w)
              ;(!n(b, C, !0) || Math.abs(C) <= 0.1) && clearInterval(c.current)
            }, 16))
      }
    },
    f = function () {
      ;(o.current = !1), v()
    },
    s = function (u) {
      v(),
        u.touches.length === 1 &&
          !o.current &&
          ((o.current = !0),
          (a.current = Math.ceil(u.touches[0].pageX)),
          (l.current = Math.ceil(u.touches[0].pageY)),
          (i.current = u.target),
          i.current.addEventListener('touchmove', m, { passive: !1 }),
          i.current.addEventListener('touchend', f, { passive: !0 }))
    }
  ;(v = function () {
    i.current &&
      (i.current.removeEventListener('touchmove', m),
      i.current.removeEventListener('touchend', f))
  }),
    yt(
      function () {
        return (
          e && t.current.addEventListener('touchstart', s, { passive: !0 }),
          function () {
            var h
            ;(h = t.current) === null ||
              h === void 0 ||
              h.removeEventListener('touchstart', s),
              v(),
              clearInterval(c.current)
          }
        )
      },
      [e],
    )
}
var fo = 10
function vo(e, t, n, o, a, l, i, c) {
  var v = r.useRef(),
    m = r.useState(null),
    f = te(m, 2),
    s = f[0],
    h = f[1]
  return (
    yt(
      function () {
        if (s && s.times < fo) {
          if (!e.current) {
            h(function (N) {
              return Q({}, N)
            })
            return
          }
          l()
          var u = s.targetAlign,
            g = s.originAlign,
            d = s.index,
            p = s.offset,
            w = e.current.clientHeight,
            b = !1,
            E = u,
            C = null
          if (w) {
            for (
              var F = u || g,
                V = 0,
                M = 0,
                j = 0,
                X = Math.min(t.length - 1, d),
                J = 0;
              J <= X;
              J += 1
            ) {
              var U = a(t[J])
              M = V
              var G = n.get(U)
              ;(j = M + (G === void 0 ? o : G)), (V = j)
            }
            for (var ne = F === 'top' ? p : w - p, L = X; L >= 0; L -= 1) {
              var re = a(t[L]),
                W = n.get(re)
              if (W === void 0) {
                b = !0
                break
              }
              if (((ne -= W), ne <= 0)) break
            }
            switch (F) {
              case 'top':
                C = M - p
                break
              case 'bottom':
                C = j - w + p
                break
              default: {
                var z = e.current.scrollTop,
                  R = z + w
                M < z ? (E = 'top') : j > R && (E = 'bottom')
              }
            }
            C !== null && i(C), C !== s.lastTop && (b = !0)
          }
          b &&
            h(
              Q(
                Q({}, s),
                {},
                { times: s.times + 1, targetAlign: E, lastTop: C },
              ),
            )
        }
      },
      [s, e.current],
    ),
    function (u) {
      if (u == null) {
        c()
        return
      }
      if ((rt.cancel(v.current), typeof u == 'number')) i(u)
      else if (u && St(u) === 'object') {
        var g,
          d = u.align
        'index' in u
          ? (g = u.index)
          : (g = t.findIndex(function (b) {
              return a(b) === u.key
            }))
        var p = u.offset,
          w = p === void 0 ? 0 : p
        h({ times: 0, index: g, offset: w, originAlign: d })
      }
    }
  )
}
function mn(e, t) {
  var n = 'touches' in e ? e.touches[0] : e
  return n[t ? 'pageX' : 'pageY']
}
var gn = r.forwardRef(function (e, t) {
    var n = e.prefixCls,
      o = e.rtl,
      a = e.scrollOffset,
      l = e.scrollRange,
      i = e.onStartMove,
      c = e.onStopMove,
      v = e.onScroll,
      m = e.horizontal,
      f = e.spinSize,
      s = e.containerSize,
      h = e.style,
      u = e.thumbStyle,
      g = r.useState(!1),
      d = te(g, 2),
      p = d[0],
      w = d[1],
      b = r.useState(null),
      E = te(b, 2),
      C = E[0],
      F = E[1],
      V = r.useState(null),
      M = te(V, 2),
      j = M[0],
      X = M[1],
      J = !o,
      U = r.useRef(),
      G = r.useRef(),
      ne = r.useState(!1),
      L = te(ne, 2),
      re = L[0],
      W = L[1],
      z = r.useRef(),
      R = function () {
        clearTimeout(z.current),
          W(!0),
          (z.current = setTimeout(function () {
            W(!1)
          }, 3e3))
      },
      N = l - s || 0,
      Y = s - f || 0,
      Z = r.useMemo(
        function () {
          if (a === 0 || N === 0) return 0
          var y = a / N
          return y * Y
        },
        [a, N, Y],
      ),
      we = function (S) {
        S.stopPropagation(), S.preventDefault()
      },
      ce = r.useRef({ top: Z, dragging: p, pageY: C, startTop: j })
    ce.current = { top: Z, dragging: p, pageY: C, startTop: j }
    var ue = function (S) {
      w(!0),
        F(mn(S, m)),
        X(ce.current.top),
        i(),
        S.stopPropagation(),
        S.preventDefault()
    }
    r.useEffect(function () {
      var y = function (x) {
          x.preventDefault()
        },
        S = U.current,
        D = G.current
      return (
        S.addEventListener('touchstart', y, { passive: !1 }),
        D.addEventListener('touchstart', ue, { passive: !1 }),
        function () {
          S.removeEventListener('touchstart', y),
            D.removeEventListener('touchstart', ue)
        }
      )
    }, [])
    var de = r.useRef()
    de.current = N
    var Ne = r.useRef()
    ;(Ne.current = Y),
      r.useEffect(
        function () {
          if (p) {
            var y,
              S = function (x) {
                var H = ce.current,
                  k = H.dragging,
                  se = H.pageY,
                  ae = H.startTop
                rt.cancel(y)
                var ge = U.current.getBoundingClientRect(),
                  Ie = s / (m ? ge.width : ge.height)
                if (k) {
                  var Oe = (mn(x, m) - se) * Ie,
                    Pe = ae
                  !J && m ? (Pe -= Oe) : (Pe += Oe)
                  var Re = de.current,
                    he = Ne.current,
                    Fe = he ? Pe / he : 0,
                    ve = Math.ceil(Fe * Re)
                  ;(ve = Math.max(ve, 0)),
                    (ve = Math.min(ve, Re)),
                    (y = rt(function () {
                      v(ve, m)
                    }))
                }
              },
              D = function () {
                w(!1), c()
              }
            return (
              window.addEventListener('mousemove', S, { passive: !0 }),
              window.addEventListener('touchmove', S, { passive: !0 }),
              window.addEventListener('mouseup', D, { passive: !0 }),
              window.addEventListener('touchend', D, { passive: !0 }),
              function () {
                window.removeEventListener('mousemove', S),
                  window.removeEventListener('touchmove', S),
                  window.removeEventListener('mouseup', D),
                  window.removeEventListener('touchend', D),
                  rt.cancel(y)
              }
            )
          }
        },
        [p],
      ),
      r.useEffect(
        function () {
          return (
            R(),
            function () {
              clearTimeout(z.current)
            }
          )
        },
        [a],
      ),
      r.useImperativeHandle(t, function () {
        return { delayHidden: R }
      })
    var K = ''.concat(n, '-scrollbar'),
      pe = { position: 'absolute', visibility: re ? null : 'hidden' },
      ye = {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 99,
        cursor: 'pointer',
        userSelect: 'none',
      }
    return (
      m
        ? ((pe.height = 8),
          (pe.left = 0),
          (pe.right = 0),
          (pe.bottom = 0),
          (ye.height = '100%'),
          (ye.width = f),
          J ? (ye.left = Z) : (ye.right = Z))
        : ((pe.width = 8),
          (pe.top = 0),
          (pe.bottom = 0),
          J ? (pe.right = 0) : (pe.left = 0),
          (ye.width = '100%'),
          (ye.height = f),
          (ye.top = Z)),
      r.createElement(
        'div',
        {
          ref: U,
          className: Be(
            K,
            oe(
              oe(
                oe({}, ''.concat(K, '-horizontal'), m),
                ''.concat(K, '-vertical'),
                !m,
              ),
              ''.concat(K, '-visible'),
              re,
            ),
          ),
          style: Q(Q({}, pe), h),
          onMouseDown: we,
          onMouseMove: R,
        },
        r.createElement('div', {
          ref: G,
          className: Be(
            ''.concat(K, '-thumb'),
            oe({}, ''.concat(K, '-thumb-moving'), p),
          ),
          style: Q(Q({}, ye), u),
          onMouseDown: ue,
        }),
      )
    )
  }),
  mo = 20
function pn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = (e / t) * e
  return isNaN(n) && (n = 0), (n = Math.max(n, mo)), Math.floor(n)
}
var go = [
    'prefixCls',
    'className',
    'height',
    'itemHeight',
    'fullHeight',
    'style',
    'data',
    'children',
    'itemKey',
    'virtual',
    'direction',
    'scrollWidth',
    'component',
    'onScroll',
    'onVirtualScroll',
    'onVisibleChange',
    'innerProps',
    'extraRender',
    'styles',
  ],
  po = [],
  ho = { overflowY: 'auto', overflowAnchor: 'none' }
function So(e, t) {
  var n = e.prefixCls,
    o = n === void 0 ? 'rc-virtual-list' : n,
    a = e.className,
    l = e.height,
    i = e.itemHeight,
    c = e.fullHeight,
    v = c === void 0 ? !0 : c,
    m = e.style,
    f = e.data,
    s = e.children,
    h = e.itemKey,
    u = e.virtual,
    g = e.direction,
    d = e.scrollWidth,
    p = e.component,
    w = p === void 0 ? 'div' : p,
    b = e.onScroll,
    E = e.onVirtualScroll,
    C = e.onVisibleChange,
    F = e.innerProps,
    V = e.extraRender,
    M = e.styles,
    j = bt(e, go),
    X = r.useCallback(
      function (O) {
        return typeof h == 'function' ? h(O) : O == null ? void 0 : O[h]
      },
      [h],
    ),
    J = uo(X),
    U = te(J, 4),
    G = U[0],
    ne = U[1],
    L = U[2],
    re = U[3],
    W = !!(u !== !1 && l && i),
    z = r.useMemo(
      function () {
        return Object.values(L.maps).reduce(function (O, I) {
          return O + I
        }, 0)
      },
      [L.id, L.maps],
    ),
    R = W && f && (Math.max(i * f.length, z) > l || !!d),
    N = g === 'rtl',
    Y = Be(o, oe({}, ''.concat(o, '-rtl'), N), a),
    Z = f || po,
    we = r.useRef(),
    ce = r.useRef(),
    ue = r.useRef(),
    de = r.useState(0),
    Ne = te(de, 2),
    K = Ne[0],
    pe = Ne[1],
    ye = r.useState(0),
    y = te(ye, 2),
    S = y[0],
    D = y[1],
    B = r.useState(!1),
    x = te(B, 2),
    H = x[0],
    k = x[1],
    se = function () {
      k(!0)
    },
    ae = function () {
      k(!1)
    },
    ge = { getKey: X }
  function Ie(O) {
    pe(function (I) {
      var ee
      typeof O == 'function' ? (ee = O(I)) : (ee = O)
      var fe = Et(ee)
      return (we.current.scrollTop = fe), fe
    })
  }
  var Oe = r.useRef({ start: 0, end: Z.length }),
    Pe = r.useRef(),
    Re = ao(Z, X),
    he = te(Re, 1),
    Fe = he[0]
  Pe.current = Fe
  var ve = r.useMemo(
      function () {
        if (!W)
          return {
            scrollHeight: void 0,
            start: 0,
            end: Z.length - 1,
            offset: void 0,
          }
        if (!R) {
          var O
          return {
            scrollHeight:
              ((O = ce.current) === null || O === void 0
                ? void 0
                : O.offsetHeight) || 0,
            start: 0,
            end: Z.length - 1,
            offset: void 0,
          }
        }
        for (var I = 0, ee, fe, Te, Dt = Z.length, mt = 0; mt < Dt; mt += 1) {
          var Lt = Z[mt],
            Ht = X(Lt),
            Mt = L.get(Ht),
            $t = I + (Mt === void 0 ? i : Mt)
          $t >= K && ee === void 0 && ((ee = mt), (fe = I)),
            $t > K + l && Te === void 0 && (Te = mt),
            (I = $t)
        }
        return (
          ee === void 0 && ((ee = 0), (fe = 0), (Te = Math.ceil(l / i))),
          Te === void 0 && (Te = Z.length - 1),
          (Te = Math.min(Te + 1, Z.length - 1)),
          { scrollHeight: I, start: ee, end: Te, offset: fe }
        )
      },
      [R, W, K, Z, re, l],
    ),
    be = ve.scrollHeight,
    Se = ve.start,
    _e = ve.end,
    xe = ve.offset
  ;(Oe.current.start = Se), (Oe.current.end = _e)
  var Ge = r.useState({ width: 0, height: l }),
    Ve = te(Ge, 2),
    Ee = Ve[0],
    Ue = Ve[1],
    Ze = function (I) {
      Ue({ width: I.offsetWidth, height: I.offsetHeight })
    },
    He = r.useRef(),
    Ae = r.useRef(),
    ze = r.useMemo(
      function () {
        return pn(Ee.width, d)
      },
      [Ee.width, d],
    ),
    ct = r.useMemo(
      function () {
        return pn(Ee.height, be)
      },
      [Ee.height, be],
    ),
    vt = be - l,
    ot = r.useRef(vt)
  ot.current = vt
  function Et(O) {
    var I = O
    return (
      Number.isNaN(ot.current) || (I = Math.min(I, ot.current)),
      (I = Math.max(I, 0)),
      I
    )
  }
  var ut = K <= 0,
    at = K >= vt,
    st = S <= 0,
    et = S >= d,
    dt = _n(ut, at, st, et),
    Ce = function () {
      return { x: N ? -S : S, y: K }
    },
    ft = r.useRef(Ce()),
    ke = on(function (O) {
      if (E) {
        var I = Q(Q({}, Ce()), O)
        ;(ft.current.x !== I.x || ft.current.y !== I.y) &&
          (E(I), (ft.current = I))
      }
    })
  function We(O, I) {
    var ee = O
    I
      ? (an.flushSync(function () {
          D(ee)
        }),
        ke())
      : Ie(ee)
  }
  function _(O) {
    var I = O.currentTarget.scrollTop
    I !== K && Ie(I), b == null || b(O), ke()
  }
  var T = function (I) {
      var ee = I,
        fe = d ? d - Ee.width : 0
      return (ee = Math.max(ee, 0)), (ee = Math.min(ee, fe)), ee
    },
    $ = on(function (O, I) {
      I
        ? (an.flushSync(function () {
            D(function (ee) {
              var fe = ee + (N ? -O : O)
              return T(fe)
            })
          }),
          ke())
        : Ie(function (ee) {
            var fe = ee + O
            return fe
          })
    }),
    P = io(W, ut, at, st, et, !!d, $),
    ie = te(P, 2),
    me = ie[0],
    Ye = ie[1]
  so(W, we, function (O, I, ee, fe) {
    var Te = fe
    return dt(O, I, ee)
      ? !1
      : !Te || !Te._virtualHandled
        ? (Te && (Te._virtualHandled = !0),
          me({
            preventDefault: function () {},
            deltaX: O ? I : 0,
            deltaY: O ? 0 : I,
          }),
          !0)
        : !1
  }),
    yt(
      function () {
        function O(ee) {
          var fe = ut && ee.detail < 0,
            Te = at && ee.detail > 0
          W && !fe && !Te && ee.preventDefault()
        }
        var I = we.current
        return (
          I.addEventListener('wheel', me, { passive: !1 }),
          I.addEventListener('DOMMouseScroll', Ye, { passive: !0 }),
          I.addEventListener('MozMousePixelScroll', O, { passive: !1 }),
          function () {
            I.removeEventListener('wheel', me),
              I.removeEventListener('DOMMouseScroll', Ye),
              I.removeEventListener('MozMousePixelScroll', O)
          }
        )
      },
      [W, ut, at],
    ),
    yt(
      function () {
        if (d) {
          var O = T(S)
          D(O), ke({ x: O })
        }
      },
      [Ee.width, d],
    )
  var je = function () {
      var I, ee
      ;(I = He.current) === null || I === void 0 || I.delayHidden(),
        (ee = Ae.current) === null || ee === void 0 || ee.delayHidden()
    },
    tt = vo(
      we,
      Z,
      L,
      i,
      X,
      function () {
        return ne(!0)
      },
      Ie,
      je,
    )
  r.useImperativeHandle(t, function () {
    return {
      nativeElement: ue.current,
      getScrollInfo: Ce,
      scrollTo: function (I) {
        function ee(fe) {
          return fe && St(fe) === 'object' && ('left' in fe || 'top' in fe)
        }
        ee(I) ? (I.left !== void 0 && D(T(I.left)), tt(I.top)) : tt(I)
      },
    }
  }),
    yt(
      function () {
        if (C) {
          var O = Z.slice(Se, _e + 1)
          C(O, Z)
        }
      },
      [Se, _e, Z],
    )
  var Me = lo(Z, X, L, i),
    qe =
      V == null
        ? void 0
        : V({
            start: Se,
            end: _e,
            virtual: R,
            offsetX: S,
            offsetY: xe,
            rtl: N,
            getSize: Me,
          }),
    Rt = ro(Z, Se, _e, d, S, G, s, ge),
    it = null
  l &&
    ((it = Q(oe({}, v ? 'height' : 'maxHeight', l), ho)),
    W &&
      ((it.overflowY = 'hidden'),
      d && (it.overflowX = 'hidden'),
      H && (it.pointerEvents = 'none')))
  var xt = {}
  return (
    N && (xt.dir = 'rtl'),
    r.createElement(
      'div',
      Je(
        {
          ref: ue,
          style: Q(Q({}, m), {}, { position: 'relative' }),
          className: Y,
        },
        xt,
        j,
      ),
      r.createElement(
        In,
        { onResize: Ze },
        r.createElement(
          w,
          {
            className: ''.concat(o, '-holder'),
            style: it,
            ref: we,
            onScroll: _,
            onMouseEnter: je,
          },
          r.createElement(
            Nn,
            {
              prefixCls: o,
              height: be,
              offsetX: S,
              offsetY: xe,
              scrollWidth: d,
              onInnerResize: ne,
              ref: ce,
              innerProps: F,
              rtl: N,
              extra: qe,
            },
            Rt,
          ),
        ),
      ),
      R &&
        be > l &&
        r.createElement(gn, {
          ref: He,
          prefixCls: o,
          scrollOffset: K,
          scrollRange: be,
          rtl: N,
          onScroll: We,
          onStartMove: se,
          onStopMove: ae,
          spinSize: ct,
          containerSize: Ee.height,
          style: M == null ? void 0 : M.verticalScrollBar,
          thumbStyle: M == null ? void 0 : M.verticalScrollBarThumb,
        }),
      R &&
        d > Ee.width &&
        r.createElement(gn, {
          ref: Ae,
          prefixCls: o,
          scrollOffset: S,
          scrollRange: d,
          rtl: N,
          onScroll: We,
          onStartMove: se,
          onStopMove: ae,
          spinSize: ze,
          containerSize: Ee.width,
          horizontal: !0,
          style: M == null ? void 0 : M.horizontalScrollBar,
          thumbStyle: M == null ? void 0 : M.horizontalScrollBarThumb,
        }),
    )
  )
}
var zn = r.forwardRef(So)
zn.displayName = 'List'
function bo() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
var Co = ['disabled', 'title', 'children', 'style', 'className']
function hn(e) {
  return typeof e == 'string' || typeof e == 'number'
}
var wo = function (t, n) {
    var o = Pr(),
      a = o.prefixCls,
      l = o.id,
      i = o.open,
      c = o.multiple,
      v = o.mode,
      m = o.searchValue,
      f = o.toggleOpen,
      s = o.notFoundContent,
      h = o.onPopupScroll,
      u = r.useContext(Qt),
      g = u.maxCount,
      d = u.flattenOptions,
      p = u.onActiveValue,
      w = u.defaultActiveFirstOption,
      b = u.onSelect,
      E = u.menuItemSelectedIcon,
      C = u.rawValues,
      F = u.fieldNames,
      V = u.virtual,
      M = u.direction,
      j = u.listHeight,
      X = u.listItemHeight,
      J = u.optionRender,
      U = ''.concat(a, '-item'),
      G = or(
        function () {
          return d
        },
        [i, d],
        function (y, S) {
          return S[0] && y[1] !== S[1]
        },
      ),
      ne = r.useRef(null),
      L = r.useMemo(
        function () {
          return c && Kt(g) && (C == null ? void 0 : C.size) >= g
        },
        [c, g, C == null ? void 0 : C.size],
      ),
      re = function (S) {
        S.preventDefault()
      },
      W = function (S) {
        var D
        ;(D = ne.current) === null ||
          D === void 0 ||
          D.scrollTo(typeof S == 'number' ? { index: S } : S)
      },
      z = function (S) {
        for (
          var D =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1,
            B = G.length,
            x = 0;
          x < B;
          x += 1
        ) {
          var H = (S + x * D + B) % B,
            k = G[H] || {},
            se = k.group,
            ae = k.data
          if (!se && !(ae != null && ae.disabled) && !L) return H
        }
        return -1
      },
      R = r.useState(function () {
        return z(0)
      }),
      N = te(R, 2),
      Y = N[0],
      Z = N[1],
      we = function (S) {
        var D =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        Z(S)
        var B = { source: D ? 'keyboard' : 'mouse' },
          x = G[S]
        if (!x) {
          p(null, -1, B)
          return
        }
        p(x.value, S, B)
      }
    r.useEffect(
      function () {
        we(w !== !1 ? z(0) : -1)
      },
      [G.length, m],
    )
    var ce = r.useCallback(
      function (y) {
        return C.has(y) && v !== 'combobox'
      },
      [v, Qe(C).toString(), C.size],
    )
    r.useEffect(
      function () {
        var y = setTimeout(function () {
          if (!c && i && C.size === 1) {
            var D = Array.from(C)[0],
              B = G.findIndex(function (x) {
                var H = x.data
                return H.value === D
              })
            B !== -1 && (we(B), W(B))
          }
        })
        if (i) {
          var S
          ;(S = ne.current) === null || S === void 0 || S.scrollTo(void 0)
        }
        return function () {
          return clearTimeout(y)
        }
      },
      [i, m],
    )
    var ue = function (S) {
      S !== void 0 && b(S, { selected: !C.has(S) }), c || f(!1)
    }
    if (
      (r.useImperativeHandle(n, function () {
        return {
          onKeyDown: function (S) {
            var D = S.which,
              B = S.ctrlKey
            switch (D) {
              case q.N:
              case q.P:
              case q.UP:
              case q.DOWN: {
                var x = 0
                if (
                  (D === q.UP
                    ? (x = -1)
                    : D === q.DOWN
                      ? (x = 1)
                      : bo() &&
                        B &&
                        (D === q.N ? (x = 1) : D === q.P && (x = -1)),
                  x !== 0)
                ) {
                  var H = z(Y + x, x)
                  W(H), we(H, !0)
                }
                break
              }
              case q.ENTER: {
                var k,
                  se = G[Y]
                se &&
                !(
                  se != null &&
                  (k = se.data) !== null &&
                  k !== void 0 &&
                  k.disabled
                ) &&
                !L
                  ? ue(se.value)
                  : ue(void 0),
                  i && S.preventDefault()
                break
              }
              case q.ESC:
                f(!1), i && S.stopPropagation()
            }
          },
          onKeyUp: function () {},
          scrollTo: function (S) {
            W(S)
          },
        }
      }),
      G.length === 0)
    )
      return r.createElement(
        'div',
        {
          role: 'listbox',
          id: ''.concat(l, '_list'),
          className: ''.concat(U, '-empty'),
          onMouseDown: re,
        },
        s,
      )
    var de = Object.keys(F).map(function (y) {
        return F[y]
      }),
      Ne = function (S) {
        return S.label
      }
    function K(y, S) {
      var D = y.group
      return {
        role: D ? 'presentation' : 'option',
        id: ''.concat(l, '_list_').concat(S),
      }
    }
    var pe = function (S) {
        var D = G[S]
        if (!D) return null
        var B = D.data || {},
          x = B.value,
          H = D.group,
          k = _t(B, !0),
          se = Ne(D)
        return D
          ? r.createElement(
              'div',
              Je(
                { 'aria-label': typeof se == 'string' && !H ? se : null },
                k,
                { key: S },
                K(D, S),
                { 'aria-selected': ce(x) },
              ),
              x,
            )
          : null
      },
      ye = { role: 'listbox', id: ''.concat(l, '_list') }
    return r.createElement(
      r.Fragment,
      null,
      V &&
        r.createElement(
          'div',
          Je({}, ye, { style: { height: 0, width: 0, overflow: 'hidden' } }),
          pe(Y - 1),
          pe(Y),
          pe(Y + 1),
        ),
      r.createElement(
        zn,
        {
          itemKey: 'key',
          ref: ne,
          data: G,
          height: j,
          itemHeight: X,
          fullHeight: !1,
          onMouseDown: re,
          onScroll: h,
          virtual: V,
          direction: M,
          innerProps: V ? null : ye,
        },
        function (y, S) {
          var D = y.group,
            B = y.groupOption,
            x = y.data,
            H = y.label,
            k = y.value,
            se = x.key
          if (D) {
            var ae,
              ge =
                (ae = x.title) !== null && ae !== void 0
                  ? ae
                  : hn(H)
                    ? H.toString()
                    : void 0
            return r.createElement(
              'div',
              {
                className: Be(U, ''.concat(U, '-group'), x.className),
                title: ge,
              },
              H !== void 0 ? H : se,
            )
          }
          var Ie = x.disabled,
            Oe = x.title
          x.children
          var Pe = x.style,
            Re = x.className,
            he = bt(x, Co),
            Fe = En(he, de),
            ve = ce(k),
            be = Ie || (!ve && L),
            Se = ''.concat(U, '-option'),
            _e = Be(
              U,
              Se,
              Re,
              oe(
                oe(
                  oe(
                    oe({}, ''.concat(Se, '-grouped'), B),
                    ''.concat(Se, '-active'),
                    Y === S && !be,
                  ),
                  ''.concat(Se, '-disabled'),
                  be,
                ),
                ''.concat(Se, '-selected'),
                ve,
              ),
            ),
            xe = Ne(y),
            Ge = !E || typeof E == 'function' || ve,
            Ve = typeof xe == 'number' ? xe : xe || k,
            Ee = hn(Ve) ? Ve.toString() : void 0
          return (
            Oe !== void 0 && (Ee = Oe),
            r.createElement(
              'div',
              Je({}, _t(Fe), V ? {} : K(y, S), {
                'aria-selected': ve,
                className: _e,
                title: Ee,
                onMouseMove: function () {
                  Y === S || be || we(S)
                },
                onClick: function () {
                  be || ue(k)
                },
                style: Pe,
              }),
              r.createElement(
                'div',
                { className: ''.concat(Se, '-content') },
                typeof J == 'function' ? J(y, { index: S }) : Ve,
              ),
              r.isValidElement(E) || ve,
              Ge &&
                r.createElement(
                  zt,
                  {
                    className: ''.concat(U, '-option-state'),
                    customizeIcon: E,
                    customizeIconProps: {
                      value: k,
                      disabled: be,
                      isSelected: ve,
                    },
                  },
                  ve ? '✓' : null,
                ),
            )
          )
        },
      ),
    )
  },
  yo = r.forwardRef(wo)
const Io = function (e, t) {
  var n = r.useRef({ values: new Map(), options: new Map() }),
    o = r.useMemo(
      function () {
        var l = n.current,
          i = l.values,
          c = l.options,
          v = e.map(function (s) {
            if (s.label === void 0) {
              var h
              return Q(
                Q({}, s),
                {},
                {
                  label:
                    (h = i.get(s.value)) === null || h === void 0
                      ? void 0
                      : h.label,
                },
              )
            }
            return s
          }),
          m = new Map(),
          f = new Map()
        return (
          v.forEach(function (s) {
            m.set(s.value, s), f.set(s.value, t.get(s.value) || c.get(s.value))
          }),
          (n.current.values = m),
          (n.current.options = f),
          v
        )
      },
      [e, t],
    ),
    a = r.useCallback(
      function (l) {
        return t.get(l) || n.current.options.get(l)
      },
      [t],
    )
  return [o, a]
}
function Ft(e, t) {
  return Dn(e).join('').toUpperCase().includes(t)
}
const Eo = function (e, t, n, o, a) {
  return r.useMemo(
    function () {
      if (!n || o === !1) return e
      var l = t.options,
        i = t.label,
        c = t.value,
        v = [],
        m = typeof o == 'function',
        f = n.toUpperCase(),
        s = m
          ? o
          : function (u, g) {
              return a
                ? Ft(g[a], f)
                : g[l]
                  ? Ft(g[i !== 'children' ? i : 'label'], f)
                  : Ft(g[c], f)
            },
        h = m
          ? function (u) {
              return Xt(u)
            }
          : function (u) {
              return u
            }
      return (
        e.forEach(function (u) {
          if (u[l]) {
            var g = s(n, h(u))
            if (g) v.push(u)
            else {
              var d = u[l].filter(function (p) {
                return s(n, h(p))
              })
              d.length && v.push(Q(Q({}, u), {}, oe({}, l, d)))
            }
            return
          }
          s(n, h(u)) && v.push(u)
        }),
        v
      )
    },
    [e, o, a, n, t],
  )
}
var Sn = 0,
  Ro = ar()
function xo() {
  var e
  return Ro ? ((e = Sn), (Sn += 1)) : (e = 'TEST_OR_SSR'), e
}
function Mo(e) {
  var t = r.useState(),
    n = te(t, 2),
    o = n[0],
    a = n[1]
  return (
    r.useEffect(function () {
      a('rc_select_'.concat(xo()))
    }, []),
    e || o
  )
}
var $o = ['children', 'value'],
  Oo = ['children']
function Do(e) {
  var t = e,
    n = t.key,
    o = t.props,
    a = o.children,
    l = o.value,
    i = bt(o, $o)
  return Q({ key: n, value: l !== void 0 ? l : n, children: a }, i)
}
function Ln(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  return ir(e)
    .map(function (n, o) {
      if (!r.isValidElement(n) || !n.type) return null
      var a = n,
        l = a.type.isSelectOptGroup,
        i = a.key,
        c = a.props,
        v = c.children,
        m = bt(c, Oo)
      return t || !l
        ? Do(n)
        : Q(
            Q(
              {
                key: '__RC_SELECT_GRP__'.concat(i === null ? o : i, '__'),
                label: i,
              },
              m,
            ),
            {},
            { options: Ln(v) },
          )
    })
    .filter(function (n) {
      return n
    })
}
var Po = function (t, n, o, a, l) {
  return r.useMemo(
    function () {
      var i = t,
        c = !t
      c && (i = Ln(n))
      var v = new Map(),
        m = new Map(),
        f = function (u, g, d) {
          d && typeof d == 'string' && u.set(g[d], g)
        },
        s = function h(u) {
          for (
            var g =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              d = 0;
            d < u.length;
            d += 1
          ) {
            var p = u[d]
            !p[o.options] || g
              ? (v.set(p[o.value], p), f(m, p, o.label), f(m, p, a), f(m, p, l))
              : h(p[o.options], !0)
          }
        }
      return s(i), { options: i, valueOptions: v, labelOptions: m }
    },
    [t, n, o, a, l],
  )
}
function bn(e) {
  var t = r.useRef()
  t.current = e
  var n = r.useCallback(function () {
    return t.current.apply(t, arguments)
  }, [])
  return n
}
var To = [
    'id',
    'mode',
    'prefixCls',
    'backfill',
    'fieldNames',
    'inputValue',
    'searchValue',
    'onSearch',
    'autoClearSearchValue',
    'onSelect',
    'onDeselect',
    'dropdownMatchSelectWidth',
    'filterOption',
    'filterSort',
    'optionFilterProp',
    'optionLabelProp',
    'options',
    'optionRender',
    'children',
    'defaultActiveFirstOption',
    'menuItemSelectedIcon',
    'virtual',
    'direction',
    'listHeight',
    'listItemHeight',
    'labelRender',
    'value',
    'defaultValue',
    'labelInValue',
    'onChange',
    'maxCount',
  ],
  No = ['inputValue']
function _o(e) {
  return !e || St(e) !== 'object'
}
var zo = r.forwardRef(function (e, t) {
    var n = e.id,
      o = e.mode,
      a = e.prefixCls,
      l = a === void 0 ? 'rc-select' : a,
      i = e.backfill,
      c = e.fieldNames,
      v = e.inputValue,
      m = e.searchValue,
      f = e.onSearch,
      s = e.autoClearSearchValue,
      h = s === void 0 ? !0 : s,
      u = e.onSelect,
      g = e.onDeselect,
      d = e.dropdownMatchSelectWidth,
      p = d === void 0 ? !0 : d,
      w = e.filterOption,
      b = e.filterSort,
      E = e.optionFilterProp,
      C = e.optionLabelProp,
      F = e.options,
      V = e.optionRender,
      M = e.children,
      j = e.defaultActiveFirstOption,
      X = e.menuItemSelectedIcon,
      J = e.virtual,
      U = e.direction,
      G = e.listHeight,
      ne = G === void 0 ? 200 : G,
      L = e.listItemHeight,
      re = L === void 0 ? 20 : L,
      W = e.labelRender,
      z = e.value,
      R = e.defaultValue,
      N = e.labelInValue,
      Y = e.onChange,
      Z = e.maxCount,
      we = bt(e, To),
      ce = Mo(n),
      ue = Ut(o),
      de = !!(!F && M),
      Ne = r.useMemo(
        function () {
          return w === void 0 && o === 'combobox' ? !1 : w
        },
        [w, o],
      ),
      K = r.useMemo(
        function () {
          return Tn(c, de)
        },
        [JSON.stringify(c), de],
      ),
      pe = Wt('', {
        value: m !== void 0 ? m : v,
        postState: function (T) {
          return T || ''
        },
      }),
      ye = te(pe, 2),
      y = ye[0],
      S = ye[1],
      D = Po(F, M, K, E, C),
      B = D.valueOptions,
      x = D.labelOptions,
      H = D.options,
      k = r.useCallback(
        function (_) {
          var T = Dn(_)
          return T.map(function ($) {
            var P, ie, me, Ye, je
            if (_o($)) P = $
            else {
              var tt
              ;(me = $.key),
                (ie = $.label),
                (P = (tt = $.value) !== null && tt !== void 0 ? tt : me)
            }
            var Me = B.get(P)
            if (Me) {
              var qe
              ie === void 0 && (ie = Me == null ? void 0 : Me[C || K.label]),
                me === void 0 &&
                  (me =
                    (qe = Me == null ? void 0 : Me.key) !== null &&
                    qe !== void 0
                      ? qe
                      : P),
                (Ye = Me == null ? void 0 : Me.disabled),
                (je = Me == null ? void 0 : Me.title)
            }
            return { label: ie, value: P, key: me, disabled: Ye, title: je }
          })
        },
        [K, C, B],
      ),
      se = Wt(R, { value: z }),
      ae = te(se, 2),
      ge = ae[0],
      Ie = ae[1],
      Oe = r.useMemo(
        function () {
          var _,
            T = ue && ge === null ? [] : ge,
            $ = k(T)
          return o === 'combobox' &&
            Fr((_ = $[0]) === null || _ === void 0 ? void 0 : _.value)
            ? []
            : $
        },
        [ge, k, o, ue],
      ),
      Pe = Io(Oe, B),
      Re = te(Pe, 2),
      he = Re[0],
      Fe = Re[1],
      ve = r.useMemo(
        function () {
          if (!o && he.length === 1) {
            var _ = he[0]
            if (_.value === null && (_.label === null || _.label === void 0))
              return []
          }
          return he.map(function (T) {
            var $
            return Q(
              Q({}, T),
              {},
              {
                label:
                  ($ = typeof W == 'function' ? W(T) : T.label) !== null &&
                  $ !== void 0
                    ? $
                    : T.value,
              },
            )
          })
        },
        [o, he, W],
      ),
      be = r.useMemo(
        function () {
          return new Set(
            he.map(function (_) {
              return _.value
            }),
          )
        },
        [he],
      )
    r.useEffect(
      function () {
        if (o === 'combobox') {
          var _,
            T = (_ = he[0]) === null || _ === void 0 ? void 0 : _.value
          S(Br(T) ? String(T) : '')
        }
      },
      [he],
    )
    var Se = bn(function (_, T) {
        var $ = T ?? _
        return oe(oe({}, K.value, _), K.label, $)
      }),
      _e = r.useMemo(
        function () {
          if (o !== 'tags') return H
          var _ = Qe(H),
            T = function (P) {
              return B.has(P)
            }
          return (
            Qe(he)
              .sort(function ($, P) {
                return $.value < P.value ? -1 : 1
              })
              .forEach(function ($) {
                var P = $.value
                T(P) || _.push(Se(P, $.label))
              }),
            _
          )
        },
        [Se, H, B, he, o],
      ),
      xe = Eo(_e, K, y, Ne, E),
      Ge = r.useMemo(
        function () {
          return o !== 'tags' ||
            !y ||
            xe.some(function (_) {
              return _[E || 'value'] === y
            }) ||
            xe.some(function (_) {
              return _[K.value] === y
            })
            ? xe
            : [Se(y)].concat(Qe(xe))
        },
        [Se, E, o, xe, y, K],
      ),
      Ve = function _(T) {
        var $ = Qe(T).sort(function (P, ie) {
          return b(P, ie, { searchValue: y })
        })
        return $.map(function (P) {
          return Array.isArray(P.options)
            ? Q(
                Q({}, P),
                {},
                { options: P.options.length > 0 ? _(P.options) : P.options },
              )
            : P
        })
      },
      Ee = r.useMemo(
        function () {
          return b ? Ve(Ge) : Ge
        },
        [Ge, b, y],
      ),
      Ue = r.useMemo(
        function () {
          return Qr(Ee, { fieldNames: K, childrenAsData: de })
        },
        [Ee, K, de],
      ),
      Ze = function (T) {
        var $ = k(T)
        if (
          (Ie($),
          Y &&
            ($.length !== he.length ||
              $.some(function (me, Ye) {
                var je
                return (
                  ((je = he[Ye]) === null || je === void 0
                    ? void 0
                    : je.value) !== (me == null ? void 0 : me.value)
                )
              })))
        ) {
          var P = N
              ? $
              : $.map(function (me) {
                  return me.value
                }),
            ie = $.map(function (me) {
              return Xt(Fe(me.value))
            })
          Y(ue ? P : P[0], ue ? ie : ie[0])
        }
      },
      He = r.useState(null),
      Ae = te(He, 2),
      ze = Ae[0],
      ct = Ae[1],
      vt = r.useState(0),
      ot = te(vt, 2),
      Et = ot[0],
      ut = ot[1],
      at = j !== void 0 ? j : o !== 'combobox',
      st = r.useCallback(
        function (_, T) {
          var $ =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            P = $.source,
            ie = P === void 0 ? 'keyboard' : P
          ut(T),
            i &&
              o === 'combobox' &&
              _ !== null &&
              ie === 'keyboard' &&
              ct(String(_))
        },
        [i, o],
      ),
      et = function (T, $, P) {
        var ie = function () {
          var O,
            I = Fe(T)
          return [
            N
              ? {
                  label: I == null ? void 0 : I[K.label],
                  value: T,
                  key:
                    (O = I == null ? void 0 : I.key) !== null && O !== void 0
                      ? O
                      : T,
                }
              : T,
            Xt(I),
          ]
        }
        if ($ && u) {
          var me = ie(),
            Ye = te(me, 2),
            je = Ye[0],
            tt = Ye[1]
          u(je, tt)
        } else if (!$ && g && P !== 'clear') {
          var Me = ie(),
            qe = te(Me, 2),
            Rt = qe[0],
            it = qe[1]
          g(Rt, it)
        }
      },
      dt = bn(function (_, T) {
        var $,
          P = ue ? T.selected : !0
        P
          ? ($ = ue ? [].concat(Qe(he), [_]) : [_])
          : ($ = he.filter(function (ie) {
              return ie.value !== _
            })),
          Ze($),
          et(_, P),
          o === 'combobox' ? ct('') : (!Ut || h) && (S(''), ct(''))
      }),
      Ce = function (T, $) {
        Ze(T)
        var P = $.type,
          ie = $.values
        ;(P === 'remove' || P === 'clear') &&
          ie.forEach(function (me) {
            et(me.value, !1, P)
          })
      },
      ft = function (T, $) {
        if ((S(T), ct(null), $.source === 'submit')) {
          var P = (T || '').trim()
          if (P) {
            var ie = Array.from(new Set([].concat(Qe(be), [P])))
            Ze(ie), et(P, !0), S('')
          }
          return
        }
        $.source !== 'blur' && (o === 'combobox' && Ze(T), f == null || f(T))
      },
      ke = function (T) {
        var $ = T
        o !== 'tags' &&
          ($ = T.map(function (ie) {
            var me = x.get(ie)
            return me == null ? void 0 : me.value
          }).filter(function (ie) {
            return ie !== void 0
          }))
        var P = Array.from(new Set([].concat(Qe(be), Qe($))))
        Ze(P),
          P.forEach(function (ie) {
            et(ie, !0)
          })
      },
      We = r.useMemo(
        function () {
          var _ = J !== !1 && p !== !1
          return Q(
            Q({}, D),
            {},
            {
              flattenOptions: Ue,
              onActiveValue: st,
              defaultActiveFirstOption: at,
              onSelect: dt,
              menuItemSelectedIcon: X,
              rawValues: be,
              fieldNames: K,
              virtual: _,
              direction: U,
              listHeight: ne,
              listItemHeight: re,
              childrenAsData: de,
              maxCount: Z,
              optionRender: V,
            },
          )
        },
        [Z, D, Ue, st, at, dt, X, be, K, J, p, U, ne, re, de, V],
      )
    return r.createElement(
      Qt.Provider,
      { value: We },
      r.createElement(
        to,
        Je({}, we, {
          id: ce,
          prefixCls: l,
          ref: t,
          omitDomProps: No,
          mode: o,
          displayValues: ve,
          onDisplayValuesChange: Ce,
          direction: U,
          searchValue: y,
          onSearch: ft,
          autoClearSearchValue: h,
          onSearchSplit: ke,
          dropdownMatchSelectWidth: p,
          OptionList: yo,
          emptyOptions: !Ue.length,
          activeValue: ze,
          activeDescendantId: ''.concat(ce, '_list_').concat(Et),
        }),
      ),
    )
  }),
  kt = zo
kt.Option = Zt
kt.OptGroup = Jt
const Lo = () => {
    const [, e] = Gt(),
      n = new Nt(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {}
    return r.createElement(
      'svg',
      {
        style: n,
        width: '184',
        height: '152',
        viewBox: '0 0 184 152',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('title', null, 'empty image'),
      r.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        r.createElement(
          'g',
          { transform: 'translate(24 31.67)' },
          r.createElement('ellipse', {
            fillOpacity: '.8',
            fill: '#F5F5F7',
            cx: '67.797',
            cy: '106.89',
            rx: '67.797',
            ry: '12.668',
          }),
          r.createElement('path', {
            d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
            fill: '#AEB8C2',
          }),
          r.createElement('path', {
            d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
            fill: 'url(#linearGradient-1)',
            transform: 'translate(13.56)',
          }),
          r.createElement('path', {
            d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
            fill: '#F5F5F7',
          }),
          r.createElement('path', {
            d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
            fill: '#DCE0E6',
          }),
        ),
        r.createElement('path', {
          d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
          fill: '#DCE0E6',
        }),
        r.createElement(
          'g',
          { transform: 'translate(149.65 15.383)', fill: '#FFF' },
          r.createElement('ellipse', {
            cx: '20.654',
            cy: '3.167',
            rx: '2.849',
            ry: '2.815',
          }),
          r.createElement('path', {
            d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
          }),
        ),
      ),
    )
  },
  Ho = () => {
    const [, e] = Gt(),
      {
        colorFill: t,
        colorFillTertiary: n,
        colorFillQuaternary: o,
        colorBgContainer: a,
      } = e,
      {
        borderColor: l,
        shadowColor: i,
        contentColor: c,
      } = r.useMemo(
        () => ({
          borderColor: new Nt(t).onBackground(a).toHexShortString(),
          shadowColor: new Nt(n).onBackground(a).toHexShortString(),
          contentColor: new Nt(o).onBackground(a).toHexShortString(),
        }),
        [t, n, o, a],
      )
    return r.createElement(
      'svg',
      {
        width: '64',
        height: '41',
        viewBox: '0 0 64 41',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('title', null, 'Simple Empty'),
      r.createElement(
        'g',
        { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
        r.createElement('ellipse', {
          fill: i,
          cx: '32',
          cy: '33',
          rx: '32',
          ry: '7',
        }),
        r.createElement(
          'g',
          { fillRule: 'nonzero', stroke: l },
          r.createElement('path', {
            d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
          }),
          r.createElement('path', {
            d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
            fill: c,
          }),
        ),
      ),
    )
  },
  Bo = (e) => {
    const {
      componentCls: t,
      margin: n,
      marginXS: o,
      marginXL: a,
      fontSize: l,
      lineHeight: i,
    } = e
    return {
      [t]: {
        marginInline: o,
        fontSize: l,
        lineHeight: i,
        textAlign: 'center',
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: o,
          opacity: e.opacityImage,
          img: { height: '100%' },
          svg: { maxWidth: '100%', height: '100%', margin: 'auto' },
        },
        [`${t}-description`]: { color: e.colorTextDescription },
        [`${t}-footer`]: { marginTop: n },
        '&-normal': {
          marginBlock: a,
          color: e.colorTextDescription,
          [`${t}-description`]: { color: e.colorTextDescription },
          [`${t}-image`]: { height: e.emptyImgHeightMD },
        },
        '&-small': {
          marginBlock: o,
          color: e.colorTextDescription,
          [`${t}-image`]: { height: e.emptyImgHeightSM },
        },
      },
    }
  },
  Fo = Rn('Empty', (e) => {
    const { componentCls: t, controlHeightLG: n, calc: o } = e,
      a = It(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: o(n).mul(2.5).equal(),
        emptyImgHeightMD: n,
        emptyImgHeightSM: o(n).mul(0.875).equal(),
      })
    return [Bo(a)]
  })
var Vo = function (e, t) {
  var n = {}
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]])
  return n
}
const Hn = r.createElement(Lo, null),
  Bn = r.createElement(Ho, null),
  ht = (e) => {
    var {
        className: t,
        rootClassName: n,
        prefixCls: o,
        image: a = Hn,
        description: l,
        children: i,
        imageStyle: c,
        style: v,
      } = e,
      m = Vo(e, [
        'className',
        'rootClassName',
        'prefixCls',
        'image',
        'description',
        'children',
        'imageStyle',
        'style',
      ])
    const { getPrefixCls: f, direction: s, empty: h } = r.useContext(Yt),
      u = f('empty', o),
      [g, d, p] = Fo(u),
      [w] = lr('Empty'),
      b = typeof l < 'u' ? l : w == null ? void 0 : w.description,
      E = typeof b == 'string' ? b : 'empty'
    let C = null
    return (
      typeof a == 'string'
        ? (C = r.createElement('img', { alt: E, src: a }))
        : (C = a),
      g(
        r.createElement(
          'div',
          Object.assign(
            {
              className: Be(
                d,
                p,
                u,
                h == null ? void 0 : h.className,
                { [`${u}-normal`]: a === Bn, [`${u}-rtl`]: s === 'rtl' },
                t,
                n,
              ),
              style: Object.assign(
                Object.assign({}, h == null ? void 0 : h.style),
                v,
              ),
            },
            m,
          ),
          r.createElement('div', { className: `${u}-image`, style: c }, C),
          b && r.createElement('div', { className: `${u}-description` }, b),
          i && r.createElement('div', { className: `${u}-footer` }, i),
        ),
      )
    )
  }
ht.PRESENTED_IMAGE_DEFAULT = Hn
ht.PRESENTED_IMAGE_SIMPLE = Bn
const Ao = (e) => {
    const { componentName: t } = e,
      { getPrefixCls: n } = r.useContext(Yt),
      o = n('empty')
    switch (t) {
      case 'Table':
      case 'List':
        return wt.createElement(ht, { image: ht.PRESENTED_IMAGE_SIMPLE })
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return wt.createElement(ht, {
          image: ht.PRESENTED_IMAGE_SIMPLE,
          className: `${o}-small`,
        })
      case 'Table.filter':
        return null
      default:
        return wt.createElement(ht, null)
    }
  },
  Wo = (e) => {
    const n = {
      overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
      htmlRegion: e === 'scroll' ? 'scroll' : 'visible',
      dynamicInset: !0,
    }
    return {
      bottomLeft: Object.assign(Object.assign({}, n), {
        points: ['tl', 'bl'],
        offset: [0, 4],
      }),
      bottomRight: Object.assign(Object.assign({}, n), {
        points: ['tr', 'br'],
        offset: [0, 4],
      }),
      topLeft: Object.assign(Object.assign({}, n), {
        points: ['bl', 'tl'],
        offset: [0, -4],
      }),
      topRight: Object.assign(Object.assign({}, n), {
        points: ['br', 'tr'],
        offset: [0, -4],
      }),
    }
  }
function jo(e, t) {
  return e || Wo(t)
}
const Cn = (e) => {
    const {
      optionHeight: t,
      optionFontSize: n,
      optionLineHeight: o,
      optionPadding: a,
    } = e
    return {
      position: 'relative',
      display: 'block',
      minHeight: t,
      padding: a,
      color: e.colorText,
      fontWeight: 'normal',
      fontSize: n,
      lineHeight: o,
      boxSizing: 'border-box',
    }
  },
  Ko = (e) => {
    const { antCls: t, componentCls: n } = e,
      o = `${n}-item`,
      a = `&${t}-slide-up-enter${t}-slide-up-enter-active`,
      l = `&${t}-slide-up-appear${t}-slide-up-appear-active`,
      i = `&${t}-slide-up-leave${t}-slide-up-leave-active`,
      c = `${n}-dropdown-placement-`
    return [
      {
        [`${n}-dropdown`]: Object.assign(Object.assign({}, qt(e)), {
          position: 'absolute',
          top: -9999,
          zIndex: e.zIndexPopup,
          boxSizing: 'border-box',
          padding: e.paddingXXS,
          overflow: 'hidden',
          fontSize: e.fontSize,
          fontVariant: 'initial',
          backgroundColor: e.colorBgElevated,
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          [`
          ${a}${c}bottomLeft,
          ${l}${c}bottomLeft
        `]: { animationName: cr },
          [`
          ${a}${c}topLeft,
          ${l}${c}topLeft,
          ${a}${c}topRight,
          ${l}${c}topRight
        `]: { animationName: ur },
          [`${i}${c}bottomLeft`]: { animationName: sr },
          [`
          ${i}${c}topLeft,
          ${i}${c}topRight
        `]: { animationName: dr },
          '&-hidden': { display: 'none' },
          [o]: Object.assign(Object.assign({}, Cn(e)), {
            cursor: 'pointer',
            transition: `background ${e.motionDurationSlow} ease`,
            borderRadius: e.borderRadiusSM,
            '&-group': {
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              cursor: 'default',
            },
            '&-option': {
              display: 'flex',
              '&-content': Object.assign({ flex: 'auto' }, jt),
              '&-state': {
                flex: 'none',
                display: 'flex',
                alignItems: 'center',
              },
              [`&-active:not(${o}-option-disabled)`]: {
                backgroundColor: e.optionActiveBg,
              },
              [`&-selected:not(${o}-option-disabled)`]: {
                color: e.optionSelectedColor,
                fontWeight: e.optionSelectedFontWeight,
                backgroundColor: e.optionSelectedBg,
                [`${o}-option-state`]: { color: e.colorPrimary },
                [`&:has(+ ${o}-option-selected:not(${o}-option-disabled))`]: {
                  borderEndStartRadius: 0,
                  borderEndEndRadius: 0,
                  [`& + ${o}-option-selected:not(${o}-option-disabled)`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0,
                  },
                },
              },
              '&-disabled': {
                [`&${o}-option-selected`]: {
                  backgroundColor: e.colorBgContainerDisabled,
                },
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
              },
              '&-grouped': {
                paddingInlineStart: e
                  .calc(e.controlPaddingHorizontal)
                  .mul(2)
                  .equal(),
              },
            },
            '&-empty': Object.assign(Object.assign({}, Cn(e)), {
              color: e.colorTextDisabled,
            }),
          }),
          '&-rtl': { direction: 'rtl' },
        }),
      },
      ln(e, 'slide-up'),
      ln(e, 'slide-down'),
      cn(e, 'move-up'),
      cn(e, 'move-down'),
    ]
  },
  Xo = (e) => {
    const {
        multipleSelectItemHeight: t,
        paddingXXS: n,
        lineWidth: o,
        INTERNAL_FIXED_ITEM_MARGIN: a,
      } = e,
      l = e.max(e.calc(n).sub(o).equal(), 0),
      i = e.max(e.calc(l).sub(a).equal(), 0)
    return {
      basePadding: l,
      containerPadding: i,
      itemHeight: De(t),
      itemLineHeight: De(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()),
    }
  },
  Uo = (e) => {
    const { multipleSelectItemHeight: t, selectHeight: n, lineWidth: o } = e
    return e.calc(n).sub(t).div(2).sub(o).equal()
  },
  Go = (e) => {
    const {
      componentCls: t,
      iconCls: n,
      borderRadiusSM: o,
      motionDurationSlow: a,
      paddingXS: l,
      multipleItemColorDisabled: i,
      multipleItemBorderColorDisabled: c,
      colorIcon: v,
      colorIconHover: m,
      INTERNAL_FIXED_ITEM_MARGIN: f,
    } = e
    return {
      [`${t}-selection-overflow`]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex',
        },
        [`${t}-selection-item`]: {
          display: 'flex',
          alignSelf: 'center',
          flex: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
          marginBlock: f,
          borderRadius: o,
          cursor: 'default',
          transition: `font-size ${a}, line-height ${a}, height ${a}`,
          marginInlineEnd: e.calc(f).mul(2).equal(),
          paddingInlineStart: l,
          paddingInlineEnd: e.calc(l).div(2).equal(),
          [`${t}-disabled&`]: {
            color: i,
            borderColor: c,
            cursor: 'not-allowed',
          },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: e.calc(l).div(2).equal(),
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': Object.assign(Object.assign({}, xn()), {
            display: 'inline-flex',
            alignItems: 'center',
            color: v,
            fontWeight: 'bold',
            fontSize: 10,
            lineHeight: 'inherit',
            cursor: 'pointer',
            [`> ${n}`]: { verticalAlign: '-0.2em' },
            '&:hover': { color: m },
          }),
        },
      },
    }
  },
  Yo = (e, t) => {
    const { componentCls: n, INTERNAL_FIXED_ITEM_MARGIN: o } = e,
      a = `${n}-selection-overflow`,
      l = e.multipleSelectItemHeight,
      i = Uo(e),
      c = t ? `${n}-${t}` : '',
      v = Xo(e)
    return {
      [`${n}-multiple${c}`]: Object.assign(Object.assign({}, Go(e)), {
        [`${n}-selector`]: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: '100%',
          paddingInline: v.basePadding,
          paddingBlock: v.containerPadding,
          borderRadius: e.borderRadius,
          [`${n}-disabled&`]: {
            background: e.multipleSelectorBgDisabled,
            cursor: 'not-allowed',
          },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${De(o)} 0`,
            lineHeight: De(l),
            visibility: 'hidden',
            content: '"\\a0"',
          },
        },
        [`${n}-selection-item`]: {
          height: v.itemHeight,
          lineHeight: De(v.itemLineHeight),
        },
        [`${a}-item + ${a}-item`]: {
          [`${n}-selection-search`]: { marginInlineStart: 0 },
        },
        [`${a}-item-suffix`]: { height: '100%' },
        [`${n}-selection-search`]: {
          display: 'inline-flex',
          position: 'relative',
          maxWidth: '100%',
          marginInlineStart: e
            .calc(e.inputPaddingHorizontalBase)
            .sub(i)
            .equal(),
          '\n          &-input,\n          &-mirror\n        ': {
            height: l,
            fontFamily: e.fontFamily,
            lineHeight: De(l),
            transition: `all ${e.motionDurationSlow}`,
          },
          '&-input': { width: '100%', minWidth: 4.1 },
          '&-mirror': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: 'auto',
            zIndex: 999,
            whiteSpace: 'pre',
            visibility: 'hidden',
          },
        },
        [`${n}-selection-placeholder`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: e.inputPaddingHorizontalBase,
          insetInlineEnd: e.inputPaddingHorizontalBase,
          transform: 'translateY(-50%)',
          transition: `all ${e.motionDurationSlow}`,
        },
      }),
    }
  }
function Vt(e, t) {
  const { componentCls: n } = e,
    o = t ? `${n}-${t}` : '',
    a = {
      [`${n}-multiple${o}`]: {
        fontSize: e.fontSize,
        [`${n}-selector`]: { [`${n}-show-search&`]: { cursor: 'text' } },
        [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
          paddingInlineEnd: e
            .calc(e.fontSizeIcon)
            .add(e.controlPaddingHorizontal)
            .equal(),
        },
      },
    }
  return [Yo(e, t), a]
}
const qo = (e) => {
  const { componentCls: t } = e,
    n = It(e, {
      selectHeight: e.controlHeightSM,
      multipleSelectItemHeight: e.multipleItemHeightSM,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    o = It(e, {
      fontSize: e.fontSizeLG,
      selectHeight: e.controlHeightLG,
      multipleSelectItemHeight: e.multipleItemHeightLG,
      borderRadius: e.borderRadiusLG,
      borderRadiusSM: e.borderRadius,
    })
  return [
    Vt(e),
    Vt(n, 'sm'),
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e
            .calc(e.controlPaddingHorizontalSM)
            .sub(e.lineWidth)
            .equal(),
        },
        [`${t}-selection-search`]: { marginInlineStart: 2 },
      },
    },
    Vt(o, 'lg'),
  ]
}
function At(e, t) {
  const {
      componentCls: n,
      inputPaddingHorizontalBase: o,
      borderRadius: a,
      fontSizeIcon: l,
    } = e,
    i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
    c = e.calc(o).add(l).equal(),
    v = t ? `${n}-${t}` : ''
  return {
    [`${n}-single${v}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      [`${n}-selector`]: Object.assign(Object.assign({}, qt(e, !0)), {
        display: 'flex',
        borderRadius: a,
        [`${n}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: o,
          insetInlineEnd: De(c),
          bottom: 0,
          '&-input': { width: '100%', WebkitAppearance: 'textfield' },
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: De(i),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: 'center',
        },
        [`${n}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none',
        },
        [[
          '&:after',
          `${n}-selection-item:empty:after`,
          `${n}-selection-placeholder:empty:after`,
        ].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"',
        },
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: { paddingInlineEnd: e.showArrowPaddingInlineEnd },
      [`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: '100%',
          height: '100%',
          padding: `0 ${De(o)}`,
          [`${n}-selection-search-input`]: { height: i },
          '&:after': { lineHeight: De(i) },
        },
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          '&:after': { display: 'none' },
          [`${n}-selection-search`]: { position: 'static', width: '100%' },
          [`${n}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${De(o)}`,
            '&:after': { display: 'none' },
          },
        },
      },
    },
  }
}
function Qo(e) {
  const { componentCls: t } = e,
    n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
  return [
    At(e),
    At(
      It(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      'sm',
    ),
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: { insetInlineStart: n, insetInlineEnd: n },
          [`${t}-selector`]: { padding: `0 ${De(n)}` },
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal(),
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal() },
        },
      },
    },
    At(
      It(e, {
        controlHeight: e.singleItemHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      'lg',
    ),
  ]
}
const Jo = (e) => {
    const {
        fontSize: t,
        lineHeight: n,
        lineWidth: o,
        controlHeight: a,
        controlHeightSM: l,
        controlHeightLG: i,
        paddingXXS: c,
        controlPaddingHorizontal: v,
        zIndexPopupBase: m,
        colorText: f,
        fontWeightStrong: s,
        controlItemBgActive: h,
        controlItemBgHover: u,
        colorBgContainer: g,
        colorFillSecondary: d,
        colorBgContainerDisabled: p,
        colorTextDisabled: w,
        colorPrimaryHover: b,
        colorPrimary: E,
        controlOutline: C,
      } = e,
      F = c * 2,
      V = o * 2,
      M = Math.min(a - F, a - V),
      j = Math.min(l - F, l - V),
      X = Math.min(i - F, i - V)
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(c / 2),
      zIndexPopup: m + 50,
      optionSelectedColor: f,
      optionSelectedFontWeight: s,
      optionSelectedBg: h,
      optionActiveBg: u,
      optionPadding: `${(a - t * n) / 2}px ${v}px`,
      optionFontSize: t,
      optionLineHeight: n,
      optionHeight: a,
      selectorBg: g,
      clearBg: g,
      singleItemHeightLG: i,
      multipleItemBg: d,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: M,
      multipleItemHeightSM: j,
      multipleItemHeightLG: X,
      multipleSelectorBgDisabled: p,
      multipleItemColorDisabled: w,
      multipleItemBorderColorDisabled: 'transparent',
      showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
      hoverBorderColor: b,
      activeBorderColor: E,
      activeOutlineColor: C,
    }
  },
  Fn = (e, t) => {
    const { componentCls: n, antCls: o, controlOutlineWidth: a } = e
    return {
      [`&:not(${n}-customize-input) ${n}-selector`]: {
        border: `${De(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
        background: e.selectorBg,
      },
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${o}-pagination-size-changer)`]:
        {
          [`&:hover ${n}-selector`]: { borderColor: t.hoverBorderHover },
          [`${n}-focused& ${n}-selector`]: {
            borderColor: t.activeBorderColor,
            boxShadow: `0 0 0 ${De(a)} ${t.activeOutlineColor}`,
            outline: 0,
          },
        },
    }
  },
  wn = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Fn(e, t)),
  }),
  Zo = (e) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Fn(e, {
              borderColor: e.colorBorder,
              hoverBorderHover: e.hoverBorderColor,
              activeBorderColor: e.activeBorderColor,
              activeOutlineColor: e.activeOutlineColor,
            }),
          ),
          wn(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeOutlineColor: e.colorErrorOutline,
          }),
        ),
        wn(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderHover: e.colorWarningHover,
          activeBorderColor: e.colorWarning,
          activeOutlineColor: e.colorWarningOutline,
        }),
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.multipleItemBg,
          border: `${De(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
        },
      },
    ),
  }),
  Vn = (e, t) => {
    const { componentCls: n, antCls: o } = e
    return {
      [`&:not(${n}-customize-input) ${n}-selector`]: {
        background: t.bg,
        border: `${De(e.lineWidth)} ${e.lineType} transparent`,
        color: t.color,
      },
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${o}-pagination-size-changer)`]:
        {
          [`&:hover ${n}-selector`]: { background: t.hoverBg },
          [`${n}-focused& ${n}-selector`]: {
            background: e.selectorBg,
            borderColor: t.activeBorderColor,
            outline: 0,
          },
        },
    }
  },
  yn = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Vn(e, t)),
  }),
  ko = (e) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Vn(e, {
              bg: e.colorFillTertiary,
              hoverBg: e.colorFillSecondary,
              activeBorderColor: e.activeBorderColor,
              color: e.colorText,
            }),
          ),
          yn(e, {
            status: 'error',
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            color: e.colorError,
          }),
        ),
        yn(e, {
          status: 'warning',
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          color: e.colorWarning,
        }),
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              borderColor: e.colorBorder,
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.colorBgContainer,
          border: `${De(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
        },
      },
    ),
  }),
  ea = (e) => ({
    '&-borderless': {
      [`${e.componentCls}-selector`]: {
        background: 'transparent',
        borderColor: 'transparent',
      },
      [`&${e.componentCls}-disabled`]: {
        [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
          { color: e.colorTextDisabled },
      },
      [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
        background: e.multipleItemBg,
        border: `${De(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
      },
      [`&${e.componentCls}-status-error`]: {
        [`${e.componentCls}-selection-item`]: { color: e.colorError },
      },
      [`&${e.componentCls}-status-warning`]: {
        [`${e.componentCls}-selection-item`]: { color: e.colorWarning },
      },
    },
  }),
  ta = (e) => ({
    [e.componentCls]: Object.assign(
      Object.assign(Object.assign({}, Zo(e)), ko(e)),
      ea(e),
    ),
  }),
  na = (e) => {
    const { componentCls: t } = e
    return {
      position: 'relative',
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: 'pointer' },
      [`${t}-show-search&`]: {
        cursor: 'text',
        input: { cursor: 'auto', color: 'inherit', height: '100%' },
      },
      [`${t}-disabled&`]: {
        cursor: 'not-allowed',
        input: { cursor: 'not-allowed' },
      },
    }
  },
  ra = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        appearance: 'none',
        fontFamily: 'inherit',
        '&::-webkit-search-cancel-button': {
          display: 'none',
          '-webkit-appearance': 'none',
        },
      },
    }
  },
  oa = (e) => {
    const {
      antCls: t,
      componentCls: n,
      inputPaddingHorizontalBase: o,
      iconCls: a,
    } = e
    return {
      [n]: Object.assign(Object.assign({}, qt(e)), {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(
          Object.assign({}, na(e)),
          ra(e),
        ),
        [`${n}-selection-item`]: Object.assign(
          Object.assign(
            {
              flex: 1,
              fontWeight: 'normal',
              position: 'relative',
              userSelect: 'none',
            },
            jt,
          ),
          { [`> ${t}-typography`]: { display: 'inline' } },
        ),
        [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, jt), {
          flex: 1,
          color: e.colorTextPlaceholder,
          pointerEvents: 'none',
        }),
        [`${n}-arrow`]: Object.assign(Object.assign({}, xn()), {
          position: 'absolute',
          top: '50%',
          insetInlineStart: 'auto',
          insetInlineEnd: o,
          height: e.fontSizeIcon,
          marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          lineHeight: 1,
          textAlign: 'center',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          transition: `opacity ${e.motionDurationSlow} ease`,
          [a]: {
            verticalAlign: 'top',
            transition: `transform ${e.motionDurationSlow}`,
            '> svg': { verticalAlign: 'top' },
            [`&:not(${n}-suffix)`]: { pointerEvents: 'auto' },
          },
          [`${n}-disabled &`]: { cursor: 'not-allowed' },
          '> *:not(:last-child)': { marginInlineEnd: 8 },
        }),
        [`${n}-clear`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: 'auto',
          insetInlineEnd: o,
          zIndex: 1,
          display: 'inline-block',
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          fontStyle: 'normal',
          lineHeight: 1,
          textAlign: 'center',
          textTransform: 'none',
          cursor: 'pointer',
          opacity: 0,
          transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
          textRendering: 'auto',
          '&:before': { display: 'block' },
          '&:hover': { color: e.colorTextTertiary },
        },
        [`&:hover ${n}-clear`]: {
          opacity: 1,
          background: e.colorBgBase,
          borderRadius: '50%',
        },
      }),
      [`${n}-has-feedback`]: {
        [`${n}-clear`]: {
          insetInlineEnd: e.calc(o).add(e.fontSize).add(e.paddingXS).equal(),
        },
      },
    }
  },
  aa = (e) => {
    const { componentCls: t } = e
    return [
      { [t]: { [`&${t}-in-form-item`]: { width: '100%' } } },
      oa(e),
      Qo(e),
      qo(e),
      Ko(e),
      { [`${t}-rtl`]: { direction: 'rtl' } },
      fr(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
    ]
  },
  ia = Rn(
    'Select',
    (e, t) => {
      let { rootPrefixCls: n } = t
      const o = It(e, {
        rootPrefixCls: n,
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      })
      return [aa(o), ta(o)]
    },
    Jo,
    { unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } },
  )
var la = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
      ],
    },
    name: 'down',
    theme: 'outlined',
  },
  ca = function (t, n) {
    return r.createElement(vr, Je({}, t, { ref: n, icon: la }))
  },
  ua = r.forwardRef(ca)
function sa(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: o,
    removeIcon: a,
    loading: l,
    multiple: i,
    hasFeedback: c,
    prefixCls: v,
    showSuffixIcon: m,
    feedbackIcon: f,
    showArrow: s,
    componentName: h,
  } = e
  const u = n ?? r.createElement(mr, null),
    g = (b) =>
      t === null && !c && !s
        ? null
        : r.createElement(r.Fragment, null, m !== !1 && b, c && f)
  let d = null
  if (t !== void 0) d = g(t)
  else if (l) d = g(r.createElement(hr, { spin: !0 }))
  else {
    const b = `${v}-suffix`
    d = (E) => {
      let { open: C, showSearch: F } = E
      return g(
        C && F
          ? r.createElement(Sr, { className: b })
          : r.createElement(ua, { className: b }),
      )
    }
  }
  let p = null
  o !== void 0 ? (p = o) : i ? (p = r.createElement(gr, null)) : (p = null)
  let w = null
  return (
    a !== void 0 ? (w = a) : (w = r.createElement(pr, null)),
    { clearIcon: u, suffixIcon: d, itemIcon: p, removeIcon: w }
  )
}
function da(e, t) {
  return t !== void 0 ? t : e !== null
}
var fa = function (e, t) {
  var n = {}
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]])
  return n
}
const An = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
  va = (e, t) => {
    var n
    const {
        prefixCls: o,
        bordered: a,
        className: l,
        rootClassName: i,
        getPopupContainer: c,
        popupClassName: v,
        dropdownClassName: m,
        listHeight: f = 256,
        placement: s,
        listItemHeight: h,
        size: u,
        disabled: g,
        notFoundContent: d,
        status: p,
        builtinPlacements: w,
        dropdownMatchSelectWidth: b,
        popupMatchSelectWidth: E,
        direction: C,
        style: F,
        allowClear: V,
        variant: M,
        dropdownStyle: j,
        transitionName: X,
        tagRender: J,
        maxCount: U,
      } = e,
      G = fa(e, [
        'prefixCls',
        'bordered',
        'className',
        'rootClassName',
        'getPopupContainer',
        'popupClassName',
        'dropdownClassName',
        'listHeight',
        'placement',
        'listItemHeight',
        'size',
        'disabled',
        'notFoundContent',
        'status',
        'builtinPlacements',
        'dropdownMatchSelectWidth',
        'popupMatchSelectWidth',
        'direction',
        'style',
        'allowClear',
        'variant',
        'dropdownStyle',
        'transitionName',
        'tagRender',
        'maxCount',
      ]),
      {
        getPopupContainer: ne,
        getPrefixCls: L,
        renderEmpty: re,
        direction: W,
        virtual: z,
        popupMatchSelectWidth: R,
        popupOverflow: N,
        select: Y,
      } = r.useContext(Yt),
      [, Z] = Gt(),
      we = h ?? (Z == null ? void 0 : Z.controlHeight),
      ce = L('select', o),
      ue = L(),
      de = C ?? W,
      { compactSize: Ne, compactItemClassnames: K } = br(ce, de),
      [pe, ye] = Cr('select', M, a),
      y = wr(ce),
      [S, D, B] = ia(ce, y),
      x = r.useMemo(() => {
        const { mode: Ae } = e
        if (Ae !== 'combobox') return Ae === An ? 'combobox' : Ae
      }, [e.mode]),
      H = x === 'multiple' || x === 'tags',
      k = da(e.suffixIcon, e.showArrow),
      se = (n = E ?? b) !== null && n !== void 0 ? n : R,
      {
        status: ae,
        hasFeedback: ge,
        isFormItemInput: Ie,
        feedbackIcon: Oe,
      } = r.useContext(yr),
      Pe = Or(ae, p)
    let Re
    d !== void 0
      ? (Re = d)
      : x === 'combobox'
        ? (Re = null)
        : (Re =
            (re == null ? void 0 : re('Select')) ||
            r.createElement(Ao, { componentName: 'Select' }))
    const {
        suffixIcon: he,
        itemIcon: Fe,
        removeIcon: ve,
        clearIcon: be,
      } = sa(
        Object.assign(Object.assign({}, G), {
          multiple: H,
          hasFeedback: ge,
          feedbackIcon: Oe,
          showSuffixIcon: k,
          prefixCls: ce,
          componentName: 'Select',
        }),
      ),
      Se = V === !0 ? { clearIcon: be } : V,
      _e = En(G, ['suffixIcon', 'itemIcon']),
      xe = Be(v || m, { [`${ce}-dropdown-${de}`]: de === 'rtl' }, i, B, y, D),
      Ge = Ir((Ae) => {
        var ze
        return (ze = u ?? Ne) !== null && ze !== void 0 ? ze : Ae
      }),
      Ve = r.useContext(Er),
      Ee = g ?? Ve,
      Ue = Be(
        {
          [`${ce}-lg`]: Ge === 'large',
          [`${ce}-sm`]: Ge === 'small',
          [`${ce}-rtl`]: de === 'rtl',
          [`${ce}-${pe}`]: ye,
          [`${ce}-in-form-item`]: Ie,
        },
        Rr(ce, Pe, ge),
        K,
        Y == null ? void 0 : Y.className,
        l,
        i,
        B,
        y,
        D,
      ),
      Ze = r.useMemo(
        () => (s !== void 0 ? s : de === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        [s, de],
      ),
      [He] = xr('SelectLike', j == null ? void 0 : j.zIndex)
    return S(
      r.createElement(
        kt,
        Object.assign(
          { ref: t, virtual: z, showSearch: Y == null ? void 0 : Y.showSearch },
          _e,
          {
            style: Object.assign(
              Object.assign({}, Y == null ? void 0 : Y.style),
              F,
            ),
            dropdownMatchSelectWidth: se,
            transitionName: Mr(ue, 'slide-up', X),
            builtinPlacements: jo(w, N),
            listHeight: f,
            listItemHeight: we,
            mode: x,
            prefixCls: ce,
            placement: Ze,
            direction: de,
            suffixIcon: he,
            menuItemSelectedIcon: Fe,
            removeIcon: ve,
            allowClear: Se,
            notFoundContent: Re,
            className: Ue,
            getPopupContainer: c || ne,
            dropdownClassName: xe,
            disabled: Ee,
            dropdownStyle: Object.assign(Object.assign({}, j), { zIndex: He }),
            maxCount: H ? U : void 0,
            tagRender: H ? J : void 0,
          },
        ),
      ),
    )
  },
  Ot = r.forwardRef(va),
  ma = $r(Ot)
Ot.SECRET_COMBOBOX_MODE_DO_NOT_USE = An
Ot.Option = Zt
Ot.OptGroup = Jt
Ot._InternalPanelDoNotUseOrYouWillBeFired = ma
export {
  Ao as D,
  ht as E,
  zn as L,
  ua as R,
  Ot as S,
  Xo as a,
  Go as g,
  sa as u,
}
