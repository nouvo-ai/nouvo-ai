import {
    S as b,
    i as h,
    s as g,
    G as m,
    e as d,
    H as w,
    I,
    C as c,
    M as r,
    g as y,
    E as _,
    m as k,
    K as j,
    p as q,
    t as B,
    q as C,
    n as S
} from "./index-7d8f96c2.js";
import {
    g as E
} from "./Button-07db0870.js";

function G(a) {
    let e, n, s, u, f, l;
    return s = new a[1]({}), {
        c() {
            e = m("div"), n = m("span"), d(s.$$.fragment), u = w(), f = I(a[0]), c(n, "class", "svelte-1sohkj6"), c(e, "style", a[4]), c(e, "class", "svelte-1sohkj6"), r(e, "hide", !a[2]), r(e, "sr-only", !a[2]), r(e, "float", a[3])
        },
        m(t, o) {
            y(t, e, o), _(e, n), k(s, n, null), _(e, u), _(e, f), l = !0
        },
        p(t, [o]) {
            (!l || o & 1) && j(f, t[0]), (!l || o & 16) && c(e, "style", t[4]), (!l || o & 4) && r(e, "hide", !t[2]), (!l || o & 4) && r(e, "sr-only", !t[2]), (!l || o & 8) && r(e, "float", t[3])
        },
        i(t) {
            l || (q(s.$$.fragment, t), l = !0)
        },
        o(t) {
            B(s.$$.fragment, t), l = !1
        },
        d(t) {
            t && C(e), S(s)
        }
    }
}

function H(a, e, n) {
    let s, {
            label: u = null
        } = e,
        {
            Icon: f
        } = e,
        {
            show_label: l = !0
        } = e,
        {
            disable: t = !1
        } = e,
        {
            float: o = !0
        } = e;
    return a.$$set = i => {
        "label" in i && n(0, u = i.label), "Icon" in i && n(1, f = i.Icon), "show_label" in i && n(2, l = i.show_label), "disable" in i && n(5, t = i.disable), "float" in i && n(3, o = i.float)
    }, a.$$.update = () => {
        a.$$.dirty & 32 && n(4, {
            styles: s
        } = E({
            label_container: !t
        }, ["label_container"]), s)
    }, [u, f, l, o, s, t]
}
class M extends b {
    constructor(e) {
        super(), h(this, e, H, G, g, {
            label: 0,
            Icon: 1,
            show_label: 2,
            disable: 5,
            float: 3
        })
    }
}
export {
    M as B
};
//# sourceMappingURL=BlockLabel-6f11c8ce.js.map