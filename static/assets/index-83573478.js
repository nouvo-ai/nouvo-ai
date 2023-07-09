import {
    S as k,
    i as L,
    s as j,
    G as w,
    C as o,
    M as c,
    g,
    F as T,
    q as d,
    r as C,
    e as h,
    m as v,
    p as b,
    t as H,
    n as M,
    x as S,
    $ as q,
    H as B,
    h as z,
    j as D,
    y as E
} from "./index-7d8f96c2.js";
import {
    B as F
} from "./Button-07db0870.js";

function G(t) {
    let e, n;
    return {
        c() {
            e = w("div"), o(e, "class", n = "prose " + t[1].join(" ") + " svelte-1ybaih5"), o(e, "id", t[0]), c(e, "min", t[4]), c(e, "hide", !t[3])
        },
        m(s, i) {
            g(s, e, i), e.innerHTML = t[2]
        },
        p(s, [i]) {
            i & 4 && (e.innerHTML = s[2]), i & 2 && n !== (n = "prose " + s[1].join(" ") + " svelte-1ybaih5") && o(e, "class", n), i & 1 && o(e, "id", s[0]), i & 18 && c(e, "min", s[4]), i & 10 && c(e, "hide", !s[3])
        },
        i: T,
        o: T,
        d(s) {
            s && d(e)
        }
    }
}

function A(t, e, n) {
    let {
        elem_id: s = ""
    } = e, {
        elem_classes: i = []
    } = e, {
        value: m
    } = e, {
        visible: u = !0
    } = e, {
        min_height: f = !1
    } = e;
    const l = C();
    return t.$$set = a => {
        "elem_id" in a && n(0, s = a.elem_id), "elem_classes" in a && n(1, i = a.elem_classes), "value" in a && n(2, m = a.value), "visible" in a && n(3, u = a.visible), "min_height" in a && n(4, f = a.min_height)
    }, t.$$.update = () => {
        t.$$.dirty & 4 && l("change")
    }, [s, i, m, u, f]
}
class I extends k {
    constructor(e) {
        super(), L(this, e, A, G, j, {
            elem_id: 0,
            elem_classes: 1,
            value: 2,
            visible: 3,
            min_height: 4
        })
    }
}

function J(t) {
    let e, n, s, i, m;
    const u = [t[4], {
        variant: "center"
    }];
    let f = {};
    for (let l = 0; l < u.length; l += 1) f = S(f, u[l]);
    return e = new q({
        props: f
    }), i = new I({
        props: {
            min_height: t[4] && t[4] ? .status !== "complete",
            value: t[3],
            elem_id: t[0],
            elem_classes: t[1],
            visible: t[2]
        }
    }), i.$on("change", t[6]), {
        c() {
            h(e.$$.fragment), n = B(), s = w("div"), h(i.$$.fragment), o(s, "class", "svelte-1ed2p3z"), c(s, "pending", t[4] ? .status === "pending")
        },
        m(l, a) {
            v(e, l, a), g(l, n, a), g(l, s, a), v(i, s, null), m = !0
        },
        p(l, a) {
            const r = a & 16 ? z(u, [D(l[4]), u[1]]) : {};
            e.$set(r);
            const _ = {};
            a & 16 && (_.min_height = l[4] && l[4] ? .status !== "complete"), a & 8 && (_.value = l[3]), a & 1 && (_.elem_id = l[0]), a & 2 && (_.elem_classes = l[1]), a & 4 && (_.visible = l[2]), i.$set(_), (!m || a & 16) && c(s, "pending", l[4] ? .status === "pending")
        },
        i(l) {
            m || (b(e.$$.fragment, l), b(i.$$.fragment, l), m = !0)
        },
        o(l) {
            H(e.$$.fragment, l), H(i.$$.fragment, l), m = !1
        },
        d(l) {
            M(e, l), l && d(n), l && d(s), M(i)
        }
    }
}

function K(t) {
    let e, n;
    return e = new F({
        props: {
            visible: t[2],
            elem_id: t[0],
            elem_classes: t[1],
            disable: !0,
            $$slots: {
                default: [J]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            h(e.$$.fragment)
        },
        m(s, i) {
            v(e, s, i), n = !0
        },
        p(s, [i]) {
            const m = {};
            i & 4 && (m.visible = s[2]), i & 1 && (m.elem_id = s[0]), i & 2 && (m.elem_classes = s[1]), i & 287 && (m.$$scope = {
                dirty: i,
                ctx: s
            }), e.$set(m)
        },
        i(s) {
            n || (b(e.$$.fragment, s), n = !0)
        },
        o(s) {
            H(e.$$.fragment, s), n = !1
        },
        d(s) {
            M(e, s)
        }
    }
}

function N(t, e, n) {
    let {
        label: s
    } = e, {
        elem_id: i = ""
    } = e, {
        elem_classes: m = []
    } = e, {
        visible: u = !0
    } = e, {
        value: f = ""
    } = e, {
        loading_status: l
    } = e;
    const a = C();

    function r(_) {
        E.call(this, t, _)
    }
    return t.$$set = _ => {
        "label" in _ && n(5, s = _.label), "elem_id" in _ && n(0, i = _.elem_id), "elem_classes" in _ && n(1, m = _.elem_classes), "visible" in _ && n(2, u = _.visible), "value" in _ && n(3, f = _.value), "loading_status" in _ && n(4, l = _.loading_status)
    }, t.$$.update = () => {
        t.$$.dirty & 32 && a("change")
    }, [i, m, u, f, l, s, r]
}
class O extends k {
    constructor(e) {
        super(), L(this, e, N, K, j, {
            label: 5,
            elem_id: 0,
            elem_classes: 1,
            visible: 2,
            value: 3,
            loading_status: 4
        })
    }
}
const R = O,
    U = ["static"],
    V = t => ({
        type: {
            payload: "string"
        },
        description: {
            payload: "HTML output"
        }
    });
export {
    R as Component, V as document, U as modes
};
//# sourceMappingURL=index-83573478.js.map