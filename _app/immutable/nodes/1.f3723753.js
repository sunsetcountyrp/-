import {
    S as v,
    i as b,
    s as g,
    k as l,
    q as x,
    l as p,
    m,
    r as E,
    h as c,
    n as d,
    b as S,
    F as h,
    u as $,
    G as f,
    H as q
} from "../chunks/index.81f9bd2f.js";
import {
    p as y
} from "../chunks/stores.4e389cb7.js";

function D(o) {
    let e, s, a, t = o[0].error.message + "",
        i;
    return {
        c() {
            e = l("div"), s = l("div"), a = l("span"), i = x(t), this.h()
        },
        l(r) {
            e = p(r, "DIV", {
                class: !0
            });
            var n = m(e);
            s = p(n, "DIV", {
                class: !0
            });
            var u = m(s);
            a = p(u, "SPAN", {
                class: !0
            });
            var _ = m(a);
            i = E(_, t), _.forEach(c), u.forEach(c), n.forEach(c), this.h()
        },
        h() {
            d(a, "class", "font-bold mb-5 text-white"), d(s, "class", "container mx-auto pt-8 pb-10 px-10"), d(e, "class", "bg-pagebg mt-[60px]")
        },
        m(r, n) {
            S(r, e, n), h(e, s), h(s, a), h(a, i)
        },
        p(r, [n]) {
            n & 1 && t !== (t = r[0].error.message + "") && $(i, t)
        },
        i: f,
        o: f,
        d(r) {
            r && c(e)
        }
    }
}

function I(o, e, s) {
    let a;
    return q(o, y, t => s(0, a = t)), [a]
}
class w extends v {
    constructor(e) {
        super(), b(this, e, I, D, g, {})
    }
}
export {
    w as component
};