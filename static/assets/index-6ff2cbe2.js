import {
    S as g,
    i as v,
    s as d,
    V as q,
    G as r,
    C as o,
    af as h,
    M as f,
    g as b,
    X as w,
    Y as C,
    Z as R,
    p as j,
    t as S,
    q as G
} from "./index-7d8f96c2.js";

function M(i) {
    let e, _, s;
    const u = i[6].default,
        t = q(u, i, i[5], null);
    return {
        c() {
            e = r("div"), t && t.c(), o(e, "id", i[1]), o(e, "class", _ = h(i[2].join(" ")) + " svelte-15lo0d8"), f(e, "compact", i[4] === "compact"), f(e, "panel", i[4] === "panel"), f(e, "unequal-height", i[0].equal_height === !1), f(e, "stretch", i[0].equal_height), f(e, "hide", !i[3])
        },
        m(l, a) {
            b(l, e, a), t && t.m(e, null), s = !0
        },
        p(l, [a]) {
            t && t.p && (!s || a & 32) && w(t, u, l, l[5], s ? R(u, l[5], a, null) : C(l[5]), null), (!s || a & 2) && o(e, "id", l[1]), (!s || a & 4 && _ !== (_ = h(l[2].join(" ")) + " svelte-15lo0d8")) && o(e, "class", _), (!s || a & 20) && f(e, "compact", l[4] === "compact"), (!s || a & 20) && f(e, "panel", l[4] === "panel"), (!s || a & 5) && f(e, "unequal-height", l[0].equal_height === !1), (!s || a & 5) && f(e, "stretch", l[0].equal_height), (!s || a & 12) && f(e, "hide", !l[3])
        },
        i(l) {
            s || (j(t, l), s = !0)
        },
        o(l) {
            S(t, l), s = !1
        },
        d(l) {
            l && G(e), t && t.d(l)
        }
    }
}

function V(i, e, _) {
    let {
        $$slots: s = {},
        $$scope: u
    } = e, {
        style: t = {}
    } = e, {
        elem_id: l
    } = e, {
        elem_classes: a = []
    } = e, {
        visible: m = !0
    } = e, {
        variant: c = "default"
    } = e;
    return i.$$set = n => {
        "style" in n && _(0, t = n.style), "elem_id" in n && _(1, l = n.elem_id), "elem_classes" in n && _(2, a = n.elem_classes), "visible" in n && _(3, m = n.visible), "variant" in n && _(4, c = n.variant), "$$scope" in n && _(5, u = n.$$scope)
    }, [t, l, a, m, c, u, s]
}
class X extends g {
    constructor(e) {
        super(), v(this, e, V, M, d, {
            style: 0,
            elem_id: 1,
            elem_classes: 2,
            visible: 3,
            variant: 4
        })
    }
}
const Z = X,
    k = ["static"];
export {
    Z as Component, k as modes
};
//# sourceMappingURL=index-6ff2cbe2.js.map