var Rn = (e) => {
  throw TypeError(e);
};
var Po = (e, t, r) => t.has(e) || Rn("Cannot " + r);
var k = (e, t, r) => (
    Po(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  q = (e, t, r) =>
    t.has(e)
      ? Rn("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  O = (e, t, r, i) => (
    Po(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r
  ),
  X = (e, t, r) => (Po(e, t, "access private method"), r);
var Ds = (e, t, r, i) => ({
  set _(s) {
    O(e, t, s, r);
  },
  get _() {
    return k(e, t, i);
  },
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = r(s);
    fetch(s.href, o);
  }
})();
var ks,
  K,
  pc,
  Lr,
  zn,
  fc,
  ia,
  mc,
  Ba,
  sa,
  oa,
  gc,
  hs = {},
  bc = [],
  yu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  go = Array.isArray;
function Jt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Va(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Q(e, t, r) {
  var i,
    s,
    o,
    a = {};
  for (o in t)
    o == "key" ? (i = t[o]) : o == "ref" ? (s = t[o]) : (a[o] = t[o]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? ks.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (o in e.defaultProps) a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return rs(e, a, i, s, null);
}
function rs(e, t, r, i, s) {
  var o = {
    type: e,
    props: t,
    key: r,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: s ?? ++pc,
    __i: -1,
    __u: 0,
  };
  return s == null && K.vnode != null && K.vnode(o), o;
}
function vc() {
  return { current: null };
}
function Ie(e) {
  return e.children;
}
function gt(e, t) {
  (this.props = e), (this.context = t);
}
function Ci(e, t) {
  if (t == null) return e.__ ? Ci(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ci(e) : null;
}
function yc(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return yc(e);
  }
}
function aa(e) {
  ((!e.__d && (e.__d = !0) && Lr.push(e) && !so.__r++) ||
    zn !== K.debounceRendering) &&
    ((zn = K.debounceRendering) || fc)(so);
}
function so() {
  var e, t, r, i, s, o, a, n;
  for (Lr.sort(ia); (e = Lr.shift()); )
    e.__d &&
      ((t = Lr.length),
      (i = void 0),
      (o = (s = (r = e).__v).__e),
      (a = []),
      (n = []),
      r.__P &&
        (((i = Jt({}, s)).__v = s.__v + 1),
        K.vnode && K.vnode(i),
        Ua(
          r.__P,
          i,
          s,
          r.__n,
          r.__P.namespaceURI,
          32 & s.__u ? [o] : null,
          a,
          o ?? Ci(s),
          !!(32 & s.__u),
          n,
        ),
        (i.__v = s.__v),
        (i.__.__k[i.__i] = i),
        xc(a, i, n),
        i.__e != o && yc(i)),
      Lr.length > t && Lr.sort(ia));
  so.__r = 0;
}
function _c(e, t, r, i, s, o, a, n, l, d, p) {
  var u,
    f,
    m,
    g,
    b,
    w,
    _ = (i && i.__k) || bc,
    y = t.length;
  for (l = _u(r, t, _, l, y), u = 0; u < y; u++)
    (m = r.__k[u]) != null &&
      ((f = m.__i === -1 ? hs : _[m.__i] || hs),
      (m.__i = u),
      (w = Ua(e, m, f, s, o, a, n, l, d, p)),
      (g = m.__e),
      m.ref &&
        f.ref != m.ref &&
        (f.ref && qa(f.ref, null, m), p.push(m.ref, m.__c || g, m)),
      b == null && g != null && (b = g),
      4 & m.__u || f.__k === m.__k
        ? (l = wc(m, l, e))
        : typeof m.type == "function" && w !== void 0
          ? (l = w)
          : g && (l = g.nextSibling),
      (m.__u &= -7));
  return (r.__e = b), l;
}
function _u(e, t, r, i, s) {
  var o,
    a,
    n,
    l,
    d,
    p = r.length,
    u = p,
    f = 0;
  for (e.__k = new Array(s), o = 0; o < s; o++)
    (a = t[o]) != null && typeof a != "boolean" && typeof a != "function"
      ? ((l = o + f),
        ((a = e.__k[o] =
          typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? rs(null, a, null, null, null)
            : go(a)
              ? rs(Ie, { children: a }, null, null, null)
              : a.constructor === void 0 && a.__b > 0
                ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                : a).__ = e),
        (a.__b = e.__b + 1),
        (n = null),
        (d = a.__i = wu(a, r, l, u)) !== -1 &&
          (u--, (n = r[d]) && (n.__u |= 2)),
        n == null || n.__v === null
          ? (d == -1 && f--, typeof a.type != "function" && (a.__u |= 4))
          : d != l &&
            (d == l - 1
              ? f--
              : d == l + 1
                ? f++
                : (d > l ? f-- : f++, (a.__u |= 4))))
      : (e.__k[o] = null);
  if (u)
    for (o = 0; o < p; o++)
      (n = r[o]) != null &&
        (2 & n.__u) == 0 &&
        (n.__e == i && (i = Ci(n)), kc(n, n));
  return i;
}
function wc(e, t, r) {
  var i, s;
  if (typeof e.type == "function") {
    for (i = e.__k, s = 0; i && s < i.length; s++)
      i[s] && ((i[s].__ = e), (t = wc(i[s], t, r)));
    return t;
  }
  e.__e != t &&
    (t && e.type && !r.contains(t) && (t = Ci(e)),
    r.insertBefore(e.__e, t || null),
    (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Zt(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (go(e)
        ? e.some(function (r) {
            Zt(r, t);
          })
        : t.push(e)),
    t
  );
}
function wu(e, t, r, i) {
  var s,
    o,
    a = e.key,
    n = e.type,
    l = t[r];
  if (l === null || (l && a == l.key && n === l.type && (2 & l.__u) == 0))
    return r;
  if (i > (l != null && (2 & l.__u) == 0 ? 1 : 0))
    for (s = r - 1, o = r + 1; s >= 0 || o < t.length; ) {
      if (s >= 0) {
        if ((l = t[s]) && (2 & l.__u) == 0 && a == l.key && n === l.type)
          return s;
        s--;
      }
      if (o < t.length) {
        if ((l = t[o]) && (2 & l.__u) == 0 && a == l.key && n === l.type)
          return o;
        o++;
      }
    }
  return -1;
}
function Tn(e, t, r) {
  t[0] == "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] =
        r == null ? "" : typeof r != "number" || yu.test(t) ? r : r + "px");
}
function Ms(e, t, r, i, s) {
  var o;
  e: if (t == "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof i == "string" && (e.style.cssText = i = ""), i))
        for (t in i) (r && t in r) || Tn(e.style, t, "");
      if (r) for (t in r) (i && r[t] === i[t]) || Tn(e.style, t, r[t]);
    }
  else if (t[0] == "o" && t[1] == "n")
    (o = t != (t = t.replace(mc, "$1"))),
      (t =
        t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + o] = r),
      r
        ? i
          ? (r.u = i.u)
          : ((r.u = Ba), e.addEventListener(t, o ? oa : sa, o))
        : e.removeEventListener(t, o ? oa : sa, o);
  else {
    if (s == "http://www.w3.org/2000/svg")
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    )
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && t[4] != "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Pn(e) {
  return function (t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = Ba++;
      else if (t.t < r.u) return;
      return r(K.event ? K.event(t) : t);
    }
  };
}
function Ua(e, t, r, i, s, o, a, n, l, d) {
  var p,
    u,
    f,
    m,
    g,
    b,
    w,
    _,
    y,
    C,
    x,
    S,
    A,
    T,
    I,
    E,
    z,
    B = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((l = !!(32 & r.__u)), (o = [(n = t.__e = r.__e)])),
    (p = K.__b) && p(t);
  e: if (typeof B == "function")
    try {
      if (
        ((_ = t.props),
        (y = "prototype" in B && B.prototype.render),
        (C = (p = B.contextType) && i[p.__c]),
        (x = p ? (C ? C.props.value : p.__) : i),
        r.__c
          ? (w = (u = t.__c = r.__c).__ = u.__E)
          : (y
              ? (t.__c = u = new B(_, x))
              : ((t.__c = u = new gt(_, x)),
                (u.constructor = B),
                (u.render = ku)),
            C && C.sub(u),
            (u.props = _),
            u.state || (u.state = {}),
            (u.context = x),
            (u.__n = i),
            (f = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        y && u.__s == null && (u.__s = u.state),
        y &&
          B.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = Jt({}, u.__s)),
          Jt(u.__s, B.getDerivedStateFromProps(_, u.__s))),
        (m = u.props),
        (g = u.state),
        (u.__v = t),
        f)
      )
        y &&
          B.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          y && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (
          (y &&
            B.getDerivedStateFromProps == null &&
            _ !== m &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(_, x),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(_, u.__s, x) === !1) ||
              t.__v == r.__v))
        ) {
          for (
            t.__v != r.__v && ((u.props = _), (u.state = u.__s), (u.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.some(function (W) {
                W && (W.__ = t);
              }),
              S = 0;
            S < u._sb.length;
            S++
          )
            u.__h.push(u._sb[S]);
          (u._sb = []), u.__h.length && a.push(u);
          break e;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(_, u.__s, x),
          y &&
            u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(m, g, b);
            });
      }
      if (
        ((u.context = x),
        (u.props = _),
        (u.__P = e),
        (u.__e = !1),
        (A = K.__r),
        (T = 0),
        y)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            A && A(t),
            p = u.render(u.props, u.state, u.context),
            I = 0;
          I < u._sb.length;
          I++
        )
          u.__h.push(u._sb[I]);
        u._sb = [];
      } else
        do
          (u.__d = !1),
            A && A(t),
            (p = u.render(u.props, u.state, u.context)),
            (u.state = u.__s);
        while (u.__d && ++T < 25);
      (u.state = u.__s),
        u.getChildContext != null && (i = Jt(Jt({}, i), u.getChildContext())),
        y &&
          !f &&
          u.getSnapshotBeforeUpdate != null &&
          (b = u.getSnapshotBeforeUpdate(m, g)),
        (n = _c(
          e,
          go(
            (E =
              p != null && p.type === Ie && p.key == null
                ? p.props.children
                : p),
          )
            ? E
            : [E],
          t,
          r,
          i,
          s,
          o,
          a,
          n,
          l,
          d,
        )),
        (u.base = t.__e),
        (t.__u &= -161),
        u.__h.length && a.push(u),
        w && (u.__E = u.__ = null);
    } catch (W) {
      if (((t.__v = null), l || o != null))
        if (W.then) {
          for (t.__u |= l ? 160 : 128; n && n.nodeType == 8 && n.nextSibling; )
            n = n.nextSibling;
          (o[o.indexOf(n)] = null), (t.__e = n);
        } else for (z = o.length; z--; ) Va(o[z]);
      else (t.__e = r.__e), (t.__k = r.__k);
      K.__e(W, t, r);
    }
  else
    o == null && t.__v == r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (n = t.__e = xu(r.__e, t, r, i, s, o, a, l, d));
  return (p = K.diffed) && p(t), 128 & t.__u ? void 0 : n;
}
function xc(e, t, r) {
  for (var i = 0; i < r.length; i++) qa(r[i], r[++i], r[++i]);
  K.__c && K.__c(t, e),
    e.some(function (s) {
      try {
        (e = s.__h),
          (s.__h = []),
          e.some(function (o) {
            o.call(s);
          });
      } catch (o) {
        K.__e(o, s.__v);
      }
    });
}
function xu(e, t, r, i, s, o, a, n, l) {
  var d,
    p,
    u,
    f,
    m,
    g,
    b,
    w = r.props,
    _ = t.props,
    y = t.type;
  if (
    (y == "svg"
      ? (s = "http://www.w3.org/2000/svg")
      : y == "math"
        ? (s = "http://www.w3.org/1998/Math/MathML")
        : s || (s = "http://www.w3.org/1999/xhtml"),
    o != null)
  ) {
    for (d = 0; d < o.length; d++)
      if (
        (m = o[d]) &&
        "setAttribute" in m == !!y &&
        (y ? m.localName == y : m.nodeType == 3)
      ) {
        (e = m), (o[d] = null);
        break;
      }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(_);
    (e = document.createElementNS(s, y, _.is && _)),
      n && (K.__m && K.__m(t, o), (n = !1)),
      (o = null);
  }
  if (y === null) w === _ || (n && e.data === _) || (e.data = _);
  else {
    if (
      ((o = o && ks.call(e.childNodes)), (w = r.props || hs), !n && o != null)
    )
      for (w = {}, d = 0; d < e.attributes.length; d++)
        w[(m = e.attributes[d]).name] = m.value;
    for (d in w)
      if (((m = w[d]), d != "children")) {
        if (d == "dangerouslySetInnerHTML") u = m;
        else if (!(d in _)) {
          if (
            (d == "value" && "defaultValue" in _) ||
            (d == "checked" && "defaultChecked" in _)
          )
            continue;
          Ms(e, d, null, m, s);
        }
      }
    for (d in _)
      (m = _[d]),
        d == "children"
          ? (f = m)
          : d == "dangerouslySetInnerHTML"
            ? (p = m)
            : d == "value"
              ? (g = m)
              : d == "checked"
                ? (b = m)
                : (n && typeof m != "function") ||
                  w[d] === m ||
                  Ms(e, d, m, w[d], s);
    if (p)
      n ||
        (u && (p.__html === u.__html || p.__html === e.innerHTML)) ||
        (e.innerHTML = p.__html),
        (t.__k = []);
    else if (
      (u && (e.innerHTML = ""),
      _c(
        e,
        go(f) ? f : [f],
        t,
        r,
        i,
        y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        o,
        a,
        o ? o[0] : r.__k && Ci(r, 0),
        n,
        l,
      ),
      o != null)
    )
      for (d = o.length; d--; ) Va(o[d]);
    n ||
      ((d = "value"),
      y == "progress" && g == null
        ? e.removeAttribute("value")
        : g !== void 0 &&
          (g !== e[d] ||
            (y == "progress" && !g) ||
            (y == "option" && g !== w[d])) &&
          Ms(e, d, g, w[d], s),
      (d = "checked"),
      b !== void 0 && b !== e[d] && Ms(e, d, b, w[d], s));
  }
  return e;
}
function qa(e, t, r) {
  try {
    if (typeof e == "function") {
      var i = typeof e.__u == "function";
      i && e.__u(), (i && t == null) || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    K.__e(s, r);
  }
}
function kc(e, t, r) {
  var i, s;
  if (
    (K.unmount && K.unmount(e),
    (i = e.ref) && ((i.current && i.current !== e.__e) || qa(i, null, t)),
    (i = e.__c) != null)
  ) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        K.__e(o, t);
      }
    i.base = i.__P = null;
  }
  if ((i = e.__k))
    for (s = 0; s < i.length; s++)
      i[s] && kc(i[s], t, r || typeof e.type != "function");
  r || Va(e.__e), (e.__c = e.__ = e.__e = void 0);
}
function ku(e, t, r) {
  return this.constructor(e, r);
}
function Si(e, t, r) {
  var i, s, o, a;
  t == document && (t = document.documentElement),
    K.__ && K.__(e, t),
    (s = (i = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (o = []),
    (a = []),
    Ua(
      t,
      (e = ((!i && r) || t).__k = Q(Ie, null, [e])),
      s || hs,
      hs,
      t.namespaceURI,
      !i && r ? [r] : s ? null : t.firstChild ? ks.call(t.childNodes) : null,
      o,
      !i && r ? r : s ? s.__e : t.firstChild,
      i,
      a,
    ),
    xc(o, e, a);
}
function Cc(e, t) {
  Si(e, t, Cc);
}
function Cu(e, t, r) {
  var i,
    s,
    o,
    a,
    n = Jt({}, e.props);
  for (o in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
    o == "key"
      ? (i = t[o])
      : o == "ref"
        ? (s = t[o])
        : (n[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  return (
    arguments.length > 2 &&
      (n.children = arguments.length > 3 ? ks.call(arguments, 2) : r),
    rs(e.type, n, i || e.key, s || e.ref, null)
  );
}
function je(e, t) {
  var r = {
    __c: (t = "__cC" + gc++),
    __: e,
    Consumer: function (i, s) {
      return i.children(s);
    },
    Provider: function (i) {
      var s, o;
      return (
        this.getChildContext ||
          ((s = new Set()),
          ((o = {})[t] = this),
          (this.getChildContext = function () {
            return o;
          }),
          (this.componentWillUnmount = function () {
            s = null;
          }),
          (this.shouldComponentUpdate = function (a) {
            this.props.value !== a.value &&
              s.forEach(function (n) {
                (n.__e = !0), aa(n);
              });
          }),
          (this.sub = function (a) {
            s.add(a);
            var n = a.componentWillUnmount;
            a.componentWillUnmount = function () {
              s && s.delete(a), n && n.call(a);
            };
          })),
        i.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(ks = bc.slice),
  (K = {
    __e: function (e, t, r, i) {
      for (var s, o, a; (t = t.__); )
        if ((s = t.__c) && !s.__)
          try {
            if (
              ((o = s.constructor) &&
                o.getDerivedStateFromError != null &&
                (s.setState(o.getDerivedStateFromError(e)), (a = s.__d)),
              s.componentDidCatch != null &&
                (s.componentDidCatch(e, i || {}), (a = s.__d)),
              a)
            )
              return (s.__E = s);
          } catch (n) {
            e = n;
          }
      throw e;
    },
  }),
  (pc = 0),
  (gt.prototype.setState = function (e, t) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Jt({}, this.state))),
      typeof e == "function" && (e = e(Jt({}, r), this.props)),
      e && Jt(r, e),
      e != null && this.__v && (t && this._sb.push(t), aa(this));
  }),
  (gt.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), aa(this));
  }),
  (gt.prototype.render = Ie),
  (Lr = []),
  (fc =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (ia = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (so.__r = 0),
  (mc = /(PointerCapture)$|Capture$/i),
  (Ba = 0),
  (sa = Pn(!1)),
  (oa = Pn(!0)),
  (gc = 0);
var Su = 0;
function v(e, t, r, i, s, o) {
  t || (t = {});
  var a,
    n,
    l = t;
  if ("ref" in l)
    for (n in ((l = {}), t)) n == "ref" ? (a = t[n]) : (l[n] = t[n]);
  var d = {
    type: e,
    props: l,
    key: r,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Su,
    __i: -1,
    __u: 0,
    __source: s,
    __self: o,
  };
  if (typeof e == "function" && (a = e.defaultProps))
    for (n in a) l[n] === void 0 && (l[n] = a[n]);
  return K.vnode && K.vnode(d), d;
}
var na = "";
function la(e) {
  na = e;
}
function $u(e = "") {
  if (!na) {
    const t = [...document.getElementsByTagName("script")],
      r = t.find((i) => i.hasAttribute("data-shoelace"));
    if (r) la(r.getAttribute("data-shoelace"));
    else {
      const i = t.find(
        (o) =>
          /shoelace(\.min)?\.js($|\?)/.test(o.src) ||
          /shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src),
      );
      let s = "";
      i && (s = i.getAttribute("src")), la(s.split("/").slice(0, -1).join("/"));
    }
  }
  return na.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var Sc = Object.defineProperty,
  Eu = Object.defineProperties,
  Au = Object.getOwnPropertyDescriptor,
  Ru = Object.getOwnPropertyDescriptors,
  In = Object.getOwnPropertySymbols,
  zu = Object.prototype.hasOwnProperty,
  Tu = Object.prototype.propertyIsEnumerable,
  Io = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  ja = (e) => {
    throw TypeError(e);
  },
  On = (e, t, r) =>
    t in e
      ? Sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ir = (e, t) => {
    for (var r in t || (t = {})) zu.call(t, r) && On(e, r, t[r]);
    if (In) for (var r of In(t)) Tu.call(t, r) && On(e, r, t[r]);
    return e;
  },
  Cs = (e, t) => Eu(e, Ru(t)),
  c = (e, t, r, i) => {
    for (
      var s = i > 1 ? void 0 : i ? Au(t, r) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (s = (i ? a(t, r, s) : a(s)) || s);
    return i && s && Sc(t, r, s), s;
  },
  $c = (e, t, r) => t.has(e) || ja("Cannot " + r),
  Pu = (e, t, r) => ($c(e, t, "read from private field"), t.get(e)),
  Iu = (e, t, r) =>
    t.has(e)
      ? ja("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Ou = (e, t, r, i) => ($c(e, t, "write to private field"), t.set(e, r), r),
  Lu = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  Nu = (e) => {
    var t = e[Io("asyncIterator")],
      r = !1,
      i,
      s = {};
    return (
      t == null
        ? ((t = e[Io("iterator")]()), (i = (o) => (s[o] = (a) => t[o](a))))
        : ((t = t.call(e)),
          (i = (o) =>
            (s[o] = (a) => {
              if (r) {
                if (((r = !1), o === "throw")) throw a;
                return a;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new Lu(
                    new Promise((n) => {
                      var l = t[o](a);
                      l instanceof Object || ja("Object expected"), n(l);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (s[Io("iterator")] = () => s),
      i("next"),
      "throw" in t
        ? i("throw")
        : (s.throw = (o) => {
            throw o;
          }),
      "return" in t && i("return"),
      s
    );
  };
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ys = globalThis,
  Wa =
    Ys.ShadowRoot &&
    (Ys.ShadyCSS === void 0 || Ys.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Ka = Symbol(),
  Ln = new WeakMap();
let Ec = class {
  constructor(t, r, i) {
    if (((this._$cssResult$ = !0), i !== Ka))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    (this.cssText = t), (this.t = r);
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (Wa && t === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (t = Ln.get(r)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && Ln.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Fu = (e) => new Ec(typeof e == "string" ? e : e + "", void 0, Ka),
  M = (e, ...t) => {
    const r =
      e.length === 1
        ? e[0]
        : t.reduce(
            (i, s, o) =>
              i +
              ((a) => {
                if (a._$cssResult$ === !0) return a.cssText;
                if (typeof a == "number") return a;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    a +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(s) +
              e[o + 1],
            e[0],
          );
    return new Ec(r, e, Ka);
  },
  Du = (e, t) => {
    if (Wa)
      e.adoptedStyleSheets = t.map((r) =>
        r instanceof CSSStyleSheet ? r : r.styleSheet,
      );
    else
      for (const r of t) {
        const i = document.createElement("style"),
          s = Ys.litNonce;
        s !== void 0 && i.setAttribute("nonce", s),
          (i.textContent = r.cssText),
          e.appendChild(i);
      }
  },
  Nn = Wa
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((t) => {
              let r = "";
              for (const i of t.cssRules) r += i.cssText;
              return Fu(r);
            })(e)
          : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const {
    is: Mu,
    defineProperty: Hu,
    getOwnPropertyDescriptor: Bu,
    getOwnPropertyNames: Vu,
    getOwnPropertySymbols: Uu,
    getPrototypeOf: qu,
  } = Object,
  wr = globalThis,
  Fn = wr.trustedTypes,
  ju = Fn ? Fn.emptyScript : "",
  Oo = wr.reactiveElementPolyfillSupport,
  is = (e, t) => e,
  $i = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? ju : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let r = e;
      switch (t) {
        case Boolean:
          r = e !== null;
          break;
        case Number:
          r = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(e);
          } catch {
            r = null;
          }
      }
      return r;
    },
  },
  Qa = (e, t) => !Mu(e, t),
  Dn = {
    attribute: !0,
    type: String,
    converter: $i,
    reflect: !1,
    hasChanged: Qa,
  };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
  wr.litPropertyMetadata ?? (wr.litPropertyMetadata = new WeakMap());
let oi = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Dn) {
    if (
      (r.state && (r.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, r),
      !r.noAccessor)
    ) {
      const i = Symbol(),
        s = this.getPropertyDescriptor(t, i, r);
      s !== void 0 && Hu(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, r, i) {
    const { get: s, set: o } = Bu(this.prototype, t) ?? {
      get() {
        return this[r];
      },
      set(a) {
        this[r] = a;
      },
    };
    return {
      get() {
        return s == null ? void 0 : s.call(this);
      },
      set(a) {
        const n = s == null ? void 0 : s.call(this);
        o.call(this, a), this.requestUpdate(t, n, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Dn;
  }
  static _$Ei() {
    if (this.hasOwnProperty(is("elementProperties"))) return;
    const t = qu(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(is("finalized"))) return;
    if (
      ((this.finalized = !0),
      this._$Ei(),
      this.hasOwnProperty(is("properties")))
    ) {
      const r = this.properties,
        i = [...Vu(r), ...Uu(r)];
      for (const s of i) this.createProperty(s, r[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0)
        for (const [i, s] of r) this.elementProperties.set(i, s);
    }
    this._$Eh = new Map();
    for (const [r, i] of this.elementProperties) {
      const s = this._$Eu(r, i);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) r.unshift(Nn(s));
    } else t !== void 0 && r.push(Nn(t));
    return r;
  }
  static _$Eu(t, r) {
    const i = r.attribute;
    return i === !1
      ? void 0
      : typeof i == "string"
        ? i
        : typeof t == "string"
          ? t.toLowerCase()
          : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    var t;
    (this._$ES = new Promise((r) => (this.enableUpdating = r))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = new Set())).add(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = new Map(),
      r = this.constructor.elementProperties;
    for (const i of r.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Du(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$EO) == null ||
        t.forEach((r) => {
          var i;
          return (i = r.hostConnected) == null ? void 0 : i.call(r);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null ||
      t.forEach((r) => {
        var i;
        return (i = r.hostDisconnected) == null ? void 0 : i.call(r);
      });
  }
  attributeChangedCallback(t, r, i) {
    this._$AK(t, i);
  }
  _$EC(t, r) {
    var o;
    const i = this.constructor.elementProperties.get(t),
      s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const a = (
        ((o = i.converter) == null ? void 0 : o.toAttribute) !== void 0
          ? i.converter
          : $i
      ).toAttribute(r, i.type);
      (this._$Em = t),
        a == null ? this.removeAttribute(s) : this.setAttribute(s, a),
        (this._$Em = null);
    }
  }
  _$AK(t, r) {
    var o;
    const i = this.constructor,
      s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const a = i.getPropertyOptions(s),
        n =
          typeof a.converter == "function"
            ? { fromAttribute: a.converter }
            : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0
              ? a.converter
              : $i;
      (this._$Em = s),
        (this[s] = n.fromAttribute(r, a.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, r, i) {
    if (t !== void 0) {
      if (
        (i ?? (i = this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? Qa)(this[t], r))
      )
        return;
      this.P(t, r, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, i) {
    this._$AL.has(t) || this._$AL.set(t, r),
      i.reflect === !0 &&
        this._$Em !== t &&
        (this._$Ej ?? (this._$Ej = new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (
        (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
        this._$Ep)
      ) {
        for (const [o, a] of this._$Ep) this[o] = a;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0)
        for (const [o, a] of s)
          a.wrapped !== !0 ||
            this._$AL.has(o) ||
            this[o] === void 0 ||
            this.P(o, this[o], a);
    }
    let t = !1;
    const r = this._$AL;
    try {
      (t = this.shouldUpdate(r)),
        t
          ? (this.willUpdate(r),
            (i = this._$EO) == null ||
              i.forEach((s) => {
                var o;
                return (o = s.hostUpdate) == null ? void 0 : o.call(s);
              }),
            this.update(r))
          : this._$EU();
    } catch (s) {
      throw ((t = !1), this._$EU(), s);
    }
    t && this._$AE(r);
  }
  willUpdate(t) {}
  _$AE(t) {
    var r;
    (r = this._$EO) == null ||
      r.forEach((i) => {
        var s;
        return (s = i.hostUpdated) == null ? void 0 : s.call(i);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EC(r, this[r]))),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
};
(oi.elementStyles = []),
  (oi.shadowRootOptions = { mode: "open" }),
  (oi[is("elementProperties")] = new Map()),
  (oi[is("finalized")] = new Map()),
  Oo == null || Oo({ ReactiveElement: oi }),
  (wr.reactiveElementVersions ?? (wr.reactiveElementVersions = [])).push(
    "2.0.4",
  );
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ss = globalThis,
  oo = ss.trustedTypes,
  Mn = oo ? oo.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  Ac = "$lit$",
  hr = `lit$${Math.random().toFixed(9).slice(2)}$`,
  Rc = "?" + hr,
  Wu = `<${Rc}>`,
  Qr = document,
  ps = () => Qr.createComment(""),
  fs = (e) => e === null || (typeof e != "object" && typeof e != "function"),
  Ga = Array.isArray,
  Ku = (e) =>
    Ga(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
  Lo = `[ 	
\f\r]`,
  qi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Hn = /-->/g,
  Bn = />/g,
  Ir = RegExp(
    `>|${Lo}(?:([^\\s"'>=/]+)(${Lo}*=${Lo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g",
  ),
  Vn = /'/g,
  Un = /"/g,
  zc = /^(?:script|style|textarea|title)$/i,
  Qu =
    (e) =>
    (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
  $ = Qu(1),
  nt = Symbol.for("lit-noChange"),
  de = Symbol.for("lit-nothing"),
  qn = new WeakMap(),
  Fr = Qr.createTreeWalker(Qr, 129);
function Tc(e, t) {
  if (!Ga(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Mn !== void 0 ? Mn.createHTML(t) : t;
}
const Gu = (e, t) => {
  const r = e.length - 1,
    i = [];
  let s,
    o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "",
    a = qi;
  for (let n = 0; n < r; n++) {
    const l = e[n];
    let d,
      p,
      u = -1,
      f = 0;
    for (; f < l.length && ((a.lastIndex = f), (p = a.exec(l)), p !== null); )
      (f = a.lastIndex),
        a === qi
          ? p[1] === "!--"
            ? (a = Hn)
            : p[1] !== void 0
              ? (a = Bn)
              : p[2] !== void 0
                ? (zc.test(p[2]) && (s = RegExp("</" + p[2], "g")), (a = Ir))
                : p[3] !== void 0 && (a = Ir)
          : a === Ir
            ? p[0] === ">"
              ? ((a = s ?? qi), (u = -1))
              : p[1] === void 0
                ? (u = -2)
                : ((u = a.lastIndex - p[2].length),
                  (d = p[1]),
                  (a = p[3] === void 0 ? Ir : p[3] === '"' ? Un : Vn))
            : a === Un || a === Vn
              ? (a = Ir)
              : a === Hn || a === Bn
                ? (a = qi)
                : ((a = Ir), (s = void 0));
    const m = a === Ir && e[n + 1].startsWith("/>") ? " " : "";
    o +=
      a === qi
        ? l + Wu
        : u >= 0
          ? (i.push(d), l.slice(0, u) + Ac + l.slice(u) + hr + m)
          : l + hr + (u === -2 ? n : m);
  }
  return [
    Tc(
      e,
      o + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : ""),
    ),
    i,
  ];
};
let ca = class Pc {
  constructor({ strings: t, _$litType$: r }, i) {
    let s;
    this.parts = [];
    let o = 0,
      a = 0;
    const n = t.length - 1,
      l = this.parts,
      [d, p] = Gu(t, r);
    if (
      ((this.el = Pc.createElement(d, i)),
      (Fr.currentNode = this.el.content),
      r === 2 || r === 3)
    ) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (s = Fr.nextNode()) !== null && l.length < n; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const u of s.getAttributeNames())
            if (u.endsWith(Ac)) {
              const f = p[a++],
                m = s.getAttribute(u).split(hr),
                g = /([.?@])?(.*)/.exec(f);
              l.push({
                type: 1,
                index: o,
                name: g[2],
                strings: m,
                ctor:
                  g[1] === "."
                    ? Xu
                    : g[1] === "?"
                      ? Ju
                      : g[1] === "@"
                        ? Zu
                        : bo,
              }),
                s.removeAttribute(u);
            } else
              u.startsWith(hr) &&
                (l.push({ type: 6, index: o }), s.removeAttribute(u));
        if (zc.test(s.tagName)) {
          const u = s.textContent.split(hr),
            f = u.length - 1;
          if (f > 0) {
            s.textContent = oo ? oo.emptyScript : "";
            for (let m = 0; m < f; m++)
              s.append(u[m], ps()),
                Fr.nextNode(),
                l.push({ type: 2, index: ++o });
            s.append(u[f], ps());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Rc) l.push({ type: 2, index: o });
        else {
          let u = -1;
          for (; (u = s.data.indexOf(hr, u + 1)) !== -1; )
            l.push({ type: 7, index: o }), (u += hr.length - 1);
        }
      o++;
    }
  }
  static createElement(t, r) {
    const i = Qr.createElement("template");
    return (i.innerHTML = t), i;
  }
};
function Ei(e, t, r = e, i) {
  var a, n;
  if (t === nt) return t;
  let s = i !== void 0 ? ((a = r._$Co) == null ? void 0 : a[i]) : r._$Cl;
  const o = fs(t) ? void 0 : t._$litDirective$;
  return (
    (s == null ? void 0 : s.constructor) !== o &&
      ((n = s == null ? void 0 : s._$AO) == null || n.call(s, !1),
      o === void 0 ? (s = void 0) : ((s = new o(e)), s._$AT(e, r, i)),
      i !== void 0 ? ((r._$Co ?? (r._$Co = []))[i] = s) : (r._$Cl = s)),
    s !== void 0 && (t = Ei(e, s._$AS(e, t.values), s, i)),
    t
  );
}
let Yu = class {
    constructor(t, r) {
      (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = r);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const {
          el: { content: r },
          parts: i,
        } = this._$AD,
        s = ((t == null ? void 0 : t.creationScope) ?? Qr).importNode(r, !0);
      Fr.currentNode = s;
      let o = Fr.nextNode(),
        a = 0,
        n = 0,
        l = i[0];
      for (; l !== void 0; ) {
        if (a === l.index) {
          let d;
          l.type === 2
            ? (d = new Ya(o, o.nextSibling, this, t))
            : l.type === 1
              ? (d = new l.ctor(o, l.name, l.strings, this, t))
              : l.type === 6 && (d = new eh(o, this, t)),
            this._$AV.push(d),
            (l = i[++n]);
        }
        a !== (l == null ? void 0 : l.index) && ((o = Fr.nextNode()), a++);
      }
      return (Fr.currentNode = Qr), s;
    }
    p(t) {
      let r = 0;
      for (const i of this._$AV)
        i !== void 0 &&
          (i.strings !== void 0
            ? (i._$AI(t, i, r), (r += i.strings.length - 2))
            : i._$AI(t[r])),
          r++;
    }
  },
  Ya = class Ic {
    get _$AU() {
      var t;
      return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
    }
    constructor(t, r, i, s) {
      (this.type = 2),
        (this._$AH = de),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = r),
        (this._$AM = i),
        (this.options = s),
        (this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0);
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const r = this._$AM;
      return (
        r !== void 0 &&
          (t == null ? void 0 : t.nodeType) === 11 &&
          (t = r.parentNode),
        t
      );
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, r = this) {
      (t = Ei(this, t, r)),
        fs(t)
          ? t === de || t == null || t === ""
            ? (this._$AH !== de && this._$AR(), (this._$AH = de))
            : t !== this._$AH && t !== nt && this._(t)
          : t._$litType$ !== void 0
            ? this.$(t)
            : t.nodeType !== void 0
              ? this.T(t)
              : Ku(t)
                ? this.k(t)
                : this._(t);
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
    }
    _(t) {
      this._$AH !== de && fs(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(Qr.createTextNode(t)),
        (this._$AH = t);
    }
    $(t) {
      var o;
      const { values: r, _$litType$: i } = t,
        s =
          typeof i == "number"
            ? this._$AC(t)
            : (i.el === void 0 &&
                (i.el = ca.createElement(Tc(i.h, i.h[0]), this.options)),
              i);
      if (((o = this._$AH) == null ? void 0 : o._$AD) === s) this._$AH.p(r);
      else {
        const a = new Yu(s, this),
          n = a.u(this.options);
        a.p(r), this.T(n), (this._$AH = a);
      }
    }
    _$AC(t) {
      let r = qn.get(t.strings);
      return r === void 0 && qn.set(t.strings, (r = new ca(t))), r;
    }
    k(t) {
      Ga(this._$AH) || ((this._$AH = []), this._$AR());
      const r = this._$AH;
      let i,
        s = 0;
      for (const o of t)
        s === r.length
          ? r.push((i = new Ic(this.O(ps()), this.O(ps()), this, this.options)))
          : (i = r[s]),
          i._$AI(o),
          s++;
      s < r.length && (this._$AR(i && i._$AB.nextSibling, s), (r.length = s));
    }
    _$AR(t = this._$AA.nextSibling, r) {
      var i;
      for (
        (i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r);
        t && t !== this._$AB;

      ) {
        const s = t.nextSibling;
        t.remove(), (t = s);
      }
    }
    setConnected(t) {
      var r;
      this._$AM === void 0 &&
        ((this._$Cv = t), (r = this._$AP) == null || r.call(this, t));
    }
  },
  bo = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, r, i, s, o) {
      (this.type = 1),
        (this._$AH = de),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = r),
        (this._$AM = s),
        (this.options = o),
        i.length > 2 || i[0] !== "" || i[1] !== ""
          ? ((this._$AH = Array(i.length - 1).fill(new String())),
            (this.strings = i))
          : (this._$AH = de);
    }
    _$AI(t, r = this, i, s) {
      const o = this.strings;
      let a = !1;
      if (o === void 0)
        (t = Ei(this, t, r, 0)),
          (a = !fs(t) || (t !== this._$AH && t !== nt)),
          a && (this._$AH = t);
      else {
        const n = t;
        let l, d;
        for (t = o[0], l = 0; l < o.length - 1; l++)
          (d = Ei(this, n[i + l], r, l)),
            d === nt && (d = this._$AH[l]),
            a || (a = !fs(d) || d !== this._$AH[l]),
            d === de ? (t = de) : t !== de && (t += (d ?? "") + o[l + 1]),
            (this._$AH[l] = d);
      }
      a && !s && this.j(t);
    }
    j(t) {
      t === de
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, t ?? "");
    }
  },
  Xu = class extends bo {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(t) {
      this.element[this.name] = t === de ? void 0 : t;
    }
  },
  Ju = class extends bo {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== de);
    }
  },
  Zu = class extends bo {
    constructor(t, r, i, s, o) {
      super(t, r, i, s, o), (this.type = 5);
    }
    _$AI(t, r = this) {
      if ((t = Ei(this, t, r, 0) ?? de) === nt) return;
      const i = this._$AH,
        s =
          (t === de && i !== de) ||
          t.capture !== i.capture ||
          t.once !== i.once ||
          t.passive !== i.passive,
        o = t !== de && (i === de || s);
      s && this.element.removeEventListener(this.name, this, i),
        o && this.element.addEventListener(this.name, this, t),
        (this._$AH = t);
    }
    handleEvent(t) {
      var r;
      typeof this._$AH == "function"
        ? this._$AH.call(
            ((r = this.options) == null ? void 0 : r.host) ?? this.element,
            t,
          )
        : this._$AH.handleEvent(t);
    }
  },
  eh = class {
    constructor(t, r, i) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = r),
        (this.options = i);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      Ei(this, t);
    }
  };
const No = ss.litHtmlPolyfillSupport;
No == null || No(ca, Ya),
  (ss.litHtmlVersions ?? (ss.litHtmlVersions = [])).push("3.2.1");
const th = (e, t, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? t;
  let s = i._$litPart$;
  if (s === void 0) {
    const o = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = s = new Ya(t.insertBefore(ps(), o), o, void 0, r ?? {});
  }
  return s._$AI(e), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let os = class extends oi {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (
      (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild),
      t
    );
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = th(r, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return nt;
  }
};
var ic;
(os._$litElement$ = !0),
  (os.finalized = !0),
  (ic = globalThis.litElementHydrateSupport) == null ||
    ic.call(globalThis, { LitElement: os });
const Fo = globalThis.litElementPolyfillSupport;
Fo == null || Fo({ LitElement: os });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  "4.1.1",
);
var rh = M`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,
  U = M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ih = {
    attribute: !0,
    type: String,
    converter: $i,
    reflect: !1,
    hasChanged: Qa,
  },
  sh = (e = ih, t, r) => {
    const { kind: i, metadata: s } = r;
    let o = globalThis.litPropertyMetadata.get(s);
    if (
      (o === void 0 && globalThis.litPropertyMetadata.set(s, (o = new Map())),
      o.set(r.name, e),
      i === "accessor")
    ) {
      const { name: a } = r;
      return {
        set(n) {
          const l = t.get.call(this);
          t.set.call(this, n), this.requestUpdate(a, l, e);
        },
        init(n) {
          return n !== void 0 && this.P(a, void 0, e), n;
        },
      };
    }
    if (i === "setter") {
      const { name: a } = r;
      return function (n) {
        const l = this[a];
        t.call(this, n), this.requestUpdate(a, l, e);
      };
    }
    throw Error("Unsupported decorator location: " + i);
  };
function h(e) {
  return (t, r) =>
    typeof r == "object"
      ? sh(e, t, r)
      : ((i, s, o) => {
          const a = s.hasOwnProperty(o);
          return (
            s.constructor.createProperty(o, a ? { ...i, wrapped: !0 } : i),
            a ? Object.getOwnPropertyDescriptor(s, o) : void 0
          );
        })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function H(e) {
  return h({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function Ss(e) {
  return (t, r) => {
    const i = typeof t == "function" ? t : t[r];
    Object.assign(i, e);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Oc = (e, t, r) => (
  (r.configurable = !0),
  (r.enumerable = !0),
  Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, r),
  r
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function P(e, t) {
  return (r, i, s) => {
    const o = (a) => {
      var n;
      return ((n = a.renderRoot) == null ? void 0 : n.querySelector(e)) ?? null;
    };
    return Oc(r, i, {
      get() {
        return o(this);
      },
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function oh(e) {
  return (t, r) =>
    Oc(t, r, {
      async get() {
        var i;
        return (
          await this.updateComplete,
          ((i = this.renderRoot) == null ? void 0 : i.querySelector(e)) ?? null
        );
      },
    });
}
var Xs,
  N = class extends os {
    constructor() {
      super(),
        Iu(this, Xs, !1),
        (this.initialReflectedProperties = new Map()),
        Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
          this.constructor.define(e, t);
        });
    }
    emit(e, t) {
      const r = new CustomEvent(
        e,
        ir({ bubbles: !0, cancelable: !1, composed: !0, detail: {} }, t),
      );
      return this.dispatchEvent(r), r;
    }
    static define(e, t = this, r = {}) {
      const i = customElements.get(e);
      if (!i) {
        try {
          customElements.define(e, t, r);
        } catch {
          customElements.define(e, class extends t {}, r);
        }
        return;
      }
      let s = " (unknown version)",
        o = s;
      "version" in t && t.version && (s = " v" + t.version),
        "version" in i && i.version && (o = " v" + i.version),
        !(s && o && s === o) &&
          console.warn(
            `Attempted to register <${e}>${s}, but <${e}>${o} has already been registered.`,
          );
    }
    attributeChangedCallback(e, t, r) {
      Pu(this, Xs) ||
        (this.constructor.elementProperties.forEach((i, s) => {
          i.reflect &&
            this[s] != null &&
            this.initialReflectedProperties.set(s, this[s]);
        }),
        Ou(this, Xs, !0)),
        super.attributeChangedCallback(e, t, r);
    }
    willUpdate(e) {
      super.willUpdate(e),
        this.initialReflectedProperties.forEach((t, r) => {
          e.has(r) && this[r] == null && (this[r] = t);
        });
    }
  };
Xs = new WeakMap();
N.version = "2.20.0";
N.dependencies = {};
c([h()], N.prototype, "dir", 2);
c([h()], N.prototype, "lang", 2);
var vo = class extends N {
  render() {
    return $` <slot></slot> `;
  }
};
vo.styles = [U, rh];
var tr,
  ne,
  Do,
  jn,
  Ai = 0,
  Lc = [],
  fe = K,
  Wn = fe.__b,
  Kn = fe.__r,
  Qn = fe.diffed,
  Gn = fe.__c,
  Yn = fe.unmount,
  Xn = fe.__;
function Zr(e, t) {
  fe.__h && fe.__h(ne, e, Ai || t), (Ai = 0);
  var r = ne.__H || (ne.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function he(e) {
  return (Ai = 1), yo(Nc, e);
}
function yo(e, t, r) {
  var i = Zr(tr++, 2);
  if (
    ((i.t = e),
    !i.__c &&
      ((i.__ = [
        r ? r(t) : Nc(void 0, t),
        function (n) {
          var l = i.__N ? i.__N[0] : i.__[0],
            d = i.t(l, n);
          l !== d && ((i.__N = [d, i.__[1]]), i.__c.setState({}));
        },
      ]),
      (i.__c = ne),
      !ne.u))
  ) {
    var s = function (n, l, d) {
      if (!i.__c.__H) return !0;
      var p = i.__c.__H.__.filter(function (f) {
        return !!f.__c;
      });
      if (
        p.every(function (f) {
          return !f.__N;
        })
      )
        return !o || o.call(this, n, l, d);
      var u = i.__c.props !== n;
      return (
        p.forEach(function (f) {
          if (f.__N) {
            var m = f.__[0];
            (f.__ = f.__N), (f.__N = void 0), m !== f.__[0] && (u = !0);
          }
        }),
        (o && o.call(this, n, l, d)) || u
      );
    };
    ne.u = !0;
    var o = ne.shouldComponentUpdate,
      a = ne.componentWillUpdate;
    (ne.componentWillUpdate = function (n, l, d) {
      if (this.__e) {
        var p = o;
        (o = void 0), s(n, l, d), (o = p);
      }
      a && a.call(this, n, l, d);
    }),
      (ne.shouldComponentUpdate = s);
  }
  return i.__N || i.__;
}
function dt(e, t) {
  var r = Zr(tr++, 3);
  !fe.__s && en(r.__H, t) && ((r.__ = e), (r.i = t), ne.__H.__h.push(r));
}
function Er(e, t) {
  var r = Zr(tr++, 4);
  !fe.__s && en(r.__H, t) && ((r.__ = e), (r.i = t), ne.__h.push(r));
}
function qe(e) {
  return (
    (Ai = 5),
    lt(function () {
      return { current: e };
    }, [])
  );
}
function Xa(e, t, r) {
  (Ai = 6),
    Er(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
      },
      r == null ? r : r.concat(e),
    );
}
function lt(e, t) {
  var r = Zr(tr++, 7);
  return en(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
}
function sr(e, t) {
  return (
    (Ai = 8),
    lt(function () {
      return e;
    }, t)
  );
}
function Z(e) {
  var t = ne.context[e.__c],
    r = Zr(tr++, 9);
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(ne)), t.props.value) : e.__
  );
}
function Ja(e, t) {
  fe.useDebugValue && fe.useDebugValue(t ? t(e) : e);
}
function ah(e) {
  var t = Zr(tr++, 10),
    r = he();
  return (
    (t.__ = e),
    ne.componentDidCatch ||
      (ne.componentDidCatch = function (i, s) {
        t.__ && t.__(i, s), r[1](i);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function Za() {
  var e = Zr(tr++, 11);
  if (!e.__) {
    for (var t = ne.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function nh() {
  for (var e; (e = Lc.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Js), e.__H.__h.forEach(da), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), fe.__e(t, e.__v);
      }
}
(fe.__b = function (e) {
  (ne = null), Wn && Wn(e);
}),
  (fe.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Xn && Xn(e, t);
  }),
  (fe.__r = function (e) {
    Kn && Kn(e), (tr = 0);
    var t = (ne = e.__c).__H;
    t &&
      (Do === ne
        ? ((t.__h = []),
          (ne.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.i = r.__N = void 0);
          }))
        : (t.__h.forEach(Js), t.__h.forEach(da), (t.__h = []), (tr = 0))),
      (Do = ne);
  }),
  (fe.diffed = function (e) {
    Qn && Qn(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Lc.push(t) !== 1 && jn === fe.requestAnimationFrame) ||
          ((jn = fe.requestAnimationFrame) || lh)(nh)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i), (r.i = void 0);
      })),
      (Do = ne = null);
  }),
  (fe.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(Js),
          (r.__h = r.__h.filter(function (i) {
            return !i.__ || da(i);
          }));
      } catch (i) {
        t.some(function (s) {
          s.__h && (s.__h = []);
        }),
          (t = []),
          fe.__e(i, r.__v);
      }
    }),
      Gn && Gn(e, t);
  }),
  (fe.unmount = function (e) {
    Yn && Yn(e);
    var t,
      r = e.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (i) {
        try {
          Js(i);
        } catch (s) {
          t = s;
        }
      }),
      (r.__H = void 0),
      t && fe.__e(t, r.__v));
  });
var Jn = typeof requestAnimationFrame == "function";
function lh(e) {
  var t,
    r = function () {
      clearTimeout(i), Jn && cancelAnimationFrame(t), setTimeout(e);
    },
    i = setTimeout(r, 100);
  Jn && (t = requestAnimationFrame(r));
}
function Js(e) {
  var t = ne,
    r = e.__c;
  typeof r == "function" && ((e.__c = void 0), r()), (ne = t);
}
function da(e) {
  var t = ne;
  (e.__c = e.__()), (ne = t);
}
function en(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, i) {
      return r !== e[i];
    })
  );
}
function Nc(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fc(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ua(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var i in t) if (i !== "__source" && e[i] !== t[i]) return !0;
  return !1;
}
function _o(e, t) {
  var r = t(),
    i = he({ t: { __: r, u: t } }),
    s = i[0].t,
    o = i[1];
  return (
    Er(
      function () {
        (s.__ = r), (s.u = t), Mo(s) && o({ t: s });
      },
      [e, r, t],
    ),
    dt(
      function () {
        return (
          Mo(s) && o({ t: s }),
          e(function () {
            Mo(s) && o({ t: s });
          })
        );
      },
      [e],
    ),
    r
  );
}
function Mo(e) {
  var t,
    r,
    i = e.u,
    s = e.__;
  try {
    var o = i();
    return !(
      ((t = s) === (r = o) && (t !== 0 || 1 / t == 1 / r)) ||
      (t != t && r != r)
    );
  } catch {
    return !0;
  }
}
function wo(e) {
  e();
}
function tn(e) {
  return e;
}
function rn() {
  return [!1, wo];
}
var sn = Er;
function ao(e, t) {
  (this.props = e), (this.context = t);
}
function on(e, t) {
  function r(s) {
    var o = this.props.ref,
      a = o == s.ref;
    return (
      !a && o && (o.call ? o(null) : (o.current = null)),
      t ? !t(this.props, s) || !a : ua(this.props, s)
    );
  }
  function i(s) {
    return (this.shouldComponentUpdate = r), Q(e, s);
  }
  return (
    (i.displayName = "Memo(" + (e.displayName || e.name) + ")"),
    (i.prototype.isReactComponent = !0),
    (i.__f = !0),
    i
  );
}
((ao.prototype = new gt()).isPureReactComponent = !0),
  (ao.prototype.shouldComponentUpdate = function (e, t) {
    return ua(this.props, e) || ua(this.state, t);
  });
var Zn = K.__b;
K.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Zn && Zn(e);
};
var ch =
  (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function $s(e) {
  function t(r) {
    var i = Fc({}, r);
    return delete i.ref, e(i, r.ref || null);
  }
  return (
    (t.$$typeof = ch),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var el = function (e, t) {
    return e == null ? null : Zt(Zt(e).map(t));
  },
  an = {
    map: el,
    forEach: el,
    count: function (e) {
      return e ? Zt(e).length : 0;
    },
    only: function (e) {
      var t = Zt(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: Zt,
  },
  dh = K.__e;
K.__e = function (e, t, r, i) {
  if (e.then) {
    for (var s, o = t; (o = o.__); )
      if ((s = o.__c) && s.__c)
        return t.__e == null && ((t.__e = r.__e), (t.__k = r.__k)), s.__c(e, t);
  }
  dh(e, t, r, i);
};
var tl = K.unmount;
function Dc(e, t, r) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (i) {
          typeof i.__c == "function" && i.__c();
        }),
        (e.__c.__H = null)),
      (e = Fc({}, e)).__c != null &&
        (e.__c.__P === r && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (i) {
          return Dc(i, t, r);
        }))),
    e
  );
}
function Mc(e, t, r) {
  return (
    e &&
      r &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (i) {
          return Mc(i, t, r);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && r.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = r))),
    e
  );
}
function as() {
  (this.__u = 0), (this.o = null), (this.__b = null);
}
function Hc(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Bc(e) {
  var t, r, i;
  function s(o) {
    if (
      (t ||
        (t = e()).then(
          function (a) {
            r = a.default || a;
          },
          function (a) {
            i = a;
          },
        ),
      i)
    )
      throw i;
    if (!r) throw t;
    return Q(r, o);
  }
  return (s.displayName = "Lazy"), (s.__f = !0), s;
}
function ai() {
  (this.i = null), (this.l = null);
}
(K.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), tl && tl(e);
}),
  ((as.prototype = new gt()).__c = function (e, t) {
    var r = t.__c,
      i = this;
    i.o == null && (i.o = []), i.o.push(r);
    var s = Hc(i.__v),
      o = !1,
      a = function () {
        o || ((o = !0), (r.__R = null), s ? s(n) : n());
      };
    r.__R = a;
    var n = function () {
      if (!--i.__u) {
        if (i.state.__a) {
          var l = i.state.__a;
          i.__v.__k[0] = Mc(l, l.__c.__P, l.__c.__O);
        }
        var d;
        for (i.setState({ __a: (i.__b = null) }); (d = i.o.pop()); )
          d.forceUpdate();
      }
    };
    i.__u++ || 32 & t.__u || i.setState({ __a: (i.__b = i.__v.__k[0]) }),
      e.then(a, a);
  }),
  (as.prototype.componentWillUnmount = function () {
    this.o = [];
  }),
  (as.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          i = this.__v.__k[0].__c;
        this.__v.__k[0] = Dc(this.__b, r, (i.__O = i.__P));
      }
      this.__b = null;
    }
    var s = t.__a && Q(Ie, null, e.fallback);
    return s && (s.__u &= -33), [Q(Ie, null, t.__a ? null : e.children), s];
  });
var rl = function (e, t, r) {
  if (
    (++r[1] === r[0] && e.l.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
  )
    for (r = e.i; r; ) {
      for (; r.length > 3; ) r.pop()();
      if (r[1] < r[0]) break;
      e.i = r = r[2];
    }
};
function uh(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function hh(e) {
  var t = this,
    r = e.h;
  (t.componentWillUnmount = function () {
    Si(null, t.v), (t.v = null), (t.h = null);
  }),
    t.h && t.h !== r && t.componentWillUnmount(),
    t.v ||
      ((t.h = r),
      (t.v = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        contains: function () {
          return !0;
        },
        appendChild: function (i) {
          this.childNodes.push(i), t.h.appendChild(i);
        },
        insertBefore: function (i, s) {
          this.childNodes.push(i), t.h.insertBefore(i, s);
        },
        removeChild: function (i) {
          this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1),
            t.h.removeChild(i);
        },
      })),
    Si(Q(uh, { context: t.context }, e.__v), t.v);
}
function Vc(e, t) {
  var r = Q(hh, { __v: e, h: t });
  return (r.containerInfo = t), r;
}
((ai.prototype = new gt()).__a = function (e) {
  var t = this,
    r = Hc(t.__v),
    i = t.l.get(e);
  return (
    i[0]++,
    function (s) {
      var o = function () {
        t.props.revealOrder ? (i.push(s), rl(t, e, i)) : s();
      };
      r ? r(o) : o();
    }
  );
}),
  (ai.prototype.render = function (e) {
    (this.i = null), (this.l = new Map());
    var t = Zt(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--; ) this.l.set(t[r], (this.i = [1, 0, this.i]));
    return e.children;
  }),
  (ai.prototype.componentDidUpdate = ai.prototype.componentDidMount =
    function () {
      var e = this;
      this.l.forEach(function (t, r) {
        rl(e, r, t);
      });
    });
var Uc =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  ph =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  fh = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  mh = /[A-Z0-9]/g,
  gh = typeof document < "u",
  bh = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function qc(e, t, r) {
  return (
    t.__k == null && (t.textContent = ""),
    Si(e, t),
    typeof r == "function" && r(),
    e ? e.__c : null
  );
}
function jc(e, t, r) {
  return Cc(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
(gt.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(gt.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var il = K.event;
function vh() {}
function yh() {
  return this.cancelBubble;
}
function _h() {
  return this.defaultPrevented;
}
K.event = function (e) {
  return (
    il && (e = il(e)),
    (e.persist = vh),
    (e.isPropagationStopped = yh),
    (e.isDefaultPrevented = _h),
    (e.nativeEvent = e)
  );
};
var nn,
  wh = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  sl = K.vnode;
K.vnode = function (e) {
  typeof e.type == "string" &&
    (function (t) {
      var r = t.props,
        i = t.type,
        s = {},
        o = i.indexOf("-") === -1;
      for (var a in r) {
        var n = r[a];
        if (
          !(
            (a === "value" && "defaultValue" in r && n == null) ||
            (gh && a === "children" && i === "noscript") ||
            a === "class" ||
            a === "className"
          )
        ) {
          var l = a.toLowerCase();
          a === "defaultValue" && "value" in r && r.value == null
            ? (a = "value")
            : a === "download" && n === !0
              ? (n = "")
              : l === "translate" && n === "no"
                ? (n = !1)
                : l[0] === "o" && l[1] === "n"
                  ? l === "ondoubleclick"
                    ? (a = "ondblclick")
                    : l !== "onchange" ||
                        (i !== "input" && i !== "textarea") ||
                        bh(r.type)
                      ? l === "onfocus"
                        ? (a = "onfocusin")
                        : l === "onblur"
                          ? (a = "onfocusout")
                          : fh.test(a) && (a = l)
                      : (l = a = "oninput")
                  : o && ph.test(a)
                    ? (a = a.replace(mh, "-$&").toLowerCase())
                    : n === null && (n = void 0),
            l === "oninput" && s[(a = l)] && (a = "oninputCapture"),
            (s[a] = n);
        }
      }
      i == "select" &&
        s.multiple &&
        Array.isArray(s.value) &&
        (s.value = Zt(r.children).forEach(function (d) {
          d.props.selected = s.value.indexOf(d.props.value) != -1;
        })),
        i == "select" &&
          s.defaultValue != null &&
          (s.value = Zt(r.children).forEach(function (d) {
            d.props.selected = s.multiple
              ? s.defaultValue.indexOf(d.props.value) != -1
              : s.defaultValue == d.props.value;
          })),
        r.class && !r.className
          ? ((s.class = r.class), Object.defineProperty(s, "className", wh))
          : ((r.className && !r.class) || (r.class && r.className)) &&
            (s.class = s.className = r.className),
        (t.props = s);
    })(e),
    (e.$$typeof = Uc),
    sl && sl(e);
};
var ol = K.__r;
K.__r = function (e) {
  ol && ol(e), (nn = e.__c);
};
var al = K.diffed;
K.diffed = function (e) {
  al && al(e);
  var t = e.props,
    r = e.__e;
  r != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== r.value &&
    (r.value = t.value == null ? "" : t.value),
    (nn = null);
};
var Wc = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return nn.__n[e.__c].props.value;
        },
        useCallback: sr,
        useContext: Z,
        useDebugValue: Ja,
        useDeferredValue: tn,
        useEffect: dt,
        useId: Za,
        useImperativeHandle: Xa,
        useInsertionEffect: sn,
        useLayoutEffect: Er,
        useMemo: lt,
        useReducer: yo,
        useRef: qe,
        useState: he,
        useSyncExternalStore: _o,
        useTransition: rn,
      },
    },
  },
  xh = "18.3.1";
function Kc(e) {
  return Q.bind(null, e);
}
function zi(e) {
  return !!e && e.$$typeof === Uc;
}
function Qc(e) {
  return zi(e) && e.type === Ie;
}
function Gc(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function Yc(e) {
  return zi(e) ? Cu.apply(null, arguments) : e;
}
function Xc(e) {
  return !!e.__k && (Si(null, e), !0);
}
function Jc(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var Zc = function (e, t) {
    return e(t);
  },
  ed = function (e, t) {
    return e(t);
  },
  td = Ie,
  rd = zi,
  ha = {
    useState: he,
    useId: Za,
    useReducer: yo,
    useEffect: dt,
    useLayoutEffect: Er,
    useInsertionEffect: sn,
    useTransition: rn,
    useDeferredValue: tn,
    useSyncExternalStore: _o,
    startTransition: wo,
    useRef: qe,
    useImperativeHandle: Xa,
    useMemo: lt,
    useCallback: sr,
    useContext: Z,
    useDebugValue: Ja,
    version: "18.3.1",
    Children: an,
    render: qc,
    hydrate: jc,
    unmountComponentAtNode: Xc,
    createPortal: Vc,
    createElement: Q,
    createContext: je,
    createFactory: Kc,
    cloneElement: Yc,
    createRef: vc,
    Fragment: Ie,
    isValidElement: zi,
    isElement: rd,
    isFragment: Qc,
    isMemo: Gc,
    findDOMNode: Jc,
    Component: gt,
    PureComponent: ao,
    memo: on,
    forwardRef: $s,
    flushSync: ed,
    unstable_batchedUpdates: Zc,
    StrictMode: td,
    Suspense: as,
    SuspenseList: ai,
    lazy: Bc,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Wc,
  };
const F = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Children: an,
      Component: gt,
      Fragment: Ie,
      PureComponent: ao,
      StrictMode: td,
      Suspense: as,
      SuspenseList: ai,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Wc,
      cloneElement: Yc,
      createContext: je,
      createElement: Q,
      createFactory: Kc,
      createPortal: Vc,
      createRef: vc,
      default: ha,
      findDOMNode: Jc,
      flushSync: ed,
      forwardRef: $s,
      hydrate: jc,
      isElement: rd,
      isFragment: Qc,
      isMemo: Gc,
      isValidElement: zi,
      lazy: Bc,
      memo: on,
      render: qc,
      startTransition: wo,
      unmountComponentAtNode: Xc,
      unstable_batchedUpdates: Zc,
      useCallback: sr,
      useContext: Z,
      useDebugValue: Ja,
      useDeferredValue: tn,
      useEffect: dt,
      useErrorBoundary: ah,
      useId: Za,
      useImperativeHandle: Xa,
      useInsertionEffect: sn,
      useLayoutEffect: Er,
      useMemo: lt,
      useReducer: yo,
      useRef: qe,
      useState: he,
      useSyncExternalStore: _o,
      useTransition: rn,
      version: xh,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const kh = new Set(["children", "localName", "ref", "style", "className"]),
  nl = new WeakMap(),
  ll = (e, t, r, i, s) => {
    const o = s == null ? void 0 : s[t];
    o === void 0
      ? ((e[t] = r),
        r == null && t in HTMLElement.prototype && e.removeAttribute(t))
      : r !== i &&
        ((a, n, l) => {
          let d = nl.get(a);
          d === void 0 && nl.set(a, (d = new Map()));
          let p = d.get(n);
          l !== void 0
            ? p === void 0
              ? (d.set(n, (p = { handleEvent: l })), a.addEventListener(n, p))
              : (p.handleEvent = l)
            : p !== void 0 && (d.delete(n), a.removeEventListener(n, p));
        })(e, o, r);
  },
  D = ({
    react: e,
    tagName: t,
    elementClass: r,
    events: i,
    displayName: s,
  }) => {
    const o = new Set(Object.keys(i ?? {})),
      a = e.forwardRef((n, l) => {
        const d = e.useRef(new Map()),
          p = e.useRef(null),
          u = {},
          f = {};
        for (const [m, g] of Object.entries(n))
          kh.has(m)
            ? (u[m === "className" ? "class" : m] = g)
            : o.has(m) || m in r.prototype
              ? (f[m] = g)
              : (u[m] = g);
        return (
          e.useLayoutEffect(() => {
            if (p.current === null) return;
            const m = new Map();
            for (const g in f)
              ll(p.current, g, n[g], d.current.get(g), i),
                d.current.delete(g),
                m.set(g, n[g]);
            for (const [g, b] of d.current) ll(p.current, g, void 0, b, i);
            d.current = m;
          }),
          e.useLayoutEffect(() => {
            var m;
            (m = p.current) == null || m.removeAttribute("defer-hydration");
          }, []),
          (u.suppressHydrationWarning = !0),
          e.createElement(t, {
            ...u,
            ref: e.useCallback(
              (m) => {
                (p.current = m),
                  typeof l == "function" ? l(m) : l !== null && (l.current = m);
              },
              [l],
            ),
          })
        );
      });
    return (a.displayName = s ?? r.name), a;
  };
var Ch = "sl-visually-hidden";
vo.define("sl-visually-hidden");
D({
  tagName: Ch,
  elementClass: vo,
  react: F,
  events: {},
  displayName: "SlVisuallyHidden",
});
var Sh = M`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,
  Ti =
    (e = "value") =>
    (t, r) => {
      const i = t.constructor,
        s = i.prototype.attributeChangedCallback;
      i.prototype.attributeChangedCallback = function (o, a, n) {
        var l;
        const d = i.getPropertyOptions(e),
          p = typeof d.attribute == "string" ? d.attribute : e;
        if (o === p) {
          const u = d.converter || $i,
            m = (
              typeof u == "function"
                ? u
                : (l = u == null ? void 0 : u.fromAttribute) != null
                  ? l
                  : $i.fromAttribute
            )(n, d.type);
          this[e] !== m && (this[r] = m);
        }
        s.call(this, o, a, n);
      };
    },
  ei = M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,
  ji = new WeakMap(),
  Wi = new WeakMap(),
  Ki = new WeakMap(),
  Ho = new WeakSet(),
  Hs = new WeakMap(),
  or = class {
    constructor(e, t) {
      (this.handleFormData = (r) => {
        const i = this.options.disabled(this.host),
          s = this.options.name(this.host),
          o = this.options.value(this.host),
          a = this.host.tagName.toLowerCase() === "sl-button";
        this.host.isConnected &&
          !i &&
          !a &&
          typeof s == "string" &&
          s.length > 0 &&
          typeof o < "u" &&
          (Array.isArray(o)
            ? o.forEach((n) => {
                r.formData.append(s, n.toString());
              })
            : r.formData.append(s, o.toString()));
      }),
        (this.handleFormSubmit = (r) => {
          var i;
          const s = this.options.disabled(this.host),
            o = this.options.reportValidity;
          this.form &&
            !this.form.noValidate &&
            ((i = ji.get(this.form)) == null ||
              i.forEach((a) => {
                this.setUserInteracted(a, !0);
              })),
            this.form &&
              !this.form.noValidate &&
              !s &&
              !o(this.host) &&
              (r.preventDefault(), r.stopImmediatePropagation());
        }),
        (this.handleFormReset = () => {
          this.options.setValue(
            this.host,
            this.options.defaultValue(this.host),
          ),
            this.setUserInteracted(this.host, !1),
            Hs.set(this.host, []);
        }),
        (this.handleInteraction = (r) => {
          const i = Hs.get(this.host);
          i.includes(r.type) || i.push(r.type),
            i.length === this.options.assumeInteractionOn.length &&
              this.setUserInteracted(this.host, !0);
        }),
        (this.checkFormValidity = () => {
          if (this.form && !this.form.noValidate) {
            const r = this.form.querySelectorAll("*");
            for (const i of r)
              if (typeof i.checkValidity == "function" && !i.checkValidity())
                return !1;
          }
          return !0;
        }),
        (this.reportFormValidity = () => {
          if (this.form && !this.form.noValidate) {
            const r = this.form.querySelectorAll("*");
            for (const i of r)
              if (typeof i.reportValidity == "function" && !i.reportValidity())
                return !1;
          }
          return !0;
        }),
        (this.host = e).addController(this),
        (this.options = ir(
          {
            form: (r) => {
              const i = r.form;
              if (i) {
                const o = r.getRootNode().querySelector(`#${i}`);
                if (o) return o;
              }
              return r.closest("form");
            },
            name: (r) => r.name,
            value: (r) => r.value,
            defaultValue: (r) => r.defaultValue,
            disabled: (r) => {
              var i;
              return (i = r.disabled) != null ? i : !1;
            },
            reportValidity: (r) =>
              typeof r.reportValidity == "function" ? r.reportValidity() : !0,
            checkValidity: (r) =>
              typeof r.checkValidity == "function" ? r.checkValidity() : !0,
            setValue: (r, i) => (r.value = i),
            assumeInteractionOn: ["sl-input"],
          },
          t,
        ));
    }
    hostConnected() {
      const e = this.options.form(this.host);
      e && this.attachForm(e),
        Hs.set(this.host, []),
        this.options.assumeInteractionOn.forEach((t) => {
          this.host.addEventListener(t, this.handleInteraction);
        });
    }
    hostDisconnected() {
      this.detachForm(),
        Hs.delete(this.host),
        this.options.assumeInteractionOn.forEach((e) => {
          this.host.removeEventListener(e, this.handleInteraction);
        });
    }
    hostUpdated() {
      const e = this.options.form(this.host);
      e || this.detachForm(),
        e && this.form !== e && (this.detachForm(), this.attachForm(e)),
        this.host.hasUpdated && this.setValidity(this.host.validity.valid);
    }
    attachForm(e) {
      e
        ? ((this.form = e),
          ji.has(this.form)
            ? ji.get(this.form).add(this.host)
            : ji.set(this.form, new Set([this.host])),
          this.form.addEventListener("formdata", this.handleFormData),
          this.form.addEventListener("submit", this.handleFormSubmit),
          this.form.addEventListener("reset", this.handleFormReset),
          Wi.has(this.form) ||
            (Wi.set(this.form, this.form.reportValidity),
            (this.form.reportValidity = () => this.reportFormValidity())),
          Ki.has(this.form) ||
            (Ki.set(this.form, this.form.checkValidity),
            (this.form.checkValidity = () => this.checkFormValidity())))
        : (this.form = void 0);
    }
    detachForm() {
      if (!this.form) return;
      const e = ji.get(this.form);
      e &&
        (e.delete(this.host),
        e.size <= 0 &&
          (this.form.removeEventListener("formdata", this.handleFormData),
          this.form.removeEventListener("submit", this.handleFormSubmit),
          this.form.removeEventListener("reset", this.handleFormReset),
          Wi.has(this.form) &&
            ((this.form.reportValidity = Wi.get(this.form)),
            Wi.delete(this.form)),
          Ki.has(this.form) &&
            ((this.form.checkValidity = Ki.get(this.form)),
            Ki.delete(this.form)),
          (this.form = void 0)));
    }
    setUserInteracted(e, t) {
      t ? Ho.add(e) : Ho.delete(e), e.requestUpdate();
    }
    doAction(e, t) {
      if (this.form) {
        const r = document.createElement("button");
        (r.type = e),
          (r.style.position = "absolute"),
          (r.style.width = "0"),
          (r.style.height = "0"),
          (r.style.clipPath = "inset(50%)"),
          (r.style.overflow = "hidden"),
          (r.style.whiteSpace = "nowrap"),
          t &&
            ((r.name = t.name),
            (r.value = t.value),
            [
              "formaction",
              "formenctype",
              "formmethod",
              "formnovalidate",
              "formtarget",
            ].forEach((i) => {
              t.hasAttribute(i) && r.setAttribute(i, t.getAttribute(i));
            })),
          this.form.append(r),
          r.click(),
          r.remove();
      }
    }
    getForm() {
      var e;
      return (e = this.form) != null ? e : null;
    }
    reset(e) {
      this.doAction("reset", e);
    }
    submit(e) {
      this.doAction("submit", e);
    }
    setValidity(e) {
      const t = this.host,
        r = !!Ho.has(t),
        i = !!t.required;
      t.toggleAttribute("data-required", i),
        t.toggleAttribute("data-optional", !i),
        t.toggleAttribute("data-invalid", !e),
        t.toggleAttribute("data-valid", e),
        t.toggleAttribute("data-user-invalid", !e && r),
        t.toggleAttribute("data-user-valid", e && r);
    }
    updateValidity() {
      const e = this.host;
      this.setValidity(e.validity.valid);
    }
    emitInvalidEvent(e) {
      const t = new CustomEvent("sl-invalid", {
        bubbles: !1,
        composed: !1,
        cancelable: !0,
        detail: {},
      });
      e || t.preventDefault(),
        this.host.dispatchEvent(t) || e == null || e.preventDefault();
    }
  },
  xo = Object.freeze({
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: !0,
    valueMissing: !1,
  }),
  $h = Object.freeze(Cs(ir({}, xo), { valid: !1, valueMissing: !0 })),
  Eh = Object.freeze(Cs(ir({}, xo), { valid: !1, customError: !0 })),
  Ye = class {
    constructor(e, ...t) {
      (this.slotNames = []),
        (this.handleSlotChange = (r) => {
          const i = r.target;
          ((this.slotNames.includes("[default]") && !i.name) ||
            (i.name && this.slotNames.includes(i.name))) &&
            this.host.requestUpdate();
        }),
        (this.host = e).addController(this),
        (this.slotNames = t);
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((e) => {
        if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "")
          return !0;
        if (e.nodeType === e.ELEMENT_NODE) {
          const t = e;
          if (t.tagName.toLowerCase() === "sl-visually-hidden") return !1;
          if (!t.hasAttribute("slot")) return !0;
        }
        return !1;
      });
    }
    hasNamedSlot(e) {
      return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
    }
    test(e) {
      return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener(
        "slotchange",
        this.handleSlotChange,
      );
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener(
        "slotchange",
        this.handleSlotChange,
      );
    }
  };
function Ah(e) {
  if (!e) return "";
  const t = e.assignedNodes({ flatten: !0 });
  let r = "";
  return (
    [...t].forEach((i) => {
      i.nodeType === Node.TEXT_NODE && (r += i.textContent);
    }),
    r
  );
}
function R(e, t) {
  const r = ir({ waitUntilFirstUpdate: !1 }, t);
  return (i, s) => {
    const { update: o } = i,
      a = Array.isArray(e) ? e : [e];
    i.update = function (n) {
      a.forEach((l) => {
        const d = l;
        if (n.has(d)) {
          const p = n.get(d),
            u = this[d];
          p !== u &&
            (!r.waitUntilFirstUpdate || this.hasUpdated) &&
            this[s](p, u);
        }
      }),
        o.call(this, n);
    };
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Bt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 },
  Es =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
let As = class {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, i) {
    (this._$Ct = t), (this._$AM = r), (this._$Ci = i);
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const V = Es(
  class extends As {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== Bt.ATTRIBUTE ||
          e.name !== "class" ||
          ((t = e.strings) == null ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.",
        );
    }
    render(e) {
      return (
        " " +
        Object.keys(e)
          .filter((t) => e[t])
          .join(" ") +
        " "
      );
    }
    update(e, [t]) {
      var i, s;
      if (this.st === void 0) {
        (this.st = new Set()),
          e.strings !== void 0 &&
            (this.nt = new Set(
              e.strings
                .join(" ")
                .split(/\s/)
                .filter((o) => o !== ""),
            ));
        for (const o in t)
          t[o] && !((i = this.nt) != null && i.has(o)) && this.st.add(o);
        return this.render(t);
      }
      const r = e.element.classList;
      for (const o of this.st) o in t || (r.remove(o), this.st.delete(o));
      for (const o in t) {
        const a = !!t[o];
        a === this.st.has(o) ||
          ((s = this.nt) != null && s.has(o)) ||
          (a ? (r.add(o), this.st.add(o)) : (r.remove(o), this.st.delete(o)));
      }
      return nt;
    }
  },
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const L = (e) => e ?? de;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Rh = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0,
  id = (e) => e.strings === void 0,
  zh = {},
  Th = (e, t = zh) => (e._$AH = t);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Gr = Es(
  class extends As {
    constructor(e) {
      if (
        (super(e),
        e.type !== Bt.PROPERTY &&
          e.type !== Bt.ATTRIBUTE &&
          e.type !== Bt.BOOLEAN_ATTRIBUTE)
      )
        throw Error(
          "The `live` directive is not allowed on child or event bindings",
        );
      if (!id(e))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(e) {
      return e;
    }
    update(e, [t]) {
      if (t === nt || t === de) return t;
      const r = e.element,
        i = e.name;
      if (e.type === Bt.PROPERTY) {
        if (t === r[i]) return nt;
      } else if (e.type === Bt.BOOLEAN_ATTRIBUTE) {
        if (!!t === r.hasAttribute(i)) return nt;
      } else if (e.type === Bt.ATTRIBUTE && r.getAttribute(i) === t + "")
        return nt;
      return Th(e), t;
    }
  },
);
var Me = class extends N {
  constructor() {
    super(...arguments),
      (this.formControlController = new or(this, {
        value: (e) => (e.checked ? e.value || "on" : void 0),
        defaultValue: (e) => e.defaultChecked,
        setValue: (e, t) => (e.checked = t),
      })),
      (this.hasSlotController = new Ye(this, "help-text")),
      (this.hasFocus = !1),
      (this.title = ""),
      (this.name = ""),
      (this.size = "medium"),
      (this.disabled = !1),
      (this.checked = !1),
      (this.defaultChecked = !1),
      (this.form = ""),
      (this.required = !1),
      (this.helpText = "");
  }
  get validity() {
    return this.input.validity;
  }
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    (this.hasFocus = !1), this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1),
      this.formControlController.emitInvalidEvent(e);
  }
  handleClick() {
    (this.checked = !this.checked), this.emit("sl-change");
  }
  handleFocus() {
    (this.hasFocus = !0), this.emit("sl-focus");
  }
  handleKeyDown(e) {
    e.key === "ArrowLeft" &&
      (e.preventDefault(),
      (this.checked = !1),
      this.emit("sl-change"),
      this.emit("sl-input")),
      e.key === "ArrowRight" &&
        (e.preventDefault(),
        (this.checked = !0),
        this.emit("sl-change"),
        this.emit("sl-input"));
  }
  handleCheckedChange() {
    (this.input.checked = this.checked),
      this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(!0);
  }
  click() {
    this.input.click();
  }
  focus(e) {
    this.input.focus(e);
  }
  blur() {
    this.input.blur();
  }
  checkValidity() {
    return this.input.checkValidity();
  }
  getForm() {
    return this.formControlController.getForm();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(e) {
    this.input.setCustomValidity(e),
      this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("help-text"),
      t = this.helpText ? !0 : !!e;
    return $`
      <div
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-help-text": t })}
      >
        <label
          part="base"
          class=${V({ switch: !0, "switch--checked": this.checked, "switch--disabled": this.disabled, "switch--focused": this.hasFocus, "switch--small": this.size === "small", "switch--medium": this.size === "medium", "switch--large": this.size === "large" })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${L(this.value)}
            .checked=${Gr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
Me.styles = [U, ei, Sh];
c([P('input[type="checkbox"]')], Me.prototype, "input", 2);
c([H()], Me.prototype, "hasFocus", 2);
c([h()], Me.prototype, "title", 2);
c([h()], Me.prototype, "name", 2);
c([h()], Me.prototype, "value", 2);
c([h({ reflect: !0 })], Me.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], Me.prototype, "disabled", 2);
c([h({ type: Boolean, reflect: !0 })], Me.prototype, "checked", 2);
c([Ti("checked")], Me.prototype, "defaultChecked", 2);
c([h({ reflect: !0 })], Me.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], Me.prototype, "required", 2);
c([h({ attribute: "help-text" })], Me.prototype, "helpText", 2);
c(
  [R("checked", { waitUntilFirstUpdate: !0 })],
  Me.prototype,
  "handleCheckedChange",
  1,
);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  Me.prototype,
  "handleDisabledChange",
  1,
);
var Ph = "sl-switch";
Me.define("sl-switch");
D({
  tagName: Ph,
  elementClass: Me,
  react: F,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlSwitch",
});
var Ih = M`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,
  Oh = M`
  :host {
    display: contents;
  }
`,
  Pi = class extends N {
    constructor() {
      super(...arguments), (this.observedElements = []), (this.disabled = !1);
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.resizeObserver = new ResizeObserver((e) => {
          this.emit("sl-resize", { detail: { entries: e } });
        })),
        this.disabled || this.startObserver();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.stopObserver();
    }
    handleSlotChange() {
      this.disabled || this.startObserver();
    }
    startObserver() {
      const e = this.shadowRoot.querySelector("slot");
      if (e !== null) {
        const t = e.assignedElements({ flatten: !0 });
        this.observedElements.forEach((r) => this.resizeObserver.unobserve(r)),
          (this.observedElements = []),
          t.forEach((r) => {
            this.resizeObserver.observe(r), this.observedElements.push(r);
          });
      }
    }
    stopObserver() {
      this.resizeObserver.disconnect();
    }
    handleDisabledChange() {
      this.disabled ? this.stopObserver() : this.startObserver();
    }
    render() {
      return $` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
  };
Pi.styles = [U, Oh];
c([h({ type: Boolean, reflect: !0 })], Pi.prototype, "disabled", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  Pi.prototype,
  "handleDisabledChange",
  1,
);
function Lh(e, t) {
  return {
    top: Math.round(
      e.getBoundingClientRect().top - t.getBoundingClientRect().top,
    ),
    left: Math.round(
      e.getBoundingClientRect().left - t.getBoundingClientRect().left,
    ),
  };
}
var pa = new Set();
function Nh() {
  const e = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
}
function Fh() {
  const e = Number(
    getComputedStyle(document.body).paddingRight.replace(/px/, ""),
  );
  return isNaN(e) || !e ? 0 : e;
}
function ns(e) {
  if (
    (pa.add(e), !document.documentElement.classList.contains("sl-scroll-lock"))
  ) {
    const t = Nh() + Fh();
    let r = getComputedStyle(document.documentElement).scrollbarGutter;
    (!r || r === "auto") && (r = "stable"),
      t < 2 && (r = ""),
      document.documentElement.style.setProperty("--sl-scroll-lock-gutter", r),
      document.documentElement.classList.add("sl-scroll-lock"),
      document.documentElement.style.setProperty(
        "--sl-scroll-lock-size",
        `${t}px`,
      );
  }
}
function ls(e) {
  pa.delete(e),
    pa.size === 0 &&
      (document.documentElement.classList.remove("sl-scroll-lock"),
      document.documentElement.style.removeProperty("--sl-scroll-lock-size"));
}
function fa(e, t, r = "vertical", i = "smooth") {
  const s = Lh(e, t),
    o = s.top + t.scrollTop,
    a = s.left + t.scrollLeft,
    n = t.scrollLeft,
    l = t.scrollLeft + t.offsetWidth,
    d = t.scrollTop,
    p = t.scrollTop + t.offsetHeight;
  (r === "horizontal" || r === "both") &&
    (a < n
      ? t.scrollTo({ left: a, behavior: i })
      : a + e.clientWidth > l &&
        t.scrollTo({ left: a - t.offsetWidth + e.clientWidth, behavior: i })),
    (r === "vertical" || r === "both") &&
      (o < d
        ? t.scrollTo({ top: o, behavior: i })
        : o + e.clientHeight > p &&
          t.scrollTo({
            top: o - t.offsetHeight + e.clientHeight,
            behavior: i,
          }));
}
var Dh = M`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,
  Mh = { name: "default", resolver: (e) => $u(`assets/icons/${e}.svg`) },
  Hh = Mh,
  cl = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `,
  },
  Bh = {
    name: "system",
    resolver: (e) =>
      e in cl ? `data:image/svg+xml,${encodeURIComponent(cl[e])}` : "",
  },
  Vh = Bh,
  Uh = [Hh, Vh],
  ma = [];
function qh(e) {
  ma.push(e);
}
function jh(e) {
  ma = ma.filter((t) => t !== e);
}
function dl(e) {
  return Uh.find((t) => t.name === e);
}
var Wh = M`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,
  Qi = Symbol(),
  Bs = Symbol(),
  Bo,
  Vo = new Map(),
  ae = class extends N {
    constructor() {
      super(...arguments),
        (this.initialRender = !1),
        (this.svg = null),
        (this.label = ""),
        (this.library = "default");
    }
    async resolveIcon(e, t) {
      var r;
      let i;
      if (t != null && t.spriteSheet)
        return (
          (this.svg = $`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`),
          this.svg
        );
      try {
        if (((i = await fetch(e, { mode: "cors" })), !i.ok))
          return i.status === 410 ? Qi : Bs;
      } catch {
        return Bs;
      }
      try {
        const s = document.createElement("div");
        s.innerHTML = await i.text();
        const o = s.firstElementChild;
        if (
          ((r = o == null ? void 0 : o.tagName) == null
            ? void 0
            : r.toLowerCase()) !== "svg"
        )
          return Qi;
        Bo || (Bo = new DOMParser());
        const n = Bo.parseFromString(
          o.outerHTML,
          "text/html",
        ).body.querySelector("svg");
        return n ? (n.part.add("svg"), document.adoptNode(n)) : Qi;
      } catch {
        return Qi;
      }
    }
    connectedCallback() {
      super.connectedCallback(), qh(this);
    }
    firstUpdated() {
      (this.initialRender = !0), this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), jh(this);
    }
    getIconSource() {
      const e = dl(this.library);
      return this.name && e
        ? { url: e.resolver(this.name), fromLibrary: !0 }
        : { url: this.src, fromLibrary: !1 };
    }
    handleLabelChange() {
      typeof this.label == "string" && this.label.length > 0
        ? (this.setAttribute("role", "img"),
          this.setAttribute("aria-label", this.label),
          this.removeAttribute("aria-hidden"))
        : (this.removeAttribute("role"),
          this.removeAttribute("aria-label"),
          this.setAttribute("aria-hidden", "true"));
    }
    async setIcon() {
      var e;
      const { url: t, fromLibrary: r } = this.getIconSource(),
        i = r ? dl(this.library) : void 0;
      if (!t) {
        this.svg = null;
        return;
      }
      let s = Vo.get(t);
      if (
        (s || ((s = this.resolveIcon(t, i)), Vo.set(t, s)), !this.initialRender)
      )
        return;
      const o = await s;
      if ((o === Bs && Vo.delete(t), t === this.getIconSource().url)) {
        if (Rh(o)) {
          if (((this.svg = o), i)) {
            await this.updateComplete;
            const a = this.shadowRoot.querySelector("[part='svg']");
            typeof i.mutator == "function" && a && i.mutator(a);
          }
          return;
        }
        switch (o) {
          case Bs:
          case Qi:
            (this.svg = null), this.emit("sl-error");
            break;
          default:
            (this.svg = o.cloneNode(!0)),
              (e = i == null ? void 0 : i.mutator) == null ||
                e.call(i, this.svg),
              this.emit("sl-load");
        }
      }
    }
    render() {
      return this.svg;
    }
  };
ae.styles = [U, Wh];
c([H()], ae.prototype, "svg", 2);
c([h({ reflect: !0 })], ae.prototype, "name", 2);
c([h()], ae.prototype, "src", 2);
c([h()], ae.prototype, "label", 2);
c([h({ reflect: !0 })], ae.prototype, "library", 2);
c([R("label")], ae.prototype, "handleLabelChange", 1);
c([R(["name", "src", "library"])], ae.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const sd = Symbol.for(""),
  Kh = (e) => {
    if ((e == null ? void 0 : e.r) === sd)
      return e == null ? void 0 : e._$litStatic$;
  },
  no = (e, ...t) => ({
    _$litStatic$: t.reduce(
      (r, i, s) =>
        r +
        ((o) => {
          if (o._$litStatic$ !== void 0) return o._$litStatic$;
          throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
        })(i) +
        e[s + 1],
      e[0],
    ),
    r: sd,
  }),
  ul = new Map(),
  Qh =
    (e) =>
    (t, ...r) => {
      const i = r.length;
      let s, o;
      const a = [],
        n = [];
      let l,
        d = 0,
        p = !1;
      for (; d < i; ) {
        for (l = t[d]; d < i && ((o = r[d]), (s = Kh(o)) !== void 0); )
          (l += s + t[++d]), (p = !0);
        d !== i && n.push(o), a.push(l), d++;
      }
      if ((d === i && a.push(t[i]), p)) {
        const u = a.join("$$lit$$");
        (t = ul.get(u)) === void 0 && ((a.raw = a), ul.set(u, (t = a))),
          (r = n);
      }
      return e(t, ...r);
    },
  cs = Qh($);
var $e = class extends N {
  constructor() {
    super(...arguments),
      (this.hasFocus = !1),
      (this.label = ""),
      (this.disabled = !1);
  }
  handleBlur() {
    (this.hasFocus = !1), this.emit("sl-blur");
  }
  handleFocus() {
    (this.hasFocus = !0), this.emit("sl-focus");
  }
  handleClick(e) {
    this.disabled && (e.preventDefault(), e.stopPropagation());
  }
  click() {
    this.button.click();
  }
  focus(e) {
    this.button.focus(e);
  }
  blur() {
    this.button.blur();
  }
  render() {
    const e = !!this.href,
      t = e ? no`a` : no`button`;
    return cs`
      <${t}
        part="base"
        class=${V({ "icon-button": !0, "icon-button--disabled": !e && this.disabled, "icon-button--focused": this.hasFocus })}
        ?disabled=${L(e ? void 0 : this.disabled)}
        type=${L(e ? void 0 : "button")}
        href=${L(e ? this.href : void 0)}
        target=${L(e ? this.target : void 0)}
        download=${L(e ? this.download : void 0)}
        rel=${L(e && this.target ? "noreferrer noopener" : void 0)}
        role=${L(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${L(this.name)}
          library=${L(this.library)}
          src=${L(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
  }
};
$e.styles = [U, Dh];
$e.dependencies = { "sl-icon": ae };
c([P(".icon-button")], $e.prototype, "button", 2);
c([H()], $e.prototype, "hasFocus", 2);
c([h()], $e.prototype, "name", 2);
c([h()], $e.prototype, "library", 2);
c([h()], $e.prototype, "src", 2);
c([h()], $e.prototype, "href", 2);
c([h()], $e.prototype, "target", 2);
c([h()], $e.prototype, "download", 2);
c([h()], $e.prototype, "label", 2);
c([h({ type: Boolean, reflect: !0 })], $e.prototype, "disabled", 2);
const ga = new Set(),
  ni = new Map();
let Nr,
  ln = "ltr",
  cn = "en";
const od =
  typeof MutationObserver < "u" &&
  typeof document < "u" &&
  typeof document.documentElement < "u";
if (od) {
  const e = new MutationObserver(nd);
  (ln = document.documentElement.dir || "ltr"),
    (cn = document.documentElement.lang || navigator.language),
    e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["dir", "lang"],
    });
}
function ad(...e) {
  e.map((t) => {
    const r = t.$code.toLowerCase();
    ni.has(r)
      ? ni.set(r, Object.assign(Object.assign({}, ni.get(r)), t))
      : ni.set(r, t),
      Nr || (Nr = t);
  }),
    nd();
}
function nd() {
  od &&
    ((ln = document.documentElement.dir || "ltr"),
    (cn = document.documentElement.lang || navigator.language)),
    [...ga.keys()].map((e) => {
      typeof e.requestUpdate == "function" && e.requestUpdate();
    });
}
let Gh = class {
  constructor(t) {
    (this.host = t), this.host.addController(this);
  }
  hostConnected() {
    ga.add(this.host);
  }
  hostDisconnected() {
    ga.delete(this.host);
  }
  dir() {
    return `${this.host.dir || ln}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || cn}`.toLowerCase();
  }
  getTranslationData(t) {
    var r, i;
    const s = new Intl.Locale(t.replace(/_/g, "-")),
      o = s == null ? void 0 : s.language.toLowerCase(),
      a =
        (i =
          (r = s == null ? void 0 : s.region) === null || r === void 0
            ? void 0
            : r.toLowerCase()) !== null && i !== void 0
          ? i
          : "",
      n = ni.get(`${o}-${a}`),
      l = ni.get(o);
    return { locale: s, language: o, region: a, primary: n, secondary: l };
  }
  exists(t, r) {
    var i;
    const { primary: s, secondary: o } = this.getTranslationData(
      (i = r.lang) !== null && i !== void 0 ? i : this.lang(),
    );
    return (
      (r = Object.assign({ includeFallback: !1 }, r)),
      !!((s && s[t]) || (o && o[t]) || (r.includeFallback && Nr && Nr[t]))
    );
  }
  term(t, ...r) {
    const { primary: i, secondary: s } = this.getTranslationData(this.lang());
    let o;
    if (i && i[t]) o = i[t];
    else if (s && s[t]) o = s[t];
    else if (Nr && Nr[t]) o = Nr[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof o == "function" ? o(...r) : o;
  }
  date(t, r) {
    return (t = new Date(t)), new Intl.DateTimeFormat(this.lang(), r).format(t);
  }
  number(t, r) {
    return (
      (t = Number(t)),
      isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), r).format(t)
    );
  }
  relativeTime(t, r, i) {
    return new Intl.RelativeTimeFormat(this.lang(), i).format(t, r);
  }
};
var ld = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (e) =>
    e === 0
      ? "No options selected"
      : e === 1
        ? "1 option selected"
        : `${e} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (e) => `Slide ${e}`,
  toggleColorFormat: "Toggle color format",
};
ad(ld);
var Yh = ld,
  te = class extends Gh {};
ad(Yh);
var Oe = class extends N {
  constructor() {
    super(...arguments),
      (this.tabs = []),
      (this.focusableTabs = []),
      (this.panels = []),
      (this.localize = new te(this)),
      (this.hasScrollControls = !1),
      (this.shouldHideScrollStartButton = !1),
      (this.shouldHideScrollEndButton = !1),
      (this.placement = "top"),
      (this.activation = "auto"),
      (this.noScrollControls = !1),
      (this.fixedScrollControls = !1),
      (this.scrollOffset = 1);
  }
  connectedCallback() {
    const e = Promise.all([
      customElements.whenDefined("sl-tab"),
      customElements.whenDefined("sl-tab-panel"),
    ]);
    super.connectedCallback(),
      (this.resizeObserver = new ResizeObserver(() => {
        this.repositionIndicator(), this.updateScrollControls();
      })),
      (this.mutationObserver = new MutationObserver((t) => {
        if (
          (t.some(
            (r) =>
              !["aria-labelledby", "aria-controls"].includes(r.attributeName),
          ) && setTimeout(() => this.setAriaLabels()),
          t.some((r) => r.attributeName === "disabled"))
        )
          this.syncTabsAndPanels();
        else if (t.some((r) => r.attributeName === "active")) {
          const i = t
            .filter(
              (s) =>
                s.attributeName === "active" &&
                s.target.tagName.toLowerCase() === "sl-tab",
            )
            .map((s) => s.target)
            .find((s) => s.active);
          i && this.setActiveTab(i);
        }
      })),
      this.updateComplete.then(() => {
        this.syncTabsAndPanels(),
          this.mutationObserver.observe(this, {
            attributes: !0,
            childList: !0,
            subtree: !0,
          }),
          this.resizeObserver.observe(this.nav),
          e.then(() => {
            new IntersectionObserver((r, i) => {
              var s;
              r[0].intersectionRatio > 0 &&
                (this.setAriaLabels(),
                this.setActiveTab(
                  (s = this.getActiveTab()) != null ? s : this.tabs[0],
                  { emitEvents: !1 },
                ),
                i.unobserve(r[0].target));
            }).observe(this.tabGroup);
          });
      });
  }
  disconnectedCallback() {
    var e, t;
    super.disconnectedCallback(),
      (e = this.mutationObserver) == null || e.disconnect(),
      this.nav && ((t = this.resizeObserver) == null || t.unobserve(this.nav));
  }
  getAllTabs() {
    return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements();
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter(
      (e) => e.tagName.toLowerCase() === "sl-tab-panel",
    );
  }
  getActiveTab() {
    return this.tabs.find((e) => e.active);
  }
  handleClick(e) {
    const r = e.target.closest("sl-tab");
    (r == null ? void 0 : r.closest("sl-tab-group")) === this &&
      r !== null &&
      this.setActiveTab(r, { scrollBehavior: "smooth" });
  }
  handleKeyDown(e) {
    const r = e.target.closest("sl-tab");
    if (
      (r == null ? void 0 : r.closest("sl-tab-group")) === this &&
      (["Enter", " "].includes(e.key) &&
        r !== null &&
        (this.setActiveTab(r, { scrollBehavior: "smooth" }),
        e.preventDefault()),
      [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key))
    ) {
      const s = this.tabs.find((n) => n.matches(":focus")),
        o = this.localize.dir() === "rtl";
      let a = null;
      if ((s == null ? void 0 : s.tagName.toLowerCase()) === "sl-tab") {
        if (e.key === "Home") a = this.focusableTabs[0];
        else if (e.key === "End")
          a = this.focusableTabs[this.focusableTabs.length - 1];
        else if (
          (["top", "bottom"].includes(this.placement) &&
            e.key === (o ? "ArrowRight" : "ArrowLeft")) ||
          (["start", "end"].includes(this.placement) && e.key === "ArrowUp")
        ) {
          const n = this.tabs.findIndex((l) => l === s);
          a = this.findNextFocusableTab(n, "backward");
        } else if (
          (["top", "bottom"].includes(this.placement) &&
            e.key === (o ? "ArrowLeft" : "ArrowRight")) ||
          (["start", "end"].includes(this.placement) && e.key === "ArrowDown")
        ) {
          const n = this.tabs.findIndex((l) => l === s);
          a = this.findNextFocusableTab(n, "forward");
        }
        if (!a) return;
        (a.tabIndex = 0),
          a.focus({ preventScroll: !0 }),
          this.activation === "auto"
            ? this.setActiveTab(a, { scrollBehavior: "smooth" })
            : this.tabs.forEach((n) => {
                n.tabIndex = n === a ? 0 : -1;
              }),
          ["top", "bottom"].includes(this.placement) &&
            fa(a, this.nav, "horizontal"),
          e.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left:
        this.localize.dir() === "rtl"
          ? this.nav.scrollLeft + this.nav.clientWidth
          : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth",
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left:
        this.localize.dir() === "rtl"
          ? this.nav.scrollLeft - this.nav.clientWidth
          : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth",
    });
  }
  setActiveTab(e, t) {
    if (
      ((t = ir({ emitEvents: !0, scrollBehavior: "auto" }, t)),
      e !== this.activeTab && !e.disabled)
    ) {
      const r = this.activeTab;
      (this.activeTab = e),
        this.tabs.forEach((i) => {
          (i.active = i === this.activeTab),
            (i.tabIndex = i === this.activeTab ? 0 : -1);
        }),
        this.panels.forEach((i) => {
          var s;
          return (i.active =
            i.name === ((s = this.activeTab) == null ? void 0 : s.panel));
        }),
        this.syncIndicator(),
        ["top", "bottom"].includes(this.placement) &&
          fa(this.activeTab, this.nav, "horizontal", t.scrollBehavior),
        t.emitEvents &&
          (r && this.emit("sl-tab-hide", { detail: { name: r.panel } }),
          this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } }));
    }
  }
  setAriaLabels() {
    this.tabs.forEach((e) => {
      const t = this.panels.find((r) => r.name === e.panel);
      t &&
        (e.setAttribute("aria-controls", t.getAttribute("id")),
        t.setAttribute("aria-labelledby", e.getAttribute("id")));
    });
  }
  repositionIndicator() {
    const e = this.getActiveTab();
    if (!e) return;
    const t = e.clientWidth,
      r = e.clientHeight,
      i = this.localize.dir() === "rtl",
      s = this.getAllTabs(),
      a = s.slice(0, s.indexOf(e)).reduce(
        (n, l) => ({
          left: n.left + l.clientWidth,
          top: n.top + l.clientHeight,
        }),
        { left: 0, top: 0 },
      );
    switch (this.placement) {
      case "top":
      case "bottom":
        (this.indicator.style.width = `${t}px`),
          (this.indicator.style.height = "auto"),
          (this.indicator.style.translate = i
            ? `${-1 * a.left}px`
            : `${a.left}px`);
        break;
      case "start":
      case "end":
        (this.indicator.style.width = "auto"),
          (this.indicator.style.height = `${r}px`),
          (this.indicator.style.translate = `0 ${a.top}px`);
        break;
    }
  }
  syncTabsAndPanels() {
    (this.tabs = this.getAllTabs()),
      (this.focusableTabs = this.tabs.filter((e) => !e.disabled)),
      (this.panels = this.getAllPanels()),
      this.syncIndicator(),
      this.updateComplete.then(() => this.updateScrollControls());
  }
  findNextFocusableTab(e, t) {
    let r = null;
    const i = t === "forward" ? 1 : -1;
    let s = e + i;
    for (; e < this.tabs.length; ) {
      if (((r = this.tabs[s] || null), r === null)) {
        t === "forward"
          ? (r = this.focusableTabs[0])
          : (r = this.focusableTabs[this.focusableTabs.length - 1]);
        break;
      }
      if (!r.disabled) break;
      s += i;
    }
    return r;
  }
  updateScrollButtons() {
    this.hasScrollControls &&
      !this.fixedScrollControls &&
      ((this.shouldHideScrollStartButton =
        this.scrollFromStart() <= this.scrollOffset),
      (this.shouldHideScrollEndButton = this.isScrolledToEnd()));
  }
  isScrolledToEnd() {
    return (
      this.scrollFromStart() + this.nav.clientWidth >=
      this.nav.scrollWidth - this.scrollOffset
    );
  }
  scrollFromStart() {
    return this.localize.dir() === "rtl"
      ? -this.nav.scrollLeft
      : this.nav.scrollLeft;
  }
  updateScrollControls() {
    this.noScrollControls
      ? (this.hasScrollControls = !1)
      : (this.hasScrollControls =
          ["top", "bottom"].includes(this.placement) &&
          this.nav.scrollWidth > this.nav.clientWidth + 1),
      this.updateScrollButtons();
  }
  syncIndicator() {
    this.getActiveTab()
      ? ((this.indicator.style.display = "block"), this.repositionIndicator())
      : (this.indicator.style.display = "none");
  }
  show(e) {
    const t = this.tabs.find((r) => r.panel === e);
    t && this.setActiveTab(t, { scrollBehavior: "smooth" });
  }
  render() {
    const e = this.localize.dir() === "rtl";
    return $`
      <div
        part="base"
        class=${V({ "tab-group": !0, "tab-group--top": this.placement === "top", "tab-group--bottom": this.placement === "bottom", "tab-group--start": this.placement === "start", "tab-group--end": this.placement === "end", "tab-group--rtl": this.localize.dir() === "rtl", "tab-group--has-scroll-controls": this.hasScrollControls })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${
            this.hasScrollControls
              ? $`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${V({ "tab-group__scroll-button": !0, "tab-group__scroll-button--start": !0, "tab-group__scroll-button--start--hidden": this.shouldHideScrollStartButton })}
                  name=${e ? "chevron-right" : "chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `
              : ""
          }

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${
            this.hasScrollControls
              ? $`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${V({ "tab-group__scroll-button": !0, "tab-group__scroll-button--end": !0, "tab-group__scroll-button--end--hidden": this.shouldHideScrollEndButton })}
                  name=${e ? "chevron-left" : "chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `
              : ""
          }
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
Oe.styles = [U, Ih];
Oe.dependencies = { "sl-icon-button": $e, "sl-resize-observer": Pi };
c([P(".tab-group")], Oe.prototype, "tabGroup", 2);
c([P(".tab-group__body")], Oe.prototype, "body", 2);
c([P(".tab-group__nav")], Oe.prototype, "nav", 2);
c([P(".tab-group__indicator")], Oe.prototype, "indicator", 2);
c([H()], Oe.prototype, "hasScrollControls", 2);
c([H()], Oe.prototype, "shouldHideScrollStartButton", 2);
c([H()], Oe.prototype, "shouldHideScrollEndButton", 2);
c([h()], Oe.prototype, "placement", 2);
c([h()], Oe.prototype, "activation", 2);
c(
  [h({ attribute: "no-scroll-controls", type: Boolean })],
  Oe.prototype,
  "noScrollControls",
  2,
);
c(
  [h({ attribute: "fixed-scroll-controls", type: Boolean })],
  Oe.prototype,
  "fixedScrollControls",
  2,
);
c([Ss({ passive: !0 })], Oe.prototype, "updateScrollButtons", 1);
c(
  [R("noScrollControls", { waitUntilFirstUpdate: !0 })],
  Oe.prototype,
  "updateScrollControls",
  1,
);
c(
  [R("placement", { waitUntilFirstUpdate: !0 })],
  Oe.prototype,
  "syncIndicator",
  1,
);
var Xh = "sl-tab-group";
Oe.define("sl-tab-group");
D({
  tagName: Xh,
  elementClass: Oe,
  react: F,
  events: { onSlTabShow: "sl-tab-show", onSlTabHide: "sl-tab-hide" },
  displayName: "SlTabGroup",
});
var Jh = M`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,
  Zh = 0,
  Ii = class extends N {
    constructor() {
      super(...arguments),
        (this.attrId = ++Zh),
        (this.componentId = `sl-tab-panel-${this.attrId}`),
        (this.name = ""),
        (this.active = !1);
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.id = this.id.length > 0 ? this.id : this.componentId),
        this.setAttribute("role", "tabpanel");
    }
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    render() {
      return $`
      <slot
        part="base"
        class=${V({ "tab-panel": !0, "tab-panel--active": this.active })}
      ></slot>
    `;
    }
  };
Ii.styles = [U, Jh];
c([h({ reflect: !0 })], Ii.prototype, "name", 2);
c([h({ type: Boolean, reflect: !0 })], Ii.prototype, "active", 2);
c([R("active")], Ii.prototype, "handleActiveChange", 1);
var ep = "sl-tab-panel";
Ii.define("sl-tab-panel");
D({
  tagName: ep,
  elementClass: Ii,
  react: F,
  events: {},
  displayName: "SlTabPanel",
});
var tp = M`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,
  ar = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.variant = "neutral"),
        (this.size = "medium"),
        (this.pill = !1),
        (this.removable = !1);
    }
    handleRemoveClick() {
      this.emit("sl-remove");
    }
    render() {
      return $`
      <span
        part="base"
        class=${V({ tag: !0, "tag--primary": this.variant === "primary", "tag--success": this.variant === "success", "tag--neutral": this.variant === "neutral", "tag--warning": this.variant === "warning", "tag--danger": this.variant === "danger", "tag--text": this.variant === "text", "tag--small": this.size === "small", "tag--medium": this.size === "medium", "tag--large": this.size === "large", "tag--pill": this.pill, "tag--removable": this.removable })}
      >
        <slot part="content" class="tag__content"></slot>

        ${
          this.removable
            ? $`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `
            : ""
        }
      </span>
    `;
    }
  };
ar.styles = [U, tp];
ar.dependencies = { "sl-icon-button": $e };
c([h({ reflect: !0 })], ar.prototype, "variant", 2);
c([h({ reflect: !0 })], ar.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], ar.prototype, "pill", 2);
c([h({ type: Boolean })], ar.prototype, "removable", 2);
var rp = "sl-tag";
ar.define("sl-tag");
var ip = D({
    tagName: rp,
    elementClass: ar,
    react: F,
    events: { onSlRemove: "sl-remove" },
    displayName: "SlTag",
  }),
  sp = ip,
  op = M`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,
  ap = M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const xr = Math.min,
  at = Math.max,
  lo = Math.round,
  Vs = Math.floor,
  Vt = (e) => ({ x: e, y: e }),
  np = { left: "right", right: "left", bottom: "top", top: "bottom" },
  lp = { start: "end", end: "start" };
function ba(e, t, r) {
  return at(e, xr(t, r));
}
function Oi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kr(e) {
  return e.split("-")[0];
}
function Li(e) {
  return e.split("-")[1];
}
function cd(e) {
  return e === "x" ? "y" : "x";
}
function dn(e) {
  return e === "y" ? "height" : "width";
}
function Yr(e) {
  return ["top", "bottom"].includes(kr(e)) ? "y" : "x";
}
function un(e) {
  return cd(Yr(e));
}
function cp(e, t, r) {
  r === void 0 && (r = !1);
  const i = Li(e),
    s = un(e),
    o = dn(s);
  let a =
    s === "x"
      ? i === (r ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
        ? "bottom"
        : "top";
  return t.reference[o] > t.floating[o] && (a = co(a)), [a, co(a)];
}
function dp(e) {
  const t = co(e);
  return [va(e), t, va(t)];
}
function va(e) {
  return e.replace(/start|end/g, (t) => lp[t]);
}
function up(e, t, r) {
  const i = ["left", "right"],
    s = ["right", "left"],
    o = ["top", "bottom"],
    a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? s : i) : t ? i : s;
    case "left":
    case "right":
      return t ? o : a;
    default:
      return [];
  }
}
function hp(e, t, r, i) {
  const s = Li(e);
  let o = up(kr(e), r === "start", i);
  return (
    s && ((o = o.map((a) => a + "-" + s)), t && (o = o.concat(o.map(va)))), o
  );
}
function co(e) {
  return e.replace(/left|right|bottom|top/g, (t) => np[t]);
}
function pp(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function dd(e) {
  return typeof e != "number"
    ? pp(e)
    : { top: e, right: e, bottom: e, left: e };
}
function uo(e) {
  const { x: t, y: r, width: i, height: s } = e;
  return {
    width: i,
    height: s,
    top: r,
    left: t,
    right: t + i,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function hl(e, t, r) {
  let { reference: i, floating: s } = e;
  const o = Yr(t),
    a = un(t),
    n = dn(a),
    l = kr(t),
    d = o === "y",
    p = i.x + i.width / 2 - s.width / 2,
    u = i.y + i.height / 2 - s.height / 2,
    f = i[n] / 2 - s[n] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: p, y: i.y - s.height };
      break;
    case "bottom":
      m = { x: p, y: i.y + i.height };
      break;
    case "right":
      m = { x: i.x + i.width, y: u };
      break;
    case "left":
      m = { x: i.x - s.width, y: u };
      break;
    default:
      m = { x: i.x, y: i.y };
  }
  switch (Li(t)) {
    case "start":
      m[a] -= f * (r && d ? -1 : 1);
      break;
    case "end":
      m[a] += f * (r && d ? -1 : 1);
      break;
  }
  return m;
}
const fp = async (e, t, r) => {
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: o = [],
      platform: a,
    } = r,
    n = o.filter(Boolean),
    l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: p, y: u } = hl(d, i, l),
    f = i,
    m = {},
    g = 0;
  for (let b = 0; b < n.length; b++) {
    const { name: w, fn: _ } = n[b],
      {
        x: y,
        y: C,
        data: x,
        reset: S,
      } = await _({
        x: p,
        y: u,
        initialPlacement: i,
        placement: f,
        strategy: s,
        middlewareData: m,
        rects: d,
        platform: a,
        elements: { reference: e, floating: t },
      });
    (p = y ?? p),
      (u = C ?? u),
      (m = { ...m, [w]: { ...m[w], ...x } }),
      S &&
        g <= 50 &&
        (g++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (d =
              S.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: p, y: u } = hl(d, f, l))),
        (b = -1));
  }
  return { x: p, y: u, placement: f, strategy: s, middlewareData: m };
};
async function hn(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: i, y: s, platform: o, rects: a, elements: n, strategy: l } = e,
    {
      boundary: d = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: u = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = Oi(t, e),
    g = dd(m),
    w = n[f ? (u === "floating" ? "reference" : "floating") : u],
    _ = uo(
      await o.getClippingRect({
        element:
          (r = await (o.isElement == null ? void 0 : o.isElement(w))) == null ||
          r
            ? w
            : w.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(n.floating))),
        boundary: d,
        rootBoundary: p,
        strategy: l,
      }),
    ),
    y =
      u === "floating"
        ? { x: i, y: s, width: a.floating.width, height: a.floating.height }
        : a.reference,
    C = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(n.floating)),
    x = (await (o.isElement == null ? void 0 : o.isElement(C)))
      ? (await (o.getScale == null ? void 0 : o.getScale(C))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = uo(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: n,
            rect: y,
            offsetParent: C,
            strategy: l,
          })
        : y,
    );
  return {
    top: (_.top - S.top + g.top) / x.y,
    bottom: (S.bottom - _.bottom + g.bottom) / x.y,
    left: (_.left - S.left + g.left) / x.x,
    right: (S.right - _.right + g.right) / x.x,
  };
}
const mp = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: i,
          placement: s,
          rects: o,
          platform: a,
          elements: n,
          middlewareData: l,
        } = t,
        { element: d, padding: p = 0 } = Oi(e, t) || {};
      if (d == null) return {};
      const u = dd(p),
        f = { x: r, y: i },
        m = un(s),
        g = dn(m),
        b = await a.getDimensions(d),
        w = m === "y",
        _ = w ? "top" : "left",
        y = w ? "bottom" : "right",
        C = w ? "clientHeight" : "clientWidth",
        x = o.reference[g] + o.reference[m] - f[m] - o.floating[g],
        S = f[m] - o.reference[m],
        A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
      let T = A ? A[C] : 0;
      (!T || !(await (a.isElement == null ? void 0 : a.isElement(A)))) &&
        (T = n.floating[C] || o.floating[g]);
      const I = x / 2 - S / 2,
        E = T / 2 - b[g] / 2 - 1,
        z = xr(u[_], E),
        B = xr(u[y], E),
        W = z,
        Be = T - b[g] - B,
        ke = T / 2 - b[g] / 2 + I,
        kt = ba(W, ke, Be),
        Lt =
          !l.arrow &&
          Li(s) != null &&
          ke !== kt &&
          o.reference[g] / 2 - (ke < W ? z : B) - b[g] / 2 < 0,
        Nt = Lt ? (ke < W ? ke - W : ke - Be) : 0;
      return {
        [m]: f[m] + Nt,
        data: {
          [m]: kt,
          centerOffset: ke - kt - Nt,
          ...(Lt && { alignmentOffset: Nt }),
        },
        reset: Lt,
      };
    },
  }),
  gp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, i;
          const {
              placement: s,
              middlewareData: o,
              rects: a,
              initialPlacement: n,
              platform: l,
              elements: d,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: u = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: b = !0,
              ...w
            } = Oi(e, t);
          if ((r = o.arrow) != null && r.alignmentOffset) return {};
          const _ = kr(s),
            y = Yr(n),
            C = kr(n) === n,
            x = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
            S = f || (C || !b ? [co(n)] : dp(n)),
            A = g !== "none";
          !f && A && S.push(...hp(n, b, g, x));
          const T = [n, ...S],
            I = await hn(t, w),
            E = [];
          let z = ((i = o.flip) == null ? void 0 : i.overflows) || [];
          if ((p && E.push(I[_]), u)) {
            const ke = cp(s, a, x);
            E.push(I[ke[0]], I[ke[1]]);
          }
          if (
            ((z = [...z, { placement: s, overflows: E }]),
            !E.every((ke) => ke <= 0))
          ) {
            var B, W;
            const ke = (((B = o.flip) == null ? void 0 : B.index) || 0) + 1,
              kt = T[ke];
            if (kt)
              return {
                data: { index: ke, overflows: z },
                reset: { placement: kt },
              };
            let Lt =
              (W = z
                .filter((Nt) => Nt.overflows[0] <= 0)
                .sort((Nt, lr) => Nt.overflows[1] - lr.overflows[1])[0]) == null
                ? void 0
                : W.placement;
            if (!Lt)
              switch (m) {
                case "bestFit": {
                  var Be;
                  const Nt =
                    (Be = z
                      .filter((lr) => {
                        if (A) {
                          const cr = Yr(lr.placement);
                          return cr === y || cr === "y";
                        }
                        return !0;
                      })
                      .map((lr) => [
                        lr.placement,
                        lr.overflows
                          .filter((cr) => cr > 0)
                          .reduce((cr, vu) => cr + vu, 0),
                      ])
                      .sort((lr, cr) => lr[1] - cr[1])[0]) == null
                      ? void 0
                      : Be[0];
                  Nt && (Lt = Nt);
                  break;
                }
                case "initialPlacement":
                  Lt = n;
                  break;
              }
            if (s !== Lt) return { reset: { placement: Lt } };
          }
          return {};
        },
      }
    );
  };
async function bp(e, t) {
  const { placement: r, platform: i, elements: s } = e,
    o = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)),
    a = kr(r),
    n = Li(r),
    l = Yr(r) === "y",
    d = ["left", "top"].includes(a) ? -1 : 1,
    p = o && l ? -1 : 1,
    u = Oi(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: g,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis,
      };
  return (
    n && typeof g == "number" && (m = n === "end" ? g * -1 : g),
    l ? { x: m * p, y: f * d } : { x: f * d, y: m * p }
  );
}
const vp = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, i;
          const { x: s, y: o, placement: a, middlewareData: n } = t,
            l = await bp(t, e);
          return a === ((r = n.offset) == null ? void 0 : r.placement) &&
            (i = n.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: s + l.x, y: o + l.y, data: { ...l, placement: a } };
        },
      }
    );
  },
  yp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: i, placement: s } = t,
            {
              mainAxis: o = !0,
              crossAxis: a = !1,
              limiter: n = {
                fn: (w) => {
                  let { x: _, y } = w;
                  return { x: _, y };
                },
              },
              ...l
            } = Oi(e, t),
            d = { x: r, y: i },
            p = await hn(t, l),
            u = Yr(kr(s)),
            f = cd(u);
          let m = d[f],
            g = d[u];
          if (o) {
            const w = f === "y" ? "top" : "left",
              _ = f === "y" ? "bottom" : "right",
              y = m + p[w],
              C = m - p[_];
            m = ba(y, m, C);
          }
          if (a) {
            const w = u === "y" ? "top" : "left",
              _ = u === "y" ? "bottom" : "right",
              y = g + p[w],
              C = g - p[_];
            g = ba(y, g, C);
          }
          const b = n.fn({ ...t, [f]: m, [u]: g });
          return {
            ...b,
            data: { x: b.x - r, y: b.y - i, enabled: { [f]: o, [u]: a } },
          };
        },
      }
    );
  },
  _p = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, i;
          const { placement: s, rects: o, platform: a, elements: n } = t,
            { apply: l = () => {}, ...d } = Oi(e, t),
            p = await hn(t, d),
            u = kr(s),
            f = Li(s),
            m = Yr(s) === "y",
            { width: g, height: b } = o.floating;
          let w, _;
          u === "top" || u === "bottom"
            ? ((w = u),
              (_ =
                f ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(n.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((_ = u), (w = f === "end" ? "top" : "bottom"));
          const y = b - p.top - p.bottom,
            C = g - p.left - p.right,
            x = xr(b - p[w], y),
            S = xr(g - p[_], C),
            A = !t.middlewareData.shift;
          let T = x,
            I = S;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (I = C),
            (i = t.middlewareData.shift) != null && i.enabled.y && (T = y),
            A && !f)
          ) {
            const z = at(p.left, 0),
              B = at(p.right, 0),
              W = at(p.top, 0),
              Be = at(p.bottom, 0);
            m
              ? (I = g - 2 * (z !== 0 || B !== 0 ? z + B : at(p.left, p.right)))
              : (T =
                  b - 2 * (W !== 0 || Be !== 0 ? W + Be : at(p.top, p.bottom)));
          }
          await l({ ...t, availableWidth: I, availableHeight: T });
          const E = await a.getDimensions(n.floating);
          return g !== E.width || b !== E.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ko() {
  return typeof window < "u";
}
function Ni(e) {
  return ud(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ct(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Wt(e) {
  var t;
  return (t = (ud(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ud(e) {
  return ko() ? e instanceof Node || e instanceof ct(e).Node : !1;
}
function At(e) {
  return ko() ? e instanceof Element || e instanceof ct(e).Element : !1;
}
function Ut(e) {
  return ko() ? e instanceof HTMLElement || e instanceof ct(e).HTMLElement : !1;
}
function pl(e) {
  return !ko() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot;
}
function Rs(e) {
  const { overflow: t, overflowX: r, overflowY: i, display: s } = Rt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + i + r) &&
    !["inline", "contents"].includes(s)
  );
}
function wp(e) {
  return ["table", "td", "th"].includes(Ni(e));
}
function Co(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function So(e) {
  const t = pn(),
    r = At(e) ? Rt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((i) =>
      r[i] ? r[i] !== "none" : !1,
    ) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (i) => (r.willChange || "").includes(i),
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (r.contain || "").includes(i),
    )
  );
}
function xp(e) {
  let t = Cr(e);
  for (; Ut(t) && !Ri(t); ) {
    if (So(t)) return t;
    if (Co(t)) return null;
    t = Cr(t);
  }
  return null;
}
function pn() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ri(e) {
  return ["html", "body", "#document"].includes(Ni(e));
}
function Rt(e) {
  return ct(e).getComputedStyle(e);
}
function $o(e) {
  return At(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Cr(e) {
  if (Ni(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (pl(e) && e.host) || Wt(e);
  return pl(t) ? t.host : t;
}
function hd(e) {
  const t = Cr(e);
  return Ri(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ut(t) && Rs(t)
      ? t
      : hd(t);
}
function ms(e, t, r) {
  var i;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = hd(e),
    o = s === ((i = e.ownerDocument) == null ? void 0 : i.body),
    a = ct(s);
  if (o) {
    const n = ya(a);
    return t.concat(
      a,
      a.visualViewport || [],
      Rs(s) ? s : [],
      n && r ? ms(n) : [],
    );
  }
  return t.concat(s, ms(s, [], r));
}
function ya(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pd(e) {
  const t = Rt(e);
  let r = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const s = Ut(e),
    o = s ? e.offsetWidth : r,
    a = s ? e.offsetHeight : i,
    n = lo(r) !== o || lo(i) !== a;
  return n && ((r = o), (i = a)), { width: r, height: i, $: n };
}
function fn(e) {
  return At(e) ? e : e.contextElement;
}
function li(e) {
  const t = fn(e);
  if (!Ut(t)) return Vt(1);
  const r = t.getBoundingClientRect(),
    { width: i, height: s, $: o } = pd(t);
  let a = (o ? lo(r.width) : r.width) / i,
    n = (o ? lo(r.height) : r.height) / s;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!n || !Number.isFinite(n)) && (n = 1),
    { x: a, y: n }
  );
}
const kp = Vt(0);
function fd(e) {
  const t = ct(e);
  return !pn() || !t.visualViewport
    ? kp
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Cp(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== ct(e)) ? !1 : t;
}
function Xr(e, t, r, i) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(),
    o = fn(e);
  let a = Vt(1);
  t && (i ? At(i) && (a = li(i)) : (a = li(e)));
  const n = Cp(o, r, i) ? fd(o) : Vt(0);
  let l = (s.left + n.x) / a.x,
    d = (s.top + n.y) / a.y,
    p = s.width / a.x,
    u = s.height / a.y;
  if (o) {
    const f = ct(o),
      m = i && At(i) ? ct(i) : i;
    let g = f,
      b = ya(g);
    for (; b && i && m !== g; ) {
      const w = li(b),
        _ = b.getBoundingClientRect(),
        y = Rt(b),
        C = _.left + (b.clientLeft + parseFloat(y.paddingLeft)) * w.x,
        x = _.top + (b.clientTop + parseFloat(y.paddingTop)) * w.y;
      (l *= w.x),
        (d *= w.y),
        (p *= w.x),
        (u *= w.y),
        (l += C),
        (d += x),
        (g = ct(b)),
        (b = ya(g));
    }
  }
  return uo({ width: p, height: u, x: l, y: d });
}
function mn(e, t) {
  const r = $o(e).scrollLeft;
  return t ? t.left + r : Xr(Wt(e)).left + r;
}
function md(e, t, r) {
  r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(),
    s = i.left + t.scrollLeft - (r ? 0 : mn(e, i)),
    o = i.top + t.scrollTop;
  return { x: s, y: o };
}
function Sp(e) {
  let { elements: t, rect: r, offsetParent: i, strategy: s } = e;
  const o = s === "fixed",
    a = Wt(i),
    n = t ? Co(t.floating) : !1;
  if (i === a || (n && o)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    d = Vt(1);
  const p = Vt(0),
    u = Ut(i);
  if (
    (u || (!u && !o)) &&
    ((Ni(i) !== "body" || Rs(a)) && (l = $o(i)), Ut(i))
  ) {
    const m = Xr(i);
    (d = li(i)), (p.x = m.x + i.clientLeft), (p.y = m.y + i.clientTop);
  }
  const f = a && !u && !o ? md(a, l, !0) : Vt(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - l.scrollLeft * d.x + p.x + f.x,
    y: r.y * d.y - l.scrollTop * d.y + p.y + f.y,
  };
}
function $p(e) {
  return Array.from(e.getClientRects());
}
function Ep(e) {
  const t = Wt(e),
    r = $o(e),
    i = e.ownerDocument.body,
    s = at(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    o = at(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let a = -r.scrollLeft + mn(e);
  const n = -r.scrollTop;
  return (
    Rt(i).direction === "rtl" && (a += at(t.clientWidth, i.clientWidth) - s),
    { width: s, height: o, x: a, y: n }
  );
}
function Ap(e, t) {
  const r = ct(e),
    i = Wt(e),
    s = r.visualViewport;
  let o = i.clientWidth,
    a = i.clientHeight,
    n = 0,
    l = 0;
  if (s) {
    (o = s.width), (a = s.height);
    const d = pn();
    (!d || (d && t === "fixed")) && ((n = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: o, height: a, x: n, y: l };
}
function Rp(e, t) {
  const r = Xr(e, !0, t === "fixed"),
    i = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    o = Ut(e) ? li(e) : Vt(1),
    a = e.clientWidth * o.x,
    n = e.clientHeight * o.y,
    l = s * o.x,
    d = i * o.y;
  return { width: a, height: n, x: l, y: d };
}
function fl(e, t, r) {
  let i;
  if (t === "viewport") i = Ap(e, r);
  else if (t === "document") i = Ep(Wt(e));
  else if (At(t)) i = Rp(t, r);
  else {
    const s = fd(e);
    i = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return uo(i);
}
function gd(e, t) {
  const r = Cr(e);
  return r === t || !At(r) || Ri(r)
    ? !1
    : Rt(r).position === "fixed" || gd(r, t);
}
function zp(e, t) {
  const r = t.get(e);
  if (r) return r;
  let i = ms(e, [], !1).filter((n) => At(n) && Ni(n) !== "body"),
    s = null;
  const o = Rt(e).position === "fixed";
  let a = o ? Cr(e) : e;
  for (; At(a) && !Ri(a); ) {
    const n = Rt(a),
      l = So(a);
    !l && n.position === "fixed" && (s = null),
      (
        o
          ? !l && !s
          : (!l &&
              n.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Rs(a) && !l && gd(e, a))
      )
        ? (i = i.filter((p) => p !== a))
        : (s = n),
      (a = Cr(a));
  }
  return t.set(e, i), i;
}
function Tp(e) {
  let { element: t, boundary: r, rootBoundary: i, strategy: s } = e;
  const a = [
      ...(r === "clippingAncestors"
        ? Co(t)
          ? []
          : zp(t, this._c)
        : [].concat(r)),
      i,
    ],
    n = a[0],
    l = a.reduce(
      (d, p) => {
        const u = fl(t, p, s);
        return (
          (d.top = at(u.top, d.top)),
          (d.right = xr(u.right, d.right)),
          (d.bottom = xr(u.bottom, d.bottom)),
          (d.left = at(u.left, d.left)),
          d
        );
      },
      fl(t, n, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Pp(e) {
  const { width: t, height: r } = pd(e);
  return { width: t, height: r };
}
function Ip(e, t, r) {
  const i = Ut(t),
    s = Wt(t),
    o = r === "fixed",
    a = Xr(e, !0, o, t);
  let n = { scrollLeft: 0, scrollTop: 0 };
  const l = Vt(0);
  if (i || (!i && !o))
    if (((Ni(t) !== "body" || Rs(s)) && (n = $o(t)), i)) {
      const f = Xr(t, !0, o, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else s && (l.x = mn(s));
  const d = s && !i && !o ? md(s, n) : Vt(0),
    p = a.left + n.scrollLeft - l.x - d.x,
    u = a.top + n.scrollTop - l.y - d.y;
  return { x: p, y: u, width: a.width, height: a.height };
}
function Uo(e) {
  return Rt(e).position === "static";
}
function ml(e, t) {
  if (!Ut(e) || Rt(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Wt(e) === r && (r = r.ownerDocument.body), r;
}
function bd(e, t) {
  const r = ct(e);
  if (Co(e)) return r;
  if (!Ut(e)) {
    let s = Cr(e);
    for (; s && !Ri(s); ) {
      if (At(s) && !Uo(s)) return s;
      s = Cr(s);
    }
    return r;
  }
  let i = ml(e, t);
  for (; i && wp(i) && Uo(i); ) i = ml(i, t);
  return i && Ri(i) && Uo(i) && !So(i) ? r : i || xp(e) || r;
}
const Op = async function (e) {
  const t = this.getOffsetParent || bd,
    r = this.getDimensions,
    i = await r(e.floating);
  return {
    reference: Ip(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function Lp(e) {
  return Rt(e).direction === "rtl";
}
const Zs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sp,
  getDocumentElement: Wt,
  getClippingRect: Tp,
  getOffsetParent: bd,
  getElementRects: Op,
  getClientRects: $p,
  getDimensions: Pp,
  getScale: li,
  isElement: At,
  isRTL: Lp,
};
function vd(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Np(e, t) {
  let r = null,
    i;
  const s = Wt(e);
  function o() {
    var n;
    clearTimeout(i), (n = r) == null || n.disconnect(), (r = null);
  }
  function a(n, l) {
    n === void 0 && (n = !1), l === void 0 && (l = 1), o();
    const d = e.getBoundingClientRect(),
      { left: p, top: u, width: f, height: m } = d;
    if ((n || t(), !f || !m)) return;
    const g = Vs(u),
      b = Vs(s.clientWidth - (p + f)),
      w = Vs(s.clientHeight - (u + m)),
      _ = Vs(p),
      C = {
        rootMargin: -g + "px " + -b + "px " + -w + "px " + -_ + "px",
        threshold: at(0, xr(1, l)) || 1,
      };
    let x = !0;
    function S(A) {
      const T = A[0].intersectionRatio;
      if (T !== l) {
        if (!x) return a();
        T
          ? a(!1, T)
          : (i = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      T === 1 && !vd(d, e.getBoundingClientRect()) && a(), (x = !1);
    }
    try {
      r = new IntersectionObserver(S, { ...C, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, C);
    }
    r.observe(e);
  }
  return a(!0), o;
}
function Fp(e, t, r, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: o = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: n = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = i,
    d = fn(e),
    p = s || o ? [...(d ? ms(d) : []), ...ms(t)] : [];
  p.forEach((_) => {
    s && _.addEventListener("scroll", r, { passive: !0 }),
      o && _.addEventListener("resize", r);
  });
  const u = d && n ? Np(d, r) : null;
  let f = -1,
    m = null;
  a &&
    ((m = new ResizeObserver((_) => {
      let [y] = _;
      y &&
        y.target === d &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var C;
          (C = m) == null || C.observe(t);
        }))),
        r();
    })),
    d && !l && m.observe(d),
    m.observe(t));
  let g,
    b = l ? Xr(e) : null;
  l && w();
  function w() {
    const _ = Xr(e);
    b && !vd(b, _) && r(), (b = _), (g = requestAnimationFrame(w));
  }
  return (
    r(),
    () => {
      var _;
      p.forEach((y) => {
        s && y.removeEventListener("scroll", r),
          o && y.removeEventListener("resize", r);
      }),
        u == null || u(),
        (_ = m) == null || _.disconnect(),
        (m = null),
        l && cancelAnimationFrame(g);
    }
  );
}
const Dp = vp,
  Mp = yp,
  Hp = gp,
  gl = _p,
  Bp = mp,
  Vp = (e, t, r) => {
    const i = new Map(),
      s = { platform: Zs, ...r },
      o = { ...s.platform, _c: i };
    return fp(e, t, { ...s, platform: o });
  };
function Up(e) {
  return qp(e);
}
function qo(e) {
  return e.assignedSlot
    ? e.assignedSlot
    : e.parentNode instanceof ShadowRoot
      ? e.parentNode.host
      : e.parentNode;
}
function qp(e) {
  for (let t = e; t; t = qo(t))
    if (t instanceof Element && getComputedStyle(t).display === "none")
      return null;
  for (let t = qo(e); t; t = qo(t)) {
    if (!(t instanceof Element)) continue;
    const r = getComputedStyle(t);
    if (
      r.display !== "contents" &&
      (r.position !== "static" || So(r) || t.tagName === "BODY")
    )
      return t;
  }
  return null;
}
function jp(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "getBoundingClientRect" in e &&
    ("contextElement" in e ? e instanceof Element : !0)
  );
}
var re = class extends N {
  constructor() {
    super(...arguments),
      (this.localize = new te(this)),
      (this.active = !1),
      (this.placement = "top"),
      (this.strategy = "absolute"),
      (this.distance = 0),
      (this.skidding = 0),
      (this.arrow = !1),
      (this.arrowPlacement = "anchor"),
      (this.arrowPadding = 10),
      (this.flip = !1),
      (this.flipFallbackPlacements = ""),
      (this.flipFallbackStrategy = "best-fit"),
      (this.flipPadding = 0),
      (this.shift = !1),
      (this.shiftPadding = 0),
      (this.autoSizePadding = 0),
      (this.hoverBridge = !1),
      (this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const e = this.anchorEl.getBoundingClientRect(),
            t = this.popup.getBoundingClientRect(),
            r =
              this.placement.includes("top") ||
              this.placement.includes("bottom");
          let i = 0,
            s = 0,
            o = 0,
            a = 0,
            n = 0,
            l = 0,
            d = 0,
            p = 0;
          r
            ? e.top < t.top
              ? ((i = e.left),
                (s = e.bottom),
                (o = e.right),
                (a = e.bottom),
                (n = t.left),
                (l = t.top),
                (d = t.right),
                (p = t.top))
              : ((i = t.left),
                (s = t.bottom),
                (o = t.right),
                (a = t.bottom),
                (n = e.left),
                (l = e.top),
                (d = e.right),
                (p = e.top))
            : e.left < t.left
              ? ((i = e.right),
                (s = e.top),
                (o = t.left),
                (a = t.top),
                (n = e.right),
                (l = e.bottom),
                (d = t.left),
                (p = t.bottom))
              : ((i = t.right),
                (s = t.top),
                (o = e.left),
                (a = e.top),
                (n = t.right),
                (l = t.bottom),
                (d = e.left),
                (p = e.bottom)),
            this.style.setProperty("--hover-bridge-top-left-x", `${i}px`),
            this.style.setProperty("--hover-bridge-top-left-y", `${s}px`),
            this.style.setProperty("--hover-bridge-top-right-x", `${o}px`),
            this.style.setProperty("--hover-bridge-top-right-y", `${a}px`),
            this.style.setProperty("--hover-bridge-bottom-left-x", `${n}px`),
            this.style.setProperty("--hover-bridge-bottom-left-y", `${l}px`),
            this.style.setProperty("--hover-bridge-bottom-right-x", `${d}px`),
            this.style.setProperty("--hover-bridge-bottom-right-y", `${p}px`);
        }
      });
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(e) {
    super.updated(e),
      e.has("active") && (this.active ? this.start() : this.stop()),
      e.has("anchor") && this.handleAnchorChange(),
      this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if ((await this.stop(), this.anchor && typeof this.anchor == "string")) {
      const e = this.getRootNode();
      this.anchorEl = e.getElementById(this.anchor);
    } else
      this.anchor instanceof Element || jp(this.anchor)
        ? (this.anchorEl = this.anchor)
        : (this.anchorEl = this.querySelector('[slot="anchor"]'));
    this.anchorEl instanceof HTMLSlotElement &&
      (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]),
      this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl ||
      !this.active ||
      (this.cleanup = Fp(this.anchorEl, this.popup, () => {
        this.reposition();
      }));
  }
  async stop() {
    return new Promise((e) => {
      this.cleanup
        ? (this.cleanup(),
          (this.cleanup = void 0),
          this.removeAttribute("data-current-placement"),
          this.style.removeProperty("--auto-size-available-width"),
          this.style.removeProperty("--auto-size-available-height"),
          requestAnimationFrame(() => e()))
        : e();
    });
  }
  reposition() {
    if (!this.active || !this.anchorEl) return;
    const e = [Dp({ mainAxis: this.distance, crossAxis: this.skidding })];
    this.sync
      ? e.push(
          gl({
            apply: ({ rects: r }) => {
              const i = this.sync === "width" || this.sync === "both",
                s = this.sync === "height" || this.sync === "both";
              (this.popup.style.width = i ? `${r.reference.width}px` : ""),
                (this.popup.style.height = s ? `${r.reference.height}px` : "");
            },
          }),
        )
      : ((this.popup.style.width = ""), (this.popup.style.height = "")),
      this.flip &&
        e.push(
          Hp({
            boundary: this.flipBoundary,
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy:
              this.flipFallbackStrategy === "best-fit"
                ? "bestFit"
                : "initialPlacement",
            padding: this.flipPadding,
          }),
        ),
      this.shift &&
        e.push(
          Mp({ boundary: this.shiftBoundary, padding: this.shiftPadding }),
        ),
      this.autoSize
        ? e.push(
            gl({
              boundary: this.autoSizeBoundary,
              padding: this.autoSizePadding,
              apply: ({ availableWidth: r, availableHeight: i }) => {
                this.autoSize === "vertical" || this.autoSize === "both"
                  ? this.style.setProperty(
                      "--auto-size-available-height",
                      `${i}px`,
                    )
                  : this.style.removeProperty("--auto-size-available-height"),
                  this.autoSize === "horizontal" || this.autoSize === "both"
                    ? this.style.setProperty(
                        "--auto-size-available-width",
                        `${r}px`,
                      )
                    : this.style.removeProperty("--auto-size-available-width");
              },
            }),
          )
        : (this.style.removeProperty("--auto-size-available-width"),
          this.style.removeProperty("--auto-size-available-height")),
      this.arrow &&
        e.push(Bp({ element: this.arrowEl, padding: this.arrowPadding }));
    const t =
      this.strategy === "absolute"
        ? (r) => Zs.getOffsetParent(r, Up)
        : Zs.getOffsetParent;
    Vp(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: Cs(ir({}, Zs), { getOffsetParent: t }),
    }).then(({ x: r, y: i, middlewareData: s, placement: o }) => {
      const a = this.localize.dir() === "rtl",
        n = { top: "bottom", right: "left", bottom: "top", left: "right" }[
          o.split("-")[0]
        ];
      if (
        (this.setAttribute("data-current-placement", o),
        Object.assign(this.popup.style, { left: `${r}px`, top: `${i}px` }),
        this.arrow)
      ) {
        const l = s.arrow.x,
          d = s.arrow.y;
        let p = "",
          u = "",
          f = "",
          m = "";
        if (this.arrowPlacement === "start") {
          const g =
            typeof l == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : "";
          (p =
            typeof d == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : ""),
            (u = a ? g : ""),
            (m = a ? "" : g);
        } else if (this.arrowPlacement === "end") {
          const g =
            typeof l == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : "";
          (u = a ? "" : g),
            (m = a ? g : ""),
            (f =
              typeof d == "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "");
        } else
          this.arrowPlacement === "center"
            ? ((m =
                typeof l == "number"
                  ? "calc(50% - var(--arrow-size-diagonal))"
                  : ""),
              (p =
                typeof d == "number"
                  ? "calc(50% - var(--arrow-size-diagonal))"
                  : ""))
            : ((m = typeof l == "number" ? `${l}px` : ""),
              (p = typeof d == "number" ? `${d}px` : ""));
        Object.assign(this.arrowEl.style, {
          top: p,
          right: u,
          bottom: f,
          left: m,
          [n]: "calc(var(--arrow-size-diagonal) * -1)",
        });
      }
    }),
      requestAnimationFrame(() => this.updateHoverBridge()),
      this.emit("sl-reposition");
  }
  render() {
    return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${V({ "popup-hover-bridge": !0, "popup-hover-bridge--visible": this.hoverBridge && this.active })}
      ></span>

      <div
        part="popup"
        class=${V({ popup: !0, "popup--active": this.active, "popup--fixed": this.strategy === "fixed", "popup--has-arrow": this.arrow })}
      >
        <slot></slot>
        ${this.arrow ? $`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
re.styles = [U, ap];
c([P(".popup")], re.prototype, "popup", 2);
c([P(".popup__arrow")], re.prototype, "arrowEl", 2);
c([h()], re.prototype, "anchor", 2);
c([h({ type: Boolean, reflect: !0 })], re.prototype, "active", 2);
c([h({ reflect: !0 })], re.prototype, "placement", 2);
c([h({ reflect: !0 })], re.prototype, "strategy", 2);
c([h({ type: Number })], re.prototype, "distance", 2);
c([h({ type: Number })], re.prototype, "skidding", 2);
c([h({ type: Boolean })], re.prototype, "arrow", 2);
c([h({ attribute: "arrow-placement" })], re.prototype, "arrowPlacement", 2);
c(
  [h({ attribute: "arrow-padding", type: Number })],
  re.prototype,
  "arrowPadding",
  2,
);
c([h({ type: Boolean })], re.prototype, "flip", 2);
c(
  [
    h({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (e) =>
          e
            .split(" ")
            .map((t) => t.trim())
            .filter((t) => t !== ""),
        toAttribute: (e) => e.join(" "),
      },
    }),
  ],
  re.prototype,
  "flipFallbackPlacements",
  2,
);
c(
  [h({ attribute: "flip-fallback-strategy" })],
  re.prototype,
  "flipFallbackStrategy",
  2,
);
c([h({ type: Object })], re.prototype, "flipBoundary", 2);
c(
  [h({ attribute: "flip-padding", type: Number })],
  re.prototype,
  "flipPadding",
  2,
);
c([h({ type: Boolean })], re.prototype, "shift", 2);
c([h({ type: Object })], re.prototype, "shiftBoundary", 2);
c(
  [h({ attribute: "shift-padding", type: Number })],
  re.prototype,
  "shiftPadding",
  2,
);
c([h({ attribute: "auto-size" })], re.prototype, "autoSize", 2);
c([h()], re.prototype, "sync", 2);
c([h({ type: Object })], re.prototype, "autoSizeBoundary", 2);
c(
  [h({ attribute: "auto-size-padding", type: Number })],
  re.prototype,
  "autoSizePadding",
  2,
);
c(
  [h({ attribute: "hover-bridge", type: Boolean })],
  re.prototype,
  "hoverBridge",
  2,
);
var yd = new Map(),
  Wp = new WeakMap();
function Kp(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function bl(e, t) {
  return t.toLowerCase() === "rtl"
    ? { keyframes: e.rtlKeyframes || e.keyframes, options: e.options }
    : e;
}
function oe(e, t) {
  yd.set(e, Kp(t));
}
function ue(e, t, r) {
  const i = Wp.get(e);
  if (i != null && i[t]) return bl(i[t], r.dir);
  const s = yd.get(t);
  return s ? bl(s, r.dir) : { keyframes: [], options: { duration: 0 } };
}
function Ge(e, t) {
  return new Promise((r) => {
    function i(s) {
      s.target === e && (e.removeEventListener(t, i), r());
    }
    e.addEventListener(t, i);
  });
}
function _e(e, t, r) {
  return new Promise((i) => {
    if ((r == null ? void 0 : r.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const s = e.animate(t, Cs(ir({}, r), { duration: _a() ? 0 : r.duration }));
    s.addEventListener("cancel", i, { once: !0 }),
      s.addEventListener("finish", i, { once: !0 });
  });
}
function vl(e) {
  return (
    (e = e.toString().toLowerCase()),
    e.indexOf("ms") > -1
      ? parseFloat(e)
      : e.indexOf("s") > -1
        ? parseFloat(e) * 1e3
        : parseFloat(e)
  );
}
function _a() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Se(e) {
  return Promise.all(
    e.getAnimations().map(
      (t) =>
        new Promise((r) => {
          t.cancel(), requestAnimationFrame(r);
        }),
    ),
  );
}
function ho(e, t) {
  return e.map((r) =>
    Cs(ir({}, r), { height: r.height === "auto" ? `${t}px` : r.height }),
  );
}
var Ae = class extends N {
  constructor() {
    super(),
      (this.localize = new te(this)),
      (this.content = ""),
      (this.placement = "top"),
      (this.disabled = !1),
      (this.distance = 8),
      (this.open = !1),
      (this.skidding = 0),
      (this.trigger = "hover focus"),
      (this.hoist = !1),
      (this.handleBlur = () => {
        this.hasTrigger("focus") && this.hide();
      }),
      (this.handleClick = () => {
        this.hasTrigger("click") && (this.open ? this.hide() : this.show());
      }),
      (this.handleFocus = () => {
        this.hasTrigger("focus") && this.show();
      }),
      (this.handleDocumentKeyDown = (e) => {
        e.key === "Escape" && (e.stopPropagation(), this.hide());
      }),
      (this.handleMouseOver = () => {
        if (this.hasTrigger("hover")) {
          const e = vl(getComputedStyle(this).getPropertyValue("--show-delay"));
          clearTimeout(this.hoverTimeout),
            (this.hoverTimeout = window.setTimeout(() => this.show(), e));
        }
      }),
      (this.handleMouseOut = () => {
        if (this.hasTrigger("hover")) {
          const e = vl(getComputedStyle(this).getPropertyValue("--hide-delay"));
          clearTimeout(this.hoverTimeout),
            (this.hoverTimeout = window.setTimeout(() => this.hide(), e));
        }
      }),
      this.addEventListener("blur", this.handleBlur, !0),
      this.addEventListener("focus", this.handleFocus, !0),
      this.addEventListener("click", this.handleClick),
      this.addEventListener("mouseover", this.handleMouseOver),
      this.addEventListener("mouseout", this.handleMouseOut);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this.closeWatcher) == null || e.destroy(),
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  firstUpdated() {
    (this.body.hidden = !this.open),
      this.open && ((this.popup.active = !0), this.popup.reposition());
  }
  hasTrigger(e) {
    return this.trigger.split(" ").includes(e);
  }
  async handleOpenChange() {
    var e, t;
    if (this.open) {
      if (this.disabled) return;
      this.emit("sl-show"),
        "CloseWatcher" in window
          ? ((e = this.closeWatcher) == null || e.destroy(),
            (this.closeWatcher = new CloseWatcher()),
            (this.closeWatcher.onclose = () => {
              this.hide();
            }))
          : document.addEventListener("keydown", this.handleDocumentKeyDown),
        await Se(this.body),
        (this.body.hidden = !1),
        (this.popup.active = !0);
      const { keyframes: r, options: i } = ue(this, "tooltip.show", {
        dir: this.localize.dir(),
      });
      await _e(this.popup.popup, r, i),
        this.popup.reposition(),
        this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"),
        (t = this.closeWatcher) == null || t.destroy(),
        document.removeEventListener("keydown", this.handleDocumentKeyDown),
        await Se(this.body);
      const { keyframes: r, options: i } = ue(this, "tooltip.hide", {
        dir: this.localize.dir(),
      });
      await _e(this.popup.popup, r, i),
        (this.popup.active = !1),
        (this.body.hidden = !0),
        this.emit("sl-after-hide");
    }
  }
  async handleOptionsChange() {
    this.hasUpdated && (await this.updateComplete, this.popup.reposition());
  }
  handleDisabledChange() {
    this.disabled && this.open && this.hide();
  }
  async show() {
    if (!this.open) return (this.open = !0), Ge(this, "sl-after-show");
  }
  async hide() {
    if (this.open) return (this.open = !1), Ge(this, "sl-after-hide");
  }
  render() {
    return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${V({ tooltip: !0, "tooltip--open": this.open })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
  }
};
Ae.styles = [U, op];
Ae.dependencies = { "sl-popup": re };
c([P("slot:not([name])")], Ae.prototype, "defaultSlot", 2);
c([P(".tooltip__body")], Ae.prototype, "body", 2);
c([P("sl-popup")], Ae.prototype, "popup", 2);
c([h()], Ae.prototype, "content", 2);
c([h()], Ae.prototype, "placement", 2);
c([h({ type: Boolean, reflect: !0 })], Ae.prototype, "disabled", 2);
c([h({ type: Number })], Ae.prototype, "distance", 2);
c([h({ type: Boolean, reflect: !0 })], Ae.prototype, "open", 2);
c([h({ type: Number })], Ae.prototype, "skidding", 2);
c([h()], Ae.prototype, "trigger", 2);
c([h({ type: Boolean })], Ae.prototype, "hoist", 2);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  Ae.prototype,
  "handleOpenChange",
  1,
);
c(
  [R(["content", "distance", "hoist", "placement", "skidding"])],
  Ae.prototype,
  "handleOptionsChange",
  1,
);
c([R("disabled")], Ae.prototype, "handleDisabledChange", 1);
oe("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 150, easing: "ease" },
});
oe("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 150, easing: "ease" },
});
var Qp = "sl-tooltip";
Ae.define("sl-tooltip");
var Gp = D({
    tagName: Qp,
    elementClass: Ae,
    react: F,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlTooltip",
  }),
  Et = Gp,
  Yp = M`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,
  ee = class extends N {
    constructor() {
      super(...arguments),
        (this.formControlController = new or(this, {
          assumeInteractionOn: ["sl-blur", "sl-input"],
        })),
        (this.hasSlotController = new Ye(this, "help-text", "label")),
        (this.hasFocus = !1),
        (this.title = ""),
        (this.name = ""),
        (this.value = ""),
        (this.size = "medium"),
        (this.filled = !1),
        (this.label = ""),
        (this.helpText = ""),
        (this.placeholder = ""),
        (this.rows = 4),
        (this.resize = "vertical"),
        (this.disabled = !1),
        (this.readonly = !1),
        (this.form = ""),
        (this.required = !1),
        (this.spellcheck = !0),
        (this.defaultValue = "");
    }
    get validity() {
      return this.input.validity;
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.resizeObserver = new ResizeObserver(() =>
          this.setTextareaHeight(),
        )),
        this.updateComplete.then(() => {
          this.setTextareaHeight(), this.resizeObserver.observe(this.input);
        });
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        this.input &&
          ((e = this.resizeObserver) == null || e.unobserve(this.input));
    }
    handleBlur() {
      (this.hasFocus = !1), this.emit("sl-blur");
    }
    handleChange() {
      (this.value = this.input.value),
        this.setTextareaHeight(),
        this.emit("sl-change");
    }
    handleFocus() {
      (this.hasFocus = !0), this.emit("sl-focus");
    }
    handleInput() {
      (this.value = this.input.value), this.emit("sl-input");
    }
    handleInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    setTextareaHeight() {
      this.resize === "auto"
        ? ((this.sizeAdjuster.style.height = `${this.input.clientHeight}px`),
          (this.input.style.height = "auto"),
          (this.input.style.height = `${this.input.scrollHeight}px`))
        : (this.input.style.height = "");
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleRowsChange() {
      this.setTextareaHeight();
    }
    async handleValueChange() {
      await this.updateComplete,
        this.formControlController.updateValidity(),
        this.setTextareaHeight();
    }
    focus(e) {
      this.input.focus(e);
    }
    blur() {
      this.input.blur();
    }
    select() {
      this.input.select();
    }
    scrollPosition(e) {
      if (e) {
        typeof e.top == "number" && (this.input.scrollTop = e.top),
          typeof e.left == "number" && (this.input.scrollLeft = e.left);
        return;
      }
      return { top: this.input.scrollTop, left: this.input.scrollTop };
    }
    setSelectionRange(e, t, r = "none") {
      this.input.setSelectionRange(e, t, r);
    }
    setRangeText(e, t, r, i = "preserve") {
      const s = t ?? this.input.selectionStart,
        o = r ?? this.input.selectionEnd;
      this.input.setRangeText(e, s, o, i),
        this.value !== this.input.value &&
          ((this.value = this.input.value), this.setTextareaHeight());
    }
    checkValidity() {
      return this.input.checkValidity();
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return this.input.reportValidity();
    }
    setCustomValidity(e) {
      this.input.setCustomValidity(e),
        this.formControlController.updateValidity();
    }
    render() {
      const e = this.hasSlotController.test("label"),
        t = this.hasSlotController.test("help-text"),
        r = this.label ? !0 : !!e,
        i = this.helpText ? !0 : !!t;
      return $`
      <div
        part="form-control"
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-label": r, "form-control--has-help-text": i })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({ textarea: !0, "textarea--small": this.size === "small", "textarea--medium": this.size === "medium", "textarea--large": this.size === "large", "textarea--standard": !this.filled, "textarea--filled": this.filled, "textarea--disabled": this.disabled, "textarea--focused": this.hasFocus, "textarea--empty": !this.value, "textarea--resize-none": this.resize === "none", "textarea--resize-vertical": this.resize === "vertical", "textarea--resize-auto": this.resize === "auto" })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${L(this.name)}
              .value=${Gr(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              rows=${L(this.rows)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              autocapitalize=${L(this.autocapitalize)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${L(this.spellcheck)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize !== "auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
ee.styles = [U, ei, Yp];
c([P(".textarea__control")], ee.prototype, "input", 2);
c([P(".textarea__size-adjuster")], ee.prototype, "sizeAdjuster", 2);
c([H()], ee.prototype, "hasFocus", 2);
c([h()], ee.prototype, "title", 2);
c([h()], ee.prototype, "name", 2);
c([h()], ee.prototype, "value", 2);
c([h({ reflect: !0 })], ee.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], ee.prototype, "filled", 2);
c([h()], ee.prototype, "label", 2);
c([h({ attribute: "help-text" })], ee.prototype, "helpText", 2);
c([h()], ee.prototype, "placeholder", 2);
c([h({ type: Number })], ee.prototype, "rows", 2);
c([h()], ee.prototype, "resize", 2);
c([h({ type: Boolean, reflect: !0 })], ee.prototype, "disabled", 2);
c([h({ type: Boolean, reflect: !0 })], ee.prototype, "readonly", 2);
c([h({ reflect: !0 })], ee.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], ee.prototype, "required", 2);
c([h({ type: Number })], ee.prototype, "minlength", 2);
c([h({ type: Number })], ee.prototype, "maxlength", 2);
c([h()], ee.prototype, "autocapitalize", 2);
c([h()], ee.prototype, "autocorrect", 2);
c([h()], ee.prototype, "autocomplete", 2);
c([h({ type: Boolean })], ee.prototype, "autofocus", 2);
c([h()], ee.prototype, "enterkeyhint", 2);
c(
  [
    h({
      type: Boolean,
      converter: {
        fromAttribute: (e) => !(!e || e === "false"),
        toAttribute: (e) => (e ? "true" : "false"),
      },
    }),
  ],
  ee.prototype,
  "spellcheck",
  2,
);
c([h()], ee.prototype, "inputmode", 2);
c([Ti()], ee.prototype, "defaultValue", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  ee.prototype,
  "handleDisabledChange",
  1,
);
c(
  [R("rows", { waitUntilFirstUpdate: !0 })],
  ee.prototype,
  "handleRowsChange",
  1,
);
c(
  [R("value", { waitUntilFirstUpdate: !0 })],
  ee.prototype,
  "handleValueChange",
  1,
);
var Xp = "sl-textarea";
ee.define("sl-textarea");
D({
  tagName: Xp,
  elementClass: ee,
  react: F,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlTextarea",
});
var Jp = M`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,
  Zp = M`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,
  ef = M`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,
  Ee = class extends N {
    constructor() {
      super(...arguments),
        (this.formControlController = new or(this, {
          value: (e) => (e.checked ? e.value || "on" : void 0),
          defaultValue: (e) => e.defaultChecked,
          setValue: (e, t) => (e.checked = t),
        })),
        (this.hasSlotController = new Ye(this, "help-text")),
        (this.hasFocus = !1),
        (this.title = ""),
        (this.name = ""),
        (this.size = "medium"),
        (this.disabled = !1),
        (this.checked = !1),
        (this.indeterminate = !1),
        (this.defaultChecked = !1),
        (this.form = ""),
        (this.required = !1),
        (this.helpText = "");
    }
    get validity() {
      return this.input.validity;
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleClick() {
      (this.checked = !this.checked),
        (this.indeterminate = !1),
        this.emit("sl-change");
    }
    handleBlur() {
      (this.hasFocus = !1), this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    handleFocus() {
      (this.hasFocus = !0), this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStateChange() {
      (this.input.checked = this.checked),
        (this.input.indeterminate = this.indeterminate),
        this.formControlController.updateValidity();
    }
    click() {
      this.input.click();
    }
    focus(e) {
      this.input.focus(e);
    }
    blur() {
      this.input.blur();
    }
    checkValidity() {
      return this.input.checkValidity();
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return this.input.reportValidity();
    }
    setCustomValidity(e) {
      this.input.setCustomValidity(e),
        this.formControlController.updateValidity();
    }
    render() {
      const e = this.hasSlotController.test("help-text"),
        t = this.helpText ? !0 : !!e;
      return $`
      <div
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-help-text": t })}
      >
        <label
          part="base"
          class=${V({ checkbox: !0, "checkbox--checked": this.checked, "checkbox--disabled": this.disabled, "checkbox--focused": this.hasFocus, "checkbox--indeterminate": this.indeterminate, "checkbox--small": this.size === "small", "checkbox--medium": this.size === "medium", "checkbox--large": this.size === "large" })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${L(this.value)}
            .indeterminate=${Gr(this.indeterminate)}
            .checked=${Gr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${
              this.checked
                ? $`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `
                : ""
            }
            ${
              !this.checked && this.indeterminate
                ? $`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `
                : ""
            }
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
Ee.styles = [U, ei, ef];
Ee.dependencies = { "sl-icon": ae };
c([P('input[type="checkbox"]')], Ee.prototype, "input", 2);
c([H()], Ee.prototype, "hasFocus", 2);
c([h()], Ee.prototype, "title", 2);
c([h()], Ee.prototype, "name", 2);
c([h()], Ee.prototype, "value", 2);
c([h({ reflect: !0 })], Ee.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], Ee.prototype, "disabled", 2);
c([h({ type: Boolean, reflect: !0 })], Ee.prototype, "checked", 2);
c([h({ type: Boolean, reflect: !0 })], Ee.prototype, "indeterminate", 2);
c([Ti("checked")], Ee.prototype, "defaultChecked", 2);
c([h({ reflect: !0 })], Ee.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], Ee.prototype, "required", 2);
c([h({ attribute: "help-text" })], Ee.prototype, "helpText", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  Ee.prototype,
  "handleDisabledChange",
  1,
);
c(
  [R(["checked", "indeterminate"], { waitUntilFirstUpdate: !0 })],
  Ee.prototype,
  "handleStateChange",
  1,
);
var tf = M`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,
  Fi = class extends N {
    constructor() {
      super(...arguments), (this.localize = new te(this));
    }
    render() {
      return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
Fi.styles = [U, tf];
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function yl(e, t, r) {
  return e ? t(e) : r == null ? void 0 : r(e);
}
var we = class wa extends N {
  constructor() {
    super(...arguments),
      (this.localize = new te(this)),
      (this.indeterminate = !1),
      (this.isLeaf = !1),
      (this.loading = !1),
      (this.selectable = !1),
      (this.expanded = !1),
      (this.selected = !1),
      (this.disabled = !1),
      (this.lazy = !1);
  }
  static isTreeItem(t) {
    return t instanceof Element && t.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback(),
      this.setAttribute("role", "treeitem"),
      this.setAttribute("tabindex", "-1"),
      this.isNestedItem() && (this.slot = "children");
  }
  firstUpdated() {
    (this.childrenContainer.hidden = !this.expanded),
      (this.childrenContainer.style.height = this.expanded ? "auto" : "0"),
      (this.isLeaf = !this.lazy && this.getChildrenItems().length === 0),
      this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("sl-collapse"), await Se(this.childrenContainer);
    const { keyframes: t, options: r } = ue(this, "tree-item.collapse", {
      dir: this.localize.dir(),
    });
    await _e(
      this.childrenContainer,
      ho(t, this.childrenContainer.scrollHeight),
      r,
    ),
      (this.childrenContainer.hidden = !0),
      this.emit("sl-after-collapse");
  }
  isNestedItem() {
    const t = this.parentElement;
    return !!t && wa.isTreeItem(t);
  }
  handleChildrenSlotChange() {
    (this.loading = !1),
      (this.isLeaf = !this.lazy && this.getChildrenItems().length === 0);
  }
  willUpdate(t) {
    t.has("selected") && !t.has("indeterminate") && (this.indeterminate = !1);
  }
  async animateExpand() {
    this.emit("sl-expand"),
      await Se(this.childrenContainer),
      (this.childrenContainer.hidden = !1);
    const { keyframes: t, options: r } = ue(this, "tree-item.expand", {
      dir: this.localize.dir(),
    });
    await _e(
      this.childrenContainer,
      ho(t, this.childrenContainer.scrollHeight),
      r,
    ),
      (this.childrenContainer.style.height = "auto"),
      this.emit("sl-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false"),
      this.loading || this.animateExpand();
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    this.isLeaf
      ? this.removeAttribute("aria-expanded")
      : this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
  }
  handleExpandAnimation() {
    this.expanded
      ? this.lazy
        ? ((this.loading = !0), this.emit("sl-lazy-load"))
        : this.animateExpand()
      : this.animateCollapse();
  }
  handleLazyChange() {
    this.emit("sl-lazy-change");
  }
  getChildrenItems({ includeDisabled: t = !0 } = {}) {
    return this.childrenSlot
      ? [...this.childrenSlot.assignedElements({ flatten: !0 })].filter(
          (r) => wa.isTreeItem(r) && (t || !r.disabled),
        )
      : [];
  }
  render() {
    const t = this.localize.dir() === "rtl",
      r = !this.loading && (!this.isLeaf || this.lazy);
    return $`
      <div
        part="base"
        class="${V({ "tree-item": !0, "tree-item--expanded": this.expanded, "tree-item--selected": this.selected, "tree-item--disabled": this.disabled, "tree-item--leaf": this.isLeaf, "tree-item--has-expand-button": r, "tree-item--rtl": this.localize.dir() === "rtl" })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${V({ "tree-item__expand-button": !0, "tree-item__expand-button--visible": r })}
            aria-hidden="true"
          >
            ${yl(this.loading, () => $` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${yl(
            this.selectable,
            () => $`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Gr(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `,
          )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
we.styles = [U, Zp];
we.dependencies = { "sl-checkbox": Ee, "sl-icon": ae, "sl-spinner": Fi };
c([H()], we.prototype, "indeterminate", 2);
c([H()], we.prototype, "isLeaf", 2);
c([H()], we.prototype, "loading", 2);
c([H()], we.prototype, "selectable", 2);
c([h({ type: Boolean, reflect: !0 })], we.prototype, "expanded", 2);
c([h({ type: Boolean, reflect: !0 })], we.prototype, "selected", 2);
c([h({ type: Boolean, reflect: !0 })], we.prototype, "disabled", 2);
c([h({ type: Boolean, reflect: !0 })], we.prototype, "lazy", 2);
c([P("slot:not([name])")], we.prototype, "defaultSlot", 2);
c([P("slot[name=children]")], we.prototype, "childrenSlot", 2);
c([P(".tree-item__item")], we.prototype, "itemElement", 2);
c([P(".tree-item__children")], we.prototype, "childrenContainer", 2);
c([P(".tree-item__expand-button slot")], we.prototype, "expandButtonSlot", 2);
c(
  [R("loading", { waitUntilFirstUpdate: !0 })],
  we.prototype,
  "handleLoadingChange",
  1,
);
c([R("disabled")], we.prototype, "handleDisabledChange", 1);
c([R("selected")], we.prototype, "handleSelectedChange", 1);
c(
  [R("expanded", { waitUntilFirstUpdate: !0 })],
  we.prototype,
  "handleExpandedChange",
  1,
);
c(
  [R("expanded", { waitUntilFirstUpdate: !0 })],
  we.prototype,
  "handleExpandAnimation",
  1,
);
c(
  [R("lazy", { waitUntilFirstUpdate: !0 })],
  we.prototype,
  "handleLazyChange",
  1,
);
var ci = we;
oe("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" },
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" },
});
oe("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" },
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" },
});
function Ce(e, t, r) {
  const i = (s) => (Object.is(s, -0) ? 0 : s);
  return e < t ? i(t) : e > r ? i(r) : i(e);
}
function _l(e, t = !1) {
  function r(o) {
    const a = o.getChildrenItems({ includeDisabled: !1 });
    if (a.length) {
      const n = a.every((d) => d.selected),
        l = a.every((d) => !d.selected && !d.indeterminate);
      (o.selected = n), (o.indeterminate = !n && !l);
    }
  }
  function i(o) {
    const a = o.parentElement;
    ci.isTreeItem(a) && (r(a), i(a));
  }
  function s(o) {
    for (const a of o.getChildrenItems())
      (a.selected = t ? o.selected || a.selected : !a.disabled && o.selected),
        s(a);
    t && r(o);
  }
  s(e), i(e);
}
var Ar = class extends N {
  constructor() {
    super(),
      (this.selection = "single"),
      (this.clickTarget = null),
      (this.localize = new te(this)),
      (this.initTreeItem = (e) => {
        (e.selectable = this.selection === "multiple"),
          ["expand", "collapse"]
            .filter((t) => !!this.querySelector(`[slot="${t}-icon"]`))
            .forEach((t) => {
              const r = e.querySelector(`[slot="${t}-icon"]`),
                i = this.getExpandButtonIcon(t);
              i &&
                (r === null
                  ? e.append(i)
                  : r.hasAttribute("data-default") && r.replaceWith(i));
            });
      }),
      (this.handleTreeChanged = (e) => {
        for (const t of e) {
          const r = [...t.addedNodes].filter(ci.isTreeItem),
            i = [...t.removedNodes].filter(ci.isTreeItem);
          r.forEach(this.initTreeItem),
            this.lastFocusedItem &&
              i.includes(this.lastFocusedItem) &&
              (this.lastFocusedItem = null);
        }
      }),
      (this.handleFocusOut = (e) => {
        const t = e.relatedTarget;
        (!t || !this.contains(t)) && (this.tabIndex = 0);
      }),
      (this.handleFocusIn = (e) => {
        const t = e.target;
        e.target === this &&
          this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]),
          ci.isTreeItem(t) &&
            !t.disabled &&
            (this.lastFocusedItem && (this.lastFocusedItem.tabIndex = -1),
            (this.lastFocusedItem = t),
            (this.tabIndex = -1),
            (t.tabIndex = 0));
      }),
      this.addEventListener("focusin", this.handleFocusIn),
      this.addEventListener("focusout", this.handleFocusOut),
      this.addEventListener("sl-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback(),
      this.setAttribute("role", "tree"),
      this.setAttribute("tabindex", "0"),
      await this.updateComplete,
      (this.mutationObserver = new MutationObserver(this.handleTreeChanged)),
      this.mutationObserver.observe(this, { childList: !0, subtree: !0 });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this.mutationObserver) == null || e.disconnect();
  }
  getExpandButtonIcon(e) {
    const r = (
      e === "expand" ? this.expandedIconSlot : this.collapsedIconSlot
    ).assignedElements({ flatten: !0 })[0];
    if (r) {
      const i = r.cloneNode(!0);
      return (
        [i, ...i.querySelectorAll("[id]")].forEach((s) =>
          s.removeAttribute("id"),
        ),
        i.setAttribute("data-default", ""),
        (i.slot = `${e}-icon`),
        i
      );
    }
    return null;
  }
  selectItem(e) {
    const t = [...this.selectedItems];
    if (this.selection === "multiple")
      (e.selected = !e.selected), e.lazy && (e.expanded = !0), _l(e);
    else if (this.selection === "single" || e.isLeaf) {
      const i = this.getAllTreeItems();
      for (const s of i) s.selected = s === e;
    } else this.selection === "leaf" && (e.expanded = !e.expanded);
    const r = this.selectedItems;
    (t.length !== r.length || r.some((i) => !t.includes(i))) &&
      Promise.all(r.map((i) => i.updateComplete)).then(() => {
        this.emit("sl-selection-change", { detail: { selection: r } });
      });
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("sl-tree-item")];
  }
  focusItem(e) {
    e == null || e.focus();
  }
  handleKeyDown(e) {
    if (
      ![
        "ArrowDown",
        "ArrowUp",
        "ArrowRight",
        "ArrowLeft",
        "Home",
        "End",
        "Enter",
        " ",
      ].includes(e.key) ||
      e.composedPath().some((s) => {
        var o;
        return ["input", "textarea"].includes(
          (o = s == null ? void 0 : s.tagName) == null
            ? void 0
            : o.toLowerCase(),
        );
      })
    )
      return;
    const t = this.getFocusableItems(),
      r = this.localize.dir() === "ltr",
      i = this.localize.dir() === "rtl";
    if (t.length > 0) {
      e.preventDefault();
      const s = t.findIndex((l) => l.matches(":focus")),
        o = t[s],
        a = (l) => {
          const d = t[Ce(l, 0, t.length - 1)];
          this.focusItem(d);
        },
        n = (l) => {
          o.expanded = l;
        };
      e.key === "ArrowDown"
        ? a(s + 1)
        : e.key === "ArrowUp"
          ? a(s - 1)
          : (r && e.key === "ArrowRight") || (i && e.key === "ArrowLeft")
            ? !o || o.disabled || o.expanded || (o.isLeaf && !o.lazy)
              ? a(s + 1)
              : n(!0)
            : (r && e.key === "ArrowLeft") || (i && e.key === "ArrowRight")
              ? !o || o.disabled || o.isLeaf || !o.expanded
                ? a(s - 1)
                : n(!1)
              : e.key === "Home"
                ? a(0)
                : e.key === "End"
                  ? a(t.length - 1)
                  : (e.key === "Enter" || e.key === " ") &&
                    (o.disabled || this.selectItem(o));
    }
  }
  handleClick(e) {
    const t = e.target,
      r = t.closest("sl-tree-item"),
      i = e.composedPath().some((s) => {
        var o;
        return (o = s == null ? void 0 : s.classList) == null
          ? void 0
          : o.contains("tree-item__expand-button");
      });
    !r ||
      r.disabled ||
      t !== this.clickTarget ||
      (i ? (r.expanded = !r.expanded) : this.selectItem(r));
  }
  handleMouseDown(e) {
    this.clickTarget = e.target;
  }
  handleSlotChange() {
    this.getAllTreeItems().forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const e = this.selection === "multiple",
      t = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", e ? "true" : "false");
    for (const r of t) r.selectable = e;
    e &&
      (await this.updateComplete,
      [...this.querySelectorAll(":scope > sl-tree-item")].forEach((r) =>
        _l(r, !0),
      ));
  }
  get selectedItems() {
    const e = this.getAllTreeItems(),
      t = (r) => r.selected;
    return e.filter(t);
  }
  getFocusableItems() {
    const e = this.getAllTreeItems(),
      t = new Set();
    return e.filter((r) => {
      var i;
      if (r.disabled) return !1;
      const s =
        (i = r.parentElement) == null ? void 0 : i.closest("[role=treeitem]");
      return s && (!s.expanded || s.loading || t.has(s)) && t.add(r), !t.has(r);
    });
  }
  render() {
    return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
Ar.styles = [U, Jp];
c([P("slot:not([name])")], Ar.prototype, "defaultSlot", 2);
c([P("slot[name=expand-icon]")], Ar.prototype, "expandedIconSlot", 2);
c([P("slot[name=collapse-icon]")], Ar.prototype, "collapsedIconSlot", 2);
c([h()], Ar.prototype, "selection", 2);
c([R("selection")], Ar.prototype, "handleSelectionChange", 1);
var rf = "sl-tree";
Ar.define("sl-tree");
D({
  tagName: rf,
  elementClass: Ar,
  react: F,
  events: { onSlSelectionChange: "sl-selection-change" },
  displayName: "SlTree",
});
var sf = "sl-tree-item";
ci.define("sl-tree-item");
D({
  tagName: sf,
  elementClass: ci,
  react: F,
  events: {
    onSlExpand: "sl-expand",
    onSlAfterExpand: "sl-after-expand",
    onSlCollapse: "sl-collapse",
    onSlAfterCollapse: "sl-after-collapse",
    onSlLazyChange: "sl-lazy-change",
    onSlLazyLoad: "sl-lazy-load",
  },
  displayName: "SlTreeItem",
});
var of = [
    { max: 276e4, value: 6e4, unit: "minute" },
    { max: 72e6, value: 36e5, unit: "hour" },
    { max: 5184e5, value: 864e5, unit: "day" },
    { max: 24192e5, value: 6048e5, unit: "week" },
    { max: 28512e6, value: 2592e6, unit: "month" },
    { max: 1 / 0, value: 31536e6, unit: "year" },
  ],
  Rr = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.isoTime = ""),
        (this.relativeTime = ""),
        (this.date = new Date()),
        (this.format = "long"),
        (this.numeric = "auto"),
        (this.sync = !1);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), clearTimeout(this.updateTimeout);
    }
    render() {
      const e = new Date(),
        t = new Date(this.date);
      if (isNaN(t.getMilliseconds()))
        return (this.relativeTime = ""), (this.isoTime = ""), "";
      const r = t.getTime() - e.getTime(),
        { unit: i, value: s } = of.find((o) => Math.abs(r) < o.max);
      if (
        ((this.isoTime = t.toISOString()),
        (this.relativeTime = this.localize.relativeTime(Math.round(r / s), i, {
          numeric: this.numeric,
          style: this.format,
        })),
        clearTimeout(this.updateTimeout),
        this.sync)
      ) {
        let o;
        i === "minute"
          ? (o = Us("second"))
          : i === "hour"
            ? (o = Us("minute"))
            : i === "day"
              ? (o = Us("hour"))
              : (o = Us("day")),
          (this.updateTimeout = window.setTimeout(
            () => this.requestUpdate(),
            o,
          ));
      }
      return $` <time datetime=${this.isoTime}>${this.relativeTime}</time> `;
    }
  };
c([H()], Rr.prototype, "isoTime", 2);
c([H()], Rr.prototype, "relativeTime", 2);
c([h()], Rr.prototype, "date", 2);
c([h()], Rr.prototype, "format", 2);
c([h()], Rr.prototype, "numeric", 2);
c([h({ type: Boolean })], Rr.prototype, "sync", 2);
function Us(e) {
  const r = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 }[e];
  return r - (Date.now() % r);
}
var af = "sl-relative-time";
Rr.define("sl-relative-time");
D({
  tagName: af,
  elementClass: Rr,
  react: F,
  events: {},
  displayName: "SlRelativeTime",
});
var nf = M`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,
  pe = class extends N {
    constructor() {
      super(...arguments),
        (this.formControlController = new or(this)),
        (this.hasSlotController = new Ye(this, "help-text", "label")),
        (this.localize = new te(this)),
        (this.hasFocus = !1),
        (this.hasTooltip = !1),
        (this.title = ""),
        (this.name = ""),
        (this.value = 0),
        (this.label = ""),
        (this.helpText = ""),
        (this.disabled = !1),
        (this.min = 0),
        (this.max = 100),
        (this.step = 1),
        (this.tooltip = "top"),
        (this.tooltipFormatter = (e) => e.toString()),
        (this.form = ""),
        (this.defaultValue = 0);
    }
    get validity() {
      return this.input.validity;
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.resizeObserver = new ResizeObserver(() => this.syncRange())),
        this.value < this.min && (this.value = this.min),
        this.value > this.max && (this.value = this.max),
        this.updateComplete.then(() => {
          this.syncRange(), this.resizeObserver.observe(this.input);
        });
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        (e = this.resizeObserver) == null || e.unobserve(this.input);
    }
    handleChange() {
      this.emit("sl-change");
    }
    handleInput() {
      (this.value = parseFloat(this.input.value)),
        this.emit("sl-input"),
        this.syncRange();
    }
    handleBlur() {
      (this.hasFocus = !1), (this.hasTooltip = !1), this.emit("sl-blur");
    }
    handleFocus() {
      (this.hasFocus = !0), (this.hasTooltip = !0), this.emit("sl-focus");
    }
    handleThumbDragStart() {
      this.hasTooltip = !0;
    }
    handleThumbDragEnd() {
      this.hasTooltip = !1;
    }
    syncProgress(e) {
      this.input.style.setProperty("--percent", `${e * 100}%`);
    }
    syncTooltip(e) {
      if (this.output !== null) {
        const t = this.input.offsetWidth,
          r = this.output.offsetWidth,
          i = getComputedStyle(this.input).getPropertyValue("--thumb-size"),
          s = this.localize.dir() === "rtl",
          o = t * e;
        if (s) {
          const a = `${t - o}px + ${e} * ${i}`;
          this.output.style.translate = `calc((${a} - ${r / 2}px - ${i} / 2))`;
        } else {
          const a = `${o}px - ${e} * ${i}`;
          this.output.style.translate = `calc(${a} - ${r / 2}px + ${i} / 2)`;
        }
      }
    }
    handleValueChange() {
      this.formControlController.updateValidity(),
        (this.input.value = this.value.toString()),
        (this.value = parseFloat(this.input.value)),
        this.syncRange();
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    syncRange() {
      const e = Math.max(0, (this.value - this.min) / (this.max - this.min));
      this.syncProgress(e),
        this.tooltip !== "none" &&
          this.hasTooltip &&
          this.updateComplete.then(() => this.syncTooltip(e));
    }
    handleInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    focus(e) {
      this.input.focus(e);
    }
    blur() {
      this.input.blur();
    }
    stepUp() {
      this.input.stepUp(),
        this.value !== Number(this.input.value) &&
          (this.value = Number(this.input.value));
    }
    stepDown() {
      this.input.stepDown(),
        this.value !== Number(this.input.value) &&
          (this.value = Number(this.input.value));
    }
    checkValidity() {
      return this.input.checkValidity();
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return this.input.reportValidity();
    }
    setCustomValidity(e) {
      this.input.setCustomValidity(e),
        this.formControlController.updateValidity();
    }
    render() {
      const e = this.hasSlotController.test("label"),
        t = this.hasSlotController.test("help-text"),
        r = this.label ? !0 : !!e,
        i = this.helpText ? !0 : !!t;
      return $`
      <div
        part="form-control"
        class=${V({ "form-control": !0, "form-control--medium": !0, "form-control--has-label": r, "form-control--has-help-text": i })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({ range: !0, "range--disabled": this.disabled, "range--focused": this.hasFocus, "range--rtl": this.localize.dir() === "rtl", "range--tooltip-visible": this.hasTooltip, "range--tooltip-top": this.tooltip === "top", "range--tooltip-bottom": this.tooltip === "bottom" })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${L(this.name)}
              ?disabled=${this.disabled}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Gr(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${
              this.tooltip !== "none" && !this.disabled
                ? $`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter == "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                `
                : ""
            }
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
pe.styles = [U, ei, nf];
c([P(".range__control")], pe.prototype, "input", 2);
c([P(".range__tooltip")], pe.prototype, "output", 2);
c([H()], pe.prototype, "hasFocus", 2);
c([H()], pe.prototype, "hasTooltip", 2);
c([h()], pe.prototype, "title", 2);
c([h()], pe.prototype, "name", 2);
c([h({ type: Number })], pe.prototype, "value", 2);
c([h()], pe.prototype, "label", 2);
c([h({ attribute: "help-text" })], pe.prototype, "helpText", 2);
c([h({ type: Boolean, reflect: !0 })], pe.prototype, "disabled", 2);
c([h({ type: Number })], pe.prototype, "min", 2);
c([h({ type: Number })], pe.prototype, "max", 2);
c([h({ type: Number })], pe.prototype, "step", 2);
c([h()], pe.prototype, "tooltip", 2);
c([h({ attribute: !1 })], pe.prototype, "tooltipFormatter", 2);
c([h({ reflect: !0 })], pe.prototype, "form", 2);
c([Ti()], pe.prototype, "defaultValue", 2);
c([Ss({ passive: !0 })], pe.prototype, "handleThumbDragStart", 1);
c(
  [R("value", { waitUntilFirstUpdate: !0 })],
  pe.prototype,
  "handleValueChange",
  1,
);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  pe.prototype,
  "handleDisabledChange",
  1,
);
c(
  [R("hasTooltip", { waitUntilFirstUpdate: !0 })],
  pe.prototype,
  "syncRange",
  1,
);
var lf = "sl-range";
pe.define("sl-range");
D({
  tagName: lf,
  elementClass: pe,
  react: F,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlRange",
});
var cf = "sl-resize-observer";
Pi.define("sl-resize-observer");
D({
  tagName: cf,
  elementClass: Pi,
  react: F,
  events: { onSlResize: "sl-resize" },
  displayName: "SlResizeObserver",
});
var df = M`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let xa = class extends As {
  constructor(t) {
    if ((super(t), (this.it = de), t.type !== Bt.CHILD))
      throw Error(
        this.constructor.directiveName +
          "() can only be used in child bindings",
      );
  }
  render(t) {
    if (t === de || t == null) return (this._t = void 0), (this.it = t);
    if (t === nt) return t;
    if (typeof t != "string")
      throw Error(
        this.constructor.directiveName + "() called with a non-string value",
      );
    if (t === this.it) return this._t;
    this.it = t;
    const r = [t];
    return (
      (r.raw = r),
      (this._t = {
        _$litType$: this.constructor.resultType,
        strings: r,
        values: [],
      })
    );
  }
};
(xa.directiveName = "unsafeHTML"), (xa.resultType = 1);
const eo = Es(xa);
var G = class extends N {
  constructor() {
    super(...arguments),
      (this.formControlController = new or(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"],
      })),
      (this.hasSlotController = new Ye(this, "help-text", "label")),
      (this.localize = new te(this)),
      (this.typeToSelectString = ""),
      (this.hasFocus = !1),
      (this.displayLabel = ""),
      (this.selectedOptions = []),
      (this.valueHasChanged = !1),
      (this.name = ""),
      (this._value = ""),
      (this.defaultValue = ""),
      (this.size = "medium"),
      (this.placeholder = ""),
      (this.multiple = !1),
      (this.maxOptionsVisible = 3),
      (this.disabled = !1),
      (this.clearable = !1),
      (this.open = !1),
      (this.hoist = !1),
      (this.filled = !1),
      (this.pill = !1),
      (this.label = ""),
      (this.placement = "bottom"),
      (this.helpText = ""),
      (this.form = ""),
      (this.required = !1),
      (this.getTag = (e) => $`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `),
      (this.handleDocumentFocusIn = (e) => {
        const t = e.composedPath();
        this && !t.includes(this) && this.hide();
      }),
      (this.handleDocumentKeyDown = (e) => {
        const t = e.target,
          r = t.closest(".select__clear") !== null,
          i = t.closest("sl-icon-button") !== null;
        if (!(r || i)) {
          if (
            (e.key === "Escape" &&
              this.open &&
              !this.closeWatcher &&
              (e.preventDefault(),
              e.stopPropagation(),
              this.hide(),
              this.displayInput.focus({ preventScroll: !0 })),
            e.key === "Enter" ||
              (e.key === " " && this.typeToSelectString === ""))
          ) {
            if (
              (e.preventDefault(), e.stopImmediatePropagation(), !this.open)
            ) {
              this.show();
              return;
            }
            this.currentOption &&
              !this.currentOption.disabled &&
              ((this.valueHasChanged = !0),
              this.multiple
                ? this.toggleOptionSelection(this.currentOption)
                : this.setSelectedOptions(this.currentOption),
              this.updateComplete.then(() => {
                this.emit("sl-input"), this.emit("sl-change");
              }),
              this.multiple ||
                (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
            return;
          }
          if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
            const s = this.getAllOptions(),
              o = s.indexOf(this.currentOption);
            let a = Math.max(0, o);
            if (
              (e.preventDefault(),
              !this.open && (this.show(), this.currentOption))
            )
              return;
            e.key === "ArrowDown"
              ? ((a = o + 1), a > s.length - 1 && (a = 0))
              : e.key === "ArrowUp"
                ? ((a = o - 1), a < 0 && (a = s.length - 1))
                : e.key === "Home"
                  ? (a = 0)
                  : e.key === "End" && (a = s.length - 1),
              this.setCurrentOption(s[a]);
          }
          if ((e.key && e.key.length === 1) || e.key === "Backspace") {
            const s = this.getAllOptions();
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            if (!this.open) {
              if (e.key === "Backspace") return;
              this.show();
            }
            e.stopPropagation(),
              e.preventDefault(),
              clearTimeout(this.typeToSelectTimeout),
              (this.typeToSelectTimeout = window.setTimeout(
                () => (this.typeToSelectString = ""),
                1e3,
              )),
              e.key === "Backspace"
                ? (this.typeToSelectString = this.typeToSelectString.slice(
                    0,
                    -1,
                  ))
                : (this.typeToSelectString += e.key.toLowerCase());
            for (const o of s)
              if (
                o
                  .getTextLabel()
                  .toLowerCase()
                  .startsWith(this.typeToSelectString)
              ) {
                this.setCurrentOption(o);
                break;
              }
          }
        }
      }),
      (this.handleDocumentMouseDown = (e) => {
        const t = e.composedPath();
        this && !t.includes(this) && this.hide();
      });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this.multiple
      ? (e = Array.isArray(e) ? e : e.split(" "))
      : (e = Array.isArray(e) ? e.join(" ") : e),
      this._value !== e && ((this.valueHasChanged = !0), (this._value = e));
  }
  get validity() {
    return this.valueInput.validity;
  }
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(),
      setTimeout(() => {
        this.handleDefaultSlotChange();
      }),
      (this.open = !1);
  }
  addOpenListeners() {
    var e;
    document.addEventListener("focusin", this.handleDocumentFocusIn),
      document.addEventListener("keydown", this.handleDocumentKeyDown),
      document.addEventListener("mousedown", this.handleDocumentMouseDown),
      this.getRootNode() !== document &&
        this.getRootNode().addEventListener(
          "focusin",
          this.handleDocumentFocusIn,
        ),
      "CloseWatcher" in window &&
        ((e = this.closeWatcher) == null || e.destroy(),
        (this.closeWatcher = new CloseWatcher()),
        (this.closeWatcher.onclose = () => {
          this.open &&
            (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
        }));
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("focusin", this.handleDocumentFocusIn),
      document.removeEventListener("keydown", this.handleDocumentKeyDown),
      document.removeEventListener("mousedown", this.handleDocumentMouseDown),
      this.getRootNode() !== document &&
        this.getRootNode().removeEventListener(
          "focusin",
          this.handleDocumentFocusIn,
        ),
      (e = this.closeWatcher) == null || e.destroy();
  }
  handleFocus() {
    (this.hasFocus = !0),
      this.displayInput.setSelectionRange(0, 0),
      this.emit("sl-focus");
  }
  handleBlur() {
    (this.hasFocus = !1), this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(e) {
    const r = e
      .composedPath()
      .some(
        (i) =>
          i instanceof Element && i.tagName.toLowerCase() === "sl-icon-button",
      );
    this.disabled ||
      r ||
      (e.preventDefault(),
      this.displayInput.focus({ preventScroll: !0 }),
      (this.open = !this.open));
  }
  handleComboboxKeyDown(e) {
    e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
  }
  handleClearClick(e) {
    e.stopPropagation(),
      (this.valueHasChanged = !0),
      this.value !== "" &&
        (this.setSelectedOptions([]),
        this.displayInput.focus({ preventScroll: !0 }),
        this.updateComplete.then(() => {
          this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
        }));
  }
  handleClearMouseDown(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleOptionClick(e) {
    const r = e.target.closest("sl-option"),
      i = this.value;
    r &&
      !r.disabled &&
      ((this.valueHasChanged = !0),
      this.multiple
        ? this.toggleOptionSelection(r)
        : this.setSelectedOptions(r),
      this.updateComplete.then(() =>
        this.displayInput.focus({ preventScroll: !0 }),
      ),
      this.value !== i &&
        this.updateComplete.then(() => {
          this.emit("sl-input"), this.emit("sl-change");
        }),
      this.multiple ||
        (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  handleDefaultSlotChange() {
    customElements.get("sl-option") ||
      customElements
        .whenDefined("sl-option")
        .then(() => this.handleDefaultSlotChange());
    const e = this.getAllOptions(),
      t = this.valueHasChanged ? this.value : this.defaultValue,
      r = Array.isArray(t) ? t : [t],
      i = [];
    e.forEach((s) => i.push(s.value)),
      this.setSelectedOptions(e.filter((s) => r.includes(s.value)));
  }
  handleTagRemove(e, t) {
    e.stopPropagation(),
      (this.valueHasChanged = !0),
      this.disabled ||
        (this.toggleOptionSelection(t, !1),
        this.updateComplete.then(() => {
          this.emit("sl-input"), this.emit("sl-change");
        }));
  }
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  setCurrentOption(e) {
    this.getAllOptions().forEach((r) => {
      (r.current = !1), (r.tabIndex = -1);
    }),
      e &&
        ((this.currentOption = e),
        (e.current = !0),
        (e.tabIndex = 0),
        e.focus());
  }
  setSelectedOptions(e) {
    const t = this.getAllOptions(),
      r = Array.isArray(e) ? e : [e];
    t.forEach((i) => (i.selected = !1)),
      r.length && r.forEach((i) => (i.selected = !0)),
      this.selectionChanged();
  }
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? (e.selected = t) : (e.selected = !e.selected),
      this.selectionChanged();
  }
  selectionChanged() {
    var e, t, r;
    const i = this.getAllOptions();
    this.selectedOptions = i.filter((o) => o.selected);
    const s = this.valueHasChanged;
    if (this.multiple)
      (this.value = this.selectedOptions.map((o) => o.value)),
        this.placeholder && this.value.length === 0
          ? (this.displayLabel = "")
          : (this.displayLabel = this.localize.term(
              "numOptionsSelected",
              this.selectedOptions.length,
            ));
    else {
      const o = this.selectedOptions[0];
      (this.value = (e = o == null ? void 0 : o.value) != null ? e : ""),
        (this.displayLabel =
          (r =
            (t = o == null ? void 0 : o.getTextLabel) == null
              ? void 0
              : t.call(o)) != null
            ? r
            : "");
    }
    (this.valueHasChanged = s),
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const r = this.getTag(e, t);
        return $`<div @sl-remove=${(i) => this.handleTagRemove(i, e)}>
          ${typeof r == "string" ? eo(r) : r}
        </div>`;
      } else if (t === this.maxOptionsVisible)
        return $`<sl-tag size=${this.size}>+${this.selectedOptions.length - t}</sl-tag>`;
      return $``;
    });
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1),
      this.formControlController.emitInvalidEvent(e);
  }
  handleDisabledChange() {
    this.disabled && ((this.open = !1), this.handleOpenChange());
  }
  attributeChangedCallback(e, t, r) {
    if ((super.attributeChangedCallback(e, t, r), e === "value")) {
      const i = this.valueHasChanged;
      (this.value = this.defaultValue), (this.valueHasChanged = i);
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const r = this.valueHasChanged;
      (this.value = this.defaultValue), (this.valueHasChanged = r);
    }
    const e = this.getAllOptions(),
      t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((r) => t.includes(r.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()),
        this.emit("sl-show"),
        this.addOpenListeners(),
        await Se(this),
        (this.listbox.hidden = !1),
        (this.popup.active = !0),
        requestAnimationFrame(() => {
          this.setCurrentOption(this.currentOption);
        });
      const { keyframes: e, options: t } = ue(this, "select.show", {
        dir: this.localize.dir(),
      });
      await _e(this.popup.popup, e, t),
        this.currentOption &&
          fa(this.currentOption, this.listbox, "vertical", "auto"),
        this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Se(this);
      const { keyframes: e, options: t } = ue(this, "select.hide", {
        dir: this.localize.dir(),
      });
      await _e(this.popup.popup, e, t),
        (this.listbox.hidden = !0),
        (this.popup.active = !1),
        this.emit("sl-after-hide");
    }
  }
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return (this.open = !0), Ge(this, "sl-after-show");
  }
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return (this.open = !1), Ge(this, "sl-after-hide");
  }
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  getForm() {
    return this.formControlController.getForm();
  }
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  setCustomValidity(e) {
    this.valueInput.setCustomValidity(e),
      this.formControlController.updateValidity();
  }
  focus(e) {
    this.displayInput.focus(e);
  }
  blur() {
    this.displayInput.blur();
  }
  render() {
    const e = this.hasSlotController.test("label"),
      t = this.hasSlotController.test("help-text"),
      r = this.label ? !0 : !!e,
      i = this.helpText ? !0 : !!t,
      s = this.clearable && !this.disabled && this.value.length > 0,
      o = this.placeholder && this.value && this.value.length <= 0;
    return $`
      <div
        part="form-control"
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-label": r, "form-control--has-help-text": i })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${V({ select: !0, "select--standard": !0, "select--filled": this.filled, "select--pill": this.pill, "select--open": this.open, "select--disabled": this.disabled, "select--multiple": this.multiple, "select--focused": this.hasFocus, "select--placeholder-visible": o, "select--top": this.placement === "top", "select--bottom": this.placement === "bottom", "select--small": this.size === "small", "select--medium": this.size === "medium", "select--large": this.size === "large" })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? $`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${
                s
                  ? $`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `
                  : ""
              }

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
G.styles = [U, ei, df];
G.dependencies = { "sl-icon": ae, "sl-popup": re, "sl-tag": ar };
c([P(".select")], G.prototype, "popup", 2);
c([P(".select__combobox")], G.prototype, "combobox", 2);
c([P(".select__display-input")], G.prototype, "displayInput", 2);
c([P(".select__value-input")], G.prototype, "valueInput", 2);
c([P(".select__listbox")], G.prototype, "listbox", 2);
c([H()], G.prototype, "hasFocus", 2);
c([H()], G.prototype, "displayLabel", 2);
c([H()], G.prototype, "currentOption", 2);
c([H()], G.prototype, "selectedOptions", 2);
c([H()], G.prototype, "valueHasChanged", 2);
c([h()], G.prototype, "name", 2);
c([H()], G.prototype, "value", 1);
c([h({ attribute: "value" })], G.prototype, "defaultValue", 2);
c([h({ reflect: !0 })], G.prototype, "size", 2);
c([h()], G.prototype, "placeholder", 2);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "multiple", 2);
c(
  [h({ attribute: "max-options-visible", type: Number })],
  G.prototype,
  "maxOptionsVisible",
  2,
);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "disabled", 2);
c([h({ type: Boolean })], G.prototype, "clearable", 2);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "open", 2);
c([h({ type: Boolean })], G.prototype, "hoist", 2);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "filled", 2);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "pill", 2);
c([h()], G.prototype, "label", 2);
c([h({ reflect: !0 })], G.prototype, "placement", 2);
c([h({ attribute: "help-text" })], G.prototype, "helpText", 2);
c([h({ reflect: !0 })], G.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], G.prototype, "required", 2);
c([h()], G.prototype, "getTag", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  G.prototype,
  "handleDisabledChange",
  1,
);
c(
  [R(["defaultValue", "value"], { waitUntilFirstUpdate: !0 })],
  G.prototype,
  "handleValueChange",
  1,
);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  G.prototype,
  "handleOpenChange",
  1,
);
oe("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});
oe("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
var uf = "sl-select";
G.define("sl-select");
D({
  tagName: uf,
  elementClass: G,
  react: F,
  events: {
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlBlur: "sl-blur",
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlSelect",
});
var hf = M`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,
  Eo = class extends N {
    constructor() {
      super(...arguments), (this.effect = "none");
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ skeleton: !0, "skeleton--pulse": this.effect === "pulse", "skeleton--sheen": this.effect === "sheen" })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
    }
  };
Eo.styles = [U, hf];
c([h()], Eo.prototype, "effect", 2);
var pf = "sl-skeleton";
Eo.define("sl-skeleton");
var ff = D({
    tagName: pf,
    elementClass: Eo,
    react: F,
    events: {},
    displayName: "SlSkeleton",
  }),
  dr = ff,
  mf = "sl-spinner";
Fi.define("sl-spinner");
var gf = D({
    tagName: mf,
    elementClass: Fi,
    react: F,
    events: {},
    displayName: "SlSpinner",
  }),
  bf = gf,
  vf = M`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;
function ds(e, t) {
  function r(s) {
    const o = e.getBoundingClientRect(),
      a = e.ownerDocument.defaultView,
      n = o.left + a.scrollX,
      l = o.top + a.scrollY,
      d = s.pageX - n,
      p = s.pageY - l;
    t != null && t.onMove && t.onMove(d, p);
  }
  function i() {
    document.removeEventListener("pointermove", r),
      document.removeEventListener("pointerup", i),
      t != null && t.onStop && t.onStop();
  }
  document.addEventListener("pointermove", r, { passive: !0 }),
    document.addEventListener("pointerup", i),
    (t == null ? void 0 : t.initialEvent) instanceof PointerEvent &&
      r(t.initialEvent);
}
var wl = () => null,
  et = class extends N {
    constructor() {
      super(...arguments),
        (this.isCollapsed = !1),
        (this.localize = new te(this)),
        (this.positionBeforeCollapsing = 0),
        (this.position = 50),
        (this.vertical = !1),
        (this.disabled = !1),
        (this.snapValue = ""),
        (this.snapFunction = wl),
        (this.snapThreshold = 12);
    }
    toSnapFunction(e) {
      const t = e.split(" ");
      return ({ pos: r, size: i, snapThreshold: s, isRtl: o, vertical: a }) => {
        let n = r,
          l = Number.POSITIVE_INFINITY;
        return (
          t.forEach((d) => {
            let p;
            if (d.startsWith("repeat(")) {
              const f = e.substring(7, e.length - 1),
                m = f.endsWith("%"),
                g = Number.parseFloat(f),
                b = m ? i * (g / 100) : g;
              p = Math.round((o && !a ? i - r : r) / b) * b;
            } else
              d.endsWith("%")
                ? (p = i * (Number.parseFloat(d) / 100))
                : (p = Number.parseFloat(d));
            o && !a && (p = i - p);
            const u = Math.abs(r - p);
            u <= s && u < l && ((n = p), (l = u));
          }),
          n
        );
      };
    }
    set snap(e) {
      (this.snapValue = e ?? ""),
        e
          ? (this.snapFunction =
              typeof e == "string" ? this.toSnapFunction(e) : e)
          : (this.snapFunction = wl);
    }
    get snap() {
      return this.snapValue;
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.resizeObserver = new ResizeObserver((e) => this.handleResize(e))),
        this.updateComplete.then(() => this.resizeObserver.observe(this)),
        this.detectSize(),
        (this.cachedPositionInPixels = this.percentageToPixels(this.position));
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        (e = this.resizeObserver) == null || e.unobserve(this);
    }
    detectSize() {
      const { width: e, height: t } = this.getBoundingClientRect();
      this.size = this.vertical ? t : e;
    }
    percentageToPixels(e) {
      return this.size * (e / 100);
    }
    pixelsToPercentage(e) {
      return (e / this.size) * 100;
    }
    handleDrag(e) {
      const t = this.localize.dir() === "rtl";
      this.disabled ||
        (e.cancelable && e.preventDefault(),
        ds(this, {
          onMove: (r, i) => {
            var s;
            let o = this.vertical ? i : r;
            this.primary === "end" && (o = this.size - o),
              (o =
                (s = this.snapFunction({
                  pos: o,
                  size: this.size,
                  snapThreshold: this.snapThreshold,
                  isRtl: t,
                  vertical: this.vertical,
                })) != null
                  ? s
                  : o),
              (this.position = Ce(this.pixelsToPercentage(o), 0, 100));
          },
          initialEvent: e,
        }));
    }
    handleKeyDown(e) {
      if (
        !this.disabled &&
        [
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
          "Enter",
        ].includes(e.key)
      ) {
        let t = this.position;
        const r = (e.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
        if (
          (e.preventDefault(),
          ((e.key === "ArrowLeft" && !this.vertical) ||
            (e.key === "ArrowUp" && this.vertical)) &&
            (t -= r),
          ((e.key === "ArrowRight" && !this.vertical) ||
            (e.key === "ArrowDown" && this.vertical)) &&
            (t += r),
          e.key === "Home" && (t = this.primary === "end" ? 100 : 0),
          e.key === "End" && (t = this.primary === "end" ? 0 : 100),
          e.key === "Enter")
        )
          if (this.isCollapsed)
            (t = this.positionBeforeCollapsing), (this.isCollapsed = !1);
          else {
            const i = this.position;
            (t = 0),
              requestAnimationFrame(() => {
                (this.isCollapsed = !0), (this.positionBeforeCollapsing = i);
              });
          }
        this.position = Ce(t, 0, 100);
      }
    }
    handleResize(e) {
      const { width: t, height: r } = e[0].contentRect;
      (this.size = this.vertical ? r : t),
        (isNaN(this.cachedPositionInPixels) || this.position === 1 / 0) &&
          ((this.cachedPositionInPixels = Number(
            this.getAttribute("position-in-pixels"),
          )),
          (this.positionInPixels = Number(
            this.getAttribute("position-in-pixels"),
          )),
          (this.position = this.pixelsToPercentage(this.positionInPixels))),
        this.primary &&
          (this.position = this.pixelsToPercentage(
            this.cachedPositionInPixels,
          ));
    }
    handlePositionChange() {
      (this.cachedPositionInPixels = this.percentageToPixels(this.position)),
        (this.isCollapsed = !1),
        (this.positionBeforeCollapsing = 0),
        (this.positionInPixels = this.percentageToPixels(this.position)),
        this.emit("sl-reposition");
    }
    handlePositionInPixelsChange() {
      this.position = this.pixelsToPercentage(this.positionInPixels);
    }
    handleVerticalChange() {
      this.detectSize();
    }
    render() {
      const e = this.vertical ? "gridTemplateRows" : "gridTemplateColumns",
        t = this.vertical ? "gridTemplateColumns" : "gridTemplateRows",
        r = this.localize.dir() === "rtl",
        i = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,
        s = "auto";
      return (
        this.primary === "end"
          ? r && !this.vertical
            ? (this.style[e] = `${i} var(--divider-width) ${s}`)
            : (this.style[e] = `${s} var(--divider-width) ${i}`)
          : r && !this.vertical
            ? (this.style[e] = `${s} var(--divider-width) ${i}`)
            : (this.style[e] = `${i} var(--divider-width) ${s}`),
        (this.style[t] = ""),
        $`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${L(this.disabled ? void 0 : "0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `
      );
    }
  };
et.styles = [U, vf];
c([P(".divider")], et.prototype, "divider", 2);
c([h({ type: Number, reflect: !0 })], et.prototype, "position", 2);
c(
  [h({ attribute: "position-in-pixels", type: Number })],
  et.prototype,
  "positionInPixels",
  2,
);
c([h({ type: Boolean, reflect: !0 })], et.prototype, "vertical", 2);
c([h({ type: Boolean, reflect: !0 })], et.prototype, "disabled", 2);
c([h()], et.prototype, "primary", 2);
c([h({ reflect: !0 })], et.prototype, "snap", 1);
c(
  [h({ type: Number, attribute: "snap-threshold" })],
  et.prototype,
  "snapThreshold",
  2,
);
c([R("position")], et.prototype, "handlePositionChange", 1);
c([R("positionInPixels")], et.prototype, "handlePositionInPixelsChange", 1);
c([R("vertical")], et.prototype, "handleVerticalChange", 1);
var yf = "sl-split-panel";
et.define("sl-split-panel");
D({
  tagName: yf,
  elementClass: et,
  react: F,
  events: { onSlReposition: "sl-reposition" },
  displayName: "SlSplitPanel",
});
var _f = M`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,
  wf = 0,
  bt = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.attrId = ++wf),
        (this.componentId = `sl-tab-${this.attrId}`),
        (this.panel = ""),
        (this.active = !1),
        (this.closable = !1),
        (this.disabled = !1),
        (this.tabIndex = 0);
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "tab");
    }
    handleCloseClick(e) {
      e.stopPropagation(), this.emit("sl-close");
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false"),
        this.disabled && !this.active
          ? (this.tabIndex = -1)
          : (this.tabIndex = 0);
    }
    render() {
      return (
        (this.id = this.id.length > 0 ? this.id : this.componentId),
        $`
      <div
        part="base"
        class=${V({ tab: !0, "tab--active": this.active, "tab--closable": this.closable, "tab--disabled": this.disabled })}
      >
        <slot></slot>
        ${
          this.closable
            ? $`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `
            : ""
        }
      </div>
    `
      );
    }
  };
bt.styles = [U, _f];
bt.dependencies = { "sl-icon-button": $e };
c([P(".tab")], bt.prototype, "tab", 2);
c([h({ reflect: !0 })], bt.prototype, "panel", 2);
c([h({ type: Boolean, reflect: !0 })], bt.prototype, "active", 2);
c([h({ type: Boolean, reflect: !0 })], bt.prototype, "closable", 2);
c([h({ type: Boolean, reflect: !0 })], bt.prototype, "disabled", 2);
c([h({ type: Number, reflect: !0 })], bt.prototype, "tabIndex", 2);
c([R("active")], bt.prototype, "handleActiveChange", 1);
c([R("disabled")], bt.prototype, "handleDisabledChange", 1);
var xf = "sl-tab";
bt.define("sl-tab");
D({
  tagName: xf,
  elementClass: bt,
  react: F,
  events: { onSlClose: "sl-close" },
  displayName: "SlTab",
});
var kf = M`
  :host {
    display: contents;
  }
`,
  zt = class extends N {
    constructor() {
      super(...arguments),
        (this.attrOldValue = !1),
        (this.charData = !1),
        (this.charDataOldValue = !1),
        (this.childList = !1),
        (this.disabled = !1),
        (this.handleMutation = (e) => {
          this.emit("sl-mutation", { detail: { mutationList: e } });
        });
    }
    connectedCallback() {
      super.connectedCallback(),
        (this.mutationObserver = new MutationObserver(this.handleMutation)),
        this.disabled || this.startObserver();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.stopObserver();
    }
    startObserver() {
      const e = typeof this.attr == "string" && this.attr.length > 0,
        t = e && this.attr !== "*" ? this.attr.split(" ") : void 0;
      try {
        this.mutationObserver.observe(this, {
          subtree: !0,
          childList: this.childList,
          attributes: e,
          attributeFilter: t,
          attributeOldValue: this.attrOldValue,
          characterData: this.charData,
          characterDataOldValue: this.charDataOldValue,
        });
      } catch {}
    }
    stopObserver() {
      this.mutationObserver.disconnect();
    }
    handleDisabledChange() {
      this.disabled ? this.stopObserver() : this.startObserver();
    }
    handleChange() {
      this.stopObserver(), this.startObserver();
    }
    render() {
      return $` <slot></slot> `;
    }
  };
zt.styles = [U, kf];
c([h({ reflect: !0 })], zt.prototype, "attr", 2);
c(
  [h({ attribute: "attr-old-value", type: Boolean, reflect: !0 })],
  zt.prototype,
  "attrOldValue",
  2,
);
c(
  [h({ attribute: "char-data", type: Boolean, reflect: !0 })],
  zt.prototype,
  "charData",
  2,
);
c(
  [h({ attribute: "char-data-old-value", type: Boolean, reflect: !0 })],
  zt.prototype,
  "charDataOldValue",
  2,
);
c(
  [h({ attribute: "child-list", type: Boolean, reflect: !0 })],
  zt.prototype,
  "childList",
  2,
);
c([h({ type: Boolean, reflect: !0 })], zt.prototype, "disabled", 2);
c([R("disabled")], zt.prototype, "handleDisabledChange", 1);
c(
  [
    R("attr", { waitUntilFirstUpdate: !0 }),
    R("attr-old-value", { waitUntilFirstUpdate: !0 }),
    R("char-data", { waitUntilFirstUpdate: !0 }),
    R("char-data-old-value", { waitUntilFirstUpdate: !0 }),
    R("childList", { waitUntilFirstUpdate: !0 }),
  ],
  zt.prototype,
  "handleChange",
  1,
);
var Cf = "sl-mutation-observer";
zt.define("sl-mutation-observer");
D({
  tagName: Cf,
  elementClass: zt,
  react: F,
  events: { onSlMutation: "sl-mutation" },
  displayName: "SlMutationObserver",
});
var Sf = "sl-popup";
re.define("sl-popup");
D({
  tagName: Sf,
  elementClass: re,
  react: F,
  events: { onSlReposition: "sl-reposition" },
  displayName: "SlPopup",
});
var $f = M`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,
  ti = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.value = 0),
        (this.label = "");
    }
    updated(e) {
      if ((super.updated(e), e.has("value"))) {
        const t = parseFloat(
            getComputedStyle(this.indicator).getPropertyValue("r"),
          ),
          r = 2 * Math.PI * t,
          i = r - (this.value / 100) * r;
        this.indicatorOffset = `${i}px`;
      }
    }
    render() {
      return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
    }
  };
ti.styles = [U, $f];
c([P(".progress-ring__indicator")], ti.prototype, "indicator", 2);
c([H()], ti.prototype, "indicatorOffset", 2);
c([h({ type: Number, reflect: !0 })], ti.prototype, "value", 2);
c([h()], ti.prototype, "label", 2);
var Ef = "sl-progress-ring";
ti.define("sl-progress-ring");
var Af = D({
    tagName: Ef,
    elementClass: ti,
    react: F,
    events: {},
    displayName: "SlProgressRing",
  }),
  Rf = Af,
  zf = M`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,
  Tt = class extends N {
    constructor() {
      super(),
        (this.checked = !1),
        (this.hasFocus = !1),
        (this.size = "medium"),
        (this.disabled = !1),
        (this.handleBlur = () => {
          (this.hasFocus = !1), this.emit("sl-blur");
        }),
        (this.handleClick = () => {
          this.disabled || (this.checked = !0);
        }),
        (this.handleFocus = () => {
          (this.hasFocus = !0), this.emit("sl-focus");
        }),
        this.addEventListener("blur", this.handleBlur),
        this.addEventListener("click", this.handleClick),
        this.addEventListener("focus", this.handleFocus);
    }
    connectedCallback() {
      super.connectedCallback(), this.setInitialAttributes();
    }
    setInitialAttributes() {
      this.setAttribute("role", "radio"),
        this.setAttribute("tabindex", "-1"),
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleCheckedChange() {
      this.setAttribute("aria-checked", this.checked ? "true" : "false"),
        this.setAttribute("tabindex", this.checked ? "0" : "-1");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    render() {
      return $`
      <span
        part="base"
        class=${V({ radio: !0, "radio--checked": this.checked, "radio--disabled": this.disabled, "radio--focused": this.hasFocus, "radio--small": this.size === "small", "radio--medium": this.size === "medium", "radio--large": this.size === "large" })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? $` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
    }
  };
Tt.styles = [U, zf];
Tt.dependencies = { "sl-icon": ae };
c([H()], Tt.prototype, "checked", 2);
c([H()], Tt.prototype, "hasFocus", 2);
c([h()], Tt.prototype, "value", 2);
c([h({ reflect: !0 })], Tt.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], Tt.prototype, "disabled", 2);
c([R("checked")], Tt.prototype, "handleCheckedChange", 1);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  Tt.prototype,
  "handleDisabledChange",
  1,
);
var Tf = "sl-radio";
Tt.define("sl-radio");
D({
  tagName: Tf,
  elementClass: Tt,
  react: F,
  events: { onSlBlur: "sl-blur", onSlFocus: "sl-focus" },
  displayName: "SlRadio",
});
var Pf = M`
  :host {
    display: inline-block;
  }
`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const _d = "important",
  If = " !" + _d,
  Ze = Es(
    class extends As {
      constructor(e) {
        var t;
        if (
          (super(e),
          e.type !== Bt.ATTRIBUTE ||
            e.name !== "style" ||
            ((t = e.strings) == null ? void 0 : t.length) > 2)
        )
          throw Error(
            "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
          );
      }
      render(e) {
        return Object.keys(e).reduce((t, r) => {
          const i = e[r];
          return i == null
            ? t
            : t +
                `${(r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase())}:${i};`;
        }, "");
      }
      update(e, [t]) {
        const { style: r } = e.element;
        if (this.ft === void 0)
          return (this.ft = new Set(Object.keys(t))), this.render(t);
        for (const i of this.ft)
          t[i] == null &&
            (this.ft.delete(i),
            i.includes("-") ? r.removeProperty(i) : (r[i] = null));
        for (const i in t) {
          const s = t[i];
          if (s != null) {
            this.ft.add(i);
            const o = typeof s == "string" && s.endsWith(If);
            i.includes("-") || o
              ? r.setProperty(i, o ? s.slice(0, -11) : s, o ? _d : "")
              : (r[i] = s);
          }
        }
        return nt;
      }
    },
  );
let wd = null;
class xd {}
xd.render = function (e, t) {
  wd(e, t);
};
self.QrCreator = xd;
(function (e) {
  function t(n, l, d, p) {
    var u = {},
      f = e(d, l);
    f.u(n), f.J(), (p = p || 0);
    var m = f.h(),
      g = f.h() + 2 * p;
    return (
      (u.text = n),
      (u.level = l),
      (u.version = d),
      (u.O = g),
      (u.a = function (b, w) {
        return (
          (b -= p),
          (w -= p),
          0 > b || b >= m || 0 > w || w >= m ? !1 : f.a(b, w)
        );
      }),
      u
    );
  }
  function r(n, l, d, p, u, f, m, g, b, w) {
    function _(y, C, x, S, A, T, I) {
      y ? (n.lineTo(C + T, x + I), n.arcTo(C, x, S, A, f)) : n.lineTo(C, x);
    }
    m ? n.moveTo(l + f, d) : n.moveTo(l, d),
      _(g, p, d, p, u, -f, 0),
      _(b, p, u, l, u, 0, -f),
      _(w, l, u, l, d, f, 0),
      _(m, l, d, p, d, 0, f);
  }
  function i(n, l, d, p, u, f, m, g, b, w) {
    function _(y, C, x, S) {
      n.moveTo(y + x, C),
        n.lineTo(y, C),
        n.lineTo(y, C + S),
        n.arcTo(y, C, y + x, C, f);
    }
    m && _(l, d, f, f),
      g && _(p, d, -f, f),
      b && _(p, u, -f, -f),
      w && _(l, u, f, -f);
  }
  function s(n, l) {
    var d = l.fill;
    if (typeof d == "string") n.fillStyle = d;
    else {
      var p = d.type,
        u = d.colorStops;
      if (
        ((d = d.position.map((m) => Math.round(m * l.size))),
        p === "linear-gradient")
      )
        var f = n.createLinearGradient.apply(n, d);
      else if (p === "radial-gradient") f = n.createRadialGradient.apply(n, d);
      else throw Error("Unsupported fill");
      u.forEach(([m, g]) => {
        f.addColorStop(m, g);
      }),
        (n.fillStyle = f);
    }
  }
  function o(n, l) {
    e: {
      var d = l.text,
        p = l.v,
        u = l.N,
        f = l.K,
        m = l.P;
      for (u = Math.max(1, u || 1), f = Math.min(40, f || 40); u <= f; u += 1)
        try {
          var g = t(d, p, u, m);
          break e;
        } catch {}
      g = void 0;
    }
    if (!g) return null;
    for (
      d = n.getContext("2d"),
        l.background &&
          ((d.fillStyle = l.background),
          d.fillRect(l.left, l.top, l.size, l.size)),
        p = g.O,
        f = l.size / p,
        d.beginPath(),
        m = 0;
      m < p;
      m += 1
    )
      for (u = 0; u < p; u += 1) {
        var b = d,
          w = l.left + u * f,
          _ = l.top + m * f,
          y = m,
          C = u,
          x = g.a,
          S = w + f,
          A = _ + f,
          T = y - 1,
          I = y + 1,
          E = C - 1,
          z = C + 1,
          B = Math.floor(Math.min(0.5, Math.max(0, l.R)) * f),
          W = x(y, C),
          Be = x(T, E),
          ke = x(T, C);
        T = x(T, z);
        var kt = x(y, z);
        (z = x(I, z)),
          (C = x(I, C)),
          (I = x(I, E)),
          (y = x(y, E)),
          (w = Math.round(w)),
          (_ = Math.round(_)),
          (S = Math.round(S)),
          (A = Math.round(A)),
          W
            ? r(b, w, _, S, A, B, !ke && !y, !ke && !kt, !C && !kt, !C && !y)
            : i(
                b,
                w,
                _,
                S,
                A,
                B,
                ke && y && Be,
                ke && kt && T,
                C && kt && z,
                C && y && I,
              );
      }
    return s(d, l), d.fill(), n;
  }
  var a = {
    minVersion: 1,
    maxVersion: 40,
    ecLevel: "L",
    left: 0,
    top: 0,
    size: 200,
    fill: "#000",
    background: null,
    text: "no text",
    radius: 0.5,
    quiet: 0,
  };
  wd = function (n, l) {
    var d = {};
    Object.assign(d, a, n),
      (d.N = d.minVersion),
      (d.K = d.maxVersion),
      (d.v = d.ecLevel),
      (d.left = d.left),
      (d.top = d.top),
      (d.size = d.size),
      (d.fill = d.fill),
      (d.background = d.background),
      (d.text = d.text),
      (d.R = d.radius),
      (d.P = d.quiet),
      l instanceof HTMLCanvasElement
        ? ((l.width !== d.size || l.height !== d.size) &&
            ((l.width = d.size), (l.height = d.size)),
          l.getContext("2d").clearRect(0, 0, l.width, l.height),
          o(l, d))
        : ((n = document.createElement("canvas")),
          (n.width = d.size),
          (n.height = d.size),
          (d = o(n, d)),
          l.appendChild(d));
  };
})(
  (function () {
    function e(l) {
      var d = r.s(l);
      return {
        S: function () {
          return 4;
        },
        b: function () {
          return d.length;
        },
        write: function (p) {
          for (var u = 0; u < d.length; u += 1) p.put(d[u], 8);
        },
      };
    }
    function t() {
      var l = [],
        d = 0,
        p = {
          B: function () {
            return l;
          },
          c: function (u) {
            return ((l[Math.floor(u / 8)] >>> (7 - (u % 8))) & 1) == 1;
          },
          put: function (u, f) {
            for (var m = 0; m < f; m += 1) p.m(((u >>> (f - m - 1)) & 1) == 1);
          },
          f: function () {
            return d;
          },
          m: function (u) {
            var f = Math.floor(d / 8);
            l.length <= f && l.push(0), u && (l[f] |= 128 >>> d % 8), (d += 1);
          },
        };
      return p;
    }
    function r(l, d) {
      function p(y, C) {
        for (var x = -1; 7 >= x; x += 1)
          if (!(-1 >= y + x || g <= y + x))
            for (var S = -1; 7 >= S; S += 1)
              -1 >= C + S ||
                g <= C + S ||
                (m[y + x][C + S] =
                  (0 <= x && 6 >= x && (S == 0 || S == 6)) ||
                  (0 <= S && 6 >= S && (x == 0 || x == 6)) ||
                  (2 <= x && 4 >= x && 2 <= S && 4 >= S));
      }
      function u(y, C) {
        for (var x = (g = 4 * l + 17), S = Array(x), A = 0; A < x; A += 1) {
          S[A] = Array(x);
          for (var T = 0; T < x; T += 1) S[A][T] = null;
        }
        for (
          m = S, p(0, 0), p(g - 7, 0), p(0, g - 7), x = o.G(l), S = 0;
          S < x.length;
          S += 1
        )
          for (A = 0; A < x.length; A += 1) {
            T = x[S];
            var I = x[A];
            if (m[T][I] == null)
              for (var E = -2; 2 >= E; E += 1)
                for (var z = -2; 2 >= z; z += 1)
                  m[T + E][I + z] =
                    E == -2 ||
                    E == 2 ||
                    z == -2 ||
                    z == 2 ||
                    (E == 0 && z == 0);
          }
        for (x = 8; x < g - 8; x += 1)
          m[x][6] == null && (m[x][6] = x % 2 == 0);
        for (x = 8; x < g - 8; x += 1)
          m[6][x] == null && (m[6][x] = x % 2 == 0);
        for (x = o.w((f << 3) | C), S = 0; 15 > S; S += 1)
          (A = !y && ((x >> S) & 1) == 1),
            (m[6 > S ? S : 8 > S ? S + 1 : g - 15 + S][8] = A),
            (m[8][8 > S ? g - S - 1 : 9 > S ? 15 - S : 14 - S] = A);
        if (((m[g - 8][8] = !y), 7 <= l)) {
          for (x = o.A(l), S = 0; 18 > S; S += 1)
            (A = !y && ((x >> S) & 1) == 1),
              (m[Math.floor(S / 3)][(S % 3) + g - 8 - 3] = A);
          for (S = 0; 18 > S; S += 1)
            (A = !y && ((x >> S) & 1) == 1),
              (m[(S % 3) + g - 8 - 3][Math.floor(S / 3)] = A);
        }
        if (b == null) {
          for (y = n.I(l, f), x = t(), S = 0; S < w.length; S += 1)
            (A = w[S]), x.put(4, 4), x.put(A.b(), o.f(4, l)), A.write(x);
          for (S = A = 0; S < y.length; S += 1) A += y[S].j;
          if (x.f() > 8 * A)
            throw Error("code length overflow. (" + x.f() + ">" + 8 * A + ")");
          for (x.f() + 4 <= 8 * A && x.put(0, 4); x.f() % 8 != 0; ) x.m(!1);
          for (; !(x.f() >= 8 * A) && (x.put(236, 8), !(x.f() >= 8 * A)); )
            x.put(17, 8);
          var B = 0;
          for (
            A = S = 0, T = Array(y.length), I = Array(y.length), E = 0;
            E < y.length;
            E += 1
          ) {
            var W = y[E].j,
              Be = y[E].o - W;
            for (
              S = Math.max(S, W), A = Math.max(A, Be), T[E] = Array(W), z = 0;
              z < T[E].length;
              z += 1
            )
              T[E][z] = 255 & x.B()[z + B];
            for (
              B += W,
                z = o.C(Be),
                W = i(T[E], z.b() - 1).l(z),
                I[E] = Array(z.b() - 1),
                z = 0;
              z < I[E].length;
              z += 1
            )
              (Be = z + W.b() - I[E].length), (I[E][z] = 0 <= Be ? W.c(Be) : 0);
          }
          for (z = x = 0; z < y.length; z += 1) x += y[z].o;
          for (x = Array(x), z = B = 0; z < S; z += 1)
            for (E = 0; E < y.length; E += 1)
              z < T[E].length && ((x[B] = T[E][z]), (B += 1));
          for (z = 0; z < A; z += 1)
            for (E = 0; E < y.length; E += 1)
              z < I[E].length && ((x[B] = I[E][z]), (B += 1));
          b = x;
        }
        for (
          y = b, x = -1, S = g - 1, A = 7, T = 0, C = o.F(C), I = g - 1;
          0 < I;
          I -= 2
        )
          for (I == 6 && --I; ; ) {
            for (E = 0; 2 > E; E += 1)
              m[S][I - E] == null &&
                ((z = !1),
                T < y.length && (z = ((y[T] >>> A) & 1) == 1),
                C(S, I - E) && (z = !z),
                (m[S][I - E] = z),
                --A,
                A == -1 && ((T += 1), (A = 7)));
            if (((S += x), 0 > S || g <= S)) {
              (S -= x), (x = -x);
              break;
            }
          }
      }
      var f = s[d],
        m = null,
        g = 0,
        b = null,
        w = [],
        _ = {
          u: function (y) {
            (y = e(y)), w.push(y), (b = null);
          },
          a: function (y, C) {
            if (0 > y || g <= y || 0 > C || g <= C) throw Error(y + "," + C);
            return m[y][C];
          },
          h: function () {
            return g;
          },
          J: function () {
            for (var y = 0, C = 0, x = 0; 8 > x; x += 1) {
              u(!0, x);
              var S = o.D(_);
              (x == 0 || y > S) && ((y = S), (C = x));
            }
            u(!1, C);
          },
        };
      return _;
    }
    function i(l, d) {
      if (typeof l.length > "u") throw Error(l.length + "/" + d);
      var p = (function () {
          for (var f = 0; f < l.length && l[f] == 0; ) f += 1;
          for (var m = Array(l.length - f + d), g = 0; g < l.length - f; g += 1)
            m[g] = l[g + f];
          return m;
        })(),
        u = {
          c: function (f) {
            return p[f];
          },
          b: function () {
            return p.length;
          },
          multiply: function (f) {
            for (var m = Array(u.b() + f.b() - 1), g = 0; g < u.b(); g += 1)
              for (var b = 0; b < f.b(); b += 1)
                m[g + b] ^= a.i(a.g(u.c(g)) + a.g(f.c(b)));
            return i(m, 0);
          },
          l: function (f) {
            if (0 > u.b() - f.b()) return u;
            for (
              var m = a.g(u.c(0)) - a.g(f.c(0)), g = Array(u.b()), b = 0;
              b < u.b();
              b += 1
            )
              g[b] = u.c(b);
            for (b = 0; b < f.b(); b += 1) g[b] ^= a.i(a.g(f.c(b)) + m);
            return i(g, 0).l(f);
          },
        };
      return u;
    }
    r.s = function (l) {
      for (var d = [], p = 0; p < l.length; p++) {
        var u = l.charCodeAt(p);
        128 > u
          ? d.push(u)
          : 2048 > u
            ? d.push(192 | (u >> 6), 128 | (u & 63))
            : 55296 > u || 57344 <= u
              ? d.push(224 | (u >> 12), 128 | ((u >> 6) & 63), 128 | (u & 63))
              : (p++,
                (u = 65536 + (((u & 1023) << 10) | (l.charCodeAt(p) & 1023))),
                d.push(
                  240 | (u >> 18),
                  128 | ((u >> 12) & 63),
                  128 | ((u >> 6) & 63),
                  128 | (u & 63),
                ));
      }
      return d;
    };
    var s = { L: 1, M: 0, Q: 3, H: 2 },
      o = (function () {
        function l(u) {
          for (var f = 0; u != 0; ) (f += 1), (u >>>= 1);
          return f;
        }
        var d = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          p = {
            w: function (u) {
              for (var f = u << 10; 0 <= l(f) - l(1335); )
                f ^= 1335 << (l(f) - l(1335));
              return ((u << 10) | f) ^ 21522;
            },
            A: function (u) {
              for (var f = u << 12; 0 <= l(f) - l(7973); )
                f ^= 7973 << (l(f) - l(7973));
              return (u << 12) | f;
            },
            G: function (u) {
              return d[u - 1];
            },
            F: function (u) {
              switch (u) {
                case 0:
                  return function (f, m) {
                    return (f + m) % 2 == 0;
                  };
                case 1:
                  return function (f) {
                    return f % 2 == 0;
                  };
                case 2:
                  return function (f, m) {
                    return m % 3 == 0;
                  };
                case 3:
                  return function (f, m) {
                    return (f + m) % 3 == 0;
                  };
                case 4:
                  return function (f, m) {
                    return (Math.floor(f / 2) + Math.floor(m / 3)) % 2 == 0;
                  };
                case 5:
                  return function (f, m) {
                    return ((f * m) % 2) + ((f * m) % 3) == 0;
                  };
                case 6:
                  return function (f, m) {
                    return (((f * m) % 2) + ((f * m) % 3)) % 2 == 0;
                  };
                case 7:
                  return function (f, m) {
                    return (((f * m) % 3) + ((f + m) % 2)) % 2 == 0;
                  };
                default:
                  throw Error("bad maskPattern:" + u);
              }
            },
            C: function (u) {
              for (var f = i([1], 0), m = 0; m < u; m += 1)
                f = f.multiply(i([1, a.i(m)], 0));
              return f;
            },
            f: function (u, f) {
              if (u != 4 || 1 > f || 40 < f)
                throw Error("mode: " + u + "; type: " + f);
              return 10 > f ? 8 : 16;
            },
            D: function (u) {
              for (var f = u.h(), m = 0, g = 0; g < f; g += 1)
                for (var b = 0; b < f; b += 1) {
                  for (var w = 0, _ = u.a(g, b), y = -1; 1 >= y; y += 1)
                    if (!(0 > g + y || f <= g + y))
                      for (var C = -1; 1 >= C; C += 1)
                        0 > b + C ||
                          f <= b + C ||
                          ((y != 0 || C != 0) &&
                            _ == u.a(g + y, b + C) &&
                            (w += 1));
                  5 < w && (m += 3 + w - 5);
                }
              for (g = 0; g < f - 1; g += 1)
                for (b = 0; b < f - 1; b += 1)
                  (w = 0),
                    u.a(g, b) && (w += 1),
                    u.a(g + 1, b) && (w += 1),
                    u.a(g, b + 1) && (w += 1),
                    u.a(g + 1, b + 1) && (w += 1),
                    (w == 0 || w == 4) && (m += 3);
              for (g = 0; g < f; g += 1)
                for (b = 0; b < f - 6; b += 1)
                  u.a(g, b) &&
                    !u.a(g, b + 1) &&
                    u.a(g, b + 2) &&
                    u.a(g, b + 3) &&
                    u.a(g, b + 4) &&
                    !u.a(g, b + 5) &&
                    u.a(g, b + 6) &&
                    (m += 40);
              for (b = 0; b < f; b += 1)
                for (g = 0; g < f - 6; g += 1)
                  u.a(g, b) &&
                    !u.a(g + 1, b) &&
                    u.a(g + 2, b) &&
                    u.a(g + 3, b) &&
                    u.a(g + 4, b) &&
                    !u.a(g + 5, b) &&
                    u.a(g + 6, b) &&
                    (m += 40);
              for (b = w = 0; b < f; b += 1)
                for (g = 0; g < f; g += 1) u.a(g, b) && (w += 1);
              return (m += (Math.abs((100 * w) / f / f - 50) / 5) * 10);
            },
          };
        return p;
      })(),
      a = (function () {
        for (var l = Array(256), d = Array(256), p = 0; 8 > p; p += 1)
          l[p] = 1 << p;
        for (p = 8; 256 > p; p += 1)
          l[p] = l[p - 4] ^ l[p - 5] ^ l[p - 6] ^ l[p - 8];
        for (p = 0; 255 > p; p += 1) d[l[p]] = p;
        return {
          g: function (u) {
            if (1 > u) throw Error("glog(" + u + ")");
            return d[u];
          },
          i: function (u) {
            for (; 0 > u; ) u += 255;
            for (; 256 <= u; ) u -= 255;
            return l[u];
          },
        };
      })(),
      n = (function () {
        function l(u, f) {
          switch (f) {
            case s.L:
              return d[4 * (u - 1)];
            case s.M:
              return d[4 * (u - 1) + 1];
            case s.Q:
              return d[4 * (u - 1) + 2];
            case s.H:
              return d[4 * (u - 1) + 3];
          }
        }
        var d = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ],
          p = {
            I: function (u, f) {
              var m = l(u, f);
              if (typeof m > "u")
                throw Error(
                  "bad rs block @ typeNumber:" + u + "/errorCorrectLevel:" + f,
                );
              (u = m.length / 3), (f = []);
              for (var g = 0; g < u; g += 1)
                for (
                  var b = m[3 * g], w = m[3 * g + 1], _ = m[3 * g + 2], y = 0;
                  y < b;
                  y += 1
                ) {
                  var C = _,
                    x = {};
                  (x.o = w), (x.j = C), f.push(x);
                }
              return f;
            },
          };
        return p;
      })();
    return r;
  })(),
);
const Of = QrCreator;
var vt = class extends N {
  constructor() {
    super(...arguments),
      (this.value = ""),
      (this.label = ""),
      (this.size = 128),
      (this.fill = "black"),
      (this.background = "white"),
      (this.radius = 0),
      (this.errorCorrection = "H");
  }
  firstUpdated() {
    this.generate();
  }
  generate() {
    this.hasUpdated &&
      Of.render(
        {
          text: this.value,
          radius: this.radius,
          ecLevel: this.errorCorrection,
          fill: this.fill,
          background: this.background,
          size: this.size * 2,
        },
        this.canvas,
      );
  }
  render() {
    var e;
    return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e = this.label) == null ? void 0 : e.length) > 0 ? this.label : this.value}
        style=${Ze({ width: `${this.size}px`, height: `${this.size}px` })}
      ></canvas>
    `;
  }
};
vt.styles = [U, Pf];
c([P("canvas")], vt.prototype, "canvas", 2);
c([h()], vt.prototype, "value", 2);
c([h()], vt.prototype, "label", 2);
c([h({ type: Number })], vt.prototype, "size", 2);
c([h()], vt.prototype, "fill", 2);
c([h()], vt.prototype, "background", 2);
c([h({ type: Number })], vt.prototype, "radius", 2);
c([h({ attribute: "error-correction" })], vt.prototype, "errorCorrection", 2);
c(
  [R(["background", "errorCorrection", "fill", "radius", "size", "value"])],
  vt.prototype,
  "generate",
  1,
);
var Lf = "sl-qr-code";
vt.define("sl-qr-code");
D({
  tagName: Lf,
  elementClass: vt,
  react: F,
  events: {},
  displayName: "SlQrCode",
});
var kd = M`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,
  Nf = M`
  ${kd}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,
  yt = class extends N {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Ye(
          this,
          "[default]",
          "prefix",
          "suffix",
        )),
        (this.hasFocus = !1),
        (this.checked = !1),
        (this.disabled = !1),
        (this.size = "medium"),
        (this.pill = !1);
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "presentation");
    }
    handleBlur() {
      (this.hasFocus = !1), this.emit("sl-blur");
    }
    handleClick(e) {
      if (this.disabled) {
        e.preventDefault(), e.stopPropagation();
        return;
      }
      this.checked = !0;
    }
    handleFocus() {
      (this.hasFocus = !0), this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    focus(e) {
      this.input.focus(e);
    }
    blur() {
      this.input.blur();
    }
    render() {
      return cs`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${V({ button: !0, "button--default": !0, "button--small": this.size === "small", "button--medium": this.size === "medium", "button--large": this.size === "large", "button--checked": this.checked, "button--disabled": this.disabled, "button--focused": this.hasFocus, "button--outline": !0, "button--pill": this.pill, "button--has-label": this.hasSlotController.test("[default]"), "button--has-prefix": this.hasSlotController.test("prefix"), "button--has-suffix": this.hasSlotController.test("suffix") })}
          aria-disabled=${this.disabled}
          type="button"
          value=${L(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
    }
  };
yt.styles = [U, Nf];
c([P(".button")], yt.prototype, "input", 2);
c([P(".hidden-input")], yt.prototype, "hiddenInput", 2);
c([H()], yt.prototype, "hasFocus", 2);
c([h({ type: Boolean, reflect: !0 })], yt.prototype, "checked", 2);
c([h()], yt.prototype, "value", 2);
c([h({ type: Boolean, reflect: !0 })], yt.prototype, "disabled", 2);
c([h({ reflect: !0 })], yt.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], yt.prototype, "pill", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  yt.prototype,
  "handleDisabledChange",
  1,
);
var Ff = "sl-radio-button";
yt.define("sl-radio-button");
D({
  tagName: Ff,
  elementClass: yt,
  react: F,
  events: { onSlBlur: "sl-blur", onSlFocus: "sl-focus" },
  displayName: "SlRadioButton",
});
var Df = M`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,
  Mf = M`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,
  zr = class extends N {
    constructor() {
      super(...arguments), (this.disableRole = !1), (this.label = "");
    }
    handleFocus(e) {
      const t = Gi(e.target);
      t == null || t.toggleAttribute("data-sl-button-group__button--focus", !0);
    }
    handleBlur(e) {
      const t = Gi(e.target);
      t == null || t.toggleAttribute("data-sl-button-group__button--focus", !1);
    }
    handleMouseOver(e) {
      const t = Gi(e.target);
      t == null || t.toggleAttribute("data-sl-button-group__button--hover", !0);
    }
    handleMouseOut(e) {
      const t = Gi(e.target);
      t == null || t.toggleAttribute("data-sl-button-group__button--hover", !1);
    }
    handleSlotChange() {
      const e = [...this.defaultSlot.assignedElements({ flatten: !0 })];
      e.forEach((t) => {
        const r = e.indexOf(t),
          i = Gi(t);
        i &&
          (i.toggleAttribute("data-sl-button-group__button", !0),
          i.toggleAttribute("data-sl-button-group__button--first", r === 0),
          i.toggleAttribute(
            "data-sl-button-group__button--inner",
            r > 0 && r < e.length - 1,
          ),
          i.toggleAttribute(
            "data-sl-button-group__button--last",
            r === e.length - 1,
          ),
          i.toggleAttribute(
            "data-sl-button-group__button--radio",
            i.tagName.toLowerCase() === "sl-radio-button",
          ));
      });
    }
    render() {
      return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
  };
zr.styles = [U, Mf];
c([P("slot")], zr.prototype, "defaultSlot", 2);
c([H()], zr.prototype, "disableRole", 2);
c([h()], zr.prototype, "label", 2);
function Gi(e) {
  var t;
  const r = "sl-button, sl-radio-button";
  return (t = e.closest(r)) != null ? t : e.querySelector(r);
}
var Le = class extends N {
  constructor() {
    super(...arguments),
      (this.formControlController = new or(this)),
      (this.hasSlotController = new Ye(this, "help-text", "label")),
      (this.customValidityMessage = ""),
      (this.hasButtonGroup = !1),
      (this.errorMessage = ""),
      (this.defaultValue = ""),
      (this.label = ""),
      (this.helpText = ""),
      (this.name = "option"),
      (this.value = ""),
      (this.size = "medium"),
      (this.form = ""),
      (this.required = !1);
  }
  get validity() {
    const e = this.required && !this.value;
    return this.customValidityMessage !== "" ? Eh : e ? $h : xo;
  }
  get validationMessage() {
    const e = this.required && !this.value;
    return this.customValidityMessage !== ""
      ? this.customValidityMessage
      : e
        ? this.validationInput.validationMessage
        : "";
  }
  connectedCallback() {
    super.connectedCallback(), (this.defaultValue = this.value);
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("sl-radio, sl-radio-button")];
  }
  handleRadioClick(e) {
    const t = e.target.closest("sl-radio, sl-radio-button"),
      r = this.getAllRadios(),
      i = this.value;
    !t ||
      t.disabled ||
      ((this.value = t.value),
      r.forEach((s) => (s.checked = s === t)),
      this.value !== i && (this.emit("sl-change"), this.emit("sl-input")));
  }
  handleKeyDown(e) {
    var t;
    if (
      !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
    )
      return;
    const r = this.getAllRadios().filter((n) => !n.disabled),
      i = (t = r.find((n) => n.checked)) != null ? t : r[0],
      s = e.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(e.key) ? -1 : 1,
      o = this.value;
    let a = r.indexOf(i) + s;
    a < 0 && (a = r.length - 1),
      a > r.length - 1 && (a = 0),
      this.getAllRadios().forEach((n) => {
        (n.checked = !1),
          this.hasButtonGroup || n.setAttribute("tabindex", "-1");
      }),
      (this.value = r[a].value),
      (r[a].checked = !0),
      this.hasButtonGroup
        ? r[a].shadowRoot.querySelector("button").focus()
        : (r[a].setAttribute("tabindex", "0"), r[a].focus()),
      this.value !== o && (this.emit("sl-change"), this.emit("sl-input")),
      e.preventDefault();
  }
  handleLabelClick() {
    this.focus();
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1),
      this.formControlController.emitInvalidEvent(e);
  }
  async syncRadioElements() {
    var e, t;
    const r = this.getAllRadios();
    if (
      (await Promise.all(
        r.map(async (i) => {
          await i.updateComplete,
            (i.checked = i.value === this.value),
            (i.size = this.size);
        }),
      ),
      (this.hasButtonGroup = r.some(
        (i) => i.tagName.toLowerCase() === "sl-radio-button",
      )),
      r.length > 0 && !r.some((i) => i.checked))
    )
      if (this.hasButtonGroup) {
        const i =
          (e = r[0].shadowRoot) == null ? void 0 : e.querySelector("button");
        i && i.setAttribute("tabindex", "0");
      } else r[0].setAttribute("tabindex", "0");
    if (this.hasButtonGroup) {
      const i =
        (t = this.shadowRoot) == null
          ? void 0
          : t.querySelector("sl-button-group");
      i && (i.disableRole = !0);
    }
  }
  syncRadios() {
    if (
      customElements.get("sl-radio") &&
      customElements.get("sl-radio-button")
    ) {
      this.syncRadioElements();
      return;
    }
    customElements.get("sl-radio")
      ? this.syncRadioElements()
      : customElements.whenDefined("sl-radio").then(() => this.syncRadios()),
      customElements.get("sl-radio-button")
        ? this.syncRadioElements()
        : customElements
            .whenDefined("sl-radio-button")
            .then(() => this.syncRadios());
  }
  updateCheckedRadio() {
    this.getAllRadios().forEach((t) => (t.checked = t.value === this.value)),
      this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    this.hasUpdated && this.updateCheckedRadio();
  }
  checkValidity() {
    const e = this.required && !this.value,
      t = this.customValidityMessage !== "";
    return e || t ? (this.formControlController.emitInvalidEvent(), !1) : !0;
  }
  getForm() {
    return this.formControlController.getForm();
  }
  reportValidity() {
    const e = this.validity.valid;
    return (
      (this.errorMessage =
        this.customValidityMessage || e
          ? ""
          : this.validationInput.validationMessage),
      this.formControlController.setValidity(e),
      (this.validationInput.hidden = !0),
      clearTimeout(this.validationTimeout),
      e ||
        ((this.validationInput.hidden = !1),
        this.validationInput.reportValidity(),
        (this.validationTimeout = setTimeout(
          () => (this.validationInput.hidden = !0),
          1e4,
        ))),
      e
    );
  }
  setCustomValidity(e = "") {
    (this.customValidityMessage = e),
      (this.errorMessage = e),
      this.validationInput.setCustomValidity(e),
      this.formControlController.updateValidity();
  }
  focus(e) {
    const t = this.getAllRadios(),
      r = t.find((o) => o.checked),
      i = t.find((o) => !o.disabled),
      s = r || i;
    s && s.focus(e);
  }
  render() {
    const e = this.hasSlotController.test("label"),
      t = this.hasSlotController.test("help-text"),
      r = this.label ? !0 : !!e,
      i = this.helpText ? !0 : !!t,
      s = $`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return $`
      <fieldset
        part="form-control"
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--radio-group": !0, "form-control--has-label": r, "form-control--has-help-text": i })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${
            this.hasButtonGroup
              ? $`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `
              : s
          }
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
};
Le.styles = [U, ei, Df];
Le.dependencies = { "sl-button-group": zr };
c([P("slot:not([name])")], Le.prototype, "defaultSlot", 2);
c([P(".radio-group__validation-input")], Le.prototype, "validationInput", 2);
c([H()], Le.prototype, "hasButtonGroup", 2);
c([H()], Le.prototype, "errorMessage", 2);
c([H()], Le.prototype, "defaultValue", 2);
c([h()], Le.prototype, "label", 2);
c([h({ attribute: "help-text" })], Le.prototype, "helpText", 2);
c([h()], Le.prototype, "name", 2);
c([h({ reflect: !0 })], Le.prototype, "value", 2);
c([h({ reflect: !0 })], Le.prototype, "size", 2);
c([h({ reflect: !0 })], Le.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], Le.prototype, "required", 2);
c(
  [R("size", { waitUntilFirstUpdate: !0 })],
  Le.prototype,
  "handleSizeChange",
  1,
);
c([R("value")], Le.prototype, "handleValueChange", 1);
var Hf = "sl-radio-group";
Le.define("sl-radio-group");
D({
  tagName: Hf,
  elementClass: Le,
  react: F,
  events: {
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlRadioGroup",
});
var Bf = M`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,
  He = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.hoverValue = 0),
        (this.isHovering = !1),
        (this.label = ""),
        (this.value = 0),
        (this.max = 5),
        (this.precision = 1),
        (this.readonly = !1),
        (this.disabled = !1),
        (this.getSymbol = () =>
          '<sl-icon name="star-fill" library="system"></sl-icon>');
    }
    getValueFromMousePosition(e) {
      return this.getValueFromXCoordinate(e.clientX);
    }
    getValueFromTouchPosition(e) {
      return this.getValueFromXCoordinate(e.touches[0].clientX);
    }
    getValueFromXCoordinate(e) {
      const t = this.localize.dir() === "rtl",
        { left: r, right: i, width: s } = this.rating.getBoundingClientRect(),
        o = t
          ? this.roundToPrecision(((i - e) / s) * this.max, this.precision)
          : this.roundToPrecision(((e - r) / s) * this.max, this.precision);
      return Ce(o, 0, this.max);
    }
    handleClick(e) {
      this.disabled ||
        (this.setValue(this.getValueFromMousePosition(e)),
        this.emit("sl-change"));
    }
    setValue(e) {
      this.disabled ||
        this.readonly ||
        ((this.value = e === this.value ? 0 : e), (this.isHovering = !1));
    }
    handleKeyDown(e) {
      const t = this.localize.dir() === "ltr",
        r = this.localize.dir() === "rtl",
        i = this.value;
      if (!(this.disabled || this.readonly)) {
        if (
          e.key === "ArrowDown" ||
          (t && e.key === "ArrowLeft") ||
          (r && e.key === "ArrowRight")
        ) {
          const s = e.shiftKey ? 1 : this.precision;
          (this.value = Math.max(0, this.value - s)), e.preventDefault();
        }
        if (
          e.key === "ArrowUp" ||
          (t && e.key === "ArrowRight") ||
          (r && e.key === "ArrowLeft")
        ) {
          const s = e.shiftKey ? 1 : this.precision;
          (this.value = Math.min(this.max, this.value + s)), e.preventDefault();
        }
        e.key === "Home" && ((this.value = 0), e.preventDefault()),
          e.key === "End" && ((this.value = this.max), e.preventDefault()),
          this.value !== i && this.emit("sl-change");
      }
    }
    handleMouseEnter(e) {
      (this.isHovering = !0),
        (this.hoverValue = this.getValueFromMousePosition(e));
    }
    handleMouseMove(e) {
      this.hoverValue = this.getValueFromMousePosition(e);
    }
    handleMouseLeave() {
      this.isHovering = !1;
    }
    handleTouchStart(e) {
      (this.isHovering = !0),
        (this.hoverValue = this.getValueFromTouchPosition(e)),
        e.preventDefault();
    }
    handleTouchMove(e) {
      this.hoverValue = this.getValueFromTouchPosition(e);
    }
    handleTouchEnd(e) {
      (this.isHovering = !1),
        this.setValue(this.hoverValue),
        this.emit("sl-change"),
        e.preventDefault();
    }
    roundToPrecision(e, t = 0.5) {
      const r = 1 / t;
      return Math.ceil(e * r) / r;
    }
    handleHoverValueChange() {
      this.emit("sl-hover", {
        detail: { phase: "move", value: this.hoverValue },
      });
    }
    handleIsHoveringChange() {
      this.emit("sl-hover", {
        detail: {
          phase: this.isHovering ? "start" : "end",
          value: this.hoverValue,
        },
      });
    }
    focus(e) {
      this.rating.focus(e);
    }
    blur() {
      this.rating.blur();
    }
    render() {
      const e = this.localize.dir() === "rtl",
        t = Array.from(Array(this.max).keys());
      let r = 0;
      return (
        this.disabled || this.readonly
          ? (r = this.value)
          : (r = this.isHovering ? this.hoverValue : this.value),
        $`
      <div
        part="base"
        class=${V({ rating: !0, "rating--readonly": this.readonly, "rating--disabled": this.disabled, "rating--rtl": e })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled || this.readonly ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map((i) =>
            r > i && r < i + 1
              ? $`
                <span
                  class=${V({ rating__symbol: !0, "rating__partial-symbol-container": !0, "rating__symbol--hover": this.isHovering && Math.ceil(r) === i + 1 })}
                  role="presentation"
                >
                  <div
                    style=${Ze({ clipPath: e ? `inset(0 ${(r - i) * 100}% 0 0)` : `inset(0 0 0 ${(r - i) * 100}%)` })}
                  >
                    ${eo(this.getSymbol(i + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ze({ clipPath: e ? `inset(0 0 0 ${100 - (r - i) * 100}%)` : `inset(0 ${100 - (r - i) * 100}% 0 0)` })}
                  >
                    ${eo(this.getSymbol(i + 1))}
                  </div>
                </span>
              `
              : $`
              <span
                class=${V({ rating__symbol: !0, "rating__symbol--hover": this.isHovering && Math.ceil(r) === i + 1, "rating__symbol--active": r >= i + 1 })}
                role="presentation"
              >
                ${eo(this.getSymbol(i + 1))}
              </span>
            `,
          )}
        </span>
      </div>
    `
      );
    }
  };
He.styles = [U, Bf];
He.dependencies = { "sl-icon": ae };
c([P(".rating")], He.prototype, "rating", 2);
c([H()], He.prototype, "hoverValue", 2);
c([H()], He.prototype, "isHovering", 2);
c([h()], He.prototype, "label", 2);
c([h({ type: Number })], He.prototype, "value", 2);
c([h({ type: Number })], He.prototype, "max", 2);
c([h({ type: Number })], He.prototype, "precision", 2);
c([h({ type: Boolean, reflect: !0 })], He.prototype, "readonly", 2);
c([h({ type: Boolean, reflect: !0 })], He.prototype, "disabled", 2);
c([h()], He.prototype, "getSymbol", 2);
c([Ss({ passive: !0 })], He.prototype, "handleTouchMove", 1);
c([R("hoverValue")], He.prototype, "handleHoverValueChange", 1);
c([R("isHovering")], He.prototype, "handleIsHoveringChange", 1);
var Vf = "sl-rating";
He.define("sl-rating");
D({
  tagName: Vf,
  elementClass: He,
  react: F,
  events: { onSlChange: "sl-change", onSlHover: "sl-hover" },
  displayName: "SlRating",
});
var Uf = M`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,
  Tr = class extends N {
    constructor() {
      super(...arguments), (this.localize = new te(this)), (this.position = 50);
    }
    handleDrag(e) {
      const { width: t } = this.base.getBoundingClientRect(),
        r = this.localize.dir() === "rtl";
      e.preventDefault(),
        ds(this.base, {
          onMove: (i) => {
            (this.position = parseFloat(Ce((i / t) * 100, 0, 100).toFixed(2))),
              r && (this.position = 100 - this.position);
          },
          initialEvent: e,
        });
    }
    handleKeyDown(e) {
      const t = this.localize.dir() === "ltr",
        r = this.localize.dir() === "rtl";
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
        const i = e.shiftKey ? 10 : 1;
        let s = this.position;
        e.preventDefault(),
          ((t && e.key === "ArrowLeft") || (r && e.key === "ArrowRight")) &&
            (s -= i),
          ((t && e.key === "ArrowRight") || (r && e.key === "ArrowLeft")) &&
            (s += i),
          e.key === "Home" && (s = 0),
          e.key === "End" && (s = 100),
          (s = Ce(s, 0, 100)),
          (this.position = s);
      }
    }
    handlePositionChange() {
      this.emit("sl-change");
    }
    render() {
      const e = this.localize.dir() === "rtl";
      return $`
      <div
        part="base"
        id="image-comparer"
        class=${V({ "image-comparer": !0, "image-comparer--rtl": e })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ze({ clipPath: e ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)` })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ze({ left: e ? `${100 - this.position}%` : `${this.position}%` })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
    }
  };
Tr.styles = [U, Uf];
Tr.scopedElement = { "sl-icon": ae };
c([P(".image-comparer")], Tr.prototype, "base", 2);
c([P(".image-comparer__handle")], Tr.prototype, "handle", 2);
c([h({ type: Number, reflect: !0 })], Tr.prototype, "position", 2);
c(
  [R("position", { waitUntilFirstUpdate: !0 })],
  Tr.prototype,
  "handlePositionChange",
  1,
);
var qf = "sl-image-comparer";
Tr.define("sl-image-comparer");
D({
  tagName: qf,
  elementClass: Tr,
  react: F,
  events: { onSlChange: "sl-change" },
  displayName: "SlImageComparer",
});
var jf = M`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,
  j = class extends N {
    constructor() {
      super(...arguments),
        (this.formControlController = new or(this, {
          assumeInteractionOn: ["sl-blur", "sl-input"],
        })),
        (this.hasSlotController = new Ye(this, "help-text", "label")),
        (this.localize = new te(this)),
        (this.hasFocus = !1),
        (this.title = ""),
        (this.__numberInput = Object.assign(document.createElement("input"), {
          type: "number",
        })),
        (this.__dateInput = Object.assign(document.createElement("input"), {
          type: "date",
        })),
        (this.type = "text"),
        (this.name = ""),
        (this.value = ""),
        (this.defaultValue = ""),
        (this.size = "medium"),
        (this.filled = !1),
        (this.pill = !1),
        (this.label = ""),
        (this.helpText = ""),
        (this.clearable = !1),
        (this.disabled = !1),
        (this.placeholder = ""),
        (this.readonly = !1),
        (this.passwordToggle = !1),
        (this.passwordVisible = !1),
        (this.noSpinButtons = !1),
        (this.form = ""),
        (this.required = !1),
        (this.spellcheck = !0);
    }
    get valueAsDate() {
      var e;
      return (
        (this.__dateInput.type = this.type),
        (this.__dateInput.value = this.value),
        ((e = this.input) == null ? void 0 : e.valueAsDate) ||
          this.__dateInput.valueAsDate
      );
    }
    set valueAsDate(e) {
      (this.__dateInput.type = this.type),
        (this.__dateInput.valueAsDate = e),
        (this.value = this.__dateInput.value);
    }
    get valueAsNumber() {
      var e;
      return (
        (this.__numberInput.value = this.value),
        ((e = this.input) == null ? void 0 : e.valueAsNumber) ||
          this.__numberInput.valueAsNumber
      );
    }
    set valueAsNumber(e) {
      (this.__numberInput.valueAsNumber = e),
        (this.value = this.__numberInput.value);
    }
    get validity() {
      return this.input.validity;
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      (this.hasFocus = !1), this.emit("sl-blur");
    }
    handleChange() {
      (this.value = this.input.value), this.emit("sl-change");
    }
    handleClearClick(e) {
      e.preventDefault(),
        this.value !== "" &&
          ((this.value = ""),
          this.emit("sl-clear"),
          this.emit("sl-input"),
          this.emit("sl-change")),
        this.input.focus();
    }
    handleFocus() {
      (this.hasFocus = !0), this.emit("sl-focus");
    }
    handleInput() {
      (this.value = this.input.value),
        this.formControlController.updateValidity(),
        this.emit("sl-input");
    }
    handleInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    handleKeyDown(e) {
      const t = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      e.key === "Enter" &&
        !t &&
        setTimeout(() => {
          !e.defaultPrevented &&
            !e.isComposing &&
            this.formControlController.submit();
        });
    }
    handlePasswordToggle() {
      this.passwordVisible = !this.passwordVisible;
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStepChange() {
      (this.input.step = String(this.step)),
        this.formControlController.updateValidity();
    }
    async handleValueChange() {
      await this.updateComplete, this.formControlController.updateValidity();
    }
    focus(e) {
      this.input.focus(e);
    }
    blur() {
      this.input.blur();
    }
    select() {
      this.input.select();
    }
    setSelectionRange(e, t, r = "none") {
      this.input.setSelectionRange(e, t, r);
    }
    setRangeText(e, t, r, i = "preserve") {
      const s = t ?? this.input.selectionStart,
        o = r ?? this.input.selectionEnd;
      this.input.setRangeText(e, s, o, i),
        this.value !== this.input.value && (this.value = this.input.value);
    }
    showPicker() {
      "showPicker" in HTMLInputElement.prototype && this.input.showPicker();
    }
    stepUp() {
      this.input.stepUp(),
        this.value !== this.input.value && (this.value = this.input.value);
    }
    stepDown() {
      this.input.stepDown(),
        this.value !== this.input.value && (this.value = this.input.value);
    }
    checkValidity() {
      return this.input.checkValidity();
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return this.input.reportValidity();
    }
    setCustomValidity(e) {
      this.input.setCustomValidity(e),
        this.formControlController.updateValidity();
    }
    render() {
      const e = this.hasSlotController.test("label"),
        t = this.hasSlotController.test("help-text"),
        r = this.label ? !0 : !!e,
        i = this.helpText ? !0 : !!t,
        o =
          this.clearable &&
          !this.disabled &&
          !this.readonly &&
          (typeof this.value == "number" || this.value.length > 0);
      return $`
      <div
        part="form-control"
        class=${V({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-label": r, "form-control--has-help-text": i })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({ input: !0, "input--small": this.size === "small", "input--medium": this.size === "medium", "input--large": this.size === "large", "input--pill": this.pill, "input--standard": !this.filled, "input--filled": this.filled, "input--disabled": this.disabled, "input--focused": this.hasFocus, "input--empty": !this.value, "input--no-spin-buttons": this.noSpinButtons })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${L(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Gr(this.value)}
              autocapitalize=${L(this.autocapitalize)}
              autocomplete=${L(this.autocomplete)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${L(this.pattern)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${
              o
                ? $`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `
                : ""
            }
            ${
              this.passwordToggle && !this.disabled
                ? $`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${
                      this.passwordVisible
                        ? $`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `
                        : $`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `
                    }
                  </button>
                `
                : ""
            }

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
j.styles = [U, ei, jf];
j.dependencies = { "sl-icon": ae };
c([P(".input__control")], j.prototype, "input", 2);
c([H()], j.prototype, "hasFocus", 2);
c([h()], j.prototype, "title", 2);
c([h({ reflect: !0 })], j.prototype, "type", 2);
c([h()], j.prototype, "name", 2);
c([h()], j.prototype, "value", 2);
c([Ti()], j.prototype, "defaultValue", 2);
c([h({ reflect: !0 })], j.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], j.prototype, "filled", 2);
c([h({ type: Boolean, reflect: !0 })], j.prototype, "pill", 2);
c([h()], j.prototype, "label", 2);
c([h({ attribute: "help-text" })], j.prototype, "helpText", 2);
c([h({ type: Boolean })], j.prototype, "clearable", 2);
c([h({ type: Boolean, reflect: !0 })], j.prototype, "disabled", 2);
c([h()], j.prototype, "placeholder", 2);
c([h({ type: Boolean, reflect: !0 })], j.prototype, "readonly", 2);
c(
  [h({ attribute: "password-toggle", type: Boolean })],
  j.prototype,
  "passwordToggle",
  2,
);
c(
  [h({ attribute: "password-visible", type: Boolean })],
  j.prototype,
  "passwordVisible",
  2,
);
c(
  [h({ attribute: "no-spin-buttons", type: Boolean })],
  j.prototype,
  "noSpinButtons",
  2,
);
c([h({ reflect: !0 })], j.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], j.prototype, "required", 2);
c([h()], j.prototype, "pattern", 2);
c([h({ type: Number })], j.prototype, "minlength", 2);
c([h({ type: Number })], j.prototype, "maxlength", 2);
c([h()], j.prototype, "min", 2);
c([h()], j.prototype, "max", 2);
c([h()], j.prototype, "step", 2);
c([h()], j.prototype, "autocapitalize", 2);
c([h()], j.prototype, "autocorrect", 2);
c([h()], j.prototype, "autocomplete", 2);
c([h({ type: Boolean })], j.prototype, "autofocus", 2);
c([h()], j.prototype, "enterkeyhint", 2);
c(
  [
    h({
      type: Boolean,
      converter: {
        fromAttribute: (e) => !(!e || e === "false"),
        toAttribute: (e) => (e ? "true" : "false"),
      },
    }),
  ],
  j.prototype,
  "spellcheck",
  2,
);
c([h()], j.prototype, "inputmode", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  j.prototype,
  "handleDisabledChange",
  1,
);
c(
  [R("step", { waitUntilFirstUpdate: !0 })],
  j.prototype,
  "handleStepChange",
  1,
);
c(
  [R("value", { waitUntilFirstUpdate: !0 })],
  j.prototype,
  "handleValueChange",
  1,
);
var Wf = "sl-input";
j.define("sl-input");
var Kf = D({
    tagName: Wf,
    elementClass: j,
    react: F,
    events: {
      onSlBlur: "sl-blur",
      onSlChange: "sl-change",
      onSlClear: "sl-clear",
      onSlFocus: "sl-focus",
      onSlInput: "sl-input",
      onSlInvalid: "sl-invalid",
    },
    displayName: "SlInput",
  }),
  Qe = Kf,
  Qf = "sl-icon";
ae.define("sl-icon");
var Gf = D({
    tagName: Qf,
    elementClass: ae,
    react: F,
    events: { onSlLoad: "sl-load", onSlError: "sl-error" },
    displayName: "SlIcon",
  }),
  gn = Gf,
  Yf = M`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,
  Ao = class extends N {
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "menu");
    }
    handleClick(e) {
      const t = ["menuitem", "menuitemcheckbox"],
        r = e.composedPath(),
        i = r.find((n) => {
          var l;
          return t.includes(
            ((l = n == null ? void 0 : n.getAttribute) == null
              ? void 0
              : l.call(n, "role")) || "",
          );
        });
      if (
        !i ||
        r.find((n) => {
          var l;
          return (
            ((l = n == null ? void 0 : n.getAttribute) == null
              ? void 0
              : l.call(n, "role")) === "menu"
          );
        }) !== this
      )
        return;
      const a = i;
      a.type === "checkbox" && (a.checked = !a.checked),
        this.emit("sl-select", { detail: { item: a } });
    }
    handleKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        const t = this.getCurrentItem();
        e.preventDefault(), e.stopPropagation(), t == null || t.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        const t = this.getAllItems(),
          r = this.getCurrentItem();
        let i = r ? t.indexOf(r) : 0;
        t.length > 0 &&
          (e.preventDefault(),
          e.stopPropagation(),
          e.key === "ArrowDown"
            ? i++
            : e.key === "ArrowUp"
              ? i--
              : e.key === "Home"
                ? (i = 0)
                : e.key === "End" && (i = t.length - 1),
          i < 0 && (i = t.length - 1),
          i > t.length - 1 && (i = 0),
          this.setCurrentItem(t[i]),
          t[i].focus());
      }
    }
    handleMouseDown(e) {
      const t = e.target;
      this.isMenuItem(t) && this.setCurrentItem(t);
    }
    handleSlotChange() {
      const e = this.getAllItems();
      e.length > 0 && this.setCurrentItem(e[0]);
    }
    isMenuItem(e) {
      var t;
      return (
        e.tagName.toLowerCase() === "sl-menu-item" ||
        ["menuitem", "menuitemcheckbox", "menuitemradio"].includes(
          (t = e.getAttribute("role")) != null ? t : "",
        )
      );
    }
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: !0 })].filter(
        (e) => !(e.inert || !this.isMenuItem(e)),
      );
    }
    getCurrentItem() {
      return this.getAllItems().find((e) => e.getAttribute("tabindex") === "0");
    }
    setCurrentItem(e) {
      this.getAllItems().forEach((r) => {
        r.setAttribute("tabindex", r === e ? "0" : "-1");
      });
    }
    render() {
      return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
Ao.styles = [U, Yf];
c([P("slot")], Ao.prototype, "defaultSlot", 2);
var Xf = "sl-menu";
Ao.define("sl-menu");
var Jf = D({
    tagName: Xf,
    elementClass: Ao,
    react: F,
    events: { onSlSelect: "sl-select" },
    displayName: "SlMenu",
  }),
  Cd = Jf,
  Zf = M`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const us = (e, t) => {
    var i;
    const r = e._$AN;
    if (r === void 0) return !1;
    for (const s of r) (i = s._$AO) == null || i.call(s, t, !1), us(s, t);
    return !0;
  },
  po = (e) => {
    let t, r;
    do {
      if ((t = e._$AM) === void 0) break;
      (r = t._$AN), r.delete(e), (e = t);
    } while ((r == null ? void 0 : r.size) === 0);
  },
  Sd = (e) => {
    for (let t; (t = e._$AM); e = t) {
      let r = t._$AN;
      if (r === void 0) t._$AN = r = new Set();
      else if (r.has(e)) break;
      r.add(e), rm(t);
    }
  };
function em(e) {
  this._$AN !== void 0
    ? (po(this), (this._$AM = e), Sd(this))
    : (this._$AM = e);
}
function tm(e, t = !1, r = 0) {
  const i = this._$AH,
    s = this._$AN;
  if (s !== void 0 && s.size !== 0)
    if (t)
      if (Array.isArray(i))
        for (let o = r; o < i.length; o++) us(i[o], !1), po(i[o]);
      else i != null && (us(i, !1), po(i));
    else us(this, e);
}
const rm = (e) => {
  e.type == Bt.CHILD && (e._$AP ?? (e._$AP = tm), e._$AQ ?? (e._$AQ = em));
};
class im extends As {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(t, r, i) {
    super._$AT(t, r, i), Sd(this), (this.isConnected = t._$AU);
  }
  _$AO(t, r = !0) {
    var i, s;
    t !== this.isConnected &&
      ((this.isConnected = t),
      t
        ? (i = this.reconnected) == null || i.call(this)
        : (s = this.disconnected) == null || s.call(this)),
      r && (us(this, t), po(this));
  }
  setValue(t) {
    if (id(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const r = [...this._$Ct._$AH];
      (r[this._$Ci] = t), this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const sm = () => new om();
class om {}
const jo = new WeakMap(),
  am = Es(
    class extends im {
      render(e) {
        return de;
      }
      update(e, [t]) {
        var i;
        const r = t !== this.Y;
        return (
          r && this.Y !== void 0 && this.rt(void 0),
          (r || this.lt !== this.ct) &&
            ((this.Y = t),
            (this.ht = (i = e.options) == null ? void 0 : i.host),
            this.rt((this.ct = e.element))),
          de
        );
      }
      rt(e) {
        if ((this.isConnected || (e = void 0), typeof this.Y == "function")) {
          const t = this.ht ?? globalThis;
          let r = jo.get(t);
          r === void 0 && ((r = new WeakMap()), jo.set(t, r)),
            r.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            r.set(this.Y, e),
            e !== void 0 && this.Y.call(this.ht, e);
        } else this.Y.value = e;
      }
      get lt() {
        var e, t;
        return typeof this.Y == "function"
          ? (e = jo.get(this.ht ?? globalThis)) == null
            ? void 0
            : e.get(this.Y)
          : (t = this.Y) == null
            ? void 0
            : t.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    },
  );
var nm = class {
    constructor(e, t) {
      (this.popupRef = sm()),
        (this.enableSubmenuTimer = -1),
        (this.isConnected = !1),
        (this.isPopupConnected = !1),
        (this.skidding = 0),
        (this.submenuOpenDelay = 100),
        (this.handleMouseMove = (r) => {
          this.host.style.setProperty(
            "--safe-triangle-cursor-x",
            `${r.clientX}px`,
          ),
            this.host.style.setProperty(
              "--safe-triangle-cursor-y",
              `${r.clientY}px`,
            );
        }),
        (this.handleMouseOver = () => {
          this.hasSlotController.test("submenu") && this.enableSubmenu();
        }),
        (this.handleKeyDown = (r) => {
          switch (r.key) {
            case "Escape":
            case "Tab":
              this.disableSubmenu();
              break;
            case "ArrowLeft":
              r.target !== this.host &&
                (r.preventDefault(),
                r.stopPropagation(),
                this.host.focus(),
                this.disableSubmenu());
              break;
            case "ArrowRight":
            case "Enter":
            case " ":
              this.handleSubmenuEntry(r);
              break;
          }
        }),
        (this.handleClick = (r) => {
          var i;
          r.target === this.host
            ? (r.preventDefault(), r.stopPropagation())
            : r.target instanceof Element &&
              (r.target.tagName === "sl-menu-item" ||
                ((i = r.target.role) != null && i.startsWith("menuitem"))) &&
              this.disableSubmenu();
        }),
        (this.handleFocusOut = (r) => {
          (r.relatedTarget &&
            r.relatedTarget instanceof Element &&
            this.host.contains(r.relatedTarget)) ||
            this.disableSubmenu();
        }),
        (this.handlePopupMouseover = (r) => {
          r.stopPropagation();
        }),
        (this.handlePopupReposition = () => {
          const r = this.host.renderRoot.querySelector("slot[name='submenu']"),
            i =
              r == null
                ? void 0
                : r
                    .assignedElements({ flatten: !0 })
                    .filter((d) => d.localName === "sl-menu")[0],
            s = getComputedStyle(this.host).direction === "rtl";
          if (!i) return;
          const {
            left: o,
            top: a,
            width: n,
            height: l,
          } = i.getBoundingClientRect();
          this.host.style.setProperty(
            "--safe-triangle-submenu-start-x",
            `${s ? o + n : o}px`,
          ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-start-y",
              `${a}px`,
            ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-end-x",
              `${s ? o + n : o}px`,
            ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-end-y",
              `${a + l}px`,
            );
        }),
        (this.host = e).addController(this),
        (this.hasSlotController = t);
    }
    hostConnected() {
      this.hasSlotController.test("submenu") &&
        !this.host.disabled &&
        this.addListeners();
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      this.hasSlotController.test("submenu") && !this.host.disabled
        ? (this.addListeners(), this.updateSkidding())
        : this.removeListeners();
    }
    addListeners() {
      this.isConnected ||
        (this.host.addEventListener("mousemove", this.handleMouseMove),
        this.host.addEventListener("mouseover", this.handleMouseOver),
        this.host.addEventListener("keydown", this.handleKeyDown),
        this.host.addEventListener("click", this.handleClick),
        this.host.addEventListener("focusout", this.handleFocusOut),
        (this.isConnected = !0)),
        this.isPopupConnected ||
          (this.popupRef.value &&
            (this.popupRef.value.addEventListener(
              "mouseover",
              this.handlePopupMouseover,
            ),
            this.popupRef.value.addEventListener(
              "sl-reposition",
              this.handlePopupReposition,
            ),
            (this.isPopupConnected = !0)));
    }
    removeListeners() {
      this.isConnected &&
        (this.host.removeEventListener("mousemove", this.handleMouseMove),
        this.host.removeEventListener("mouseover", this.handleMouseOver),
        this.host.removeEventListener("keydown", this.handleKeyDown),
        this.host.removeEventListener("click", this.handleClick),
        this.host.removeEventListener("focusout", this.handleFocusOut),
        (this.isConnected = !1)),
        this.isPopupConnected &&
          this.popupRef.value &&
          (this.popupRef.value.removeEventListener(
            "mouseover",
            this.handlePopupMouseover,
          ),
          this.popupRef.value.removeEventListener(
            "sl-reposition",
            this.handlePopupReposition,
          ),
          (this.isPopupConnected = !1));
    }
    handleSubmenuEntry(e) {
      const t = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!t) {
        console.error(
          "Cannot activate a submenu if no corresponding menuitem can be found.",
          this,
        );
        return;
      }
      let r = null;
      for (const i of t.assignedElements())
        if (
          ((r = i.querySelectorAll("sl-menu-item, [role^='menuitem']")),
          r.length !== 0)
        )
          break;
      if (!(!r || r.length === 0)) {
        r[0].setAttribute("tabindex", "0");
        for (let i = 1; i !== r.length; ++i)
          r[i].setAttribute("tabindex", "-1");
        this.popupRef.value &&
          (e.preventDefault(),
          e.stopPropagation(),
          this.popupRef.value.active
            ? r[0] instanceof HTMLElement && r[0].focus()
            : (this.enableSubmenu(!1),
              this.host.updateComplete.then(() => {
                r[0] instanceof HTMLElement && r[0].focus();
              }),
              this.host.requestUpdate()));
      }
    }
    setSubmenuState(e) {
      this.popupRef.value &&
        this.popupRef.value.active !== e &&
        ((this.popupRef.value.active = e), this.host.requestUpdate());
    }
    enableSubmenu(e = !0) {
      e
        ? (window.clearTimeout(this.enableSubmenuTimer),
          (this.enableSubmenuTimer = window.setTimeout(() => {
            this.setSubmenuState(!0);
          }, this.submenuOpenDelay)))
        : this.setSubmenuState(!0);
    }
    disableSubmenu() {
      window.clearTimeout(this.enableSubmenuTimer), this.setSubmenuState(!1);
    }
    updateSkidding() {
      var e;
      if (!((e = this.host.parentElement) != null && e.computedStyleMap))
        return;
      const t = this.host.parentElement.computedStyleMap(),
        i = ["padding-top", "border-top-width", "margin-top"].reduce((s, o) => {
          var a;
          const n = (a = t.get(o)) != null ? a : new CSSUnitValue(0, "px"),
            d = (n instanceof CSSUnitValue ? n : new CSSUnitValue(0, "px")).to(
              "px",
            );
          return s - d.value;
        }, 0);
      this.skidding = i;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : !1;
    }
    renderSubmenu() {
      const e = getComputedStyle(this.host).direction === "rtl";
      return this.isConnected
        ? $`
      <sl-popup
        ${am(this.popupRef)}
        placement=${e ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `
        : $` <slot name="submenu" hidden></slot> `;
    }
  },
  tt = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.type = "normal"),
        (this.checked = !1),
        (this.value = ""),
        (this.loading = !1),
        (this.disabled = !1),
        (this.hasSlotController = new Ye(this, "submenu")),
        (this.submenuController = new nm(this, this.hasSlotController)),
        (this.handleHostClick = (e) => {
          this.disabled && (e.preventDefault(), e.stopImmediatePropagation());
        }),
        (this.handleMouseOver = (e) => {
          this.focus(), e.stopPropagation();
        });
    }
    connectedCallback() {
      super.connectedCallback(),
        this.addEventListener("click", this.handleHostClick),
        this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
      super.disconnectedCallback(),
        this.removeEventListener("click", this.handleHostClick),
        this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
      const e = this.getTextLabel();
      if (typeof this.cachedTextLabel > "u") {
        this.cachedTextLabel = e;
        return;
      }
      e !== this.cachedTextLabel &&
        ((this.cachedTextLabel = e),
        this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        (this.checked = !1),
          console.error(
            'The checked attribute can only be used on menu items with type="checkbox"',
            this,
          );
        return;
      }
      this.type === "checkbox"
        ? this.setAttribute("aria-checked", this.checked ? "true" : "false")
        : this.removeAttribute("aria-checked");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      this.type === "checkbox"
        ? (this.setAttribute("role", "menuitemcheckbox"),
          this.setAttribute("aria-checked", this.checked ? "true" : "false"))
        : (this.setAttribute("role", "menuitem"),
          this.removeAttribute("aria-checked"));
    }
    getTextLabel() {
      return Ah(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const e = this.localize.dir() === "rtl",
        t = this.submenuController.isExpanded();
      return $`
      <div
        id="anchor"
        part="base"
        class=${V({ "menu-item": !0, "menu-item--rtl": e, "menu-item--checked": this.checked, "menu-item--disabled": this.disabled, "menu-item--loading": this.loading, "menu-item--has-submenu": this.isSubmenu(), "menu-item--submenu-expanded": t })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? $` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
  };
tt.styles = [U, Zf];
tt.dependencies = { "sl-icon": ae, "sl-popup": re, "sl-spinner": Fi };
c([P("slot:not([name])")], tt.prototype, "defaultSlot", 2);
c([P(".menu-item")], tt.prototype, "menuItem", 2);
c([h()], tt.prototype, "type", 2);
c([h({ type: Boolean, reflect: !0 })], tt.prototype, "checked", 2);
c([h()], tt.prototype, "value", 2);
c([h({ type: Boolean, reflect: !0 })], tt.prototype, "loading", 2);
c([h({ type: Boolean, reflect: !0 })], tt.prototype, "disabled", 2);
c([R("checked")], tt.prototype, "handleCheckedChange", 1);
c([R("disabled")], tt.prototype, "handleDisabledChange", 1);
c([R("type")], tt.prototype, "handleTypeChange", 1);
var lm = "sl-menu-item";
tt.define("sl-menu-item");
var cm = D({
    tagName: lm,
    elementClass: tt,
    react: F,
    events: {},
    displayName: "SlMenuItem",
  }),
  es = cm,
  dm = M`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,
  bn = class extends N {
    render() {
      return $` <slot part="base" class="menu-label"></slot> `;
    }
  };
bn.styles = [U, dm];
var um = "sl-menu-label";
bn.define("sl-menu-label");
var hm = D({
    tagName: um,
    elementClass: bn,
    react: F,
    events: {},
    displayName: "SlMenuLabel",
  }),
  pm = hm,
  fm = M`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,
  ut = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.isInitialized = !1),
        (this.current = !1),
        (this.selected = !1),
        (this.hasHover = !1),
        (this.value = ""),
        (this.disabled = !1);
    }
    connectedCallback() {
      super.connectedCallback(),
        this.setAttribute("role", "option"),
        this.setAttribute("aria-selected", "false");
    }
    handleDefaultSlotChange() {
      this.isInitialized
        ? customElements.whenDefined("sl-select").then(() => {
            const e = this.closest("sl-select");
            e && e.handleDefaultSlotChange();
          })
        : (this.isInitialized = !0);
    }
    handleMouseEnter() {
      this.hasHover = !0;
    }
    handleMouseLeave() {
      this.hasHover = !1;
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleSelectedChange() {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
    }
    handleValueChange() {
      typeof this.value != "string" && (this.value = String(this.value)),
        this.value.includes(" ") &&
          (console.error(
            "Option values cannot include a space. All spaces have been replaced with underscores.",
            this,
          ),
          (this.value = this.value.replace(/ /g, "_")));
    }
    getTextLabel() {
      const e = this.childNodes;
      let t = "";
      return (
        [...e].forEach((r) => {
          r.nodeType === Node.ELEMENT_NODE &&
            (r.hasAttribute("slot") || (t += r.textContent)),
            r.nodeType === Node.TEXT_NODE && (t += r.textContent);
        }),
        t.trim()
      );
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ option: !0, "option--current": this.current, "option--disabled": this.disabled, "option--selected": this.selected, "option--hover": this.hasHover })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
    }
  };
ut.styles = [U, fm];
ut.dependencies = { "sl-icon": ae };
c([P(".option__label")], ut.prototype, "defaultSlot", 2);
c([H()], ut.prototype, "current", 2);
c([H()], ut.prototype, "selected", 2);
c([H()], ut.prototype, "hasHover", 2);
c([h({ reflect: !0 })], ut.prototype, "value", 2);
c([h({ type: Boolean, reflect: !0 })], ut.prototype, "disabled", 2);
c([R("disabled")], ut.prototype, "handleDisabledChange", 1);
c([R("selected")], ut.prototype, "handleSelectedChange", 1);
c([R("value")], ut.prototype, "handleValueChange", 1);
var mm = "sl-option";
ut.define("sl-option");
D({
  tagName: mm,
  elementClass: ut,
  react: F,
  events: {},
  displayName: "SlOption",
});
var gm = M`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,
  Di = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.value = 0),
        (this.indeterminate = !1),
        (this.label = "");
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ "progress-bar": !0, "progress-bar--indeterminate": this.indeterminate, "progress-bar--rtl": this.localize.dir() === "rtl" })}
        role="progressbar"
        title=${L(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ze({ width: `${this.value}%` })}>
          ${this.indeterminate ? "" : $` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `;
    }
  };
Di.styles = [U, gm];
c([h({ type: Number, reflect: !0 })], Di.prototype, "value", 2);
c([h({ type: Boolean, reflect: !0 })], Di.prototype, "indeterminate", 2);
c([h()], Di.prototype, "label", 2);
var bm = "sl-progress-bar";
Di.define("sl-progress-bar");
D({
  tagName: bm,
  elementClass: Di,
  react: F,
  events: {},
  displayName: "SlProgressBar",
});
var vm = M`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,
  zs = class extends N {
    constructor() {
      super(...arguments), (this.vertical = !1);
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "separator");
    }
    handleVerticalChange() {
      this.setAttribute(
        "aria-orientation",
        this.vertical ? "vertical" : "horizontal",
      );
    }
  };
zs.styles = [U, vm];
c([h({ type: Boolean, reflect: !0 })], zs.prototype, "vertical", 2);
c([R("vertical")], zs.prototype, "handleVerticalChange", 1);
var ym = "sl-divider";
zs.define("sl-divider");
D({
  tagName: ym,
  elementClass: zs,
  react: F,
  events: {},
  displayName: "SlDivider",
});
var _m = M`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,
  xl = new WeakMap();
function $d(e) {
  let t = xl.get(e);
  return t || ((t = window.getComputedStyle(e, null)), xl.set(e, t)), t;
}
function wm(e) {
  if (typeof e.checkVisibility == "function")
    return e.checkVisibility({ checkOpacity: !1, checkVisibilityCSS: !0 });
  const t = $d(e);
  return t.visibility !== "hidden" && t.display !== "none";
}
function xm(e) {
  const t = $d(e),
    { overflowY: r, overflowX: i } = t;
  return r === "scroll" || i === "scroll"
    ? !0
    : r !== "auto" || i !== "auto"
      ? !1
      : (e.scrollHeight > e.clientHeight && r === "auto") ||
        (e.scrollWidth > e.clientWidth && i === "auto");
}
function km(e) {
  const t = e.tagName.toLowerCase(),
    r = Number(e.getAttribute("tabindex"));
  if (
    (e.hasAttribute("tabindex") && (isNaN(r) || r <= -1)) ||
    e.hasAttribute("disabled") ||
    e.closest("[inert]")
  )
    return !1;
  if (t === "input" && e.getAttribute("type") === "radio") {
    const o = e.getRootNode(),
      a = `input[type='radio'][name="${e.getAttribute("name")}"]`,
      n = o.querySelector(`${a}:checked`);
    return n ? n === e : o.querySelector(a) === e;
  }
  return wm(e)
    ? ((t === "audio" || t === "video") && e.hasAttribute("controls")) ||
      e.hasAttribute("tabindex") ||
      (e.hasAttribute("contenteditable") &&
        e.getAttribute("contenteditable") !== "false") ||
      [
        "button",
        "input",
        "select",
        "textarea",
        "a",
        "audio",
        "video",
        "summary",
        "iframe",
      ].includes(t)
      ? !0
      : xm(e)
    : !1;
}
function Cm(e) {
  var t, r;
  const i = ka(e),
    s = (t = i[0]) != null ? t : null,
    o = (r = i[i.length - 1]) != null ? r : null;
  return { start: s, end: o };
}
function Sm(e, t) {
  var r;
  return (
    ((r = e.getRootNode({ composed: !0 })) == null ? void 0 : r.host) !== t
  );
}
function ka(e) {
  const t = new WeakMap(),
    r = [];
  function i(s) {
    if (s instanceof Element) {
      if (s.hasAttribute("inert") || s.closest("[inert]") || t.has(s)) return;
      t.set(s, !0),
        !r.includes(s) && km(s) && r.push(s),
        s instanceof HTMLSlotElement &&
          Sm(s, e) &&
          s.assignedElements({ flatten: !0 }).forEach((o) => {
            i(o);
          }),
        s.shadowRoot !== null &&
          s.shadowRoot.mode === "open" &&
          i(s.shadowRoot);
    }
    for (const o of s.children) i(o);
  }
  return (
    i(e),
    r.sort((s, o) => {
      const a = Number(s.getAttribute("tabindex")) || 0;
      return (Number(o.getAttribute("tabindex")) || 0) - a;
    })
  );
}
function* vn(e = document.activeElement) {
  e != null &&
    (yield e,
    "shadowRoot" in e &&
      e.shadowRoot &&
      e.shadowRoot.mode !== "closed" &&
      (yield* Nu(vn(e.shadowRoot.activeElement))));
}
function $m() {
  return [...vn()].pop();
}
var Yi = [],
  Ed = class {
    constructor(e) {
      (this.tabDirection = "forward"),
        (this.handleFocusIn = () => {
          this.isActive() && this.checkFocus();
        }),
        (this.handleKeyDown = (t) => {
          var r;
          if (t.key !== "Tab" || this.isExternalActivated || !this.isActive())
            return;
          const i = $m();
          if (
            ((this.previousFocus = i),
            this.previousFocus &&
              this.possiblyHasTabbableChildren(this.previousFocus))
          )
            return;
          t.shiftKey
            ? (this.tabDirection = "backward")
            : (this.tabDirection = "forward");
          const s = ka(this.element);
          let o = s.findIndex((n) => n === i);
          this.previousFocus = this.currentFocus;
          const a = this.tabDirection === "forward" ? 1 : -1;
          for (;;) {
            o + a >= s.length
              ? (o = 0)
              : o + a < 0
                ? (o = s.length - 1)
                : (o += a),
              (this.previousFocus = this.currentFocus);
            const n = s[o];
            if (
              (this.tabDirection === "backward" &&
                this.previousFocus &&
                this.possiblyHasTabbableChildren(this.previousFocus)) ||
              (n && this.possiblyHasTabbableChildren(n))
            )
              return;
            t.preventDefault(),
              (this.currentFocus = n),
              (r = this.currentFocus) == null || r.focus({ preventScroll: !1 });
            const l = [...vn()];
            if (
              l.includes(this.currentFocus) ||
              !l.includes(this.previousFocus)
            )
              break;
          }
          setTimeout(() => this.checkFocus());
        }),
        (this.handleKeyUp = () => {
          this.tabDirection = "forward";
        }),
        (this.element = e),
        (this.elementsWithTabbableControls = ["iframe"]);
    }
    activate() {
      Yi.push(this.element),
        document.addEventListener("focusin", this.handleFocusIn),
        document.addEventListener("keydown", this.handleKeyDown),
        document.addEventListener("keyup", this.handleKeyUp);
    }
    deactivate() {
      (Yi = Yi.filter((e) => e !== this.element)),
        (this.currentFocus = null),
        document.removeEventListener("focusin", this.handleFocusIn),
        document.removeEventListener("keydown", this.handleKeyDown),
        document.removeEventListener("keyup", this.handleKeyUp);
    }
    isActive() {
      return Yi[Yi.length - 1] === this.element;
    }
    activateExternal() {
      this.isExternalActivated = !0;
    }
    deactivateExternal() {
      this.isExternalActivated = !1;
    }
    checkFocus() {
      if (this.isActive() && !this.isExternalActivated) {
        const e = ka(this.element);
        if (!this.element.matches(":focus-within")) {
          const t = e[0],
            r = e[e.length - 1],
            i = this.tabDirection === "forward" ? t : r;
          typeof (i == null ? void 0 : i.focus) == "function" &&
            ((this.currentFocus = i), i.focus({ preventScroll: !1 }));
        }
      }
    }
    possiblyHasTabbableChildren(e) {
      return (
        this.elementsWithTabbableControls.includes(e.tagName.toLowerCase()) ||
        e.hasAttribute("controls")
      );
    }
  };
function kl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var rt = class extends N {
  constructor() {
    super(...arguments),
      (this.hasSlotController = new Ye(this, "footer")),
      (this.localize = new te(this)),
      (this.modal = new Ed(this)),
      (this.open = !1),
      (this.label = ""),
      (this.placement = "end"),
      (this.contained = !1),
      (this.noHeader = !1),
      (this.handleDocumentKeyDown = (e) => {
        this.contained ||
          (e.key === "Escape" &&
            this.modal.isActive() &&
            this.open &&
            (e.stopImmediatePropagation(), this.requestClose("keyboard")));
      });
  }
  firstUpdated() {
    (this.drawer.hidden = !this.open),
      this.open &&
        (this.addOpenListeners(),
        this.contained || (this.modal.activate(), ns(this)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ls(this), this.removeOpenListeners();
  }
  requestClose(e) {
    if (
      this.emit("sl-request-close", { cancelable: !0, detail: { source: e } })
        .defaultPrevented
    ) {
      const r = ue(this, "drawer.denyClose", { dir: this.localize.dir() });
      _e(this.panel, r.keyframes, r.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var e;
    "CloseWatcher" in window
      ? ((e = this.closeWatcher) == null || e.destroy(),
        this.contained ||
          ((this.closeWatcher = new CloseWatcher()),
          (this.closeWatcher.onclose = () => this.requestClose("keyboard"))))
      : document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("keydown", this.handleDocumentKeyDown),
      (e = this.closeWatcher) == null || e.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"),
        this.addOpenListeners(),
        (this.originalTrigger = document.activeElement),
        this.contained || (this.modal.activate(), ns(this));
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"),
        await Promise.all([Se(this.drawer), Se(this.overlay)]),
        (this.drawer.hidden = !1),
        requestAnimationFrame(() => {
          this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented ||
            (e
              ? e.focus({ preventScroll: !0 })
              : this.panel.focus({ preventScroll: !0 })),
            e && e.setAttribute("autofocus", "");
        });
      const t = ue(this, `drawer.show${kl(this.placement)}`, {
          dir: this.localize.dir(),
        }),
        r = ue(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        _e(this.panel, t.keyframes, t.options),
        _e(this.overlay, r.keyframes, r.options),
      ]),
        this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"),
        this.removeOpenListeners(),
        this.contained || (this.modal.deactivate(), ls(this)),
        await Promise.all([Se(this.drawer), Se(this.overlay)]);
      const e = ue(this, `drawer.hide${kl(this.placement)}`, {
          dir: this.localize.dir(),
        }),
        t = ue(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        _e(this.overlay, t.keyframes, t.options).then(() => {
          this.overlay.hidden = !0;
        }),
        _e(this.panel, e.keyframes, e.options).then(() => {
          this.panel.hidden = !0;
        }),
      ]),
        (this.drawer.hidden = !0),
        (this.overlay.hidden = !1),
        (this.panel.hidden = !1);
      const r = this.originalTrigger;
      typeof (r == null ? void 0 : r.focus) == "function" &&
        setTimeout(() => r.focus()),
        this.emit("sl-after-hide");
    }
  }
  handleNoModalChange() {
    this.open && !this.contained && (this.modal.activate(), ns(this)),
      this.open && this.contained && (this.modal.deactivate(), ls(this));
  }
  async show() {
    if (!this.open) return (this.open = !0), Ge(this, "sl-after-show");
  }
  async hide() {
    if (this.open) return (this.open = !1), Ge(this, "sl-after-hide");
  }
  render() {
    return $`
      <div
        part="base"
        class=${V({ drawer: !0, "drawer--open": this.open, "drawer--top": this.placement === "top", "drawer--end": this.placement === "end", "drawer--bottom": this.placement === "bottom", "drawer--start": this.placement === "start", "drawer--contained": this.contained, "drawer--fixed": !this.contained, "drawer--rtl": this.localize.dir() === "rtl", "drawer--has-footer": this.hasSlotController.test("footer") })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${L(this.noHeader ? this.label : void 0)}
          aria-labelledby=${L(this.noHeader ? void 0 : "title")}
          tabindex="0"
        >
          ${
            this.noHeader
              ? ""
              : $`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : "\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `
          }

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
rt.styles = [U, _m];
rt.dependencies = { "sl-icon-button": $e };
c([P(".drawer")], rt.prototype, "drawer", 2);
c([P(".drawer__panel")], rt.prototype, "panel", 2);
c([P(".drawer__overlay")], rt.prototype, "overlay", 2);
c([h({ type: Boolean, reflect: !0 })], rt.prototype, "open", 2);
c([h({ reflect: !0 })], rt.prototype, "label", 2);
c([h({ reflect: !0 })], rt.prototype, "placement", 2);
c([h({ type: Boolean, reflect: !0 })], rt.prototype, "contained", 2);
c(
  [h({ attribute: "no-header", type: Boolean, reflect: !0 })],
  rt.prototype,
  "noHeader",
  2,
);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  rt.prototype,
  "handleOpenChange",
  1,
);
c(
  [R("contained", { waitUntilFirstUpdate: !0 })],
  rt.prototype,
  "handleNoModalChange",
  1,
);
oe("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" },
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" },
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" },
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" },
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 },
});
oe("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 },
});
oe("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 },
});
var Em = "sl-drawer";
rt.define("sl-drawer");
var Am = D({
    tagName: Em,
    elementClass: rt,
    react: F,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
      onSlInitialFocus: "sl-initial-focus",
      onSlRequestClose: "sl-request-close",
    },
    displayName: "SlDrawer",
  }),
  Ad = Am,
  Rm = M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,
  Ne = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.open = !1),
        (this.placement = "bottom-start"),
        (this.disabled = !1),
        (this.stayOpenOnSelect = !1),
        (this.distance = 0),
        (this.skidding = 0),
        (this.hoist = !1),
        (this.sync = void 0),
        (this.handleKeyDown = (e) => {
          this.open &&
            e.key === "Escape" &&
            (e.stopPropagation(), this.hide(), this.focusOnTrigger());
        }),
        (this.handleDocumentKeyDown = (e) => {
          var t;
          if (e.key === "Escape" && this.open && !this.closeWatcher) {
            e.stopPropagation(), this.focusOnTrigger(), this.hide();
            return;
          }
          if (e.key === "Tab") {
            if (
              this.open &&
              ((t = document.activeElement) == null
                ? void 0
                : t.tagName.toLowerCase()) === "sl-menu-item"
            ) {
              e.preventDefault(), this.hide(), this.focusOnTrigger();
              return;
            }
            setTimeout(() => {
              var r, i, s;
              const o =
                ((r = this.containingElement) == null
                  ? void 0
                  : r.getRootNode()) instanceof ShadowRoot
                  ? (s =
                      (i = document.activeElement) == null
                        ? void 0
                        : i.shadowRoot) == null
                    ? void 0
                    : s.activeElement
                  : document.activeElement;
              (!this.containingElement ||
                (o == null
                  ? void 0
                  : o.closest(this.containingElement.tagName.toLowerCase())) !==
                  this.containingElement) &&
                this.hide();
            });
          }
        }),
        (this.handleDocumentMouseDown = (e) => {
          const t = e.composedPath();
          this.containingElement &&
            !t.includes(this.containingElement) &&
            this.hide();
        }),
        (this.handlePanelSelect = (e) => {
          const t = e.target;
          !this.stayOpenOnSelect &&
            t.tagName.toLowerCase() === "sl-menu" &&
            (this.hide(), this.focusOnTrigger());
        });
    }
    connectedCallback() {
      super.connectedCallback(),
        this.containingElement || (this.containingElement = this);
    }
    firstUpdated() {
      (this.panel.hidden = !this.open),
        this.open && (this.addOpenListeners(), (this.popup.active = !0));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeOpenListeners(), this.hide();
    }
    focusOnTrigger() {
      const e = this.trigger.assignedElements({ flatten: !0 })[0];
      typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
    }
    getMenu() {
      return this.panel
        .assignedElements({ flatten: !0 })
        .find((e) => e.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      this.open ? this.hide() : (this.show(), this.focusOnTrigger());
    }
    async handleTriggerKeyDown(e) {
      if ([" ", "Enter"].includes(e.key)) {
        e.preventDefault(), this.handleTriggerClick();
        return;
      }
      const t = this.getMenu();
      if (t) {
        const r = t.getAllItems(),
          i = r[0],
          s = r[r.length - 1];
        ["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key) &&
          (e.preventDefault(),
          this.open || (this.show(), await this.updateComplete),
          r.length > 0 &&
            this.updateComplete.then(() => {
              (e.key === "ArrowDown" || e.key === "Home") &&
                (t.setCurrentItem(i), i.focus()),
                (e.key === "ArrowUp" || e.key === "End") &&
                  (t.setCurrentItem(s), s.focus());
            }));
      }
    }
    handleTriggerKeyUp(e) {
      e.key === " " && e.preventDefault();
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    updateAccessibleTrigger() {
      const t = this.trigger
        .assignedElements({ flatten: !0 })
        .find((i) => Cm(i).start);
      let r;
      if (t) {
        switch (t.tagName.toLowerCase()) {
          case "sl-button":
          case "sl-icon-button":
            r = t.button;
            break;
          default:
            r = t;
        }
        r.setAttribute("aria-haspopup", "true"),
          r.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    async show() {
      if (!this.open) return (this.open = !0), Ge(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), Ge(this, "sl-after-hide");
    }
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      var e;
      this.panel.addEventListener("sl-select", this.handlePanelSelect),
        "CloseWatcher" in window
          ? ((e = this.closeWatcher) == null || e.destroy(),
            (this.closeWatcher = new CloseWatcher()),
            (this.closeWatcher.onclose = () => {
              this.hide(), this.focusOnTrigger();
            }))
          : this.panel.addEventListener("keydown", this.handleKeyDown),
        document.addEventListener("keydown", this.handleDocumentKeyDown),
        document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      var e;
      this.panel &&
        (this.panel.removeEventListener("sl-select", this.handlePanelSelect),
        this.panel.removeEventListener("keydown", this.handleKeyDown)),
        document.removeEventListener("keydown", this.handleDocumentKeyDown),
        document.removeEventListener("mousedown", this.handleDocumentMouseDown),
        (e = this.closeWatcher) == null || e.destroy();
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = !1;
        return;
      }
      if ((this.updateAccessibleTrigger(), this.open)) {
        this.emit("sl-show"),
          this.addOpenListeners(),
          await Se(this),
          (this.panel.hidden = !1),
          (this.popup.active = !0);
        const { keyframes: e, options: t } = ue(this, "dropdown.show", {
          dir: this.localize.dir(),
        });
        await _e(this.popup.popup, e, t), this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"), this.removeOpenListeners(), await Se(this);
        const { keyframes: e, options: t } = ue(this, "dropdown.hide", {
          dir: this.localize.dir(),
        });
        await _e(this.popup.popup, e, t),
          (this.panel.hidden = !0),
          (this.popup.active = !1),
          this.emit("sl-after-hide");
      }
    }
    render() {
      return $`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${L(this.sync ? this.sync : void 0)}
        class=${V({ dropdown: !0, "dropdown--open": this.open })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
  };
Ne.styles = [U, Rm];
Ne.dependencies = { "sl-popup": re };
c([P(".dropdown")], Ne.prototype, "popup", 2);
c([P(".dropdown__trigger")], Ne.prototype, "trigger", 2);
c([P(".dropdown__panel")], Ne.prototype, "panel", 2);
c([h({ type: Boolean, reflect: !0 })], Ne.prototype, "open", 2);
c([h({ reflect: !0 })], Ne.prototype, "placement", 2);
c([h({ type: Boolean, reflect: !0 })], Ne.prototype, "disabled", 2);
c(
  [h({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })],
  Ne.prototype,
  "stayOpenOnSelect",
  2,
);
c([h({ attribute: !1 })], Ne.prototype, "containingElement", 2);
c([h({ type: Number })], Ne.prototype, "distance", 2);
c([h({ type: Number })], Ne.prototype, "skidding", 2);
c([h({ type: Boolean })], Ne.prototype, "hoist", 2);
c([h({ reflect: !0 })], Ne.prototype, "sync", 2);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  Ne.prototype,
  "handleOpenChange",
  1,
);
oe("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});
oe("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
var zm = "sl-dropdown";
Ne.define("sl-dropdown");
var Tm = D({
    tagName: zm,
    elementClass: Ne,
    react: F,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlDropdown",
  }),
  Rd = Tm,
  it = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.date = new Date()),
        (this.hourFormat = "auto");
    }
    render() {
      const e = new Date(this.date),
        t = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
      if (!isNaN(e.getMilliseconds()))
        return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e, { weekday: this.weekday, era: this.era, year: this.year, month: this.month, day: this.day, hour: this.hour, minute: this.minute, second: this.second, timeZoneName: this.timeZoneName, timeZone: this.timeZone, hour12: t })}
      </time>
    `;
    }
  };
c([h()], it.prototype, "date", 2);
c([h()], it.prototype, "weekday", 2);
c([h()], it.prototype, "era", 2);
c([h()], it.prototype, "year", 2);
c([h()], it.prototype, "month", 2);
c([h()], it.prototype, "day", 2);
c([h()], it.prototype, "hour", 2);
c([h()], it.prototype, "minute", 2);
c([h()], it.prototype, "second", 2);
c([h({ attribute: "time-zone-name" })], it.prototype, "timeZoneName", 2);
c([h({ attribute: "time-zone" })], it.prototype, "timeZone", 2);
c([h({ attribute: "hour-format" })], it.prototype, "hourFormat", 2);
var Pm = "sl-format-date";
it.define("sl-format-date");
D({
  tagName: Pm,
  elementClass: it,
  react: F,
  events: {},
  displayName: "SlFormatDate",
});
var Ts = class extends N {
  constructor() {
    super(...arguments),
      (this.localize = new te(this)),
      (this.value = 0),
      (this.unit = "byte"),
      (this.display = "short");
  }
  render() {
    if (isNaN(this.value)) return "";
    const e = ["", "kilo", "mega", "giga", "tera"],
      t = ["", "kilo", "mega", "giga", "tera", "peta"],
      r = this.unit === "bit" ? e : t,
      i = Math.max(
        0,
        Math.min(Math.floor(Math.log10(this.value) / 3), r.length - 1),
      ),
      s = r[i] + this.unit,
      o = parseFloat((this.value / Math.pow(1e3, i)).toPrecision(3));
    return this.localize.number(o, {
      style: "unit",
      unit: s,
      unitDisplay: this.display,
    });
  }
};
c([h({ type: Number })], Ts.prototype, "value", 2);
c([h()], Ts.prototype, "unit", 2);
c([h()], Ts.prototype, "display", 2);
var Im = "sl-format-bytes";
Ts.define("sl-format-bytes");
D({
  tagName: Im,
  elementClass: Ts,
  react: F,
  events: {},
  displayName: "SlFormatBytes",
});
var _t = class extends N {
  constructor() {
    super(...arguments),
      (this.localize = new te(this)),
      (this.value = 0),
      (this.type = "decimal"),
      (this.noGrouping = !1),
      (this.currency = "USD"),
      (this.currencyDisplay = "symbol");
  }
  render() {
    return isNaN(this.value)
      ? ""
      : this.localize.number(this.value, {
          style: this.type,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          useGrouping: !this.noGrouping,
          minimumIntegerDigits: this.minimumIntegerDigits,
          minimumFractionDigits: this.minimumFractionDigits,
          maximumFractionDigits: this.maximumFractionDigits,
          minimumSignificantDigits: this.minimumSignificantDigits,
          maximumSignificantDigits: this.maximumSignificantDigits,
        });
  }
};
c([h({ type: Number })], _t.prototype, "value", 2);
c([h()], _t.prototype, "type", 2);
c(
  [h({ attribute: "no-grouping", type: Boolean })],
  _t.prototype,
  "noGrouping",
  2,
);
c([h()], _t.prototype, "currency", 2);
c([h({ attribute: "currency-display" })], _t.prototype, "currencyDisplay", 2);
c(
  [h({ attribute: "minimum-integer-digits", type: Number })],
  _t.prototype,
  "minimumIntegerDigits",
  2,
);
c(
  [h({ attribute: "minimum-fraction-digits", type: Number })],
  _t.prototype,
  "minimumFractionDigits",
  2,
);
c(
  [h({ attribute: "maximum-fraction-digits", type: Number })],
  _t.prototype,
  "maximumFractionDigits",
  2,
);
c(
  [h({ attribute: "minimum-significant-digits", type: Number })],
  _t.prototype,
  "minimumSignificantDigits",
  2,
);
c(
  [h({ attribute: "maximum-significant-digits", type: Number })],
  _t.prototype,
  "maximumSignificantDigits",
  2,
);
var Om = "sl-format-number";
_t.define("sl-format-number");
D({
  tagName: Om,
  elementClass: _t,
  react: F,
  events: {},
  displayName: "SlFormatNumber",
});
var Lm = "sl-icon-button";
$e.define("sl-icon-button");
var Nm = D({
    tagName: Lm,
    elementClass: $e,
    react: F,
    events: { onSlBlur: "sl-blur", onSlFocus: "sl-focus" },
    displayName: "SlIconButton",
  }),
  Ue = Nm,
  Fm = M`
  :host {
    display: block;
  }
`,
  Wo = new Map();
function Dm(e, t = "cors") {
  const r = Wo.get(e);
  if (r !== void 0) return Promise.resolve(r);
  const i = fetch(e, { mode: t }).then(async (s) => {
    const o = { ok: s.ok, status: s.status, html: await s.text() };
    return Wo.set(e, o), o;
  });
  return Wo.set(e, i), i;
}
var ri = class extends N {
  constructor() {
    super(...arguments), (this.mode = "cors"), (this.allowScripts = !1);
  }
  executeScript(e) {
    const t = document.createElement("script");
    [...e.attributes].forEach((r) => t.setAttribute(r.name, r.value)),
      (t.textContent = e.textContent),
      e.parentNode.replaceChild(t, e);
  }
  async handleSrcChange() {
    try {
      const e = this.src,
        t = await Dm(e, this.mode);
      if (e !== this.src) return;
      if (!t.ok) {
        this.emit("sl-error", { detail: { status: t.status } });
        return;
      }
      (this.innerHTML = t.html),
        this.allowScripts &&
          [...this.querySelectorAll("script")].forEach((r) =>
            this.executeScript(r),
          ),
        this.emit("sl-load");
    } catch {
      this.emit("sl-error", { detail: { status: -1 } });
    }
  }
  render() {
    return $`<slot></slot>`;
  }
};
ri.styles = [U, Fm];
c([h()], ri.prototype, "src", 2);
c([h()], ri.prototype, "mode", 2);
c(
  [h({ attribute: "allow-scripts", type: Boolean })],
  ri.prototype,
  "allowScripts",
  2,
);
c([R("src")], ri.prototype, "handleSrcChange", 1);
var Mm = "sl-include";
ri.define("sl-include");
D({
  tagName: Mm,
  elementClass: ri,
  react: F,
  events: { onSlLoad: "sl-load", onSlError: "sl-error" },
  displayName: "SlInclude",
});
var Hm = M`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,
  yn = class extends N {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Ye(this, "footer", "header", "image"));
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ card: !0, "card--has-footer": this.hasSlotController.test("footer"), "card--has-image": this.hasSlotController.test("image"), "card--has-header": this.hasSlotController.test("header") })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
  };
yn.styles = [U, Hm];
var Bm = "sl-card";
yn.define("sl-card");
var Vm = D({
    tagName: Bm,
    elementClass: yn,
    react: F,
    events: {},
    displayName: "SlCard",
  }),
  Ro = Vm,
  Um = class {
    constructor(e, t) {
      (this.timerId = 0),
        (this.activeInteractions = 0),
        (this.paused = !1),
        (this.stopped = !0),
        (this.pause = () => {
          this.activeInteractions++ ||
            ((this.paused = !0), this.host.requestUpdate());
        }),
        (this.resume = () => {
          --this.activeInteractions ||
            ((this.paused = !1), this.host.requestUpdate());
        }),
        e.addController(this),
        (this.host = e),
        (this.tickCallback = t);
    }
    hostConnected() {
      this.host.addEventListener("mouseenter", this.pause),
        this.host.addEventListener("mouseleave", this.resume),
        this.host.addEventListener("focusin", this.pause),
        this.host.addEventListener("focusout", this.resume),
        this.host.addEventListener("touchstart", this.pause, { passive: !0 }),
        this.host.addEventListener("touchend", this.resume);
    }
    hostDisconnected() {
      this.stop(),
        this.host.removeEventListener("mouseenter", this.pause),
        this.host.removeEventListener("mouseleave", this.resume),
        this.host.removeEventListener("focusin", this.pause),
        this.host.removeEventListener("focusout", this.resume),
        this.host.removeEventListener("touchstart", this.pause),
        this.host.removeEventListener("touchend", this.resume);
    }
    start(e) {
      this.stop(),
        (this.stopped = !1),
        (this.timerId = window.setInterval(() => {
          this.paused || this.tickCallback();
        }, e));
    }
    stop() {
      clearInterval(this.timerId),
        (this.stopped = !0),
        this.host.requestUpdate();
    }
  },
  qm = M`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* jm(e, t) {
  if (e !== void 0) {
    let r = 0;
    for (const i of e) yield t(i, r++);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* Wm(e, t, r = 1) {
  const i = t === void 0 ? 0 : e;
  t ?? (t = e);
  for (let s = i; r > 0 ? s < t : t < s; s += r) yield s;
}
var be = class extends N {
  constructor() {
    super(...arguments),
      (this.loop = !1),
      (this.navigation = !1),
      (this.pagination = !1),
      (this.autoplay = !1),
      (this.autoplayInterval = 3e3),
      (this.slidesPerPage = 1),
      (this.slidesPerMove = 1),
      (this.orientation = "horizontal"),
      (this.mouseDragging = !1),
      (this.activeSlide = 0),
      (this.scrolling = !1),
      (this.dragging = !1),
      (this.autoplayController = new Um(this, () => this.next())),
      (this.dragStartPosition = [-1, -1]),
      (this.localize = new te(this)),
      (this.pendingSlideChange = !1),
      (this.handleMouseDrag = (e) => {
        this.dragging ||
          (this.scrollContainer.style.setProperty("scroll-snap-type", "none"),
          (this.dragging = !0),
          (this.dragStartPosition = [e.clientX, e.clientY])),
          this.scrollContainer.scrollBy({
            left: -e.movementX,
            top: -e.movementY,
            behavior: "instant",
          });
      }),
      (this.handleMouseDragEnd = () => {
        const e = this.scrollContainer;
        document.removeEventListener("pointermove", this.handleMouseDrag, {
          capture: !0,
        });
        const t = e.scrollLeft,
          r = e.scrollTop;
        e.style.removeProperty("scroll-snap-type"),
          e.style.setProperty("overflow", "hidden");
        const i = e.scrollLeft,
          s = e.scrollTop;
        e.style.removeProperty("overflow"),
          e.style.setProperty("scroll-snap-type", "none"),
          e.scrollTo({ left: t, top: r, behavior: "instant" }),
          requestAnimationFrame(async () => {
            (t !== i || r !== s) &&
              (e.scrollTo({
                left: i,
                top: s,
                behavior: _a() ? "auto" : "smooth",
              }),
              await Ge(e, "scrollend")),
              e.style.removeProperty("scroll-snap-type"),
              (this.dragging = !1),
              (this.dragStartPosition = [-1, -1]),
              this.handleScrollEnd();
          });
      }),
      (this.handleSlotChange = (e) => {
        e.some((r) =>
          [...r.addedNodes, ...r.removedNodes].some(
            (i) => this.isCarouselItem(i) && !i.hasAttribute("data-clone"),
          ),
        ) && this.initializeSlides(),
          this.requestUpdate();
      });
  }
  connectedCallback() {
    super.connectedCallback(),
      this.setAttribute("role", "region"),
      this.setAttribute("aria-label", this.localize.term("carousel"));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this.mutationObserver) == null || e.disconnect();
  }
  firstUpdated() {
    this.initializeSlides(),
      (this.mutationObserver = new MutationObserver(this.handleSlotChange)),
      this.mutationObserver.observe(this, { childList: !0, subtree: !0 });
  }
  willUpdate(e) {
    (e.has("slidesPerMove") || e.has("slidesPerPage")) &&
      (this.slidesPerMove = Math.min(this.slidesPerMove, this.slidesPerPage));
  }
  getPageCount() {
    const e = this.getSlides().length,
      { slidesPerPage: t, slidesPerMove: r, loop: i } = this,
      s = i ? e / r : (e - t) / r + 1;
    return Math.ceil(s);
  }
  getCurrentPage() {
    return Math.ceil(this.activeSlide / this.slidesPerMove);
  }
  canScrollNext() {
    return this.loop || this.getCurrentPage() < this.getPageCount() - 1;
  }
  canScrollPrev() {
    return this.loop || this.getCurrentPage() > 0;
  }
  getSlides({ excludeClones: e = !0 } = {}) {
    return [...this.children].filter(
      (t) => this.isCarouselItem(t) && (!e || !t.hasAttribute("data-clone")),
    );
  }
  handleClick(e) {
    if (
      this.dragging &&
      this.dragStartPosition[0] > 0 &&
      this.dragStartPosition[1] > 0
    ) {
      const t = Math.abs(this.dragStartPosition[0] - e.clientX),
        r = Math.abs(this.dragStartPosition[1] - e.clientY);
      Math.sqrt(t * t + r * r) >= 10 && e.preventDefault();
    }
  }
  handleKeyDown(e) {
    if (
      [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key)
    ) {
      const t = e.target,
        r = this.localize.dir() === "rtl",
        i = t.closest('[part~="pagination-item"]') !== null,
        s =
          e.key === "ArrowDown" ||
          (!r && e.key === "ArrowRight") ||
          (r && e.key === "ArrowLeft"),
        o =
          e.key === "ArrowUp" ||
          (!r && e.key === "ArrowLeft") ||
          (r && e.key === "ArrowRight");
      e.preventDefault(),
        o && this.previous(),
        s && this.next(),
        e.key === "Home" && this.goToSlide(0),
        e.key === "End" && this.goToSlide(this.getSlides().length - 1),
        i &&
          this.updateComplete.then(() => {
            var a;
            const n =
              (a = this.shadowRoot) == null
                ? void 0
                : a.querySelector('[part~="pagination-item--active"]');
            n && n.focus();
          });
    }
  }
  handleMouseDragStart(e) {
    this.mouseDragging &&
      e.button === 0 &&
      (e.preventDefault(),
      document.addEventListener("pointermove", this.handleMouseDrag, {
        capture: !0,
        passive: !0,
      }),
      document.addEventListener("pointerup", this.handleMouseDragEnd, {
        capture: !0,
        once: !0,
      }));
  }
  handleScroll() {
    (this.scrolling = !0), this.pendingSlideChange || this.synchronizeSlides();
  }
  synchronizeSlides() {
    const e = new IntersectionObserver(
      (t) => {
        e.disconnect();
        for (const n of t) {
          const l = n.target;
          l.toggleAttribute("inert", !n.isIntersecting),
            l.classList.toggle("--in-view", n.isIntersecting),
            l.setAttribute("aria-hidden", n.isIntersecting ? "false" : "true");
        }
        const r = t.find((n) => n.isIntersecting);
        if (!r) return;
        const i = this.getSlides({ excludeClones: !1 }),
          s = this.getSlides().length,
          o = i.indexOf(r.target),
          a = this.loop ? o - this.slidesPerPage : o;
        if (
          ((this.activeSlide =
            (Math.ceil(a / this.slidesPerMove) * this.slidesPerMove + s) % s),
          !this.scrolling && this.loop && r.target.hasAttribute("data-clone"))
        ) {
          const n = Number(r.target.getAttribute("data-clone"));
          this.goToSlide(n, "instant");
        }
      },
      { root: this.scrollContainer, threshold: 0.6 },
    );
    this.getSlides({ excludeClones: !1 }).forEach((t) => {
      e.observe(t);
    });
  }
  handleScrollEnd() {
    !this.scrolling ||
      this.dragging ||
      ((this.scrolling = !1),
      (this.pendingSlideChange = !1),
      this.synchronizeSlides());
  }
  isCarouselItem(e) {
    return (
      e instanceof Element && e.tagName.toLowerCase() === "sl-carousel-item"
    );
  }
  initializeSlides() {
    this.getSlides({ excludeClones: !1 }).forEach((e, t) => {
      e.classList.remove("--in-view"),
        e.classList.remove("--is-active"),
        e.setAttribute("aria-label", this.localize.term("slideNum", t + 1)),
        e.hasAttribute("data-clone") && e.remove();
    }),
      this.updateSlidesSnap(),
      this.loop && this.createClones(),
      this.goToSlide(this.activeSlide, "auto"),
      this.synchronizeSlides();
  }
  createClones() {
    const e = this.getSlides(),
      t = this.slidesPerPage,
      r = e.slice(-t),
      i = e.slice(0, t);
    r.reverse().forEach((s, o) => {
      const a = s.cloneNode(!0);
      a.setAttribute("data-clone", String(e.length - o - 1)), this.prepend(a);
    }),
      i.forEach((s, o) => {
        const a = s.cloneNode(!0);
        a.setAttribute("data-clone", String(o)), this.append(a);
      });
  }
  handleSlideChange() {
    const e = this.getSlides();
    e.forEach((t, r) => {
      t.classList.toggle("--is-active", r === this.activeSlide);
    }),
      this.hasUpdated &&
        this.emit("sl-slide-change", {
          detail: { index: this.activeSlide, slide: e[this.activeSlide] },
        });
  }
  updateSlidesSnap() {
    const e = this.getSlides(),
      t = this.slidesPerMove;
    e.forEach((r, i) => {
      (i + t) % t === 0
        ? r.style.removeProperty("scroll-snap-align")
        : r.style.setProperty("scroll-snap-align", "none");
    });
  }
  handleAutoplayChange() {
    this.autoplayController.stop(),
      this.autoplay && this.autoplayController.start(this.autoplayInterval);
  }
  previous(e = "smooth") {
    this.goToSlide(this.activeSlide - this.slidesPerMove, e);
  }
  next(e = "smooth") {
    this.goToSlide(this.activeSlide + this.slidesPerMove, e);
  }
  goToSlide(e, t = "smooth") {
    const { slidesPerPage: r, loop: i } = this,
      s = this.getSlides(),
      o = this.getSlides({ excludeClones: !1 });
    if (!s.length) return;
    const a = i ? (e + s.length) % s.length : Ce(e, 0, s.length - r);
    this.activeSlide = a;
    const n = this.localize.dir() === "rtl",
      l = Ce(e + (i ? r : 0) + (n ? r - 1 : 0), 0, o.length - 1),
      d = o[l];
    this.scrollToSlide(d, _a() ? "auto" : t);
  }
  scrollToSlide(e, t = "smooth") {
    (this.pendingSlideChange = !0),
      window.requestAnimationFrame(() => {
        if (!this.scrollContainer) return;
        const r = this.scrollContainer,
          i = r.getBoundingClientRect(),
          s = e.getBoundingClientRect(),
          o = s.left - i.left,
          a = s.top - i.top;
        o || a
          ? ((this.pendingSlideChange = !0),
            r.scrollTo({
              left: o + r.scrollLeft,
              top: a + r.scrollTop,
              behavior: t,
            }))
          : (this.pendingSlideChange = !1);
      });
  }
  render() {
    const { slidesPerMove: e, scrolling: t } = this,
      r = this.getPageCount(),
      i = this.getCurrentPage(),
      s = this.canScrollPrev(),
      o = this.canScrollNext(),
      a = this.localize.dir() === "ltr";
    return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${V({ carousel__slides: !0, "carousel__slides--horizontal": this.orientation === "horizontal", "carousel__slides--vertical": this.orientation === "vertical", "carousel__slides--dragging": this.dragging })}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t ? "true" : "false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${
          this.navigation
            ? $`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${V({ "carousel__navigation-button": !0, "carousel__navigation-button--previous": !0, "carousel__navigation-button--disabled": !s })}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s ? "false" : "true"}"
                  @click=${s ? () => this.previous() : null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a ? "chevron-left" : "chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${V({ "carousel__navigation-button": !0, "carousel__navigation-button--next": !0, "carousel__navigation-button--disabled": !o })}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o ? "false" : "true"}"
                  @click=${o ? () => this.next() : null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a ? "chevron-right" : "chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `
            : ""
        }
        ${
          this.pagination
            ? $`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${jm(Wm(r), (n) => {
                  const l = n === i;
                  return $`
                    <button
                      part="pagination-item ${l ? "pagination-item--active" : ""}"
                      class="${V({ "carousel__pagination-item": !0, "carousel__pagination-item--active": l })}"
                      role="tab"
                      aria-selected="${l ? "true" : "false"}"
                      aria-label="${this.localize.term("goToSlide", n + 1, r)}"
                      tabindex=${l ? "0" : "-1"}
                      @click=${() => this.goToSlide(n * e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `;
                })}
              </div>
            `
            : ""
        }
      </div>
    `;
  }
};
be.styles = [U, qm];
be.dependencies = { "sl-icon": ae };
c([h({ type: Boolean, reflect: !0 })], be.prototype, "loop", 2);
c([h({ type: Boolean, reflect: !0 })], be.prototype, "navigation", 2);
c([h({ type: Boolean, reflect: !0 })], be.prototype, "pagination", 2);
c([h({ type: Boolean, reflect: !0 })], be.prototype, "autoplay", 2);
c(
  [h({ type: Number, attribute: "autoplay-interval" })],
  be.prototype,
  "autoplayInterval",
  2,
);
c(
  [h({ type: Number, attribute: "slides-per-page" })],
  be.prototype,
  "slidesPerPage",
  2,
);
c(
  [h({ type: Number, attribute: "slides-per-move" })],
  be.prototype,
  "slidesPerMove",
  2,
);
c([h()], be.prototype, "orientation", 2);
c(
  [h({ type: Boolean, reflect: !0, attribute: "mouse-dragging" })],
  be.prototype,
  "mouseDragging",
  2,
);
c([P(".carousel__slides")], be.prototype, "scrollContainer", 2);
c([P(".carousel__pagination")], be.prototype, "paginationContainer", 2);
c([H()], be.prototype, "activeSlide", 2);
c([H()], be.prototype, "scrolling", 2);
c([H()], be.prototype, "dragging", 2);
c([Ss({ passive: !0 })], be.prototype, "handleScroll", 1);
c(
  [
    R("loop", { waitUntilFirstUpdate: !0 }),
    R("slidesPerPage", { waitUntilFirstUpdate: !0 }),
  ],
  be.prototype,
  "initializeSlides",
  1,
);
c([R("activeSlide")], be.prototype, "handleSlideChange", 1);
c([R("slidesPerMove")], be.prototype, "updateSlidesSnap", 1);
c([R("autoplay")], be.prototype, "handleAutoplayChange", 1);
var Km = "sl-carousel";
be.define("sl-carousel");
D({
  tagName: Km,
  elementClass: be,
  react: F,
  events: { onSlSlideChange: "sl-slide-change" },
  displayName: "SlCarousel",
});
var Qm = M`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,
  _n = class extends N {
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "group");
    }
    render() {
      return $` <slot></slot> `;
    }
  };
_n.styles = [U, Qm];
var Gm = "sl-carousel-item";
_n.define("sl-carousel-item");
D({
  tagName: Gm,
  elementClass: _n,
  react: F,
  events: {},
  displayName: "SlCarouselItem",
});
var Ym = M`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,
  ie = class extends N {
    constructor() {
      super(...arguments),
        (this.formControlController = new or(this, {
          assumeInteractionOn: ["click"],
        })),
        (this.hasSlotController = new Ye(
          this,
          "[default]",
          "prefix",
          "suffix",
        )),
        (this.localize = new te(this)),
        (this.hasFocus = !1),
        (this.invalid = !1),
        (this.title = ""),
        (this.variant = "default"),
        (this.size = "medium"),
        (this.caret = !1),
        (this.disabled = !1),
        (this.loading = !1),
        (this.outline = !1),
        (this.pill = !1),
        (this.circle = !1),
        (this.type = "button"),
        (this.name = ""),
        (this.value = ""),
        (this.href = ""),
        (this.rel = "noreferrer noopener");
    }
    get validity() {
      return this.isButton() ? this.button.validity : xo;
    }
    get validationMessage() {
      return this.isButton() ? this.button.validationMessage : "";
    }
    firstUpdated() {
      this.isButton() && this.formControlController.updateValidity();
    }
    handleBlur() {
      (this.hasFocus = !1), this.emit("sl-blur");
    }
    handleFocus() {
      (this.hasFocus = !0), this.emit("sl-focus");
    }
    handleClick() {
      this.type === "submit" && this.formControlController.submit(this),
        this.type === "reset" && this.formControlController.reset(this);
    }
    handleInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    isButton() {
      return !this.href;
    }
    isLink() {
      return !!this.href;
    }
    handleDisabledChange() {
      this.isButton() && this.formControlController.setValidity(this.disabled);
    }
    click() {
      this.button.click();
    }
    focus(e) {
      this.button.focus(e);
    }
    blur() {
      this.button.blur();
    }
    checkValidity() {
      return this.isButton() ? this.button.checkValidity() : !0;
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return this.isButton() ? this.button.reportValidity() : !0;
    }
    setCustomValidity(e) {
      this.isButton() &&
        (this.button.setCustomValidity(e),
        this.formControlController.updateValidity());
    }
    render() {
      const e = this.isLink(),
        t = e ? no`a` : no`button`;
      return cs`
      <${t}
        part="base"
        class=${V({ button: !0, "button--default": this.variant === "default", "button--primary": this.variant === "primary", "button--success": this.variant === "success", "button--neutral": this.variant === "neutral", "button--warning": this.variant === "warning", "button--danger": this.variant === "danger", "button--text": this.variant === "text", "button--small": this.size === "small", "button--medium": this.size === "medium", "button--large": this.size === "large", "button--caret": this.caret, "button--circle": this.circle, "button--disabled": this.disabled, "button--focused": this.hasFocus, "button--loading": this.loading, "button--standard": !this.outline, "button--outline": this.outline, "button--pill": this.pill, "button--rtl": this.localize.dir() === "rtl", "button--has-label": this.hasSlotController.test("[default]"), "button--has-prefix": this.hasSlotController.test("prefix"), "button--has-suffix": this.hasSlotController.test("suffix") })}
        ?disabled=${L(e ? void 0 : this.disabled)}
        type=${L(e ? void 0 : this.type)}
        title=${this.title}
        name=${L(e ? void 0 : this.name)}
        value=${L(e ? void 0 : this.value)}
        href=${L(e && !this.disabled ? this.href : void 0)}
        target=${L(e ? this.target : void 0)}
        download=${L(e ? this.download : void 0)}
        rel=${L(e ? this.rel : void 0)}
        role=${L(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? cs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? cs`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${t}>
    `;
    }
  };
ie.styles = [U, kd];
ie.dependencies = { "sl-icon": ae, "sl-spinner": Fi };
c([P(".button")], ie.prototype, "button", 2);
c([H()], ie.prototype, "hasFocus", 2);
c([H()], ie.prototype, "invalid", 2);
c([h()], ie.prototype, "title", 2);
c([h({ reflect: !0 })], ie.prototype, "variant", 2);
c([h({ reflect: !0 })], ie.prototype, "size", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "caret", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "disabled", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "loading", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "outline", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "pill", 2);
c([h({ type: Boolean, reflect: !0 })], ie.prototype, "circle", 2);
c([h()], ie.prototype, "type", 2);
c([h()], ie.prototype, "name", 2);
c([h()], ie.prototype, "value", 2);
c([h()], ie.prototype, "href", 2);
c([h()], ie.prototype, "target", 2);
c([h()], ie.prototype, "rel", 2);
c([h()], ie.prototype, "download", 2);
c([h()], ie.prototype, "form", 2);
c([h({ attribute: "formaction" })], ie.prototype, "formAction", 2);
c([h({ attribute: "formenctype" })], ie.prototype, "formEnctype", 2);
c([h({ attribute: "formmethod" })], ie.prototype, "formMethod", 2);
c(
  [h({ attribute: "formnovalidate", type: Boolean })],
  ie.prototype,
  "formNoValidate",
  2,
);
c([h({ attribute: "formtarget" })], ie.prototype, "formTarget", 2);
c(
  [R("disabled", { waitUntilFirstUpdate: !0 })],
  ie.prototype,
  "handleDisabledChange",
  1,
);
function De(e, t) {
  Xm(e) && (e = "100%");
  const r = Jm(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    r && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function qs(e) {
  return Math.min(1, Math.max(0, e));
}
function Xm(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Jm(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function zd(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function js(e) {
  return Number(e) <= 1 ? `${Number(e) * 100}%` : e;
}
function Dr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Zm(e, t, r) {
  return { r: De(e, 255) * 255, g: De(t, 255) * 255, b: De(r, 255) * 255 };
}
function Cl(e, t, r) {
  (e = De(e, 255)), (t = De(t, 255)), (r = De(r, 255));
  const i = Math.max(e, t, r),
    s = Math.min(e, t, r);
  let o = 0,
    a = 0;
  const n = (i + s) / 2;
  if (i === s) (a = 0), (o = 0);
  else {
    const l = i - s;
    switch (((a = n > 0.5 ? l / (2 - i - s) : l / (i + s)), i)) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l: n };
}
function Ko(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * (6 * r)
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function eg(e, t, r) {
  let i, s, o;
  if (((e = De(e, 360)), (t = De(t, 100)), (r = De(r, 100)), t === 0))
    (s = r), (o = r), (i = r);
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      n = 2 * r - a;
    (i = Ko(n, a, e + 1 / 3)), (s = Ko(n, a, e)), (o = Ko(n, a, e - 1 / 3));
  }
  return { r: i * 255, g: s * 255, b: o * 255 };
}
function Sl(e, t, r) {
  (e = De(e, 255)), (t = De(t, 255)), (r = De(r, 255));
  const i = Math.max(e, t, r),
    s = Math.min(e, t, r);
  let o = 0;
  const a = i,
    n = i - s,
    l = i === 0 ? 0 : n / i;
  if (i === s) o = 0;
  else {
    switch (i) {
      case e:
        o = (t - r) / n + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / n + 2;
        break;
      case r:
        o = (e - t) / n + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: a };
}
function tg(e, t, r) {
  (e = De(e, 360) * 6), (t = De(t, 100)), (r = De(r, 100));
  const i = Math.floor(e),
    s = e - i,
    o = r * (1 - t),
    a = r * (1 - s * t),
    n = r * (1 - (1 - s) * t),
    l = i % 6,
    d = [r, a, o, o, n, r][l],
    p = [n, r, r, a, o, o][l],
    u = [o, o, n, r, r, a][l];
  return { r: d * 255, g: p * 255, b: u * 255 };
}
function $l(e, t, r, i) {
  const s = [
    Dr(Math.round(e).toString(16)),
    Dr(Math.round(t).toString(16)),
    Dr(Math.round(r).toString(16)),
  ];
  return i &&
    s[0].startsWith(s[0].charAt(1)) &&
    s[1].startsWith(s[1].charAt(1)) &&
    s[2].startsWith(s[2].charAt(1))
    ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0)
    : s.join("");
}
function rg(e, t, r, i, s) {
  const o = [
    Dr(Math.round(e).toString(16)),
    Dr(Math.round(t).toString(16)),
    Dr(Math.round(r).toString(16)),
    Dr(sg(i)),
  ];
  return s &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join("");
}
function ig(e, t, r, i) {
  const s = e / 100,
    o = t / 100,
    a = r / 100,
    n = i / 100,
    l = 255 * (1 - s) * (1 - n),
    d = 255 * (1 - o) * (1 - n),
    p = 255 * (1 - a) * (1 - n);
  return { r: l, g: d, b: p };
}
function El(e, t, r) {
  let i = 1 - e / 255,
    s = 1 - t / 255,
    o = 1 - r / 255,
    a = Math.min(i, s, o);
  return (
    a === 1
      ? ((i = 0), (s = 0), (o = 0))
      : ((i = ((i - a) / (1 - a)) * 100),
        (s = ((s - a) / (1 - a)) * 100),
        (o = ((o - a) / (1 - a)) * 100)),
    (a *= 100),
    { c: Math.round(i), m: Math.round(s), y: Math.round(o), k: Math.round(a) }
  );
}
function sg(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Al(e) {
  return ot(e) / 255;
}
function ot(e) {
  return parseInt(e, 16);
}
function og(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
const Ca = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function ag(e) {
  let t = { r: 0, g: 0, b: 0 },
    r = 1,
    i = null,
    s = null,
    o = null,
    a = !1,
    n = !1;
  return (
    typeof e == "string" && (e = cg(e)),
    typeof e == "object" &&
      (st(e.r) && st(e.g) && st(e.b)
        ? ((t = Zm(e.r, e.g, e.b)),
          (a = !0),
          (n = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : st(e.h) && st(e.s) && st(e.v)
          ? ((i = js(e.s)),
            (s = js(e.v)),
            (t = tg(e.h, i, s)),
            (a = !0),
            (n = "hsv"))
          : st(e.h) && st(e.s) && st(e.l)
            ? ((i = js(e.s)),
              (o = js(e.l)),
              (t = eg(e.h, i, o)),
              (a = !0),
              (n = "hsl"))
            : st(e.c) &&
              st(e.m) &&
              st(e.y) &&
              st(e.k) &&
              ((t = ig(e.c, e.m, e.y, e.k)), (a = !0), (n = "cmyk")),
      Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
    (r = zd(r)),
    {
      ok: a,
      format: e.format || n,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r,
    }
  );
}
const ng = "[-\\+]?\\d+%?",
  lg = "[-\\+]?\\d*\\.\\d+%?",
  _r = "(?:" + lg + ")|(?:" + ng + ")",
  Qo = "[\\s|\\(]+(" + _r + ")[,|\\s]+(" + _r + ")[,|\\s]+(" + _r + ")\\s*\\)?",
  Ws =
    "[\\s|\\(]+(" +
    _r +
    ")[,|\\s]+(" +
    _r +
    ")[,|\\s]+(" +
    _r +
    ")[,|\\s]+(" +
    _r +
    ")\\s*\\)?",
  pt = {
    CSS_UNIT: new RegExp(_r),
    rgb: new RegExp("rgb" + Qo),
    rgba: new RegExp("rgba" + Ws),
    hsl: new RegExp("hsl" + Qo),
    hsla: new RegExp("hsla" + Ws),
    hsv: new RegExp("hsv" + Qo),
    hsva: new RegExp("hsva" + Ws),
    cmyk: new RegExp("cmyk" + Ws),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function cg(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  let t = !1;
  if (Ca[e]) (e = Ca[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r = pt.rgb.exec(e);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = pt.rgba.exec(e)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = pt.hsl.exec(e)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = pt.hsla.exec(e)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = pt.hsv.exec(e)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = pt.hsva.exec(e)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = pt.cmyk.exec(e)),
                          r
                            ? { c: r[1], m: r[2], y: r[3], k: r[4] }
                            : ((r = pt.hex8.exec(e)),
                              r
                                ? {
                                    r: ot(r[1]),
                                    g: ot(r[2]),
                                    b: ot(r[3]),
                                    a: Al(r[4]),
                                    format: t ? "name" : "hex8",
                                  }
                                : ((r = pt.hex6.exec(e)),
                                  r
                                    ? {
                                        r: ot(r[1]),
                                        g: ot(r[2]),
                                        b: ot(r[3]),
                                        format: t ? "name" : "hex",
                                      }
                                    : ((r = pt.hex4.exec(e)),
                                      r
                                        ? {
                                            r: ot(r[1] + r[1]),
                                            g: ot(r[2] + r[2]),
                                            b: ot(r[3] + r[3]),
                                            a: Al(r[4] + r[4]),
                                            format: t ? "name" : "hex8",
                                          }
                                        : ((r = pt.hex3.exec(e)),
                                          r
                                            ? {
                                                r: ot(r[1] + r[1]),
                                                g: ot(r[2] + r[2]),
                                                b: ot(r[3] + r[3]),
                                                format: t ? "name" : "hex",
                                              }
                                            : !1))))))))));
}
function st(e) {
  return typeof e == "number" ? !Number.isNaN(e) : pt.CSS_UNIT.test(e);
}
class ve {
  constructor(t = "", r = {}) {
    if (t instanceof ve) return t;
    typeof t == "number" && (t = og(t)), (this.originalInput = t);
    const i = ag(t);
    (this.originalInput = t),
      (this.r = i.r),
      (this.g = i.g),
      (this.b = i.b),
      (this.a = i.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = r.format ?? i.format),
      (this.gradientType = r.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = i.ok);
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  getBrightness() {
    const t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }
  getLuminance() {
    const t = this.toRgb();
    let r, i, s;
    const o = t.r / 255,
      a = t.g / 255,
      n = t.b / 255;
    return (
      o <= 0.03928 ? (r = o / 12.92) : (r = Math.pow((o + 0.055) / 1.055, 2.4)),
      a <= 0.03928 ? (i = a / 12.92) : (i = Math.pow((a + 0.055) / 1.055, 2.4)),
      n <= 0.03928 ? (s = n / 12.92) : (s = Math.pow((n + 0.055) / 1.055, 2.4)),
      0.2126 * r + 0.7152 * i + 0.0722 * s
    );
  }
  getAlpha() {
    return this.a;
  }
  setAlpha(t) {
    return (
      (this.a = zd(t)), (this.roundA = Math.round(100 * this.a) / 100), this
    );
  }
  isMonochrome() {
    const { s: t } = this.toHsl();
    return t === 0;
  }
  toHsv() {
    const t = Sl(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }
  toHsvString() {
    const t = Sl(this.r, this.g, this.b),
      r = Math.round(t.h * 360),
      i = Math.round(t.s * 100),
      s = Math.round(t.v * 100);
    return this.a === 1
      ? `hsv(${r}, ${i}%, ${s}%)`
      : `hsva(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  toHsl() {
    const t = Cl(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }
  toHslString() {
    const t = Cl(this.r, this.g, this.b),
      r = Math.round(t.h * 360),
      i = Math.round(t.s * 100),
      s = Math.round(t.l * 100);
    return this.a === 1
      ? `hsl(${r}, ${i}%, ${s}%)`
      : `hsla(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  toHex(t = !1) {
    return $l(this.r, this.g, this.b, t);
  }
  toHexString(t = !1) {
    return "#" + this.toHex(t);
  }
  toHex8(t = !1) {
    return rg(this.r, this.g, this.b, this.a, t);
  }
  toHex8String(t = !1) {
    return "#" + this.toHex8(t);
  }
  toHexShortString(t = !1) {
    return this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
  }
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a,
    };
  }
  toRgbString() {
    const t = Math.round(this.r),
      r = Math.round(this.g),
      i = Math.round(this.b);
    return this.a === 1
      ? `rgb(${t}, ${r}, ${i})`
      : `rgba(${t}, ${r}, ${i}, ${this.roundA})`;
  }
  toPercentageRgb() {
    const t = (r) => `${Math.round(De(r, 255) * 100)}%`;
    return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
  }
  toPercentageRgbString() {
    const t = (r) => Math.round(De(r, 255) * 100);
    return this.a === 1
      ? `rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`
      : `rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return { ...El(this.r, this.g, this.b) };
  }
  toCmykString() {
    const { c: t, m: r, y: i, k: s } = El(this.r, this.g, this.b);
    return `cmyk(${t}, ${r}, ${i}, ${s})`;
  }
  toName() {
    if (this.a === 0) return "transparent";
    if (this.a < 1) return !1;
    const t = "#" + $l(this.r, this.g, this.b, !1);
    for (const [r, i] of Object.entries(Ca)) if (t === i) return r;
    return !1;
  }
  toString(t) {
    const r = !!t;
    t = t ?? this.format;
    let i = !1;
    const s = this.a < 1 && this.a >= 0;
    return !r && s && (t.startsWith("hex") || t === "name")
      ? t === "name" && this.a === 0
        ? this.toName()
        : this.toRgbString()
      : (t === "rgb" && (i = this.toRgbString()),
        t === "prgb" && (i = this.toPercentageRgbString()),
        (t === "hex" || t === "hex6") && (i = this.toHexString()),
        t === "hex3" && (i = this.toHexString(!0)),
        t === "hex4" && (i = this.toHex8String(!0)),
        t === "hex8" && (i = this.toHex8String()),
        t === "name" && (i = this.toName()),
        t === "hsl" && (i = this.toHslString()),
        t === "hsv" && (i = this.toHsvString()),
        t === "cmyk" && (i = this.toCmykString()),
        i || this.toHexString());
  }
  toNumber() {
    return (
      (Math.round(this.r) << 16) +
      (Math.round(this.g) << 8) +
      Math.round(this.b)
    );
  }
  clone() {
    return new ve(this.toString());
  }
  lighten(t = 10) {
    const r = this.toHsl();
    return (r.l += t / 100), (r.l = qs(r.l)), new ve(r);
  }
  brighten(t = 10) {
    const r = this.toRgb();
    return (
      (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
      (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
      (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
      new ve(r)
    );
  }
  darken(t = 10) {
    const r = this.toHsl();
    return (r.l -= t / 100), (r.l = qs(r.l)), new ve(r);
  }
  tint(t = 10) {
    return this.mix("white", t);
  }
  shade(t = 10) {
    return this.mix("black", t);
  }
  desaturate(t = 10) {
    const r = this.toHsl();
    return (r.s -= t / 100), (r.s = qs(r.s)), new ve(r);
  }
  saturate(t = 10) {
    const r = this.toHsl();
    return (r.s += t / 100), (r.s = qs(r.s)), new ve(r);
  }
  greyscale() {
    return this.desaturate(100);
  }
  spin(t) {
    const r = this.toHsl(),
      i = (r.h + t) % 360;
    return (r.h = i < 0 ? 360 + i : i), new ve(r);
  }
  mix(t, r = 50) {
    const i = this.toRgb(),
      s = new ve(t).toRgb(),
      o = r / 100,
      a = {
        r: (s.r - i.r) * o + i.r,
        g: (s.g - i.g) * o + i.g,
        b: (s.b - i.b) * o + i.b,
        a: (s.a - i.a) * o + i.a,
      };
    return new ve(a);
  }
  analogous(t = 6, r = 30) {
    const i = this.toHsl(),
      s = 360 / r,
      o = [this];
    for (i.h = (i.h - ((s * t) >> 1) + 720) % 360; --t; )
      (i.h = (i.h + s) % 360), o.push(new ve(i));
    return o;
  }
  complement() {
    const t = this.toHsl();
    return (t.h = (t.h + 180) % 360), new ve(t);
  }
  monochromatic(t = 6) {
    const r = this.toHsv(),
      { h: i } = r,
      { s } = r;
    let { v: o } = r;
    const a = [],
      n = 1 / t;
    for (; t--; ) a.push(new ve({ h: i, s, v: o })), (o = (o + n) % 1);
    return a;
  }
  splitcomplement() {
    const t = this.toHsl(),
      { h: r } = t;
    return [
      this,
      new ve({ h: (r + 72) % 360, s: t.s, l: t.l }),
      new ve({ h: (r + 216) % 360, s: t.s, l: t.l }),
    ];
  }
  onBackground(t) {
    const r = this.toRgb(),
      i = new ve(t).toRgb(),
      s = r.a + i.a * (1 - r.a);
    return new ve({
      r: (r.r * r.a + i.r * i.a * (1 - r.a)) / s,
      g: (r.g * r.a + i.g * i.a * (1 - r.a)) / s,
      b: (r.b * r.a + i.b * i.a * (1 - r.a)) / s,
      a: s,
    });
  }
  triad() {
    return this.polyad(3);
  }
  tetrad() {
    return this.polyad(4);
  }
  polyad(t) {
    const r = this.toHsl(),
      { h: i } = r,
      s = [this],
      o = 360 / t;
    for (let a = 1; a < t; a++)
      s.push(new ve({ h: (i + a * o) % 360, s: r.s, l: r.l }));
    return s;
  }
  equals(t) {
    const r = new ve(t);
    return this.format === "cmyk" || r.format === "cmyk"
      ? this.toCmykString() === r.toCmykString()
      : this.toRgbString() === r.toRgbString();
  }
}
var Rl = "EyeDropper" in window,
  Y = class extends N {
    constructor() {
      super(),
        (this.formControlController = new or(this)),
        (this.isSafeValue = !1),
        (this.localize = new te(this)),
        (this.hasFocus = !1),
        (this.isDraggingGridHandle = !1),
        (this.isEmpty = !1),
        (this.inputValue = ""),
        (this.hue = 0),
        (this.saturation = 100),
        (this.brightness = 100),
        (this.alpha = 100),
        (this.value = ""),
        (this.defaultValue = ""),
        (this.label = ""),
        (this.format = "hex"),
        (this.inline = !1),
        (this.size = "medium"),
        (this.noFormatToggle = !1),
        (this.name = ""),
        (this.disabled = !1),
        (this.hoist = !1),
        (this.opacity = !1),
        (this.uppercase = !1),
        (this.swatches = ""),
        (this.form = ""),
        (this.required = !1),
        (this.handleFocusIn = () => {
          (this.hasFocus = !0), this.emit("sl-focus");
        }),
        (this.handleFocusOut = () => {
          (this.hasFocus = !1), this.emit("sl-blur");
        }),
        this.addEventListener("focusin", this.handleFocusIn),
        this.addEventListener("focusout", this.handleFocusOut);
    }
    get validity() {
      return this.input.validity;
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.input.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
    }
    handleCopy() {
      this.input.select(),
        document.execCommand("copy"),
        this.previewButton.focus(),
        this.previewButton.classList.add("color-picker__preview-color--copied"),
        this.previewButton.addEventListener("animationend", () => {
          this.previewButton.classList.remove(
            "color-picker__preview-color--copied",
          );
        });
    }
    handleFormatToggle() {
      const e = ["hex", "rgb", "hsl", "hsv"],
        t = (e.indexOf(this.format) + 1) % e.length;
      (this.format = e[t]),
        this.setColor(this.value),
        this.emit("sl-change"),
        this.emit("sl-input");
    }
    handleAlphaDrag(e) {
      const t = this.shadowRoot.querySelector(
          ".color-picker__slider.color-picker__alpha",
        ),
        r = t.querySelector(".color-picker__slider-handle"),
        { width: i } = t.getBoundingClientRect();
      let s = this.value,
        o = this.value;
      r.focus(),
        e.preventDefault(),
        ds(t, {
          onMove: (a) => {
            (this.alpha = Ce((a / i) * 100, 0, 100)),
              this.syncValues(),
              this.value !== o && ((o = this.value), this.emit("sl-input"));
          },
          onStop: () => {
            this.value !== s && ((s = this.value), this.emit("sl-change"));
          },
          initialEvent: e,
        });
    }
    handleHueDrag(e) {
      const t = this.shadowRoot.querySelector(
          ".color-picker__slider.color-picker__hue",
        ),
        r = t.querySelector(".color-picker__slider-handle"),
        { width: i } = t.getBoundingClientRect();
      let s = this.value,
        o = this.value;
      r.focus(),
        e.preventDefault(),
        ds(t, {
          onMove: (a) => {
            (this.hue = Ce((a / i) * 360, 0, 360)),
              this.syncValues(),
              this.value !== o && ((o = this.value), this.emit("sl-input"));
          },
          onStop: () => {
            this.value !== s && ((s = this.value), this.emit("sl-change"));
          },
          initialEvent: e,
        });
    }
    handleGridDrag(e) {
      const t = this.shadowRoot.querySelector(".color-picker__grid"),
        r = t.querySelector(".color-picker__grid-handle"),
        { width: i, height: s } = t.getBoundingClientRect();
      let o = this.value,
        a = this.value;
      r.focus(),
        e.preventDefault(),
        (this.isDraggingGridHandle = !0),
        ds(t, {
          onMove: (n, l) => {
            (this.saturation = Ce((n / i) * 100, 0, 100)),
              (this.brightness = Ce(100 - (l / s) * 100, 0, 100)),
              this.syncValues(),
              this.value !== a && ((a = this.value), this.emit("sl-input"));
          },
          onStop: () => {
            (this.isDraggingGridHandle = !1),
              this.value !== o && ((o = this.value), this.emit("sl-change"));
          },
          initialEvent: e,
        });
    }
    handleAlphaKeyDown(e) {
      const t = e.shiftKey ? 10 : 1,
        r = this.value;
      e.key === "ArrowLeft" &&
        (e.preventDefault(),
        (this.alpha = Ce(this.alpha - t, 0, 100)),
        this.syncValues()),
        e.key === "ArrowRight" &&
          (e.preventDefault(),
          (this.alpha = Ce(this.alpha + t, 0, 100)),
          this.syncValues()),
        e.key === "Home" &&
          (e.preventDefault(), (this.alpha = 0), this.syncValues()),
        e.key === "End" &&
          (e.preventDefault(), (this.alpha = 100), this.syncValues()),
        this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
    }
    handleHueKeyDown(e) {
      const t = e.shiftKey ? 10 : 1,
        r = this.value;
      e.key === "ArrowLeft" &&
        (e.preventDefault(),
        (this.hue = Ce(this.hue - t, 0, 360)),
        this.syncValues()),
        e.key === "ArrowRight" &&
          (e.preventDefault(),
          (this.hue = Ce(this.hue + t, 0, 360)),
          this.syncValues()),
        e.key === "Home" &&
          (e.preventDefault(), (this.hue = 0), this.syncValues()),
        e.key === "End" &&
          (e.preventDefault(), (this.hue = 360), this.syncValues()),
        this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
    }
    handleGridKeyDown(e) {
      const t = e.shiftKey ? 10 : 1,
        r = this.value;
      e.key === "ArrowLeft" &&
        (e.preventDefault(),
        (this.saturation = Ce(this.saturation - t, 0, 100)),
        this.syncValues()),
        e.key === "ArrowRight" &&
          (e.preventDefault(),
          (this.saturation = Ce(this.saturation + t, 0, 100)),
          this.syncValues()),
        e.key === "ArrowUp" &&
          (e.preventDefault(),
          (this.brightness = Ce(this.brightness + t, 0, 100)),
          this.syncValues()),
        e.key === "ArrowDown" &&
          (e.preventDefault(),
          (this.brightness = Ce(this.brightness - t, 0, 100)),
          this.syncValues()),
        this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
    }
    handleInputChange(e) {
      const t = e.target,
        r = this.value;
      e.stopPropagation(),
        this.input.value
          ? (this.setColor(t.value), (t.value = this.value))
          : (this.value = ""),
        this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
    }
    handleInputInput(e) {
      this.formControlController.updateValidity(), e.stopPropagation();
    }
    handleInputKeyDown(e) {
      if (e.key === "Enter") {
        const t = this.value;
        this.input.value
          ? (this.setColor(this.input.value),
            (this.input.value = this.value),
            this.value !== t && (this.emit("sl-change"), this.emit("sl-input")),
            setTimeout(() => this.input.select()))
          : (this.hue = 0);
      }
    }
    handleInputInvalid(e) {
      this.formControlController.setValidity(!1),
        this.formControlController.emitInvalidEvent(e);
    }
    handleTouchMove(e) {
      e.preventDefault();
    }
    parseColor(e) {
      const t = new ve(e);
      if (!t.isValid) return null;
      const r = t.toHsl(),
        i = { h: r.h, s: r.s * 100, l: r.l * 100, a: r.a },
        s = t.toRgb(),
        o = t.toHexString(),
        a = t.toHex8String(),
        n = t.toHsv(),
        l = { h: n.h, s: n.s * 100, v: n.v * 100, a: n.a };
      return {
        hsl: {
          h: i.h,
          s: i.s,
          l: i.l,
          string: this.setLetterCase(
            `hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`,
          ),
        },
        hsla: {
          h: i.h,
          s: i.s,
          l: i.l,
          a: i.a,
          string: this.setLetterCase(
            `hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`,
          ),
        },
        hsv: {
          h: l.h,
          s: l.s,
          v: l.v,
          string: this.setLetterCase(
            `hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`,
          ),
        },
        hsva: {
          h: l.h,
          s: l.s,
          v: l.v,
          a: l.a,
          string: this.setLetterCase(
            `hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`,
          ),
        },
        rgb: {
          r: s.r,
          g: s.g,
          b: s.b,
          string: this.setLetterCase(
            `rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`,
          ),
        },
        rgba: {
          r: s.r,
          g: s.g,
          b: s.b,
          a: s.a,
          string: this.setLetterCase(
            `rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`,
          ),
        },
        hex: this.setLetterCase(o),
        hexa: this.setLetterCase(a),
      };
    }
    setColor(e) {
      const t = this.parseColor(e);
      return t === null
        ? !1
        : ((this.hue = t.hsva.h),
          (this.saturation = t.hsva.s),
          (this.brightness = t.hsva.v),
          (this.alpha = this.opacity ? t.hsva.a * 100 : 100),
          this.syncValues(),
          !0);
    }
    setLetterCase(e) {
      return typeof e != "string"
        ? ""
        : this.uppercase
          ? e.toUpperCase()
          : e.toLowerCase();
    }
    async syncValues() {
      const e = this.parseColor(
        `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`,
      );
      e !== null &&
        (this.format === "hsl"
          ? (this.inputValue = this.opacity ? e.hsla.string : e.hsl.string)
          : this.format === "rgb"
            ? (this.inputValue = this.opacity ? e.rgba.string : e.rgb.string)
            : this.format === "hsv"
              ? (this.inputValue = this.opacity ? e.hsva.string : e.hsv.string)
              : (this.inputValue = this.opacity ? e.hexa : e.hex),
        (this.isSafeValue = !0),
        (this.value = this.inputValue),
        await this.updateComplete,
        (this.isSafeValue = !1));
    }
    handleAfterHide() {
      this.previewButton.classList.remove(
        "color-picker__preview-color--copied",
      );
    }
    handleEyeDropper() {
      if (!Rl) return;
      new EyeDropper()
        .open()
        .then((t) => {
          const r = this.value;
          this.setColor(t.sRGBHex),
            this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
        })
        .catch(() => {});
    }
    selectSwatch(e) {
      const t = this.value;
      this.disabled ||
        (this.setColor(e),
        this.value !== t && (this.emit("sl-change"), this.emit("sl-input")));
    }
    getHexString(e, t, r, i = 100) {
      const s = new ve(`hsva(${e}, ${t}%, ${r}%, ${i / 100})`);
      return s.isValid ? s.toHex8String() : "";
    }
    stopNestedEventPropagation(e) {
      e.stopImmediatePropagation();
    }
    handleFormatChange() {
      this.syncValues();
    }
    handleOpacityChange() {
      this.alpha = 100;
    }
    handleValueChange(e, t) {
      if (
        ((this.isEmpty = !t),
        t ||
          ((this.hue = 0),
          (this.saturation = 0),
          (this.brightness = 100),
          (this.alpha = 100)),
        !this.isSafeValue)
      ) {
        const r = this.parseColor(t);
        r !== null
          ? ((this.inputValue = this.value),
            (this.hue = r.hsva.h),
            (this.saturation = r.hsva.s),
            (this.brightness = r.hsva.v),
            (this.alpha = r.hsva.a * 100),
            this.syncValues())
          : (this.inputValue = e ?? "");
      }
    }
    focus(e) {
      this.inline ? this.base.focus(e) : this.trigger.focus(e);
    }
    blur() {
      var e;
      const t = this.inline ? this.base : this.trigger;
      this.hasFocus && (t.focus({ preventScroll: !0 }), t.blur()),
        (e = this.dropdown) != null && e.open && this.dropdown.hide();
    }
    getFormattedValue(e = "hex") {
      const t = this.parseColor(
        `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`,
      );
      if (t === null) return "";
      switch (e) {
        case "hex":
          return t.hex;
        case "hexa":
          return t.hexa;
        case "rgb":
          return t.rgb.string;
        case "rgba":
          return t.rgba.string;
        case "hsl":
          return t.hsl.string;
        case "hsla":
          return t.hsla.string;
        case "hsv":
          return t.hsv.string;
        case "hsva":
          return t.hsva.string;
        default:
          return "";
      }
    }
    checkValidity() {
      return this.input.checkValidity();
    }
    getForm() {
      return this.formControlController.getForm();
    }
    reportValidity() {
      return !this.inline && !this.validity.valid
        ? (this.dropdown.show(),
          this.addEventListener(
            "sl-after-show",
            () => this.input.reportValidity(),
            { once: !0 },
          ),
          this.disabled || this.formControlController.emitInvalidEvent(),
          !1)
        : this.input.reportValidity();
    }
    setCustomValidity(e) {
      this.input.setCustomValidity(e),
        this.formControlController.updateValidity();
    }
    render() {
      const e = this.saturation,
        t = 100 - this.brightness,
        r = Array.isArray(this.swatches)
          ? this.swatches
          : this.swatches.split(";").filter((s) => s.trim() !== ""),
        i = $`
      <div
        part="base"
        class=${V({ "color-picker": !0, "color-picker--inline": this.inline, "color-picker--disabled": this.disabled, "color-picker--focused": this.hasFocus })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${
          this.inline
            ? $`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `
            : null
        }

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ze({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${V({ "color-picker__grid-handle": !0, "color-picker__grid-handle--dragging": this.isDraggingGridHandle })}
            style=${Ze({ top: `${t}%`, left: `${e}%`, backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha) })}
            role="application"
            aria-label="HSV"
            tabindex=${L(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ze({ left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%` })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${L(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${
              this.opacity
                ? $`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ze({
                        backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`,
                      })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ze({ left: `${this.alpha}%` })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${L(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `
                : ""
            }
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Ze({ "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha) })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? "" : this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${
              this.noFormatToggle
                ? ""
                : $`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `
            }
            ${
              Rl
                ? $`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `
                : ""
            }
          </sl-button-group>
        </div>

        ${
          r.length > 0
            ? $`
              <div part="swatches" class="color-picker__swatches">
                ${r.map((s) => {
                  const o = this.parseColor(s);
                  return o
                    ? $`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${L(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${s}
                      @click=${() => this.selectSwatch(s)}
                      @keydown=${(a) => !this.disabled && a.key === "Enter" && this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ze({ backgroundColor: o.hexa })}
                      ></div>
                    </div>
                  `
                    : (console.error(
                        `Unable to parse swatch color: "${s}"`,
                        this,
                      ),
                      "");
                })}
              </div>
            `
            : ""
        }
      </div>
    `;
      return this.inline
        ? i
        : $`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${V({ "color-dropdown__trigger": !0, "color-dropdown__trigger--disabled": this.disabled, "color-dropdown__trigger--small": this.size === "small", "color-dropdown__trigger--medium": this.size === "medium", "color-dropdown__trigger--large": this.size === "large", "color-dropdown__trigger--empty": this.isEmpty, "color-dropdown__trigger--focused": this.hasFocus, "color-picker__transparent-bg": !0 })}
          style=${Ze({ color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha) })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `;
    }
  };
Y.styles = [U, Ym];
Y.dependencies = {
  "sl-button-group": zr,
  "sl-button": ie,
  "sl-dropdown": Ne,
  "sl-icon": ae,
  "sl-input": j,
  "sl-visually-hidden": vo,
};
c([P('[part~="base"]')], Y.prototype, "base", 2);
c([P('[part~="input"]')], Y.prototype, "input", 2);
c([P(".color-dropdown")], Y.prototype, "dropdown", 2);
c([P('[part~="preview"]')], Y.prototype, "previewButton", 2);
c([P('[part~="trigger"]')], Y.prototype, "trigger", 2);
c([H()], Y.prototype, "hasFocus", 2);
c([H()], Y.prototype, "isDraggingGridHandle", 2);
c([H()], Y.prototype, "isEmpty", 2);
c([H()], Y.prototype, "inputValue", 2);
c([H()], Y.prototype, "hue", 2);
c([H()], Y.prototype, "saturation", 2);
c([H()], Y.prototype, "brightness", 2);
c([H()], Y.prototype, "alpha", 2);
c([h()], Y.prototype, "value", 2);
c([Ti()], Y.prototype, "defaultValue", 2);
c([h()], Y.prototype, "label", 2);
c([h()], Y.prototype, "format", 2);
c([h({ type: Boolean, reflect: !0 })], Y.prototype, "inline", 2);
c([h({ reflect: !0 })], Y.prototype, "size", 2);
c(
  [h({ attribute: "no-format-toggle", type: Boolean })],
  Y.prototype,
  "noFormatToggle",
  2,
);
c([h()], Y.prototype, "name", 2);
c([h({ type: Boolean, reflect: !0 })], Y.prototype, "disabled", 2);
c([h({ type: Boolean })], Y.prototype, "hoist", 2);
c([h({ type: Boolean })], Y.prototype, "opacity", 2);
c([h({ type: Boolean })], Y.prototype, "uppercase", 2);
c([h()], Y.prototype, "swatches", 2);
c([h({ reflect: !0 })], Y.prototype, "form", 2);
c([h({ type: Boolean, reflect: !0 })], Y.prototype, "required", 2);
c([Ss({ passive: !1 })], Y.prototype, "handleTouchMove", 1);
c(
  [R("format", { waitUntilFirstUpdate: !0 })],
  Y.prototype,
  "handleFormatChange",
  1,
);
c(
  [R("opacity", { waitUntilFirstUpdate: !0 })],
  Y.prototype,
  "handleOpacityChange",
  1,
);
c([R("value")], Y.prototype, "handleValueChange", 1);
var dg = "sl-color-picker";
Y.define("sl-color-picker");
D({
  tagName: dg,
  elementClass: Y,
  react: F,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid",
  },
  displayName: "SlColorPicker",
});
var ug = "sl-checkbox";
Ee.define("sl-checkbox");
var hg = D({
    tagName: ug,
    elementClass: Ee,
    react: F,
    events: {
      onSlBlur: "sl-blur",
      onSlChange: "sl-change",
      onSlFocus: "sl-focus",
      onSlInput: "sl-input",
      onSlInvalid: "sl-invalid",
    },
    displayName: "SlCheckbox",
  }),
  Xi = hg,
  pg = M`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,
  Re = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.isCopying = !1),
        (this.status = "rest"),
        (this.value = ""),
        (this.from = ""),
        (this.disabled = !1),
        (this.copyLabel = ""),
        (this.successLabel = ""),
        (this.errorLabel = ""),
        (this.feedbackDuration = 1e3),
        (this.tooltipPlacement = "top"),
        (this.hoist = !1);
    }
    async handleCopy() {
      if (this.disabled || this.isCopying) return;
      this.isCopying = !0;
      let e = this.value;
      if (this.from) {
        const t = this.getRootNode(),
          r = this.from.includes("."),
          i = this.from.includes("[") && this.from.includes("]");
        let s = this.from,
          o = "";
        r
          ? ([s, o] = this.from.trim().split("."))
          : i && ([s, o] = this.from.trim().replace(/\]$/, "").split("["));
        const a = "getElementById" in t ? t.getElementById(s) : null;
        a
          ? i
            ? (e = a.getAttribute(o) || "")
            : r
              ? (e = a[o] || "")
              : (e = a.textContent || "")
          : (this.showStatus("error"), this.emit("sl-error"));
      }
      if (!e) this.showStatus("error"), this.emit("sl-error");
      else
        try {
          await navigator.clipboard.writeText(e),
            this.showStatus("success"),
            this.emit("sl-copy", { detail: { value: e } });
        } catch {
          this.showStatus("error"), this.emit("sl-error");
        }
    }
    async showStatus(e) {
      const t = this.copyLabel || this.localize.term("copy"),
        r = this.successLabel || this.localize.term("copied"),
        i = this.errorLabel || this.localize.term("error"),
        s = e === "success" ? this.successIcon : this.errorIcon,
        o = ue(this, "copy.in", { dir: "ltr" }),
        a = ue(this, "copy.out", { dir: "ltr" });
      (this.tooltip.content = e === "success" ? r : i),
        await this.copyIcon.animate(a.keyframes, a.options).finished,
        (this.copyIcon.hidden = !0),
        (this.status = e),
        (s.hidden = !1),
        await s.animate(o.keyframes, o.options).finished,
        setTimeout(async () => {
          await s.animate(a.keyframes, a.options).finished,
            (s.hidden = !0),
            (this.status = "rest"),
            (this.copyIcon.hidden = !1),
            await this.copyIcon.animate(o.keyframes, o.options).finished,
            (this.tooltip.content = t),
            (this.isCopying = !1);
        }, this.feedbackDuration);
    }
    render() {
      const e = this.copyLabel || this.localize.term("copy");
      return $`
      <sl-tooltip
        class=${V({ "copy-button": !0, "copy-button--success": this.status === "success", "copy-button--error": this.status === "error" })}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `;
    }
  };
Re.styles = [U, pg];
Re.dependencies = { "sl-icon": ae, "sl-tooltip": Ae };
c([P('slot[name="copy-icon"]')], Re.prototype, "copyIcon", 2);
c([P('slot[name="success-icon"]')], Re.prototype, "successIcon", 2);
c([P('slot[name="error-icon"]')], Re.prototype, "errorIcon", 2);
c([P("sl-tooltip")], Re.prototype, "tooltip", 2);
c([H()], Re.prototype, "isCopying", 2);
c([H()], Re.prototype, "status", 2);
c([h()], Re.prototype, "value", 2);
c([h()], Re.prototype, "from", 2);
c([h({ type: Boolean, reflect: !0 })], Re.prototype, "disabled", 2);
c([h({ attribute: "copy-label" })], Re.prototype, "copyLabel", 2);
c([h({ attribute: "success-label" })], Re.prototype, "successLabel", 2);
c([h({ attribute: "error-label" })], Re.prototype, "errorLabel", 2);
c(
  [h({ attribute: "feedback-duration", type: Number })],
  Re.prototype,
  "feedbackDuration",
  2,
);
c([h({ attribute: "tooltip-placement" })], Re.prototype, "tooltipPlacement", 2);
c([h({ type: Boolean })], Re.prototype, "hoist", 2);
oe("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" },
  ],
  options: { duration: 100 },
});
oe("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" },
  ],
  options: { duration: 100 },
});
var fg = "sl-copy-button";
Re.define("sl-copy-button");
var mg = D({
    tagName: fg,
    elementClass: Re,
    react: F,
    events: { onSlCopy: "sl-copy", onSlError: "sl-error" },
    displayName: "SlCopyButton",
  }),
  gg = mg,
  bg = M`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,
  Pt = class extends N {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Ye(this, "footer")),
        (this.localize = new te(this)),
        (this.modal = new Ed(this)),
        (this.open = !1),
        (this.label = ""),
        (this.noHeader = !1),
        (this.handleDocumentKeyDown = (e) => {
          e.key === "Escape" &&
            this.modal.isActive() &&
            this.open &&
            (e.stopPropagation(), this.requestClose("keyboard"));
        });
    }
    firstUpdated() {
      (this.dialog.hidden = !this.open),
        this.open && (this.addOpenListeners(), this.modal.activate(), ns(this));
    }
    disconnectedCallback() {
      super.disconnectedCallback(),
        this.modal.deactivate(),
        ls(this),
        this.removeOpenListeners();
    }
    requestClose(e) {
      if (
        this.emit("sl-request-close", { cancelable: !0, detail: { source: e } })
          .defaultPrevented
      ) {
        const r = ue(this, "dialog.denyClose", { dir: this.localize.dir() });
        _e(this.panel, r.keyframes, r.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      var e;
      "CloseWatcher" in window
        ? ((e = this.closeWatcher) == null || e.destroy(),
          (this.closeWatcher = new CloseWatcher()),
          (this.closeWatcher.onclose = () => this.requestClose("keyboard")))
        : document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      var e;
      (e = this.closeWatcher) == null || e.destroy(),
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show"),
          this.addOpenListeners(),
          (this.originalTrigger = document.activeElement),
          this.modal.activate(),
          ns(this);
        const e = this.querySelector("[autofocus]");
        e && e.removeAttribute("autofocus"),
          await Promise.all([Se(this.dialog), Se(this.overlay)]),
          (this.dialog.hidden = !1),
          requestAnimationFrame(() => {
            this.emit("sl-initial-focus", { cancelable: !0 })
              .defaultPrevented ||
              (e
                ? e.focus({ preventScroll: !0 })
                : this.panel.focus({ preventScroll: !0 })),
              e && e.setAttribute("autofocus", "");
          });
        const t = ue(this, "dialog.show", { dir: this.localize.dir() }),
          r = ue(this, "dialog.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          _e(this.panel, t.keyframes, t.options),
          _e(this.overlay, r.keyframes, r.options),
        ]),
          this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"),
          this.removeOpenListeners(),
          this.modal.deactivate(),
          await Promise.all([Se(this.dialog), Se(this.overlay)]);
        const e = ue(this, "dialog.hide", { dir: this.localize.dir() }),
          t = ue(this, "dialog.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          _e(this.overlay, t.keyframes, t.options).then(() => {
            this.overlay.hidden = !0;
          }),
          _e(this.panel, e.keyframes, e.options).then(() => {
            this.panel.hidden = !0;
          }),
        ]),
          (this.dialog.hidden = !0),
          (this.overlay.hidden = !1),
          (this.panel.hidden = !1),
          ls(this);
        const r = this.originalTrigger;
        typeof (r == null ? void 0 : r.focus) == "function" &&
          setTimeout(() => r.focus()),
          this.emit("sl-after-hide");
      }
    }
    async show() {
      if (!this.open) return (this.open = !0), Ge(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), Ge(this, "sl-after-hide");
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ dialog: !0, "dialog--open": this.open, "dialog--has-footer": this.hasSlotController.test("footer") })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${L(this.noHeader ? this.label : void 0)}
          aria-labelledby=${L(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${
            this.noHeader
              ? ""
              : $`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : "\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `
          }
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
Pt.styles = [U, bg];
Pt.dependencies = { "sl-icon-button": $e };
c([P(".dialog")], Pt.prototype, "dialog", 2);
c([P(".dialog__panel")], Pt.prototype, "panel", 2);
c([P(".dialog__overlay")], Pt.prototype, "overlay", 2);
c([h({ type: Boolean, reflect: !0 })], Pt.prototype, "open", 2);
c([h({ reflect: !0 })], Pt.prototype, "label", 2);
c(
  [h({ attribute: "no-header", type: Boolean, reflect: !0 })],
  Pt.prototype,
  "noHeader",
  2,
);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  Pt.prototype,
  "handleOpenChange",
  1,
);
oe("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 },
});
oe("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 },
});
oe("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 },
});
var vg = "sl-dialog";
Pt.define("sl-dialog");
var yg = D({
    tagName: vg,
    elementClass: Pt,
    react: F,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
      onSlInitialFocus: "sl-initial-focus",
      onSlRequestClose: "sl-request-close",
    },
    displayName: "SlDialog",
  }),
  Ps = yg,
  _g = M`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,
  wt = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.open = !1),
        (this.disabled = !1);
    }
    firstUpdated() {
      (this.body.style.height = this.open ? "auto" : "0"),
        this.open && (this.details.open = !0),
        (this.detailsObserver = new MutationObserver((e) => {
          for (const t of e)
            t.type === "attributes" &&
              t.attributeName === "open" &&
              (this.details.open ? this.show() : this.hide());
        })),
        this.detailsObserver.observe(this.details, { attributes: !0 });
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        (e = this.detailsObserver) == null || e.disconnect();
    }
    handleSummaryClick(e) {
      e.preventDefault(),
        this.disabled ||
          (this.open ? this.hide() : this.show(), this.header.focus());
    }
    handleSummaryKeyDown(e) {
      (e.key === "Enter" || e.key === " ") &&
        (e.preventDefault(), this.open ? this.hide() : this.show()),
        (e.key === "ArrowUp" || e.key === "ArrowLeft") &&
          (e.preventDefault(), this.hide()),
        (e.key === "ArrowDown" || e.key === "ArrowRight") &&
          (e.preventDefault(), this.show());
    }
    async handleOpenChange() {
      if (this.open) {
        if (
          ((this.details.open = !0),
          this.emit("sl-show", { cancelable: !0 }).defaultPrevented)
        ) {
          (this.open = !1), (this.details.open = !1);
          return;
        }
        await Se(this.body);
        const { keyframes: t, options: r } = ue(this, "details.show", {
          dir: this.localize.dir(),
        });
        await _e(this.body, ho(t, this.body.scrollHeight), r),
          (this.body.style.height = "auto"),
          this.emit("sl-after-show");
      } else {
        if (this.emit("sl-hide", { cancelable: !0 }).defaultPrevented) {
          (this.details.open = !0), (this.open = !0);
          return;
        }
        await Se(this.body);
        const { keyframes: t, options: r } = ue(this, "details.hide", {
          dir: this.localize.dir(),
        });
        await _e(this.body, ho(t, this.body.scrollHeight), r),
          (this.body.style.height = "auto"),
          (this.details.open = !1),
          this.emit("sl-after-hide");
      }
    }
    async show() {
      if (!(this.open || this.disabled))
        return (this.open = !0), Ge(this, "sl-after-show");
    }
    async hide() {
      if (!(!this.open || this.disabled))
        return (this.open = !1), Ge(this, "sl-after-hide");
    }
    render() {
      const e = this.localize.dir() === "rtl";
      return $`
      <details
        part="base"
        class=${V({ details: !0, "details--open": this.open, "details--disabled": this.disabled, "details--rtl": e })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
    }
  };
wt.styles = [U, _g];
wt.dependencies = { "sl-icon": ae };
c([P(".details")], wt.prototype, "details", 2);
c([P(".details__header")], wt.prototype, "header", 2);
c([P(".details__body")], wt.prototype, "body", 2);
c([P(".details__expand-icon-slot")], wt.prototype, "expandIconSlot", 2);
c([h({ type: Boolean, reflect: !0 })], wt.prototype, "open", 2);
c([h()], wt.prototype, "summary", 2);
c([h({ type: Boolean, reflect: !0 })], wt.prototype, "disabled", 2);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  wt.prototype,
  "handleOpenChange",
  1,
);
oe("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" },
  ],
  options: { duration: 250, easing: "linear" },
});
oe("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" },
  ],
  options: { duration: 250, easing: "linear" },
});
var wg = "sl-details";
wt.define("sl-details");
D({
  tagName: wg,
  elementClass: wt,
  react: F,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
  },
  displayName: "SlDetails",
});
var xg = M`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,
  xt = class extends N {
    constructor() {
      super(...arguments), (this.isLoaded = !1);
    }
    handleClick() {
      this.play = !this.play;
    }
    handleLoad() {
      const e = document.createElement("canvas"),
        { width: t, height: r } = this.animatedImage;
      (e.width = t),
        (e.height = r),
        e.getContext("2d").drawImage(this.animatedImage, 0, 0, t, r),
        (this.frozenFrame = e.toDataURL("image/gif")),
        this.isLoaded || (this.emit("sl-load"), (this.isLoaded = !0));
    }
    handleError() {
      this.emit("sl-error");
    }
    handlePlayChange() {
      this.play &&
        ((this.animatedImage.src = ""), (this.animatedImage.src = this.src));
    }
    handleSrcChange() {
      this.isLoaded = !1;
    }
    render() {
      return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${
          this.isLoaded
            ? $`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `
            : ""
        }
      </div>
    `;
    }
  };
xt.styles = [U, xg];
xt.dependencies = { "sl-icon": ae };
c([P(".animated-image__animated")], xt.prototype, "animatedImage", 2);
c([H()], xt.prototype, "frozenFrame", 2);
c([H()], xt.prototype, "isLoaded", 2);
c([h()], xt.prototype, "src", 2);
c([h()], xt.prototype, "alt", 2);
c([h({ type: Boolean, reflect: !0 })], xt.prototype, "play", 2);
c(
  [R("play", { waitUntilFirstUpdate: !0 })],
  xt.prototype,
  "handlePlayChange",
  1,
);
c([R("src")], xt.prototype, "handleSrcChange", 1);
var kg = "sl-animated-image";
xt.define("sl-animated-image");
D({
  tagName: kg,
  elementClass: xt,
  react: F,
  events: { onSlLoad: "sl-load", onSlError: "sl-error" },
  displayName: "SlAnimatedImage",
});
var Cg = M`
  :host {
    display: contents;
  }
`;
const Sg = [
    {
      offset: 0,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0)",
    },
    {
      offset: 0.2,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0)",
    },
    {
      offset: 0.4,
      easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      transform: "translate3d(0, -30px, 0) scaleY(1.1)",
    },
    {
      offset: 0.43,
      easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      transform: "translate3d(0, -30px, 0) scaleY(1.1)",
    },
    {
      offset: 0.53,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0)",
    },
    {
      offset: 0.7,
      easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      transform: "translate3d(0, -15px, 0) scaleY(1.05)",
    },
    {
      offset: 0.8,
      "transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0) scaleY(0.95)",
    },
    { offset: 0.9, transform: "translate3d(0, -4px, 0) scaleY(1.02)" },
    {
      offset: 1,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0)",
    },
  ],
  $g = [
    { offset: 0, opacity: "1" },
    { offset: 0.25, opacity: "0" },
    { offset: 0.5, opacity: "1" },
    { offset: 0.75, opacity: "0" },
    { offset: 1, opacity: "1" },
  ],
  Eg = [
    { offset: 0, transform: "translateX(0)" },
    { offset: 0.065, transform: "translateX(-6px) rotateY(-9deg)" },
    { offset: 0.185, transform: "translateX(5px) rotateY(7deg)" },
    { offset: 0.315, transform: "translateX(-3px) rotateY(-5deg)" },
    { offset: 0.435, transform: "translateX(2px) rotateY(3deg)" },
    { offset: 0.5, transform: "translateX(0)" },
  ],
  Ag = [
    { offset: 0, transform: "scale(1)" },
    { offset: 0.14, transform: "scale(1.3)" },
    { offset: 0.28, transform: "scale(1)" },
    { offset: 0.42, transform: "scale(1.3)" },
    { offset: 0.7, transform: "scale(1)" },
  ],
  Rg = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.111, transform: "translate3d(0, 0, 0)" },
    { offset: 0.222, transform: "skewX(-12.5deg) skewY(-12.5deg)" },
    { offset: 0.33299999999999996, transform: "skewX(6.25deg) skewY(6.25deg)" },
    { offset: 0.444, transform: "skewX(-3.125deg) skewY(-3.125deg)" },
    { offset: 0.555, transform: "skewX(1.5625deg) skewY(1.5625deg)" },
    {
      offset: 0.6659999999999999,
      transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
    },
    { offset: 0.777, transform: "skewX(0.390625deg) skewY(0.390625deg)" },
    { offset: 0.888, transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  zg = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    { offset: 0.5, transform: "scale3d(1.05, 1.05, 1.05)" },
    { offset: 1, transform: "scale3d(1, 1, 1)" },
  ],
  Tg = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    { offset: 0.3, transform: "scale3d(1.25, 0.75, 1)" },
    { offset: 0.4, transform: "scale3d(0.75, 1.25, 1)" },
    { offset: 0.5, transform: "scale3d(1.15, 0.85, 1)" },
    { offset: 0.65, transform: "scale3d(0.95, 1.05, 1)" },
    { offset: 0.75, transform: "scale3d(1.05, 0.95, 1)" },
    { offset: 1, transform: "scale3d(1, 1, 1)" },
  ],
  Pg = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Ig = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Og = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.2, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.3, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.4, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.5, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.6, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.7, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.8, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.9, transform: "translate3d(0, -10px, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Lg = [
    { offset: 0.2, transform: "rotate3d(0, 0, 1, 15deg)" },
    { offset: 0.4, transform: "rotate3d(0, 0, 1, -10deg)" },
    { offset: 0.6, transform: "rotate3d(0, 0, 1, 5deg)" },
    { offset: 0.8, transform: "rotate3d(0, 0, 1, -5deg)" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 0deg)" },
  ],
  Ng = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    {
      offset: 0.1,
      transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.2,
      transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.3,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
    },
    {
      offset: 0.4,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.5,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
    },
    {
      offset: 0.6,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.7,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
    },
    {
      offset: 0.8,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.9,
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
    },
    { offset: 1, transform: "scale3d(1, 1, 1)" },
  ],
  Fg = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    {
      offset: 0.15,
      transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
    },
    {
      offset: 0.3,
      transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
    },
    {
      offset: 0.45,
      transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
    },
    {
      offset: 0.6,
      transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
    },
    {
      offset: 0.75,
      transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
    },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Dg = [
    { offset: 0, transform: "translateY(-1200px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" },
  ],
  Mg = [
    { offset: 0, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" },
  ],
  Hg = [
    { offset: 0, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" },
  ],
  Bg = [
    { offset: 0, transform: "translateY(1200px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" },
  ],
  Vg = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateY(700px) scale(0.7)", opacity: "0.7" },
  ],
  Ug = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
  ],
  qg = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
  ],
  jg = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateY(-700px) scale(0.7)", opacity: "0.7" },
  ],
  Wg = [
    { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.2, transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.4, transform: "scale3d(0.9, 0.9, 0.9)" },
    { offset: 0.4, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.8, transform: "scale3d(0.97, 0.97, 0.97)" },
    { offset: 0.8, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, opacity: "1", transform: "scale3d(1, 1, 1)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  ],
  Kg = [
    {
      offset: 0,
      opacity: "0",
      transform: "translate3d(0, -3000px, 0) scaleY(3)",
    },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    {
      offset: 0.6,
      opacity: "1",
      transform: "translate3d(0, 25px, 0) scaleY(0.9)",
    },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(0, -10px, 0) scaleY(0.95)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(0, 5px, 0) scaleY(0.985)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  ],
  Qg = [
    {
      offset: 0,
      opacity: "0",
      transform: "translate3d(-3000px, 0, 0) scaleX(3)",
    },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    {
      offset: 0.6,
      opacity: "1",
      transform: "translate3d(25px, 0, 0) scaleX(1)",
    },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(-10px, 0, 0) scaleX(0.98)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(5px, 0, 0) scaleX(0.995)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  ],
  Gg = [
    {
      offset: 0,
      opacity: "0",
      transform: "translate3d(3000px, 0, 0) scaleX(3)",
    },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    {
      offset: 0.6,
      opacity: "1",
      transform: "translate3d(-25px, 0, 0) scaleX(1)",
    },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(10px, 0, 0) scaleX(0.98)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(-5px, 0, 0) scaleX(0.995)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  ],
  Yg = [
    {
      offset: 0,
      opacity: "0",
      transform: "translate3d(0, 3000px, 0) scaleY(5)",
    },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    {
      offset: 0.6,
      opacity: "1",
      transform: "translate3d(0, -20px, 0) scaleY(0.9)",
    },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(0, 10px, 0) scaleY(0.95)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(0, -5px, 0) scaleY(0.985)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  ],
  Xg = [
    { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9)" },
    { offset: 0.5, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 0.55, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 1, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  ],
  Jg = [
    { offset: 0.2, transform: "translate3d(0, 10px, 0) scaleY(0.985)" },
    {
      offset: 0.4,
      opacity: "1",
      transform: "translate3d(0, -20px, 0) scaleY(0.9)",
    },
    {
      offset: 0.45,
      opacity: "1",
      transform: "translate3d(0, -20px, 0) scaleY(0.9)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "translate3d(0, 2000px, 0) scaleY(3)",
    },
  ],
  Zg = [
    {
      offset: 0.2,
      opacity: "1",
      transform: "translate3d(20px, 0, 0) scaleX(0.9)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "translate3d(-2000px, 0, 0) scaleX(2)",
    },
  ],
  eb = [
    {
      offset: 0.2,
      opacity: "1",
      transform: "translate3d(-20px, 0, 0) scaleX(0.9)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "translate3d(2000px, 0, 0) scaleX(2)",
    },
  ],
  tb = [
    { offset: 0.2, transform: "translate3d(0, -10px, 0) scaleY(0.985)" },
    {
      offset: 0.4,
      opacity: "1",
      transform: "translate3d(0, 20px, 0) scaleY(0.9)",
    },
    {
      offset: 0.45,
      opacity: "1",
      transform: "translate3d(0, 20px, 0) scaleY(0.9)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "translate3d(0, -2000px, 0) scaleY(3)",
    },
  ],
  rb = [
    { offset: 0, opacity: "0" },
    { offset: 1, opacity: "1" },
  ],
  ib = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  sb = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  ob = [
    { offset: 0, opacity: "0", transform: "translate3d(0, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  ab = [
    { offset: 0, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  nb = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  lb = [
    { offset: 0, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  cb = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  db = [
    { offset: 0, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  ub = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  hb = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  pb = [
    { offset: 0, opacity: "0", transform: "translate3d(0, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  fb = [
    { offset: 0, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  mb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0" },
  ],
  gb = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
  ],
  bb = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
  ],
  vb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, 100%, 0)" },
  ],
  yb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
  ],
  _b = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
  ],
  wb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
  ],
  xb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0)" },
  ],
  kb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
  ],
  Cb = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
  ],
  Sb = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
  ],
  $b = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, -100%, 0)" },
  ],
  Eb = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
  ],
  Ab = [
    {
      offset: 0,
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
      easing: "ease-out",
    },
    {
      offset: 0.4,
      transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,
      easing: "ease-out",
    },
    {
      offset: 0.5,
      transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,
      easing: "ease-in",
    },
    {
      offset: 0.8,
      transform: `perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,
      easing: "ease-in",
    },
    {
      offset: 1,
      transform:
        "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      easing: "ease-in",
    },
  ],
  Rb = [
    {
      offset: 0,
      transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
      easing: "ease-in",
      opacity: "0",
    },
    {
      offset: 0.4,
      transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
      easing: "ease-in",
    },
    {
      offset: 0.6,
      transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
      opacity: "1",
    },
    { offset: 0.8, transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
    { offset: 1, transform: "perspective(400px)" },
  ],
  zb = [
    {
      offset: 0,
      transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
      easing: "ease-in",
      opacity: "0",
    },
    {
      offset: 0.4,
      transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)",
      easing: "ease-in",
    },
    {
      offset: 0.6,
      transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
      opacity: "1",
    },
    { offset: 0.8, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
    { offset: 1, transform: "perspective(400px)" },
  ],
  Tb = [
    { offset: 0, transform: "perspective(400px)" },
    {
      offset: 0.3,
      transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
      opacity: "1",
    },
    {
      offset: 1,
      transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
      opacity: "0",
    },
  ],
  Pb = [
    { offset: 0, transform: "perspective(400px)" },
    {
      offset: 0.3,
      transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
      opacity: "1",
    },
    {
      offset: 1,
      transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
      opacity: "0",
    },
  ],
  Ib = [
    {
      offset: 0,
      transform: "translate3d(-100%, 0, 0) skewX(30deg)",
      opacity: "0",
    },
    { offset: 0.6, transform: "skewX(-20deg)", opacity: "1" },
    { offset: 0.8, transform: "skewX(5deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Ob = [
    {
      offset: 0,
      transform: "translate3d(100%, 0, 0) skewX(-30deg)",
      opacity: "0",
    },
    { offset: 0.6, transform: "skewX(20deg)", opacity: "1" },
    { offset: 0.8, transform: "skewX(-5deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Lb = [
    { offset: 0, opacity: "1" },
    {
      offset: 1,
      transform: "translate3d(-100%, 0, 0) skewX(-30deg)",
      opacity: "0",
    },
  ],
  Nb = [
    { offset: 0, opacity: "1" },
    {
      offset: 1,
      transform: "translate3d(100%, 0, 0) skewX(30deg)",
      opacity: "0",
    },
  ],
  Fb = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -200deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" },
  ],
  Db = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" },
  ],
  Mb = [
    { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" },
  ],
  Hb = [
    { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" },
  ],
  Bb = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -90deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" },
  ],
  Vb = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 200deg)", opacity: "0" },
  ],
  Ub = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
  ],
  qb = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
  ],
  jb = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
  ],
  Wb = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 90deg)", opacity: "0" },
  ],
  Kb = [
    { offset: 0, transform: "translate3d(0, -100%, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Qb = [
    { offset: 0, transform: "translate3d(-100%, 0, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Gb = [
    { offset: 0, transform: "translate3d(100%, 0, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Yb = [
    { offset: 0, transform: "translate3d(0, 100%, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
  ],
  Xb = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(0, 100%, 0)" },
  ],
  Jb = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(-100%, 0, 0)" },
  ],
  Zb = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(100%, 0, 0)" },
  ],
  ev = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(0, -100%, 0)" },
  ],
  tv = [
    { offset: 0, easing: "ease-in-out" },
    {
      offset: 0.2,
      transform: "rotate3d(0, 0, 1, 80deg)",
      easing: "ease-in-out",
    },
    {
      offset: 0.4,
      transform: "rotate3d(0, 0, 1, 60deg)",
      easing: "ease-in-out",
      opacity: "1",
    },
    {
      offset: 0.6,
      transform: "rotate3d(0, 0, 1, 80deg)",
      easing: "ease-in-out",
    },
    {
      offset: 0.8,
      transform: "rotate3d(0, 0, 1, 60deg)",
      easing: "ease-in-out",
      opacity: "1",
    },
    { offset: 1, transform: "translate3d(0, 700px, 0)", opacity: "0" },
  ],
  rv = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale(0.1) rotate(30deg)",
      "transform-origin": "center bottom",
    },
    { offset: 0.5, transform: "rotate(-10deg)" },
    { offset: 0.7, transform: "rotate(3deg)" },
    { offset: 1, opacity: "1", transform: "scale(1)" },
  ],
  iv = [
    {
      offset: 0,
      opacity: "0",
      transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
    },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" },
  ],
  sv = [
    { offset: 0, opacity: "1" },
    {
      offset: 1,
      opacity: "0",
      transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
    },
  ],
  ov = [
    { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 0.5, opacity: "1" },
  ],
  av = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  nv = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  lv = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  cv = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  dv = [
    { offset: 0, opacity: "1" },
    { offset: 0.5, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 1, opacity: "0" },
  ],
  uv = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  hv = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale(0.1) translate3d(-2000px, 0, 0)",
    },
  ],
  pv = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale(0.1) translate3d(2000px, 0, 0)",
    },
  ],
  fv = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    },
  ],
  Td = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
    easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
    easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  mv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        backInDown: Dg,
        backInLeft: Mg,
        backInRight: Hg,
        backInUp: Bg,
        backOutDown: Vg,
        backOutLeft: Ug,
        backOutRight: qg,
        backOutUp: jg,
        bounce: Sg,
        bounceIn: Wg,
        bounceInDown: Kg,
        bounceInLeft: Qg,
        bounceInRight: Gg,
        bounceInUp: Yg,
        bounceOut: Xg,
        bounceOutDown: Jg,
        bounceOutLeft: Zg,
        bounceOutRight: eb,
        bounceOutUp: tb,
        easings: Td,
        fadeIn: rb,
        fadeInBottomLeft: ib,
        fadeInBottomRight: sb,
        fadeInDown: ob,
        fadeInDownBig: ab,
        fadeInLeft: nb,
        fadeInLeftBig: lb,
        fadeInRight: cb,
        fadeInRightBig: db,
        fadeInTopLeft: ub,
        fadeInTopRight: hb,
        fadeInUp: pb,
        fadeInUpBig: fb,
        fadeOut: mb,
        fadeOutBottomLeft: gb,
        fadeOutBottomRight: bb,
        fadeOutDown: vb,
        fadeOutDownBig: yb,
        fadeOutLeft: _b,
        fadeOutLeftBig: wb,
        fadeOutRight: xb,
        fadeOutRightBig: kb,
        fadeOutTopLeft: Cb,
        fadeOutTopRight: Sb,
        fadeOutUp: $b,
        fadeOutUpBig: Eb,
        flash: $g,
        flip: Ab,
        flipInX: Rb,
        flipInY: zb,
        flipOutX: Tb,
        flipOutY: Pb,
        headShake: Eg,
        heartBeat: Ag,
        hinge: tv,
        jackInTheBox: rv,
        jello: Rg,
        lightSpeedInLeft: Ib,
        lightSpeedInRight: Ob,
        lightSpeedOutLeft: Lb,
        lightSpeedOutRight: Nb,
        pulse: zg,
        rollIn: iv,
        rollOut: sv,
        rotateIn: Fb,
        rotateInDownLeft: Db,
        rotateInDownRight: Mb,
        rotateInUpLeft: Hb,
        rotateInUpRight: Bb,
        rotateOut: Vb,
        rotateOutDownLeft: Ub,
        rotateOutDownRight: qb,
        rotateOutUpLeft: jb,
        rotateOutUpRight: Wb,
        rubberBand: Tg,
        shake: Pg,
        shakeX: Ig,
        shakeY: Og,
        slideInDown: Kb,
        slideInLeft: Qb,
        slideInRight: Gb,
        slideInUp: Yb,
        slideOutDown: Xb,
        slideOutLeft: Jb,
        slideOutRight: Zb,
        slideOutUp: ev,
        swing: Lg,
        tada: Ng,
        wobble: Fg,
        zoomIn: ov,
        zoomInDown: av,
        zoomInLeft: nv,
        zoomInRight: lv,
        zoomInUp: cv,
        zoomOut: dv,
        zoomOutDown: uv,
        zoomOutLeft: hv,
        zoomOutRight: pv,
        zoomOutUp: fv,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var ze = class extends N {
  constructor() {
    super(...arguments),
      (this.hasStarted = !1),
      (this.name = "none"),
      (this.play = !1),
      (this.delay = 0),
      (this.direction = "normal"),
      (this.duration = 1e3),
      (this.easing = "linear"),
      (this.endDelay = 0),
      (this.fill = "auto"),
      (this.iterations = 1 / 0),
      (this.iterationStart = 0),
      (this.playbackRate = 1),
      (this.handleAnimationFinish = () => {
        (this.play = !1), (this.hasStarted = !1), this.emit("sl-finish");
      }),
      (this.handleAnimationCancel = () => {
        (this.play = !1), (this.hasStarted = !1), this.emit("sl-cancel");
      });
  }
  get currentTime() {
    var e, t;
    return (t = (e = this.animation) == null ? void 0 : e.currentTime) != null
      ? t
      : 0;
  }
  set currentTime(e) {
    this.animation && (this.animation.currentTime = e);
  }
  connectedCallback() {
    super.connectedCallback(), this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation(), this.createAnimation();
  }
  async createAnimation() {
    var e, t;
    const r = (e = Td[this.easing]) != null ? e : this.easing,
      i = (t = this.keyframes) != null ? t : mv[this.name],
      o = (await this.defaultSlot).assignedElements()[0];
    return !o || !i
      ? !1
      : (this.destroyAnimation(),
        (this.animation = o.animate(i, {
          delay: this.delay,
          direction: this.direction,
          duration: this.duration,
          easing: r,
          endDelay: this.endDelay,
          fill: this.fill,
          iterationStart: this.iterationStart,
          iterations: this.iterations,
        })),
        (this.animation.playbackRate = this.playbackRate),
        this.animation.addEventListener("cancel", this.handleAnimationCancel),
        this.animation.addEventListener("finish", this.handleAnimationFinish),
        this.play
          ? ((this.hasStarted = !0), this.emit("sl-start"))
          : this.animation.pause(),
        !0);
  }
  destroyAnimation() {
    this.animation &&
      (this.animation.cancel(),
      this.animation.removeEventListener("cancel", this.handleAnimationCancel),
      this.animation.removeEventListener("finish", this.handleAnimationFinish),
      (this.hasStarted = !1));
  }
  handleAnimationChange() {
    this.hasUpdated && this.createAnimation();
  }
  handlePlayChange() {
    return this.animation
      ? (this.play &&
          !this.hasStarted &&
          ((this.hasStarted = !0), this.emit("sl-start")),
        this.play ? this.animation.play() : this.animation.pause(),
        !0)
      : !1;
  }
  handlePlaybackRateChange() {
    this.animation && (this.animation.playbackRate = this.playbackRate);
  }
  cancel() {
    var e;
    (e = this.animation) == null || e.cancel();
  }
  finish() {
    var e;
    (e = this.animation) == null || e.finish();
  }
  render() {
    return $` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
ze.styles = [U, Cg];
c([oh("slot")], ze.prototype, "defaultSlot", 2);
c([h()], ze.prototype, "name", 2);
c([h({ type: Boolean, reflect: !0 })], ze.prototype, "play", 2);
c([h({ type: Number })], ze.prototype, "delay", 2);
c([h()], ze.prototype, "direction", 2);
c([h({ type: Number })], ze.prototype, "duration", 2);
c([h()], ze.prototype, "easing", 2);
c([h({ attribute: "end-delay", type: Number })], ze.prototype, "endDelay", 2);
c([h()], ze.prototype, "fill", 2);
c([h({ type: Number })], ze.prototype, "iterations", 2);
c(
  [h({ attribute: "iteration-start", type: Number })],
  ze.prototype,
  "iterationStart",
  2,
);
c([h({ attribute: !1 })], ze.prototype, "keyframes", 2);
c(
  [h({ attribute: "playback-rate", type: Number })],
  ze.prototype,
  "playbackRate",
  2,
);
c(
  [
    R([
      "name",
      "delay",
      "direction",
      "duration",
      "easing",
      "endDelay",
      "fill",
      "iterations",
      "iterationsStart",
      "keyframes",
    ]),
  ],
  ze.prototype,
  "handleAnimationChange",
  1,
);
c([R("play")], ze.prototype, "handlePlayChange", 1);
c([R("playbackRate")], ze.prototype, "handlePlaybackRateChange", 1);
var gv = "sl-animation";
ze.define("sl-animation");
D({
  tagName: gv,
  elementClass: ze,
  react: F,
  events: {
    onSlCancel: "sl-cancel",
    onSlFinish: "sl-finish",
    onSlStart: "sl-start",
  },
  displayName: "SlAnimation",
});
var bv = M`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,
  ii = class extends N {
    constructor() {
      super(...arguments),
        (this.localize = new te(this)),
        (this.separatorDir = this.localize.dir()),
        (this.label = "");
    }
    getSeparator() {
      const t = this.separatorSlot
        .assignedElements({ flatten: !0 })[0]
        .cloneNode(!0);
      return (
        [t, ...t.querySelectorAll("[id]")].forEach((r) =>
          r.removeAttribute("id"),
        ),
        t.setAttribute("data-default", ""),
        (t.slot = "separator"),
        t
      );
    }
    handleSlotChange() {
      const e = [...this.defaultSlot.assignedElements({ flatten: !0 })].filter(
        (t) => t.tagName.toLowerCase() === "sl-breadcrumb-item",
      );
      e.forEach((t, r) => {
        const i = t.querySelector('[slot="separator"]');
        i === null
          ? t.append(this.getSeparator())
          : i.hasAttribute("data-default") &&
            i.replaceWith(this.getSeparator()),
          r === e.length - 1
            ? t.setAttribute("aria-current", "page")
            : t.removeAttribute("aria-current");
      });
    }
    render() {
      return (
        this.separatorDir !== this.localize.dir() &&
          ((this.separatorDir = this.localize.dir()),
          this.updateComplete.then(() => this.handleSlotChange())),
        $`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `
      );
    }
  };
ii.styles = [U, bv];
ii.dependencies = { "sl-icon": ae };
c([P("slot")], ii.prototype, "defaultSlot", 2);
c([P('slot[name="separator"]')], ii.prototype, "separatorSlot", 2);
c([h()], ii.prototype, "label", 2);
var vv = "sl-breadcrumb";
ii.define("sl-breadcrumb");
D({
  tagName: vv,
  elementClass: ii,
  react: F,
  events: {},
  displayName: "SlBreadcrumb",
});
var yv = M`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,
  Mi = class extends N {
    constructor() {
      super(...arguments),
        (this.variant = "primary"),
        (this.pill = !1),
        (this.pulse = !1);
    }
    render() {
      return $`
      <span
        part="base"
        class=${V({ badge: !0, "badge--primary": this.variant === "primary", "badge--success": this.variant === "success", "badge--neutral": this.variant === "neutral", "badge--warning": this.variant === "warning", "badge--danger": this.variant === "danger", "badge--pill": this.pill, "badge--pulse": this.pulse })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
    }
  };
Mi.styles = [U, yv];
c([h({ reflect: !0 })], Mi.prototype, "variant", 2);
c([h({ type: Boolean, reflect: !0 })], Mi.prototype, "pill", 2);
c([h({ type: Boolean, reflect: !0 })], Mi.prototype, "pulse", 2);
var _v = "sl-badge";
Mi.define("sl-badge");
D({
  tagName: _v,
  elementClass: Mi,
  react: F,
  events: {},
  displayName: "SlBadge",
});
var wv = M`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,
  It = class extends N {
    constructor() {
      super(...arguments),
        (this.hasError = !1),
        (this.image = ""),
        (this.label = ""),
        (this.initials = ""),
        (this.loading = "eager"),
        (this.shape = "circle");
    }
    handleImageChange() {
      this.hasError = !1;
    }
    handleImageLoadError() {
      (this.hasError = !0), this.emit("sl-error");
    }
    render() {
      const e = $`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
      let t = $``;
      return (
        this.initials
          ? (t = $`<div part="initials" class="avatar__initials">${this.initials}</div>`)
          : (t = $`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `),
        $`
      <div
        part="base"
        class=${V({ avatar: !0, "avatar--circle": this.shape === "circle", "avatar--rounded": this.shape === "rounded", "avatar--square": this.shape === "square" })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? e : t}
      </div>
    `
      );
    }
  };
It.styles = [U, wv];
It.dependencies = { "sl-icon": ae };
c([H()], It.prototype, "hasError", 2);
c([h()], It.prototype, "image", 2);
c([h()], It.prototype, "label", 2);
c([h()], It.prototype, "initials", 2);
c([h()], It.prototype, "loading", 2);
c([h({ reflect: !0 })], It.prototype, "shape", 2);
c([R("image")], It.prototype, "handleImageChange", 1);
var xv = "sl-avatar";
It.define("sl-avatar");
var kv = D({
    tagName: xv,
    elementClass: It,
    react: F,
    events: { onSlError: "sl-error" },
    displayName: "SlAvatar",
  }),
  zl = kv,
  Cv = M`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,
  nr = class extends N {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Ye(this, "prefix", "suffix")),
        (this.renderType = "button"),
        (this.rel = "noreferrer noopener");
    }
    setRenderType() {
      const e =
        this.defaultSlot
          .assignedElements({ flatten: !0 })
          .filter((t) => t.tagName.toLowerCase() === "sl-dropdown").length > 0;
      if (this.href) {
        this.renderType = "link";
        return;
      }
      if (e) {
        this.renderType = "dropdown";
        return;
      }
      this.renderType = "button";
    }
    hrefChanged() {
      this.setRenderType();
    }
    handleSlotChange() {
      this.setRenderType();
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ "breadcrumb-item": !0, "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"), "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix") })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${
          this.renderType === "link"
            ? $`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${L(this.target ? this.target : void 0)}"
                rel=${L(this.target ? this.rel : void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `
            : ""
        }
        ${
          this.renderType === "button"
            ? $`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `
            : ""
        }
        ${
          this.renderType === "dropdown"
            ? $`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `
            : ""
        }

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
    }
  };
nr.styles = [U, Cv];
c([P("slot:not([name])")], nr.prototype, "defaultSlot", 2);
c([H()], nr.prototype, "renderType", 2);
c([h()], nr.prototype, "href", 2);
c([h()], nr.prototype, "target", 2);
c([h()], nr.prototype, "rel", 2);
c([R("href", { waitUntilFirstUpdate: !0 })], nr.prototype, "hrefChanged", 1);
var Sv = "sl-breadcrumb-item";
nr.define("sl-breadcrumb-item");
D({
  tagName: Sv,
  elementClass: nr,
  react: F,
  events: {},
  displayName: "SlBreadcrumbItem",
});
var $v = "sl-button-group";
zr.define("sl-button-group");
D({
  tagName: $v,
  elementClass: zr,
  react: F,
  events: {},
  displayName: "SlButtonGroup",
});
var Ev = "sl-button";
ie.define("sl-button");
var Av = D({
    tagName: Ev,
    elementClass: ie,
    react: F,
    events: {
      onSlBlur: "sl-blur",
      onSlFocus: "sl-focus",
      onSlInvalid: "sl-invalid",
    },
    displayName: "SlButton",
  }),
  Is = Av,
  Rv = M`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,
  ht = class Or extends N {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Ye(this, "icon", "suffix")),
        (this.localize = new te(this)),
        (this.open = !1),
        (this.closable = !1),
        (this.variant = "primary"),
        (this.duration = 1 / 0),
        (this.remainingTime = this.duration);
    }
    static get toastStack() {
      return (
        this.currentToastStack ||
          (this.currentToastStack = Object.assign(
            document.createElement("div"),
            { className: "sl-toast-stack" },
          )),
        this.currentToastStack
      );
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    restartAutoHide() {
      this.handleCountdownChange(),
        clearTimeout(this.autoHideTimeout),
        clearInterval(this.remainingTimeInterval),
        this.open &&
          this.duration < 1 / 0 &&
          ((this.autoHideTimeout = window.setTimeout(
            () => this.hide(),
            this.duration,
          )),
          (this.remainingTime = this.duration),
          (this.remainingTimeInterval = window.setInterval(() => {
            this.remainingTime -= 100;
          }, 100)));
    }
    pauseAutoHide() {
      var t;
      (t = this.countdownAnimation) == null || t.pause(),
        clearTimeout(this.autoHideTimeout),
        clearInterval(this.remainingTimeInterval);
    }
    resumeAutoHide() {
      var t;
      this.duration < 1 / 0 &&
        ((this.autoHideTimeout = window.setTimeout(
          () => this.hide(),
          this.remainingTime,
        )),
        (this.remainingTimeInterval = window.setInterval(() => {
          this.remainingTime -= 100;
        }, 100)),
        (t = this.countdownAnimation) == null || t.play());
    }
    handleCountdownChange() {
      if (this.open && this.duration < 1 / 0 && this.countdown) {
        const { countdownElement: t } = this,
          r = "100%",
          i = "0";
        this.countdownAnimation = t.animate([{ width: r }, { width: i }], {
          duration: this.duration,
          easing: "linear",
        });
      }
    }
    handleCloseClick() {
      this.hide();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show"),
          this.duration < 1 / 0 && this.restartAutoHide(),
          await Se(this.base),
          (this.base.hidden = !1);
        const { keyframes: t, options: r } = ue(this, "alert.show", {
          dir: this.localize.dir(),
        });
        await _e(this.base, t, r), this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"),
          clearTimeout(this.autoHideTimeout),
          clearInterval(this.remainingTimeInterval),
          await Se(this.base);
        const { keyframes: t, options: r } = ue(this, "alert.hide", {
          dir: this.localize.dir(),
        });
        await _e(this.base, t, r),
          (this.base.hidden = !0),
          this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    async show() {
      if (!this.open) return (this.open = !0), Ge(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), Ge(this, "sl-after-hide");
    }
    async toast() {
      return new Promise((t) => {
        this.handleCountdownChange(),
          Or.toastStack.parentElement === null &&
            document.body.append(Or.toastStack),
          Or.toastStack.appendChild(this),
          requestAnimationFrame(() => {
            this.clientWidth, this.show();
          }),
          this.addEventListener(
            "sl-after-hide",
            () => {
              Or.toastStack.removeChild(this),
                t(),
                Or.toastStack.querySelector("sl-alert") === null &&
                  Or.toastStack.remove();
            },
            { once: !0 },
          );
      });
    }
    render() {
      return $`
      <div
        part="base"
        class=${V({ alert: !0, "alert--open": this.open, "alert--closable": this.closable, "alert--has-countdown": !!this.countdown, "alert--has-icon": this.hasSlotController.test("icon"), "alert--primary": this.variant === "primary", "alert--success": this.variant === "success", "alert--neutral": this.variant === "neutral", "alert--warning": this.variant === "warning", "alert--danger": this.variant === "danger" })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${
          this.closable
            ? $`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `
            : ""
        }

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${
          this.countdown
            ? $`
              <div
                class=${V({ alert__countdown: !0, "alert__countdown--ltr": this.countdown === "ltr" })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `
            : ""
        }
      </div>
    `;
    }
  };
ht.styles = [U, Rv];
ht.dependencies = { "sl-icon-button": $e };
c([P('[part~="base"]')], ht.prototype, "base", 2);
c([P(".alert__countdown-elapsed")], ht.prototype, "countdownElement", 2);
c([h({ type: Boolean, reflect: !0 })], ht.prototype, "open", 2);
c([h({ type: Boolean, reflect: !0 })], ht.prototype, "closable", 2);
c([h({ reflect: !0 })], ht.prototype, "variant", 2);
c([h({ type: Number })], ht.prototype, "duration", 2);
c([h({ type: String, reflect: !0 })], ht.prototype, "countdown", 2);
c([H()], ht.prototype, "remainingTime", 2);
c(
  [R("open", { waitUntilFirstUpdate: !0 })],
  ht.prototype,
  "handleOpenChange",
  1,
);
c([R("duration")], ht.prototype, "handleDurationChange", 1);
var Pd = ht;
oe("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 250, easing: "ease" },
});
oe("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 250, easing: "ease" },
});
var zv = "sl-alert";
Pd.define("sl-alert");
var Tv = D({
    tagName: zv,
    elementClass: Pd,
    react: F,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlAlert",
  }),
  Pv = Tv,
  Iv = (e, t) => {
    let r = 0;
    return function (...i) {
      window.clearTimeout(r),
        (r = window.setTimeout(() => {
          e.call(this, ...i);
        }, t));
    };
  },
  Tl = (e, t, r) => {
    const i = e[t];
    e[t] = function (...s) {
      i.call(this, ...s), r.call(this, i, ...s);
    };
  };
(() => {
  if (typeof window > "u") return;
  if (!("onscrollend" in window)) {
    const t = new Set(),
      r = new WeakMap(),
      i = (o) => {
        for (const a of o.changedTouches) t.add(a.identifier);
      },
      s = (o) => {
        for (const a of o.changedTouches) t.delete(a.identifier);
      };
    document.addEventListener("touchstart", i, !0),
      document.addEventListener("touchend", s, !0),
      document.addEventListener("touchcancel", s, !0),
      Tl(EventTarget.prototype, "addEventListener", function (o, a) {
        if (a !== "scrollend") return;
        const n = Iv(() => {
          t.size ? n() : this.dispatchEvent(new Event("scrollend"));
        }, 100);
        o.call(this, "scroll", n, { passive: !0 }), r.set(this, n);
      }),
      Tl(EventTarget.prototype, "removeEventListener", function (o, a) {
        if (a !== "scrollend") return;
        const n = r.get(this);
        n && o.call(this, "scroll", n, { passive: !0 });
      });
  }
})();
var Os = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Jr = typeof window > "u" || "Deno" in globalThis;
function mt() {}
function Ov(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sa(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Id(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function di(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pl(e, t) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: s,
    predicate: o,
    queryKey: a,
    stale: n,
  } = e;
  if (a) {
    if (i) {
      if (t.queryHash !== wn(a, t.options)) return !1;
    } else if (!bs(t.queryKey, a)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof n == "boolean" && t.isStale() !== n) ||
    (s && s !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Il(e, t) {
  const { exact: r, status: i, predicate: s, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (gs(t.options.mutationKey) !== gs(o)) return !1;
    } else if (!bs(t.options.mutationKey, o)) return !1;
  }
  return !((i && t.state.status !== i) || (s && !s(t)));
}
function wn(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || gs)(e);
}
function gs(e) {
  return JSON.stringify(e, (t, r) =>
    Ea(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, s) => ((i[s] = r[s]), i), {})
      : r,
  );
}
function bs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((r) => bs(e[r], t[r]))
        : !1;
}
function Od(e, t) {
  if (e === t) return e;
  const r = Ol(e) && Ol(t);
  if (r || (Ea(e) && Ea(t))) {
    const i = r ? e : Object.keys(e),
      s = i.length,
      o = r ? t : Object.keys(t),
      a = o.length,
      n = r ? [] : {};
    let l = 0;
    for (let d = 0; d < a; d++) {
      const p = r ? d : o[d];
      ((!r && i.includes(p)) || r) && e[p] === void 0 && t[p] === void 0
        ? ((n[p] = void 0), l++)
        : ((n[p] = Od(e[p], t[p])), n[p] === e[p] && e[p] !== void 0 && l++);
    }
    return s === a && l === s ? e : n;
  }
  return t;
}
function $a(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Ol(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ea(e) {
  if (!Ll(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Ll(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Ll(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lv(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Aa(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? Od(e, t)
      : t;
}
function Nv(e, t, r = 0) {
  const i = [...e, t];
  return r && i.length > r ? i.slice(1) : i;
}
function Fv(e, t, r = 0) {
  const i = [t, ...e];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var Hi = Symbol();
function Ld(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Hi
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Hr,
  pr,
  ui,
  sc,
  Dv =
    ((sc = class extends Os {
      constructor() {
        super();
        q(this, Hr);
        q(this, pr);
        q(this, ui);
        O(this, ui, (t) => {
          if (!Jr && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, pr) || this.setEventListener(k(this, ui));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, pr)) == null || t.call(this), O(this, pr, void 0));
      }
      setEventListener(t) {
        var r;
        O(this, ui, t),
          (r = k(this, pr)) == null || r.call(this),
          O(
            this,
            pr,
            t((i) => {
              typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            }),
          );
      }
      setFocused(t) {
        k(this, Hr) !== t && (O(this, Hr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, Hr) == "boolean"
          ? k(this, Hr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Hr = new WeakMap()),
    (pr = new WeakMap()),
    (ui = new WeakMap()),
    sc),
  xn = new Dv(),
  hi,
  fr,
  pi,
  oc,
  Mv =
    ((oc = class extends Os {
      constructor() {
        super();
        q(this, hi, !0);
        q(this, fr);
        q(this, pi);
        O(this, pi, (t) => {
          if (!Jr && window.addEventListener) {
            const r = () => t(!0),
              i = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, fr) || this.setEventListener(k(this, pi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, fr)) == null || t.call(this), O(this, fr, void 0));
      }
      setEventListener(t) {
        var r;
        O(this, pi, t),
          (r = k(this, fr)) == null || r.call(this),
          O(this, fr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        k(this, hi) !== t &&
          (O(this, hi, t),
          this.listeners.forEach((i) => {
            i(t);
          }));
      }
      isOnline() {
        return k(this, hi);
      }
    }),
    (hi = new WeakMap()),
    (fr = new WeakMap()),
    (pi = new WeakMap()),
    oc),
  fo = new Mv();
function Ra() {
  let e, t;
  const r = new Promise((s, o) => {
    (e = s), (t = o);
  });
  (r.status = "pending"), r.catch(() => {});
  function i(s) {
    Object.assign(r, s), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (s) => {
      i({ status: "fulfilled", value: s }), e(s);
    }),
    (r.reject = (s) => {
      i({ status: "rejected", reason: s }), t(s);
    }),
    r
  );
}
function Hv(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Nd(e) {
  return (e ?? "online") === "online" ? fo.isOnline() : !0;
}
var Fd = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Go(e) {
  return e instanceof Fd;
}
function Dd(e) {
  let t = !1,
    r = 0,
    i = !1,
    s;
  const o = Ra(),
    a = (b) => {
      var w;
      i || (f(new Fd(b)), (w = e.abort) == null || w.call(e));
    },
    n = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    d = () =>
      xn.isFocused() &&
      (e.networkMode === "always" || fo.isOnline()) &&
      e.canRun(),
    p = () => Nd(e.networkMode) && e.canRun(),
    u = (b) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onSuccess) == null || w.call(e, b),
        s == null || s(),
        o.resolve(b));
    },
    f = (b) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onError) == null || w.call(e, b),
        s == null || s(),
        o.reject(b));
    },
    m = () =>
      new Promise((b) => {
        var w;
        (s = (_) => {
          (i || d()) && b(_);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var b;
        (s = void 0), i || (b = e.onContinue) == null || b.call(e);
      }),
    g = () => {
      if (i) return;
      let b;
      const w = r === 0 ? e.initialPromise : void 0;
      try {
        b = w ?? e.fn();
      } catch (_) {
        b = Promise.reject(_);
      }
      Promise.resolve(b)
        .then(u)
        .catch((_) => {
          var A;
          if (i) return;
          const y = e.retry ?? (Jr ? 0 : 3),
            C = e.retryDelay ?? Hv,
            x = typeof C == "function" ? C(r, _) : C,
            S =
              y === !0 ||
              (typeof y == "number" && r < y) ||
              (typeof y == "function" && y(r, _));
          if (t || !S) {
            f(_);
            return;
          }
          r++,
            (A = e.onFail) == null || A.call(e, r, _),
            Lv(x)
              .then(() => (d() ? void 0 : m()))
              .then(() => {
                t ? f(_) : g();
              });
        });
    };
  return {
    promise: o,
    cancel: a,
    continue: () => (s == null || s(), o),
    cancelRetry: n,
    continueRetry: l,
    canStart: p,
    start: () => (p() ? g() : m().then(g), o),
  };
}
var Bv = (e) => setTimeout(e, 0);
function Vv() {
  let e = [],
    t = 0,
    r = (n) => {
      n();
    },
    i = (n) => {
      n();
    },
    s = Bv;
  const o = (n) => {
      t
        ? e.push(n)
        : s(() => {
            r(n);
          });
    },
    a = () => {
      const n = e;
      (e = []),
        n.length &&
          s(() => {
            i(() => {
              n.forEach((l) => {
                r(l);
              });
            });
          });
    };
  return {
    batch: (n) => {
      let l;
      t++;
      try {
        l = n();
      } finally {
        t--, t || a();
      }
      return l;
    },
    batchCalls:
      (n) =>
      (...l) => {
        o(() => {
          n(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (n) => {
      r = n;
    },
    setBatchNotifyFunction: (n) => {
      i = n;
    },
    setScheduler: (n) => {
      s = n;
    },
  };
}
var Fe = Vv(),
  Br,
  ac,
  Md =
    ((ac = class {
      constructor() {
        q(this, Br);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Sa(this.gcTime) &&
            O(
              this,
              Br,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Jr ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        k(this, Br) && (clearTimeout(k(this, Br)), O(this, Br, void 0));
      }
    }),
    (Br = new WeakMap()),
    ac),
  fi,
  mi,
  ft,
  Vr,
  Ve,
  ys,
  Ur,
  Ct,
  Yt,
  nc,
  Uv =
    ((nc = class extends Md {
      constructor(t) {
        super();
        q(this, Ct);
        q(this, fi);
        q(this, mi);
        q(this, ft);
        q(this, Vr);
        q(this, Ve);
        q(this, ys);
        q(this, Ur);
        O(this, Ur, !1),
          O(this, ys, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          O(this, Vr, t.client),
          O(this, ft, k(this, Vr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          O(this, fi, qv(this.options)),
          (this.state = t.state ?? k(this, fi)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Ve)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...k(this, ys), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, ft).remove(this);
      }
      setData(t, r) {
        const i = Aa(this.state.data, t, this.options);
        return (
          X(this, Ct, Yt).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(t, r) {
        X(this, Ct, Yt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var i, s;
        const r = (i = k(this, Ve)) == null ? void 0 : i.promise;
        return (
          (s = k(this, Ve)) == null || s.cancel(t),
          r ? r.then(mt).catch(mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(k(this, fi));
      }
      isActive() {
        return this.observers.some((t) => $t(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Hi ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Id(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = k(this, Ve)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = k(this, Ve)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (k(this, Ve) &&
              (k(this, Ur)
                ? k(this, Ve).cancel({ revert: !0 })
                : k(this, Ve).cancelRetry()),
            this.scheduleGc()),
          k(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          X(this, Ct, Yt).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var l, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Ve))
            return k(this, Ve).continueRetry(), k(this, Ve).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const u = this.observers.find((f) => f.options.queryFn);
          u && this.setOptions(u.options);
        }
        const i = new AbortController(),
          s = (u) => {
            Object.defineProperty(u, "signal", {
              enumerable: !0,
              get: () => (O(this, Ur, !0), i.signal),
            });
          },
          o = () => {
            const u = Ld(this.options, r),
              f = {
                client: k(this, Vr),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              s(f),
              O(this, Ur, !1),
              this.options.persister ? this.options.persister(u, f, this) : u(f)
            );
          },
          a = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: k(this, Vr),
            state: this.state,
            fetchFn: o,
          };
        s(a),
          (l = this.options.behavior) == null || l.onFetch(a, this),
          O(this, mi, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
            X(this, Ct, Yt).call(this, {
              type: "fetch",
              meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
            });
        const n = (u) => {
          var f, m, g, b;
          (Go(u) && u.silent) ||
            X(this, Ct, Yt).call(this, { type: "error", error: u }),
            Go(u) ||
              ((m = (f = k(this, ft).config).onError) == null ||
                m.call(f, u, this),
              (b = (g = k(this, ft).config).onSettled) == null ||
                b.call(g, this.state.data, u, this)),
            this.scheduleGc();
        };
        return (
          O(
            this,
            Ve,
            Dd({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (u) => {
                var f, m, g, b;
                if (u === void 0) {
                  n(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(u);
                } catch (w) {
                  n(w);
                  return;
                }
                (m = (f = k(this, ft).config).onSuccess) == null ||
                  m.call(f, u, this),
                  (b = (g = k(this, ft).config).onSettled) == null ||
                    b.call(g, u, this.state.error, this),
                  this.scheduleGc();
              },
              onError: n,
              onFail: (u, f) => {
                X(this, Ct, Yt).call(this, {
                  type: "failed",
                  failureCount: u,
                  error: f,
                });
              },
              onPause: () => {
                X(this, Ct, Yt).call(this, { type: "pause" });
              },
              onContinue: () => {
                X(this, Ct, Yt).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          k(this, Ve).start()
        );
      }
    }),
    (fi = new WeakMap()),
    (mi = new WeakMap()),
    (ft = new WeakMap()),
    (Vr = new WeakMap()),
    (Ve = new WeakMap()),
    (ys = new WeakMap()),
    (Ur = new WeakMap()),
    (Ct = new WeakSet()),
    (Yt = function (t) {
      const r = (i) => {
        switch (t.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...Hd(i.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...i,
              data: t.data,
              dataUpdateCount: i.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Go(s) && s.revert && k(this, mi)
              ? { ...k(this, mi), fetchStatus: "idle" }
              : {
                  ...i,
                  error: s,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...t.state };
        }
      };
      (this.state = r(this.state)),
        Fe.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            k(this, ft).notify({ query: this, type: "updated", action: t });
        });
    }),
    nc);
function Hd(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Nd(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function qv(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    i = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ft,
  lc,
  jv =
    ((lc = class extends Os {
      constructor(t = {}) {
        super();
        q(this, Ft);
        (this.config = t), O(this, Ft, new Map());
      }
      build(t, r, i) {
        const s = r.queryKey,
          o = r.queryHash ?? wn(s, r);
        let a = this.get(o);
        return (
          a ||
            ((a = new Uv({
              client: t,
              queryKey: s,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: i,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(a)),
          a
        );
      }
      add(t) {
        k(this, Ft).has(t.queryHash) ||
          (k(this, Ft).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = k(this, Ft).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && k(this, Ft).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, Ft).get(t);
      }
      getAll() {
        return [...k(this, Ft).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Pl(r, i));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((i) => Pl(t, i)) : r;
      }
      notify(t) {
        Fe.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ft = new WeakMap()),
    lc),
  Dt,
  We,
  qr,
  Mt,
  ur,
  cc,
  Wv =
    ((cc = class extends Md {
      constructor(t) {
        super();
        q(this, Mt);
        q(this, Dt);
        q(this, We);
        q(this, qr);
        (this.mutationId = t.mutationId),
          O(this, We, t.mutationCache),
          O(this, Dt, []),
          (this.state = t.state || Kv()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, Dt).includes(t) ||
          (k(this, Dt).push(t),
          this.clearGcTimeout(),
          k(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        O(
          this,
          Dt,
          k(this, Dt).filter((r) => r !== t),
        ),
          this.scheduleGc(),
          k(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        k(this, Dt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, qr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, o, a, n, l, d, p, u, f, m, g, b, w, _, y, C, x, S, A, T;
        O(
          this,
          qr,
          Dd({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (I, E) => {
              X(this, Mt, ur).call(this, {
                type: "failed",
                failureCount: I,
                error: E,
              });
            },
            onPause: () => {
              X(this, Mt, ur).call(this, { type: "pause" });
            },
            onContinue: () => {
              X(this, Mt, ur).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, We).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          i = !k(this, qr).canStart();
        try {
          if (!r) {
            X(this, Mt, ur).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((o = (s = k(this, We).config).onMutate) == null
                ? void 0
                : o.call(s, t, this));
            const E = await ((n = (a = this.options).onMutate) == null
              ? void 0
              : n.call(a, t));
            E !== this.state.context &&
              X(this, Mt, ur).call(this, {
                type: "pending",
                context: E,
                variables: t,
                isPaused: i,
              });
          }
          const I = await k(this, qr).start();
          return (
            await ((d = (l = k(this, We).config).onSuccess) == null
              ? void 0
              : d.call(l, I, t, this.state.context, this)),
            await ((u = (p = this.options).onSuccess) == null
              ? void 0
              : u.call(p, I, t, this.state.context)),
            await ((m = (f = k(this, We).config).onSettled) == null
              ? void 0
              : m.call(
                  f,
                  I,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((b = (g = this.options).onSettled) == null
              ? void 0
              : b.call(g, I, null, t, this.state.context)),
            X(this, Mt, ur).call(this, { type: "success", data: I }),
            I
          );
        } catch (I) {
          try {
            throw (
              (await ((_ = (w = k(this, We).config).onError) == null
                ? void 0
                : _.call(w, I, t, this.state.context, this)),
              await ((C = (y = this.options).onError) == null
                ? void 0
                : C.call(y, I, t, this.state.context)),
              await ((S = (x = k(this, We).config).onSettled) == null
                ? void 0
                : S.call(
                    x,
                    void 0,
                    I,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (A = this.options).onSettled) == null
                ? void 0
                : T.call(A, void 0, I, t, this.state.context)),
              I)
            );
          } finally {
            X(this, Mt, ur).call(this, { type: "error", error: I });
          }
        } finally {
          k(this, We).runNext(this);
        }
      }
    }),
    (Dt = new WeakMap()),
    (We = new WeakMap()),
    (qr = new WeakMap()),
    (Mt = new WeakSet()),
    (ur = function (t) {
      const r = (i) => {
        switch (t.type) {
          case "failed":
            return {
              ...i,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: t.error,
              failureCount: i.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        Fe.batch(() => {
          k(this, Dt).forEach((i) => {
            i.onMutationUpdate(t);
          }),
            k(this, We).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    cc);
function Kv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Xt,
  St,
  _s,
  dc,
  Qv =
    ((dc = class extends Os {
      constructor(t = {}) {
        super();
        q(this, Xt);
        q(this, St);
        q(this, _s);
        (this.config = t),
          O(this, Xt, new Set()),
          O(this, St, new Map()),
          O(this, _s, 0);
      }
      build(t, r, i) {
        const s = new Wv({
          mutationCache: this,
          mutationId: ++Ds(this, _s)._,
          options: t.defaultMutationOptions(r),
          state: i,
        });
        return this.add(s), s;
      }
      add(t) {
        k(this, Xt).add(t);
        const r = Ks(t);
        if (typeof r == "string") {
          const i = k(this, St).get(r);
          i ? i.push(t) : k(this, St).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (k(this, Xt).delete(t)) {
          const r = Ks(t);
          if (typeof r == "string") {
            const i = k(this, St).get(r);
            if (i)
              if (i.length > 1) {
                const s = i.indexOf(t);
                s !== -1 && i.splice(s, 1);
              } else i[0] === t && k(this, St).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = Ks(t);
        if (typeof r == "string") {
          const i = k(this, St).get(r),
            s =
              i == null ? void 0 : i.find((o) => o.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var i;
        const r = Ks(t);
        if (typeof r == "string") {
          const s =
            (i = k(this, St).get(r)) == null
              ? void 0
              : i.find((o) => o !== t && o.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Fe.batch(() => {
          k(this, Xt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            k(this, Xt).clear(),
            k(this, St).clear();
        });
      }
      getAll() {
        return Array.from(k(this, Xt));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Il(r, i));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Il(t, r));
      }
      notify(t) {
        Fe.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return Fe.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(mt))),
        );
      }
    }),
    (Xt = new WeakMap()),
    (St = new WeakMap()),
    (_s = new WeakMap()),
    dc);
function Ks(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Nl(e) {
  return {
    onFetch: (t, r) => {
      var p, u, f, m, g;
      const i = t.options,
        s =
          (f =
            (u = (p = t.fetchOptions) == null ? void 0 : p.meta) == null
              ? void 0
              : u.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        a = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let n = { pages: [], pageParams: [] },
        l = 0;
      const d = async () => {
        let b = !1;
        const w = (C) => {
            Object.defineProperty(C, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (b = !0)
                  : t.signal.addEventListener("abort", () => {
                      b = !0;
                    }),
                t.signal
              ),
            });
          },
          _ = Ld(t.options, t.fetchOptions),
          y = async (C, x, S) => {
            if (b) return Promise.reject();
            if (x == null && C.pages.length) return Promise.resolve(C);
            const A = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: x,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(A);
            const T = await _(A),
              { maxPages: I } = t.options,
              E = S ? Fv : Nv;
            return {
              pages: E(C.pages, T, I),
              pageParams: E(C.pageParams, x, I),
            };
          };
        if (s && o.length) {
          const C = s === "backward",
            x = C ? Gv : Fl,
            S = { pages: o, pageParams: a },
            A = x(i, S);
          n = await y(S, A, C);
        } else {
          const C = e ?? o.length;
          do {
            const x = l === 0 ? (a[0] ?? i.initialPageParam) : Fl(i, n);
            if (l > 0 && x == null) break;
            (n = await y(n, x)), l++;
          } while (l < C);
        }
        return n;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var b, w;
            return (w = (b = t.options).persister) == null
              ? void 0
              : w.call(
                  b,
                  d,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r,
                );
          })
        : (t.fetchFn = d);
    },
  };
}
function Fl(e, { pages: t, pageParams: r }) {
  const i = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[i], t, r[i], r) : void 0;
}
function Gv(e, { pages: t, pageParams: r }) {
  var i;
  return t.length > 0
    ? (i = e.getPreviousPageParam) == null
      ? void 0
      : i.call(e, t[0], t, r[0], r)
    : void 0;
}
var ye,
  mr,
  gr,
  gi,
  bi,
  br,
  vi,
  yi,
  uc,
  Yv =
    ((uc = class {
      constructor(e = {}) {
        q(this, ye);
        q(this, mr);
        q(this, gr);
        q(this, gi);
        q(this, bi);
        q(this, br);
        q(this, vi);
        q(this, yi);
        O(this, ye, e.queryCache || new jv()),
          O(this, mr, e.mutationCache || new Qv()),
          O(this, gr, e.defaultOptions || {}),
          O(this, gi, new Map()),
          O(this, bi, new Map()),
          O(this, br, 0);
      }
      mount() {
        Ds(this, br)._++,
          k(this, br) === 1 &&
            (O(
              this,
              vi,
              xn.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, ye).onFocus());
              }),
            ),
            O(
              this,
              yi,
              fo.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, ye).onOnline());
              }),
            ));
      }
      unmount() {
        var e, t;
        Ds(this, br)._--,
          k(this, br) === 0 &&
            ((e = k(this, vi)) == null || e.call(this),
            O(this, vi, void 0),
            (t = k(this, yi)) == null || t.call(this),
            O(this, yi, void 0));
      }
      isFetching(e) {
        return k(this, ye).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, mr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = k(this, ye).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          r = k(this, ye).build(this, t),
          i = r.state.data;
        return i === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              r.isStaleByTime(di(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(i));
      }
      getQueriesData(e) {
        return k(this, ye)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const i = r.data;
            return [t, i];
          });
      }
      setQueryData(e, t, r) {
        const i = this.defaultQueryOptions({ queryKey: e }),
          s = k(this, ye).get(i.queryHash),
          o = s == null ? void 0 : s.state.data,
          a = Ov(t, o);
        if (a !== void 0)
          return k(this, ye)
            .build(this, i)
            .setData(a, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return Fe.batch(() =>
          k(this, ye)
            .findAll(e)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, t, r)]),
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = k(this, ye).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = k(this, ye);
        Fe.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = k(this, ye);
        return Fe.batch(
          () => (
            r.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const r = { revert: !0, ...t },
          i = Fe.batch(() =>
            k(this, ye)
              .findAll(e)
              .map((s) => s.cancel(r)),
          );
        return Promise.all(i).then(mt).catch(mt);
      }
      invalidateQueries(e, t = {}) {
        return Fe.batch(
          () => (
            k(this, ye)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          i = Fe.batch(() =>
            k(this, ye)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let o = s.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(mt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              }),
          );
        return Promise.all(i).then(mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = k(this, ye).build(this, t);
        return r.isStaleByTime(di(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Nl(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Nl(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return fo.isOnline()
          ? k(this, mr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, ye);
      }
      getMutationCache() {
        return k(this, mr);
      }
      getDefaultOptions() {
        return k(this, gr);
      }
      setDefaultOptions(e) {
        O(this, gr, e);
      }
      setQueryDefaults(e, t) {
        k(this, gi).set(gs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, gi).values()],
          r = {};
        return (
          t.forEach((i) => {
            bs(e, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        k(this, bi).set(gs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, bi).values()],
          r = {};
        return (
          t.forEach((i) => {
            bs(e, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, gr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = wn(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Hi && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, gr).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        k(this, ye).clear(), k(this, mr).clear();
      }
    }),
    (ye = new WeakMap()),
    (mr = new WeakMap()),
    (gr = new WeakMap()),
    (gi = new WeakMap()),
    (bi = new WeakMap()),
    (br = new WeakMap()),
    (vi = new WeakMap()),
    (yi = new WeakMap()),
    uc),
  Je,
  J,
  ws,
  Ke,
  jr,
  _i,
  vr,
  Ht,
  xs,
  wi,
  xi,
  Wr,
  Kr,
  yr,
  ki,
  se,
  ts,
  za,
  Ta,
  Pa,
  Ia,
  Oa,
  La,
  Na,
  Bd,
  hc,
  Xv =
    ((hc = class extends Os {
      constructor(t, r) {
        super();
        q(this, se);
        q(this, Je);
        q(this, J);
        q(this, ws);
        q(this, Ke);
        q(this, jr);
        q(this, _i);
        q(this, vr);
        q(this, Ht);
        q(this, xs);
        q(this, wi);
        q(this, xi);
        q(this, Wr);
        q(this, Kr);
        q(this, yr);
        q(this, ki, new Set());
        (this.options = r),
          O(this, Je, t),
          O(this, Ht, null),
          O(this, vr, Ra()),
          this.options.experimental_prefetchInRender ||
            k(this, vr).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (k(this, J).addObserver(this),
          Dl(k(this, J), this.options)
            ? X(this, se, ts).call(this)
            : this.updateResult(),
          X(this, se, Ia).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Fa(k(this, J), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Fa(k(this, J), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          X(this, se, Oa).call(this),
          X(this, se, La).call(this),
          k(this, J).removeObserver(this);
      }
      setOptions(t) {
        const r = this.options,
          i = k(this, J);
        if (
          ((this.options = k(this, Je).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof $t(this.options.enabled, k(this, J)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        X(this, se, Na).call(this),
          k(this, J).setOptions(this.options),
          r._defaulted &&
            !$a(this.options, r) &&
            k(this, Je)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: k(this, J),
                observer: this,
              });
        const s = this.hasListeners();
        s && Ml(k(this, J), i, this.options, r) && X(this, se, ts).call(this),
          this.updateResult(),
          s &&
            (k(this, J) !== i ||
              $t(this.options.enabled, k(this, J)) !==
                $t(r.enabled, k(this, J)) ||
              di(this.options.staleTime, k(this, J)) !==
                di(r.staleTime, k(this, J))) &&
            X(this, se, za).call(this);
        const o = X(this, se, Ta).call(this);
        s &&
          (k(this, J) !== i ||
            $t(this.options.enabled, k(this, J)) !==
              $t(r.enabled, k(this, J)) ||
            o !== k(this, yr)) &&
          X(this, se, Pa).call(this, o);
      }
      getOptimisticResult(t) {
        const r = k(this, Je).getQueryCache().build(k(this, Je), t),
          i = this.createResult(r, t);
        return (
          Zv(this, i) &&
            (O(this, Ke, i),
            O(this, _i, this.options),
            O(this, jr, k(this, J).state)),
          i
        );
      }
      getCurrentResult() {
        return k(this, Ke);
      }
      trackResult(t, r) {
        const i = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(i, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), r == null || r(s), t[s]),
            });
          }),
          i
        );
      }
      trackProp(t) {
        k(this, ki).add(t);
      }
      getCurrentQuery() {
        return k(this, J);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = k(this, Je).defaultQueryOptions(t),
          i = k(this, Je).getQueryCache().build(k(this, Je), r);
        return i.fetch().then(() => this.createResult(i, r));
      }
      fetch(t) {
        return X(this, se, ts)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), k(this, Ke)));
      }
      createResult(t, r) {
        var I;
        const i = k(this, J),
          s = this.options,
          o = k(this, Ke),
          a = k(this, jr),
          n = k(this, _i),
          d = t !== i ? t.state : k(this, ws),
          { state: p } = t;
        let u = { ...p },
          f = !1,
          m;
        if (r._optimisticResults) {
          const E = this.hasListeners(),
            z = !E && Dl(t, r),
            B = E && Ml(t, i, r, s);
          (z || B) && (u = { ...u, ...Hd(p.data, t.options) }),
            r._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
        }
        let { error: g, errorUpdatedAt: b, status: w } = u;
        if (r.select && u.data !== void 0)
          if (
            o &&
            u.data === (a == null ? void 0 : a.data) &&
            r.select === k(this, xs)
          )
            m = k(this, wi);
          else
            try {
              O(this, xs, r.select),
                (m = r.select(u.data)),
                (m = Aa(o == null ? void 0 : o.data, m, r)),
                O(this, wi, m),
                O(this, Ht, null);
            } catch (E) {
              O(this, Ht, E);
            }
        else m = u.data;
        if (r.placeholderData !== void 0 && m === void 0 && w === "pending") {
          let E;
          if (
            o != null &&
            o.isPlaceholderData &&
            r.placeholderData === (n == null ? void 0 : n.placeholderData)
          )
            E = o.data;
          else if (
            ((E =
              typeof r.placeholderData == "function"
                ? r.placeholderData(
                    (I = k(this, xi)) == null ? void 0 : I.state.data,
                    k(this, xi),
                  )
                : r.placeholderData),
            r.select && E !== void 0)
          )
            try {
              (E = r.select(E)), O(this, Ht, null);
            } catch (z) {
              O(this, Ht, z);
            }
          E !== void 0 &&
            ((w = "success"),
            (m = Aa(o == null ? void 0 : o.data, E, r)),
            (f = !0));
        }
        k(this, Ht) &&
          ((g = k(this, Ht)),
          (m = k(this, wi)),
          (b = Date.now()),
          (w = "error"));
        const _ = u.fetchStatus === "fetching",
          y = w === "pending",
          C = w === "error",
          x = y && _,
          S = m !== void 0,
          T = {
            status: w,
            fetchStatus: u.fetchStatus,
            isPending: y,
            isSuccess: w === "success",
            isError: C,
            isInitialLoading: x,
            isLoading: x,
            data: m,
            dataUpdatedAt: u.dataUpdatedAt,
            error: g,
            errorUpdatedAt: b,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
            isFetchedAfterMount:
              u.dataUpdateCount > d.dataUpdateCount ||
              u.errorUpdateCount > d.errorUpdateCount,
            isFetching: _,
            isRefetching: _ && !y,
            isLoadingError: C && !S,
            isPaused: u.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: C && S,
            isStale: kn(t, r),
            refetch: this.refetch,
            promise: k(this, vr),
          };
        if (this.options.experimental_prefetchInRender) {
          const E = (W) => {
              T.status === "error"
                ? W.reject(T.error)
                : T.data !== void 0 && W.resolve(T.data);
            },
            z = () => {
              const W = O(this, vr, (T.promise = Ra()));
              E(W);
            },
            B = k(this, vr);
          switch (B.status) {
            case "pending":
              t.queryHash === i.queryHash && E(B);
              break;
            case "fulfilled":
              (T.status === "error" || T.data !== B.value) && z();
              break;
            case "rejected":
              (T.status !== "error" || T.error !== B.reason) && z();
              break;
          }
        }
        return T;
      }
      updateResult() {
        const t = k(this, Ke),
          r = this.createResult(k(this, J), this.options);
        if (
          (O(this, jr, k(this, J).state),
          O(this, _i, this.options),
          k(this, jr).data !== void 0 && O(this, xi, k(this, J)),
          $a(r, t))
        )
          return;
        O(this, Ke, r);
        const i = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: s } = this.options,
            o = typeof s == "function" ? s() : s;
          if (o === "all" || (!o && !k(this, ki).size)) return !0;
          const a = new Set(o ?? k(this, ki));
          return (
            this.options.throwOnError && a.add("error"),
            Object.keys(k(this, Ke)).some((n) => {
              const l = n;
              return k(this, Ke)[l] !== t[l] && a.has(l);
            })
          );
        };
        X(this, se, Bd).call(this, { listeners: i() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && X(this, se, Ia).call(this);
      }
    }),
    (Je = new WeakMap()),
    (J = new WeakMap()),
    (ws = new WeakMap()),
    (Ke = new WeakMap()),
    (jr = new WeakMap()),
    (_i = new WeakMap()),
    (vr = new WeakMap()),
    (Ht = new WeakMap()),
    (xs = new WeakMap()),
    (wi = new WeakMap()),
    (xi = new WeakMap()),
    (Wr = new WeakMap()),
    (Kr = new WeakMap()),
    (yr = new WeakMap()),
    (ki = new WeakMap()),
    (se = new WeakSet()),
    (ts = function (t) {
      X(this, se, Na).call(this);
      let r = k(this, J).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(mt)), r;
    }),
    (za = function () {
      X(this, se, Oa).call(this);
      const t = di(this.options.staleTime, k(this, J));
      if (Jr || k(this, Ke).isStale || !Sa(t)) return;
      const i = Id(k(this, Ke).dataUpdatedAt, t) + 1;
      O(
        this,
        Wr,
        setTimeout(() => {
          k(this, Ke).isStale || this.updateResult();
        }, i),
      );
    }),
    (Ta = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(k(this, J))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Pa = function (t) {
      X(this, se, La).call(this),
        O(this, yr, t),
        !(
          Jr ||
          $t(this.options.enabled, k(this, J)) === !1 ||
          !Sa(k(this, yr)) ||
          k(this, yr) === 0
        ) &&
          O(
            this,
            Kr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || xn.isFocused()) &&
                  X(this, se, ts).call(this);
              },
              k(this, yr),
            ),
          );
    }),
    (Ia = function () {
      X(this, se, za).call(this),
        X(this, se, Pa).call(this, X(this, se, Ta).call(this));
    }),
    (Oa = function () {
      k(this, Wr) && (clearTimeout(k(this, Wr)), O(this, Wr, void 0));
    }),
    (La = function () {
      k(this, Kr) && (clearInterval(k(this, Kr)), O(this, Kr, void 0));
    }),
    (Na = function () {
      const t = k(this, Je).getQueryCache().build(k(this, Je), this.options);
      if (t === k(this, J)) return;
      const r = k(this, J);
      O(this, J, t),
        O(this, ws, t.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (Bd = function (t) {
      Fe.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(k(this, Ke));
          }),
          k(this, Je)
            .getQueryCache()
            .notify({ query: k(this, J), type: "observerResultsUpdated" });
      });
    }),
    hc);
function Jv(e, t) {
  return (
    $t(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Dl(e, t) {
  return Jv(e, t) || (e.state.data !== void 0 && Fa(e, t, t.refetchOnMount));
}
function Fa(e, t, r) {
  if ($t(t.enabled, e) !== !1) {
    const i = typeof r == "function" ? r(e) : r;
    return i === "always" || (i !== !1 && kn(e, t));
  }
  return !1;
}
function Ml(e, t, r, i) {
  return (
    (e !== t || $t(i.enabled, e) === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    kn(e, r)
  );
}
function kn(e, t) {
  return $t(t.enabled, e) !== !1 && e.isStaleByTime(di(t.staleTime, e));
}
function Zv(e, t) {
  return !$a(e.getCurrentResult(), t);
}
var Vd = je(void 0),
  Ot = (e) => {
    const t = Z(Vd);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  e0 = ({ client: e, children: t }) => (
    dt(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    v(Vd.Provider, { value: e, children: t })
  ),
  Ud = je(!1),
  t0 = () => Z(Ud);
Ud.Provider;
function r0() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var i0 = je(r0()),
  s0 = () => Z(i0);
function o0(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Hl() {}
var a0 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  n0 = (e) => {
    dt(() => {
      e.clearReset();
    }, [e]);
  },
  l0 = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: r,
    query: i,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    i &&
    ((s && e.data === void 0) || o0(r, [e.error, i])),
  c0 = (e) => {
    const t = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof t == "function"
          ? (...r) => Math.max(t(...r), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  d0 = (e, t) => e.isLoading && e.isFetching && !t,
  u0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Bl = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function h0(e, t, r) {
  var u, f, m, g, b;
  const i = Ot(),
    s = t0(),
    o = s0(),
    a = i.defaultQueryOptions(e);
  (f =
    (u = i.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || f.call(u, a),
    (a._optimisticResults = s ? "isRestoring" : "optimistic"),
    c0(a),
    a0(a, o),
    n0(o);
  const n = !i.getQueryCache().get(a.queryHash),
    [l] = he(() => new t(i, a)),
    d = l.getOptimisticResult(a),
    p = !s && e.subscribed !== !1;
  if (
    (_o(
      sr(
        (w) => {
          const _ = p ? l.subscribe(Fe.batchCalls(w)) : Hl;
          return l.updateResult(), _;
        },
        [l, p],
      ),
      () => l.getCurrentResult(),
    ),
    dt(() => {
      l.setOptions(a);
    }, [a, l]),
    u0(a, d))
  )
    throw Bl(a, l, o);
  if (
    l0({
      result: d,
      errorResetBoundary: o,
      throwOnError: a.throwOnError,
      query: i.getQueryCache().get(a.queryHash),
      suspense: a.suspense,
    })
  )
    throw d.error;
  if (
    ((g =
      (m = i.getDefaultOptions().queries) == null
        ? void 0
        : m._experimental_afterQuery) == null || g.call(m, a, d),
    a.experimental_prefetchInRender && !Jr && d0(d, s))
  ) {
    const w = n
      ? Bl(a, l, o)
      : (b = i.getQueryCache().get(a.queryHash)) == null
        ? void 0
        : b.promise;
    w == null ||
      w.catch(Hl).finally(() => {
        l.updateResult();
      });
  }
  return a.notifyOnChangeProps ? d : l.trackResult(d);
}
function Kt(e, t) {
  return h0(e, Xv);
}
var Ji = {},
  Vl;
function p0() {
  if (Vl) return Ji;
  (Vl = 1),
    Object.defineProperty(Ji, "__esModule", { value: !0 }),
    (Ji.parse = a),
    (Ji.serialize = d);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    o = (() => {
      const f = function () {};
      return (f.prototype = Object.create(null)), f;
    })();
  function a(f, m) {
    const g = new o(),
      b = f.length;
    if (b < 2) return g;
    const w = (m == null ? void 0 : m.decode) || p;
    let _ = 0;
    do {
      const y = f.indexOf("=", _);
      if (y === -1) break;
      const C = f.indexOf(";", _),
        x = C === -1 ? b : C;
      if (y > x) {
        _ = f.lastIndexOf(";", y - 1) + 1;
        continue;
      }
      const S = n(f, _, y),
        A = l(f, y, S),
        T = f.slice(S, A);
      if (g[T] === void 0) {
        let I = n(f, y + 1, x),
          E = l(f, x, I);
        const z = w(f.slice(I, E));
        g[T] = z;
      }
      _ = x + 1;
    } while (_ < b);
    return g;
  }
  function n(f, m, g) {
    do {
      const b = f.charCodeAt(m);
      if (b !== 32 && b !== 9) return m;
    } while (++m < g);
    return g;
  }
  function l(f, m, g) {
    for (; m > g; ) {
      const b = f.charCodeAt(--m);
      if (b !== 32 && b !== 9) return m + 1;
    }
    return g;
  }
  function d(f, m, g) {
    const b = (g == null ? void 0 : g.encode) || encodeURIComponent;
    if (!e.test(f)) throw new TypeError(`argument name is invalid: ${f}`);
    const w = b(m);
    if (!t.test(w)) throw new TypeError(`argument val is invalid: ${m}`);
    let _ = f + "=" + w;
    if (!g) return _;
    if (g.maxAge !== void 0) {
      if (!Number.isInteger(g.maxAge))
        throw new TypeError(`option maxAge is invalid: ${g.maxAge}`);
      _ += "; Max-Age=" + g.maxAge;
    }
    if (g.domain) {
      if (!r.test(g.domain))
        throw new TypeError(`option domain is invalid: ${g.domain}`);
      _ += "; Domain=" + g.domain;
    }
    if (g.path) {
      if (!i.test(g.path))
        throw new TypeError(`option path is invalid: ${g.path}`);
      _ += "; Path=" + g.path;
    }
    if (g.expires) {
      if (!u(g.expires) || !Number.isFinite(g.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${g.expires}`);
      _ += "; Expires=" + g.expires.toUTCString();
    }
    if (
      (g.httpOnly && (_ += "; HttpOnly"),
      g.secure && (_ += "; Secure"),
      g.partitioned && (_ += "; Partitioned"),
      g.priority)
    )
      switch (
        typeof g.priority == "string" ? g.priority.toLowerCase() : void 0
      ) {
        case "low":
          _ += "; Priority=Low";
          break;
        case "medium":
          _ += "; Priority=Medium";
          break;
        case "high":
          _ += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${g.priority}`);
      }
    if (g.sameSite)
      switch (
        typeof g.sameSite == "string" ? g.sameSite.toLowerCase() : g.sameSite
      ) {
        case !0:
        case "strict":
          _ += "; SameSite=Strict";
          break;
        case "lax":
          _ += "; SameSite=Lax";
          break;
        case "none":
          _ += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${g.sameSite}`);
      }
    return _;
  }
  function p(f) {
    if (f.indexOf("%") === -1) return f;
    try {
      return decodeURIComponent(f);
    } catch {
      return f;
    }
  }
  function u(f) {
    return s.call(f) === "[object Date]";
  }
  return Ji;
}
p0();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ul = "popstate";
function f0(e = {}) {
  function t(i, s) {
    let { pathname: o, search: a, hash: n } = i.location;
    return Da(
      "",
      { pathname: o, search: a, hash: n },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function r(i, s) {
    return typeof s == "string" ? s : vs(s);
  }
  return g0(t, r, null, e);
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function qt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function m0() {
  return Math.random().toString(36).substring(2, 10);
}
function ql(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Da(e, t, r = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Bi(t) : t),
    state: r,
    key: (t && t.key) || i || m0(),
  };
}
function vs({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Bi(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substring(i)), (e = e.substring(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function g0(e, t, r, i = {}) {
  let { window: s = document.defaultView, v5Compat: o = !1 } = i,
    a = s.history,
    n = "POP",
    l = null,
    d = p();
  d == null && ((d = 0), a.replaceState({ ...a.state, idx: d }, ""));
  function p() {
    return (a.state || { idx: null }).idx;
  }
  function u() {
    n = "POP";
    let w = p(),
      _ = w == null ? null : w - d;
    (d = w), l && l({ action: n, location: b.location, delta: _ });
  }
  function f(w, _) {
    n = "PUSH";
    let y = Da(b.location, w, _);
    d = p() + 1;
    let C = ql(y, d),
      x = b.createHref(y);
    try {
      a.pushState(C, "", x);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(x);
    }
    o && l && l({ action: n, location: b.location, delta: 1 });
  }
  function m(w, _) {
    n = "REPLACE";
    let y = Da(b.location, w, _);
    d = p();
    let C = ql(y, d),
      x = b.createHref(y);
    a.replaceState(C, "", x),
      o && l && l({ action: n, location: b.location, delta: 0 });
  }
  function g(w) {
    let _ = s.location.origin !== "null" ? s.location.origin : s.location.href,
      y = typeof w == "string" ? w : vs(w);
    return (
      (y = y.replace(/ $/, "%20")),
      me(
        _,
        `No window.location.(origin|href) available to create URL for href: ${y}`,
      ),
      new URL(y, _)
    );
  }
  let b = {
    get action() {
      return n;
    },
    get location() {
      return e(s, a);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Ul, u),
        (l = w),
        () => {
          s.removeEventListener(Ul, u), (l = null);
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: g,
    encodeLocation(w) {
      let _ = g(w);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: f,
    replace: m,
    go(w) {
      return a.go(w);
    },
  };
  return b;
}
function qd(e, t, r = "/") {
  return b0(e, t, r, !1);
}
function b0(e, t, r, i) {
  let s = typeof t == "string" ? Bi(t) : t,
    o = rr(s.pathname || "/", r);
  if (o == null) return null;
  let a = jd(e);
  v0(a);
  let n = null;
  for (let l = 0; n == null && l < a.length; ++l) {
    let d = R0(o);
    n = E0(a[l], d, i);
  }
  return n;
}
function jd(e, t = [], r = [], i = "") {
  let s = (o, a, n) => {
    let l = {
      relativePath: n === void 0 ? o.path || "" : n,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (me(
        l.relativePath.startsWith(i),
        `Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let d = er([i, l.relativePath]),
      p = r.concat(l);
    o.children &&
      o.children.length > 0 &&
      (me(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${d}".`,
      ),
      jd(o.children, t, p, d)),
      !(o.path == null && !o.index) &&
        t.push({ path: d, score: S0(d, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, a) => {
      var n;
      if (o.path === "" || !((n = o.path) != null && n.includes("?"))) s(o, a);
      else for (let l of Wd(o.path)) s(o, a, l);
    }),
    t
  );
}
function Wd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t,
    s = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (i.length === 0) return s ? [o, ""] : [o];
  let a = Wd(i.join("/")),
    n = [];
  return (
    n.push(...a.map((l) => (l === "" ? o : [o, l].join("/")))),
    s && n.push(...a),
    n.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function v0(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : $0(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var y0 = /^:[\w-]+$/,
  _0 = 3,
  w0 = 2,
  x0 = 1,
  k0 = 10,
  C0 = -2,
  jl = (e) => e === "*";
function S0(e, t) {
  let r = e.split("/"),
    i = r.length;
  return (
    r.some(jl) && (i += C0),
    t && (i += w0),
    r
      .filter((s) => !jl(s))
      .reduce((s, o) => s + (y0.test(o) ? _0 : o === "" ? x0 : k0), i)
  );
}
function $0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function E0(e, t, r = !1) {
  let { routesMeta: i } = e,
    s = {},
    o = "/",
    a = [];
  for (let n = 0; n < i.length; ++n) {
    let l = i[n],
      d = n === i.length - 1,
      p = o === "/" ? t : t.slice(o.length) || "/",
      u = mo(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: d },
        p,
      ),
      f = l.route;
    if (
      (!u &&
        d &&
        r &&
        !i[i.length - 1].route.index &&
        (u = mo(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          p,
        )),
      !u)
    )
      return null;
    Object.assign(s, u.params),
      a.push({
        params: s,
        pathname: er([o, u.pathname]),
        pathnameBase: I0(er([o, u.pathnameBase])),
        route: f,
      }),
      u.pathnameBase !== "/" && (o = er([o, u.pathnameBase]));
  }
  return a;
}
function mo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = A0(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let o = s[0],
    a = o.replace(/(.)\/+$/, "$1"),
    n = s.slice(1);
  return {
    params: i.reduce((d, { paramName: p, isOptional: u }, f) => {
      if (p === "*") {
        let g = n[f] || "";
        a = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const m = n[f];
      return (
        u && !m ? (d[p] = void 0) : (d[p] = (m || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function A0(e, t = !1, r = !0) {
  qt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let i = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, n, l) => (
            i.push({ paramName: n, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), i]
  );
}
function R0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      qt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function rr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function z0(e, t = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: s = "",
  } = typeof e == "string" ? Bi(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : T0(r, t)) : t,
    search: O0(i),
    hash: L0(s),
  };
}
function T0(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Yo(e, t, r, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function P0(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Kd(e) {
  let t = P0(e);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Qd(e, t, r, i = !1) {
  let s;
  typeof e == "string"
    ? (s = Bi(e))
    : ((s = { ...e }),
      me(
        !s.pathname || !s.pathname.includes("?"),
        Yo("?", "pathname", "search", s),
      ),
      me(
        !s.pathname || !s.pathname.includes("#"),
        Yo("#", "pathname", "hash", s),
      ),
      me(!s.search || !s.search.includes("#"), Yo("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    a = o ? "/" : s.pathname,
    n;
  if (a == null) n = r;
  else {
    let u = t.length - 1;
    if (!i && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (u -= 1);
      s.pathname = f.join("/");
    }
    n = u >= 0 ? t[u] : "/";
  }
  let l = z0(s, n),
    d = a && a !== "/" && a.endsWith("/"),
    p = (o || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (d || p) && (l.pathname += "/"), l;
}
var er = (e) => e.join("/").replace(/\/\/+/g, "/"),
  I0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  O0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  L0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function N0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Gd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Gd);
var F0 = ["GET", ...Gd];
new Set(F0);
var Vi = je(null);
Vi.displayName = "DataRouter";
var zo = je(null);
zo.displayName = "DataRouterState";
var Yd = je({ isTransitioning: !1 });
Yd.displayName = "ViewTransition";
var D0 = je(new Map());
D0.displayName = "Fetchers";
var M0 = je(null);
M0.displayName = "Await";
var Qt = je(null);
Qt.displayName = "Navigation";
var Ls = je(null);
Ls.displayName = "Location";
var Gt = je({ outlet: null, matches: [], isDataRoute: !1 });
Gt.displayName = "Route";
var Cn = je(null);
Cn.displayName = "RouteError";
function H0(e, { relative: t } = {}) {
  me(
    Ns(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: i } = Z(Qt),
    { hash: s, pathname: o, search: a } = Fs(e, { relative: t }),
    n = o;
  return (
    r !== "/" && (n = o === "/" ? r : er([r, o])),
    i.createHref({ pathname: n, search: a, hash: s })
  );
}
function Ns() {
  return Z(Ls) != null;
}
function si() {
  return (
    me(
      Ns(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    Z(Ls).location
  );
}
var Xd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Jd(e) {
  Z(Qt).static || Er(e);
}
function B0() {
  let { isDataRoute: e } = Z(Gt);
  return e ? ey() : V0();
}
function V0() {
  me(
    Ns(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = Z(Vi),
    { basename: t, navigator: r } = Z(Qt),
    { matches: i } = Z(Gt),
    { pathname: s } = si(),
    o = JSON.stringify(Kd(i)),
    a = qe(!1);
  return (
    Jd(() => {
      a.current = !0;
    }),
    sr(
      (l, d = {}) => {
        if ((qt(a.current, Xd), !a.current)) return;
        if (typeof l == "number") {
          r.go(l);
          return;
        }
        let p = Qd(l, JSON.parse(o), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : er([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, o, s, e],
    )
  );
}
je(null);
function Pr() {
  let { matches: e } = Z(Gt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Fs(e, { relative: t } = {}) {
  let { matches: r } = Z(Gt),
    { pathname: i } = si(),
    s = JSON.stringify(Kd(r));
  return lt(() => Qd(e, JSON.parse(s), i, t === "path"), [e, s, i, t]);
}
function U0(e, t) {
  return Zd(e, t);
}
function Zd(e, t, r, i) {
  var y;
  me(
    Ns(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: s, static: o } = Z(Qt),
    { matches: a } = Z(Gt),
    n = a[a.length - 1],
    l = n ? n.params : {},
    d = n ? n.pathname : "/",
    p = n ? n.pathnameBase : "/",
    u = n && n.route;
  {
    let C = (u && u.path) || "";
    eu(
      d,
      !u || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`,
    );
  }
  let f = si(),
    m;
  if (t) {
    let C = typeof t == "string" ? Bi(t) : t;
    me(
      p === "/" || ((y = C.pathname) == null ? void 0 : y.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${C.pathname}" was given in the \`location\` prop.`,
    ),
      (m = C);
  } else m = f;
  let g = m.pathname || "/",
    b = g;
  if (p !== "/") {
    let C = p.replace(/^\//, "").split("/");
    b = "/" + g.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let w =
    !o && r && r.matches && r.matches.length > 0
      ? r.matches
      : qd(e, { pathname: b });
  qt(
    u || w != null,
    `No routes matched location "${m.pathname}${m.search}${m.hash}" `,
  ),
    qt(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let _ = Q0(
    w &&
      w.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, l, C.params),
          pathname: er([
            p,
            s.encodeLocation
              ? s.encodeLocation(C.pathname).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === "/"
              ? p
              : er([
                  p,
                  s.encodeLocation
                    ? s.encodeLocation(C.pathnameBase).pathname
                    : C.pathnameBase,
                ]),
        }),
      ),
    a,
    r,
    i,
  );
  return t && _
    ? Q(
        Ls.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...m,
            },
            navigationType: "POP",
          },
        },
        _,
      )
    : _;
}
function q0() {
  let e = Z0(),
    t = N0(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: i },
    o = { padding: "2px 4px", backgroundColor: i },
    a = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (a = Q(
      Ie,
      null,
      Q("p", null, "💿 Hey developer 👋"),
      Q(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        Q("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        Q("code", { style: o }, "errorElement"),
        " prop on your route.",
      ),
    )),
    Q(
      Ie,
      null,
      Q("h2", null, "Unexpected Application Error!"),
      Q("h3", { style: { fontStyle: "italic" } }, t),
      r ? Q("pre", { style: s }, r) : null,
      a,
    )
  );
}
var j0 = Q(q0, null),
  W0 = class extends gt {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t,
      );
    }
    render() {
      return this.state.error !== void 0
        ? Q(
            Gt.Provider,
            { value: this.props.routeContext },
            Q(Cn.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function K0({ routeContext: e, match: t, children: r }) {
  let i = Z(Vi);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    Q(Gt.Provider, { value: e }, r)
  );
}
function Q0(e, t = [], r = null, i = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let s = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let l = s.findIndex(
      (d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0,
    );
    me(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
    ),
      (s = s.slice(0, Math.min(s.length, l + 1)));
  }
  let a = !1,
    n = -1;
  if (r)
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (n = l),
        d.route.id)
      ) {
        let { loaderData: p, errors: u } = r,
          f =
            d.route.loader &&
            !p.hasOwnProperty(d.route.id) &&
            (!u || u[d.route.id] === void 0);
        if (d.route.lazy || f) {
          (a = !0), n >= 0 ? (s = s.slice(0, n + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((l, d, p) => {
    let u,
      f = !1,
      m = null,
      g = null;
    r &&
      ((u = o && d.route.id ? o[d.route.id] : void 0),
      (m = d.route.errorElement || j0),
      a &&
        (n < 0 && p === 0
          ? (eu(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (f = !0),
            (g = null))
          : n === p &&
            ((f = !0), (g = d.route.hydrateFallbackElement || null))));
    let b = t.concat(s.slice(0, p + 1)),
      w = () => {
        let _;
        return (
          u
            ? (_ = m)
            : f
              ? (_ = g)
              : d.route.Component
                ? (_ = Q(d.route.Component, null))
                : d.route.element
                  ? (_ = d.route.element)
                  : (_ = l),
          Q(K0, {
            match: d,
            routeContext: { outlet: l, matches: b, isDataRoute: r != null },
            children: _,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? Q(W0, {
          location: r.location,
          revalidation: r.revalidation,
          component: m,
          error: u,
          children: w(),
          routeContext: { outlet: null, matches: b, isDataRoute: !0 },
        })
      : w();
  }, null);
}
function Sn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function G0(e) {
  let t = Z(Vi);
  return me(t, Sn(e)), t;
}
function Y0(e) {
  let t = Z(zo);
  return me(t, Sn(e)), t;
}
function X0(e) {
  let t = Z(Gt);
  return me(t, Sn(e)), t;
}
function $n(e) {
  let t = X0(e),
    r = t.matches[t.matches.length - 1];
  return (
    me(
      r.route.id,
      `${e} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function J0() {
  return $n("useRouteId");
}
function Z0() {
  var i;
  let e = Z(Cn),
    t = Y0("useRouteError"),
    r = $n("useRouteError");
  return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[r];
}
function ey() {
  let { router: e } = G0("useNavigate"),
    t = $n("useNavigate"),
    r = qe(!1);
  return (
    Jd(() => {
      r.current = !0;
    }),
    sr(
      async (s, o = {}) => {
        qt(r.current, Xd),
          r.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : await e.navigate(s, { fromRouteId: t, ...o }));
      },
      [e, t],
    )
  );
}
var Wl = {};
function eu(e, t, r) {
  !t && !Wl[e] && ((Wl[e] = !0), qt(!1, r));
}
on(ty);
function ty({ routes: e, future: t, state: r }) {
  return Zd(e, void 0, r, t);
}
function to(e) {
  me(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function ry({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: i = "POP",
  navigator: s,
  static: o = !1,
}) {
  me(
    !Ns(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let a = e.replace(/^\/*/, "/"),
    n = lt(
      () => ({ basename: a, navigator: s, static: o, future: {} }),
      [a, s, o],
    );
  typeof r == "string" && (r = Bi(r));
  let {
      pathname: l = "/",
      search: d = "",
      hash: p = "",
      state: u = null,
      key: f = "default",
    } = r,
    m = lt(() => {
      let g = rr(l, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: d, hash: p, state: u, key: f },
            navigationType: i,
          };
    }, [a, l, d, p, u, f, i]);
  return (
    qt(
      m != null,
      `<Router basename="${a}"> is not able to match the URL "${l}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    m == null
      ? null
      : Q(Qt.Provider, { value: n }, Q(Ls.Provider, { children: t, value: m }))
  );
}
function iy({ children: e, location: t }) {
  return U0(Ma(e), t);
}
function Ma(e, t = []) {
  let r = [];
  return (
    an.forEach(e, (i, s) => {
      if (!zi(i)) return;
      let o = [...t, s];
      if (i.type === Ie) {
        r.push.apply(r, Ma(i.props.children, o));
        return;
      }
      me(
        i.type === to,
        `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        me(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes.",
        );
      let a = {
        id: i.props.id || o.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (a.children = Ma(i.props.children, o)), r.push(a);
    }),
    r
  );
}
var ro = "get",
  io = "application/x-www-form-urlencoded";
function To(e) {
  return e != null && typeof e.tagName == "string";
}
function sy(e) {
  return To(e) && e.tagName.toLowerCase() === "button";
}
function oy(e) {
  return To(e) && e.tagName.toLowerCase() === "form";
}
function ay(e) {
  return To(e) && e.tagName.toLowerCase() === "input";
}
function ny(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ly(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ny(e);
}
var Qs = null;
function cy() {
  if (Qs === null)
    try {
      new FormData(document.createElement("form"), 0), (Qs = !1);
    } catch {
      Qs = !0;
    }
  return Qs;
}
var dy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Xo(e) {
  return e != null && !dy.has(e)
    ? (qt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`,
      ),
      null)
    : e;
}
function uy(e, t) {
  let r, i, s, o, a;
  if (oy(e)) {
    let n = e.getAttribute("action");
    (i = n ? rr(n, t) : null),
      (r = e.getAttribute("method") || ro),
      (s = Xo(e.getAttribute("enctype")) || io),
      (o = new FormData(e));
  } else if (sy(e) || (ay(e) && (e.type === "submit" || e.type === "image"))) {
    let n = e.form;
    if (n == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let l = e.getAttribute("formaction") || n.getAttribute("action");
    if (
      ((i = l ? rr(l, t) : null),
      (r = e.getAttribute("formmethod") || n.getAttribute("method") || ro),
      (s =
        Xo(e.getAttribute("formenctype")) ||
        Xo(n.getAttribute("enctype")) ||
        io),
      (o = new FormData(n, e)),
      !cy())
    ) {
      let { name: d, type: p, value: u } = e;
      if (p === "image") {
        let f = d ? `${d}.` : "";
        o.append(`${f}x`, "0"), o.append(`${f}y`, "0");
      } else d && o.append(d, u);
    }
  } else {
    if (To(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = ro), (i = null), (s = io), (a = e);
  }
  return (
    o && s === "text/plain" && ((a = o), (o = void 0)),
    { action: i, method: r.toLowerCase(), encType: s, formData: o, body: a }
  );
}
function En(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function hy(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function py(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function fy(e, t, r) {
  let i = await Promise.all(
    e.map(async (s) => {
      let o = t.routes[s.route.id];
      if (o) {
        let a = await hy(o, r);
        return a.links ? a.links() : [];
      }
      return [];
    }),
  );
  return vy(
    i
      .flat(1)
      .filter(py)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function Kl(e, t, r, i, s, o) {
  let a = (l, d) => (r[d] ? l.route.id !== r[d].route.id : !0),
    n = (l, d) => {
      var p;
      return (
        r[d].pathname !== l.pathname ||
        (((p = r[d].route.path) == null ? void 0 : p.endsWith("*")) &&
          r[d].params["*"] !== l.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((l, d) => a(l, d) || n(l, d))
    : o === "data"
      ? t.filter((l, d) => {
          var u;
          let p = i.routes[l.route.id];
          if (!p || !p.hasLoader) return !1;
          if (a(l, d) || n(l, d)) return !0;
          if (l.route.shouldRevalidate) {
            let f = l.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((u = r[0]) == null ? void 0 : u.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof f == "boolean") return f;
          }
          return !0;
        })
      : [];
}
function my(e, t, { includeHydrateFallback: r } = {}) {
  return gy(
    e
      .map((i) => {
        let s = t.routes[i.route.id];
        if (!s) return [];
        let o = [s.module];
        return (
          s.clientActionModule && (o = o.concat(s.clientActionModule)),
          s.clientLoaderModule && (o = o.concat(s.clientLoaderModule)),
          r &&
            s.hydrateFallbackModule &&
            (o = o.concat(s.hydrateFallbackModule)),
          s.imports && (o = o.concat(s.imports)),
          o
        );
      })
      .flat(1),
  );
}
function gy(e) {
  return [...new Set(e)];
}
function by(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let i of r) t[i] = e[i];
  return t;
}
function vy(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((i, s) => {
      let o = JSON.stringify(by(s));
      return r.has(o) || (r.add(o), i.push({ key: o, link: s })), i;
    }, [])
  );
}
function yy(e, t) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : t && rr(r.pathname, t) === "/"
        ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function tu() {
  let e = Z(Vi);
  return (
    En(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function _y() {
  let e = Z(zo);
  return (
    En(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var An = je(void 0);
An.displayName = "FrameworkContext";
function ru() {
  let e = Z(An);
  return (
    En(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function wy(e, t) {
  let r = Z(An),
    [i, s] = he(!1),
    [o, a] = he(!1),
    {
      onFocus: n,
      onBlur: l,
      onMouseEnter: d,
      onMouseLeave: p,
      onTouchStart: u,
    } = t,
    f = qe(null);
  dt(() => {
    if ((e === "render" && a(!0), e === "viewport")) {
      let b = (_) => {
          _.forEach((y) => {
            a(y.isIntersecting);
          });
        },
        w = new IntersectionObserver(b, { threshold: 0.5 });
      return (
        f.current && w.observe(f.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    dt(() => {
      if (i) {
        let b = setTimeout(() => {
          a(!0);
        }, 100);
        return () => {
          clearTimeout(b);
        };
      }
    }, [i]);
  let m = () => {
      s(!0);
    },
    g = () => {
      s(!1), a(!1);
    };
  return r
    ? e !== "intent"
      ? [o, f, {}]
      : [
          o,
          f,
          {
            onFocus: Zi(n, m),
            onBlur: Zi(l, g),
            onMouseEnter: Zi(d, m),
            onMouseLeave: Zi(p, g),
            onTouchStart: Zi(u, m),
          },
        ]
    : [!1, f, {}];
}
function Zi(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function xy({ page: e, ...t }) {
  let { router: r } = tu(),
    i = lt(() => qd(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i ? Q(Cy, { page: e, matches: i, ...t }) : null;
}
function ky(e) {
  let { manifest: t, routeModules: r } = ru(),
    [i, s] = he([]);
  return (
    dt(() => {
      let o = !1;
      return (
        fy(e, t, r).then((a) => {
          o || s(a);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    i
  );
}
function Cy({ page: e, matches: t, ...r }) {
  let i = si(),
    { manifest: s, routeModules: o } = ru(),
    { basename: a } = tu(),
    { loaderData: n, matches: l } = _y(),
    d = lt(() => Kl(e, t, l, s, i, "data"), [e, t, l, s, i]),
    p = lt(() => Kl(e, t, l, s, i, "assets"), [e, t, l, s, i]),
    u = lt(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let g = new Set(),
        b = !1;
      if (
        (t.forEach((_) => {
          var C;
          let y = s.routes[_.route.id];
          !y ||
            !y.hasLoader ||
            ((!d.some((x) => x.route.id === _.route.id) &&
              _.route.id in n &&
              (C = o[_.route.id]) != null &&
              C.shouldRevalidate) ||
            y.hasClientLoader
              ? (b = !0)
              : g.add(_.route.id));
        }),
        g.size === 0)
      )
        return [];
      let w = yy(e, a);
      return (
        b &&
          g.size > 0 &&
          w.searchParams.set(
            "_routes",
            t
              .filter((_) => g.has(_.route.id))
              .map((_) => _.route.id)
              .join(","),
          ),
        [w.pathname + w.search]
      );
    }, [a, n, i, s, d, t, e, o]),
    f = lt(() => my(p, s), [p, s]),
    m = ky(p);
  return Q(
    Ie,
    null,
    u.map((g) =>
      Q("link", { key: g, rel: "prefetch", as: "fetch", href: g, ...r }),
    ),
    f.map((g) => Q("link", { key: g, rel: "modulepreload", href: g, ...r })),
    m.map(({ key: g, link: b }) => Q("link", { key: g, ...b })),
  );
}
function Sy(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var iu =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  iu && (window.__reactRouterVersion = "7.5.0");
} catch {}
function $y({ basename: e, children: t, window: r }) {
  let i = qe();
  i.current == null && (i.current = f0({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = he({ action: s.action, location: s.location }),
    n = sr(
      (l) => {
        wo(() => a(l));
      },
      [a],
    );
  return (
    Er(() => s.listen(n), [s, n]),
    Q(ry, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
var su = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ou = $s(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: i = "none",
      relative: s,
      reloadDocument: o,
      replace: a,
      state: n,
      target: l,
      to: d,
      preventScrollReset: p,
      viewTransition: u,
      ...f
    },
    m,
  ) {
    let { basename: g } = Z(Qt),
      b = typeof d == "string" && su.test(d),
      w,
      _ = !1;
    if (typeof d == "string" && b && ((w = d), iu))
      try {
        let E = new URL(window.location.href),
          z = d.startsWith("//") ? new URL(E.protocol + d) : new URL(d),
          B = rr(z.pathname, g);
        z.origin === E.origin && B != null
          ? (d = B + z.search + z.hash)
          : (_ = !0);
      } catch {
        qt(
          !1,
          `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let y = H0(d, { relative: s }),
      [C, x, S] = wy(i, f),
      A = zy(d, {
        replace: a,
        state: n,
        target: l,
        preventScrollReset: p,
        relative: s,
        viewTransition: u,
      });
    function T(E) {
      t && t(E), E.defaultPrevented || A(E);
    }
    let I = Q("a", {
      ...f,
      ...S,
      href: w || y,
      onClick: _ || o ? t : T,
      ref: Sy(m, x),
      target: l,
      "data-discover": !b && r === "render" ? "true" : void 0,
    });
    return C && !b ? Q(Ie, null, I, Q(xy, { page: y })) : I;
  });
ou.displayName = "Link";
var Ey = $s(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: s = !1,
    style: o,
    to: a,
    viewTransition: n,
    children: l,
    ...d
  },
  p,
) {
  let u = Fs(a, { relative: d.relative }),
    f = si(),
    m = Z(zo),
    { navigator: g, basename: b } = Z(Qt),
    w = m != null && Ly(u) && n === !0,
    _ = g.encodeLocation ? g.encodeLocation(u).pathname : u.pathname,
    y = f.pathname,
    C =
      m && m.navigation && m.navigation.location
        ? m.navigation.location.pathname
        : null;
  r ||
    ((y = y.toLowerCase()),
    (C = C ? C.toLowerCase() : null),
    (_ = _.toLowerCase())),
    C && b && (C = rr(C, b) || C);
  const x = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let S = y === _ || (!s && y.startsWith(_) && y.charAt(x) === "/"),
    A =
      C != null &&
      (C === _ || (!s && C.startsWith(_) && C.charAt(_.length) === "/")),
    T = { isActive: S, isPending: A, isTransitioning: w },
    I = S ? t : void 0,
    E;
  typeof i == "function"
    ? (E = i(T))
    : (E = [
        i,
        S ? "active" : null,
        A ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let z = typeof o == "function" ? o(T) : o;
  return Q(
    ou,
    {
      ...d,
      "aria-current": I,
      className: E,
      ref: p,
      style: z,
      to: a,
      viewTransition: n,
    },
    typeof l == "function" ? l(T) : l,
  );
});
Ey.displayName = "NavLink";
var Ay = $s(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: s,
      state: o,
      method: a = ro,
      action: n,
      onSubmit: l,
      relative: d,
      preventScrollReset: p,
      viewTransition: u,
      ...f
    },
    m,
  ) => {
    let g = Iy(),
      b = Oy(n, { relative: d }),
      w = a.toLowerCase() === "get" ? "get" : "post",
      _ = typeof n == "string" && su.test(n);
    return Q("form", {
      ref: m,
      method: w,
      action: b,
      onSubmit: i
        ? l
        : (C) => {
            if ((l && l(C), C.defaultPrevented)) return;
            C.preventDefault();
            let x = C.nativeEvent.submitter,
              S = (x == null ? void 0 : x.getAttribute("formmethod")) || a;
            g(x || C.currentTarget, {
              fetcherKey: t,
              method: S,
              navigate: r,
              replace: s,
              state: o,
              relative: d,
              preventScrollReset: p,
              viewTransition: u,
            });
          },
      ...f,
      "data-discover": !_ && e === "render" ? "true" : void 0,
    });
  },
);
Ay.displayName = "Form";
function Ry(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function au(e) {
  let t = Z(Vi);
  return me(t, Ry(e)), t;
}
function zy(
  e,
  {
    target: t,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: o,
    viewTransition: a,
  } = {},
) {
  let n = B0(),
    l = si(),
    d = Fs(e, { relative: o });
  return sr(
    (p) => {
      if (ly(p, t)) {
        p.preventDefault();
        let u = r !== void 0 ? r : vs(l) === vs(d);
        n(e, {
          replace: u,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [l, n, d, r, i, t, e, s, o, a],
  );
}
var Ty = 0,
  Py = () => `__${String(++Ty)}__`;
function Iy() {
  let { router: e } = au("useSubmit"),
    { basename: t } = Z(Qt),
    r = J0();
  return sr(
    async (i, s = {}) => {
      let { action: o, method: a, encType: n, formData: l, body: d } = uy(i, t);
      if (s.navigate === !1) {
        let p = s.fetcherKey || Py();
        await e.fetch(p, r, s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: d,
          formMethod: s.method || a,
          formEncType: s.encType || n,
          flushSync: s.flushSync,
        });
      } else
        await e.navigate(s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: d,
          formMethod: s.method || a,
          formEncType: s.encType || n,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [e, t, r],
  );
}
function Oy(e, { relative: t } = {}) {
  let { basename: r } = Z(Qt),
    i = Z(Gt);
  me(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1),
    o = { ...Fs(e || ".", { relative: t }) },
    a = si();
  if (e == null) {
    o.search = a.search;
    let n = new URLSearchParams(o.search),
      l = n.getAll("index");
    if (l.some((p) => p === "")) {
      n.delete("index"),
        l.filter((u) => u).forEach((u) => n.append("index", u));
      let p = n.toString();
      o.search = p ? `?${p}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : er([r, o.pathname])),
    vs(o)
  );
}
function Ly(e, t = {}) {
  let r = Z(Yd);
  me(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = au("useViewTransitionState"),
    s = Fs(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = rr(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    a = rr(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return mo(s.pathname, a) != null || mo(s.pathname, o) != null;
}
new TextEncoder();
const Sr = "AUTH_ERROR",
  Ny = new Yv({ defaultOptions: { queries: { gcTime: 1e3 * 60 * 60 * 24 } } });
function Te(e) {
  const t = {
    parse_error: "[ERROR] Parse failed!",
    bad_fetch_error: "Fetch failed! Server seems to be down...",
    resource_error: "[ERROR] Invalid resource: ",
    username_error: "Invalid username or password!",
    password_error: "Invalid username or password!",
    internal_server_error: "[ERROR] Server error: ",
  };
  let r = "Unknown error";
  switch (e.type) {
    case "bad_fetch_error": {
      r = t[e.type] + e.message;
      break;
    }
    case "auth_token_error": {
      r = Sr;
      break;
    }
    case "parse_error": {
      r = t[e.type];
      break;
    }
    case "resource_error": {
      r = t[e.type] + e.message;
      break;
    }
    case "username_error": {
      r = t[e.type];
      break;
    }
    case "password_error": {
      r = t[e.type];
      break;
    }
    case "internal_server_error": {
      r = t[e.type] + e.message;
      break;
    }
  }
  return r;
}
async function xe(e) {
  try {
    return await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
  } catch (t) {
    return new Response(
      JSON.stringify({ type: "bad_fetch_error", message: t.message }),
      { status: 400 },
    );
  }
}
function Fy(e) {
  const t = "[ERROR] Invalid recipe assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("name" in e && typeof e.name == "string"))
    throw (console.error(t), new Error(t));
  if (!("reference" in e && typeof e.reference == "string"))
    throw (console.error(t), new Error(t));
  if (
    !(
      "authors" in e &&
      Array.isArray(e.authors) &&
      e.authors.every((r) => typeof r == "string")
    )
  )
    throw (console.error(t), new Error(t));
  if (
    !(
      "allergens" in e &&
      Array.isArray(e.allergens) &&
      e.allergens.every((r) => typeof r == "string")
    )
  )
    throw (console.error(t), new Error(t));
  if (
    !(
      "ingredients" in e &&
      Array.isArray(e.ingredients) &&
      e.ingredients.every((r) => typeof r == "string")
    )
  )
    throw (console.error(t), new Error(t));
}
function nu(e) {
  const t = "[ERROR] Invalid filter assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
  if (!("table_size" in e && typeof e.table_size == "number"))
    throw (console.error(t), new Error(t));
  if (!("recipes" in e && Array.isArray(e.recipes)))
    throw (console.error(t), new Error(t));
  e.recipes.forEach((r) => Fy(r));
}
function Pe(e) {
  const t = "[ERROR] Invalid error assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
}
function Dy(e) {
  const t = "[ERROR] Invalid auth assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
  if (!("auth" in e && typeof e.auth == "string"))
    throw (console.error(t), new Error(t));
}
let ge = { auth: "", user: "" };
function My() {
  ge = {
    auth: sessionStorage.getItem("session.auth") || "",
    user: sessionStorage.getItem("session.user") || "",
  };
}
function lu() {
  (ge = { auth: "", user: "" }),
    sessionStorage.removeItem("session.auth"),
    sessionStorage.removeItem("session.user");
}
async function Hy(e, t) {
  const r = await xe({ type: "login", username: e, password: t }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
  Dy(i),
    (ge = { auth: i.auth, user: e }),
    sessionStorage.setItem("session.auth", i.auth),
    sessionStorage.setItem("session.user", e);
}
async function By() {
  const e = await xe({ type: "logout", auth: ge.auth }),
    t = await e.json();
  if (e.status !== 200) throw (Pe(t), new Error(Te(t)));
  lu();
}
async function Vy() {
  return ge
    ? (await xe({ type: "is_logged_in", auth: ge.auth })).status === 200
    : !1;
}
function cu() {
  return Kt({ queryKey: ["loggedIn"], queryFn: () => Vy() });
}
async function Uy(e, t) {
  const r = await xe({
      type: "change_username",
      auth: ge.auth,
      password: e,
      new_username: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
  (ge.user = t), sessionStorage.setItem("session.user", t);
}
async function qy(e, t) {
  const r = await xe({
      type: "change_password",
      auth: ge.auth,
      password: e,
      new_password: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
}
async function jy(e, t, r, i, s, o) {
  const a = await xe({
      type: "add_recipe",
      auth: ge.auth,
      collection_id: e,
      recipe_name: t,
      reference: r,
      authors: i,
      ingredients: s,
      allergens: o,
    }),
    n = await a.json();
  if (a.status !== 200) throw (Pe(n), new Error(Te(n)));
}
async function du(e) {
  const t = await xe({ type: "remove_recipe", auth: ge.auth, recipe_name: e }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
}
async function Wy(e, t) {
  const r = await xe({
      type: "create_allergen",
      allergen_name: e,
      collection_id: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
}
async function Ky(e, t) {
  const r = await xe({
      type: "create_ingredient",
      ingredient_name: e,
      collection_id: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
}
const Ql = (e) => {
    let t;
    const r = new Set(),
      i = (d, p) => {
        const u = typeof d == "function" ? d(t) : d;
        if (!Object.is(u, t)) {
          const f = t;
          (t =
            (p ?? (typeof u != "object" || u === null))
              ? u
              : Object.assign({}, t, u)),
            r.forEach((m) => m(t, f));
        }
      },
      s = () => t,
      n = {
        setState: i,
        getState: s,
        getInitialState: () => l,
        subscribe: (d) => (r.add(d), () => r.delete(d)),
      },
      l = (t = e(i, s, n));
    return n;
  },
  Qy = (e) => (e ? Ql(e) : Ql),
  Gy = (e) => e;
function Yy(e, t = Gy) {
  const r = ha.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState()),
  );
  return ha.useDebugValue(r), r;
}
const Xy = (e) => {
    const t = Qy(e),
      r = (i) => Yy(t, i);
    return Object.assign(r, t), r;
  },
  Jy = (e) => Xy;
var Jo = {},
  Gl;
function Zy() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(s, o) {
          if (Object.is(s, o)) return !0;
          if (
            typeof s != "object" ||
            s === null ||
            typeof o != "object" ||
            o === null
          )
            return !1;
          if (s instanceof Map && o instanceof Map) {
            if (s.size !== o.size) return !1;
            for (const [n, l] of s) if (!Object.is(l, o.get(n))) return !1;
            return !0;
          }
          if (s instanceof Set && o instanceof Set) {
            if (s.size !== o.size) return !1;
            for (const n of s) if (!o.has(n)) return !1;
            return !0;
          }
          const a = Object.keys(s);
          if (a.length !== Object.keys(o).length) return !1;
          for (const n of a)
            if (
              !Object.prototype.hasOwnProperty.call(o, n) ||
              !Object.is(s[n], o[n])
            )
              return !1;
          return !0;
        }
        const i = (s, o) => (a) => {
          const n = new Set();
          return (l, d, p) => {
            const u = (o == null ? void 0 : o.equalityFn) ?? t;
            if (o != null && o.keys) {
              const y = o.keys;
              for (const C of y) n.add(C);
            }
            const f =
                (o == null ? void 0 : o.disableProxy) !== !0 ||
                !!(o != null && o.keys),
              m =
                (o == null ? void 0 : o.disableProxy) !== !0 &&
                !(o != null && o.keys),
              g = (y) => {
                const C = new Proxy(
                    { ...y },
                    { get: (S, A) => (n.add(A), y[A]) },
                  ),
                  x = s(m ? C : { ...y });
                for (const S of Object.keys(x)) u(x[S], y[S]) && (x[S] = y[S]);
                return { ...y, ...x };
              },
              b = (y, C, ...x) => {
                l(
                  (S) => {
                    const A = typeof y == "object" ? y : y(S);
                    return f &&
                      n.size !== 0 &&
                      !Object.keys(A).some((T) => n.has(T))
                      ? { ...S, ...A }
                      : g({ ...S, ...A });
                  },
                  C,
                  ...x,
                );
              },
              w = p;
            w.setState = b;
            const _ = a(b, d, w);
            return Object.assign({}, _, s(_));
          };
        };
        e.createComputed = i;
      })(Jo)),
    Jo
  );
}
var e_ = Zy(),
  jt = ((e) => (
    (e[(e.SEARCH_SETTINGS = 0)] = "SEARCH_SETTINGS"),
    (e[(e.MAIN = 1)] = "MAIN"),
    (e[(e.COLLECTIONS_LIST = 2)] = "COLLECTIONS_LIST"),
    (e[(e.CHANGE_USERNAME = 3)] = "CHANGE_USERNAME"),
    (e[(e.CHANGE_PASSWORD = 4)] = "CHANGE_PASSWORD"),
    (e[(e.LOGIN_PROMPT = 5)] = "LOGIN_PROMPT"),
    (e[(e.NEW_RECIPE_FORM = 6)] = "NEW_RECIPE_FORM"),
    (e[(e.UPDATE_RECIPE_FORM = 7)] = "UPDATE_RECIPE_FORM"),
    (e[(e.RECIPE_SUMMARY = 8)] = "RECIPE_SUMMARY"),
    e
  ))(jt || {}),
  le = ((e) => (
    (e[(e.NAME = 1)] = "NAME"),
    (e[(e.AUTHOR = 2)] = "AUTHOR"),
    (e[(e.ALLERGENS = 4)] = "ALLERGENS"),
    (e[(e.REFERENCE = 8)] = "REFERENCE"),
    (e[(e.INGREDIENTS = 16)] = "INGREDIENTS"),
    e
  ))(le || {});
const t_ = {
    clientUsername: "",
    view: 1,
    page: 0,
    numRowsPerPage: 10,
    visibleColumns: 11,
    recipeSearchFilter: "",
    includeAllergensFilter: [],
    excludeAllergensFilter: [],
    includeIngredientsFilter: [],
    excludeIngredientsFilter: [],
    includeAuthorsFilter: [],
    selectedRecipeName: "",
    selectedRecipeReference: "",
    selectedRecipeAuthors: [],
    selectedRecipeIngredients: [],
    selectedRecipeAllergens: [],
    sessionAlert: !1,
  },
  r_ = e_.createComputed((e) => ({
    filterProps: {
      collection_id: -1,
      recipe_name: e.recipeSearchFilter,
      include_allergens: e.includeAllergensFilter,
      exclude_allergens: e.excludeAllergensFilter,
      include_ingredients: e.includeIngredientsFilter,
      exclude_ingredients: e.excludeIngredientsFilter,
      authors: e.includeAuthorsFilter,
      view_min: -1,
      view_max: -1,
      random: !1,
    },
    selectedRecipe: {
      name: e.selectedRecipeName,
      reference: e.selectedRecipeReference,
      authors: e.selectedRecipeAuthors,
      allergens: e.selectedRecipeAllergens,
      ingredients: e.selectedRecipeIngredients,
    },
  })),
  Xe = Jy()(
    r_((e, t) => ({
      ...t_,
      setMainView: () => e({ view: 1 }),
      setSettingsView: () => e({ view: 0 }),
      setLoginView: () => e({ view: 5 }),
      setChangeUserView: () => e({ view: 3 }),
      setChangePassView: () => e({ view: 4 }),
      setCollectionsView: () => e({ view: 2 }),
      setNewRecipeView: () => e({ view: 6 }),
      setUpdateRecipeView: () => e({ view: 7 }),
      setRecipeSummaryView: () => e({ view: 8 }),
      gotoFirstPage: () => e({ page: 0 }),
      gotoPrevPage: () => e((r) => ({ page: Math.max(0, r.page - 1) })),
      gotoNextPage: (r) => e((i) => ({ page: Math.min(r - 1, i.page + 1) })),
      gotoLastPage: (r) => e(() => ({ page: r - 1 })),
      setRowsPerPage: (r) => e({ numRowsPerPage: r }),
      getColumnVisible: (r) => (t().visibleColumns & r) > 0,
      toggleColumn: (r) => e((i) => ({ visibleColumns: i.visibleColumns ^ r })),
      setClientUsername: (r) => e({ clientUsername: r }),
      setSelectedRecipe: (r) =>
        e({
          selectedRecipeName: r.name,
          selectedRecipeReference: r.reference,
          selectedRecipeAllergens: r.allergens,
          selectedRecipeIngredients: r.ingredients,
          selectedRecipeAuthors: r.authors,
        }),
      setRecipeSearchFilter: (r) => e({ recipeSearchFilter: r }),
      setIncludeAllergensFilter: (r) => e({ includeAllergensFilter: r }),
      setExcludeAllergensFilter: (r) => e({ excludeAllergensFilter: r }),
      setIncludeIngredientsFilter: (r) => e({ includeIngredientsFilter: r }),
      setExcludeIngredientsFilter: (r) => e({ excludeIngredientsFilter: r }),
      setIncludeAuthorsFilter: (r) => e({ includeAuthorsFilter: r }),
      setSessionAlert: (r = !0) => e({ sessionAlert: r }),
    })),
  ),
  Gs = {
    root: { display: "flex", flexDirection: "column", marginBottom: "1em" },
    menu: { height: "8em" },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.25em",
      marginBottom: "1em",
    },
    tagContent: {
      overflow: "hidden",
      whitespace: "nowrap",
      textOverflow: "ellipsis",
    },
  };
var Ha = ((e) => ((e.Allergen = "Allergen"), (e.Ingredient = "Ingredient"), e))(
  Ha || {},
);
function $r({
  variant: e,
  selected: t,
  available: r = [],
  setSelected: i = void 0,
  viewMode: s = !1,
  tagType: o = void 0,
}) {
  const { setSessionAlert: a } = Xe(),
    [n, l] = he(""),
    d = Ot(),
    p = Pr(),
    u = parseInt(p.id || "-1");
  function f(b) {
    i !== void 0 && i(t.slice(0, b).concat(t.slice(b + 1)));
  }
  function m(b) {
    i !== void 0 && i(t.concat([b]));
  }
  async function g() {
    if (n !== "")
      try {
        o === "Allergen"
          ? (await Wy(n, u),
            await d.invalidateQueries({ queryKey: ["collectionAllergens"] }),
            t.includes(n) || m(n))
          : o === "Ingredient" &&
            (await Ky(n, u),
            await d.invalidateQueries({ queryKey: ["collectionIngredients"] }),
            t.includes(n) || m(n));
      } catch (b) {
        b instanceof Error &&
          (b.message === Sr ? a() : console.error(b.message));
      }
  }
  return v("div", {
    style: Gs.root,
    children: [
      v("div", {
        style: Gs.tagContainer,
        children: [
          t.map((b, w) =>
            v(
              sp,
              {
                className: "pickedTag",
                variant: e,
                removable: !s,
                size: "small",
                onSlRemove: () => f(w),
                children: v("p", { style: Gs.tagContent, children: b }),
              },
              w,
            ),
          ),
          !s &&
            r.length > t.length &&
            v(Rd, {
              children: [
                v(Ue, { slot: "trigger", name: "plus" }),
                v(Cd, {
                  style: Gs.menu,
                  onSlSelect: (b) => m(b.detail.item.value),
                  children: r
                    .filter((b) => !t.includes(b))
                    .map((b) => v(es, { value: b, children: b })),
                }),
              ],
            }),
        ],
      }),
      !s &&
        o !== void 0 &&
        v(Qe, {
          size: "small",
          placeholder: "New " + o,
          value: n,
          onSlChange: (b) => l(b.target.value),
          children: v(Ue, {
            slot: "suffix",
            name: "plus",
            label: "Create Tag",
            onClick: () => {
              g();
            },
          }),
        }),
    ],
  });
}
async function uu({
  collection_id: e,
  recipe_name: t,
  include_allergens: r,
  exclude_allergens: i,
  include_ingredients: s,
  exclude_ingredients: o,
  authors: a,
  view_min: n,
  view_max: l,
  random: d,
}) {
  const p = await xe({
      type: "filter_recipe_collection",
      collection_id: e,
      recipe_name: t,
      include_allergens: r,
      exclude_allergens: i,
      include_ingredients: s,
      exclude_ingredients: o,
      authors: a,
      view_min: n,
      view_max: l,
      random: d,
    }),
    u = await p.json();
  if (p.status !== 200) throw (Pe(u), new Error(Te(u)));
  return (
    nu(u),
    u.recipes.map((f) => ({
      ...f,
      allergens: f.allergens.filter((m) => m !== null),
      ingredients: f.ingredients.filter((m) => m !== null),
    }))
  );
}
function i_(e) {
  return Kt({ queryKey: ["filterCollection"], queryFn: () => uu(e) });
}
async function s_({
  collection_id: e,
  recipe_name: t,
  include_allergens: r,
  exclude_allergens: i,
  include_ingredients: s,
  exclude_ingredients: o,
  authors: a,
  view_min: n,
  view_max: l,
  random: d,
}) {
  const p = await xe({
      type: "filter_recipe_collection",
      collection_id: e,
      recipe_name: t,
      include_allergens: r,
      exclude_allergens: i,
      include_ingredients: s,
      exclude_ingredients: o,
      authors: a,
      view_min: n,
      view_max: l,
      random: d,
    }),
    u = await p.json();
  if (p.status !== 200) throw (Pe(u), new Error(Te(u)));
  return nu(u), u.table_size;
}
function o_(e) {
  return Kt({ queryKey: ["filterCollectionCount"], queryFn: () => s_(e) });
}
async function a_(e, t) {
  const r = await xe({
      type: "rename_recipe_collection",
      auth: ge.auth,
      id: e,
      new_name: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (Pe(i), new Error(Te(i)));
}
async function n_(e) {
  const t = await xe({ type: "add_recipe_collection", auth: ge.auth, name: e }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "id" in r &&
      typeof r.id == "number"
    )
  )
    throw new Error();
  return r.id;
}
async function l_(e) {
  const t = await xe({
      type: "remove_recipe_collection",
      auth: ge.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
}
async function c_() {
  const e = await xe({ type: "get_owned_recipe_collections", auth: ge.auth }),
    t = await e.json();
  if (e.status !== 200) throw (Pe(t), new Error(Te(t)));
  if (
    !(
      typeof t == "object" &&
      t !== null &&
      "ids" in t &&
      Array.isArray(t.ids) &&
      t.ids.every((r) => typeof r == "number")
    )
  )
    throw new Error();
  return t.ids;
}
function hu() {
  return Kt({
    queryKey: ["ownedCollections"],
    queryFn: ge.auth !== "" ? () => c_() : Hi,
  });
}
async function d_(e) {
  const t = await xe({
      type: "get_allergens_in_collection",
      auth: ge.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "allergens" in r &&
      Array.isArray(r.allergens) &&
      r.allergens.every((i) => typeof i == "string")
    )
  )
    throw new Error();
  return r.allergens;
}
function pu(e) {
  return Kt({ queryKey: ["collectionAllergens", e], queryFn: () => d_(e) });
}
async function u_(e) {
  const t = await xe({
      type: "get_ingredients_in_collection",
      auth: ge.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "ingredients" in r &&
      Array.isArray(r.ingredients) &&
      r.ingredients.every((i) => typeof i == "string")
    )
  )
    throw new Error();
  return r.ingredients;
}
function fu(e) {
  return Kt({ queryKey: ["collectionIngredients", e], queryFn: () => u_(e) });
}
async function h_(e) {
  const t = await xe({
      type: "get_authors_in_collection",
      auth: ge.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "authors" in r &&
      Array.isArray(r.authors) &&
      r.authors.every((i) => typeof i == "string")
    )
  )
    throw new Error();
  return r.authors;
}
function p_(e) {
  return Kt({ queryKey: ["collectionAuthors", e], queryFn: () => h_(e) });
}
async function f_(e) {
  const t = await xe({
      type: "count_recipes_in_collection",
      auth: ge.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "count" in r &&
      typeof r.count == "number"
    )
  )
    throw new Error();
  return r.count;
}
function m_(e) {
  return Kt({
    queryKey: ["recipeCount", e],
    queryFn: e !== -1 ? () => f_(e) : Hi,
  });
}
async function g_(e) {
  const t = await xe({ type: "get_collection_name", auth: ge.auth, id: e }),
    r = await t.json();
  if (t.status !== 200) throw (Pe(r), new Error(Te(r)));
  if (
    !(
      typeof r == "object" &&
      r !== null &&
      "collection_name" in r &&
      typeof r.collection_name == "string"
    )
  )
    throw new Error();
  return r.collection_name;
}
function mu(e) {
  return Kt({
    queryKey: ["collectionName", e],
    queryFn: e !== -1 ? () => g_(e) : Hi,
  });
}
async function b_(e) {
  return (
    (await xe({ type: "get_collection_exists", auth: ge.auth, id: e }))
      .status === 200
  );
}
function v_(e) {
  return Kt({
    queryKey: ["collectionExists", e],
    queryFn: () => b_(e),
    staleTime: 1 / 0,
  });
}
const Mr = {
  settingContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1em",
  },
  filterContainer: { display: "flex", flex: 1, flexDirection: "column" },
};
function Zo({
  columnName: e,
  included: t,
  excluded: r,
  setIncluded: i,
  setExcluded: s,
  columnOptions: o = [],
}) {
  return v("div", {
    style: Mr.settingContainer,
    children: [
      v("div", {
        style: Mr.filterContainer,
        children: [
          "Include ",
          e,
          v($r, {
            variant: "success",
            available: o.filter((a) => r !== void 0 && !r.includes(a)),
            selected: t,
            setSelected: i,
          }),
        ],
      }),
      r !== void 0 &&
        v("div", {
          style: Mr.filterContainer,
          children: [
            "Exclude ",
            e,
            v($r, {
              variant: "danger",
              available: o.filter((a) => !t.includes(a)),
              selected: r,
              setSelected: s,
            }),
          ],
        }),
    ],
  });
}
function y_() {
  const {
      view: e,
      numRowsPerPage: t,
      includeAllergensFilter: r,
      excludeAllergensFilter: i,
      includeAuthorsFilter: s,
      includeIngredientsFilter: o,
      excludeIngredientsFilter: a,
      getColumnVisible: n,
      toggleColumn: l,
      setMainView: d,
      setRowsPerPage: p,
      gotoFirstPage: u,
      setIncludeAllergensFilter: f,
      setExcludeAllergensFilter: m,
      setIncludeAuthorsFilter: g,
      setIncludeIngredientsFilter: b,
      setExcludeIngredientsFilter: w,
    } = Xe(),
    _ = Ot(),
    y = Pr(),
    C = parseInt(y.id || "-1"),
    { data: x } = p_(C),
    { data: S } = pu(C),
    { data: A } = fu(C),
    T = 1,
    I = 20;
  async function E(W) {
    isNaN(W) ||
      (p(Math.min(I, Math.max(T, W))),
      u(),
      await _.invalidateQueries({ queryKey: ["filterCollection"] }),
      await _.invalidateQueries({ queryKey: ["filterCollection"] }));
  }
  function z(W) {
    if (W.eventPhase !== Event.AT_TARGET) {
      W.preventDefault();
      return;
    }
    d();
  }
  async function B() {
    await _.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  return v(Ad, {
    class: "drawer-placement-top",
    open: e === jt.SEARCH_SETTINGS,
    onSlHide: (W) => z(W),
    placement: "top",
    label: "Search Settings",
    children: [
      v("div", {
        style: Mr.settingContainer,
        children: v("div", {
          style: Mr.filterContainer,
          children: [
            "Recipes Per Page",
            v(Qe, {
              type: "number",
              value: t.toString(),
              min: T,
              max: I,
              onSlBlur: (W) => {
                E(parseInt(W.target.value));
              },
            }),
          ],
        }),
      }),
      v("div", {
        style: Mr.settingContainer,
        children: v("div", {
          style: Mr.filterContainer,
          children: [
            "Visible Columns",
            v(Xi, {
              size: "small",
              checked: n(le.NAME),
              onSlChange: () => l(le.NAME),
              children: "Recipe Name",
            }),
            v(Xi, {
              size: "small",
              checked: n(le.AUTHOR),
              onSlChange: () => l(le.AUTHOR),
              children: "Author",
            }),
            v(Xi, {
              size: "small",
              checked: n(le.ALLERGENS),
              onSlChange: () => l(le.ALLERGENS),
              children: "Allergens",
            }),
            v(Xi, {
              size: "small",
              checked: n(le.REFERENCE),
              onSlChange: () => l(le.REFERENCE),
              children: "Reference",
            }),
            v(Xi, {
              size: "small",
              checked: n(le.INGREDIENTS),
              onSlChange: () => l(le.INGREDIENTS),
              children: "Ingredients",
            }),
          ],
        }),
      }),
      v(Zo, {
        columnName: "Author",
        included: s,
        setIncluded: g,
        columnOptions: x,
      }),
      v(Zo, {
        columnName: "Allergens",
        included: r,
        excluded: i,
        setIncluded: f,
        setExcluded: m,
        columnOptions: S,
      }),
      v(Zo, {
        columnName: "Ingredients",
        included: o,
        excluded: a,
        setIncluded: b,
        setExcluded: w,
        columnOptions: A,
      }),
      v(Is, {
        onClick: () => {
          B();
        },
        children: "Apply",
      }),
    ],
  });
}
function Ui({
  message: e,
  variant: t = "primary",
  duration: r = 3e3,
  childRef: i,
}) {
  return v(Pv, {
    ref: i,
    variant: t,
    closable: !0,
    duration: r,
    children: [
      v(gn, {
        name: {
          primary: "info-circle",
          success: "check2-circle",
          neutral: "gear",
          warning: "exclamation-triangle",
          danger: "exclamation-octagon",
        }[t],
        slot: "icon",
      }),
      e,
    ],
  });
}
const ea = {
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: "1",
  },
  avatar: { "--size": "1.75em", cursor: "pointer", marginLeft: "8px" },
};
function __({ collectionDef: e }) {
  const {
      clientUsername: t,
      recipeSearchFilter: r,
      filterProps: i,
      setSettingsView: s,
      setLoginView: o,
      setChangePassView: a,
      setChangeUserView: n,
      setCollectionsView: l,
      setRecipeSummaryView: d,
      setClientUsername: p,
      setSelectedRecipe: u,
      setRecipeSearchFilter: f,
    } = Xe(),
    m = Ot(),
    g = Pr(),
    b = parseInt(g.id || "-1"),
    { data: w } = mu(b),
    { status: _, data: y, error: C, isFetching: x } = cu(),
    S = qe(null);
  _ === "error" && console.error(C.message);
  let A;
  ((B) => {
    (B.VIEW_COLLECTIONS = "0"),
      (B.CHANGE_USERNAME = "1"),
      (B.CHANGE_PASSWORD = "2"),
      (B.LOGOUT = "3");
  })(A || (A = {}));
  async function T() {
    const B = await uu({
      ...i,
      collection_id: b,
      view_min: 0,
      view_max: 1,
      random: !0,
    });
    u(B[0]), d();
  }
  async function I() {
    await By(),
      p(""),
      await m.invalidateQueries({ queryKey: ["loggedIn"] }),
      S.current !== null && (await S.current.toast());
  }
  async function E() {
    await m.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  async function z(B) {
    switch (B) {
      case "0":
        l();
        break;
      case "1":
        n();
        break;
      case "2":
        a();
        break;
      case "3":
        await I();
        break;
    }
  }
  return v("div", {
    style: ea.root,
    children: [
      v(Ui, {
        variant: "success",
        message: "Logged out successfully",
        childRef: S,
      }),
      v("div", {}),
      x || !y
        ? v(zl, { style: ea.avatar, label: "Empty avatar", onClick: () => o() })
        : v(Rd, {
            children: [
              v(zl, {
                style: ea.avatar,
                slot: "trigger",
                initials: t[0],
                label: "Avatar with username initial",
              }),
              v(Cd, {
                onSlSelect: (B) => {
                  z(B.detail.item.value);
                },
                children: [
                  v(pm, { className: "userMenuLabel", children: t }),
                  v(es, { value: "0", children: "View Collections" }),
                  v(es, { value: "1", children: "Change Username" }),
                  v(es, { value: "2", children: "Change Password" }),
                  v(es, {
                    value: "3",
                    children: [
                      "Log Out",
                      v(gn, { name: "box-arrow-right", slot: "suffix" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      v(Ue, {
        disabled: !e,
        name: "shuffle",
        label: "Generate Random Recipe",
        onClick: () => {
          T();
        },
      }),
      v(Ue, {
        disabled: !e,
        name: "sliders",
        label: "Search Settings",
        onClick: () => s(),
      }),
      v(Qe, {
        disabled: !e,
        clearable: !0,
        type: "search",
        placeholder: `Search ${w || ""}...`,
        style: { flex: "1" },
        value: r,
        onSlChange: (B) => f(B.target.value),
        children: v(Ue, {
          disabled: !e,
          name: "search",
          label: "Run Search",
          slot: "suffix",
          onClick: () => {
            E();
          },
        }),
      }),
    ],
  });
}
const ce = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "10",
    overflowX: "hidden",
  },
  header: {
    fontSize: "large",
    fontWeight: "bold",
    position: "sticky",
    top: "0",
    zIndex: "1",
  },
  row: {
    display: "flex",
    alignItems: "center",
    height: "30px",
    position: "relative",
  },
  cell: {
    alignItems: "center",
    display: "flex",
    flex: "3",
    justifyContent: "start",
    overflow: "auto hidden",
  },
  end: {
    alignItems: "center",
    display: "flex",
    flex: "1",
    justifyContent: "end",
  },
};
function w_({ editMode: e }) {
  const { getColumnVisible: t } = Xe();
  return v(Ro, {
    style: { "--border-radius": "0" },
    children: v("div", {
      style: ce.row,
      children: [
        t(le.NAME) &&
          v("div", {
            style: ce.cell,
            children: v(dr, { style: { width: "10em", height: "1em" } }),
          }),
        t(le.AUTHOR) &&
          v("div", {
            style: ce.cell,
            children: v(dr, { style: { width: "8em", height: "1em" } }),
          }),
        t(le.ALLERGENS) &&
          v("div", {
            style: ce.cell,
            children: Array(2)
              .fill(0)
              .map(() =>
                v(dr, {
                  style: { width: "5em", height: "1em", marginLeft: "1em" },
                }),
              ),
          }),
        t(le.REFERENCE) &&
          v("div", {
            style: ce.cell,
            children: v(dr, { style: { width: "14em", height: "1em" } }),
          }),
        t(le.INGREDIENTS) &&
          v("div", {
            style: ce.cell,
            children: Array(3)
              .fill(0)
              .map(() =>
                v(dr, {
                  style: { width: "4em", height: "1em", marginLeft: "1em" },
                }),
              ),
          }),
        v("div", {
          style: ce.end,
          children: [
            v(dr, { style: { width: "1.5em", height: "1.5em" } }),
            e &&
              v(Ie, {
                children: [
                  v(dr, {
                    style: {
                      width: "1.5em",
                      height: "1.5em",
                      marginLeft: "0.5em",
                    },
                  }),
                  v(dr, {
                    style: {
                      width: "1.5em",
                      height: "1.5em",
                      marginLeft: "0.5em",
                    },
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function x_({ editMode: e, rowData: t }) {
  const {
      getColumnVisible: r,
      setUpdateRecipeView: i,
      setRecipeSummaryView: s,
      setSelectedRecipe: o,
    } = Xe(),
    a = Ot();
  function n() {
    o(t), s();
  }
  function l() {
    o(t), i();
  }
  async function d() {
    await du(t.name),
      await a.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  return v(Ro, {
    style: { "--border-radius": "0" },
    children: t
      ? v("div", {
          style: ce.row,
          children: [
            r(le.NAME) && v("div", { style: ce.cell, children: t.name }),
            r(le.AUTHOR) &&
              v("div", { style: ce.cell, children: t.authors.join(",") }),
            r(le.ALLERGENS) &&
              v("div", {
                style: ce.cell,
                children: v($r, {
                  variant: "warning",
                  selected: t.allergens,
                  viewMode: !0,
                }),
              }),
            r(le.REFERENCE) &&
              v("div", { style: ce.cell, children: t.reference }),
            r(le.INGREDIENTS) &&
              v("div", {
                style: ce.cell,
                children: v($r, {
                  variant: "primary",
                  selected: t.ingredients,
                  viewMode: !0,
                }),
              }),
            v("div", {
              style: ce.end,
              children: [
                v(Et, {
                  content: "View Recipe",
                  children: v(Ue, {
                    name: "eye",
                    label: "View Recipe",
                    onClick: () => n(),
                  }),
                }),
                e &&
                  v(Ie, {
                    children: [
                      v(Et, {
                        content: "Edit Recipe",
                        children: v(Ue, {
                          name: "pencil",
                          label: "Edit Recipe",
                          onClick: () => l(),
                        }),
                      }),
                      v(Et, {
                        content: "Delete Recipe",
                        children: v(Ue, {
                          name: "trash",
                          label: "Delete Recipe",
                          onClick: () => {
                            d();
                          },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })
      : v("div", { style: ce.row }),
  });
}
function k_({ editMode: e }) {
  const {
      page: t,
      numRowsPerPage: r,
      filterProps: i,
      getColumnVisible: s,
      setNewRecipeView: o,
      setSelectedRecipe: a,
    } = Xe(),
    n = Pr(),
    l = parseInt(n.id || "-1"),
    { data: d, isFetching: p } = i_({
      ...i,
      collection_id: l,
      view_min: t * r,
      view_max: (t + 1) * r,
    });
  function u() {
    a({ name: "", reference: "", authors: [], allergens: [], ingredients: [] }),
      o();
  }
  return v("div", {
    style: ce.root,
    children: [
      v(Ro, {
        style: { ...ce.header, "--border-radius": "0" },
        children: v("div", {
          style: ce.row,
          children: [
            s(le.NAME) && v("div", { style: ce.cell, children: "Recipe Name" }),
            s(le.AUTHOR) && v("div", { style: ce.cell, children: "Author" }),
            s(le.ALLERGENS) &&
              v("div", { style: ce.cell, children: "Allergens" }),
            s(le.REFERENCE) &&
              v("div", { style: ce.cell, children: "Reference" }),
            s(le.INGREDIENTS) &&
              v("div", { style: ce.cell, children: "Ingredients" }),
            v("div", {
              style: { ...ce.end, fontSize: "2em" },
              children:
                e &&
                v(Et, {
                  content: "Create Recipe",
                  placement: "left",
                  children: v(Ue, {
                    name: "plus",
                    label: "Create Recipe",
                    onClick: () => u(),
                  }),
                }),
            }),
          ],
        }),
      }),
      Array(r)
        .fill(0)
        .map((f, m) =>
          !p && d !== void 0
            ? v(x_, { editMode: e, rowData: d[m] })
            : v(w_, { editMode: e }),
        ),
    ],
  });
}
const C_ = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
};
function S_() {
  const {
      page: e,
      numRowsPerPage: t,
      filterProps: r,
      gotoFirstPage: i,
      gotoPrevPage: s,
      gotoNextPage: o,
      gotoLastPage: a,
    } = Xe(),
    n = Ot(),
    l = Pr(),
    d = parseInt(l.id || "-1"),
    { data: p } = o_({ ...r, collection_id: d }),
    u = Math.ceil((p || 0) / t),
    f = async () => {
      i(),
        await n.invalidateQueries({ queryKey: ["filterCollection"] }),
        await n.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    m = async () => {
      s(),
        await n.invalidateQueries({ queryKey: ["filterCollection"] }),
        await n.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    g = async () => {
      o(u),
        await n.invalidateQueries({ queryKey: ["filterCollection"] }),
        await n.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    b = async () => {
      a(u),
        await n.invalidateQueries({ queryKey: ["filterCollection"] }),
        await n.invalidateQueries({ queryKey: ["filterCollection"] });
    };
  return v("div", {
    style: C_.root,
    children: [
      v(Et, {
        content: "First Page",
        children: v(Ue, {
          disabled: u === 0 || e === 0,
          name: "chevron-double-left",
          onClick: () => {
            f();
          },
          label: "First Page",
        }),
      }),
      v(Et, {
        content: "Previous Page",
        children: v(Ue, {
          disabled: u === 0 || e === 0,
          name: "chevron-left",
          onClick: () => {
            m();
          },
          label: "Previous Page",
        }),
      }),
      e + 1,
      v(Et, {
        content: "Next Page",
        children: v(Ue, {
          disabled: u === 0 || e === u - 1,
          name: "chevron-right",
          onClick: () => {
            g();
          },
          label: "Next Page",
        }),
      }),
      v(Et, {
        content: "Last Page",
        children: v(Ue, {
          disabled: u === 0 || e === u - 1,
          name: "chevron-double-right",
          onClick: () => {
            b();
          },
          label: "Last Page",
        }),
      }),
    ],
  });
}
const Yl = { inputField: { marginBottom: "1em" } };
function $_() {
  const {
      view: e,
      setMainView: t,
      setClientUsername: r,
      setSessionAlert: i,
    } = Xe(),
    s = Ot(),
    [o, a] = he(""),
    [n, l] = he(""),
    [d, p] = he(""),
    u = qe(null);
  function f() {
    t(), a(""), l(""), p("");
  }
  async function m() {
    try {
      await Hy(o, n),
        await s.invalidateQueries({ queryKey: ["loggedIn"] }),
        r(o),
        i(!1),
        f(),
        u.current !== null && (await u.current.toast());
    } catch (g) {
      g instanceof Error && p(g.message);
    }
  }
  return v(Ps, {
    class: "dialog-overview",
    open: e === jt.LOGIN_PROMPT,
    onSlAfterHide: () => f(),
    label: "Log In",
    children: [
      v(Ui, {
        message: "Logged in successfully",
        variant: "success",
        childRef: u,
      }),
      v(Qe, {
        style: Yl.inputField,
        type: "text",
        value: o,
        onSlChange: (g) => a(g.target.value),
        placeholder: "Username",
      }),
      v(Qe, {
        className: "errorHelp",
        style: Yl.inputField,
        helpText: d,
        type: "password",
        value: n,
        onSlChange: (g) => l(g.target.value),
        placeholder: "Password",
        passwordToggle: !0,
      }),
      v(Is, {
        onClick: () => {
          m();
        },
        children: "Log In",
      }),
    ],
  });
}
const ta = { inputField: { marginBottom: "1em" } };
function E_() {
  const { view: e, setMainView: t, setSessionAlert: r } = Xe(),
    [i, s] = he(""),
    [o, a] = he(""),
    [n, l] = he(""),
    [d, p] = he(""),
    u = qe(null);
  function f() {
    t(), s(""), a(""), l("");
  }
  async function m() {
    if ((p(""), n !== o)) {
      p("New passwords do not match");
      return;
    }
    try {
      await qy(i, o), f(), u.current !== null && (await u.current.toast());
    } catch (g) {
      g instanceof Error && (g.message === Sr ? r() : p(g.message));
    }
  }
  return v(Ps, {
    class: "dialog-overview",
    open: e === jt.CHANGE_PASSWORD,
    onSlAfterHide: () => f(),
    label: "Change Password",
    children: [
      v(Ui, {
        message: "Password changed successfully",
        variant: "success",
        childRef: u,
      }),
      v(Qe, {
        style: ta.inputField,
        type: "password",
        value: i,
        onSlChange: (g) => s(g.target.value),
        placeholder: "Old Password",
        passwordToggle: !0,
      }),
      v(Qe, {
        style: ta.inputField,
        type: "password",
        value: o,
        onSlChange: (g) => a(g.target.value),
        placeholder: "New Password",
        passwordToggle: !0,
      }),
      v(Qe, {
        className: "errorHelp",
        style: ta.inputField,
        helpText: d,
        type: "password",
        value: n,
        onSlChange: (g) => l(g.target.value),
        placeholder: "Retype New Password",
        passwordToggle: !0,
      }),
      v(Is, {
        onClick: () => {
          m();
        },
        children: "Confirm",
      }),
    ],
  });
}
const Xl = { inputField: { marginBottom: "1em" } };
function A_() {
  const {
      view: e,
      setMainView: t,
      setClientUsername: r,
      setSessionAlert: i,
    } = Xe(),
    [s, o] = he(""),
    [a, n] = he(""),
    [l, d] = he(""),
    p = qe(null);
  function u() {
    t(), o(""), n(""), d("");
  }
  async function f() {
    try {
      await Uy(a, s),
        r(s),
        u(),
        p.current !== null && (await p.current.toast());
    } catch (m) {
      m instanceof Error && (m.message === Sr ? i() : d(m.message));
    }
  }
  return v(Ps, {
    className: "dialog-overview",
    open: e === jt.CHANGE_USERNAME,
    onSlAfterHide: () => u(),
    label: "Change Username",
    children: [
      v(Ui, {
        message: "Changed username successfully",
        variant: "success",
        childRef: p,
      }),
      v(Qe, {
        style: Xl.inputField,
        type: "text",
        value: s,
        onSlChange: (m) => o(m.target.value),
        placeholder: "New Username",
      }),
      v(Qe, {
        className: "errorHelp",
        style: Xl.inputField,
        helpText: l,
        type: "password",
        value: a,
        onSlChange: (m) => n(m.target.value),
        placeholder: "Password",
        passwordToggle: !0,
      }),
      v(Is, {
        onClick: () => {
          f();
        },
        children: "Confirm",
      }),
    ],
  });
}
const Jl = {
  collectionTitle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionCard: { marginBottom: "1em", flex: 1, width: "100%" },
};
function R_({ collectionId: e, searchTerm: t }) {
  const { setSessionAlert: r } = Xe(),
    i = Ot(),
    { data: s } = mu(e),
    { data: o } = m_(e),
    a = window.location.origin + "/collection/" + e,
    n = 2e3,
    [l, d] = he(0),
    p = qe(null),
    u = qe(null),
    f = qe(null);
  function m() {
    (f.current = Date.now()),
      (p.current = window.setInterval(() => {
        if (f.current) {
          const y = Date.now() - f.current,
            C = Math.min((y / n) * 100, 100);
          d(C);
        }
      }, 50));
  }
  function g() {
    m(),
      (u.current = window.setTimeout(async () => {
        await w(), b();
      }, n));
  }
  function b() {
    u.current && window.clearTimeout(u.current),
      p.current && window.clearInterval(p.current),
      (u.current = null),
      (p.current = null),
      (f.current = null),
      d(0);
  }
  async function w() {
    try {
      await l_(e),
        await i.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (y) {
      y instanceof Error && (y.message === Sr ? r() : console.error(y.message));
    }
  }
  async function _(y, C) {
    try {
      await a_(y, C),
        await i.invalidateQueries({ queryKey: ["collectionName"] });
    } catch (x) {
      x instanceof Error && (x.message === Sr ? r() : console.error(x.message));
    }
  }
  return s === void 0 || !s.toLocaleLowerCase().includes(t.toLocaleLowerCase())
    ? null
    : v(Ro, {
        style: Jl.collectionCard,
        children: [
          v("div", {
            slot: "header",
            style: Jl.collectionTitle,
            children: [
              v(Qe, {
                className: "collectionsName",
                filled: !0,
                value: s,
                onSlBlur: (y) => {
                  _(e, y.target.value);
                },
              }),
              v(Et, {
                content: "Open Collection",
                children: v(Ue, {
                  name: "box-arrow-up-right",
                  label: "Go to Recipe",
                  onClick: () => {
                    window.location.assign(a);
                  },
                }),
              }),
              v(gg, {
                value: a,
                copyLabel: "Share Collection",
                successLabel: "Copied",
                errorLabel: "Failed to copy",
                children: v(gn, { name: "share", slot: "copy-icon" }),
              }),
              v(Et, {
                content: "Delete Collection (Hold)",
                children: v(Rf, {
                  value: l,
                  style: `
              --size: 35px;
              --track-width: 2px;
              --track-color: none;
              --indicator-transition-duration: 2;
            `,
                  children: v(Ue, {
                    name: "trash",
                    label: "Delete Collection (Hold)",
                    onMouseDown: () => g(),
                    onMouseUp: () => b(),
                    onMouseLeave: () => b(),
                    onTouchStart: () => g(),
                    onTouchEnd: () => b(),
                    onTouchCancel: () => b(),
                  }),
                }),
              }),
            ],
          }),
          "Included recipes: ",
          o,
        ],
      });
}
const Zl = {
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  collectionCard: { marginBottom: "1em", flex: 1, width: "100%" },
};
function z_() {
  const e = Ot(),
    { view: t, setMainView: r, setSessionAlert: i } = Xe(),
    { data: s } = hu(),
    [o, a] = he("");
  function n(d) {
    d.eventPhase === Event.AT_TARGET ? r() : d.preventDefault();
  }
  async function l() {
    try {
      await n_("New Collection"),
        await e.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (d) {
      d instanceof Error && (d.message === Sr ? i() : console.error(d.message));
    }
  }
  return v(Ad, {
    class: "drawer-placement-start",
    open: t === jt.COLLECTIONS_LIST,
    onSlHide: (d) => n(d),
    placement: "start",
    label: "Collections",
    children:
      s !== void 0 &&
      v("div", {
        style: Zl.root,
        children: [
          v(Qe, {
            style: Zl.collectionCard,
            clearable: !0,
            type: "search",
            placeholder: "Find a collection...",
            value: o,
            onSlChange: (d) => a(d.target.value),
          }),
          s.map((d) => v(R_, { collectionId: d, searchTerm: o })),
          v(Et, {
            content: "Add Collection",
            children: v(Ue, {
              name: "plus",
              label: "Add Collection",
              style: { fontSize: "2em" },
              onClick: () => {
                l();
              },
            }),
          }),
        ],
      }),
  });
}
const ra = { inputField: { marginBottom: "1em" } };
function ec({ formTitle: e, submitLabel: t, submitMessage: r, viewState: i }) {
  const {
      view: s,
      selectedRecipe: o,
      selectedRecipeName: a,
      setMainView: n,
      setSelectedRecipe: l,
      setSessionAlert: d,
    } = Xe(),
    p = Ot(),
    u = qe(null),
    f = Pr(),
    m = parseInt(f.id || "-1"),
    [g, b] = he("");
  dt(() => {
    b(a);
  }, [a]);
  const { data: w } = pu(m),
    { data: _ } = fu(m);
  function y(x) {
    if (x.eventPhase !== Event.AT_TARGET) {
      x.preventDefault();
      return;
    }
    n();
  }
  async function C() {
    if (g !== "")
      try {
        i === jt.UPDATE_RECIPE_FORM && (await du(o.name)),
          await jy(m, g, o.reference, o.authors, o.ingredients, o.allergens),
          await p.invalidateQueries({ queryKey: ["filterCollection"] }),
          n(),
          u.current !== null && (await u.current.toast());
      } catch (x) {
        x instanceof Error &&
          (x.message === Sr ? d() : console.error(x.message));
      }
  }
  return v(Ps, {
    class: "dialog-overview",
    open: s === i,
    onSlHide: (x) => y(x),
    label: e,
    children: [
      v(Ui, { message: r, variant: "success", childRef: u }),
      v(Qe, {
        style: ra.inputField,
        type: "text",
        value: g,
        onSlChange: (x) => b(x.target.value),
        placeholder: "Recipe Name",
      }),
      v(Qe, {
        style: ra.inputField,
        type: "text",
        value: o.authors.join(","),
        onSlChange: (x) => l({ ...o, authors: x.target.value.split(",") }),
        placeholder: "Authors",
      }),
      v(Qe, {
        style: ra.inputField,
        type: "text",
        value: o.reference,
        onSlChange: (x) => l({ ...o, reference: x.target.value }),
        placeholder: "Reference",
      }),
      v($r, {
        variant: "primary",
        available: w,
        selected: o.allergens,
        setSelected: (x) => l({ ...o, allergens: x }),
        tagType: Ha.Allergen,
      }),
      v($r, {
        variant: "primary",
        available: _,
        selected: o.ingredients,
        setSelected: (x) => l({ ...o, ingredients: x }),
        tagType: Ha.Ingredient,
      }),
      v(Is, {
        onClick: () => {
          C();
        },
        children: [" ", t],
      }),
    ],
  });
}
const tc = { summaryField: { marginBottom: "1em" } };
function T_() {
  const { view: e, setMainView: t, selectedRecipe: r } = Xe();
  function i() {
    t();
  }
  return v(Ps, {
    class: "dialog-overview",
    open: e === jt.RECIPE_SUMMARY,
    onSlHide: () => i(),
    label: r.name,
    children: [
      v("strong", { children: "Author(s)" }),
      v("div", { style: tc.summaryField, children: r.authors.join(",") }),
      v("strong", { children: "Reference" }),
      v("div", { style: tc.summaryField, children: r.reference }),
      v("strong", { children: "Allergens" }),
      v($r, { variant: "primary", selected: r.allergens, viewMode: !0 }),
      v("strong", { children: "Ingredients" }),
      v($r, { variant: "primary", selected: r.ingredients, viewMode: !0 }),
    ],
  });
}
la("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/");
const rc = {
  root: { display: "flex", flexDirection: "column", height: "95vh" },
  noCollectionText: {
    alignItems: "center",
    color: "gray",
    display: "flex",
    flexDirection: "column",
    flex: "11",
    fontSize: "72px",
    justifyContent: "center",
    userSelect: "none",
  },
};
function gu() {
  const { sessionAlert: e, setClientUsername: t } = Xe(),
    r = Pr(),
    i = Ot(),
    s = parseInt(r.id || "-1"),
    { data: o } = cu(),
    { data: a } = hu(),
    n = qe(null),
    l = s !== -1,
    d = o === !0 && a !== void 0 && a.includes(s);
  return (
    dt(() => {
      t(ge.user);
    }, []),
    dt(() => {
      e &&
        n.current !== null &&
        (n.current.toast(),
        i.invalidateQueries({ queryKey: ["loggedIn"] }),
        lu());
    }, [e]),
    v("div", {
      style: rc.root,
      children: [
        v(Ui, {
          message: "Session expired, please log in again",
          variant: "danger",
          childRef: n,
          duration: 3e4,
        }),
        l && v(y_, {}),
        v(z_, {}),
        v($_, {}),
        v(A_, {}),
        v(E_, {}),
        v(__, { collectionDef: l }),
        l
          ? v(Ie, {
              children: [
                v(k_, { editMode: d }),
                v(S_, {}),
                v(ec, {
                  formTitle: "New Recipe",
                  submitLabel: "Add Recipe",
                  submitMessage: "Added recipe successfully",
                  viewState: jt.NEW_RECIPE_FORM,
                }),
                v(ec, {
                  formTitle: "Update Recipe",
                  submitLabel: "Update",
                  submitMessage: "Updated recipe successfully",
                  viewState: jt.UPDATE_RECIPE_FORM,
                }),
                v(T_, {}),
              ],
            })
          : v("div", {
              style: rc.noCollectionText,
              children: "No collection selected!",
            }),
      ],
    })
  );
}
const P_ = {
  alignItems: "center",
  color: "gray",
  display: "flex",
  flexDirection: "column",
  flex: "11",
  fontSize: "25px",
  justifyContent: "center",
  userSelect: "none",
  fontFamily: "monospace",
  whiteSpace: "pre-wrap",
};
function bu() {
  return v("div", {
    style: P_,
    children: [
      "             _._  _-=.",
      v("br", {}),
      "      -=-_ _-    Y    \\  _.",
      v("br", {}),
      '     O    \\      |     &"  =-',
      v("br", {}),
      "     |     |          /      )",
      v("br", {}),
      "  ==-*                       '",
      v("br", {}),
      " -    \\                     |",
      v("br", {}),
      "(      -                    *",
      v("br", {}),
      " \\_         _        -     /     404?????",
      v("br", {}),
      "   -._       \\        |    |",
      v("br", {}),
      '      "\\       \\      |    |',
      v("br", {}),
      "        -       |     \\    L     _",
      v("br", {}),
      `         '.      \\     | ..#=--"" |`,
      v("br", {}),
      "           \\      \\   _|-          \\",
      v("br", {}),
      '            &    _"-^             _-x',
      v("br", {}),
      '            _#--             _.-""',
      v("br", {}),
      '         <--            _.--"',
      v("br", {}),
      '          -        __-""',
      v("br", {}),
      '           \\   ..-"              O',
      v("br", {}),
      "            x-'",
      v("br", {}),
      "                        O",
      v("br", {}),
      "                                _.--.",
      v("br", {}),
      "                              -'",
      v("br", {}),
      "                             '",
    ],
  });
}
function I_() {
  const e = Pr(),
    t = parseInt(e.id || "-1"),
    { data: r, isFetching: i } = v_(t);
  return i
    ? v("div", {
        style: {
          alignItems: "center",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          left: 0,
          margin: "auto",
          position: "absolute",
          right: 0,
          top: 0,
        },
        children: v(bf, { style: "font-size: 350px; --track-width: 30px;" }),
      })
    : r
      ? v(gu, {})
      : v(bu, {});
}
My();
Si(
  v(e0, {
    client: Ny,
    children: v($y, {
      children: v(iy, {
        children: [
          v(to, { path: "/", element: v(gu, {}) }),
          v(to, { path: "/collection/:id", element: v(I_, {}) }),
          v(to, { path: "*", element: v(bu, {}) }),
        ],
      }),
    }),
  }),
  document.getElementById("app"),
);
