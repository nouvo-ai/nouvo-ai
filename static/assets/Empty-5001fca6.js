import {
    S as _,
    i as r,
    s as m,
    V as g,
    G as d,
    C as f,
    M as u,
    g as c,
    E as p,
    X as b,
    Y as v,
    Z as z,
    p as E,
    t as h,
    q as j
} from "./index-7d8f96c2.js";
import "./Button-07db0870.js";

function q(n) {
    let s, i, t;
    const o = n[3].default,
        a = g(o, n, n[2], null);
    return {
        c() {
            s = d("div"), i = d("div"), a && a.c(), f(i, "class", "icon svelte-1u5vjgs"), f(s, "class", "empty svelte-1u5vjgs"), u(s, "small", n[0] === "small"), u(s, "large", n[0] === "large"), u(s, "unpadded_box", n[1])
        },
        m(e, l) {
            c(e, s, l), p(s, i), a && a.m(i, null), t = !0
        },
        p(e, [l]) {
            a && a.p && (!t || l & 4) && b(a, o, e, e[2], t ? z(o, e[2], l, null) : v(e[2]), null), (!t || l & 1) && u(s, "small", e[0] === "small"), (!t || l & 1) && u(s, "large", e[0] === "large"), (!t || l & 2) && u(s, "unpadded_box", e[1])
        },
        i(e) {
            t || (E(a, e), t = !0)
        },
        o(e) {
            h(a, e), t = !1
        },
        d(e) {
            e && j(s), a && a.d(e)
        }
    }
}

function C(n, s, i) {
    let {
        $$slots: t = {},
        $$scope: o
    } = s, {
        size: a = "small"
    } = s, {
        unpadded_box: e = !1
    } = s;
    return n.$$set = l => {
        "size" in l && i(0, a = l.size), "unpadded_box" in l && i(1, e = l.unpadded_box), "$$scope" in l && i(2, o = l.$$scope)
    }, [a, e, o, t]
}
class M extends _ {
    constructor(s) {
        super(), r(this, s, C, q, m, {
            size: 0,
            unpadded_box: 1
        })
    }
}
export {
    M as E
};
//# sourceMappingURL=Empty-5001fca6.js.map