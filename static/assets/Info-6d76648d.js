import {
    S as i,
    i as r,
    s as u,
    V as f,
    G as _,
    C as c,
    g as p,
    X as m,
    Y as d,
    Z as $,
    p as g,
    t as v,
    q as h
} from "./index-7d8f96c2.js";
import "./Button-07db0870.js";

function q(n) {
    let s, a;
    const l = n[1].default,
        e = f(l, n, n[0], null);
    return {
        c() {
            s = _("div"), e && e.c(), c(s, "class", "svelte-e8n7p6")
        },
        m(t, o) {
            p(t, s, o), e && e.m(s, null), a = !0
        },
        p(t, [o]) {
            e && e.p && (!a || o & 1) && m(e, l, t, t[0], a ? $(l, t[0], o, null) : d(t[0]), null)
        },
        i(t) {
            a || (g(e, t), a = !0)
        },
        o(t) {
            v(e, t), a = !1
        },
        d(t) {
            t && h(s), e && e.d(t)
        }
    }
}

function C(n, s, a) {
    let {
        $$slots: l = {},
        $$scope: e
    } = s;
    return n.$$set = t => {
        "$$scope" in t && a(0, e = t.$$scope)
    }, [e, l]
}
class b extends i {
    constructor(s) {
        super(), r(this, s, C, q, u, {})
    }
}
export {
    b as I
};
//# sourceMappingURL=Info-6d76648d.js.map