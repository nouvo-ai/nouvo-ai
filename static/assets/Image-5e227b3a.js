import {
    S as r,
    i as u,
    s as d,
    G as y,
    L as f,
    C as c,
    M as n,
    g as o,
    F as g,
    q as v
} from "./index-7d8f96c2.js";

function b(t) {
    let e, s;
    return {
        c() {
            e = y("img"), f(e.src, s = t[1] + t[0]) || c(e, "src", s), c(e, "class", "svelte-gqt00k"), n(e, "table", t[2] === "table"), n(e, "gallery", t[2] === "gallery"), n(e, "selected", t[3])
        },
        m(l, a) {
            o(l, e, a)
        },
        p(l, [a]) {
            a & 3 && !f(e.src, s = l[1] + l[0]) && c(e, "src", s), a & 4 && n(e, "table", l[2] === "table"), a & 4 && n(e, "gallery", l[2] === "gallery"), a & 8 && n(e, "selected", l[3])
        },
        i: g,
        o: g,
        d(l) {
            l && v(e)
        }
    }
}

function q(t, e, s) {
    let {
        value: l
    } = e, {
        samples_dir: a
    } = e, {
        type: m
    } = e, {
        selected: _ = !1
    } = e;
    return t.$$set = i => {
        "value" in i && s(0, l = i.value), "samples_dir" in i && s(1, a = i.samples_dir), "type" in i && s(2, m = i.type), "selected" in i && s(3, _ = i.selected)
    }, [l, a, m, _]
}
class I extends r {
    constructor(e) {
        super(), u(this, e, q, b, d, {
            value: 0,
            samples_dir: 1,
            type: 2,
            selected: 3
        })
    }
}
const C = I;
export {
    C as E
};
//# sourceMappingURL=Image-5e227b3a.js.map