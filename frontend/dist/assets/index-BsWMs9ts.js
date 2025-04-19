var gs = (e) => {
  throw TypeError(e);
};
var Cn = (e, t, r) => t.has(e) || gs("Cannot " + r);
var v = (e, t, r) => (
    Cn(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  T = (e, t, r) =>
    t.has(e)
      ? gs("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  $ = (e, t, r, i) => (
    Cn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r
  ),
  z = (e, t, r) => (Cn(e, t, "access private method"), r);
var Ni = (e, t, r, i) => ({
  set _(n) {
    $(e, t, n, r);
  },
  get _() {
    return v(e, t, i);
  },
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = r(n);
    fetch(n.href, o);
  }
})();
var Si,
  O,
  qa,
  Yt,
  vs,
  ja,
  jn,
  Wa,
  Eo,
  Wn,
  Kn,
  Ka,
  fi = {},
  Qa = [],
  jc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  ln = Array.isArray;
function bt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function $o(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function I(e, t, r) {
  var i,
    n,
    o,
    s = {};
  for (o in t)
    o == "key" ? (i = t[o]) : o == "ref" ? (n = t[o]) : (s[o] = t[o]);
  if (
    (arguments.length > 2 &&
      (s.children = arguments.length > 3 ? Si.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return si(e, s, i, n, null);
}
function si(e, t, r, i, n) {
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
    __v: n ?? ++qa,
    __i: -1,
    __u: 0,
  };
  return n == null && O.vnode != null && O.vnode(o), o;
}
function Ga() {
  return { current: null };
}
function ve(e) {
  return e.children;
}
function qe(e, t) {
  (this.props = e), (this.context = t);
}
function Nr(e, t) {
  if (t == null) return e.__ ? Nr(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Nr(e) : null;
}
function Ya(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Ya(e);
  }
}
function Qn(e) {
  ((!e.__d && (e.__d = !0) && Yt.push(e) && !Xi.__r++) ||
    vs !== O.debounceRendering) &&
    ((vs = O.debounceRendering) || ja)(Xi);
}
function Xi() {
  var e, t, r, i, n, o, s, a;
  for (Yt.sort(jn); (e = Yt.shift()); )
    e.__d &&
      ((t = Yt.length),
      (i = void 0),
      (o = (n = (r = e).__v).__e),
      (s = []),
      (a = []),
      r.__P &&
        (((i = bt({}, n)).__v = n.__v + 1),
        O.vnode && O.vnode(i),
        Ro(
          r.__P,
          i,
          n,
          r.__n,
          r.__P.namespaceURI,
          32 & n.__u ? [o] : null,
          s,
          o ?? Nr(n),
          !!(32 & n.__u),
          a,
        ),
        (i.__v = n.__v),
        (i.__.__k[i.__i] = i),
        Za(s, i, a),
        i.__e != o && Ya(i)),
      Yt.length > t && Yt.sort(jn));
  Xi.__r = 0;
}
function Xa(e, t, r, i, n, o, s, a, l, c, d) {
  var u,
    f,
    h,
    p,
    w,
    b,
    y = (i && i.__k) || Qa,
    x = t.length;
  for (l = Wc(r, t, y, l, x), u = 0; u < x; u++)
    (h = r.__k[u]) != null &&
      ((f = h.__i === -1 ? fi : y[h.__i] || fi),
      (h.__i = u),
      (b = Ro(e, h, f, n, o, s, a, l, c, d)),
      (p = h.__e),
      h.ref &&
        f.ref != h.ref &&
        (f.ref && Ao(f.ref, null, h), d.push(h.ref, h.__c || p, h)),
      w == null && p != null && (w = p),
      4 & h.__u || f.__k === h.__k
        ? (l = Ja(h, l, e))
        : typeof h.type == "function" && b !== void 0
          ? (l = b)
          : p && (l = p.nextSibling),
      (h.__u &= -7));
  return (r.__e = w), l;
}
function Wc(e, t, r, i, n) {
  var o,
    s,
    a,
    l,
    c,
    d = r.length,
    u = d,
    f = 0;
  for (e.__k = new Array(n), o = 0; o < n; o++)
    (s = t[o]) != null && typeof s != "boolean" && typeof s != "function"
      ? ((l = o + f),
        ((s = e.__k[o] =
          typeof s == "string" ||
          typeof s == "number" ||
          typeof s == "bigint" ||
          s.constructor == String
            ? si(null, s, null, null, null)
            : ln(s)
              ? si(ve, { children: s }, null, null, null)
              : s.constructor === void 0 && s.__b > 0
                ? si(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                : s).__ = e),
        (s.__b = e.__b + 1),
        (a = null),
        (c = s.__i = Kc(s, r, l, u)) !== -1 &&
          (u--, (a = r[c]) && (a.__u |= 2)),
        a == null || a.__v === null
          ? (c == -1 && f--, typeof s.type != "function" && (s.__u |= 4))
          : c != l &&
            (c == l - 1
              ? f--
              : c == l + 1
                ? f++
                : (c > l ? f-- : f++, (s.__u |= 4))))
      : (e.__k[o] = null);
  if (u)
    for (o = 0; o < d; o++)
      (a = r[o]) != null &&
        (2 & a.__u) == 0 &&
        (a.__e == i && (i = Nr(a)), el(a, a));
  return i;
}
function Ja(e, t, r) {
  var i, n;
  if (typeof e.type == "function") {
    for (i = e.__k, n = 0; i && n < i.length; n++)
      i[n] && ((i[n].__ = e), (t = Ja(i[n], t, r)));
    return t;
  }
  e.__e != t &&
    (t && e.type && !r.contains(t) && (t = Nr(e)),
    r.insertBefore(e.__e, t || null),
    (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function _t(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (ln(e)
        ? e.some(function (r) {
            _t(r, t);
          })
        : t.push(e)),
    t
  );
}
function Kc(e, t, r, i) {
  var n,
    o,
    s = e.key,
    a = e.type,
    l = t[r];
  if (l === null || (l && s == l.key && a === l.type && (2 & l.__u) == 0))
    return r;
  if (i > (l != null && (2 & l.__u) == 0 ? 1 : 0))
    for (n = r - 1, o = r + 1; n >= 0 || o < t.length; ) {
      if (n >= 0) {
        if ((l = t[n]) && (2 & l.__u) == 0 && s == l.key && a === l.type)
          return n;
        n--;
      }
      if (o < t.length) {
        if ((l = t[o]) && (2 & l.__u) == 0 && s == l.key && a === l.type)
          return o;
        o++;
      }
    }
  return -1;
}
function ys(e, t, r) {
  t[0] == "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] =
        r == null ? "" : typeof r != "number" || jc.test(t) ? r : r + "px");
}
function Fi(e, t, r, i, n) {
  var o;
  e: if (t == "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof i == "string" && (e.style.cssText = i = ""), i))
        for (t in i) (r && t in r) || ys(e.style, t, "");
      if (r) for (t in r) (i && r[t] === i[t]) || ys(e.style, t, r[t]);
    }
  else if (t[0] == "o" && t[1] == "n")
    (o = t != (t = t.replace(Wa, "$1"))),
      (t =
        t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + o] = r),
      r
        ? i
          ? (r.u = i.u)
          : ((r.u = Eo), e.addEventListener(t, o ? Kn : Wn, o))
        : e.removeEventListener(t, o ? Kn : Wn, o);
  else {
    if (n == "http://www.w3.org/2000/svg")
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
function bs(e) {
  return function (t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = Eo++;
      else if (t.t < r.u) return;
      return r(O.event ? O.event(t) : t);
    }
  };
}
function Ro(e, t, r, i, n, o, s, a, l, c) {
  var d,
    u,
    f,
    h,
    p,
    w,
    b,
    y,
    x,
    C,
    k,
    S,
    A,
    R,
    P,
    E,
    H,
    N = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((l = !!(32 & r.__u)), (o = [(a = t.__e = r.__e)])),
    (d = O.__b) && d(t);
  e: if (typeof N == "function")
    try {
      if (
        ((y = t.props),
        (x = "prototype" in N && N.prototype.render),
        (C = (d = N.contextType) && i[d.__c]),
        (k = d ? (C ? C.props.value : d.__) : i),
        r.__c
          ? (b = (u = t.__c = r.__c).__ = u.__E)
          : (x
              ? (t.__c = u = new N(y, k))
              : ((t.__c = u = new qe(y, k)),
                (u.constructor = N),
                (u.render = Gc)),
            C && C.sub(u),
            (u.props = y),
            u.state || (u.state = {}),
            (u.context = k),
            (u.__n = i),
            (f = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        x && u.__s == null && (u.__s = u.state),
        x &&
          N.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = bt({}, u.__s)),
          bt(u.__s, N.getDerivedStateFromProps(y, u.__s))),
        (h = u.props),
        (p = u.state),
        (u.__v = t),
        f)
      )
        x &&
          N.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          x && u.componentDidMount != null && u.__h.push(u.componentDidMount);
      else {
        if (
          (x &&
            N.getDerivedStateFromProps == null &&
            y !== h &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(y, k),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(y, u.__s, k) === !1) ||
              t.__v == r.__v))
        ) {
          for (
            t.__v != r.__v && ((u.props = y), (u.state = u.__s), (u.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.some(function (ne) {
                ne && (ne.__ = t);
              }),
              S = 0;
            S < u._sb.length;
            S++
          )
            u.__h.push(u._sb[S]);
          (u._sb = []), u.__h.length && s.push(u);
          break e;
        }
        u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, k),
          x &&
            u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(h, p, w);
            });
      }
      if (
        ((u.context = k),
        (u.props = y),
        (u.__P = e),
        (u.__e = !1),
        (A = O.__r),
        (R = 0),
        x)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            A && A(t),
            d = u.render(u.props, u.state, u.context),
            P = 0;
          P < u._sb.length;
          P++
        )
          u.__h.push(u._sb[P]);
        u._sb = [];
      } else
        do
          (u.__d = !1),
            A && A(t),
            (d = u.render(u.props, u.state, u.context)),
            (u.state = u.__s);
        while (u.__d && ++R < 25);
      (u.state = u.__s),
        u.getChildContext != null && (i = bt(bt({}, i), u.getChildContext())),
        x &&
          !f &&
          u.getSnapshotBeforeUpdate != null &&
          (w = u.getSnapshotBeforeUpdate(h, p)),
        (a = Xa(
          e,
          ln(
            (E =
              d != null && d.type === ve && d.key == null
                ? d.props.children
                : d),
          )
            ? E
            : [E],
          t,
          r,
          i,
          n,
          o,
          s,
          a,
          l,
          c,
        )),
        (u.base = t.__e),
        (t.__u &= -161),
        u.__h.length && s.push(u),
        b && (u.__E = u.__ = null);
    } catch (ne) {
      if (((t.__v = null), l || o != null))
        if (ne.then) {
          for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
            a = a.nextSibling;
          (o[o.indexOf(a)] = null), (t.__e = a);
        } else for (H = o.length; H--; ) $o(o[H]);
      else (t.__e = r.__e), (t.__k = r.__k);
      O.__e(ne, t, r);
    }
  else
    o == null && t.__v == r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (a = t.__e = Qc(r.__e, t, r, i, n, o, s, l, c));
  return (d = O.diffed) && d(t), 128 & t.__u ? void 0 : a;
}
function Za(e, t, r) {
  for (var i = 0; i < r.length; i++) Ao(r[i], r[++i], r[++i]);
  O.__c && O.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (o) {
            o.call(n);
          });
      } catch (o) {
        O.__e(o, n.__v);
      }
    });
}
function Qc(e, t, r, i, n, o, s, a, l) {
  var c,
    d,
    u,
    f,
    h,
    p,
    w,
    b = r.props,
    y = t.props,
    x = t.type;
  if (
    (x == "svg"
      ? (n = "http://www.w3.org/2000/svg")
      : x == "math"
        ? (n = "http://www.w3.org/1998/Math/MathML")
        : n || (n = "http://www.w3.org/1999/xhtml"),
    o != null)
  ) {
    for (c = 0; c < o.length; c++)
      if (
        (h = o[c]) &&
        "setAttribute" in h == !!x &&
        (x ? h.localName == x : h.nodeType == 3)
      ) {
        (e = h), (o[c] = null);
        break;
      }
  }
  if (e == null) {
    if (x == null) return document.createTextNode(y);
    (e = document.createElementNS(n, x, y.is && y)),
      a && (O.__m && O.__m(t, o), (a = !1)),
      (o = null);
  }
  if (x === null) b === y || (a && e.data === y) || (e.data = y);
  else {
    if (
      ((o = o && Si.call(e.childNodes)), (b = r.props || fi), !a && o != null)
    )
      for (b = {}, c = 0; c < e.attributes.length; c++)
        b[(h = e.attributes[c]).name] = h.value;
    for (c in b)
      if (((h = b[c]), c != "children")) {
        if (c == "dangerouslySetInnerHTML") u = h;
        else if (!(c in y)) {
          if (
            (c == "value" && "defaultValue" in y) ||
            (c == "checked" && "defaultChecked" in y)
          )
            continue;
          Fi(e, c, null, h, n);
        }
      }
    for (c in y)
      (h = y[c]),
        c == "children"
          ? (f = h)
          : c == "dangerouslySetInnerHTML"
            ? (d = h)
            : c == "value"
              ? (p = h)
              : c == "checked"
                ? (w = h)
                : (a && typeof h != "function") ||
                  b[c] === h ||
                  Fi(e, c, h, b[c], n);
    if (d)
      a ||
        (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
        (e.innerHTML = d.__html),
        (t.__k = []);
    else if (
      (u && (e.innerHTML = ""),
      Xa(
        e,
        ln(f) ? f : [f],
        t,
        r,
        i,
        x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n,
        o,
        s,
        o ? o[0] : r.__k && Nr(r, 0),
        a,
        l,
      ),
      o != null)
    )
      for (c = o.length; c--; ) $o(o[c]);
    a ||
      ((c = "value"),
      x == "progress" && p == null
        ? e.removeAttribute("value")
        : p !== void 0 &&
          (p !== e[c] ||
            (x == "progress" && !p) ||
            (x == "option" && p !== b[c])) &&
          Fi(e, c, p, b[c], n),
      (c = "checked"),
      w !== void 0 && w !== e[c] && Fi(e, c, w, b[c], n));
  }
  return e;
}
function Ao(e, t, r) {
  try {
    if (typeof e == "function") {
      var i = typeof e.__u == "function";
      i && e.__u(), (i && t == null) || (e.__u = e(t));
    } else e.current = t;
  } catch (n) {
    O.__e(n, r);
  }
}
function el(e, t, r) {
  var i, n;
  if (
    (O.unmount && O.unmount(e),
    (i = e.ref) && ((i.current && i.current !== e.__e) || Ao(i, null, t)),
    (i = e.__c) != null)
  ) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        O.__e(o, t);
      }
    i.base = i.__P = null;
  }
  if ((i = e.__k))
    for (n = 0; n < i.length; n++)
      i[n] && el(i[n], t, r || typeof e.type != "function");
  r || $o(e.__e), (e.__c = e.__ = e.__e = void 0);
}
function Gc(e, t, r) {
  return this.constructor(e, r);
}
function Fr(e, t, r) {
  var i, n, o, s;
  t == document && (t = document.documentElement),
    O.__ && O.__(e, t),
    (n = (i = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (o = []),
    (s = []),
    Ro(
      t,
      (e = ((!i && r) || t).__k = I(ve, null, [e])),
      n || fi,
      fi,
      t.namespaceURI,
      !i && r ? [r] : n ? null : t.firstChild ? Si.call(t.childNodes) : null,
      o,
      !i && r ? r : n ? n.__e : t.firstChild,
      i,
      s,
    ),
    Za(o, e, s);
}
function tl(e, t) {
  Fr(e, t, tl);
}
function Yc(e, t, r) {
  var i,
    n,
    o,
    s,
    a = bt({}, e.props);
  for (o in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
    o == "key"
      ? (i = t[o])
      : o == "ref"
        ? (n = t[o])
        : (a[o] = t[o] === void 0 && s !== void 0 ? s[o] : t[o]);
  return (
    arguments.length > 2 &&
      (a.children = arguments.length > 3 ? Si.call(arguments, 2) : r),
    si(e.type, a, i || e.key, n || e.ref, null)
  );
}
function Ee(e, t) {
  var r = {
    __c: (t = "__cC" + Ka++),
    __: e,
    Consumer: function (i, n) {
      return i.children(n);
    },
    Provider: function (i) {
      var n, o;
      return (
        this.getChildContext ||
          ((n = new Set()),
          ((o = {})[t] = this),
          (this.getChildContext = function () {
            return o;
          }),
          (this.componentWillUnmount = function () {
            n = null;
          }),
          (this.shouldComponentUpdate = function (s) {
            this.props.value !== s.value &&
              n.forEach(function (a) {
                (a.__e = !0), Qn(a);
              });
          }),
          (this.sub = function (s) {
            n.add(s);
            var a = s.componentWillUnmount;
            s.componentWillUnmount = function () {
              n && n.delete(s), a && a.call(s);
            };
          })),
        i.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(Si = Qa.slice),
  (O = {
    __e: function (e, t, r, i) {
      for (var n, o, s; (t = t.__); )
        if ((n = t.__c) && !n.__)
          try {
            if (
              ((o = n.constructor) &&
                o.getDerivedStateFromError != null &&
                (n.setState(o.getDerivedStateFromError(e)), (s = n.__d)),
              n.componentDidCatch != null &&
                (n.componentDidCatch(e, i || {}), (s = n.__d)),
              s)
            )
              return (n.__E = n);
          } catch (a) {
            e = a;
          }
      throw e;
    },
  }),
  (qa = 0),
  (qe.prototype.setState = function (e, t) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = bt({}, this.state))),
      typeof e == "function" && (e = e(bt({}, r), this.props)),
      e && bt(r, e),
      e != null && this.__v && (t && this._sb.push(t), Qn(this));
  }),
  (qe.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Qn(this));
  }),
  (qe.prototype.render = ve),
  (Yt = []),
  (ja =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (jn = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Xi.__r = 0),
  (Wa = /(PointerCapture)$|Capture$/i),
  (Eo = 0),
  (Wn = bs(!1)),
  (Kn = bs(!0)),
  (Ka = 0);
var Xc = 0;
function g(e, t, r, i, n, o) {
  t || (t = {});
  var s,
    a,
    l = t;
  if ("ref" in l)
    for (a in ((l = {}), t)) a == "ref" ? (s = t[a]) : (l[a] = t[a]);
  var c = {
    type: e,
    props: l,
    key: r,
    ref: s,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Xc,
    __i: -1,
    __u: 0,
    __source: n,
    __self: o,
  };
  if (typeof e == "function" && (s = e.defaultProps))
    for (a in s) l[a] === void 0 && (l[a] = s[a]);
  return O.vnode && O.vnode(c), c;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Vi = globalThis,
  Po =
    Vi.ShadowRoot &&
    (Vi.ShadyCSS === void 0 || Vi.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  To = Symbol(),
  _s = new WeakMap();
let rl = class {
  constructor(t, r, i) {
    if (((this._$cssResult$ = !0), i !== To))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    (this.cssText = t), (this.t = r);
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (Po && t === void 0) {
      const i = r !== void 0 && r.length === 1;
      i && (t = _s.get(r)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && _s.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Jc = (e) => new rl(typeof e == "string" ? e : e + "", void 0, To),
  te = (e, ...t) => {
    const r =
      e.length === 1
        ? e[0]
        : t.reduce(
            (i, n, o) =>
              i +
              ((s) => {
                if (s._$cssResult$ === !0) return s.cssText;
                if (typeof s == "number") return s;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    s +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(n) +
              e[o + 1],
            e[0],
          );
    return new rl(r, e, To);
  },
  Zc = (e, t) => {
    if (Po)
      e.adoptedStyleSheets = t.map((r) =>
        r instanceof CSSStyleSheet ? r : r.styleSheet,
      );
    else
      for (const r of t) {
        const i = document.createElement("style"),
          n = Vi.litNonce;
        n !== void 0 && i.setAttribute("nonce", n),
          (i.textContent = r.cssText),
          e.appendChild(i);
      }
  },
  ws = Po
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((t) => {
              let r = "";
              for (const i of t.cssRules) r += i.cssText;
              return Jc(r);
            })(e)
          : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const {
    is: eu,
    defineProperty: tu,
    getOwnPropertyDescriptor: ru,
    getOwnPropertyNames: iu,
    getOwnPropertySymbols: nu,
    getPrototypeOf: ou,
  } = Object,
  Mt = globalThis,
  xs = Mt.trustedTypes,
  su = xs ? xs.emptyScript : "",
  kn = Mt.reactiveElementPolyfillSupport,
  ai = (e, t) => e,
  Dr = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? su : null;
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
  Oo = (e, t) => !eu(e, t),
  Cs = {
    attribute: !0,
    type: String,
    converter: Dr,
    reflect: !1,
    hasChanged: Oo,
  };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
  Mt.litPropertyMetadata ?? (Mt.litPropertyMetadata = new WeakMap());
let vr = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Cs) {
    if (
      (r.state && (r.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, r),
      !r.noAccessor)
    ) {
      const i = Symbol(),
        n = this.getPropertyDescriptor(t, i, r);
      n !== void 0 && tu(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, r, i) {
    const { get: n, set: o } = ru(this.prototype, t) ?? {
      get() {
        return this[r];
      },
      set(s) {
        this[r] = s;
      },
    };
    return {
      get() {
        return n == null ? void 0 : n.call(this);
      },
      set(s) {
        const a = n == null ? void 0 : n.call(this);
        o.call(this, s), this.requestUpdate(t, a, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Cs;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ai("elementProperties"))) return;
    const t = ou(this);
    t.finalize(),
      t.l !== void 0 && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(ai("finalized"))) return;
    if (
      ((this.finalized = !0),
      this._$Ei(),
      this.hasOwnProperty(ai("properties")))
    ) {
      const r = this.properties,
        i = [...iu(r), ...nu(r)];
      for (const n of i) this.createProperty(n, r[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0)
        for (const [i, n] of r) this.elementProperties.set(i, n);
    }
    this._$Eh = new Map();
    for (const [r, i] of this.elementProperties) {
      const n = this._$Eu(r, i);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i) r.unshift(ws(n));
    } else t !== void 0 && r.push(ws(t));
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
    return Zc(t, this.constructor.elementStyles), t;
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
      n = this.constructor._$Eu(t, i);
    if (n !== void 0 && i.reflect === !0) {
      const s = (
        ((o = i.converter) == null ? void 0 : o.toAttribute) !== void 0
          ? i.converter
          : Dr
      ).toAttribute(r, i.type);
      (this._$Em = t),
        s == null ? this.removeAttribute(n) : this.setAttribute(n, s),
        (this._$Em = null);
    }
  }
  _$AK(t, r) {
    var o;
    const i = this.constructor,
      n = i._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const s = i.getPropertyOptions(n),
        a =
          typeof s.converter == "function"
            ? { fromAttribute: s.converter }
            : ((o = s.converter) == null ? void 0 : o.fromAttribute) !== void 0
              ? s.converter
              : Dr;
      (this._$Em = n),
        (this[n] = a.fromAttribute(r, s.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, r, i) {
    if (t !== void 0) {
      if (
        (i ?? (i = this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? Oo)(this[t], r))
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
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0)
        for (const [o, s] of n)
          s.wrapped !== !0 ||
            this._$AL.has(o) ||
            this[o] === void 0 ||
            this.P(o, this[o], s);
    }
    let t = !1;
    const r = this._$AL;
    try {
      (t = this.shouldUpdate(r)),
        t
          ? (this.willUpdate(r),
            (i = this._$EO) == null ||
              i.forEach((n) => {
                var o;
                return (o = n.hostUpdate) == null ? void 0 : o.call(n);
              }),
            this.update(r))
          : this._$EU();
    } catch (n) {
      throw ((t = !1), this._$EU(), n);
    }
    t && this._$AE(r);
  }
  willUpdate(t) {}
  _$AE(t) {
    var r;
    (r = this._$EO) == null ||
      r.forEach((i) => {
        var n;
        return (n = i.hostUpdated) == null ? void 0 : n.call(i);
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
(vr.elementStyles = []),
  (vr.shadowRootOptions = { mode: "open" }),
  (vr[ai("elementProperties")] = new Map()),
  (vr[ai("finalized")] = new Map()),
  kn == null || kn({ ReactiveElement: vr }),
  (Mt.reactiveElementVersions ?? (Mt.reactiveElementVersions = [])).push(
    "2.0.4",
  );
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const li = globalThis,
  Ji = li.trustedTypes,
  ks = Ji ? Ji.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  il = "$lit$",
  Tt = `lit$${Math.random().toFixed(9).slice(2)}$`,
  nl = "?" + Tt,
  au = `<${nl}>`,
  lr = document,
  mi = () => lr.createComment(""),
  gi = (e) => e === null || (typeof e != "object" && typeof e != "function"),
  Lo = Array.isArray,
  lu = (e) =>
    Lo(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
  Sn = `[ 	
\f\r]`,
  Gr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Ss = /-->/g,
  Es = />/g,
  Qt = RegExp(
    `>|${Sn}(?:([^\\s"'>=/]+)(${Sn}*=${Sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g",
  ),
  $s = /'/g,
  Rs = /"/g,
  ol = /^(?:script|style|textarea|title)$/i,
  cu =
    (e) =>
    (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
  F = cu(1),
  Qe = Symbol.for("lit-noChange"),
  ie = Symbol.for("lit-nothing"),
  As = new WeakMap(),
  Jt = lr.createTreeWalker(lr, 129);
function sl(e, t) {
  if (!Lo(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ks !== void 0 ? ks.createHTML(t) : t;
}
const uu = (e, t) => {
  const r = e.length - 1,
    i = [];
  let n,
    o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "",
    s = Gr;
  for (let a = 0; a < r; a++) {
    const l = e[a];
    let c,
      d,
      u = -1,
      f = 0;
    for (; f < l.length && ((s.lastIndex = f), (d = s.exec(l)), d !== null); )
      (f = s.lastIndex),
        s === Gr
          ? d[1] === "!--"
            ? (s = Ss)
            : d[1] !== void 0
              ? (s = Es)
              : d[2] !== void 0
                ? (ol.test(d[2]) && (n = RegExp("</" + d[2], "g")), (s = Qt))
                : d[3] !== void 0 && (s = Qt)
          : s === Qt
            ? d[0] === ">"
              ? ((s = n ?? Gr), (u = -1))
              : d[1] === void 0
                ? (u = -2)
                : ((u = s.lastIndex - d[2].length),
                  (c = d[1]),
                  (s = d[3] === void 0 ? Qt : d[3] === '"' ? Rs : $s))
            : s === Rs || s === $s
              ? (s = Qt)
              : s === Ss || s === Es
                ? (s = Gr)
                : ((s = Qt), (n = void 0));
    const h = s === Qt && e[a + 1].startsWith("/>") ? " " : "";
    o +=
      s === Gr
        ? l + au
        : u >= 0
          ? (i.push(c), l.slice(0, u) + il + l.slice(u) + Tt + h)
          : l + Tt + (u === -2 ? a : h);
  }
  return [
    sl(
      e,
      o + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : ""),
    ),
    i,
  ];
};
let Gn = class al {
  constructor({ strings: t, _$litType$: r }, i) {
    let n;
    this.parts = [];
    let o = 0,
      s = 0;
    const a = t.length - 1,
      l = this.parts,
      [c, d] = uu(t, r);
    if (
      ((this.el = al.createElement(c, i)),
      (Jt.currentNode = this.el.content),
      r === 2 || r === 3)
    ) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (n = Jt.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes())
          for (const u of n.getAttributeNames())
            if (u.endsWith(il)) {
              const f = d[s++],
                h = n.getAttribute(u).split(Tt),
                p = /([.?@])?(.*)/.exec(f);
              l.push({
                type: 1,
                index: o,
                name: p[2],
                strings: h,
                ctor:
                  p[1] === "."
                    ? hu
                    : p[1] === "?"
                      ? pu
                      : p[1] === "@"
                        ? fu
                        : cn,
              }),
                n.removeAttribute(u);
            } else
              u.startsWith(Tt) &&
                (l.push({ type: 6, index: o }), n.removeAttribute(u));
        if (ol.test(n.tagName)) {
          const u = n.textContent.split(Tt),
            f = u.length - 1;
          if (f > 0) {
            n.textContent = Ji ? Ji.emptyScript : "";
            for (let h = 0; h < f; h++)
              n.append(u[h], mi()),
                Jt.nextNode(),
                l.push({ type: 2, index: ++o });
            n.append(u[f], mi());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === nl) l.push({ type: 2, index: o });
        else {
          let u = -1;
          for (; (u = n.data.indexOf(Tt, u + 1)) !== -1; )
            l.push({ type: 7, index: o }), (u += Tt.length - 1);
        }
      o++;
    }
  }
  static createElement(t, r) {
    const i = lr.createElement("template");
    return (i.innerHTML = t), i;
  }
};
function zr(e, t, r = e, i) {
  var s, a;
  if (t === Qe) return t;
  let n = i !== void 0 ? ((s = r._$Co) == null ? void 0 : s[i]) : r._$Cl;
  const o = gi(t) ? void 0 : t._$litDirective$;
  return (
    (n == null ? void 0 : n.constructor) !== o &&
      ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1),
      o === void 0 ? (n = void 0) : ((n = new o(e)), n._$AT(e, r, i)),
      i !== void 0 ? ((r._$Co ?? (r._$Co = []))[i] = n) : (r._$Cl = n)),
    n !== void 0 && (t = zr(e, n._$AS(e, t.values), n, i)),
    t
  );
}
let du = class {
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
        n = ((t == null ? void 0 : t.creationScope) ?? lr).importNode(r, !0);
      Jt.currentNode = n;
      let o = Jt.nextNode(),
        s = 0,
        a = 0,
        l = i[0];
      for (; l !== void 0; ) {
        if (s === l.index) {
          let c;
          l.type === 2
            ? (c = new Io(o, o.nextSibling, this, t))
            : l.type === 1
              ? (c = new l.ctor(o, l.name, l.strings, this, t))
              : l.type === 6 && (c = new mu(o, this, t)),
            this._$AV.push(c),
            (l = i[++a]);
        }
        s !== (l == null ? void 0 : l.index) && ((o = Jt.nextNode()), s++);
      }
      return (Jt.currentNode = lr), n;
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
  Io = class ll {
    get _$AU() {
      var t;
      return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
    }
    constructor(t, r, i, n) {
      (this.type = 2),
        (this._$AH = ie),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = r),
        (this._$AM = i),
        (this.options = n),
        (this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0);
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
      (t = zr(this, t, r)),
        gi(t)
          ? t === ie || t == null || t === ""
            ? (this._$AH !== ie && this._$AR(), (this._$AH = ie))
            : t !== this._$AH && t !== Qe && this._(t)
          : t._$litType$ !== void 0
            ? this.$(t)
            : t.nodeType !== void 0
              ? this.T(t)
              : lu(t)
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
      this._$AH !== ie && gi(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(lr.createTextNode(t)),
        (this._$AH = t);
    }
    $(t) {
      var o;
      const { values: r, _$litType$: i } = t,
        n =
          typeof i == "number"
            ? this._$AC(t)
            : (i.el === void 0 &&
                (i.el = Gn.createElement(sl(i.h, i.h[0]), this.options)),
              i);
      if (((o = this._$AH) == null ? void 0 : o._$AD) === n) this._$AH.p(r);
      else {
        const s = new du(n, this),
          a = s.u(this.options);
        s.p(r), this.T(a), (this._$AH = s);
      }
    }
    _$AC(t) {
      let r = As.get(t.strings);
      return r === void 0 && As.set(t.strings, (r = new Gn(t))), r;
    }
    k(t) {
      Lo(this._$AH) || ((this._$AH = []), this._$AR());
      const r = this._$AH;
      let i,
        n = 0;
      for (const o of t)
        n === r.length
          ? r.push((i = new ll(this.O(mi()), this.O(mi()), this, this.options)))
          : (i = r[n]),
          i._$AI(o),
          n++;
      n < r.length && (this._$AR(i && i._$AB.nextSibling, n), (r.length = n));
    }
    _$AR(t = this._$AA.nextSibling, r) {
      var i;
      for (
        (i = this._$AP) == null ? void 0 : i.call(this, !1, !0, r);
        t && t !== this._$AB;

      ) {
        const n = t.nextSibling;
        t.remove(), (t = n);
      }
    }
    setConnected(t) {
      var r;
      this._$AM === void 0 &&
        ((this._$Cv = t), (r = this._$AP) == null || r.call(this, t));
    }
  },
  cn = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, r, i, n, o) {
      (this.type = 1),
        (this._$AH = ie),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = r),
        (this._$AM = n),
        (this.options = o),
        i.length > 2 || i[0] !== "" || i[1] !== ""
          ? ((this._$AH = Array(i.length - 1).fill(new String())),
            (this.strings = i))
          : (this._$AH = ie);
    }
    _$AI(t, r = this, i, n) {
      const o = this.strings;
      let s = !1;
      if (o === void 0)
        (t = zr(this, t, r, 0)),
          (s = !gi(t) || (t !== this._$AH && t !== Qe)),
          s && (this._$AH = t);
      else {
        const a = t;
        let l, c;
        for (t = o[0], l = 0; l < o.length - 1; l++)
          (c = zr(this, a[i + l], r, l)),
            c === Qe && (c = this._$AH[l]),
            s || (s = !gi(c) || c !== this._$AH[l]),
            c === ie ? (t = ie) : t !== ie && (t += (c ?? "") + o[l + 1]),
            (this._$AH[l] = c);
      }
      s && !n && this.j(t);
    }
    j(t) {
      t === ie
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, t ?? "");
    }
  },
  hu = class extends cn {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(t) {
      this.element[this.name] = t === ie ? void 0 : t;
    }
  },
  pu = class extends cn {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== ie);
    }
  },
  fu = class extends cn {
    constructor(t, r, i, n, o) {
      super(t, r, i, n, o), (this.type = 5);
    }
    _$AI(t, r = this) {
      if ((t = zr(this, t, r, 0) ?? ie) === Qe) return;
      const i = this._$AH,
        n =
          (t === ie && i !== ie) ||
          t.capture !== i.capture ||
          t.once !== i.once ||
          t.passive !== i.passive,
        o = t !== ie && (i === ie || n);
      n && this.element.removeEventListener(this.name, this, i),
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
  mu = class {
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
      zr(this, t);
    }
  };
const En = li.litHtmlPolyfillSupport;
En == null || En(Gn, Io),
  (li.litHtmlVersions ?? (li.litHtmlVersions = [])).push("3.2.1");
const gu = (e, t, r) => {
  const i = (r == null ? void 0 : r.renderBefore) ?? t;
  let n = i._$litPart$;
  if (n === void 0) {
    const o = (r == null ? void 0 : r.renderBefore) ?? null;
    i._$litPart$ = n = new Io(t.insertBefore(mi(), o), o, void 0, r ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let ci = class extends vr {
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
      (this._$Do = gu(r, this.renderRoot, this.renderOptions));
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
    return Qe;
  }
};
var Ia;
(ci._$litElement$ = !0),
  (ci.finalized = !0),
  (Ia = globalThis.litElementHydrateSupport) == null ||
    Ia.call(globalThis, { LitElement: ci });
const $n = globalThis.litElementPolyfillSupport;
$n == null || $n({ LitElement: ci });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push(
  "4.1.1",
);
var vu = te`
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
`;
const Yn = new Set(),
  yr = new Map();
let Xt,
  No = "ltr",
  Fo = "en";
const cl =
  typeof MutationObserver < "u" &&
  typeof document < "u" &&
  typeof document.documentElement < "u";
if (cl) {
  const e = new MutationObserver(dl);
  (No = document.documentElement.dir || "ltr"),
    (Fo = document.documentElement.lang || navigator.language),
    e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["dir", "lang"],
    });
}
function ul(...e) {
  e.map((t) => {
    const r = t.$code.toLowerCase();
    yr.has(r)
      ? yr.set(r, Object.assign(Object.assign({}, yr.get(r)), t))
      : yr.set(r, t),
      Xt || (Xt = t);
  }),
    dl();
}
function dl() {
  cl &&
    ((No = document.documentElement.dir || "ltr"),
    (Fo = document.documentElement.lang || navigator.language)),
    [...Yn.keys()].map((e) => {
      typeof e.requestUpdate == "function" && e.requestUpdate();
    });
}
let yu = class {
  constructor(t) {
    (this.host = t), this.host.addController(this);
  }
  hostConnected() {
    Yn.add(this.host);
  }
  hostDisconnected() {
    Yn.delete(this.host);
  }
  dir() {
    return `${this.host.dir || No}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || Fo}`.toLowerCase();
  }
  getTranslationData(t) {
    var r, i;
    const n = new Intl.Locale(t.replace(/_/g, "-")),
      o = n == null ? void 0 : n.language.toLowerCase(),
      s =
        (i =
          (r = n == null ? void 0 : n.region) === null || r === void 0
            ? void 0
            : r.toLowerCase()) !== null && i !== void 0
          ? i
          : "",
      a = yr.get(`${o}-${s}`),
      l = yr.get(o);
    return { locale: n, language: o, region: s, primary: a, secondary: l };
  }
  exists(t, r) {
    var i;
    const { primary: n, secondary: o } = this.getTranslationData(
      (i = r.lang) !== null && i !== void 0 ? i : this.lang(),
    );
    return (
      (r = Object.assign({ includeFallback: !1 }, r)),
      !!((n && n[t]) || (o && o[t]) || (r.includeFallback && Xt && Xt[t]))
    );
  }
  term(t, ...r) {
    const { primary: i, secondary: n } = this.getTranslationData(this.lang());
    let o;
    if (i && i[t]) o = i[t];
    else if (n && n[t]) o = n[t];
    else if (Xt && Xt[t]) o = Xt[t];
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
var hl = {
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
ul(hl);
var bu = hl,
  Ue = class extends yu {};
ul(bu);
var oe = te`
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
`,
  pl = Object.defineProperty,
  _u = Object.defineProperties,
  wu = Object.getOwnPropertyDescriptor,
  xu = Object.getOwnPropertyDescriptors,
  Ps = Object.getOwnPropertySymbols,
  Cu = Object.prototype.hasOwnProperty,
  ku = Object.prototype.propertyIsEnumerable,
  Rn = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  Do = (e) => {
    throw TypeError(e);
  },
  Ts = (e, t, r) =>
    t in e
      ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  hr = (e, t) => {
    for (var r in t || (t = {})) Cu.call(t, r) && Ts(e, r, t[r]);
    if (Ps) for (var r of Ps(t)) ku.call(t, r) && Ts(e, r, t[r]);
    return e;
  },
  un = (e, t) => _u(e, xu(t)),
  m = (e, t, r, i) => {
    for (
      var n = i > 1 ? void 0 : i ? wu(t, r) : t, o = e.length - 1, s;
      o >= 0;
      o--
    )
      (s = e[o]) && (n = (i ? s(t, r, n) : s(n)) || n);
    return i && n && pl(t, r, n), n;
  },
  fl = (e, t, r) => t.has(e) || Do("Cannot " + r),
  Su = (e, t, r) => (fl(e, t, "read from private field"), t.get(e)),
  Eu = (e, t, r) =>
    t.has(e)
      ? Do("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  $u = (e, t, r, i) => (fl(e, t, "write to private field"), t.set(e, r), r),
  Ru = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  Au = (e) => {
    var t = e[Rn("asyncIterator")],
      r = !1,
      i,
      n = {};
    return (
      t == null
        ? ((t = e[Rn("iterator")]()), (i = (o) => (n[o] = (s) => t[o](s))))
        : ((t = t.call(e)),
          (i = (o) =>
            (n[o] = (s) => {
              if (r) {
                if (((r = !1), o === "throw")) throw s;
                return s;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new Ru(
                    new Promise((a) => {
                      var l = t[o](s);
                      l instanceof Object || Do("Object expected"), a(l);
                    }),
                    1,
                  ),
                }
              );
            }))),
      (n[Rn("iterator")] = () => n),
      i("next"),
      "throw" in t
        ? i("throw")
        : (n.throw = (o) => {
            throw o;
          }),
      "return" in t && i("return"),
      n
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Pu = {
    attribute: !0,
    type: String,
    converter: Dr,
    reflect: !1,
    hasChanged: Oo,
  },
  Tu = (e = Pu, t, r) => {
    const { kind: i, metadata: n } = r;
    let o = globalThis.litPropertyMetadata.get(n);
    if (
      (o === void 0 && globalThis.litPropertyMetadata.set(n, (o = new Map())),
      o.set(r.name, e),
      i === "accessor")
    ) {
      const { name: s } = r;
      return {
        set(a) {
          const l = t.get.call(this);
          t.set.call(this, a), this.requestUpdate(s, l, e);
        },
        init(a) {
          return a !== void 0 && this.P(s, void 0, e), a;
        },
      };
    }
    if (i === "setter") {
      const { name: s } = r;
      return function (a) {
        const l = this[s];
        t.call(this, a), this.requestUpdate(s, l, e);
      };
    }
    throw Error("Unsupported decorator location: " + i);
  };
function _(e) {
  return (t, r) =>
    typeof r == "object"
      ? Tu(e, t, r)
      : ((i, n, o) => {
          const s = n.hasOwnProperty(o);
          return (
            n.constructor.createProperty(o, s ? { ...i, wrapped: !0 } : i),
            s ? Object.getOwnPropertyDescriptor(n, o) : void 0
          );
        })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function Je(e) {
  return _({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ou = (e, t, r) => (
  (r.configurable = !0),
  (r.enumerable = !0),
  Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, r),
  r
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function q(e, t) {
  return (r, i, n) => {
    const o = (s) => {
      var a;
      return ((a = s.renderRoot) == null ? void 0 : a.querySelector(e)) ?? null;
    };
    return Ou(r, i, {
      get() {
        return o(this);
      },
    });
  };
}
var qi,
  Q = class extends ci {
    constructor() {
      super(),
        Eu(this, qi, !1),
        (this.initialReflectedProperties = new Map()),
        Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
          this.constructor.define(e, t);
        });
    }
    emit(e, t) {
      const r = new CustomEvent(
        e,
        hr({ bubbles: !0, cancelable: !1, composed: !0, detail: {} }, t),
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
      let n = " (unknown version)",
        o = n;
      "version" in t && t.version && (n = " v" + t.version),
        "version" in i && i.version && (o = " v" + i.version),
        !(n && o && n === o) &&
          console.warn(
            `Attempted to register <${e}>${n}, but <${e}>${o} has already been registered.`,
          );
    }
    attributeChangedCallback(e, t, r) {
      Su(this, qi) ||
        (this.constructor.elementProperties.forEach((i, n) => {
          i.reflect &&
            this[n] != null &&
            this.initialReflectedProperties.set(n, this[n]);
        }),
        $u(this, qi, !0)),
        super.attributeChangedCallback(e, t, r);
    }
    willUpdate(e) {
      super.willUpdate(e),
        this.initialReflectedProperties.forEach((t, r) => {
          e.has(r) && this[r] == null && (this[r] = t);
        });
    }
  };
qi = new WeakMap();
Q.version = "2.20.0";
Q.dependencies = {};
m([_()], Q.prototype, "dir", 2);
m([_()], Q.prototype, "lang", 2);
var Ei = class extends Q {
  constructor() {
    super(...arguments), (this.localize = new Ue(this));
  }
  render() {
    return F`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
Ei.styles = [oe, vu];
var xt,
  W,
  An,
  Os,
  Mr = 0,
  ml = [],
  J = O,
  Ls = J.__b,
  Is = J.__r,
  Ns = J.diffed,
  Fs = J.__c,
  Ds = J.unmount,
  zs = J.__;
function pr(e, t) {
  J.__h && J.__h(W, e, Mr || t), (Mr = 0);
  var r = W.__H || (W.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function Y(e) {
  return (Mr = 1), dn(gl, e);
}
function dn(e, t, r) {
  var i = pr(xt++, 2);
  if (
    ((i.t = e),
    !i.__c &&
      ((i.__ = [
        r ? r(t) : gl(void 0, t),
        function (a) {
          var l = i.__N ? i.__N[0] : i.__[0],
            c = i.t(l, a);
          l !== c && ((i.__N = [c, i.__[1]]), i.__c.setState({}));
        },
      ]),
      (i.__c = W),
      !W.u))
  ) {
    var n = function (a, l, c) {
      if (!i.__c.__H) return !0;
      var d = i.__c.__H.__.filter(function (f) {
        return !!f.__c;
      });
      if (
        d.every(function (f) {
          return !f.__N;
        })
      )
        return !o || o.call(this, a, l, c);
      var u = i.__c.props !== a;
      return (
        d.forEach(function (f) {
          if (f.__N) {
            var h = f.__[0];
            (f.__ = f.__N), (f.__N = void 0), h !== f.__[0] && (u = !0);
          }
        }),
        (o && o.call(this, a, l, c)) || u
      );
    };
    W.u = !0;
    var o = W.shouldComponentUpdate,
      s = W.componentWillUpdate;
    (W.componentWillUpdate = function (a, l, c) {
      if (this.__e) {
        var d = o;
        (o = void 0), n(a, l, c), (o = d);
      }
      s && s.call(this, a, l, c);
    }),
      (W.shouldComponentUpdate = n);
  }
  return i.__N || i.__;
}
function Ie(e, t) {
  var r = pr(xt++, 3);
  !J.__s && Ho(r.__H, t) && ((r.__ = e), (r.i = t), W.__H.__h.push(r));
}
function jt(e, t) {
  var r = pr(xt++, 4);
  !J.__s && Ho(r.__H, t) && ((r.__ = e), (r.i = t), W.__h.push(r));
}
function Se(e) {
  return (
    (Mr = 5),
    ze(function () {
      return { current: e };
    }, [])
  );
}
function zo(e, t, r) {
  (Mr = 6),
    jt(
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
function ze(e, t) {
  var r = pr(xt++, 7);
  return Ho(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
}
function kt(e, t) {
  return (
    (Mr = 8),
    ze(function () {
      return e;
    }, t)
  );
}
function U(e) {
  var t = W.context[e.__c],
    r = pr(xt++, 9);
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(W)), t.props.value) : e.__
  );
}
function Mo(e, t) {
  J.useDebugValue && J.useDebugValue(t ? t(e) : e);
}
function Lu(e) {
  var t = pr(xt++, 10),
    r = Y();
  return (
    (t.__ = e),
    W.componentDidCatch ||
      (W.componentDidCatch = function (i, n) {
        t.__ && t.__(i, n), r[1](i);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function Uo() {
  var e = pr(xt++, 11);
  if (!e.__) {
    for (var t = W.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Iu() {
  for (var e; (e = ml.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ji), e.__H.__h.forEach(Xn), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), J.__e(t, e.__v);
      }
}
(J.__b = function (e) {
  (W = null), Ls && Ls(e);
}),
  (J.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), zs && zs(e, t);
  }),
  (J.__r = function (e) {
    Is && Is(e), (xt = 0);
    var t = (W = e.__c).__H;
    t &&
      (An === W
        ? ((t.__h = []),
          (W.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.i = r.__N = void 0);
          }))
        : (t.__h.forEach(ji), t.__h.forEach(Xn), (t.__h = []), (xt = 0))),
      (An = W);
  }),
  (J.diffed = function (e) {
    Ns && Ns(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((ml.push(t) !== 1 && Os === J.requestAnimationFrame) ||
          ((Os = J.requestAnimationFrame) || Nu)(Iu)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i), (r.i = void 0);
      })),
      (An = W = null);
  }),
  (J.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(ji),
          (r.__h = r.__h.filter(function (i) {
            return !i.__ || Xn(i);
          }));
      } catch (i) {
        t.some(function (n) {
          n.__h && (n.__h = []);
        }),
          (t = []),
          J.__e(i, r.__v);
      }
    }),
      Fs && Fs(e, t);
  }),
  (J.unmount = function (e) {
    Ds && Ds(e);
    var t,
      r = e.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (i) {
        try {
          ji(i);
        } catch (n) {
          t = n;
        }
      }),
      (r.__H = void 0),
      t && J.__e(t, r.__v));
  });
var Ms = typeof requestAnimationFrame == "function";
function Nu(e) {
  var t,
    r = function () {
      clearTimeout(i), Ms && cancelAnimationFrame(t), setTimeout(e);
    },
    i = setTimeout(r, 100);
  Ms && (t = requestAnimationFrame(r));
}
function ji(e) {
  var t = W,
    r = e.__c;
  typeof r == "function" && ((e.__c = void 0), r()), (W = t);
}
function Xn(e) {
  var t = W;
  (e.__c = e.__()), (W = t);
}
function Ho(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, i) {
      return r !== e[i];
    })
  );
}
function gl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vl(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Jn(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var i in t) if (i !== "__source" && e[i] !== t[i]) return !0;
  return !1;
}
function hn(e, t) {
  var r = t(),
    i = Y({ t: { __: r, u: t } }),
    n = i[0].t,
    o = i[1];
  return (
    jt(
      function () {
        (n.__ = r), (n.u = t), Pn(n) && o({ t: n });
      },
      [e, r, t],
    ),
    Ie(
      function () {
        return (
          Pn(n) && o({ t: n }),
          e(function () {
            Pn(n) && o({ t: n });
          })
        );
      },
      [e],
    ),
    r
  );
}
function Pn(e) {
  var t,
    r,
    i = e.u,
    n = e.__;
  try {
    var o = i();
    return !(
      ((t = n) === (r = o) && (t !== 0 || 1 / t == 1 / r)) ||
      (t != t && r != r)
    );
  } catch {
    return !0;
  }
}
function pn(e) {
  e();
}
function Bo(e) {
  return e;
}
function Vo() {
  return [!1, pn];
}
var qo = jt;
function Zi(e, t) {
  (this.props = e), (this.context = t);
}
function jo(e, t) {
  function r(n) {
    var o = this.props.ref,
      s = o == n.ref;
    return (
      !s && o && (o.call ? o(null) : (o.current = null)),
      t ? !t(this.props, n) || !s : Jn(this.props, n)
    );
  }
  function i(n) {
    return (this.shouldComponentUpdate = r), I(e, n);
  }
  return (
    (i.displayName = "Memo(" + (e.displayName || e.name) + ")"),
    (i.prototype.isReactComponent = !0),
    (i.__f = !0),
    i
  );
}
((Zi.prototype = new qe()).isPureReactComponent = !0),
  (Zi.prototype.shouldComponentUpdate = function (e, t) {
    return Jn(this.props, e) || Jn(this.state, t);
  });
var Us = O.__b;
O.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Us && Us(e);
};
var Fu =
  (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function $i(e) {
  function t(r) {
    var i = vl({}, r);
    return delete i.ref, e(i, r.ref || null);
  }
  return (
    (t.$$typeof = Fu),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var Hs = function (e, t) {
    return e == null ? null : _t(_t(e).map(t));
  },
  Wo = {
    map: Hs,
    forEach: Hs,
    count: function (e) {
      return e ? _t(e).length : 0;
    },
    only: function (e) {
      var t = _t(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: _t,
  },
  Du = O.__e;
O.__e = function (e, t, r, i) {
  if (e.then) {
    for (var n, o = t; (o = o.__); )
      if ((n = o.__c) && n.__c)
        return t.__e == null && ((t.__e = r.__e), (t.__k = r.__k)), n.__c(e, t);
  }
  Du(e, t, r, i);
};
var Bs = O.unmount;
function yl(e, t, r) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (i) {
          typeof i.__c == "function" && i.__c();
        }),
        (e.__c.__H = null)),
      (e = vl({}, e)).__c != null &&
        (e.__c.__P === r && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (i) {
          return yl(i, t, r);
        }))),
    e
  );
}
function bl(e, t, r) {
  return (
    e &&
      r &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (i) {
          return bl(i, t, r);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && r.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = r))),
    e
  );
}
function ui() {
  (this.__u = 0), (this.o = null), (this.__b = null);
}
function _l(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function wl(e) {
  var t, r, i;
  function n(o) {
    if (
      (t ||
        (t = e()).then(
          function (s) {
            r = s.default || s;
          },
          function (s) {
            i = s;
          },
        ),
      i)
    )
      throw i;
    if (!r) throw t;
    return I(r, o);
  }
  return (n.displayName = "Lazy"), (n.__f = !0), n;
}
function br() {
  (this.i = null), (this.l = null);
}
(O.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Bs && Bs(e);
}),
  ((ui.prototype = new qe()).__c = function (e, t) {
    var r = t.__c,
      i = this;
    i.o == null && (i.o = []), i.o.push(r);
    var n = _l(i.__v),
      o = !1,
      s = function () {
        o || ((o = !0), (r.__R = null), n ? n(a) : a());
      };
    r.__R = s;
    var a = function () {
      if (!--i.__u) {
        if (i.state.__a) {
          var l = i.state.__a;
          i.__v.__k[0] = bl(l, l.__c.__P, l.__c.__O);
        }
        var c;
        for (i.setState({ __a: (i.__b = null) }); (c = i.o.pop()); )
          c.forceUpdate();
      }
    };
    i.__u++ || 32 & t.__u || i.setState({ __a: (i.__b = i.__v.__k[0]) }),
      e.then(s, s);
  }),
  (ui.prototype.componentWillUnmount = function () {
    this.o = [];
  }),
  (ui.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          i = this.__v.__k[0].__c;
        this.__v.__k[0] = yl(this.__b, r, (i.__O = i.__P));
      }
      this.__b = null;
    }
    var n = t.__a && I(ve, null, e.fallback);
    return n && (n.__u &= -33), [I(ve, null, t.__a ? null : e.children), n];
  });
var Vs = function (e, t, r) {
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
function zu(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Mu(e) {
  var t = this,
    r = e.h;
  (t.componentWillUnmount = function () {
    Fr(null, t.v), (t.v = null), (t.h = null);
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
        insertBefore: function (i, n) {
          this.childNodes.push(i), t.h.insertBefore(i, n);
        },
        removeChild: function (i) {
          this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1),
            t.h.removeChild(i);
        },
      })),
    Fr(I(zu, { context: t.context }, e.__v), t.v);
}
function xl(e, t) {
  var r = I(Mu, { __v: e, h: t });
  return (r.containerInfo = t), r;
}
((br.prototype = new qe()).__a = function (e) {
  var t = this,
    r = _l(t.__v),
    i = t.l.get(e);
  return (
    i[0]++,
    function (n) {
      var o = function () {
        t.props.revealOrder ? (i.push(n), Vs(t, e, i)) : n();
      };
      r ? r(o) : o();
    }
  );
}),
  (br.prototype.render = function (e) {
    (this.i = null), (this.l = new Map());
    var t = _t(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--; ) this.l.set(t[r], (this.i = [1, 0, this.i]));
    return e.children;
  }),
  (br.prototype.componentDidUpdate = br.prototype.componentDidMount =
    function () {
      var e = this;
      this.l.forEach(function (t, r) {
        Vs(e, r, t);
      });
    });
var Cl =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  Uu =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Hu = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Bu = /[A-Z0-9]/g,
  Vu = typeof document < "u",
  qu = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function kl(e, t, r) {
  return (
    t.__k == null && (t.textContent = ""),
    Fr(e, t),
    typeof r == "function" && r(),
    e ? e.__c : null
  );
}
function Sl(e, t, r) {
  return tl(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
(qe.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(qe.prototype, e, {
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
var qs = O.event;
function ju() {}
function Wu() {
  return this.cancelBubble;
}
function Ku() {
  return this.defaultPrevented;
}
O.event = function (e) {
  return (
    qs && (e = qs(e)),
    (e.persist = ju),
    (e.isPropagationStopped = Wu),
    (e.isDefaultPrevented = Ku),
    (e.nativeEvent = e)
  );
};
var Ko,
  Qu = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  js = O.vnode;
O.vnode = function (e) {
  typeof e.type == "string" &&
    (function (t) {
      var r = t.props,
        i = t.type,
        n = {},
        o = i.indexOf("-") === -1;
      for (var s in r) {
        var a = r[s];
        if (
          !(
            (s === "value" && "defaultValue" in r && a == null) ||
            (Vu && s === "children" && i === "noscript") ||
            s === "class" ||
            s === "className"
          )
        ) {
          var l = s.toLowerCase();
          s === "defaultValue" && "value" in r && r.value == null
            ? (s = "value")
            : s === "download" && a === !0
              ? (a = "")
              : l === "translate" && a === "no"
                ? (a = !1)
                : l[0] === "o" && l[1] === "n"
                  ? l === "ondoubleclick"
                    ? (s = "ondblclick")
                    : l !== "onchange" ||
                        (i !== "input" && i !== "textarea") ||
                        qu(r.type)
                      ? l === "onfocus"
                        ? (s = "onfocusin")
                        : l === "onblur"
                          ? (s = "onfocusout")
                          : Hu.test(s) && (s = l)
                      : (l = s = "oninput")
                  : o && Uu.test(s)
                    ? (s = s.replace(Bu, "-$&").toLowerCase())
                    : a === null && (a = void 0),
            l === "oninput" && n[(s = l)] && (s = "oninputCapture"),
            (n[s] = a);
        }
      }
      i == "select" &&
        n.multiple &&
        Array.isArray(n.value) &&
        (n.value = _t(r.children).forEach(function (c) {
          c.props.selected = n.value.indexOf(c.props.value) != -1;
        })),
        i == "select" &&
          n.defaultValue != null &&
          (n.value = _t(r.children).forEach(function (c) {
            c.props.selected = n.multiple
              ? n.defaultValue.indexOf(c.props.value) != -1
              : n.defaultValue == c.props.value;
          })),
        r.class && !r.className
          ? ((n.class = r.class), Object.defineProperty(n, "className", Qu))
          : ((r.className && !r.class) || (r.class && r.className)) &&
            (n.class = n.className = r.className),
        (t.props = n);
    })(e),
    (e.$$typeof = Cl),
    js && js(e);
};
var Ws = O.__r;
O.__r = function (e) {
  Ws && Ws(e), (Ko = e.__c);
};
var Ks = O.diffed;
O.diffed = function (e) {
  Ks && Ks(e);
  var t = e.props,
    r = e.__e;
  r != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== r.value &&
    (r.value = t.value == null ? "" : t.value),
    (Ko = null);
};
var El = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return Ko.__n[e.__c].props.value;
        },
        useCallback: kt,
        useContext: U,
        useDebugValue: Mo,
        useDeferredValue: Bo,
        useEffect: Ie,
        useId: Uo,
        useImperativeHandle: zo,
        useInsertionEffect: qo,
        useLayoutEffect: jt,
        useMemo: ze,
        useReducer: dn,
        useRef: Se,
        useState: Y,
        useSyncExternalStore: hn,
        useTransition: Vo,
      },
    },
  },
  Gu = "18.3.1";
function $l(e) {
  return I.bind(null, e);
}
function Hr(e) {
  return !!e && e.$$typeof === Cl;
}
function Rl(e) {
  return Hr(e) && e.type === ve;
}
function Al(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function Pl(e) {
  return Hr(e) ? Yc.apply(null, arguments) : e;
}
function Tl(e) {
  return !!e.__k && (Fr(null, e), !0);
}
function Ol(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var Ll = function (e, t) {
    return e(t);
  },
  Il = function (e, t) {
    return e(t);
  },
  Nl = ve,
  Fl = Hr,
  Zn = {
    useState: Y,
    useId: Uo,
    useReducer: dn,
    useEffect: Ie,
    useLayoutEffect: jt,
    useInsertionEffect: qo,
    useTransition: Vo,
    useDeferredValue: Bo,
    useSyncExternalStore: hn,
    startTransition: pn,
    useRef: Se,
    useImperativeHandle: zo,
    useMemo: ze,
    useCallback: kt,
    useContext: U,
    useDebugValue: Mo,
    version: "18.3.1",
    Children: Wo,
    render: kl,
    hydrate: Sl,
    unmountComponentAtNode: Tl,
    createPortal: xl,
    createElement: I,
    createContext: Ee,
    createFactory: $l,
    cloneElement: Pl,
    createRef: Ga,
    Fragment: ve,
    isValidElement: Hr,
    isElement: Fl,
    isFragment: Rl,
    isMemo: Al,
    findDOMNode: Ol,
    Component: qe,
    PureComponent: Zi,
    memo: jo,
    forwardRef: $i,
    flushSync: Il,
    unstable_batchedUpdates: Ll,
    StrictMode: Nl,
    Suspense: ui,
    SuspenseList: br,
    lazy: wl,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: El,
  };
const ce = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Children: Wo,
      Component: qe,
      Fragment: ve,
      PureComponent: Zi,
      StrictMode: Nl,
      Suspense: ui,
      SuspenseList: br,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: El,
      cloneElement: Pl,
      createContext: Ee,
      createElement: I,
      createFactory: $l,
      createPortal: xl,
      createRef: Ga,
      default: Zn,
      findDOMNode: Ol,
      flushSync: Il,
      forwardRef: $i,
      hydrate: Sl,
      isElement: Fl,
      isFragment: Rl,
      isMemo: Al,
      isValidElement: Hr,
      lazy: wl,
      memo: jo,
      render: kl,
      startTransition: pn,
      unmountComponentAtNode: Tl,
      unstable_batchedUpdates: Ll,
      useCallback: kt,
      useContext: U,
      useDebugValue: Mo,
      useDeferredValue: Bo,
      useEffect: Ie,
      useErrorBoundary: Lu,
      useId: Uo,
      useImperativeHandle: zo,
      useInsertionEffect: qo,
      useLayoutEffect: jt,
      useMemo: ze,
      useReducer: dn,
      useRef: Se,
      useState: Y,
      useSyncExternalStore: hn,
      useTransition: Vo,
      version: Gu,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Yu = new Set(["children", "localName", "ref", "style", "className"]),
  Qs = new WeakMap(),
  Gs = (e, t, r, i, n) => {
    const o = n == null ? void 0 : n[t];
    o === void 0
      ? ((e[t] = r),
        r == null && t in HTMLElement.prototype && e.removeAttribute(t))
      : r !== i &&
        ((s, a, l) => {
          let c = Qs.get(s);
          c === void 0 && Qs.set(s, (c = new Map()));
          let d = c.get(a);
          l !== void 0
            ? d === void 0
              ? (c.set(a, (d = { handleEvent: l })), s.addEventListener(a, d))
              : (d.handleEvent = l)
            : d !== void 0 && (c.delete(a), s.removeEventListener(a, d));
        })(e, o, r);
  },
  ue = ({
    react: e,
    tagName: t,
    elementClass: r,
    events: i,
    displayName: n,
  }) => {
    const o = new Set(Object.keys(i ?? {})),
      s = e.forwardRef((a, l) => {
        const c = e.useRef(new Map()),
          d = e.useRef(null),
          u = {},
          f = {};
        for (const [h, p] of Object.entries(a))
          Yu.has(h)
            ? (u[h === "className" ? "class" : h] = p)
            : o.has(h) || h in r.prototype
              ? (f[h] = p)
              : (u[h] = p);
        return (
          e.useLayoutEffect(() => {
            if (d.current === null) return;
            const h = new Map();
            for (const p in f)
              Gs(d.current, p, a[p], c.current.get(p), i),
                c.current.delete(p),
                h.set(p, a[p]);
            for (const [p, w] of c.current) Gs(d.current, p, void 0, w, i);
            c.current = h;
          }),
          e.useLayoutEffect(() => {
            var h;
            (h = d.current) == null || h.removeAttribute("defer-hydration");
          }, []),
          (u.suppressHydrationWarning = !0),
          e.createElement(t, {
            ...u,
            ref: e.useCallback(
              (h) => {
                (d.current = h),
                  typeof l == "function" ? l(h) : l !== null && (l.current = h);
              },
              [l],
            ),
          })
        );
      });
    return (s.displayName = n ?? r.name), s;
  };
var Xu = "sl-spinner";
Ei.define("sl-spinner");
var Ju = ue({
    tagName: Xu,
    elementClass: Ei,
    react: ce,
    events: {},
    displayName: "SlSpinner",
  }),
  Zu = Ju,
  Ri = class {
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
  cr = typeof window > "u" || "Deno" in globalThis;
function Ve() {}
function ed(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function eo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Dl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function _r(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ys(e, t) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: n,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (i) {
      if (t.queryHash !== Qo(s, t.options)) return !1;
    } else if (!yi(t.queryKey, s)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (n && n !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Xs(e, t) {
  const { exact: r, status: i, predicate: n, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (vi(t.options.mutationKey) !== vi(o)) return !1;
    } else if (!yi(t.options.mutationKey, o)) return !1;
  }
  return !((i && t.state.status !== i) || (n && !n(t)));
}
function Qo(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || vi)(e);
}
function vi(e) {
  return JSON.stringify(e, (t, r) =>
    ro(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, n) => ((i[n] = r[n]), i), {})
      : r,
  );
}
function yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((r) => yi(e[r], t[r]))
        : !1;
}
function zl(e, t) {
  if (e === t) return e;
  const r = Js(e) && Js(t);
  if (r || (ro(e) && ro(t))) {
    const i = r ? e : Object.keys(e),
      n = i.length,
      o = r ? t : Object.keys(t),
      s = o.length,
      a = r ? [] : {};
    let l = 0;
    for (let c = 0; c < s; c++) {
      const d = r ? c : o[c];
      ((!r && i.includes(d)) || r) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = zl(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return n === s && l === n ? e : a;
  }
  return t;
}
function to(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Js(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ro(e) {
  if (!Zs(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Zs(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Zs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function td(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function io(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? zl(e, t)
      : t;
}
function rd(e, t, r = 0) {
  const i = [...e, t];
  return r && i.length > r ? i.slice(1) : i;
}
function id(e, t, r = 0) {
  const i = [t, ...e];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var Br = Symbol();
function Ml(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Br
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var er,
  Ot,
  xr,
  Na,
  nd =
    ((Na = class extends Ri {
      constructor() {
        super();
        T(this, er);
        T(this, Ot);
        T(this, xr);
        $(this, xr, (t) => {
          if (!cr && window.addEventListener) {
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
        v(this, Ot) || this.setEventListener(v(this, xr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = v(this, Ot)) == null || t.call(this), $(this, Ot, void 0));
      }
      setEventListener(t) {
        var r;
        $(this, xr, t),
          (r = v(this, Ot)) == null || r.call(this),
          $(
            this,
            Ot,
            t((i) => {
              typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            }),
          );
      }
      setFocused(t) {
        v(this, er) !== t && ($(this, er, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof v(this, er) == "boolean"
          ? v(this, er)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (er = new WeakMap()),
    (Ot = new WeakMap()),
    (xr = new WeakMap()),
    Na),
  Go = new nd(),
  Cr,
  Lt,
  kr,
  Fa,
  od =
    ((Fa = class extends Ri {
      constructor() {
        super();
        T(this, Cr, !0);
        T(this, Lt);
        T(this, kr);
        $(this, kr, (t) => {
          if (!cr && window.addEventListener) {
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
        v(this, Lt) || this.setEventListener(v(this, kr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = v(this, Lt)) == null || t.call(this), $(this, Lt, void 0));
      }
      setEventListener(t) {
        var r;
        $(this, kr, t),
          (r = v(this, Lt)) == null || r.call(this),
          $(this, Lt, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        v(this, Cr) !== t &&
          ($(this, Cr, t),
          this.listeners.forEach((i) => {
            i(t);
          }));
      }
      isOnline() {
        return v(this, Cr);
      }
    }),
    (Cr = new WeakMap()),
    (Lt = new WeakMap()),
    (kr = new WeakMap()),
    Fa),
  en = new od();
function no() {
  let e, t;
  const r = new Promise((n, o) => {
    (e = n), (t = o);
  });
  (r.status = "pending"), r.catch(() => {});
  function i(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (n) => {
      i({ status: "fulfilled", value: n }), e(n);
    }),
    (r.reject = (n) => {
      i({ status: "rejected", reason: n }), t(n);
    }),
    r
  );
}
function sd(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ul(e) {
  return (e ?? "online") === "online" ? en.isOnline() : !0;
}
var Hl = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Tn(e) {
  return e instanceof Hl;
}
function Bl(e) {
  let t = !1,
    r = 0,
    i = !1,
    n;
  const o = no(),
    s = (w) => {
      var b;
      i || (f(new Hl(w)), (b = e.abort) == null || b.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      Go.isFocused() &&
      (e.networkMode === "always" || en.isOnline()) &&
      e.canRun(),
    d = () => Ul(e.networkMode) && e.canRun(),
    u = (w) => {
      var b;
      i ||
        ((i = !0),
        (b = e.onSuccess) == null || b.call(e, w),
        n == null || n(),
        o.resolve(w));
    },
    f = (w) => {
      var b;
      i ||
        ((i = !0),
        (b = e.onError) == null || b.call(e, w),
        n == null || n(),
        o.reject(w));
    },
    h = () =>
      new Promise((w) => {
        var b;
        (n = (y) => {
          (i || c()) && w(y);
        }),
          (b = e.onPause) == null || b.call(e);
      }).then(() => {
        var w;
        (n = void 0), i || (w = e.onContinue) == null || w.call(e);
      }),
    p = () => {
      if (i) return;
      let w;
      const b = r === 0 ? e.initialPromise : void 0;
      try {
        w = b ?? e.fn();
      } catch (y) {
        w = Promise.reject(y);
      }
      Promise.resolve(w)
        .then(u)
        .catch((y) => {
          var A;
          if (i) return;
          const x = e.retry ?? (cr ? 0 : 3),
            C = e.retryDelay ?? sd,
            k = typeof C == "function" ? C(r, y) : C,
            S =
              x === !0 ||
              (typeof x == "number" && r < x) ||
              (typeof x == "function" && x(r, y));
          if (t || !S) {
            f(y);
            return;
          }
          r++,
            (A = e.onFail) == null || A.call(e, r, y),
            td(k)
              .then(() => (c() ? void 0 : h()))
              .then(() => {
                t ? f(y) : p();
              });
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (n == null || n(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? p() : h().then(p), o),
  };
}
var ad = (e) => setTimeout(e, 0);
function ld() {
  let e = [],
    t = 0,
    r = (a) => {
      a();
    },
    i = (a) => {
      a();
    },
    n = ad;
  const o = (a) => {
      t
        ? e.push(a)
        : n(() => {
            r(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          n(() => {
            i(() => {
              a.forEach((l) => {
                r(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      i = a;
    },
    setScheduler: (a) => {
      n = a;
    },
  };
}
var be = ld(),
  tr,
  Da,
  Vl =
    ((Da = class {
      constructor() {
        T(this, tr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          eo(this.gcTime) &&
            $(
              this,
              tr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (cr ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        v(this, tr) && (clearTimeout(v(this, tr)), $(this, tr, void 0));
      }
    }),
    (tr = new WeakMap()),
    Da),
  Sr,
  Er,
  Be,
  rr,
  xe,
  wi,
  ir,
  je,
  vt,
  za,
  cd =
    ((za = class extends Vl {
      constructor(t) {
        super();
        T(this, je);
        T(this, Sr);
        T(this, Er);
        T(this, Be);
        T(this, rr);
        T(this, xe);
        T(this, wi);
        T(this, ir);
        $(this, ir, !1),
          $(this, wi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          $(this, rr, t.client),
          $(this, Be, v(this, rr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          $(this, Sr, ud(this.options)),
          (this.state = t.state ?? v(this, Sr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = v(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...v(this, wi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          v(this, Be).remove(this);
      }
      setData(t, r) {
        const i = io(this.state.data, t, this.options);
        return (
          z(this, je, vt).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(t, r) {
        z(this, je, vt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var i, n;
        const r = (i = v(this, xe)) == null ? void 0 : i.promise;
        return (
          (n = v(this, xe)) == null || n.cancel(t),
          r ? r.then(Ve).catch(Ve) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(v(this, Sr));
      }
      isActive() {
        return this.observers.some((t) => Ke(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Br ||
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
          !Dl(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = v(this, xe)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((i) => i.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = v(this, xe)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          v(this, Be).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (v(this, xe) &&
              (v(this, ir)
                ? v(this, xe).cancel({ revert: !0 })
                : v(this, xe).cancelRetry()),
            this.scheduleGc()),
          v(this, Be).notify({
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
          z(this, je, vt).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var l, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (v(this, xe))
            return v(this, xe).continueRetry(), v(this, xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const u = this.observers.find((f) => f.options.queryFn);
          u && this.setOptions(u.options);
        }
        const i = new AbortController(),
          n = (u) => {
            Object.defineProperty(u, "signal", {
              enumerable: !0,
              get: () => ($(this, ir, !0), i.signal),
            });
          },
          o = () => {
            const u = Ml(this.options, r),
              f = {
                client: v(this, rr),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              n(f),
              $(this, ir, !1),
              this.options.persister ? this.options.persister(u, f, this) : u(f)
            );
          },
          s = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: v(this, rr),
            state: this.state,
            fetchFn: o,
          };
        n(s),
          (l = this.options.behavior) == null || l.onFetch(s, this),
          $(this, Er, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = s.fetchOptions) == null ? void 0 : c.meta)) &&
            z(this, je, vt).call(this, {
              type: "fetch",
              meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
            });
        const a = (u) => {
          var f, h, p, w;
          (Tn(u) && u.silent) ||
            z(this, je, vt).call(this, { type: "error", error: u }),
            Tn(u) ||
              ((h = (f = v(this, Be).config).onError) == null ||
                h.call(f, u, this),
              (w = (p = v(this, Be).config).onSettled) == null ||
                w.call(p, this.state.data, u, this)),
            this.scheduleGc();
        };
        return (
          $(
            this,
            xe,
            Bl({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: s.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (u) => {
                var f, h, p, w;
                if (u === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(u);
                } catch (b) {
                  a(b);
                  return;
                }
                (h = (f = v(this, Be).config).onSuccess) == null ||
                  h.call(f, u, this),
                  (w = (p = v(this, Be).config).onSettled) == null ||
                    w.call(p, u, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (u, f) => {
                z(this, je, vt).call(this, {
                  type: "failed",
                  failureCount: u,
                  error: f,
                });
              },
              onPause: () => {
                z(this, je, vt).call(this, { type: "pause" });
              },
              onContinue: () => {
                z(this, je, vt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            }),
          ),
          v(this, xe).start()
        );
      }
    }),
    (Sr = new WeakMap()),
    (Er = new WeakMap()),
    (Be = new WeakMap()),
    (rr = new WeakMap()),
    (xe = new WeakMap()),
    (wi = new WeakMap()),
    (ir = new WeakMap()),
    (je = new WeakSet()),
    (vt = function (t) {
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
              ...ql(i.data, this.options),
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
            const n = t.error;
            return Tn(n) && n.revert && v(this, Er)
              ? { ...v(this, Er), fetchStatus: "idle" }
              : {
                  ...i,
                  error: n,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: n,
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
        be.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            v(this, Be).notify({ query: this, type: "updated", action: t });
        });
    }),
    za);
function ql(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ul(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function ud(e) {
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
var it,
  Ma,
  dd =
    ((Ma = class extends Ri {
      constructor(t = {}) {
        super();
        T(this, it);
        (this.config = t), $(this, it, new Map());
      }
      build(t, r, i) {
        const n = r.queryKey,
          o = r.queryHash ?? Qo(n, r);
        let s = this.get(o);
        return (
          s ||
            ((s = new cd({
              client: t,
              queryKey: n,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: i,
              defaultOptions: t.getQueryDefaults(n),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        v(this, it).has(t.queryHash) ||
          (v(this, it).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = v(this, it).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && v(this, it).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        be.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return v(this, it).get(t);
      }
      getAll() {
        return [...v(this, it).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Ys(r, i));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((i) => Ys(t, i)) : r;
      }
      notify(t) {
        be.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        be.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        be.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (it = new WeakMap()),
    Ma),
  nt,
  Ae,
  nr,
  ot,
  At,
  Ua,
  hd =
    ((Ua = class extends Vl {
      constructor(t) {
        super();
        T(this, ot);
        T(this, nt);
        T(this, Ae);
        T(this, nr);
        (this.mutationId = t.mutationId),
          $(this, Ae, t.mutationCache),
          $(this, nt, []),
          (this.state = t.state || pd()),
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
        v(this, nt).includes(t) ||
          (v(this, nt).push(t),
          this.clearGcTimeout(),
          v(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        $(
          this,
          nt,
          v(this, nt).filter((r) => r !== t),
        ),
          this.scheduleGc(),
          v(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        v(this, nt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : v(this, Ae).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = v(this, nr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var n, o, s, a, l, c, d, u, f, h, p, w, b, y, x, C, k, S, A, R;
        $(
          this,
          nr,
          Bl({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, E) => {
              z(this, ot, At).call(this, {
                type: "failed",
                failureCount: P,
                error: E,
              });
            },
            onPause: () => {
              z(this, ot, At).call(this, { type: "pause" });
            },
            onContinue: () => {
              z(this, ot, At).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => v(this, Ae).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          i = !v(this, nr).canStart();
        try {
          if (!r) {
            z(this, ot, At).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((o = (n = v(this, Ae).config).onMutate) == null
                ? void 0
                : o.call(n, t, this));
            const E = await ((a = (s = this.options).onMutate) == null
              ? void 0
              : a.call(s, t));
            E !== this.state.context &&
              z(this, ot, At).call(this, {
                type: "pending",
                context: E,
                variables: t,
                isPaused: i,
              });
          }
          const P = await v(this, nr).start();
          return (
            await ((c = (l = v(this, Ae).config).onSuccess) == null
              ? void 0
              : c.call(l, P, t, this.state.context, this)),
            await ((u = (d = this.options).onSuccess) == null
              ? void 0
              : u.call(d, P, t, this.state.context)),
            await ((h = (f = v(this, Ae).config).onSettled) == null
              ? void 0
              : h.call(
                  f,
                  P,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (p = this.options).onSettled) == null
              ? void 0
              : w.call(p, P, null, t, this.state.context)),
            z(this, ot, At).call(this, { type: "success", data: P }),
            P
          );
        } catch (P) {
          try {
            throw (
              (await ((y = (b = v(this, Ae).config).onError) == null
                ? void 0
                : y.call(b, P, t, this.state.context, this)),
              await ((C = (x = this.options).onError) == null
                ? void 0
                : C.call(x, P, t, this.state.context)),
              await ((S = (k = v(this, Ae).config).onSettled) == null
                ? void 0
                : S.call(
                    k,
                    void 0,
                    P,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((R = (A = this.options).onSettled) == null
                ? void 0
                : R.call(A, void 0, P, t, this.state.context)),
              P)
            );
          } finally {
            z(this, ot, At).call(this, { type: "error", error: P });
          }
        } finally {
          v(this, Ae).runNext(this);
        }
      }
    }),
    (nt = new WeakMap()),
    (Ae = new WeakMap()),
    (nr = new WeakMap()),
    (ot = new WeakSet()),
    (At = function (t) {
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
        be.batch(() => {
          v(this, nt).forEach((i) => {
            i.onMutationUpdate(t);
          }),
            v(this, Ae).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Ua);
function pd() {
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
var yt,
  We,
  xi,
  Ha,
  fd =
    ((Ha = class extends Ri {
      constructor(t = {}) {
        super();
        T(this, yt);
        T(this, We);
        T(this, xi);
        (this.config = t),
          $(this, yt, new Set()),
          $(this, We, new Map()),
          $(this, xi, 0);
      }
      build(t, r, i) {
        const n = new hd({
          mutationCache: this,
          mutationId: ++Ni(this, xi)._,
          options: t.defaultMutationOptions(r),
          state: i,
        });
        return this.add(n), n;
      }
      add(t) {
        v(this, yt).add(t);
        const r = Di(t);
        if (typeof r == "string") {
          const i = v(this, We).get(r);
          i ? i.push(t) : v(this, We).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (v(this, yt).delete(t)) {
          const r = Di(t);
          if (typeof r == "string") {
            const i = v(this, We).get(r);
            if (i)
              if (i.length > 1) {
                const n = i.indexOf(t);
                n !== -1 && i.splice(n, 1);
              } else i[0] === t && v(this, We).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = Di(t);
        if (typeof r == "string") {
          const i = v(this, We).get(r),
            n =
              i == null ? void 0 : i.find((o) => o.state.status === "pending");
          return !n || n === t;
        } else return !0;
      }
      runNext(t) {
        var i;
        const r = Di(t);
        if (typeof r == "string") {
          const n =
            (i = v(this, We).get(r)) == null
              ? void 0
              : i.find((o) => o !== t && o.state.isPaused);
          return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        be.batch(() => {
          v(this, yt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            v(this, yt).clear(),
            v(this, We).clear();
        });
      }
      getAll() {
        return Array.from(v(this, yt));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((i) => Xs(r, i));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Xs(t, r));
      }
      notify(t) {
        be.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return be.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(Ve))),
        );
      }
    }),
    (yt = new WeakMap()),
    (We = new WeakMap()),
    (xi = new WeakMap()),
    Ha);
function Di(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function ea(e) {
  return {
    onFetch: (t, r) => {
      var d, u, f, h, p;
      const i = t.options,
        n =
          (f =
            (u = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : u.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((p = t.state.data) == null ? void 0 : p.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let w = !1;
        const b = (C) => {
            Object.defineProperty(C, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (w = !0)
                  : t.signal.addEventListener("abort", () => {
                      w = !0;
                    }),
                t.signal
              ),
            });
          },
          y = Ml(t.options, t.fetchOptions),
          x = async (C, k, S) => {
            if (w) return Promise.reject();
            if (k == null && C.pages.length) return Promise.resolve(C);
            const A = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: k,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            b(A);
            const R = await y(A),
              { maxPages: P } = t.options,
              E = S ? id : rd;
            return {
              pages: E(C.pages, R, P),
              pageParams: E(C.pageParams, k, P),
            };
          };
        if (n && o.length) {
          const C = n === "backward",
            k = C ? md : ta,
            S = { pages: o, pageParams: s },
            A = k(i, S);
          a = await x(S, A, C);
        } else {
          const C = e ?? o.length;
          do {
            const k = l === 0 ? (s[0] ?? i.initialPageParam) : ta(i, a);
            if (l > 0 && k == null) break;
            (a = await x(a, k)), l++;
          } while (l < C);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var w, b;
            return (b = (w = t.options).persister) == null
              ? void 0
              : b.call(
                  w,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function ta(e, { pages: t, pageParams: r }) {
  const i = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[i], t, r[i], r) : void 0;
}
function md(e, { pages: t, pageParams: r }) {
  var i;
  return t.length > 0
    ? (i = e.getPreviousPageParam) == null
      ? void 0
      : i.call(e, t[0], t, r[0], r)
    : void 0;
}
var re,
  It,
  Nt,
  $r,
  Rr,
  Ft,
  Ar,
  Pr,
  Ba,
  gd =
    ((Ba = class {
      constructor(e = {}) {
        T(this, re);
        T(this, It);
        T(this, Nt);
        T(this, $r);
        T(this, Rr);
        T(this, Ft);
        T(this, Ar);
        T(this, Pr);
        $(this, re, e.queryCache || new dd()),
          $(this, It, e.mutationCache || new fd()),
          $(this, Nt, e.defaultOptions || {}),
          $(this, $r, new Map()),
          $(this, Rr, new Map()),
          $(this, Ft, 0);
      }
      mount() {
        Ni(this, Ft)._++,
          v(this, Ft) === 1 &&
            ($(
              this,
              Ar,
              Go.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), v(this, re).onFocus());
              }),
            ),
            $(
              this,
              Pr,
              en.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), v(this, re).onOnline());
              }),
            ));
      }
      unmount() {
        var e, t;
        Ni(this, Ft)._--,
          v(this, Ft) === 0 &&
            ((e = v(this, Ar)) == null || e.call(this),
            $(this, Ar, void 0),
            (t = v(this, Pr)) == null || t.call(this),
            $(this, Pr, void 0));
      }
      isFetching(e) {
        return v(this, re).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return v(this, It).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = v(this, re).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          r = v(this, re).build(this, t),
          i = r.state.data;
        return i === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              r.isStaleByTime(_r(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(i));
      }
      getQueriesData(e) {
        return v(this, re)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const i = r.data;
            return [t, i];
          });
      }
      setQueryData(e, t, r) {
        const i = this.defaultQueryOptions({ queryKey: e }),
          n = v(this, re).get(i.queryHash),
          o = n == null ? void 0 : n.state.data,
          s = ed(t, o);
        if (s !== void 0)
          return v(this, re)
            .build(this, i)
            .setData(s, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return be.batch(() =>
          v(this, re)
            .findAll(e)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, t, r)]),
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = v(this, re).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = v(this, re);
        be.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = v(this, re);
        return be.batch(
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
          i = be.batch(() =>
            v(this, re)
              .findAll(e)
              .map((n) => n.cancel(r)),
          );
        return Promise.all(i).then(Ve).catch(Ve);
      }
      invalidateQueries(e, t = {}) {
        return be.batch(
          () => (
            v(this, re)
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
          i = be.batch(() =>
            v(this, re)
              .findAll(e)
              .filter((n) => !n.isDisabled())
              .map((n) => {
                let o = n.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(Ve)),
                  n.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              }),
          );
        return Promise.all(i).then(Ve);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = v(this, re).build(this, t);
        return r.isStaleByTime(_r(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Ve).catch(Ve);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = ea(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ve).catch(Ve);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = ea(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return en.isOnline()
          ? v(this, It).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return v(this, re);
      }
      getMutationCache() {
        return v(this, It);
      }
      getDefaultOptions() {
        return v(this, Nt);
      }
      setDefaultOptions(e) {
        $(this, Nt, e);
      }
      setQueryDefaults(e, t) {
        v(this, $r).set(vi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...v(this, $r).values()],
          r = {};
        return (
          t.forEach((i) => {
            yi(e, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        v(this, Rr).set(vi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...v(this, Rr).values()],
          r = {};
        return (
          t.forEach((i) => {
            yi(e, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...v(this, Nt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Qo(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Br && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...v(this, Nt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        v(this, re).clear(), v(this, It).clear();
      }
    }),
    (re = new WeakMap()),
    (It = new WeakMap()),
    (Nt = new WeakMap()),
    ($r = new WeakMap()),
    (Rr = new WeakMap()),
    (Ft = new WeakMap()),
    (Ar = new WeakMap()),
    (Pr = new WeakMap()),
    Ba),
  Oe,
  M,
  Ci,
  Pe,
  or,
  Tr,
  Dt,
  st,
  ki,
  Or,
  Lr,
  sr,
  ar,
  zt,
  Ir,
  B,
  ni,
  oo,
  so,
  ao,
  lo,
  co,
  uo,
  ho,
  jl,
  Va,
  vd =
    ((Va = class extends Ri {
      constructor(t, r) {
        super();
        T(this, B);
        T(this, Oe);
        T(this, M);
        T(this, Ci);
        T(this, Pe);
        T(this, or);
        T(this, Tr);
        T(this, Dt);
        T(this, st);
        T(this, ki);
        T(this, Or);
        T(this, Lr);
        T(this, sr);
        T(this, ar);
        T(this, zt);
        T(this, Ir, new Set());
        (this.options = r),
          $(this, Oe, t),
          $(this, st, null),
          $(this, Dt, no()),
          this.options.experimental_prefetchInRender ||
            v(this, Dt).reject(
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
          (v(this, M).addObserver(this),
          ra(v(this, M), this.options)
            ? z(this, B, ni).call(this)
            : this.updateResult(),
          z(this, B, lo).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return po(v(this, M), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return po(v(this, M), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          z(this, B, co).call(this),
          z(this, B, uo).call(this),
          v(this, M).removeObserver(this);
      }
      setOptions(t) {
        const r = this.options,
          i = v(this, M);
        if (
          ((this.options = v(this, Oe).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Ke(this.options.enabled, v(this, M)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        z(this, B, ho).call(this),
          v(this, M).setOptions(this.options),
          r._defaulted &&
            !to(this.options, r) &&
            v(this, Oe)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: v(this, M),
                observer: this,
              });
        const n = this.hasListeners();
        n && ia(v(this, M), i, this.options, r) && z(this, B, ni).call(this),
          this.updateResult(),
          n &&
            (v(this, M) !== i ||
              Ke(this.options.enabled, v(this, M)) !==
                Ke(r.enabled, v(this, M)) ||
              _r(this.options.staleTime, v(this, M)) !==
                _r(r.staleTime, v(this, M))) &&
            z(this, B, oo).call(this);
        const o = z(this, B, so).call(this);
        n &&
          (v(this, M) !== i ||
            Ke(this.options.enabled, v(this, M)) !==
              Ke(r.enabled, v(this, M)) ||
            o !== v(this, zt)) &&
          z(this, B, ao).call(this, o);
      }
      getOptimisticResult(t) {
        const r = v(this, Oe).getQueryCache().build(v(this, Oe), t),
          i = this.createResult(r, t);
        return (
          bd(this, i) &&
            ($(this, Pe, i),
            $(this, Tr, this.options),
            $(this, or, v(this, M).state)),
          i
        );
      }
      getCurrentResult() {
        return v(this, Pe);
      }
      trackResult(t, r) {
        const i = {};
        return (
          Object.keys(t).forEach((n) => {
            Object.defineProperty(i, n, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(n), r == null || r(n), t[n]),
            });
          }),
          i
        );
      }
      trackProp(t) {
        v(this, Ir).add(t);
      }
      getCurrentQuery() {
        return v(this, M);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = v(this, Oe).defaultQueryOptions(t),
          i = v(this, Oe).getQueryCache().build(v(this, Oe), r);
        return i.fetch().then(() => this.createResult(i, r));
      }
      fetch(t) {
        return z(this, B, ni)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), v(this, Pe)));
      }
      createResult(t, r) {
        var P;
        const i = v(this, M),
          n = this.options,
          o = v(this, Pe),
          s = v(this, or),
          a = v(this, Tr),
          c = t !== i ? t.state : v(this, Ci),
          { state: d } = t;
        let u = { ...d },
          f = !1,
          h;
        if (r._optimisticResults) {
          const E = this.hasListeners(),
            H = !E && ra(t, r),
            N = E && ia(t, i, r, n);
          (H || N) && (u = { ...u, ...ql(d.data, t.options) }),
            r._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
        }
        let { error: p, errorUpdatedAt: w, status: b } = u;
        if (r.select && u.data !== void 0)
          if (
            o &&
            u.data === (s == null ? void 0 : s.data) &&
            r.select === v(this, ki)
          )
            h = v(this, Or);
          else
            try {
              $(this, ki, r.select),
                (h = r.select(u.data)),
                (h = io(o == null ? void 0 : o.data, h, r)),
                $(this, Or, h),
                $(this, st, null);
            } catch (E) {
              $(this, st, E);
            }
        else h = u.data;
        if (r.placeholderData !== void 0 && h === void 0 && b === "pending") {
          let E;
          if (
            o != null &&
            o.isPlaceholderData &&
            r.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            E = o.data;
          else if (
            ((E =
              typeof r.placeholderData == "function"
                ? r.placeholderData(
                    (P = v(this, Lr)) == null ? void 0 : P.state.data,
                    v(this, Lr),
                  )
                : r.placeholderData),
            r.select && E !== void 0)
          )
            try {
              (E = r.select(E)), $(this, st, null);
            } catch (H) {
              $(this, st, H);
            }
          E !== void 0 &&
            ((b = "success"),
            (h = io(o == null ? void 0 : o.data, E, r)),
            (f = !0));
        }
        v(this, st) &&
          ((p = v(this, st)),
          (h = v(this, Or)),
          (w = Date.now()),
          (b = "error"));
        const y = u.fetchStatus === "fetching",
          x = b === "pending",
          C = b === "error",
          k = x && y,
          S = h !== void 0,
          R = {
            status: b,
            fetchStatus: u.fetchStatus,
            isPending: x,
            isSuccess: b === "success",
            isError: C,
            isInitialLoading: k,
            isLoading: k,
            data: h,
            dataUpdatedAt: u.dataUpdatedAt,
            error: p,
            errorUpdatedAt: w,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
            isFetchedAfterMount:
              u.dataUpdateCount > c.dataUpdateCount ||
              u.errorUpdateCount > c.errorUpdateCount,
            isFetching: y,
            isRefetching: y && !x,
            isLoadingError: C && !S,
            isPaused: u.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: C && S,
            isStale: Yo(t, r),
            refetch: this.refetch,
            promise: v(this, Dt),
          };
        if (this.options.experimental_prefetchInRender) {
          const E = (ne) => {
              R.status === "error"
                ? ne.reject(R.error)
                : R.data !== void 0 && ne.resolve(R.data);
            },
            H = () => {
              const ne = $(this, Dt, (R.promise = no()));
              E(ne);
            },
            N = v(this, Dt);
          switch (N.status) {
            case "pending":
              t.queryHash === i.queryHash && E(N);
              break;
            case "fulfilled":
              (R.status === "error" || R.data !== N.value) && H();
              break;
            case "rejected":
              (R.status !== "error" || R.error !== N.reason) && H();
              break;
          }
        }
        return R;
      }
      updateResult() {
        const t = v(this, Pe),
          r = this.createResult(v(this, M), this.options);
        if (
          ($(this, or, v(this, M).state),
          $(this, Tr, this.options),
          v(this, or).data !== void 0 && $(this, Lr, v(this, M)),
          to(r, t))
        )
          return;
        $(this, Pe, r);
        const i = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: n } = this.options,
            o = typeof n == "function" ? n() : n;
          if (o === "all" || (!o && !v(this, Ir).size)) return !0;
          const s = new Set(o ?? v(this, Ir));
          return (
            this.options.throwOnError && s.add("error"),
            Object.keys(v(this, Pe)).some((a) => {
              const l = a;
              return v(this, Pe)[l] !== t[l] && s.has(l);
            })
          );
        };
        z(this, B, jl).call(this, { listeners: i() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && z(this, B, lo).call(this);
      }
    }),
    (Oe = new WeakMap()),
    (M = new WeakMap()),
    (Ci = new WeakMap()),
    (Pe = new WeakMap()),
    (or = new WeakMap()),
    (Tr = new WeakMap()),
    (Dt = new WeakMap()),
    (st = new WeakMap()),
    (ki = new WeakMap()),
    (Or = new WeakMap()),
    (Lr = new WeakMap()),
    (sr = new WeakMap()),
    (ar = new WeakMap()),
    (zt = new WeakMap()),
    (Ir = new WeakMap()),
    (B = new WeakSet()),
    (ni = function (t) {
      z(this, B, ho).call(this);
      let r = v(this, M).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(Ve)), r;
    }),
    (oo = function () {
      z(this, B, co).call(this);
      const t = _r(this.options.staleTime, v(this, M));
      if (cr || v(this, Pe).isStale || !eo(t)) return;
      const i = Dl(v(this, Pe).dataUpdatedAt, t) + 1;
      $(
        this,
        sr,
        setTimeout(() => {
          v(this, Pe).isStale || this.updateResult();
        }, i),
      );
    }),
    (so = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(v(this, M))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (ao = function (t) {
      z(this, B, uo).call(this),
        $(this, zt, t),
        !(
          cr ||
          Ke(this.options.enabled, v(this, M)) === !1 ||
          !eo(v(this, zt)) ||
          v(this, zt) === 0
        ) &&
          $(
            this,
            ar,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Go.isFocused()) &&
                  z(this, B, ni).call(this);
              },
              v(this, zt),
            ),
          );
    }),
    (lo = function () {
      z(this, B, oo).call(this),
        z(this, B, ao).call(this, z(this, B, so).call(this));
    }),
    (co = function () {
      v(this, sr) && (clearTimeout(v(this, sr)), $(this, sr, void 0));
    }),
    (uo = function () {
      v(this, ar) && (clearInterval(v(this, ar)), $(this, ar, void 0));
    }),
    (ho = function () {
      const t = v(this, Oe).getQueryCache().build(v(this, Oe), this.options);
      if (t === v(this, M)) return;
      const r = v(this, M);
      $(this, M, t),
        $(this, Ci, t.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (jl = function (t) {
      be.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(v(this, Pe));
          }),
          v(this, Oe)
            .getQueryCache()
            .notify({ query: v(this, M), type: "observerResultsUpdated" });
      });
    }),
    Va);
function yd(e, t) {
  return (
    Ke(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function ra(e, t) {
  return yd(e, t) || (e.state.data !== void 0 && po(e, t, t.refetchOnMount));
}
function po(e, t, r) {
  if (Ke(t.enabled, e) !== !1) {
    const i = typeof r == "function" ? r(e) : r;
    return i === "always" || (i !== !1 && Yo(e, t));
  }
  return !1;
}
function ia(e, t, r, i) {
  return (
    (e !== t || Ke(i.enabled, e) === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    Yo(e, r)
  );
}
function Yo(e, t) {
  return Ke(t.enabled, e) !== !1 && e.isStaleByTime(_r(t.staleTime, e));
}
function bd(e, t) {
  return !to(e.getCurrentResult(), t);
}
var Wl = Ee(void 0),
  Ze = (e) => {
    const t = U(Wl);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  _d = ({ client: e, children: t }) => (
    Ie(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    g(Wl.Provider, { value: e, children: t })
  ),
  Kl = Ee(!1),
  wd = () => U(Kl);
Kl.Provider;
function xd() {
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
var Cd = Ee(xd()),
  kd = () => U(Cd);
function Sd(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function na() {}
var Ed = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  $d = (e) => {
    Ie(() => {
      e.clearReset();
    }, [e]);
  },
  Rd = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: r,
    query: i,
    suspense: n,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    i &&
    ((n && e.data === void 0) || Sd(r, [e.error, i])),
  Ad = (e) => {
    const t = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof t == "function"
          ? (...r) => Math.max(t(...r), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  Pd = (e, t) => e.isLoading && e.isFetching && !t,
  Td = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  oa = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function Od(e, t, r) {
  var u, f, h, p, w;
  const i = Ze(),
    n = wd(),
    o = kd(),
    s = i.defaultQueryOptions(e);
  (f =
    (u = i.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || f.call(u, s),
    (s._optimisticResults = n ? "isRestoring" : "optimistic"),
    Ad(s),
    Ed(s, o),
    $d(o);
  const a = !i.getQueryCache().get(s.queryHash),
    [l] = Y(() => new t(i, s)),
    c = l.getOptimisticResult(s),
    d = !n && e.subscribed !== !1;
  if (
    (hn(
      kt(
        (b) => {
          const y = d ? l.subscribe(be.batchCalls(b)) : na;
          return l.updateResult(), y;
        },
        [l, d],
      ),
      () => l.getCurrentResult(),
    ),
    Ie(() => {
      l.setOptions(s);
    }, [s, l]),
    Td(s, c))
  )
    throw oa(s, l, o);
  if (
    Rd({
      result: c,
      errorResetBoundary: o,
      throwOnError: s.throwOnError,
      query: i.getQueryCache().get(s.queryHash),
      suspense: s.suspense,
    })
  )
    throw c.error;
  if (
    ((p =
      (h = i.getDefaultOptions().queries) == null
        ? void 0
        : h._experimental_afterQuery) == null || p.call(h, s, c),
    s.experimental_prefetchInRender && !cr && Pd(c, n))
  ) {
    const b = a
      ? oa(s, l, o)
      : (w = i.getQueryCache().get(s.queryHash)) == null
        ? void 0
        : w.promise;
    b == null ||
      b.catch(na).finally(() => {
        l.updateResult();
      });
  }
  return s.notifyOnChangeProps ? c : l.trackResult(c);
}
function ht(e, t) {
  return Od(e, vd);
}
var Yr = {},
  sa;
function Ld() {
  if (sa) return Yr;
  (sa = 1),
    Object.defineProperty(Yr, "__esModule", { value: !0 }),
    (Yr.parse = s),
    (Yr.serialize = c);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    n = Object.prototype.toString,
    o = (() => {
      const f = function () {};
      return (f.prototype = Object.create(null)), f;
    })();
  function s(f, h) {
    const p = new o(),
      w = f.length;
    if (w < 2) return p;
    const b = (h == null ? void 0 : h.decode) || d;
    let y = 0;
    do {
      const x = f.indexOf("=", y);
      if (x === -1) break;
      const C = f.indexOf(";", y),
        k = C === -1 ? w : C;
      if (x > k) {
        y = f.lastIndexOf(";", x - 1) + 1;
        continue;
      }
      const S = a(f, y, x),
        A = l(f, x, S),
        R = f.slice(S, A);
      if (p[R] === void 0) {
        let P = a(f, x + 1, k),
          E = l(f, k, P);
        const H = b(f.slice(P, E));
        p[R] = H;
      }
      y = k + 1;
    } while (y < w);
    return p;
  }
  function a(f, h, p) {
    do {
      const w = f.charCodeAt(h);
      if (w !== 32 && w !== 9) return h;
    } while (++h < p);
    return p;
  }
  function l(f, h, p) {
    for (; h > p; ) {
      const w = f.charCodeAt(--h);
      if (w !== 32 && w !== 9) return h + 1;
    }
    return p;
  }
  function c(f, h, p) {
    const w = (p == null ? void 0 : p.encode) || encodeURIComponent;
    if (!e.test(f)) throw new TypeError(`argument name is invalid: ${f}`);
    const b = w(h);
    if (!t.test(b)) throw new TypeError(`argument val is invalid: ${h}`);
    let y = f + "=" + b;
    if (!p) return y;
    if (p.maxAge !== void 0) {
      if (!Number.isInteger(p.maxAge))
        throw new TypeError(`option maxAge is invalid: ${p.maxAge}`);
      y += "; Max-Age=" + p.maxAge;
    }
    if (p.domain) {
      if (!r.test(p.domain))
        throw new TypeError(`option domain is invalid: ${p.domain}`);
      y += "; Domain=" + p.domain;
    }
    if (p.path) {
      if (!i.test(p.path))
        throw new TypeError(`option path is invalid: ${p.path}`);
      y += "; Path=" + p.path;
    }
    if (p.expires) {
      if (!u(p.expires) || !Number.isFinite(p.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${p.expires}`);
      y += "; Expires=" + p.expires.toUTCString();
    }
    if (
      (p.httpOnly && (y += "; HttpOnly"),
      p.secure && (y += "; Secure"),
      p.partitioned && (y += "; Partitioned"),
      p.priority)
    )
      switch (
        typeof p.priority == "string" ? p.priority.toLowerCase() : void 0
      ) {
        case "low":
          y += "; Priority=Low";
          break;
        case "medium":
          y += "; Priority=Medium";
          break;
        case "high":
          y += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${p.priority}`);
      }
    if (p.sameSite)
      switch (
        typeof p.sameSite == "string" ? p.sameSite.toLowerCase() : p.sameSite
      ) {
        case !0:
        case "strict":
          y += "; SameSite=Strict";
          break;
        case "lax":
          y += "; SameSite=Lax";
          break;
        case "none":
          y += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${p.sameSite}`);
      }
    return y;
  }
  function d(f) {
    if (f.indexOf("%") === -1) return f;
    try {
      return decodeURIComponent(f);
    } catch {
      return f;
    }
  }
  function u(f) {
    return n.call(f) === "[object Date]";
  }
  return Yr;
}
Ld();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var aa = "popstate";
function Id(e = {}) {
  function t(i, n) {
    let { pathname: o, search: s, hash: a } = i.location;
    return fo(
      "",
      { pathname: o, search: s, hash: a },
      (n.state && n.state.usr) || null,
      (n.state && n.state.key) || "default",
    );
  }
  function r(i, n) {
    return typeof n == "string" ? n : bi(n);
  }
  return Fd(t, r, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function lt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Nd() {
  return Math.random().toString(36).substring(2, 10);
}
function la(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fo(e, t, r = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Vr(t) : t),
    state: r,
    key: (t && t.key) || i || Nd(),
  };
}
function bi({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Vr(e) {
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
function Fd(e, t, r, i = {}) {
  let { window: n = document.defaultView, v5Compat: o = !1 } = i,
    s = n.history,
    a = "POP",
    l = null,
    c = d();
  c == null && ((c = 0), s.replaceState({ ...s.state, idx: c }, ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function u() {
    a = "POP";
    let b = d(),
      y = b == null ? null : b - c;
    (c = b), l && l({ action: a, location: w.location, delta: y });
  }
  function f(b, y) {
    a = "PUSH";
    let x = fo(w.location, b, y);
    c = d() + 1;
    let C = la(x, c),
      k = w.createHref(x);
    try {
      s.pushState(C, "", k);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      n.location.assign(k);
    }
    o && l && l({ action: a, location: w.location, delta: 1 });
  }
  function h(b, y) {
    a = "REPLACE";
    let x = fo(w.location, b, y);
    c = d();
    let C = la(x, c),
      k = w.createHref(x);
    s.replaceState(C, "", k),
      o && l && l({ action: a, location: w.location, delta: 0 });
  }
  function p(b) {
    let y = n.location.origin !== "null" ? n.location.origin : n.location.href,
      x = typeof b == "string" ? b : bi(b);
    return (
      (x = x.replace(/ $/, "%20")),
      Z(
        y,
        `No window.location.(origin|href) available to create URL for href: ${x}`,
      ),
      new URL(x, y)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(n, s);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        n.addEventListener(aa, u),
        (l = b),
        () => {
          n.removeEventListener(aa, u), (l = null);
        }
      );
    },
    createHref(b) {
      return t(n, b);
    },
    createURL: p,
    encodeLocation(b) {
      let y = p(b);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: h,
    go(b) {
      return s.go(b);
    },
  };
  return w;
}
function Ql(e, t, r = "/") {
  return Dd(e, t, r, !1);
}
function Dd(e, t, r, i) {
  let n = typeof t == "string" ? Vr(t) : t,
    o = Ct(n.pathname || "/", r);
  if (o == null) return null;
  let s = Gl(e);
  zd(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = Gd(o);
    a = Kd(s[l], c, i);
  }
  return a;
}
function Gl(e, t = [], r = [], i = "") {
  let n = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (Z(
        l.relativePath.startsWith(i),
        `Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let c = wt([i, l.relativePath]),
      d = r.concat(l);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
      ),
      Gl(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: jd(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) n(o, s);
      else for (let l of Yl(o.path)) n(o, s, l);
    }),
    t
  );
}
function Yl(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t,
    n = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (i.length === 0) return n ? [o, ""] : [o];
  let s = Yl(i.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    n && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function zd(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Wd(
          t.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var Md = /^:[\w-]+$/,
  Ud = 3,
  Hd = 2,
  Bd = 1,
  Vd = 10,
  qd = -2,
  ca = (e) => e === "*";
function jd(e, t) {
  let r = e.split("/"),
    i = r.length;
  return (
    r.some(ca) && (i += qd),
    t && (i += Hd),
    r
      .filter((n) => !ca(n))
      .reduce((n, o) => n + (Md.test(o) ? Ud : o === "" ? Bd : Vd), i)
  );
}
function Wd(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, n) => i === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Kd(e, t, r = !1) {
  let { routesMeta: i } = e,
    n = {},
    o = "/",
    s = [];
  for (let a = 0; a < i.length; ++a) {
    let l = i[a],
      c = a === i.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      u = tn(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d,
      ),
      f = l.route;
    if (
      (!u &&
        c &&
        r &&
        !i[i.length - 1].route.index &&
        (u = tn(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d,
        )),
      !u)
    )
      return null;
    Object.assign(n, u.params),
      s.push({
        params: n,
        pathname: wt([o, u.pathname]),
        pathnameBase: Zd(wt([o, u.pathnameBase])),
        route: f,
      }),
      u.pathnameBase !== "/" && (o = wt([o, u.pathnameBase]));
  }
  return s;
}
function tn(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = Qd(e.path, e.caseSensitive, e.end),
    n = t.match(r);
  if (!n) return null;
  let o = n[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = n.slice(1);
  return {
    params: i.reduce((c, { paramName: d, isOptional: u }, f) => {
      if (d === "*") {
        let p = a[f] || "";
        s = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[f];
      return (
        u && !h ? (c[d] = void 0) : (c[d] = (h || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Qd(e, t = !1, r = !0) {
  lt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let i = [],
    n =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            i.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (n += "\\/*$")
        : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"),
    [new RegExp(n, t ? void 0 : "i"), i]
  );
}
function Gd(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      lt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Ct(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function Yd(e, t = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: n = "",
  } = typeof e == "string" ? Vr(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Xd(r, t)) : t,
    search: eh(i),
    hash: th(n),
  };
}
function Xd(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((n) => {
      n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function On(e, t, r, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Jd(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Xl(e) {
  let t = Jd(e);
  return t.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Jl(e, t, r, i = !1) {
  let n;
  typeof e == "string"
    ? (n = Vr(e))
    : ((n = { ...e }),
      Z(
        !n.pathname || !n.pathname.includes("?"),
        On("?", "pathname", "search", n),
      ),
      Z(
        !n.pathname || !n.pathname.includes("#"),
        On("#", "pathname", "hash", n),
      ),
      Z(!n.search || !n.search.includes("#"), On("#", "search", "hash", n)));
  let o = e === "" || n.pathname === "",
    s = o ? "/" : n.pathname,
    a;
  if (s == null) a = r;
  else {
    let u = t.length - 1;
    if (!i && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (u -= 1);
      n.pathname = f.join("/");
    }
    a = u >= 0 ? t[u] : "/";
  }
  let l = Yd(n, a),
    c = s && s !== "/" && s.endsWith("/"),
    d = (o || s === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
var wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  th = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function rh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Zl = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Zl);
var ih = ["GET", ...Zl];
new Set(ih);
var qr = Ee(null);
qr.displayName = "DataRouter";
var fn = Ee(null);
fn.displayName = "DataRouterState";
var ec = Ee({ isTransitioning: !1 });
ec.displayName = "ViewTransition";
var nh = Ee(new Map());
nh.displayName = "Fetchers";
var oh = Ee(null);
oh.displayName = "Await";
var pt = Ee(null);
pt.displayName = "Navigation";
var Ai = Ee(null);
Ai.displayName = "Location";
var ft = Ee({ outlet: null, matches: [], isDataRoute: !1 });
ft.displayName = "Route";
var Xo = Ee(null);
Xo.displayName = "RouteError";
function sh(e, { relative: t } = {}) {
  Z(Pi(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r, navigator: i } = U(pt),
    { hash: n, pathname: o, search: s } = Ti(e, { relative: t }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : wt([r, o])),
    i.createHref({ pathname: a, search: s, hash: n })
  );
}
function Pi() {
  return U(Ai) != null;
}
function fr() {
  return (
    Z(
      Pi(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    U(Ai).location
  );
}
var tc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function rc(e) {
  U(pt).static || jt(e);
}
function ah() {
  let { isDataRoute: e } = U(ft);
  return e ? wh() : lh();
}
function lh() {
  Z(
    Pi(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = U(qr),
    { basename: t, navigator: r } = U(pt),
    { matches: i } = U(ft),
    { pathname: n } = fr(),
    o = JSON.stringify(Xl(i)),
    s = Se(!1);
  return (
    rc(() => {
      s.current = !0;
    }),
    kt(
      (l, c = {}) => {
        if ((lt(s.current, tc), !s.current)) return;
        if (typeof l == "number") {
          r.go(l);
          return;
        }
        let d = Jl(l, JSON.parse(o), n, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : wt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, n, e],
    )
  );
}
Ee(null);
function ch() {
  let { matches: e } = U(ft),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ti(e, { relative: t } = {}) {
  let { matches: r } = U(ft),
    { pathname: i } = fr(),
    n = JSON.stringify(Xl(r));
  return ze(() => Jl(e, JSON.parse(n), i, t === "path"), [e, n, i, t]);
}
function uh(e, t) {
  return ic(e, t);
}
function ic(e, t, r, i) {
  var x;
  Z(
    Pi(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: n, static: o } = U(pt),
    { matches: s } = U(ft),
    a = s[s.length - 1],
    l = a ? a.params : {},
    c = a ? a.pathname : "/",
    d = a ? a.pathnameBase : "/",
    u = a && a.route;
  {
    let C = (u && u.path) || "";
    nc(
      c,
      !u || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`,
    );
  }
  let f = fr(),
    h;
  if (t) {
    let C = typeof t == "string" ? Vr(t) : t;
    Z(
      d === "/" || ((x = C.pathname) == null ? void 0 : x.startsWith(d)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${C.pathname}" was given in the \`location\` prop.`,
    ),
      (h = C);
  } else h = f;
  let p = h.pathname || "/",
    w = p;
  if (d !== "/") {
    let C = d.replace(/^\//, "").split("/");
    w = "/" + p.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let b =
    !o && r && r.matches && r.matches.length > 0
      ? r.matches
      : Ql(e, { pathname: w });
  lt(
    u || b != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `,
  ),
    lt(
      b == null ||
        b[b.length - 1].route.element !== void 0 ||
        b[b.length - 1].route.Component !== void 0 ||
        b[b.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let y = mh(
    b &&
      b.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, l, C.params),
          pathname: wt([
            d,
            n.encodeLocation
              ? n.encodeLocation(C.pathname).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === "/"
              ? d
              : wt([
                  d,
                  n.encodeLocation
                    ? n.encodeLocation(C.pathnameBase).pathname
                    : C.pathnameBase,
                ]),
        }),
      ),
    s,
    r,
    i,
  );
  return t && y
    ? I(
        Ai.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...h,
            },
            navigationType: "POP",
          },
        },
        y,
      )
    : y;
}
function dh() {
  let e = _h(),
    t = rh(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    n = { padding: "0.5rem", backgroundColor: i },
    o = { padding: "2px 4px", backgroundColor: i },
    s = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (s = I(
      ve,
      null,
      I("p", null, "💿 Hey developer 👋"),
      I(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        I("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        I("code", { style: o }, "errorElement"),
        " prop on your route.",
      ),
    )),
    I(
      ve,
      null,
      I("h2", null, "Unexpected Application Error!"),
      I("h3", { style: { fontStyle: "italic" } }, t),
      r ? I("pre", { style: n }, r) : null,
      s,
    )
  );
}
var hh = I(dh, null),
  ph = class extends qe {
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
        ? I(
            ft.Provider,
            { value: this.props.routeContext },
            I(Xo.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function fh({ routeContext: e, match: t, children: r }) {
  let i = U(qr);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    I(ft.Provider, { value: e }, r)
  );
}
function mh(e, t = [], r = null, i = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let n = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let l = n.findIndex(
      (c) => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0,
    );
    Z(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
    ),
      (n = n.slice(0, Math.min(n.length, l + 1)));
  }
  let s = !1,
    a = -1;
  if (r)
    for (let l = 0; l < n.length; l++) {
      let c = n[l];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = l),
        c.route.id)
      ) {
        let { loaderData: d, errors: u } = r,
          f =
            c.route.loader &&
            !d.hasOwnProperty(c.route.id) &&
            (!u || u[c.route.id] === void 0);
        if (c.route.lazy || f) {
          (s = !0), a >= 0 ? (n = n.slice(0, a + 1)) : (n = [n[0]]);
          break;
        }
      }
    }
  return n.reduceRight((l, c, d) => {
    let u,
      f = !1,
      h = null,
      p = null;
    r &&
      ((u = o && c.route.id ? o[c.route.id] : void 0),
      (h = c.route.errorElement || hh),
      s &&
        (a < 0 && d === 0
          ? (nc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (f = !0),
            (p = null))
          : a === d &&
            ((f = !0), (p = c.route.hydrateFallbackElement || null))));
    let w = t.concat(n.slice(0, d + 1)),
      b = () => {
        let y;
        return (
          u
            ? (y = h)
            : f
              ? (y = p)
              : c.route.Component
                ? (y = I(c.route.Component, null))
                : c.route.element
                  ? (y = c.route.element)
                  : (y = l),
          I(fh, {
            match: c,
            routeContext: { outlet: l, matches: w, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? I(ph, {
          location: r.location,
          revalidation: r.revalidation,
          component: h,
          error: u,
          children: b(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : b();
  }, null);
}
function Jo(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gh(e) {
  let t = U(qr);
  return Z(t, Jo(e)), t;
}
function vh(e) {
  let t = U(fn);
  return Z(t, Jo(e)), t;
}
function yh(e) {
  let t = U(ft);
  return Z(t, Jo(e)), t;
}
function Zo(e) {
  let t = yh(e),
    r = t.matches[t.matches.length - 1];
  return (
    Z(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function bh() {
  return Zo("useRouteId");
}
function _h() {
  var i;
  let e = U(Xo),
    t = vh("useRouteError"),
    r = Zo("useRouteError");
  return e !== void 0 ? e : (i = t.errors) == null ? void 0 : i[r];
}
function wh() {
  let { router: e } = gh("useNavigate"),
    t = Zo("useNavigate"),
    r = Se(!1);
  return (
    rc(() => {
      r.current = !0;
    }),
    kt(
      async (n, o = {}) => {
        lt(r.current, tc),
          r.current &&
            (typeof n == "number"
              ? e.navigate(n)
              : await e.navigate(n, { fromRouteId: t, ...o }));
      },
      [e, t],
    )
  );
}
var ua = {};
function nc(e, t, r) {
  !t && !ua[e] && ((ua[e] = !0), lt(!1, r));
}
jo(xh);
function xh({ routes: e, future: t, state: r }) {
  return ic(e, void 0, r, t);
}
function Wi(e) {
  Z(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Ch({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: i = "POP",
  navigator: n,
  static: o = !1,
}) {
  Z(
    !Pi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let s = e.replace(/^\/*/, "/"),
    a = ze(
      () => ({ basename: s, navigator: n, static: o, future: {} }),
      [s, n, o],
    );
  typeof r == "string" && (r = Vr(r));
  let {
      pathname: l = "/",
      search: c = "",
      hash: d = "",
      state: u = null,
      key: f = "default",
    } = r,
    h = ze(() => {
      let p = Ct(l, s);
      return p == null
        ? null
        : {
            location: { pathname: p, search: c, hash: d, state: u, key: f },
            navigationType: i,
          };
    }, [s, l, c, d, u, f, i]);
  return (
    lt(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : I(pt.Provider, { value: a }, I(Ai.Provider, { children: t, value: h }))
  );
}
function kh({ children: e, location: t }) {
  return uh(mo(e), t);
}
function mo(e, t = []) {
  let r = [];
  return (
    Wo.forEach(e, (i, n) => {
      if (!Hr(i)) return;
      let o = [...t, n];
      if (i.type === ve) {
        r.push.apply(r, mo(i.props.children, o));
        return;
      }
      Z(
        i.type === Wi,
        `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Z(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes.",
        );
      let s = {
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
      i.props.children && (s.children = mo(i.props.children, o)), r.push(s);
    }),
    r
  );
}
var Ki = "get",
  Qi = "application/x-www-form-urlencoded";
function mn(e) {
  return e != null && typeof e.tagName == "string";
}
function Sh(e) {
  return mn(e) && e.tagName.toLowerCase() === "button";
}
function Eh(e) {
  return mn(e) && e.tagName.toLowerCase() === "form";
}
function $h(e) {
  return mn(e) && e.tagName.toLowerCase() === "input";
}
function Rh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ah(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Rh(e);
}
var zi = null;
function Ph() {
  if (zi === null)
    try {
      new FormData(document.createElement("form"), 0), (zi = !1);
    } catch {
      zi = !0;
    }
  return zi;
}
var Th = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ln(e) {
  return e != null && !Th.has(e)
    ? (lt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qi}"`,
      ),
      null)
    : e;
}
function Oh(e, t) {
  let r, i, n, o, s;
  if (Eh(e)) {
    let a = e.getAttribute("action");
    (i = a ? Ct(a, t) : null),
      (r = e.getAttribute("method") || Ki),
      (n = Ln(e.getAttribute("enctype")) || Qi),
      (o = new FormData(e));
  } else if (Sh(e) || ($h(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((i = l ? Ct(l, t) : null),
      (r = e.getAttribute("formmethod") || a.getAttribute("method") || Ki),
      (n =
        Ln(e.getAttribute("formenctype")) ||
        Ln(a.getAttribute("enctype")) ||
        Qi),
      (o = new FormData(a, e)),
      !Ph())
    ) {
      let { name: c, type: d, value: u } = e;
      if (d === "image") {
        let f = c ? `${c}.` : "";
        o.append(`${f}x`, "0"), o.append(`${f}y`, "0");
      } else c && o.append(c, u);
    }
  } else {
    if (mn(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = Ki), (i = null), (n = Qi), (s = e);
  }
  return (
    o && n === "text/plain" && ((s = o), (o = void 0)),
    { action: i, method: r.toLowerCase(), encType: n, formData: o, body: s }
  );
}
function es(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Lh(e, t) {
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
function Ih(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function Nh(e, t, r) {
  let i = await Promise.all(
    e.map(async (n) => {
      let o = t.routes[n.route.id];
      if (o) {
        let s = await Lh(o, r);
        return s.links ? s.links() : [];
      }
      return [];
    }),
  );
  return Mh(
    i
      .flat(1)
      .filter(Ih)
      .filter((n) => n.rel === "stylesheet" || n.rel === "preload")
      .map((n) =>
        n.rel === "stylesheet"
          ? { ...n, rel: "prefetch", as: "style" }
          : { ...n, rel: "prefetch" },
      ),
  );
}
function da(e, t, r, i, n, o) {
  let s = (l, c) => (r[c] ? l.route.id !== r[c].route.id : !0),
    a = (l, c) => {
      var d;
      return (
        r[c].pathname !== l.pathname ||
        (((d = r[c].route.path) == null ? void 0 : d.endsWith("*")) &&
          r[c].params["*"] !== l.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((l, c) => s(l, c) || a(l, c))
    : o === "data"
      ? t.filter((l, c) => {
          var u;
          let d = i.routes[l.route.id];
          if (!d || !d.hasLoader) return !1;
          if (s(l, c) || a(l, c)) return !0;
          if (l.route.shouldRevalidate) {
            let f = l.route.shouldRevalidate({
              currentUrl: new URL(
                n.pathname + n.search + n.hash,
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
function Fh(e, t, { includeHydrateFallback: r } = {}) {
  return Dh(
    e
      .map((i) => {
        let n = t.routes[i.route.id];
        if (!n) return [];
        let o = [n.module];
        return (
          n.clientActionModule && (o = o.concat(n.clientActionModule)),
          n.clientLoaderModule && (o = o.concat(n.clientLoaderModule)),
          r &&
            n.hydrateFallbackModule &&
            (o = o.concat(n.hydrateFallbackModule)),
          n.imports && (o = o.concat(n.imports)),
          o
        );
      })
      .flat(1),
  );
}
function Dh(e) {
  return [...new Set(e)];
}
function zh(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let i of r) t[i] = e[i];
  return t;
}
function Mh(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((i, n) => {
      let o = JSON.stringify(zh(n));
      return r.has(o) || (r.add(o), i.push({ key: o, link: n })), i;
    }, [])
  );
}
function Uh(e, t) {
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
      : t && Ct(r.pathname, t) === "/"
        ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function oc() {
  let e = U(qr);
  return (
    es(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function Hh() {
  let e = U(fn);
  return (
    es(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var ts = Ee(void 0);
ts.displayName = "FrameworkContext";
function sc() {
  let e = U(ts);
  return (
    es(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function Bh(e, t) {
  let r = U(ts),
    [i, n] = Y(!1),
    [o, s] = Y(!1),
    {
      onFocus: a,
      onBlur: l,
      onMouseEnter: c,
      onMouseLeave: d,
      onTouchStart: u,
    } = t,
    f = Se(null);
  Ie(() => {
    if ((e === "render" && s(!0), e === "viewport")) {
      let w = (y) => {
          y.forEach((x) => {
            s(x.isIntersecting);
          });
        },
        b = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        f.current && b.observe(f.current),
        () => {
          b.disconnect();
        }
      );
    }
  }, [e]),
    Ie(() => {
      if (i) {
        let w = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [i]);
  let h = () => {
      n(!0);
    },
    p = () => {
      n(!1), s(!1);
    };
  return r
    ? e !== "intent"
      ? [o, f, {}]
      : [
          o,
          f,
          {
            onFocus: Xr(a, h),
            onBlur: Xr(l, p),
            onMouseEnter: Xr(c, h),
            onMouseLeave: Xr(d, p),
            onTouchStart: Xr(u, h),
          },
        ]
    : [!1, f, {}];
}
function Xr(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Vh({ page: e, ...t }) {
  let { router: r } = oc(),
    i = ze(() => Ql(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i ? I(jh, { page: e, matches: i, ...t }) : null;
}
function qh(e) {
  let { manifest: t, routeModules: r } = sc(),
    [i, n] = Y([]);
  return (
    Ie(() => {
      let o = !1;
      return (
        Nh(e, t, r).then((s) => {
          o || n(s);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    i
  );
}
function jh({ page: e, matches: t, ...r }) {
  let i = fr(),
    { manifest: n, routeModules: o } = sc(),
    { basename: s } = oc(),
    { loaderData: a, matches: l } = Hh(),
    c = ze(() => da(e, t, l, n, i, "data"), [e, t, l, n, i]),
    d = ze(() => da(e, t, l, n, i, "assets"), [e, t, l, n, i]),
    u = ze(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let p = new Set(),
        w = !1;
      if (
        (t.forEach((y) => {
          var C;
          let x = n.routes[y.route.id];
          !x ||
            !x.hasLoader ||
            ((!c.some((k) => k.route.id === y.route.id) &&
              y.route.id in a &&
              (C = o[y.route.id]) != null &&
              C.shouldRevalidate) ||
            x.hasClientLoader
              ? (w = !0)
              : p.add(y.route.id));
        }),
        p.size === 0)
      )
        return [];
      let b = Uh(e, s);
      return (
        w &&
          p.size > 0 &&
          b.searchParams.set(
            "_routes",
            t
              .filter((y) => p.has(y.route.id))
              .map((y) => y.route.id)
              .join(","),
          ),
        [b.pathname + b.search]
      );
    }, [s, a, i, n, c, t, e, o]),
    f = ze(() => Fh(d, n), [d, n]),
    h = qh(d);
  return I(
    ve,
    null,
    u.map((p) =>
      I("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...r }),
    ),
    f.map((p) => I("link", { key: p, rel: "modulepreload", href: p, ...r })),
    h.map(({ key: p, link: w }) => I("link", { key: p, ...w })),
  );
}
function Wh(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var ac =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ac && (window.__reactRouterVersion = "7.5.0");
} catch {}
function Kh({ basename: e, children: t, window: r }) {
  let i = Se();
  i.current == null && (i.current = Id({ window: r, v5Compat: !0 }));
  let n = i.current,
    [o, s] = Y({ action: n.action, location: n.location }),
    a = kt(
      (l) => {
        pn(() => s(l));
      },
      [s],
    );
  return (
    jt(() => n.listen(a), [n, a]),
    I(Ch, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: n,
    })
  );
}
var lc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cc = $i(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: i = "none",
      relative: n,
      reloadDocument: o,
      replace: s,
      state: a,
      target: l,
      to: c,
      preventScrollReset: d,
      viewTransition: u,
      ...f
    },
    h,
  ) {
    let { basename: p } = U(pt),
      w = typeof c == "string" && lc.test(c),
      b,
      y = !1;
    if (typeof c == "string" && w && ((b = c), ac))
      try {
        let E = new URL(window.location.href),
          H = c.startsWith("//") ? new URL(E.protocol + c) : new URL(c),
          N = Ct(H.pathname, p);
        H.origin === E.origin && N != null
          ? (c = N + H.search + H.hash)
          : (y = !0);
      } catch {
        lt(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let x = sh(c, { relative: n }),
      [C, k, S] = Bh(i, f),
      A = Xh(c, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: n,
        viewTransition: u,
      });
    function R(E) {
      t && t(E), E.defaultPrevented || A(E);
    }
    let P = I("a", {
      ...f,
      ...S,
      href: b || x,
      onClick: y || o ? t : R,
      ref: Wh(h, k),
      target: l,
      "data-discover": !w && r === "render" ? "true" : void 0,
    });
    return C && !w ? I(ve, null, P, I(Vh, { page: x })) : P;
  });
cc.displayName = "Link";
var Qh = $i(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: n = !1,
    style: o,
    to: s,
    viewTransition: a,
    children: l,
    ...c
  },
  d,
) {
  let u = Ti(s, { relative: c.relative }),
    f = fr(),
    h = U(fn),
    { navigator: p, basename: w } = U(pt),
    b = h != null && rp(u) && a === !0,
    y = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    x = f.pathname,
    C =
      h && h.navigation && h.navigation.location
        ? h.navigation.location.pathname
        : null;
  r ||
    ((x = x.toLowerCase()),
    (C = C ? C.toLowerCase() : null),
    (y = y.toLowerCase())),
    C && w && (C = Ct(C, w) || C);
  const k = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
  let S = x === y || (!n && x.startsWith(y) && x.charAt(k) === "/"),
    A =
      C != null &&
      (C === y || (!n && C.startsWith(y) && C.charAt(y.length) === "/")),
    R = { isActive: S, isPending: A, isTransitioning: b },
    P = S ? t : void 0,
    E;
  typeof i == "function"
    ? (E = i(R))
    : (E = [
        i,
        S ? "active" : null,
        A ? "pending" : null,
        b ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let H = typeof o == "function" ? o(R) : o;
  return I(
    cc,
    {
      ...c,
      "aria-current": P,
      className: E,
      ref: d,
      style: H,
      to: s,
      viewTransition: a,
    },
    typeof l == "function" ? l(R) : l,
  );
});
Qh.displayName = "NavLink";
var Gh = $i(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: i,
      replace: n,
      state: o,
      method: s = Ki,
      action: a,
      onSubmit: l,
      relative: c,
      preventScrollReset: d,
      viewTransition: u,
      ...f
    },
    h,
  ) => {
    let p = ep(),
      w = tp(a, { relative: c }),
      b = s.toLowerCase() === "get" ? "get" : "post",
      y = typeof a == "string" && lc.test(a);
    return I("form", {
      ref: h,
      method: b,
      action: w,
      onSubmit: i
        ? l
        : (C) => {
            if ((l && l(C), C.defaultPrevented)) return;
            C.preventDefault();
            let k = C.nativeEvent.submitter,
              S = (k == null ? void 0 : k.getAttribute("formmethod")) || s;
            p(k || C.currentTarget, {
              fetcherKey: t,
              method: S,
              navigate: r,
              replace: n,
              state: o,
              relative: c,
              preventScrollReset: d,
              viewTransition: u,
            });
          },
      ...f,
      "data-discover": !y && e === "render" ? "true" : void 0,
    });
  },
);
Gh.displayName = "Form";
function Yh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function uc(e) {
  let t = U(qr);
  return Z(t, Yh(e)), t;
}
function Xh(
  e,
  {
    target: t,
    replace: r,
    state: i,
    preventScrollReset: n,
    relative: o,
    viewTransition: s,
  } = {},
) {
  let a = ah(),
    l = fr(),
    c = Ti(e, { relative: o });
  return kt(
    (d) => {
      if (Ah(d, t)) {
        d.preventDefault();
        let u = r !== void 0 ? r : bi(l) === bi(c);
        a(e, {
          replace: u,
          state: i,
          preventScrollReset: n,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, a, c, r, i, t, e, n, o, s],
  );
}
var Jh = 0,
  Zh = () => `__${String(++Jh)}__`;
function ep() {
  let { router: e } = uc("useSubmit"),
    { basename: t } = U(pt),
    r = bh();
  return kt(
    async (i, n = {}) => {
      let { action: o, method: s, encType: a, formData: l, body: c } = Oh(i, t);
      if (n.navigate === !1) {
        let d = n.fetcherKey || Zh();
        await e.fetch(d, r, n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: l,
          body: c,
          formMethod: n.method || s,
          formEncType: n.encType || a,
          flushSync: n.flushSync,
        });
      } else
        await e.navigate(n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: l,
          body: c,
          formMethod: n.method || s,
          formEncType: n.encType || a,
          replace: n.replace,
          state: n.state,
          fromRouteId: r,
          flushSync: n.flushSync,
          viewTransition: n.viewTransition,
        });
    },
    [e, t, r],
  );
}
function tp(e, { relative: t } = {}) {
  let { basename: r } = U(pt),
    i = U(ft);
  Z(i, "useFormAction must be used inside a RouteContext");
  let [n] = i.matches.slice(-1),
    o = { ...Ti(e || ".", { relative: t }) },
    s = fr();
  if (e == null) {
    o.search = s.search;
    let a = new URLSearchParams(o.search),
      l = a.getAll("index");
    if (l.some((d) => d === "")) {
      a.delete("index"),
        l.filter((u) => u).forEach((u) => a.append("index", u));
      let d = a.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      n.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : wt([r, o.pathname])),
    bi(o)
  );
}
function rp(e, t = {}) {
  let r = U(ec);
  Z(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = uc("useViewTransitionState"),
    n = Ti(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = Ct(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    s = Ct(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return tn(n.pathname, s) != null || tn(n.pathname, o) != null;
}
new TextEncoder();
var go = "";
function vo(e) {
  go = e;
}
function ip(e = "") {
  if (!go) {
    const t = [...document.getElementsByTagName("script")],
      r = t.find((i) => i.hasAttribute("data-shoelace"));
    if (r) vo(r.getAttribute("data-shoelace"));
    else {
      const i = t.find(
        (o) =>
          /shoelace(\.min)?\.js($|\?)/.test(o.src) ||
          /shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src),
      );
      let n = "";
      i && (n = i.getAttribute("src")), vo(n.split("/").slice(0, -1).join("/"));
    }
  }
  return go.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var np = te`
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
  dc =
    (e = "value") =>
    (t, r) => {
      const i = t.constructor,
        n = i.prototype.attributeChangedCallback;
      i.prototype.attributeChangedCallback = function (o, s, a) {
        var l;
        const c = i.getPropertyOptions(e),
          d = typeof c.attribute == "string" ? c.attribute : e;
        if (o === d) {
          const u = c.converter || Dr,
            h = (
              typeof u == "function"
                ? u
                : (l = u == null ? void 0 : u.fromAttribute) != null
                  ? l
                  : Dr.fromAttribute
            )(a, c.type);
          this[e] !== h && (this[r] = h);
        }
        n.call(this, o, s, a);
      };
    },
  hc = te`
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
  Jr = new WeakMap(),
  Zr = new WeakMap(),
  ei = new WeakMap(),
  In = new WeakSet(),
  Mi = new WeakMap(),
  rs = class {
    constructor(e, t) {
      (this.handleFormData = (r) => {
        const i = this.options.disabled(this.host),
          n = this.options.name(this.host),
          o = this.options.value(this.host),
          s = this.host.tagName.toLowerCase() === "sl-button";
        this.host.isConnected &&
          !i &&
          !s &&
          typeof n == "string" &&
          n.length > 0 &&
          typeof o < "u" &&
          (Array.isArray(o)
            ? o.forEach((a) => {
                r.formData.append(n, a.toString());
              })
            : r.formData.append(n, o.toString()));
      }),
        (this.handleFormSubmit = (r) => {
          var i;
          const n = this.options.disabled(this.host),
            o = this.options.reportValidity;
          this.form &&
            !this.form.noValidate &&
            ((i = Jr.get(this.form)) == null ||
              i.forEach((s) => {
                this.setUserInteracted(s, !0);
              })),
            this.form &&
              !this.form.noValidate &&
              !n &&
              !o(this.host) &&
              (r.preventDefault(), r.stopImmediatePropagation());
        }),
        (this.handleFormReset = () => {
          this.options.setValue(
            this.host,
            this.options.defaultValue(this.host),
          ),
            this.setUserInteracted(this.host, !1),
            Mi.set(this.host, []);
        }),
        (this.handleInteraction = (r) => {
          const i = Mi.get(this.host);
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
        (this.options = hr(
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
        Mi.set(this.host, []),
        this.options.assumeInteractionOn.forEach((t) => {
          this.host.addEventListener(t, this.handleInteraction);
        });
    }
    hostDisconnected() {
      this.detachForm(),
        Mi.delete(this.host),
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
          Jr.has(this.form)
            ? Jr.get(this.form).add(this.host)
            : Jr.set(this.form, new Set([this.host])),
          this.form.addEventListener("formdata", this.handleFormData),
          this.form.addEventListener("submit", this.handleFormSubmit),
          this.form.addEventListener("reset", this.handleFormReset),
          Zr.has(this.form) ||
            (Zr.set(this.form, this.form.reportValidity),
            (this.form.reportValidity = () => this.reportFormValidity())),
          ei.has(this.form) ||
            (ei.set(this.form, this.form.checkValidity),
            (this.form.checkValidity = () => this.checkFormValidity())))
        : (this.form = void 0);
    }
    detachForm() {
      if (!this.form) return;
      const e = Jr.get(this.form);
      e &&
        (e.delete(this.host),
        e.size <= 0 &&
          (this.form.removeEventListener("formdata", this.handleFormData),
          this.form.removeEventListener("submit", this.handleFormSubmit),
          this.form.removeEventListener("reset", this.handleFormReset),
          Zr.has(this.form) &&
            ((this.form.reportValidity = Zr.get(this.form)),
            Zr.delete(this.form)),
          ei.has(this.form) &&
            ((this.form.checkValidity = ei.get(this.form)),
            ei.delete(this.form)),
          (this.form = void 0)));
    }
    setUserInteracted(e, t) {
      t ? In.add(e) : In.delete(e), e.requestUpdate();
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
        r = !!In.has(t),
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
  is = Object.freeze({
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
  });
Object.freeze(un(hr({}, is), { valid: !1, valueMissing: !0 }));
Object.freeze(un(hr({}, is), { valid: !1, customError: !0 }));
var Wt = class {
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
      if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "") return !0;
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
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener(
      "slotchange",
      this.handleSlotChange,
    );
  }
};
function op(e) {
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
var sp = { name: "default", resolver: (e) => ip(`assets/icons/${e}.svg`) },
  ap = sp,
  ha = {
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
  lp = {
    name: "system",
    resolver: (e) =>
      e in ha ? `data:image/svg+xml,${encodeURIComponent(ha[e])}` : "",
  },
  cp = lp,
  up = [ap, cp],
  yo = [];
function dp(e) {
  yo.push(e);
}
function hp(e) {
  yo = yo.filter((t) => t !== e);
}
function pa(e) {
  return up.find((t) => t.name === e);
}
var pp = te`
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
`;
function se(e, t) {
  const r = hr({ waitUntilFirstUpdate: !1 }, t);
  return (i, n) => {
    const { update: o } = i,
      s = Array.isArray(e) ? e : [e];
    i.update = function (a) {
      s.forEach((l) => {
        const c = l;
        if (a.has(c)) {
          const d = a.get(c),
            u = this[c];
          d !== u &&
            (!r.waitUntilFirstUpdate || this.hasUpdated) &&
            this[n](d, u);
        }
      }),
        o.call(this, a);
    };
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const fp = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0,
  pc = (e) => e.strings === void 0,
  mp = {},
  gp = (e, t = mp) => (e._$AH = t);
var ti = Symbol(),
  Ui = Symbol(),
  Nn,
  Fn = new Map(),
  _e = class extends Q {
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
          (this.svg = F`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`),
          this.svg
        );
      try {
        if (((i = await fetch(e, { mode: "cors" })), !i.ok))
          return i.status === 410 ? ti : Ui;
      } catch {
        return Ui;
      }
      try {
        const n = document.createElement("div");
        n.innerHTML = await i.text();
        const o = n.firstElementChild;
        if (
          ((r = o == null ? void 0 : o.tagName) == null
            ? void 0
            : r.toLowerCase()) !== "svg"
        )
          return ti;
        Nn || (Nn = new DOMParser());
        const a = Nn.parseFromString(
          o.outerHTML,
          "text/html",
        ).body.querySelector("svg");
        return a ? (a.part.add("svg"), document.adoptNode(a)) : ti;
      } catch {
        return ti;
      }
    }
    connectedCallback() {
      super.connectedCallback(), dp(this);
    }
    firstUpdated() {
      (this.initialRender = !0), this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), hp(this);
    }
    getIconSource() {
      const e = pa(this.library);
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
        i = r ? pa(this.library) : void 0;
      if (!t) {
        this.svg = null;
        return;
      }
      let n = Fn.get(t);
      if (
        (n || ((n = this.resolveIcon(t, i)), Fn.set(t, n)), !this.initialRender)
      )
        return;
      const o = await n;
      if ((o === Ui && Fn.delete(t), t === this.getIconSource().url)) {
        if (fp(o)) {
          if (((this.svg = o), i)) {
            await this.updateComplete;
            const s = this.shadowRoot.querySelector("[part='svg']");
            typeof i.mutator == "function" && s && i.mutator(s);
          }
          return;
        }
        switch (o) {
          case Ui:
          case ti:
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
_e.styles = [oe, pp];
m([Je()], _e.prototype, "svg", 2);
m([_({ reflect: !0 })], _e.prototype, "name", 2);
m([_()], _e.prototype, "src", 2);
m([_()], _e.prototype, "label", 2);
m([_({ reflect: !0 })], _e.prototype, "library", 2);
m([se("label")], _e.prototype, "handleLabelChange", 1);
m([se(["name", "src", "library"])], _e.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Pt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 },
  ns =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
let os = class {
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
 */ const le = ns(
  class extends os {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== Pt.ATTRIBUTE ||
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
      var i, n;
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
        const s = !!t[o];
        s === this.st.has(o) ||
          ((n = this.nt) != null && n.has(o)) ||
          (s ? (r.add(o), this.st.add(o)) : (r.remove(o), this.st.delete(o)));
      }
      return Qe;
    }
  },
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = (e) => e ?? ie;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const bo = ns(
  class extends os {
    constructor(e) {
      if (
        (super(e),
        e.type !== Pt.PROPERTY &&
          e.type !== Pt.ATTRIBUTE &&
          e.type !== Pt.BOOLEAN_ATTRIBUTE)
      )
        throw Error(
          "The `live` directive is not allowed on child or event bindings",
        );
      if (!pc(e))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(e) {
      return e;
    }
    update(e, [t]) {
      if (t === Qe || t === ie) return t;
      const r = e.element,
        i = e.name;
      if (e.type === Pt.PROPERTY) {
        if (t === r[i]) return Qe;
      } else if (e.type === Pt.BOOLEAN_ATTRIBUTE) {
        if (!!t === r.hasAttribute(i)) return Qe;
      } else if (e.type === Pt.ATTRIBUTE && r.getAttribute(i) === t + "")
        return Qe;
      return gp(e), t;
    }
  },
);
var L = class extends Q {
  constructor() {
    super(...arguments),
      (this.formControlController = new rs(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"],
      })),
      (this.hasSlotController = new Wt(this, "help-text", "label")),
      (this.localize = new Ue(this)),
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
    const n = t ?? this.input.selectionStart,
      o = r ?? this.input.selectionEnd;
    this.input.setRangeText(e, n, o, i),
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
    return F`
      <div
        part="form-control"
        class=${le({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-label": r, "form-control--has-help-text": i })}
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
            class=${le({ input: !0, "input--small": this.size === "small", "input--medium": this.size === "medium", "input--large": this.size === "large", "input--pill": this.pill, "input--standard": !this.filled, "input--filled": this.filled, "input--disabled": this.disabled, "input--focused": this.hasFocus, "input--empty": !this.value, "input--no-spin-buttons": this.noSpinButtons })}
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
              name=${D(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${bo(this.value)}
              autocapitalize=${D(this.autocapitalize)}
              autocomplete=${D(this.autocomplete)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${D(this.pattern)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
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
                ? F`
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
                ? F`
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
                        ? F`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `
                        : F`
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
L.styles = [oe, hc, np];
L.dependencies = { "sl-icon": _e };
m([q(".input__control")], L.prototype, "input", 2);
m([Je()], L.prototype, "hasFocus", 2);
m([_()], L.prototype, "title", 2);
m([_({ reflect: !0 })], L.prototype, "type", 2);
m([_()], L.prototype, "name", 2);
m([_()], L.prototype, "value", 2);
m([dc()], L.prototype, "defaultValue", 2);
m([_({ reflect: !0 })], L.prototype, "size", 2);
m([_({ type: Boolean, reflect: !0 })], L.prototype, "filled", 2);
m([_({ type: Boolean, reflect: !0 })], L.prototype, "pill", 2);
m([_()], L.prototype, "label", 2);
m([_({ attribute: "help-text" })], L.prototype, "helpText", 2);
m([_({ type: Boolean })], L.prototype, "clearable", 2);
m([_({ type: Boolean, reflect: !0 })], L.prototype, "disabled", 2);
m([_()], L.prototype, "placeholder", 2);
m([_({ type: Boolean, reflect: !0 })], L.prototype, "readonly", 2);
m(
  [_({ attribute: "password-toggle", type: Boolean })],
  L.prototype,
  "passwordToggle",
  2,
);
m(
  [_({ attribute: "password-visible", type: Boolean })],
  L.prototype,
  "passwordVisible",
  2,
);
m(
  [_({ attribute: "no-spin-buttons", type: Boolean })],
  L.prototype,
  "noSpinButtons",
  2,
);
m([_({ reflect: !0 })], L.prototype, "form", 2);
m([_({ type: Boolean, reflect: !0 })], L.prototype, "required", 2);
m([_()], L.prototype, "pattern", 2);
m([_({ type: Number })], L.prototype, "minlength", 2);
m([_({ type: Number })], L.prototype, "maxlength", 2);
m([_()], L.prototype, "min", 2);
m([_()], L.prototype, "max", 2);
m([_()], L.prototype, "step", 2);
m([_()], L.prototype, "autocapitalize", 2);
m([_()], L.prototype, "autocorrect", 2);
m([_()], L.prototype, "autocomplete", 2);
m([_({ type: Boolean })], L.prototype, "autofocus", 2);
m([_()], L.prototype, "enterkeyhint", 2);
m(
  [
    _({
      type: Boolean,
      converter: {
        fromAttribute: (e) => !(!e || e === "false"),
        toAttribute: (e) => (e ? "true" : "false"),
      },
    }),
  ],
  L.prototype,
  "spellcheck",
  2,
);
m([_()], L.prototype, "inputmode", 2);
m(
  [se("disabled", { waitUntilFirstUpdate: !0 })],
  L.prototype,
  "handleDisabledChange",
  1,
);
m(
  [se("step", { waitUntilFirstUpdate: !0 })],
  L.prototype,
  "handleStepChange",
  1,
);
m(
  [se("value", { waitUntilFirstUpdate: !0 })],
  L.prototype,
  "handleValueChange",
  1,
);
var vp = "sl-input";
L.define("sl-input");
var yp = ue({
    tagName: vp,
    elementClass: L,
    react: ce,
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
  Te = yp,
  bp = te`
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
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const fc = Symbol.for(""),
  _p = (e) => {
    if ((e == null ? void 0 : e.r) === fc)
      return e == null ? void 0 : e._$litStatic$;
  },
  rn = (e, ...t) => ({
    _$litStatic$: t.reduce(
      (r, i, n) =>
        r +
        ((o) => {
          if (o._$litStatic$ !== void 0) return o._$litStatic$;
          throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
        })(i) +
        e[n + 1],
      e[0],
    ),
    r: fc,
  }),
  fa = new Map(),
  wp =
    (e) =>
    (t, ...r) => {
      const i = r.length;
      let n, o;
      const s = [],
        a = [];
      let l,
        c = 0,
        d = !1;
      for (; c < i; ) {
        for (l = t[c]; c < i && ((o = r[c]), (n = _p(o)) !== void 0); )
          (l += n + t[++c]), (d = !0);
        c !== i && a.push(o), s.push(l), c++;
      }
      if ((c === i && s.push(t[i]), d)) {
        const u = s.join("$$lit$$");
        (t = fa.get(u)) === void 0 && ((s.raw = s), fa.set(u, (t = s))),
          (r = a);
      }
      return e(t, ...r);
    },
  Gi = wp(F);
var V = class extends Q {
  constructor() {
    super(...arguments),
      (this.formControlController = new rs(this, {
        assumeInteractionOn: ["click"],
      })),
      (this.hasSlotController = new Wt(this, "[default]", "prefix", "suffix")),
      (this.localize = new Ue(this)),
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
    return this.isButton() ? this.button.validity : is;
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
      t = e ? rn`a` : rn`button`;
    return Gi`
      <${t}
        part="base"
        class=${le({ button: !0, "button--default": this.variant === "default", "button--primary": this.variant === "primary", "button--success": this.variant === "success", "button--neutral": this.variant === "neutral", "button--warning": this.variant === "warning", "button--danger": this.variant === "danger", "button--text": this.variant === "text", "button--small": this.size === "small", "button--medium": this.size === "medium", "button--large": this.size === "large", "button--caret": this.caret, "button--circle": this.circle, "button--disabled": this.disabled, "button--focused": this.hasFocus, "button--loading": this.loading, "button--standard": !this.outline, "button--outline": this.outline, "button--pill": this.pill, "button--rtl": this.localize.dir() === "rtl", "button--has-label": this.hasSlotController.test("[default]"), "button--has-prefix": this.hasSlotController.test("prefix"), "button--has-suffix": this.hasSlotController.test("suffix") })}
        ?disabled=${D(e ? void 0 : this.disabled)}
        type=${D(e ? void 0 : this.type)}
        title=${this.title}
        name=${D(e ? void 0 : this.name)}
        value=${D(e ? void 0 : this.value)}
        href=${D(e && !this.disabled ? this.href : void 0)}
        target=${D(e ? this.target : void 0)}
        download=${D(e ? this.download : void 0)}
        rel=${D(e ? this.rel : void 0)}
        role=${D(e ? void 0 : "button")}
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
        ${this.caret ? Gi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? Gi`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${t}>
    `;
  }
};
V.styles = [oe, bp];
V.dependencies = { "sl-icon": _e, "sl-spinner": Ei };
m([q(".button")], V.prototype, "button", 2);
m([Je()], V.prototype, "hasFocus", 2);
m([Je()], V.prototype, "invalid", 2);
m([_()], V.prototype, "title", 2);
m([_({ reflect: !0 })], V.prototype, "variant", 2);
m([_({ reflect: !0 })], V.prototype, "size", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "caret", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "disabled", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "loading", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "outline", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "pill", 2);
m([_({ type: Boolean, reflect: !0 })], V.prototype, "circle", 2);
m([_()], V.prototype, "type", 2);
m([_()], V.prototype, "name", 2);
m([_()], V.prototype, "value", 2);
m([_()], V.prototype, "href", 2);
m([_()], V.prototype, "target", 2);
m([_()], V.prototype, "rel", 2);
m([_()], V.prototype, "download", 2);
m([_()], V.prototype, "form", 2);
m([_({ attribute: "formaction" })], V.prototype, "formAction", 2);
m([_({ attribute: "formenctype" })], V.prototype, "formEnctype", 2);
m([_({ attribute: "formmethod" })], V.prototype, "formMethod", 2);
m(
  [_({ attribute: "formnovalidate", type: Boolean })],
  V.prototype,
  "formNoValidate",
  2,
);
m([_({ attribute: "formtarget" })], V.prototype, "formTarget", 2);
m(
  [se("disabled", { waitUntilFirstUpdate: !0 })],
  V.prototype,
  "handleDisabledChange",
  1,
);
var xp = "sl-button";
V.define("sl-button");
var Cp = ue({
    tagName: xp,
    elementClass: V,
    react: ce,
    events: {
      onSlBlur: "sl-blur",
      onSlFocus: "sl-focus",
      onSlInvalid: "sl-invalid",
    },
    displayName: "SlButton",
  }),
  Oi = Cp,
  kp = te`
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
  ma = new WeakMap();
function mc(e) {
  let t = ma.get(e);
  return t || ((t = window.getComputedStyle(e, null)), ma.set(e, t)), t;
}
function Sp(e) {
  if (typeof e.checkVisibility == "function")
    return e.checkVisibility({ checkOpacity: !1, checkVisibilityCSS: !0 });
  const t = mc(e);
  return t.visibility !== "hidden" && t.display !== "none";
}
function Ep(e) {
  const t = mc(e),
    { overflowY: r, overflowX: i } = t;
  return r === "scroll" || i === "scroll"
    ? !0
    : r !== "auto" || i !== "auto"
      ? !1
      : (e.scrollHeight > e.clientHeight && r === "auto") ||
        (e.scrollWidth > e.clientWidth && i === "auto");
}
function $p(e) {
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
      s = `input[type='radio'][name="${e.getAttribute("name")}"]`,
      a = o.querySelector(`${s}:checked`);
    return a ? a === e : o.querySelector(s) === e;
  }
  return Sp(e)
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
      : Ep(e)
    : !1;
}
function Rp(e) {
  var t, r;
  const i = _o(e),
    n = (t = i[0]) != null ? t : null,
    o = (r = i[i.length - 1]) != null ? r : null;
  return { start: n, end: o };
}
function Ap(e, t) {
  var r;
  return (
    ((r = e.getRootNode({ composed: !0 })) == null ? void 0 : r.host) !== t
  );
}
function _o(e) {
  const t = new WeakMap(),
    r = [];
  function i(n) {
    if (n instanceof Element) {
      if (n.hasAttribute("inert") || n.closest("[inert]") || t.has(n)) return;
      t.set(n, !0),
        !r.includes(n) && $p(n) && r.push(n),
        n instanceof HTMLSlotElement &&
          Ap(n, e) &&
          n.assignedElements({ flatten: !0 }).forEach((o) => {
            i(o);
          }),
        n.shadowRoot !== null &&
          n.shadowRoot.mode === "open" &&
          i(n.shadowRoot);
    }
    for (const o of n.children) i(o);
  }
  return (
    i(e),
    r.sort((n, o) => {
      const s = Number(n.getAttribute("tabindex")) || 0;
      return (Number(o.getAttribute("tabindex")) || 0) - s;
    })
  );
}
function* ss(e = document.activeElement) {
  e != null &&
    (yield e,
    "shadowRoot" in e &&
      e.shadowRoot &&
      e.shadowRoot.mode !== "closed" &&
      (yield* Au(ss(e.shadowRoot.activeElement))));
}
function Pp() {
  return [...ss()].pop();
}
var ri = [],
  gc = class {
    constructor(e) {
      (this.tabDirection = "forward"),
        (this.handleFocusIn = () => {
          this.isActive() && this.checkFocus();
        }),
        (this.handleKeyDown = (t) => {
          var r;
          if (t.key !== "Tab" || this.isExternalActivated || !this.isActive())
            return;
          const i = Pp();
          if (
            ((this.previousFocus = i),
            this.previousFocus &&
              this.possiblyHasTabbableChildren(this.previousFocus))
          )
            return;
          t.shiftKey
            ? (this.tabDirection = "backward")
            : (this.tabDirection = "forward");
          const n = _o(this.element);
          let o = n.findIndex((a) => a === i);
          this.previousFocus = this.currentFocus;
          const s = this.tabDirection === "forward" ? 1 : -1;
          for (;;) {
            o + s >= n.length
              ? (o = 0)
              : o + s < 0
                ? (o = n.length - 1)
                : (o += s),
              (this.previousFocus = this.currentFocus);
            const a = n[o];
            if (
              (this.tabDirection === "backward" &&
                this.previousFocus &&
                this.possiblyHasTabbableChildren(this.previousFocus)) ||
              (a && this.possiblyHasTabbableChildren(a))
            )
              return;
            t.preventDefault(),
              (this.currentFocus = a),
              (r = this.currentFocus) == null || r.focus({ preventScroll: !1 });
            const l = [...ss()];
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
      ri.push(this.element),
        document.addEventListener("focusin", this.handleFocusIn),
        document.addEventListener("keydown", this.handleKeyDown),
        document.addEventListener("keyup", this.handleKeyUp);
    }
    deactivate() {
      (ri = ri.filter((e) => e !== this.element)),
        (this.currentFocus = null),
        document.removeEventListener("focusin", this.handleFocusIn),
        document.removeEventListener("keydown", this.handleKeyDown),
        document.removeEventListener("keyup", this.handleKeyUp);
    }
    isActive() {
      return ri[ri.length - 1] === this.element;
    }
    activateExternal() {
      this.isExternalActivated = !0;
    }
    deactivateExternal() {
      this.isExternalActivated = !1;
    }
    checkFocus() {
      if (this.isActive() && !this.isExternalActivated) {
        const e = _o(this.element);
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
  },
  wo = new Set();
function Tp() {
  const e = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
}
function Op() {
  const e = Number(
    getComputedStyle(document.body).paddingRight.replace(/px/, ""),
  );
  return isNaN(e) || !e ? 0 : e;
}
function di(e) {
  if (
    (wo.add(e), !document.documentElement.classList.contains("sl-scroll-lock"))
  ) {
    const t = Tp() + Op();
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
function hi(e) {
  wo.delete(e),
    wo.size === 0 &&
      (document.documentElement.classList.remove("sl-scroll-lock"),
      document.documentElement.style.removeProperty("--sl-scroll-lock-size"));
}
var Lp = te`
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
  ye = class extends Q {
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
        t = e ? rn`a` : rn`button`;
      return Gi`
      <${t}
        part="base"
        class=${le({ "icon-button": !0, "icon-button--disabled": !e && this.disabled, "icon-button--focused": this.hasFocus })}
        ?disabled=${D(e ? void 0 : this.disabled)}
        type=${D(e ? void 0 : "button")}
        href=${D(e ? this.href : void 0)}
        target=${D(e ? this.target : void 0)}
        download=${D(e ? this.download : void 0)}
        rel=${D(e && this.target ? "noreferrer noopener" : void 0)}
        role=${D(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
    }
  };
ye.styles = [oe, Lp];
ye.dependencies = { "sl-icon": _e };
m([q(".icon-button")], ye.prototype, "button", 2);
m([Je()], ye.prototype, "hasFocus", 2);
m([_()], ye.prototype, "name", 2);
m([_()], ye.prototype, "library", 2);
m([_()], ye.prototype, "src", 2);
m([_()], ye.prototype, "href", 2);
m([_()], ye.prototype, "target", 2);
m([_()], ye.prototype, "download", 2);
m([_()], ye.prototype, "label", 2);
m([_({ type: Boolean, reflect: !0 })], ye.prototype, "disabled", 2);
var vc = new Map(),
  Ip = new WeakMap();
function Np(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function ga(e, t) {
  return t.toLowerCase() === "rtl"
    ? { keyframes: e.rtlKeyframes || e.keyframes, options: e.options }
    : e;
}
function X(e, t) {
  vc.set(e, Np(t));
}
function ge(e, t, r) {
  const i = Ip.get(e);
  if (i != null && i[t]) return ga(i[t], r.dir);
  const n = vc.get(t);
  return n ? ga(n, r.dir) : { keyframes: [], options: { duration: 0 } };
}
function ct(e, t) {
  return new Promise((r) => {
    function i(n) {
      n.target === e && (e.removeEventListener(t, i), r());
    }
    e.addEventListener(t, i);
  });
}
function Ce(e, t, r) {
  return new Promise((i) => {
    if ((r == null ? void 0 : r.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const n = e.animate(t, un(hr({}, r), { duration: Fp() ? 0 : r.duration }));
    n.addEventListener("cancel", i, { once: !0 }),
      n.addEventListener("finish", i, { once: !0 });
  });
}
function va(e) {
  return (
    (e = e.toString().toLowerCase()),
    e.indexOf("ms") > -1
      ? parseFloat(e)
      : e.indexOf("s") > -1
        ? parseFloat(e) * 1e3
        : parseFloat(e)
  );
}
function Fp() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Le(e) {
  return Promise.all(
    e.getAnimations().map(
      (t) =>
        new Promise((r) => {
          t.cancel(), requestAnimationFrame(r);
        }),
    ),
  );
}
function ya(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Ne = class extends Q {
  constructor() {
    super(...arguments),
      (this.hasSlotController = new Wt(this, "footer")),
      (this.localize = new Ue(this)),
      (this.modal = new gc(this)),
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
        this.contained || (this.modal.activate(), di(this)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), hi(this), this.removeOpenListeners();
  }
  requestClose(e) {
    if (
      this.emit("sl-request-close", { cancelable: !0, detail: { source: e } })
        .defaultPrevented
    ) {
      const r = ge(this, "drawer.denyClose", { dir: this.localize.dir() });
      Ce(this.panel, r.keyframes, r.options);
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
        this.contained || (this.modal.activate(), di(this));
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"),
        await Promise.all([Le(this.drawer), Le(this.overlay)]),
        (this.drawer.hidden = !1),
        requestAnimationFrame(() => {
          this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented ||
            (e
              ? e.focus({ preventScroll: !0 })
              : this.panel.focus({ preventScroll: !0 })),
            e && e.setAttribute("autofocus", "");
        });
      const t = ge(this, `drawer.show${ya(this.placement)}`, {
          dir: this.localize.dir(),
        }),
        r = ge(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        Ce(this.panel, t.keyframes, t.options),
        Ce(this.overlay, r.keyframes, r.options),
      ]),
        this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"),
        this.removeOpenListeners(),
        this.contained || (this.modal.deactivate(), hi(this)),
        await Promise.all([Le(this.drawer), Le(this.overlay)]);
      const e = ge(this, `drawer.hide${ya(this.placement)}`, {
          dir: this.localize.dir(),
        }),
        t = ge(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        Ce(this.overlay, t.keyframes, t.options).then(() => {
          this.overlay.hidden = !0;
        }),
        Ce(this.panel, e.keyframes, e.options).then(() => {
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
    this.open && !this.contained && (this.modal.activate(), di(this)),
      this.open && this.contained && (this.modal.deactivate(), hi(this));
  }
  async show() {
    if (!this.open) return (this.open = !0), ct(this, "sl-after-show");
  }
  async hide() {
    if (this.open) return (this.open = !1), ct(this, "sl-after-hide");
  }
  render() {
    return F`
      <div
        part="base"
        class=${le({ drawer: !0, "drawer--open": this.open, "drawer--top": this.placement === "top", "drawer--end": this.placement === "end", "drawer--bottom": this.placement === "bottom", "drawer--start": this.placement === "start", "drawer--contained": this.contained, "drawer--fixed": !this.contained, "drawer--rtl": this.localize.dir() === "rtl", "drawer--has-footer": this.hasSlotController.test("footer") })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${D(this.noHeader ? this.label : void 0)}
          aria-labelledby=${D(this.noHeader ? void 0 : "title")}
          tabindex="0"
        >
          ${
            this.noHeader
              ? ""
              : F`
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
Ne.styles = [oe, kp];
Ne.dependencies = { "sl-icon-button": ye };
m([q(".drawer")], Ne.prototype, "drawer", 2);
m([q(".drawer__panel")], Ne.prototype, "panel", 2);
m([q(".drawer__overlay")], Ne.prototype, "overlay", 2);
m([_({ type: Boolean, reflect: !0 })], Ne.prototype, "open", 2);
m([_({ reflect: !0 })], Ne.prototype, "label", 2);
m([_({ reflect: !0 })], Ne.prototype, "placement", 2);
m([_({ type: Boolean, reflect: !0 })], Ne.prototype, "contained", 2);
m(
  [_({ attribute: "no-header", type: Boolean, reflect: !0 })],
  Ne.prototype,
  "noHeader",
  2,
);
m(
  [se("open", { waitUntilFirstUpdate: !0 })],
  Ne.prototype,
  "handleOpenChange",
  1,
);
m(
  [se("contained", { waitUntilFirstUpdate: !0 })],
  Ne.prototype,
  "handleNoModalChange",
  1,
);
X("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" },
  ],
  options: { duration: 250, easing: "ease" },
});
X("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
X("drawer.showEnd", {
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
X("drawer.hideEnd", {
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
X("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" },
  ],
  options: { duration: 250, easing: "ease" },
});
X("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" },
  ],
  options: { duration: 250, easing: "ease" },
});
X("drawer.showStart", {
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
X("drawer.hideStart", {
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
X("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 },
});
X("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 },
});
X("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 },
});
var Dp = "sl-drawer";
Ne.define("sl-drawer");
var zp = ue({
    tagName: Dp,
    elementClass: Ne,
    react: ce,
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
  yc = zp,
  Mp = te`
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
  de = class extends Q {
    constructor() {
      super(...arguments),
        (this.formControlController = new rs(this, {
          value: (e) => (e.checked ? e.value || "on" : void 0),
          defaultValue: (e) => e.defaultChecked,
          setValue: (e, t) => (e.checked = t),
        })),
        (this.hasSlotController = new Wt(this, "help-text")),
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
      return F`
      <div
        class=${le({ "form-control": !0, "form-control--small": this.size === "small", "form-control--medium": this.size === "medium", "form-control--large": this.size === "large", "form-control--has-help-text": t })}
      >
        <label
          part="base"
          class=${le({ checkbox: !0, "checkbox--checked": this.checked, "checkbox--disabled": this.disabled, "checkbox--focused": this.hasFocus, "checkbox--indeterminate": this.indeterminate, "checkbox--small": this.size === "small", "checkbox--medium": this.size === "medium", "checkbox--large": this.size === "large" })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${bo(this.indeterminate)}
            .checked=${bo(this.checked)}
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
                ? F`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `
                : ""
            }
            ${
              !this.checked && this.indeterminate
                ? F`
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
de.styles = [oe, hc, Mp];
de.dependencies = { "sl-icon": _e };
m([q('input[type="checkbox"]')], de.prototype, "input", 2);
m([Je()], de.prototype, "hasFocus", 2);
m([_()], de.prototype, "title", 2);
m([_()], de.prototype, "name", 2);
m([_()], de.prototype, "value", 2);
m([_({ reflect: !0 })], de.prototype, "size", 2);
m([_({ type: Boolean, reflect: !0 })], de.prototype, "disabled", 2);
m([_({ type: Boolean, reflect: !0 })], de.prototype, "checked", 2);
m([_({ type: Boolean, reflect: !0 })], de.prototype, "indeterminate", 2);
m([dc("checked")], de.prototype, "defaultChecked", 2);
m([_({ reflect: !0 })], de.prototype, "form", 2);
m([_({ type: Boolean, reflect: !0 })], de.prototype, "required", 2);
m([_({ attribute: "help-text" })], de.prototype, "helpText", 2);
m(
  [se("disabled", { waitUntilFirstUpdate: !0 })],
  de.prototype,
  "handleDisabledChange",
  1,
);
m(
  [se(["checked", "indeterminate"], { waitUntilFirstUpdate: !0 })],
  de.prototype,
  "handleStateChange",
  1,
);
var Up = "sl-checkbox";
de.define("sl-checkbox");
var Hp = ue({
    tagName: Up,
    elementClass: de,
    react: ce,
    events: {
      onSlBlur: "sl-blur",
      onSlChange: "sl-change",
      onSlFocus: "sl-focus",
      onSlInput: "sl-input",
      onSlInvalid: "sl-invalid",
    },
    displayName: "SlCheckbox",
  }),
  ii = Hp,
  Bp = te`
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
  Kt = class extends Q {
    constructor() {
      super(...arguments),
        (this.localize = new Ue(this)),
        (this.variant = "neutral"),
        (this.size = "medium"),
        (this.pill = !1),
        (this.removable = !1);
    }
    handleRemoveClick() {
      this.emit("sl-remove");
    }
    render() {
      return F`
      <span
        part="base"
        class=${le({ tag: !0, "tag--primary": this.variant === "primary", "tag--success": this.variant === "success", "tag--neutral": this.variant === "neutral", "tag--warning": this.variant === "warning", "tag--danger": this.variant === "danger", "tag--text": this.variant === "text", "tag--small": this.size === "small", "tag--medium": this.size === "medium", "tag--large": this.size === "large", "tag--pill": this.pill, "tag--removable": this.removable })}
      >
        <slot part="content" class="tag__content"></slot>

        ${
          this.removable
            ? F`
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
Kt.styles = [oe, Bp];
Kt.dependencies = { "sl-icon-button": ye };
m([_({ reflect: !0 })], Kt.prototype, "variant", 2);
m([_({ reflect: !0 })], Kt.prototype, "size", 2);
m([_({ type: Boolean, reflect: !0 })], Kt.prototype, "pill", 2);
m([_({ type: Boolean })], Kt.prototype, "removable", 2);
var Vp = "sl-tag";
Kt.define("sl-tag");
var qp = ue({
    tagName: Vp,
    elementClass: Kt,
    react: ce,
    events: { onSlRemove: "sl-remove" },
    displayName: "SlTag",
  }),
  jp = qp,
  Wp = "sl-icon-button";
ye.define("sl-icon-button");
var Kp = ue({
    tagName: Wp,
    elementClass: ye,
    react: ce,
    events: { onSlBlur: "sl-blur", onSlFocus: "sl-focus" },
    displayName: "SlIconButton",
  }),
  ke = Kp,
  Qp = te`
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
  Gp = te`
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
const Ut = Math.min,
  De = Math.max,
  nn = Math.round,
  Hi = Math.floor,
  at = (e) => ({ x: e, y: e }),
  Yp = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xp = { start: "end", end: "start" };
function xo(e, t, r) {
  return De(e, Ut(t, r));
}
function jr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ht(e) {
  return e.split("-")[0];
}
function Wr(e) {
  return e.split("-")[1];
}
function bc(e) {
  return e === "x" ? "y" : "x";
}
function as(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(Ht(e)) ? "y" : "x";
}
function ls(e) {
  return bc(ur(e));
}
function Jp(e, t, r) {
  r === void 0 && (r = !1);
  const i = Wr(e),
    n = ls(e),
    o = as(n);
  let s =
    n === "x"
      ? i === (r ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
        ? "bottom"
        : "top";
  return t.reference[o] > t.floating[o] && (s = on(s)), [s, on(s)];
}
function Zp(e) {
  const t = on(e);
  return [Co(e), t, Co(t)];
}
function Co(e) {
  return e.replace(/start|end/g, (t) => Xp[t]);
}
function ef(e, t, r) {
  const i = ["left", "right"],
    n = ["right", "left"],
    o = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? n : i) : t ? i : n;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function tf(e, t, r, i) {
  const n = Wr(e);
  let o = ef(Ht(e), r === "start", i);
  return (
    n && ((o = o.map((s) => s + "-" + n)), t && (o = o.concat(o.map(Co)))), o
  );
}
function on(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yp[t]);
}
function rf(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function _c(e) {
  return typeof e != "number"
    ? rf(e)
    : { top: e, right: e, bottom: e, left: e };
}
function sn(e) {
  const { x: t, y: r, width: i, height: n } = e;
  return {
    width: i,
    height: n,
    top: r,
    left: t,
    right: t + i,
    bottom: r + n,
    x: t,
    y: r,
  };
}
function ba(e, t, r) {
  let { reference: i, floating: n } = e;
  const o = ur(t),
    s = ls(t),
    a = as(s),
    l = Ht(t),
    c = o === "y",
    d = i.x + i.width / 2 - n.width / 2,
    u = i.y + i.height / 2 - n.height / 2,
    f = i[a] / 2 - n[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: d, y: i.y - n.height };
      break;
    case "bottom":
      h = { x: d, y: i.y + i.height };
      break;
    case "right":
      h = { x: i.x + i.width, y: u };
      break;
    case "left":
      h = { x: i.x - n.width, y: u };
      break;
    default:
      h = { x: i.x, y: i.y };
  }
  switch (Wr(t)) {
    case "start":
      h[s] -= f * (r && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const nf = async (e, t, r) => {
  const {
      placement: i = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: s,
    } = r,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: n }),
    { x: d, y: u } = ba(c, i, l),
    f = i,
    h = {},
    p = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: b, fn: y } = a[w],
      {
        x,
        y: C,
        data: k,
        reset: S,
      } = await y({
        x: d,
        y: u,
        initialPlacement: i,
        placement: f,
        strategy: n,
        middlewareData: h,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = x ?? d),
      (u = C ?? u),
      (h = { ...h, [b]: { ...h[b], ...k } }),
      S &&
        p <= 50 &&
        (p++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: n,
                  })
                : S.rects),
          ({ x: d, y: u } = ba(c, f, l))),
        (w = -1));
  }
  return { x: d, y: u, placement: f, strategy: n, middlewareData: h };
};
async function cs(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: i, y: n, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: u = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = jr(t, e),
    p = _c(h),
    b = a[f ? (u === "floating" ? "reference" : "floating") : u],
    y = sn(
      await o.getClippingRect({
        element:
          (r = await (o.isElement == null ? void 0 : o.isElement(b))) == null ||
          r
            ? b
            : b.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    x =
      u === "floating"
        ? { x: i, y: n, width: s.floating.width, height: s.floating.height }
        : s.reference,
    C = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    k = (await (o.isElement == null ? void 0 : o.isElement(C)))
      ? (await (o.getScale == null ? void 0 : o.getScale(C))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = sn(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: x,
            offsetParent: C,
            strategy: l,
          })
        : x,
    );
  return {
    top: (y.top - S.top + p.top) / k.y,
    bottom: (S.bottom - y.bottom + p.bottom) / k.y,
    left: (y.left - S.left + p.left) / k.x,
    right: (S.right - y.right + p.right) / k.x,
  };
}
const of = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: i,
          placement: n,
          rects: o,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = jr(e, t) || {};
      if (c == null) return {};
      const u = _c(d),
        f = { x: r, y: i },
        h = ls(n),
        p = as(h),
        w = await s.getDimensions(c),
        b = h === "y",
        y = b ? "top" : "left",
        x = b ? "bottom" : "right",
        C = b ? "clientHeight" : "clientWidth",
        k = o.reference[p] + o.reference[h] - f[h] - o.floating[p],
        S = f[h] - o.reference[h],
        A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let R = A ? A[C] : 0;
      (!R || !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
        (R = a.floating[C] || o.floating[p]);
      const P = k / 2 - S / 2,
        E = R / 2 - w[p] / 2 - 1,
        H = Ut(u[y], E),
        N = Ut(u[x], E),
        ne = H,
        St = R - w[p] - N,
        Re = R / 2 - w[p] / 2 + P,
        gr = xo(ne, Re, St),
        gt =
          !l.arrow &&
          Wr(n) != null &&
          Re !== gr &&
          o.reference[p] / 2 - (Re < ne ? H : N) - w[p] / 2 < 0,
        rt = gt ? (Re < ne ? Re - ne : Re - St) : 0;
      return {
        [h]: f[h] + rt,
        data: {
          [h]: gr,
          centerOffset: Re - gr - rt,
          ...(gt && { alignmentOffset: rt }),
        },
        reset: gt,
      };
    },
  }),
  sf = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, i;
          const {
              placement: n,
              middlewareData: o,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: p = "none",
              flipAlignment: w = !0,
              ...b
            } = jr(e, t);
          if ((r = o.arrow) != null && r.alignmentOffset) return {};
          const y = Ht(n),
            x = ur(a),
            C = Ht(a) === a,
            k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            S = f || (C || !w ? [on(a)] : Zp(a)),
            A = p !== "none";
          !f && A && S.push(...tf(a, w, p, k));
          const R = [a, ...S],
            P = await cs(t, b),
            E = [];
          let H = ((i = o.flip) == null ? void 0 : i.overflows) || [];
          if ((d && E.push(P[y]), u)) {
            const Re = Jp(n, s, k);
            E.push(P[Re[0]], P[Re[1]]);
          }
          if (
            ((H = [...H, { placement: n, overflows: E }]),
            !E.every((Re) => Re <= 0))
          ) {
            var N, ne;
            const Re = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1,
              gr = R[Re];
            if (gr)
              return {
                data: { index: Re, overflows: H },
                reset: { placement: gr },
              };
            let gt =
              (ne = H.filter((rt) => rt.overflows[0] <= 0).sort(
                (rt, Et) => rt.overflows[1] - Et.overflows[1],
              )[0]) == null
                ? void 0
                : ne.placement;
            if (!gt)
              switch (h) {
                case "bestFit": {
                  var St;
                  const rt =
                    (St = H.filter((Et) => {
                      if (A) {
                        const $t = ur(Et.placement);
                        return $t === x || $t === "y";
                      }
                      return !0;
                    })
                      .map((Et) => [
                        Et.placement,
                        Et.overflows
                          .filter(($t) => $t > 0)
                          .reduce(($t, qc) => $t + qc, 0),
                      ])
                      .sort((Et, $t) => Et[1] - $t[1])[0]) == null
                      ? void 0
                      : St[0];
                  rt && (gt = rt);
                  break;
                }
                case "initialPlacement":
                  gt = a;
                  break;
              }
            if (n !== gt) return { reset: { placement: gt } };
          }
          return {};
        },
      }
    );
  };
async function af(e, t) {
  const { placement: r, platform: i, elements: n } = e,
    o = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)),
    s = Ht(r),
    a = Wr(r),
    l = ur(r) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    d = o && l ? -1 : 1,
    u = jr(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: p,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis,
      };
  return (
    a && typeof p == "number" && (h = a === "end" ? p * -1 : p),
    l ? { x: h * d, y: f * c } : { x: f * c, y: h * d }
  );
}
const lf = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, i;
          const { x: n, y: o, placement: s, middlewareData: a } = t,
            l = await af(t, e);
          return s === ((r = a.offset) == null ? void 0 : r.placement) &&
            (i = a.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: n + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  cf = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: i, placement: n } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: y, y: x } = b;
                  return { x: y, y: x };
                },
              },
              ...l
            } = jr(e, t),
            c = { x: r, y: i },
            d = await cs(t, l),
            u = ur(Ht(n)),
            f = bc(u);
          let h = c[f],
            p = c[u];
          if (o) {
            const b = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              x = h + d[b],
              C = h - d[y];
            h = xo(x, h, C);
          }
          if (s) {
            const b = u === "y" ? "top" : "left",
              y = u === "y" ? "bottom" : "right",
              x = p + d[b],
              C = p - d[y];
            p = xo(x, p, C);
          }
          const w = a.fn({ ...t, [f]: h, [u]: p });
          return {
            ...w,
            data: { x: w.x - r, y: w.y - i, enabled: { [f]: o, [u]: s } },
          };
        },
      }
    );
  },
  uf = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, i;
          const { placement: n, rects: o, platform: s, elements: a } = t,
            { apply: l = () => {}, ...c } = jr(e, t),
            d = await cs(t, c),
            u = Ht(n),
            f = Wr(n),
            h = ur(n) === "y",
            { width: p, height: w } = o.floating;
          let b, y;
          u === "top" || u === "bottom"
            ? ((b = u),
              (y =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (b = f === "end" ? "top" : "bottom"));
          const x = w - d.top - d.bottom,
            C = p - d.left - d.right,
            k = Ut(w - d[b], x),
            S = Ut(p - d[y], C),
            A = !t.middlewareData.shift;
          let R = k,
            P = S;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (P = C),
            (i = t.middlewareData.shift) != null && i.enabled.y && (R = x),
            A && !f)
          ) {
            const H = De(d.left, 0),
              N = De(d.right, 0),
              ne = De(d.top, 0),
              St = De(d.bottom, 0);
            h
              ? (P = p - 2 * (H !== 0 || N !== 0 ? H + N : De(d.left, d.right)))
              : (R =
                  w -
                  2 * (ne !== 0 || St !== 0 ? ne + St : De(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: R });
          const E = await s.getDimensions(a.floating);
          return p !== E.width || w !== E.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function gn() {
  return typeof window < "u";
}
function Kr(e) {
  return wc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function mt(e) {
  var t;
  return (t = (wc(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function wc(e) {
  return gn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Ye(e) {
  return gn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function ut(e) {
  return gn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function _a(e) {
  return !gn() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function Li(e) {
  const { overflow: t, overflowX: r, overflowY: i, display: n } = Xe(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + i + r) &&
    !["inline", "contents"].includes(n)
  );
}
function df(e) {
  return ["table", "td", "th"].includes(Kr(e));
}
function vn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function yn(e) {
  const t = us(),
    r = Ye(e) ? Xe(e) : e;
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
function hf(e) {
  let t = Bt(e);
  for (; ut(t) && !Ur(t); ) {
    if (yn(t)) return t;
    if (vn(t)) return null;
    t = Bt(t);
  }
  return null;
}
function us() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ur(e) {
  return ["html", "body", "#document"].includes(Kr(e));
}
function Xe(e) {
  return Me(e).getComputedStyle(e);
}
function bn(e) {
  return Ye(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Bt(e) {
  if (Kr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (_a(e) && e.host) || mt(e);
  return _a(t) ? t.host : t;
}
function xc(e) {
  const t = Bt(e);
  return Ur(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ut(t) && Li(t)
      ? t
      : xc(t);
}
function _i(e, t, r) {
  var i;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const n = xc(e),
    o = n === ((i = e.ownerDocument) == null ? void 0 : i.body),
    s = Me(n);
  if (o) {
    const a = ko(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Li(n) ? n : [],
      a && r ? _i(a) : [],
    );
  }
  return t.concat(n, _i(n, [], r));
}
function ko(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cc(e) {
  const t = Xe(e);
  let r = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const n = ut(e),
    o = n ? e.offsetWidth : r,
    s = n ? e.offsetHeight : i,
    a = nn(r) !== o || nn(i) !== s;
  return a && ((r = o), (i = s)), { width: r, height: i, $: a };
}
function ds(e) {
  return Ye(e) ? e : e.contextElement;
}
function wr(e) {
  const t = ds(e);
  if (!ut(t)) return at(1);
  const r = t.getBoundingClientRect(),
    { width: i, height: n, $: o } = Cc(t);
  let s = (o ? nn(r.width) : r.width) / i,
    a = (o ? nn(r.height) : r.height) / n;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const pf = at(0);
function kc(e) {
  const t = Me(e);
  return !us() || !t.visualViewport
    ? pf
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ff(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== Me(e)) ? !1 : t;
}
function dr(e, t, r, i) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    o = ds(e);
  let s = at(1);
  t && (i ? Ye(i) && (s = wr(i)) : (s = wr(e)));
  const a = ff(o, r, i) ? kc(o) : at(0);
  let l = (n.left + a.x) / s.x,
    c = (n.top + a.y) / s.y,
    d = n.width / s.x,
    u = n.height / s.y;
  if (o) {
    const f = Me(o),
      h = i && Ye(i) ? Me(i) : i;
    let p = f,
      w = ko(p);
    for (; w && i && h !== p; ) {
      const b = wr(w),
        y = w.getBoundingClientRect(),
        x = Xe(w),
        C = y.left + (w.clientLeft + parseFloat(x.paddingLeft)) * b.x,
        k = y.top + (w.clientTop + parseFloat(x.paddingTop)) * b.y;
      (l *= b.x),
        (c *= b.y),
        (d *= b.x),
        (u *= b.y),
        (l += C),
        (c += k),
        (p = Me(w)),
        (w = ko(p));
    }
  }
  return sn({ width: d, height: u, x: l, y: c });
}
function hs(e, t) {
  const r = bn(e).scrollLeft;
  return t ? t.left + r : dr(mt(e)).left + r;
}
function Sc(e, t, r) {
  r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(),
    n = i.left + t.scrollLeft - (r ? 0 : hs(e, i)),
    o = i.top + t.scrollTop;
  return { x: n, y: o };
}
function mf(e) {
  let { elements: t, rect: r, offsetParent: i, strategy: n } = e;
  const o = n === "fixed",
    s = mt(i),
    a = t ? vn(t.floating) : !1;
  if (i === s || (a && o)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = at(1);
  const d = at(0),
    u = ut(i);
  if (
    (u || (!u && !o)) &&
    ((Kr(i) !== "body" || Li(s)) && (l = bn(i)), ut(i))
  ) {
    const h = dr(i);
    (c = wr(i)), (d.x = h.x + i.clientLeft), (d.y = h.y + i.clientTop);
  }
  const f = s && !u && !o ? Sc(s, l, !0) : at(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: r.y * c.y - l.scrollTop * c.y + d.y + f.y,
  };
}
function gf(e) {
  return Array.from(e.getClientRects());
}
function vf(e) {
  const t = mt(e),
    r = bn(e),
    i = e.ownerDocument.body,
    n = De(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    o = De(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let s = -r.scrollLeft + hs(e);
  const a = -r.scrollTop;
  return (
    Xe(i).direction === "rtl" && (s += De(t.clientWidth, i.clientWidth) - n),
    { width: n, height: o, x: s, y: a }
  );
}
function yf(e, t) {
  const r = Me(e),
    i = mt(e),
    n = r.visualViewport;
  let o = i.clientWidth,
    s = i.clientHeight,
    a = 0,
    l = 0;
  if (n) {
    (o = n.width), (s = n.height);
    const c = us();
    (!c || (c && t === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
function bf(e, t) {
  const r = dr(e, !0, t === "fixed"),
    i = r.top + e.clientTop,
    n = r.left + e.clientLeft,
    o = ut(e) ? wr(e) : at(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = n * o.x,
    c = i * o.y;
  return { width: s, height: a, x: l, y: c };
}
function wa(e, t, r) {
  let i;
  if (t === "viewport") i = yf(e, r);
  else if (t === "document") i = vf(mt(e));
  else if (Ye(t)) i = bf(t, r);
  else {
    const n = kc(e);
    i = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return sn(i);
}
function Ec(e, t) {
  const r = Bt(e);
  return r === t || !Ye(r) || Ur(r)
    ? !1
    : Xe(r).position === "fixed" || Ec(r, t);
}
function _f(e, t) {
  const r = t.get(e);
  if (r) return r;
  let i = _i(e, [], !1).filter((a) => Ye(a) && Kr(a) !== "body"),
    n = null;
  const o = Xe(e).position === "fixed";
  let s = o ? Bt(e) : e;
  for (; Ye(s) && !Ur(s); ) {
    const a = Xe(s),
      l = yn(s);
    !l && a.position === "fixed" && (n = null),
      (
        o
          ? !l && !n
          : (!l &&
              a.position === "static" &&
              !!n &&
              ["absolute", "fixed"].includes(n.position)) ||
            (Li(s) && !l && Ec(e, s))
      )
        ? (i = i.filter((d) => d !== s))
        : (n = a),
      (s = Bt(s));
  }
  return t.set(e, i), i;
}
function wf(e) {
  let { element: t, boundary: r, rootBoundary: i, strategy: n } = e;
  const s = [
      ...(r === "clippingAncestors"
        ? vn(t)
          ? []
          : _f(t, this._c)
        : [].concat(r)),
      i,
    ],
    a = s[0],
    l = s.reduce(
      (c, d) => {
        const u = wa(t, d, n);
        return (
          (c.top = De(u.top, c.top)),
          (c.right = Ut(u.right, c.right)),
          (c.bottom = Ut(u.bottom, c.bottom)),
          (c.left = De(u.left, c.left)),
          c
        );
      },
      wa(t, a, n),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function xf(e) {
  const { width: t, height: r } = Cc(e);
  return { width: t, height: r };
}
function Cf(e, t, r) {
  const i = ut(t),
    n = mt(t),
    o = r === "fixed",
    s = dr(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = at(0);
  if (i || (!i && !o))
    if (((Kr(t) !== "body" || Li(n)) && (a = bn(t)), i)) {
      const f = dr(t, !0, o, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else n && (l.x = hs(n));
  const c = n && !i && !o ? Sc(n, a) : at(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    u = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: u, width: s.width, height: s.height };
}
function Dn(e) {
  return Xe(e).position === "static";
}
function xa(e, t) {
  if (!ut(e) || Xe(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return mt(e) === r && (r = r.ownerDocument.body), r;
}
function $c(e, t) {
  const r = Me(e);
  if (vn(e)) return r;
  if (!ut(e)) {
    let n = Bt(e);
    for (; n && !Ur(n); ) {
      if (Ye(n) && !Dn(n)) return n;
      n = Bt(n);
    }
    return r;
  }
  let i = xa(e, t);
  for (; i && df(i) && Dn(i); ) i = xa(i, t);
  return i && Ur(i) && Dn(i) && !yn(i) ? r : i || hf(e) || r;
}
const kf = async function (e) {
  const t = this.getOffsetParent || $c,
    r = this.getDimensions,
    i = await r(e.floating);
  return {
    reference: Cf(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function Sf(e) {
  return Xe(e).direction === "rtl";
}
const Yi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mf,
  getDocumentElement: mt,
  getClippingRect: wf,
  getOffsetParent: $c,
  getElementRects: kf,
  getClientRects: gf,
  getDimensions: xf,
  getScale: wr,
  isElement: Ye,
  isRTL: Sf,
};
function Rc(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Ef(e, t) {
  let r = null,
    i;
  const n = mt(e);
  function o() {
    var a;
    clearTimeout(i), (a = r) == null || a.disconnect(), (r = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const c = e.getBoundingClientRect(),
      { left: d, top: u, width: f, height: h } = c;
    if ((a || t(), !f || !h)) return;
    const p = Hi(u),
      w = Hi(n.clientWidth - (d + f)),
      b = Hi(n.clientHeight - (u + h)),
      y = Hi(d),
      C = {
        rootMargin: -p + "px " + -w + "px " + -b + "px " + -y + "px",
        threshold: De(0, Ut(1, l)) || 1,
      };
    let k = !0;
    function S(A) {
      const R = A[0].intersectionRatio;
      if (R !== l) {
        if (!k) return s();
        R
          ? s(!1, R)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      R === 1 && !Rc(c, e.getBoundingClientRect()) && s(), (k = !1);
    }
    try {
      r = new IntersectionObserver(S, { ...C, root: n.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, C);
    }
    r.observe(e);
  }
  return s(!0), o;
}
function $f(e, t, r, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: n = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = i,
    c = ds(e),
    d = n || o ? [...(c ? _i(c) : []), ..._i(t)] : [];
  d.forEach((y) => {
    n && y.addEventListener("scroll", r, { passive: !0 }),
      o && y.addEventListener("resize", r);
  });
  const u = c && a ? Ef(c, r) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((y) => {
      let [x] = y;
      x &&
        x.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var C;
          (C = h) == null || C.observe(t);
        }))),
        r();
    })),
    c && !l && h.observe(c),
    h.observe(t));
  let p,
    w = l ? dr(e) : null;
  l && b();
  function b() {
    const y = dr(e);
    w && !Rc(w, y) && r(), (w = y), (p = requestAnimationFrame(b));
  }
  return (
    r(),
    () => {
      var y;
      d.forEach((x) => {
        n && x.removeEventListener("scroll", r),
          o && x.removeEventListener("resize", r);
      }),
        u == null || u(),
        (y = h) == null || y.disconnect(),
        (h = null),
        l && cancelAnimationFrame(p);
    }
  );
}
const Rf = lf,
  Af = cf,
  Pf = sf,
  Ca = uf,
  Tf = of,
  Of = (e, t, r) => {
    const i = new Map(),
      n = { platform: Yi, ...r },
      o = { ...n.platform, _c: i };
    return nf(e, t, { ...n, platform: o });
  };
function Lf(e) {
  return If(e);
}
function zn(e) {
  return e.assignedSlot
    ? e.assignedSlot
    : e.parentNode instanceof ShadowRoot
      ? e.parentNode.host
      : e.parentNode;
}
function If(e) {
  for (let t = e; t; t = zn(t))
    if (t instanceof Element && getComputedStyle(t).display === "none")
      return null;
  for (let t = zn(e); t; t = zn(t)) {
    if (!(t instanceof Element)) continue;
    const r = getComputedStyle(t);
    if (
      r.display !== "contents" &&
      (r.position !== "static" || yn(r) || t.tagName === "BODY")
    )
      return t;
  }
  return null;
}
function Nf(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "getBoundingClientRect" in e &&
    ("contextElement" in e ? e instanceof Element : !0)
  );
}
var j = class extends Q {
  constructor() {
    super(...arguments),
      (this.localize = new Ue(this)),
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
            n = 0,
            o = 0,
            s = 0,
            a = 0,
            l = 0,
            c = 0,
            d = 0;
          r
            ? e.top < t.top
              ? ((i = e.left),
                (n = e.bottom),
                (o = e.right),
                (s = e.bottom),
                (a = t.left),
                (l = t.top),
                (c = t.right),
                (d = t.top))
              : ((i = t.left),
                (n = t.bottom),
                (o = t.right),
                (s = t.bottom),
                (a = e.left),
                (l = e.top),
                (c = e.right),
                (d = e.top))
            : e.left < t.left
              ? ((i = e.right),
                (n = e.top),
                (o = t.left),
                (s = t.top),
                (a = e.right),
                (l = e.bottom),
                (c = t.left),
                (d = t.bottom))
              : ((i = t.right),
                (n = t.top),
                (o = e.left),
                (s = e.top),
                (a = t.right),
                (l = t.bottom),
                (c = e.left),
                (d = e.bottom)),
            this.style.setProperty("--hover-bridge-top-left-x", `${i}px`),
            this.style.setProperty("--hover-bridge-top-left-y", `${n}px`),
            this.style.setProperty("--hover-bridge-top-right-x", `${o}px`),
            this.style.setProperty("--hover-bridge-top-right-y", `${s}px`),
            this.style.setProperty("--hover-bridge-bottom-left-x", `${a}px`),
            this.style.setProperty("--hover-bridge-bottom-left-y", `${l}px`),
            this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`),
            this.style.setProperty("--hover-bridge-bottom-right-y", `${d}px`);
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
      this.anchor instanceof Element || Nf(this.anchor)
        ? (this.anchorEl = this.anchor)
        : (this.anchorEl = this.querySelector('[slot="anchor"]'));
    this.anchorEl instanceof HTMLSlotElement &&
      (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]),
      this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl ||
      !this.active ||
      (this.cleanup = $f(this.anchorEl, this.popup, () => {
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
    const e = [Rf({ mainAxis: this.distance, crossAxis: this.skidding })];
    this.sync
      ? e.push(
          Ca({
            apply: ({ rects: r }) => {
              const i = this.sync === "width" || this.sync === "both",
                n = this.sync === "height" || this.sync === "both";
              (this.popup.style.width = i ? `${r.reference.width}px` : ""),
                (this.popup.style.height = n ? `${r.reference.height}px` : "");
            },
          }),
        )
      : ((this.popup.style.width = ""), (this.popup.style.height = "")),
      this.flip &&
        e.push(
          Pf({
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
          Af({ boundary: this.shiftBoundary, padding: this.shiftPadding }),
        ),
      this.autoSize
        ? e.push(
            Ca({
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
        e.push(Tf({ element: this.arrowEl, padding: this.arrowPadding }));
    const t =
      this.strategy === "absolute"
        ? (r) => Yi.getOffsetParent(r, Lf)
        : Yi.getOffsetParent;
    Of(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: un(hr({}, Yi), { getOffsetParent: t }),
    }).then(({ x: r, y: i, middlewareData: n, placement: o }) => {
      const s = this.localize.dir() === "rtl",
        a = { top: "bottom", right: "left", bottom: "top", left: "right" }[
          o.split("-")[0]
        ];
      if (
        (this.setAttribute("data-current-placement", o),
        Object.assign(this.popup.style, { left: `${r}px`, top: `${i}px` }),
        this.arrow)
      ) {
        const l = n.arrow.x,
          c = n.arrow.y;
        let d = "",
          u = "",
          f = "",
          h = "";
        if (this.arrowPlacement === "start") {
          const p =
            typeof l == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : "";
          (d =
            typeof c == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : ""),
            (u = s ? p : ""),
            (h = s ? "" : p);
        } else if (this.arrowPlacement === "end") {
          const p =
            typeof l == "number"
              ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
              : "";
          (u = s ? "" : p),
            (h = s ? p : ""),
            (f =
              typeof c == "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "");
        } else
          this.arrowPlacement === "center"
            ? ((h =
                typeof l == "number"
                  ? "calc(50% - var(--arrow-size-diagonal))"
                  : ""),
              (d =
                typeof c == "number"
                  ? "calc(50% - var(--arrow-size-diagonal))"
                  : ""))
            : ((h = typeof l == "number" ? `${l}px` : ""),
              (d = typeof c == "number" ? `${c}px` : ""));
        Object.assign(this.arrowEl.style, {
          top: d,
          right: u,
          bottom: f,
          left: h,
          [a]: "calc(var(--arrow-size-diagonal) * -1)",
        });
      }
    }),
      requestAnimationFrame(() => this.updateHoverBridge()),
      this.emit("sl-reposition");
  }
  render() {
    return F`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${le({ "popup-hover-bridge": !0, "popup-hover-bridge--visible": this.hoverBridge && this.active })}
      ></span>

      <div
        part="popup"
        class=${le({ popup: !0, "popup--active": this.active, "popup--fixed": this.strategy === "fixed", "popup--has-arrow": this.arrow })}
      >
        <slot></slot>
        ${this.arrow ? F`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
j.styles = [oe, Gp];
m([q(".popup")], j.prototype, "popup", 2);
m([q(".popup__arrow")], j.prototype, "arrowEl", 2);
m([_()], j.prototype, "anchor", 2);
m([_({ type: Boolean, reflect: !0 })], j.prototype, "active", 2);
m([_({ reflect: !0 })], j.prototype, "placement", 2);
m([_({ reflect: !0 })], j.prototype, "strategy", 2);
m([_({ type: Number })], j.prototype, "distance", 2);
m([_({ type: Number })], j.prototype, "skidding", 2);
m([_({ type: Boolean })], j.prototype, "arrow", 2);
m([_({ attribute: "arrow-placement" })], j.prototype, "arrowPlacement", 2);
m(
  [_({ attribute: "arrow-padding", type: Number })],
  j.prototype,
  "arrowPadding",
  2,
);
m([_({ type: Boolean })], j.prototype, "flip", 2);
m(
  [
    _({
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
  j.prototype,
  "flipFallbackPlacements",
  2,
);
m(
  [_({ attribute: "flip-fallback-strategy" })],
  j.prototype,
  "flipFallbackStrategy",
  2,
);
m([_({ type: Object })], j.prototype, "flipBoundary", 2);
m(
  [_({ attribute: "flip-padding", type: Number })],
  j.prototype,
  "flipPadding",
  2,
);
m([_({ type: Boolean })], j.prototype, "shift", 2);
m([_({ type: Object })], j.prototype, "shiftBoundary", 2);
m(
  [_({ attribute: "shift-padding", type: Number })],
  j.prototype,
  "shiftPadding",
  2,
);
m([_({ attribute: "auto-size" })], j.prototype, "autoSize", 2);
m([_()], j.prototype, "sync", 2);
m([_({ type: Object })], j.prototype, "autoSizeBoundary", 2);
m(
  [_({ attribute: "auto-size-padding", type: Number })],
  j.prototype,
  "autoSizePadding",
  2,
);
m(
  [_({ attribute: "hover-bridge", type: Boolean })],
  j.prototype,
  "hoverBridge",
  2,
);
var we = class extends Q {
  constructor() {
    super(...arguments),
      (this.localize = new Ue(this)),
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
            var r, i, n;
            const o =
              ((r = this.containingElement) == null
                ? void 0
                : r.getRootNode()) instanceof ShadowRoot
                ? (n =
                    (i = document.activeElement) == null
                      ? void 0
                      : i.shadowRoot) == null
                  ? void 0
                  : n.activeElement
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
        n = r[r.length - 1];
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key) &&
        (e.preventDefault(),
        this.open || (this.show(), await this.updateComplete),
        r.length > 0 &&
          this.updateComplete.then(() => {
            (e.key === "ArrowDown" || e.key === "Home") &&
              (t.setCurrentItem(i), i.focus()),
              (e.key === "ArrowUp" || e.key === "End") &&
                (t.setCurrentItem(n), n.focus());
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
      .find((i) => Rp(i).start);
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
    if (!this.open) return (this.open = !0), ct(this, "sl-after-show");
  }
  async hide() {
    if (this.open) return (this.open = !1), ct(this, "sl-after-hide");
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
        await Le(this),
        (this.panel.hidden = !1),
        (this.popup.active = !0);
      const { keyframes: e, options: t } = ge(this, "dropdown.show", {
        dir: this.localize.dir(),
      });
      await Ce(this.popup.popup, e, t), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Le(this);
      const { keyframes: e, options: t } = ge(this, "dropdown.hide", {
        dir: this.localize.dir(),
      });
      await Ce(this.popup.popup, e, t),
        (this.panel.hidden = !0),
        (this.popup.active = !1),
        this.emit("sl-after-hide");
    }
  }
  render() {
    return F`
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
        sync=${D(this.sync ? this.sync : void 0)}
        class=${le({ dropdown: !0, "dropdown--open": this.open })}
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
we.styles = [oe, Qp];
we.dependencies = { "sl-popup": j };
m([q(".dropdown")], we.prototype, "popup", 2);
m([q(".dropdown__trigger")], we.prototype, "trigger", 2);
m([q(".dropdown__panel")], we.prototype, "panel", 2);
m([_({ type: Boolean, reflect: !0 })], we.prototype, "open", 2);
m([_({ reflect: !0 })], we.prototype, "placement", 2);
m([_({ type: Boolean, reflect: !0 })], we.prototype, "disabled", 2);
m(
  [_({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })],
  we.prototype,
  "stayOpenOnSelect",
  2,
);
m([_({ attribute: !1 })], we.prototype, "containingElement", 2);
m([_({ type: Number })], we.prototype, "distance", 2);
m([_({ type: Number })], we.prototype, "skidding", 2);
m([_({ type: Boolean })], we.prototype, "hoist", 2);
m([_({ reflect: !0 })], we.prototype, "sync", 2);
m(
  [se("open", { waitUntilFirstUpdate: !0 })],
  we.prototype,
  "handleOpenChange",
  1,
);
X("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});
X("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
var Ff = "sl-dropdown";
we.define("sl-dropdown");
var Df = ue({
    tagName: Ff,
    elementClass: we,
    react: ce,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlDropdown",
  }),
  Ac = Df,
  zf = te`
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
  _n = class extends Q {
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "menu");
    }
    handleClick(e) {
      const t = ["menuitem", "menuitemcheckbox"],
        r = e.composedPath(),
        i = r.find((a) => {
          var l;
          return t.includes(
            ((l = a == null ? void 0 : a.getAttribute) == null
              ? void 0
              : l.call(a, "role")) || "",
          );
        });
      if (
        !i ||
        r.find((a) => {
          var l;
          return (
            ((l = a == null ? void 0 : a.getAttribute) == null
              ? void 0
              : l.call(a, "role")) === "menu"
          );
        }) !== this
      )
        return;
      const s = i;
      s.type === "checkbox" && (s.checked = !s.checked),
        this.emit("sl-select", { detail: { item: s } });
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
      return F`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
_n.styles = [oe, zf];
m([q("slot")], _n.prototype, "defaultSlot", 2);
var Mf = "sl-menu";
_n.define("sl-menu");
var Uf = ue({
    tagName: Mf,
    elementClass: _n,
    react: ce,
    events: { onSlSelect: "sl-select" },
    displayName: "SlMenu",
  }),
  Pc = Uf,
  Hf = te`
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
 */ const pi = (e, t) => {
    var i;
    const r = e._$AN;
    if (r === void 0) return !1;
    for (const n of r) (i = n._$AO) == null || i.call(n, t, !1), pi(n, t);
    return !0;
  },
  an = (e) => {
    let t, r;
    do {
      if ((t = e._$AM) === void 0) break;
      (r = t._$AN), r.delete(e), (e = t);
    } while ((r == null ? void 0 : r.size) === 0);
  },
  Tc = (e) => {
    for (let t; (t = e._$AM); e = t) {
      let r = t._$AN;
      if (r === void 0) t._$AN = r = new Set();
      else if (r.has(e)) break;
      r.add(e), qf(t);
    }
  };
function Bf(e) {
  this._$AN !== void 0
    ? (an(this), (this._$AM = e), Tc(this))
    : (this._$AM = e);
}
function Vf(e, t = !1, r = 0) {
  const i = this._$AH,
    n = this._$AN;
  if (n !== void 0 && n.size !== 0)
    if (t)
      if (Array.isArray(i))
        for (let o = r; o < i.length; o++) pi(i[o], !1), an(i[o]);
      else i != null && (pi(i, !1), an(i));
    else pi(this, e);
}
const qf = (e) => {
  e.type == Pt.CHILD && (e._$AP ?? (e._$AP = Vf), e._$AQ ?? (e._$AQ = Bf));
};
class jf extends os {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(t, r, i) {
    super._$AT(t, r, i), Tc(this), (this.isConnected = t._$AU);
  }
  _$AO(t, r = !0) {
    var i, n;
    t !== this.isConnected &&
      ((this.isConnected = t),
      t
        ? (i = this.reconnected) == null || i.call(this)
        : (n = this.disconnected) == null || n.call(this)),
      r && (pi(this, t), an(this));
  }
  setValue(t) {
    if (pc(this._$Ct)) this._$Ct._$AI(t, this);
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
 */ const Wf = () => new Kf();
class Kf {}
const Mn = new WeakMap(),
  Qf = ns(
    class extends jf {
      render(e) {
        return ie;
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
          ie
        );
      }
      rt(e) {
        if ((this.isConnected || (e = void 0), typeof this.Y == "function")) {
          const t = this.ht ?? globalThis;
          let r = Mn.get(t);
          r === void 0 && ((r = new WeakMap()), Mn.set(t, r)),
            r.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            r.set(this.Y, e),
            e !== void 0 && this.Y.call(this.ht, e);
        } else this.Y.value = e;
      }
      get lt() {
        var e, t;
        return typeof this.Y == "function"
          ? (e = Mn.get(this.ht ?? globalThis)) == null
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
var Gf = class {
    constructor(e, t) {
      (this.popupRef = Wf()),
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
                    .filter((c) => c.localName === "sl-menu")[0],
            n = getComputedStyle(this.host).direction === "rtl";
          if (!i) return;
          const {
            left: o,
            top: s,
            width: a,
            height: l,
          } = i.getBoundingClientRect();
          this.host.style.setProperty(
            "--safe-triangle-submenu-start-x",
            `${n ? o + a : o}px`,
          ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-start-y",
              `${s}px`,
            ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-end-x",
              `${n ? o + a : o}px`,
            ),
            this.host.style.setProperty(
              "--safe-triangle-submenu-end-y",
              `${s + l}px`,
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
        i = ["padding-top", "border-top-width", "margin-top"].reduce((n, o) => {
          var s;
          const a = (s = t.get(o)) != null ? s : new CSSUnitValue(0, "px"),
            c = (a instanceof CSSUnitValue ? a : new CSSUnitValue(0, "px")).to(
              "px",
            );
          return n - c.value;
        }, 0);
      this.skidding = i;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : !1;
    }
    renderSubmenu() {
      const e = getComputedStyle(this.host).direction === "rtl";
      return this.isConnected
        ? F`
      <sl-popup
        ${Qf(this.popupRef)}
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
        : F` <slot name="submenu" hidden></slot> `;
    }
  },
  Fe = class extends Q {
    constructor() {
      super(...arguments),
        (this.localize = new Ue(this)),
        (this.type = "normal"),
        (this.checked = !1),
        (this.value = ""),
        (this.loading = !1),
        (this.disabled = !1),
        (this.hasSlotController = new Wt(this, "submenu")),
        (this.submenuController = new Gf(this, this.hasSlotController)),
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
      return op(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const e = this.localize.dir() === "rtl",
        t = this.submenuController.isExpanded();
      return F`
      <div
        id="anchor"
        part="base"
        class=${le({ "menu-item": !0, "menu-item--rtl": e, "menu-item--checked": this.checked, "menu-item--disabled": this.disabled, "menu-item--loading": this.loading, "menu-item--has-submenu": this.isSubmenu(), "menu-item--submenu-expanded": t })}
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
        ${this.loading ? F` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
  };
Fe.styles = [oe, Hf];
Fe.dependencies = { "sl-icon": _e, "sl-popup": j, "sl-spinner": Ei };
m([q("slot:not([name])")], Fe.prototype, "defaultSlot", 2);
m([q(".menu-item")], Fe.prototype, "menuItem", 2);
m([_()], Fe.prototype, "type", 2);
m([_({ type: Boolean, reflect: !0 })], Fe.prototype, "checked", 2);
m([_()], Fe.prototype, "value", 2);
m([_({ type: Boolean, reflect: !0 })], Fe.prototype, "loading", 2);
m([_({ type: Boolean, reflect: !0 })], Fe.prototype, "disabled", 2);
m([se("checked")], Fe.prototype, "handleCheckedChange", 1);
m([se("disabled")], Fe.prototype, "handleDisabledChange", 1);
m([se("type")], Fe.prototype, "handleTypeChange", 1);
var Yf = "sl-menu-item";
Fe.define("sl-menu-item");
var Xf = ue({
    tagName: Yf,
    elementClass: Fe,
    react: ce,
    events: {},
    displayName: "SlMenuItem",
  }),
  oi = Xf;
const Vt = "AUTH_ERROR",
  Jf = new gd({ defaultOptions: { queries: { gcTime: 1e3 * 60 * 60 * 24 } } });
function he(e) {
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
      r = Vt;
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
async function ae(e) {
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
function Zf(e) {
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
function Oc(e) {
  const t = "[ERROR] Invalid filter assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
  if (!("table_size" in e && typeof e.table_size == "number"))
    throw (console.error(t), new Error(t));
  if (!("recipes" in e && Array.isArray(e.recipes)))
    throw (console.error(t), new Error(t));
  e.recipes.forEach((r) => Zf(r));
}
function pe(e) {
  const t = "[ERROR] Invalid error assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
}
function em(e) {
  const t = "[ERROR] Invalid auth assertion!";
  if (typeof e != "object" || e === null)
    throw (console.error(t), new Error(t));
  if (!("type" in e && typeof e.type == "string"))
    throw (console.error(t), new Error(t));
  if (!("auth" in e && typeof e.auth == "string"))
    throw (console.error(t), new Error(t));
}
let ee = { auth: "", user: "" };
function tm() {
  ee = {
    auth: sessionStorage.getItem("session.auth") || "",
    user: sessionStorage.getItem("session.user") || "",
  };
}
function Lc() {
  (ee = { auth: "", user: "" }),
    sessionStorage.removeItem("session.auth"),
    sessionStorage.removeItem("session.user");
}
async function rm(e, t) {
  const r = await ae({ type: "login", username: e, password: t }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
  em(i),
    (ee = { auth: i.auth, user: e }),
    sessionStorage.setItem("session.auth", i.auth),
    sessionStorage.setItem("session.user", e);
}
async function im() {
  const e = await ae({ type: "logout", auth: ee.auth }),
    t = await e.json();
  if (e.status !== 200) throw (pe(t), new Error(he(t)));
  Lc();
}
async function nm() {
  return ee
    ? (await ae({ type: "is_logged_in", auth: ee.auth })).status === 200
    : !1;
}
function Ic() {
  return ht({ queryKey: ["loggedIn"], queryFn: () => nm() });
}
async function om(e, t) {
  const r = await ae({
      type: "change_username",
      auth: ee.auth,
      password: e,
      new_username: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
  (ee.user = t), sessionStorage.setItem("session.user", t);
}
async function sm(e, t) {
  const r = await ae({
      type: "change_password",
      auth: ee.auth,
      password: e,
      new_password: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
}
async function am(e, t, r, i, n, o) {
  const s = await ae({
      type: "add_recipe",
      auth: ee.auth,
      collection_id: e,
      recipe_name: t,
      reference: r,
      authors: i,
      ingredients: n,
      allergens: o,
    }),
    a = await s.json();
  if (s.status !== 200) throw (pe(a), new Error(he(a)));
}
async function Nc(e) {
  const t = await ae({ type: "remove_recipe", auth: ee.auth, recipe_name: e }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
}
async function lm(e, t) {
  const r = await ae({
      type: "create_allergen",
      allergen_name: e,
      collection_id: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
}
async function cm(e, t) {
  const r = await ae({
      type: "create_ingredient",
      ingredient_name: e,
      collection_id: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
}
const ka = (e) => {
    let t;
    const r = new Set(),
      i = (c, d) => {
        const u = typeof c == "function" ? c(t) : c;
        if (!Object.is(u, t)) {
          const f = t;
          (t =
            (d ?? (typeof u != "object" || u === null))
              ? u
              : Object.assign({}, t, u)),
            r.forEach((h) => h(t, f));
        }
      },
      n = () => t,
      a = {
        setState: i,
        getState: n,
        getInitialState: () => l,
        subscribe: (c) => (r.add(c), () => r.delete(c)),
      },
      l = (t = e(i, n, a));
    return a;
  },
  um = (e) => (e ? ka(e) : ka),
  dm = (e) => e;
function hm(e, t = dm) {
  const r = Zn.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState()),
  );
  return Zn.useDebugValue(r), r;
}
const pm = (e) => {
    const t = um(e),
      r = (i) => hm(t, i);
    return Object.assign(r, t), r;
  },
  fm = (e) => pm;
var Un = {},
  Sa;
function mm() {
  return (
    Sa ||
      ((Sa = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(n, o) {
          if (Object.is(n, o)) return !0;
          if (
            typeof n != "object" ||
            n === null ||
            typeof o != "object" ||
            o === null
          )
            return !1;
          if (n instanceof Map && o instanceof Map) {
            if (n.size !== o.size) return !1;
            for (const [a, l] of n) if (!Object.is(l, o.get(a))) return !1;
            return !0;
          }
          if (n instanceof Set && o instanceof Set) {
            if (n.size !== o.size) return !1;
            for (const a of n) if (!o.has(a)) return !1;
            return !0;
          }
          const s = Object.keys(n);
          if (s.length !== Object.keys(o).length) return !1;
          for (const a of s)
            if (
              !Object.prototype.hasOwnProperty.call(o, a) ||
              !Object.is(n[a], o[a])
            )
              return !1;
          return !0;
        }
        const i = (n, o) => (s) => {
          const a = new Set();
          return (l, c, d) => {
            const u = (o == null ? void 0 : o.equalityFn) ?? t;
            if (o != null && o.keys) {
              const x = o.keys;
              for (const C of x) a.add(C);
            }
            const f =
                (o == null ? void 0 : o.disableProxy) !== !0 ||
                !!(o != null && o.keys),
              h =
                (o == null ? void 0 : o.disableProxy) !== !0 &&
                !(o != null && o.keys),
              p = (x) => {
                const C = new Proxy(
                    { ...x },
                    { get: (S, A) => (a.add(A), x[A]) },
                  ),
                  k = n(h ? C : { ...x });
                for (const S of Object.keys(k)) u(k[S], x[S]) && (k[S] = x[S]);
                return { ...x, ...k };
              },
              w = (x, C, ...k) => {
                l(
                  (S) => {
                    const A = typeof x == "object" ? x : x(S);
                    return f &&
                      a.size !== 0 &&
                      !Object.keys(A).some((R) => a.has(R))
                      ? { ...S, ...A }
                      : p({ ...S, ...A });
                  },
                  C,
                  ...k,
                );
              },
              b = d;
            b.setState = w;
            const y = s(w, c, b);
            return Object.assign({}, y, n(y));
          };
        };
        e.createComputed = i;
      })(Un)),
    Un
  );
}
var gm = mm(),
  dt = ((e) => (
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
  ))(dt || {}),
  K = ((e) => (
    (e[(e.NAME = 1)] = "NAME"),
    (e[(e.AUTHOR = 2)] = "AUTHOR"),
    (e[(e.ALLERGENS = 4)] = "ALLERGENS"),
    (e[(e.REFERENCE = 8)] = "REFERENCE"),
    (e[(e.INGREDIENTS = 16)] = "INGREDIENTS"),
    e
  ))(K || {});
const vm = {
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
    loadedCollectionId: -1,
  },
  ym = gm.createComputed((e) => ({
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
  $e = fm()(
    ym((e, t) => ({
      ...vm,
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
      setLoadedCollectionId: (r) => e({ loadedCollectionId: r }),
    })),
  ),
  Bi = {
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
var So = ((e) => ((e.Allergen = "Allergen"), (e.Ingredient = "Ingredient"), e))(
  So || {},
);
function qt({
  variant: e,
  selected: t,
  available: r = [],
  setSelected: i = void 0,
  viewMode: n = !1,
  tagType: o = void 0,
}) {
  const { loadedCollectionId: s, setSessionAlert: a } = $e(),
    [l, c] = Y(""),
    d = Ze();
  function u(p) {
    i !== void 0 && i(t.slice(0, p).concat(t.slice(p + 1)));
  }
  function f(p) {
    i !== void 0 && i(t.concat([p]));
  }
  async function h() {
    if (l !== "")
      try {
        o === "Allergen"
          ? (await lm(l, s),
            await d.invalidateQueries({ queryKey: ["collectionAllergens"] }))
          : o === "Ingredient" &&
            (await cm(l, s),
            await d.invalidateQueries({ queryKey: ["collectionIngredients"] })),
          t.includes(l) || f(l),
          c("");
      } catch (p) {
        p instanceof Error &&
          (p.message === Vt ? a() : console.error(p.message));
      }
  }
  return g("div", {
    style: Bi.root,
    children: [
      g("div", {
        style: Bi.tagContainer,
        children: [
          t.map((p, w) =>
            g(
              jp,
              {
                className: "pickedTag",
                variant: e,
                removable: !n,
                size: "small",
                onSlRemove: () => u(w),
                children: g("p", { style: Bi.tagContent, children: p }),
              },
              w,
            ),
          ),
          !n &&
            r.length > t.length &&
            g(Ac, {
              children: [
                g(ke, { slot: "trigger", name: "plus" }),
                g(Pc, {
                  style: Bi.menu,
                  onSlSelect: (p) => f(p.detail.item.value),
                  children: r
                    .filter((p) => !t.includes(p))
                    .map((p) => g(oi, { value: p, children: p })),
                }),
              ],
            }),
        ],
      }),
      !n &&
        o !== void 0 &&
        g(Te, {
          size: "small",
          placeholder: "New " + o,
          value: l,
          onSlChange: (p) => c(p.target.value),
          children: g(ke, {
            slot: "suffix",
            name: "plus",
            label: "Create Tag",
            onClick: () => {
              h();
            },
          }),
        }),
    ],
  });
}
async function Fc({
  collection_id: e,
  recipe_name: t,
  include_allergens: r,
  exclude_allergens: i,
  include_ingredients: n,
  exclude_ingredients: o,
  authors: s,
  view_min: a,
  view_max: l,
  random: c,
}) {
  const d = await ae({
      type: "filter_recipe_collection",
      collection_id: e,
      recipe_name: t,
      include_allergens: r,
      exclude_allergens: i,
      include_ingredients: n,
      exclude_ingredients: o,
      authors: s,
      view_min: a,
      view_max: l,
      random: c,
    }),
    u = await d.json();
  if (d.status !== 200) throw (pe(u), new Error(he(u)));
  return (
    Oc(u),
    u.recipes.map((f) => ({
      ...f,
      allergens: f.allergens.filter((h) => h !== null),
      ingredients: f.ingredients.filter((h) => h !== null),
    }))
  );
}
function bm(e) {
  return ht({ queryKey: ["filterCollection", e], queryFn: () => Fc(e) });
}
async function _m({
  collection_id: e,
  recipe_name: t,
  include_allergens: r,
  exclude_allergens: i,
  include_ingredients: n,
  exclude_ingredients: o,
  authors: s,
  view_min: a,
  view_max: l,
  random: c,
}) {
  const d = await ae({
      type: "filter_recipe_collection",
      collection_id: e,
      recipe_name: t,
      include_allergens: r,
      exclude_allergens: i,
      include_ingredients: n,
      exclude_ingredients: o,
      authors: s,
      view_min: a,
      view_max: l,
      random: c,
    }),
    u = await d.json();
  if (d.status !== 200) throw (pe(u), new Error(he(u)));
  return Oc(u), u.table_size;
}
function wm(e) {
  return ht({ queryKey: ["filterCollectionCount", e], queryFn: () => _m(e) });
}
async function xm(e, t) {
  const r = await ae({
      type: "rename_recipe_collection",
      auth: ee.auth,
      id: e,
      new_name: t,
    }),
    i = await r.json();
  if (r.status !== 200) throw (pe(i), new Error(he(i)));
}
async function Cm(e) {
  const t = await ae({ type: "add_recipe_collection", auth: ee.auth, name: e }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
async function km(e) {
  const t = await ae({
      type: "remove_recipe_collection",
      auth: ee.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
}
async function Sm() {
  const e = await ae({ type: "get_owned_recipe_collections", auth: ee.auth }),
    t = await e.json();
  if (e.status !== 200) throw (pe(t), new Error(he(t)));
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
function Dc() {
  return ht({
    queryKey: ["ownedCollections"],
    queryFn: ee.auth !== "" ? () => Sm() : Br,
  });
}
async function Em(e) {
  const t = await ae({
      type: "get_allergens_in_collection",
      auth: ee.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
function zc(e) {
  return ht({ queryKey: ["collectionAllergens", e], queryFn: () => Em(e) });
}
async function $m(e) {
  const t = await ae({
      type: "get_ingredients_in_collection",
      auth: ee.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
function Mc(e) {
  return ht({ queryKey: ["collectionIngredients", e], queryFn: () => $m(e) });
}
async function Rm(e) {
  const t = await ae({
      type: "get_authors_in_collection",
      auth: ee.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
function Am(e) {
  return ht({ queryKey: ["collectionAuthors", e], queryFn: () => Rm(e) });
}
async function Pm(e) {
  const t = await ae({
      type: "count_recipes_in_collection",
      auth: ee.auth,
      id: e,
    }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
function Tm(e) {
  return ht({
    queryKey: ["recipeCount", e],
    queryFn: e !== -1 ? () => Pm(e) : Br,
  });
}
async function Om(e) {
  const t = await ae({ type: "get_collection_name", auth: ee.auth, id: e }),
    r = await t.json();
  if (t.status !== 200) throw (pe(r), new Error(he(r)));
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
function Uc(e) {
  return ht({
    queryKey: ["collectionName", e],
    queryFn: e !== -1 ? () => Om(e) : Br,
  });
}
async function Lm(e) {
  return (
    (await ae({ type: "get_collection_exists", auth: ee.auth, id: e }))
      .status === 200
  );
}
function Im(e) {
  return ht({
    queryKey: ["collectionExists", e],
    queryFn: () => Lm(e),
    staleTime: 1 / 0,
  });
}
const Zt = {
  settingContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1em",
  },
  filterContainer: { display: "flex", flex: 1, flexDirection: "column" },
};
function Hn({
  columnName: e,
  included: t,
  excluded: r,
  setIncluded: i,
  setExcluded: n,
  columnOptions: o = [],
}) {
  return g("div", {
    style: Zt.settingContainer,
    children: [
      g("div", {
        style: Zt.filterContainer,
        children: [
          "Include ",
          e,
          g(qt, {
            variant: "success",
            available: o.filter((s) => r !== void 0 && !r.includes(s)),
            selected: t,
            setSelected: i,
          }),
        ],
      }),
      r !== void 0 &&
        g("div", {
          style: Zt.filterContainer,
          children: [
            "Exclude ",
            e,
            g(qt, {
              variant: "danger",
              available: o.filter((s) => !t.includes(s)),
              selected: r,
              setSelected: n,
            }),
          ],
        }),
    ],
  });
}
function Nm() {
  const {
      view: e,
      numRowsPerPage: t,
      includeAllergensFilter: r,
      excludeAllergensFilter: i,
      includeAuthorsFilter: n,
      includeIngredientsFilter: o,
      excludeIngredientsFilter: s,
      loadedCollectionId: a,
      getColumnVisible: l,
      toggleColumn: c,
      setMainView: d,
      setRowsPerPage: u,
      gotoFirstPage: f,
      setIncludeAllergensFilter: h,
      setExcludeAllergensFilter: p,
      setIncludeAuthorsFilter: w,
      setIncludeIngredientsFilter: b,
      setExcludeIngredientsFilter: y,
    } = $e(),
    x = Ze(),
    { data: C } = Am(a),
    { data: k } = zc(a),
    { data: S } = Mc(a),
    A = 1,
    R = 20;
  async function P(N) {
    isNaN(N) ||
      (u(Math.min(R, Math.max(A, N))),
      f(),
      await x.invalidateQueries({ queryKey: ["filterCollection"] }),
      await x.invalidateQueries({ queryKey: ["filterCollectionCount"] }));
  }
  function E(N) {
    if (N.eventPhase !== Event.AT_TARGET) {
      N.preventDefault();
      return;
    }
    d();
  }
  async function H() {
    await x.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  return g(yc, {
    class: "drawer-placement-top",
    open: e === dt.SEARCH_SETTINGS,
    onSlHide: (N) => E(N),
    placement: "top",
    label: "Search Settings",
    children: [
      g("div", {
        style: Zt.settingContainer,
        children: g("div", {
          style: Zt.filterContainer,
          children: [
            "Recipes Per Page",
            g(Te, {
              type: "number",
              value: t.toString(),
              min: A,
              max: R,
              onSlBlur: (N) => {
                P(parseInt(N.target.value));
              },
            }),
          ],
        }),
      }),
      g("div", {
        style: Zt.settingContainer,
        children: g("div", {
          style: Zt.filterContainer,
          children: [
            "Visible Columns",
            g(ii, {
              size: "small",
              checked: l(K.NAME),
              onSlChange: () => c(K.NAME),
              children: "Recipe Name",
            }),
            g(ii, {
              size: "small",
              checked: l(K.AUTHOR),
              onSlChange: () => c(K.AUTHOR),
              children: "Author",
            }),
            g(ii, {
              size: "small",
              checked: l(K.ALLERGENS),
              onSlChange: () => c(K.ALLERGENS),
              children: "Allergens",
            }),
            g(ii, {
              size: "small",
              checked: l(K.REFERENCE),
              onSlChange: () => c(K.REFERENCE),
              children: "Reference",
            }),
            g(ii, {
              size: "small",
              checked: l(K.INGREDIENTS),
              onSlChange: () => c(K.INGREDIENTS),
              children: "Ingredients",
            }),
          ],
        }),
      }),
      g(Hn, {
        columnName: "Author",
        included: n,
        setIncluded: w,
        columnOptions: C,
      }),
      g(Hn, {
        columnName: "Allergens",
        included: r,
        excluded: i,
        setIncluded: h,
        setExcluded: p,
        columnOptions: k,
      }),
      g(Hn, {
        columnName: "Ingredients",
        included: o,
        excluded: s,
        setIncluded: b,
        setExcluded: y,
        columnOptions: S,
      }),
      g(Oi, {
        onClick: () => {
          H();
        },
        children: "Apply",
      }),
    ],
  });
}
var Fm = te`
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
  ps = class extends Q {
    render() {
      return F` <slot part="base" class="menu-label"></slot> `;
    }
  };
ps.styles = [oe, Fm];
var Dm = "sl-menu-label";
ps.define("sl-menu-label");
var zm = ue({
    tagName: Dm,
    elementClass: ps,
    react: ce,
    events: {},
    displayName: "SlMenuLabel",
  }),
  Mm = zm,
  Um = "sl-icon";
_e.define("sl-icon");
var Hm = ue({
    tagName: Um,
    elementClass: _e,
    react: ce,
    events: { onSlLoad: "sl-load", onSlError: "sl-error" },
    displayName: "SlIcon",
  }),
  fs = Hm,
  Bm = te`
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
  et = class extends Q {
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
      const e = F`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
      let t = F``;
      return (
        this.initials
          ? (t = F`<div part="initials" class="avatar__initials">${this.initials}</div>`)
          : (t = F`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `),
        F`
      <div
        part="base"
        class=${le({ avatar: !0, "avatar--circle": this.shape === "circle", "avatar--rounded": this.shape === "rounded", "avatar--square": this.shape === "square" })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? e : t}
      </div>
    `
      );
    }
  };
et.styles = [oe, Bm];
et.dependencies = { "sl-icon": _e };
m([Je()], et.prototype, "hasError", 2);
m([_()], et.prototype, "image", 2);
m([_()], et.prototype, "label", 2);
m([_()], et.prototype, "initials", 2);
m([_()], et.prototype, "loading", 2);
m([_({ reflect: !0 })], et.prototype, "shape", 2);
m([se("image")], et.prototype, "handleImageChange", 1);
var Vm = "sl-avatar";
et.define("sl-avatar");
var qm = ue({
    tagName: Vm,
    elementClass: et,
    react: ce,
    events: { onSlError: "sl-error" },
    displayName: "SlAvatar",
  }),
  Ea = qm,
  jm = te`
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
  He = class Gt extends Q {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Wt(this, "icon", "suffix")),
        (this.localize = new Ue(this)),
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
          await Le(this.base),
          (this.base.hidden = !1);
        const { keyframes: t, options: r } = ge(this, "alert.show", {
          dir: this.localize.dir(),
        });
        await Ce(this.base, t, r), this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"),
          clearTimeout(this.autoHideTimeout),
          clearInterval(this.remainingTimeInterval),
          await Le(this.base);
        const { keyframes: t, options: r } = ge(this, "alert.hide", {
          dir: this.localize.dir(),
        });
        await Ce(this.base, t, r),
          (this.base.hidden = !0),
          this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    async show() {
      if (!this.open) return (this.open = !0), ct(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), ct(this, "sl-after-hide");
    }
    async toast() {
      return new Promise((t) => {
        this.handleCountdownChange(),
          Gt.toastStack.parentElement === null &&
            document.body.append(Gt.toastStack),
          Gt.toastStack.appendChild(this),
          requestAnimationFrame(() => {
            this.clientWidth, this.show();
          }),
          this.addEventListener(
            "sl-after-hide",
            () => {
              Gt.toastStack.removeChild(this),
                t(),
                Gt.toastStack.querySelector("sl-alert") === null &&
                  Gt.toastStack.remove();
            },
            { once: !0 },
          );
      });
    }
    render() {
      return F`
      <div
        part="base"
        class=${le({ alert: !0, "alert--open": this.open, "alert--closable": this.closable, "alert--has-countdown": !!this.countdown, "alert--has-icon": this.hasSlotController.test("icon"), "alert--primary": this.variant === "primary", "alert--success": this.variant === "success", "alert--neutral": this.variant === "neutral", "alert--warning": this.variant === "warning", "alert--danger": this.variant === "danger" })}
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
            ? F`
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
            ? F`
              <div
                class=${le({ alert__countdown: !0, "alert__countdown--ltr": this.countdown === "ltr" })}
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
He.styles = [oe, jm];
He.dependencies = { "sl-icon-button": ye };
m([q('[part~="base"]')], He.prototype, "base", 2);
m([q(".alert__countdown-elapsed")], He.prototype, "countdownElement", 2);
m([_({ type: Boolean, reflect: !0 })], He.prototype, "open", 2);
m([_({ type: Boolean, reflect: !0 })], He.prototype, "closable", 2);
m([_({ reflect: !0 })], He.prototype, "variant", 2);
m([_({ type: Number })], He.prototype, "duration", 2);
m([_({ type: String, reflect: !0 })], He.prototype, "countdown", 2);
m([Je()], He.prototype, "remainingTime", 2);
m(
  [se("open", { waitUntilFirstUpdate: !0 })],
  He.prototype,
  "handleOpenChange",
  1,
);
m([se("duration")], He.prototype, "handleDurationChange", 1);
var Hc = He;
X("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 250, easing: "ease" },
});
X("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 250, easing: "ease" },
});
var Wm = "sl-alert";
Hc.define("sl-alert");
var Km = ue({
    tagName: Wm,
    elementClass: Hc,
    react: ce,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlAlert",
  }),
  Qm = Km;
function Qr({
  message: e,
  variant: t = "primary",
  duration: r = 3e3,
  childRef: i,
}) {
  return g(Qm, {
    ref: i,
    variant: t,
    closable: !0,
    duration: r,
    children: [
      g(fs, {
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
const Bn = {
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: "1",
  },
  avatar: { "--size": "1.75em", cursor: "pointer", marginLeft: "8px" },
};
function Gm() {
  const {
      loadedCollectionId: e,
      clientUsername: t,
      recipeSearchFilter: r,
      filterProps: i,
      setSettingsView: n,
      setLoginView: o,
      setChangePassView: s,
      setChangeUserView: a,
      setCollectionsView: l,
      setRecipeSummaryView: c,
      setClientUsername: d,
      setSelectedRecipe: u,
      setRecipeSearchFilter: f,
    } = $e(),
    h = Ze(),
    { data: p } = Uc(e),
    { status: w, data: b, error: y, isFetching: x } = Ic(),
    C = Se(null);
  w === "error" && console.error(y.message);
  let k;
  ((E) => {
    (E.VIEW_COLLECTIONS = "0"),
      (E.CHANGE_USERNAME = "1"),
      (E.CHANGE_PASSWORD = "2"),
      (E.LOGOUT = "3");
  })(k || (k = {}));
  async function S() {
    const E = await Fc({
      ...i,
      collection_id: e,
      view_min: 0,
      view_max: 1,
      random: !0,
    });
    u(E[0]), c();
  }
  async function A() {
    await im(),
      d(""),
      await h.invalidateQueries({ queryKey: ["loggedIn"] }),
      C.current !== null && (await C.current.toast());
  }
  async function R() {
    await h.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  async function P(E) {
    switch (E) {
      case "0":
        l();
        break;
      case "1":
        a();
        break;
      case "2":
        s();
        break;
      case "3":
        await A();
        break;
    }
  }
  return g("div", {
    style: Bn.root,
    children: [
      g(Qr, {
        variant: "success",
        message: "Logged out successfully",
        childRef: C,
      }),
      g("div", {}),
      x || !b
        ? g(Ea, { style: Bn.avatar, label: "Empty avatar", onClick: () => o() })
        : g(Ac, {
            children: [
              g(Ea, {
                style: Bn.avatar,
                slot: "trigger",
                initials: t[0],
                label: "Avatar with username initial",
              }),
              g(Pc, {
                onSlSelect: (E) => {
                  P(E.detail.item.value);
                },
                children: [
                  g(Mm, { className: "userMenuLabel", children: t }),
                  g(oi, { value: "0", children: "View Collections" }),
                  g(oi, { value: "1", children: "Change Username" }),
                  g(oi, { value: "2", children: "Change Password" }),
                  g(oi, {
                    value: "3",
                    children: [
                      "Log Out",
                      g(fs, { name: "box-arrow-right", slot: "suffix" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      g(ke, {
        disabled: e === -1,
        name: "shuffle",
        label: "Generate Random Recipe",
        onClick: () => {
          S();
        },
      }),
      g(ke, {
        disabled: e === -1,
        name: "sliders",
        label: "Search Settings",
        onClick: () => n(),
      }),
      g(Te, {
        disabled: e === -1,
        clearable: !0,
        type: "search",
        placeholder: `Search ${p || ""}...`,
        style: { flex: "1" },
        value: r,
        onSlChange: (E) => f(E.target.value),
        children: g(ke, {
          disabled: e === -1,
          name: "search",
          label: "Run Search",
          slot: "suffix",
          onClick: () => {
            R();
          },
        }),
      }),
    ],
  });
}
var Ym = te`
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
  fe = class extends Q {
    constructor() {
      super(),
        (this.localize = new Ue(this)),
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
            const e = va(
              getComputedStyle(this).getPropertyValue("--show-delay"),
            );
            clearTimeout(this.hoverTimeout),
              (this.hoverTimeout = window.setTimeout(() => this.show(), e));
          }
        }),
        (this.handleMouseOut = () => {
          if (this.hasTrigger("hover")) {
            const e = va(
              getComputedStyle(this).getPropertyValue("--hide-delay"),
            );
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
          await Le(this.body),
          (this.body.hidden = !1),
          (this.popup.active = !0);
        const { keyframes: r, options: i } = ge(this, "tooltip.show", {
          dir: this.localize.dir(),
        });
        await Ce(this.popup.popup, r, i),
          this.popup.reposition(),
          this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"),
          (t = this.closeWatcher) == null || t.destroy(),
          document.removeEventListener("keydown", this.handleDocumentKeyDown),
          await Le(this.body);
        const { keyframes: r, options: i } = ge(this, "tooltip.hide", {
          dir: this.localize.dir(),
        });
        await Ce(this.popup.popup, r, i),
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
      if (!this.open) return (this.open = !0), ct(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), ct(this, "sl-after-hide");
    }
    render() {
      return F`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${le({ tooltip: !0, "tooltip--open": this.open })}
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
fe.styles = [oe, Ym];
fe.dependencies = { "sl-popup": j };
m([q("slot:not([name])")], fe.prototype, "defaultSlot", 2);
m([q(".tooltip__body")], fe.prototype, "body", 2);
m([q("sl-popup")], fe.prototype, "popup", 2);
m([_()], fe.prototype, "content", 2);
m([_()], fe.prototype, "placement", 2);
m([_({ type: Boolean, reflect: !0 })], fe.prototype, "disabled", 2);
m([_({ type: Number })], fe.prototype, "distance", 2);
m([_({ type: Boolean, reflect: !0 })], fe.prototype, "open", 2);
m([_({ type: Number })], fe.prototype, "skidding", 2);
m([_()], fe.prototype, "trigger", 2);
m([_({ type: Boolean })], fe.prototype, "hoist", 2);
m(
  [se("open", { waitUntilFirstUpdate: !0 })],
  fe.prototype,
  "handleOpenChange",
  1,
);
m(
  [se(["content", "distance", "hoist", "placement", "skidding"])],
  fe.prototype,
  "handleOptionsChange",
  1,
);
m([se("disabled")], fe.prototype, "handleDisabledChange", 1);
X("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 150, easing: "ease" },
});
X("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 150, easing: "ease" },
});
var Xm = "sl-tooltip";
fe.define("sl-tooltip");
var Jm = ue({
    tagName: Xm,
    elementClass: fe,
    react: ce,
    events: {
      onSlShow: "sl-show",
      onSlAfterShow: "sl-after-show",
      onSlHide: "sl-hide",
      onSlAfterHide: "sl-after-hide",
    },
    displayName: "SlTooltip",
  }),
  Ge = Jm,
  Zm = te`
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
  ms = class extends Q {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Wt(this, "footer", "header", "image"));
    }
    render() {
      return F`
      <div
        part="base"
        class=${le({ card: !0, "card--has-footer": this.hasSlotController.test("footer"), "card--has-image": this.hasSlotController.test("image"), "card--has-header": this.hasSlotController.test("header") })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
  };
ms.styles = [oe, Zm];
var eg = "sl-card";
ms.define("sl-card");
var tg = ue({
    tagName: eg,
    elementClass: ms,
    react: ce,
    events: {},
    displayName: "SlCard",
  }),
  wn = tg,
  rg = te`
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
  xn = class extends Q {
    constructor() {
      super(...arguments), (this.effect = "none");
    }
    render() {
      return F`
      <div
        part="base"
        class=${le({ skeleton: !0, "skeleton--pulse": this.effect === "pulse", "skeleton--sheen": this.effect === "sheen" })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
    }
  };
xn.styles = [oe, rg];
m([_()], xn.prototype, "effect", 2);
var ig = "sl-skeleton";
xn.define("sl-skeleton");
var ng = ue({
    tagName: ig,
    elementClass: xn,
    react: ce,
    events: {},
    displayName: "SlSkeleton",
  }),
  Rt = ng;
const G = {
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
function og({ editMode: e }) {
  const { getColumnVisible: t } = $e();
  return g(wn, {
    style: { "--border-radius": "0" },
    children: g("div", {
      style: G.row,
      children: [
        t(K.NAME) &&
          g("div", {
            style: G.cell,
            children: g(Rt, { style: { width: "10em", height: "1em" } }),
          }),
        t(K.AUTHOR) &&
          g("div", {
            style: G.cell,
            children: g(Rt, { style: { width: "8em", height: "1em" } }),
          }),
        t(K.ALLERGENS) &&
          g("div", {
            style: G.cell,
            children: Array(2)
              .fill(0)
              .map(() =>
                g(Rt, {
                  style: { width: "5em", height: "1em", marginLeft: "1em" },
                }),
              ),
          }),
        t(K.REFERENCE) &&
          g("div", {
            style: G.cell,
            children: g(Rt, { style: { width: "14em", height: "1em" } }),
          }),
        t(K.INGREDIENTS) &&
          g("div", {
            style: G.cell,
            children: Array(3)
              .fill(0)
              .map(() =>
                g(Rt, {
                  style: { width: "4em", height: "1em", marginLeft: "1em" },
                }),
              ),
          }),
        g("div", {
          style: G.end,
          children: [
            g(Rt, { style: { width: "1.5em", height: "1.5em" } }),
            e &&
              g(ve, {
                children: [
                  g(Rt, {
                    style: {
                      width: "1.5em",
                      height: "1.5em",
                      marginLeft: "0.5em",
                    },
                  }),
                  g(Rt, {
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
function sg({ editMode: e, rowData: t }) {
  const {
      getColumnVisible: r,
      setUpdateRecipeView: i,
      setRecipeSummaryView: n,
      setSelectedRecipe: o,
    } = $e(),
    s = Ze();
  function a() {
    o(t), n();
  }
  function l() {
    o(t), i();
  }
  async function c() {
    await Nc(t.name),
      await s.invalidateQueries({ queryKey: ["filterCollection"] });
  }
  return g(wn, {
    style: { "--border-radius": "0" },
    children: t
      ? g("div", {
          style: G.row,
          children: [
            r(K.NAME) && g("div", { style: G.cell, children: t.name }),
            r(K.AUTHOR) &&
              g("div", { style: G.cell, children: t.authors.join(",") }),
            r(K.ALLERGENS) &&
              g("div", {
                style: G.cell,
                children: g(qt, {
                  variant: "warning",
                  selected: t.allergens,
                  viewMode: !0,
                }),
              }),
            r(K.REFERENCE) &&
              g("div", { style: G.cell, children: t.reference }),
            r(K.INGREDIENTS) &&
              g("div", {
                style: G.cell,
                children: g(qt, {
                  variant: "primary",
                  selected: t.ingredients,
                  viewMode: !0,
                }),
              }),
            g("div", {
              style: G.end,
              children: [
                g(Ge, {
                  content: "View Recipe",
                  children: g(ke, {
                    name: "eye",
                    label: "View Recipe",
                    onClick: () => a(),
                  }),
                }),
                e &&
                  g(ve, {
                    children: [
                      g(Ge, {
                        content: "Edit Recipe",
                        children: g(ke, {
                          name: "pencil",
                          label: "Edit Recipe",
                          onClick: () => l(),
                        }),
                      }),
                      g(Ge, {
                        content: "Delete Recipe",
                        children: g(ke, {
                          name: "trash",
                          label: "Delete Recipe",
                          onClick: () => {
                            c();
                          },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })
      : g("div", { style: G.row }),
  });
}
function ag({ editMode: e }) {
  const {
      page: t,
      numRowsPerPage: r,
      filterProps: i,
      loadedCollectionId: n,
      getColumnVisible: o,
      setNewRecipeView: s,
      setSelectedRecipe: a,
    } = $e(),
    { data: l, isFetching: c } = bm({
      ...i,
      collection_id: n,
      view_min: t * r,
      view_max: (t + 1) * r,
    });
  function d() {
    a({ name: "", reference: "", authors: [], allergens: [], ingredients: [] }),
      s();
  }
  return g("div", {
    style: G.root,
    children: [
      g(wn, {
        style: { ...G.header, "--border-radius": "0" },
        children: g("div", {
          style: G.row,
          children: [
            o(K.NAME) && g("div", { style: G.cell, children: "Recipe Name" }),
            o(K.AUTHOR) && g("div", { style: G.cell, children: "Author" }),
            o(K.ALLERGENS) &&
              g("div", { style: G.cell, children: "Allergens" }),
            o(K.REFERENCE) &&
              g("div", { style: G.cell, children: "Reference" }),
            o(K.INGREDIENTS) &&
              g("div", { style: G.cell, children: "Ingredients" }),
            g("div", {
              style: { ...G.end, fontSize: "2em" },
              children:
                e &&
                g(Ge, {
                  content: "Create Recipe",
                  placement: "left",
                  children: g(ke, {
                    name: "plus",
                    label: "Create Recipe",
                    onClick: () => d(),
                  }),
                }),
            }),
          ],
        }),
      }),
      Array(r)
        .fill(0)
        .map((u, f) =>
          !c && l !== void 0
            ? g(sg, { editMode: e, rowData: l[f] })
            : g(og, { editMode: e }),
        ),
    ],
  });
}
const lg = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
};
function cg() {
  const {
      page: e,
      numRowsPerPage: t,
      filterProps: r,
      loadedCollectionId: i,
      gotoFirstPage: n,
      gotoPrevPage: o,
      gotoNextPage: s,
      gotoLastPage: a,
    } = $e(),
    l = Ze(),
    { data: c } = wm({ ...r, collection_id: i }),
    d = Math.ceil((c || 0) / t),
    u = async () => {
      n(), await l.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    f = async () => {
      o(), await l.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    h = async () => {
      s(d), await l.invalidateQueries({ queryKey: ["filterCollection"] });
    },
    p = async () => {
      a(d), await l.invalidateQueries({ queryKey: ["filterCollection"] });
    };
  return g("div", {
    style: lg.root,
    children: [
      g(Ge, {
        content: "First Page",
        children: g(ke, {
          disabled: d === 0 || e === 0,
          name: "chevron-double-left",
          onClick: () => {
            u();
          },
          label: "First Page",
        }),
      }),
      g(Ge, {
        content: "Previous Page",
        children: g(ke, {
          disabled: d === 0 || e === 0,
          name: "chevron-left",
          onClick: () => {
            f();
          },
          label: "Previous Page",
        }),
      }),
      e + 1,
      g(Ge, {
        content: "Next Page",
        children: g(ke, {
          disabled: d === 0 || e === d - 1,
          name: "chevron-right",
          onClick: () => {
            h();
          },
          label: "Next Page",
        }),
      }),
      g(Ge, {
        content: "Last Page",
        children: g(ke, {
          disabled: d === 0 || e === d - 1,
          name: "chevron-double-right",
          onClick: () => {
            p();
          },
          label: "Last Page",
        }),
      }),
    ],
  });
}
var ug = te`
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
  tt = class extends Q {
    constructor() {
      super(...arguments),
        (this.hasSlotController = new Wt(this, "footer")),
        (this.localize = new Ue(this)),
        (this.modal = new gc(this)),
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
        this.open && (this.addOpenListeners(), this.modal.activate(), di(this));
    }
    disconnectedCallback() {
      super.disconnectedCallback(),
        this.modal.deactivate(),
        hi(this),
        this.removeOpenListeners();
    }
    requestClose(e) {
      if (
        this.emit("sl-request-close", { cancelable: !0, detail: { source: e } })
          .defaultPrevented
      ) {
        const r = ge(this, "dialog.denyClose", { dir: this.localize.dir() });
        Ce(this.panel, r.keyframes, r.options);
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
          di(this);
        const e = this.querySelector("[autofocus]");
        e && e.removeAttribute("autofocus"),
          await Promise.all([Le(this.dialog), Le(this.overlay)]),
          (this.dialog.hidden = !1),
          requestAnimationFrame(() => {
            this.emit("sl-initial-focus", { cancelable: !0 })
              .defaultPrevented ||
              (e
                ? e.focus({ preventScroll: !0 })
                : this.panel.focus({ preventScroll: !0 })),
              e && e.setAttribute("autofocus", "");
          });
        const t = ge(this, "dialog.show", { dir: this.localize.dir() }),
          r = ge(this, "dialog.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          Ce(this.panel, t.keyframes, t.options),
          Ce(this.overlay, r.keyframes, r.options),
        ]),
          this.emit("sl-after-show");
      } else {
        this.emit("sl-hide"),
          this.removeOpenListeners(),
          this.modal.deactivate(),
          await Promise.all([Le(this.dialog), Le(this.overlay)]);
        const e = ge(this, "dialog.hide", { dir: this.localize.dir() }),
          t = ge(this, "dialog.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          Ce(this.overlay, t.keyframes, t.options).then(() => {
            this.overlay.hidden = !0;
          }),
          Ce(this.panel, e.keyframes, e.options).then(() => {
            this.panel.hidden = !0;
          }),
        ]),
          (this.dialog.hidden = !0),
          (this.overlay.hidden = !1),
          (this.panel.hidden = !1),
          hi(this);
        const r = this.originalTrigger;
        typeof (r == null ? void 0 : r.focus) == "function" &&
          setTimeout(() => r.focus()),
          this.emit("sl-after-hide");
      }
    }
    async show() {
      if (!this.open) return (this.open = !0), ct(this, "sl-after-show");
    }
    async hide() {
      if (this.open) return (this.open = !1), ct(this, "sl-after-hide");
    }
    render() {
      return F`
      <div
        part="base"
        class=${le({ dialog: !0, "dialog--open": this.open, "dialog--has-footer": this.hasSlotController.test("footer") })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${D(this.noHeader ? this.label : void 0)}
          aria-labelledby=${D(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${
            this.noHeader
              ? ""
              : F`
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
tt.styles = [oe, ug];
tt.dependencies = { "sl-icon-button": ye };
m([q(".dialog")], tt.prototype, "dialog", 2);
m([q(".dialog__panel")], tt.prototype, "panel", 2);
m([q(".dialog__overlay")], tt.prototype, "overlay", 2);
m([_({ type: Boolean, reflect: !0 })], tt.prototype, "open", 2);
m([_({ reflect: !0 })], tt.prototype, "label", 2);
m(
  [_({ attribute: "no-header", type: Boolean, reflect: !0 })],
  tt.prototype,
  "noHeader",
  2,
);
m(
  [se("open", { waitUntilFirstUpdate: !0 })],
  tt.prototype,
  "handleOpenChange",
  1,
);
X("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 250, easing: "ease" },
});
X("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 },
  ],
  options: { duration: 250, easing: "ease" },
});
X("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 },
});
X("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 },
});
X("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 },
});
var dg = "sl-dialog";
tt.define("sl-dialog");
var hg = ue({
    tagName: dg,
    elementClass: tt,
    react: ce,
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
  Ii = hg;
const $a = { inputField: { marginBottom: "1em" } };
function pg() {
  const {
      view: e,
      setMainView: t,
      setClientUsername: r,
      setSessionAlert: i,
    } = $e(),
    n = Ze(),
    [o, s] = Y(""),
    [a, l] = Y(""),
    [c, d] = Y(""),
    u = Se(null);
  function f() {
    t(), s(""), l(""), d("");
  }
  async function h() {
    try {
      await rm(o, a),
        r(o),
        i(!1),
        f(),
        await n.invalidateQueries({ queryKey: ["loggedIn"] }),
        u.current !== null && (await u.current.toast());
    } catch (p) {
      p instanceof Error && d(p.message);
    }
  }
  return g(Ii, {
    class: "dialog-overview",
    open: e === dt.LOGIN_PROMPT,
    onSlAfterHide: () => f(),
    label: "Log In",
    children: [
      g(Qr, {
        message: "Logged in successfully",
        variant: "success",
        childRef: u,
      }),
      g(Te, {
        style: $a.inputField,
        type: "text",
        value: o,
        onSlChange: (p) => s(p.target.value),
        placeholder: "Username",
      }),
      g(Te, {
        className: "errorHelp",
        style: $a.inputField,
        helpText: c,
        type: "password",
        value: a,
        onSlChange: (p) => l(p.target.value),
        placeholder: "Password",
        passwordToggle: !0,
      }),
      g(Oi, {
        onClick: () => {
          h();
        },
        children: "Log In",
      }),
    ],
  });
}
const Vn = { inputField: { marginBottom: "1em" } };
function fg() {
  const { view: e, setMainView: t, setSessionAlert: r } = $e(),
    [i, n] = Y(""),
    [o, s] = Y(""),
    [a, l] = Y(""),
    [c, d] = Y(""),
    u = Se(null);
  function f() {
    t(), n(""), s(""), l("");
  }
  async function h() {
    if ((d(""), a !== o)) {
      d("New passwords do not match");
      return;
    }
    try {
      await sm(i, o), f(), u.current !== null && (await u.current.toast());
    } catch (p) {
      p instanceof Error && (p.message === Vt ? r() : d(p.message));
    }
  }
  return g(Ii, {
    class: "dialog-overview",
    open: e === dt.CHANGE_PASSWORD,
    onSlAfterHide: () => f(),
    label: "Change Password",
    children: [
      g(Qr, {
        message: "Password changed successfully",
        variant: "success",
        childRef: u,
      }),
      g(Te, {
        style: Vn.inputField,
        type: "password",
        value: i,
        onSlChange: (p) => n(p.target.value),
        placeholder: "Old Password",
        passwordToggle: !0,
      }),
      g(Te, {
        style: Vn.inputField,
        type: "password",
        value: o,
        onSlChange: (p) => s(p.target.value),
        placeholder: "New Password",
        passwordToggle: !0,
      }),
      g(Te, {
        className: "errorHelp",
        style: Vn.inputField,
        helpText: c,
        type: "password",
        value: a,
        onSlChange: (p) => l(p.target.value),
        placeholder: "Retype New Password",
        passwordToggle: !0,
      }),
      g(Oi, {
        onClick: () => {
          h();
        },
        children: "Confirm",
      }),
    ],
  });
}
const Ra = { inputField: { marginBottom: "1em" } };
function mg() {
  const {
      view: e,
      setMainView: t,
      setClientUsername: r,
      setSessionAlert: i,
    } = $e(),
    [n, o] = Y(""),
    [s, a] = Y(""),
    [l, c] = Y(""),
    d = Se(null);
  function u() {
    t(), o(""), a(""), c("");
  }
  async function f() {
    try {
      await om(s, n),
        r(n),
        u(),
        d.current !== null && (await d.current.toast());
    } catch (h) {
      h instanceof Error && (h.message === Vt ? i() : c(h.message));
    }
  }
  return g(Ii, {
    className: "dialog-overview",
    open: e === dt.CHANGE_USERNAME,
    onSlAfterHide: () => u(),
    label: "Change Username",
    children: [
      g(Qr, {
        message: "Changed username successfully",
        variant: "success",
        childRef: d,
      }),
      g(Te, {
        style: Ra.inputField,
        type: "text",
        value: n,
        onSlChange: (h) => o(h.target.value),
        placeholder: "New Username",
      }),
      g(Te, {
        className: "errorHelp",
        style: Ra.inputField,
        helpText: l,
        type: "password",
        value: s,
        onSlChange: (h) => a(h.target.value),
        placeholder: "Password",
        passwordToggle: !0,
      }),
      g(Oi, {
        onClick: () => {
          f();
        },
        children: "Confirm",
      }),
    ],
  });
}
var gg = te`
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
  me = class extends Q {
    constructor() {
      super(...arguments),
        (this.localize = new Ue(this)),
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
        let n = this.from,
          o = "";
        r
          ? ([n, o] = this.from.trim().split("."))
          : i && ([n, o] = this.from.trim().replace(/\]$/, "").split("["));
        const s = "getElementById" in t ? t.getElementById(n) : null;
        s
          ? i
            ? (e = s.getAttribute(o) || "")
            : r
              ? (e = s[o] || "")
              : (e = s.textContent || "")
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
        n = e === "success" ? this.successIcon : this.errorIcon,
        o = ge(this, "copy.in", { dir: "ltr" }),
        s = ge(this, "copy.out", { dir: "ltr" });
      (this.tooltip.content = e === "success" ? r : i),
        await this.copyIcon.animate(s.keyframes, s.options).finished,
        (this.copyIcon.hidden = !0),
        (this.status = e),
        (n.hidden = !1),
        await n.animate(o.keyframes, o.options).finished,
        setTimeout(async () => {
          await n.animate(s.keyframes, s.options).finished,
            (n.hidden = !0),
            (this.status = "rest"),
            (this.copyIcon.hidden = !1),
            await this.copyIcon.animate(o.keyframes, o.options).finished,
            (this.tooltip.content = t),
            (this.isCopying = !1);
        }, this.feedbackDuration);
    }
    render() {
      const e = this.copyLabel || this.localize.term("copy");
      return F`
      <sl-tooltip
        class=${le({ "copy-button": !0, "copy-button--success": this.status === "success", "copy-button--error": this.status === "error" })}
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
me.styles = [oe, gg];
me.dependencies = { "sl-icon": _e, "sl-tooltip": fe };
m([q('slot[name="copy-icon"]')], me.prototype, "copyIcon", 2);
m([q('slot[name="success-icon"]')], me.prototype, "successIcon", 2);
m([q('slot[name="error-icon"]')], me.prototype, "errorIcon", 2);
m([q("sl-tooltip")], me.prototype, "tooltip", 2);
m([Je()], me.prototype, "isCopying", 2);
m([Je()], me.prototype, "status", 2);
m([_()], me.prototype, "value", 2);
m([_()], me.prototype, "from", 2);
m([_({ type: Boolean, reflect: !0 })], me.prototype, "disabled", 2);
m([_({ attribute: "copy-label" })], me.prototype, "copyLabel", 2);
m([_({ attribute: "success-label" })], me.prototype, "successLabel", 2);
m([_({ attribute: "error-label" })], me.prototype, "errorLabel", 2);
m(
  [_({ attribute: "feedback-duration", type: Number })],
  me.prototype,
  "feedbackDuration",
  2,
);
m([_({ attribute: "tooltip-placement" })], me.prototype, "tooltipPlacement", 2);
m([_({ type: Boolean })], me.prototype, "hoist", 2);
X("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" },
  ],
  options: { duration: 100 },
});
X("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" },
  ],
  options: { duration: 100 },
});
var vg = "sl-copy-button";
me.define("sl-copy-button");
var yg = ue({
    tagName: vg,
    elementClass: me,
    react: ce,
    events: { onSlCopy: "sl-copy", onSlError: "sl-error" },
    displayName: "SlCopyButton",
  }),
  bg = yg,
  _g = te`
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
  mr = class extends Q {
    constructor() {
      super(...arguments),
        (this.localize = new Ue(this)),
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
      return F`
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
mr.styles = [oe, _g];
m([q(".progress-ring__indicator")], mr.prototype, "indicator", 2);
m([Je()], mr.prototype, "indicatorOffset", 2);
m([_({ type: Number, reflect: !0 })], mr.prototype, "value", 2);
m([_()], mr.prototype, "label", 2);
var wg = "sl-progress-ring";
mr.define("sl-progress-ring");
var xg = ue({
    tagName: wg,
    elementClass: mr,
    react: ce,
    events: {},
    displayName: "SlProgressRing",
  }),
  Cg = xg;
const Aa = {
  collectionTitle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionCard: { marginBottom: "1em", flex: 1, width: "100%" },
};
function kg({ collectionId: e, searchTerm: t }) {
  const { setSessionAlert: r } = $e(),
    i = Ze(),
    { data: n } = Uc(e),
    { data: o } = Tm(e),
    s = window.location.origin + "/collection/" + e,
    a = 2e3,
    [l, c] = Y(0),
    d = Se(null),
    u = Se(null),
    f = Se(null);
  function h() {
    (f.current = Date.now()),
      (d.current = window.setInterval(() => {
        if (f.current) {
          const x = Date.now() - f.current,
            C = Math.min((x / a) * 100, 100);
          c(C);
        }
      }, 50));
  }
  function p() {
    h(),
      (u.current = window.setTimeout(async () => {
        await b(), w();
      }, a));
  }
  function w() {
    u.current && window.clearTimeout(u.current),
      d.current && window.clearInterval(d.current),
      (u.current = null),
      (d.current = null),
      (f.current = null),
      c(0);
  }
  async function b() {
    try {
      await km(e),
        await i.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (x) {
      x instanceof Error && (x.message === Vt ? r() : console.error(x.message));
    }
  }
  async function y(x, C) {
    try {
      await xm(x, C),
        await i.invalidateQueries({ queryKey: ["collectionName"] });
    } catch (k) {
      k instanceof Error && (k.message === Vt ? r() : console.error(k.message));
    }
  }
  return n === void 0 || !n.toLocaleLowerCase().includes(t.toLocaleLowerCase())
    ? null
    : g(wn, {
        style: Aa.collectionCard,
        children: [
          g("div", {
            slot: "header",
            style: Aa.collectionTitle,
            children: [
              g(Te, {
                className: "collectionsName",
                filled: !0,
                value: n,
                onSlBlur: (x) => {
                  y(e, x.target.value);
                },
              }),
              g(Ge, {
                content: "Open Collection",
                children: g(ke, {
                  name: "box-arrow-up-right",
                  label: "Go to Recipe",
                  onClick: () => {
                    window.location.assign(s);
                  },
                }),
              }),
              g(bg, {
                value: s,
                copyLabel: "Share Collection",
                successLabel: "Copied",
                errorLabel: "Failed to copy",
                children: g(fs, { name: "share", slot: "copy-icon" }),
              }),
              g(Ge, {
                content: "Delete Collection (Hold)",
                children: g(Cg, {
                  value: l,
                  style: `
              --size: 35px;
              --track-width: 2px;
              --track-color: none;
              --indicator-transition-duration: 2;
            `,
                  children: g(ke, {
                    name: "trash",
                    label: "Delete Collection (Hold)",
                    onMouseDown: () => p(),
                    onMouseUp: () => w(),
                    onMouseLeave: () => w(),
                    onTouchStart: () => p(),
                    onTouchEnd: () => w(),
                    onTouchCancel: () => w(),
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
const Pa = {
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  collectionCard: { marginBottom: "1em", flex: 1, width: "100%" },
};
function Sg() {
  const e = Ze(),
    { view: t, setMainView: r, setSessionAlert: i } = $e(),
    { data: n } = Dc(),
    [o, s] = Y("");
  function a(c) {
    c.eventPhase === Event.AT_TARGET ? r() : c.preventDefault();
  }
  async function l() {
    try {
      await Cm("New Collection"),
        await e.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (c) {
      c instanceof Error && (c.message === Vt ? i() : console.error(c.message));
    }
  }
  return g(yc, {
    class: "drawer-placement-start",
    open: t === dt.COLLECTIONS_LIST,
    onSlHide: (c) => a(c),
    placement: "start",
    label: "Collections",
    children:
      n !== void 0 &&
      g("div", {
        style: Pa.root,
        children: [
          g(Te, {
            style: Pa.collectionCard,
            clearable: !0,
            type: "search",
            placeholder: "Find a collection...",
            value: o,
            onSlChange: (c) => s(c.target.value),
          }),
          n.map((c) => g(kg, { collectionId: c, searchTerm: o })),
          g(Ge, {
            content: "Add Collection",
            children: g(ke, {
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
const qn = { inputField: { marginBottom: "1em" } };
function Ta({ formTitle: e, submitLabel: t, submitMessage: r, viewState: i }) {
  const {
      view: n,
      selectedRecipe: o,
      selectedRecipeName: s,
      loadedCollectionId: a,
      setMainView: l,
      setSelectedRecipe: c,
      setSessionAlert: d,
    } = $e(),
    u = Ze(),
    f = Se(null),
    [h, p] = Y("");
  Ie(() => {
    p(s);
  }, [s]);
  const { data: w } = zc(a),
    { data: b } = Mc(a);
  function y(C) {
    if (C.eventPhase !== Event.AT_TARGET) {
      C.preventDefault();
      return;
    }
    l();
  }
  async function x() {
    if (h !== "")
      try {
        i === dt.UPDATE_RECIPE_FORM && (await Nc(o.name)),
          await am(a, h, o.reference, o.authors, o.ingredients, o.allergens),
          await u.invalidateQueries({ queryKey: ["filterCollection"] }),
          l(),
          f.current !== null && (await f.current.toast());
      } catch (C) {
        C instanceof Error &&
          (C.message === Vt ? d() : console.error(C.message));
      }
  }
  return g(Ii, {
    class: "dialog-overview",
    open: n === i,
    onSlHide: (C) => y(C),
    label: e,
    children: [
      g(Qr, { message: r, variant: "success", childRef: f }),
      g(Te, {
        style: qn.inputField,
        type: "text",
        value: h,
        onSlChange: (C) => p(C.target.value),
        placeholder: "Recipe Name",
      }),
      g(Te, {
        style: qn.inputField,
        type: "text",
        value: o.authors.join(","),
        onSlChange: (C) => c({ ...o, authors: C.target.value.split(",") }),
        placeholder: "Authors",
      }),
      g(Te, {
        style: qn.inputField,
        type: "text",
        value: o.reference,
        onSlChange: (C) => c({ ...o, reference: C.target.value }),
        placeholder: "Reference",
      }),
      g(qt, {
        variant: "primary",
        available: w,
        selected: o.allergens,
        setSelected: (C) => c({ ...o, allergens: C }),
        tagType: So.Allergen,
      }),
      g(qt, {
        variant: "primary",
        available: b,
        selected: o.ingredients,
        setSelected: (C) => c({ ...o, ingredients: C }),
        tagType: So.Ingredient,
      }),
      g(Oi, {
        onClick: () => {
          x();
        },
        children: [" ", t],
      }),
    ],
  });
}
const Oa = { summaryField: { marginBottom: "1em" } };
function Eg() {
  const { view: e, setMainView: t, selectedRecipe: r } = $e();
  function i() {
    t();
  }
  return g(Ii, {
    class: "dialog-overview",
    open: e === dt.RECIPE_SUMMARY,
    onSlHide: () => i(),
    label: r.name,
    children: [
      g("strong", { children: "Author(s)" }),
      g("div", { style: Oa.summaryField, children: r.authors.join(",") }),
      g("strong", { children: "Reference" }),
      g("div", { style: Oa.summaryField, children: r.reference }),
      g("strong", { children: "Allergens" }),
      g(qt, { variant: "primary", selected: r.allergens, viewMode: !0 }),
      g("strong", { children: "Ingredients" }),
      g(qt, { variant: "primary", selected: r.ingredients, viewMode: !0 }),
    ],
  });
}
vo("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/");
const La = {
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
function Bc() {
  const { sessionAlert: e, loadedCollectionId: t, setClientUsername: r } = $e(),
    i = Ze(),
    { data: n } = Ic(),
    { data: o } = Dc(),
    s = Se(null);
  return (
    Ie(() => {
      r(ee.user);
    }, []),
    Ie(() => {
      e &&
        s.current !== null &&
        (s.current.toast(),
        i.invalidateQueries({ queryKey: ["loggedIn"] }),
        Lc());
    }, [e]),
    g("div", {
      style: La.root,
      children: [
        g(Qr, {
          message: "Session expired, please log in again",
          variant: "danger",
          childRef: s,
          duration: 3e4,
        }),
        t !== -1 && g(Nm, {}),
        g(Sg, {}),
        g(pg, {}),
        g(mg, {}),
        g(fg, {}),
        g(Gm, {}),
        t !== -1
          ? g(ve, {
              children: [
                g(ag, { editMode: n === !0 && o !== void 0 && o.includes(t) }),
                g(cg, {}),
                g(Ta, {
                  formTitle: "New Recipe",
                  submitLabel: "Add Recipe",
                  submitMessage: "Added recipe successfully",
                  viewState: dt.NEW_RECIPE_FORM,
                }),
                g(Ta, {
                  formTitle: "Update Recipe",
                  submitLabel: "Update",
                  submitMessage: "Updated recipe successfully",
                  viewState: dt.UPDATE_RECIPE_FORM,
                }),
                g(Eg, {}),
              ],
            })
          : g("div", {
              style: La.noCollectionText,
              children: "No collection selected!",
            }),
      ],
    })
  );
}
const $g = {
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
function Vc() {
  return g("div", {
    style: $g,
    children: [
      "             _._  _-=.",
      g("br", {}),
      "      -=-_ _-    Y    \\  _.",
      g("br", {}),
      '     O    \\      |     &"  =-',
      g("br", {}),
      "     |     |          /      )",
      g("br", {}),
      "  ==-*                       '",
      g("br", {}),
      " -    \\                     |",
      g("br", {}),
      "(      -                    *",
      g("br", {}),
      " \\_         _        -     /     404?????",
      g("br", {}),
      "   -._       \\        |    |",
      g("br", {}),
      '      "\\       \\      |    |',
      g("br", {}),
      "        -       |     \\    L     _",
      g("br", {}),
      `         '.      \\     | ..#=--"" |`,
      g("br", {}),
      "           \\      \\   _|-          \\",
      g("br", {}),
      '            &    _"-^             _-x',
      g("br", {}),
      '            _#--             _.-""',
      g("br", {}),
      '         <--            _.--"',
      g("br", {}),
      '          -        __-""',
      g("br", {}),
      '           \\   ..-"              O',
      g("br", {}),
      "            x-'",
      g("br", {}),
      "                        O",
      g("br", {}),
      "                                _.--.",
      g("br", {}),
      "                              -'",
      g("br", {}),
      "                             '",
    ],
  });
}
function Rg() {
  const { setLoadedCollectionId: e } = $e(),
    t = ch(),
    r = parseInt(t.id || "-1"),
    { data: i, isFetching: n } = Im(r);
  return (
    Ie(() => {
      e(parseInt(t.id || "-1"));
    }, [t]),
    n
      ? g("div", {
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
          children: g(Zu, { style: "font-size: 350px; --track-width: 30px;" }),
        })
      : i
        ? g(Bc, {})
        : g(Vc, {})
  );
}
tm();
Fr(
  g(_d, {
    client: Jf,
    children: g(Kh, {
      children: g(kh, {
        children: [
          g(Wi, { path: "/", element: g(Bc, {}) }),
          g(Wi, { path: "/collection/:id", element: g(Rg, {}) }),
          g(Wi, { path: "*", element: g(Vc, {}) }),
        ],
      }),
    }),
  }),
  document.getElementById("app"),
);
