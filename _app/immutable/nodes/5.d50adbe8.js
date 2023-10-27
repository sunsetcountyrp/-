import {
    S as be,
    i as ge,
    s as Ee,
    k as d,
    a as y,
    q as I,
    J as ke,
    l as p,
    h as c,
    c as M,
    m as g,
    r as A,
    n as i,
    E as ie,
    p as ne,
    F as o,
    b as P,
    u as z,
    G as U,
    I as ve,
    C as ce,
    D as he,
    O as le,
    P as we
} from "../chunks/index.81f9bd2f.js";
import {
    b as x,
    c as De
} from "../chunks/helpers.b6cd443e.js";

function ue(n, e, s) {
    const l = n.slice();
    return l[9] = e[s], l
}

function fe(n, e, s) {
    const l = n.slice();
    return l[12] = e[s], l[14] = s, l
}

function me(n) {
    let e, s, l, a = n[0].homepage.heroCta.title + "",
        f, t, r, h = n[0].homepage.heroCta.subtitle + "",
        b, k, u, m = n[0].homepage.heroCta.buttonTitle + "",
        _;
    return {
        c() {
            e = d("div"), s = d("div"), l = d("h2"), f = I(a), t = y(), r = d("p"), b = I(h), k = y(), u = d("a"), _ = I(m), this.h()
        },
        l(v) {
            e = p(v, "DIV", {
                class: !0
            });
            var w = g(e);
            s = p(w, "DIV", {
                class: !0
            });
            var D = g(s);
            l = p(D, "H2", {
                class: !0
            });
            var C = g(l);
            f = A(C, a), C.forEach(c), t = M(D), r = p(D, "P", {
                class: !0
            });
            var E = g(r);
            b = A(E, h), E.forEach(c), k = M(D), u = p(D, "A", {
                class: !0,
                href: !0
            });
            var H = g(u);
            _ = A(H, m), H.forEach(c), D.forEach(c), w.forEach(c), this.h()
        },
        h() {
            i(l, "class", "text-3xl font-bold mb-5"), i(r, "class", "mb-5"), i(u, "class", "btn btn-accent bg-primary hover:bg-accent hover:border-accent border-primary text-white"), i(u, "href", n[3]), i(s, "class", "container mx-auto pt-8 pb-10 text-center px-10 "), i(e, "class", "bg-pagebg text-white")
        },
        m(v, w) {
            P(v, e, w), o(e, s), o(s, l), o(l, f), o(s, t), o(s, r), o(r, b), o(s, k), o(s, u), o(u, _)
        },
        p(v, w) {
            w & 1 && a !== (a = v[0].homepage.heroCta.title + "") && z(f, a), w & 1 && h !== (h = v[0].homepage.heroCta.subtitle + "") && z(b, h), w & 1 && m !== (m = v[0].homepage.heroCta.buttonTitle + "") && z(_, m)
        },
        d(v) {
            v && c(e)
        }
    }
}

function Te(n) {
    let e, s, l, a, f, t, r = n[4],
        h = [];
    for (let b = 0; b < r.length; b += 1) h[b] = de(fe(n, r, b));
    return {
        c() {
            e = d("div"), s = d("div"), l = d("h2"), a = I("Testimonials"), f = y(), t = d("div");
            for (let b = 0; b < h.length; b += 1) h[b].c();
            this.h()
        },
        l(b) {
            e = p(b, "DIV", {});
            var k = g(e);
            s = p(k, "DIV", {
                class: !0
            });
            var u = g(s);
            l = p(u, "H2", {
                class: !0
            });
            var m = g(l);
            a = A(m, "Testimonials"), m.forEach(c), f = M(u), t = p(u, "DIV", {
                class: !0
            });
            var _ = g(t);
            for (let v = 0; v < h.length; v += 1) h[v].l(_);
            _.forEach(c), u.forEach(c), k.forEach(c), this.h()
        },
        h() {
            i(l, "class", "text-3xl font-bold mb-5"), i(t, "class", "carousel w-full"), i(s, "class", "container mx-auto pt-8 pb-10 text-center px-10 ")
        },
        m(b, k) {
            P(b, e, k), o(e, s), o(s, l), o(l, a), o(s, f), o(s, t);
            for (let u = 0; u < h.length; u += 1) h[u] && h[u].m(t, null)
        },
        p(b, k) {
            if (k & 50) {
                r = b[4];
                let u;
                for (u = 0; u < r.length; u += 1) {
                    const m = fe(b, r, u);
                    h[u] ? h[u].p(m, k) : (h[u] = de(m), h[u].c(), h[u].m(t, null))
                }
                for (; u < h.length; u += 1) h[u].d(1);
                h.length = r.length
            }
        },
        d(b) {
            b && c(e), ve(h, b)
        }
    }
}

function Ie(n) {
    let e, s, l = n[12].content + "",
        a, f, t, r, h, b = n[12].truncatedContent + "",
        k, u, m, _, v, w, D, C, E, H, S, O;
    return {
        c() {
            e = d("p"), s = I('"'), a = I(l), f = I('"'), t = y(), r = d("p"), h = I('"'), k = I(b), u = I('"'), m = d("br"), _ = y(), v = d("span"), w = d("span"), D = I("EXPAND"), C = y(), E = ce("svg"), H = ce("path"), this.h()
        },
        l(B) {
            e = p(B, "P", {
                class: !0
            });
            var G = g(e);
            s = A(G, '"'), a = A(G, l), f = A(G, '"'), G.forEach(c), t = M(B), r = p(B, "P", {
                class: !0
            });
            var q = g(r);
            h = A(q, '"'), k = A(q, b), u = A(q, '"'), m = p(q, "BR", {}), _ = M(q), v = p(q, "SPAN", {
                class: !0
            });
            var R = g(v);
            w = p(R, "SPAN", {
                class: !0
            });
            var F = g(w);
            D = A(F, "EXPAND"), F.forEach(c), C = M(R), E = he(R, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var K = g(E);
            H = he(K, "path", {
                fill: !0,
                d: !0
            }), g(H).forEach(c), K.forEach(c), R.forEach(c), q.forEach(c), this.h()
        },
        h() {
            i(e, "class", "mb-5 hidden sm:block"), i(w, "class", "inline-block underline"), i(H, "fill", "currentColor"), i(H, "d", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"), i(E, "class", "mb-1 w-3 h-3 inline-block"), i(E, "xmlns", "http://www.w3.org/2000/svg"), i(E, "viewBox", "0 0 448 512"), i(v, "class", "inline-block mt-3 text-sm"), i(r, "class", "mb-5 block sm:hidden")
        },
        m(B, G) {
            P(B, e, G), o(e, s), o(e, a), o(e, f), P(B, t, G), P(B, r, G), o(r, h), o(r, k), o(r, u), o(r, m), o(r, _), o(r, v), o(v, w), o(w, D), o(v, C), o(v, E), o(E, H), S || (O = [le(v, "click", n[5]), le(v, "keypress", n[5]), le(v, "mousedown", n[5])], S = !0)
        },
        p: U,
        d(B) {
            B && c(e), B && c(t), B && c(r), S = !1, we(O)
        }
    }
}

function Ae(n) {
    let e, s, l = n[12].content + "",
        a, f;
    return {
        c() {
            e = d("p"), s = I('"'), a = I(l), f = I('"'), this.h()
        },
        l(t) {
            e = p(t, "P", {
                class: !0
            });
            var r = g(e);
            s = A(r, '"'), a = A(r, l), f = A(r, '"'), r.forEach(c), this.h()
        },
        h() {
            i(e, "class", "mb-5")
        },
        m(t, r) {
            P(t, e, r), o(e, s), o(e, a), o(e, f)
        },
        p: U,
        d(t) {
            t && c(e)
        }
    }
}

function Ce(n) {
    let e, s, l, a, f;
    return {
        c() {
            e = d("a"), s = I("❮"), l = y(), a = d("a"), f = I("❯"), this.h()
        },
        l(t) {
            e = p(t, "A", {
                href: !0,
                class: !0
            });
            var r = g(e);
            s = A(r, "❮"), r.forEach(c), l = M(t), a = p(t, "A", {
                href: !0,
                class: !0
            });
            var h = g(a);
            f = A(h, "❯"), h.forEach(c), this.h()
        },
        h() {
            i(e, "href", "#slide" + (n[14] - 1)), i(e, "class", "btn btn-circle"), i(a, "href", "#slide" + (n[14] + 1)), i(a, "class", "btn btn-circle")
        },
        m(t, r) {
            P(t, e, r), o(e, s), P(t, l, r), P(t, a, r), o(a, f)
        },
        p: U,
        d(t) {
            t && c(e), t && c(l), t && c(a)
        }
    }
}

function Ve(n) {
    let e, s, l, a, f;
    return {
        c() {
            e = d("a"), s = I("❮"), l = y(), a = d("a"), f = I("❯"), this.h()
        },
        l(t) {
            e = p(t, "A", {
                href: !0,
                class: !0
            });
            var r = g(e);
            s = A(r, "❮"), r.forEach(c), l = M(t), a = p(t, "A", {
                href: !0,
                class: !0
            });
            var h = g(a);
            f = A(h, "❯"), h.forEach(c), this.h()
        },
        h() {
            i(e, "href", "#slide" + (n[14] - 1)), i(e, "class", "btn btn-circle"), i(a, "href", "#slide1"), i(a, "class", "btn btn-circle")
        },
        m(t, r) {
            P(t, e, r), o(e, s), P(t, l, r), P(t, a, r), o(a, f)
        },
        p: U,
        d(t) {
            t && c(e), t && c(l), t && c(a)
        }
    }
}

function ye(n) {
    let e, s, l, a, f;
    return {
        c() {
            e = d("a"), s = I("❮"), l = y(), a = d("a"), f = I("❯"), this.h()
        },
        l(t) {
            e = p(t, "A", {
                href: !0,
                class: !0
            });
            var r = g(e);
            s = A(r, "❮"), r.forEach(c), l = M(t), a = p(t, "A", {
                href: !0,
                class: !0
            });
            var h = g(a);
            f = A(h, "❯"), h.forEach(c), this.h()
        },
        h() {
            i(e, "href", "#slide" + (n[4].length - 1)), i(e, "class", "btn btn-circle"), i(a, "href", "#slide" + (n[14] + 1)), i(a, "class", "btn btn-circle")
        },
        m(t, r) {
            P(t, e, r), o(e, s), P(t, l, r), P(t, a, r), o(a, f)
        },
        p: U,
        d(t) {
            t && c(e), t && c(l), t && c(a)
        }
    }
}

function de(n) {
    let e, s, l, a, f;

    function t(m, _) {
        return m[1] ? Ae : Ie
    }
    let r = t(n),
        h = r(n);

    function b(m, _) {
        return m[14] === 0 ? ye : m[14] === m[4].length - 1 ? Ve : Ce
    }
    let u = b(n)(n);
    return {
        c() {
            e = d("div"), s = d("div"), h.c(), l = y(), a = d("div"), u.c(), f = y(), this.h()
        },
        l(m) {
            e = p(m, "DIV", {
                id: !0,
                class: !0
            });
            var _ = g(e);
            s = p(_, "DIV", {
                class: !0
            });
            var v = g(s);
            h.l(v), v.forEach(c), l = M(_), a = p(_, "DIV", {
                class: !0
            });
            var w = g(a);
            u.l(w), w.forEach(c), f = M(_), _.forEach(c), this.h()
        },
        h() {
            i(s, "class", "flex flex-col sm:block mx-auto text-center px-20"), i(a, "class", "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"), i(e, "id", "slide" + n[14]), i(e, "class", "carousel-item relative w-full")
        },
        m(m, _) {
            P(m, e, _), o(e, s), h.m(s, null), o(e, l), o(e, a), u.m(a, null), o(e, f)
        },
        p(m, _) {
            r === (r = t(m)) && h ? h.p(m, _) : (h.d(1), h = r(m), h && (h.c(), h.m(s, null))), u.p(m, _)
        },
        d(m) {
            m && c(e), h.d(), u.d()
        }
    }
}

function pe(n) {
    let e, s = n[0].homepage.bottomCtas,
        l = [];
    for (let a = 0; a < s.length; a += 1) l[a] = _e(ue(n, s, a));
    return {
        c() {
            e = d("div");
            for (let a = 0; a < l.length; a += 1) l[a].c();
            this.h()
        },
        l(a) {
            e = p(a, "DIV", {
                class: !0
            });
            var f = g(e);
            for (let t = 0; t < l.length; t += 1) l[t].l(f);
            f.forEach(c), this.h()
        },
        h() {
            i(e, "class", "grid sm:grid-cols-1 md:grid-cols-2 gap-4 bg-pagebg text-white")
        },
        m(a, f) {
            P(a, e, f);
            for (let t = 0; t < l.length; t += 1) l[t] && l[t].m(e, null)
        },
        p(a, f) {
            if (f & 1) {
                s = a[0].homepage.bottomCtas;
                let t;
                for (t = 0; t < s.length; t += 1) {
                    const r = ue(a, s, t);
                    l[t] ? l[t].p(r, f) : (l[t] = _e(r), l[t].c(), l[t].m(e, null))
                }
                for (; t < l.length; t += 1) l[t].d(1);
                l.length = s.length
            }
        },
        d(a) {
            a && c(e), ve(l, a)
        }
    }
}

function _e(n) {
    let e, s, l, a = n[9].title + "",
        f, t, r, h = n[9].subtitle + "",
        b, k, u, m = n[9].buttonTitle + "",
        _, v, w;
    return {
        c() {
            e = d("div"), s = d("div"), l = d("h2"), f = I(a), t = y(), r = d("p"), b = I(h), k = y(), u = d("a"), _ = I(m), w = y(), this.h()
        },
        l(D) {
            e = p(D, "DIV", {});
            var C = g(e);
            s = p(C, "DIV", {
                class: !0
            });
            var E = g(s);
            l = p(E, "H2", {
                class: !0
            });
            var H = g(l);
            f = A(H, a), H.forEach(c), t = M(E), r = p(E, "P", {
                class: !0
            });
            var S = g(r);
            b = A(S, h), S.forEach(c), k = M(E), u = p(E, "A", {
                class: !0,
                href: !0
            });
            var O = g(u);
            _ = A(O, m), O.forEach(c), E.forEach(c), w = M(C), C.forEach(c), this.h()
        },
        h() {
            i(l, "class", "text-3xl font-bold mb-5"), i(r, "class", "mb-5"), i(u, "class", "btn btn-accent bg-accent border-accent text-white"), i(u, "href", v = x(n[9].link, n[0].pages, n[0].guides)), i(s, "class", "container mx-auto pt-8 pb-10 text-center px-10")
        },
        m(D, C) {
            P(D, e, C), o(e, s), o(s, l), o(l, f), o(s, t), o(s, r), o(r, b), o(s, k), o(s, u), o(u, _), o(e, w)
        },
        p(D, C) {
            C & 1 && a !== (a = D[9].title + "") && z(f, a), C & 1 && h !== (h = D[9].subtitle + "") && z(b, h), C & 1 && m !== (m = D[9].buttonTitle + "") && z(_, m), C & 1 && v !== (v = x(D[9].link, D[0].pages, D[0].guides)) && i(u, "href", v)
        },
        d(D) {
            D && c(e)
        }
    }
}

function Me(n) {
    let e, s, l, a, f, t, r, h, b, k, u, m, _, v, w, D, C, E, H, S, O, B, G, q, R = n[0].homepage.hero.subtitle + "",
        F, K, J, W = n[0].homepage.hero.linkTitle + "",
        Y, ee, Z, te;
    document.title = e = n[6].title;
    let L = n[0].homepage.heroCta.title && n[0].homepage.heroCta.subtitle && n[0].homepage.heroCta.buttonTitle && me(n),
        X = n[4] && n[4].length > 0 && Te(n),
        N = n[0].homepage.bottomCtas && pe(n);
    return {
        c() {
            s = d("meta"), l = d("meta"), a = d("meta"), f = d("meta"), t = d("meta"), r = d("meta"), h = d("meta"), b = d("meta"), k = d("meta"), u = d("meta"), m = y(), _ = d("div"), v = d("div"), w = d("div"), D = y(), C = d("div"), E = d("div"), H = d("h1"), S = d("img"), G = y(), q = d("p"), F = I(R), K = y(), J = d("a"), Y = I(W), ee = y(), L && L.c(), Z = y(), X && X.c(), te = y(), N && N.c(), this.h()
        },
        l(T) {
            const V = ke("svelte-53ovkt", document.head);
            s = p(V, "META", {
                name: !0,
                content: !0
            }), l = p(V, "META", {
                property: !0,
                content: !0
            }), a = p(V, "META", {
                property: !0,
                content: !0
            }), f = p(V, "META", {
                property: !0,
                content: !0
            }), t = p(V, "META", {
                property: !0,
                content: !0
            }), r = p(V, "META", {
                property: !0,
                content: !0
            }), h = p(V, "META", {
                name: !0,
                content: !0
            }), b = p(V, "META", {
                name: !0,
                content: !0
            }), k = p(V, "META", {
                name: !0,
                content: !0
            }), u = p(V, "META", {
                name: !0,
                content: !0
            }), V.forEach(c), m = M(T), _ = p(T, "DIV", {
                class: !0
            });
            var j = g(_);
            v = p(j, "DIV", {
                class: !0,
                style: !0
            });
            var $ = g(v);
            w = p($, "DIV", {
                class: !0
            }), g(w).forEach(c), D = M($), C = p($, "DIV", {
                class: !0
            });
            var ae = g(C);
            E = p(ae, "DIV", {
                class: !0
            });
            var Q = g(E);
            H = p(Q, "H1", {
                class: !0
            });
            var se = g(H);
            S = p(se, "IMG", {
                src: !0,
                alt: !0,
                width: !0
            }), se.forEach(c), G = M(Q), q = p(Q, "P", {
                class: !0
            });
            var re = g(q);
            F = A(re, R), re.forEach(c), K = M(Q), J = p(Q, "A", {
                class: !0,
                href: !0
            });
            var oe = g(J);
            Y = A(oe, W), oe.forEach(c), Q.forEach(c), ae.forEach(c), $.forEach(c), ee = M(j), L && L.l(j), Z = M(j), X && X.l(j), te = M(j), N && N.l(j), j.forEach(c), this.h()
        },
        h() {
            i(s, "name", "description"), i(s, "content", n[6].description), i(l, "property", "og:title"), i(l, "content", n[6].metaTitle), i(a, "property", "og:description"), i(a, "content", n[6].metaDescription), i(f, "property", "og:url"), i(f, "content", n[6].url), i(t, "property", "og:image"), i(t, "content", n[6].shareImage), i(r, "property", "og:type"), i(r, "content", "website"), i(h, "name", "twitter:title"), i(h, "content", n[6].metaTitle), i(b, "name", "twitter:description"), i(b, "content", n[6].metaDescription), i(k, "name", "twitter:url"), i(k, "content", n[6].url), i(u, "name", "twitter:image"), i(u, "content", n[6].shareImage), i(w, "class", "hero-overlay bg-opacity-20 bg-black"), ie(S.src, O = n[0].logoImageHero) || i(S, "src", O), i(S, "alt", B = n[0].homepage.hero.title), i(S, "width", "500"), i(H, "class", "mb-5 text-5xl font-bold"), i(q, "class", "mb-5"), i(J, "class", "btn btn-accent bg-accent border-accent text-white shadow-md shadow-base-100"), i(J, "href", n[2]), i(E, "class", "max-w-md"), i(C, "class", "hero-content text-center text-neutral-content"), i(v, "class", "hero min-h-[500px] bg-cover"), ne(v, "background-image", "url(" + n[0].heroImage + ")"), i(_, "class", "mt-15")
        },
        m(T, V) {
            o(document.head, s), o(document.head, l), o(document.head, a), o(document.head, f), o(document.head, t), o(document.head, r), o(document.head, h), o(document.head, b), o(document.head, k), o(document.head, u), P(T, m, V), P(T, _, V), o(_, v), o(v, w), o(v, D), o(v, C), o(C, E), o(E, H), o(H, S), o(E, G), o(E, q), o(q, F), o(E, K), o(E, J), o(J, Y), o(_, ee), L && L.m(_, null), o(_, Z), X && X.m(_, null), o(_, te), N && N.m(_, null)
        },
        p(T, [V]) {
            V & 64 && e !== (e = T[6].title) && (document.title = e), V & 1 && !ie(S.src, O = T[0].logoImageHero) && i(S, "src", O), V & 1 && B !== (B = T[0].homepage.hero.title) && i(S, "alt", B), V & 1 && R !== (R = T[0].homepage.hero.subtitle + "") && z(F, R), V & 1 && W !== (W = T[0].homepage.hero.linkTitle + "") && z(Y, W), V & 1 && ne(v, "background-image", "url(" + T[0].heroImage + ")"), T[0].homepage.heroCta.title && T[0].homepage.heroCta.subtitle && T[0].homepage.heroCta.buttonTitle ? L ? L.p(T, V) : (L = me(T), L.c(), L.m(_, Z)) : L && (L.d(1), L = null), T[4] && T[4].length > 0 && X.p(T, V), T[0].homepage.bottomCtas ? N ? N.p(T, V) : (N = pe(T), N.c(), N.m(_, null)) : N && (N.d(1), N = null)
        },
        i: U,
        o: U,
        d(T) {
            c(s), c(l), c(a), c(f), c(t), c(r), c(h), c(b), c(k), c(u), T && c(m), T && c(_), L && L.d(), X && X.d(), N && N.d()
        }
    }
}

function Pe(n, e, s) {
    let {
        data: l
    } = e, a = x(l.homepage.hero.link, l.pages, l.guides), f = x(l.homepage.heroCta.link, l.pages, l.guides), t = l.testimonials, r = De(l.homepage.testimonials, t);
    r.sort((m, _) => _.content.length - m.content.length), r.forEach(m => {
        m.posted = new Date(m.posted).toLocaleDateString(), m.truncatedContent = m.content.substring(0, 200) + "..."
    });
    let h = !1;

    function b() {
        s(1, h = !0)
    }
    let u = {
        title: `${l.siteSettings.title}`,
        description: l.siteSettings.metaDescription,
        metaTitle: l.siteSettings.metaTitle,
        metaDescription: l.siteSettings.metaDescription,
        url: `${l.baseUrl}`,
        shareImage: l.siteSettings.shareImage
    };
    return n.$$set = m => {
        "data" in m && s(0, l = m.data)
    }, [l, h, a, f, r, b, u]
}
class Be extends be {
    constructor(e) {
        super(), ge(this, e, Pe, Me, Ee, {
            data: 0
        })
    }
}
export {
    Be as component
};