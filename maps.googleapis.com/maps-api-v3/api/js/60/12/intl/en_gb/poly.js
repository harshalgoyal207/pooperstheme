google.maps.__gjsload__('poly', function(_) {
    var BP = function(a, b) {
            return b ? _.bu(b, a.map.get("projection")) : null
        },
        CP = function(a, b) {
            return b ? _.Nl(b, a.map.get("projection"), !1) : null
        },
        DP = function(a) {
            for (a = a.toString(16); a.length < 2;) a = "0" + a;
            return a
        },
        U_a = function(a, b, c, d) {
            let e = null,
                f = c * c;
            for (let w = 0, x = d.length; w < x; ++w) {
                a: {
                    let y, B;
                    var g = void 0;
                    var h = a;
                    var l = b,
                        n = c,
                        p = d[w];
                    const D = p.length;
                    if (!D || n <= 0) {
                        h = null;
                        break a
                    }
                    let G = 0,
                        F = n * n * 1.01;
                    const A = [0, 0];
                    let Y = p[G++] - h,
                        pa = p[G++] - l,
                        Da = (Y < -n ? 1 : 0) | (Y > n ? 2 : 0) | (pa < -n ? 4 : 0) | (pa > n ? 8 : 0);
                    var r = Y * Y + pa * pa;!Da && r <= F &&
                    (F = r, A[0] = Y, A[1] = pa);
                    for (; G < D;) {
                        B = Y;
                        y = pa;
                        g = Da;
                        Y = p[G++] - h;
                        pa = p[G++] - l;
                        Da = (Y < -n ? 1 : 0) | (Y > n ? 2 : 0) | (pa < -n ? 4 : 0) | (pa > n ? 8 : 0);
                        if (g & Da) continue;
                        r = Y * Y + pa * pa;
                        !Da && r <= F && (F = r, A[0] = Y, A[1] = pa);
                        g = Y - B;
                        const ya = pa - y;
                        var u = g * g + ya * ya;
                        if (u < 1E-12) continue;
                        const Qa = Y * g + pa * ya;
                        Qa < 0 || Qa > u || (r -= Qa * Qa / u, r <= F && (F = r, u = 1 - Qa / u, A[0] = B + g * u, A[1] = y + ya * u))
                    }
                    A[0] += h;A[1] += l;A[2] = F;h = F <= n * n ? A : null
                }
                h && h[2] <= f && (f = h[2], e = h)
            }
            return e
        },
        V_a = function(a, b, c) {
            let d = 0;
            for (let e = 0, f = c.length; e < f; ++e) d += _.jHa(a, b, c[e]);
            return !!(d & 1)
        },
        EP = function(a,
            b, c) {
            const d = a.path;
            a = a.Ym;
            const e = [],
                f = a ? [] : null,
                g = d[0] === d[d.length - 2] && d[1] === d[d.length - 1];
            for (let h = 0, l = d.length - 2; h < l; h += 2) {
                const n = d[h],
                    p = d[h + 1],
                    r = d[h + 2],
                    u = d[h + 3];
                let w = null,
                    x = null;
                a && (w = a[h / 2], x = a[h / 2 + 1]);
                let y, B;
                switch (b) {
                    case 0:
                        y = n >= c;
                        B = r >= c;
                        break;
                    case 1:
                        y = n <= c;
                        B = r <= c;
                        break;
                    case 2:
                        y = p >= c;
                        B = u >= c;
                        break;
                    case 3:
                        y = p <= c, B = u <= c
                }!h && y && (e.push(n, p), a && f.push(w));
                if (y !== B) {
                    let D = 0;
                    switch (b) {
                        case 0:
                        case 1:
                            D = (c - n) / (r - n);
                            e.push(c, p + D * (u - p));
                            break;
                        case 2:
                        case 3:
                            D = (c - p) / (u - p), e.push(n + D * (r - n), c)
                    }
                    a && f.push(w +
                        D * (x - w))
                }
                B && (e.push(r, u), a && f.push(x))
            }
            g && e.length && (e[0] !== e[e.length - 2] || e[1] !== e[e.length - 1]) && (e.push(e[0], e[1]), a && f.push(a[a.length - 1]));
            return {
                path: e,
                Ym: f
            }
        },
        W_a = function(a, b) {
            a = EP(a, 0, b.minX);
            a = EP(a, 1, b.maxX);
            a = EP(a, 2, b.minY);
            return EP(a, 3, b.maxY)
        },
        X_a = function(a) {
            const b = a.length;
            !b || a[0] === a[b - 2] && a[1] === a[b - 1] || (a.push(a[0]), a.push(a[1]))
        },
        Y_a = function(a, b) {
            for (let d = 0, e = a.length; d < e; d += 2) {
                var c = new _.Hj(a[d], a[d + 1], !0);
                c = _.bu(c, b);
                a[d] = c.Eg;
                a[d + 1] = c.Fg
            }
        },
        Z_a = function(a) {
            const b = new _.oJa(["mousemove",
                "mouseup", "mousewheel"
            ]);
            _.BF(b, ["panes", "pixelBounds"], a);
            return b
        },
        FP = function(a) {
            const b = Z_a(a);
            _.Vj(b, "mousemove", _.Qj);
            _.Vj(b, "mouseup", _.Qj);
            _.Vj(b, "mousewheel", (...c) => {
                const d = a.get("mouseEventTarget");
                d && _.hk(d, "mousewheel", ...c)
            });
            return b
        },
        a0a = function(a) {
            var b = ["px", "%"];
            if (!a || !_.Ri(b)) return null;
            if (a === "0") return {
                value: 0,
                unit: b[0]
            };
            for (let c = 0, d = b.length; c < d; ++c) {
                const e = b[c],
                    f = ($_a[e] = $_a[e] || new RegExp(`^(\\d+(?:\\.\\d+)?)${e}$`)).exec(a);
                if (f) return {
                    value: Number(f[1]),
                    unit: e
                }
            }
            return null
        },
        b0a = function(a, b, c) {
            const d = _.Nl(new _.gm(c.x, c.y), a);
            a = _.Nl(new _.gm(c.x + b, c.y + b), a);
            return Math.min(Math.abs(d.lat() - a.lat()), Math.abs(d.lng() - a.lng()))
        },
        GP = function(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z
        },
        HP = function(a, b, c) {
            c.x = a.y * b.z - a.z * b.y;
            c.y = a.z * b.x - a.x * b.z;
            c.z = a.x * b.y - a.y * b.x
        },
        IP = function(a, b) {
            const c = _.vi(a[0]);
            a = _.vi(a[1]);
            const d = Math.cos(c);
            b.x = Math.cos(a) * d;
            b.y = Math.sin(a) * d;
            b.z = Math.sin(c)
        },
        JP = function(a, b) {
            const c = Math.atan2(a.y, a.x);
            b[0] = _.wi(Math.atan2(a.z, Math.sqrt(a.x * a.x + a.y * a.y)));
            b[1] = _.wi(c)
        },
        d0a = function(a, b, c) {
            c.x = a.x + b.x;
            c.y = a.y + b.y;
            c.z = a.z + b.z;
            c0a(c)
        },
        c0a = function(a) {
            const b = Math.sqrt(GP(a, a));
            b < 1E-12 || (a.x /= b, a.y /= b, a.z /= b)
        },
        e0a = function(a, b) {
            for (; b < a.Eg.length; ++b) a.Eg[b].index = b
        },
        KP = function(a, b, c, d) {
            const e = b.index,
                f = b.zo.get("position");
            b = (b = b.zo.get("latLngPosition")) && a.map ? _.bu(b, a.map.get("projection")) : null;
            _.hk(a, c, e, f, b, d)
        },
        f0a = function(a, b, c) {
            if ((b = b.zo.Og) && a.map) {
                a = a.map.__gm.get("projectionController");
                const d = a.fromLatLngToDivPixel(c);
                b = b(d);
                if (b = a.fromDivPixelToLatLng(b)) return b
            }
            return c
        },
        g0a = function(a, b) {
            if (b && a.ip) {
                if (a.constraint === 2) return {
                    clientX: a.ip.clientX,
                    clientY: b.clientY
                };
                if (a.constraint === 1) return {
                    clientX: b.clientX,
                    clientY: a.ip.clientY
                }
            }
            return b
        },
        LP = function(a) {
            const b = a.Fg,
                c = a.get("center");
            var d = a.get("radius");
            if (c && _.$i(d)) {
                a.Ig = !0;
                var e = a.get("planetRadius"),
                    f = _.wi(d / e);
                var g = _.vi(c.lat());
                if (e = d / e) {
                    d = Math.cos(e);
                    e = Math.sin(e);
                    var h = Math.sin(g);
                    g = Math.atan2(Math.sin(Math.acos((1 - d) / e * Math.tan(g))) * e * Math.cos(g), d - h * h)
                } else g = 0;
                g = _.wi(g);
                b.setAt(0, c);
                d = c.lat() + f;
                d <
                    90 ? b.setAt(1, new _.Hj(d, c.lng())) : b.setAt(1, null);
                f = c.lat() - f;
                f > -90 ? b.setAt(2, new _.Hj(f, c.lng())) : b.setAt(2, null);
                g <= 180 ? (f = c.lng() + g, g = c.lng() - g, b.setAt(3, new _.Hj(c.lat(), f)), b.setAt(4, new _.Hj(c.lat(), g))) : (b.setAt(3, null), b.setAt(4, null));
                a.Ig = !1;
                a.Gg || _.hk(a, "toolbar", {
                    show: !1
                })
            } else b.clear()
        },
        h0a = function(a) {
            const b = a.Jg;
            b && (b.unbindAll(), b.release(), _.ak(b), a.Jg = null)
        },
        k0a = function(a) {
            var b = a.get("panes");
            if (!b) return null;
            b = new MP(a.Fg, i0a, j0a, !1, b.overlayMouseTarget, a.Kg, a.get("map"), a.ah);
            b.bindTo("projection", a);
            b.bindTo("zoom", a);
            b.bindTo("projectionCenterQ", a);
            b.bindTo("panningEnabled", a);
            b.bindTo("mapPixelBounds", a);
            b.bindTo("color", a);
            b.bindTo("zIndex", a);
            b.bindTo("offset", a);
            a.Eg.bindTo("freeVertexPosition", b);
            let c = null,
                d = null;
            _.Vj(b, "dragstart", e => {
                c = a.get("center");
                d = a.get("radius");
                a.Eg.set("freeVertexIsCenter", e === 0);
                a.Eg.set("map", a.get("map"))
            });
            _.Vj(b, "dragend", (e, f, g) => {
                a.Eg.set("map", null);
                _.hk(a, "toolbar", {
                    show: !0,
                    Cw: g,
                    action: () => {
                        a.set("center", c);
                        a.set("radius",
                            d)
                    }
                })
            });
            _.gk(b, "dragstart", a);
            _.gk(b, "dragend", a);
            _.gk(b, "panbynow", a);
            return b
        },
        l0a = function(a, b, c) {
            return c && b || a
        },
        NP = function(a) {
            let b;
            if (a.Fg) {
                const c = _.TI(a.get("color"));
                c && (c.red = Math.floor((c.red + 255) / 2), c.green = Math.floor((c.green + 255) / 2), c.blue = Math.floor((c.blue + 255) / 2), b = ["#", DP(c.red), DP(c.green), DP(c.blue)].join(""))
            }
            a.Ng.setFillColor(a.Eg, b || "white")
        },
        o0a = function(a, b, c, d) {
            function e() {
                a.get("editable") ? m0a(a, b, c, d) : (n0a(a), _.hk(a, "toolbar", {
                    show: !1
                }))
            }
            a.editable_changed = e;
            e()
        },
        m0a =
        function(a, b, c, d) {
            if (!a.Gg) {
                var e = new _.iK(a, !0);
                a.Jg = e;
                var f = new p0a;
                f.bindTo("strokeColor", e);
                f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
                f.bindTo("strokeWeight", e);
                f.bindTo("center", a);
                f.bindTo("radius", a);
                f.bindTo("planetRadius", c);
                f.bindTo("zIndex", a);
                a.Ig = f;
                var g = b.__gm;
                a.Eg = FP(g);
                var h = _.UI(g, a),
                    l = _.ru() ? 9 : 0,
                    n = new OP;
                d = new q0a(f, function(p, r, u) {
                    return new PP(p, a.Eg, l, r, h, n, u)
                }, d);
                d.set("map", b);
                d.bindTo("center", a);
                d.bindTo("radius", a);
                d.bindTo("planetRadius", c);
                d.bindTo("panes", g);
                d.bindTo("projection",
                    b);
                d.bindTo("zoom", g);
                d.bindTo("projectionCenterQ", g);
                d.bindTo("panningEnabled", b, "draggable");
                d.bindTo("mapPixelBounds", g, "pixelBounds");
                d.bindTo("offset", g);
                d.bindTo("color", e, "strokeColor");
                d.bindTo("zIndex", a);
                a.Gg = d;
                _.gk(d, "panbynow", g);
                _.gk(d, "toolbar", a)
            }
        },
        n0a = function(a) {
            const b = a.Gg;
            b && (b.unbindAll(), b.set("map", null), _.ak(b), delete a.Gg, a.Eg ? .unbindAll(), a.Eg ? .release(), delete a.Eg, a.Ig ? .unbindAll(), delete a.Ig, a.Jg ? .release(), delete a.Jg)
        },
        r0a = function(a, b, c) {
            const d = Array(250);
            var e = _.vi(a.lat()),
                f = _.vi(a.lng()),
                g = Math.cos(b);
            const h = Math.sin(b),
                l = Math.cos(e);
            e = Math.sin(e);
            if (l > 1E-6)
                for (a = 0; a < 250; ++a) {
                    b = a / 250 * Math.PI * 4;
                    b += Math.sin(b + Math.PI);
                    var n = b / 2,
                        p = e * g + l * h * Math.cos(n);
                    b = Math.asin(p);
                    let r = f + Math.atan2(Math.sin(n) * h * l, g - e * p);
                    n = -Math.PI;
                    p = Math.PI - n;
                    r = ((r - n) % p + p) % p + n;
                    d[a] = c(_.wi(b), _.wi(r))
                } else
                    for (f = _.wi(b), f = a.lat() > 0 ? a.lat() - f : a.lat() + f, g = 0; g < 250; ++g) d[g] = c(f, 360 * g / 250);
            return d
        },
        s0a = function(a, b) {
            const c = [r0a(a, b, (d, e) => new _.Hj(d, e))];
            _.vi(a.lat()) - b < -Math.PI / 2 && (a = [new _.Hj(-90, -200, !0), new _.Hj(90, -200, !0), new _.Hj(90, -100, !0), new _.Hj(90, 0, !0), new _.Hj(90, 100, !0), new _.Hj(90, 200, !0), new _.Hj(-90, 200, !0), new _.Hj(-90, 100, !0), new _.Hj(-90, 0, !0), new _.Hj(-90, -100, !0), new _.Hj(-90, -200, !0)], c.push(a));
            return c
        },
        QP = function(a, b) {
            const c = a.__gm,
                d = () => {
                    const e = a.get("gestureHandling");
                    e != null ? b.set("panningEnabled", e !== "none") : b.set("panningEnabled", a.get("draggable"))
                };
            _.Vj(a, "gesturehandling_changed", d);
            _.Vj(a, "draggable_changed", d);
            b.bindTo("panes", c);
            b.bindTo("projectionController",
                c);
            b.bindTo("containerPixelBounds", c, "pixelBounds");
            c.rh = _.gk(b, "panbynow", c)
        },
        RP = function(a, b) {
            const c = () => {
                const d = a.getMap();
                a.getDraggable() && (_.Sk(d, "Od"), _.Q(d, 147751))
            };
            a.draggable_changed = c;
            c();
            a.Og = [_.Vj(a, "mouseover", d => {
                d.vertex == null && d.edge == null && b.set("poly", a)
            }), _.Vj(a, "mouseout", d => {
                d.vertex != null || d.edge != null || d.domEvent && _.ys(d.domEvent) || b.set("poly", null)
            })]
        },
        SP = function(a) {
            (a.Og || []).forEach(_.Xj);
            delete a.draggable_changed;
            delete a.Og
        },
        TP = function(a) {
            if (!a.get("active")) {
                var b =
                    a.get("panes"),
                    c = a.get("projectionController"),
                    d = a.get("poly");
                if (b !== a.Mg || c !== a.Ig || d !== a.Eg) a.Mg = b, a.Ig = c, a.Eg = d, a.Fg && a.Fg.forEach(_.Xj), a.Fg = null, a.Mg && a.Ig && a.Eg ? (a.Fg = [_.dk(a.Eg, "mousedown", a, a.Tg), _.dk(a.Eg, "mouseup", a, a.Ug), _.dk(a.Eg, "movestart", a, a.Qg), _.dk(a.Eg, "move", a, a.Rg), _.dk(a.Eg, "moveend", a, a.Pg)], a.Fg.push(_.Vj(a.Eg, "editable_changed", () => {
                    a.get("storeEditable") && (a.Ng = a.Eg.get("editable"), a.set("storeEditable", !1), a.Eg.set("editable", !1), a.set("storeEditable", !0))
                })), a.bindTo("draggable",
                    a.Eg)) : (a.unbind("draggable"), a.set("draggable", !1))
            }
        },
        UP = function(a, b, c) {
            var d = a.get("position");
            d = a.Ig.fromDivPixelToLatLng(d);
            c = new _.Nz(d, c.domEvent);
            a.Eg && _.hk(a.Eg, b, c)
        },
        t0a = function(a) {
            _.bJ(a.Jg, a.get("panningEnabled") !== !1 && a.get("dragging"))
        },
        w0a = async function(a, b) {
            const c = _.K(await _.K(_.Ji("geometry")));
            a.Eg = new VP((d, e, f) => new u0a(d, e, f, c.spherical.computeHeading, c.spherical.computeOffsetOrigin), a.map, b);
            QP(a.map, a.Eg);
            a.Fh.Og.forEach(d => {
                v0a(a, d)
            })
        },
        v0a = function(a, b) {
            if (a.Eg && a.ah) {
                var c =
                    new _.tJ(["baseMapType"], "planetRadius", _.Qda);
                c.bindTo("baseMapType", a.Fh);
                var d = b.Kg = new x0a(b);
                d.set("map", a.map);
                d.bindTo("radius", b);
                d.bindTo("center", b);
                d.bindTo("capturing", b);
                d.bindTo("clickable", b);
                d.bindTo("cursor", b);
                d.bindTo("fillColor", b);
                d.bindTo("fillOpacity", b);
                d.bindTo("strokeColor", b);
                d.bindTo("strokeOpacity", b);
                d.bindTo("strokeWeight", b);
                d.bindTo("strokePosition", b);
                d.bindTo("zIndex", b);
                d.bindTo("suppressUndo", b);
                d.bindTo("planetRadius", c);
                var e = [];
                WP.forEach(f => {
                    e.push(_.gk(d,
                        f, b))
                });
                e.push(_.gk(b, "toolbar", d));
                b.oh = e;
                RP(b, a.Eg);
                o0a(b, a.map, c, a.ah);
                _.Q(a.map, 147750)
            }
        },
        z0a = function(a) {
            const b = a.getVisible() != 0 ? a.getMap() : null;
            a.Fg !== b && (a.Fg && a.Fg.__gm.Og.remove(a), b && (b.__gm.Og.Eg || new y0a(b), _.Cm(b.__gm.Og, a)), a.Fg = b)
        },
        A0a = function(a) {
            a = a.poly.get("latLngs");
            const b = new XP(0),
                c = new XP(0);
            a.forEach(d => {
                d.forEach(e => {
                    IP([e.lat(), e.lng()], c);
                    b.x += c.x;
                    b.y += c.y;
                    b.z += c.z
                })
            });
            c0a(b);
            a = [0, 0];
            JP(b, a);
            a[0] = _.Ui(a[0], -89, 89);
            return new _.Hj(a[0], a[1])
        },
        C0a = function(a, b, c, d) {
            a.capturing_changed =
                () => {
                    if (a.get("capturing"))
                        if (a.get("clickable") == 0) {
                            const e = a.Gg = new B0a;
                            e.bindTo("draggableCursor", a, "cursor");
                            e.set("active", !0);
                            b.bindTo("cursor", e);
                            d.register(e)
                        } else d.setCapture(c, a);
                    else a.Gg ? (d.unregister(a.Gg), a.Gg.unbindAll(), b.unbind("cursor"), b.set("cursor", ""), delete a.Gg) : d.releaseCapture(c, a)
                }
        },
        D0a = function(a) {
            a.Fg || (a.Fg = b => {
                _.Si(a.Fg.Rk, (c, d) => {
                    d(b)
                })
            }, a.Fg.Rk = {});
            a.Ig || (a.Ig = (b, c) => {
                _.Si(a.Ig.Rk, (d, e) => {
                    e(b, c)
                })
            }, a.Ig.Rk = {});
            a.Gg || (a.Gg = (b, c) => {
                _.Si(a.Gg.Rk, (d, e) => {
                    e(b, c)
                })
            }, a.Gg.Rk = {})
        },
        YP = function(a, b) {
            a.Fg && delete a.Fg.Rk[b];
            a.Ig && delete a.Ig.Rk[b];
            a.Gg && delete a.Gg.Rk[b]
        },
        H0a = function(a, b, c) {
            const d = _.jk(b);
            c in E0a && (a.Eg[d] = b, ZP(b));
            c in F0a && (a.Fg[d] = b);
            G0a(a)
        },
        ZP = function(a) {
            var b = a.get("latLngs");
            if (b) {
                a = _.jk(a);
                YP(b, a);
                b = b.getArray();
                for (let c = 0, d = b.length; c < d; ++c) YP(b[c], a)
            }
        },
        G0a = function(a) {
            a.timeout || (a.timeout = _.yF(() => {
                a.timeout = 0;
                var b = a.Fg;
                a.Fg = {};
                const c = a.Eg;
                a.Eg = {};
                for (var d of Object.keys(b)) {
                    var e = b[d],
                        f = e.Ig;
                    f.style = I0a(a.Ig, e);
                    f.jB && !c[d] && f.jB()
                }
                b = a.Gg;
                d = a.get("projection");
                for (const g of Object.keys(c)) e = c[g], f = e.Ig, b.remove(f), f.geometry = J0a(e, d), _.Cm(b, f), K0a(a, e)
            }))
        },
        K0a = function(a, b) {
            function c() {
                H0a(e, b, "latLngs")
            }
            const d = b.get("latLngs");
            if (d) {
                var e = a,
                    f = _.jk(b);
                a = d.getArray();
                for (let g = 0, h = a.length; g < h; ++g) {
                    const l = a[g];
                    D0a(l);
                    l.Fg.Rk[f] = l.Ig.Rk[f] = l.Gg.Rk[f] = c
                }
                D0a(d);
                d.Ig.Rk[f] = d.Gg.Rk[f] = (g, h) => {
                    YP(h, f);
                    c()
                };
                d.Fg.Rk[f] = c
            }
        },
        L0a = function(a) {
            const b = a.get("projection"),
                c = a.Fg;
            if (b) {
                var d = a.Eg,
                    e = d.getLength(),
                    f = a.get("geodesic");
                for (let g =
                        0; g < e - 1; ++g) c.setAt(g, $P(d.getAt(g), d.getAt(g + 1), f, b, a.interpolate))
            } else c.clear()
        },
        M0a = function(a, b, c) {
            const d = a.get("projection");
            if (d) {
                var e = a.Eg,
                    f = e.getAt(c),
                    g = a.Fg,
                    h = a.get("geodesic");
                c > 0 && g.setAt(c - 1, $P(e.getAt(c - 1), f, h, d, a.interpolate));
                c < e.getLength() - 1 && (a = $P(f, e.getAt(c + 1), h, d, a.interpolate), b ? g.insertAt(c, a) : g.setAt(c, a))
            }
        },
        $P = function(a, b, c, d, e) {
            c ? d = e(a, b, .5) : (Math.abs(a.lng() - b.lng()) > 180 && (a = new _.Hj(a.lat(), _.Vi(a.lng(), b.lng() - 180, b.lng() + 180), !0)), a = d.fromLatLngToPoint(a), b = d.fromLatLngToPoint(b),
                d = d.fromPointToLatLng(new _.Zk((a.x + b.x) / 2, (a.y + b.y) / 2)));
            return d
        },
        aQ = function(a) {
            a.unbindAll();
            a.release();
            _.ak(a);
            a.Fg && (a.Fg.release(), a.Fg.unbindAll())
        },
        dQ = function(a) {
            function b() {
                _.hk(c, "toolbar", {
                    show: !1
                })
            }
            const c = a;
            N0a(c);
            const d = c.get("paths");
            a = c.get("panes");
            if (d && a) {
                var e = a.overlayMouseTarget;
                d.forEach(f => {
                    c.Fg.push(bQ(c, f, e));
                    c.get("suppressGhostControlPoints") || c.Eg.push(cQ(c, f, e))
                });
                b();
                a = c.Gg;
                a.push(_.Vj(d, "insert_at", f => {
                    const g = c.get("suppressGhostControlPoints"),
                        h = d.getAt(f);
                    c.Fg.splice(f,
                        0, bQ(c, h, e));
                    g || c.Eg.splice(f, 0, cQ(c, h, e));
                    b()
                }));
                a.push(_.Vj(d, "remove_at", f => {
                    const g = c.get("suppressGhostControlPoints");
                    aQ(c.Fg[f]);
                    c.Fg.splice(f, 1);
                    g || (aQ(c.Eg[f]), c.Eg.splice(f, 1));
                    b()
                }));
                a.push(_.Vj(d, "set_at", f => {
                    const g = c.get("suppressGhostControlPoints");
                    aQ(c.Fg[f]);
                    const h = d.getAt(f);
                    c.Fg[f] = bQ(c, h, e);
                    g || (aQ(c.Eg[f]), c.Eg[f] = cQ(c, h, e));
                    b()
                }))
            }
        },
        N0a = function(a) {
            a.Fg.forEach(aQ);
            a.Eg.forEach(aQ);
            a.Fg.length = 0;
            a.Eg.length = 0;
            a.Gg.forEach(_.Xj);
            a.Gg.length = 0
        },
        P0a = function(a, b, c, d) {
            const e = new MP(b, ["pointer"], [0], d, c, a.Ig, a.get("map"), a.ah);
            e.bindTo("projection", a);
            e.bindTo("zoom", a);
            e.bindTo("projectionCenterQ", a);
            e.bindTo("panningEnabled", a);
            e.bindTo("mapPixelBounds", a);
            e.bindTo("color", a);
            e.bindTo("zIndex", a);
            e.bindTo("offset", a);
            _.gk(e, "dragstart", a);
            _.gk(e, "dragend", a);
            _.gk(e, "panbynow", a);
            _.gk(e, "toolbar", a);
            WP.forEach(f => {
                _.Vj(e, f, (g, h, l, n) => {
                    h = b.getAt(g);
                    let p;
                    if (a.hm) {
                        l = d ? a.Eg : a.Fg;
                        for (let r = 0; r < l.length; ++r)
                            if (l[r] === e) {
                                p = r;
                                break
                            }
                    }
                    _.hk(a, f, new O0a(h, n, p, d ? void 0 : g, d ? g : void 0))
                })
            });
            return e
        },
        bQ = function(a, b, c) {
            const d = P0a(a, b, c, !1),
                e = a.Ol;
            let f;
            _.Vj(d, "dragstart", g => {
                f = b.getAt(g);
                var h = b.getArray(),
                    l = a.hm;
                const n = h.length;
                if (n < 2) e.set("anchors", []);
                else {
                    var p = h[l && g === 0 ? n - 1 : g - 1];
                    g = h[l && g === n - 1 ? 0 : g + 1];
                    h = [];
                    p && h.push(p);
                    g && h.push(g);
                    e.set("anchors", h)
                }
                e.bindTo("freeVertexPosition", d);
                e.set("map", a.get("map"))
            });
            _.Vj(d, "dragend", (g, h, l) => {
                e.set("map", null);
                _.hk(a, "toolbar", {
                    show: !0,
                    Cw: l,
                    action: () => {
                        b.setAt(g, f)
                    }
                })
            });
            return d
        },
        cQ = function(a, b, c) {
            const d = new _.Wl,
                e = a.hm ? new Q0a(b) :
                b,
                f = new R0a(e, d, a.interpolate);
            f.bindTo("geodesic", a);
            f.bindTo("projection", a);
            const g = P0a(a, d, c, !0);
            g.Fg = f;
            const h = a.Ol;
            _.Vj(g, "dragstart", l => {
                l = [e.getAt(l), e.getAt(l + 1)];
                h.set("anchors", l);
                h.bindTo("freeVertexPosition", g);
                h.set("map", a.get("map"))
            });
            _.Vj(g, "dragend", (l, n, p) => {
                b.insertAt(l + 1, d.getAt(l));
                h.set("map", null);
                _.hk(a, "toolbar", {
                    show: !0,
                    Cw: p,
                    action: () => {
                        b.removeAt(l + 1)
                    }
                })
            });
            return g
        },
        U0a = function(a, b, c, d, e) {
            function f() {
                a.get("editable") ? (S0a(a, b, d, e), _.Sk(b, "Oe"), _.Q(b, 147756)) : (_.hk(c,
                    "toolbar", {
                        show: !1,
                        poly: a
                    }), T0a(a))
            }
            a.editable_changed = f;
            f();
            a.Mg = _.Vj(a, "toolbar", g => {
                g.poly = a;
                _.hk(c, "toolbar", g)
            })
        },
        S0a = function(a, b, c, d) {
            if (!a.Lg) {
                var e = new _.iK(a, a.hm);
                a.Ng = e;
                var f = new _.pJa;
                f.bindTo("strokeColor", e);
                f.bindTo("strokeOpacity", e, "ghostStrokeOpacity");
                f.bindTo("strokeWeight", e);
                f.bindTo("geodesic", a);
                f.bindTo("zIndex", a);
                a.Ol = f;
                var g = b.__gm;
                a.Fg = FP(g);
                var h = _.UI(g, a),
                    l = _.ru() ? 9 : 0,
                    n = new OP,
                    p = new V0a(f, a.hm, function(r, u, w) {
                        return new PP(r, a.Fg, l, u, h, n, w)
                    }, c, d);
                p.set("map", b);
                p.bindTo("paths",
                    a, "latLngs");
                p.bindTo("panes", g);
                p.bindTo("projection", b);
                p.bindTo("zoom", g);
                p.bindTo("projectionCenterQ", g);
                p.bindTo("panningEnabled", b, "draggable");
                p.bindTo("mapPixelBounds", g, "pixelBounds");
                p.bindTo("offset", g);
                p.bindTo("color", e, "strokeColor");
                p.bindTo("zIndex", a);
                p.bindTo("geodesic", a);
                p.bindTo("suppressGhostControlPoints", a);
                a.Lg = p;
                _.gk(p, "panbynow", g);
                _.gk(p, "toolbar", a);
                WP.forEach(r => {
                    _.gk(p, r, a)
                })
            }
        },
        T0a = function(a) {
            const b = a.Lg;
            b && (b.unbindAll(), b.set("map", null), _.ak(b), delete a.Lg, a.Fg.unbindAll(),
                a.Fg.release(), delete a.Fg, a.Ol.unbindAll(), delete a.Ol, a.Ng.release(), delete a.Ng)
        },
        W0a = function(a) {
            a.Fg && _.Zj(a.Fg, "suppressundo_changed")
        },
        X0a = function(a, b, c) {
            a.Gg(_.ml);
            a.Ig = b;
            W0a(a);
            a.Fg = c;
            _.EF(a.Eg);
            _.Vj(c, "suppressundo_changed", () => {
                c.get("suppressUndo") && a.Nj()
            })
        },
        Y0a = function(a) {
            return (a || []).map(b => (b || []).map(c => Math.round(c)))
        },
        a1a = function(a, b, c) {
            function d() {
                g[w++] = l.latLng[0];
                g[w++] = l.latLng[1];
                f && (h[r++] = l.distance);
                n = l
            }
            const e = a.path,
                f = a.Ym;
            if (!e.length) return a;
            const g = Array(e.length),
                h = f ? Array(f.length) : null;
            a = [];
            let l, n = eQ();
            g[0] = n.latLng[0] = e[0];
            g[1] = n.latLng[1] = e[1];
            f && (h[0] = n.distance = f[0]);
            n.depth = 0;
            IP(n.latLng, n.Ot);
            let p = 1,
                r = 1;
            const u = [];
            let w = 2;
            for (let y = 2; y < e.length || u.length;) {
                u.length ? l = u.pop() : (l = eQ(), l.depth = 0, l.latLng[0] = e[y++], l.latLng[1] = e[y++], f && (l.distance = f[p++]), IP(l.latLng, l.Ot));
                if (Math.max(n.depth, l.depth) >= 12) {
                    d();
                    continue
                }
                var x = new _.Yl;
                x.minX = Math.min(n.latLng[0], l.latLng[0]);
                x.maxX = Math.max(n.latLng[0], l.latLng[0]);
                x.minY = Math.min(n.latLng[1], l.latLng[1]);
                x.maxY = Math.max(n.latLng[1], l.latLng[1]);
                if (!_.Xl(b, x)) {
                    d();
                    continue
                }
                const B = eQ();
                d0a(n.Ot, l.Ot, B.Ot);
                JP(B.Ot, B.latLng);
                B.depth = Math.max(n.depth, l.depth) + 1;
                f && (B.distance = (n.distance + l.distance) / 2);
                const D = x.minY - 1E-6,
                    G = x.maxY + 1E-6;
                x = B.latLng;
                x[1] = Z0a(D, G, x[1]);
                $0a(n.latLng, l.latLng, a);
                Math.max(Math.abs(B.latLng[0] - a[0]), Math.abs(B.latLng[1] - a[1])) <= c ? d() : (u.push(l), u.push(B))
            }
            return {
                path: g,
                Ym: h
            }
        },
        $0a = function(a, b, c) {
            c[0] = (a[0] + b[0]) / 2;
            c[1] = (a[1] + b[1]) / 2
        },
        Z0a = function(a, b, c) {
            for (; c < a;) c += 360;
            for (; c >
                b;) c -= 360;
            return c
        },
        eQ = function() {
            return {
                latLng: [0, 0],
                Ot: new XP(0)
            }
        },
        b1a = function(a) {
            return function(b, c) {
                if (b.unit === "px") b = b.value / a;
                else {
                    const d = _.Ri(c);
                    b = d ? b.value / 100 * c[d - 1] : 0
                }
                return b
            }
        },
        c1a = function(a, b) {
            return function(c, d) {
                if (c === 0) return !0;
                c = a[c];
                d = a[d];
                for (let e = 0, f; f = b[e]; ++e) {
                    const g = f.offset,
                        h = f.repeat;
                    if (h) {
                        if (Math.floor((c - g) / h) !== Math.floor((d - g) / h)) return !0
                    } else if (c < g && g <= d) return !0
                }
                return !1
            }
        },
        d1a = function(a, b, c, d) {
            const e = a.minX,
                f = a.minY,
                g = a.maxX,
                h = a.maxY;
            return function(l, n, p) {
                var r =
                    d[l * 2],
                    u = d[l * 2 + 1];
                l = d[n * 2];
                n = d[n * 2 + 1];
                var w = Math.min(u, n) - p,
                    x = Math.max(r, l) + p;
                const y = Math.max(u, n) + p;
                Math.min(r, l) - p <= g && e <= x && w <= h && f <= y ? p > b ? p = !0 : (w = c.fromLatLngToPoint(new _.Hj(r, u, !0)), x = c.fromLatLngToPoint(new _.Hj(l, n, !0)), w = c.fromPointToLatLng(new _.Zk((w.x + x.x) / 2, (w.y + x.y) / 2), !0), u = (u + n) / 2, r = (r + l) / 2 - w.lat(), l = u - w.lng(), p = Math.sqrt(r * r + l * l) + p > b) : p = !1;
                return p
            }
        },
        f1a = function(a, b, c) {
            return function(d, e, f) {
                const g = d.path,
                    h = d.Ym,
                    l = d1a(a, b, c, g);
                d = l;
                if (h) {
                    const r = c1a(h, f);
                    d = (u, w, x) => l(u, w, x) || r(u,
                        w)
                }
                const n = [],
                    p = h ? [] : null;
                e1a(e, g.length / 2, d, function(r) {
                    n.push(g[r * 2], g[r * 2 + 1]);
                    h && p.push(h[r])
                });
                return {
                    path: n,
                    Ym: p
                }
            }
        },
        h1a = function(a, b, c, d) {
            const e = a.Ym;
            if (!e) return null;
            a = a.path;
            const f = [];
            for (let l = 0, n = a.length - 2; l < n;) {
                const p = a[l],
                    r = a[l + 1];
                var g = e[l / 2],
                    h = g - b;
                l += 2;
                let u = a[l],
                    w = a[l + 1];
                if (g1a(p, r, d) & g1a(u, w, d)) continue;
                for (; _.Zi(p, u) && _.Zi(r, w) && l < n;) l += 2, u = a[l], w = a[l + 1];
                const x = e[l / 2] - b,
                    y = Math.atan2(u - p, r - w);
                g === 0 && (h -= 1E-9);
                if (c)
                    for (g = Math.floor(x / c) * c; g > h;) {
                        const B = (g - h) / (x - h);
                        f.push(p + (u -
                            p) * B, r + (w - r) * B, y);
                        g -= c
                    } else h < 0 && 0 <= x && (h = (0 - h) / (x - h), f.push(p + (u - p) * h, r + (w - r) * h, y))
            }
            return f
        },
        g1a = function(a, b, c) {
            let d = 0;
            _.Zi(a, -16, .001) && (d |= 1);
            _.Zi(a, c.hh + 16, .001) && (d |= 2);
            _.Zi(b, -16, .001) && (d |= 4);
            _.Zi(b, c.jh + 16, .001) && (d |= 8);
            return d
        },
        i1a = function(a, b, c) {
            const d = [];
            if (c)
                for (let e = 0, f; f = b[e]; ++e) d.push({
                    offset: a.Fg(f.offset, c),
                    repeat: a.Fg(f.repeat, c)
                });
            return d
        },
        j1a = function(a, b, c, d) {
            const e = [],
                f = [];
            for (let l = 0, n = d.length; l < n; ++l) f.push([]);
            for (let l = 0, n = b.length; l < n; ++l) {
                var g = b[l];
                let p = g.NH;
                const r = i1a(a, d, p.Ym);
                g.TD ? p = a.Jg(p, g.TD, r) : p = {
                    path: p.path.slice(0),
                    Ym: p.Ym
                };
                if (p.path.length) {
                    c && (p = a1a(p, a.Eg, a.Ig));
                    Y_a(p.path, a.projection);
                    p = W_a(p, a.Gg);
                    var h = p.path;
                    g = a.Bh.size;
                    if (h.length) {
                        e.push(h);
                        for (let u = 0; u < h.length; u += 2) {
                            const w = _.rx(a.Bh, new _.gm(h[u], h[u + 1]), a.zoom, x => x);
                            h[u] = (w.sh - a.sn.x) * g.hh;
                            h[u + 1] = (w.th - a.sn.y) * g.jh
                        }
                        for (let u = 0, w; w = r[u]; ++u)(h = h1a(p, w.offset, w.repeat, g)) && (f[u] = f[u].concat(h))
                    }
                }
            }
            return {
                paths: e,
                Cy: f
            }
        },
        m1a = function(a, b, c) {
            const d = k1a(a, b, c);
            a = l1a(d, c);
            return {
                canvas: d,
                context: a,
                aG: a ? new _.gJa(a) : null,
                release: () => {
                    d.width = d.height = 0
                }
            }
        },
        k1a = function(a, b, c) {
            a = a.createElement("canvas");
            a.width = b.hh * c;
            a.height = b.jh * c;
            a.style.width = _.gj(b.hh);
            a.style.height = _.gj(b.jh);
            _.Sm(a);
            return a
        },
        l1a = function(a, b) {
            a = a.getContext("2d");
            if (!a) return null;
            a.scale(b, b);
            a.lineCap = a.lineJoin = "round";
            return a
        },
        n1a = function(a, b, c, d, e) {
            for (let D = 0, G = a.length; D < G; ++D) {
                var f = b[D],
                    g = c,
                    h = d,
                    l = a[D],
                    n = f.yF,
                    p = f.scale,
                    r = f.rotation,
                    u = f.FL,
                    w = f.strokeColor,
                    x = f.strokeOpacity / e,
                    y = f.strokeWeight,
                    B = f.fillColor;
                f = f.fillOpacity / e;
                g.beginPath();
                for (let F = 0, A = l.length; F < A; F += 3) h.Nh(n, l[F], l[F + 1], r + (u ? l[F + 2] : 0), p);
                f && (g.fillStyle = B, g.globalAlpha = f, g.fill());
                y && (g.lineWidth = y, g.strokeStyle = w, g.globalAlpha = x, g.stroke())
            }
        },
        fQ = function(a) {
            a.Gg || (a.Gg = _.yF(() => {
                a.Gg = 0;
                const b = o1a(a);
                if (b.length) {
                    a.Eg || (a.Eg = m1a(a.kt, a.tileSize, a.Ig), _.mu(a.Eg.canvas, _.ml));
                    var c = a.Eg.context;
                    a: {
                        for ({
                                dk: d
                            } of b)
                            if (d && d.tl) {
                                var d = d.tl;
                                break a
                            }
                        d = null
                    }
                    if (c) {
                        a.Eg.canvas.parentNode || a.container.appendChild(a.Eg.canvas);
                        c.clearRect(0, 0,
                            a.tileSize.hh, a.tileSize.jh);
                        for (let e = 0; e < b.length; ++e) {
                            const f = b[e],
                                g = f.rB,
                                h = g.FM;
                            if (_.Zi(1, h)) a.Jg(c, f.paths, g.strokeColor, g.strokeOpacity, g.strokeWeight, g.strokePosition, g.Qu, g.fillColor, g.fillOpacity), n1a(f.Cy, g.cG, c, a.Eg.aG, 1);
                            else {
                                a.Fg || (a.Fg = m1a(a.kt, a.tileSize, a.Ig));
                                const l = a.Fg.context;
                                l && (l.clearRect(0, 0, a.tileSize.hh, a.tileSize.jh), a.Jg(l, f.paths, g.strokeColor, g.strokeOpacity / h, g.strokeWeight, g.strokePosition, g.Qu), n1a(f.Cy, g.cG, l, a.Fg.aG, h), c.globalAlpha = h, c.drawImage(a.Fg.canvas, 0,
                                    0, a.tileSize.hh, a.tileSize.jh))
                            }
                        }
                        d && d()
                    } else d && d()
                } else a.Eg && a.Eg.canvas.parentNode && a.container.removeChild(a.Eg.canvas), p1a(a)
            }))
        },
        o1a = function(a) {
            const b = [];
            a = a.Ji;
            for (const c of Object.keys(a)) b.push(a[c]);
            b.sort((c, d) => c.zIndex - d.zIndex);
            return b
        },
        p1a = function(a) {
            a.Eg && (a.Eg.release(), a.Eg = null);
            a.Fg && (a.Fg.release(), a.Fg = null)
        },
        q1a = function(a, b, c) {
            function d(l, n, p) {
                p = p ? r => r : Math.round;
                l.beginPath();
                for (let r = 0, u; u = n[r]; ++r)
                    if (u.length) {
                        l.moveTo(p(u[0]), p(u[1]));
                        for (let w = 2, x = u.length; w < x;) l.lineTo(p(u[w++]),
                            p(u[w++]))
                    }
            }
            const e = c.size,
                f = a.createElement("canvas");
            f.width = b * e.hh;
            f.height = b * e.jh;
            const g = f.getContext("2d");
            g.lineCap = g.lineJoin = "round";
            g.scale(b, b);
            const h = [function(l, n, p, r, u) {
                l.lineWidth = u;
                l.strokeStyle = p;
                l.globalAlpha = r;
                l.stroke()
            }, function(l, n, p, r, u) {
                l.lineWidth = u * 2;
                l.strokeStyle = p;
                l.globalAlpha = r;
                l.save();
                l.clip();
                l.stroke();
                l.restore()
            }, function(l, n, p, r, u, w) {
                g.lineWidth = u * 2;
                g.strokeStyle = p;
                g.globalCompositeOperation = "source-over";
                g.clearRect(0, 0, e.hh, e.jh);
                d(g, n, w);
                g.stroke();
                g.globalCompositeOperation =
                    "destination-out";
                g.fill();
                l.globalAlpha = r;
                l.drawImage(f, 0, 0, e.hh, e.jh)
            }];
            return function(l, n, p, r, u, w, x, y, B) {
                d(l, n, x);
                y != null && B && (l.fillStyle = y, l.globalAlpha = B, l.fill());
                if (u) h[w](l, n, p, r, u, x)
            }
        },
        s1a = function(a, b, c) {
            a.Eg = a.Eg || q1a(a.kt, b, a.Bh);
            return new r1a(a.kt, c, a.Bh, a.Eg, b)
        },
        u1a = function(a, b) {
            b.jB = () => {
                Object.values(b.geometry.Ji).forEach(d => {
                    d.rB = b.style;
                    d.zIndex = b.style.zIndex;
                    fQ(d.dk.sB)
                })
            };
            const c = b.geometry.bounds;
            c.poly = b;
            b.bounds = c;
            _.VI(a.Eg, c);
            a = a.Fg.search(c);
            for (let d = 0, e = a.length; d <
                e; ++d) t1a(b, a[d].Ai)
        },
        v1a = function(a, b) {
            delete b.jB;
            a.Eg.remove(b.bounds);
            a = b.geometry;
            Object.values(a.Ji).forEach(c => {
                const d = c.dk;
                var e = d.sB;
                delete e.Ji[_.jk(c)];
                fQ(e);
                delete d.Ji[_.jk(c)]
            });
            a.Ji = {}
        },
        w1a = function(a, b) {
            const c = b.bounds;
            c.Ai = b;
            _.VI(a.Fg, c);
            a = a.Eg.search(b.bounds);
            if (a.length === 0) b.tl && _.vm(b.tl.bind(b));
            else
                for (let d = 0, e = a.length; d < e; ++d) t1a(a[d].poly, b)
        },
        x1a = function(a, b) {
            a.Fg.remove(b.bounds);
            Object.values(b.Ji).forEach(c => {
                delete c.BF.Ji[_.jk(c)]
            });
            b.Ji = {}
        },
        t1a = function(a, b) {
            const c =
                a.geometry;
            var d = j1a(b.LM, c.yK, c.geodesic, c.GM);
            d.paths.length ? (a = {
                paths: d.paths,
                Cy: d.Cy,
                rB: a.style,
                zIndex: a.style.zIndex,
                dk: b,
                BF: c
            }, d = _.jk(a), c.Ji[d] = a, b.Ji[d] = a, b = b.sB, b.Ji[_.jk(a)] = a, fQ(b)) : b.tl && _.vm(b.tl.bind(b))
        },
        z1a = function(a) {
            return (a || []).map(b => {
                const c = b.path;
                let d = Infinity,
                    e = Infinity,
                    f = -Infinity,
                    g = -Infinity;
                for (let l = 0, n = c.length; l < n;) {
                    var h = c[l++];
                    d = Math.min(d, h);
                    f = Math.max(f, h);
                    h = c[l++];
                    e = Math.min(e, h);
                    g = Math.max(g, h)
                }
                h = new _.Yl;
                h.minX = d;
                h.maxX = f;
                h.minY = e;
                h.maxY = g;
                return {
                    NH: b,
                    bounds: h,
                    ...(c.length >= 50 && {
                        TD: y1a(c)
                    })
                }
            })
        },
        C1a = function(a, b, c, d) {
            return a.map(e => {
                const f = e.path;
                e = e.Ym;
                var g = null;
                if (b) {
                    g = c ? A1a(f) : B1a(f, d);
                    const h = new Map;
                    h.set(0, 0);
                    let l = 0;
                    const n = [0];
                    for (let p = 1, r = e.length; p < r; ++p) {
                        const u = e[p];
                        h.has(u) ? l = h.get(u) : (l += g(p - 1), h.set(u, l));
                        n.push(l)
                    }
                    g = n
                }
                return {
                    path: f,
                    Ym: g
                }
            })
        },
        B1a = function(a, b) {
            const c = a.slice(0);
            Y_a(c, b);
            return d => {
                d *= 2;
                const e = c[d] - c[d + 2];
                d = c[d + 1] - c[d + 3];
                return Math.sqrt(e * e + d * d)
            }
        },
        A1a = function(a) {
            return b => {
                b *= 2;
                const c = new _.Hj(a[b], a[b + 1]);
                b = new _.Hj(a[b +
                    2], a[b + 3]);
                return _.zE(c, b, 1)
            }
        },
        G1a = function(a) {
            a.length && (a = D1a(a, E1a), a = D1a(a, F1a));
            return a
        },
        D1a = function(a, b) {
            const c = [];
            let d = new XP(0);
            const e = new XP(0);
            let f = new XP(0);
            const g = Array(a.length);
            g[0] = a[0];
            g[1] = a[1];
            IP(a, d);
            for (let h = 2, l = 2; h < a.length;) {
                c[0] = a[h];
                c[1] = a[h + 1];
                IP(c, f);
                b(d, f, e) && (JP(e, c), g[l++] = c[0], g[l++] = c[1]);
                g[l++] = a[h++];
                g[l++] = a[h++];
                const n = d;
                d = f;
                f = n
            }
            return g
        },
        E1a = function(a, b, c) {
            if (a.z > 0 === b.z > 0) return !1;
            HP(a, b, gQ);
            HP(gQ, H1a, c);
            c.z = 0;
            if (GP(c, c) < 1E-12) return !1;
            GP(c, a) + GP(c,
                b) < 0 && (c.x = -c.x, c.y = -c.y);
            return !0
        },
        F1a = function(a, b, c) {
            HP(a, b, gQ);
            HP(H1a, gQ, hQ);
            HP(gQ, hQ, c);
            if (GP(c, c) < 1E-12 || GP(a, hQ) > 0 === GP(b, hQ) > 0) return !1;
            GP(c, a) + GP(c, b) < 0 && (c.x = -c.x, c.y = -c.y, c.z = -c.z);
            return !0
        },
        I1a = function(a, b, c) {
            if (!b) return null;
            const d = [];
            b.forEach(e => {
                var f = d.push;
                e = e.Eg;
                const g = e.length,
                    h = Array(g * 2);
                for (let l = 0, n = 0; l < g; ++l) {
                    const p = e[l];
                    h[n++] = p.lat();
                    h[n++] = p.lng()
                }
                f.call(d, h)
            });
            if (a)
                for (const e of d) X_a(e);
            if (c)
                for (let e = 0, f = d.length; e < f; ++e) d[e] = G1a(d[e]);
            return d
        },
        J1a = function(a) {
            return (a || []).map(b => {
                if (b.length) {
                    var c = b[1];
                    var d = [0];
                    for (let e = 1, f = 1; e < b.length / 2; ++e, ++f) {
                        const g = b[2 * e + 1];
                        if (Math.abs(c - g) > 180) {
                            const h = g < c ? 1 : -1,
                                l = b[2 * e - 2],
                                n = b[2 * e];
                            b.splice(2 * e, 0, n, g + 360 * h, n, g + 450 * h, 90, g + 450 * h, 90, c - 450 * h, l, c - 450 * h, l, c - 360 * h);
                            d.push(f, f, f, f, f, f - 1);
                            e += 6
                        }
                        d.push(f);
                        c = g
                    }
                    c = d
                } else c = [];
                return {
                    path: b,
                    Ym: c
                }
            })
        },
        K1a = function(a) {
            return a.map(b => a1a(b, _.Aq, .1))
        },
        J0a = function(a, b) {
            var c = a.get("icons"),
                d = !a.hm && !!_.Ri(c);
            let e = !0;
            c = d ? c.map(l => {
                const n = a0a(l.offset) || L1a;
                l = a0a(l.repeat) || M1a;
                e = e && (n.value ===
                    0 || n.unit === "%") && (l.value === 0 || l.unit === "%");
                return {
                    offset: n,
                    repeat: l
                }
            }) : [];
            const f = a.get("geodesic");
            var g = I1a(a.hm, a.get("latLngs"), f);
            g = J1a(g);
            const h = f && e;
            f && d && !h && (g = K1a(g));
            g = C1a(g, d, h, b);
            b = z1a(g);
            if (b.length === 1) d = b[0].bounds;
            else {
                d = new _.Yl;
                for (let l = 0, n = b.length; l < n; ++l) d.extendByBounds(b[l].bounds)
            }
            return {
                bounds: d,
                Pz: a,
                geodesic: f,
                yK: b,
                Ji: {},
                GM: c
            }
        },
        I0a = function(a, b) {
            const c = b.hm,
                d = u => {
                    const w = b.get(u);
                    return c ? _.bj(w, a.Eg[u]) : _.bj(w, a.Gg[u])
                },
                e = (b.get("zIndex") || 0) * 1E3 + _.ra(b) % 1E3,
                f = c ?
                d("strokePosition") : a.Eg.strokePosition;
            var g = f === 0 ? 32 : 16;
            const h = Math.min(d("strokeWeight"), g),
                l = d("strokeColor"),
                n = d("strokeOpacity");
            g = [];
            let p = 1;
            if (!c) {
                const u = b.get("icons") || [];
                g = u.map(x => {
                    const y = a.Fg(x.icon || {}, l, n, h);
                    y.FL = !x.fixedRotation;
                    return y
                });
                let w = 0;
                for (var r of g) w = Math.max(w, r.strokeOpacity), w = Math.max(w, r.fillOpacity);
                _.Zi(0, w) || (_.Zi(0, n) || _.Zi(0, h)) && g.length === 1 || (p = Math.max(w, n));
                _.Ri(u) && (r = b.get("map"), _.Sk(r, "Os"), _.Q(r, 147754))
            }
            if (!(r = b.get("hitStrokeWeight"))) a: switch (f) {
                case 1:
                    r =
                        0;
                    break a;
                case 2:
                    r = h * 2;
                    break a;
                default:
                    r = h
            }
            return {
                strokeColor: l,
                strokeOpacity: n,
                strokeWeight: h,
                strokePosition: f,
                MJ: r,
                ...(c && {
                    fillColor: d("fillColor"),
                    fillOpacity: d("fillOpacity")
                }),
                zIndex: e,
                clickable: d("clickable"),
                cG: g,
                FM: p,
                hm: c,
                Qu: !!b.Qu
            }
        },
        S1a = function(a, b) {
            a.Fg = new N1a(a.tiles, a.Fh, b.tj, a.Ig);
            a.Fh.Kg.register(a.Fg);
            a.Eg = O1a(a, b);
            _.Ji("geometry").then(c => {
                a.geometry = c;
                a.Gg = new VP((d, e, f) => d.get("geodesic") && a.geometry != null ? new P1a(d, e, f, a.geometry.spherical.computeHeading, a.geometry.spherical.computeOffset,
                    a.geometry.spherical.computeOffsetOrigin) : new Q1a(d, e, f), a.map, b);
                QP(a.map, a.Gg);
                a.Fh.Mg.forEach(d => {
                    R1a(a, d)
                })
            })
        },
        R1a = function(a, b) {
            a.Gg && a.Eg && a.Fg && a.geometry && a.ah && (RP(b, a.Gg), U0a(b, a.map, a.Eg, a.geometry.spherical.interpolate, a.ah), C0a(b, a.Fh, a.Fg, a.Fh.Kg), b.Kg || (_.Sk(a.map, b.hm ? "Op" : "Ol"), _.Q(a.map, b.hm ? 147752 : 147753)))
        },
        O1a = function(a, b) {
            b = new iQ(b);
            b.bindTo("panes", a.Fh);
            b.bindTo("projection", a.map);
            b.bindTo("zoom", a.Fh);
            b.bindTo("projectionCenterQ", a.Fh);
            b.bindTo("offset", a.Fh);
            _.dk(a.map,
                "click", b, b.Nj);
            return b
        },
        U1a = function(a) {
            const b = a.getVisible() != 0 ? a.getMap() : null;
            a.Jg !== b && (a.Jg && a.Jg.__gm.Mg.remove(a), b && (b.__gm.Mg.Eg || new T1a(b), _.Cm(b.__gm.Mg, a)), a.Jg = b)
        },
        V1a = function(a, b, c) {
            if (!a || !b || !c) return null;
            var d = c.lat();
            const e = c.lng();
            c = b & 1 ? d : a.fi.lo;
            let f = b & 2 ? e : a.Jh.lo;
            d = b & 4 ? d : a.fi.hi;
            let g = b & 8 ? e : a.Jh.hi;
            if (c > d) {
                var h = c;
                c = d;
                d = h
            }
            b & 10 && !a.Jh.contains(e) && (h = _.Ek(e, a.Jh.lo), a = _.Ek(a.Jh.hi, e), b & 2 ? h > a : a > h) && (b = f, f = g, g = b);
            return _.Lk(c, f, d, g)
        },
        jQ = function(a) {
            a && (a.unbindAll(), a.release(),
                _.ak(a))
        },
        b2a = function(a, b, c) {
            let d;
            d = c ? new MP(a.Fg, W1a, X1a, !1, b.overlayMouseTarget, a.Mg, a.get("map"), a.Lg) : new MP(a.Jg, Y1a, Z1a, !0, b.overlayMouseTarget, a.Mg, a.get("map"), a.Lg);
            d.bindTo("projection", a);
            d.bindTo("zoom", a);
            d.bindTo("projectionCenterQ", a);
            d.bindTo("panningEnabled", a);
            d.bindTo("mapPixelBounds", a);
            d.bindTo("color", a);
            d.bindTo("zIndex", a);
            d.bindTo("offset", a);
            const e = c ? $1a : a2a;
            let f;
            _.Vj(d, "dragstart", g => {
                f = a.get("bounds");
                a.Eg.bindTo("freeVertexPosition", d);
                a.Eg.set("freeControlPoint",
                    e[g]);
                a.Eg.set("map", a.get("map"))
            });
            _.Vj(d, "dragend", (g, h, l) => {
                a.Eg.set("map", null);
                _.hk(a, "toolbar", {
                    show: !0,
                    Cw: l,
                    action: () => {
                        a.set("bounds", f)
                    }
                })
            });
            _.gk(d, "dragstart", a);
            _.gk(d, "dragend", a);
            _.gk(d, "panbynow", a);
            return d
        },
        c2a = function(a, b, c) {
            a.Gg || (a.Gg = !0, b = V1a(a.get("bounds"), b, c), a.set("bounds", b), a.Gg = !1)
        },
        f2a = function(a, b, c) {
            function d() {
                a.get("editable") ? d2a(a, b, c) : (e2a(a), _.hk(a, "toolbar", {
                    show: !1
                }))
            }
            a.editable_changed = d;
            d()
        },
        d2a = function(a, b, c) {
            if (!a.Gg) {
                var d = new _.iK(a, !0);
                a.Jg = d;
                var e =
                    new g2a;
                e.bindTo("strokeColor", d);
                e.bindTo("strokeOpacity", d, "ghostStrokeOpacity");
                e.bindTo("strokeWeight", d);
                e.bindTo("bounds", a);
                e.bindTo("zIndex", a);
                a.Ig = e;
                var f = b.__gm;
                a.Eg = FP(f);
                var g = _.UI(f, a),
                    h = _.ru() ? 9 : 0,
                    l = new OP;
                c = new h2a(e, function(n, p, r) {
                    return new PP(n, a.Eg, h, p, g, l, r)
                }, c);
                c.set("map", b);
                c.bindTo("bounds", a);
                c.bindTo("panes", f);
                c.bindTo("projection", b);
                c.bindTo("zoom", f);
                c.bindTo("projectionCenterQ", f);
                c.bindTo("panningEnabled", b, "draggable");
                c.bindTo("mapPixelBounds", f, "pixelBounds");
                c.bindTo("offset", f);
                c.bindTo("color", d, "strokeColor");
                c.bindTo("zIndex", a);
                c.bindTo("suppressGhostControlPoints", a);
                a.Gg = c;
                _.gk(c, "panbynow", f);
                _.gk(c, "toolbar", a)
            }
        },
        e2a = function(a) {
            const b = a.Gg;
            b && (b.unbindAll(), b.set("map", null), _.ak(b), delete a.Gg, a.Eg ? .unbindAll(), a.Eg ? .release(), delete a.Eg, a.Ig ? .unbindAll(), delete a.Ig, a.Jg ? .release(), delete a.Jg)
        },
        k2a = function(a, b) {
            a.Fg = new VP((c, d, e) => new i2a(c, d, e), a.Eg, b);
            QP(a.Eg, a.Fg);
            a.Fh.Pg.forEach(c => {
                j2a(a, c)
            })
        },
        j2a = function(a, b) {
            if (a.Fg && a.ah) {
                var c =
                    b.Kg = new l2a(b);
                c.set("map", a.Eg);
                c.bindTo("bounds", b);
                c.bindTo("capturing", b);
                c.bindTo("cursor", b);
                c.bindTo("clickable", b);
                c.bindTo("fillColor", b);
                c.bindTo("fillOpacity", b);
                c.bindTo("strokeColor", b);
                c.bindTo("strokeOpacity", b);
                c.bindTo("strokeWeight", b);
                c.bindTo("strokePosition", b);
                c.bindTo("suppressUndo", b);
                c.bindTo("zIndex", b);
                var d = [];
                b.oh = d;
                WP.forEach(e => {
                    d.push(_.gk(c, e, b))
                });
                d.push(_.gk(b, "toolbar", c));
                RP(b, a.Fg);
                f2a(b, a.Eg, a.ah);
                _.Sk(a.Eg, "Or");
                _.Q(a.Eg, 147755)
            }
        },
        n2a = function(a) {
            const b = a.getVisible() !=
                0 ? a.getMap() : null;
            a.Fg !== b && (a.Fg && a.Fg.__gm.Pg.remove(a), b && (b.__gm.Pg.Eg || new m2a(b), _.Cm(b.__gm.Pg, a)), a.Fg = b)
        },
        WP = "click dblclick mousedown mousemove mouseout mouseover mouseup rightclick contextmenu".split(" "),
        $_a = {};
    var XP = class {
        constructor(a) {
            this.y = this.x = 0;
            this.z = a
        }
        equals(a) {
            return this.x === a.x && this.y === a.y && this.z === a.z
        }
    };
    var MP = class extends _.kk {
        constructor(a, b, c, d, e, f, g, h) {
            super();
            this.Og = a;
            this.Kg = b;
            this.Jg = c;
            this.Gg = d;
            this.Ng = f;
            this.map = g;
            this.ah = h;
            this.Eg = [];
            this.container = _.nu("div", e, _.ml);
            a.forEach(this.Ig.bind(this));
            const l = () => {
                this.Gg || _.hk(this, "toolbar", {
                    show: !1
                })
            };
            this.Lg = [_.Vj(a, "insert_at", n => {
                this.Ig(a.getAt(n), n);
                e0a(this, n + 1);
                l()
            }), _.Vj(a, "remove_at", n => {
                const p = this.Eg[n];
                this.Eg.splice(n, 1);
                this.Mg(p);
                e0a(this, n);
                l()
            }), _.Vj(a, "set_at", n => {
                this.Eg[n].zo.set("latLngPosition", a.getAt(n));
                l()
            })]
        }
        release() {
            this.Lg.forEach(_.Xj);
            this.Lg.length = 0;
            this.Eg.forEach(this.Mg.bind(this));
            this.Eg.length = 0;
            _.ak(this.container);
            _.Ai(this.container)
        }
        zIndex_changed() {
            let a = this.get("zIndex") || 0;
            this.Gg && --a;
            _.ou(this.container, a)
        }
        Ig(a, b) {
            const c = {};
            c.index = b;
            this.Eg.splice(b, 0, c);
            c.constraint = this.Jg[b % this.Jg.length];
            const d = this.Ng(this.container, this.Kg[b % this.Kg.length], this.Gg);
            d.bindTo("color", this);
            d.bindTo("panningEnabled", this);
            d.bindTo("mapPixelBounds", this);
            c.zo = d;
            b = [_.gk(d, "panbynow", this)];
            const e = a && this.map ? _.bu(a, this.map.getProjection()) :
                null;
            d.set("latLngPosition", a);
            c.Cv = !0;
            c.ip = null;
            c.ft = null;
            a = new _.cK(this.ah.tj, {
                Yn: f => {
                    f ? d.set("position", new _.Zk(f.hh, f.jh)) : d.set("position", null)
                },
                rs: () => {}
            }, e, this.ah, () => {
                if (this.map) {
                    var f = c.Hj.getPosition();
                    f && (f = _.Nl(f, this.map.getProjection()), c.Cv = !1, c.zo.set("latLngPosition", f), c.Cv = !0)
                }
            });
            this.ah.Li(a);
            c.Hj = a;
            b.push(_.Vj(d, "latlngposition_changed", () => {
                if (c.Cv && this.map) {
                    var f = c.zo.get("latLngPosition");
                    f ? c.Hj.setPosition(_.bu(f, this.map.get("projection"))) : c.Hj.setPosition(null)
                }
            }));
            b.push(_.Vj(d, "dragstart", () => {
                this.lm(c)
            }));
            b.push(_.Vj(d, "dragend", () => {
                this.Jm(c)
            }));
            b.push(_.Vj(d, "deltaclientposition_changed", () => {
                this.kn(c)
            }));
            b.push(_.Vj(d, "dragstart", f => {
                this.bindTo("freeVertexPosition", d, "latLngPosition");
                KP(this, c, "dragstart", f)
            }));
            b.push(_.Vj(d, "dragend", f => {
                this.Og.setAt(c.index, d.get("latLngPosition"));
                KP(this, c, "dragend", f)
            }));
            for (const f of WP) b.push(_.Vj(d, f, g => {
                KP(this, c, f, g)
            }));
            c.oh = b
        }
        lm(a) {
            a.ip = a.Hj.en();
            a.ip && _.cJ(a.Hj, a.ip)
        }
        Jm(a) {
            var b = a.Hj.getPosition();
            if (b &&
                this.map && (b = _.Nl(b, this.map.get("projection")), b = f0a(this, a, b)) && (b = _.bu(b, this.map.get("projection")), b = a.Hj.en(b), b = g0a(a, b)) && (b = a.Hj.getPosition(b))) {
                const c = _.Nl(b, this.map.get("projection"));
                a.Cv = !1;
                a.zo.set("latLngPosition", c);
                a.Cv = !0;
                a.Hj.setPosition(b)
            }
            a.ip = null;
            a.ft = null
        }
        kn(a) {
            var b = a.zo.get("deltaClientPosition");
            if (b && (a.ip || a.ft) && this.map) {
                var c = a.ft || a.ip;
                a.ft = {
                    clientX: c.clientX + b.clientX,
                    clientY: c.clientY + b.clientY
                };
                b = this.ah.Ll(a.ft);
                b = _.Nl(b, this.map.get("projection"));
                c = a.ft;
                var d =
                    f0a(this, a, b);
                d && !d.equals(b) && (b = _.bu(d, this.map.get("projection")), c = a.Hj.en(b));
                (c = g0a(a, c)) && _.cJ(a.Hj, c)
            }
        }
        Mg(a) {
            a.zo.unbindAll();
            a.zo.release();
            a.Hj && this.ah.xl(a.Hj);
            a.oh.forEach(_.Xj);
            a.oh.length = 0
        }
    };
    var q0a = class extends _.kk {
            center_changed() {
                LP(this)
            }
            radius_changed() {
                LP(this)
            }
            planetRadius_changed() {
                LP(this)
            }
            constructor(a, b, c) {
                super();
                this.Eg = a;
                this.ah = c;
                this.Jg = null;
                this.Ig = this.Gg = !1;
                this.Kg = b;
                this.Fg = new _.Wl;
                _.dk(this.Fg, "set_at", this, this.Lg)
            }
            map_changed() {
                this.get("map") || (this.Eg.set("map", null), h0a(this), _.ak(this.Fg))
            }
            panes_changed() {
                h0a(this);
                this.Jg = k0a(this)
            }
            Lg(a) {
                if (!this.Ig) {
                    var b = this.Fg.getAt(a);
                    if (a === 0) _.xF(this, function() {
                        this.Gg = !0;
                        this.set("center", b);
                        this.Gg = !1
                    }, 0);
                    else {
                        const c =
                            _.zE(this.get("center"), b, this.get("planetRadius"));
                        _.xF(this, function() {
                            this.Gg = !0;
                            this.set("radius", c);
                            this.Gg = !1
                        }, 0)
                    }
                }
            }
        },
        i0a = ["pointer", "row-resize", "row-resize", "col-resize", "col-resize"],
        j0a = [0, 2, 2, 1, 1];
    var OP = class {
        construct(a, b, c, d, e) {
            a = _.nu("div", a, new _.Zk(b, b), new _.al(c, c));
            a.style.borderWidth = _.gj(d);
            a.style.borderStyle = "solid";
            a.style.borderRadius = _.gj(Math.ceil(c / 2 + d));
            _.FF(a, e)
        }
        setFillColor(a, b) {
            a.firstChild.style.backgroundColor = b
        }
    };
    var p0a = class extends _.kk {
        constructor() {
            super();
            const a = new _.Oo({
                clickable: !1,
                fillOpacity: 0
            });
            a.bindTo("map", this);
            a.bindTo("strokeColor", this);
            a.bindTo("strokeOpacity", this);
            a.bindTo("strokeWeight", this);
            var b = ["center", "freeVertexPosition", "freeVertexIsCenter"],
                c = new _.tJ(b, "return", l0a);
            _.BF(c, b, this);
            a.bindTo("center", c, "return");
            b = ["center", "radius", "planetRadius", "freeVertexPosition", "freeVertexIsCenter"];
            c = new _.tJ(b, "return", (d, e, f, g, h) => !h && g && d ? _.zE(g, d, f) : e);
            _.BF(c, b, this);
            a.bindTo("radius",
                c, "return");
            this.Eg = _.uJ();
            this.Eg.bindTo("zIndex", this);
            a.bindTo("zIndex", this.Eg, "ghostZIndex")
        }
    };
    var PP = class extends _.kk {
        constructor(a, b, c, d, e, f, g) {
            super();
            this.Og = e;
            this.Fg = !1;
            a = _.nu("div", a);
            a.style.display = "none";
            e = 9 + 2 * (1 + c);
            _.Pm(a, new _.al(e, e));
            f.construct(a, c, 9, 1, g ? .5 : 1);
            g = new _.hJa(a, !0);
            g.bindTo("containerPixelBounds", this, "mapPixelBounds");
            g.bindTo("panningEnabled", this);
            g.set("draggableCursor", d);
            g.bindTo("position", this);
            g.bindTo("deltaClientPosition", this);
            this.Eg = a;
            this.Lg = b;
            this.Mg = c;
            this.Gg = g;
            this.Ng = f;
            this.Ig = [_.Vj(g, "dragstart", () => {
                b.set("draggableCursor", d);
                b.set("active", !0)
            }), _.Vj(g, "dragend", () => {
                b.set("active", !1)
            }), _.gk(g, "panbynow", this), _.gk(g, "dragstart", this), _.gk(g, "dragend", this)];
            this.Jg = _.Qv(a, {
                tk: h => {
                    _.Av(h);
                    _.hk(this, "mousedown", h.Eg)
                },
                Fq: h => {
                    _.Bv(h);
                    _.hk(this, "mousemove", h.Eg)
                },
                ul: h => {
                    _.Bv(h);
                    _.hk(this, "mousemove", h.Eg)
                },
                Gk: h => {
                    _.Cv(h);
                    _.hk(this, "mouseup", h.Eg)
                },
                Ql: ({
                    event: h,
                    Aq: l
                }) => {
                    _.Vt(h.Eg);
                    h.button === 3 ? l || _.hk(this, "rightclick", h.Eg) : l ? _.hk(this, "dblclick", h.Eg) : _.hk(this, "click", h.Eg)
                },
                Kt: h => {
                    _.Dv(h);
                    _.hk(this, "contextmenu", h.Eg)
                }
            });
            this.Kg = new _.Mz(a,
                a, {
                    ks: h => {
                        this.Fg = !1;
                        NP(this);
                        _.Sj(h);
                        _.Tj(h);
                        _.hk(this, "mouseout", h)
                    },
                    ls: h => {
                        this.Fg = !0;
                        NP(this);
                        _.Sj(h);
                        _.Tj(h);
                        _.hk(this, "mouseover", h)
                    }
                })
        }
        release() {
            _.Ai(this.Eg);
            this.Ig.forEach(_.Xj);
            this.Ig.length = 0;
            this.Jg.remove();
            this.Kg.remove();
            this.Gg.unbindAll();
            this.Gg.release();
            this.Lg.set("active", !1)
        }
        position_changed() {
            const a = this.get("position");
            if (a) {
                this.Eg.style.display = "block";
                var b = 5 + this.Mg;
                _.mu(this.Eg, new _.Zk(a.x - b, a.y - b))
            } else this.Eg.style.display = "none"
        }
        color_changed() {
            const a = this.get("color");
            this.Eg.firstChild.style.borderColor = a;
            NP(this)
        }
    };
    var u0a = class {
            constructor(a, b, c, d, e) {
                this.Gg = a;
                this.Fg = c;
                a = a.get("center");
                b = _.xc(c.fromDivPixelToLatLng(b));
                this.Ig = d(a, b);
                this.Eg = _.zE(b, a);
                this.computeOffsetOrigin = e
            }
            moveTo(a) {
                a = _.xc(this.Fg.fromDivPixelToLatLng(a));
                var b = this.computeOffsetOrigin(a, this.Eg, this.Ig);
                b || (b = _.zE(a, o2a) - this.Eg, a = _.zE(a, p2a) - this.Eg, b = Math.abs(b) < Math.abs(a) ? o2a : p2a);
                this.Gg.set("center", b)
            }
        },
        o2a = new _.Hj(90, 0),
        p2a = new _.Hj(-90, 0);
    var x0a = class extends _.kk {
        constructor(a) {
            super();
            this.Fg = [];
            const b = new _.Qq;
            this.poly = b;
            b.Eg = a;
            b.Kg = !0;
            b.bindTo("capturing", this);
            b.bindTo("cursor", this);
            b.bindTo("map", this);
            b.bindTo("strokeColor", this);
            b.bindTo("strokeOpacity", this);
            b.bindTo("strokeWeight", this);
            b.bindTo("strokePosition", this);
            b.bindTo("fillColor", this);
            b.bindTo("fillOpacity", this);
            b.bindTo("clickable", this);
            b.bindTo("zIndex", this);
            b.bindTo("suppressUndo", this);
            b.Qu = !0;
            const c = this.Fg;
            WP.forEach(d => {
                c.push(_.gk(b, d, this))
            });
            c.push(_.gk(this,
                "toolbar", b));
            this.Eg = new _.xm(() => {
                const d = this.poly;
                if (d) {
                    var e = this.get("radius"),
                        f = this.get("center");
                    _.$i(e) && f ? (e /= Number(this.get("planetRadius")), d.setPaths(s0a(f, e))) : d.setPaths([])
                }
            }, 0)
        }
        center_changed() {
            _.ym(this.Eg)
        }
        radius_changed() {
            _.ym(this.Eg)
        }
        planetRadius_changed() {
            _.ym(this.Eg)
        }
        release() {
            const a = this.Fg;
            for (let b = 0, c = a.length; b < c; ++b) _.Xj(a[b]);
            this.Fg = [];
            this.poly.unbindAll();
            this.poly = null
        }
    };
    var kQ = new _.al(30, 30),
        q2a = new _.Zk(kQ.width / 2, kQ.height / 2),
        VP = class extends _.kk {
            constructor(a, b, c) {
                super();
                this.Sg = a;
                this.Fg = this.Ig = this.Og = this.Mg = this.Eg = null;
                this.Ng = !1;
                this.Kg = b;
                this.Gg = new _.cK(c.tj, {
                    Yn: d => {
                        d && this.set("position", new _.Zk(d.hh, d.jh))
                    },
                    rs: () => {}
                }, null, c);
                c.Li(this.Gg);
                this.Jg = new _.aK((d, e) => {
                    _.hk(this, "panbynow", d, e)
                });
                a = new _.tJ(["waitingForQuiver", "dragging"], "active", (d, e) => d || e);
                a.bindTo("dragging", this, null, !0);
                a.bindTo("waitingForQuiver", this, null, !0);
                this.bindTo("active",
                    a, null, !0)
            }
            release() {
                this.Jg.release();
                this.Fg && this.Fg.forEach(_.Xj);
                this.Fg = null
            }
            Qg(a) {
                if (this.get("draggable") && this.Eg && (!a.domEvent || !_.ys(a.domEvent)) && (a.stop(), !this.get("dragging") && a.latLng)) {
                    this.Lg = a;
                    this.set("position", this.Ig.fromLatLngToDivPixel(a.latLng));
                    var b = _.bu(a.latLng, this.Kg.getProjection());
                    (b = this.Gg.en(b)) && _.cJ(this.Gg, b);
                    b = this.get("position");
                    this.set("dragging", !0);
                    this.set("waitingForQuiver", !1);
                    this.Og = this.Sg(this.Eg, b, this.Ig);
                    UP(this, "dragstart", a);
                    this.Ng = this.Eg.get("editable");
                    this.Eg.set("editable", !1);
                    this.set("storeEditable", !0)
                }
            }
            Rg(a) {
                this.get("dragging") && (this.Lg = a, a.latLng && (a = _.bu(a.latLng, this.Kg.getProjection()), (a = this.Gg.en(a)) && _.cJ(this.Gg, a)))
            }
            Pg(a) {
                if (this.get("dragging")) {
                    var b = this.Gg.getPosition();
                    if (b) {
                        var c = _.Nl(b, this.Kg.getProjection());
                        c = this.Ig.fromLatLngToDivPixel(c);
                        this.Lg = a;
                        this.set("position", c);
                        this.Gg.setPosition(b)
                    }
                    this.set("storeEditable", !1);
                    this.Eg.set("editable", this.Ng);
                    UP(this, "dragend", a);
                    this.set("dragging", !1)
                }
            }
            position_changed() {
                const a =
                    this.get("position");
                a ? _.ZI(this.Jg, _.pHa(a, kQ, q2a)) : _.ZI(this.Jg, null);
                this.get("dragging") && (this.Og.moveTo(a), UP(this, "drag", this.Lg))
            }
            containerPixelBounds_changed() {
                _.aJ(this.Jg, this.get("containerPixelBounds"))
            }
            Tg() {
                this.get("dragging") || this.set("waitingForQuiver", !0)
            }
            Ug() {
                this.set("waitingForQuiver", !1)
            }
            active_changed() {
                TP(this)
            }
            panes_changed() {
                TP(this)
            }
            poly_changed() {
                TP(this)
            }
            projectionController_changed() {
                TP(this)
            }
            dragging_changed() {
                t0a(this)
            }
            panningEnabled_changed() {
                t0a(this)
            }
        };
    var y0a = class {
        constructor(a) {
            this.map = a;
            this.ah = this.Eg = null;
            this.Fh = a.__gm;
            this.Fh.Fg.then(({
                ah: b
            }) => {
                this.ah = b;
                w0a(this, b)
            });
            this.Fh.Og.Eg = b => {
                v0a(this, b)
            };
            this.Fh.Og.onRemove = b => {
                this.onRemove(b)
            }
        }
        onRemove(a) {
            if (this.ah) {
                var b = a.Kg;
                b.unbindAll();
                b.set("map", null);
                b.release();
                delete a.Kg;
                a.oh && a.oh.forEach(_.Xj);
                delete a.oh;
                SP(a);
                delete a.editable_changed;
                n0a(a)
            }
        }
    };
    var P1a = class {
        constructor(a, b, c, d, e, f) {
            this.poly = a;
            this.Ig = c;
            this.computeOffset = e;
            this.computeOffsetOrigin = f;
            const g = A0a(this);
            b = c.fromDivPixelToLatLng(b);
            this.Jg = _.zE(g, b);
            this.Kg = d(g, b);
            const h = [];
            this.Gg = h;
            a.get("latLngs").forEach(l => {
                const n = [];
                l.forEach(p => {
                    n.push({
                        heading: d(g, p),
                        distance: _.zE(p, g)
                    })
                });
                h.push(n)
            });
            this.Eg = g;
            this.Fg = b.lng() - g.lng()
        }
        moveTo(a) {
            a = this.Ig.fromDivPixelToLatLng(a);
            let b = this.computeOffsetOrigin(a, this.Jg, this.Kg);
            b ? Math.abs(b.lat()) > 89 && (b = new _.Hj(_.Ui(b.lat(), -89,
                89), b.lng())) : b = new _.Hj(this.Eg.lat(), a.lng() - this.Fg);
            this.poly.get("latLngs").forEach((c, d) => {
                for (let e = 0, f = c.getLength(); e < f; ++e) {
                    const g = this.computeOffset(b, this.Gg[d][e].distance, this.Gg[d][e].heading);
                    c.setAt(e, g)
                }
            });
            this.Eg = b;
            this.Fg = a.lng() - b.lng()
        }
    };
    var B0a = class extends _.kk {
        constructor() {
            super(...arguments);
            this.zIndex = Infinity
        }
        zs(a) {
            return a !== "dragstart" && a !== "drag" && a !== "dragend"
        }
        Is() {
            return this.get("active") ? this : null
        }
        handleEvent(a, b, c) {
            if (a === "mouseout") this.set("cursor", "");
            else if (a === "mouseover") {
                const d = this.get("draggableCursor");
                d && this.set("cursor", d)
            }
            _.hk(c, a, new _.Nz(b.latLng, b.domEvent))
        }
    };
    var E0a = {
            latLngs: 1,
            geodesic: 1,
            icons: 1
        },
        F0a = {
            strokeColor: 1,
            strokeOpacity: 1,
            strokePosition: 1,
            strokeWeight: 1,
            fillColor: 1,
            fillOpacity: 1,
            hitStrokeWeight: 1,
            zIndex: 1,
            clickable: 1,
            icons: 1
        },
        s2a = class extends _.kk {
            constructor(a, b) {
                var c = new r2a;
                super();
                this.Jg = a;
                this.Gg = b;
                this.Ig = c;
                this.Fg = {};
                this.Eg = {};
                this.timeout = 0;
                const d = this;
                this.Kg = function(e) {
                    H0a(d, this, e)
                };
                a.Eg = e => {
                    this.Gq(e)
                };
                a.onRemove = e => {
                    this.ms(e)
                }
            }
            projection_changed() {
                const a = this;
                a.Jg.forEach(b => {
                    if (b.get("icons")) {
                        const c = _.jk(b);
                        a.Eg[c] = b;
                        ZP(b)
                    }
                });
                G0a(a)
            }
            Gq(a) {
                var b = this.get("projection");
                b = a.Ig = {
                    style: I0a(this.Ig, a),
                    geometry: J0a(a, b)
                };
                K0a(this, a);
                a.changed = this.Kg;
                _.Cm(this.Gg, b)
            }
            ms(a) {
                const b = a.Ig;
                delete a.Ig;
                this.Gg.remove(b);
                delete a.changed;
                ZP(a);
                a = _.jk(a);
                delete this.Fg[a];
                delete this.Eg[a]
            }
        };
    var Q0a = class {
        constructor(a) {
            this.Eg = a;
            _.Vj(a, "set_at", b => {
                _.hk(this, "set_at", b);
                const c = a.getLength();
                b === 0 && c > 1 && _.hk(this, "set_at", c)
            });
            _.Vj(a, "insert_at", b => {
                _.hk(this, "insert_at", b);
                const c = a.getLength();
                c === 2 ? _.hk(this, "insert_at", 2) : b === 0 && c > 1 && _.hk(this, "set_at", c)
            });
            _.Vj(a, "remove_at", b => {
                _.hk(this, "remove_at", b);
                const c = a.getLength();
                c === 1 ? _.hk(this, "remove_at", 1) : b === 0 && c > 1 && _.hk(this, "set_at", c)
            })
        }
        getLength() {
            let a = this.Eg.getLength();
            a > 1 && ++a;
            return a
        }
        getAt(a) {
            this.Eg.getLength() === a &&
                a > 1 && (a = 0);
            return this.Eg.getAt(a)
        }
    };
    var R0a = class extends _.kk {
        constructor(a, b, c) {
            super();
            this.Eg = a;
            this.Fg = b;
            this.interpolate = c;
            this.oh = [_.dk(a, "set_at", this, this.Jg), _.dk(a, "insert_at", this, this.Gg), _.dk(a, "remove_at", this, this.Ig)];
            for (let d = 0, e = a.getLength(); d < e; ++d) this.Gg(d)
        }
        release() {
            this.oh.forEach(_.Xj)
        }
        geodesic_changed() {
            L0a(this)
        }
        projection_changed() {
            L0a(this)
        }
        Jg(a) {
            M0a(this, !1, a)
        }
        Gg(a) {
            M0a(this, !0, a)
        }
        Ig(a) {
            const b = this.get("projection");
            if (b) {
                var c = this.Eg,
                    d = this.Fg,
                    e = this.get("geodesic");
                a < c.getLength() ? (a > 0 && d.setAt(a -
                    1, $P(c.getAt(a - 1), c.getAt(a), e, b, this.interpolate)), d.removeAt(a)) : a > 0 && d.removeAt(a - 1)
            }
        }
    };
    var O0a = class extends _.Nz {
        constructor(a, b, c, d, e) {
            super(a, b);
            c !== void 0 && (this.path = c);
            d !== void 0 && (this.vertex = d);
            e !== void 0 && (this.edge = e)
        }
    };
    var V0a = class extends _.kk {
        panes_changed() {
            dQ(this)
        }
        paths_changed() {
            dQ(this)
        }
        suppressGhostControlPoints_changed() {
            dQ(this)
        }
        constructor(a, b, c, d, e) {
            super();
            this.Ol = a;
            this.hm = b;
            this.Ig = c;
            this.interpolate = d;
            this.ah = e;
            this.Fg = [];
            this.Eg = [];
            this.Gg = []
        }
        map_changed() {
            this.get("map") || (this.Ol.set("map", null), N0a(this))
        }
    };
    var iQ = class extends _.kk {
            constructor(a) {
                super();
                this.Fg = this.Ig = null;
                this.Eg = document.createElement("button");
                this.Eg.type = "button";
                this.Eg.style.background = "transparent";
                this.Eg.style.border = "none";
                this.Eg.style.margin = "0";
                this.Eg.style.padding = "0";
                this.Eg.title = "Undo last edit";
                this.Eg.setAttribute("aria-label", "Undo last edit");
                const b = document.createElement("span");
                b.style.display = "inline-block";
                this.Eg.appendChild(b);
                _.ou(this.Eg, -202);
                this.Eg.style.cursor = "pointer";
                this.Eg.style.display = "none";
                this.Mg = _.ZH(t2a, b, _.ml, u2a);
                this.Mg.style.position = "relative";
                _.dk(this, "toolbar", this, this.Kg);
                this.Jg = new _.cK(a.tj, {
                    Yn: c => {
                        c && (c = new _.Zk(c.hh, c.jh), _.mu(this.Eg, new _.Zk(c.x + v2a.x, c.y + v2a.y)))
                    },
                    rs: () => {}
                }, null, a);
                a.Li(this.Jg);
                _.Qv(this.Eg, {
                    tk: c => {
                        _.Av(c);
                        this.Gg(w2a)
                    },
                    Fq: c => {
                        _.Bv(c)
                    },
                    ul: c => {
                        _.Bv(c)
                    },
                    Gk: c => {
                        _.Cv(c)
                    },
                    Ql: ({
                        event: c
                    }) => {
                        _.Vt(c.Eg);
                        c = c.Eg;
                        _.Sj(c);
                        _.Tj(c);
                        this.Ig();
                        this.Nj()
                    },
                    lq: {
                        lm: (c, d) => {
                            _.DCa(d)
                        },
                        kn: () => {},
                        Jm: () => {}
                    }
                });
                new _.Mz(this.Eg, this.Eg, {
                    ks: this.Gg.bind(this, _.ml),
                    ls: this.Gg.bind(this,
                        x2a)
                })
            }
            panes_changed() {
                const a = this.get("panes");
                a ? a.floatPane.appendChild(this.Eg) : this.Eg.parentNode && _.Ai(this.Eg)
            }
            Nj() {
                this.Eg.style.display = "none";
                this.Ig = null;
                W0a(this);
                this.Fg = null
            }
            Kg(a) {
                a.show && a.poly ? a.poly.get("suppressUndo") ? this.Nj() : (a.Cw && this.Jg.setPosition(a.Cw), X0a(this, a.action || null, a.poly)) : a.poly === this.Fg && this.Nj()
            }
            Gg(a) {
                _.$H(this.Mg, u2a, a)
            }
        },
        t2a = _.wo("undo_poly"),
        u2a = new _.al(30, 27),
        x2a = new _.Zk(30, 0),
        w2a = new _.Zk(60, 0),
        v2a = new _.Zk(10, -11);
    iQ.prototype.changed = iQ.prototype.Nj;
    var N1a = class {
            constructor(a, b, c, d) {
                this.Fg = b;
                this.Gg = d;
                this.Eg = null;
                this.Ek = !1;
                this.zIndex = 30;
                this.Ig = new _.gK(a.Fg, c, d)
            }
            zs(a, b) {
                if (a !== "dragstart" && a !== "drag" && a !== "dragend") return !0;
                a = (a = (b.Eg || b).get("map")) && a.get("draggable") !== !1 && a.get("gestureHandling") !== "none";
                return !!this.Eg || !a
            }
            Is(a, b) {
                var c = this.Gg.get();
                if (!c) return null;
                c = c.Bh.size;
                const d = _.dJ(this.Ig, a.oi, y2a);
                if (!d) return null;
                const e = new _.Zk(d.pt.sh * c.hh, d.pt.th * c.jh),
                    f = new _.Zk(d.sn.sh * c.hh, d.sn.th * c.jh),
                    g = [];
                var h = d.dk.Ji;
                for (var l of Object.values(h)) g.push(l);
                g.reverse();
                g.sort((r, u) => u.zIndex - r.zIndex || 0);
                l = null;
                h = b ? 15 : 0;
                for (let r = 0, u = g.length; r < u; ++r) {
                    var n = g[r];
                    const w = n.rB;
                    if (!w.clickable) continue;
                    const x = n.BF.Pz;
                    var p = w.MJ / 2 + h;
                    n = Y0a(n.paths);
                    if (p = U_a(e.x, e.y, p, n)) {
                        l = x;
                        b = this.Gg.get();
                        b = _.qx(b && b.Bh, {
                            sh: (p[0] + f.x) / c.hh,
                            th: (p[1] + f.y) / c.jh,
                            xh: d.sn.xh
                        });
                        a.oi = new _.Zk(b.Eg, b.Fg);
                        a.latLng = _.Nl(b);
                        break
                    }
                    if (w.hm && !b && V_a(e.x, e.y, n)) {
                        l = x;
                        break
                    }
                }
                return l
            }
            handleEvent(a, b, c) {
                !this.Eg || a !== "mousedown" && a !== "dragstart" && a !== "drag" || (this.Ek = !0);
                this.Eg && !this.Ek &&
                    (b.oi = this.Eg.oi, b.latLng = this.Eg.latLng);
                var d = c.Eg || c;
                !this.Eg && a === "mousedown" && d.get("draggable") && (this.Eg = b, c.set("capturing", !0));
                d = c;
                if (this.Eg) {
                    if (this.Ek && a === "dragend" || !this.Ek && a === "mouseup") this.Ek = !1, this.Eg = null, c.set("capturing", !1);
                    a !== "dragstart" && a !== "drag" && a !== "dragend" || !c.Eg || (d = c.Eg);
                    a === "dragstart" && (a = "movestart");
                    a === "drag" && (a = "move");
                    a === "dragend" && (a = "moveend")
                } else {
                    if (a === "dragstart" || a === "dragend") return;
                    a === "drag" && (a = "mousemove")
                }
                a === "mouseout" ? this.Fg.set("cursor",
                    "") : a === "mousemove" && (c = c.get && c.get("cursor"), c === void 0 && (c = "pointer"), this.Fg.set("cursor", c));
                _.hk(d, a, new O0a(b.latLng, b.domEvent))
            }
        },
        y2a = new _.Zk(.5, .5);
    var y1a = () => [],
        e1a = () => {};
    y1a = a => {
        const b = [],
            c = a.length - 2;
        let d;
        for (let l = 2; l < c; l <<= 1) {
            var e = a[0],
                f = a[1];
            const n = Math.ceil(c / (2 * l)),
                p = Array(n);
            let r = 0;
            for (let u = 0, w = a.length - 1 - l; u < w;) {
                u += l;
                var g = a[u],
                    h = a[u + 1];
                u += l;
                u > a.length - 2 && (u = a.length - 2);
                const x = a[u],
                    y = a[u + 1],
                    B = g - e,
                    D = h - f;
                e = x - e;
                const G = y - f,
                    F = B * e + D * G;
                f = e * e + G * G;
                F >= f ? (g = x - g, h = y - h, h = g * g + h * h) : F <= 0 ? h = B * B + D * D : (h = B * G - D * e, h *= h, h /= f + 1E-16);
                h = Math.sqrt(h);
                d && (h += Math.max(d[2 * r], d[2 * r + 1] || 0));
                p[r++] = h;
                e = x;
                f = y
            }
            r < n && (p[r] = d ? d[2 * r] : 0);
            d = p;
            b.push(p)
        }
        return b
    };
    e1a = (a, b, c, d) => {
        --b;
        if (!(b < 0)) {
            var e = a.length,
                f = 0;
            for (d(0); f < b;) {
                const g = 1 << e,
                    h = e ? a[e - 1][f / g] : 0;
                let l = f + g;
                l >= b && (l = b);
                e && c(f, l, h) ? --e : (d(l), f = l, f & g || ++e)
            }
        }
    };
    var z2a = class {
        constructor(a, b, c, d) {
            this.zoom = b;
            this.Bh = d;
            d = _.GE(this.Bh, {
                sh: a.x,
                th: a.y,
                xh: b
            }, 16 / d.size.hh);
            d = _.Zl(d.min.Eg, d.min.Fg, d.max.Eg, d.max.Fg);
            this.projection = _.Ml(c);
            var e = d,
                f = new _.gm(e.minX, e.minY);
            e = new _.gm(e.maxX, e.maxY);
            d = _.Nl(f, c, !0);
            var g = _.Nl(e, c, !0);
            e = Math.min(d.lat(), g.lat());
            f = Math.max(d.lat(), g.lat());
            var h = Math.min(d.lng(), g.lng());
            g = Math.max(d.lng(), g.lng());
            d = (h + g) / 2;
            const l = _.Vi(d, -180, 180);
            h += l - d;
            g += l - d;
            d = _.Zl(e, h, f, g);
            e = new _.Hj(e, h, !0);
            h = new _.Hj(f, g, !0);
            f = _.bu(e, c);
            f =
                new _.Zk(f.Eg, f.Fg);
            e = _.bu(h, c);
            e = new _.Yl([f, new _.Zk(e.Eg, e.Fg)]);
            this.Eg = d;
            this.Gg = e;
            this.sn = a;
            a = 1 << b;
            b = this.projection;
            c = .5 / a;
            d = this.Gg;
            this.Ig = Math.min(b0a(b, c, new _.Zk(d.minX, d.minY)), b0a(b, c, new _.Zk(d.maxX, d.maxY)));
            this.Jg = f1a(this.Eg, this.Ig, this.projection);
            this.Fg = b1a(a)
        }
        getBounds() {
            return this.Eg
        }
    };
    var A2a = class extends _.qo {
        constructor(a, b, c) {
            super();
            this.tiles = a;
            this.Ig = Math.min(2, _.vo());
            this.Jg = b;
            this.Fg = c || _.Zz
        }
        Eg() {
            return {
                Bh: this.Fg,
                rl: 2,
                Pk: this.Gg.bind(this)
            }
        }
        Gg(a, b = {}) {
            const c = document.createElement("div");
            var d = this.Fg.size;
            c.style.width = `${d.hh}px`;
            c.style.height = `${d.jh}px`;
            const e = new _.Zk(a.sh, a.th);
            d = this.get("projection");
            const f = new z2a(e, a.xh, d, this.Fg),
                g = f.getBounds(),
                h = this.Jg(this.Ig, c);
            let l = !1,
                n;
            return {
                Ii: () => c,
                gm: () => l,
                loaded: new Promise(p => {
                    n = {
                        bounds: g,
                        mi: e,
                        div: c,
                        sB: h,
                        Ji: {},
                        tl: () => {
                            l = !0;
                            p(void 0)
                        },
                        LM: f,
                        zoom: a.xh
                    };
                    _.Cm(this.tiles, n)
                }),
                release: () => {
                    c.textContent = "";
                    h.release();
                    this.tiles.remove(n);
                    b.Xi && b.Xi()
                }
            }
        }
    };
    var r1a = class {
        constructor(a, b, c, d, e) {
            this.kt = a;
            this.container = b;
            this.Ig = e;
            this.Fg = this.Eg = null;
            this.Ji = {};
            this.Gg = 0;
            this.tileSize = c.size;
            this.Jg = d
        }
        release() {
            p1a(this)
        }
    };
    var B2a = class {
        constructor(a, b) {
            this.Bh = a;
            this.kt = b;
            this.Eg = null
        }
    };
    var C2a = class {
        constructor(a, b, c, d) {
            this.Eg = b;
            this.Fg = d;
            a.Eg = e => {
                u1a(this, e)
            };
            a.onRemove = e => {
                v1a(this, e)
            };
            c.Eg = e => {
                w1a(this, e)
            };
            c.onRemove = e => {
                x1a(this, e)
            };
            Object.values(a.Fg).forEach(e => {
                u1a(this, e)
            });
            Object.values(c.Fg).forEach(e => {
                w1a(this, e)
            })
        }
    };
    var Q1a = class {
        constructor(a, b, c) {
            this.poly = a;
            this.Fg = c;
            this.Gg = c.fromDivPixelToLatLng(b);
            this.Eg = [];
            a.get("latLngs").forEach(d => {
                this.Eg.push(d.getArray().slice(0))
            })
        }
        moveTo(a) {
            const b = this.poly.get("latLngs"),
                c = this.Fg;
            a = c.fromDivPixelToLatLng(a);
            a = BP(c, a);
            const d = BP(c, this.Gg),
                e = new _.gm(d.Eg - a.Eg, d.Fg - a.Fg);
            this.Eg.forEach((f, g) => {
                const h = b.getAt(g);
                f.forEach((l, n) => {
                    l = BP(c, l);
                    h.setAt(n, CP(c, new _.gm(l.Eg - e.Eg, l.Fg - e.Fg)))
                })
            })
        }
    };
    var H1a = new XP(1),
        gQ = new XP(0),
        hQ = new XP(0);
    var L1a = {
            value: 100,
            unit: "%"
        },
        M1a = {
            value: 0,
            unit: "px"
        };
    var r2a = class {
        constructor() {
            var a = _.CHa();
            this.Gg = _.mJa;
            this.Eg = _.nJa;
            this.Fg = a
        }
    };
    var T1a = class {
        constructor(a) {
            this.map = a;
            this.ah = this.Fg = this.Eg = this.Gg = this.geometry = null;
            this.Fh = a.__gm;
            const b = new _.Bm;
            (new s2a(this.Fh.Mg, b)).bindTo("projection", a);
            var c = _.Zl(-100, -200, 100, 200);
            const d = new _.$J(c);
            c = new _.$J(c);
            this.tiles = new _.Bm;
            new C2a(b, d, this.tiles, c);
            const e = _.iu(a.getDiv());
            let f = void 0,
                g = null;
            this.Ig = new _.hl(null);
            _.eJ(a, this.Ig, "overlayLayer", 30);
            this.Fh.Fg.then(h => {
                this.ah = h.ah;
                S1a(this, h.ah);
                _.Bs(h.sr, l => {
                    if (l && f !== l.Bh) {
                        g && g.unbindAll();
                        f = l.Bh;
                        var n = new B2a(f, e);
                        g = new A2a(this.tiles, (...p) => s1a(n, ...p), f);
                        g.bindTo("projection", a);
                        this.Ig.set(g.Eg())
                    }
                })
            });
            _.Vj(this.Fh.Mg, "insert", h => {
                R1a(this, h)
            });
            _.Vj(this.Fh.Mg, "remove", h => {
                this.onRemove(h)
            })
        }
        onRemove(a) {
            if (this.Eg && this.ah) {
                SP(a);
                var b = this.Eg;
                delete a.editable_changed;
                T0a(a);
                _.hk(b, "toolbar", {
                    show: !1,
                    poly: a
                });
                a.Mg && (_.Xj(a.Mg), delete a.Mg);
                a.set("capturing", !1);
                delete a.capturing_changed
            }
        }
    };
    var g2a = class extends _.kk {
        constructor() {
            super();
            const a = new _.Sq({
                clickable: !1,
                fillOpacity: 0
            });
            a.bindTo("map", this);
            a.bindTo("strokeColor", this);
            a.bindTo("strokeOpacity", this);
            a.bindTo("strokeWeight", this);
            const b = new _.tJ(["bounds", "freeControlPoint", "freeVertexPosition"], "return", V1a);
            b.bindTo("bounds", this);
            b.bindTo("freeControlPoint", this);
            b.bindTo("freeVertexPosition", this);
            a.bindTo("bounds", b, "return");
            this.Eg = _.uJ();
            this.Eg.bindTo("zIndex", this);
            a.bindTo("zIndex", this.Eg, "ghostZIndex")
        }
    };
    var $1a = [12, 6, 9, 3],
        a2a = [1, 2, 4, 8],
        W1a = ["ne-resize", "nw-resize", "se-resize", "sw-resize"],
        Y1a = ["row-resize", "col-resize"],
        X1a = [0],
        Z1a = [2, 1],
        h2a = class extends _.kk {
            constructor(a, b, c) {
                super();
                this.Eg = a;
                this.Ig = this.Kg = null;
                this.Gg = !1;
                this.Mg = b;
                this.Fg = new _.Wl;
                _.dk(this.Fg, "set_at", this, this.Ng);
                this.Jg = new _.Wl;
                _.dk(this.Jg, "set_at", this, this.Og);
                this.Lg = c
            }
            map_changed() {
                this.get("map") || (this.Eg.set("map", null), jQ(this.Kg), this.get("suppressGhostControlPoints") || jQ(this.Ig), _.ak(this.Fg))
            }
            bounds_changed() {
                var a =
                    this.Fg;
                const b = this.Jg,
                    c = this.get("bounds");
                if (c) {
                    this.Gg = !0;
                    a.setAt(0, c.getNorthEast());
                    a.setAt(1, _.As(c));
                    a.setAt(2, _.zs(c));
                    a.setAt(3, c.getSouthWest());
                    a = c.fi.center();
                    var d = c.Jh.center();
                    b.setAt(0, new _.Hj(c.fi.lo, d));
                    b.setAt(1, new _.Hj(a, c.Jh.lo));
                    b.setAt(2, new _.Hj(c.fi.hi, d));
                    b.setAt(3, new _.Hj(a, c.Jh.hi));
                    this.Gg = !1;
                    _.hk(this, "toolbar", {
                        show: !1
                    })
                } else a.clear(), b.clear()
            }
            Ng(a) {
                c2a(this, $1a[a], this.Fg.getAt(a))
            }
            Og(a) {
                c2a(this, a2a[a], this.Jg.getAt(a))
            }
            panes_changed() {
                jQ(this.Kg);
                jQ(this.Ig);
                this.Ig = null;
                const a = this.get("panes");
                a && (this.Kg = b2a(this, a, !0), this.get("suppressGhostControlPoints") || (this.Ig = b2a(this, a, !1)))
            }
            suppressGhostControlPoints_changed() {
                this.panes_changed()
            }
        };
    var i2a = class {
        constructor(a, b, c) {
            this.Jg = a;
            this.Fg = c;
            a = a.get("bounds");
            this.Ig = BP(c, a.getSouthWest());
            this.Gg = BP(c, a.getNorthEast());
            this.Eg = BP(c, c.fromDivPixelToLatLng(b))
        }
        moveTo(a) {
            var b = this.Fg;
            a = b.fromDivPixelToLatLng(a);
            b = BP(b, a);
            a = new _.gm(this.Gg.Eg - this.Eg.Eg + b.Eg, this.Gg.Fg - this.Eg.Fg + b.Fg);
            b = new _.Jk(CP(this.Fg, new _.gm(this.Ig.Eg - this.Eg.Eg + b.Eg, this.Ig.Fg - this.Eg.Fg + b.Fg)), CP(this.Fg, a));
            this.Jg.set("bounds", b)
        }
    };
    var l2a = class extends _.kk {
        constructor(a) {
            super();
            const b = new _.Qq;
            this.Eg = b;
            b.Eg = a;
            b.Kg = !0;
            b.bindTo("capturing", this);
            b.bindTo("cursor", this);
            b.bindTo("map", this);
            b.bindTo("strokeColor", this);
            b.bindTo("strokeOpacity", this);
            b.bindTo("strokeWeight", this);
            b.bindTo("strokePosition", this);
            b.bindTo("fillColor", this);
            b.bindTo("fillOpacity", this);
            b.bindTo("clickable", this);
            b.bindTo("zIndex", this);
            b.bindTo("suppressUndo", this);
            const c = [];
            this.Fg = c;
            WP.forEach(d => {
                c.push(_.gk(b, d, this))
            });
            c.push(_.gk(this,
                "toolbar", b))
        }
        bounds_changed() {
            const a = this.Eg;
            if (a) {
                var b = this.get("bounds");
                if (b) {
                    const c = b.getSouthWest(),
                        d = b.getNorthEast();
                    b = b.getCenter();
                    a.setPaths([new _.Hj(d.lat(), d.lng()), new _.Hj(d.lat(), b.lng()), new _.Hj(d.lat(), c.lng()), new _.Hj(c.lat(), c.lng()), new _.Hj(c.lat(), b.lng()), new _.Hj(c.lat(), d.lng())])
                } else a.setPaths([])
            }
        }
        release() {
            const a = this.Fg;
            for (let b = 0, c = a.length; b < c; ++b) _.Xj(a[b]);
            delete this.Fg;
            this.Eg.unbindAll();
            delete this.Eg
        }
    };
    var m2a = class {
        constructor(a) {
            this.Eg = a;
            this.ah = this.Fg = null;
            this.Fh = this.Eg.__gm;
            this.Fh.Fg.then(({
                ah: b
            }) => {
                this.ah = b;
                k2a(this, b)
            });
            this.Fh.Pg.Eg = b => {
                j2a(this, b)
            };
            this.Fh.Pg.onRemove = b => {
                this.onRemove(b)
            }
        }
        onRemove(a) {
            if (this.ah) {
                var b = a.Kg;
                b.unbindAll();
                b.set("map", null);
                b.release();
                delete a.Kg;
                a.oh && a.oh.forEach(_.Xj);
                delete a.oh;
                SP(a);
                delete a.editable_changed;
                e2a(a)
            }
        }
    };
    var D2a = class {
        constructor() {
            this.zH = z0a;
            this.DH = U1a;
            this.EH = n2a
        }
    };
    _.Ki("poly", new D2a);
});