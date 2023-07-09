import {
    S as G,
    i as H,
    s as J,
    V as K,
    G as j,
    H as I,
    C as g,
    M as q,
    g as k,
    E as v,
    z as N,
    X as Q,
    Y as V,
    Z as X,
    p as Y,
    t as Z,
    q as p,
    Q as w,
    r as F,
    v as L,
    f as C,
    ao as O,
    w as S,
    aq as E,
    I as A,
    J as P,
    K as B
} from "./index-7d8f96c2.js";

function M(n, e, l) {
    const s = n.slice();
    return s[14] = e[l], s[16] = l, s
}

function R(n) {
    let e, l = n[14].name + "",
        s, f, d, _;

    function a() {
        return n[12](n[14], n[16])
    }
    return {
        c() {
            e = j("button"), s = A(l), f = I(), g(e, "class", "svelte-1g805jl")
        },
        m(u, m) {
            k(u, e, m), v(e, s), v(e, f), d || (_ = P(e, "click", a), d = !0)
        },
        p(u, m) {
            n = u, m & 8 && l !== (l = n[14].name + "") && B(s, l)
        },
        d(u) {
            u && p(e), d = !1, _()
        }
    }
}

function U(n) {
    let e, l = n[14].name + "",
        s, f;
    return {
        c() {
            e = j("button"), s = A(l), f = I(), g(e, "class", "selected svelte-1g805jl")
        },
        m(d, _) {
            k(d, e, _), v(e, s), v(e, f)
        },
        p(d, _) {
            _ & 8 && l !== (l = d[14].name + "") && B(s, l)
        },
        d(d) {
            d && p(e)
        }
    }
}

function z(n, e) {
    let l, s;

    function f(a, u) {
        return a[14].id === a[4] ? U : R
    }
    let d = f(e),
        _ = d(e);
    return {
        key: n,
        first: null,
        c() {
            l = C(), _.c(), s = C(), this.first = l
        },
        m(a, u) {
            k(a, l, u), _.m(a, u), k(a, s, u)
        },
        p(a, u) {
            e = a, d === (d = f(e)) && _ ? _.p(e, u) : (_.d(1), _ = d(e), _ && (_.c(), _.m(s.parentNode, s)))
        },
        d(a) {
            a && p(l), _.d(a), a && p(s)
        }
    }
}

function W(n) {
    let e, l, s = [],
        f = new Map,
        d, _, a, u = n[3];
    const m = t => t[14].id;
    for (let t = 0; t < u.length; t += 1) {
        let o = M(n, u, t),
            r = m(o);
        f.set(r, s[t] = z(r, o))
    }
    const b = n[11].default,
        c = K(b, n, n[10], null);
    return {
        c() {
            e = j("div"), l = j("div");
            for (let t = 0; t < s.length; t += 1) s[t].c();
            d = I(), c && c.c(), g(l, "class", "tab-nav scroll-hide svelte-1g805jl"), g(e, "class", _ = "tabs " + n[2].join(" ") + " svelte-1g805jl"), g(e, "id", n[1]), q(e, "hide", !n[0])
        },
        m(t, o) {
            k(t, e, o), v(e, l);
            for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(l, null);
            v(e, d), c && c.m(e, null), a = !0
        },
        p(t, [o]) {
            o & 408 && (u = t[3], s = N(s, o, m, 1, t, u, f, l, O, z, null, M)), c && c.p && (!a || o & 1024) && Q(c, b, t, t[10], a ? X(b, t[10], o, null) : V(t[10]), null), (!a || o & 4 && _ !== (_ = "tabs " + t[2].join(" ") + " svelte-1g805jl")) && g(e, "class", _), (!a || o & 2) && g(e, "id", t[1]), (!a || o & 5) && q(e, "hide", !t[0])
        },
        i(t) {
            a || (Y(c, t), a = !0)
        },
        o(t) {
            Z(c, t), a = !1
        },
        d(t) {
            t && p(e);
            for (let o = 0; o < s.length; o += 1) s[o].d();
            c && c.d(t)
        }
    }
}
const x = {};

function $(n, e, l) {
    let s, f, {
            $$slots: d = {},
            $$scope: _
        } = e,
        {
            visible: a = !0
        } = e,
        {
            elem_id: u = "id"
        } = e,
        {
            elem_classes: m = []
        } = e,
        {
            selected: b
        } = e,
        c = [];
    const t = S(!1);
    w(n, t, i => l(4, f = i));
    const o = S(0);
    w(n, o, i => l(13, s = i));
    const r = F();
    L(x, {
        register_tab: i => (c.push({
            name: i.name,
            id: i.id
        }), t.update(h => h ? ? i.id), l(3, c), c.length - 1),
        unregister_tab: i => {
            const h = c.findIndex(y => y.id === i.id);
            c.splice(h, 1), t.update(y => y === i.id ? c[h] ? .id || c[c.length - 1] ? .id : y)
        },
        selected_tab: t,
        selected_tab_index: o
    });

    function T(i) {
        l(9, b = i), E(t, f = i, f), E(o, s = c.findIndex(h => h.id === i), s), r("change")
    }
    const D = (i, h) => {
        T(i.id), r("select", {
            value: i.name,
            index: h
        })
    };
    return n.$$set = i => {
        "visible" in i && l(0, a = i.visible), "elem_id" in i && l(1, u = i.elem_id), "elem_classes" in i && l(2, m = i.elem_classes), "selected" in i && l(9, b = i.selected), "$$scope" in i && l(10, _ = i.$$scope)
    }, n.$$.update = () => {
        n.$$.dirty & 512 && b !== null && T(b)
    }, [a, u, m, c, f, t, o, r, T, b, _, d, D]
}
class te extends G {
    constructor(e) {
        super(), H(this, e, $, W, J, {
            visible: 0,
            elem_id: 1,
            elem_classes: 2,
            selected: 9
        })
    }
}
export {
    te as T, x as a
};
//# sourceMappingURL=TabItem.svelte_svelte_type_style_lang-76a7a732.js.map