function M() {}

function ot(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function U(t) {
    return t()
}

function I() {
    return Object.create(null)
}

function $(t) {
    t.forEach(U)
}

function V(t) {
    return typeof t == "function"
}

function At(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let k;

function kt(t, e) {
    return k || (k = document.createElement("a")), k.href = e, t === k.href
}

function lt(t) {
    return Object.keys(t).length === 0
}

function ut(t, ...e) {
    if (t == null) return M;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function St(t, e, n) {
    t.$$.on_destroy.push(ut(e, n))
}

function Mt(t, e, n, i) {
    if (t) {
        const s = X(t, e, n, i);
        return t[0](s)
    }
}

function X(t, e, n, i) {
    return t[1] && i ? ot(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function Ct(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const o = [],
                r = Math.max(e.dirty.length, s.length);
            for (let l = 0; l < r; l += 1) o[l] = e.dirty[l] | s[l];
            return o
        }
        return e.dirty | s
    }
    return e.dirty
}

function jt(t, e, n, i, s, o) {
    if (s) {
        const r = X(e, n, i, o);
        t.p(r, s)
    }
}

function Ht(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}

function Lt(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e
}

function Pt(t, e) {
    const n = {};
    e = new Set(e);
    for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
    return n
}
let j = !1;

function at() {
    j = !0
}

function ft() {
    j = !1
}

function _t(t, e, n, i) {
    for (; t < e;) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}

function dt(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let u = 0; u < e.length; u++) {
            const f = e[u];
            f.claim_order !== void 0 && c.push(f)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let c = 0; c < e.length; c++) {
        const u = e[c].claim_order,
            f = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : _t(1, s, _ => e[n[_]].claim_order, u)) - 1;
        i[c] = n[f] + 1;
        const d = f + 1;
        n[d] = c, s = Math.max(d, s)
    }
    const o = [],
        r = [];
    let l = e.length - 1;
    for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
        for (o.push(e[c - 1]); l >= c; l--) r.push(e[l]);
        l--
    }
    for (; l >= 0; l--) r.push(e[l]);
    o.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
    for (let c = 0, u = 0; c < r.length; c++) {
        for (; u < o.length && r[c].claim_order >= o[u].claim_order;) u++;
        const f = u < o.length ? o[u] : null;
        t.insertBefore(r[c], f)
    }
}

function ht(t, e) {
    if (j) {
        for (dt(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function mt(t, e, n) {
    t.insertBefore(e, n || null)
}

function pt(t, e, n) {
    j && !n ? ht(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function C(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function Dt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function Y(t) {
    return document.createElement(t)
}

function Z(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function G(t) {
    return document.createTextNode(t)
}

function qt() {
    return G(" ")
}

function Bt() {
    return G("")
}

function Ot(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function Gt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function yt(t) {
    return Array.from(t.childNodes)
}

function tt(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function et(t, e, n, i, s = !1) {
    tt(t);
    const o = (() => {
        for (let r = t.claim_info.last_index; r < t.length; r++) {
            const l = t[r];
            if (e(l)) {
                const c = n(l);
                return c === void 0 ? t.splice(r, 1) : t[r] = c, s || (t.claim_info.last_index = r), l
            }
        }
        for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
            const l = t[r];
            if (e(l)) {
                const c = n(l);
                return c === void 0 ? t.splice(r, 1) : t[r] = c, s ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = r, l
            }
        }
        return i()
    })();
    return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o
}

function nt(t, e, n, i) {
    return et(t, s => s.nodeName === e, s => {
        const o = [];
        for (let r = 0; r < s.attributes.length; r++) {
            const l = s.attributes[r];
            n[l.name] || o.push(l.name)
        }
        o.forEach(r => s.removeAttribute(r))
    }, () => i(e))
}

function Rt(t, e, n) {
    return nt(t, e, n, Y)
}

function zt(t, e, n) {
    return nt(t, e, n, Z)
}

function gt(t, e) {
    return et(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => G(e), !0)
}

function Ft(t) {
    return gt(t, " ")
}

function W(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e) return i
    }
    return t.length
}

function It(t, e) {
    const n = W(t, "HTML_TAG_START", 0),
        i = W(t, "HTML_TAG_END", n);
    if (n === i) return new J(void 0, e);
    tt(t);
    const s = t.splice(n, i - n + 1);
    C(s[0]), C(s[s.length - 1]);
    const o = s.slice(1, s.length - 1);
    for (const r of o) r.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new J(o, e)
}

function Wt(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Jt(t, e) {
    t.value = e ? ? ""
}

function Kt(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function Qt(t, e, n) {
    for (let i = 0; i < t.options.length; i += 1) {
        const s = t.options[i];
        if (s.__value === e) {
            s.selected = !0;
            return
        }
    }(!n || e !== void 0) && (t.selectedIndex = -1)
}

function Ut(t) {
    const e = t.querySelector(":checked");
    return e && e.__value
}

function xt(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    const s = document.createEvent("CustomEvent");
    return s.initCustomEvent(t, n, i, e), s
}

function Vt(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const o = s.textContent.trim();
            o === `HEAD_${t}_END` ? (i -= 1, n.push(s)) : o === `HEAD_${t}_START` && (i += 1, n.push(s))
        } else i > 0 && n.push(s);
    return n
}
class bt {
    constructor(e = !1) {
        this.is_svg = !1, this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = Z(n.nodeName) : this.e = Y(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) mt(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(C)
    }
}
class J extends bt {
    constructor(e, n = !1) {
        super(n), this.e = this.n = null, this.l = e
    }
    c(e) {
        this.l ? this.n = this.l : super.c(e)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) pt(this.t, this.n[n], e)
    }
}

function Xt(t, e) {
    return new t(e)
}
let v;

function E(t) {
    v = t
}

function T() {
    if (!v) throw new Error("Function called outside component initialization");
    return v
}

function Yt(t) {
    T().$$.on_mount.push(t)
}

function Zt(t) {
    T().$$.after_update.push(t)
}

function te() {
    const t = T();
    return (e, n, {
        cancelable: i = !1
    } = {}) => {
        const s = t.$$.callbacks[e];
        if (s) {
            const o = xt(e, n, {
                cancelable: i
            });
            return s.slice().forEach(r => {
                r.call(t, o)
            }), !o.defaultPrevented
        }
        return !0
    }
}

function ee(t, e) {
    return T().$$.context.set(t, e), e
}

function ne(t) {
    return T().$$.context.get(t)
}
const b = [],
    K = [];
let w = [];
const Q = [],
    it = Promise.resolve();
let B = !1;

function st() {
    B || (B = !0, it.then(rt))
}

function ie() {
    return st(), it
}

function O(t) {
    w.push(t)
}
const q = new Set;
let x = 0;

function rt() {
    if (x !== 0) return;
    const t = v;
    do {
        try {
            for (; x < b.length;) {
                const e = b[x];
                x++, E(e), wt(e.$$)
            }
        } catch (e) {
            throw b.length = 0, x = 0, e
        }
        for (E(null), b.length = 0, x = 0; K.length;) K.pop()();
        for (let e = 0; e < w.length; e += 1) {
            const n = w[e];
            q.has(n) || (q.add(n), n())
        }
        w.length = 0
    } while (b.length);
    for (; Q.length;) Q.pop()();
    B = !1, q.clear(), E(t)
}

function wt(t) {
    if (t.fragment !== null) {
        t.update(), $(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O)
    }
}

function $t(t) {
    const e = [],
        n = [];
    w.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), w = e
}
const S = new Set;
let g;

function se() {
    g = {
        r: 0,
        c: [],
        p: g
    }
}

function re() {
    g.r || $(g.c), g = g.p
}

function ct(t, e) {
    t && t.i && (S.delete(t), t.i(e))
}

function Et(t, e, n, i) {
    if (t && t.o) {
        if (S.has(t)) return;
        S.add(t), g.c.push(() => {
            S.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}

function ce(t, e) {
    Et(t, 1, 1, () => {
        e.delete(t.key)
    })
}

function oe(t, e, n, i, s, o, r, l, c, u, f, d) {
    let _ = t.length,
        m = o.length,
        h = _;
    const H = {};
    for (; h--;) H[t[h].key] = h;
    const N = [],
        L = new Map,
        P = new Map,
        R = [];
    for (h = m; h--;) {
        const a = d(s, o, h),
            p = n(a);
        let y = r.get(p);
        y ? i && R.push(() => y.p(a, e)) : (y = u(p, a), y.c()), L.set(p, N[h] = y), p in H && P.set(p, Math.abs(h - H[p]))
    }
    const z = new Set,
        F = new Set;

    function D(a) {
        ct(a, 1), a.m(l, f), r.set(a.key, a), f = a.first, m--
    }
    for (; _ && m;) {
        const a = N[m - 1],
            p = t[_ - 1],
            y = a.key,
            A = p.key;
        a === p ? (f = a.first, _--, m--) : L.has(A) ? !r.has(y) || z.has(y) ? D(a) : F.has(A) ? _-- : P.get(y) > P.get(A) ? (F.add(y), D(a)) : (z.add(A), _--) : (c(p, r), _--)
    }
    for (; _--;) {
        const a = t[_];
        L.has(a.key) || c(a, r)
    }
    for (; m;) D(N[m - 1]);
    return $(R), N
}

function le(t, e) {
    const n = {},
        i = {},
        s = {
            $$scope: 1
        };
    let o = t.length;
    for (; o--;) {
        const r = t[o],
            l = e[o];
        if (l) {
            for (const c in r) c in l || (i[c] = 1);
            for (const c in l) s[c] || (n[c] = l[c], s[c] = 1);
            t[o] = l
        } else
            for (const c in r) s[c] = 1
    }
    for (const r in i) r in n || (n[r] = void 0);
    return n
}

function ue(t) {
    return typeof t == "object" && t !== null ? t : {}
}

function ae(t) {
    t && t.c()
}

function fe(t, e) {
    t && t.l(e)
}

function vt(t, e, n, i) {
    const {
        fragment: s,
        after_update: o
    } = t.$$;
    s && s.m(e, n), i || O(() => {
        const r = t.$$.on_mount.map(U).filter(V);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : $(r), t.$$.on_mount = []
    }), o.forEach(O)
}

function Tt(t, e) {
    const n = t.$$;
    n.fragment !== null && ($t(n.after_update), $(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Nt(t, e) {
    t.$$.dirty[0] === -1 && (b.push(t), st(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function _e(t, e, n, i, s, o, r, l = [-1]) {
    const c = v;
    E(t);
    const u = t.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: M,
        not_equal: s,
        bound: I(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: I(),
        dirty: l,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    r && r(u.root);
    let f = !1;
    if (u.ctx = n ? n(t, e.props || {}, (d, _, ...m) => {
            const h = m.length ? m[0] : _;
            return u.ctx && s(u.ctx[d], u.ctx[d] = h) && (!u.skip_bound && u.bound[d] && u.bound[d](h), f && Nt(t, d)), _
        }) : [], u.update(), f = !0, $(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
        if (e.hydrate) {
            at();
            const d = yt(e.target);
            u.fragment && u.fragment.l(d), d.forEach(C)
        } else u.fragment && u.fragment.c();
        e.intro && ct(t.$$.fragment), vt(t, e.target, e.anchor, e.customElement), ft(), rt()
    }
    E(c)
}
class de {
    $destroy() {
        Tt(this, 1), this.$destroy = M
    }
    $on(e, n) {
        if (!V(n)) return M;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const s = i.indexOf(n);
            s !== -1 && i.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !lt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
export {
    Ut as $, vt as A, Tt as B, Z as C, zt as D, kt as E, ht as F, M as G, St as H, Dt as I, Vt as J, Mt as K, jt as L, Ht as M, Ct as N, Ot as O, $ as P, Pt as Q, ot as R, de as S, Lt as T, le as U, ue as V, ne as W, J as X, It as Y, te as Z, ee as _, qt as a, V as a0, Jt as a1, O as a2, Qt as a3, oe as a4, ce as a5, pt as b, Ft as c, Et as d, Bt as e, re as f, ct as g, C as h, _e as i, Zt as j, Y as k, Rt as l, yt as m, Gt as n, Yt as o, Kt as p, G as q, gt as r, At as s, ie as t, Wt as u, se as v, K as w, Xt as x, ae as y, fe as z
};