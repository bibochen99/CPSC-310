//https://cs310.students.cs.ubc.ca/ui/index.html
!(function (e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var i = (t[r] = {i: r, l: !1, exports: {}});
		return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r});
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, "a", t), t;
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ""),
		n((n.s = 22));
})([
	function (e, t, n) {
		e.exports = n(6).default;
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.extend = l),
			(t.indexOf = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1;
			}),
			(t.escapeExpression = function (e) {
				if ("string" != typeof e) {
					if (e && e.toHTML) return e.toHTML();
					if (null == e) return "";
					if (!e) return e + "";
					e = "" + e;
				}
				if (!o.test(e)) return e;
				return e.replace(i, a);
			}),
			(t.isEmpty = function (e) {
				return (!e && 0 !== e) || !(!c(e) || 0 !== e.length);
			}),
			(t.createFrame = function (e) {
				var t = l({}, e);
				return (t._parent = e), t;
			}),
			(t.blockParams = function (e, t) {
				return (e.path = t), e;
			}),
			(t.appendContextPath = function (e, t) {
				return (e ? e + "." : "") + t;
			});
		var r = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
			i = /[&<>"'`=]/g,
			o = /[&<>"'`=]/;
		function a(e) {
			return r[e];
		}
		function l(e) {
			for (var t = 1; t < arguments.length; t++)
				for (var n in arguments[t])
					Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
			return e;
		}
		var s = Object.prototype.toString;
		t.toString = s;
		var u = function (e) {
			return "function" == typeof e;
		};
		u(/x/) &&
			(t.isFunction = u =
				function (e) {
					return "function" == typeof e && "[object Function]" === s.call(e);
				}),
			(t.isFunction = u);
		var c =
			Array.isArray ||
			function (e) {
				return !(!e || "object" != typeof e) && "[object Array]" === s.call(e);
			};
		t.isArray = c;
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
		function i(e, t) {
			var n = t && t.loc,
				o = void 0,
				a = void 0,
				l = void 0,
				s = void 0;
			n &&
				((o = n.start.line),
				(a = n.end.line),
				(l = n.start.column),
				(s = n.end.column),
				(e += " - " + o + ":" + l));
			for (var u = Error.prototype.constructor.call(this, e), c = 0; c < r.length; c++) this[r[c]] = u[r[c]];
			Error.captureStackTrace && Error.captureStackTrace(this, i);
			try {
				n &&
					((this.lineNumber = o),
					(this.endLineNumber = a),
					Object.defineProperty
						? (Object.defineProperty(this, "column", {value: l, enumerable: !0}),
						  Object.defineProperty(this, "endColumn", {value: s, enumerable: !0}))
						: ((this.column = l), (this.endColumn = s)));
			} catch (e) {}
		}
		(i.prototype = new Error()), (t.default = i), (e.exports = t.default);
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'id="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "id") || (null != t ? a(t, "id") : t)) ? o : e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "id",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 41}, end: {line: 2, column: 47}},
							  })
							: o
					) +
					'"'
				);
			},
			3: function (e, t, n, r, i) {
				var o,
					a = null != t ? t : e.nullContext || {},
					l = e.hooks.helperMissing,
					s = e.escapeExpression,
					u =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					"data-key=" +
					s(
						"function" == typeof (o = null != (o = u(n, "key") || (null != t ? u(t, "key") : t)) ? o : l)
							? o.call(a, {
									name: "key",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 76}, end: {line: 2, column: 83}},
							  })
							: o
					) +
					" value=" +
					s(
						"function" == typeof (o = null != (o = u(n, "key") || (null != t ? u(t, "key") : t)) ? o : l)
							? o.call(a, {
									name: "key",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 90}, end: {line: 2, column: 97}},
							  })
							: o
					)
				);
			},
			5: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'for="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "id") || (null != t ? a(t, "id") : t)) ? o : e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "id",
									hash: {},
									data: i,
									loc: {start: {line: 3, column: 26}, end: {line: 3, column: 32}},
							  })
							: o
					) +
					'"'
				);
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = null != t ? t : e.nullContext || {},
					s = e.hooks.helperMissing,
					u = e.escapeExpression,
					c =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control ' +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "classes") || (null != t ? c(t, "classes") : t)) ? a : s)
							? a.call(l, {
									name: "classes",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 20}, end: {line: 1, column: 31}},
							  })
							: a
					) +
					'">\n    <input type="checkbox" ' +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "id") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 2, column: 27}, end: {line: 2, column: 55}},
					}))
						? o
						: "") +
					" " +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "key") : t, {
						name: "if",
						hash: {},
						fn: e.program(3, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 2, column: 56}, end: {line: 2, column: 104}},
					}))
						? o
						: "") +
					">\n    <label " +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "id") : t, {
						name: "if",
						hash: {},
						fn: e.program(5, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 3, column: 11}, end: {line: 3, column: 40}},
					}))
						? o
						: "") +
					">" +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "label") || (null != t ? c(t, "label") : t)) ? a : s)
							? a.call(l, {
									name: "label",
									hash: {},
									data: i,
									loc: {start: {line: 3, column: 41}, end: {line: 3, column: 50}},
							  })
							: a
					) +
					"</label>\n</div>\n"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				return "multiple";
			},
			3: function (e, t, n, r, i, o, a) {
				var l,
					s =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return null !=
					(l = s(n, "if").call(
						null != t ? t : e.nullContext || {},
						null != a[1] ? s(a[1], "multiple") : a[1],
						{
							name: "if",
							hash: {},
							fn: e.program(4, i, 0, o, a),
							inverse: e.program(6, i, 0, o, a),
							data: i,
							loc: {start: {line: 4, column: 12}, end: {line: 8, column: 19}},
						}
					))
					? l
					: "";
			},
			4: function (e, t, r, i, o) {
				var a,
					l =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return null !=
					(a = e.invokePartial(n(38), t, {
						name: "dropdown-option-multiple",
						hash: {label: null != t ? l(t, "label") : t, key: null != t ? l(t, "key") : t},
						data: o,
						indent: "                ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
					? a
					: "";
			},
			6: function (e, t, r, i, o) {
				var a,
					l =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return null !=
					(a = e.invokePartial(n(17), t, {
						name: "dropdown-option",
						hash: {
							index: o && l(o, "index"),
							label: null != t ? l(t, "label") : t,
							key: null != t ? l(t, "key") : t,
						},
						data: o,
						indent: "                ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
					? a
					: "";
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i, o, a) {
				var l,
					s = null != t ? t : e.nullContext || {},
					u =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control ' +
					e.escapeExpression(e.lambda(null != t ? u(t, "classes") : t, t)) +
					'">\n    <select ' +
					(null !=
					(l = u(n, "if").call(s, null != t ? u(t, "multiple") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0, o, a),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 2, column: 12}, end: {line: 2, column: 43}},
					}))
						? l
						: "") +
					">\n" +
					(null !=
					(l = u(n, "each").call(s, null != t ? u(t, "data") : t, {
						name: "each",
						hash: {},
						fn: e.program(3, i, 0, o, a),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 3, column: 8}, end: {line: 9, column: 17}},
					}))
						? l
						: "") +
					"    </select>\n</div>\n"
				);
			},
			usePartial: !0,
			useData: !0,
			useDepths: !0,
		});
	},
	function (e, t, n) {
		!(function (t, n) {
			e.exports = n();
		})(0, function () {
			"use strict";
			var e = navigator.userAgent,
				t = navigator.platform,
				n = /gecko\/\d/i.test(e),
				r = /MSIE \d/.test(e),
				i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
				o = /Edge\/(\d+)/.exec(e),
				a = r || i || o,
				l = a && (r ? document.documentMode || 6 : +(o || i)[1]),
				s = !o && /WebKit\//.test(e),
				u = s && /Qt\/\d+\.\d+/.test(e),
				c = !o && /Chrome\//.test(e),
				f = /Opera\//.test(e),
				d = /Apple Computer/.test(navigator.vendor),
				p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
				h = /PhantomJS/.test(e),
				m = d && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
				g = /Android/.test(e),
				v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
				y = m || /Mac/.test(t),
				b = /\bCrOS\b/.test(e),
				x = /win/i.test(t),
				w = f && e.match(/Version\/(\d*\.\d*)/);
			w && (w = Number(w[1])), w && w >= 15 && ((f = !1), (s = !0));
			var k = y && (u || (f && (null == w || w < 12.11))),
				C = n || (a && l >= 9);
			function S(e) {
				return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
			}
			var T,
				L = function (e, t) {
					var n = e.className,
						r = S(t).exec(n);
					if (r) {
						var i = n.slice(r.index + r[0].length);
						e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
					}
				};
			function O(e) {
				for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
				return e;
			}
			function A(e, t) {
				return O(e).appendChild(t);
			}
			function M(e, t, n, r) {
				var i = document.createElement(e);
				if ((n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t))
					i.appendChild(document.createTextNode(t));
				else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
				return i;
			}
			function N(e, t, n, r) {
				var i = M(e, t, n, r);
				return i.setAttribute("role", "presentation"), i;
			}
			function E(e, t) {
				if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
				do {
					if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
				} while ((t = t.parentNode));
			}
			function P() {
				var e;
				try {
					e = document.activeElement;
				} catch (t) {
					e = document.body || null;
				}
				for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
				return e;
			}
			function D(e, t) {
				var n = e.className;
				S(t).test(n) || (e.className += (n ? " " : "") + t);
			}
			function H(e, t) {
				for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
				return t;
			}
			T = document.createRange
				? function (e, t, n, r) {
						var i = document.createRange();
						return i.setEnd(r || e, n), i.setStart(e, t), i;
				  }
				: function (e, t, n) {
						var r = document.body.createTextRange();
						try {
							r.moveToElementText(e.parentNode);
						} catch (e) {
							return r;
						}
						return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
				  };
			var R = function (e) {
				e.select();
			};
			function j(e) {
				var t = Array.prototype.slice.call(arguments, 1);
				return function () {
					return e.apply(null, t);
				};
			}
			function I(e, t, n) {
				for (var r in (t || (t = {}), e))
					!e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
				return t;
			}
			function W(e, t, n, r, i) {
				null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
				for (var o = r || 0, a = i || 0; ; ) {
					var l = e.indexOf("\t", o);
					if (l < 0 || l >= t) return a + (t - o);
					(a += l - o), (a += n - (a % n)), (o = l + 1);
				}
			}
			m
				? (R = function (e) {
						(e.selectionStart = 0), (e.selectionEnd = e.value.length);
				  })
				: a &&
				  (R = function (e) {
						try {
							e.select();
						} catch (e) {}
				  });
			var F = function () {
				(this.id = null), (this.f = null), (this.time = 0), (this.handler = j(this.onTimeout, this));
			};
			function _(e, t) {
				for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
				return -1;
			}
			(F.prototype.onTimeout = function (e) {
				(e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
			}),
				(F.prototype.set = function (e, t) {
					this.f = t;
					var n = +new Date() + e;
					(!this.id || n < this.time) &&
						(clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
				});
			var B = 50,
				q = {
					toString: function () {
						return "CodeMirror.Pass";
					},
				},
				z = {scroll: !1},
				$ = {origin: "*mouse"},
				U = {origin: "+move"};
			function V(e, t, n) {
				for (var r = 0, i = 0; ; ) {
					var o = e.indexOf("\t", r);
					-1 == o && (o = e.length);
					var a = o - r;
					if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
					if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
				}
			}
			var G = [""];
			function X(e) {
				for (; G.length <= e; ) G.push(K(G) + " ");
				return G[e];
			}
			function K(e) {
				return e[e.length - 1];
			}
			function Y(e, t) {
				for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
				return n;
			}
			function Q() {}
			function J(e, t) {
				var n;
				return Object.create ? (n = Object.create(e)) : ((Q.prototype = e), (n = new Q())), t && I(t, n), n;
			}
			var Z =
				/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
			function ee(e) {
				return /\w/.test(e) || (e > "" && (e.toUpperCase() != e.toLowerCase() || Z.test(e)));
			}
			function te(e, t) {
				return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e);
			}
			function ne(e) {
				for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
				return !0;
			}
			var re =
				/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
			function ie(e) {
				return e.charCodeAt(0) >= 768 && re.test(e);
			}
			function oe(e, t, n) {
				for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t)); ) t += n;
				return t;
			}
			function ae(e, t, n) {
				for (var r = t > n ? -1 : 1; ; ) {
					if (t == n) return t;
					var i = (t + n) / 2,
						o = r < 0 ? Math.ceil(i) : Math.floor(i);
					if (o == t) return e(o) ? t : n;
					e(o) ? (n = o) : (t = o + r);
				}
			}
			var le = null;
			function se(e, t, n) {
				var r;
				le = null;
				for (var i = 0; i < e.length; ++i) {
					var o = e[i];
					if (o.from < t && o.to > t) return i;
					o.to == t && (o.from != o.to && "before" == n ? (r = i) : (le = i)),
						o.from == t && (o.from != o.to && "before" != n ? (r = i) : (le = i));
				}
				return null != r ? r : le;
			}
			var ue = (function () {
				var e =
						"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
					t =
						"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
				function n(n) {
					return n <= 247
						? e.charAt(n)
						: 1424 <= n && n <= 1524
						? "R"
						: 1536 <= n && n <= 1785
						? t.charAt(n - 1536)
						: 1774 <= n && n <= 2220
						? "r"
						: 8192 <= n && n <= 8203
						? "w"
						: 8204 == n
						? "b"
						: "L";
				}
				var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
					i = /[stwN]/,
					o = /[LRr]/,
					a = /[Lb1n]/,
					l = /[1n]/;
				function s(e, t, n) {
					(this.level = e), (this.from = t), (this.to = n);
				}
				return function (e, t) {
					var u = "ltr" == t ? "L" : "R";
					if (0 == e.length || ("ltr" == t && !r.test(e))) return !1;
					for (var c = e.length, f = [], d = 0; d < c; ++d) f.push(n(e.charCodeAt(d)));
					for (var p = 0, h = u; p < c; ++p) {
						var m = f[p];
						"m" == m ? (f[p] = h) : (h = m);
					}
					for (var g = 0, v = u; g < c; ++g) {
						var y = f[g];
						"1" == y && "r" == v ? (f[g] = "n") : o.test(y) && ((v = y), "r" == y && (f[g] = "R"));
					}
					for (var b = 1, x = f[0]; b < c - 1; ++b) {
						var w = f[b];
						"+" == w && "1" == x && "1" == f[b + 1]
							? (f[b] = "1")
							: "," != w || x != f[b + 1] || ("1" != x && "n" != x) || (f[b] = x),
							(x = w);
					}
					for (var k = 0; k < c; ++k) {
						var C = f[k];
						if ("," == C) f[k] = "N";
						else if ("%" == C) {
							var S = void 0;
							for (S = k + 1; S < c && "%" == f[S]; ++S);
							for (
								var T = (k && "!" == f[k - 1]) || (S < c && "1" == f[S]) ? "1" : "N", L = k;
								L < S;
								++L
							)
								f[L] = T;
							k = S - 1;
						}
					}
					for (var O = 0, A = u; O < c; ++O) {
						var M = f[O];
						"L" == A && "1" == M ? (f[O] = "L") : o.test(M) && (A = M);
					}
					for (var N = 0; N < c; ++N)
						if (i.test(f[N])) {
							var E = void 0;
							for (E = N + 1; E < c && i.test(f[E]); ++E);
							for (
								var P = "L" == (N ? f[N - 1] : u),
									D = P == ("L" == (E < c ? f[E] : u)) ? (P ? "L" : "R") : u,
									H = N;
								H < E;
								++H
							)
								f[H] = D;
							N = E - 1;
						}
					for (var R, j = [], I = 0; I < c; )
						if (a.test(f[I])) {
							var W = I;
							for (++I; I < c && a.test(f[I]); ++I);
							j.push(new s(0, W, I));
						} else {
							var F = I,
								_ = j.length,
								B = "rtl" == t ? 1 : 0;
							for (++I; I < c && "L" != f[I]; ++I);
							for (var q = F; q < I; )
								if (l.test(f[q])) {
									F < q && (j.splice(_, 0, new s(1, F, q)), (_ += B));
									var z = q;
									for (++q; q < I && l.test(f[q]); ++q);
									j.splice(_, 0, new s(2, z, q)), (_ += B), (F = q);
								} else ++q;
							F < I && j.splice(_, 0, new s(1, F, I));
						}
					return (
						"ltr" == t &&
							(1 == j[0].level &&
								(R = e.match(/^\s+/)) &&
								((j[0].from = R[0].length), j.unshift(new s(0, 0, R[0].length))),
							1 == K(j).level &&
								(R = e.match(/\s+$/)) &&
								((K(j).to -= R[0].length), j.push(new s(0, c - R[0].length, c)))),
						"rtl" == t ? j.reverse() : j
					);
				};
			})();
			function ce(e, t) {
				var n = e.order;
				return null == n && (n = e.order = ue(e.text, t)), n;
			}
			var fe = [],
				de = function (e, t, n) {
					if (e.addEventListener) e.addEventListener(t, n, !1);
					else if (e.attachEvent) e.attachEvent("on" + t, n);
					else {
						var r = e._handlers || (e._handlers = {});
						r[t] = (r[t] || fe).concat(n);
					}
				};
			function pe(e, t) {
				return (e._handlers && e._handlers[t]) || fe;
			}
			function he(e, t, n) {
				if (e.removeEventListener) e.removeEventListener(t, n, !1);
				else if (e.detachEvent) e.detachEvent("on" + t, n);
				else {
					var r = e._handlers,
						i = r && r[t];
					if (i) {
						var o = _(i, n);
						o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
					}
				}
			}
			function me(e, t) {
				var n = pe(e, t);
				if (n.length)
					for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
						n[i].apply(null, r);
			}
			function ge(e, t, n) {
				return (
					"string" == typeof t &&
						(t = {
							type: t,
							preventDefault: function () {
								this.defaultPrevented = !0;
							},
						}),
					me(e, n || t.type, e, t),
					ke(t) || t.codemirrorIgnore
				);
			}
			function ve(e) {
				var t = e._handlers && e._handlers.cursorActivity;
				if (t)
					for (
						var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0;
						r < t.length;
						++r
					)
						-1 == _(n, t[r]) && n.push(t[r]);
			}
			function ye(e, t) {
				return pe(e, t).length > 0;
			}
			function be(e) {
				(e.prototype.on = function (e, t) {
					de(this, e, t);
				}),
					(e.prototype.off = function (e, t) {
						he(this, e, t);
					});
			}
			function xe(e) {
				e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
			}
			function we(e) {
				e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
			}
			function ke(e) {
				return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
			}
			function Ce(e) {
				xe(e), we(e);
			}
			function Se(e) {
				return e.target || e.srcElement;
			}
			function Te(e) {
				var t = e.which;
				return (
					null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
					y && e.ctrlKey && 1 == t && (t = 3),
					t
				);
			}
			var Le,
				Oe,
				Ae = (function () {
					if (a && l < 9) return !1;
					var e = M("div");
					return "draggable" in e || "dragDrop" in e;
				})();
			function Me(e) {
				if (null == Le) {
					var t = M("span", "​");
					A(e, M("span", [t, document.createTextNode("x")])),
						0 != e.firstChild.offsetHeight &&
							(Le = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
				}
				var n = Le
					? M("span", "​")
					: M("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
				return n.setAttribute("cm-text", ""), n;
			}
			function Ne(e) {
				if (null != Oe) return Oe;
				var t = A(e, document.createTextNode("AخA")),
					n = T(t, 0, 1).getBoundingClientRect(),
					r = T(t, 1, 2).getBoundingClientRect();
				return O(e), !(!n || n.left == n.right) && (Oe = r.right - n.right < 3);
			}
			var Ee =
					3 != "\n\nb".split(/\n/).length
						? function (e) {
								for (var t = 0, n = [], r = e.length; t <= r; ) {
									var i = e.indexOf("\n", t);
									-1 == i && (i = e.length);
									var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
										a = o.indexOf("\r");
									-1 != a ? (n.push(o.slice(0, a)), (t += a + 1)) : (n.push(o), (t = i + 1));
								}
								return n;
						  }
						: function (e) {
								return e.split(/\r\n?|\n/);
						  },
				Pe = window.getSelection
					? function (e) {
							try {
								return e.selectionStart != e.selectionEnd;
							} catch (e) {
								return !1;
							}
					  }
					: function (e) {
							var t;
							try {
								t = e.ownerDocument.selection.createRange();
							} catch (e) {}
							return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
					  },
				De = (function () {
					var e = M("div");
					return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
				})(),
				He = null;
			var Re = {},
				je = {};
			function Ie(e) {
				if ("string" == typeof e && je.hasOwnProperty(e)) e = je[e];
				else if (e && "string" == typeof e.name && je.hasOwnProperty(e.name)) {
					var t = je[e.name];
					"string" == typeof t && (t = {name: t}), ((e = J(t, e)).name = t.name);
				} else {
					if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ie("application/xml");
					if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ie("application/json");
				}
				return "string" == typeof e ? {name: e} : e || {name: "null"};
			}
			function We(e, t) {
				t = Ie(t);
				var n = Re[t.name];
				if (!n) return We(e, "text/plain");
				var r = n(e, t);
				if (Fe.hasOwnProperty(t.name)) {
					var i = Fe[t.name];
					for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
				}
				if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps))
					for (var a in t.modeProps) r[a] = t.modeProps[a];
				return r;
			}
			var Fe = {};
			function _e(e, t) {
				I(t, Fe.hasOwnProperty(e) ? Fe[e] : (Fe[e] = {}));
			}
			function Be(e, t) {
				if (!0 === t) return t;
				if (e.copyState) return e.copyState(t);
				var n = {};
				for (var r in t) {
					var i = t[r];
					i instanceof Array && (i = i.concat([])), (n[r] = i);
				}
				return n;
			}
			function qe(e, t) {
				for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
				return n || {mode: e, state: t};
			}
			function ze(e, t, n) {
				return !e.startState || e.startState(t, n);
			}
			var $e = function (e, t, n) {
				(this.pos = this.start = 0),
					(this.string = e),
					(this.tabSize = t || 8),
					(this.lastColumnPos = this.lastColumnValue = 0),
					(this.lineStart = 0),
					(this.lineOracle = n);
			};
			function Ue(e, t) {
				if ((t -= e.first) < 0 || t >= e.size)
					throw new Error("There is no line " + (t + e.first) + " in the document.");
				for (var n = e; !n.lines; )
					for (var r = 0; ; ++r) {
						var i = n.children[r],
							o = i.chunkSize();
						if (t < o) {
							n = i;
							break;
						}
						t -= o;
					}
				return n.lines[t];
			}
			function Ve(e, t, n) {
				var r = [],
					i = t.line;
				return (
					e.iter(t.line, n.line + 1, function (e) {
						var o = e.text;
						i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
					}),
					r
				);
			}
			function Ge(e, t, n) {
				var r = [];
				return (
					e.iter(t, n, function (e) {
						r.push(e.text);
					}),
					r
				);
			}
			function Xe(e, t) {
				var n = t - e.height;
				if (n) for (var r = e; r; r = r.parent) r.height += n;
			}
			function Ke(e) {
				if (null == e.parent) return null;
				for (var t = e.parent, n = _(t.lines, e), r = t.parent; r; t = r, r = r.parent)
					for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
				return n + t.first;
			}
			function Ye(e, t) {
				var n = e.first;
				e: do {
					for (var r = 0; r < e.children.length; ++r) {
						var i = e.children[r],
							o = i.height;
						if (t < o) {
							e = i;
							continue e;
						}
						(t -= o), (n += i.chunkSize());
					}
					return n;
				} while (!e.lines);
				for (var a = 0; a < e.lines.length; ++a) {
					var l = e.lines[a].height;
					if (t < l) break;
					t -= l;
				}
				return n + a;
			}
			function Qe(e, t) {
				return t >= e.first && t < e.first + e.size;
			}
			function Je(e, t) {
				return String(e.lineNumberFormatter(t + e.firstLineNumber));
			}
			function Ze(e, t, n) {
				if ((void 0 === n && (n = null), !(this instanceof Ze))) return new Ze(e, t, n);
				(this.line = e), (this.ch = t), (this.sticky = n);
			}
			function et(e, t) {
				return e.line - t.line || e.ch - t.ch;
			}
			function tt(e, t) {
				return e.sticky == t.sticky && 0 == et(e, t);
			}
			function nt(e) {
				return Ze(e.line, e.ch);
			}
			function rt(e, t) {
				return et(e, t) < 0 ? t : e;
			}
			function it(e, t) {
				return et(e, t) < 0 ? e : t;
			}
			function ot(e, t) {
				return Math.max(e.first, Math.min(t, e.first + e.size - 1));
			}
			function at(e, t) {
				if (t.line < e.first) return Ze(e.first, 0);
				var n = e.first + e.size - 1;
				return t.line > n
					? Ze(n, Ue(e, n).text.length)
					: (function (e, t) {
							var n = e.ch;
							return null == n || n > t ? Ze(e.line, t) : n < 0 ? Ze(e.line, 0) : e;
					  })(t, Ue(e, t.line).text.length);
			}
			function lt(e, t) {
				for (var n = [], r = 0; r < t.length; r++) n[r] = at(e, t[r]);
				return n;
			}
			($e.prototype.eol = function () {
				return this.pos >= this.string.length;
			}),
				($e.prototype.sol = function () {
					return this.pos == this.lineStart;
				}),
				($e.prototype.peek = function () {
					return this.string.charAt(this.pos) || void 0;
				}),
				($e.prototype.next = function () {
					if (this.pos < this.string.length) return this.string.charAt(this.pos++);
				}),
				($e.prototype.eat = function (e) {
					var t = this.string.charAt(this.pos);
					if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
				}),
				($e.prototype.eatWhile = function (e) {
					for (var t = this.pos; this.eat(e); );
					return this.pos > t;
				}),
				($e.prototype.eatSpace = function () {
					for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
					return this.pos > e;
				}),
				($e.prototype.skipToEnd = function () {
					this.pos = this.string.length;
				}),
				($e.prototype.skipTo = function (e) {
					var t = this.string.indexOf(e, this.pos);
					if (t > -1) return (this.pos = t), !0;
				}),
				($e.prototype.backUp = function (e) {
					this.pos -= e;
				}),
				($e.prototype.column = function () {
					return (
						this.lastColumnPos < this.start &&
							((this.lastColumnValue = W(
								this.string,
								this.start,
								this.tabSize,
								this.lastColumnPos,
								this.lastColumnValue
							)),
							(this.lastColumnPos = this.start)),
						this.lastColumnValue - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
					);
				}),
				($e.prototype.indentation = function () {
					return (
						W(this.string, null, this.tabSize) -
						(this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
					);
				}),
				($e.prototype.match = function (e, t, n) {
					if ("string" != typeof e) {
						var r = this.string.slice(this.pos).match(e);
						return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
					}
					var i = function (e) {
						return n ? e.toLowerCase() : e;
					};
					if (i(this.string.substr(this.pos, e.length)) == i(e))
						return !1 !== t && (this.pos += e.length), !0;
				}),
				($e.prototype.current = function () {
					return this.string.slice(this.start, this.pos);
				}),
				($e.prototype.hideFirstChars = function (e, t) {
					this.lineStart += e;
					try {
						return t();
					} finally {
						this.lineStart -= e;
					}
				}),
				($e.prototype.lookAhead = function (e) {
					var t = this.lineOracle;
					return t && t.lookAhead(e);
				}),
				($e.prototype.baseToken = function () {
					var e = this.lineOracle;
					return e && e.baseToken(this.pos);
				});
			var st = function (e, t) {
					(this.state = e), (this.lookAhead = t);
				},
				ut = function (e, t, n, r) {
					(this.state = t),
						(this.doc = e),
						(this.line = n),
						(this.maxLookAhead = r || 0),
						(this.baseTokens = null),
						(this.baseTokenPos = 1);
				};
			function ct(e, t, n, r) {
				var i = [e.state.modeGen],
					o = {};
				bt(
					e,
					t.text,
					e.doc.mode,
					n,
					function (e, t) {
						return i.push(e, t);
					},
					o,
					r
				);
				for (
					var a = n.state,
						l = function (r) {
							n.baseTokens = i;
							var l = e.state.overlays[r],
								s = 1,
								u = 0;
							(n.state = !0),
								bt(
									e,
									t.text,
									l.mode,
									n,
									function (e, t) {
										for (var n = s; u < e; ) {
											var r = i[s];
											r > e && i.splice(s, 1, e, i[s + 1], r), (s += 2), (u = Math.min(e, r));
										}
										if (t)
											if (l.opaque) i.splice(n, s - n, e, "overlay " + t), (s = n + 2);
											else
												for (; n < s; n += 2) {
													var o = i[n + 1];
													i[n + 1] = (o ? o + " " : "") + "overlay " + t;
												}
									},
									o
								),
								(n.state = a),
								(n.baseTokens = null),
								(n.baseTokenPos = 1);
						},
						s = 0;
					s < e.state.overlays.length;
					++s
				)
					l(s);
				return {styles: i, classes: o.bgClass || o.textClass ? o : null};
			}
			function ft(e, t, n) {
				if (!t.styles || t.styles[0] != e.state.modeGen) {
					var r = dt(e, Ke(t)),
						i = t.text.length > e.options.maxHighlightLength && Be(e.doc.mode, r.state),
						o = ct(e, t, r);
					i && (r.state = i),
						(t.stateAfter = r.save(!i)),
						(t.styles = o.styles),
						o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
						n === e.doc.highlightFrontier &&
							(e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
				}
				return t.styles;
			}
			function dt(e, t, n) {
				var r = e.doc,
					i = e.display;
				if (!r.mode.startState) return new ut(r, !0, t);
				var o = (function (e, t, n) {
						for (
							var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t;
							l > a;
							--l
						) {
							if (l <= o.first) return o.first;
							var s = Ue(o, l - 1),
								u = s.stateAfter;
							if (u && (!n || l + (u instanceof st ? u.lookAhead : 0) <= o.modeFrontier)) return l;
							var c = W(s.text, null, e.options.tabSize);
							(null == i || r > c) && ((i = l - 1), (r = c));
						}
						return i;
					})(e, t, n),
					a = o > r.first && Ue(r, o - 1).stateAfter,
					l = a ? ut.fromSaved(r, a, o) : new ut(r, ze(r.mode), o);
				return (
					r.iter(o, t, function (n) {
						pt(e, n.text, l);
						var r = l.line;
						(n.stateAfter =
							r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? l.save() : null),
							l.nextLine();
					}),
					n && (r.modeFrontier = l.line),
					l
				);
			}
			function pt(e, t, n, r) {
				var i = e.doc.mode,
					o = new $e(t, e.options.tabSize, n);
				for (o.start = o.pos = r || 0, "" == t && ht(i, n.state); !o.eol(); )
					mt(i, o, n.state), (o.start = o.pos);
			}
			function ht(e, t) {
				if (e.blankLine) return e.blankLine(t);
				if (e.innerMode) {
					var n = qe(e, t);
					return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
				}
			}
			function mt(e, t, n, r) {
				for (var i = 0; i < 10; i++) {
					r && (r[0] = qe(e, n).mode);
					var o = e.token(t, n);
					if (t.pos > t.start) return o;
				}
				throw new Error("Mode " + e.name + " failed to advance stream.");
			}
			(ut.prototype.lookAhead = function (e) {
				var t = this.doc.getLine(this.line + e);
				return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
			}),
				(ut.prototype.baseToken = function (e) {
					if (!this.baseTokens) return null;
					for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
					var t = this.baseTokens[this.baseTokenPos + 1];
					return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e};
				}),
				(ut.prototype.nextLine = function () {
					this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
				}),
				(ut.fromSaved = function (e, t, n) {
					return t instanceof st
						? new ut(e, Be(e.mode, t.state), n, t.lookAhead)
						: new ut(e, Be(e.mode, t), n);
				}),
				(ut.prototype.save = function (e) {
					var t = !1 !== e ? Be(this.doc.mode, this.state) : this.state;
					return this.maxLookAhead > 0 ? new st(t, this.maxLookAhead) : t;
				});
			var gt = function (e, t, n) {
				(this.start = e.start),
					(this.end = e.pos),
					(this.string = e.current()),
					(this.type = t || null),
					(this.state = n);
			};
			function vt(e, t, n, r) {
				var i,
					o,
					a = e.doc,
					l = a.mode,
					s = Ue(a, (t = at(a, t)).line),
					u = dt(e, t.line, n),
					c = new $e(s.text, e.options.tabSize, u);
				for (r && (o = []); (r || c.pos < t.ch) && !c.eol(); )
					(c.start = c.pos), (i = mt(l, c, u.state)), r && o.push(new gt(c, i, Be(a.mode, u.state)));
				return r ? o : new gt(c, i, u.state);
			}
			function yt(e, t) {
				if (e)
					for (;;) {
						var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
						if (!n) break;
						e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
						var r = n[1] ? "bgClass" : "textClass";
						null == t[r]
							? (t[r] = n[2])
							: new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
					}
				return e;
			}
			function bt(e, t, n, r, i, o, a) {
				var l = n.flattenSpans;
				null == l && (l = e.options.flattenSpans);
				var s,
					u = 0,
					c = null,
					f = new $e(t, e.options.tabSize, r),
					d = e.options.addModeClass && [null];
				for ("" == t && yt(ht(n, r.state), o); !f.eol(); ) {
					if (
						(f.pos > e.options.maxHighlightLength
							? ((l = !1), a && pt(e, t, r, f.pos), (f.pos = t.length), (s = null))
							: (s = yt(mt(n, f, r.state, d), o)),
						d)
					) {
						var p = d[0].name;
						p && (s = "m-" + (s ? p + " " + s : p));
					}
					if (!l || c != s) {
						for (; u < f.start; ) i((u = Math.min(f.start, u + 5e3)), c);
						c = s;
					}
					f.start = f.pos;
				}
				for (; u < f.pos; ) {
					var h = Math.min(f.pos, u + 5e3);
					i(h, c), (u = h);
				}
			}
			var xt = !1,
				wt = !1;
			function kt(e, t, n) {
				(this.marker = e), (this.from = t), (this.to = n);
			}
			function Ct(e, t) {
				if (e)
					for (var n = 0; n < e.length; ++n) {
						var r = e[n];
						if (r.marker == t) return r;
					}
			}
			function St(e, t) {
				for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
				return n;
			}
			function Tt(e, t) {
				if (t.full) return null;
				var n = Qe(e, t.from.line) && Ue(e, t.from.line).markedSpans,
					r = Qe(e, t.to.line) && Ue(e, t.to.line).markedSpans;
				if (!n && !r) return null;
				var i = t.from.ch,
					o = t.to.ch,
					a = 0 == et(t.from, t.to),
					l = (function (e, t, n) {
						var r;
						if (e)
							for (var i = 0; i < e.length; ++i) {
								var o = e[i],
									a = o.marker;
								if (
									null == o.from ||
									(a.inclusiveLeft ? o.from <= t : o.from < t) ||
									(o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft))
								) {
									var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
									(r || (r = [])).push(new kt(a, o.from, l ? null : o.to));
								}
							}
						return r;
					})(n, i, a),
					s = (function (e, t, n) {
						var r;
						if (e)
							for (var i = 0; i < e.length; ++i) {
								var o = e[i],
									a = o.marker;
								if (
									null == o.to ||
									(a.inclusiveRight ? o.to >= t : o.to > t) ||
									(o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft))
								) {
									var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
									(r || (r = [])).push(
										new kt(a, l ? null : o.from - t, null == o.to ? null : o.to - t)
									);
								}
							}
						return r;
					})(r, o, a),
					u = 1 == t.text.length,
					c = K(t.text).length + (u ? i : 0);
				if (l)
					for (var f = 0; f < l.length; ++f) {
						var d = l[f];
						if (null == d.to) {
							var p = Ct(s, d.marker);
							p ? u && (d.to = null == p.to ? null : p.to + c) : (d.to = i);
						}
					}
				if (s)
					for (var h = 0; h < s.length; ++h) {
						var m = s[h];
						if ((null != m.to && (m.to += c), null == m.from))
							Ct(l, m.marker) || ((m.from = c), u && (l || (l = [])).push(m));
						else (m.from += c), u && (l || (l = [])).push(m);
					}
				l && (l = Lt(l)), s && s != l && (s = Lt(s));
				var g = [l];
				if (!u) {
					var v,
						y = t.text.length - 2;
					if (y > 0 && l)
						for (var b = 0; b < l.length; ++b)
							null == l[b].to && (v || (v = [])).push(new kt(l[b].marker, null, null));
					for (var x = 0; x < y; ++x) g.push(v);
					g.push(s);
				}
				return g;
			}
			function Lt(e) {
				for (var t = 0; t < e.length; ++t) {
					var n = e[t];
					null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
				}
				return e.length ? e : null;
			}
			function Ot(e) {
				var t = e.markedSpans;
				if (t) {
					for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
					e.markedSpans = null;
				}
			}
			function At(e, t) {
				if (t) {
					for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
					e.markedSpans = t;
				}
			}
			function Mt(e) {
				return e.inclusiveLeft ? -1 : 0;
			}
			function Nt(e) {
				return e.inclusiveRight ? 1 : 0;
			}
			function Et(e, t) {
				var n = e.lines.length - t.lines.length;
				if (0 != n) return n;
				var r = e.find(),
					i = t.find(),
					o = et(r.from, i.from) || Mt(e) - Mt(t);
				if (o) return -o;
				var a = et(r.to, i.to) || Nt(e) - Nt(t);
				return a || t.id - e.id;
			}
			function Pt(e, t) {
				var n,
					r = wt && e.markedSpans;
				if (r)
					for (var i = void 0, o = 0; o < r.length; ++o)
						(i = r[o]).marker.collapsed &&
							null == (t ? i.from : i.to) &&
							(!n || Et(n, i.marker) < 0) &&
							(n = i.marker);
				return n;
			}
			function Dt(e) {
				return Pt(e, !0);
			}
			function Ht(e) {
				return Pt(e, !1);
			}
			function Rt(e, t) {
				var n,
					r = wt && e.markedSpans;
				if (r)
					for (var i = 0; i < r.length; ++i) {
						var o = r[i];
						o.marker.collapsed &&
							(null == o.from || o.from < t) &&
							(null == o.to || o.to > t) &&
							(!n || Et(n, o.marker) < 0) &&
							(n = o.marker);
					}
				return n;
			}
			function jt(e, t, n, r, i) {
				var o = Ue(e, t),
					a = wt && o.markedSpans;
				if (a)
					for (var l = 0; l < a.length; ++l) {
						var s = a[l];
						if (s.marker.collapsed) {
							var u = s.marker.find(0),
								c = et(u.from, n) || Mt(s.marker) - Mt(i),
								f = et(u.to, r) || Nt(s.marker) - Nt(i);
							if (
								!((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
								((c <= 0 &&
									(s.marker.inclusiveRight && i.inclusiveLeft
										? et(u.to, n) >= 0
										: et(u.to, n) > 0)) ||
									(c >= 0 &&
										(s.marker.inclusiveRight && i.inclusiveLeft
											? et(u.from, r) <= 0
											: et(u.from, r) < 0)))
							)
								return !0;
						}
					}
			}
			function It(e) {
				for (var t; (t = Dt(e)); ) e = t.find(-1, !0).line;
				return e;
			}
			function Wt(e, t) {
				var n = Ue(e, t),
					r = It(n);
				return n == r ? t : Ke(r);
			}
			function Ft(e, t) {
				if (t > e.lastLine()) return t;
				var n,
					r = Ue(e, t);
				if (!_t(e, r)) return t;
				for (; (n = Ht(r)); ) r = n.find(1, !0).line;
				return Ke(r) + 1;
			}
			function _t(e, t) {
				var n = wt && t.markedSpans;
				if (n)
					for (var r = void 0, i = 0; i < n.length; ++i)
						if ((r = n[i]).marker.collapsed) {
							if (null == r.from) return !0;
							if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Bt(e, t, r)) return !0;
						}
			}
			function Bt(e, t, n) {
				if (null == n.to) {
					var r = n.marker.find(1, !0);
					return Bt(e, r.line, Ct(r.line.markedSpans, n.marker));
				}
				if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
				for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
					if (
						(i = t.markedSpans[o]).marker.collapsed &&
						!i.marker.widgetNode &&
						i.from == n.to &&
						(null == i.to || i.to != n.from) &&
						(i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
						Bt(e, t, i)
					)
						return !0;
			}
			function qt(e) {
				for (var t = 0, n = (e = It(e)).parent, r = 0; r < n.lines.length; ++r) {
					var i = n.lines[r];
					if (i == e) break;
					t += i.height;
				}
				for (var o = n.parent; o; o = (n = o).parent)
					for (var a = 0; a < o.children.length; ++a) {
						var l = o.children[a];
						if (l == n) break;
						t += l.height;
					}
				return t;
			}
			function zt(e) {
				if (0 == e.height) return 0;
				for (var t, n = e.text.length, r = e; (t = Dt(r)); ) {
					var i = t.find(0, !0);
					(r = i.from.line), (n += i.from.ch - i.to.ch);
				}
				for (r = e; (t = Ht(r)); ) {
					var o = t.find(0, !0);
					(n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
				}
				return n;
			}
			function $t(e) {
				var t = e.display,
					n = e.doc;
				(t.maxLine = Ue(n, n.first)),
					(t.maxLineLength = zt(t.maxLine)),
					(t.maxLineChanged = !0),
					n.iter(function (e) {
						var n = zt(e);
						n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
					});
			}
			var Ut = function (e, t, n) {
				(this.text = e), At(this, t), (this.height = n ? n(this) : 1);
			};
			function Vt(e) {
				(e.parent = null), Ot(e);
			}
			(Ut.prototype.lineNo = function () {
				return Ke(this);
			}),
				be(Ut);
			var Gt = {},
				Xt = {};
			function Kt(e, t) {
				if (!e || /^\s*$/.test(e)) return null;
				var n = t.addModeClass ? Xt : Gt;
				return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
			}
			function Yt(e, t) {
				var n = N("span", null, null, s ? "padding-right: .1px" : null),
					r = {
						pre: N("pre", [n], "CodeMirror-line"),
						content: n,
						col: 0,
						pos: 0,
						cm: e,
						trailingSpace: !1,
						splitSpaces: e.getOption("lineWrapping"),
					};
				t.measure = {};
				for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
					var o = i ? t.rest[i - 1] : t.line,
						a = void 0;
					(r.pos = 0),
						(r.addToken = Jt),
						Ne(e.display.measure) && (a = ce(o, e.doc.direction)) && (r.addToken = Zt(r.addToken, a)),
						(r.map = []),
						tn(o, r, ft(e, o, t != e.display.externalMeasured && Ke(o))),
						o.styleClasses &&
							(o.styleClasses.bgClass && (r.bgClass = H(o.styleClasses.bgClass, r.bgClass || "")),
							o.styleClasses.textClass && (r.textClass = H(o.styleClasses.textClass, r.textClass || ""))),
						0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Me(e.display.measure))),
						0 == i
							? ((t.measure.map = r.map), (t.measure.cache = {}))
							: ((t.measure.maps || (t.measure.maps = [])).push(r.map),
							  (t.measure.caches || (t.measure.caches = [])).push({}));
				}
				if (s) {
					var l = r.content.lastChild;
					(/\bcm-tab\b/.test(l.className) || (l.querySelector && l.querySelector(".cm-tab"))) &&
						(r.content.className = "cm-tab-wrap-hack");
				}
				return (
					me(e, "renderLine", e, t.line, r.pre),
					r.pre.className && (r.textClass = H(r.pre.className, r.textClass || "")),
					r
				);
			}
			function Qt(e) {
				var t = M("span", "•", "cm-invalidchar");
				return (t.title = "\\u" + e.charCodeAt(0).toString(16)), t.setAttribute("aria-label", t.title), t;
			}
			function Jt(e, t, n, r, i, o, s) {
				if (t) {
					var u,
						c = e.splitSpaces
							? (function (e, t) {
									if (e.length > 1 && !/  /.test(e)) return e;
									for (var n = t, r = "", i = 0; i < e.length; i++) {
										var o = e.charAt(i);
										" " != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = " "),
											(r += o),
											(n = " " == o);
									}
									return r;
							  })(t, e.trailingSpace)
							: t,
						f = e.cm.state.specialChars,
						d = !1;
					if (f.test(t)) {
						u = document.createDocumentFragment();
						for (var p = 0; ; ) {
							f.lastIndex = p;
							var h = f.exec(t),
								m = h ? h.index - p : t.length - p;
							if (m) {
								var g = document.createTextNode(c.slice(p, p + m));
								a && l < 9 ? u.appendChild(M("span", [g])) : u.appendChild(g),
									e.map.push(e.pos, e.pos + m, g),
									(e.col += m),
									(e.pos += m);
							}
							if (!h) break;
							p += m + 1;
							var v = void 0;
							if ("\t" == h[0]) {
								var y = e.cm.options.tabSize,
									b = y - (e.col % y);
								(v = u.appendChild(M("span", X(b), "cm-tab"))).setAttribute("role", "presentation"),
									v.setAttribute("cm-text", "\t"),
									(e.col += b);
							} else
								"\r" == h[0] || "\n" == h[0]
									? ((v = u.appendChild(
											M("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar")
									  )).setAttribute("cm-text", h[0]),
									  (e.col += 1))
									: ((v = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]),
									  a && l < 9 ? u.appendChild(M("span", [v])) : u.appendChild(v),
									  (e.col += 1));
							e.map.push(e.pos, e.pos + 1, v), e.pos++;
						}
					} else
						(e.col += t.length),
							(u = document.createTextNode(c)),
							e.map.push(e.pos, e.pos + t.length, u),
							a && l < 9 && (d = !0),
							(e.pos += t.length);
					if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), n || r || i || d || o || s)) {
						var x = n || "";
						r && (x += r), i && (x += i);
						var w = M("span", [u], x, o);
						if (s)
							for (var k in s)
								s.hasOwnProperty(k) && "style" != k && "class" != k && w.setAttribute(k, s[k]);
						return e.content.appendChild(w);
					}
					e.content.appendChild(u);
				}
			}
			function Zt(e, t) {
				return function (n, r, i, o, a, l, s) {
					i = i ? i + " cm-force-border" : "cm-force-border";
					for (var u = n.pos, c = u + r.length; ; ) {
						for (var f = void 0, d = 0; d < t.length && !((f = t[d]).to > u && f.from <= u); d++);
						if (f.to >= c) return e(n, r, i, o, a, l, s);
						e(n, r.slice(0, f.to - u), i, o, null, l, s), (o = null), (r = r.slice(f.to - u)), (u = f.to);
					}
				};
			}
			function en(e, t, n, r) {
				var i = !r && n.widgetNode;
				i && e.map.push(e.pos, e.pos + t, i),
					!r &&
						e.cm.display.input.needsContentAttribute &&
						(i || (i = e.content.appendChild(document.createElement("span"))),
						i.setAttribute("cm-marker", n.id)),
					i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
					(e.pos += t),
					(e.trailingSpace = !1);
			}
			function tn(e, t, n) {
				var r = e.markedSpans,
					i = e.text,
					o = 0;
				if (r)
					for (var a, l, s, u, c, f, d, p = i.length, h = 0, m = 1, g = "", v = 0; ; ) {
						if (v == h) {
							(s = u = c = l = ""), (d = null), (f = null), (v = 1 / 0);
							for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
								var w = r[x],
									k = w.marker;
								if ("bookmark" == k.type && w.from == h && k.widgetNode) y.push(k);
								else if (
									w.from <= h &&
									(null == w.to || w.to > h || (k.collapsed && w.to == h && w.from == h))
								) {
									if (
										(null != w.to && w.to != h && v > w.to && ((v = w.to), (u = "")),
										k.className && (s += " " + k.className),
										k.css && (l = (l ? l + ";" : "") + k.css),
										k.startStyle && w.from == h && (c += " " + k.startStyle),
										k.endStyle && w.to == v && (b || (b = [])).push(k.endStyle, w.to),
										k.title && ((d || (d = {})).title = k.title),
										k.attributes)
									)
										for (var C in k.attributes) (d || (d = {}))[C] = k.attributes[C];
									k.collapsed && (!f || Et(f.marker, k) < 0) && (f = w);
								} else w.from > h && v > w.from && (v = w.from);
							}
							if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (u += " " + b[S]);
							if (!f || f.from == h) for (var T = 0; T < y.length; ++T) en(t, 0, y[T]);
							if (f && (f.from || 0) == h) {
								if ((en(t, (null == f.to ? p + 1 : f.to) - h, f.marker, null == f.from), null == f.to))
									return;
								f.to == h && (f = !1);
							}
						}
						if (h >= p) break;
						for (var L = Math.min(p, v); ; ) {
							if (g) {
								var O = h + g.length;
								if (!f) {
									var A = O > L ? g.slice(0, L - h) : g;
									t.addToken(t, A, a ? a + s : s, c, h + A.length == v ? u : "", l, d);
								}
								if (O >= L) {
									(g = g.slice(L - h)), (h = L);
									break;
								}
								(h = O), (c = "");
							}
							(g = i.slice(o, (o = n[m++]))), (a = Kt(n[m++], t.cm.options));
						}
					}
				else
					for (var M = 1; M < n.length; M += 2)
						t.addToken(t, i.slice(o, (o = n[M])), Kt(n[M + 1], t.cm.options));
			}
			function nn(e, t, n) {
				(this.line = t),
					(this.rest = (function (e) {
						for (var t, n; (t = Ht(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
						return n;
					})(t)),
					(this.size = this.rest ? Ke(K(this.rest)) - n + 1 : 1),
					(this.node = this.text = null),
					(this.hidden = _t(e, t));
			}
			function rn(e, t, n) {
				for (var r, i = [], o = t; o < n; o = r) {
					var a = new nn(e.doc, Ue(e.doc, o), o);
					(r = o + a.size), i.push(a);
				}
				return i;
			}
			var on = null;
			var an = null;
			function ln(e, t) {
				var n = pe(e, t);
				if (n.length) {
					var r,
						i = Array.prototype.slice.call(arguments, 2);
					on ? (r = on.delayedCallbacks) : an ? (r = an) : ((r = an = []), setTimeout(sn, 0));
					for (
						var o = function (e) {
								r.push(function () {
									return n[e].apply(null, i);
								});
							},
							a = 0;
						a < n.length;
						++a
					)
						o(a);
				}
			}
			function sn() {
				var e = an;
				an = null;
				for (var t = 0; t < e.length; ++t) e[t]();
			}
			function un(e, t, n, r) {
				for (var i = 0; i < t.changes.length; i++) {
					var o = t.changes[i];
					"text" == o
						? dn(e, t)
						: "gutter" == o
						? hn(e, t, n, r)
						: "class" == o
						? pn(e, t)
						: "widget" == o && mn(e, t, r);
				}
				t.changes = null;
			}
			function cn(e) {
				return (
					e.node == e.text &&
						((e.node = M("div", null, null, "position: relative")),
						e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
						e.node.appendChild(e.text),
						a && l < 8 && (e.node.style.zIndex = 2)),
					e.node
				);
			}
			function fn(e, t) {
				var n = e.display.externalMeasured;
				return n && n.line == t.line
					? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built)
					: Yt(e, t);
			}
			function dn(e, t) {
				var n = t.text.className,
					r = fn(e, t);
				t.text == t.node && (t.node = r.pre),
					t.text.parentNode.replaceChild(r.pre, t.text),
					(t.text = r.pre),
					r.bgClass != t.bgClass || r.textClass != t.textClass
						? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), pn(e, t))
						: n && (t.text.className = n);
			}
			function pn(e, t) {
				!(function (e, t) {
					var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
					if ((n && (n += " CodeMirror-linebackground"), t.background))
						n
							? (t.background.className = n)
							: (t.background.parentNode.removeChild(t.background), (t.background = null));
					else if (n) {
						var r = cn(t);
						(t.background = r.insertBefore(M("div", null, n), r.firstChild)),
							e.display.input.setUneditable(t.background);
					}
				})(e, t),
					t.line.wrapClass
						? (cn(t).className = t.line.wrapClass)
						: t.node != t.text && (t.node.className = "");
				var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
				t.text.className = n || "";
			}
			function hn(e, t, n, r) {
				if (
					(t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
					t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
					t.line.gutterClass)
				) {
					var i = cn(t);
					(t.gutterBackground = M(
						"div",
						null,
						"CodeMirror-gutter-background " + t.line.gutterClass,
						"left: " +
							(e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
							"px; width: " +
							r.gutterTotalWidth +
							"px"
					)),
						e.display.input.setUneditable(t.gutterBackground),
						i.insertBefore(t.gutterBackground, t.text);
				}
				var o = t.line.gutterMarkers;
				if (e.options.lineNumbers || o) {
					var a = cn(t),
						l = (t.gutter = M(
							"div",
							null,
							"CodeMirror-gutter-wrapper",
							"left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px"
						));
					if (
						(e.display.input.setUneditable(l),
						a.insertBefore(l, t.text),
						t.line.gutterClass && (l.className += " " + t.line.gutterClass),
						!e.options.lineNumbers ||
							(o && o["CodeMirror-linenumbers"]) ||
							(t.lineNumber = l.appendChild(
								M(
									"div",
									Je(e.options, n),
									"CodeMirror-linenumber CodeMirror-gutter-elt",
									"left: " +
										r.gutterLeft["CodeMirror-linenumbers"] +
										"px; width: " +
										e.display.lineNumInnerWidth +
										"px"
								)
							)),
						o)
					)
						for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
							var u = e.display.gutterSpecs[s].className,
								c = o.hasOwnProperty(u) && o[u];
							c &&
								l.appendChild(
									M(
										"div",
										[c],
										"CodeMirror-gutter-elt",
										"left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"
									)
								);
						}
				}
			}
			function mn(e, t, n) {
				t.alignable && (t.alignable = null);
				for (var r = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o)
					(o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
				vn(e, t, n);
			}
			function gn(e, t, n, r) {
				var i = fn(e, t);
				return (
					(t.text = t.node = i.pre),
					i.bgClass && (t.bgClass = i.bgClass),
					i.textClass && (t.textClass = i.textClass),
					pn(e, t),
					hn(e, t, n, r),
					vn(e, t, r),
					t.node
				);
			}
			function vn(e, t, n) {
				if ((yn(e, t.line, t, n, !0), t.rest))
					for (var r = 0; r < t.rest.length; r++) yn(e, t.rest[r], t, n, !1);
			}
			function yn(e, t, n, r, i) {
				if (t.widgets)
					for (var o = cn(n), a = 0, l = t.widgets; a < l.length; ++a) {
						var s = l[a],
							u = M("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
						s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
							bn(s, u, n, r),
							e.display.input.setUneditable(u),
							i && s.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u),
							ln(s, "redraw");
					}
			}
			function bn(e, t, n, r) {
				if (e.noHScroll) {
					(n.alignable || (n.alignable = [])).push(t);
					var i = r.wrapperWidth;
					(t.style.left = r.fixedPos + "px"),
						e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + "px")),
						(t.style.width = i + "px");
				}
				e.coverGutter &&
					((t.style.zIndex = 5),
					(t.style.position = "relative"),
					e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
			}
			function xn(e) {
				if (null != e.height) return e.height;
				var t = e.doc.cm;
				if (!t) return 0;
				if (!E(document.body, e.node)) {
					var n = "position: relative;";
					e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
						e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"),
						A(t.display.measure, M("div", [e.node], null, n));
				}
				return (e.height = e.node.parentNode.offsetHeight);
			}
			function wn(e, t) {
				for (var n = Se(t); n != e.wrapper; n = n.parentNode)
					if (
						!n ||
						(1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) ||
						(n.parentNode == e.sizer && n != e.mover)
					)
						return !0;
			}
			function kn(e) {
				return e.lineSpace.offsetTop;
			}
			function Cn(e) {
				return e.mover.offsetHeight - e.lineSpace.offsetHeight;
			}
			function Sn(e) {
				if (e.cachedPaddingH) return e.cachedPaddingH;
				var t = A(e.measure, M("pre", "x", "CodeMirror-line-like")),
					n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
					r = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)};
				return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
			}
			function Tn(e) {
				return B - e.display.nativeBarWidth;
			}
			function Ln(e) {
				return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth;
			}
			function On(e) {
				return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight;
			}
			function An(e, t, n) {
				if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
				for (var r = 0; r < e.rest.length; r++)
					if (e.rest[r] == t) return {map: e.measure.maps[r], cache: e.measure.caches[r]};
				for (var i = 0; i < e.rest.length; i++)
					if (Ke(e.rest[i]) > n) return {map: e.measure.maps[i], cache: e.measure.caches[i], before: !0};
			}
			function Mn(e, t, n, r) {
				return Pn(e, En(e, t), n, r);
			}
			function Nn(e, t) {
				if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[lr(e, t)];
				var n = e.display.externalMeasured;
				return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
			}
			function En(e, t) {
				var n = Ke(t),
					r = Nn(e, n);
				r && !r.text ? (r = null) : r && r.changes && (un(e, r, n, nr(e)), (e.curOp.forceUpdate = !0)),
					r ||
						(r = (function (e, t) {
							var n = Ke((t = It(t))),
								r = (e.display.externalMeasured = new nn(e.doc, t, n));
							r.lineN = n;
							var i = (r.built = Yt(e, r));
							return (r.text = i.pre), A(e.display.lineMeasure, i.pre), r;
						})(e, t));
				var i = An(r, t, n);
				return {line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1};
			}
			function Pn(e, t, n, r, i) {
				t.before && (n = -1);
				var o,
					s = n + (r || "");
				return (
					t.cache.hasOwnProperty(s)
						? (o = t.cache[s])
						: (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
						  t.hasHeights ||
								(!(function (e, t, n) {
									var r = e.options.lineWrapping,
										i = r && Ln(e);
									if (!t.measure.heights || (r && t.measure.width != i)) {
										var o = (t.measure.heights = []);
										if (r) {
											t.measure.width = i;
											for (
												var a = t.text.firstChild.getClientRects(), l = 0;
												l < a.length - 1;
												l++
											) {
												var s = a[l],
													u = a[l + 1];
												Math.abs(s.bottom - u.bottom) > 2 &&
													o.push((s.bottom + u.top) / 2 - n.top);
											}
										}
										o.push(n.bottom - n.top);
									}
								})(e, t.view, t.rect),
								(t.hasHeights = !0)),
						  (o = (function (e, t, n, r) {
								var i,
									o = Rn(t.map, n, r),
									s = o.node,
									u = o.start,
									c = o.end,
									f = o.collapse;
								if (3 == s.nodeType) {
									for (var d = 0; d < 4; d++) {
										for (; u && ie(t.line.text.charAt(o.coverStart + u)); ) --u;
										for (
											;
											o.coverStart + c < o.coverEnd && ie(t.line.text.charAt(o.coverStart + c));

										)
											++c;
										if (
											(i =
												a && l < 9 && 0 == u && c == o.coverEnd - o.coverStart
													? s.parentNode.getBoundingClientRect()
													: jn(T(s, u, c).getClientRects(), r)).left ||
											i.right ||
											0 == u
										)
											break;
										(c = u), (u -= 1), (f = "right");
									}
									a &&
										l < 11 &&
										(i = (function (e, t) {
											if (
												!window.screen ||
												null == screen.logicalXDPI ||
												screen.logicalXDPI == screen.deviceXDPI ||
												!(function (e) {
													if (null != He) return He;
													var t = A(e, M("span", "x")),
														n = t.getBoundingClientRect(),
														r = T(t, 0, 1).getBoundingClientRect();
													return (He = Math.abs(n.left - r.left) > 1);
												})(e)
											)
												return t;
											var n = screen.logicalXDPI / screen.deviceXDPI,
												r = screen.logicalYDPI / screen.deviceYDPI;
											return {
												left: t.left * n,
												right: t.right * n,
												top: t.top * r,
												bottom: t.bottom * r,
											};
										})(e.display.measure, i));
								} else {
									var p;
									u > 0 && (f = r = "right"),
										(i =
											e.options.lineWrapping && (p = s.getClientRects()).length > 1
												? p["right" == r ? p.length - 1 : 0]
												: s.getBoundingClientRect());
								}
								if (a && l < 9 && !u && (!i || (!i.left && !i.right))) {
									var h = s.parentNode.getClientRects()[0];
									i = h
										? {left: h.left, right: h.left + tr(e.display), top: h.top, bottom: h.bottom}
										: Hn;
								}
								for (
									var m = i.top - t.rect.top,
										g = i.bottom - t.rect.top,
										v = (m + g) / 2,
										y = t.view.measure.heights,
										b = 0;
									b < y.length - 1 && !(v < y[b]);
									b++
								);
								var x = b ? y[b - 1] : 0,
									w = y[b],
									k = {
										left: ("right" == f ? i.right : i.left) - t.rect.left,
										right: ("left" == f ? i.left : i.right) - t.rect.left,
										top: x,
										bottom: w,
									};
								i.left || i.right || (k.bogus = !0);
								e.options.singleCursorHeightPerLine || ((k.rtop = m), (k.rbottom = g));
								return k;
						  })(e, t, n, r)).bogus || (t.cache[s] = o)),
					{left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom}
				);
			}
			var Dn,
				Hn = {left: 0, right: 0, top: 0, bottom: 0};
			function Rn(e, t, n) {
				for (var r, i, o, a, l, s, u = 0; u < e.length; u += 3)
					if (
						((l = e[u]),
						(s = e[u + 1]),
						t < l
							? ((i = 0), (o = 1), (a = "left"))
							: t < s
							? (o = (i = t - l) + 1)
							: (u == e.length - 3 || (t == s && e[u + 3] > t)) &&
							  ((i = (o = s - l) - 1), t >= s && (a = "right")),
						null != i)
					) {
						if (
							((r = e[u + 2]),
							l == s && n == (r.insertLeft ? "left" : "right") && (a = n),
							"left" == n && 0 == i)
						)
							for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
								(r = e[2 + (u -= 3)]), (a = "left");
						if ("right" == n && i == s - l)
							for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
								(r = e[(u += 3) + 2]), (a = "right");
						break;
					}
				return {node: r, start: i, end: o, collapse: a, coverStart: l, coverEnd: s};
			}
			function jn(e, t) {
				var n = Hn;
				if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
				else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
				return n;
			}
			function In(e) {
				if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
					for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
			}
			function Wn(e) {
				(e.display.externalMeasure = null), O(e.display.lineMeasure);
				for (var t = 0; t < e.display.view.length; t++) In(e.display.view[t]);
			}
			function Fn(e) {
				Wn(e),
					(e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
					e.options.lineWrapping || (e.display.maxLineChanged = !0),
					(e.display.lineNumChars = null);
			}
			function _n() {
				return c && g
					? -(
							document.body.getBoundingClientRect().left -
							parseInt(getComputedStyle(document.body).marginLeft)
					  )
					: window.pageXOffset || (document.documentElement || document.body).scrollLeft;
			}
			function Bn() {
				return c && g
					? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
					: window.pageYOffset || (document.documentElement || document.body).scrollTop;
			}
			function qn(e) {
				var t = 0;
				if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += xn(e.widgets[n]));
				return t;
			}
			function zn(e, t, n, r, i) {
				if (!i) {
					var o = qn(t);
					(n.top += o), (n.bottom += o);
				}
				if ("line" == r) return n;
				r || (r = "local");
				var a = qt(t);
				if (("local" == r ? (a += kn(e.display)) : (a -= e.display.viewOffset), "page" == r || "window" == r)) {
					var l = e.display.lineSpace.getBoundingClientRect();
					a += l.top + ("window" == r ? 0 : Bn());
					var s = l.left + ("window" == r ? 0 : _n());
					(n.left += s), (n.right += s);
				}
				return (n.top += a), (n.bottom += a), n;
			}
			function $n(e, t, n) {
				if ("div" == n) return t;
				var r = t.left,
					i = t.top;
				if ("page" == n) (r -= _n()), (i -= Bn());
				else if ("local" == n || !n) {
					var o = e.display.sizer.getBoundingClientRect();
					(r += o.left), (i += o.top);
				}
				var a = e.display.lineSpace.getBoundingClientRect();
				return {left: r - a.left, top: i - a.top};
			}
			function Un(e, t, n, r, i) {
				return r || (r = Ue(e.doc, t.line)), zn(e, r, Mn(e, r, t.ch, i), n);
			}
			function Vn(e, t, n, r, i, o) {
				function a(t, a) {
					var l = Pn(e, i, t, a ? "right" : "left", o);
					return a ? (l.left = l.right) : (l.right = l.left), zn(e, r, l, n);
				}
				(r = r || Ue(e.doc, t.line)), i || (i = En(e, r));
				var l = ce(r, e.doc.direction),
					s = t.ch,
					u = t.sticky;
				if (
					(s >= r.text.length ? ((s = r.text.length), (u = "before")) : s <= 0 && ((s = 0), (u = "after")),
					!l)
				)
					return a("before" == u ? s - 1 : s, "before" == u);
				function c(e, t, n) {
					var r = 1 == l[t].level;
					return a(n ? e - 1 : e, r != n);
				}
				var f = se(l, s, u),
					d = le,
					p = c(s, f, "before" == u);
				return null != d && (p.other = c(s, d, "before" != u)), p;
			}
			function Gn(e, t) {
				var n = 0;
				(t = at(e.doc, t)), e.options.lineWrapping || (n = tr(e.display) * t.ch);
				var r = Ue(e.doc, t.line),
					i = qt(r) + kn(e.display);
				return {left: n, right: n, top: i, bottom: i + r.height};
			}
			function Xn(e, t, n, r, i) {
				var o = Ze(e, t, n);
				return (o.xRel = i), r && (o.outside = r), o;
			}
			function Kn(e, t, n) {
				var r = e.doc;
				if ((n += e.display.viewOffset) < 0) return Xn(r.first, 0, null, -1, -1);
				var i = Ye(r, n),
					o = r.first + r.size - 1;
				if (i > o) return Xn(r.first + r.size - 1, Ue(r, o).text.length, null, 1, 1);
				t < 0 && (t = 0);
				for (var a = Ue(r, i); ; ) {
					var l = Zn(e, a, i, t, n),
						s = Rt(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
					if (!s) return l;
					var u = s.find(1);
					if (u.line == i) return u;
					a = Ue(r, (i = u.line));
				}
			}
			function Yn(e, t, n, r) {
				r -= qn(t);
				var i = t.text.length,
					o = ae(
						function (t) {
							return Pn(e, n, t - 1).bottom <= r;
						},
						i,
						0
					);
				return {
					begin: o,
					end: (i = ae(
						function (t) {
							return Pn(e, n, t).top > r;
						},
						o,
						i
					)),
				};
			}
			function Qn(e, t, n, r) {
				return n || (n = En(e, t)), Yn(e, t, n, zn(e, t, Pn(e, n, r), "line").top);
			}
			function Jn(e, t, n, r) {
				return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
			}
			function Zn(e, t, n, r, i) {
				i -= qt(t);
				var o = En(e, t),
					a = qn(t),
					l = 0,
					s = t.text.length,
					u = !0,
					c = ce(t, e.doc.direction);
				if (c) {
					var f = (
						e.options.lineWrapping
							? function (e, t, n, r, i, o, a) {
									var l = Yn(e, t, r, a),
										s = l.begin,
										u = l.end;
									/\s/.test(t.text.charAt(u - 1)) && u--;
									for (var c = null, f = null, d = 0; d < i.length; d++) {
										var p = i[d];
										if (!(p.from >= u || p.to <= s)) {
											var h = 1 != p.level,
												m = Pn(e, r, h ? Math.min(u, p.to) - 1 : Math.max(s, p.from)).right,
												g = m < o ? o - m + 1e9 : m - o;
											(!c || f > g) && ((c = p), (f = g));
										}
									}
									c || (c = i[i.length - 1]);
									c.from < s && (c = {from: s, to: c.to, level: c.level});
									c.to > u && (c = {from: c.from, to: u, level: c.level});
									return c;
							  }
							: function (e, t, n, r, i, o, a) {
									var l = ae(
											function (l) {
												var s = i[l],
													u = 1 != s.level;
												return Jn(
													Vn(
														e,
														Ze(n, u ? s.to : s.from, u ? "before" : "after"),
														"line",
														t,
														r
													),
													o,
													a,
													!0
												);
											},
											0,
											i.length - 1
										),
										s = i[l];
									if (l > 0) {
										var u = 1 != s.level,
											c = Vn(e, Ze(n, u ? s.from : s.to, u ? "after" : "before"), "line", t, r);
										Jn(c, o, a, !0) && c.top > a && (s = i[l - 1]);
									}
									return s;
							  }
					)(e, t, n, o, c, r, i);
					(l = (u = 1 != f.level) ? f.from : f.to - 1), (s = u ? f.to : f.from - 1);
				}
				var d,
					p,
					h = null,
					m = null,
					g = ae(
						function (t) {
							var n = Pn(e, o, t);
							return (
								(n.top += a),
								(n.bottom += a),
								!!Jn(n, r, i, !1) && (n.top <= i && n.left <= r && ((h = t), (m = n)), !0)
							);
						},
						l,
						s
					),
					v = !1;
				if (m) {
					var y = r - m.left < m.right - r,
						b = y == u;
					(g = h + (b ? 0 : 1)), (p = b ? "after" : "before"), (d = y ? m.left : m.right);
				} else {
					u || (g != s && g != l) || g++,
						(p =
							0 == g
								? "after"
								: g == t.text.length
								? "before"
								: Pn(e, o, g - (u ? 1 : 0)).bottom + a <= i == u
								? "after"
								: "before");
					var x = Vn(e, Ze(n, g, p), "line", t, o);
					(d = x.left), (v = i < x.top ? -1 : i >= x.bottom ? 1 : 0);
				}
				return Xn(n, (g = oe(t.text, g, 1)), p, v, r - d);
			}
			function er(e) {
				if (null != e.cachedTextHeight) return e.cachedTextHeight;
				if (null == Dn) {
					Dn = M("pre", null, "CodeMirror-line-like");
					for (var t = 0; t < 49; ++t) Dn.appendChild(document.createTextNode("x")), Dn.appendChild(M("br"));
					Dn.appendChild(document.createTextNode("x"));
				}
				A(e.measure, Dn);
				var n = Dn.offsetHeight / 50;
				return n > 3 && (e.cachedTextHeight = n), O(e.measure), n || 1;
			}
			function tr(e) {
				if (null != e.cachedCharWidth) return e.cachedCharWidth;
				var t = M("span", "xxxxxxxxxx"),
					n = M("pre", [t], "CodeMirror-line-like");
				A(e.measure, n);
				var r = t.getBoundingClientRect(),
					i = (r.right - r.left) / 10;
				return i > 2 && (e.cachedCharWidth = i), i || 10;
			}
			function nr(e) {
				for (
					var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0;
					o;
					o = o.nextSibling, ++a
				) {
					var l = e.display.gutterSpecs[a].className;
					(n[l] = o.offsetLeft + o.clientLeft + i), (r[l] = o.clientWidth);
				}
				return {
					fixedPos: rr(t),
					gutterTotalWidth: t.gutters.offsetWidth,
					gutterLeft: n,
					gutterWidth: r,
					wrapperWidth: t.wrapper.clientWidth,
				};
			}
			function rr(e) {
				return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
			}
			function ir(e) {
				var t = er(e.display),
					n = e.options.lineWrapping,
					r = n && Math.max(5, e.display.scroller.clientWidth / tr(e.display) - 3);
				return function (i) {
					if (_t(e.doc, i)) return 0;
					var o = 0;
					if (i.widgets)
						for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
					return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
				};
			}
			function or(e) {
				var t = e.doc,
					n = ir(e);
				t.iter(function (e) {
					var t = n(e);
					t != e.height && Xe(e, t);
				});
			}
			function ar(e, t, n, r) {
				var i = e.display;
				if (!n && "true" == Se(t).getAttribute("cm-not-content")) return null;
				var o,
					a,
					l = i.lineSpace.getBoundingClientRect();
				try {
					(o = t.clientX - l.left), (a = t.clientY - l.top);
				} catch (e) {
					return null;
				}
				var s,
					u = Kn(e, o, a);
				if (r && u.xRel > 0 && (s = Ue(e.doc, u.line).text).length == u.ch) {
					var c = W(s, s.length, e.options.tabSize) - s.length;
					u = Ze(u.line, Math.max(0, Math.round((o - Sn(e.display).left) / tr(e.display)) - c));
				}
				return u;
			}
			function lr(e, t) {
				if (t >= e.display.viewTo) return null;
				if ((t -= e.display.viewFrom) < 0) return null;
				for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
			}
			function sr(e, t, n, r) {
				null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
				var i = e.display;
				if (
					(r &&
						n < i.viewTo &&
						(null == i.updateLineNumbers || i.updateLineNumbers > t) &&
						(i.updateLineNumbers = t),
					(e.curOp.viewChanged = !0),
					t >= i.viewTo)
				)
					wt && Wt(e.doc, t) < i.viewTo && cr(e);
				else if (n <= i.viewFrom)
					wt && Ft(e.doc, n + r) > i.viewFrom ? cr(e) : ((i.viewFrom += r), (i.viewTo += r));
				else if (t <= i.viewFrom && n >= i.viewTo) cr(e);
				else if (t <= i.viewFrom) {
					var o = fr(e, n, n + r, 1);
					o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : cr(e);
				} else if (n >= i.viewTo) {
					var a = fr(e, t, t, -1);
					a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : cr(e);
				} else {
					var l = fr(e, t, t, -1),
						s = fr(e, n, n + r, 1);
					l && s
						? ((i.view = i.view
								.slice(0, l.index)
								.concat(rn(e, l.lineN, s.lineN))
								.concat(i.view.slice(s.index))),
						  (i.viewTo += r))
						: cr(e);
				}
				var u = i.externalMeasured;
				u && (n < u.lineN ? (u.lineN += r) : t < u.lineN + u.size && (i.externalMeasured = null));
			}
			function ur(e, t, n) {
				e.curOp.viewChanged = !0;
				var r = e.display,
					i = e.display.externalMeasured;
				if (
					(i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
					!(t < r.viewFrom || t >= r.viewTo))
				) {
					var o = r.view[lr(e, t)];
					if (null != o.node) {
						var a = o.changes || (o.changes = []);
						-1 == _(a, n) && a.push(n);
					}
				}
			}
			function cr(e) {
				(e.display.viewFrom = e.display.viewTo = e.doc.first),
					(e.display.view = []),
					(e.display.viewOffset = 0);
			}
			function fr(e, t, n, r) {
				var i,
					o = lr(e, t),
					a = e.display.view;
				if (!wt || n == e.doc.first + e.doc.size) return {index: o, lineN: n};
				for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
				if (l != t) {
					if (r > 0) {
						if (o == a.length - 1) return null;
						(i = l + a[o].size - t), o++;
					} else i = l - t;
					(t += i), (n += i);
				}
				for (; Wt(e.doc, n) != n; ) {
					if (o == (r < 0 ? 0 : a.length - 1)) return null;
					(n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
				}
				return {index: o, lineN: n};
			}
			function dr(e) {
				for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
					var i = t[r];
					i.hidden || (i.node && !i.changes) || ++n;
				}
				return n;
			}
			function pr(e) {
				e.display.input.showSelection(e.display.input.prepareSelection());
			}
			function hr(e, t) {
				void 0 === t && (t = !0);
				for (
					var n = e.doc,
						r = {},
						i = (r.cursors = document.createDocumentFragment()),
						o = (r.selection = document.createDocumentFragment()),
						a = 0;
					a < n.sel.ranges.length;
					a++
				)
					if (t || a != n.sel.primIndex) {
						var l = n.sel.ranges[a];
						if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
							var s = l.empty();
							(s || e.options.showCursorWhenSelecting) && mr(e, l.head, i), s || vr(e, l, o);
						}
					}
				return r;
			}
			function mr(e, t, n) {
				var r = Vn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
					i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
				if (
					((i.style.left = r.left + "px"),
					(i.style.top = r.top + "px"),
					(i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
					r.other)
				) {
					var o = n.appendChild(M("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
					(o.style.display = ""),
						(o.style.left = r.other.left + "px"),
						(o.style.top = r.other.top + "px"),
						(o.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
				}
			}
			function gr(e, t) {
				return e.top - t.top || e.left - t.left;
			}
			function vr(e, t, n) {
				var r = e.display,
					i = e.doc,
					o = document.createDocumentFragment(),
					a = Sn(e.display),
					l = a.left,
					s = Math.max(r.sizerWidth, Ln(e) - r.sizer.offsetLeft) - a.right,
					u = "ltr" == i.direction;
				function c(e, t, n, r) {
					t < 0 && (t = 0),
						(t = Math.round(t)),
						(r = Math.round(r)),
						o.appendChild(
							M(
								"div",
								null,
								"CodeMirror-selected",
								"position: absolute; left: " +
									e +
									"px;\n                             top: " +
									t +
									"px; width: " +
									(null == n ? s - e : n) +
									"px;\n                             height: " +
									(r - t) +
									"px"
							)
						);
				}
				function f(t, n, r) {
					var o,
						a,
						f = Ue(i, t),
						d = f.text.length;
					function p(n, r) {
						return Un(e, Ze(t, n), "div", f, r);
					}
					function h(t, n, r) {
						var i = Qn(e, f, null, t),
							o = ("ltr" == n) == ("after" == r) ? "left" : "right";
						return p("after" == r ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
					}
					var m = ce(f, i.direction);
					return (
						(function (e, t, n, r) {
							if (!e) return r(t, n, "ltr", 0);
							for (var i = !1, o = 0; o < e.length; ++o) {
								var a = e[o];
								((a.from < n && a.to > t) || (t == n && a.to == t)) &&
									(r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o),
									(i = !0));
							}
							i || r(t, n, "ltr");
						})(m, n || 0, null == r ? d : r, function (e, t, i, f) {
							var g = "ltr" == i,
								v = p(e, g ? "left" : "right"),
								y = p(t - 1, g ? "right" : "left"),
								b = null == n && 0 == e,
								x = null == r && t == d,
								w = 0 == f,
								k = !m || f == m.length - 1;
							if (y.top - v.top <= 3) {
								var C = (u ? x : b) && k,
									S = (u ? b : x) && w ? l : (g ? v : y).left,
									T = C ? s : (g ? y : v).right;
								c(S, v.top, T - S, v.bottom);
							} else {
								var L, O, A, M;
								g
									? ((L = u && b && w ? l : v.left),
									  (O = u ? s : h(e, i, "before")),
									  (A = u ? l : h(t, i, "after")),
									  (M = u && x && k ? s : y.right))
									: ((L = u ? h(e, i, "before") : l),
									  (O = !u && b && w ? s : v.right),
									  (A = !u && x && k ? l : y.left),
									  (M = u ? h(t, i, "after") : s)),
									c(L, v.top, O - L, v.bottom),
									v.bottom < y.top && c(l, v.bottom, null, y.top),
									c(A, y.top, M - A, y.bottom);
							}
							(!o || gr(v, o) < 0) && (o = v),
								gr(y, o) < 0 && (o = y),
								(!a || gr(v, a) < 0) && (a = v),
								gr(y, a) < 0 && (a = y);
						}),
						{start: o, end: a}
					);
				}
				var d = t.from(),
					p = t.to();
				if (d.line == p.line) f(d.line, d.ch, p.ch);
				else {
					var h = Ue(i, d.line),
						m = Ue(i, p.line),
						g = It(h) == It(m),
						v = f(d.line, d.ch, g ? h.text.length + 1 : null).end,
						y = f(p.line, g ? 0 : null, p.ch).start;
					g &&
						(v.top < y.top - 2
							? (c(v.right, v.top, null, v.bottom), c(l, y.top, y.left, y.bottom))
							: c(v.right, v.top, y.left - v.right, v.bottom)),
						v.bottom < y.top && c(l, v.bottom, null, y.top);
				}
				n.appendChild(o);
			}
			function yr(e) {
				if (e.state.focused) {
					var t = e.display;
					clearInterval(t.blinker);
					var n = !0;
					(t.cursorDiv.style.visibility = ""),
						e.options.cursorBlinkRate > 0
							? (t.blinker = setInterval(function () {
									e.hasFocus() || kr(e), (t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
							  }, e.options.cursorBlinkRate))
							: e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
				}
			}
			function br(e) {
				e.hasFocus() || (e.display.input.focus(), e.state.focused || wr(e));
			}
			function xr(e) {
				(e.state.delayingBlurEvent = !0),
					setTimeout(function () {
						e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), e.state.focused && kr(e));
					}, 100);
			}
			function wr(e, t) {
				e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
					"nocursor" != e.options.readOnly &&
						(e.state.focused ||
							(me(e, "focus", e, t),
							(e.state.focused = !0),
							D(e.display.wrapper, "CodeMirror-focused"),
							e.curOp ||
								e.display.selForContextMenu == e.doc.sel ||
								(e.display.input.reset(),
								s &&
									setTimeout(function () {
										return e.display.input.reset(!0);
									}, 20)),
							e.display.input.receivedFocus()),
						yr(e));
			}
			function kr(e, t) {
				e.state.delayingBlurEvent ||
					(e.state.focused &&
						(me(e, "blur", e, t), (e.state.focused = !1), L(e.display.wrapper, "CodeMirror-focused")),
					clearInterval(e.display.blinker),
					setTimeout(function () {
						e.state.focused || (e.display.shift = !1);
					}, 150));
			}
			function Cr(e) {
				for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
					var i = t.view[r],
						o = e.options.lineWrapping,
						s = void 0,
						u = 0;
					if (!i.hidden) {
						if (a && l < 8) {
							var c = i.node.offsetTop + i.node.offsetHeight;
							(s = c - n), (n = c);
						} else {
							var f = i.node.getBoundingClientRect();
							(s = f.bottom - f.top),
								!o &&
									i.text.firstChild &&
									(u = i.text.firstChild.getBoundingClientRect().right - f.left - 1);
						}
						var d = i.line.height - s;
						if ((d > 0.005 || d < -0.005) && (Xe(i.line, s), Sr(i.line), i.rest))
							for (var p = 0; p < i.rest.length; p++) Sr(i.rest[p]);
						if (u > e.display.sizerWidth) {
							var h = Math.ceil(u / tr(e.display));
							h > e.display.maxLineLength &&
								((e.display.maxLineLength = h),
								(e.display.maxLine = i.line),
								(e.display.maxLineChanged = !0));
						}
					}
				}
			}
			function Sr(e) {
				if (e.widgets)
					for (var t = 0; t < e.widgets.length; ++t) {
						var n = e.widgets[t],
							r = n.node.parentNode;
						r && (n.height = r.offsetHeight);
					}
			}
			function Tr(e, t, n) {
				var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
				r = Math.floor(r - kn(e));
				var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
					o = Ye(t, r),
					a = Ye(t, i);
				if (n && n.ensure) {
					var l = n.ensure.from.line,
						s = n.ensure.to.line;
					l < o
						? ((o = l), (a = Ye(t, qt(Ue(t, l)) + e.wrapper.clientHeight)))
						: Math.min(s, t.lastLine()) >= a &&
						  ((o = Ye(t, qt(Ue(t, s)) - e.wrapper.clientHeight)), (a = s));
				}
				return {from: o, to: Math.max(a, o + 1)};
			}
			function Lr(e, t) {
				var n = e.display,
					r = er(e.display);
				t.top < 0 && (t.top = 0);
				var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
					o = On(e),
					a = {};
				t.bottom - t.top > o && (t.bottom = t.top + o);
				var l = e.doc.height + Cn(n),
					s = t.top < r,
					u = t.bottom > l - r;
				if (t.top < i) a.scrollTop = s ? 0 : t.top;
				else if (t.bottom > i + o) {
					var c = Math.min(t.top, (u ? l : t.bottom) - o);
					c != i && (a.scrollTop = c);
				}
				var f = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
					d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - f,
					p = Ln(e) - n.gutters.offsetWidth,
					h = t.right - t.left > p;
				return (
					h && (t.right = t.left + p),
					t.left < 10
						? (a.scrollLeft = 0)
						: t.left < d
						? (a.scrollLeft = Math.max(0, t.left + f - (h ? 0 : 10)))
						: t.right > p + d - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - p),
					a
				);
			}
			function Or(e, t) {
				null != t &&
					(Nr(e),
					(e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
			}
			function Ar(e) {
				Nr(e);
				var t = e.getCursor();
				e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin};
			}
			function Mr(e, t, n) {
				(null == t && null == n) || Nr(e),
					null != t && (e.curOp.scrollLeft = t),
					null != n && (e.curOp.scrollTop = n);
			}
			function Nr(e) {
				var t = e.curOp.scrollToPos;
				t && ((e.curOp.scrollToPos = null), Er(e, Gn(e, t.from), Gn(e, t.to), t.margin));
			}
			function Er(e, t, n, r) {
				var i = Lr(e, {
					left: Math.min(t.left, n.left),
					top: Math.min(t.top, n.top) - r,
					right: Math.max(t.right, n.right),
					bottom: Math.max(t.bottom, n.bottom) + r,
				});
				Mr(e, i.scrollLeft, i.scrollTop);
			}
			function Pr(e, t) {
				Math.abs(e.doc.scrollTop - t) < 2 || (n || oi(e, {top: t}), Dr(e, t, !0), n && oi(e), ei(e, 100));
			}
			function Dr(e, t, n) {
				(t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
					(e.display.scroller.scrollTop != t || n) &&
						((e.doc.scrollTop = t),
						e.display.scrollbars.setScrollTop(t),
						e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
			}
			function Hr(e, t, n, r) {
				(t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
					((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) ||
						((e.doc.scrollLeft = t),
						si(e),
						e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
						e.display.scrollbars.setScrollLeft(t));
			}
			function Rr(e) {
				var t = e.display,
					n = t.gutters.offsetWidth,
					r = Math.round(e.doc.height + Cn(e.display));
				return {
					clientHeight: t.scroller.clientHeight,
					viewHeight: t.wrapper.clientHeight,
					scrollWidth: t.scroller.scrollWidth,
					clientWidth: t.scroller.clientWidth,
					viewWidth: t.wrapper.clientWidth,
					barLeft: e.options.fixedGutter ? n : 0,
					docHeight: r,
					scrollHeight: r + Tn(e) + t.barHeight,
					nativeBarWidth: t.nativeBarWidth,
					gutterWidth: n,
				};
			}
			var jr = function (e, t, n) {
				this.cm = n;
				var r = (this.vert = M("div", [M("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")),
					i = (this.horiz = M(
						"div",
						[M("div", null, null, "height: 100%; min-height: 1px")],
						"CodeMirror-hscrollbar"
					));
				(r.tabIndex = i.tabIndex = -1),
					e(r),
					e(i),
					de(r, "scroll", function () {
						r.clientHeight && t(r.scrollTop, "vertical");
					}),
					de(i, "scroll", function () {
						i.clientWidth && t(i.scrollLeft, "horizontal");
					}),
					(this.checkedZeroWidth = !1),
					a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
			};
			(jr.prototype.update = function (e) {
				var t = e.scrollWidth > e.clientWidth + 1,
					n = e.scrollHeight > e.clientHeight + 1,
					r = e.nativeBarWidth;
				if (n) {
					(this.vert.style.display = "block"), (this.vert.style.bottom = t ? r + "px" : "0");
					var i = e.viewHeight - (t ? r : 0);
					this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
				} else (this.vert.style.display = ""), (this.vert.firstChild.style.height = "0");
				if (t) {
					(this.horiz.style.display = "block"),
						(this.horiz.style.right = n ? r + "px" : "0"),
						(this.horiz.style.left = e.barLeft + "px");
					var o = e.viewWidth - e.barLeft - (n ? r : 0);
					this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
				} else (this.horiz.style.display = ""), (this.horiz.firstChild.style.width = "0");
				return (
					!this.checkedZeroWidth &&
						e.clientHeight > 0 &&
						(0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
					{right: n ? r : 0, bottom: t ? r : 0}
				);
			}),
				(jr.prototype.setScrollLeft = function (e) {
					this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
						this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
				}),
				(jr.prototype.setScrollTop = function (e) {
					this.vert.scrollTop != e && (this.vert.scrollTop = e),
						this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
				}),
				(jr.prototype.zeroWidthHack = function () {
					var e = y && !p ? "12px" : "18px";
					(this.horiz.style.height = this.vert.style.width = e),
						(this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"),
						(this.disableHoriz = new F()),
						(this.disableVert = new F());
				}),
				(jr.prototype.enableZeroWidthBar = function (e, t, n) {
					(e.style.pointerEvents = "auto"),
						t.set(1e3, function r() {
							var i = e.getBoundingClientRect();
							("vert" == n
								? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
								: document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
								? (e.style.pointerEvents = "none")
								: t.set(1e3, r);
						});
				}),
				(jr.prototype.clear = function () {
					var e = this.horiz.parentNode;
					e.removeChild(this.horiz), e.removeChild(this.vert);
				});
			var Ir = function () {};
			function Wr(e, t) {
				t || (t = Rr(e));
				var n = e.display.barWidth,
					r = e.display.barHeight;
				Fr(e, t);
				for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
					n != e.display.barWidth && e.options.lineWrapping && Cr(e),
						Fr(e, Rr(e)),
						(n = e.display.barWidth),
						(r = e.display.barHeight);
			}
			function Fr(e, t) {
				var n = e.display,
					r = n.scrollbars.update(t);
				(n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
					(n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
					(n.heightForcer.style.borderBottom = r.bottom + "px solid transparent"),
					r.right && r.bottom
						? ((n.scrollbarFiller.style.display = "block"),
						  (n.scrollbarFiller.style.height = r.bottom + "px"),
						  (n.scrollbarFiller.style.width = r.right + "px"))
						: (n.scrollbarFiller.style.display = ""),
					r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
						? ((n.gutterFiller.style.display = "block"),
						  (n.gutterFiller.style.height = r.bottom + "px"),
						  (n.gutterFiller.style.width = t.gutterWidth + "px"))
						: (n.gutterFiller.style.display = "");
			}
			(Ir.prototype.update = function () {
				return {bottom: 0, right: 0};
			}),
				(Ir.prototype.setScrollLeft = function () {}),
				(Ir.prototype.setScrollTop = function () {}),
				(Ir.prototype.clear = function () {});
			var _r = {native: jr, null: Ir};
			function Br(e) {
				e.display.scrollbars &&
					(e.display.scrollbars.clear(),
					e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)),
					(e.display.scrollbars = new _r[e.options.scrollbarStyle](
						function (t) {
							e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
								de(t, "mousedown", function () {
									e.state.focused &&
										setTimeout(function () {
											return e.display.input.focus();
										}, 0);
								}),
								t.setAttribute("cm-not-content", "true");
						},
						function (t, n) {
							"horizontal" == n ? Hr(e, t) : Pr(e, t);
						},
						e
					)),
					e.display.scrollbars.addClass && D(e.display.wrapper, e.display.scrollbars.addClass);
			}
			var qr = 0;
			function zr(e) {
				(e.curOp = {
					cm: e,
					viewChanged: !1,
					startHeight: e.doc.height,
					forceUpdate: !1,
					updateInput: 0,
					typing: !1,
					changeObjs: null,
					cursorActivityHandlers: null,
					cursorActivityCalled: 0,
					selectionChanged: !1,
					updateMaxLine: !1,
					scrollLeft: null,
					scrollTop: null,
					scrollToPos: null,
					focus: !1,
					id: ++qr,
				}),
					(function (e) {
						on ? on.ops.push(e) : (e.ownsGroup = on = {ops: [e], delayedCallbacks: []});
					})(e.curOp);
			}
			function $r(e) {
				var t = e.curOp;
				t &&
					(function (e, t) {
						var n = e.ownsGroup;
						if (n)
							try {
								!(function (e) {
									var t = e.delayedCallbacks,
										n = 0;
									do {
										for (; n < t.length; n++) t[n].call(null);
										for (var r = 0; r < e.ops.length; r++) {
											var i = e.ops[r];
											if (i.cursorActivityHandlers)
												for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
													i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
										}
									} while (n < t.length);
								})(n);
							} finally {
								(on = null), t(n);
							}
					})(t, function (e) {
						for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
						!(function (e) {
							for (var t = e.ops, n = 0; n < t.length; n++) Ur(t[n]);
							for (var r = 0; r < t.length; r++) Vr(t[r]);
							for (var i = 0; i < t.length; i++) Gr(t[i]);
							for (var o = 0; o < t.length; o++) Xr(t[o]);
							for (var a = 0; a < t.length; a++) Kr(t[a]);
						})(e);
					});
			}
			function Ur(e) {
				var t = e.cm,
					n = t.display;
				!(function (e) {
					var t = e.display;
					!t.scrollbarsClipped &&
						t.scroller.offsetWidth &&
						((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
						(t.heightForcer.style.height = Tn(e) + "px"),
						(t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
						(t.sizer.style.borderRightWidth = Tn(e) + "px"),
						(t.scrollbarsClipped = !0));
				})(t),
					e.updateMaxLine && $t(t),
					(e.mustUpdate =
						e.viewChanged ||
						e.forceUpdate ||
						null != e.scrollTop ||
						(e.scrollToPos &&
							(e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
						(n.maxLineChanged && t.options.lineWrapping)),
					(e.update =
						e.mustUpdate &&
						new ni(t, e.mustUpdate && {top: e.scrollTop, ensure: e.scrollToPos}, e.forceUpdate));
			}
			function Vr(e) {
				e.updatedDisplay = e.mustUpdate && ri(e.cm, e.update);
			}
			function Gr(e) {
				var t = e.cm,
					n = t.display;
				e.updatedDisplay && Cr(t),
					(e.barMeasure = Rr(t)),
					n.maxLineChanged &&
						!t.options.lineWrapping &&
						((e.adjustWidthTo = Mn(t, n.maxLine, n.maxLine.text.length).left + 3),
						(t.display.sizerWidth = e.adjustWidthTo),
						(e.barMeasure.scrollWidth = Math.max(
							n.scroller.clientWidth,
							n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth
						)),
						(e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ln(t)))),
					(e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
			}
			function Xr(e) {
				var t = e.cm;
				null != e.adjustWidthTo &&
					((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
					e.maxScrollLeft < t.doc.scrollLeft &&
						Hr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
					(t.display.maxLineChanged = !1));
				var n = e.focus && e.focus == P();
				e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
					(e.updatedDisplay || e.startHeight != t.doc.height) && Wr(t, e.barMeasure),
					e.updatedDisplay && li(t, e.barMeasure),
					e.selectionChanged && yr(t),
					t.state.focused && e.updateInput && t.display.input.reset(e.typing),
					n && br(e.cm);
			}
			function Kr(e) {
				var t = e.cm,
					n = t.display,
					r = t.doc;
				(e.updatedDisplay && ii(t, e.update),
				null == n.wheelStartX ||
					(null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
					(n.wheelStartX = n.wheelStartY = null),
				null != e.scrollTop && Dr(t, e.scrollTop, e.forceScroll),
				null != e.scrollLeft && Hr(t, e.scrollLeft, !0, !0),
				e.scrollToPos) &&
					(function (e, t) {
						if (!ge(e, "scrollCursorIntoView")) {
							var n = e.display,
								r = n.sizer.getBoundingClientRect(),
								i = null;
							if (
								(t.top + r.top < 0
									? (i = !0)
									: t.bottom + r.top >
											(window.innerHeight || document.documentElement.clientHeight) && (i = !1),
								null != i && !h)
							) {
								var o = M(
									"div",
									"​",
									null,
									"position: absolute;\n                         top: " +
										(t.top - n.viewOffset - kn(e.display)) +
										"px;\n                         height: " +
										(t.bottom - t.top + Tn(e) + n.barHeight) +
										"px;\n                         left: " +
										t.left +
										"px; width: " +
										Math.max(2, t.right - t.left) +
										"px;"
								);
								e.display.lineSpace.appendChild(o),
									o.scrollIntoView(i),
									e.display.lineSpace.removeChild(o);
							}
						}
					})(
						t,
						(function (e, t, n, r) {
							var i;
							null == r && (r = 0),
								e.options.lineWrapping ||
									t != n ||
									(n =
										"before" ==
										(t = t.ch ? Ze(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t)
											.sticky
											? Ze(t.line, t.ch + 1, "before")
											: t);
							for (var o = 0; o < 5; o++) {
								var a = !1,
									l = Vn(e, t),
									s = n && n != t ? Vn(e, n) : l,
									u = Lr(
										e,
										(i = {
											left: Math.min(l.left, s.left),
											top: Math.min(l.top, s.top) - r,
											right: Math.max(l.left, s.left),
											bottom: Math.max(l.bottom, s.bottom) + r,
										})
									),
									c = e.doc.scrollTop,
									f = e.doc.scrollLeft;
								if (
									(null != u.scrollTop &&
										(Pr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)),
									null != u.scrollLeft &&
										(Hr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (a = !0)),
									!a)
								)
									break;
							}
							return i;
						})(t, at(r, e.scrollToPos.from), at(r, e.scrollToPos.to), e.scrollToPos.margin)
					);
				var i = e.maybeHiddenMarkers,
					o = e.maybeUnhiddenMarkers;
				if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || me(i[a], "hide");
				if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length && me(o[l], "unhide");
				n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
					e.changeObjs && me(t, "changes", t, e.changeObjs),
					e.update && e.update.finish();
			}
			function Yr(e, t) {
				if (e.curOp) return t();
				zr(e);
				try {
					return t();
				} finally {
					$r(e);
				}
			}
			function Qr(e, t) {
				return function () {
					if (e.curOp) return t.apply(e, arguments);
					zr(e);
					try {
						return t.apply(e, arguments);
					} finally {
						$r(e);
					}
				};
			}
			function Jr(e) {
				return function () {
					if (this.curOp) return e.apply(this, arguments);
					zr(this);
					try {
						return e.apply(this, arguments);
					} finally {
						$r(this);
					}
				};
			}
			function Zr(e) {
				return function () {
					var t = this.cm;
					if (!t || t.curOp) return e.apply(this, arguments);
					zr(t);
					try {
						return e.apply(this, arguments);
					} finally {
						$r(t);
					}
				};
			}
			function ei(e, t) {
				e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, j(ti, e));
			}
			function ti(e) {
				var t = e.doc;
				if (!(t.highlightFrontier >= e.display.viewTo)) {
					var n = +new Date() + e.options.workTime,
						r = dt(e, t.highlightFrontier),
						i = [];
					t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
						if (r.line >= e.display.viewFrom) {
							var a = o.styles,
								l = o.text.length > e.options.maxHighlightLength ? Be(t.mode, r.state) : null,
								s = ct(e, o, r, !0);
							l && (r.state = l), (o.styles = s.styles);
							var u = o.styleClasses,
								c = s.classes;
							c ? (o.styleClasses = c) : u && (o.styleClasses = null);
							for (
								var f =
										!a ||
										a.length != o.styles.length ||
										(u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass)),
									d = 0;
								!f && d < a.length;
								++d
							)
								f = a[d] != o.styles[d];
							f && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
						} else o.text.length <= e.options.maxHighlightLength && pt(e, o.text, r), (o.stateAfter = r.line % 5 == 0 ? r.save() : null), r.nextLine();
						if (+new Date() > n) return ei(e, e.options.workDelay), !0;
					}),
						(t.highlightFrontier = r.line),
						(t.modeFrontier = Math.max(t.modeFrontier, r.line)),
						i.length &&
							Yr(e, function () {
								for (var t = 0; t < i.length; t++) ur(e, i[t], "text");
							});
				}
			}
			var ni = function (e, t, n) {
				var r = e.display;
				(this.viewport = t),
					(this.visible = Tr(r, e.doc, t)),
					(this.editorIsHidden = !r.wrapper.offsetWidth),
					(this.wrapperHeight = r.wrapper.clientHeight),
					(this.wrapperWidth = r.wrapper.clientWidth),
					(this.oldDisplayWidth = Ln(e)),
					(this.force = n),
					(this.dims = nr(e)),
					(this.events = []);
			};
			function ri(e, t) {
				var n = e.display,
					r = e.doc;
				if (t.editorIsHidden) return cr(e), !1;
				if (
					!t.force &&
					t.visible.from >= n.viewFrom &&
					t.visible.to <= n.viewTo &&
					(null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
					n.renderedView == n.view &&
					0 == dr(e)
				)
					return !1;
				ui(e) && (cr(e), (t.dims = nr(e)));
				var i = r.first + r.size,
					o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
					a = Math.min(i, t.visible.to + e.options.viewportMargin);
				n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
					n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
					wt && ((o = Wt(e.doc, o)), (a = Ft(e.doc, a)));
				var l =
					o != n.viewFrom ||
					a != n.viewTo ||
					n.lastWrapHeight != t.wrapperHeight ||
					n.lastWrapWidth != t.wrapperWidth;
				!(function (e, t, n) {
					var r = e.display;
					0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
						? ((r.view = rn(e, t, n)), (r.viewFrom = t))
						: (r.viewFrom > t
								? (r.view = rn(e, t, r.viewFrom).concat(r.view))
								: r.viewFrom < t && (r.view = r.view.slice(lr(e, t))),
						  (r.viewFrom = t),
						  r.viewTo < n
								? (r.view = r.view.concat(rn(e, r.viewTo, n)))
								: r.viewTo > n && (r.view = r.view.slice(0, lr(e, n)))),
						(r.viewTo = n);
				})(e, o, a),
					(n.viewOffset = qt(Ue(e.doc, n.viewFrom))),
					(e.display.mover.style.top = n.viewOffset + "px");
				var u = dr(e);
				if (
					!l &&
					0 == u &&
					!t.force &&
					n.renderedView == n.view &&
					(null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
				)
					return !1;
				var c = (function (e) {
					if (e.hasFocus()) return null;
					var t = P();
					if (!t || !E(e.display.lineDiv, t)) return null;
					var n = {activeElt: t};
					if (window.getSelection) {
						var r = window.getSelection();
						r.anchorNode &&
							r.extend &&
							E(e.display.lineDiv, r.anchorNode) &&
							((n.anchorNode = r.anchorNode),
							(n.anchorOffset = r.anchorOffset),
							(n.focusNode = r.focusNode),
							(n.focusOffset = r.focusOffset));
					}
					return n;
				})(e);
				return (
					u > 4 && (n.lineDiv.style.display = "none"),
					(function (e, t, n) {
						var r = e.display,
							i = e.options.lineNumbers,
							o = r.lineDiv,
							a = o.firstChild;
						function l(t) {
							var n = t.nextSibling;
							return (
								s && y && e.display.currentWheelTarget == t
									? (t.style.display = "none")
									: t.parentNode.removeChild(t),
								n
							);
						}
						for (var u = r.view, c = r.viewFrom, f = 0; f < u.length; f++) {
							var d = u[f];
							if (d.hidden);
							else if (d.node && d.node.parentNode == o) {
								for (; a != d.node; ) a = l(a);
								var p = i && null != t && t <= c && d.lineNumber;
								d.changes && (_(d.changes, "gutter") > -1 && (p = !1), un(e, d, c, n)),
									p &&
										(O(d.lineNumber),
										d.lineNumber.appendChild(document.createTextNode(Je(e.options, c)))),
									(a = d.node.nextSibling);
							} else {
								var h = gn(e, d, c, n);
								o.insertBefore(h, a);
							}
							c += d.size;
						}
						for (; a; ) a = l(a);
					})(e, n.updateLineNumbers, t.dims),
					u > 4 && (n.lineDiv.style.display = ""),
					(n.renderedView = n.view),
					(function (e) {
						if (
							e &&
							e.activeElt &&
							e.activeElt != P() &&
							(e.activeElt.focus(),
							!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
								e.anchorNode &&
								E(document.body, e.anchorNode) &&
								E(document.body, e.focusNode))
						) {
							var t = window.getSelection(),
								n = document.createRange();
							n.setEnd(e.anchorNode, e.anchorOffset),
								n.collapse(!1),
								t.removeAllRanges(),
								t.addRange(n),
								t.extend(e.focusNode, e.focusOffset);
						}
					})(c),
					O(n.cursorDiv),
					O(n.selectionDiv),
					(n.gutters.style.height = n.sizer.style.minHeight = 0),
					l && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), ei(e, 400)),
					(n.updateLineNumbers = null),
					!0
				);
			}
			function ii(e, t) {
				for (var n = t.viewport, r = !0; ; r = !1) {
					if (r && e.options.lineWrapping && t.oldDisplayWidth != Ln(e))
						r && (t.visible = Tr(e.display, e.doc, n));
					else if (
						(n && null != n.top && (n = {top: Math.min(e.doc.height + Cn(e.display) - On(e), n.top)}),
						(t.visible = Tr(e.display, e.doc, n)),
						t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
					)
						break;
					if (!ri(e, t)) break;
					Cr(e);
					var i = Rr(e);
					pr(e), Wr(e, i), li(e, i), (t.force = !1);
				}
				t.signal(e, "update", e),
					(e.display.viewFrom == e.display.reportedViewFrom &&
						e.display.viewTo == e.display.reportedViewTo) ||
						(t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
						(e.display.reportedViewFrom = e.display.viewFrom),
						(e.display.reportedViewTo = e.display.viewTo));
			}
			function oi(e, t) {
				var n = new ni(e, t);
				if (ri(e, n)) {
					Cr(e), ii(e, n);
					var r = Rr(e);
					pr(e), Wr(e, r), li(e, r), n.finish();
				}
			}
			function ai(e) {
				var t = e.gutters.offsetWidth;
				e.sizer.style.marginLeft = t + "px";
			}
			function li(e, t) {
				(e.display.sizer.style.minHeight = t.docHeight + "px"),
					(e.display.heightForcer.style.top = t.docHeight + "px"),
					(e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tn(e) + "px");
			}
			function si(e) {
				var t = e.display,
					n = t.view;
				if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
					for (
						var r = rr(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
							i = t.gutters.offsetWidth,
							o = r + "px",
							a = 0;
						a < n.length;
						a++
					)
						if (!n[a].hidden) {
							e.options.fixedGutter &&
								(n[a].gutter && (n[a].gutter.style.left = o),
								n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
							var l = n[a].alignable;
							if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
						}
					e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
				}
			}
			function ui(e) {
				if (!e.options.lineNumbers) return !1;
				var t = e.doc,
					n = Je(e.options, t.first + t.size - 1),
					r = e.display;
				if (n.length != r.lineNumChars) {
					var i = r.measure.appendChild(
							M("div", [M("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")
						),
						o = i.firstChild.offsetWidth,
						a = i.offsetWidth - o;
					return (
						(r.lineGutter.style.width = ""),
						(r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1),
						(r.lineNumWidth = r.lineNumInnerWidth + a),
						(r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
						(r.lineGutter.style.width = r.lineNumWidth + "px"),
						ai(e.display),
						!0
					);
				}
				return !1;
			}
			function ci(e, t) {
				for (var n = [], r = !1, i = 0; i < e.length; i++) {
					var o = e[i],
						a = null;
					if (("string" != typeof o && ((a = o.style), (o = o.className)), "CodeMirror-linenumbers" == o)) {
						if (!t) continue;
						r = !0;
					}
					n.push({className: o, style: a});
				}
				return t && !r && n.push({className: "CodeMirror-linenumbers", style: null}), n;
			}
			function fi(e) {
				var t = e.gutters,
					n = e.gutterSpecs;
				O(t), (e.lineGutter = null);
				for (var r = 0; r < n.length; ++r) {
					var i = n[r],
						o = i.className,
						a = i.style,
						l = t.appendChild(M("div", null, "CodeMirror-gutter " + o));
					a && (l.style.cssText = a),
						"CodeMirror-linenumbers" == o &&
							((e.lineGutter = l), (l.style.width = (e.lineNumWidth || 1) + "px"));
				}
				(t.style.display = n.length ? "" : "none"), ai(e);
			}
			function di(e) {
				fi(e.display), sr(e), si(e);
			}
			(ni.prototype.signal = function (e, t) {
				ye(e, t) && this.events.push(arguments);
			}),
				(ni.prototype.finish = function () {
					for (var e = 0; e < this.events.length; e++) me.apply(null, this.events[e]);
				});
			var pi = 0,
				hi = null;
			function mi(e) {
				var t = e.wheelDeltaX,
					n = e.wheelDeltaY;
				return (
					null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
					null == n && e.detail && e.axis == e.VERTICAL_AXIS
						? (n = e.detail)
						: null == n && (n = e.wheelDelta),
					{x: t, y: n}
				);
			}
			function gi(e) {
				var t = mi(e);
				return (t.x *= hi), (t.y *= hi), t;
			}
			function vi(e, t) {
				var r = mi(t),
					i = r.x,
					o = r.y,
					a = e.display,
					l = a.scroller,
					u = l.scrollWidth > l.clientWidth,
					c = l.scrollHeight > l.clientHeight;
				if ((i && u) || (o && c)) {
					if (o && y && s)
						e: for (var d = t.target, p = a.view; d != l; d = d.parentNode)
							for (var h = 0; h < p.length; h++)
								if (p[h].node == d) {
									e.display.currentWheelTarget = d;
									break e;
								}
					if (i && !n && !f && null != hi)
						return (
							o && c && Pr(e, Math.max(0, l.scrollTop + o * hi)),
							Hr(e, Math.max(0, l.scrollLeft + i * hi)),
							(!o || (o && c)) && xe(t),
							void (a.wheelStartX = null)
						);
					if (o && null != hi) {
						var m = o * hi,
							g = e.doc.scrollTop,
							v = g + a.wrapper.clientHeight;
						m < 0 ? (g = Math.max(0, g + m - 50)) : (v = Math.min(e.doc.height, v + m + 50)),
							oi(e, {top: g, bottom: v});
					}
					pi < 20 &&
						(null == a.wheelStartX
							? ((a.wheelStartX = l.scrollLeft),
							  (a.wheelStartY = l.scrollTop),
							  (a.wheelDX = i),
							  (a.wheelDY = o),
							  setTimeout(function () {
									if (null != a.wheelStartX) {
										var e = l.scrollLeft - a.wheelStartX,
											t = l.scrollTop - a.wheelStartY,
											n = (t && a.wheelDY && t / a.wheelDY) || (e && a.wheelDX && e / a.wheelDX);
										(a.wheelStartX = a.wheelStartY = null),
											n && ((hi = (hi * pi + n) / (pi + 1)), ++pi);
									}
							  }, 200))
							: ((a.wheelDX += i), (a.wheelDY += o)));
				}
			}
			a ? (hi = -0.53) : n ? (hi = 15) : c ? (hi = -0.7) : d && (hi = -1 / 3);
			var yi = function (e, t) {
				(this.ranges = e), (this.primIndex = t);
			};
			(yi.prototype.primary = function () {
				return this.ranges[this.primIndex];
			}),
				(yi.prototype.equals = function (e) {
					if (e == this) return !0;
					if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
					for (var t = 0; t < this.ranges.length; t++) {
						var n = this.ranges[t],
							r = e.ranges[t];
						if (!tt(n.anchor, r.anchor) || !tt(n.head, r.head)) return !1;
					}
					return !0;
				}),
				(yi.prototype.deepCopy = function () {
					for (var e = [], t = 0; t < this.ranges.length; t++)
						e[t] = new bi(nt(this.ranges[t].anchor), nt(this.ranges[t].head));
					return new yi(e, this.primIndex);
				}),
				(yi.prototype.somethingSelected = function () {
					for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
					return !1;
				}),
				(yi.prototype.contains = function (e, t) {
					t || (t = e);
					for (var n = 0; n < this.ranges.length; n++) {
						var r = this.ranges[n];
						if (et(t, r.from()) >= 0 && et(e, r.to()) <= 0) return n;
					}
					return -1;
				});
			var bi = function (e, t) {
				(this.anchor = e), (this.head = t);
			};
			function xi(e, t, n) {
				var r = e && e.options.selectionsMayTouch,
					i = t[n];
				t.sort(function (e, t) {
					return et(e.from(), t.from());
				}),
					(n = _(t, i));
				for (var o = 1; o < t.length; o++) {
					var a = t[o],
						l = t[o - 1],
						s = et(l.to(), a.from());
					if (r && !a.empty() ? s > 0 : s >= 0) {
						var u = it(l.from(), a.from()),
							c = rt(l.to(), a.to()),
							f = l.empty() ? a.from() == a.head : l.from() == l.head;
						o <= n && --n, t.splice(--o, 2, new bi(f ? c : u, f ? u : c));
					}
				}
				return new yi(t, n);
			}
			function wi(e, t) {
				return new yi([new bi(e, t || e)], 0);
			}
			function ki(e) {
				return e.text
					? Ze(e.from.line + e.text.length - 1, K(e.text).length + (1 == e.text.length ? e.from.ch : 0))
					: e.to;
			}
			function Ci(e, t) {
				if (et(e, t.from) < 0) return e;
				if (et(e, t.to) <= 0) return ki(t);
				var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
					r = e.ch;
				return e.line == t.to.line && (r += ki(t).ch - t.to.ch), Ze(n, r);
			}
			function Si(e, t) {
				for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
					var i = e.sel.ranges[r];
					n.push(new bi(Ci(i.anchor, t), Ci(i.head, t)));
				}
				return xi(e.cm, n, e.sel.primIndex);
			}
			function Ti(e, t, n) {
				return e.line == t.line ? Ze(n.line, e.ch - t.ch + n.ch) : Ze(n.line + (e.line - t.line), e.ch);
			}
			function Li(e) {
				(e.doc.mode = We(e.options, e.doc.modeOption)), Oi(e);
			}
			function Oi(e) {
				e.doc.iter(function (e) {
					e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
				}),
					(e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
					ei(e, 100),
					e.state.modeGen++,
					e.curOp && sr(e);
			}
			function Ai(e, t) {
				return (
					0 == t.from.ch && 0 == t.to.ch && "" == K(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
				);
			}
			function Mi(e, t, n, r) {
				function i(e) {
					return n ? n[e] : null;
				}
				function o(e, n, i) {
					!(function (e, t, n, r) {
						(e.text = t),
							e.stateAfter && (e.stateAfter = null),
							e.styles && (e.styles = null),
							null != e.order && (e.order = null),
							Ot(e),
							At(e, n);
						var i = r ? r(e) : 1;
						i != e.height && Xe(e, i);
					})(e, n, i, r),
						ln(e, "change", e, t);
				}
				function a(e, t) {
					for (var n = [], o = e; o < t; ++o) n.push(new Ut(u[o], i(o), r));
					return n;
				}
				var l = t.from,
					s = t.to,
					u = t.text,
					c = Ue(e, l.line),
					f = Ue(e, s.line),
					d = K(u),
					p = i(u.length - 1),
					h = s.line - l.line;
				if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
				else if (Ai(e, t)) {
					var m = a(0, u.length - 1);
					o(f, f.text, p), h && e.remove(l.line, h), m.length && e.insert(l.line, m);
				} else if (c == f)
					if (1 == u.length) o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), p);
					else {
						var g = a(1, u.length - 1);
						g.push(new Ut(d + c.text.slice(s.ch), p, r)),
							o(c, c.text.slice(0, l.ch) + u[0], i(0)),
							e.insert(l.line + 1, g);
					}
				else if (1 == u.length)
					o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)), e.remove(l.line + 1, h);
				else {
					o(c, c.text.slice(0, l.ch) + u[0], i(0)), o(f, d + f.text.slice(s.ch), p);
					var v = a(1, u.length - 1);
					h > 1 && e.remove(l.line + 1, h - 1), e.insert(l.line + 1, v);
				}
				ln(e, "change", e, t);
			}
			function Ni(e, t, n) {
				!(function e(r, i, o) {
					if (r.linked)
						for (var a = 0; a < r.linked.length; ++a) {
							var l = r.linked[a];
							if (l.doc != i) {
								var s = o && l.sharedHist;
								(n && !s) || (t(l.doc, s), e(l.doc, r, s));
							}
						}
				})(e, null, !0);
			}
			function Ei(e, t) {
				if (t.cm) throw new Error("This document is already in use.");
				(e.doc = t),
					(t.cm = e),
					or(e),
					Li(e),
					Pi(e),
					e.options.lineWrapping || $t(e),
					(e.options.mode = t.modeOption),
					sr(e);
			}
			function Pi(e) {
				("rtl" == e.doc.direction ? D : L)(e.display.lineDiv, "CodeMirror-rtl");
			}
			function Di(e) {
				(this.done = []),
					(this.undone = []),
					(this.undoDepth = 1 / 0),
					(this.lastModTime = this.lastSelTime = 0),
					(this.lastOp = this.lastSelOp = null),
					(this.lastOrigin = this.lastSelOrigin = null),
					(this.generation = this.maxGeneration = e || 1);
			}
			function Hi(e, t) {
				var n = {from: nt(t.from), to: ki(t), text: Ve(e, t.from, t.to)};
				return (
					Fi(e, n, t.from.line, t.to.line + 1),
					Ni(
						e,
						function (e) {
							return Fi(e, n, t.from.line, t.to.line + 1);
						},
						!0
					),
					n
				);
			}
			function Ri(e) {
				for (; e.length; ) {
					if (!K(e).ranges) break;
					e.pop();
				}
			}
			function ji(e, t, n, r) {
				var i = e.history;
				i.undone.length = 0;
				var o,
					a,
					l = +new Date();
				if (
					(i.lastOp == r ||
						(i.lastOrigin == t.origin &&
							t.origin &&
							(("+" == t.origin.charAt(0) &&
								i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
								"*" == t.origin.charAt(0)))) &&
					(o = (function (e, t) {
						return t
							? (Ri(e.done), K(e.done))
							: e.done.length && !K(e.done).ranges
							? K(e.done)
							: e.done.length > 1 && !e.done[e.done.length - 2].ranges
							? (e.done.pop(), K(e.done))
							: void 0;
					})(i, i.lastOp == r))
				)
					(a = K(o.changes)),
						0 == et(t.from, t.to) && 0 == et(t.from, a.to) ? (a.to = ki(t)) : o.changes.push(Hi(e, t));
				else {
					var s = K(i.done);
					for (
						(s && s.ranges) || Wi(e.sel, i.done),
							o = {changes: [Hi(e, t)], generation: i.generation},
							i.done.push(o);
						i.done.length > i.undoDepth;

					)
						i.done.shift(), i.done[0].ranges || i.done.shift();
				}
				i.done.push(n),
					(i.generation = ++i.maxGeneration),
					(i.lastModTime = i.lastSelTime = l),
					(i.lastOp = i.lastSelOp = r),
					(i.lastOrigin = i.lastSelOrigin = t.origin),
					a || me(e, "historyAdded");
			}
			function Ii(e, t, n, r) {
				var i = e.history,
					o = r && r.origin;
				n == i.lastSelOp ||
				(o &&
					i.lastSelOrigin == o &&
					((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
						(function (e, t, n, r) {
							var i = t.charAt(0);
							return (
								"*" == i ||
								("+" == i &&
									n.ranges.length == r.ranges.length &&
									n.somethingSelected() == r.somethingSelected() &&
									new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
							);
						})(e, o, K(i.done), t)))
					? (i.done[i.done.length - 1] = t)
					: Wi(t, i.done),
					(i.lastSelTime = +new Date()),
					(i.lastSelOrigin = o),
					(i.lastSelOp = n),
					r && !1 !== r.clearRedo && Ri(i.undone);
			}
			function Wi(e, t) {
				var n = K(t);
				(n && n.ranges && n.equals(e)) || t.push(e);
			}
			function Fi(e, t, n, r) {
				var i = t["spans_" + e.id],
					o = 0;
				e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
					n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
				});
			}
			function _i(e) {
				if (!e) return null;
				for (var t, n = 0; n < e.length; ++n)
					e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
				return t ? (t.length ? t : null) : e;
			}
			function Bi(e, t) {
				var n = (function (e, t) {
						var n = t["spans_" + e.id];
						if (!n) return null;
						for (var r = [], i = 0; i < t.text.length; ++i) r.push(_i(n[i]));
						return r;
					})(e, t),
					r = Tt(e, t);
				if (!n) return r;
				if (!r) return n;
				for (var i = 0; i < n.length; ++i) {
					var o = n[i],
						a = r[i];
					if (o && a)
						e: for (var l = 0; l < a.length; ++l) {
							for (var s = a[l], u = 0; u < o.length; ++u) if (o[u].marker == s.marker) continue e;
							o.push(s);
						}
					else a && (n[i] = a);
				}
				return n;
			}
			function qi(e, t, n) {
				for (var r = [], i = 0; i < e.length; ++i) {
					var o = e[i];
					if (o.ranges) r.push(n ? yi.prototype.deepCopy.call(o) : o);
					else {
						var a = o.changes,
							l = [];
						r.push({changes: l});
						for (var s = 0; s < a.length; ++s) {
							var u = a[s],
								c = void 0;
							if ((l.push({from: u.from, to: u.to, text: u.text}), t))
								for (var f in u)
									(c = f.match(/^spans_(\d+)$/)) &&
										_(t, Number(c[1])) > -1 &&
										((K(l)[f] = u[f]), delete u[f]);
						}
					}
				}
				return r;
			}
			function zi(e, t, n, r) {
				if (r) {
					var i = e.anchor;
					if (n) {
						var o = et(t, i) < 0;
						o != et(n, i) < 0 ? ((i = t), (t = n)) : o != et(t, n) < 0 && (t = n);
					}
					return new bi(i, t);
				}
				return new bi(n || t, t);
			}
			function $i(e, t, n, r, i) {
				null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
					Ki(e, new yi([zi(e.sel.primary(), t, n, i)], 0), r);
			}
			function Ui(e, t, n) {
				for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
					r[o] = zi(e.sel.ranges[o], t[o], null, i);
				Ki(e, xi(e.cm, r, e.sel.primIndex), n);
			}
			function Vi(e, t, n, r) {
				var i = e.sel.ranges.slice(0);
				(i[t] = n), Ki(e, xi(e.cm, i, e.sel.primIndex), r);
			}
			function Gi(e, t, n, r) {
				Ki(e, wi(t, n), r);
			}
			function Xi(e, t, n) {
				var r = e.history.done,
					i = K(r);
				i && i.ranges ? ((r[r.length - 1] = t), Yi(e, t, n)) : Ki(e, t, n);
			}
			function Ki(e, t, n) {
				Yi(e, t, n), Ii(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
			}
			function Yi(e, t, n) {
				(ye(e, "beforeSelectionChange") || (e.cm && ye(e.cm, "beforeSelectionChange"))) &&
					(t = (function (e, t, n) {
						var r = {
							ranges: t.ranges,
							update: function (t) {
								this.ranges = [];
								for (var n = 0; n < t.length; n++)
									this.ranges[n] = new bi(at(e, t[n].anchor), at(e, t[n].head));
							},
							origin: n && n.origin,
						};
						return (
							me(e, "beforeSelectionChange", e, r),
							e.cm && me(e.cm, "beforeSelectionChange", e.cm, r),
							r.ranges != t.ranges ? xi(e.cm, r.ranges, r.ranges.length - 1) : t
						);
					})(e, t, n)),
					Qi(e, Zi(e, t, (n && n.bias) || (et(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)),
					(n && !1 === n.scroll) || !e.cm || "nocursor" == e.cm.getOption("readOnly") || Ar(e.cm);
			}
			function Qi(e, t) {
				t.equals(e.sel) ||
					((e.sel = t),
					e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), ve(e.cm)),
					ln(e, "cursorActivity", e));
			}
			function Ji(e) {
				Qi(e, Zi(e, e.sel, null, !1));
			}
			function Zi(e, t, n, r) {
				for (var i, o = 0; o < t.ranges.length; o++) {
					var a = t.ranges[o],
						l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
						s = to(e, a.anchor, l && l.anchor, n, r),
						u = to(e, a.head, l && l.head, n, r);
					(i || s != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new bi(s, u)));
				}
				return i ? xi(e.cm, i, t.primIndex) : t;
			}
			function eo(e, t, n, r, i) {
				var o = Ue(e, t.line);
				if (o.markedSpans)
					for (var a = 0; a < o.markedSpans.length; ++a) {
						var l = o.markedSpans[a],
							s = l.marker,
							u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
							c = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
						if (
							(null == l.from || (u ? l.from <= t.ch : l.from < t.ch)) &&
							(null == l.to || (c ? l.to >= t.ch : l.to > t.ch))
						) {
							if (i && (me(s, "beforeCursorEnter"), s.explicitlyCleared)) {
								if (o.markedSpans) {
									--a;
									continue;
								}
								break;
							}
							if (!s.atomic) continue;
							if (n) {
								var f = s.find(r < 0 ? 1 : -1),
									d = void 0;
								if (
									((r < 0 ? c : u) && (f = no(e, f, -r, f && f.line == t.line ? o : null)),
									f && f.line == t.line && (d = et(f, n)) && (r < 0 ? d < 0 : d > 0))
								)
									return eo(e, f, t, r, i);
							}
							var p = s.find(r < 0 ? -1 : 1);
							return (
								(r < 0 ? u : c) && (p = no(e, p, r, p.line == t.line ? o : null)),
								p ? eo(e, p, t, r, i) : null
							);
						}
					}
				return t;
			}
			function to(e, t, n, r, i) {
				var o = r || 1,
					a =
						eo(e, t, n, o, i) ||
						(!i && eo(e, t, n, o, !0)) ||
						eo(e, t, n, -o, i) ||
						(!i && eo(e, t, n, -o, !0));
				return a || ((e.cantEdit = !0), Ze(e.first, 0));
			}
			function no(e, t, n, r) {
				return n < 0 && 0 == t.ch
					? t.line > e.first
						? at(e, Ze(t.line - 1))
						: null
					: n > 0 && t.ch == (r || Ue(e, t.line)).text.length
					? t.line < e.first + e.size - 1
						? Ze(t.line + 1, 0)
						: null
					: new Ze(t.line, t.ch + n);
			}
			function ro(e) {
				e.setSelection(Ze(e.firstLine(), 0), Ze(e.lastLine()), z);
			}
			function io(e, t, n) {
				var r = {
					canceled: !1,
					from: t.from,
					to: t.to,
					text: t.text,
					origin: t.origin,
					cancel: function () {
						return (r.canceled = !0);
					},
				};
				return (
					n &&
						(r.update = function (t, n, i, o) {
							t && (r.from = at(e, t)),
								n && (r.to = at(e, n)),
								i && (r.text = i),
								void 0 !== o && (r.origin = o);
						}),
					me(e, "beforeChange", e, r),
					e.cm && me(e.cm, "beforeChange", e.cm, r),
					r.canceled
						? (e.cm && (e.cm.curOp.updateInput = 2), null)
						: {from: r.from, to: r.to, text: r.text, origin: r.origin}
				);
			}
			function oo(e, t, n) {
				if (e.cm) {
					if (!e.cm.curOp) return Qr(e.cm, oo)(e, t, n);
					if (e.cm.state.suppressEdits) return;
				}
				if (!(ye(e, "beforeChange") || (e.cm && ye(e.cm, "beforeChange"))) || (t = io(e, t, !0))) {
					var r =
						xt &&
						!n &&
						(function (e, t, n) {
							var r = null;
							if (
								(e.iter(t.line, n.line + 1, function (e) {
									if (e.markedSpans)
										for (var t = 0; t < e.markedSpans.length; ++t) {
											var n = e.markedSpans[t].marker;
											!n.readOnly || (r && -1 != _(r, n)) || (r || (r = [])).push(n);
										}
								}),
								!r)
							)
								return null;
							for (var i = [{from: t, to: n}], o = 0; o < r.length; ++o)
								for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
									var u = i[s];
									if (!(et(u.to, l.from) < 0 || et(u.from, l.to) > 0)) {
										var c = [s, 1],
											f = et(u.from, l.from),
											d = et(u.to, l.to);
										(f < 0 || (!a.inclusiveLeft && !f)) && c.push({from: u.from, to: l.from}),
											(d > 0 || (!a.inclusiveRight && !d)) && c.push({from: l.to, to: u.to}),
											i.splice.apply(i, c),
											(s += c.length - 3);
									}
								}
							return i;
						})(e, t.from, t.to);
					if (r)
						for (var i = r.length - 1; i >= 0; --i)
							ao(e, {from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin});
					else ao(e, t);
				}
			}
			function ao(e, t) {
				if (1 != t.text.length || "" != t.text[0] || 0 != et(t.from, t.to)) {
					var n = Si(e, t);
					ji(e, t, n, e.cm ? e.cm.curOp.id : NaN), uo(e, t, n, Tt(e, t));
					var r = [];
					Ni(e, function (e, n) {
						n || -1 != _(r, e.history) || (ho(e.history, t), r.push(e.history)), uo(e, t, null, Tt(e, t));
					});
				}
			}
			function lo(e, t, n) {
				var r = e.cm && e.cm.state.suppressEdits;
				if (!r || n) {
					for (
						var i,
							o = e.history,
							a = e.sel,
							l = "undo" == t ? o.done : o.undone,
							s = "undo" == t ? o.undone : o.done,
							u = 0;
						u < l.length && ((i = l[u]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
						u++
					);
					if (u != l.length) {
						for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
							if (!(i = l.pop()).ranges) {
								if (r) return void l.push(i);
								break;
							}
							if ((Wi(i, s), n && !i.equals(e.sel))) return void Ki(e, i, {clearRedo: !1});
							a = i;
						}
						var c = [];
						Wi(a, s),
							s.push({changes: c, generation: o.generation}),
							(o.generation = i.generation || ++o.maxGeneration);
						for (
							var f = ye(e, "beforeChange") || (e.cm && ye(e.cm, "beforeChange")),
								d = function (n) {
									var r = i.changes[n];
									if (((r.origin = t), f && !io(e, r, !1))) return (l.length = 0), {};
									c.push(Hi(e, r));
									var o = n ? Si(e, r) : K(l);
									uo(e, r, o, Bi(e, r)), !n && e.cm && e.cm.scrollIntoView({from: r.from, to: ki(r)});
									var a = [];
									Ni(e, function (e, t) {
										t || -1 != _(a, e.history) || (ho(e.history, r), a.push(e.history)),
											uo(e, r, null, Bi(e, r));
									});
								},
								p = i.changes.length - 1;
							p >= 0;
							--p
						) {
							var h = d(p);
							if (h) return h.v;
						}
					}
				}
			}
			function so(e, t) {
				if (
					0 != t &&
					((e.first += t),
					(e.sel = new yi(
						Y(e.sel.ranges, function (e) {
							return new bi(Ze(e.anchor.line + t, e.anchor.ch), Ze(e.head.line + t, e.head.ch));
						}),
						e.sel.primIndex
					)),
					e.cm)
				) {
					sr(e.cm, e.first, e.first - t, t);
					for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) ur(e.cm, r, "gutter");
				}
			}
			function uo(e, t, n, r) {
				if (e.cm && !e.cm.curOp) return Qr(e.cm, uo)(e, t, n, r);
				if (t.to.line < e.first) so(e, t.text.length - 1 - (t.to.line - t.from.line));
				else if (!(t.from.line > e.lastLine())) {
					if (t.from.line < e.first) {
						var i = t.text.length - 1 - (e.first - t.from.line);
						so(e, i),
							(t = {
								from: Ze(e.first, 0),
								to: Ze(t.to.line + i, t.to.ch),
								text: [K(t.text)],
								origin: t.origin,
							});
					}
					var o = e.lastLine();
					t.to.line > o &&
						(t = {from: t.from, to: Ze(o, Ue(e, o).text.length), text: [t.text[0]], origin: t.origin}),
						(t.removed = Ve(e, t.from, t.to)),
						n || (n = Si(e, t)),
						e.cm
							? (function (e, t, n) {
									var r = e.doc,
										i = e.display,
										o = t.from,
										a = t.to,
										l = !1,
										s = o.line;
									e.options.lineWrapping ||
										((s = Ke(It(Ue(r, o.line)))),
										r.iter(s, a.line + 1, function (e) {
											if (e == i.maxLine) return (l = !0), !0;
										}));
									r.sel.contains(t.from, t.to) > -1 && ve(e);
									Mi(r, t, n, ir(e)),
										e.options.lineWrapping ||
											(r.iter(s, o.line + t.text.length, function (e) {
												var t = zt(e);
												t > i.maxLineLength &&
													((i.maxLine = e),
													(i.maxLineLength = t),
													(i.maxLineChanged = !0),
													(l = !1));
											}),
											l && (e.curOp.updateMaxLine = !0));
									(function (e, t) {
										if (
											((e.modeFrontier = Math.min(e.modeFrontier, t)),
											!(e.highlightFrontier < t - 10))
										) {
											for (var n = e.first, r = t - 1; r > n; r--) {
												var i = Ue(e, r).stateAfter;
												if (i && (!(i instanceof st) || r + i.lookAhead < t)) {
													n = r + 1;
													break;
												}
											}
											e.highlightFrontier = Math.min(e.highlightFrontier, n);
										}
									})(r, o.line),
										ei(e, 400);
									var u = t.text.length - (a.line - o.line) - 1;
									t.full
										? sr(e)
										: o.line != a.line || 1 != t.text.length || Ai(e.doc, t)
										? sr(e, o.line, a.line + 1, u)
										: ur(e, o.line, "text");
									var c = ye(e, "changes"),
										f = ye(e, "change");
									if (f || c) {
										var d = {from: o, to: a, text: t.text, removed: t.removed, origin: t.origin};
										f && ln(e, "change", e, d),
											c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d);
									}
									e.display.selForContextMenu = null;
							  })(e.cm, t, r)
							: Mi(e, t, r),
						Yi(e, n, z),
						e.cantEdit && to(e, Ze(e.firstLine(), 0)) && (e.cantEdit = !1);
				}
			}
			function co(e, t, n, r, i) {
				var o;
				r || (r = n),
					et(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
					"string" == typeof t && (t = e.splitLines(t)),
					oo(e, {from: n, to: r, text: t, origin: i});
			}
			function fo(e, t, n, r) {
				n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
			}
			function po(e, t, n, r) {
				for (var i = 0; i < e.length; ++i) {
					var o = e[i],
						a = !0;
					if (o.ranges) {
						o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
						for (var l = 0; l < o.ranges.length; l++)
							fo(o.ranges[l].anchor, t, n, r), fo(o.ranges[l].head, t, n, r);
					} else {
						for (var s = 0; s < o.changes.length; ++s) {
							var u = o.changes[s];
							if (n < u.from.line)
								(u.from = Ze(u.from.line + r, u.from.ch)), (u.to = Ze(u.to.line + r, u.to.ch));
							else if (t <= u.to.line) {
								a = !1;
								break;
							}
						}
						a || (e.splice(0, i + 1), (i = 0));
					}
				}
			}
			function ho(e, t) {
				var n = t.from.line,
					r = t.to.line,
					i = t.text.length - (r - n) - 1;
				po(e.done, n, r, i), po(e.undone, n, r, i);
			}
			function mo(e, t, n, r) {
				var i = t,
					o = t;
				return (
					"number" == typeof t ? (o = Ue(e, ot(e, t))) : (i = Ke(t)),
					null == i ? null : (r(o, i) && e.cm && ur(e.cm, i, n), o)
				);
			}
			function go(e) {
				(this.lines = e), (this.parent = null);
				for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
				this.height = t;
			}
			function vo(e) {
				this.children = e;
				for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
					var i = e[r];
					(t += i.chunkSize()), (n += i.height), (i.parent = this);
				}
				(this.size = t), (this.height = n), (this.parent = null);
			}
			(bi.prototype.from = function () {
				return it(this.anchor, this.head);
			}),
				(bi.prototype.to = function () {
					return rt(this.anchor, this.head);
				}),
				(bi.prototype.empty = function () {
					return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
				}),
				(go.prototype = {
					chunkSize: function () {
						return this.lines.length;
					},
					removeInner: function (e, t) {
						for (var n = e, r = e + t; n < r; ++n) {
							var i = this.lines[n];
							(this.height -= i.height), Vt(i), ln(i, "delete");
						}
						this.lines.splice(e, t);
					},
					collapse: function (e) {
						e.push.apply(e, this.lines);
					},
					insertInner: function (e, t, n) {
						(this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
						for (var r = 0; r < t.length; ++r) t[r].parent = this;
					},
					iterN: function (e, t, n) {
						for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
					},
				}),
				(vo.prototype = {
					chunkSize: function () {
						return this.size;
					},
					removeInner: function (e, t) {
						this.size -= t;
						for (var n = 0; n < this.children.length; ++n) {
							var r = this.children[n],
								i = r.chunkSize();
							if (e < i) {
								var o = Math.min(t, i - e),
									a = r.height;
								if (
									(r.removeInner(e, o),
									(this.height -= a - r.height),
									i == o && (this.children.splice(n--, 1), (r.parent = null)),
									0 == (t -= o))
								)
									break;
								e = 0;
							} else e -= i;
						}
						if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof go))) {
							var l = [];
							this.collapse(l), (this.children = [new go(l)]), (this.children[0].parent = this);
						}
					},
					collapse: function (e) {
						for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
					},
					insertInner: function (e, t, n) {
						(this.size += t.length), (this.height += n);
						for (var r = 0; r < this.children.length; ++r) {
							var i = this.children[r],
								o = i.chunkSize();
							if (e <= o) {
								if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
									for (var a = (i.lines.length % 25) + 25, l = a; l < i.lines.length; ) {
										var s = new go(i.lines.slice(l, (l += 25)));
										(i.height -= s.height), this.children.splice(++r, 0, s), (s.parent = this);
									}
									(i.lines = i.lines.slice(0, a)), this.maybeSpill();
								}
								break;
							}
							e -= o;
						}
					},
					maybeSpill: function () {
						if (!(this.children.length <= 10)) {
							var e = this;
							do {
								var t = new vo(e.children.splice(e.children.length - 5, 5));
								if (e.parent) {
									(e.size -= t.size), (e.height -= t.height);
									var n = _(e.parent.children, e);
									e.parent.children.splice(n + 1, 0, t);
								} else {
									var r = new vo(e.children);
									(r.parent = e), (e.children = [r, t]), (e = r);
								}
								t.parent = e.parent;
							} while (e.children.length > 10);
							e.parent.maybeSpill();
						}
					},
					iterN: function (e, t, n) {
						for (var r = 0; r < this.children.length; ++r) {
							var i = this.children[r],
								o = i.chunkSize();
							if (e < o) {
								var a = Math.min(t, o - e);
								if (i.iterN(e, a, n)) return !0;
								if (0 == (t -= a)) break;
								e = 0;
							} else e -= o;
						}
					},
				});
			var yo = function (e, t, n) {
				if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
				(this.doc = e), (this.node = t);
			};
			function bo(e, t, n) {
				qt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Or(e, n);
			}
			(yo.prototype.clear = function () {
				var e = this.doc.cm,
					t = this.line.widgets,
					n = this.line,
					r = Ke(n);
				if (null != r && t) {
					for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
					t.length || (n.widgets = null);
					var o = xn(this);
					Xe(n, Math.max(0, n.height - o)),
						e &&
							(Yr(e, function () {
								bo(e, n, -o), ur(e, r, "widget");
							}),
							ln(e, "lineWidgetCleared", e, this, r));
				}
			}),
				(yo.prototype.changed = function () {
					var e = this,
						t = this.height,
						n = this.doc.cm,
						r = this.line;
					this.height = null;
					var i = xn(this) - t;
					i &&
						(_t(this.doc, r) || Xe(r, r.height + i),
						n &&
							Yr(n, function () {
								(n.curOp.forceUpdate = !0), bo(n, r, i), ln(n, "lineWidgetChanged", n, e, Ke(r));
							}));
				}),
				be(yo);
			var xo = 0,
				wo = function (e, t) {
					(this.lines = []), (this.type = t), (this.doc = e), (this.id = ++xo);
				};
			function ko(e, t, n, r, i) {
				if (r && r.shared)
					return (function (e, t, n, r, i) {
						(r = I(r)).shared = !1;
						var o = [ko(e, t, n, r, i)],
							a = o[0],
							l = r.widgetNode;
						return (
							Ni(e, function (e) {
								l && (r.widgetNode = l.cloneNode(!0)), o.push(ko(e, at(e, t), at(e, n), r, i));
								for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
								a = K(o);
							}),
							new Co(o, a)
						);
					})(e, t, n, r, i);
				if (e.cm && !e.cm.curOp) return Qr(e.cm, ko)(e, t, n, r, i);
				var o = new wo(e, i),
					a = et(t, n);
				if ((r && I(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty))) return o;
				if (
					(o.replacedWith &&
						((o.collapsed = !0),
						(o.widgetNode = N("span", [o.replacedWith], "CodeMirror-widget")),
						r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"),
						r.insertLeft && (o.widgetNode.insertLeft = !0)),
					o.collapsed)
				) {
					if (jt(e, t.line, t, n, o) || (t.line != n.line && jt(e, n.line, t, n, o)))
						throw new Error("Inserting collapsed marker partially overlapping an existing one");
					wt = !0;
				}
				o.addToHistory && ji(e, {from: t, to: n, origin: "markText"}, e.sel, NaN);
				var l,
					s = t.line,
					u = e.cm;
				if (
					(e.iter(s, n.line + 1, function (e) {
						u && o.collapsed && !u.options.lineWrapping && It(e) == u.display.maxLine && (l = !0),
							o.collapsed && s != t.line && Xe(e, 0),
							(function (e, t) {
								(e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
									t.marker.attachLine(e);
							})(e, new kt(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)),
							++s;
					}),
					o.collapsed &&
						e.iter(t.line, n.line + 1, function (t) {
							_t(e, t) && Xe(t, 0);
						}),
					o.clearOnEnter &&
						de(o, "beforeCursorEnter", function () {
							return o.clear();
						}),
					o.readOnly && ((xt = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
					o.collapsed && ((o.id = ++xo), (o.atomic = !0)),
					u)
				) {
					if ((l && (u.curOp.updateMaxLine = !0), o.collapsed)) sr(u, t.line, n.line + 1);
					else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
						for (var c = t.line; c <= n.line; c++) ur(u, c, "text");
					o.atomic && Ji(u.doc), ln(u, "markerAdded", u, o);
				}
				return o;
			}
			(wo.prototype.clear = function () {
				if (!this.explicitlyCleared) {
					var e = this.doc.cm,
						t = e && !e.curOp;
					if ((t && zr(e), ye(this, "clear"))) {
						var n = this.find();
						n && ln(this, "clear", n.from, n.to);
					}
					for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
						var a = this.lines[o],
							l = Ct(a.markedSpans, this);
						e && !this.collapsed
							? ur(e, Ke(a), "text")
							: e && (null != l.to && (i = Ke(a)), null != l.from && (r = Ke(a))),
							(a.markedSpans = St(a.markedSpans, l)),
							null == l.from && this.collapsed && !_t(this.doc, a) && e && Xe(a, er(e.display));
					}
					if (e && this.collapsed && !e.options.lineWrapping)
						for (var s = 0; s < this.lines.length; ++s) {
							var u = It(this.lines[s]),
								c = zt(u);
							c > e.display.maxLineLength &&
								((e.display.maxLine = u),
								(e.display.maxLineLength = c),
								(e.display.maxLineChanged = !0));
						}
					null != r && e && this.collapsed && sr(e, r, i + 1),
						(this.lines.length = 0),
						(this.explicitlyCleared = !0),
						this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && Ji(e.doc)),
						e && ln(e, "markerCleared", e, this, r, i),
						t && $r(e),
						this.parent && this.parent.clear();
				}
			}),
				(wo.prototype.find = function (e, t) {
					var n, r;
					null == e && "bookmark" == this.type && (e = 1);
					for (var i = 0; i < this.lines.length; ++i) {
						var o = this.lines[i],
							a = Ct(o.markedSpans, this);
						if (null != a.from && ((n = Ze(t ? o : Ke(o), a.from)), -1 == e)) return n;
						if (null != a.to && ((r = Ze(t ? o : Ke(o), a.to)), 1 == e)) return r;
					}
					return n && {from: n, to: r};
				}),
				(wo.prototype.changed = function () {
					var e = this,
						t = this.find(-1, !0),
						n = this,
						r = this.doc.cm;
					t &&
						r &&
						Yr(r, function () {
							var i = t.line,
								o = Ke(t.line),
								a = Nn(r, o);
							if (
								(a && (In(a), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
								(r.curOp.updateMaxLine = !0),
								!_t(n.doc, i) && null != n.height)
							) {
								var l = n.height;
								n.height = null;
								var s = xn(n) - l;
								s && Xe(i, i.height + s);
							}
							ln(r, "markerChanged", r, e);
						});
				}),
				(wo.prototype.attachLine = function (e) {
					if (!this.lines.length && this.doc.cm) {
						var t = this.doc.cm.curOp;
						(t.maybeHiddenMarkers && -1 != _(t.maybeHiddenMarkers, this)) ||
							(t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
					}
					this.lines.push(e);
				}),
				(wo.prototype.detachLine = function (e) {
					if ((this.lines.splice(_(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
						var t = this.doc.cm.curOp;
						(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
					}
				}),
				be(wo);
			var Co = function (e, t) {
				(this.markers = e), (this.primary = t);
				for (var n = 0; n < e.length; ++n) e[n].parent = this;
			};
			function So(e) {
				return e.findMarks(Ze(e.first, 0), e.clipPos(Ze(e.lastLine())), function (e) {
					return e.parent;
				});
			}
			function To(e) {
				for (
					var t = function (t) {
							var n = e[t],
								r = [n.primary.doc];
							Ni(n.primary.doc, function (e) {
								return r.push(e);
							});
							for (var i = 0; i < n.markers.length; i++) {
								var o = n.markers[i];
								-1 == _(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
							}
						},
						n = 0;
					n < e.length;
					n++
				)
					t(n);
			}
			(Co.prototype.clear = function () {
				if (!this.explicitlyCleared) {
					this.explicitlyCleared = !0;
					for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
					ln(this, "clear");
				}
			}),
				(Co.prototype.find = function (e, t) {
					return this.primary.find(e, t);
				}),
				be(Co);
			var Lo = 0,
				Oo = function (e, t, n, r, i) {
					if (!(this instanceof Oo)) return new Oo(e, t, n, r, i);
					null == n && (n = 0),
						vo.call(this, [new go([new Ut("", null)])]),
						(this.first = n),
						(this.scrollTop = this.scrollLeft = 0),
						(this.cantEdit = !1),
						(this.cleanGeneration = 1),
						(this.modeFrontier = this.highlightFrontier = n);
					var o = Ze(n, 0);
					(this.sel = wi(o)),
						(this.history = new Di(null)),
						(this.id = ++Lo),
						(this.modeOption = t),
						(this.lineSep = r),
						(this.direction = "rtl" == i ? "rtl" : "ltr"),
						(this.extend = !1),
						"string" == typeof e && (e = this.splitLines(e)),
						Mi(this, {from: o, to: o, text: e}),
						Ki(this, wi(o), z);
				};
			(Oo.prototype = J(vo.prototype, {
				constructor: Oo,
				iter: function (e, t, n) {
					n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
				},
				insert: function (e, t) {
					for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
					this.insertInner(e - this.first, t, n);
				},
				remove: function (e, t) {
					this.removeInner(e - this.first, t);
				},
				getValue: function (e) {
					var t = Ge(this, this.first, this.first + this.size);
					return !1 === e ? t : t.join(e || this.lineSeparator());
				},
				setValue: Zr(function (e) {
					var t = Ze(this.first, 0),
						n = this.first + this.size - 1;
					oo(
						this,
						{
							from: t,
							to: Ze(n, Ue(this, n).text.length),
							text: this.splitLines(e),
							origin: "setValue",
							full: !0,
						},
						!0
					),
						this.cm && Mr(this.cm, 0, 0),
						Ki(this, wi(t), z);
				}),
				replaceRange: function (e, t, n, r) {
					co(this, e, (t = at(this, t)), (n = n ? at(this, n) : t), r);
				},
				getRange: function (e, t, n) {
					var r = Ve(this, at(this, e), at(this, t));
					return !1 === n ? r : r.join(n || this.lineSeparator());
				},
				getLine: function (e) {
					var t = this.getLineHandle(e);
					return t && t.text;
				},
				getLineHandle: function (e) {
					if (Qe(this, e)) return Ue(this, e);
				},
				getLineNumber: function (e) {
					return Ke(e);
				},
				getLineHandleVisualStart: function (e) {
					return "number" == typeof e && (e = Ue(this, e)), It(e);
				},
				lineCount: function () {
					return this.size;
				},
				firstLine: function () {
					return this.first;
				},
				lastLine: function () {
					return this.first + this.size - 1;
				},
				clipPos: function (e) {
					return at(this, e);
				},
				getCursor: function (e) {
					var t = this.sel.primary();
					return null == e || "head" == e
						? t.head
						: "anchor" == e
						? t.anchor
						: "end" == e || "to" == e || !1 === e
						? t.to()
						: t.from();
				},
				listSelections: function () {
					return this.sel.ranges;
				},
				somethingSelected: function () {
					return this.sel.somethingSelected();
				},
				setCursor: Zr(function (e, t, n) {
					Gi(this, at(this, "number" == typeof e ? Ze(e, t || 0) : e), null, n);
				}),
				setSelection: Zr(function (e, t, n) {
					Gi(this, at(this, e), at(this, t || e), n);
				}),
				extendSelection: Zr(function (e, t, n) {
					$i(this, at(this, e), t && at(this, t), n);
				}),
				extendSelections: Zr(function (e, t) {
					Ui(this, lt(this, e), t);
				}),
				extendSelectionsBy: Zr(function (e, t) {
					Ui(this, lt(this, Y(this.sel.ranges, e)), t);
				}),
				setSelections: Zr(function (e, t, n) {
					if (e.length) {
						for (var r = [], i = 0; i < e.length; i++)
							r[i] = new bi(at(this, e[i].anchor), at(this, e[i].head));
						null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Ki(this, xi(this.cm, r, t), n);
					}
				}),
				addSelection: Zr(function (e, t, n) {
					var r = this.sel.ranges.slice(0);
					r.push(new bi(at(this, e), at(this, t || e))), Ki(this, xi(this.cm, r, r.length - 1), n);
				}),
				getSelection: function (e) {
					for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
						var i = Ve(this, n[r].from(), n[r].to());
						t = t ? t.concat(i) : i;
					}
					return !1 === e ? t : t.join(e || this.lineSeparator());
				},
				getSelections: function (e) {
					for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
						var i = Ve(this, n[r].from(), n[r].to());
						!1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
					}
					return t;
				},
				replaceSelection: function (e, t, n) {
					for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
					this.replaceSelections(r, t, n || "+input");
				},
				replaceSelections: Zr(function (e, t, n) {
					for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
						var a = i.ranges[o];
						r[o] = {from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n};
					}
					for (
						var l =
								t &&
								"end" != t &&
								(function (e, t, n) {
									for (var r = [], i = Ze(e.first, 0), o = i, a = 0; a < t.length; a++) {
										var l = t[a],
											s = Ti(l.from, i, o),
											u = Ti(ki(l), i, o);
										if (((i = l.to), (o = u), "around" == n)) {
											var c = e.sel.ranges[a],
												f = et(c.head, c.anchor) < 0;
											r[a] = new bi(f ? u : s, f ? s : u);
										} else r[a] = new bi(s, s);
									}
									return new yi(r, e.sel.primIndex);
								})(this, r, t),
							s = r.length - 1;
						s >= 0;
						s--
					)
						oo(this, r[s]);
					l ? Xi(this, l) : this.cm && Ar(this.cm);
				}),
				undo: Zr(function () {
					lo(this, "undo");
				}),
				redo: Zr(function () {
					lo(this, "redo");
				}),
				undoSelection: Zr(function () {
					lo(this, "undo", !0);
				}),
				redoSelection: Zr(function () {
					lo(this, "redo", !0);
				}),
				setExtending: function (e) {
					this.extend = e;
				},
				getExtending: function () {
					return this.extend;
				},
				historySize: function () {
					for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
					for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
					return {undo: t, redo: n};
				},
				clearHistory: function () {
					var e = this;
					(this.history = new Di(this.history.maxGeneration)),
						Ni(
							this,
							function (t) {
								return (t.history = e.history);
							},
							!0
						);
				},
				markClean: function () {
					this.cleanGeneration = this.changeGeneration(!0);
				},
				changeGeneration: function (e) {
					return (
						e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
						this.history.generation
					);
				},
				isClean: function (e) {
					return this.history.generation == (e || this.cleanGeneration);
				},
				getHistory: function () {
					return {done: qi(this.history.done), undone: qi(this.history.undone)};
				},
				setHistory: function (e) {
					var t = (this.history = new Di(this.history.maxGeneration));
					(t.done = qi(e.done.slice(0), null, !0)), (t.undone = qi(e.undone.slice(0), null, !0));
				},
				setGutterMarker: Zr(function (e, t, n) {
					return mo(this, e, "gutter", function (e) {
						var r = e.gutterMarkers || (e.gutterMarkers = {});
						return (r[t] = n), !n && ne(r) && (e.gutterMarkers = null), !0;
					});
				}),
				clearGutter: Zr(function (e) {
					var t = this;
					this.iter(function (n) {
						n.gutterMarkers &&
							n.gutterMarkers[e] &&
							mo(t, n, "gutter", function () {
								return (n.gutterMarkers[e] = null), ne(n.gutterMarkers) && (n.gutterMarkers = null), !0;
							});
					});
				}),
				lineInfo: function (e) {
					var t;
					if ("number" == typeof e) {
						if (!Qe(this, e)) return null;
						if (((t = e), !(e = Ue(this, e)))) return null;
					} else if (null == (t = Ke(e))) return null;
					return {
						line: t,
						handle: e,
						text: e.text,
						gutterMarkers: e.gutterMarkers,
						textClass: e.textClass,
						bgClass: e.bgClass,
						wrapClass: e.wrapClass,
						widgets: e.widgets,
					};
				},
				addLineClass: Zr(function (e, t, n) {
					return mo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
						var r =
							"text" == t
								? "textClass"
								: "background" == t
								? "bgClass"
								: "gutter" == t
								? "gutterClass"
								: "wrapClass";
						if (e[r]) {
							if (S(n).test(e[r])) return !1;
							e[r] += " " + n;
						} else e[r] = n;
						return !0;
					});
				}),
				removeLineClass: Zr(function (e, t, n) {
					return mo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
						var r =
								"text" == t
									? "textClass"
									: "background" == t
									? "bgClass"
									: "gutter" == t
									? "gutterClass"
									: "wrapClass",
							i = e[r];
						if (!i) return !1;
						if (null == n) e[r] = null;
						else {
							var o = i.match(S(n));
							if (!o) return !1;
							var a = o.index + o[0].length;
							e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null;
						}
						return !0;
					});
				}),
				addLineWidget: Zr(function (e, t, n) {
					return (function (e, t, n, r) {
						var i = new yo(e, n, r),
							o = e.cm;
						return (
							o && i.noHScroll && (o.display.alignWidgets = !0),
							mo(e, t, "widget", function (t) {
								var n = t.widgets || (t.widgets = []);
								if (
									(null == i.insertAt
										? n.push(i)
										: n.splice(Math.min(n.length, Math.max(0, i.insertAt)), 0, i),
									(i.line = t),
									o && !_t(e, t))
								) {
									var r = qt(t) < e.scrollTop;
									Xe(t, t.height + xn(i)), r && Or(o, i.height), (o.curOp.forceUpdate = !0);
								}
								return !0;
							}),
							o && ln(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Ke(t)),
							i
						);
					})(this, e, t, n);
				}),
				removeLineWidget: function (e) {
					e.clear();
				},
				markText: function (e, t, n) {
					return ko(this, at(this, e), at(this, t), n, (n && n.type) || "range");
				},
				setBookmark: function (e, t) {
					var n = {
						replacedWith: t && (null == t.nodeType ? t.widget : t),
						insertLeft: t && t.insertLeft,
						clearWhenEmpty: !1,
						shared: t && t.shared,
						handleMouseEvents: t && t.handleMouseEvents,
					};
					return ko(this, (e = at(this, e)), e, n, "bookmark");
				},
				findMarksAt: function (e) {
					var t = [],
						n = Ue(this, (e = at(this, e)).line).markedSpans;
					if (n)
						for (var r = 0; r < n.length; ++r) {
							var i = n[r];
							(null == i.from || i.from <= e.ch) &&
								(null == i.to || i.to >= e.ch) &&
								t.push(i.marker.parent || i.marker);
						}
					return t;
				},
				findMarks: function (e, t, n) {
					(e = at(this, e)), (t = at(this, t));
					var r = [],
						i = e.line;
					return (
						this.iter(e.line, t.line + 1, function (o) {
							var a = o.markedSpans;
							if (a)
								for (var l = 0; l < a.length; l++) {
									var s = a[l];
									(null != s.to && i == e.line && e.ch >= s.to) ||
										(null == s.from && i != e.line) ||
										(null != s.from && i == t.line && s.from >= t.ch) ||
										(n && !n(s.marker)) ||
										r.push(s.marker.parent || s.marker);
								}
							++i;
						}),
						r
					);
				},
				getAllMarks: function () {
					var e = [];
					return (
						this.iter(function (t) {
							var n = t.markedSpans;
							if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
						}),
						e
					);
				},
				posFromIndex: function (e) {
					var t,
						n = this.first,
						r = this.lineSeparator().length;
					return (
						this.iter(function (i) {
							var o = i.text.length + r;
							if (o > e) return (t = e), !0;
							(e -= o), ++n;
						}),
						at(this, Ze(n, t))
					);
				},
				indexFromPos: function (e) {
					var t = (e = at(this, e)).ch;
					if (e.line < this.first || e.ch < 0) return 0;
					var n = this.lineSeparator().length;
					return (
						this.iter(this.first, e.line, function (e) {
							t += e.text.length + n;
						}),
						t
					);
				},
				copy: function (e) {
					var t = new Oo(
						Ge(this, this.first, this.first + this.size),
						this.modeOption,
						this.first,
						this.lineSep,
						this.direction
					);
					return (
						(t.scrollTop = this.scrollTop),
						(t.scrollLeft = this.scrollLeft),
						(t.sel = this.sel),
						(t.extend = !1),
						e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
						t
					);
				},
				linkedDoc: function (e) {
					e || (e = {});
					var t = this.first,
						n = this.first + this.size;
					null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
					var r = new Oo(Ge(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
					return (
						e.sharedHist && (r.history = this.history),
						(this.linked || (this.linked = [])).push({doc: r, sharedHist: e.sharedHist}),
						(r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}]),
						(function (e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n],
									i = r.find(),
									o = e.clipPos(i.from),
									a = e.clipPos(i.to);
								if (et(o, a)) {
									var l = ko(e, o, a, r.primary, r.primary.type);
									r.markers.push(l), (l.parent = r);
								}
							}
						})(r, So(this)),
						r
					);
				},
				unlinkDoc: function (e) {
					if ((e instanceof Ca && (e = e.doc), this.linked))
						for (var t = 0; t < this.linked.length; ++t) {
							if (this.linked[t].doc == e) {
								this.linked.splice(t, 1), e.unlinkDoc(this), To(So(this));
								break;
							}
						}
					if (e.history == this.history) {
						var n = [e.id];
						Ni(
							e,
							function (e) {
								return n.push(e.id);
							},
							!0
						),
							(e.history = new Di(null)),
							(e.history.done = qi(this.history.done, n)),
							(e.history.undone = qi(this.history.undone, n));
					}
				},
				iterLinkedDocs: function (e) {
					Ni(this, e);
				},
				getMode: function () {
					return this.mode;
				},
				getEditor: function () {
					return this.cm;
				},
				splitLines: function (e) {
					return this.lineSep ? e.split(this.lineSep) : Ee(e);
				},
				lineSeparator: function () {
					return this.lineSep || "\n";
				},
				setDirection: Zr(function (e) {
					"rtl" != e && (e = "ltr"),
						e != this.direction &&
							((this.direction = e),
							this.iter(function (e) {
								return (e.order = null);
							}),
							this.cm &&
								(function (e) {
									Yr(e, function () {
										Pi(e), sr(e);
									});
								})(this.cm));
				}),
			})),
				(Oo.prototype.eachLine = Oo.prototype.iter);
			var Ao = 0;
			function Mo(e) {
				var t = this;
				if ((No(t), !ge(t, e) && !wn(t.display, e))) {
					xe(e), a && (Ao = +new Date());
					var n = ar(t, e, !0),
						r = e.dataTransfer.files;
					if (n && !t.isReadOnly())
						if (r && r.length && window.FileReader && window.File)
							for (
								var i = r.length,
									o = Array(i),
									l = 0,
									s = function () {
										++l == i &&
											Qr(t, function () {
												var e = {
													from: (n = at(t.doc, n)),
													to: n,
													text: t.doc.splitLines(
														o
															.filter(function (e) {
																return null != e;
															})
															.join(t.doc.lineSeparator())
													),
													origin: "paste",
												};
												oo(t.doc, e), Xi(t.doc, wi(at(t.doc, n), at(t.doc, ki(e))));
											})();
									},
									u = function (e, n) {
										if (
											t.options.allowDropFileTypes &&
											-1 == _(t.options.allowDropFileTypes, e.type)
										)
											s();
										else {
											var r = new FileReader();
											(r.onerror = function () {
												return s();
											}),
												(r.onload = function () {
													var e = r.result;
													/[\x00-\x08\x0e-\x1f]{2}/.test(e) ? s() : ((o[n] = e), s());
												}),
												r.readAsText(e);
										}
									},
									c = 0;
								c < r.length;
								c++
							)
								u(r[c], c);
						else {
							if (t.state.draggingText && t.doc.sel.contains(n) > -1)
								return (
									t.state.draggingText(e),
									void setTimeout(function () {
										return t.display.input.focus();
									}, 20)
								);
							try {
								var f = e.dataTransfer.getData("Text");
								if (f) {
									var d;
									if (
										(t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()),
										Yi(t.doc, wi(n, n)),
										d)
									)
										for (var p = 0; p < d.length; ++p)
											co(t.doc, "", d[p].anchor, d[p].head, "drag");
									t.replaceSelection(f, "around", "paste"), t.display.input.focus();
								}
							} catch (e) {}
						}
				}
			}
			function No(e) {
				e.display.dragCursor &&
					(e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
			}
			function Eo(e) {
				if (document.getElementsByClassName) {
					for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
						var i = t[r].CodeMirror;
						i && n.push(i);
					}
					n.length &&
						n[0].operation(function () {
							for (var t = 0; t < n.length; t++) e(n[t]);
						});
				}
			}
			var Po = !1;
			function Do() {
				Po ||
					(!(function () {
						var e;
						de(window, "resize", function () {
							null == e &&
								(e = setTimeout(function () {
									(e = null), Eo(Ho);
								}, 100));
						}),
							de(window, "blur", function () {
								return Eo(kr);
							});
					})(),
					(Po = !0));
			}
			function Ho(e) {
				var t = e.display;
				(t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
					(t.scrollbarsClipped = !1),
					e.setSize();
			}
			for (
				var Ro = {
						3: "Pause",
						8: "Backspace",
						9: "Tab",
						13: "Enter",
						16: "Shift",
						17: "Ctrl",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Esc",
						32: "Space",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "Left",
						38: "Up",
						39: "Right",
						40: "Down",
						44: "PrintScrn",
						45: "Insert",
						46: "Delete",
						59: ";",
						61: "=",
						91: "Mod",
						92: "Mod",
						93: "Mod",
						106: "*",
						107: "=",
						109: "-",
						110: ".",
						111: "/",
						145: "ScrollLock",
						173: "-",
						186: ";",
						187: "=",
						188: ",",
						189: "-",
						190: ".",
						191: "/",
						192: "`",
						219: "[",
						220: "\\",
						221: "]",
						222: "'",
						224: "Mod",
						63232: "Up",
						63233: "Down",
						63234: "Left",
						63235: "Right",
						63272: "Delete",
						63273: "Home",
						63275: "End",
						63276: "PageUp",
						63277: "PageDown",
						63302: "Insert",
					},
					jo = 0;
				jo < 10;
				jo++
			)
				Ro[jo + 48] = Ro[jo + 96] = String(jo);
			for (var Io = 65; Io <= 90; Io++) Ro[Io] = String.fromCharCode(Io);
			for (var Wo = 1; Wo <= 12; Wo++) Ro[Wo + 111] = Ro[Wo + 63235] = "F" + Wo;
			var Fo = {};
			function _o(e) {
				var t,
					n,
					r,
					i,
					o = e.split(/-(?!$)/);
				e = o[o.length - 1];
				for (var a = 0; a < o.length - 1; a++) {
					var l = o[a];
					if (/^(cmd|meta|m)$/i.test(l)) i = !0;
					else if (/^a(lt)?$/i.test(l)) t = !0;
					else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
					else {
						if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
						r = !0;
					}
				}
				return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
			}
			function Bo(e) {
				var t = {};
				for (var n in e)
					if (e.hasOwnProperty(n)) {
						var r = e[n];
						if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
						if ("..." == r) {
							delete e[n];
							continue;
						}
						for (var i = Y(n.split(" "), _o), o = 0; o < i.length; o++) {
							var a = void 0,
								l = void 0;
							o == i.length - 1
								? ((l = i.join(" ")), (a = r))
								: ((l = i.slice(0, o + 1).join(" ")), (a = "..."));
							var s = t[l];
							if (s) {
								if (s != a) throw new Error("Inconsistent bindings for " + l);
							} else t[l] = a;
						}
						delete e[n];
					}
				for (var u in t) e[u] = t[u];
				return e;
			}
			function qo(e, t, n, r) {
				var i = (t = Vo(t)).call ? t.call(e, r) : t[e];
				if (!1 === i) return "nothing";
				if ("..." === i) return "multi";
				if (null != i && n(i)) return "handled";
				if (t.fallthrough) {
					if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
						return qo(e, t.fallthrough, n, r);
					for (var o = 0; o < t.fallthrough.length; o++) {
						var a = qo(e, t.fallthrough[o], n, r);
						if (a) return a;
					}
				}
			}
			function zo(e) {
				var t = "string" == typeof e ? e : Ro[e.keyCode];
				return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
			}
			function $o(e, t, n) {
				var r = e;
				return (
					t.altKey && "Alt" != r && (e = "Alt-" + e),
					(k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
					(k ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
					!n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
					e
				);
			}
			function Uo(e, t) {
				if (f && 34 == e.keyCode && e.char) return !1;
				var n = Ro[e.keyCode];
				return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), $o(n, e, t));
			}
			function Vo(e) {
				return "string" == typeof e ? Fo[e] : e;
			}
			function Go(e, t) {
				for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
					for (var o = t(n[i]); r.length && et(o.from, K(r).to) <= 0; ) {
						var a = r.pop();
						if (et(a.from, o.from) < 0) {
							o.from = a.from;
							break;
						}
					}
					r.push(o);
				}
				Yr(e, function () {
					for (var t = r.length - 1; t >= 0; t--) co(e.doc, "", r[t].from, r[t].to, "+delete");
					Ar(e);
				});
			}
			function Xo(e, t, n) {
				var r = oe(e.text, t + n, n);
				return r < 0 || r > e.text.length ? null : r;
			}
			function Ko(e, t, n) {
				var r = Xo(e, t.ch, n);
				return null == r ? null : new Ze(t.line, r, n < 0 ? "after" : "before");
			}
			function Yo(e, t, n, r, i) {
				if (e) {
					"rtl" == t.doc.direction && (i = -i);
					var o = ce(n, t.doc.direction);
					if (o) {
						var a,
							l = i < 0 ? K(o) : o[0],
							s = i < 0 == (1 == l.level) ? "after" : "before";
						if (l.level > 0 || "rtl" == t.doc.direction) {
							var u = En(t, n);
							a = i < 0 ? n.text.length - 1 : 0;
							var c = Pn(t, u, a).top;
							(a = ae(
								function (e) {
									return Pn(t, u, e).top == c;
								},
								i < 0 == (1 == l.level) ? l.from : l.to - 1,
								a
							)),
								"before" == s && (a = Xo(n, a, 1));
						} else a = i < 0 ? l.to : l.from;
						return new Ze(r, a, s);
					}
				}
				return new Ze(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
			}
			(Fo.basic = {
				Left: "goCharLeft",
				Right: "goCharRight",
				Up: "goLineUp",
				Down: "goLineDown",
				End: "goLineEnd",
				Home: "goLineStartSmart",
				PageUp: "goPageUp",
				PageDown: "goPageDown",
				Delete: "delCharAfter",
				Backspace: "delCharBefore",
				"Shift-Backspace": "delCharBefore",
				Tab: "defaultTab",
				"Shift-Tab": "indentAuto",
				Enter: "newlineAndIndent",
				Insert: "toggleOverwrite",
				Esc: "singleSelection",
			}),
				(Fo.pcDefault = {
					"Ctrl-A": "selectAll",
					"Ctrl-D": "deleteLine",
					"Ctrl-Z": "undo",
					"Shift-Ctrl-Z": "redo",
					"Ctrl-Y": "redo",
					"Ctrl-Home": "goDocStart",
					"Ctrl-End": "goDocEnd",
					"Ctrl-Up": "goLineUp",
					"Ctrl-Down": "goLineDown",
					"Ctrl-Left": "goGroupLeft",
					"Ctrl-Right": "goGroupRight",
					"Alt-Left": "goLineStart",
					"Alt-Right": "goLineEnd",
					"Ctrl-Backspace": "delGroupBefore",
					"Ctrl-Delete": "delGroupAfter",
					"Ctrl-S": "save",
					"Ctrl-F": "find",
					"Ctrl-G": "findNext",
					"Shift-Ctrl-G": "findPrev",
					"Shift-Ctrl-F": "replace",
					"Shift-Ctrl-R": "replaceAll",
					"Ctrl-[": "indentLess",
					"Ctrl-]": "indentMore",
					"Ctrl-U": "undoSelection",
					"Shift-Ctrl-U": "redoSelection",
					"Alt-U": "redoSelection",
					fallthrough: "basic",
				}),
				(Fo.emacsy = {
					"Ctrl-F": "goCharRight",
					"Ctrl-B": "goCharLeft",
					"Ctrl-P": "goLineUp",
					"Ctrl-N": "goLineDown",
					"Alt-F": "goWordRight",
					"Alt-B": "goWordLeft",
					"Ctrl-A": "goLineStart",
					"Ctrl-E": "goLineEnd",
					"Ctrl-V": "goPageDown",
					"Shift-Ctrl-V": "goPageUp",
					"Ctrl-D": "delCharAfter",
					"Ctrl-H": "delCharBefore",
					"Alt-D": "delWordAfter",
					"Alt-Backspace": "delWordBefore",
					"Ctrl-K": "killLine",
					"Ctrl-T": "transposeChars",
					"Ctrl-O": "openLine",
				}),
				(Fo.macDefault = {
					"Cmd-A": "selectAll",
					"Cmd-D": "deleteLine",
					"Cmd-Z": "undo",
					"Shift-Cmd-Z": "redo",
					"Cmd-Y": "redo",
					"Cmd-Home": "goDocStart",
					"Cmd-Up": "goDocStart",
					"Cmd-End": "goDocEnd",
					"Cmd-Down": "goDocEnd",
					"Alt-Left": "goGroupLeft",
					"Alt-Right": "goGroupRight",
					"Cmd-Left": "goLineLeft",
					"Cmd-Right": "goLineRight",
					"Alt-Backspace": "delGroupBefore",
					"Ctrl-Alt-Backspace": "delGroupAfter",
					"Alt-Delete": "delGroupAfter",
					"Cmd-S": "save",
					"Cmd-F": "find",
					"Cmd-G": "findNext",
					"Shift-Cmd-G": "findPrev",
					"Cmd-Alt-F": "replace",
					"Shift-Cmd-Alt-F": "replaceAll",
					"Cmd-[": "indentLess",
					"Cmd-]": "indentMore",
					"Cmd-Backspace": "delWrappedLineLeft",
					"Cmd-Delete": "delWrappedLineRight",
					"Cmd-U": "undoSelection",
					"Shift-Cmd-U": "redoSelection",
					"Ctrl-Up": "goDocStart",
					"Ctrl-Down": "goDocEnd",
					fallthrough: ["basic", "emacsy"],
				}),
				(Fo.default = y ? Fo.macDefault : Fo.pcDefault);
			var Qo = {
				selectAll: ro,
				singleSelection: function (e) {
					return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), z);
				},
				killLine: function (e) {
					return Go(e, function (t) {
						if (t.empty()) {
							var n = Ue(e.doc, t.head.line).text.length;
							return t.head.ch == n && t.head.line < e.lastLine()
								? {from: t.head, to: Ze(t.head.line + 1, 0)}
								: {from: t.head, to: Ze(t.head.line, n)};
						}
						return {from: t.from(), to: t.to()};
					});
				},
				deleteLine: function (e) {
					return Go(e, function (t) {
						return {from: Ze(t.from().line, 0), to: at(e.doc, Ze(t.to().line + 1, 0))};
					});
				},
				delLineLeft: function (e) {
					return Go(e, function (e) {
						return {from: Ze(e.from().line, 0), to: e.from()};
					});
				},
				delWrappedLineLeft: function (e) {
					return Go(e, function (t) {
						var n = e.charCoords(t.head, "div").top + 5;
						return {from: e.coordsChar({left: 0, top: n}, "div"), to: t.from()};
					});
				},
				delWrappedLineRight: function (e) {
					return Go(e, function (t) {
						var n = e.charCoords(t.head, "div").top + 5,
							r = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div");
						return {from: t.from(), to: r};
					});
				},
				undo: function (e) {
					return e.undo();
				},
				redo: function (e) {
					return e.redo();
				},
				undoSelection: function (e) {
					return e.undoSelection();
				},
				redoSelection: function (e) {
					return e.redoSelection();
				},
				goDocStart: function (e) {
					return e.extendSelection(Ze(e.firstLine(), 0));
				},
				goDocEnd: function (e) {
					return e.extendSelection(Ze(e.lastLine()));
				},
				goLineStart: function (e) {
					return e.extendSelectionsBy(
						function (t) {
							return Jo(e, t.head.line);
						},
						{origin: "+move", bias: 1}
					);
				},
				goLineStartSmart: function (e) {
					return e.extendSelectionsBy(
						function (t) {
							return Zo(e, t.head);
						},
						{origin: "+move", bias: 1}
					);
				},
				goLineEnd: function (e) {
					return e.extendSelectionsBy(
						function (t) {
							return (function (e, t) {
								var n = Ue(e.doc, t),
									r = (function (e) {
										for (var t; (t = Ht(e)); ) e = t.find(1, !0).line;
										return e;
									})(n);
								r != n && (t = Ke(r));
								return Yo(!0, e, n, t, -1);
							})(e, t.head.line);
						},
						{origin: "+move", bias: -1}
					);
				},
				goLineRight: function (e) {
					return e.extendSelectionsBy(function (t) {
						var n = e.cursorCoords(t.head, "div").top + 5;
						return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div");
					}, U);
				},
				goLineLeft: function (e) {
					return e.extendSelectionsBy(function (t) {
						var n = e.cursorCoords(t.head, "div").top + 5;
						return e.coordsChar({left: 0, top: n}, "div");
					}, U);
				},
				goLineLeftSmart: function (e) {
					return e.extendSelectionsBy(function (t) {
						var n = e.cursorCoords(t.head, "div").top + 5,
							r = e.coordsChar({left: 0, top: n}, "div");
						return r.ch < e.getLine(r.line).search(/\S/) ? Zo(e, t.head) : r;
					}, U);
				},
				goLineUp: function (e) {
					return e.moveV(-1, "line");
				},
				goLineDown: function (e) {
					return e.moveV(1, "line");
				},
				goPageUp: function (e) {
					return e.moveV(-1, "page");
				},
				goPageDown: function (e) {
					return e.moveV(1, "page");
				},
				goCharLeft: function (e) {
					return e.moveH(-1, "char");
				},
				goCharRight: function (e) {
					return e.moveH(1, "char");
				},
				goColumnLeft: function (e) {
					return e.moveH(-1, "column");
				},
				goColumnRight: function (e) {
					return e.moveH(1, "column");
				},
				goWordLeft: function (e) {
					return e.moveH(-1, "word");
				},
				goGroupRight: function (e) {
					return e.moveH(1, "group");
				},
				goGroupLeft: function (e) {
					return e.moveH(-1, "group");
				},
				goWordRight: function (e) {
					return e.moveH(1, "word");
				},
				delCharBefore: function (e) {
					return e.deleteH(-1, "codepoint");
				},
				delCharAfter: function (e) {
					return e.deleteH(1, "char");
				},
				delWordBefore: function (e) {
					return e.deleteH(-1, "word");
				},
				delWordAfter: function (e) {
					return e.deleteH(1, "word");
				},
				delGroupBefore: function (e) {
					return e.deleteH(-1, "group");
				},
				delGroupAfter: function (e) {
					return e.deleteH(1, "group");
				},
				indentAuto: function (e) {
					return e.indentSelection("smart");
				},
				indentMore: function (e) {
					return e.indentSelection("add");
				},
				indentLess: function (e) {
					return e.indentSelection("subtract");
				},
				insertTab: function (e) {
					return e.replaceSelection("\t");
				},
				insertSoftTab: function (e) {
					for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
						var o = n[i].from(),
							a = W(e.getLine(o.line), o.ch, r);
						t.push(X(r - (a % r)));
					}
					e.replaceSelections(t);
				},
				defaultTab: function (e) {
					e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
				},
				transposeChars: function (e) {
					return Yr(e, function () {
						for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
							if (t[r].empty()) {
								var i = t[r].head,
									o = Ue(e.doc, i.line).text;
								if (o)
									if ((i.ch == o.length && (i = new Ze(i.line, i.ch - 1)), i.ch > 0))
										(i = new Ze(i.line, i.ch + 1)),
											e.replaceRange(
												o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
												Ze(i.line, i.ch - 2),
												i,
												"+transpose"
											);
									else if (i.line > e.doc.first) {
										var a = Ue(e.doc, i.line - 1).text;
										a &&
											((i = new Ze(i.line, 1)),
											e.replaceRange(
												o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
												Ze(i.line - 1, a.length - 1),
												i,
												"+transpose"
											));
									}
								n.push(new bi(i, i));
							}
						e.setSelections(n);
					});
				},
				newlineAndIndent: function (e) {
					return Yr(e, function () {
						for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
							e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
						t = e.listSelections();
						for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
						Ar(e);
					});
				},
				openLine: function (e) {
					return e.replaceSelection("\n", "start");
				},
				toggleOverwrite: function (e) {
					return e.toggleOverwrite();
				},
			};
			function Jo(e, t) {
				var n = Ue(e.doc, t),
					r = It(n);
				return r != n && (t = Ke(r)), Yo(!0, e, r, t, 1);
			}
			function Zo(e, t) {
				var n = Jo(e, t.line),
					r = Ue(e.doc, n.line),
					i = ce(r, e.doc.direction);
				if (!i || 0 == i[0].level) {
					var o = Math.max(n.ch, r.text.search(/\S/)),
						a = t.line == n.line && t.ch <= o && t.ch;
					return Ze(n.line, a ? 0 : o, n.sticky);
				}
				return n;
			}
			function ea(e, t, n) {
				if ("string" == typeof t && !(t = Qo[t])) return !1;
				e.display.input.ensurePolled();
				var r = e.display.shift,
					i = !1;
				try {
					e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != q);
				} finally {
					(e.display.shift = r), (e.state.suppressEdits = !1);
				}
				return i;
			}
			var ta = new F();
			function na(e, t, n, r) {
				var i = e.state.keySeq;
				if (i) {
					if (zo(t)) return "handled";
					if (
						(/\'$/.test(t)
							? (e.state.keySeq = null)
							: ta.set(50, function () {
									e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
							  }),
						ra(e, i + " " + t, n, r))
					)
						return !0;
				}
				return ra(e, t, n, r);
			}
			function ra(e, t, n, r) {
				var i = (function (e, t, n) {
					for (var r = 0; r < e.state.keyMaps.length; r++) {
						var i = qo(t, e.state.keyMaps[r], n, e);
						if (i) return i;
					}
					return (e.options.extraKeys && qo(t, e.options.extraKeys, n, e)) || qo(t, e.options.keyMap, n, e);
				})(e, t, r);
				return (
					"multi" == i && (e.state.keySeq = t),
					"handled" == i && ln(e, "keyHandled", e, t, n),
					("handled" != i && "multi" != i) || (xe(n), yr(e)),
					!!i
				);
			}
			function ia(e, t) {
				var n = Uo(t, !0);
				return (
					!!n &&
					(t.shiftKey && !e.state.keySeq
						? na(e, "Shift-" + n, t, function (t) {
								return ea(e, t, !0);
						  }) ||
						  na(e, n, t, function (t) {
								if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ea(e, t);
						  })
						: na(e, n, t, function (t) {
								return ea(e, t);
						  }))
				);
			}
			var oa = null;
			function aa(e) {
				var t = this;
				if (!((e.target && e.target != t.display.input.getField()) || ((t.curOp.focus = P()), ge(t, e)))) {
					a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
					var r = e.keyCode;
					t.display.shift = 16 == r || e.shiftKey;
					var i = ia(t, e);
					f &&
						((oa = i ? r : null),
						!i && 88 == r && !De && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
						n &&
							!y &&
							!i &&
							46 == r &&
							e.shiftKey &&
							!e.ctrlKey &&
							document.execCommand &&
							document.execCommand("cut"),
						18 != r ||
							/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
							(function (e) {
								var t = e.display.lineDiv;
								function n(e) {
									(18 != e.keyCode && e.altKey) ||
										(L(t, "CodeMirror-crosshair"),
										he(document, "keyup", n),
										he(document, "mouseover", n));
								}
								D(t, "CodeMirror-crosshair"), de(document, "keyup", n), de(document, "mouseover", n);
							})(t);
				}
			}
			function la(e) {
				16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
			}
			function sa(e) {
				var t = this;
				if (
					!(
						(e.target && e.target != t.display.input.getField()) ||
						wn(t.display, e) ||
						ge(t, e) ||
						(e.ctrlKey && !e.altKey) ||
						(y && e.metaKey)
					)
				) {
					var n = e.keyCode,
						r = e.charCode;
					if (f && n == oa) return (oa = null), void xe(e);
					if (!f || (e.which && !(e.which < 10)) || !ia(t, e)) {
						var i = String.fromCharCode(null == r ? n : r);
						"\b" != i &&
							((function (e, t, n) {
								return na(e, "'" + n + "'", t, function (t) {
									return ea(e, t, !0);
								});
							})(t, e, i) ||
								t.display.input.onKeyPress(e));
					}
				}
			}
			var ua,
				ca,
				fa = function (e, t, n) {
					(this.time = e), (this.pos = t), (this.button = n);
				};
			function da(e) {
				var t = this,
					n = t.display;
				if (!(ge(t, e) || (n.activeTouch && n.input.supportsTouch())))
					if ((n.input.ensurePolled(), (n.shift = e.shiftKey), wn(n, e)))
						s ||
							((n.scroller.draggable = !1),
							setTimeout(function () {
								return (n.scroller.draggable = !0);
							}, 100));
					else if (!ma(t, e)) {
						var r = ar(t, e),
							i = Te(e),
							o = r
								? (function (e, t) {
										var n = +new Date();
										return ca && ca.compare(n, e, t)
											? ((ua = ca = null), "triple")
											: ua && ua.compare(n, e, t)
											? ((ca = new fa(n, e, t)), (ua = null), "double")
											: ((ua = new fa(n, e, t)), (ca = null), "single");
								  })(r, i)
								: "single";
						window.focus(),
							1 == i && t.state.selectingText && t.state.selectingText(e),
							(r &&
								(function (e, t, n, r, i) {
									var o = "Click";
									"double" == r ? (o = "Double" + o) : "triple" == r && (o = "Triple" + o);
									return na(
										e,
										$o((o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o), i),
										i,
										function (t) {
											if (("string" == typeof t && (t = Qo[t]), !t)) return !1;
											var r = !1;
											try {
												e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != q);
											} finally {
												e.state.suppressEdits = !1;
											}
											return r;
										}
									);
								})(t, i, r, o, e)) ||
								(1 == i
									? r
										? (function (e, t, n, r) {
												a ? setTimeout(j(br, e), 0) : (e.curOp.focus = P());
												var i,
													o = (function (e, t, n) {
														var r = e.getOption("configureMouse"),
															i = r ? r(e, t, n) : {};
														if (null == i.unit) {
															var o = b ? n.shiftKey && n.metaKey : n.altKey;
															i.unit = o
																? "rectangle"
																: "single" == t
																? "char"
																: "double" == t
																? "word"
																: "line";
														}
														(null == i.extend || e.doc.extend) &&
															(i.extend = e.doc.extend || n.shiftKey);
														null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey);
														null == i.moveOnDrag &&
															(i.moveOnDrag = !(y ? n.altKey : n.ctrlKey));
														return i;
													})(e, n, r),
													u = e.doc.sel;
												e.options.dragDrop &&
												Ae &&
												!e.isReadOnly() &&
												"single" == n &&
												(i = u.contains(t)) > -1 &&
												(et((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
												(et(i.to(), t) > 0 || t.xRel < 0)
													? (function (e, t, n, r) {
															var i = e.display,
																o = !1,
																u = Qr(e, function (t) {
																	s && (i.scroller.draggable = !1),
																		(e.state.draggingText = !1),
																		e.state.delayingBlurEvent &&
																			(e.hasFocus()
																				? (e.state.delayingBlurEvent = !1)
																				: xr(e)),
																		he(i.wrapper.ownerDocument, "mouseup", u),
																		he(i.wrapper.ownerDocument, "mousemove", c),
																		he(i.scroller, "dragstart", f),
																		he(i.scroller, "drop", u),
																		o ||
																			(xe(t),
																			r.addNew ||
																				$i(e.doc, n, null, null, r.extend),
																			(s && !d) || (a && 9 == l)
																				? setTimeout(function () {
																						i.wrapper.ownerDocument.body.focus(
																							{preventScroll: !0}
																						),
																							i.input.focus();
																				  }, 20)
																				: i.input.focus());
																}),
																c = function (e) {
																	o =
																		o ||
																		Math.abs(t.clientX - e.clientX) +
																			Math.abs(t.clientY - e.clientY) >=
																			10;
																},
																f = function () {
																	return (o = !0);
																};
															s && (i.scroller.draggable = !0);
															(e.state.draggingText = u),
																(u.copy = !r.moveOnDrag),
																de(i.wrapper.ownerDocument, "mouseup", u),
																de(i.wrapper.ownerDocument, "mousemove", c),
																de(i.scroller, "dragstart", f),
																de(i.scroller, "drop", u),
																(e.state.delayingBlurEvent = !0),
																setTimeout(function () {
																	return i.input.focus();
																}, 20),
																i.scroller.dragDrop && i.scroller.dragDrop();
													  })(e, r, t, o)
													: (function (e, t, n, r) {
															a && xr(e);
															var i = e.display,
																o = e.doc;
															xe(t);
															var l,
																s,
																u = o.sel,
																c = u.ranges;
															r.addNew && !r.extend
																? ((s = o.sel.contains(n)),
																  (l = s > -1 ? c[s] : new bi(n, n)))
																: ((l = o.sel.primary()), (s = o.sel.primIndex));
															if ("rectangle" == r.unit)
																r.addNew || (l = new bi(n, n)),
																	(n = ar(e, t, !0, !0)),
																	(s = -1);
															else {
																var f = pa(e, n, r.unit);
																l = r.extend ? zi(l, f.anchor, f.head, r.extend) : f;
															}
															r.addNew
																? -1 == s
																	? ((s = c.length),
																	  Ki(o, xi(e, c.concat([l]), s), {
																			scroll: !1,
																			origin: "*mouse",
																	  }))
																	: c.length > 1 &&
																	  c[s].empty() &&
																	  "char" == r.unit &&
																	  !r.extend
																	? (Ki(
																			o,
																			xi(
																				e,
																				c.slice(0, s).concat(c.slice(s + 1)),
																				0
																			),
																			{scroll: !1, origin: "*mouse"}
																	  ),
																	  (u = o.sel))
																	: Vi(o, s, l, $)
																: ((s = 0), Ki(o, new yi([l], 0), $), (u = o.sel));
															var d = n;
															function p(t) {
																if (0 != et(d, t))
																	if (((d = t), "rectangle" == r.unit)) {
																		for (
																			var i = [],
																				a = e.options.tabSize,
																				c = W(Ue(o, n.line).text, n.ch, a),
																				f = W(Ue(o, t.line).text, t.ch, a),
																				p = Math.min(c, f),
																				h = Math.max(c, f),
																				m = Math.min(n.line, t.line),
																				g = Math.min(
																					e.lastLine(),
																					Math.max(n.line, t.line)
																				);
																			m <= g;
																			m++
																		) {
																			var v = Ue(o, m).text,
																				y = V(v, p, a);
																			p == h
																				? i.push(new bi(Ze(m, y), Ze(m, y)))
																				: v.length > y &&
																				  i.push(
																						new bi(
																							Ze(m, y),
																							Ze(m, V(v, h, a))
																						)
																				  );
																		}
																		i.length || i.push(new bi(n, n)),
																			Ki(
																				o,
																				xi(
																					e,
																					u.ranges.slice(0, s).concat(i),
																					s
																				),
																				{origin: "*mouse", scroll: !1}
																			),
																			e.scrollIntoView(t);
																	} else {
																		var b,
																			x = l,
																			w = pa(e, t, r.unit),
																			k = x.anchor;
																		et(w.anchor, k) > 0
																			? ((b = w.head),
																			  (k = it(x.from(), w.anchor)))
																			: ((b = w.anchor),
																			  (k = rt(x.to(), w.head)));
																		var C = u.ranges.slice(0);
																		(C[s] = (function (e, t) {
																			var n = t.anchor,
																				r = t.head,
																				i = Ue(e.doc, n.line);
																			if (0 == et(n, r) && n.sticky == r.sticky)
																				return t;
																			var o = ce(i);
																			if (!o) return t;
																			var a = se(o, n.ch, n.sticky),
																				l = o[a];
																			if (l.from != n.ch && l.to != n.ch)
																				return t;
																			var s,
																				u =
																					a +
																					((l.from == n.ch) == (1 != l.level)
																						? 0
																						: 1);
																			if (0 == u || u == o.length) return t;
																			if (r.line != n.line)
																				s =
																					(r.line - n.line) *
																						("ltr" == e.doc.direction
																							? 1
																							: -1) >
																					0;
																			else {
																				var c = se(o, r.ch, r.sticky),
																					f =
																						c - a ||
																						(r.ch - n.ch) *
																							(1 == l.level ? -1 : 1);
																				s =
																					c == u - 1 || c == u
																						? f < 0
																						: f > 0;
																			}
																			var d = o[u + (s ? -1 : 0)],
																				p = s == (1 == d.level),
																				h = p ? d.from : d.to,
																				m = p ? "after" : "before";
																			return n.ch == h && n.sticky == m
																				? t
																				: new bi(new Ze(n.line, h, m), r);
																		})(e, new bi(at(o, k), b))),
																			Ki(o, xi(e, C, s), $);
																	}
															}
															var h = i.wrapper.getBoundingClientRect(),
																m = 0;
															function g(t) {
																(e.state.selectingText = !1),
																	(m = 1 / 0),
																	t && (xe(t), i.input.focus()),
																	he(i.wrapper.ownerDocument, "mousemove", v),
																	he(i.wrapper.ownerDocument, "mouseup", y),
																	(o.history.lastSelOrigin = null);
															}
															var v = Qr(e, function (t) {
																	0 !== t.buttons && Te(t)
																		? (function t(n) {
																				var a = ++m;
																				var l = ar(
																					e,
																					n,
																					!0,
																					"rectangle" == r.unit
																				);
																				if (!l) return;
																				if (0 != et(l, d)) {
																					(e.curOp.focus = P()), p(l);
																					var s = Tr(i, o);
																					(l.line >= s.to ||
																						l.line < s.from) &&
																						setTimeout(
																							Qr(e, function () {
																								m == a && t(n);
																							}),
																							150
																						);
																				} else {
																					var u =
																						n.clientY < h.top
																							? -20
																							: n.clientY > h.bottom
																							? 20
																							: 0;
																					u &&
																						setTimeout(
																							Qr(e, function () {
																								m == a &&
																									((i.scroller.scrollTop +=
																										u),
																									t(n));
																							}),
																							50
																						);
																				}
																		  })(t)
																		: g(t);
																}),
																y = Qr(e, g);
															(e.state.selectingText = y),
																de(i.wrapper.ownerDocument, "mousemove", v),
																de(i.wrapper.ownerDocument, "mouseup", y);
													  })(e, r, t, o);
										  })(t, r, o, e)
										: Se(e) == n.scroller && xe(e)
									: 2 == i
									? (r && $i(t.doc, r),
									  setTimeout(function () {
											return n.input.focus();
									  }, 20))
									: 3 == i && (C ? t.display.input.onContextMenu(e) : xr(t)));
					}
			}
			function pa(e, t, n) {
				if ("char" == n) return new bi(t, t);
				if ("word" == n) return e.findWordAt(t);
				if ("line" == n) return new bi(Ze(t.line, 0), at(e.doc, Ze(t.line + 1, 0)));
				var r = n(e, t);
				return new bi(r.from, r.to);
			}
			function ha(e, t, n, r) {
				var i, o;
				if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
				else
					try {
						(i = t.clientX), (o = t.clientY);
					} catch (e) {
						return !1;
					}
				if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
				r && xe(t);
				var a = e.display,
					l = a.lineDiv.getBoundingClientRect();
				if (o > l.bottom || !ye(e, n)) return ke(t);
				o -= l.top - a.viewOffset;
				for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
					var u = a.gutters.childNodes[s];
					if (u && u.getBoundingClientRect().right >= i)
						return me(e, n, e, Ye(e.doc, o), e.display.gutterSpecs[s].className, t), ke(t);
				}
			}
			function ma(e, t) {
				return ha(e, t, "gutterClick", !0);
			}
			function ga(e, t) {
				wn(e.display, t) ||
					(function (e, t) {
						if (!ye(e, "gutterContextMenu")) return !1;
						return ha(e, t, "gutterContextMenu", !1);
					})(e, t) ||
					ge(e, t, "contextmenu") ||
					C ||
					e.display.input.onContextMenu(t);
			}
			function va(e) {
				(e.display.wrapper.className =
					e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
					e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
					Fn(e);
			}
			fa.prototype.compare = function (e, t, n) {
				return this.time + 400 > e && 0 == et(t, this.pos) && n == this.button;
			};
			var ya = {
					toString: function () {
						return "CodeMirror.Init";
					},
				},
				ba = {},
				xa = {};
			function wa(e, t, n) {
				if (!t != !(n && n != ya)) {
					var r = e.display.dragFunctions,
						i = t ? de : he;
					i(e.display.scroller, "dragstart", r.start),
						i(e.display.scroller, "dragenter", r.enter),
						i(e.display.scroller, "dragover", r.over),
						i(e.display.scroller, "dragleave", r.leave),
						i(e.display.scroller, "drop", r.drop);
				}
			}
			function ka(e) {
				e.options.lineWrapping
					? (D(e.display.wrapper, "CodeMirror-wrap"),
					  (e.display.sizer.style.minWidth = ""),
					  (e.display.sizerWidth = null))
					: (L(e.display.wrapper, "CodeMirror-wrap"), $t(e)),
					or(e),
					sr(e),
					Fn(e),
					setTimeout(function () {
						return Wr(e);
					}, 100);
			}
			function Ca(e, t) {
				var r = this;
				if (!(this instanceof Ca)) return new Ca(e, t);
				(this.options = t = t ? I(t) : {}), I(ba, t, !1);
				var i = t.value;
				"string" == typeof i
					? (i = new Oo(i, t.mode, null, t.lineSeparator, t.direction))
					: t.mode && (i.modeOption = t.mode),
					(this.doc = i);
				var o = new Ca.inputStyles[t.inputStyle](this),
					u = (this.display = new (function (e, t, r, i) {
						var o = this;
						(this.input = r),
							(o.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler")),
							o.scrollbarFiller.setAttribute("cm-not-content", "true"),
							(o.gutterFiller = M("div", null, "CodeMirror-gutter-filler")),
							o.gutterFiller.setAttribute("cm-not-content", "true"),
							(o.lineDiv = N("div", null, "CodeMirror-code")),
							(o.selectionDiv = M("div", null, null, "position: relative; z-index: 1")),
							(o.cursorDiv = M("div", null, "CodeMirror-cursors")),
							(o.measure = M("div", null, "CodeMirror-measure")),
							(o.lineMeasure = M("div", null, "CodeMirror-measure")),
							(o.lineSpace = N(
								"div",
								[o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
								null,
								"position: relative; outline: none"
							));
						var u = N("div", [o.lineSpace], "CodeMirror-lines");
						(o.mover = M("div", [u], null, "position: relative")),
							(o.sizer = M("div", [o.mover], "CodeMirror-sizer")),
							(o.sizerWidth = null),
							(o.heightForcer = M(
								"div",
								null,
								null,
								"position: absolute; height: " + B + "px; width: 1px;"
							)),
							(o.gutters = M("div", null, "CodeMirror-gutters")),
							(o.lineGutter = null),
							(o.scroller = M("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll")),
							o.scroller.setAttribute("tabIndex", "-1"),
							(o.wrapper = M("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror")),
							a && l < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
							s || (n && v) || (o.scroller.draggable = !0),
							e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
							(o.viewFrom = o.viewTo = t.first),
							(o.reportedViewFrom = o.reportedViewTo = t.first),
							(o.view = []),
							(o.renderedView = null),
							(o.externalMeasured = null),
							(o.viewOffset = 0),
							(o.lastWrapHeight = o.lastWrapWidth = 0),
							(o.updateLineNumbers = null),
							(o.nativeBarWidth = o.barHeight = o.barWidth = 0),
							(o.scrollbarsClipped = !1),
							(o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
							(o.alignWidgets = !1),
							(o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
							(o.maxLine = null),
							(o.maxLineLength = 0),
							(o.maxLineChanged = !1),
							(o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
							(o.shift = !1),
							(o.selForContextMenu = null),
							(o.activeTouch = null),
							(o.gutterSpecs = ci(i.gutters, i.lineNumbers)),
							fi(o),
							r.init(o);
					})(e, i, o, t));
				for (var c in ((u.wrapper.CodeMirror = this),
				va(this),
				t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
				Br(this),
				(this.state = {
					keyMaps: [],
					overlays: [],
					modeGen: 0,
					overwrite: !1,
					delayingBlurEvent: !1,
					focused: !1,
					suppressEdits: !1,
					pasteIncoming: -1,
					cutIncoming: -1,
					selectingText: !1,
					draggingText: !1,
					highlight: new F(),
					keySeq: null,
					specialChars: null,
				}),
				t.autofocus && !v && u.input.focus(),
				a &&
					l < 11 &&
					setTimeout(function () {
						return r.display.input.reset(!0);
					}, 20),
				(function (e) {
					var t = e.display;
					de(t.scroller, "mousedown", Qr(e, da)),
						de(
							t.scroller,
							"dblclick",
							a && l < 11
								? Qr(e, function (t) {
										if (!ge(e, t)) {
											var n = ar(e, t);
											if (n && !ma(e, t) && !wn(e.display, t)) {
												xe(t);
												var r = e.findWordAt(n);
												$i(e.doc, r.anchor, r.head);
											}
										}
								  })
								: function (t) {
										return ge(e, t) || xe(t);
								  }
						);
					de(t.scroller, "contextmenu", function (t) {
						return ga(e, t);
					}),
						de(t.input.getField(), "contextmenu", function (n) {
							t.scroller.contains(n.target) || ga(e, n);
						});
					var n,
						r = {end: 0};
					function i() {
						t.activeTouch &&
							((n = setTimeout(function () {
								return (t.activeTouch = null);
							}, 1e3)),
							((r = t.activeTouch).end = +new Date()));
					}
					function o(e, t) {
						if (null == t.left) return !0;
						var n = t.left - e.left,
							r = t.top - e.top;
						return n * n + r * r > 400;
					}
					de(t.scroller, "touchstart", function (i) {
						if (
							!ge(e, i) &&
							!(function (e) {
								if (1 != e.touches.length) return !1;
								var t = e.touches[0];
								return t.radiusX <= 1 && t.radiusY <= 1;
							})(i) &&
							!ma(e, i)
						) {
							t.input.ensurePolled(), clearTimeout(n);
							var o = +new Date();
							(t.activeTouch = {start: o, moved: !1, prev: o - r.end <= 300 ? r : null}),
								1 == i.touches.length &&
									((t.activeTouch.left = i.touches[0].pageX),
									(t.activeTouch.top = i.touches[0].pageY));
						}
					}),
						de(t.scroller, "touchmove", function () {
							t.activeTouch && (t.activeTouch.moved = !0);
						}),
						de(t.scroller, "touchend", function (n) {
							var r = t.activeTouch;
							if (r && !wn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
								var a,
									l = e.coordsChar(t.activeTouch, "page");
								(a =
									!r.prev || o(r, r.prev)
										? new bi(l, l)
										: !r.prev.prev || o(r, r.prev.prev)
										? e.findWordAt(l)
										: new bi(Ze(l.line, 0), at(e.doc, Ze(l.line + 1, 0)))),
									e.setSelection(a.anchor, a.head),
									e.focus(),
									xe(n);
							}
							i();
						}),
						de(t.scroller, "touchcancel", i),
						de(t.scroller, "scroll", function () {
							t.scroller.clientHeight &&
								(Pr(e, t.scroller.scrollTop), Hr(e, t.scroller.scrollLeft, !0), me(e, "scroll", e));
						}),
						de(t.scroller, "mousewheel", function (t) {
							return vi(e, t);
						}),
						de(t.scroller, "DOMMouseScroll", function (t) {
							return vi(e, t);
						}),
						de(t.wrapper, "scroll", function () {
							return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
						}),
						(t.dragFunctions = {
							enter: function (t) {
								ge(e, t) || Ce(t);
							},
							over: function (t) {
								ge(e, t) ||
									(!(function (e, t) {
										var n = ar(e, t);
										if (n) {
											var r = document.createDocumentFragment();
											mr(e, n, r),
												e.display.dragCursor ||
													((e.display.dragCursor = M(
														"div",
														null,
														"CodeMirror-cursors CodeMirror-dragcursors"
													)),
													e.display.lineSpace.insertBefore(
														e.display.dragCursor,
														e.display.cursorDiv
													)),
												A(e.display.dragCursor, r);
										}
									})(e, t),
									Ce(t));
							},
							start: function (t) {
								return (function (e, t) {
									if (a && (!e.state.draggingText || +new Date() - Ao < 100)) Ce(t);
									else if (
										!ge(e, t) &&
										!wn(e.display, t) &&
										(t.dataTransfer.setData("Text", e.getSelection()),
										(t.dataTransfer.effectAllowed = "copyMove"),
										t.dataTransfer.setDragImage && !d)
									) {
										var n = M("img", null, null, "position: fixed; left: 0; top: 0;");
										(n.src =
											"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
											f &&
												((n.width = n.height = 1),
												e.display.wrapper.appendChild(n),
												(n._top = n.offsetTop)),
											t.dataTransfer.setDragImage(n, 0, 0),
											f && n.parentNode.removeChild(n);
									}
								})(e, t);
							},
							drop: Qr(e, Mo),
							leave: function (t) {
								ge(e, t) || No(e);
							},
						});
					var s = t.input.getField();
					de(s, "keyup", function (t) {
						return la.call(e, t);
					}),
						de(s, "keydown", Qr(e, aa)),
						de(s, "keypress", Qr(e, sa)),
						de(s, "focus", function (t) {
							return wr(e, t);
						}),
						de(s, "blur", function (t) {
							return kr(e, t);
						});
				})(this),
				Do(),
				zr(this),
				(this.curOp.forceUpdate = !0),
				Ei(this, i),
				(t.autofocus && !v) || this.hasFocus()
					? setTimeout(function () {
							r.hasFocus() && !r.state.focused && wr(r);
					  }, 20)
					: kr(this),
				xa))
					xa.hasOwnProperty(c) && xa[c](this, t[c], ya);
				ui(this), t.finishInit && t.finishInit(this);
				for (var p = 0; p < Sa.length; ++p) Sa[p](this);
				$r(this),
					s &&
						t.lineWrapping &&
						"optimizelegibility" == getComputedStyle(u.lineDiv).textRendering &&
						(u.lineDiv.style.textRendering = "auto");
			}
			(Ca.defaults = ba), (Ca.optionHandlers = xa);
			var Sa = [];
			function Ta(e, t, n, r) {
				var i,
					o = e.doc;
				null == n && (n = "add"), "smart" == n && (o.mode.indent ? (i = dt(e, t).state) : (n = "prev"));
				var a = e.options.tabSize,
					l = Ue(o, t),
					s = W(l.text, null, a);
				l.stateAfter && (l.stateAfter = null);
				var u,
					c = l.text.match(/^\s*/)[0];
				if (r || /\S/.test(l.text)) {
					if ("smart" == n && ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == q || u > 150)) {
						if (!r) return;
						n = "prev";
					}
				} else (u = 0), (n = "not");
				"prev" == n
					? (u = t > o.first ? W(Ue(o, t - 1).text, null, a) : 0)
					: "add" == n
					? (u = s + e.options.indentUnit)
					: "subtract" == n
					? (u = s - e.options.indentUnit)
					: "number" == typeof n && (u = s + n),
					(u = Math.max(0, u));
				var f = "",
					d = 0;
				if (e.options.indentWithTabs) for (var p = Math.floor(u / a); p; --p) (d += a), (f += "\t");
				if ((d < u && (f += X(u - d)), f != c))
					return co(o, f, Ze(t, 0), Ze(t, c.length), "+input"), (l.stateAfter = null), !0;
				for (var h = 0; h < o.sel.ranges.length; h++) {
					var m = o.sel.ranges[h];
					if (m.head.line == t && m.head.ch < c.length) {
						var g = Ze(t, c.length);
						Vi(o, h, new bi(g, g));
						break;
					}
				}
			}
			Ca.defineInitHook = function (e) {
				return Sa.push(e);
			};
			var La = null;
			function Oa(e) {
				La = e;
			}
			function Aa(e, t, n, r, i) {
				var o = e.doc;
				(e.display.shift = !1), r || (r = o.sel);
				var a = +new Date() - 200,
					l = "paste" == i || e.state.pasteIncoming > a,
					s = Ee(t),
					u = null;
				if (l && r.ranges.length > 1)
					if (La && La.text.join("\n") == t) {
						if (r.ranges.length % La.text.length == 0) {
							u = [];
							for (var c = 0; c < La.text.length; c++) u.push(o.splitLines(La.text[c]));
						}
					} else
						s.length == r.ranges.length &&
							e.options.pasteLinesPerSelection &&
							(u = Y(s, function (e) {
								return [e];
							}));
				for (var f = e.curOp.updateInput, d = r.ranges.length - 1; d >= 0; d--) {
					var p = r.ranges[d],
						h = p.from(),
						m = p.to();
					p.empty() &&
						(n && n > 0
							? (h = Ze(h.line, h.ch - n))
							: e.state.overwrite && !l
							? (m = Ze(m.line, Math.min(Ue(o, m.line).text.length, m.ch + K(s).length)))
							: l && La && La.lineWise && La.text.join("\n") == s.join("\n") && (h = m = Ze(h.line, 0)));
					var g = {
						from: h,
						to: m,
						text: u ? u[d % u.length] : s,
						origin: i || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input"),
					};
					oo(e.doc, g), ln(e, "inputRead", e, g);
				}
				t && !l && Na(e, t),
					Ar(e),
					e.curOp.updateInput < 2 && (e.curOp.updateInput = f),
					(e.curOp.typing = !0),
					(e.state.pasteIncoming = e.state.cutIncoming = -1);
			}
			function Ma(e, t) {
				var n = e.clipboardData && e.clipboardData.getData("Text");
				if (n)
					return (
						e.preventDefault(),
						t.isReadOnly() ||
							t.options.disableInput ||
							Yr(t, function () {
								return Aa(t, n, 0, null, "paste");
							}),
						!0
					);
			}
			function Na(e, t) {
				if (e.options.electricChars && e.options.smartIndent)
					for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
						var i = n.ranges[r];
						if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
							var o = e.getModeAt(i.head),
								a = !1;
							if (o.electricChars) {
								for (var l = 0; l < o.electricChars.length; l++)
									if (t.indexOf(o.electricChars.charAt(l)) > -1) {
										a = Ta(e, i.head.line, "smart");
										break;
									}
							} else
								o.electricInput &&
									o.electricInput.test(Ue(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
									(a = Ta(e, i.head.line, "smart"));
							a && ln(e, "electricInput", e, i.head.line);
						}
					}
			}
			function Ea(e) {
				for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
					var i = e.doc.sel.ranges[r].head.line,
						o = {anchor: Ze(i, 0), head: Ze(i + 1, 0)};
					n.push(o), t.push(e.getRange(o.anchor, o.head));
				}
				return {text: t, ranges: n};
			}
			function Pa(e, t, n, r) {
				e.setAttribute("autocorrect", n ? "" : "off"),
					e.setAttribute("autocapitalize", r ? "" : "off"),
					e.setAttribute("spellcheck", !!t);
			}
			function Da() {
				var e = M(
						"textarea",
						null,
						null,
						"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
					),
					t = M("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
				return (
					s ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
					m && (e.style.border = "1px solid black"),
					Pa(e),
					t
				);
			}
			function Ha(e, t, n, r, i) {
				var o = t,
					a = n,
					l = Ue(e, t.line),
					s = i && "rtl" == e.direction ? -n : n;
				function u(o) {
					var a;
					if ("codepoint" == r) {
						var u = l.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
						if (isNaN(u)) a = null;
						else {
							var c = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
							a = new Ze(t.line, Math.max(0, Math.min(l.text.length, t.ch + n * (c ? 2 : 1))), -n);
						}
					} else
						a = i
							? (function (e, t, n, r) {
									var i = ce(t, e.doc.direction);
									if (!i) return Ko(t, n, r);
									n.ch >= t.text.length
										? ((n.ch = t.text.length), (n.sticky = "before"))
										: n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
									var o = se(i, n.ch, n.sticky),
										a = i[o];
									if (
										"ltr" == e.doc.direction &&
										a.level % 2 == 0 &&
										(r > 0 ? a.to > n.ch : a.from < n.ch)
									)
										return Ko(t, n, r);
									var l,
										s = function (e, n) {
											return Xo(t, e instanceof Ze ? e.ch : e, n);
										},
										u = function (n) {
											return e.options.lineWrapping
												? ((l = l || En(e, t)), Qn(e, t, l, n))
												: {begin: 0, end: t.text.length};
										},
										c = u("before" == n.sticky ? s(n, -1) : n.ch);
									if ("rtl" == e.doc.direction || 1 == a.level) {
										var f = (1 == a.level) == r < 0,
											d = s(n, f ? 1 : -1);
										if (null != d && (f ? d <= a.to && d <= c.end : d >= a.from && d >= c.begin)) {
											var p = f ? "before" : "after";
											return new Ze(n.line, d, p);
										}
									}
									var h = function (e, t, r) {
											for (
												var o = function (e, t) {
													return t
														? new Ze(n.line, s(e, 1), "before")
														: new Ze(n.line, e, "after");
												};
												e >= 0 && e < i.length;
												e += t
											) {
												var a = i[e],
													l = t > 0 == (1 != a.level),
													u = l ? r.begin : s(r.end, -1);
												if (a.from <= u && u < a.to) return o(u, l);
												if (((u = l ? a.from : s(a.to, -1)), r.begin <= u && u < r.end))
													return o(u, l);
											}
										},
										m = h(o + r, r, c);
									if (m) return m;
									var g = r > 0 ? c.end : s(c.begin, -1);
									return null == g ||
										(r > 0 && g == t.text.length) ||
										!(m = h(r > 0 ? 0 : i.length - 1, r, u(g)))
										? null
										: m;
							  })(e.cm, l, t, n)
							: Ko(l, t, n);
					if (null == a) {
						if (
							o ||
							!(function () {
								var n = t.line + s;
								return (
									!(n < e.first || n >= e.first + e.size) &&
									((t = new Ze(n, t.ch, t.sticky)), (l = Ue(e, n)))
								);
							})()
						)
							return !1;
						t = Yo(i, e.cm, l, t.line, s);
					} else t = a;
					return !0;
				}
				if ("char" == r || "codepoint" == r) u();
				else if ("column" == r) u(!0);
				else if ("word" == r || "group" == r)
					for (
						var c = null, f = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0;
						!(n < 0) || u(!p);
						p = !1
					) {
						var h = l.text.charAt(t.ch) || "\n",
							m = te(h, d) ? "w" : f && "\n" == h ? "n" : !f || /\s/.test(h) ? null : "p";
						if ((!f || p || m || (m = "s"), c && c != m)) {
							n < 0 && ((n = 1), u(), (t.sticky = "after"));
							break;
						}
						if ((m && (c = m), n > 0 && !u(!p))) break;
					}
				var g = to(e, t, o, a, !0);
				return tt(o, g) && (g.hitSide = !0), g;
			}
			function Ra(e, t, n, r) {
				var i,
					o,
					a = e.doc,
					l = t.left;
				if ("page" == r) {
					var s = Math.min(
							e.display.wrapper.clientHeight,
							window.innerHeight || document.documentElement.clientHeight
						),
						u = Math.max(s - 0.5 * er(e.display), 3);
					i = (n > 0 ? t.bottom : t.top) + n * u;
				} else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
				for (; (o = Kn(e, l, i)).outside; ) {
					if (n < 0 ? i <= 0 : i >= a.height) {
						o.hitSide = !0;
						break;
					}
					i += 5 * n;
				}
				return o;
			}
			var ja = function (e) {
				(this.cm = e),
					(this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
					(this.polling = new F()),
					(this.composing = null),
					(this.gracePeriod = !1),
					(this.readDOMTimeout = null);
			};
			function Ia(e, t) {
				var n = Nn(e, t.line);
				if (!n || n.hidden) return null;
				var r = Ue(e.doc, t.line),
					i = An(n, r, t.line),
					o = ce(r, e.doc.direction),
					a = "left";
				o && (a = se(o, t.ch) % 2 ? "right" : "left");
				var l = Rn(i.map, t.ch, a);
				return (l.offset = "right" == l.collapse ? l.end : l.start), l;
			}
			function Wa(e, t) {
				return t && (e.bad = !0), e;
			}
			function Fa(e, t, n) {
				var r;
				if (t == e.display.lineDiv) {
					if (!(r = e.display.lineDiv.childNodes[n])) return Wa(e.clipPos(Ze(e.display.viewTo - 1)), !0);
					(t = null), (n = 0);
				} else
					for (r = t; ; r = r.parentNode) {
						if (!r || r == e.display.lineDiv) return null;
						if (r.parentNode && r.parentNode == e.display.lineDiv) break;
					}
				for (var i = 0; i < e.display.view.length; i++) {
					var o = e.display.view[i];
					if (o.node == r) return _a(o, t, n);
				}
			}
			function _a(e, t, n) {
				var r = e.text.firstChild,
					i = !1;
				if (!t || !E(r, t)) return Wa(Ze(Ke(e.line), 0), !0);
				if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
					var o = e.rest ? K(e.rest) : e.line;
					return Wa(Ze(Ke(o), o.text.length), i);
				}
				var a = 3 == t.nodeType ? t : null,
					l = t;
				for (
					a ||
					1 != t.childNodes.length ||
					3 != t.firstChild.nodeType ||
					((a = t.firstChild), n && (n = a.nodeValue.length));
					l.parentNode != r;

				)
					l = l.parentNode;
				var s = e.measure,
					u = s.maps;
				function c(t, n, r) {
					for (var i = -1; i < (u ? u.length : 0); i++)
						for (var o = i < 0 ? s.map : u[i], a = 0; a < o.length; a += 3) {
							var l = o[a + 2];
							if (l == t || l == n) {
								var c = Ke(i < 0 ? e.line : e.rest[i]),
									f = o[a] + r;
								return (r < 0 || l != t) && (f = o[a + (r ? 1 : 0)]), Ze(c, f);
							}
						}
				}
				var f = c(a, l, n);
				if (f) return Wa(f, i);
				for (var d = l.nextSibling, p = a ? a.nodeValue.length - n : 0; d; d = d.nextSibling) {
					if ((f = c(d, d.firstChild, 0))) return Wa(Ze(f.line, f.ch - p), i);
					p += d.textContent.length;
				}
				for (var h = l.previousSibling, m = n; h; h = h.previousSibling) {
					if ((f = c(h, h.firstChild, -1))) return Wa(Ze(f.line, f.ch + m), i);
					m += h.textContent.length;
				}
			}
			(ja.prototype.init = function (e) {
				var t = this,
					n = this,
					r = n.cm,
					i = (n.div = e.lineDiv);
				function o(e) {
					for (var t = e.target; t; t = t.parentNode) {
						if (t == i) return !0;
						if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
					}
					return !1;
				}
				function a(e) {
					if (o(e) && !ge(r, e)) {
						if (r.somethingSelected())
							Oa({lineWise: !1, text: r.getSelections()}),
								"cut" == e.type && r.replaceSelection("", null, "cut");
						else {
							if (!r.options.lineWiseCopyCut) return;
							var t = Ea(r);
							Oa({lineWise: !0, text: t.text}),
								"cut" == e.type &&
									r.operation(function () {
										r.setSelections(t.ranges, 0, z), r.replaceSelection("", null, "cut");
									});
						}
						if (e.clipboardData) {
							e.clipboardData.clearData();
							var a = La.text.join("\n");
							if ((e.clipboardData.setData("Text", a), e.clipboardData.getData("Text") == a))
								return void e.preventDefault();
						}
						var l = Da(),
							s = l.firstChild;
						r.display.lineSpace.insertBefore(l, r.display.lineSpace.firstChild),
							(s.value = La.text.join("\n"));
						var u = document.activeElement;
						R(s),
							setTimeout(function () {
								r.display.lineSpace.removeChild(l), u.focus(), u == i && n.showPrimarySelection();
							}, 50);
					}
				}
				Pa(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
					de(i, "paste", function (e) {
						!o(e) ||
							ge(r, e) ||
							Ma(e, r) ||
							(l <= 11 &&
								setTimeout(
									Qr(r, function () {
										return t.updateFromDOM();
									}),
									20
								));
					}),
					de(i, "compositionstart", function (e) {
						t.composing = {data: e.data, done: !1};
					}),
					de(i, "compositionupdate", function (e) {
						t.composing || (t.composing = {data: e.data, done: !1});
					}),
					de(i, "compositionend", function (e) {
						t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
					}),
					de(i, "touchstart", function () {
						return n.forceCompositionEnd();
					}),
					de(i, "input", function () {
						t.composing || t.readFromDOMSoon();
					}),
					de(i, "copy", a),
					de(i, "cut", a);
			}),
				(ja.prototype.screenReaderLabelChanged = function (e) {
					e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
				}),
				(ja.prototype.prepareSelection = function () {
					var e = hr(this.cm, !1);
					return (e.focus = document.activeElement == this.div), e;
				}),
				(ja.prototype.showSelection = function (e, t) {
					e &&
						this.cm.display.view.length &&
						((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
				}),
				(ja.prototype.getSelection = function () {
					return this.cm.display.wrapper.ownerDocument.getSelection();
				}),
				(ja.prototype.showPrimarySelection = function () {
					var e = this.getSelection(),
						t = this.cm,
						r = t.doc.sel.primary(),
						i = r.from(),
						o = r.to();
					if (
						t.display.viewTo == t.display.viewFrom ||
						i.line >= t.display.viewTo ||
						o.line < t.display.viewFrom
					)
						e.removeAllRanges();
					else {
						var a = Fa(t, e.anchorNode, e.anchorOffset),
							l = Fa(t, e.focusNode, e.focusOffset);
						if (!a || a.bad || !l || l.bad || 0 != et(it(a, l), i) || 0 != et(rt(a, l), o)) {
							var s = t.display.view,
								u = (i.line >= t.display.viewFrom && Ia(t, i)) || {
									node: s[0].measure.map[2],
									offset: 0,
								},
								c = o.line < t.display.viewTo && Ia(t, o);
							if (!c) {
								var f = s[s.length - 1].measure,
									d = f.maps ? f.maps[f.maps.length - 1] : f.map;
								c = {node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3]};
							}
							if (u && c) {
								var p,
									h = e.rangeCount && e.getRangeAt(0);
								try {
									p = T(u.node, u.offset, c.offset, c.node);
								} catch (e) {}
								p &&
									(!n && t.state.focused
										? (e.collapse(u.node, u.offset),
										  p.collapsed || (e.removeAllRanges(), e.addRange(p)))
										: (e.removeAllRanges(), e.addRange(p)),
									h && null == e.anchorNode ? e.addRange(h) : n && this.startGracePeriod()),
									this.rememberSelection();
							} else e.removeAllRanges();
						}
					}
				}),
				(ja.prototype.startGracePeriod = function () {
					var e = this;
					clearTimeout(this.gracePeriod),
						(this.gracePeriod = setTimeout(function () {
							(e.gracePeriod = !1),
								e.selectionChanged() &&
									e.cm.operation(function () {
										return (e.cm.curOp.selectionChanged = !0);
									});
						}, 20));
				}),
				(ja.prototype.showMultipleSelections = function (e) {
					A(this.cm.display.cursorDiv, e.cursors), A(this.cm.display.selectionDiv, e.selection);
				}),
				(ja.prototype.rememberSelection = function () {
					var e = this.getSelection();
					(this.lastAnchorNode = e.anchorNode),
						(this.lastAnchorOffset = e.anchorOffset),
						(this.lastFocusNode = e.focusNode),
						(this.lastFocusOffset = e.focusOffset);
				}),
				(ja.prototype.selectionInEditor = function () {
					var e = this.getSelection();
					if (!e.rangeCount) return !1;
					var t = e.getRangeAt(0).commonAncestorContainer;
					return E(this.div, t);
				}),
				(ja.prototype.focus = function () {
					"nocursor" != this.cm.options.readOnly &&
						((this.selectionInEditor() && document.activeElement == this.div) ||
							this.showSelection(this.prepareSelection(), !0),
						this.div.focus());
				}),
				(ja.prototype.blur = function () {
					this.div.blur();
				}),
				(ja.prototype.getField = function () {
					return this.div;
				}),
				(ja.prototype.supportsTouch = function () {
					return !0;
				}),
				(ja.prototype.receivedFocus = function () {
					var e = this;
					this.selectionInEditor()
						? this.pollSelection()
						: Yr(this.cm, function () {
								return (e.cm.curOp.selectionChanged = !0);
						  }),
						this.polling.set(this.cm.options.pollInterval, function t() {
							e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
						});
				}),
				(ja.prototype.selectionChanged = function () {
					var e = this.getSelection();
					return (
						e.anchorNode != this.lastAnchorNode ||
						e.anchorOffset != this.lastAnchorOffset ||
						e.focusNode != this.lastFocusNode ||
						e.focusOffset != this.lastFocusOffset
					);
				}),
				(ja.prototype.pollSelection = function () {
					if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
						var e = this.getSelection(),
							t = this.cm;
						if (
							g &&
							c &&
							this.cm.display.gutterSpecs.length &&
							(function (e) {
								for (var t = e; t; t = t.parentNode)
									if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
								return !1;
							})(e.anchorNode)
						)
							return (
								this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs}),
								this.blur(),
								void this.focus()
							);
						if (!this.composing) {
							this.rememberSelection();
							var n = Fa(t, e.anchorNode, e.anchorOffset),
								r = Fa(t, e.focusNode, e.focusOffset);
							n &&
								r &&
								Yr(t, function () {
									Ki(t.doc, wi(n, r), z), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
								});
						}
					}
				}),
				(ja.prototype.pollContent = function () {
					null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
					var e,
						t,
						n,
						r = this.cm,
						i = r.display,
						o = r.doc.sel.primary(),
						a = o.from(),
						l = o.to();
					if (
						(0 == a.ch && a.line > r.firstLine() && (a = Ze(a.line - 1, Ue(r.doc, a.line - 1).length)),
						l.ch == Ue(r.doc, l.line).text.length && l.line < r.lastLine() && (l = Ze(l.line + 1, 0)),
						a.line < i.viewFrom || l.line > i.viewTo - 1)
					)
						return !1;
					a.line == i.viewFrom || 0 == (e = lr(r, a.line))
						? ((t = Ke(i.view[0].line)), (n = i.view[0].node))
						: ((t = Ke(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
					var s,
						u,
						c = lr(r, l.line);
					if (
						(c == i.view.length - 1
							? ((s = i.viewTo - 1), (u = i.lineDiv.lastChild))
							: ((s = Ke(i.view[c + 1].line) - 1), (u = i.view[c + 1].node.previousSibling)),
						!n)
					)
						return !1;
					for (
						var f = r.doc.splitLines(
								(function (e, t, n, r, i) {
									var o = "",
										a = !1,
										l = e.doc.lineSeparator(),
										s = !1;
									function u() {
										a && ((o += l), s && (o += l), (a = s = !1));
									}
									function c(e) {
										e && (u(), (o += e));
									}
									function f(t) {
										if (1 == t.nodeType) {
											var n = t.getAttribute("cm-text");
											if (n) return void c(n);
											var o,
												d = t.getAttribute("cm-marker");
											if (d) {
												var p = e.findMarks(
													Ze(r, 0),
													Ze(i + 1, 0),
													(function (e) {
														return function (t) {
															return t.id == e;
														};
													})(+d)
												);
												return void (
													p.length &&
													(o = p[0].find(0)) &&
													c(Ve(e.doc, o.from, o.to).join(l))
												);
											}
											if ("false" == t.getAttribute("contenteditable")) return;
											var h = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
											if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
											h && u();
											for (var m = 0; m < t.childNodes.length; m++) f(t.childNodes[m]);
											/^(pre|p)$/i.test(t.nodeName) && (s = !0), h && (a = !0);
										} else
											3 == t.nodeType &&
												c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
									}
									for (; f(t), t != n; ) (t = t.nextSibling), (s = !1);
									return o;
								})(r, n, u, t, s)
							),
							d = Ve(r.doc, Ze(t, 0), Ze(s, Ue(r.doc, s).text.length));
						f.length > 1 && d.length > 1;

					)
						if (K(f) == K(d)) f.pop(), d.pop(), s--;
						else {
							if (f[0] != d[0]) break;
							f.shift(), d.shift(), t++;
						}
					for (
						var p = 0, h = 0, m = f[0], g = d[0], v = Math.min(m.length, g.length);
						p < v && m.charCodeAt(p) == g.charCodeAt(p);

					)
						++p;
					for (
						var y = K(f),
							b = K(d),
							x = Math.min(y.length - (1 == f.length ? p : 0), b.length - (1 == d.length ? p : 0));
						h < x && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);

					)
						++h;
					if (1 == f.length && 1 == d.length && t == a.line)
						for (; p && p > a.ch && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1); )
							p--, h++;
					(f[f.length - 1] = y.slice(0, y.length - h).replace(/^\u200b+/, "")),
						(f[0] = f[0].slice(p).replace(/\u200b+$/, ""));
					var w = Ze(t, p),
						k = Ze(s, d.length ? K(d).length - h : 0);
					return f.length > 1 || f[0] || et(w, k) ? (co(r.doc, f, w, k, "+input"), !0) : void 0;
				}),
				(ja.prototype.ensurePolled = function () {
					this.forceCompositionEnd();
				}),
				(ja.prototype.reset = function () {
					this.forceCompositionEnd();
				}),
				(ja.prototype.forceCompositionEnd = function () {
					this.composing &&
						(clearTimeout(this.readDOMTimeout),
						(this.composing = null),
						this.updateFromDOM(),
						this.div.blur(),
						this.div.focus());
				}),
				(ja.prototype.readFromDOMSoon = function () {
					var e = this;
					null == this.readDOMTimeout &&
						(this.readDOMTimeout = setTimeout(function () {
							if (((e.readDOMTimeout = null), e.composing)) {
								if (!e.composing.done) return;
								e.composing = null;
							}
							e.updateFromDOM();
						}, 80));
				}),
				(ja.prototype.updateFromDOM = function () {
					var e = this;
					(!this.cm.isReadOnly() && this.pollContent()) ||
						Yr(this.cm, function () {
							return sr(e.cm);
						});
				}),
				(ja.prototype.setUneditable = function (e) {
					e.contentEditable = "false";
				}),
				(ja.prototype.onKeyPress = function (e) {
					0 == e.charCode ||
						this.composing ||
						(e.preventDefault(),
						this.cm.isReadOnly() ||
							Qr(this.cm, Aa)(
								this.cm,
								String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
								0
							));
				}),
				(ja.prototype.readOnlyChanged = function (e) {
					this.div.contentEditable = String("nocursor" != e);
				}),
				(ja.prototype.onContextMenu = function () {}),
				(ja.prototype.resetPosition = function () {}),
				(ja.prototype.needsContentAttribute = !0);
			var Ba = function (e) {
				(this.cm = e),
					(this.prevInput = ""),
					(this.pollingFast = !1),
					(this.polling = new F()),
					(this.hasSelection = !1),
					(this.composing = null);
			};
			(Ba.prototype.init = function (e) {
				var t = this,
					n = this,
					r = this.cm;
				this.createField(e);
				var i = this.textarea;
				function o(e) {
					if (!ge(r, e)) {
						if (r.somethingSelected()) Oa({lineWise: !1, text: r.getSelections()});
						else {
							if (!r.options.lineWiseCopyCut) return;
							var t = Ea(r);
							Oa({lineWise: !0, text: t.text}),
								"cut" == e.type
									? r.setSelections(t.ranges, null, z)
									: ((n.prevInput = ""), (i.value = t.text.join("\n")), R(i));
						}
						"cut" == e.type && (r.state.cutIncoming = +new Date());
					}
				}
				e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
					m && (i.style.width = "0px"),
					de(i, "input", function () {
						a && l >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
					}),
					de(i, "paste", function (e) {
						ge(r, e) || Ma(e, r) || ((r.state.pasteIncoming = +new Date()), n.fastPoll());
					}),
					de(i, "cut", o),
					de(i, "copy", o),
					de(e.scroller, "paste", function (t) {
						if (!wn(e, t) && !ge(r, t)) {
							if (!i.dispatchEvent) return (r.state.pasteIncoming = +new Date()), void n.focus();
							var o = new Event("paste");
							(o.clipboardData = t.clipboardData), i.dispatchEvent(o);
						}
					}),
					de(e.lineSpace, "selectstart", function (t) {
						wn(e, t) || xe(t);
					}),
					de(i, "compositionstart", function () {
						var e = r.getCursor("from");
						n.composing && n.composing.range.clear(),
							(n.composing = {
								start: e,
								range: r.markText(e, r.getCursor("to"), {className: "CodeMirror-composing"}),
							});
					}),
					de(i, "compositionend", function () {
						n.composing && (n.poll(), n.composing.range.clear(), (n.composing = null));
					});
			}),
				(Ba.prototype.createField = function (e) {
					(this.wrapper = Da()), (this.textarea = this.wrapper.firstChild);
				}),
				(Ba.prototype.screenReaderLabelChanged = function (e) {
					e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
				}),
				(Ba.prototype.prepareSelection = function () {
					var e = this.cm,
						t = e.display,
						n = e.doc,
						r = hr(e);
					if (e.options.moveInputWithCursor) {
						var i = Vn(e, n.sel.primary().head, "div"),
							o = t.wrapper.getBoundingClientRect(),
							a = t.lineDiv.getBoundingClientRect();
						(r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top))),
							(r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)));
					}
					return r;
				}),
				(Ba.prototype.showSelection = function (e) {
					var t = this.cm.display;
					A(t.cursorDiv, e.cursors),
						A(t.selectionDiv, e.selection),
						null != e.teTop &&
							((this.wrapper.style.top = e.teTop + "px"), (this.wrapper.style.left = e.teLeft + "px"));
				}),
				(Ba.prototype.reset = function (e) {
					if (!this.contextMenuPending && !this.composing) {
						var t = this.cm;
						if (t.somethingSelected()) {
							this.prevInput = "";
							var n = t.getSelection();
							(this.textarea.value = n),
								t.state.focused && R(this.textarea),
								a && l >= 9 && (this.hasSelection = n);
						} else
							e ||
								((this.prevInput = this.textarea.value = ""),
								a && l >= 9 && (this.hasSelection = null));
					}
				}),
				(Ba.prototype.getField = function () {
					return this.textarea;
				}),
				(Ba.prototype.supportsTouch = function () {
					return !1;
				}),
				(Ba.prototype.focus = function () {
					if ("nocursor" != this.cm.options.readOnly && (!v || P() != this.textarea))
						try {
							this.textarea.focus();
						} catch (e) {}
				}),
				(Ba.prototype.blur = function () {
					this.textarea.blur();
				}),
				(Ba.prototype.resetPosition = function () {
					this.wrapper.style.top = this.wrapper.style.left = 0;
				}),
				(Ba.prototype.receivedFocus = function () {
					this.slowPoll();
				}),
				(Ba.prototype.slowPoll = function () {
					var e = this;
					this.pollingFast ||
						this.polling.set(this.cm.options.pollInterval, function () {
							e.poll(), e.cm.state.focused && e.slowPoll();
						});
				}),
				(Ba.prototype.fastPoll = function () {
					var e = !1,
						t = this;
					(t.pollingFast = !0),
						t.polling.set(20, function n() {
							t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, n));
						});
				}),
				(Ba.prototype.poll = function () {
					var e = this,
						t = this.cm,
						n = this.textarea,
						r = this.prevInput;
					if (
						this.contextMenuPending ||
						!t.state.focused ||
						(Pe(n) && !r && !this.composing) ||
						t.isReadOnly() ||
						t.options.disableInput ||
						t.state.keySeq
					)
						return !1;
					var i = n.value;
					if (i == r && !t.somethingSelected()) return !1;
					if ((a && l >= 9 && this.hasSelection === i) || (y && /[\uf700-\uf7ff]/.test(i)))
						return t.display.input.reset(), !1;
					if (t.doc.sel == t.display.selForContextMenu) {
						var o = i.charCodeAt(0);
						if ((8203 != o || r || (r = "​"), 8666 == o)) return this.reset(), this.cm.execCommand("undo");
					}
					for (var s = 0, u = Math.min(r.length, i.length); s < u && r.charCodeAt(s) == i.charCodeAt(s); )
						++s;
					return (
						Yr(t, function () {
							Aa(t, i.slice(s), r.length - s, null, e.composing ? "*compose" : null),
								i.length > 1e3 || i.indexOf("\n") > -1
									? (n.value = e.prevInput = "")
									: (e.prevInput = i),
								e.composing &&
									(e.composing.range.clear(),
									(e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
										className: "CodeMirror-composing",
									})));
						}),
						!0
					);
				}),
				(Ba.prototype.ensurePolled = function () {
					this.pollingFast && this.poll() && (this.pollingFast = !1);
				}),
				(Ba.prototype.onKeyPress = function () {
					a && l >= 9 && (this.hasSelection = null), this.fastPoll();
				}),
				(Ba.prototype.onContextMenu = function (e) {
					var t = this,
						n = t.cm,
						r = n.display,
						i = t.textarea;
					t.contextMenuPending && t.contextMenuPending();
					var o = ar(n, e),
						u = r.scroller.scrollTop;
					if (o && !f) {
						n.options.resetSelectionOnContextMenu &&
							-1 == n.doc.sel.contains(o) &&
							Qr(n, Ki)(n.doc, wi(o), z);
						var c,
							d = i.style.cssText,
							p = t.wrapper.style.cssText,
							h = t.wrapper.offsetParent.getBoundingClientRect();
						if (
							((t.wrapper.style.cssText = "position: static"),
							(i.style.cssText =
								"position: absolute; width: 30px; height: 30px;\n      top: " +
								(e.clientY - h.top - 5) +
								"px; left: " +
								(e.clientX - h.left - 5) +
								"px;\n      z-index: 1000; background: " +
								(a ? "rgba(255, 255, 255, .05)" : "transparent") +
								";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
							s && (c = window.scrollY),
							r.input.focus(),
							s && window.scrollTo(null, c),
							r.input.reset(),
							n.somethingSelected() || (i.value = t.prevInput = " "),
							(t.contextMenuPending = v),
							(r.selForContextMenu = n.doc.sel),
							clearTimeout(r.detectingSelectAll),
							a && l >= 9 && g(),
							C)
						) {
							Ce(e);
							var m = function () {
								he(window, "mouseup", m), setTimeout(v, 20);
							};
							de(window, "mouseup", m);
						} else setTimeout(v, 50);
					}
					function g() {
						if (null != i.selectionStart) {
							var e = n.somethingSelected(),
								o = "​" + (e ? i.value : "");
							(i.value = "⇚"),
								(i.value = o),
								(t.prevInput = e ? "" : "​"),
								(i.selectionStart = 1),
								(i.selectionEnd = o.length),
								(r.selForContextMenu = n.doc.sel);
						}
					}
					function v() {
						if (
							t.contextMenuPending == v &&
							((t.contextMenuPending = !1),
							(t.wrapper.style.cssText = p),
							(i.style.cssText = d),
							a && l < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = u)),
							null != i.selectionStart)
						) {
							(!a || (a && l < 9)) && g();
							var e = 0,
								o = function () {
									r.selForContextMenu == n.doc.sel &&
									0 == i.selectionStart &&
									i.selectionEnd > 0 &&
									"​" == t.prevInput
										? Qr(n, ro)(n)
										: e++ < 10
										? (r.detectingSelectAll = setTimeout(o, 500))
										: ((r.selForContextMenu = null), r.input.reset());
								};
							r.detectingSelectAll = setTimeout(o, 200);
						}
					}
				}),
				(Ba.prototype.readOnlyChanged = function (e) {
					e || this.reset(), (this.textarea.disabled = "nocursor" == e), (this.textarea.readOnly = !!e);
				}),
				(Ba.prototype.setUneditable = function () {}),
				(Ba.prototype.needsContentAttribute = !1),
				(function (e) {
					var t = e.optionHandlers;
					function n(n, r, i, o) {
						(e.defaults[n] = r),
							i &&
								(t[n] = o
									? function (e, t, n) {
											n != ya && i(e, t, n);
									  }
									: i);
					}
					(e.defineOption = n),
						(e.Init = ya),
						n(
							"value",
							"",
							function (e, t) {
								return e.setValue(t);
							},
							!0
						),
						n(
							"mode",
							null,
							function (e, t) {
								(e.doc.modeOption = t), Li(e);
							},
							!0
						),
						n("indentUnit", 2, Li, !0),
						n("indentWithTabs", !1),
						n("smartIndent", !0),
						n(
							"tabSize",
							4,
							function (e) {
								Oi(e), Fn(e), sr(e);
							},
							!0
						),
						n("lineSeparator", null, function (e, t) {
							if (((e.doc.lineSep = t), t)) {
								var n = [],
									r = e.doc.first;
								e.doc.iter(function (e) {
									for (var i = 0; ; ) {
										var o = e.text.indexOf(t, i);
										if (-1 == o) break;
										(i = o + t.length), n.push(Ze(r, o));
									}
									r++;
								});
								for (var i = n.length - 1; i >= 0; i--)
									co(e.doc, t, n[i], Ze(n[i].line, n[i].ch + t.length));
							}
						}),
						n(
							"specialChars",
							/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
							function (e, t, n) {
								(e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g")),
									n != ya && e.refresh();
							}
						),
						n(
							"specialCharPlaceholder",
							Qt,
							function (e) {
								return e.refresh();
							},
							!0
						),
						n("electricChars", !0),
						n(
							"inputStyle",
							v ? "contenteditable" : "textarea",
							function () {
								throw new Error("inputStyle can not (yet) be changed in a running editor");
							},
							!0
						),
						n(
							"spellcheck",
							!1,
							function (e, t) {
								return (e.getInputField().spellcheck = t);
							},
							!0
						),
						n(
							"autocorrect",
							!1,
							function (e, t) {
								return (e.getInputField().autocorrect = t);
							},
							!0
						),
						n(
							"autocapitalize",
							!1,
							function (e, t) {
								return (e.getInputField().autocapitalize = t);
							},
							!0
						),
						n("rtlMoveVisually", !x),
						n("wholeLineUpdateBefore", !0),
						n(
							"theme",
							"default",
							function (e) {
								va(e), di(e);
							},
							!0
						),
						n("keyMap", "default", function (e, t, n) {
							var r = Vo(t),
								i = n != ya && Vo(n);
							i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
						}),
						n("extraKeys", null),
						n("configureMouse", null),
						n("lineWrapping", !1, ka, !0),
						n(
							"gutters",
							[],
							function (e, t) {
								(e.display.gutterSpecs = ci(t, e.options.lineNumbers)), di(e);
							},
							!0
						),
						n(
							"fixedGutter",
							!0,
							function (e, t) {
								(e.display.gutters.style.left = t ? rr(e.display) + "px" : "0"), e.refresh();
							},
							!0
						),
						n(
							"coverGutterNextToScrollbar",
							!1,
							function (e) {
								return Wr(e);
							},
							!0
						),
						n(
							"scrollbarStyle",
							"native",
							function (e) {
								Br(e),
									Wr(e),
									e.display.scrollbars.setScrollTop(e.doc.scrollTop),
									e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
							},
							!0
						),
						n(
							"lineNumbers",
							!1,
							function (e, t) {
								(e.display.gutterSpecs = ci(e.options.gutters, t)), di(e);
							},
							!0
						),
						n("firstLineNumber", 1, di, !0),
						n(
							"lineNumberFormatter",
							function (e) {
								return e;
							},
							di,
							!0
						),
						n("showCursorWhenSelecting", !1, pr, !0),
						n("resetSelectionOnContextMenu", !0),
						n("lineWiseCopyCut", !0),
						n("pasteLinesPerSelection", !0),
						n("selectionsMayTouch", !1),
						n("readOnly", !1, function (e, t) {
							"nocursor" == t && (kr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
						}),
						n("screenReaderLabel", null, function (e, t) {
							(t = "" === t ? null : t), e.display.input.screenReaderLabelChanged(t);
						}),
						n(
							"disableInput",
							!1,
							function (e, t) {
								t || e.display.input.reset();
							},
							!0
						),
						n("dragDrop", !0, wa),
						n("allowDropFileTypes", null),
						n("cursorBlinkRate", 530),
						n("cursorScrollMargin", 0),
						n("cursorHeight", 1, pr, !0),
						n("singleCursorHeightPerLine", !0, pr, !0),
						n("workTime", 100),
						n("workDelay", 100),
						n("flattenSpans", !0, Oi, !0),
						n("addModeClass", !1, Oi, !0),
						n("pollInterval", 100),
						n("undoDepth", 200, function (e, t) {
							return (e.doc.history.undoDepth = t);
						}),
						n("historyEventDelay", 1250),
						n(
							"viewportMargin",
							10,
							function (e) {
								return e.refresh();
							},
							!0
						),
						n("maxHighlightLength", 1e4, Oi, !0),
						n("moveInputWithCursor", !0, function (e, t) {
							t || e.display.input.resetPosition();
						}),
						n("tabindex", null, function (e, t) {
							return (e.display.input.getField().tabIndex = t || "");
						}),
						n("autofocus", null),
						n(
							"direction",
							"ltr",
							function (e, t) {
								return e.doc.setDirection(t);
							},
							!0
						),
						n("phrases", null);
				})(Ca),
				(function (e) {
					var t = e.optionHandlers,
						n = (e.helpers = {});
					(e.prototype = {
						constructor: e,
						focus: function () {
							window.focus(), this.display.input.focus();
						},
						setOption: function (e, n) {
							var r = this.options,
								i = r[e];
							(r[e] == n && "mode" != e) ||
								((r[e] = n),
								t.hasOwnProperty(e) && Qr(this, t[e])(this, n, i),
								me(this, "optionChange", this, e));
						},
						getOption: function (e) {
							return this.options[e];
						},
						getDoc: function () {
							return this.doc;
						},
						addKeyMap: function (e, t) {
							this.state.keyMaps[t ? "push" : "unshift"](Vo(e));
						},
						removeKeyMap: function (e) {
							for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
								if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
						},
						addOverlay: Jr(function (t, n) {
							var r = t.token ? t : e.getMode(this.options, t);
							if (r.startState) throw new Error("Overlays may not be stateful.");
							!(function (e, t, n) {
								for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
								e.splice(r, 0, t);
							})(
								this.state.overlays,
								{mode: r, modeSpec: t, opaque: n && n.opaque, priority: (n && n.priority) || 0},
								function (e) {
									return e.priority;
								}
							),
								this.state.modeGen++,
								sr(this);
						}),
						removeOverlay: Jr(function (e) {
							for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
								var r = t[n].modeSpec;
								if (r == e || ("string" == typeof e && r.name == e))
									return t.splice(n, 1), this.state.modeGen++, void sr(this);
							}
						}),
						indentLine: Jr(function (e, t, n) {
							"string" != typeof t &&
								"number" != typeof t &&
								(t =
									null == t ? (this.options.smartIndent ? "smart" : "prev") : t ? "add" : "subtract"),
								Qe(this.doc, e) && Ta(this, e, t, n);
						}),
						indentSelection: Jr(function (e) {
							for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
								var i = t[r];
								if (i.empty())
									i.head.line > n &&
										(Ta(this, i.head.line, e, !0),
										(n = i.head.line),
										r == this.doc.sel.primIndex && Ar(this));
								else {
									var o = i.from(),
										a = i.to(),
										l = Math.max(n, o.line);
									n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
									for (var s = l; s < n; ++s) Ta(this, s, e);
									var u = this.doc.sel.ranges;
									0 == o.ch &&
										t.length == u.length &&
										u[r].from().ch > 0 &&
										Vi(this.doc, r, new bi(o, u[r].to()), z);
								}
							}
						}),
						getTokenAt: function (e, t) {
							return vt(this, e, t);
						},
						getLineTokens: function (e, t) {
							return vt(this, Ze(e), t, !0);
						},
						getTokenTypeAt: function (e) {
							e = at(this.doc, e);
							var t,
								n = ft(this, Ue(this.doc, e.line)),
								r = 0,
								i = (n.length - 1) / 2,
								o = e.ch;
							if (0 == o) t = n[2];
							else
								for (;;) {
									var a = (r + i) >> 1;
									if ((a ? n[2 * a - 1] : 0) >= o) i = a;
									else {
										if (!(n[2 * a + 1] < o)) {
											t = n[2 * a + 2];
											break;
										}
										r = a + 1;
									}
								}
							var l = t ? t.indexOf("overlay ") : -1;
							return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
						},
						getModeAt: function (t) {
							var n = this.doc.mode;
							return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
						},
						getHelper: function (e, t) {
							return this.getHelpers(e, t)[0];
						},
						getHelpers: function (e, t) {
							var r = [];
							if (!n.hasOwnProperty(t)) return r;
							var i = n[t],
								o = this.getModeAt(e);
							if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
							else if (o[t])
								for (var a = 0; a < o[t].length; a++) {
									var l = i[o[t][a]];
									l && r.push(l);
								}
							else
								o.helperType && i[o.helperType]
									? r.push(i[o.helperType])
									: i[o.name] && r.push(i[o.name]);
							for (var s = 0; s < i._global.length; s++) {
								var u = i._global[s];
								u.pred(o, this) && -1 == _(r, u.val) && r.push(u.val);
							}
							return r;
						},
						getStateAfter: function (e, t) {
							var n = this.doc;
							return dt(this, (e = ot(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
						},
						cursorCoords: function (e, t) {
							var n = this.doc.sel.primary();
							return Vn(
								this,
								null == e ? n.head : "object" == typeof e ? at(this.doc, e) : e ? n.from() : n.to(),
								t || "page"
							);
						},
						charCoords: function (e, t) {
							return Un(this, at(this.doc, e), t || "page");
						},
						coordsChar: function (e, t) {
							return Kn(this, (e = $n(this, e, t || "page")).left, e.top);
						},
						lineAtHeight: function (e, t) {
							return (
								(e = $n(this, {top: e, left: 0}, t || "page").top),
								Ye(this.doc, e + this.display.viewOffset)
							);
						},
						heightAtLine: function (e, t, n) {
							var r,
								i = !1;
							if ("number" == typeof e) {
								var o = this.doc.first + this.doc.size - 1;
								e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)),
									(r = Ue(this.doc, e));
							} else r = e;
							return (
								zn(this, r, {top: 0, left: 0}, t || "page", n || i).top +
								(i ? this.doc.height - qt(r) : 0)
							);
						},
						defaultTextHeight: function () {
							return er(this.display);
						},
						defaultCharWidth: function () {
							return tr(this.display);
						},
						getViewport: function () {
							return {from: this.display.viewFrom, to: this.display.viewTo};
						},
						addWidget: function (e, t, n, r, i) {
							var o = this.display,
								a = (e = Vn(this, at(this.doc, e))).bottom,
								l = e.left;
							if (
								((t.style.position = "absolute"),
								t.setAttribute("cm-ignore-events", "true"),
								this.display.input.setUneditable(t),
								o.sizer.appendChild(t),
								"over" == r)
							)
								a = e.top;
							else if ("above" == r || "near" == r) {
								var s = Math.max(o.wrapper.clientHeight, this.doc.height),
									u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
								("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight
									? (a = e.top - t.offsetHeight)
									: e.bottom + t.offsetHeight <= s && (a = e.bottom),
									l + t.offsetWidth > u && (l = u - t.offsetWidth);
							}
							(t.style.top = a + "px"),
								(t.style.left = t.style.right = ""),
								"right" == i
									? ((l = o.sizer.clientWidth - t.offsetWidth), (t.style.right = "0px"))
									: ("left" == i
											? (l = 0)
											: "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2),
									  (t.style.left = l + "px")),
								n &&
									(function (e, t) {
										var n = Lr(e, t);
										null != n.scrollTop && Pr(e, n.scrollTop),
											null != n.scrollLeft && Hr(e, n.scrollLeft);
									})(this, {left: l, top: a, right: l + t.offsetWidth, bottom: a + t.offsetHeight});
						},
						triggerOnKeyDown: Jr(aa),
						triggerOnKeyPress: Jr(sa),
						triggerOnKeyUp: la,
						triggerOnMouseDown: Jr(da),
						execCommand: function (e) {
							if (Qo.hasOwnProperty(e)) return Qo[e].call(null, this);
						},
						triggerElectric: Jr(function (e) {
							Na(this, e);
						}),
						findPosH: function (e, t, n, r) {
							var i = 1;
							t < 0 && ((i = -1), (t = -t));
							for (var o = at(this.doc, e), a = 0; a < t && !(o = Ha(this.doc, o, i, n, r)).hitSide; ++a);
							return o;
						},
						moveH: Jr(function (e, t) {
							var n = this;
							this.extendSelectionsBy(function (r) {
								return n.display.shift || n.doc.extend || r.empty()
									? Ha(n.doc, r.head, e, t, n.options.rtlMoveVisually)
									: e < 0
									? r.from()
									: r.to();
							}, U);
						}),
						deleteH: Jr(function (e, t) {
							var n = this.doc.sel,
								r = this.doc;
							n.somethingSelected()
								? r.replaceSelection("", null, "+delete")
								: Go(this, function (n) {
										var i = Ha(r, n.head, e, t, !1);
										return e < 0 ? {from: i, to: n.head} : {from: n.head, to: i};
								  });
						}),
						findPosV: function (e, t, n, r) {
							var i = 1,
								o = r;
							t < 0 && ((i = -1), (t = -t));
							for (var a = at(this.doc, e), l = 0; l < t; ++l) {
								var s = Vn(this, a, "div");
								if ((null == o ? (o = s.left) : (s.left = o), (a = Ra(this, s, i, n)).hitSide)) break;
							}
							return a;
						},
						moveV: Jr(function (e, t) {
							var n = this,
								r = this.doc,
								i = [],
								o = !this.display.shift && !r.extend && r.sel.somethingSelected();
							if (
								(r.extendSelectionsBy(function (a) {
									if (o) return e < 0 ? a.from() : a.to();
									var l = Vn(n, a.head, "div");
									null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
									var s = Ra(n, l, e, t);
									return "page" == t && a == r.sel.primary() && Or(n, Un(n, s, "div").top - l.top), s;
								}, U),
								i.length)
							)
								for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a];
						}),
						findWordAt: function (e) {
							var t = Ue(this.doc, e.line).text,
								n = e.ch,
								r = e.ch;
							if (t) {
								var i = this.getHelper(e, "wordChars");
								("before" != e.sticky && r != t.length) || !n ? ++r : --n;
								for (
									var o = t.charAt(n),
										a = te(o, i)
											? function (e) {
													return te(e, i);
											  }
											: /\s/.test(o)
											? function (e) {
													return /\s/.test(e);
											  }
											: function (e) {
													return !/\s/.test(e) && !te(e);
											  };
									n > 0 && a(t.charAt(n - 1));

								)
									--n;
								for (; r < t.length && a(t.charAt(r)); ) ++r;
							}
							return new bi(Ze(e.line, n), Ze(e.line, r));
						},
						toggleOverwrite: function (e) {
							(null != e && e == this.state.overwrite) ||
								((this.state.overwrite = !this.state.overwrite)
									? D(this.display.cursorDiv, "CodeMirror-overwrite")
									: L(this.display.cursorDiv, "CodeMirror-overwrite"),
								me(this, "overwriteToggle", this, this.state.overwrite));
						},
						hasFocus: function () {
							return this.display.input.getField() == P();
						},
						isReadOnly: function () {
							return !(!this.options.readOnly && !this.doc.cantEdit);
						},
						scrollTo: Jr(function (e, t) {
							Mr(this, e, t);
						}),
						getScrollInfo: function () {
							var e = this.display.scroller;
							return {
								left: e.scrollLeft,
								top: e.scrollTop,
								height: e.scrollHeight - Tn(this) - this.display.barHeight,
								width: e.scrollWidth - Tn(this) - this.display.barWidth,
								clientHeight: On(this),
								clientWidth: Ln(this),
							};
						},
						scrollIntoView: Jr(function (e, t) {
							null == e
								? ((e = {from: this.doc.sel.primary().head, to: null}),
								  null == t && (t = this.options.cursorScrollMargin))
								: "number" == typeof e
								? (e = {from: Ze(e, 0), to: null})
								: null == e.from && (e = {from: e, to: null}),
								e.to || (e.to = e.from),
								(e.margin = t || 0),
								null != e.from.line
									? (function (e, t) {
											Nr(e), (e.curOp.scrollToPos = t);
									  })(this, e)
									: Er(this, e.from, e.to, e.margin);
						}),
						setSize: Jr(function (e, t) {
							var n = this,
								r = function (e) {
									return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
								};
							null != e && (this.display.wrapper.style.width = r(e)),
								null != t && (this.display.wrapper.style.height = r(t)),
								this.options.lineWrapping && Wn(this);
							var i = this.display.viewFrom;
							this.doc.iter(i, this.display.viewTo, function (e) {
								if (e.widgets)
									for (var t = 0; t < e.widgets.length; t++)
										if (e.widgets[t].noHScroll) {
											ur(n, i, "widget");
											break;
										}
								++i;
							}),
								(this.curOp.forceUpdate = !0),
								me(this, "refresh", this);
						}),
						operation: function (e) {
							return Yr(this, e);
						},
						startOperation: function () {
							return zr(this);
						},
						endOperation: function () {
							return $r(this);
						},
						refresh: Jr(function () {
							var e = this.display.cachedTextHeight;
							sr(this),
								(this.curOp.forceUpdate = !0),
								Fn(this),
								Mr(this, this.doc.scrollLeft, this.doc.scrollTop),
								ai(this.display),
								(null == e || Math.abs(e - er(this.display)) > 0.5 || this.options.lineWrapping) &&
									or(this),
								me(this, "refresh", this);
						}),
						swapDoc: Jr(function (e) {
							var t = this.doc;
							return (
								(t.cm = null),
								this.state.selectingText && this.state.selectingText(),
								Ei(this, e),
								Fn(this),
								this.display.input.reset(),
								Mr(this, e.scrollLeft, e.scrollTop),
								(this.curOp.forceScroll = !0),
								ln(this, "swapDoc", this, t),
								t
							);
						}),
						phrase: function (e) {
							var t = this.options.phrases;
							return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
						},
						getInputField: function () {
							return this.display.input.getField();
						},
						getWrapperElement: function () {
							return this.display.wrapper;
						},
						getScrollerElement: function () {
							return this.display.scroller;
						},
						getGutterElement: function () {
							return this.display.gutters;
						},
					}),
						be(e),
						(e.registerHelper = function (t, r, i) {
							n.hasOwnProperty(t) || (n[t] = e[t] = {_global: []}), (n[t][r] = i);
						}),
						(e.registerGlobalHelper = function (t, r, i, o) {
							e.registerHelper(t, r, o), n[t]._global.push({pred: i, val: o});
						});
				})(Ca);
			var qa = "iter insert remove copy getEditor constructor".split(" ");
			for (var za in Oo.prototype)
				Oo.prototype.hasOwnProperty(za) &&
					_(qa, za) < 0 &&
					(Ca.prototype[za] = (function (e) {
						return function () {
							return e.apply(this.doc, arguments);
						};
					})(Oo.prototype[za]));
			return (
				be(Oo),
				(Ca.inputStyles = {textarea: Ba, contenteditable: ja}),
				(Ca.defineMode = function (e) {
					Ca.defaults.mode || "null" == e || (Ca.defaults.mode = e),
						function (e, t) {
							arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
								(Re[e] = t);
						}.apply(this, arguments);
				}),
				(Ca.defineMIME = function (e, t) {
					je[e] = t;
				}),
				Ca.defineMode("null", function () {
					return {
						token: function (e) {
							return e.skipToEnd();
						},
					};
				}),
				Ca.defineMIME("text/plain", "null"),
				(Ca.defineExtension = function (e, t) {
					Ca.prototype[e] = t;
				}),
				(Ca.defineDocExtension = function (e, t) {
					Oo.prototype[e] = t;
				}),
				(Ca.fromTextArea = function (e, t) {
					if (
						(((t = t ? I(t) : {}).value = e.value),
						!t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
						!t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
						null == t.autofocus)
					) {
						var n = P();
						t.autofocus = n == e || (null != e.getAttribute("autofocus") && n == document.body);
					}
					function r() {
						e.value = l.getValue();
					}
					var i;
					if (e.form && (de(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
						var o = e.form;
						i = o.submit;
						try {
							var a = (o.submit = function () {
								r(), (o.submit = i), o.submit(), (o.submit = a);
							});
						} catch (e) {}
					}
					(t.finishInit = function (n) {
						(n.save = r),
							(n.getTextArea = function () {
								return e;
							}),
							(n.toTextArea = function () {
								(n.toTextArea = isNaN),
									r(),
									e.parentNode.removeChild(n.getWrapperElement()),
									(e.style.display = ""),
									e.form &&
										(he(e.form, "submit", r),
										t.leaveSubmitMethodAlone ||
											"function" != typeof e.form.submit ||
											(e.form.submit = i));
							});
					}),
						(e.style.display = "none");
					var l = Ca(function (t) {
						return e.parentNode.insertBefore(t, e.nextSibling);
					}, t);
					return l;
				}),
				(function (e) {
					(e.off = he),
						(e.on = de),
						(e.wheelEventPixels = gi),
						(e.Doc = Oo),
						(e.splitLines = Ee),
						(e.countColumn = W),
						(e.findColumn = V),
						(e.isWordChar = ee),
						(e.Pass = q),
						(e.signal = me),
						(e.Line = Ut),
						(e.changeEnd = ki),
						(e.scrollbarModel = _r),
						(e.Pos = Ze),
						(e.cmpPos = et),
						(e.modes = Re),
						(e.mimeModes = je),
						(e.resolveMode = Ie),
						(e.getMode = We),
						(e.modeExtensions = Fe),
						(e.extendMode = _e),
						(e.copyState = Be),
						(e.startState = ze),
						(e.innerMode = qe),
						(e.commands = Qo),
						(e.keyMap = Fo),
						(e.keyName = Uo),
						(e.isModifierKey = zo),
						(e.lookupKey = qo),
						(e.normalizeKeyMap = Bo),
						(e.StringStream = $e),
						(e.SharedTextMarker = Co),
						(e.TextMarker = wo),
						(e.LineWidget = yo),
						(e.e_preventDefault = xe),
						(e.e_stopPropagation = we),
						(e.e_stop = Ce),
						(e.addClass = D),
						(e.contains = E),
						(e.rmClass = L),
						(e.keyNames = Ro);
				})(Ca),
				(Ca.version = "5.59.2"),
				Ca
			);
		});
	},
	function (e, t, n) {
		"use strict";
		function r(e) {
			return e && e.__esModule ? e : {default: e};
		}
		function i(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return (t.default = e), t;
		}
		t.__esModule = !0;
		var o = i(n(13)),
			a = r(n(33)),
			l = r(n(2)),
			s = i(n(1)),
			u = i(n(34)),
			c = r(n(36));
		function f() {
			var e = new o.HandlebarsEnvironment();
			return (
				s.extend(e, o),
				(e.SafeString = a.default),
				(e.Exception = l.default),
				(e.Utils = s),
				(e.escapeExpression = s.escapeExpression),
				(e.VM = u),
				(e.template = function (t) {
					return u.template(t, e);
				}),
				e
			);
		}
		var d = f();
		(d.create = f), c.default(d), (d.default = d), (t.default = d), (e.exports = t.default);
	},
	function (e, t) {
		var n;
		n = (function () {
			return this;
		})();
		try {
			n = n || Function("return this")() || (0, eval)("this");
		} catch (e) {
			"object" == typeof window && (n = window);
		}
		e.exports = n;
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				return "checked";
			},
			3: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'id="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "id") || (null != t ? a(t, "id") : t)) ? o : e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "id",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 55}, end: {line: 2, column: 61}},
							  })
							: o
					) +
					'"'
				);
			},
			5: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'for="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "id") || (null != t ? a(t, "id") : t)) ? o : e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "id",
									hash: {},
									data: i,
									loc: {start: {line: 3, column: 26}, end: {line: 3, column: 32}},
							  })
							: o
					) +
					'"'
				);
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = null != t ? t : e.nullContext || {},
					s = e.hooks.helperMissing,
					u = e.escapeExpression,
					c =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control ' +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "classes") || (null != t ? c(t, "classes") : t)) ? a : s)
							? a.call(l, {
									name: "classes",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 20}, end: {line: 1, column: 31}},
							  })
							: a
					) +
					'">\n    <input ' +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "checked") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 2, column: 11}, end: {line: 2, column: 40}},
					}))
						? o
						: "") +
					" " +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "id") : t, {
						name: "if",
						hash: {},
						fn: e.program(3, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 2, column: 41}, end: {line: 2, column: 69}},
					}))
						? o
						: "") +
					' name="' +
					u(
						"function" == typeof (a = null != (a = c(n, "name") || (null != t ? c(t, "name") : t)) ? a : s)
							? a.call(l, {
									name: "name",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 76}, end: {line: 2, column: 84}},
							  })
							: a
					) +
					'" value="' +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "value") || (null != t ? c(t, "value") : t)) ? a : s)
							? a.call(l, {
									name: "value",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 93}, end: {line: 2, column: 102}},
							  })
							: a
					) +
					'" type="radio" />\n    <label ' +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "id") : t, {
						name: "if",
						hash: {},
						fn: e.program(5, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 3, column: 11}, end: {line: 3, column: 40}},
					}))
						? o
						: "") +
					">" +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "label") || (null != t ? c(t, "label") : t)) ? a : s)
							? a.call(l, {
									name: "label",
									hash: {},
									data: i,
									loc: {start: {line: 3, column: 41}, end: {line: 3, column: 50}},
							  })
							: a
					) +
					"</label>\n</div>\n"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}),
			n.d(t, "InstructorModule", function () {
				return c;
			});
		var r = n(42),
			i = n.n(r),
			o = n(5),
			a = n.n(o),
			l = n(43),
			s = n.n(l);
		const u = n(20);
		n(51), n(52), n(53), (window._____jq_____ = i.a);
		let c = (function (e) {
			const t = 15;
			n(6);
			const r = {
				body: n(12),
				result: n(18),
				resultError: n(19),
				conditions: n(54),
				transformations: n(55),
				checkbox: n(3),
				dropdownOption: n(17),
			};
			e(document.body).append(r.body(u));
			let i,
				o,
				l = e(document.body),
				c = e("#nav-container"),
				f = e("#form-container"),
				d = e("#result-container"),
				p = [];
			function h(e) {
				e ? l.addClass("loading") : (l.removeClass("loading"), l.addClass("loaded-initially"));
			}
			function m(t, n) {
				let i = e(t.target).closest("form"),
					o = i.data("type"),
					a = u.types[o].fields,
					l = u.operators[n],
					s = r[n]({fields: a, operators: l});
				i.find("." + n + "-container").append(s);
			}
			function g(e, t) {
				setTimeout(function () {
					try {
						let t = JSON.parse(e.getValue()),
							n = JSON.stringify(t, null, 2);
						n && e.setValue(n);
					} catch (e) {}
				}, 1);
			}
			return (
				e("textarea.code").each(function () {
					let t = e(this),
						n = a.a.fromTextArea(t.get(0), {
							lineNumbers: !1,
							mode: "javascript",
							indentWithTabs: !1,
							tabSize: 2,
							height: 700,
							matchBrackets: !0,
							autoCloseBrackets: !0,
						});
					t.data("codemirror", n), n.setSize("100%", 500), n.on("paste", g);
				}),
				c.on("click", ".tab", function (t) {
					let n = e(t.target),
						r = n.attr("href");
					t.preventDefault(),
						n.addClass("active").siblings().removeClass("active"),
						e(r).addClass("active").siblings().removeClass("active");
				}),
				f
					.on("click", "#submit-button", function (e) {
						e.preventDefault();
					})
					.on("click", ".form-group.conditions .icon-minus", function (t) {
						t.preventDefault(), e(t.target).closest(".condition").remove();
					})
					.on("click", ".form-group.conditions .icon-plus", function (e) {
						e.preventDefault(), m(e, "conditions");
					})
					.on("click", ".form-group.transformations .icon-minus", function (t) {
						e(t.target);
						let n = e(t.target).closest(".control-group"),
							r = n.closest("form"),
							i = n.find(".term input").val();
						t.preventDefault(),
							r
								.find(".columns, .groups")
								.find('input[data-key="' + i + '"]')
								.closest(".control")
								.remove(),
							r.find('option.transformation[value="' + i + '"]').remove(),
							n.remove();
					})
					.on("click", ".form-group.transformations .icon-plus", function (e) {
						e.preventDefault(), m(e, "transformations");
					})
					.on("keyup", ".form-group.transformations .term input", function (t) {
						let n = e(t.target),
							i = n.val(),
							o = n.closest(".control-group"),
							a = o.closest(".transformations-container"),
							l = a.closest("form"),
							s = l.attr("data-type"),
							c = u.types[s].fields.length + o.index() + 1;
						(p = []),
							a.find(".term input").each(function () {
								let t = e(this).val();
								p.push({key: t, label: t});
							});
						let f = l.find(".control.transformation:nth-child(" + c + ") input");
						if (f.length) f.val(i).attr("data-key", i).siblings("label").text(i);
						else {
							let e = r.checkbox({classes: "transformation", key: i, label: i});
							l.find(".form-group.columns .control-group").append(e);
						}
						let d = l.find("option.transformation:nth-child(" + c + ")");
						if (d.length) d.text(i).attr("value", i);
						else {
							let e = r.dropdownOption({classes: "transformation", key: i, label: i});
							l.find(".form-group.order").find(".control.fields select").append(e);
						}
					})
					.on("click", ".copy-html", function (t) {
						let n = e(".tab-panel.active").find("form");
						t.preventDefault(),
							new s.a(".copy-html", {
								text: function () {
									return n.parent().html();
								},
							});
					}),
				d
					.on("click", ".showall", function (t) {
						t.preventDefault(),
							d.find("#result-table").addClass("showing-all"),
							d.find(".show-hint").remove(),
							e(t.target).remove();
					})
					.on("click", ".copy-result", function (e) {
						e.preventDefault(),
							new s.a(".copy-result", {
								text: function () {
									return o;
								},
							});
					}),
				f
					.on("change", "select", function () {
						e(this)
							.find("option")
							.each(function () {
								let t = e(this);
								t.is(":selected") ? t.attr("selected", "selected") : t.removeAttr("selected");
							});
					})
					.on("keyup", 'input[type="text"]', function () {
						let t = e(this),
							n = t.val();
						n ? t.attr("value", n) : t.removeAttr("value");
					})
					.on("change", "input:checkbox", function () {
						console.log("current: " + e(this).prop("checked")),
							e(this).prop("checked")
								? e(this).attr("checked", "checked")
								: e(this).removeAttr("checked");
					})
					.on("change", "input:radio", function () {
						let t = e(this);
						t.closest(".control-group").find("input:radio").removeAttr("checked"),
							t.attr("checked", "checked");
					}),
				e(".nav-item:visible:first").click(),
				l.removeClass("loading"),
				(function (e) {
					XMLHttpRequest.prototype.send = function (t) {
						this.addEventListener("load", function () {
							try {
								(i = JSON.parse(this.responseText)), (o = this.responseText);
							} catch (e) {
							} finally {
								h(!1);
							}
						});
						try {
							e.apply(this, arguments);
						} catch (e) {
						} finally {
							h(!0);
						}
					};
				})(XMLHttpRequest.prototype.send),
				{
					renderResult: function (n) {
						let i;
						(i = n.result
							? r.result({result: n.result, previewSize: t})
							: n.responseText
							? r.resultError({message: JSON.parse(n.responseText).error, code: n.status})
							: r.resultError({message: n.error})),
							e("#result-container").html(i),
							h(!1);
					},
				}
			);
		})(_____jq_____);
	},
	function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}),
			(t._bq = function () {
				const e = document.querySelector("div.tab-panel.active"),
					t = e.getAttribute("data-type"),
					n = _____jq_____;
				let r;
				r =
					"plain" === t
						? (function (e, t) {
								let n = e("#codemirror-plain-textarea").data("codemirror").getValue();
								if ("json" === t)
									try {
										n = JSON.parse(n);
									} catch (e) {}
								else n = (n = n.replace(/\n/g, " ")).replace(/\s+/g, " ");
								return n;
						  })(n, "json")
						: (function (e) {
								const t = {};
								(t.WHERE = (function (e) {
									const t = e.getAttribute("data-type"),
										n = e.querySelector(
											"div.control-group.condition-type > div > input[checked]"
										).value,
										r = Array.from(
											e.querySelectorAll(
												"div.conditions-container > div.control-group.condition"
											),
											(e) =>
												(function (e, t) {
													const n = e.querySelector("div.not > input").checked,
														r = o(t, e.querySelector("div.fields > select").value),
														a = e.querySelector("div.operators > select").value;
													let l = e.querySelector("div.term > input").value;
													"IS" === a || isNaN(Number(l)) || (l = Number(l));
													const s = i(a, r, l);
													return n ? {NOT: s} : s;
												})(e, t)
										);
									if (0 === r.length) return {};
									if (1 === r.length) return "none" === n ? {NOT: r[0]} : r[0];
									switch (n) {
										case "all":
											return {AND: r};
										case "any":
											return {OR: r};
										case "none":
											return {NOT: {OR: r}};
									}
								})(e)),
									(t.OPTIONS = (function (e) {
										const t = e.getAttribute("data-type"),
											n = {},
											r = Array.from(
												e.querySelectorAll(
													"div.columns > div.control-group > div.control.field > input[checked]"
												),
												(e) => o(t, e.value)
											),
											i = Array.from(
												e.querySelectorAll(
													"div.columns > div.control-group > div.control.transformation > input[checked]"
												),
												(e) => e.value
											);
										n.COLUMNS = r.concat(i);
										const a = Array.from(
												e.querySelectorAll(
													"div.order > div > div.fields > select > option[selected]"
												),
												(e) =>
													e.classList.contains("transformation") ? e.value : o(t, e.value)
											),
											l = e.querySelector("div.order > div > div.descending > input").checked,
											s = l ? "DOWN" : "UP";
										(a.length > 0 || l) && (n.ORDER = {dir: s, keys: a});
										return n;
									})(e));
								const n = (function (e) {
									const t = e.getAttribute("data-type"),
										n = Array.from(
											e.querySelectorAll(
												"div.groups > div.control-group > div.field > input[checked]"
											),
											(e) => o(t, e.value)
										),
										r = Array.from(
											e.querySelectorAll(
												"div.transformations > div.transformations-container > div.transformation"
											),
											(e) =>
												(function (e, t) {
													const n = e.querySelector("div.term > input").value,
														r = e.querySelector("div.operators > select").value,
														a = o(t, e.querySelector("div.fields > select").value);
													return i(n, r, a);
												})(e, t)
										);
									return n.length > 0 || r.length > 0 ? {GROUP: n, APPLY: r} : null;
								})(e);
								n && (t.TRANSFORMATIONS = n);
								return t;
						  })(e);
				0;
				return r;
			});
		var r = n(56);
		n.n(r);
		function i(e, t, n) {
			const r = {},
				i = {};
			return (i[t] = n), (r[e] = i), r;
		}
		function o(e, t) {
			return `${e}_${t}`;
		}
	},
	function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}),
			(t._sq = function (e) {
				return new Promise(function (t, n) {
					let r = new XMLHttpRequest(),
						i = "object" == typeof e ? "application/json" : "text/plain";
					r.open("POST", "query"),
						r.setRequestHeader("Content-Type", i),
						(r.onload = function () {
							let e;
							try {
								e = JSON.parse(r.responseText);
							} catch (e) {
								n({error: "Error parsing response text: " + r.responseText, originalError: e});
							}
							e &&
								(200 === r.status
									? t(e)
									: n({error: "Unexpected response status " + r.status + ": " + e.error}));
						});
					try {
						let t;
						(t = "object" == typeof e ? JSON.stringify(e) : e), r.send(t);
					} catch (e) {
						n({error: "query is not in expected format"});
					}
				});
			});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o = e.lambda,
					a = e.escapeExpression,
					l =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'                <a class="nav-item tab" data-type="' +
					a(o(null != t ? l(t, "id") : t, t)) +
					'" href="#tab-' +
					a(o(null != t ? l(t, "id") : t, t)) +
					'">' +
					a(o(null != t ? l(t, "label") : t, t)) +
					"</a>\n"
				);
			},
			3: function (e, t, r, i, o, a, l) {
				var s,
					u = e.lambda,
					c = e.escapeExpression,
					f =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'                    <div class="tab-panel" id="tab-' +
					c(u(null != t ? f(t, "id") : t, t)) +
					'" data-type="' +
					c(u(null != t ? f(t, "id") : t, t)) +
					'">\n' +
					(null !=
					(s = e.invokePartial(n(37), t, {
						name: "form",
						hash: {operators: null != l[1] ? f(l[1], "operators") : l[1], type: t},
						data: o,
						indent: "                        ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					"                    </div>\n"
				);
			},
			5: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'                <div id="global-hint-container">\n                    ' +
					e.escapeExpression(
						e.lambda(null != (o = null != t ? a(t, "ui") : t) ? a(o, "globalHintText") : o, t)
					) +
					"\n                </div>\n"
				);
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, r, i, o, a, l) {
				var s,
					u = e.lambda,
					c = e.escapeExpression,
					f = null != t ? t : e.nullContext || {},
					d =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div id="wrapper">\n    <div id="nav-container">\n        <div class="logo">' +
					c(u(null != (s = null != t ? d(t, "ui") : t) ? d(s, "logoText") : s, t)) +
					'</div>\n        <nav class="nav">\n            <a class="nav-item tab" data-type="plain" href="#tab-plain">Plain</a>\n' +
					(null !=
					(s = d(r, "each").call(f, null != t ? d(t, "types") : t, {
						name: "each",
						hash: {},
						fn: e.program(1, o, 0, a, l),
						inverse: e.noop,
						data: o,
						loc: {start: {line: 6, column: 12}, end: {line: 8, column: 21}},
					}))
						? s
						: "") +
					'        </nav>\n    </div>\n\n    <div id="content-container">\n        <div id="left-container">\n            <div id="form-container">\n                <div class="tab-panel" id="tab-plain" data-type="plain">\n' +
					(null !=
					(s = e.invokePartial(n(39), t, {
						name: "form-plain",
						data: o,
						indent: "                    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					"                </div>\n" +
					(null !=
					(s = d(r, "each").call(f, null != t ? d(t, "types") : t, {
						name: "each",
						hash: {},
						fn: e.program(3, o, 0, a, l),
						inverse: e.noop,
						data: o,
						loc: {start: {line: 18, column: 16}, end: {line: 22, column: 25}},
					}))
						? s
						: "") +
					'                <div id="submit-container">\n                    <a class="copy-html btn" href="#">' +
					c(u(null != (s = null != t ? d(t, "ui") : t) ? d(s, "copyHtmlText") : s, t)) +
					'</a>\n                    <a id="submit-button" type="submit" class="submit btn" href="#">' +
					c(u(null != (s = null != t ? d(t, "ui") : t) ? d(s, "submitText") : s, t)) +
					'</a>\n                </div>\n            </div>\n        </div>\n        <div id="right-container">\n' +
					(null !=
					(s = d(r, "if").call(f, null != (s = null != t ? d(t, "ui") : t) ? d(s, "displayHint") : s, {
						name: "if",
						hash: {},
						fn: e.program(5, o, 0, a, l),
						inverse: e.noop,
						data: o,
						loc: {start: {line: 30, column: 12}, end: {line: 34, column: 19}},
					}))
						? s
						: "") +
					'            <div id="result-container">\n            </div>\n        </div>\n    </div>\n</div>\n'
				);
			},
			usePartial: !0,
			useData: !0,
			useDepths: !0,
		});
	},
	function (e, t, n) {
		"use strict";
		function r(e) {
			return e && e.__esModule ? e : {default: e};
		}
		(t.__esModule = !0), (t.HandlebarsEnvironment = c);
		var i = n(1),
			o = r(n(2)),
			a = n(14),
			l = n(30),
			s = r(n(15)),
			u = n(16);
		t.VERSION = "4.7.6";
		t.COMPILER_REVISION = 8;
		t.LAST_COMPATIBLE_COMPILER_REVISION = 7;
		t.REVISION_CHANGES = {
			1: "<= 1.0.rc.2",
			2: "== 1.0.0-rc.3",
			3: "== 1.0.0-rc.4",
			4: "== 1.x.x",
			5: "== 2.0.0-alpha.x",
			6: ">= 2.0.0-beta.1",
			7: ">= 4.0.0 <4.3.0",
			8: ">= 4.3.0",
		};
		function c(e, t, n) {
			(this.helpers = e || {}),
				(this.partials = t || {}),
				(this.decorators = n || {}),
				a.registerDefaultHelpers(this),
				l.registerDefaultDecorators(this);
		}
		c.prototype = {
			constructor: c,
			logger: s.default,
			log: s.default.log,
			registerHelper: function (e, t) {
				if ("[object Object]" === i.toString.call(e)) {
					if (t) throw new o.default("Arg not supported with multiple helpers");
					i.extend(this.helpers, e);
				} else this.helpers[e] = t;
			},
			unregisterHelper: function (e) {
				delete this.helpers[e];
			},
			registerPartial: function (e, t) {
				if ("[object Object]" === i.toString.call(e)) i.extend(this.partials, e);
				else {
					if (void 0 === t)
						throw new o.default('Attempting to register a partial called "' + e + '" as undefined');
					this.partials[e] = t;
				}
			},
			unregisterPartial: function (e) {
				delete this.partials[e];
			},
			registerDecorator: function (e, t) {
				if ("[object Object]" === i.toString.call(e)) {
					if (t) throw new o.default("Arg not supported with multiple decorators");
					i.extend(this.decorators, e);
				} else this.decorators[e] = t;
			},
			unregisterDecorator: function (e) {
				delete this.decorators[e];
			},
			resetLoggedPropertyAccesses: function () {
				u.resetLoggedProperties();
			},
		};
		var f = s.default.log;
		(t.log = f), (t.createFrame = i.createFrame), (t.logger = s.default);
	},
	function (e, t, n) {
		"use strict";
		function r(e) {
			return e && e.__esModule ? e : {default: e};
		}
		(t.__esModule = !0),
			(t.registerDefaultHelpers = function (e) {
				i.default(e), o.default(e), a.default(e), l.default(e), s.default(e), u.default(e), c.default(e);
			}),
			(t.moveHelperToHooks = function (e, t, n) {
				e.helpers[t] && ((e.hooks[t] = e.helpers[t]), n || delete e.helpers[t]);
			});
		var i = r(n(23)),
			o = r(n(24)),
			a = r(n(25)),
			l = r(n(26)),
			s = r(n(27)),
			u = r(n(28)),
			c = r(n(29));
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = n(1),
			i = {
				methodMap: ["debug", "info", "warn", "error"],
				level: "info",
				lookupLevel: function (e) {
					if ("string" == typeof e) {
						var t = r.indexOf(i.methodMap, e.toLowerCase());
						e = t >= 0 ? t : parseInt(e, 10);
					}
					return e;
				},
				log: function (e) {
					if (((e = i.lookupLevel(e)), "undefined" != typeof console && i.lookupLevel(i.level) <= e)) {
						var t = i.methodMap[e];
						console[t] || (t = "log");
						for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
							r[o - 1] = arguments[o];
						console[t].apply(console, r);
					}
				},
			};
		(t.default = i), (e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.createProtoAccessControl = function (e) {
				var t = Object.create(null);
				(t.constructor = !1), (t.__defineGetter__ = !1), (t.__defineSetter__ = !1), (t.__lookupGetter__ = !1);
				var n = Object.create(null);
				return (
					(n.__proto__ = !1),
					{
						properties: {
							whitelist: r.createNewLookupObject(n, e.allowedProtoProperties),
							defaultValue: e.allowProtoPropertiesByDefault,
						},
						methods: {
							whitelist: r.createNewLookupObject(t, e.allowedProtoMethods),
							defaultValue: e.allowProtoMethodsByDefault,
						},
					}
				);
			}),
			(t.resultIsAllowed = function (e, t, n) {
				return a("function" == typeof e ? t.methods : t.properties, n);
			}),
			(t.resetLoggedProperties = function () {
				Object.keys(o).forEach(function (e) {
					delete o[e];
				});
			});
		var r = n(32),
			i = (function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return (t.default = e), t;
			})(n(15)),
			o = Object.create(null);
		function a(e, t) {
			return void 0 !== e.whitelist[t]
				? !0 === e.whitelist[t]
				: void 0 !== e.defaultValue
				? e.defaultValue
				: ((function (e) {
						!0 !== o[e] &&
							((o[e] = !0),
							i.log(
								"error",
								'Handlebars: Access has been denied to resolve the property "' +
									e +
									'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'
							));
				  })(t),
				  !1);
		}
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'class="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "classes") || (null != t ? a(t, "classes") : t))
									? o
									: e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "classes",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 30}, end: {line: 1, column: 41}},
							  })
							: o
					) +
					'"'
				);
			},
			3: function (e, t, n, r, i) {
				return 'selected="selected"';
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = null != t ? t : e.nullContext || {},
					s = e.hooks.helperMissing,
					u = e.escapeExpression,
					c =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					"<option " +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "classes") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 1, column: 8}, end: {line: 1, column: 49}},
					}))
						? o
						: "") +
					' value="' +
					u(
						"function" == typeof (a = null != (a = c(n, "key") || (null != t ? c(t, "key") : t)) ? a : s)
							? a.call(l, {
									name: "key",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 57}, end: {line: 1, column: 64}},
							  })
							: a
					) +
					'" ' +
					(null !=
					(o = (c(n, "eq") || (t && c(t, "eq")) || s).call(l, null != t ? c(t, "index") : t, 0, {
						name: "eq",
						hash: {},
						fn: e.program(3, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 1, column: 66}, end: {line: 1, column: 107}},
					}))
						? o
						: "") +
					">\n    " +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "label") || (null != t ? c(t, "label") : t)) ? a : s)
							? a.call(l, {
									name: "label",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 4}, end: {line: 2, column: 13}},
							  })
							: a
					) +
					"\n</option>"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					"        <th>" +
					e.escapeExpression(
						"function" ==
							typeof (o = null != (o = a(n, "key") || (i && a(i, "key"))) ? o : e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "key",
									hash: {},
									data: i,
									loc: {start: {line: 10, column: 12}, end: {line: 10, column: 20}},
							  })
							: o
					) +
					"</th>\n"
				);
			},
			3: function (e, t, n, r, i) {
				var o;
				return (
					"            <tr>\n" +
					(null !=
					(o = (
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						}
					)(n, "each").call(null != t ? t : e.nullContext || {}, t, {
						name: "each",
						hash: {},
						fn: e.program(4, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 16, column: 16}, end: {line: 18, column: 25}},
					}))
						? o
						: "") +
					"            </tr>\n"
				);
			},
			4: function (e, t, n, r, i) {
				return "                    <td>" + e.escapeExpression(e.lambda(t, t)) + "</td>\n";
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = e.escapeExpression,
					s = null != t ? t : e.nullContext || {},
					u =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="summary">\n    <span class="num">' +
					l(e.lambda(null != (o = null != t ? u(t, "result") : t) ? u(o, "length") : o, t)) +
					' results </span>\n    <span class="show-hint">(showing first ' +
					l(
						"function" ==
							typeof (a =
								null != (a = u(n, "previewSize") || (null != t ? u(t, "previewSize") : t))
									? a
									: e.hooks.helperMissing)
							? a.call(s, {
									name: "previewSize",
									hash: {},
									data: i,
									loc: {start: {line: 3, column: 43}, end: {line: 3, column: 58}},
							  })
							: a
					) +
					')</span>\n    <a class="copy-result" href="#">Copy JSON</a>\n    <a class="showall" href="#">Show all</a>\n</div>\n<table id="result-table">\n    <thead>\n' +
					(null !=
					(o = u(n, "each").call(s, null != (o = null != t ? u(t, "result") : t) ? u(o, "0") : o, {
						name: "each",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 9, column: 4}, end: {line: 11, column: 13}},
					}))
						? o
						: "") +
					"    </thead>\n    <tbody>\n" +
					(null !=
					(o = u(n, "each").call(s, null != t ? u(t, "result") : t, {
						name: "each",
						hash: {},
						fn: e.program(3, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 14, column: 8}, end: {line: 20, column: 17}},
					}))
						? o
						: "") +
					"    </tbody>\n</table>\n"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					"(" +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "code") || (null != t ? a(t, "code") : t))
									? o
									: e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "code",
									hash: {},
									data: i,
									loc: {start: {line: 6, column: 29}, end: {line: 6, column: 37}},
							  })
							: o
					) +
					")"
				);
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = null != t ? t : e.nullContext || {},
					s =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="summary error">\n    <span>Error occurred</span>\n    <a class="copy-result" href="#">Copy JSON</a>\n</div>\n<div class="error-message">\n    ' +
					e.escapeExpression(
						"function" ==
							typeof (a =
								null != (a = s(n, "message") || (null != t ? s(t, "message") : t))
									? a
									: e.hooks.helperMissing)
							? a.call(l, {
									name: "message",
									hash: {},
									data: i,
									loc: {start: {line: 6, column: 4}, end: {line: 6, column: 15}},
							  })
							: a
					) +
					" " +
					(null !=
					(o = s(n, "if").call(l, null != t ? s(t, "code") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 6, column: 16}, end: {line: 6, column: 45}},
					}))
						? o
						: "") +
					"\n</div>\n"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		e.exports = {
			operators: {
				conditions: [
					{key: "EQ", label: "EQ"},
					{key: "GT", label: "GT"},
					{key: "IS", label: "IS"},
					{key: "LT", label: "LT"},
				],
				transformations: [
					{key: "COUNT", label: "COUNT"},
					{key: "AVG", label: "AVG"},
					{key: "MAX", label: "MAX"},
					{key: "MIN", label: "MIN"},
					{key: "SUM", label: "SUM"},
				],
			},
			types: {
				courses: {
					label: "Courses",
					id: "courses",
					fields: [
						{key: "audit", label: "Audit"},
						{key: "avg", label: "Average"},
						{key: "dept", label: "Department"},
						{key: "fail", label: "Fail"},
						{key: "id", label: "ID"},
						{key: "instructor", label: "Instructor"},
						{key: "pass", label: "Pass"},
						{key: "title", label: "Title"},
						{key: "uuid", label: "UUID"},
						{key: "year", label: "Year"},
					],
				},
				rooms: {
					label: "Rooms",
					id: "rooms",
					fields: [
						{key: "address", label: "Address"},
						{key: "fullname", label: "Full Name"},
						{key: "furniture", label: "Furniture"},
						{key: "href", label: "Link"},
						{key: "lat", label: "Latitude"},
						{key: "lon", label: "Longitude"},
						{key: "name", label: "Name"},
						{key: "number", label: "Number"},
						{key: "seats", label: "Seats"},
						{key: "shortname", label: "Short Name"},
						{key: "type", label: "Type"},
					],
				},
			},
			ui: {
				logoText: "CampusExplorer",
				submitText: "Submit",
				copyHtmlText: "Copy HTML",
				globalHintText:
					"This UI may not handle all possible error cases correctly. When in doubt, please follow the spec!",
				displayHint: !0,
			},
		};
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control ' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "classes") || (null != t ? a(t, "classes") : t))
									? o
									: e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "classes",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 20}, end: {line: 1, column: 31}},
							  })
							: o
					) +
					'">\n    <input type="text" />\n</div>'
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		n(12), n(18), n(19), n(40), n(20), n(41), n(9), n(10), n(11), n(57), (e.exports = n(59));
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = n(1);
		(t.default = function (e) {
			e.registerHelper("blockHelperMissing", function (t, n) {
				var i = n.inverse,
					o = n.fn;
				if (!0 === t) return o(this);
				if (!1 === t || null == t) return i(this);
				if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
				if (n.data && n.ids) {
					var a = r.createFrame(n.data);
					(a.contextPath = r.appendContextPath(n.data.contextPath, n.name)), (n = {data: a});
				}
				return o(t, n);
			});
		}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(function (r) {
			t.__esModule = !0;
			var i = n(1),
				o = (function (e) {
					return e && e.__esModule ? e : {default: e};
				})(n(2));
			(t.default = function (e) {
				e.registerHelper("each", function (e, t) {
					if (!t) throw new o.default("Must pass iterator to #each");
					var n = t.fn,
						a = t.inverse,
						l = 0,
						s = "",
						u = void 0,
						c = void 0;
					function f(t, r, o) {
						u &&
							((u.key = t),
							(u.index = r),
							(u.first = 0 === r),
							(u.last = !!o),
							c && (u.contextPath = c + t)),
							(s += n(e[t], {data: u, blockParams: i.blockParams([e[t], t], [c + t, null])}));
					}
					if (
						(t.data && t.ids && (c = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
						i.isFunction(e) && (e = e.call(this)),
						t.data && (u = i.createFrame(t.data)),
						e && "object" == typeof e)
					)
						if (i.isArray(e)) for (var d = e.length; l < d; l++) l in e && f(l, l, l === e.length - 1);
						else if (r.Symbol && e[r.Symbol.iterator]) {
							for (var p = [], h = e[r.Symbol.iterator](), m = h.next(); !m.done; m = h.next())
								p.push(m.value);
							for (d = (e = p).length; l < d; l++) f(l, l, l === e.length - 1);
						} else
							!(function () {
								var t = void 0;
								Object.keys(e).forEach(function (e) {
									void 0 !== t && f(t, l - 1), (t = e), l++;
								}),
									void 0 !== t && f(t, l - 1, !0);
							})();
					return 0 === l && (s = a(this)), s;
				});
			}),
				(e.exports = t.default);
		}.call(t, n(7)));
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = (function (e) {
			return e && e.__esModule ? e : {default: e};
		})(n(2));
		(t.default = function (e) {
			e.registerHelper("helperMissing", function () {
				if (1 !== arguments.length)
					throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
			});
		}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = n(1),
			i = (function (e) {
				return e && e.__esModule ? e : {default: e};
			})(n(2));
		(t.default = function (e) {
			e.registerHelper("if", function (e, t) {
				if (2 != arguments.length) throw new i.default("#if requires exactly one argument");
				return (
					r.isFunction(e) && (e = e.call(this)),
					(!t.hash.includeZero && !e) || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
				);
			}),
				e.registerHelper("unless", function (t, n) {
					if (2 != arguments.length) throw new i.default("#unless requires exactly one argument");
					return e.helpers.if.call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash});
				});
		}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.default = function (e) {
				e.registerHelper("log", function () {
					for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)
						t.push(arguments[r]);
					var i = 1;
					null != n.hash.level ? (i = n.hash.level) : n.data && null != n.data.level && (i = n.data.level),
						(t[0] = i),
						e.log.apply(e, t);
				});
			}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.default = function (e) {
				e.registerHelper("lookup", function (e, t, n) {
					return e ? n.lookupProperty(e, t) : e;
				});
			}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = n(1),
			i = (function (e) {
				return e && e.__esModule ? e : {default: e};
			})(n(2));
		(t.default = function (e) {
			e.registerHelper("with", function (e, t) {
				if (2 != arguments.length) throw new i.default("#with requires exactly one argument");
				r.isFunction(e) && (e = e.call(this));
				var n = t.fn;
				if (r.isEmpty(e)) return t.inverse(this);
				var o = t.data;
				return (
					t.data &&
						t.ids &&
						((o = r.createFrame(t.data)).contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])),
					n(e, {data: o, blockParams: r.blockParams([e], [o && o.contextPath])})
				);
			});
		}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.registerDefaultDecorators = function (e) {
				r.default(e);
			});
		var r = (function (e) {
			return e && e.__esModule ? e : {default: e};
		})(n(31));
	},
	function (e, t, n) {
		"use strict";
		t.__esModule = !0;
		var r = n(1);
		(t.default = function (e) {
			e.registerDecorator("inline", function (e, t, n, i) {
				var o = e;
				return (
					t.partials ||
						((t.partials = {}),
						(o = function (i, o) {
							var a = n.partials;
							n.partials = r.extend({}, a, t.partials);
							var l = e(i, o);
							return (n.partials = a), l;
						})),
					(t.partials[i.args[0]] = i.fn),
					o
				);
			});
		}),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.createNewLookupObject = function () {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return r.extend.apply(void 0, [Object.create(null)].concat(t));
			});
		var r = n(1);
	},
	function (e, t, n) {
		"use strict";
		function r(e) {
			this.string = e;
		}
		(t.__esModule = !0),
			(r.prototype.toString = r.prototype.toHTML =
				function () {
					return "" + this.string;
				}),
			(t.default = r),
			(e.exports = t.default);
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.checkRevision = function (e) {
				var t = (e && e[0]) || 1,
					n = o.COMPILER_REVISION;
				if (t >= o.LAST_COMPATIBLE_COMPILER_REVISION && t <= o.COMPILER_REVISION) return;
				if (t < o.LAST_COMPATIBLE_COMPILER_REVISION) {
					var r = o.REVISION_CHANGES[n],
						a = o.REVISION_CHANGES[t];
					throw new i.default(
						"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
							r +
							") or downgrade your runtime to an older version (" +
							a +
							")."
					);
				}
				throw new i.default(
					"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
						e[1] +
						")."
				);
			}),
			(t.template = function (e, t) {
				if (!t) throw new i.default("No environment passed to template");
				if (!e || !e.main) throw new i.default("Unknown template object: " + typeof e);
				(e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
				var n = e.compiler && 7 === e.compiler[0];
				var c = {
					strict: function (e, t, n) {
						if (!(e && t in e)) throw new i.default('"' + t + '" not defined in ' + e, {loc: n});
						return e[t];
					},
					lookupProperty: function (e, t) {
						var n = e[t];
						return null == n
							? n
							: Object.prototype.hasOwnProperty.call(e, t)
							? n
							: s.resultIsAllowed(n, c.protoAccessControl, t)
							? n
							: void 0;
					},
					lookup: function (e, t) {
						for (var n = e.length, r = 0; r < n; r++) {
							var i = e[r] && c.lookupProperty(e[r], t);
							if (null != i) return e[r][t];
						}
					},
					lambda: function (e, t) {
						return "function" == typeof e ? e.call(t) : e;
					},
					escapeExpression: r.escapeExpression,
					invokePartial: function (n, o, a) {
						a.hash && ((o = r.extend({}, o, a.hash)), a.ids && (a.ids[0] = !0));
						n = t.VM.resolvePartial.call(this, n, o, a);
						var l = r.extend({}, a, {hooks: this.hooks, protoAccessControl: this.protoAccessControl}),
							s = t.VM.invokePartial.call(this, n, o, l);
						null == s &&
							t.compile &&
							((a.partials[a.name] = t.compile(n, e.compilerOptions, t)), (s = a.partials[a.name](o, l)));
						if (null != s) {
							if (a.indent) {
								for (var u = s.split("\n"), c = 0, f = u.length; c < f && (u[c] || c + 1 !== f); c++)
									u[c] = a.indent + u[c];
								s = u.join("\n");
							}
							return s;
						}
						throw new i.default(
							"The partial " + a.name + " could not be compiled when running in runtime-only mode"
						);
					},
					fn: function (t) {
						var n = e[t];
						return (n.decorator = e[t + "_d"]), n;
					},
					programs: [],
					program: function (e, t, n, r, i) {
						var o = this.programs[e],
							a = this.fn(e);
						return (
							t || i || r || n
								? (o = u(this, e, a, t, n, r, i))
								: o || (o = this.programs[e] = u(this, e, a)),
							o
						);
					},
					data: function (e, t) {
						for (; e && t--; ) e = e._parent;
						return e;
					},
					mergeIfNeeded: function (e, t) {
						var n = e || t;
						return e && t && e !== t && (n = r.extend({}, t, e)), n;
					},
					nullContext: Object.seal({}),
					noop: t.VM.noop,
					compilerInfo: e.compiler,
				};
				function d(t) {
					var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
						r = n.data;
					d._setup(n),
						!n.partial &&
							e.useData &&
							(r = (function (e, t) {
								(t && "root" in t) || ((t = t ? o.createFrame(t) : {}).root = e);
								return t;
							})(t, r));
					var i = void 0,
						a = e.useBlockParams ? [] : void 0;
					function l(t) {
						return "" + e.main(c, t, c.helpers, c.partials, r, a, i);
					}
					return (
						e.useDepths && (i = n.depths ? (t != n.depths[0] ? [t].concat(n.depths) : n.depths) : [t]),
						(l = f(e.main, l, c, n.depths || [], r, a))(t, n)
					);
				}
				return (
					(d.isTop = !0),
					(d._setup = function (i) {
						if (i.partial)
							(c.protoAccessControl = i.protoAccessControl),
								(c.helpers = i.helpers),
								(c.partials = i.partials),
								(c.decorators = i.decorators),
								(c.hooks = i.hooks);
						else {
							var o = r.extend({}, t.helpers, i.helpers);
							!(function (e, t) {
								Object.keys(e).forEach(function (n) {
									var i = e[n];
									e[n] = (function (e, t) {
										var n = t.lookupProperty;
										return l.wrapHelper(e, function (e) {
											return r.extend({lookupProperty: n}, e);
										});
									})(i, t);
								});
							})(o, c),
								(c.helpers = o),
								e.usePartial && (c.partials = c.mergeIfNeeded(i.partials, t.partials)),
								(e.usePartial || e.useDecorators) &&
									(c.decorators = r.extend({}, t.decorators, i.decorators)),
								(c.hooks = {}),
								(c.protoAccessControl = s.createProtoAccessControl(i));
							var u = i.allowCallsToHelperMissing || n;
							a.moveHelperToHooks(c, "helperMissing", u), a.moveHelperToHooks(c, "blockHelperMissing", u);
						}
					}),
					(d._child = function (t, n, r, o) {
						if (e.useBlockParams && !r) throw new i.default("must pass block params");
						if (e.useDepths && !o) throw new i.default("must pass parent depths");
						return u(c, t, e[t], n, 0, r, o);
					}),
					d
				);
			}),
			(t.wrapProgram = u),
			(t.resolvePartial = function (e, t, n) {
				e
					? e.call || n.name || ((n.name = e), (e = n.partials[e]))
					: (e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name]);
				return e;
			}),
			(t.invokePartial = function (e, t, n) {
				var a = n.data && n.data["partial-block"];
				(n.partial = !0), n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
				var l = void 0;
				n.fn &&
					n.fn !== c &&
					(function () {
						n.data = o.createFrame(n.data);
						var e = n.fn;
						(l = n.data["partial-block"] =
							function (t) {
								var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
								return (n.data = o.createFrame(n.data)), (n.data["partial-block"] = a), e(t, n);
							}),
							e.partials && (n.partials = r.extend({}, n.partials, e.partials));
					})();
				void 0 === e && l && (e = l);
				if (void 0 === e) throw new i.default("The partial " + n.name + " could not be found");
				if (e instanceof Function) return e(t, n);
			}),
			(t.noop = c);
		var r = (function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return (t.default = e), t;
			})(n(1)),
			i = (function (e) {
				return e && e.__esModule ? e : {default: e};
			})(n(2)),
			o = n(13),
			a = n(14),
			l = n(35),
			s = n(16);
		function u(e, t, n, r, i, o, a) {
			function l(t) {
				var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
					l = a;
				return (
					!a || t == a[0] || (t === e.nullContext && null === a[0]) || (l = [t].concat(a)),
					n(e, t, e.helpers, e.partials, i.data || r, o && [i.blockParams].concat(o), l)
				);
			}
			return ((l = f(n, l, e, a, r, o)).program = t), (l.depth = a ? a.length : 0), (l.blockParams = i || 0), l;
		}
		function c() {
			return "";
		}
		function f(e, t, n, i, o, a) {
			if (e.decorator) {
				var l = {};
				(t = e.decorator(t, l, n, i && i[0], o, a, i)), r.extend(t, l);
			}
			return t;
		}
	},
	function (e, t, n) {
		"use strict";
		(t.__esModule = !0),
			(t.wrapHelper = function (e, t) {
				if ("function" != typeof e) return e;
				return function () {
					var n = arguments[arguments.length - 1];
					return (arguments[arguments.length - 1] = t(n)), e.apply(this, arguments);
				};
			});
	},
	function (e, t, n) {
		"use strict";
		(function (n) {
			(t.__esModule = !0),
				(t.default = function (e) {
					var t = void 0 !== n ? n : window,
						r = t.Handlebars;
					e.noConflict = function () {
						return t.Handlebars === e && (t.Handlebars = r), e;
					};
				}),
				(e.exports = t.default);
		}.call(t, n(7)));
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, r, i, o, a, l) {
				var s,
					u =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return null !=
					(s = e.invokePartial(n(3), t, {
						name: "checkbox",
						hash: {
							key: null != t ? u(t, "key") : t,
							id: u(r, "hyphenate").call(
								null != t ? t : e.nullContext || {},
								null != (s = null != l[1] ? u(l[1], "type") : l[1]) ? u(s, "id") : s,
								"columns",
								"field",
								null != t ? u(t, "key") : t,
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 20, column: 48}, end: {line: 20, column: 92}},
								}
							),
							classes: "field",
						},
						data: o,
						indent: "                ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
					? s
					: "";
			},
			3: function (e, t, r, i, o, a, l) {
				var s,
					u =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return null !=
					(s = e.invokePartial(n(3), t, {
						name: "checkbox",
						hash: {
							id: u(r, "hyphenate").call(
								null != t ? t : e.nullContext || {},
								null != (s = null != l[1] ? u(l[1], "type") : l[1]) ? u(s, "id") : s,
								"groups",
								"field",
								null != t ? u(t, "key") : t,
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 35, column: 48}, end: {line: 35, column: 91}},
								}
							),
							classes: "field",
						},
						data: o,
						indent: "                ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
					? s
					: "";
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, r, i, o, a, l) {
				var s,
					u = null != t ? t : e.nullContext || {},
					c =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<form data-type="' +
					e.escapeExpression(e.lambda(null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s, t)) +
					'">\n    <div class="form-group conditions">\n        <legend>Conditions</legend>\n        <div class="control-group condition-type">\n' +
					(null !=
					(s = e.invokePartial(n(8), t, {
						name: "radio",
						hash: {
							id: c(r, "hyphenate").call(
								u,
								null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s,
								"conditiontype",
								"all",
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 6, column: 23}, end: {line: 6, column: 64}},
								}
							),
							checked: !0,
							value: "all",
							label: "All of the following",
							name: "conditionType",
							classes: "conditions-all-radio",
						},
						data: o,
						indent: "            ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					(null !=
					(s = e.invokePartial(n(8), t, {
						name: "radio",
						hash: {
							id: c(r, "hyphenate").call(
								u,
								null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s,
								"conditiontype",
								"any",
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 8, column: 23}, end: {line: 8, column: 64}},
								}
							),
							value: "any",
							label: "Any of the following",
							name: "conditionType",
							classes: "conditions-any-radio",
						},
						data: o,
						indent: "            ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					(null !=
					(s = e.invokePartial(n(8), t, {
						name: "radio",
						hash: {
							id: c(r, "hyphenate").call(
								u,
								null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s,
								"conditiontype",
								"none",
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 10, column: 23}, end: {line: 10, column: 65}},
								}
							),
							value: "none",
							label: "None of the following",
							name: "conditionType",
							classes: "conditions-none-radio",
						},
						data: o,
						indent: "            ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					'        </div>\n        <div class="conditions-container"></div>\n        <div class="icon-container"><a class="icon icon-plus" href="#"></a></div>\n    </div>\n    <div class="form-group columns">\n        <legend>Columns</legend>\n        <div class="control-group">\n' +
					(null !=
					(s = c(r, "each").call(u, null != (s = null != t ? c(t, "type") : t) ? c(s, "fields") : s, {
						name: "each",
						hash: {},
						fn: e.program(1, o, 0, a, l),
						inverse: e.noop,
						data: o,
						loc: {start: {line: 19, column: 12}, end: {line: 21, column: 21}},
					}))
						? s
						: "") +
					'        </div>\n    </div>\n    <div class="form-group order">\n        <legend>Order</legend>\n        <div class="control-group">\n' +
					(null !=
					(s = e.invokePartial(n(4), t, {
						name: "dropdown",
						hash: {
							id: c(r, "hyphenate").call(
								u,
								null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s,
								"order",
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 27, column: 77}, end: {line: 27, column: 104}},
								}
							),
							data: null != t ? c(t, "fields") : t,
							classes: "order fields",
							multiple: !0,
						},
						data: o,
						indent: "            ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					(null !=
					(s = e.invokePartial(n(3), t, {
						name: "checkbox",
						hash: {
							id: c(r, "hyphenate").call(
								u,
								null != (s = null != t ? c(t, "type") : t) ? c(s, "id") : s,
								"order",
								{
									name: "hyphenate",
									hash: {},
									data: o,
									loc: {start: {line: 28, column: 68}, end: {line: 28, column: 95}},
								}
							),
							label: "Descending",
							classes: "descending",
						},
						data: o,
						indent: "            ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? s
						: "") +
					'        </div>\n    </div>\n    <div class="form-group groups">\n        <legend>Groups</legend>\n        <div class="control-group">\n' +
					(null !=
					(s = c(r, "each").call(u, null != (s = null != t ? c(t, "type") : t) ? c(s, "fields") : s, {
						name: "each",
						hash: {},
						fn: e.program(3, o, 0, a, l),
						inverse: e.noop,
						data: o,
						loc: {start: {line: 34, column: 12}, end: {line: 36, column: 21}},
					}))
						? s
						: "") +
					'        </div>\n    </div>\n    <div class="form-group transformations">\n        <legend>Transformations</legend>\n        <div class="transformations-container"></div>\n        <div class="icon-container"><a class="icon icon-plus" href="#"></a></div>\n    </div>\n</form>\n'
				);
			},
			usePartial: !0,
			useData: !0,
			useDepths: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			1: function (e, t, n, r, i) {
				var o,
					a =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'class="' +
					e.escapeExpression(
						"function" ==
							typeof (o =
								null != (o = a(n, "classes") || (null != t ? a(t, "classes") : t))
									? o
									: e.hooks.helperMissing)
							? o.call(null != t ? t : e.nullContext || {}, {
									name: "classes",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 30}, end: {line: 1, column: 41}},
							  })
							: o
					) +
					'"'
				);
			},
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				var o,
					a,
					l = null != t ? t : e.nullContext || {},
					s = e.hooks.helperMissing,
					u = e.escapeExpression,
					c =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					"<option " +
					(null !=
					(o = c(n, "if").call(l, null != t ? c(t, "classes") : t, {
						name: "if",
						hash: {},
						fn: e.program(1, i, 0),
						inverse: e.noop,
						data: i,
						loc: {start: {line: 1, column: 8}, end: {line: 1, column: 49}},
					}))
						? o
						: "") +
					' value="' +
					u(
						"function" == typeof (a = null != (a = c(n, "key") || (null != t ? c(t, "key") : t)) ? a : s)
							? a.call(l, {
									name: "key",
									hash: {},
									data: i,
									loc: {start: {line: 1, column: 57}, end: {line: 1, column: 64}},
							  })
							: a
					) +
					'">\n    ' +
					u(
						"function" ==
							typeof (a = null != (a = c(n, "label") || (null != t ? c(t, "label") : t)) ? a : s)
							? a.call(l, {
									name: "label",
									hash: {},
									data: i,
									loc: {start: {line: 2, column: 4}, end: {line: 2, column: 13}},
							  })
							: a
					) +
					"\n</option>"
				);
			},
			useData: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, n, r, i) {
				return '<form data-type="plain">\n    <div class="form-group plain">\n        <legend>Plain Query</legend>\n        <textarea class="form-control code" id="codemirror-plain-textarea" rows="3"></textarea>\n    </div>\n</form>';
			},
			useData: !0,
		});
	},
	function (e, t) {},
	function (e, t, n) {
		let r = n(6);
		r.registerHelper("eq", function (e, t, n) {
			return e === t ? n.fn(this) : n.inverse(this);
		}),
			r.registerHelper("hyphenate", function () {
				let e = Array.prototype.slice.call(arguments);
				return e.pop(), e.join("-");
			});
	},
	function (e, t, n) {
		var r;
		/*!
		 * jQuery JavaScript Library v3.5.1
		 * https://jquery.com/
		 *
		 * Includes Sizzle.js
		 * https://sizzlejs.com/
		 *
		 * Copyright JS Foundation and other contributors
		 * Released under the MIT license
		 * https://jquery.org/license
		 *
		 * Date: 2020-05-04T22:49Z
		 */
		/*!
		 * jQuery JavaScript Library v3.5.1
		 * https://jquery.com/
		 *
		 * Includes Sizzle.js
		 * https://sizzlejs.com/
		 *
		 * Copyright JS Foundation and other contributors
		 * Released under the MIT license
		 * https://jquery.org/license
		 *
		 * Date: 2020-05-04T22:49Z
		 */
		!(function (t, n) {
			"use strict";
			"object" == typeof e && "object" == typeof e.exports
				? (e.exports = t.document
						? n(t, !0)
						: function (e) {
								if (!e.document) throw new Error("jQuery requires a window with a document");
								return n(e);
						  })
				: n(t);
		})("undefined" != typeof window ? window : this, function (n, i) {
			"use strict";
			var o = [],
				a = Object.getPrototypeOf,
				l = o.slice,
				s = o.flat
					? function (e) {
							return o.flat.call(e);
					  }
					: function (e) {
							return o.concat.apply([], e);
					  },
				u = o.push,
				c = o.indexOf,
				f = {},
				d = f.toString,
				p = f.hasOwnProperty,
				h = p.toString,
				m = h.call(Object),
				g = {},
				v = function (e) {
					return "function" == typeof e && "number" != typeof e.nodeType;
				},
				y = function (e) {
					return null != e && e === e.window;
				},
				b = n.document,
				x = {type: !0, src: !0, nonce: !0, noModule: !0};
			function w(e, t, n) {
				var r,
					i,
					o = (n = n || b).createElement("script");
				if (((o.text = e), t))
					for (r in x) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
				n.head.appendChild(o).parentNode.removeChild(o);
			}
			function k(e) {
				return null == e
					? e + ""
					: "object" == typeof e || "function" == typeof e
					? f[d.call(e)] || "object"
					: typeof e;
			}
			var C = function (e, t) {
				return new C.fn.init(e, t);
			};
			function S(e) {
				var t = !!e && "length" in e && e.length,
					n = k(e);
				return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
			}
			(C.fn = C.prototype =
				{
					jquery: "3.5.1",
					constructor: C,
					length: 0,
					toArray: function () {
						return l.call(this);
					},
					get: function (e) {
						return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
					},
					pushStack: function (e) {
						var t = C.merge(this.constructor(), e);
						return (t.prevObject = this), t;
					},
					each: function (e) {
						return C.each(this, e);
					},
					map: function (e) {
						return this.pushStack(
							C.map(this, function (t, n) {
								return e.call(t, n, t);
							})
						);
					},
					slice: function () {
						return this.pushStack(l.apply(this, arguments));
					},
					first: function () {
						return this.eq(0);
					},
					last: function () {
						return this.eq(-1);
					},
					even: function () {
						return this.pushStack(
							C.grep(this, function (e, t) {
								return (t + 1) % 2;
							})
						);
					},
					odd: function () {
						return this.pushStack(
							C.grep(this, function (e, t) {
								return t % 2;
							})
						);
					},
					eq: function (e) {
						var t = this.length,
							n = +e + (e < 0 ? t : 0);
						return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
					},
					end: function () {
						return this.prevObject || this.constructor();
					},
					push: u,
					sort: o.sort,
					splice: o.splice,
				}),
				(C.extend = C.fn.extend =
					function () {
						var e,
							t,
							n,
							r,
							i,
							o,
							a = arguments[0] || {},
							l = 1,
							s = arguments.length,
							u = !1;
						for (
							"boolean" == typeof a && ((u = a), (a = arguments[l] || {}), l++),
								"object" == typeof a || v(a) || (a = {}),
								l === s && ((a = this), l--);
							l < s;
							l++
						)
							if (null != (e = arguments[l]))
								for (t in e)
									(r = e[t]),
										"__proto__" !== t &&
											a !== r &&
											(u && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
												? ((n = a[t]),
												  (o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}),
												  (i = !1),
												  (a[t] = C.extend(u, o, r)))
												: void 0 !== r && (a[t] = r));
						return a;
					}),
				C.extend({
					expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
					isReady: !0,
					error: function (e) {
						throw new Error(e);
					},
					noop: function () {},
					isPlainObject: function (e) {
						var t, n;
						return (
							!(!e || "[object Object]" !== d.call(e)) &&
							(!(t = a(e)) ||
								("function" == typeof (n = p.call(t, "constructor") && t.constructor) &&
									h.call(n) === m))
						);
					},
					isEmptyObject: function (e) {
						var t;
						for (t in e) return !1;
						return !0;
					},
					globalEval: function (e, t, n) {
						w(e, {nonce: t && t.nonce}, n);
					},
					each: function (e, t) {
						var n,
							r = 0;
						if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
						else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
						return e;
					},
					makeArray: function (e, t) {
						var n = t || [];
						return (
							null != e && (S(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
						);
					},
					inArray: function (e, t, n) {
						return null == t ? -1 : c.call(t, e, n);
					},
					merge: function (e, t) {
						for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
						return (e.length = i), e;
					},
					grep: function (e, t, n) {
						for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
						return r;
					},
					map: function (e, t, n) {
						var r,
							i,
							o = 0,
							a = [];
						if (S(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
						else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
						return s(a);
					},
					guid: 1,
					support: g,
				}),
				"function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
				C.each(
					"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
					function (e, t) {
						f["[object " + t + "]"] = t.toLowerCase();
					}
				);
			var T =
				/*!
				 * Sizzle CSS Selector Engine v2.3.5
				 * https://sizzlejs.com/
				 *
				 * Copyright JS Foundation and other contributors
				 * Released under the MIT license
				 * https://js.foundation/
				 *
				 * Date: 2020-03-14
				 */
				(function (e) {
					var t,
						n,
						r,
						i,
						o,
						a,
						l,
						s,
						u,
						c,
						f,
						d,
						p,
						h,
						m,
						g,
						v,
						y,
						b,
						x = "sizzle" + 1 * new Date(),
						w = e.document,
						k = 0,
						C = 0,
						S = se(),
						T = se(),
						L = se(),
						O = se(),
						A = function (e, t) {
							return e === t && (f = !0), 0;
						},
						M = {}.hasOwnProperty,
						N = [],
						E = N.pop,
						P = N.push,
						D = N.push,
						H = N.slice,
						R = function (e, t) {
							for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
							return -1;
						},
						j =
							"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						I = "[\\x20\\t\\r\\n\\f]",
						W = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
						F =
							"\\[" +
							I +
							"*(" +
							W +
							")(?:" +
							I +
							"*([*^$|!~]?=)" +
							I +
							"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
							W +
							"))|)" +
							I +
							"*\\]",
						_ =
							":(" +
							W +
							")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
							F +
							")*)|.*)\\)|)",
						B = new RegExp(I + "+", "g"),
						q = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
						z = new RegExp("^" + I + "*," + I + "*"),
						$ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
						U = new RegExp(I + "|>"),
						V = new RegExp(_),
						G = new RegExp("^" + W + "$"),
						X = {
							ID: new RegExp("^#(" + W + ")"),
							CLASS: new RegExp("^\\.(" + W + ")"),
							TAG: new RegExp("^(" + W + "|[*])"),
							ATTR: new RegExp("^" + F),
							PSEUDO: new RegExp("^" + _),
							CHILD: new RegExp(
								"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
									I +
									"*(even|odd|(([+-]|)(\\d*)n|)" +
									I +
									"*(?:([+-]|)" +
									I +
									"*(\\d+)|))" +
									I +
									"*\\)|)",
								"i"
							),
							bool: new RegExp("^(?:" + j + ")$", "i"),
							needsContext: new RegExp(
								"^" +
									I +
									"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
									I +
									"*((?:-\\d)?\\d*)" +
									I +
									"*\\)|)(?=[^-]|$)",
								"i"
							),
						},
						K = /HTML$/i,
						Y = /^(?:input|select|textarea|button)$/i,
						Q = /^h\d$/i,
						J = /^[^{]+\{\s*\[native \w/,
						Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						ee = /[+~]/,
						te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
						ne = function (e, t) {
							var n = "0x" + e.slice(1) - 65536;
							return (
								t ||
								(n < 0
									? String.fromCharCode(n + 65536)
									: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
							);
						},
						re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
						ie = function (e, t) {
							return t
								? "\0" === e
									? "�"
									: e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
								: "\\" + e;
						},
						oe = function () {
							d();
						},
						ae = xe(
							function (e) {
								return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
							},
							{dir: "parentNode", next: "legend"}
						);
					try {
						D.apply((N = H.call(w.childNodes)), w.childNodes), N[w.childNodes.length].nodeType;
					} catch (e) {
						D = {
							apply: N.length
								? function (e, t) {
										P.apply(e, H.call(t));
								  }
								: function (e, t) {
										for (var n = e.length, r = 0; (e[n++] = t[r++]); );
										e.length = n - 1;
								  },
						};
					}
					function le(e, t, r, i) {
						var o,
							l,
							u,
							c,
							f,
							h,
							v,
							y = t && t.ownerDocument,
							w = t ? t.nodeType : 9;
						if (((r = r || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
						if (!i && (d(t), (t = t || p), m)) {
							if (11 !== w && (f = Z.exec(e)))
								if ((o = f[1])) {
									if (9 === w) {
										if (!(u = t.getElementById(o))) return r;
										if (u.id === o) return r.push(u), r;
									} else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
										return r.push(u), r;
								} else {
									if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
									if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
										return D.apply(r, t.getElementsByClassName(o)), r;
								}
							if (
								n.qsa &&
								!O[e + " "] &&
								(!g || !g.test(e)) &&
								(1 !== w || "object" !== t.nodeName.toLowerCase())
							) {
								if (((v = e), (y = t), 1 === w && (U.test(e) || $.test(e)))) {
									for (
										((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
											((c = t.getAttribute("id"))
												? (c = c.replace(re, ie))
												: t.setAttribute("id", (c = x))),
											l = (h = a(e)).length;
										l--;

									)
										h[l] = (c ? "#" + c : ":scope") + " " + be(h[l]);
									v = h.join(",");
								}
								try {
									return D.apply(r, y.querySelectorAll(v)), r;
								} catch (t) {
									O(e, !0);
								} finally {
									c === x && t.removeAttribute("id");
								}
							}
						}
						return s(e.replace(q, "$1"), t, r, i);
					}
					function se() {
						var e = [];
						return function t(n, i) {
							return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
						};
					}
					function ue(e) {
						return (e[x] = !0), e;
					}
					function ce(e) {
						var t = p.createElement("fieldset");
						try {
							return !!e(t);
						} catch (e) {
							return !1;
						} finally {
							t.parentNode && t.parentNode.removeChild(t), (t = null);
						}
					}
					function fe(e, t) {
						for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
					}
					function de(e, t) {
						var n = t && e,
							r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
						if (r) return r;
						if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
						return e ? 1 : -1;
					}
					function pe(e) {
						return function (t) {
							return "input" === t.nodeName.toLowerCase() && t.type === e;
						};
					}
					function he(e) {
						return function (t) {
							var n = t.nodeName.toLowerCase();
							return ("input" === n || "button" === n) && t.type === e;
						};
					}
					function me(e) {
						return function (t) {
							return "form" in t
								? t.parentNode && !1 === t.disabled
									? "label" in t
										? "label" in t.parentNode
											? t.parentNode.disabled === e
											: t.disabled === e
										: t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
									: t.disabled === e
								: "label" in t && t.disabled === e;
						};
					}
					function ge(e) {
						return ue(function (t) {
							return (
								(t = +t),
								ue(function (n, r) {
									for (var i, o = e([], n.length, t), a = o.length; a--; )
										n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
								})
							);
						});
					}
					function ve(e) {
						return e && void 0 !== e.getElementsByTagName && e;
					}
					for (t in ((n = le.support = {}),
					(o = le.isXML =
						function (e) {
							var t = e.namespaceURI,
								n = (e.ownerDocument || e).documentElement;
							return !K.test(t || (n && n.nodeName) || "HTML");
						}),
					(d = le.setDocument =
						function (e) {
							var t,
								i,
								a = e ? e.ownerDocument || e : w;
							return a != p && 9 === a.nodeType && a.documentElement
								? ((h = (p = a).documentElement),
								  (m = !o(p)),
								  w != p &&
										(i = p.defaultView) &&
										i.top !== i &&
										(i.addEventListener
											? i.addEventListener("unload", oe, !1)
											: i.attachEvent && i.attachEvent("onunload", oe)),
								  (n.scope = ce(function (e) {
										return (
											h.appendChild(e).appendChild(p.createElement("div")),
											void 0 !== e.querySelectorAll &&
												!e.querySelectorAll(":scope fieldset div").length
										);
								  })),
								  (n.attributes = ce(function (e) {
										return (e.className = "i"), !e.getAttribute("className");
								  })),
								  (n.getElementsByTagName = ce(function (e) {
										return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
								  })),
								  (n.getElementsByClassName = J.test(p.getElementsByClassName)),
								  (n.getById = ce(function (e) {
										return (
											(h.appendChild(e).id = x),
											!p.getElementsByName || !p.getElementsByName(x).length
										);
								  })),
								  n.getById
										? ((r.filter.ID = function (e) {
												var t = e.replace(te, ne);
												return function (e) {
													return e.getAttribute("id") === t;
												};
										  }),
										  (r.find.ID = function (e, t) {
												if (void 0 !== t.getElementById && m) {
													var n = t.getElementById(e);
													return n ? [n] : [];
												}
										  }))
										: ((r.filter.ID = function (e) {
												var t = e.replace(te, ne);
												return function (e) {
													var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
													return n && n.value === t;
												};
										  }),
										  (r.find.ID = function (e, t) {
												if (void 0 !== t.getElementById && m) {
													var n,
														r,
														i,
														o = t.getElementById(e);
													if (o) {
														if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
														for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
															if ((n = o.getAttributeNode("id")) && n.value === e)
																return [o];
													}
													return [];
												}
										  })),
								  (r.find.TAG = n.getElementsByTagName
										? function (e, t) {
												return void 0 !== t.getElementsByTagName
													? t.getElementsByTagName(e)
													: n.qsa
													? t.querySelectorAll(e)
													: void 0;
										  }
										: function (e, t) {
												var n,
													r = [],
													i = 0,
													o = t.getElementsByTagName(e);
												if ("*" === e) {
													for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
													return r;
												}
												return o;
										  }),
								  (r.find.CLASS =
										n.getElementsByClassName &&
										function (e, t) {
											if (void 0 !== t.getElementsByClassName && m)
												return t.getElementsByClassName(e);
										}),
								  (v = []),
								  (g = []),
								  (n.qsa = J.test(p.querySelectorAll)) &&
										(ce(function (e) {
											var t;
											(h.appendChild(e).innerHTML =
												"<a id='" +
												x +
												"'></a><select id='" +
												x +
												"-\r\\' msallowcapture=''><option selected=''></option></select>"),
												e.querySelectorAll("[msallowcapture^='']").length &&
													g.push("[*^$]=" + I + "*(?:''|\"\")"),
												e.querySelectorAll("[selected]").length ||
													g.push("\\[" + I + "*(?:value|" + j + ")"),
												e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
												(t = p.createElement("input")).setAttribute("name", ""),
												e.appendChild(t),
												e.querySelectorAll("[name='']").length ||
													g.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
												e.querySelectorAll(":checked").length || g.push(":checked"),
												e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"),
												e.querySelectorAll("\\\f"),
												g.push("[\\r\\n\\f]");
										}),
										ce(function (e) {
											e.innerHTML =
												"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
											var t = p.createElement("input");
											t.setAttribute("type", "hidden"),
												e.appendChild(t).setAttribute("name", "D"),
												e.querySelectorAll("[name=d]").length &&
													g.push("name" + I + "*[*^$|!~]?="),
												2 !== e.querySelectorAll(":enabled").length &&
													g.push(":enabled", ":disabled"),
												(h.appendChild(e).disabled = !0),
												2 !== e.querySelectorAll(":disabled").length &&
													g.push(":enabled", ":disabled"),
												e.querySelectorAll("*,:x"),
												g.push(",.*:");
										})),
								  (n.matchesSelector = J.test(
										(y =
											h.matches ||
											h.webkitMatchesSelector ||
											h.mozMatchesSelector ||
											h.oMatchesSelector ||
											h.msMatchesSelector)
								  )) &&
										ce(function (e) {
											(n.disconnectedMatch = y.call(e, "*")),
												y.call(e, "[s!='']:x"),
												v.push("!=", _);
										}),
								  (g = g.length && new RegExp(g.join("|"))),
								  (v = v.length && new RegExp(v.join("|"))),
								  (t = J.test(h.compareDocumentPosition)),
								  (b =
										t || J.test(h.contains)
											? function (e, t) {
													var n = 9 === e.nodeType ? e.documentElement : e,
														r = t && t.parentNode;
													return (
														e === r ||
														!(
															!r ||
															1 !== r.nodeType ||
															!(n.contains
																? n.contains(r)
																: e.compareDocumentPosition &&
																  16 & e.compareDocumentPosition(r))
														)
													);
											  }
											: function (e, t) {
													if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
													return !1;
											  }),
								  (A = t
										? function (e, t) {
												if (e === t) return (f = !0), 0;
												var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
												return (
													r ||
													(1 &
														(r =
															(e.ownerDocument || e) == (t.ownerDocument || t)
																? e.compareDocumentPosition(t)
																: 1) ||
													(!n.sortDetached && t.compareDocumentPosition(e) === r)
														? e == p || (e.ownerDocument == w && b(w, e))
															? -1
															: t == p || (t.ownerDocument == w && b(w, t))
															? 1
															: c
															? R(c, e) - R(c, t)
															: 0
														: 4 & r
														? -1
														: 1)
												);
										  }
										: function (e, t) {
												if (e === t) return (f = !0), 0;
												var n,
													r = 0,
													i = e.parentNode,
													o = t.parentNode,
													a = [e],
													l = [t];
												if (!i || !o)
													return e == p
														? -1
														: t == p
														? 1
														: i
														? -1
														: o
														? 1
														: c
														? R(c, e) - R(c, t)
														: 0;
												if (i === o) return de(e, t);
												for (n = e; (n = n.parentNode); ) a.unshift(n);
												for (n = t; (n = n.parentNode); ) l.unshift(n);
												for (; a[r] === l[r]; ) r++;
												return r ? de(a[r], l[r]) : a[r] == w ? -1 : l[r] == w ? 1 : 0;
										  }),
								  p)
								: p;
						}),
					(le.matches = function (e, t) {
						return le(e, null, null, t);
					}),
					(le.matchesSelector = function (e, t) {
						if ((d(e), n.matchesSelector && m && !O[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
							try {
								var r = y.call(e, t);
								if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
							} catch (e) {
								O(t, !0);
							}
						return le(t, p, null, [e]).length > 0;
					}),
					(le.contains = function (e, t) {
						return (e.ownerDocument || e) != p && d(e), b(e, t);
					}),
					(le.attr = function (e, t) {
						(e.ownerDocument || e) != p && d(e);
						var i = r.attrHandle[t.toLowerCase()],
							o = i && M.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
						return void 0 !== o
							? o
							: n.attributes || !m
							? e.getAttribute(t)
							: (o = e.getAttributeNode(t)) && o.specified
							? o.value
							: null;
					}),
					(le.escape = function (e) {
						return (e + "").replace(re, ie);
					}),
					(le.error = function (e) {
						throw new Error("Syntax error, unrecognized expression: " + e);
					}),
					(le.uniqueSort = function (e) {
						var t,
							r = [],
							i = 0,
							o = 0;
						if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(A), f)) {
							for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
							for (; i--; ) e.splice(r[i], 1);
						}
						return (c = null), e;
					}),
					(i = le.getText =
						function (e) {
							var t,
								n = "",
								r = 0,
								o = e.nodeType;
							if (o) {
								if (1 === o || 9 === o || 11 === o) {
									if ("string" == typeof e.textContent) return e.textContent;
									for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
								} else if (3 === o || 4 === o) return e.nodeValue;
							} else for (; (t = e[r++]); ) n += i(t);
							return n;
						}),
					((r = le.selectors =
						{
							cacheLength: 50,
							createPseudo: ue,
							match: X,
							attrHandle: {},
							find: {},
							relative: {
								">": {dir: "parentNode", first: !0},
								" ": {dir: "parentNode"},
								"+": {dir: "previousSibling", first: !0},
								"~": {dir: "previousSibling"},
							},
							preFilter: {
								ATTR: function (e) {
									return (
										(e[1] = e[1].replace(te, ne)),
										(e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
										"~=" === e[2] && (e[3] = " " + e[3] + " "),
										e.slice(0, 4)
									);
								},
								CHILD: function (e) {
									return (
										(e[1] = e[1].toLowerCase()),
										"nth" === e[1].slice(0, 3)
											? (e[3] || le.error(e[0]),
											  (e[4] = +(e[4]
													? e[5] + (e[6] || 1)
													: 2 * ("even" === e[3] || "odd" === e[3]))),
											  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
											: e[3] && le.error(e[0]),
										e
									);
								},
								PSEUDO: function (e) {
									var t,
										n = !e[6] && e[2];
									return X.CHILD.test(e[0])
										? null
										: (e[3]
												? (e[2] = e[4] || e[5] || "")
												: n &&
												  V.test(n) &&
												  (t = a(n, !0)) &&
												  (t = n.indexOf(")", n.length - t) - n.length) &&
												  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
										  e.slice(0, 3));
								},
							},
							filter: {
								TAG: function (e) {
									var t = e.replace(te, ne).toLowerCase();
									return "*" === e
										? function () {
												return !0;
										  }
										: function (e) {
												return e.nodeName && e.nodeName.toLowerCase() === t;
										  };
								},
								CLASS: function (e) {
									var t = S[e + " "];
									return (
										t ||
										((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
											S(e, function (e) {
												return t.test(
													("string" == typeof e.className && e.className) ||
														(void 0 !== e.getAttribute && e.getAttribute("class")) ||
														""
												);
											}))
									);
								},
								ATTR: function (e, t, n) {
									return function (r) {
										var i = le.attr(r, e);
										return null == i
											? "!=" === t
											: !t ||
													((i += ""),
													"=" === t
														? i === n
														: "!=" === t
														? i !== n
														: "^=" === t
														? n && 0 === i.indexOf(n)
														: "*=" === t
														? n && i.indexOf(n) > -1
														: "$=" === t
														? n && i.slice(-n.length) === n
														: "~=" === t
														? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
														: "|=" === t &&
														  (i === n || i.slice(0, n.length + 1) === n + "-"));
									};
								},
								CHILD: function (e, t, n, r, i) {
									var o = "nth" !== e.slice(0, 3),
										a = "last" !== e.slice(-4),
										l = "of-type" === t;
									return 1 === r && 0 === i
										? function (e) {
												return !!e.parentNode;
										  }
										: function (t, n, s) {
												var u,
													c,
													f,
													d,
													p,
													h,
													m = o !== a ? "nextSibling" : "previousSibling",
													g = t.parentNode,
													v = l && t.nodeName.toLowerCase(),
													y = !s && !l,
													b = !1;
												if (g) {
													if (o) {
														for (; m; ) {
															for (d = t; (d = d[m]); )
																if (
																	l
																		? d.nodeName.toLowerCase() === v
																		: 1 === d.nodeType
																)
																	return !1;
															h = m = "only" === e && !h && "nextSibling";
														}
														return !0;
													}
													if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
														for (
															b =
																(p =
																	(u =
																		(c =
																			(f = (d = g)[x] || (d[x] = {}))[
																				d.uniqueID
																			] || (f[d.uniqueID] = {}))[e] || [])[0] ===
																		k && u[1]) && u[2],
																d = p && g.childNodes[p];
															(d = (++p && d && d[m]) || (b = p = 0) || h.pop());

														)
															if (1 === d.nodeType && ++b && d === t) {
																c[e] = [k, p, b];
																break;
															}
													} else if (
														(y &&
															(b = p =
																(u =
																	(c =
																		(f = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
																		(f[d.uniqueID] = {}))[e] || [])[0] === k &&
																u[1]),
														!1 === b)
													)
														for (
															;
															(d = (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
															((l ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) ||
																!++b ||
																(y &&
																	((c =
																		(f = d[x] || (d[x] = {}))[d.uniqueID] ||
																		(f[d.uniqueID] = {}))[e] = [k, b]),
																d !== t));

														);
													return (b -= i) === r || (b % r == 0 && b / r >= 0);
												}
										  };
								},
								PSEUDO: function (e, t) {
									var n,
										i =
											r.pseudos[e] ||
											r.setFilters[e.toLowerCase()] ||
											le.error("unsupported pseudo: " + e);
									return i[x]
										? i(t)
										: i.length > 1
										? ((n = [e, e, "", t]),
										  r.setFilters.hasOwnProperty(e.toLowerCase())
												? ue(function (e, n) {
														for (var r, o = i(e, t), a = o.length; a--; )
															e[(r = R(e, o[a]))] = !(n[r] = o[a]);
												  })
												: function (e) {
														return i(e, 0, n);
												  })
										: i;
								},
							},
							pseudos: {
								not: ue(function (e) {
									var t = [],
										n = [],
										r = l(e.replace(q, "$1"));
									return r[x]
										? ue(function (e, t, n, i) {
												for (var o, a = r(e, null, i, []), l = e.length; l--; )
													(o = a[l]) && (e[l] = !(t[l] = o));
										  })
										: function (e, i, o) {
												return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
										  };
								}),
								has: ue(function (e) {
									return function (t) {
										return le(e, t).length > 0;
									};
								}),
								contains: ue(function (e) {
									return (
										(e = e.replace(te, ne)),
										function (t) {
											return (t.textContent || i(t)).indexOf(e) > -1;
										}
									);
								}),
								lang: ue(function (e) {
									return (
										G.test(e || "") || le.error("unsupported lang: " + e),
										(e = e.replace(te, ne).toLowerCase()),
										function (t) {
											var n;
											do {
												if (
													(n = m
														? t.lang
														: t.getAttribute("xml:lang") || t.getAttribute("lang"))
												)
													return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
											} while ((t = t.parentNode) && 1 === t.nodeType);
											return !1;
										}
									);
								}),
								target: function (t) {
									var n = e.location && e.location.hash;
									return n && n.slice(1) === t.id;
								},
								root: function (e) {
									return e === h;
								},
								focus: function (e) {
									return (
										e === p.activeElement &&
										(!p.hasFocus || p.hasFocus()) &&
										!!(e.type || e.href || ~e.tabIndex)
									);
								},
								enabled: me(!1),
								disabled: me(!0),
								checked: function (e) {
									var t = e.nodeName.toLowerCase();
									return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
								},
								selected: function (e) {
									return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
								},
								empty: function (e) {
									for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
									return !0;
								},
								parent: function (e) {
									return !r.pseudos.empty(e);
								},
								header: function (e) {
									return Q.test(e.nodeName);
								},
								input: function (e) {
									return Y.test(e.nodeName);
								},
								button: function (e) {
									var t = e.nodeName.toLowerCase();
									return ("input" === t && "button" === e.type) || "button" === t;
								},
								text: function (e) {
									var t;
									return (
										"input" === e.nodeName.toLowerCase() &&
										"text" === e.type &&
										(null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
									);
								},
								first: ge(function () {
									return [0];
								}),
								last: ge(function (e, t) {
									return [t - 1];
								}),
								eq: ge(function (e, t, n) {
									return [n < 0 ? n + t : n];
								}),
								even: ge(function (e, t) {
									for (var n = 0; n < t; n += 2) e.push(n);
									return e;
								}),
								odd: ge(function (e, t) {
									for (var n = 1; n < t; n += 2) e.push(n);
									return e;
								}),
								lt: ge(function (e, t, n) {
									for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
									return e;
								}),
								gt: ge(function (e, t, n) {
									for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
									return e;
								}),
							},
						}).pseudos.nth = r.pseudos.eq),
					{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
						r.pseudos[t] = pe(t);
					for (t in {submit: !0, reset: !0}) r.pseudos[t] = he(t);
					function ye() {}
					function be(e) {
						for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
						return r;
					}
					function xe(e, t, n) {
						var r = t.dir,
							i = t.next,
							o = i || r,
							a = n && "parentNode" === o,
							l = C++;
						return t.first
							? function (t, n, i) {
									for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
									return !1;
							  }
							: function (t, n, s) {
									var u,
										c,
										f,
										d = [k, l];
									if (s) {
										for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, s)) return !0;
									} else
										for (; (t = t[r]); )
											if (1 === t.nodeType || a)
												if (
													((c =
														(f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
													i && i === t.nodeName.toLowerCase())
												)
													t = t[r] || t;
												else {
													if ((u = c[o]) && u[0] === k && u[1] === l) return (d[2] = u[2]);
													if (((c[o] = d), (d[2] = e(t, n, s)))) return !0;
												}
									return !1;
							  };
					}
					function we(e) {
						return e.length > 1
							? function (t, n, r) {
									for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
									return !0;
							  }
							: e[0];
					}
					function ke(e, t, n, r, i) {
						for (var o, a = [], l = 0, s = e.length, u = null != t; l < s; l++)
							(o = e[l]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(l)));
						return a;
					}
					function Ce(e, t, n, r, i, o) {
						return (
							r && !r[x] && (r = Ce(r)),
							i && !i[x] && (i = Ce(i, o)),
							ue(function (o, a, l, s) {
								var u,
									c,
									f,
									d = [],
									p = [],
									h = a.length,
									m =
										o ||
										(function (e, t, n) {
											for (var r = 0, i = t.length; r < i; r++) le(e, t[r], n);
											return n;
										})(t || "*", l.nodeType ? [l] : l, []),
									g = !e || (!o && t) ? m : ke(m, d, e, l, s),
									v = n ? (i || (o ? e : h || r) ? [] : a) : g;
								if ((n && n(g, v, l, s), r))
									for (u = ke(v, p), r(u, [], l, s), c = u.length; c--; )
										(f = u[c]) && (v[p[c]] = !(g[p[c]] = f));
								if (o) {
									if (i || e) {
										if (i) {
											for (u = [], c = v.length; c--; ) (f = v[c]) && u.push((g[c] = f));
											i(null, (v = []), u, s);
										}
										for (c = v.length; c--; )
											(f = v[c]) && (u = i ? R(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f));
									}
								} else (v = ke(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, s) : D.apply(a, v);
							})
						);
					}
					function Se(e) {
						for (
							var t,
								n,
								i,
								o = e.length,
								a = r.relative[e[0].type],
								l = a || r.relative[" "],
								s = a ? 1 : 0,
								c = xe(
									function (e) {
										return e === t;
									},
									l,
									!0
								),
								f = xe(
									function (e) {
										return R(t, e) > -1;
									},
									l,
									!0
								),
								d = [
									function (e, n, r) {
										var i = (!a && (r || n !== u)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
										return (t = null), i;
									},
								];
							s < o;
							s++
						)
							if ((n = r.relative[e[s].type])) d = [xe(we(d), n)];
							else {
								if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
									for (i = ++s; i < o && !r.relative[e[i].type]; i++);
									return Ce(
										s > 1 && we(d),
										s > 1 &&
											be(
												e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})
											).replace(q, "$1"),
										n,
										s < i && Se(e.slice(s, i)),
										i < o && Se((e = e.slice(i))),
										i < o && be(e)
									);
								}
								d.push(n);
							}
						return we(d);
					}
					return (
						(ye.prototype = r.filters = r.pseudos),
						(r.setFilters = new ye()),
						(a = le.tokenize =
							function (e, t) {
								var n,
									i,
									o,
									a,
									l,
									s,
									u,
									c = T[e + " "];
								if (c) return t ? 0 : c.slice(0);
								for (l = e, s = [], u = r.preFilter; l; ) {
									for (a in ((n && !(i = z.exec(l))) ||
										(i && (l = l.slice(i[0].length) || l), s.push((o = []))),
									(n = !1),
									(i = $.exec(l)) &&
										((n = i.shift()),
										o.push({value: n, type: i[0].replace(q, " ")}),
										(l = l.slice(n.length))),
									r.filter))
										!(i = X[a].exec(l)) ||
											(u[a] && !(i = u[a](i))) ||
											((n = i.shift()),
											o.push({value: n, type: a, matches: i}),
											(l = l.slice(n.length)));
									if (!n) break;
								}
								return t ? l.length : l ? le.error(e) : T(e, s).slice(0);
							}),
						(l = le.compile =
							function (e, t) {
								var n,
									i = [],
									o = [],
									l = L[e + " "];
								if (!l) {
									for (t || (t = a(e)), n = t.length; n--; )
										(l = Se(t[n]))[x] ? i.push(l) : o.push(l);
									(l = L(
										e,
										(function (e, t) {
											var n = t.length > 0,
												i = e.length > 0,
												o = function (o, a, l, s, c) {
													var f,
														h,
														g,
														v = 0,
														y = "0",
														b = o && [],
														x = [],
														w = u,
														C = o || (i && r.find.TAG("*", c)),
														S = (k += null == w ? 1 : Math.random() || 0.1),
														T = C.length;
													for (
														c && (u = a == p || a || c);
														y !== T && null != (f = C[y]);
														y++
													) {
														if (i && f) {
															for (
																h = 0, a || f.ownerDocument == p || (d(f), (l = !m));
																(g = e[h++]);

															)
																if (g(f, a || p, l)) {
																	s.push(f);
																	break;
																}
															c && (k = S);
														}
														n && ((f = !g && f) && v--, o && b.push(f));
													}
													if (((v += y), n && y !== v)) {
														for (h = 0; (g = t[h++]); ) g(b, x, a, l);
														if (o) {
															if (v > 0) for (; y--; ) b[y] || x[y] || (x[y] = E.call(s));
															x = ke(x);
														}
														D.apply(s, x),
															c &&
																!o &&
																x.length > 0 &&
																v + t.length > 1 &&
																le.uniqueSort(s);
													}
													return c && ((k = S), (u = w)), b;
												};
											return n ? ue(o) : o;
										})(o, i)
									)).selector = e;
								}
								return l;
							}),
						(s = le.select =
							function (e, t, n, i) {
								var o,
									s,
									u,
									c,
									f,
									d = "function" == typeof e && e,
									p = !i && a((e = d.selector || e));
								if (((n = n || []), 1 === p.length)) {
									if (
										(s = p[0] = p[0].slice(0)).length > 2 &&
										"ID" === (u = s[0]).type &&
										9 === t.nodeType &&
										m &&
										r.relative[s[1].type]
									) {
										if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
										d && (t = t.parentNode), (e = e.slice(s.shift().value.length));
									}
									for (
										o = X.needsContext.test(e) ? 0 : s.length;
										o-- && ((u = s[o]), !r.relative[(c = u.type)]);

									)
										if (
											(f = r.find[c]) &&
											(i = f(
												u.matches[0].replace(te, ne),
												(ee.test(s[0].type) && ve(t.parentNode)) || t
											))
										) {
											if ((s.splice(o, 1), !(e = i.length && be(s)))) return D.apply(n, i), n;
											break;
										}
								}
								return (d || l(e, p))(i, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
							}),
						(n.sortStable = x.split("").sort(A).join("") === x),
						(n.detectDuplicates = !!f),
						d(),
						(n.sortDetached = ce(function (e) {
							return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
						})),
						ce(function (e) {
							return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
						}) ||
							fe("type|href|height|width", function (e, t, n) {
								if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
							}),
						(n.attributes &&
							ce(function (e) {
								return (
									(e.innerHTML = "<input/>"),
									e.firstChild.setAttribute("value", ""),
									"" === e.firstChild.getAttribute("value")
								);
							})) ||
							fe("value", function (e, t, n) {
								if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
							}),
						ce(function (e) {
							return null == e.getAttribute("disabled");
						}) ||
							fe(j, function (e, t, n) {
								var r;
								if (!n)
									return !0 === e[t]
										? t.toLowerCase()
										: (r = e.getAttributeNode(t)) && r.specified
										? r.value
										: null;
							}),
						le
					);
				})(n);
			(C.find = T),
				(C.expr = T.selectors),
				(C.expr[":"] = C.expr.pseudos),
				(C.uniqueSort = C.unique = T.uniqueSort),
				(C.text = T.getText),
				(C.isXMLDoc = T.isXML),
				(C.contains = T.contains),
				(C.escapeSelector = T.escape);
			var L = function (e, t, n) {
					for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
						if (1 === e.nodeType) {
							if (i && C(e).is(n)) break;
							r.push(e);
						}
					return r;
				},
				O = function (e, t) {
					for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
					return n;
				},
				A = C.expr.match.needsContext;
			function M(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
			}
			var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
			function E(e, t, n) {
				return v(t)
					? C.grep(e, function (e, r) {
							return !!t.call(e, r, e) !== n;
					  })
					: t.nodeType
					? C.grep(e, function (e) {
							return (e === t) !== n;
					  })
					: "string" != typeof t
					? C.grep(e, function (e) {
							return c.call(t, e) > -1 !== n;
					  })
					: C.filter(t, e, n);
			}
			(C.filter = function (e, t, n) {
				var r = t[0];
				return (
					n && (e = ":not(" + e + ")"),
					1 === t.length && 1 === r.nodeType
						? C.find.matchesSelector(r, e)
							? [r]
							: []
						: C.find.matches(
								e,
								C.grep(t, function (e) {
									return 1 === e.nodeType;
								})
						  )
				);
			}),
				C.fn.extend({
					find: function (e) {
						var t,
							n,
							r = this.length,
							i = this;
						if ("string" != typeof e)
							return this.pushStack(
								C(e).filter(function () {
									for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
								})
							);
						for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
						return r > 1 ? C.uniqueSort(n) : n;
					},
					filter: function (e) {
						return this.pushStack(E(this, e || [], !1));
					},
					not: function (e) {
						return this.pushStack(E(this, e || [], !0));
					},
					is: function (e) {
						return !!E(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length;
					},
				});
			var P,
				D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
			((C.fn.init = function (e, t, n) {
				var r, i;
				if (!e) return this;
				if (((n = n || P), "string" == typeof e)) {
					if (
						!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) ||
						(!r[1] && t)
					)
						return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (
							((t = t instanceof C ? t[0] : t),
							C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
							N.test(r[1]) && C.isPlainObject(t))
						)
							for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this;
					}
					return (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
				}
				return e.nodeType
					? ((this[0] = e), (this.length = 1), this)
					: v(e)
					? void 0 !== n.ready
						? n.ready(e)
						: e(C)
					: C.makeArray(e, this);
			}).prototype = C.fn),
				(P = C(b));
			var H = /^(?:parents|prev(?:Until|All))/,
				R = {children: !0, contents: !0, next: !0, prev: !0};
			function j(e, t) {
				for (; (e = e[t]) && 1 !== e.nodeType; );
				return e;
			}
			C.fn.extend({
				has: function (e) {
					var t = C(e, this),
						n = t.length;
					return this.filter(function () {
						for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
					});
				},
				closest: function (e, t) {
					var n,
						r = 0,
						i = this.length,
						o = [],
						a = "string" != typeof e && C(e);
					if (!A.test(e))
						for (; r < i; r++)
							for (n = this[r]; n && n !== t; n = n.parentNode)
								if (
									n.nodeType < 11 &&
									(a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))
								) {
									o.push(n);
									break;
								}
					return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
				},
				index: function (e) {
					return e
						? "string" == typeof e
							? c.call(C(e), this[0])
							: c.call(this, e.jquery ? e[0] : e)
						: this[0] && this[0].parentNode
						? this.first().prevAll().length
						: -1;
				},
				add: function (e, t) {
					return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
				},
				addBack: function (e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
				},
			}),
				C.each(
					{
						parent: function (e) {
							var t = e.parentNode;
							return t && 11 !== t.nodeType ? t : null;
						},
						parents: function (e) {
							return L(e, "parentNode");
						},
						parentsUntil: function (e, t, n) {
							return L(e, "parentNode", n);
						},
						next: function (e) {
							return j(e, "nextSibling");
						},
						prev: function (e) {
							return j(e, "previousSibling");
						},
						nextAll: function (e) {
							return L(e, "nextSibling");
						},
						prevAll: function (e) {
							return L(e, "previousSibling");
						},
						nextUntil: function (e, t, n) {
							return L(e, "nextSibling", n);
						},
						prevUntil: function (e, t, n) {
							return L(e, "previousSibling", n);
						},
						siblings: function (e) {
							return O((e.parentNode || {}).firstChild, e);
						},
						children: function (e) {
							return O(e.firstChild);
						},
						contents: function (e) {
							return null != e.contentDocument && a(e.contentDocument)
								? e.contentDocument
								: (M(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
						},
					},
					function (e, t) {
						C.fn[e] = function (n, r) {
							var i = C.map(this, t, n);
							return (
								"Until" !== e.slice(-5) && (r = n),
								r && "string" == typeof r && (i = C.filter(r, i)),
								this.length > 1 && (R[e] || C.uniqueSort(i), H.test(e) && i.reverse()),
								this.pushStack(i)
							);
						};
					}
				);
			var I = /[^\x20\t\r\n\f]+/g;
			function W(e) {
				return e;
			}
			function F(e) {
				throw e;
			}
			function _(e, t, n, r) {
				var i;
				try {
					e && v((i = e.promise))
						? i.call(e).done(t).fail(n)
						: e && v((i = e.then))
						? i.call(e, t, n)
						: t.apply(void 0, [e].slice(r));
				} catch (e) {
					n.apply(void 0, [e]);
				}
			}
			(C.Callbacks = function (e) {
				e =
					"string" == typeof e
						? (function (e) {
								var t = {};
								return (
									C.each(e.match(I) || [], function (e, n) {
										t[n] = !0;
									}),
									t
								);
						  })(e)
						: C.extend({}, e);
				var t,
					n,
					r,
					i,
					o = [],
					a = [],
					l = -1,
					s = function () {
						for (i = i || e.once, r = t = !0; a.length; l = -1)
							for (n = a.shift(); ++l < o.length; )
								!1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && ((l = o.length), (n = !1));
						e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
					},
					u = {
						add: function () {
							return (
								o &&
									(n && !t && ((l = o.length - 1), a.push(n)),
									(function t(n) {
										C.each(n, function (n, r) {
											v(r)
												? (e.unique && u.has(r)) || o.push(r)
												: r && r.length && "string" !== k(r) && t(r);
										});
									})(arguments),
									n && !t && s()),
								this
							);
						},
						remove: function () {
							return (
								C.each(arguments, function (e, t) {
									for (var n; (n = C.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= l && l--;
								}),
								this
							);
						},
						has: function (e) {
							return e ? C.inArray(e, o) > -1 : o.length > 0;
						},
						empty: function () {
							return o && (o = []), this;
						},
						disable: function () {
							return (i = a = []), (o = n = ""), this;
						},
						disabled: function () {
							return !o;
						},
						lock: function () {
							return (i = a = []), n || t || (o = n = ""), this;
						},
						locked: function () {
							return !!i;
						},
						fireWith: function (e, n) {
							return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || s()), this;
						},
						fire: function () {
							return u.fireWith(this, arguments), this;
						},
						fired: function () {
							return !!r;
						},
					};
				return u;
			}),
				C.extend({
					Deferred: function (e) {
						var t = [
								["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
								[
									"resolve",
									"done",
									C.Callbacks("once memory"),
									C.Callbacks("once memory"),
									0,
									"resolved",
								],
								[
									"reject",
									"fail",
									C.Callbacks("once memory"),
									C.Callbacks("once memory"),
									1,
									"rejected",
								],
							],
							r = "pending",
							i = {
								state: function () {
									return r;
								},
								always: function () {
									return o.done(arguments).fail(arguments), this;
								},
								catch: function (e) {
									return i.then(null, e);
								},
								pipe: function () {
									var e = arguments;
									return C.Deferred(function (n) {
										C.each(t, function (t, r) {
											var i = v(e[r[4]]) && e[r[4]];
											o[r[1]](function () {
												var e = i && i.apply(this, arguments);
												e && v(e.promise)
													? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
													: n[r[0] + "With"](this, i ? [e] : arguments);
											});
										}),
											(e = null);
									}).promise();
								},
								then: function (e, r, i) {
									var o = 0;
									function a(e, t, r, i) {
										return function () {
											var l = this,
												s = arguments,
												u = function () {
													var n, u;
													if (!(e < o)) {
														if ((n = r.apply(l, s)) === t.promise())
															throw new TypeError("Thenable self-resolution");
														(u =
															n &&
															("object" == typeof n || "function" == typeof n) &&
															n.then),
															v(u)
																? i
																	? u.call(n, a(o, t, W, i), a(o, t, F, i))
																	: (o++,
																	  u.call(
																			n,
																			a(o, t, W, i),
																			a(o, t, F, i),
																			a(o, t, W, t.notifyWith)
																	  ))
																: (r !== W && ((l = void 0), (s = [n])),
																  (i || t.resolveWith)(l, s));
													}
												},
												c = i
													? u
													: function () {
															try {
																u();
															} catch (n) {
																C.Deferred.exceptionHook &&
																	C.Deferred.exceptionHook(n, c.stackTrace),
																	e + 1 >= o &&
																		(r !== F && ((l = void 0), (s = [n])),
																		t.rejectWith(l, s));
															}
													  };
											e
												? c()
												: (C.Deferred.getStackHook &&
														(c.stackTrace = C.Deferred.getStackHook()),
												  n.setTimeout(c));
										};
									}
									return C.Deferred(function (n) {
										t[0][3].add(a(0, n, v(i) ? i : W, n.notifyWith)),
											t[1][3].add(a(0, n, v(e) ? e : W)),
											t[2][3].add(a(0, n, v(r) ? r : F));
									}).promise();
								},
								promise: function (e) {
									return null != e ? C.extend(e, i) : i;
								},
							},
							o = {};
						return (
							C.each(t, function (e, n) {
								var a = n[2],
									l = n[5];
								(i[n[1]] = a.add),
									l &&
										a.add(
											function () {
												r = l;
											},
											t[3 - e][2].disable,
											t[3 - e][3].disable,
											t[0][2].lock,
											t[0][3].lock
										),
									a.add(n[3].fire),
									(o[n[0]] = function () {
										return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
									}),
									(o[n[0] + "With"] = a.fireWith);
							}),
							i.promise(o),
							e && e.call(o, o),
							o
						);
					},
					when: function (e) {
						var t = arguments.length,
							n = t,
							r = Array(n),
							i = l.call(arguments),
							o = C.Deferred(),
							a = function (e) {
								return function (n) {
									(r[e] = this),
										(i[e] = arguments.length > 1 ? l.call(arguments) : n),
										--t || o.resolveWith(r, i);
								};
							};
						if (
							t <= 1 &&
							(_(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))
						)
							return o.then();
						for (; n--; ) _(i[n], a(n), o.reject);
						return o.promise();
					},
				});
			var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			(C.Deferred.exceptionHook = function (e, t) {
				n.console &&
					n.console.warn &&
					e &&
					B.test(e.name) &&
					n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
			}),
				(C.readyException = function (e) {
					n.setTimeout(function () {
						throw e;
					});
				});
			var q = C.Deferred();
			function z() {
				b.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready();
			}
			(C.fn.ready = function (e) {
				return (
					q.then(e).catch(function (e) {
						C.readyException(e);
					}),
					this
				);
			}),
				C.extend({
					isReady: !1,
					readyWait: 1,
					ready: function (e) {
						(!0 === e ? --C.readyWait : C.isReady) ||
							((C.isReady = !0), (!0 !== e && --C.readyWait > 0) || q.resolveWith(b, [C]));
					},
				}),
				(C.ready.then = q.then),
				"complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll)
					? n.setTimeout(C.ready)
					: (b.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
			var $ = function (e, t, n, r, i, o, a) {
					var l = 0,
						s = e.length,
						u = null == n;
					if ("object" === k(n)) for (l in ((i = !0), n)) $(e, t, l, n[l], !0, o, a);
					else if (
						void 0 !== r &&
						((i = !0),
						v(r) || (a = !0),
						u &&
							(a
								? (t.call(e, r), (t = null))
								: ((u = t),
								  (t = function (e, t, n) {
										return u.call(C(e), n);
								  }))),
						t)
					)
						for (; l < s; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
					return i ? e : u ? t.call(e) : s ? t(e[0], n) : o;
				},
				U = /^-ms-/,
				V = /-([a-z])/g;
			function G(e, t) {
				return t.toUpperCase();
			}
			function X(e) {
				return e.replace(U, "ms-").replace(V, G);
			}
			var K = function (e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
			};
			function Y() {
				this.expando = C.expando + Y.uid++;
			}
			(Y.uid = 1),
				(Y.prototype = {
					cache: function (e) {
						var t = e[this.expando];
						return (
							t ||
								((t = {}),
								K(e) &&
									(e.nodeType
										? (e[this.expando] = t)
										: Object.defineProperty(e, this.expando, {value: t, configurable: !0}))),
							t
						);
					},
					set: function (e, t, n) {
						var r,
							i = this.cache(e);
						if ("string" == typeof t) i[X(t)] = n;
						else for (r in t) i[X(r)] = t[r];
						return i;
					},
					get: function (e, t) {
						return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
					},
					access: function (e, t, n) {
						return void 0 === t || (t && "string" == typeof t && void 0 === n)
							? this.get(e, t)
							: (this.set(e, t, n), void 0 !== n ? n : t);
					},
					remove: function (e, t) {
						var n,
							r = e[this.expando];
						if (void 0 !== r) {
							if (void 0 !== t) {
								n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(I) || []).length;
								for (; n--; ) delete r[t[n]];
							}
							(void 0 === t || C.isEmptyObject(r)) &&
								(e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
						}
					},
					hasData: function (e) {
						var t = e[this.expando];
						return void 0 !== t && !C.isEmptyObject(t);
					},
				});
			var Q = new Y(),
				J = new Y(),
				Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				ee = /[A-Z]/g;
			function te(e, t, n) {
				var r;
				if (void 0 === n && 1 === e.nodeType)
					if (
						((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))
					) {
						try {
							n = (function (e) {
								return (
									"true" === e ||
									("false" !== e &&
										("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e))
								);
							})(n);
						} catch (e) {}
						J.set(e, t, n);
					} else n = void 0;
				return n;
			}
			C.extend({
				hasData: function (e) {
					return J.hasData(e) || Q.hasData(e);
				},
				data: function (e, t, n) {
					return J.access(e, t, n);
				},
				removeData: function (e, t) {
					J.remove(e, t);
				},
				_data: function (e, t, n) {
					return Q.access(e, t, n);
				},
				_removeData: function (e, t) {
					Q.remove(e, t);
				},
			}),
				C.fn.extend({
					data: function (e, t) {
						var n,
							r,
							i,
							o = this[0],
							a = o && o.attributes;
						if (void 0 === e) {
							if (this.length && ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
								for (n = a.length; n--; )
									a[n] &&
										0 === (r = a[n].name).indexOf("data-") &&
										((r = X(r.slice(5))), te(o, r, i[r]));
								Q.set(o, "hasDataAttrs", !0);
							}
							return i;
						}
						return "object" == typeof e
							? this.each(function () {
									J.set(this, e);
							  })
							: $(
									this,
									function (t) {
										var n;
										if (o && void 0 === t)
											return void 0 !== (n = J.get(o, e))
												? n
												: void 0 !== (n = te(o, e))
												? n
												: void 0;
										this.each(function () {
											J.set(this, e, t);
										});
									},
									null,
									t,
									arguments.length > 1,
									null,
									!0
							  );
					},
					removeData: function (e) {
						return this.each(function () {
							J.remove(this, e);
						});
					},
				}),
				C.extend({
					queue: function (e, t, n) {
						var r;
						if (e)
							return (
								(t = (t || "fx") + "queue"),
								(r = Q.get(e, t)),
								n && (!r || Array.isArray(n) ? (r = Q.access(e, t, C.makeArray(n))) : r.push(n)),
								r || []
							);
					},
					dequeue: function (e, t) {
						t = t || "fx";
						var n = C.queue(e, t),
							r = n.length,
							i = n.shift(),
							o = C._queueHooks(e, t);
						"inprogress" === i && ((i = n.shift()), r--),
							i &&
								("fx" === t && n.unshift("inprogress"),
								delete o.stop,
								i.call(
									e,
									function () {
										C.dequeue(e, t);
									},
									o
								)),
							!r && o && o.empty.fire();
					},
					_queueHooks: function (e, t) {
						var n = t + "queueHooks";
						return (
							Q.get(e, n) ||
							Q.access(e, n, {
								empty: C.Callbacks("once memory").add(function () {
									Q.remove(e, [t + "queue", n]);
								}),
							})
						);
					},
				}),
				C.fn.extend({
					queue: function (e, t) {
						var n = 2;
						return (
							"string" != typeof e && ((t = e), (e = "fx"), n--),
							arguments.length < n
								? C.queue(this[0], e)
								: void 0 === t
								? this
								: this.each(function () {
										var n = C.queue(this, e, t);
										C._queueHooks(this, e),
											"fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
								  })
						);
					},
					dequeue: function (e) {
						return this.each(function () {
							C.dequeue(this, e);
						});
					},
					clearQueue: function (e) {
						return this.queue(e || "fx", []);
					},
					promise: function (e, t) {
						var n,
							r = 1,
							i = C.Deferred(),
							o = this,
							a = this.length,
							l = function () {
								--r || i.resolveWith(o, [o]);
							};
						for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
							(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(l));
						return l(), i.promise(t);
					},
				});
			var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
				ie = ["Top", "Right", "Bottom", "Left"],
				oe = b.documentElement,
				ae = function (e) {
					return C.contains(e.ownerDocument, e);
				},
				le = {composed: !0};
			oe.getRootNode &&
				(ae = function (e) {
					return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
				});
			var se = function (e, t) {
				return (
					"none" === (e = t || e).style.display ||
					("" === e.style.display && ae(e) && "none" === C.css(e, "display"))
				);
			};
			function ue(e, t, n, r) {
				var i,
					o,
					a = 20,
					l = r
						? function () {
								return r.cur();
						  }
						: function () {
								return C.css(e, t, "");
						  },
					s = l(),
					u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
					c = e.nodeType && (C.cssNumber[t] || ("px" !== u && +s)) && re.exec(C.css(e, t));
				if (c && c[3] !== u) {
					for (s /= 2, u = u || c[3], c = +s || 1; a--; )
						C.style(e, t, c + u), (1 - o) * (1 - (o = l() / s || 0.5)) <= 0 && (a = 0), (c /= o);
					(c *= 2), C.style(e, t, c + u), (n = n || []);
				}
				return (
					n &&
						((c = +c || +s || 0),
						(i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
						r && ((r.unit = u), (r.start = c), (r.end = i))),
					i
				);
			}
			var ce = {};
			function fe(e) {
				var t,
					n = e.ownerDocument,
					r = e.nodeName,
					i = ce[r];
				return (
					i ||
					((t = n.body.appendChild(n.createElement(r))),
					(i = C.css(t, "display")),
					t.parentNode.removeChild(t),
					"none" === i && (i = "block"),
					(ce[r] = i),
					i)
				);
			}
			function de(e, t) {
				for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
					(r = e[o]).style &&
						((n = r.style.display),
						t
							? ("none" === n && ((i[o] = Q.get(r, "display") || null), i[o] || (r.style.display = "")),
							  "" === r.style.display && se(r) && (i[o] = fe(r)))
							: "none" !== n && ((i[o] = "none"), Q.set(r, "display", n)));
				for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
				return e;
			}
			C.fn.extend({
				show: function () {
					return de(this, !0);
				},
				hide: function () {
					return de(this);
				},
				toggle: function (e) {
					return "boolean" == typeof e
						? e
							? this.show()
							: this.hide()
						: this.each(function () {
								se(this) ? C(this).show() : C(this).hide();
						  });
				},
			});
			var pe = /^(?:checkbox|radio)$/i,
				he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				me = /^$|^module$|\/(?:java|ecma)script/i;
			!(function () {
				var e = b.createDocumentFragment().appendChild(b.createElement("div")),
					t = b.createElement("input");
				t.setAttribute("type", "radio"),
					t.setAttribute("checked", "checked"),
					t.setAttribute("name", "t"),
					e.appendChild(t),
					(g.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
					(e.innerHTML = "<textarea>x</textarea>"),
					(g.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
					(e.innerHTML = "<option></option>"),
					(g.option = !!e.lastChild);
			})();
			var ge = {
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""],
			};
			function ve(e, t) {
				var n;
				return (
					(n =
						void 0 !== e.getElementsByTagName
							? e.getElementsByTagName(t || "*")
							: void 0 !== e.querySelectorAll
							? e.querySelectorAll(t || "*")
							: []),
					void 0 === t || (t && M(e, t)) ? C.merge([e], n) : n
				);
			}
			function ye(e, t) {
				for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
			}
			(ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
				(ge.th = ge.td),
				g.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
			var be = /<|&#?\w+;/;
			function xe(e, t, n, r, i) {
				for (var o, a, l, s, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
					if ((o = e[p]) || 0 === o)
						if ("object" === k(o)) C.merge(d, o.nodeType ? [o] : o);
						else if (be.test(o)) {
							for (
								a = a || f.appendChild(t.createElement("div")),
									l = (he.exec(o) || ["", ""])[1].toLowerCase(),
									s = ge[l] || ge._default,
									a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2],
									c = s[0];
								c--;

							)
								a = a.lastChild;
							C.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
						} else d.push(t.createTextNode(o));
				for (f.textContent = "", p = 0; (o = d[p++]); )
					if (r && C.inArray(o, r) > -1) i && i.push(o);
					else if (((u = ae(o)), (a = ve(f.appendChild(o), "script")), u && ye(a), n))
						for (c = 0; (o = a[c++]); ) me.test(o.type || "") && n.push(o);
				return f;
			}
			var we = /^key/,
				ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				Ce = /^([^.]*)(?:\.(.+)|)/;
			function Se() {
				return !0;
			}
			function Te() {
				return !1;
			}
			function Le(e, t) {
				return (
					(e ===
						(function () {
							try {
								return b.activeElement;
							} catch (e) {}
						})()) ==
					("focus" === t)
				);
			}
			function Oe(e, t, n, r, i, o) {
				var a, l;
				if ("object" == typeof t) {
					for (l in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Oe(e, l, n, r, t[l], o);
					return e;
				}
				if (
					(null == r && null == i
						? ((i = n), (r = n = void 0))
						: null == i &&
						  ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
					!1 === i)
				)
					i = Te;
				else if (!i) return e;
				return (
					1 === o &&
						((a = i),
						((i = function (e) {
							return C().off(e), a.apply(this, arguments);
						}).guid = a.guid || (a.guid = C.guid++))),
					e.each(function () {
						C.event.add(this, t, i, r, n);
					})
				);
			}
			function Ae(e, t, n) {
				n
					? (Q.set(e, t, !1),
					  C.event.add(e, t, {
							namespace: !1,
							handler: function (e) {
								var r,
									i,
									o = Q.get(this, t);
								if (1 & e.isTrigger && this[t]) {
									if (o.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();
									else if (
										((o = l.call(arguments)),
										Q.set(this, t, o),
										(r = n(this, t)),
										this[t](),
										o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : (i = {}),
										o !== i)
									)
										return e.stopImmediatePropagation(), e.preventDefault(), i.value;
								} else
									o.length &&
										(Q.set(this, t, {
											value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this),
										}),
										e.stopImmediatePropagation());
							},
					  }))
					: void 0 === Q.get(e, t) && C.event.add(e, t, Se);
			}
			(C.event = {
				global: {},
				add: function (e, t, n, r, i) {
					var o,
						a,
						l,
						s,
						u,
						c,
						f,
						d,
						p,
						h,
						m,
						g = Q.get(e);
					if (K(e))
						for (
							n.handler && ((n = (o = n).handler), (i = o.selector)),
								i && C.find.matchesSelector(oe, i),
								n.guid || (n.guid = C.guid++),
								(s = g.events) || (s = g.events = Object.create(null)),
								(a = g.handle) ||
									(a = g.handle =
										function (t) {
											return void 0 !== C && C.event.triggered !== t.type
												? C.event.dispatch.apply(e, arguments)
												: void 0;
										}),
								u = (t = (t || "").match(I) || [""]).length;
							u--;

						)
							(p = m = (l = Ce.exec(t[u]) || [])[1]),
								(h = (l[2] || "").split(".").sort()),
								p &&
									((f = C.event.special[p] || {}),
									(p = (i ? f.delegateType : f.bindType) || p),
									(f = C.event.special[p] || {}),
									(c = C.extend(
										{
											type: p,
											origType: m,
											data: r,
											handler: n,
											guid: n.guid,
											selector: i,
											needsContext: i && C.expr.match.needsContext.test(i),
											namespace: h.join("."),
										},
										o
									)),
									(d = s[p]) ||
										(((d = s[p] = []).delegateCount = 0),
										(f.setup && !1 !== f.setup.call(e, r, h, a)) ||
											(e.addEventListener && e.addEventListener(p, a))),
									f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
									i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
									(C.event.global[p] = !0));
				},
				remove: function (e, t, n, r, i) {
					var o,
						a,
						l,
						s,
						u,
						c,
						f,
						d,
						p,
						h,
						m,
						g = Q.hasData(e) && Q.get(e);
					if (g && (s = g.events)) {
						for (u = (t = (t || "").match(I) || [""]).length; u--; )
							if (((p = m = (l = Ce.exec(t[u]) || [])[1]), (h = (l[2] || "").split(".").sort()), p)) {
								for (
									f = C.event.special[p] || {},
										d = s[(p = (r ? f.delegateType : f.bindType) || p)] || [],
										l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
										a = o = d.length;
									o--;

								)
									(c = d[o]),
										(!i && m !== c.origType) ||
											(n && n.guid !== c.guid) ||
											(l && !l.test(c.namespace)) ||
											(r && r !== c.selector && ("**" !== r || !c.selector)) ||
											(d.splice(o, 1),
											c.selector && d.delegateCount--,
											f.remove && f.remove.call(e, c));
								a &&
									!d.length &&
									((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
										C.removeEvent(e, p, g.handle),
									delete s[p]);
							} else for (p in s) C.event.remove(e, p + t[u], n, r, !0);
						C.isEmptyObject(s) && Q.remove(e, "handle events");
					}
				},
				dispatch: function (e) {
					var t,
						n,
						r,
						i,
						o,
						a,
						l = new Array(arguments.length),
						s = C.event.fix(e),
						u = (Q.get(this, "events") || Object.create(null))[s.type] || [],
						c = C.event.special[s.type] || {};
					for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
					if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
						for (a = C.event.handlers.call(this, s, u), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
							for (
								s.currentTarget = i.elem, n = 0;
								(o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

							)
								(s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
									((s.handleObj = o),
									(s.data = o.data),
									void 0 !==
										(r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(
											i.elem,
											l
										)) &&
										!1 === (s.result = r) &&
										(s.preventDefault(), s.stopPropagation()));
						return c.postDispatch && c.postDispatch.call(this, s), s.result;
					}
				},
				handlers: function (e, t) {
					var n,
						r,
						i,
						o,
						a,
						l = [],
						s = t.delegateCount,
						u = e.target;
					if (s && u.nodeType && !("click" === e.type && e.button >= 1))
						for (; u !== this; u = u.parentNode || this)
							if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
								for (o = [], a = {}, n = 0; n < s; n++)
									void 0 === a[(i = (r = t[n]).selector + " ")] &&
										(a[i] = r.needsContext
											? C(i, this).index(u) > -1
											: C.find(i, this, null, [u]).length),
										a[i] && o.push(r);
								o.length && l.push({elem: u, handlers: o});
							}
					return (u = this), s < t.length && l.push({elem: u, handlers: t.slice(s)}), l;
				},
				addProp: function (e, t) {
					Object.defineProperty(C.Event.prototype, e, {
						enumerable: !0,
						configurable: !0,
						get: v(t)
							? function () {
									if (this.originalEvent) return t(this.originalEvent);
							  }
							: function () {
									if (this.originalEvent) return this.originalEvent[e];
							  },
						set: function (t) {
							Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t});
						},
					});
				},
				fix: function (e) {
					return e[C.expando] ? e : new C.Event(e);
				},
				special: {
					load: {noBubble: !0},
					click: {
						setup: function (e) {
							var t = this || e;
							return pe.test(t.type) && t.click && M(t, "input") && Ae(t, "click", Se), !1;
						},
						trigger: function (e) {
							var t = this || e;
							return pe.test(t.type) && t.click && M(t, "input") && Ae(t, "click"), !0;
						},
						_default: function (e) {
							var t = e.target;
							return (pe.test(t.type) && t.click && M(t, "input") && Q.get(t, "click")) || M(t, "a");
						},
					},
					beforeunload: {
						postDispatch: function (e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
						},
					},
				},
			}),
				(C.removeEvent = function (e, t, n) {
					e.removeEventListener && e.removeEventListener(t, n);
				}),
				(C.Event = function (e, t) {
					if (!(this instanceof C.Event)) return new C.Event(e, t);
					e && e.type
						? ((this.originalEvent = e),
						  (this.type = e.type),
						  (this.isDefaultPrevented =
								e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
									? Se
									: Te),
						  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
						  (this.currentTarget = e.currentTarget),
						  (this.relatedTarget = e.relatedTarget))
						: (this.type = e),
						t && C.extend(this, t),
						(this.timeStamp = (e && e.timeStamp) || Date.now()),
						(this[C.expando] = !0);
				}),
				(C.Event.prototype = {
					constructor: C.Event,
					isDefaultPrevented: Te,
					isPropagationStopped: Te,
					isImmediatePropagationStopped: Te,
					isSimulated: !1,
					preventDefault: function () {
						var e = this.originalEvent;
						(this.isDefaultPrevented = Se), e && !this.isSimulated && e.preventDefault();
					},
					stopPropagation: function () {
						var e = this.originalEvent;
						(this.isPropagationStopped = Se), e && !this.isSimulated && e.stopPropagation();
					},
					stopImmediatePropagation: function () {
						var e = this.originalEvent;
						(this.isImmediatePropagationStopped = Se),
							e && !this.isSimulated && e.stopImmediatePropagation(),
							this.stopPropagation();
					},
				}),
				C.each(
					{
						altKey: !0,
						bubbles: !0,
						cancelable: !0,
						changedTouches: !0,
						ctrlKey: !0,
						detail: !0,
						eventPhase: !0,
						metaKey: !0,
						pageX: !0,
						pageY: !0,
						shiftKey: !0,
						view: !0,
						char: !0,
						code: !0,
						charCode: !0,
						key: !0,
						keyCode: !0,
						button: !0,
						buttons: !0,
						clientX: !0,
						clientY: !0,
						offsetX: !0,
						offsetY: !0,
						pointerId: !0,
						pointerType: !0,
						screenX: !0,
						screenY: !0,
						targetTouches: !0,
						toElement: !0,
						touches: !0,
						which: function (e) {
							var t = e.button;
							return null == e.which && we.test(e.type)
								? null != e.charCode
									? e.charCode
									: e.keyCode
								: !e.which && void 0 !== t && ke.test(e.type)
								? 1 & t
									? 1
									: 2 & t
									? 3
									: 4 & t
									? 2
									: 0
								: e.which;
						},
					},
					C.event.addProp
				),
				C.each({focus: "focusin", blur: "focusout"}, function (e, t) {
					C.event.special[e] = {
						setup: function () {
							return Ae(this, e, Le), !1;
						},
						trigger: function () {
							return Ae(this, e), !0;
						},
						delegateType: t,
					};
				}),
				C.each(
					{
						mouseenter: "mouseover",
						mouseleave: "mouseout",
						pointerenter: "pointerover",
						pointerleave: "pointerout",
					},
					function (e, t) {
						C.event.special[e] = {
							delegateType: t,
							bindType: t,
							handle: function (e) {
								var n,
									r = e.relatedTarget,
									i = e.handleObj;
								return (
									(r && (r === this || C.contains(this, r))) ||
										((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
									n
								);
							},
						};
					}
				),
				C.fn.extend({
					on: function (e, t, n, r) {
						return Oe(this, e, t, n, r);
					},
					one: function (e, t, n, r) {
						return Oe(this, e, t, n, r, 1);
					},
					off: function (e, t, n) {
						var r, i;
						if (e && e.preventDefault && e.handleObj)
							return (
								(r = e.handleObj),
								C(e.delegateTarget).off(
									r.namespace ? r.origType + "." + r.namespace : r.origType,
									r.selector,
									r.handler
								),
								this
							);
						if ("object" == typeof e) {
							for (i in e) this.off(i, t, e[i]);
							return this;
						}
						return (
							(!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
							!1 === n && (n = Te),
							this.each(function () {
								C.event.remove(this, e, n, t);
							})
						);
					},
				});
			var Me = /<script|<style|<link/i,
				Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
			function Pe(e, t) {
				return (
					(M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0]) || e
				);
			}
			function De(e) {
				return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
			}
			function He(e) {
				return (
					"true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e
				);
			}
			function Re(e, t) {
				var n, r, i, o, a, l;
				if (1 === t.nodeType) {
					if (Q.hasData(e) && (l = Q.get(e).events))
						for (i in (Q.remove(t, "handle events"), l))
							for (n = 0, r = l[i].length; n < r; n++) C.event.add(t, i, l[i][n]);
					J.hasData(e) && ((o = J.access(e)), (a = C.extend({}, o)), J.set(t, a));
				}
			}
			function je(e, t) {
				var n = t.nodeName.toLowerCase();
				"input" === n && pe.test(e.type)
					? (t.checked = e.checked)
					: ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
			}
			function Ie(e, t, n, r) {
				t = s(t);
				var i,
					o,
					a,
					l,
					u,
					c,
					f = 0,
					d = e.length,
					p = d - 1,
					h = t[0],
					m = v(h);
				if (m || (d > 1 && "string" == typeof h && !g.checkClone && Ne.test(h)))
					return e.each(function (i) {
						var o = e.eq(i);
						m && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
					});
				if (
					d &&
					((o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
					1 === i.childNodes.length && (i = o),
					o || r)
				) {
					for (l = (a = C.map(ve(i, "script"), De)).length; f < d; f++)
						(u = i),
							f !== p && ((u = C.clone(u, !0, !0)), l && C.merge(a, ve(u, "script"))),
							n.call(e[f], u, f);
					if (l)
						for (c = a[a.length - 1].ownerDocument, C.map(a, He), f = 0; f < l; f++)
							(u = a[f]),
								me.test(u.type || "") &&
									!Q.access(u, "globalEval") &&
									C.contains(c, u) &&
									(u.src && "module" !== (u.type || "").toLowerCase()
										? C._evalUrl &&
										  !u.noModule &&
										  C._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, c)
										: w(u.textContent.replace(Ee, ""), u, c));
				}
				return e;
			}
			function We(e, t, n) {
				for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
					n || 1 !== r.nodeType || C.cleanData(ve(r)),
						r.parentNode && (n && ae(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
				return e;
			}
			C.extend({
				htmlPrefilter: function (e) {
					return e;
				},
				clone: function (e, t, n) {
					var r,
						i,
						o,
						a,
						l = e.cloneNode(!0),
						s = ae(e);
					if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
						for (a = ve(l), r = 0, i = (o = ve(e)).length; r < i; r++) je(o[r], a[r]);
					if (t)
						if (n) for (o = o || ve(e), a = a || ve(l), r = 0, i = o.length; r < i; r++) Re(o[r], a[r]);
						else Re(e, l);
					return (a = ve(l, "script")).length > 0 && ye(a, !s && ve(e, "script")), l;
				},
				cleanData: function (e) {
					for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
						if (K(n)) {
							if ((t = n[Q.expando])) {
								if (t.events)
									for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
								n[Q.expando] = void 0;
							}
							n[J.expando] && (n[J.expando] = void 0);
						}
				},
			}),
				C.fn.extend({
					detach: function (e) {
						return We(this, e, !0);
					},
					remove: function (e) {
						return We(this, e);
					},
					text: function (e) {
						return $(
							this,
							function (e) {
								return void 0 === e
									? C.text(this)
									: this.empty().each(function () {
											(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
												(this.textContent = e);
									  });
							},
							null,
							e,
							arguments.length
						);
					},
					append: function () {
						return Ie(this, arguments, function (e) {
							(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
								Pe(this, e).appendChild(e);
						});
					},
					prepend: function () {
						return Ie(this, arguments, function (e) {
							if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
								var t = Pe(this, e);
								t.insertBefore(e, t.firstChild);
							}
						});
					},
					before: function () {
						return Ie(this, arguments, function (e) {
							this.parentNode && this.parentNode.insertBefore(e, this);
						});
					},
					after: function () {
						return Ie(this, arguments, function (e) {
							this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
						});
					},
					empty: function () {
						for (var e, t = 0; null != (e = this[t]); t++)
							1 === e.nodeType && (C.cleanData(ve(e, !1)), (e.textContent = ""));
						return this;
					},
					clone: function (e, t) {
						return (
							(e = null != e && e),
							(t = null == t ? e : t),
							this.map(function () {
								return C.clone(this, e, t);
							})
						);
					},
					html: function (e) {
						return $(
							this,
							function (e) {
								var t = this[0] || {},
									n = 0,
									r = this.length;
								if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
								if (
									"string" == typeof e &&
									!Me.test(e) &&
									!ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
								) {
									e = C.htmlPrefilter(e);
									try {
										for (; n < r; n++)
											1 === (t = this[n] || {}).nodeType &&
												(C.cleanData(ve(t, !1)), (t.innerHTML = e));
										t = 0;
									} catch (e) {}
								}
								t && this.empty().append(e);
							},
							null,
							e,
							arguments.length
						);
					},
					replaceWith: function () {
						var e = [];
						return Ie(
							this,
							arguments,
							function (t) {
								var n = this.parentNode;
								C.inArray(this, e) < 0 && (C.cleanData(ve(this)), n && n.replaceChild(t, this));
							},
							e
						);
					},
				}),
				C.each(
					{
						appendTo: "append",
						prependTo: "prepend",
						insertBefore: "before",
						insertAfter: "after",
						replaceAll: "replaceWith",
					},
					function (e, t) {
						C.fn[e] = function (e) {
							for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++)
								(n = a === o ? this : this.clone(!0)), C(i[a])[t](n), u.apply(r, n.get());
							return this.pushStack(r);
						};
					}
				);
			var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
				_e = function (e) {
					var t = e.ownerDocument.defaultView;
					return (t && t.opener) || (t = n), t.getComputedStyle(e);
				},
				Be = function (e, t, n) {
					var r,
						i,
						o = {};
					for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
					for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
					return r;
				},
				qe = new RegExp(ie.join("|"), "i");
			function ze(e, t, n) {
				var r,
					i,
					o,
					a,
					l = e.style;
				return (
					(n = n || _e(e)) &&
						("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)),
						!g.pixelBoxStyles() &&
							Fe.test(a) &&
							qe.test(t) &&
							((r = l.width),
							(i = l.minWidth),
							(o = l.maxWidth),
							(l.minWidth = l.maxWidth = l.width = a),
							(a = n.width),
							(l.width = r),
							(l.minWidth = i),
							(l.maxWidth = o))),
					void 0 !== a ? a + "" : a
				);
			}
			function $e(e, t) {
				return {
					get: function () {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get;
					},
				};
			}
			!(function () {
				function e() {
					if (c) {
						(u.style.cssText =
							"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
							(c.style.cssText =
								"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
							oe.appendChild(u).appendChild(c);
						var e = n.getComputedStyle(c);
						(r = "1%" !== e.top),
							(s = 12 === t(e.marginLeft)),
							(c.style.right = "60%"),
							(a = 36 === t(e.right)),
							(i = 36 === t(e.width)),
							(c.style.position = "absolute"),
							(o = 12 === t(c.offsetWidth / 3)),
							oe.removeChild(u),
							(c = null);
					}
				}
				function t(e) {
					return Math.round(parseFloat(e));
				}
				var r,
					i,
					o,
					a,
					l,
					s,
					u = b.createElement("div"),
					c = b.createElement("div");
				c.style &&
					((c.style.backgroundClip = "content-box"),
					(c.cloneNode(!0).style.backgroundClip = ""),
					(g.clearCloneStyle = "content-box" === c.style.backgroundClip),
					C.extend(g, {
						boxSizingReliable: function () {
							return e(), i;
						},
						pixelBoxStyles: function () {
							return e(), a;
						},
						pixelPosition: function () {
							return e(), r;
						},
						reliableMarginLeft: function () {
							return e(), s;
						},
						scrollboxSize: function () {
							return e(), o;
						},
						reliableTrDimensions: function () {
							var e, t, r, i;
							return (
								null == l &&
									((e = b.createElement("table")),
									(t = b.createElement("tr")),
									(r = b.createElement("div")),
									(e.style.cssText = "position:absolute;left:-11111px"),
									(t.style.height = "1px"),
									(r.style.height = "9px"),
									oe.appendChild(e).appendChild(t).appendChild(r),
									(i = n.getComputedStyle(t)),
									(l = parseInt(i.height) > 3),
									oe.removeChild(e)),
								l
							);
						},
					}));
			})();
			var Ue = ["Webkit", "Moz", "ms"],
				Ve = b.createElement("div").style,
				Ge = {};
			function Xe(e) {
				var t = C.cssProps[e] || Ge[e];
				return (
					t ||
					(e in Ve
						? e
						: (Ge[e] =
								(function (e) {
									for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; )
										if ((e = Ue[n] + t) in Ve) return e;
								})(e) || e))
				);
			}
			var Ke = /^(none|table(?!-c[ea]).+)/,
				Ye = /^--/,
				Qe = {position: "absolute", visibility: "hidden", display: "block"},
				Je = {letterSpacing: "0", fontWeight: "400"};
			function Ze(e, t, n) {
				var r = re.exec(t);
				return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
			}
			function et(e, t, n, r, i, o) {
				var a = "width" === t ? 1 : 0,
					l = 0,
					s = 0;
				if (n === (r ? "border" : "content")) return 0;
				for (; a < 4; a += 2)
					"margin" === n && (s += C.css(e, n + ie[a], !0, i)),
						r
							? ("content" === n && (s -= C.css(e, "padding" + ie[a], !0, i)),
							  "margin" !== n && (s -= C.css(e, "border" + ie[a] + "Width", !0, i)))
							: ((s += C.css(e, "padding" + ie[a], !0, i)),
							  "padding" !== n
									? (s += C.css(e, "border" + ie[a] + "Width", !0, i))
									: (l += C.css(e, "border" + ie[a] + "Width", !0, i)));
				return (
					!r &&
						o >= 0 &&
						(s +=
							Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - l - 0.5)) ||
							0),
					s
				);
			}
			function tt(e, t, n) {
				var r = _e(e),
					i = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
					o = i,
					a = ze(e, t, r),
					l = "offset" + t[0].toUpperCase() + t.slice(1);
				if (Fe.test(a)) {
					if (!n) return a;
					a = "auto";
				}
				return (
					((!g.boxSizingReliable() && i) ||
						(!g.reliableTrDimensions() && M(e, "tr")) ||
						"auto" === a ||
						(!parseFloat(a) && "inline" === C.css(e, "display", !1, r))) &&
						e.getClientRects().length &&
						((i = "border-box" === C.css(e, "boxSizing", !1, r)), (o = l in e) && (a = e[l])),
					(a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
				);
			}
			function nt(e, t, n, r, i) {
				return new nt.prototype.init(e, t, n, r, i);
			}
			C.extend({
				cssHooks: {
					opacity: {
						get: function (e, t) {
							if (t) {
								var n = ze(e, "opacity");
								return "" === n ? "1" : n;
							}
						},
					},
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
				},
				cssProps: {},
				style: function (e, t, n, r) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var i,
							o,
							a,
							l = X(t),
							s = Ye.test(t),
							u = e.style;
						if ((s || (t = Xe(l)), (a = C.cssHooks[t] || C.cssHooks[l]), void 0 === n))
							return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
						"string" === (o = typeof n) && (i = re.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
							null != n &&
								n == n &&
								("number" !== o || s || (n += (i && i[3]) || (C.cssNumber[l] ? "" : "px")),
								g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
								(a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
									(s ? u.setProperty(t, n) : (u[t] = n)));
					}
				},
				css: function (e, t, n, r) {
					var i,
						o,
						a,
						l = X(t);
					return (
						Ye.test(t) || (t = Xe(l)),
						(a = C.cssHooks[t] || C.cssHooks[l]) && "get" in a && (i = a.get(e, !0, n)),
						void 0 === i && (i = ze(e, t, r)),
						"normal" === i && t in Je && (i = Je[t]),
						"" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
					);
				},
			}),
				C.each(["height", "width"], function (e, t) {
					C.cssHooks[t] = {
						get: function (e, n, r) {
							if (n)
								return !Ke.test(C.css(e, "display")) ||
									(e.getClientRects().length && e.getBoundingClientRect().width)
									? tt(e, t, r)
									: Be(e, Qe, function () {
											return tt(e, t, r);
									  });
						},
						set: function (e, n, r) {
							var i,
								o = _e(e),
								a = !g.scrollboxSize() && "absolute" === o.position,
								l = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
								s = r ? et(e, t, r, l, o) : 0;
							return (
								l &&
									a &&
									(s -= Math.ceil(
										e["offset" + t[0].toUpperCase() + t.slice(1)] -
											parseFloat(o[t]) -
											et(e, t, "border", !1, o) -
											0.5
									)),
								s &&
									(i = re.exec(n)) &&
									"px" !== (i[3] || "px") &&
									((e.style[t] = n), (n = C.css(e, t))),
								Ze(0, n, s)
							);
						},
					};
				}),
				(C.cssHooks.marginLeft = $e(g.reliableMarginLeft, function (e, t) {
					if (t)
						return (
							(parseFloat(ze(e, "marginLeft")) ||
								e.getBoundingClientRect().left -
									Be(e, {marginLeft: 0}, function () {
										return e.getBoundingClientRect().left;
									})) + "px"
						);
				})),
				C.each({margin: "", padding: "", border: "Width"}, function (e, t) {
					(C.cssHooks[e + t] = {
						expand: function (n) {
							for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
								i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
							return i;
						},
					}),
						"margin" !== e && (C.cssHooks[e + t].set = Ze);
				}),
				C.fn.extend({
					css: function (e, t) {
						return $(
							this,
							function (e, t, n) {
								var r,
									i,
									o = {},
									a = 0;
								if (Array.isArray(t)) {
									for (r = _e(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
									return o;
								}
								return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
							},
							e,
							t,
							arguments.length > 1
						);
					},
				}),
				(C.Tween = nt),
				(nt.prototype = {
					constructor: nt,
					init: function (e, t, n, r, i, o) {
						(this.elem = e),
							(this.prop = n),
							(this.easing = i || C.easing._default),
							(this.options = t),
							(this.start = this.now = this.cur()),
							(this.end = r),
							(this.unit = o || (C.cssNumber[n] ? "" : "px"));
					},
					cur: function () {
						var e = nt.propHooks[this.prop];
						return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
					},
					run: function (e) {
						var t,
							n = nt.propHooks[this.prop];
						return (
							this.options.duration
								? (this.pos = t =
										C.easing[this.easing](
											e,
											this.options.duration * e,
											0,
											1,
											this.options.duration
										))
								: (this.pos = t = e),
							(this.now = (this.end - this.start) * t + this.start),
							this.options.step && this.options.step.call(this.elem, this.now, this),
							n && n.set ? n.set(this) : nt.propHooks._default.set(this),
							this
						);
					},
				}),
				(nt.prototype.init.prototype = nt.prototype),
				(nt.propHooks = {
					_default: {
						get: function (e) {
							var t;
							return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
								? e.elem[e.prop]
								: (t = C.css(e.elem, e.prop, "")) && "auto" !== t
								? t
								: 0;
						},
						set: function (e) {
							C.fx.step[e.prop]
								? C.fx.step[e.prop](e)
								: 1 !== e.elem.nodeType || (!C.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
								? (e.elem[e.prop] = e.now)
								: C.style(e.elem, e.prop, e.now + e.unit);
						},
					},
				}),
				(nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
					{
						set: function (e) {
							e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
						},
					}),
				(C.easing = {
					linear: function (e) {
						return e;
					},
					swing: function (e) {
						return 0.5 - Math.cos(e * Math.PI) / 2;
					},
					_default: "swing",
				}),
				(C.fx = nt.prototype.init),
				(C.fx.step = {});
			var rt,
				it,
				ot = /^(?:toggle|show|hide)$/,
				at = /queueHooks$/;
			function lt() {
				it &&
					(!1 === b.hidden && n.requestAnimationFrame
						? n.requestAnimationFrame(lt)
						: n.setTimeout(lt, C.fx.interval),
					C.fx.tick());
			}
			function st() {
				return (
					n.setTimeout(function () {
						rt = void 0;
					}),
					(rt = Date.now())
				);
			}
			function ut(e, t) {
				var n,
					r = 0,
					i = {height: e};
				for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
				return t && (i.opacity = i.width = e), i;
			}
			function ct(e, t, n) {
				for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
					if ((r = i[o].call(n, t, e))) return r;
			}
			function ft(e, t, n) {
				var r,
					i,
					o = 0,
					a = ft.prefilters.length,
					l = C.Deferred().always(function () {
						delete s.elem;
					}),
					s = function () {
						if (i) return !1;
						for (
							var t = rt || st(),
								n = Math.max(0, u.startTime + u.duration - t),
								r = 1 - (n / u.duration || 0),
								o = 0,
								a = u.tweens.length;
							o < a;
							o++
						)
							u.tweens[o].run(r);
						return (
							l.notifyWith(e, [u, r, n]),
							r < 1 && a ? n : (a || l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u]), !1)
						);
					},
					u = l.promise({
						elem: e,
						props: C.extend({}, t),
						opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: rt || st(),
						duration: n.duration,
						tweens: [],
						createTween: function (t, n) {
							var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
							return u.tweens.push(r), r;
						},
						stop: function (t) {
							var n = 0,
								r = t ? u.tweens.length : 0;
							if (i) return this;
							for (i = !0; n < r; n++) u.tweens[n].run(1);
							return (
								t ? (l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u, t])) : l.rejectWith(e, [u, t]),
								this
							);
						},
					}),
					c = u.props;
				for (
					!(function (e, t) {
						var n, r, i, o, a;
						for (n in e)
							if (
								((i = t[(r = X(n))]),
								(o = e[n]),
								Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
								n !== r && ((e[r] = o), delete e[n]),
								(a = C.cssHooks[r]) && ("expand" in a))
							)
								for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
							else t[r] = i;
					})(c, u.opts.specialEasing);
					o < a;
					o++
				)
					if ((r = ft.prefilters[o].call(u, e, c, u.opts)))
						return v(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
				return (
					C.map(c, ct, u),
					v(u.opts.start) && u.opts.start.call(e, u),
					u
						.progress(u.opts.progress)
						.done(u.opts.done, u.opts.complete)
						.fail(u.opts.fail)
						.always(u.opts.always),
					C.fx.timer(C.extend(s, {elem: e, anim: u, queue: u.opts.queue})),
					u
				);
			}
			(C.Animation = C.extend(ft, {
				tweeners: {
					"*": [
						function (e, t) {
							var n = this.createTween(e, t);
							return ue(n.elem, e, re.exec(t), n), n;
						},
					],
				},
				tweener: function (e, t) {
					v(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
					for (var n, r = 0, i = e.length; r < i; r++)
						(n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
				},
				prefilters: [
					function (e, t, n) {
						var r,
							i,
							o,
							a,
							l,
							s,
							u,
							c,
							f = "width" in t || "height" in t,
							d = this,
							p = {},
							h = e.style,
							m = e.nodeType && se(e),
							g = Q.get(e, "fxshow");
						for (r in (n.queue ||
							(null == (a = C._queueHooks(e, "fx")).unqueued &&
								((a.unqueued = 0),
								(l = a.empty.fire),
								(a.empty.fire = function () {
									a.unqueued || l();
								})),
							a.unqueued++,
							d.always(function () {
								d.always(function () {
									a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
								});
							})),
						t))
							if (((i = t[r]), ot.test(i))) {
								if ((delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))) {
									if ("show" !== i || !g || void 0 === g[r]) continue;
									m = !0;
								}
								p[r] = (g && g[r]) || C.style(e, r);
							}
						if ((s = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
							for (r in (f &&
								1 === e.nodeType &&
								((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
								null == (u = g && g.display) && (u = Q.get(e, "display")),
								"none" === (c = C.css(e, "display")) &&
									(u
										? (c = u)
										: (de([e], !0),
										  (u = e.style.display || u),
										  (c = C.css(e, "display")),
										  de([e]))),
								("inline" === c || ("inline-block" === c && null != u)) &&
									"none" === C.css(e, "float") &&
									(s ||
										(d.done(function () {
											h.display = u;
										}),
										null == u && ((c = h.display), (u = "none" === c ? "" : c))),
									(h.display = "inline-block"))),
							n.overflow &&
								((h.overflow = "hidden"),
								d.always(function () {
									(h.overflow = n.overflow[0]),
										(h.overflowX = n.overflow[1]),
										(h.overflowY = n.overflow[2]);
								})),
							(s = !1),
							p))
								s ||
									(g ? "hidden" in g && (m = g.hidden) : (g = Q.access(e, "fxshow", {display: u})),
									o && (g.hidden = !m),
									m && de([e], !0),
									d.done(function () {
										for (r in (m || de([e]), Q.remove(e, "fxshow"), p)) C.style(e, r, p[r]);
									})),
									(s = ct(m ? g[r] : 0, r, d)),
									r in g || ((g[r] = s.start), m && ((s.end = s.start), (s.start = 0)));
					},
				],
				prefilter: function (e, t) {
					t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
				},
			})),
				(C.speed = function (e, t, n) {
					var r =
						e && "object" == typeof e
							? C.extend({}, e)
							: {
									complete: n || (!n && t) || (v(e) && e),
									duration: e,
									easing: (n && t) || (t && !v(t) && t),
							  };
					return (
						C.fx.off
							? (r.duration = 0)
							: "number" != typeof r.duration &&
							  (r.duration in C.fx.speeds
									? (r.duration = C.fx.speeds[r.duration])
									: (r.duration = C.fx.speeds._default)),
						(null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
						(r.old = r.complete),
						(r.complete = function () {
							v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
						}),
						r
					);
				}),
				C.fn.extend({
					fadeTo: function (e, t, n, r) {
						return this.filter(se).css("opacity", 0).show().end().animate({opacity: t}, e, n, r);
					},
					animate: function (e, t, n, r) {
						var i = C.isEmptyObject(e),
							o = C.speed(t, n, r),
							a = function () {
								var t = ft(this, C.extend({}, e), o);
								(i || Q.get(this, "finish")) && t.stop(!0);
							};
						return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
					},
					stop: function (e, t, n) {
						var r = function (e) {
							var t = e.stop;
							delete e.stop, t(n);
						};
						return (
							"string" != typeof e && ((n = t), (t = e), (e = void 0)),
							t && this.queue(e || "fx", []),
							this.each(function () {
								var t = !0,
									i = null != e && e + "queueHooks",
									o = C.timers,
									a = Q.get(this);
								if (i) a[i] && a[i].stop && r(a[i]);
								else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
								for (i = o.length; i--; )
									o[i].elem !== this ||
										(null != e && o[i].queue !== e) ||
										(o[i].anim.stop(n), (t = !1), o.splice(i, 1));
								(!t && n) || C.dequeue(this, e);
							})
						);
					},
					finish: function (e) {
						return (
							!1 !== e && (e = e || "fx"),
							this.each(function () {
								var t,
									n = Q.get(this),
									r = n[e + "queue"],
									i = n[e + "queueHooks"],
									o = C.timers,
									a = r ? r.length : 0;
								for (
									n.finish = !0,
										C.queue(this, e, []),
										i && i.stop && i.stop.call(this, !0),
										t = o.length;
									t--;

								)
									o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
								for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
								delete n.finish;
							})
						);
					},
				}),
				C.each(["toggle", "show", "hide"], function (e, t) {
					var n = C.fn[t];
					C.fn[t] = function (e, r, i) {
						return null == e || "boolean" == typeof e
							? n.apply(this, arguments)
							: this.animate(ut(t, !0), e, r, i);
					};
				}),
				C.each(
					{
						slideDown: ut("show"),
						slideUp: ut("hide"),
						slideToggle: ut("toggle"),
						fadeIn: {opacity: "show"},
						fadeOut: {opacity: "hide"},
						fadeToggle: {opacity: "toggle"},
					},
					function (e, t) {
						C.fn[e] = function (e, n, r) {
							return this.animate(t, e, n, r);
						};
					}
				),
				(C.timers = []),
				(C.fx.tick = function () {
					var e,
						t = 0,
						n = C.timers;
					for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
					n.length || C.fx.stop(), (rt = void 0);
				}),
				(C.fx.timer = function (e) {
					C.timers.push(e), C.fx.start();
				}),
				(C.fx.interval = 13),
				(C.fx.start = function () {
					it || ((it = !0), lt());
				}),
				(C.fx.stop = function () {
					it = null;
				}),
				(C.fx.speeds = {slow: 600, fast: 200, _default: 400}),
				(C.fn.delay = function (e, t) {
					return (
						(e = (C.fx && C.fx.speeds[e]) || e),
						(t = t || "fx"),
						this.queue(t, function (t, r) {
							var i = n.setTimeout(t, e);
							r.stop = function () {
								n.clearTimeout(i);
							};
						})
					);
				}),
				(function () {
					var e = b.createElement("input"),
						t = b.createElement("select").appendChild(b.createElement("option"));
					(e.type = "checkbox"),
						(g.checkOn = "" !== e.value),
						(g.optSelected = t.selected),
						((e = b.createElement("input")).value = "t"),
						(e.type = "radio"),
						(g.radioValue = "t" === e.value);
				})();
			var dt,
				pt = C.expr.attrHandle;
			C.fn.extend({
				attr: function (e, t) {
					return $(this, C.attr, e, t, arguments.length > 1);
				},
				removeAttr: function (e) {
					return this.each(function () {
						C.removeAttr(this, e);
					});
				},
			}),
				C.extend({
					attr: function (e, t, n) {
						var r,
							i,
							o = e.nodeType;
						if (3 !== o && 8 !== o && 2 !== o)
							return void 0 === e.getAttribute
								? C.prop(e, t, n)
								: ((1 === o && C.isXMLDoc(e)) ||
										(i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)),
								  void 0 !== n
										? null === n
											? void C.removeAttr(e, t)
											: i && "set" in i && void 0 !== (r = i.set(e, n, t))
											? r
											: (e.setAttribute(t, n + ""), n)
										: i && "get" in i && null !== (r = i.get(e, t))
										? r
										: null == (r = C.find.attr(e, t))
										? void 0
										: r);
					},
					attrHooks: {
						type: {
							set: function (e, t) {
								if (!g.radioValue && "radio" === t && M(e, "input")) {
									var n = e.value;
									return e.setAttribute("type", t), n && (e.value = n), t;
								}
							},
						},
					},
					removeAttr: function (e, t) {
						var n,
							r = 0,
							i = t && t.match(I);
						if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
					},
				}),
				(dt = {
					set: function (e, t, n) {
						return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
					},
				}),
				C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
					var n = pt[t] || C.find.attr;
					pt[t] = function (e, t, r) {
						var i,
							o,
							a = t.toLowerCase();
						return r || ((o = pt[a]), (pt[a] = i), (i = null != n(e, t, r) ? a : null), (pt[a] = o)), i;
					};
				});
			var ht = /^(?:input|select|textarea|button)$/i,
				mt = /^(?:a|area)$/i;
			function gt(e) {
				return (e.match(I) || []).join(" ");
			}
			function vt(e) {
				return (e.getAttribute && e.getAttribute("class")) || "";
			}
			function yt(e) {
				return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
			}
			C.fn.extend({
				prop: function (e, t) {
					return $(this, C.prop, e, t, arguments.length > 1);
				},
				removeProp: function (e) {
					return this.each(function () {
						delete this[C.propFix[e] || e];
					});
				},
			}),
				C.extend({
					prop: function (e, t, n) {
						var r,
							i,
							o = e.nodeType;
						if (3 !== o && 8 !== o && 2 !== o)
							return (
								(1 === o && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (i = C.propHooks[t])),
								void 0 !== n
									? i && "set" in i && void 0 !== (r = i.set(e, n, t))
										? r
										: (e[t] = n)
									: i && "get" in i && null !== (r = i.get(e, t))
									? r
									: e[t]
							);
					},
					propHooks: {
						tabIndex: {
							get: function (e) {
								var t = C.find.attr(e, "tabindex");
								return t
									? parseInt(t, 10)
									: ht.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
									? 0
									: -1;
							},
						},
					},
					propFix: {for: "htmlFor", class: "className"},
				}),
				g.optSelected ||
					(C.propHooks.selected = {
						get: function (e) {
							var t = e.parentNode;
							return t && t.parentNode && t.parentNode.selectedIndex, null;
						},
						set: function (e) {
							var t = e.parentNode;
							t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
						},
					}),
				C.each(
					[
						"tabIndex",
						"readOnly",
						"maxLength",
						"cellSpacing",
						"cellPadding",
						"rowSpan",
						"colSpan",
						"useMap",
						"frameBorder",
						"contentEditable",
					],
					function () {
						C.propFix[this.toLowerCase()] = this;
					}
				),
				C.fn.extend({
					addClass: function (e) {
						var t,
							n,
							r,
							i,
							o,
							a,
							l,
							s = 0;
						if (v(e))
							return this.each(function (t) {
								C(this).addClass(e.call(this, t, vt(this)));
							});
						if ((t = yt(e)).length)
							for (; (n = this[s++]); )
								if (((i = vt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))) {
									for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
									i !== (l = gt(r)) && n.setAttribute("class", l);
								}
						return this;
					},
					removeClass: function (e) {
						var t,
							n,
							r,
							i,
							o,
							a,
							l,
							s = 0;
						if (v(e))
							return this.each(function (t) {
								C(this).removeClass(e.call(this, t, vt(this)));
							});
						if (!arguments.length) return this.attr("class", "");
						if ((t = yt(e)).length)
							for (; (n = this[s++]); )
								if (((i = vt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))) {
									for (a = 0; (o = t[a++]); )
										for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
									i !== (l = gt(r)) && n.setAttribute("class", l);
								}
						return this;
					},
					toggleClass: function (e, t) {
						var n = typeof e,
							r = "string" === n || Array.isArray(e);
						return "boolean" == typeof t && r
							? t
								? this.addClass(e)
								: this.removeClass(e)
							: v(e)
							? this.each(function (n) {
									C(this).toggleClass(e.call(this, n, vt(this), t), t);
							  })
							: this.each(function () {
									var t, i, o, a;
									if (r)
										for (i = 0, o = C(this), a = yt(e); (t = a[i++]); )
											o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
									else
										(void 0 !== e && "boolean" !== n) ||
											((t = vt(this)) && Q.set(this, "__className__", t),
											this.setAttribute &&
												this.setAttribute(
													"class",
													t || !1 === e ? "" : Q.get(this, "__className__") || ""
												));
							  });
					},
					hasClass: function (e) {
						var t,
							n,
							r = 0;
						for (t = " " + e + " "; (n = this[r++]); )
							if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
						return !1;
					},
				});
			var bt = /\r/g;
			C.fn.extend({
				val: function (e) {
					var t,
						n,
						r,
						i = this[0];
					return arguments.length
						? ((r = v(e)),
						  this.each(function (n) {
								var i;
								1 === this.nodeType &&
									(null == (i = r ? e.call(this, n, C(this).val()) : e)
										? (i = "")
										: "number" == typeof i
										? (i += "")
										: Array.isArray(i) &&
										  (i = C.map(i, function (e) {
												return null == e ? "" : e + "";
										  })),
									((t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) &&
										"set" in t &&
										void 0 !== t.set(this, i, "value")) ||
										(this.value = i));
						  }))
						: i
						? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
						  "get" in t &&
						  void 0 !== (n = t.get(i, "value"))
							? n
							: "string" == typeof (n = i.value)
							? n.replace(bt, "")
							: null == n
							? ""
							: n
						: void 0;
				},
			}),
				C.extend({
					valHooks: {
						option: {
							get: function (e) {
								var t = C.find.attr(e, "value");
								return null != t ? t : gt(C.text(e));
							},
						},
						select: {
							get: function (e) {
								var t,
									n,
									r,
									i = e.options,
									o = e.selectedIndex,
									a = "select-one" === e.type,
									l = a ? null : [],
									s = a ? o + 1 : i.length;
								for (r = o < 0 ? s : a ? o : 0; r < s; r++)
									if (
										((n = i[r]).selected || r === o) &&
										!n.disabled &&
										(!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
									) {
										if (((t = C(n).val()), a)) return t;
										l.push(t);
									}
								return l;
							},
							set: function (e, t) {
								for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--; )
									((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
								return n || (e.selectedIndex = -1), o;
							},
						},
					},
				}),
				C.each(["radio", "checkbox"], function () {
					(C.valHooks[this] = {
						set: function (e, t) {
							if (Array.isArray(t)) return (e.checked = C.inArray(C(e).val(), t) > -1);
						},
					}),
						g.checkOn ||
							(C.valHooks[this].get = function (e) {
								return null === e.getAttribute("value") ? "on" : e.value;
							});
				}),
				(g.focusin = "onfocusin" in n);
			var xt = /^(?:focusinfocus|focusoutblur)$/,
				wt = function (e) {
					e.stopPropagation();
				};
			C.extend(C.event, {
				trigger: function (e, t, r, i) {
					var o,
						a,
						l,
						s,
						u,
						c,
						f,
						d,
						h = [r || b],
						m = p.call(e, "type") ? e.type : e,
						g = p.call(e, "namespace") ? e.namespace.split(".") : [];
					if (
						((a = d = l = r = r || b),
						3 !== r.nodeType &&
							8 !== r.nodeType &&
							!xt.test(m + C.event.triggered) &&
							(m.indexOf(".") > -1 && ((m = (g = m.split(".")).shift()), g.sort()),
							(u = m.indexOf(":") < 0 && "on" + m),
							((e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
							(e.namespace = g.join(".")),
							(e.rnamespace = e.namespace
								? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
								: null),
							(e.result = void 0),
							e.target || (e.target = r),
							(t = null == t ? [e] : C.makeArray(t, [e])),
							(f = C.event.special[m] || {}),
							i || !f.trigger || !1 !== f.trigger.apply(r, t)))
					) {
						if (!i && !f.noBubble && !y(r)) {
							for (s = f.delegateType || m, xt.test(s + m) || (a = a.parentNode); a; a = a.parentNode)
								h.push(a), (l = a);
							l === (r.ownerDocument || b) && h.push(l.defaultView || l.parentWindow || n);
						}
						for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
							(d = a),
								(e.type = o > 1 ? s : f.bindType || m),
								(c = (Q.get(a, "events") || Object.create(null))[e.type] && Q.get(a, "handle")) &&
									c.apply(a, t),
								(c = u && a[u]) &&
									c.apply &&
									K(a) &&
									((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
						return (
							(e.type = m),
							i ||
								e.isDefaultPrevented() ||
								(f._default && !1 !== f._default.apply(h.pop(), t)) ||
								!K(r) ||
								(u &&
									v(r[m]) &&
									!y(r) &&
									((l = r[u]) && (r[u] = null),
									(C.event.triggered = m),
									e.isPropagationStopped() && d.addEventListener(m, wt),
									r[m](),
									e.isPropagationStopped() && d.removeEventListener(m, wt),
									(C.event.triggered = void 0),
									l && (r[u] = l))),
							e.result
						);
					}
				},
				simulate: function (e, t, n) {
					var r = C.extend(new C.Event(), n, {type: e, isSimulated: !0});
					C.event.trigger(r, null, t);
				},
			}),
				C.fn.extend({
					trigger: function (e, t) {
						return this.each(function () {
							C.event.trigger(e, t, this);
						});
					},
					triggerHandler: function (e, t) {
						var n = this[0];
						if (n) return C.event.trigger(e, t, n, !0);
					},
				}),
				g.focusin ||
					C.each({focus: "focusin", blur: "focusout"}, function (e, t) {
						var n = function (e) {
							C.event.simulate(t, e.target, C.event.fix(e));
						};
						C.event.special[t] = {
							setup: function () {
								var r = this.ownerDocument || this.document || this,
									i = Q.access(r, t);
								i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
							},
							teardown: function () {
								var r = this.ownerDocument || this.document || this,
									i = Q.access(r, t) - 1;
								i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t));
							},
						};
					});
			var kt = n.location,
				Ct = {guid: Date.now()},
				St = /\?/;
			C.parseXML = function (e) {
				var t;
				if (!e || "string" != typeof e) return null;
				try {
					t = new n.DOMParser().parseFromString(e, "text/xml");
				} catch (e) {
					t = void 0;
				}
				return (t && !t.getElementsByTagName("parsererror").length) || C.error("Invalid XML: " + e), t;
			};
			var Tt = /\[\]$/,
				Lt = /\r?\n/g,
				Ot = /^(?:submit|button|image|reset|file)$/i,
				At = /^(?:input|select|textarea|keygen)/i;
			function Mt(e, t, n, r) {
				var i;
				if (Array.isArray(t))
					C.each(t, function (t, i) {
						n || Tt.test(e)
							? r(e, i)
							: Mt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
					});
				else if (n || "object" !== k(t)) r(e, t);
				else for (i in t) Mt(e + "[" + i + "]", t[i], n, r);
			}
			(C.param = function (e, t) {
				var n,
					r = [],
					i = function (e, t) {
						var n = v(t) ? t() : t;
						r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
					};
				if (null == e) return "";
				if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
					C.each(e, function () {
						i(this.name, this.value);
					});
				else for (n in e) Mt(n, e[n], t, i);
				return r.join("&");
			}),
				C.fn.extend({
					serialize: function () {
						return C.param(this.serializeArray());
					},
					serializeArray: function () {
						return this.map(function () {
							var e = C.prop(this, "elements");
							return e ? C.makeArray(e) : this;
						})
							.filter(function () {
								var e = this.type;
								return (
									this.name &&
									!C(this).is(":disabled") &&
									At.test(this.nodeName) &&
									!Ot.test(e) &&
									(this.checked || !pe.test(e))
								);
							})
							.map(function (e, t) {
								var n = C(this).val();
								return null == n
									? null
									: Array.isArray(n)
									? C.map(n, function (e) {
											return {name: t.name, value: e.replace(Lt, "\r\n")};
									  })
									: {name: t.name, value: n.replace(Lt, "\r\n")};
							})
							.get();
					},
				});
			var Nt = /%20/g,
				Et = /#.*$/,
				Pt = /([?&])_=[^&]*/,
				Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Ht = /^(?:GET|HEAD)$/,
				Rt = /^\/\//,
				jt = {},
				It = {},
				Wt = "*/".concat("*"),
				Ft = b.createElement("a");
			function _t(e) {
				return function (t, n) {
					"string" != typeof t && ((n = t), (t = "*"));
					var r,
						i = 0,
						o = t.toLowerCase().match(I) || [];
					if (v(n))
						for (; (r = o[i++]); )
							"+" === r[0]
								? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
								: (e[r] = e[r] || []).push(n);
				};
			}
			function Bt(e, t, n, r) {
				var i = {},
					o = e === It;
				function a(l) {
					var s;
					return (
						(i[l] = !0),
						C.each(e[l] || [], function (e, l) {
							var u = l(t, n, r);
							return "string" != typeof u || o || i[u]
								? o
									? !(s = u)
									: void 0
								: (t.dataTypes.unshift(u), a(u), !1);
						}),
						s
					);
				}
				return a(t.dataTypes[0]) || (!i["*"] && a("*"));
			}
			function qt(e, t) {
				var n,
					r,
					i = C.ajaxSettings.flatOptions || {};
				for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
				return r && C.extend(!0, e, r), e;
			}
			(Ft.href = kt.href),
				C.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: kt.href,
						type: "GET",
						isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
						global: !0,
						processData: !0,
						async: !0,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						accepts: {
							"*": Wt,
							text: "text/plain",
							html: "text/html",
							xml: "application/xml, text/xml",
							json: "application/json, text/javascript",
						},
						contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
						responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
						converters: {
							"* text": String,
							"text html": !0,
							"text json": JSON.parse,
							"text xml": C.parseXML,
						},
						flatOptions: {url: !0, context: !0},
					},
					ajaxSetup: function (e, t) {
						return t ? qt(qt(e, C.ajaxSettings), t) : qt(C.ajaxSettings, e);
					},
					ajaxPrefilter: _t(jt),
					ajaxTransport: _t(It),
					ajax: function (e, t) {
						"object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
						var r,
							i,
							o,
							a,
							l,
							s,
							u,
							c,
							f,
							d,
							p = C.ajaxSetup({}, t),
							h = p.context || p,
							m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
							g = C.Deferred(),
							v = C.Callbacks("once memory"),
							y = p.statusCode || {},
							x = {},
							w = {},
							k = "canceled",
							S = {
								readyState: 0,
								getResponseHeader: function (e) {
									var t;
									if (u) {
										if (!a)
											for (a = {}; (t = Dt.exec(o)); )
												a[t[1].toLowerCase() + " "] = (
													a[t[1].toLowerCase() + " "] || []
												).concat(t[2]);
										t = a[e.toLowerCase() + " "];
									}
									return null == t ? null : t.join(", ");
								},
								getAllResponseHeaders: function () {
									return u ? o : null;
								},
								setRequestHeader: function (e, t) {
									return (
										null == u && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)),
										this
									);
								},
								overrideMimeType: function (e) {
									return null == u && (p.mimeType = e), this;
								},
								statusCode: function (e) {
									var t;
									if (e)
										if (u) S.always(e[S.status]);
										else for (t in e) y[t] = [y[t], e[t]];
									return this;
								},
								abort: function (e) {
									var t = e || k;
									return r && r.abort(t), T(0, t), this;
								},
							};
						if (
							(g.promise(S),
							(p.url = ((e || p.url || kt.href) + "").replace(Rt, kt.protocol + "//")),
							(p.type = t.method || t.type || p.method || p.type),
							(p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""]),
							null == p.crossDomain)
						) {
							s = b.createElement("a");
							try {
								(s.href = p.url),
									(s.href = s.href),
									(p.crossDomain = Ft.protocol + "//" + Ft.host != s.protocol + "//" + s.host);
							} catch (e) {
								p.crossDomain = !0;
							}
						}
						if (
							(p.data &&
								p.processData &&
								"string" != typeof p.data &&
								(p.data = C.param(p.data, p.traditional)),
							Bt(jt, p, t, S),
							u)
						)
							return S;
						for (f in ((c = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
						(p.type = p.type.toUpperCase()),
						(p.hasContent = !Ht.test(p.type)),
						(i = p.url.replace(Et, "")),
						p.hasContent
							? p.data &&
							  p.processData &&
							  0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") &&
							  (p.data = p.data.replace(Nt, "+"))
							: ((d = p.url.slice(i.length)),
							  p.data &&
									(p.processData || "string" == typeof p.data) &&
									((i += (St.test(i) ? "&" : "?") + p.data), delete p.data),
							  !1 === p.cache &&
									((i = i.replace(Pt, "$1")), (d = (St.test(i) ? "&" : "?") + "_=" + Ct.guid++ + d)),
							  (p.url = i + d)),
						p.ifModified &&
							(C.lastModified[i] && S.setRequestHeader("If-Modified-Since", C.lastModified[i]),
							C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])),
						((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) &&
							S.setRequestHeader("Content-Type", p.contentType),
						S.setRequestHeader(
							"Accept",
							p.dataTypes[0] && p.accepts[p.dataTypes[0]]
								? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
								: p.accepts["*"]
						),
						p.headers))
							S.setRequestHeader(f, p.headers[f]);
						if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || u)) return S.abort();
						if (
							((k = "abort"),
							v.add(p.complete),
							S.done(p.success),
							S.fail(p.error),
							(r = Bt(It, p, t, S)))
						) {
							if (((S.readyState = 1), c && m.trigger("ajaxSend", [S, p]), u)) return S;
							p.async &&
								p.timeout > 0 &&
								(l = n.setTimeout(function () {
									S.abort("timeout");
								}, p.timeout));
							try {
								(u = !1), r.send(x, T);
							} catch (e) {
								if (u) throw e;
								T(-1, e);
							}
						} else T(-1, "No Transport");
						function T(e, t, a, s) {
							var f,
								d,
								b,
								x,
								w,
								k = t;
							u ||
								((u = !0),
								l && n.clearTimeout(l),
								(r = void 0),
								(o = s || ""),
								(S.readyState = e > 0 ? 4 : 0),
								(f = (e >= 200 && e < 300) || 304 === e),
								a &&
									(x = (function (e, t, n) {
										for (var r, i, o, a, l = e.contents, s = e.dataTypes; "*" === s[0]; )
											s.shift(),
												void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
										if (r)
											for (i in l)
												if (l[i] && l[i].test(r)) {
													s.unshift(i);
													break;
												}
										if (s[0] in n) o = s[0];
										else {
											for (i in n) {
												if (!s[0] || e.converters[i + " " + s[0]]) {
													o = i;
													break;
												}
												a || (a = i);
											}
											o = o || a;
										}
										if (o) return o !== s[0] && s.unshift(o), n[o];
									})(p, S, a)),
								!f &&
									C.inArray("script", p.dataTypes) > -1 &&
									(p.converters["text script"] = function () {}),
								(x = (function (e, t, n, r) {
									var i,
										o,
										a,
										l,
										s,
										u = {},
										c = e.dataTypes.slice();
									if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
									for (o = c.shift(); o; )
										if (
											(e.responseFields[o] && (n[e.responseFields[o]] = t),
											!s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
											(s = o),
											(o = c.shift()))
										)
											if ("*" === o) o = s;
											else if ("*" !== s && s !== o) {
												if (!(a = u[s + " " + o] || u["* " + o]))
													for (i in u)
														if (
															(l = i.split(" "))[1] === o &&
															(a = u[s + " " + l[0]] || u["* " + l[0]])
														) {
															!0 === a
																? (a = u[i])
																: !0 !== u[i] && ((o = l[0]), c.unshift(l[1]));
															break;
														}
												if (!0 !== a)
													if (a && e.throws) t = a(t);
													else
														try {
															t = a(t);
														} catch (e) {
															return {
																state: "parsererror",
																error: a ? e : "No conversion from " + s + " to " + o,
															};
														}
											}
									return {state: "success", data: t};
								})(p, x, S, f)),
								f
									? (p.ifModified &&
											((w = S.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w),
											(w = S.getResponseHeader("etag")) && (C.etag[i] = w)),
									  204 === e || "HEAD" === p.type
											? (k = "nocontent")
											: 304 === e
											? (k = "notmodified")
											: ((k = x.state), (d = x.data), (f = !(b = x.error))))
									: ((b = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
								(S.status = e),
								(S.statusText = (t || k) + ""),
								f ? g.resolveWith(h, [d, k, S]) : g.rejectWith(h, [S, k, b]),
								S.statusCode(y),
								(y = void 0),
								c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [S, p, f ? d : b]),
								v.fireWith(h, [S, k]),
								c && (m.trigger("ajaxComplete", [S, p]), --C.active || C.event.trigger("ajaxStop")));
						}
						return S;
					},
					getJSON: function (e, t, n) {
						return C.get(e, t, n, "json");
					},
					getScript: function (e, t) {
						return C.get(e, void 0, t, "script");
					},
				}),
				C.each(["get", "post"], function (e, t) {
					C[t] = function (e, n, r, i) {
						return (
							v(n) && ((i = i || r), (r = n), (n = void 0)),
							C.ajax(
								C.extend({url: e, type: t, dataType: i, data: n, success: r}, C.isPlainObject(e) && e)
							)
						);
					};
				}),
				C.ajaxPrefilter(function (e) {
					var t;
					for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
				}),
				(C._evalUrl = function (e, t, n) {
					return C.ajax({
						url: e,
						type: "GET",
						dataType: "script",
						cache: !0,
						async: !1,
						global: !1,
						converters: {"text script": function () {}},
						dataFilter: function (e) {
							C.globalEval(e, t, n);
						},
					});
				}),
				C.fn.extend({
					wrapAll: function (e) {
						var t;
						return (
							this[0] &&
								(v(e) && (e = e.call(this[0])),
								(t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
								this[0].parentNode && t.insertBefore(this[0]),
								t
									.map(function () {
										for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
										return e;
									})
									.append(this)),
							this
						);
					},
					wrapInner: function (e) {
						return v(e)
							? this.each(function (t) {
									C(this).wrapInner(e.call(this, t));
							  })
							: this.each(function () {
									var t = C(this),
										n = t.contents();
									n.length ? n.wrapAll(e) : t.append(e);
							  });
					},
					wrap: function (e) {
						var t = v(e);
						return this.each(function (n) {
							C(this).wrapAll(t ? e.call(this, n) : e);
						});
					},
					unwrap: function (e) {
						return (
							this.parent(e)
								.not("body")
								.each(function () {
									C(this).replaceWith(this.childNodes);
								}),
							this
						);
					},
				}),
				(C.expr.pseudos.hidden = function (e) {
					return !C.expr.pseudos.visible(e);
				}),
				(C.expr.pseudos.visible = function (e) {
					return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
				}),
				(C.ajaxSettings.xhr = function () {
					try {
						return new n.XMLHttpRequest();
					} catch (e) {}
				});
			var zt = {0: 200, 1223: 204},
				$t = C.ajaxSettings.xhr();
			(g.cors = !!$t && "withCredentials" in $t),
				(g.ajax = $t = !!$t),
				C.ajaxTransport(function (e) {
					var t, r;
					if (g.cors || ($t && !e.crossDomain))
						return {
							send: function (i, o) {
								var a,
									l = e.xhr();
								if ((l.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
									for (a in e.xhrFields) l[a] = e.xhrFields[a];
								for (a in (e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType),
								e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
								i))
									l.setRequestHeader(a, i[a]);
								(t = function (e) {
									return function () {
										t &&
											((t =
												r =
												l.onload =
												l.onerror =
												l.onabort =
												l.ontimeout =
												l.onreadystatechange =
													null),
											"abort" === e
												? l.abort()
												: "error" === e
												? "number" != typeof l.status
													? o(0, "error")
													: o(l.status, l.statusText)
												: o(
														zt[l.status] || l.status,
														l.statusText,
														"text" !== (l.responseType || "text") ||
															"string" != typeof l.responseText
															? {binary: l.response}
															: {text: l.responseText},
														l.getAllResponseHeaders()
												  ));
									};
								}),
									(l.onload = t()),
									(r = l.onerror = l.ontimeout = t("error")),
									void 0 !== l.onabort
										? (l.onabort = r)
										: (l.onreadystatechange = function () {
												4 === l.readyState &&
													n.setTimeout(function () {
														t && r();
													});
										  }),
									(t = t("abort"));
								try {
									l.send((e.hasContent && e.data) || null);
								} catch (e) {
									if (t) throw e;
								}
							},
							abort: function () {
								t && t();
							},
						};
				}),
				C.ajaxPrefilter(function (e) {
					e.crossDomain && (e.contents.script = !1);
				}),
				C.ajaxSetup({
					accepts: {
						script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
					},
					contents: {script: /\b(?:java|ecma)script\b/},
					converters: {
						"text script": function (e) {
							return C.globalEval(e), e;
						},
					},
				}),
				C.ajaxPrefilter("script", function (e) {
					void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
				}),
				C.ajaxTransport("script", function (e) {
					var t, n;
					if (e.crossDomain || e.scriptAttrs)
						return {
							send: function (r, i) {
								(t = C("<script>")
									.attr(e.scriptAttrs || {})
									.prop({charset: e.scriptCharset, src: e.url})
									.on(
										"load error",
										(n = function (e) {
											t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
										})
									)),
									b.head.appendChild(t[0]);
							},
							abort: function () {
								n && n();
							},
						};
				});
			var Ut = [],
				Vt = /(=)\?(?=&|$)|\?\?/;
			C.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function () {
					var e = Ut.pop() || C.expando + "_" + Ct.guid++;
					return (this[e] = !0), e;
				},
			}),
				C.ajaxPrefilter("json jsonp", function (e, t, r) {
					var i,
						o,
						a,
						l =
							!1 !== e.jsonp &&
							(Vt.test(e.url)
								? "url"
								: "string" == typeof e.data &&
								  0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
								  Vt.test(e.data) &&
								  "data");
					if (l || "jsonp" === e.dataTypes[0])
						return (
							(i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
							l
								? (e[l] = e[l].replace(Vt, "$1" + i))
								: !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
							(e.converters["script json"] = function () {
								return a || C.error(i + " was not called"), a[0];
							}),
							(e.dataTypes[0] = "json"),
							(o = n[i]),
							(n[i] = function () {
								a = arguments;
							}),
							r.always(function () {
								void 0 === o ? C(n).removeProp(i) : (n[i] = o),
									e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
									a && v(o) && o(a[0]),
									(a = o = void 0);
							}),
							"script"
						);
				}),
				(g.createHTMLDocument = (function () {
					var e = b.implementation.createHTMLDocument("").body;
					return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
				})()),
				(C.parseHTML = function (e, t, n) {
					return "string" != typeof e
						? []
						: ("boolean" == typeof t && ((n = t), (t = !1)),
						  t ||
								(g.createHTMLDocument
									? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href =
											b.location.href),
									  t.head.appendChild(r))
									: (t = b)),
						  (i = N.exec(e)),
						  (o = !n && []),
						  i
								? [t.createElement(i[1])]
								: ((i = xe([e], t, o)), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
					var r, i, o;
				}),
				(C.fn.load = function (e, t, n) {
					var r,
						i,
						o,
						a = this,
						l = e.indexOf(" ");
					return (
						l > -1 && ((r = gt(e.slice(l))), (e = e.slice(0, l))),
						v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
						a.length > 0 &&
							C.ajax({url: e, type: i || "GET", dataType: "html", data: t})
								.done(function (e) {
									(o = arguments), a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
								})
								.always(
									n &&
										function (e, t) {
											a.each(function () {
												n.apply(this, o || [e.responseText, t, e]);
											});
										}
								),
						this
					);
				}),
				(C.expr.pseudos.animated = function (e) {
					return C.grep(C.timers, function (t) {
						return e === t.elem;
					}).length;
				}),
				(C.offset = {
					setOffset: function (e, t, n) {
						var r,
							i,
							o,
							a,
							l,
							s,
							u = C.css(e, "position"),
							c = C(e),
							f = {};
						"static" === u && (e.style.position = "relative"),
							(l = c.offset()),
							(o = C.css(e, "top")),
							(s = C.css(e, "left")),
							("absolute" === u || "fixed" === u) && (o + s).indexOf("auto") > -1
								? ((a = (r = c.position()).top), (i = r.left))
								: ((a = parseFloat(o) || 0), (i = parseFloat(s) || 0)),
							v(t) && (t = t.call(e, n, C.extend({}, l))),
							null != t.top && (f.top = t.top - l.top + a),
							null != t.left && (f.left = t.left - l.left + i),
							"using" in t
								? t.using.call(e, f)
								: ("number" == typeof f.top && (f.top += "px"),
								  "number" == typeof f.left && (f.left += "px"),
								  c.css(f));
					},
				}),
				C.fn.extend({
					offset: function (e) {
						if (arguments.length)
							return void 0 === e
								? this
								: this.each(function (t) {
										C.offset.setOffset(this, e, t);
								  });
						var t,
							n,
							r = this[0];
						return r
							? r.getClientRects().length
								? ((t = r.getBoundingClientRect()),
								  (n = r.ownerDocument.defaultView),
								  {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset})
								: {top: 0, left: 0}
							: void 0;
					},
					position: function () {
						if (this[0]) {
							var e,
								t,
								n,
								r = this[0],
								i = {top: 0, left: 0};
							if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
							else {
								for (
									t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
									e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");

								)
									e = e.parentNode;
								e &&
									e !== r &&
									1 === e.nodeType &&
									(((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
									(i.left += C.css(e, "borderLeftWidth", !0)));
							}
							return {
								top: t.top - i.top - C.css(r, "marginTop", !0),
								left: t.left - i.left - C.css(r, "marginLeft", !0),
							};
						}
					},
					offsetParent: function () {
						return this.map(function () {
							for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
								e = e.offsetParent;
							return e || oe;
						});
					},
				}),
				C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
					var n = "pageYOffset" === t;
					C.fn[e] = function (r) {
						return $(
							this,
							function (e, r, i) {
								var o;
								if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i))
									return o ? o[t] : e[r];
								o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
							},
							e,
							r,
							arguments.length
						);
					};
				}),
				C.each(["top", "left"], function (e, t) {
					C.cssHooks[t] = $e(g.pixelPosition, function (e, n) {
						if (n) return (n = ze(e, t)), Fe.test(n) ? C(e).position()[t] + "px" : n;
					});
				}),
				C.each({Height: "height", Width: "width"}, function (e, t) {
					C.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
						C.fn[r] = function (i, o) {
							var a = arguments.length && (n || "boolean" != typeof i),
								l = n || (!0 === i || !0 === o ? "margin" : "border");
							return $(
								this,
								function (t, n, i) {
									var o;
									return y(t)
										? 0 === r.indexOf("outer")
											? t["inner" + e]
											: t.document.documentElement["client" + e]
										: 9 === t.nodeType
										? ((o = t.documentElement),
										  Math.max(
												t.body["scroll" + e],
												o["scroll" + e],
												t.body["offset" + e],
												o["offset" + e],
												o["client" + e]
										  ))
										: void 0 === i
										? C.css(t, n, l)
										: C.style(t, n, i, l);
								},
								t,
								a ? i : void 0,
								a
							);
						};
					});
				}),
				C.each(
					["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
					function (e, t) {
						C.fn[t] = function (e) {
							return this.on(t, e);
						};
					}
				),
				C.fn.extend({
					bind: function (e, t, n) {
						return this.on(e, null, t, n);
					},
					unbind: function (e, t) {
						return this.off(e, null, t);
					},
					delegate: function (e, t, n, r) {
						return this.on(t, e, n, r);
					},
					undelegate: function (e, t, n) {
						return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
					},
					hover: function (e, t) {
						return this.mouseenter(e).mouseleave(t || e);
					},
				}),
				C.each(
					"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
						" "
					),
					function (e, t) {
						C.fn[t] = function (e, n) {
							return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
						};
					}
				);
			var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			(C.proxy = function (e, t) {
				var n, r, i;
				if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
					return (
						(r = l.call(arguments, 2)),
						((i = function () {
							return e.apply(t || this, r.concat(l.call(arguments)));
						}).guid = e.guid =
							e.guid || C.guid++),
						i
					);
			}),
				(C.holdReady = function (e) {
					e ? C.readyWait++ : C.ready(!0);
				}),
				(C.isArray = Array.isArray),
				(C.parseJSON = JSON.parse),
				(C.nodeName = M),
				(C.isFunction = v),
				(C.isWindow = y),
				(C.camelCase = X),
				(C.type = k),
				(C.now = Date.now),
				(C.isNumeric = function (e) {
					var t = C.type(e);
					return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
				}),
				(C.trim = function (e) {
					return null == e ? "" : (e + "").replace(Gt, "");
				}),
				void 0 ===
					(r = function () {
						return C;
					}.apply(t, [])) || (e.exports = r);
			var Xt = n.jQuery,
				Kt = n.$;
			return (
				(C.noConflict = function (e) {
					return n.$ === C && (n.$ = Kt), e && n.jQuery === C && (n.jQuery = Xt), C;
				}),
				void 0 === i && (n.jQuery = n.$ = C),
				C
			);
		});
	},
	function (e, t, n) {
		var r, i, o;
		!(function (a, l) {
			(i = [e, n(44), n(46), n(47)]),
				void 0 === (o = "function" == typeof (r = l) ? r.apply(t, i) : r) || (e.exports = o);
		})(0, function (e, t, n, r) {
			"use strict";
			var i = l(t),
				o = l(n),
				a = l(r);
			function l(e) {
				return e && e.__esModule ? e : {default: e};
			}
			var s =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  };
			var u = (function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						(r.enumerable = r.enumerable || !1),
							(r.configurable = !0),
							"value" in r && (r.writable = !0),
							Object.defineProperty(e, r.key, r);
					}
				}
				return function (t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t;
				};
			})();
			var c = (function (e) {
				function t(e, n) {
					!(function (e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
					})(this, t);
					var r = (function (e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
					})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return r.resolveOptions(n), r.listenClick(e), r;
				}
				return (
					(function (e, t) {
						if ("function" != typeof t && null !== t)
							throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {value: e, enumerable: !1, writable: !0, configurable: !0},
						})),
							t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
					})(t, o.default),
					u(
						t,
						[
							{
								key: "resolveOptions",
								value: function () {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
									(this.action = "function" == typeof e.action ? e.action : this.defaultAction),
										(this.target = "function" == typeof e.target ? e.target : this.defaultTarget),
										(this.text = "function" == typeof e.text ? e.text : this.defaultText),
										(this.container = "object" === s(e.container) ? e.container : document.body);
								},
							},
							{
								key: "listenClick",
								value: function (e) {
									var t = this;
									this.listener = (0, a.default)(e, "click", function (e) {
										return t.onClick(e);
									});
								},
							},
							{
								key: "onClick",
								value: function (e) {
									var t = e.delegateTarget || e.currentTarget;
									this.clipboardAction && (this.clipboardAction = null),
										(this.clipboardAction = new i.default({
											action: this.action(t),
											target: this.target(t),
											text: this.text(t),
											container: this.container,
											trigger: t,
											emitter: this,
										}));
								},
							},
							{
								key: "defaultAction",
								value: function (e) {
									return f("action", e);
								},
							},
							{
								key: "defaultTarget",
								value: function (e) {
									var t = f("target", e);
									if (t) return document.querySelector(t);
								},
							},
							{
								key: "defaultText",
								value: function (e) {
									return f("text", e);
								},
							},
							{
								key: "destroy",
								value: function () {
									this.listener.destroy(),
										this.clipboardAction &&
											(this.clipboardAction.destroy(), (this.clipboardAction = null));
								},
							},
						],
						[
							{
								key: "isSupported",
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: ["copy", "cut"],
										t = "string" == typeof e ? [e] : e,
										n = !!document.queryCommandSupported;
									return (
										t.forEach(function (e) {
											n = n && !!document.queryCommandSupported(e);
										}),
										n
									);
								},
							},
						]
					),
					t
				);
			})();
			function f(e, t) {
				var n = "data-clipboard-" + e;
				if (t.hasAttribute(n)) return t.getAttribute(n);
			}
			e.exports = c;
		});
	},
	function (e, t, n) {
		var r, i, o;
		!(function (a, l) {
			(i = [e, n(45)]), void 0 === (o = "function" == typeof (r = l) ? r.apply(t, i) : r) || (e.exports = o);
		})(0, function (e, t) {
			"use strict";
			var n = (function (e) {
				return e && e.__esModule ? e : {default: e};
			})(t);
			var r =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  };
			var i = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function (t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = (function () {
					function e(t) {
						!(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
						})(this, e),
							this.resolveOptions(t),
							this.initSelection();
					}
					return (
						i(e, [
							{
								key: "resolveOptions",
								value: function () {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
									(this.action = e.action),
										(this.container = e.container),
										(this.emitter = e.emitter),
										(this.target = e.target),
										(this.text = e.text),
										(this.trigger = e.trigger),
										(this.selectedText = "");
								},
							},
							{
								key: "initSelection",
								value: function () {
									this.text ? this.selectFake() : this.target && this.selectTarget();
								},
							},
							{
								key: "selectFake",
								value: function () {
									var e = this,
										t = "rtl" == document.documentElement.getAttribute("dir");
									this.removeFake(),
										(this.fakeHandlerCallback = function () {
											return e.removeFake();
										}),
										(this.fakeHandler =
											this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
										(this.fakeElem = document.createElement("textarea")),
										(this.fakeElem.style.fontSize = "12pt"),
										(this.fakeElem.style.border = "0"),
										(this.fakeElem.style.padding = "0"),
										(this.fakeElem.style.margin = "0"),
										(this.fakeElem.style.position = "absolute"),
										(this.fakeElem.style[t ? "right" : "left"] = "-9999px");
									var r = window.pageYOffset || document.documentElement.scrollTop;
									(this.fakeElem.style.top = r + "px"),
										this.fakeElem.setAttribute("readonly", ""),
										(this.fakeElem.value = this.text),
										this.container.appendChild(this.fakeElem),
										(this.selectedText = (0, n.default)(this.fakeElem)),
										this.copyText();
								},
							},
							{
								key: "removeFake",
								value: function () {
									this.fakeHandler &&
										(this.container.removeEventListener("click", this.fakeHandlerCallback),
										(this.fakeHandler = null),
										(this.fakeHandlerCallback = null)),
										this.fakeElem &&
											(this.container.removeChild(this.fakeElem), (this.fakeElem = null));
								},
							},
							{
								key: "selectTarget",
								value: function () {
									(this.selectedText = (0, n.default)(this.target)), this.copyText();
								},
							},
							{
								key: "copyText",
								value: function () {
									var e = void 0;
									try {
										e = document.execCommand(this.action);
									} catch (t) {
										e = !1;
									}
									this.handleResult(e);
								},
							},
							{
								key: "handleResult",
								value: function (e) {
									this.emitter.emit(e ? "success" : "error", {
										action: this.action,
										text: this.selectedText,
										trigger: this.trigger,
										clearSelection: this.clearSelection.bind(this),
									});
								},
							},
							{
								key: "clearSelection",
								value: function () {
									this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
								},
							},
							{
								key: "destroy",
								value: function () {
									this.removeFake();
								},
							},
							{
								key: "action",
								set: function () {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
									if (((this._action = e), "copy" !== this._action && "cut" !== this._action))
										throw new Error('Invalid "action" value, use either "copy" or "cut"');
								},
								get: function () {
									return this._action;
								},
							},
							{
								key: "target",
								set: function (e) {
									if (void 0 !== e) {
										if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType)
											throw new Error('Invalid "target" value, use a valid Element');
										if ("copy" === this.action && e.hasAttribute("disabled"))
											throw new Error(
												'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
											);
										if (
											"cut" === this.action &&
											(e.hasAttribute("readonly") || e.hasAttribute("disabled"))
										)
											throw new Error(
												'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
											);
										this._target = e;
									}
								},
								get: function () {
									return this._target;
								},
							},
						]),
						e
					);
				})();
			e.exports = o;
		});
	},
	function (e, t) {
		e.exports = function (e) {
			var t;
			if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
			else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
				var n = e.hasAttribute("readonly");
				n || e.setAttribute("readonly", ""),
					e.select(),
					e.setSelectionRange(0, e.value.length),
					n || e.removeAttribute("readonly"),
					(t = e.value);
			} else {
				e.hasAttribute("contenteditable") && e.focus();
				var r = window.getSelection(),
					i = document.createRange();
				i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), (t = r.toString());
			}
			return t;
		};
	},
	function (e, t) {
		function n() {}
		(n.prototype = {
			on: function (e, t, n) {
				var r = this.e || (this.e = {});
				return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this;
			},
			once: function (e, t, n) {
				var r = this;
				function i() {
					r.off(e, i), t.apply(n, arguments);
				}
				return (i._ = t), this.on(e, i, n);
			},
			emit: function (e) {
				for (
					var t = [].slice.call(arguments, 1),
						n = ((this.e || (this.e = {}))[e] || []).slice(),
						r = 0,
						i = n.length;
					r < i;
					r++
				)
					n[r].fn.apply(n[r].ctx, t);
				return this;
			},
			off: function (e, t) {
				var n = this.e || (this.e = {}),
					r = n[e],
					i = [];
				if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
				return i.length ? (n[e] = i) : delete n[e], this;
			},
		}),
			(e.exports = n),
			(e.exports.TinyEmitter = n);
	},
	function (e, t, n) {
		var r = n(48),
			i = n(49);
		e.exports = function (e, t, n) {
			if (!e && !t && !n) throw new Error("Missing required arguments");
			if (!r.string(t)) throw new TypeError("Second argument must be a String");
			if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
			if (r.node(e))
				return (function (e, t, n) {
					return (
						e.addEventListener(t, n),
						{
							destroy: function () {
								e.removeEventListener(t, n);
							},
						}
					);
				})(e, t, n);
			if (r.nodeList(e))
				return (function (e, t, n) {
					return (
						Array.prototype.forEach.call(e, function (e) {
							e.addEventListener(t, n);
						}),
						{
							destroy: function () {
								Array.prototype.forEach.call(e, function (e) {
									e.removeEventListener(t, n);
								});
							},
						}
					);
				})(e, t, n);
			if (r.string(e))
				return (function (e, t, n) {
					return i(document.body, e, t, n);
				})(e, t, n);
			throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
		};
	},
	function (e, t) {
		(t.node = function (e) {
			return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
		}),
			(t.nodeList = function (e) {
				var n = Object.prototype.toString.call(e);
				return (
					void 0 !== e &&
					("[object NodeList]" === n || "[object HTMLCollection]" === n) &&
					"length" in e &&
					(0 === e.length || t.node(e[0]))
				);
			}),
			(t.string = function (e) {
				return "string" == typeof e || e instanceof String;
			}),
			(t.fn = function (e) {
				return "[object Function]" === Object.prototype.toString.call(e);
			});
	},
	function (e, t, n) {
		var r = n(50);
		function i(e, t, n, i, o) {
			var a = function (e, t, n, i) {
				return function (n) {
					(n.delegateTarget = r(n.target, t)), n.delegateTarget && i.call(e, n);
				};
			}.apply(this, arguments);
			return (
				e.addEventListener(n, a, o),
				{
					destroy: function () {
						e.removeEventListener(n, a, o);
					},
				}
			);
		}
		e.exports = function (e, t, n, r, o) {
			return "function" == typeof e.addEventListener
				? i.apply(null, arguments)
				: "function" == typeof n
				? i.bind(null, document).apply(null, arguments)
				: ("string" == typeof e && (e = document.querySelectorAll(e)),
				  Array.prototype.map.call(e, function (e) {
						return i(e, t, n, r, o);
				  }));
		};
	},
	function (e, t) {
		var n = 9;
		if ("undefined" != typeof Element && !Element.prototype.matches) {
			var r = Element.prototype;
			r.matches =
				r.matchesSelector ||
				r.mozMatchesSelector ||
				r.msMatchesSelector ||
				r.oMatchesSelector ||
				r.webkitMatchesSelector;
		}
		e.exports = function (e, t) {
			for (; e && e.nodeType !== n; ) {
				if ("function" == typeof e.matches && e.matches(t)) return e;
				e = e.parentNode;
			}
		};
	},
	function (e, t, n) {
		!(function (e) {
			e(n(5));
		})(function (e) {
			"use strict";
			e.defineMode("javascript", function (t, n) {
				var r,
					i,
					o = t.indentUnit,
					a = n.statementIndent,
					l = n.jsonld,
					s = n.json || l,
					u = n.typescript,
					c = n.wordCharacters || /[\w$\xa1-\uffff]/,
					f = (function () {
						function e(e) {
							return {type: e, style: "keyword"};
						}
						var t = e("keyword a"),
							n = e("keyword b"),
							r = e("keyword c"),
							i = e("keyword d"),
							o = e("operator"),
							a = {type: "atom", style: "atom"};
						return {
							if: e("if"),
							while: t,
							with: t,
							else: n,
							do: n,
							try: n,
							finally: n,
							return: i,
							break: i,
							continue: i,
							new: e("new"),
							delete: r,
							void: r,
							throw: r,
							debugger: e("debugger"),
							var: e("var"),
							const: e("var"),
							let: e("var"),
							function: e("function"),
							catch: e("catch"),
							for: e("for"),
							switch: e("switch"),
							case: e("case"),
							default: e("default"),
							in: o,
							typeof: o,
							instanceof: o,
							true: a,
							false: a,
							null: a,
							undefined: a,
							NaN: a,
							Infinity: a,
							this: e("this"),
							class: e("class"),
							super: e("atom"),
							yield: r,
							export: e("export"),
							import: e("import"),
							extends: r,
							await: r,
						};
					})(),
					d = /[+\-*&%=<>!?|~^@]/,
					p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
				function h(e, t, n) {
					return (r = e), (i = n), t;
				}
				function m(e, t) {
					var n = e.next();
					if ('"' == n || "'" == n)
						return (
							(t.tokenize = (function (e) {
								return function (t, n) {
									var r,
										i = !1;
									if (l && "@" == t.peek() && t.match(p))
										return (n.tokenize = m), h("jsonld-keyword", "meta");
									for (; null != (r = t.next()) && (r != e || i); ) i = !i && "\\" == r;
									return i || (n.tokenize = m), h("string", "string");
								};
							})(n)),
							t.tokenize(e, t)
						);
					if ("." == n && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return h("number", "number");
					if ("." == n && e.match("..")) return h("spread", "meta");
					if (/[\[\]{}\(\),;\:\.]/.test(n)) return h(n);
					if ("=" == n && e.eat(">")) return h("=>", "operator");
					if ("0" == n && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return h("number", "number");
					if (/\d/.test(n))
						return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), h("number", "number");
					if ("/" == n)
						return e.eat("*")
							? ((t.tokenize = g), g(e, t))
							: e.eat("/")
							? (e.skipToEnd(), h("comment", "comment"))
							: Ke(e, t, 1)
							? ((function (e) {
									for (var t, n = !1, r = !1; null != (t = e.next()); ) {
										if (!n) {
											if ("/" == t && !r) return;
											"[" == t ? (r = !0) : r && "]" == t && (r = !1);
										}
										n = !n && "\\" == t;
									}
							  })(e),
							  e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
							  h("regexp", "string-2"))
							: (e.eat("="), h("operator", "operator", e.current()));
					if ("`" == n) return (t.tokenize = v), v(e, t);
					if ("#" == n && "!" == e.peek()) return e.skipToEnd(), h("meta", "meta");
					if ("#" == n && e.eatWhile(c)) return h("variable", "property");
					if (
						("<" == n && e.match("!--")) ||
						("-" == n && e.match("->") && !/\S/.test(e.string.slice(0, e.start)))
					)
						return e.skipToEnd(), h("comment", "comment");
					if (d.test(n))
						return (
							(">" == n && t.lexical && ">" == t.lexical.type) ||
								(e.eat("=")
									? ("!" != n && "=" != n) || e.eat("=")
									: /[<>*+\-|&?]/.test(n) && (e.eat(n), ">" == n && e.eat(n))),
							"?" == n && e.eat(".") ? h(".") : h("operator", "operator", e.current())
						);
					if (c.test(n)) {
						e.eatWhile(c);
						var r = e.current();
						if ("." != t.lastType) {
							if (f.propertyIsEnumerable(r)) {
								var i = f[r];
								return h(i.type, i.style, r);
							}
							if ("async" == r && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
								return h("async", "keyword", r);
						}
						return h("variable", "variable", r);
					}
				}
				function g(e, t) {
					for (var n, r = !1; (n = e.next()); ) {
						if ("/" == n && r) {
							t.tokenize = m;
							break;
						}
						r = "*" == n;
					}
					return h("comment", "comment");
				}
				function v(e, t) {
					for (var n, r = !1; null != (n = e.next()); ) {
						if (!r && ("`" == n || ("$" == n && e.eat("{")))) {
							t.tokenize = m;
							break;
						}
						r = !r && "\\" == n;
					}
					return h("quasi", "string-2", e.current());
				}
				var y = "([{}])";
				function b(e, t) {
					t.fatArrowAt && (t.fatArrowAt = null);
					var n = e.string.indexOf("=>", e.start);
					if (!(n < 0)) {
						if (u) {
							var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
							r && (n = r.index);
						}
						for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
							var l = e.string.charAt(a),
								s = y.indexOf(l);
							if (s >= 0 && s < 3) {
								if (!i) {
									++a;
									break;
								}
								if (0 == --i) {
									"(" == l && (o = !0);
									break;
								}
							} else if (s >= 3 && s < 6) ++i;
							else if (c.test(l)) o = !0;
							else if (/["'\/`]/.test(l))
								for (; ; --a) {
									if (0 == a) return;
									if (e.string.charAt(a - 1) == l && "\\" != e.string.charAt(a - 2)) {
										a--;
										break;
									}
								}
							else if (o && !i) {
								++a;
								break;
							}
						}
						o && !i && (t.fatArrowAt = a);
					}
				}
				var x = {atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0};
				function w(e, t, n, r, i, o) {
					(this.indented = e),
						(this.column = t),
						(this.type = n),
						(this.prev = i),
						(this.info = o),
						null != r && (this.align = r);
				}
				function k(e, t) {
					for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
					for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
				}
				var C = {state: null, column: null, marked: null, cc: null};
				function S() {
					for (var e = arguments.length - 1; e >= 0; e--) C.cc.push(arguments[e]);
				}
				function T() {
					return S.apply(null, arguments), !0;
				}
				function L(e, t) {
					for (var n = t; n; n = n.next) if (n.name == e) return !0;
					return !1;
				}
				function O(e) {
					var t = C.state;
					if (((C.marked = "def"), t.context))
						if ("var" == t.lexical.info && t.context && t.context.block) {
							var r = (function e(t, n) {
								if (n) {
									if (n.block) {
										var r = e(t, n.prev);
										return r ? (r == n.prev ? n : new M(r, n.vars, !0)) : null;
									}
									return L(t, n.vars) ? n : new M(n.prev, new N(t, n.vars), !1);
								}
								return null;
							})(e, t.context);
							if (null != r) return void (t.context = r);
						} else if (!L(e, t.localVars)) return void (t.localVars = new N(e, t.localVars));
					n.globalVars && !L(e, t.globalVars) && (t.globalVars = new N(e, t.globalVars));
				}
				function A(e) {
					return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e;
				}
				function M(e, t, n) {
					(this.prev = e), (this.vars = t), (this.block = n);
				}
				function N(e, t) {
					(this.name = e), (this.next = t);
				}
				var E = new N("this", new N("arguments", null));
				function P() {
					(C.state.context = new M(C.state.context, C.state.localVars, !1)), (C.state.localVars = E);
				}
				function D() {
					(C.state.context = new M(C.state.context, C.state.localVars, !0)), (C.state.localVars = null);
				}
				function H() {
					(C.state.localVars = C.state.context.vars), (C.state.context = C.state.context.prev);
				}
				function R(e, t) {
					var n = function () {
						var n = C.state,
							r = n.indented;
						if ("stat" == n.lexical.type) r = n.lexical.indented;
						else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
						n.lexical = new w(r, C.stream.column(), e, null, n.lexical, t);
					};
					return (n.lex = !0), n;
				}
				function j() {
					var e = C.state;
					e.lexical.prev &&
						(")" == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
				}
				function I(e) {
					return function t(n) {
						return n == e ? T() : ";" == e || "}" == n || ")" == n || "]" == n ? S() : T(t);
					};
				}
				function W(e, t) {
					return "var" == e
						? T(R("vardef", t), xe, I(";"), j)
						: "keyword a" == e
						? T(R("form"), q, W, j)
						: "keyword b" == e
						? T(R("form"), W, j)
						: "keyword d" == e
						? C.stream.match(/^\s*$/, !1)
							? T()
							: T(R("stat"), $, I(";"), j)
						: "debugger" == e
						? T(I(";"))
						: "{" == e
						? T(R("}"), D, ae, j, H)
						: ";" == e
						? T()
						: "if" == e
						? ("else" == C.state.lexical.info &&
								C.state.cc[C.state.cc.length - 1] == j &&
								C.state.cc.pop()(),
						  T(R("form"), q, W, j, Le))
						: "function" == e
						? T(Ne)
						: "for" == e
						? T(R("form"), Oe, W, j)
						: "class" == e || (u && "interface" == t)
						? ((C.marked = "keyword"), T(R("form", "class" == e ? e : t), Re, j))
						: "variable" == e
						? u && "declare" == t
							? ((C.marked = "keyword"), T(W))
							: u && ("module" == t || "enum" == t || "type" == t) && C.stream.match(/^\s*\w/, !1)
							? ((C.marked = "keyword"),
							  "enum" == t
									? T(Ge)
									: "type" == t
									? T(Pe, I("operator"), fe, I(";"))
									: T(R("form"), we, I("{"), R("}"), ae, j, j))
							: u && "namespace" == t
							? ((C.marked = "keyword"), T(R("form"), _, W, j))
							: u && "abstract" == t
							? ((C.marked = "keyword"), T(W))
							: T(R("stat"), Z)
						: "switch" == e
						? T(R("form"), q, I("{"), R("}", "switch"), D, ae, j, j, H)
						: "case" == e
						? T(_, I(":"))
						: "default" == e
						? T(I(":"))
						: "catch" == e
						? T(R("form"), P, F, W, j, H)
						: "export" == e
						? T(R("stat"), Fe, j)
						: "import" == e
						? T(R("stat"), Be, j)
						: "async" == e
						? T(W)
						: "@" == t
						? T(_, W)
						: S(R("stat"), _, I(";"), j);
				}
				function F(e) {
					if ("(" == e) return T(De, I(")"));
				}
				function _(e, t) {
					return z(e, t, !1);
				}
				function B(e, t) {
					return z(e, t, !0);
				}
				function q(e) {
					return "(" != e ? S() : T(R(")"), $, I(")"), j);
				}
				function z(e, t, n) {
					if (C.state.fatArrowAt == C.stream.start) {
						var r = n ? Y : K;
						if ("(" == e) return T(P, R(")"), ie(De, ")"), j, I("=>"), r, H);
						if ("variable" == e) return S(P, we, I("=>"), r, H);
					}
					var i = n ? V : U;
					return x.hasOwnProperty(e)
						? T(i)
						: "function" == e
						? T(Ne, i)
						: "class" == e || (u && "interface" == t)
						? ((C.marked = "keyword"), T(R("form"), He, j))
						: "keyword c" == e || "async" == e
						? T(n ? B : _)
						: "(" == e
						? T(R(")"), $, I(")"), j, i)
						: "operator" == e || "spread" == e
						? T(n ? B : _)
						: "[" == e
						? T(R("]"), Ve, j, i)
						: "{" == e
						? oe(te, "}", null, i)
						: "quasi" == e
						? S(G, i)
						: "new" == e
						? T(
								(function (e) {
									return function (t) {
										return "." == t
											? T(e ? J : Q)
											: "variable" == t && u
											? T(ve, e ? V : U)
											: S(e ? B : _);
									};
								})(n)
						  )
						: "import" == e
						? T(_)
						: T();
				}
				function $(e) {
					return e.match(/[;\}\)\],]/) ? S() : S(_);
				}
				function U(e, t) {
					return "," == e ? T($) : V(e, t, !1);
				}
				function V(e, t, n) {
					var r = 0 == n ? U : V,
						i = 0 == n ? _ : B;
					return "=>" == e
						? T(P, n ? Y : K, H)
						: "operator" == e
						? /\+\+|--/.test(t) || (u && "!" == t)
							? T(r)
							: u && "<" == t && C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
							? T(R(">"), ie(fe, ">"), j, r)
							: "?" == t
							? T(_, I(":"), i)
							: T(i)
						: "quasi" == e
						? S(G, r)
						: ";" != e
						? "(" == e
							? oe(B, ")", "call", r)
							: "." == e
							? T(ee, r)
							: "[" == e
							? T(R("]"), $, I("]"), j, r)
							: u && "as" == t
							? ((C.marked = "keyword"), T(fe, r))
							: "regexp" == e
							? ((C.state.lastType = C.marked = "operator"),
							  C.stream.backUp(C.stream.pos - C.stream.start - 1),
							  T(i))
							: void 0
						: void 0;
				}
				function G(e, t) {
					return "quasi" != e ? S() : "${" != t.slice(t.length - 2) ? T(G) : T(_, X);
				}
				function X(e) {
					if ("}" == e) return (C.marked = "string-2"), (C.state.tokenize = v), T(G);
				}
				function K(e) {
					return b(C.stream, C.state), S("{" == e ? W : _);
				}
				function Y(e) {
					return b(C.stream, C.state), S("{" == e ? W : B);
				}
				function Q(e, t) {
					if ("target" == t) return (C.marked = "keyword"), T(U);
				}
				function J(e, t) {
					if ("target" == t) return (C.marked = "keyword"), T(V);
				}
				function Z(e) {
					return ":" == e ? T(j, W) : S(U, I(";"), j);
				}
				function ee(e) {
					if ("variable" == e) return (C.marked = "property"), T();
				}
				function te(e, t) {
					if ("async" == e) return (C.marked = "property"), T(te);
					if ("variable" == e || "keyword" == C.style) {
						return (
							(C.marked = "property"),
							"get" == t || "set" == t
								? T(ne)
								: (u &&
										C.state.fatArrowAt == C.stream.start &&
										(n = C.stream.match(/^\s*:\s*/, !1)) &&
										(C.state.fatArrowAt = C.stream.pos + n[0].length),
								  T(re))
						);
						var n;
					} else {
						if ("number" == e || "string" == e)
							return (C.marked = l ? "property" : C.style + " property"), T(re);
						if ("jsonld-keyword" == e) return T(re);
						if (u && A(t)) return (C.marked = "keyword"), T(te);
						if ("[" == e) return T(_, le, I("]"), re);
						if ("spread" == e) return T(B, re);
						if ("*" == t) return (C.marked = "keyword"), T(te);
						if (":" == e) return S(re);
					}
				}
				function ne(e) {
					return "variable" != e ? S(re) : ((C.marked = "property"), T(Ne));
				}
				function re(e) {
					return ":" == e ? T(B) : "(" == e ? S(Ne) : void 0;
				}
				function ie(e, t, n) {
					function r(i, o) {
						if (n ? n.indexOf(i) > -1 : "," == i) {
							var a = C.state.lexical;
							return (
								"call" == a.info && (a.pos = (a.pos || 0) + 1),
								T(function (n, r) {
									return n == t || r == t ? S() : S(e);
								}, r)
							);
						}
						return i == t || o == t ? T() : n && n.indexOf(";") > -1 ? S(e) : T(I(t));
					}
					return function (n, i) {
						return n == t || i == t ? T() : S(e, r);
					};
				}
				function oe(e, t, n) {
					for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
					return T(R(t, n), ie(e, t), j);
				}
				function ae(e) {
					return "}" == e ? T() : S(W, ae);
				}
				function le(e, t) {
					if (u) {
						if (":" == e) return T(fe);
						if ("?" == t) return T(le);
					}
				}
				function se(e, t) {
					if (u && (":" == e || "in" == t)) return T(fe);
				}
				function ue(e) {
					if (u && ":" == e) return C.stream.match(/^\s*\w+\s+is\b/, !1) ? T(_, ce, fe) : T(fe);
				}
				function ce(e, t) {
					if ("is" == t) return (C.marked = "keyword"), T();
				}
				function fe(e, t) {
					return "keyof" == t || "typeof" == t || "infer" == t
						? ((C.marked = "keyword"), T("typeof" == t ? B : fe))
						: "variable" == e || "void" == t
						? ((C.marked = "type"), T(ge))
						: "|" == t || "&" == t
						? T(fe)
						: "string" == e || "number" == e || "atom" == e
						? T(ge)
						: "[" == e
						? T(R("]"), ie(fe, "]", ","), j, ge)
						: "{" == e
						? T(R("}"), pe, j, ge)
						: "(" == e
						? T(ie(me, ")"), de, ge)
						: "<" == e
						? T(ie(fe, ">"), fe)
						: void 0;
				}
				function de(e) {
					if ("=>" == e) return T(fe);
				}
				function pe(e) {
					return e.match(/[\}\)\]]/) ? T() : "," == e || ";" == e ? T(pe) : S(he, pe);
				}
				function he(e, t) {
					return "variable" == e || "keyword" == C.style
						? ((C.marked = "property"), T(he))
						: "?" == t || "number" == e || "string" == e
						? T(he)
						: ":" == e
						? T(fe)
						: "[" == e
						? T(I("variable"), se, I("]"), he)
						: "(" == e
						? S(Ee, he)
						: e.match(/[;\}\)\],]/)
						? void 0
						: T();
				}
				function me(e, t) {
					return ("variable" == e && C.stream.match(/^\s*[?:]/, !1)) || "?" == t
						? T(me)
						: ":" == e
						? T(fe)
						: "spread" == e
						? T(me)
						: S(fe);
				}
				function ge(e, t) {
					return "<" == t
						? T(R(">"), ie(fe, ">"), j, ge)
						: "|" == t || "." == e || "&" == t
						? T(fe)
						: "[" == e
						? T(fe, I("]"), ge)
						: "extends" == t || "implements" == t
						? ((C.marked = "keyword"), T(fe))
						: "?" == t
						? T(fe, I(":"), fe)
						: void 0;
				}
				function ve(e, t) {
					if ("<" == t) return T(R(">"), ie(fe, ">"), j, ge);
				}
				function ye() {
					return S(fe, be);
				}
				function be(e, t) {
					if ("=" == t) return T(fe);
				}
				function xe(e, t) {
					return "enum" == t ? ((C.marked = "keyword"), T(Ge)) : S(we, le, Se, Te);
				}
				function we(e, t) {
					return u && A(t)
						? ((C.marked = "keyword"), T(we))
						: "variable" == e
						? (O(t), T())
						: "spread" == e
						? T(we)
						: "[" == e
						? oe(Ce, "]")
						: "{" == e
						? oe(ke, "}")
						: void 0;
				}
				function ke(e, t) {
					return "variable" != e || C.stream.match(/^\s*:/, !1)
						? ("variable" == e && (C.marked = "property"),
						  "spread" == e
								? T(we)
								: "}" == e
								? S()
								: "[" == e
								? T(_, I("]"), I(":"), ke)
								: T(I(":"), we, Se))
						: (O(t), T(Se));
				}
				function Ce() {
					return S(we, Se);
				}
				function Se(e, t) {
					if ("=" == t) return T(B);
				}
				function Te(e) {
					if ("," == e) return T(xe);
				}
				function Le(e, t) {
					if ("keyword b" == e && "else" == t) return T(R("form", "else"), W, j);
				}
				function Oe(e, t) {
					return "await" == t ? T(Oe) : "(" == e ? T(R(")"), Ae, j) : void 0;
				}
				function Ae(e) {
					return "var" == e ? T(xe, Me) : "variable" == e ? T(Me) : S(Me);
				}
				function Me(e, t) {
					return ")" == e
						? T()
						: ";" == e
						? T(Me)
						: "in" == t || "of" == t
						? ((C.marked = "keyword"), T(_, Me))
						: S(_, Me);
				}
				function Ne(e, t) {
					return "*" == t
						? ((C.marked = "keyword"), T(Ne))
						: "variable" == e
						? (O(t), T(Ne))
						: "(" == e
						? T(P, R(")"), ie(De, ")"), j, ue, W, H)
						: u && "<" == t
						? T(R(">"), ie(ye, ">"), j, Ne)
						: void 0;
				}
				function Ee(e, t) {
					return "*" == t
						? ((C.marked = "keyword"), T(Ee))
						: "variable" == e
						? (O(t), T(Ee))
						: "(" == e
						? T(P, R(")"), ie(De, ")"), j, ue, H)
						: u && "<" == t
						? T(R(">"), ie(ye, ">"), j, Ee)
						: void 0;
				}
				function Pe(e, t) {
					return "keyword" == e || "variable" == e
						? ((C.marked = "type"), T(Pe))
						: "<" == t
						? T(R(">"), ie(ye, ">"), j)
						: void 0;
				}
				function De(e, t) {
					return (
						"@" == t && T(_, De),
						"spread" == e
							? T(De)
							: u && A(t)
							? ((C.marked = "keyword"), T(De))
							: u && "this" == e
							? T(le, Se)
							: S(we, le, Se)
					);
				}
				function He(e, t) {
					return "variable" == e ? Re(e, t) : je(e, t);
				}
				function Re(e, t) {
					if ("variable" == e) return O(t), T(je);
				}
				function je(e, t) {
					return "<" == t
						? T(R(">"), ie(ye, ">"), j, je)
						: "extends" == t || "implements" == t || (u && "," == e)
						? ("implements" == t && (C.marked = "keyword"), T(u ? fe : _, je))
						: "{" == e
						? T(R("}"), Ie, j)
						: void 0;
				}
				function Ie(e, t) {
					return "async" == e ||
						("variable" == e &&
							("static" == t || "get" == t || "set" == t || (u && A(t))) &&
							C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
						? ((C.marked = "keyword"), T(Ie))
						: "variable" == e || "keyword" == C.style
						? ((C.marked = "property"), T(We, Ie))
						: "number" == e || "string" == e
						? T(We, Ie)
						: "[" == e
						? T(_, le, I("]"), We, Ie)
						: "*" == t
						? ((C.marked = "keyword"), T(Ie))
						: u && "(" == e
						? S(Ee, Ie)
						: ";" == e || "," == e
						? T(Ie)
						: "}" == e
						? T()
						: "@" == t
						? T(_, Ie)
						: void 0;
				}
				function We(e, t) {
					if ("?" == t) return T(We);
					if (":" == e) return T(fe, Se);
					if ("=" == t) return T(B);
					var n = C.state.lexical.prev;
					return S(n && "interface" == n.info ? Ee : Ne);
				}
				function Fe(e, t) {
					return "*" == t
						? ((C.marked = "keyword"), T(Ue, I(";")))
						: "default" == t
						? ((C.marked = "keyword"), T(_, I(";")))
						: "{" == e
						? T(ie(_e, "}"), Ue, I(";"))
						: S(W);
				}
				function _e(e, t) {
					return "as" == t ? ((C.marked = "keyword"), T(I("variable"))) : "variable" == e ? S(B, _e) : void 0;
				}
				function Be(e) {
					return "string" == e ? T() : "(" == e ? S(_) : S(qe, ze, Ue);
				}
				function qe(e, t) {
					return "{" == e
						? oe(qe, "}")
						: ("variable" == e && O(t), "*" == t && (C.marked = "keyword"), T($e));
				}
				function ze(e) {
					if ("," == e) return T(qe, ze);
				}
				function $e(e, t) {
					if ("as" == t) return (C.marked = "keyword"), T(qe);
				}
				function Ue(e, t) {
					if ("from" == t) return (C.marked = "keyword"), T(_);
				}
				function Ve(e) {
					return "]" == e ? T() : S(ie(B, "]"));
				}
				function Ge() {
					return S(R("form"), we, I("{"), R("}"), ie(Xe, "}"), j, j);
				}
				function Xe() {
					return S(we, Se);
				}
				function Ke(e, t, n) {
					return (
						(t.tokenize == m &&
							/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
								t.lastType
							)) ||
						("quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
					);
				}
				return (
					(H.lex = !0),
					(j.lex = !0),
					{
						startState: function (e) {
							var t = {
								tokenize: m,
								lastType: "sof",
								cc: [],
								lexical: new w((e || 0) - o, 0, "block", !1),
								localVars: n.localVars,
								context: n.localVars && new M(null, null, !1),
								indented: e || 0,
							};
							return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t;
						},
						token: function (e, t) {
							if (
								(e.sol() &&
									(t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
									(t.indented = e.indentation()),
									b(e, t)),
								t.tokenize != g && e.eatSpace())
							)
								return null;
							var n = t.tokenize(e, t);
							return "comment" == r
								? n
								: ((t.lastType = "operator" != r || ("++" != i && "--" != i) ? r : "incdec"),
								  (function (e, t, n, r, i) {
										var o = e.cc;
										for (
											C.state = e,
												C.stream = i,
												C.marked = null,
												C.cc = o,
												C.style = t,
												e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
											;

										)
											if ((o.length ? o.pop() : s ? _ : W)(n, r)) {
												for (; o.length && o[o.length - 1].lex; ) o.pop()();
												return C.marked
													? C.marked
													: "variable" == n && k(e, r)
													? "variable-2"
													: t;
											}
								  })(t, n, r, i, e));
						},
						indent: function (t, r) {
							if (t.tokenize == g || t.tokenize == v) return e.Pass;
							if (t.tokenize != m) return 0;
							var i,
								l = r && r.charAt(0),
								s = t.lexical;
							if (!/^\s*else\b/.test(r))
								for (var u = t.cc.length - 1; u >= 0; --u) {
									var c = t.cc[u];
									if (c == j) s = s.prev;
									else if (c != Le) break;
								}
							for (
								;
								("stat" == s.type || "form" == s.type) &&
								("}" == l ||
									((i = t.cc[t.cc.length - 1]) && (i == U || i == V) && !/^[,\.=+\-*:?[\(]/.test(r)));

							)
								s = s.prev;
							a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
							var f = s.type,
								p = l == f;
							return "vardef" == f
								? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0)
								: "form" == f && "{" == l
								? s.indented
								: "form" == f
								? s.indented + o
								: "stat" == f
								? s.indented +
								  ((function (e, t) {
										return (
											"operator" == e.lastType ||
											"," == e.lastType ||
											d.test(t.charAt(0)) ||
											/[,.]/.test(t.charAt(0))
										);
								  })(t, r)
										? a || o
										: 0)
								: "switch" != s.info || p || 0 == n.doubleIndentSwitch
								? s.align
									? s.column + (p ? 0 : 1)
									: s.indented + (p ? 0 : o)
								: s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
						},
						electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
						blockCommentStart: s ? null : "/*",
						blockCommentEnd: s ? null : "*/",
						blockCommentContinue: s ? null : " * ",
						lineComment: s ? null : "//",
						fold: "brace",
						closeBrackets: "()[]{}''\"\"``",
						helperType: s ? "json" : "javascript",
						jsonldMode: l,
						jsonMode: s,
						expressionAllowed: Ke,
						skipExpression: function (e) {
							var t = e.cc[e.cc.length - 1];
							(t != _ && t != B) || e.cc.pop();
						},
					}
				);
			}),
				e.registerHelper("wordChars", "javascript", /[\w$]/),
				e.defineMIME("text/javascript", "javascript"),
				e.defineMIME("text/ecmascript", "javascript"),
				e.defineMIME("application/javascript", "javascript"),
				e.defineMIME("application/x-javascript", "javascript"),
				e.defineMIME("application/ecmascript", "javascript"),
				e.defineMIME("application/json", {name: "javascript", json: !0}),
				e.defineMIME("application/x-json", {name: "javascript", json: !0}),
				e.defineMIME("application/manifest+json", {name: "javascript", json: !0}),
				e.defineMIME("application/ld+json", {name: "javascript", jsonld: !0}),
				e.defineMIME("text/typescript", {name: "javascript", typescript: !0}),
				e.defineMIME("application/typescript", {name: "javascript", typescript: !0});
		});
	},
	function (e, t, n) {
		!(function (e) {
			e(n(5));
		})(function (e) {
			var t = {pairs: "()[]{}''\"\"", closeBefore: ")]}'\":;>", triples: "", explode: "[]{}"},
				n = e.Pos;
			function r(e, n) {
				return "pairs" == n && "string" == typeof e ? e : "object" == typeof e && null != e[n] ? e[n] : t[n];
			}
			e.defineOption("autoCloseBrackets", !1, function (t, n, a) {
				a && a != e.Init && (t.removeKeyMap(i), (t.state.closeBrackets = null)),
					n && (o(r(n, "pairs")), (t.state.closeBrackets = n), t.addKeyMap(i));
			});
			var i = {
				Backspace: function (t) {
					var i = l(t);
					if (!i || t.getOption("disableInput")) return e.Pass;
					for (var o = r(i, "pairs"), a = t.listSelections(), s = 0; s < a.length; s++) {
						if (!a[s].empty()) return e.Pass;
						var u = c(t, a[s].head);
						if (!u || o.indexOf(u) % 2 != 0) return e.Pass;
					}
					for (var s = a.length - 1; s >= 0; s--) {
						var f = a[s].head;
						t.replaceRange("", n(f.line, f.ch - 1), n(f.line, f.ch + 1), "+delete");
					}
				},
				Enter: function (t) {
					var n = l(t),
						i = n && r(n, "explode");
					if (!i || t.getOption("disableInput")) return e.Pass;
					for (var o = t.listSelections(), a = 0; a < o.length; a++) {
						if (!o[a].empty()) return e.Pass;
						var u = c(t, o[a].head);
						if (!u || i.indexOf(u) % 2 != 0) return e.Pass;
					}
					t.operation(function () {
						var e = t.lineSeparator() || "\n";
						t.replaceSelection(e + e, null), s(t, -1), (o = t.listSelections());
						for (var n = 0; n < o.length; n++) {
							var r = o[n].head.line;
							t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0);
						}
					});
				},
			};
			function o(e) {
				for (var t = 0; t < e.length; t++) {
					var n = e.charAt(t),
						r = "'" + n + "'";
					i[r] || (i[r] = a(n));
				}
			}
			function a(t) {
				return function (i) {
					return (function (t, i) {
						var o = l(t);
						if (!o || t.getOption("disableInput")) return e.Pass;
						var a = r(o, "pairs"),
							c = a.indexOf(i);
						if (-1 == c) return e.Pass;
						for (
							var d,
								p = r(o, "closeBefore"),
								h = r(o, "triples"),
								m = a.charAt(c + 1) == i,
								g = t.listSelections(),
								v = c % 2 == 0,
								y = 0;
							y < g.length;
							y++
						) {
							var b,
								x = g[y],
								w = x.head,
								k = t.getRange(w, n(w.line, w.ch + 1));
							if (v && !x.empty()) b = "surround";
							else if ((!m && v) || k != i)
								if (m && w.ch > 1 && h.indexOf(i) >= 0 && t.getRange(n(w.line, w.ch - 2), w) == i + i) {
									if (w.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(w.line, w.ch - 2))))
										return e.Pass;
									b = "addFour";
								} else if (m) {
									var C = 0 == w.ch ? " " : t.getRange(n(w.line, w.ch - 1), w);
									if (e.isWordChar(k) || C == i || e.isWordChar(C)) return e.Pass;
									b = "both";
								} else {
									if (!v || !(0 === k.length || /\s/.test(k) || p.indexOf(k) > -1)) return e.Pass;
									b = "both";
								}
							else
								b =
									m && f(t, w)
										? "both"
										: h.indexOf(i) >= 0 && t.getRange(w, n(w.line, w.ch + 3)) == i + i + i
										? "skipThree"
										: "skip";
							if (d) {
								if (d != b) return e.Pass;
							} else d = b;
						}
						var S = c % 2 ? a.charAt(c - 1) : i,
							T = c % 2 ? i : a.charAt(c + 1);
						t.operation(function () {
							if ("skip" == d) s(t, 1);
							else if ("skipThree" == d) s(t, 3);
							else if ("surround" == d) {
								for (var e = t.getSelections(), n = 0; n < e.length; n++) e[n] = S + e[n] + T;
								t.replaceSelections(e, "around"), (e = t.listSelections().slice());
								for (var n = 0; n < e.length; n++) e[n] = u(e[n]);
								t.setSelections(e);
							} else
								"both" == d
									? (t.replaceSelection(S + T, null), t.triggerElectric(S + T), s(t, -1))
									: "addFour" == d && (t.replaceSelection(S + S + S + S, "before"), s(t, 1));
						});
					})(i, t);
				};
			}
			function l(e) {
				var t = e.state.closeBrackets;
				return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t;
			}
			function s(e, t) {
				for (var n = [], r = e.listSelections(), i = 0, o = 0; o < r.length; o++) {
					var a = r[o];
					a.head == e.getCursor() && (i = o);
					var l = a.head.ch || t > 0 ? {line: a.head.line, ch: a.head.ch + t} : {line: a.head.line - 1};
					n.push({anchor: l, head: l});
				}
				e.setSelections(n, i);
			}
			function u(t) {
				var r = e.cmpPos(t.anchor, t.head) > 0;
				return {
					anchor: new n(t.anchor.line, t.anchor.ch + (r ? -1 : 1)),
					head: new n(t.head.line, t.head.ch + (r ? 1 : -1)),
				};
			}
			function c(e, t) {
				var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
				return 2 == r.length ? r : null;
			}
			function f(e, t) {
				var r = e.getTokenAt(n(t.line, t.ch + 1));
				return (
					/\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
				);
			}
			o(t.pairs + "`");
		});
	},
	function (e, t, n) {
		!(function (e) {
			e(n(5));
		})(function (e) {
			var t = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
				n = e.Pos,
				r = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<"};
			function i(e) {
				return (e && e.bracketRegex) || /[(){}[\]]/;
			}
			function o(e, t, o) {
				var l = e.getLineHandle(t.line),
					s = t.ch - 1,
					u = o && o.afterCursor;
				null == u && (u = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
				var c = i(o),
					f =
						(!u && s >= 0 && c.test(l.text.charAt(s)) && r[l.text.charAt(s)]) ||
						(c.test(l.text.charAt(s + 1)) && r[l.text.charAt(++s)]);
				if (!f) return null;
				var d = ">" == f.charAt(1) ? 1 : -1;
				if (o && o.strict && d > 0 != (s == t.ch)) return null;
				var p = e.getTokenTypeAt(n(t.line, s + 1)),
					h = a(e, n(t.line, s + (d > 0 ? 1 : 0)), d, p, o);
				return null == h
					? null
					: {from: n(t.line, s), to: h && h.pos, match: h && h.ch == f.charAt(0), forward: d > 0};
			}
			function a(e, t, o, a, l) {
				for (
					var s = (l && l.maxScanLineLength) || 1e4,
						u = (l && l.maxScanLines) || 1e3,
						c = [],
						f = i(l),
						d = o > 0 ? Math.min(t.line + u, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - u),
						p = t.line;
					p != d;
					p += o
				) {
					var h = e.getLine(p);
					if (h) {
						var m = o > 0 ? 0 : h.length - 1,
							g = o > 0 ? h.length : -1;
						if (!(h.length > s))
							for (p == t.line && (m = t.ch - (o < 0 ? 1 : 0)); m != g; m += o) {
								var v = h.charAt(m);
								if (f.test(v) && (void 0 === a || (e.getTokenTypeAt(n(p, m + 1)) || "") == (a || ""))) {
									var y = r[v];
									if (y && (">" == y.charAt(1)) == o > 0) c.push(v);
									else {
										if (!c.length) return {pos: n(p, m), ch: v};
										c.pop();
									}
								}
							}
					}
				}
				return p - o != (o > 0 ? e.lastLine() : e.firstLine()) && null;
			}
			function l(e, r, i) {
				for (
					var a = e.state.matchBrackets.maxHighlightLineLength || 1e3,
						l = i && i.highlightNonMatching,
						s = [],
						u = e.listSelections(),
						c = 0;
					c < u.length;
					c++
				) {
					var f = u[c].empty() && o(e, u[c].head, i);
					if (f && (f.match || !1 !== l) && e.getLine(f.from.line).length <= a) {
						var d = f.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
						s.push(e.markText(f.from, n(f.from.line, f.from.ch + 1), {className: d})),
							f.to &&
								e.getLine(f.to.line).length <= a &&
								s.push(e.markText(f.to, n(f.to.line, f.to.ch + 1), {className: d}));
					}
				}
				if (s.length) {
					t && e.state.focused && e.focus();
					var p = function () {
						e.operation(function () {
							for (var e = 0; e < s.length; e++) s[e].clear();
						});
					};
					if (!r) return p;
					setTimeout(p, 800);
				}
			}
			function s(e) {
				e.operation(function () {
					e.state.matchBrackets.currentlyHighlighted &&
						(e.state.matchBrackets.currentlyHighlighted(),
						(e.state.matchBrackets.currentlyHighlighted = null)),
						(e.state.matchBrackets.currentlyHighlighted = l(e, !1, e.state.matchBrackets));
				});
			}
			function u(e) {
				e.state.matchBrackets &&
					e.state.matchBrackets.currentlyHighlighted &&
					(e.state.matchBrackets.currentlyHighlighted(), (e.state.matchBrackets.currentlyHighlighted = null));
			}
			e.defineOption("matchBrackets", !1, function (t, n, r) {
				r && r != e.Init && (t.off("cursorActivity", s), t.off("focus", s), t.off("blur", u), u(t)),
					n &&
						((t.state.matchBrackets = "object" == typeof n ? n : {}),
						t.on("cursorActivity", s),
						t.on("focus", s),
						t.on("blur", u));
			}),
				e.defineExtension("matchBrackets", function () {
					l(this, !0);
				}),
				e.defineExtension("findMatchingBracket", function (e, t, n) {
					return (
						(n || "boolean" == typeof t) && (n ? ((n.strict = t), (t = n)) : (t = t ? {strict: !0} : null)),
						o(this, e, t)
					);
				}),
				e.defineExtension("scanForBracket", function (e, t, n, r) {
					return a(this, e, t, n, r);
				});
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, r, i, o) {
				var a,
					l =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control-group condition">\n' +
					(null !=
					(a = e.invokePartial(n(3), t, {
						name: "checkbox",
						hash: {label: "Not", classes: "not"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					(null !=
					(a = e.invokePartial(n(4), t, {
						name: "dropdown",
						hash: {data: null != t ? l(t, "fields") : t, classes: "fields"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					(null !=
					(a = e.invokePartial(n(4), t, {
						name: "dropdown",
						hash: {data: null != t ? l(t, "operators") : t, classes: "operators"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					(null !=
					(a = e.invokePartial(n(21), t, {
						name: "input",
						hash: {placeholder: "Enter search", classes: "term"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					'    <a class="icon icon-minus" href="#"></a>\n</div>'
				);
			},
			usePartial: !0,
			useData: !0,
		});
	},
	function (e, t, n) {
		var r = n(0);
		e.exports = (r.default || r).template({
			compiler: [8, ">= 4.3.0"],
			main: function (e, t, r, i, o) {
				var a,
					l =
						e.lookupProperty ||
						function (e, t) {
							if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
						};
				return (
					'<div class="control-group transformation">\n' +
					(null !=
					(a = e.invokePartial(n(21), t, {
						name: "input",
						hash: {placeholder: "Enter name", classes: "term"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					(null !=
					(a = e.invokePartial(n(4), t, {
						name: "dropdown",
						hash: {data: null != t ? l(t, "operators") : t, classes: "operators"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					(null !=
					(a = e.invokePartial(n(4), t, {
						name: "dropdown",
						hash: {data: null != t ? l(t, "fields") : t, classes: "fields"},
						data: o,
						indent: "    ",
						helpers: r,
						partials: i,
						decorators: e.decorators,
					}))
						? a
						: "") +
					'    <a class="icon icon-minus" href="#"></a>\n</div>'
				);
			},
			usePartial: !0,
			useData: !0,
		});
	},
	function (e, t) {
		let n = {
				GT: function (e, t) {
					return `${e} is greater than ${t}`;
				},
				LT: function (e, t) {
					return `${e} is less than ${t}`;
				},
				EQ: function (e, t) {
					return `${e} is equal to ${t}`;
				},
				IS: function (e, t) {
					return t.startsWith("*") && t.endsWith("*")
						? `${e} includes "${t.replace(/\*/g, "")}"`
						: t.startsWith("*")
						? `${e} ends with "${t.replace(/\*/g, "")}"`
						: t.endsWith("*")
						? `${e} begins with "${t.replace(/\*/g, "")}"`
						: `${e} is "${t}"`;
				},
			},
			r = {
				GT: function (e, t) {
					return `${e} is not greater than ${t}`;
				},
				LT: function (e, t) {
					return `${e} is not less than ${t}`;
				},
				EQ: function (e, t) {
					return `${e} is not equal to ${t}`;
				},
				IS: function (e, t) {
					return t.startsWith("*") && t.endsWith("*")
						? `${e} does not include "${t.replace(/\*/g, "")}"`
						: t.startsWith("*")
						? `${e} does not end with "${t.replace(/\*/g, "")}"`
						: t.endsWith("*")
						? `${e} does not begin with "${t.replace(/\*/g, "")}"`
						: `${e} is not "${t}"`;
				},
			};
		const i = {
			courses: {
				fields: [
					{key: "audit", label: "Audit"},
					{key: "avg", label: "Average"},
					{key: "dept", label: "Department"},
					{key: "fail", label: "Fail"},
					{key: "id", label: "ID"},
					{key: "instructor", label: "Instructor"},
					{key: "pass", label: "Pass"},
					{key: "title", label: "Title"},
					{key: "uuid", label: "UUID"},
					{key: "year", label: "Year"},
				],
			},
			rooms: {
				fields: [
					{key: "address", label: "Address"},
					{key: "fullname", label: "Full Name"},
					{key: "furniture", label: "Furniture"},
					{key: "href", label: "Link"},
					{key: "lat", label: "Latitude"},
					{key: "lon", label: "Longitude"},
					{key: "name", label: "Name"},
					{key: "number", label: "Number"},
					{key: "seats", label: "Seats"},
					{key: "shortname", label: "Short Name"},
					{key: "type", label: "Type"},
				],
			},
		};
		e.exports = class {
			constructor(e) {
				(this.WHERE = e.WHERE),
					(this.OPTIONS = e.OPTIONS),
					(this.TRANSFORMATIONS = e.TRANSFORMATIONS),
					(this.id = JSON.stringify(e).split("_")[0].split('"').slice(-1)[0]),
					i.courses.fields.filter((t) => t.key === JSON.stringify(e).split("_")[1].split('"')[0]).length > 0
						? (this.kind = "courses")
						: (this.kind = "rooms");
			}
			toString() {
				let e = `In ${this.kind} dataset ${this.id}`,
					t = "find all entries";
				Object.keys(this.WHERE).length && (t = `find entries whose ${this.constructFilter(this.WHERE, !1)}`);
				let n = `show ${this.joinByCommaAnd(this.OPTIONS.COLUMNS.map((e) => this.key2Label(e)))}`;
				if (this.TRANSFORMATIONS) {
					e += ` grouped by ${this.joinByCommaAnd(this.TRANSFORMATIONS.GROUP.map((e) => this.key2Label(e)))}`;
					const t = this.TRANSFORMATIONS.APPLY.map((e) => {
						const t = Object.keys(e)[0],
							n = Object.keys(e[t])[0],
							r = e[t][n];
						return `${t} is the ${n} of ${this.key2Label(r)}`;
					});
					n += `, where ${this.joinByCommaAnd(t)}`;
				}
				let r = `${e}, ${t}; ${n}`;
				return (
					this.OPTIONS.ORDER &&
						("string" == typeof this.OPTIONS.ORDER
							? (r += `; sort in ascending order by ${this.key2Label(this.OPTIONS.ORDER)}`)
							: (r += `; sort in ${
									"UP" === this.OPTIONS.ORDER.dir ? "ascending" : "descending"
							  } order by ${this.joinByCommaAnd(
									this.OPTIONS.ORDER.keys.map((e) => this.key2Label(e))
							  )}`)),
					r + "."
				);
			}
			key2Label(e) {
				const t = i[this.kind].fields.filter((t) => t.key === e.split("_").slice(-1)[0]);
				return 1 === t.length ? t[0].label : e;
			}
			joinByCommaAnd(e) {
				return [e.slice(0, -1).join(", "), e.slice(-1)].filter((e) => "" !== e).join(" and ");
			}
			constructFilter(e, t) {
				const i = Object.keys(e)[0];
				if (n[i]) {
					const o = Object.keys(e[i])[0],
						a = e[i][o];
					return t ? r[i](this.key2Label(o), a) : n[i](this.key2Label(o), a);
				}
				return "NOT" === i
					? this.constructFilter(e[i], !t)
					: "AND" === i || "OR" === i
					? e[i].map((e) => this.constructFilter(e, !1)).join(` ${i.toLowerCase()} `)
					: void 0;
			}
		};
	},
	function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = n(10),
			i = n(11),
			o = n(9),
			a = n(58),
			l = n.n(a);
		document.getElementById("submit-button").addEventListener("click", function (e) {
			try {
				let e = Object(r._bq)();
				console.log("Sending query: "),
					console.log(e),
					"string" == typeof e && (console.log("Converted version: "), console.log(new l.a(e).toJSON())),
					Object(i._sq)(e)
						.then(function (e) {
							console.log("Received response: ", e), o.InstructorModule.renderResult(e);
						})
						.catch(function (e) {
							console.error("Error sending query", e.error),
								e.originalError && console.error(e.originalError),
								o.InstructorModule.renderResult(e);
						});
			} catch (e) {
				console.error("Error building query", e), o.InstructorModule.renderResult({error: e});
			}
		});
	},
	function (module, exports, __webpack_require__) {
		(function (global) {
			function assert(e) {
				if (!e) throw new Error("Invalid query string");
			}
			const comparators = {
					"is greater than": {
						operator: "GT",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !1,
					},
					"is not greater than": {
						operator: "GT",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !0,
					},
					"is less than": {
						operator: "LT",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !1,
					},
					"is not less than": {
						operator: "LT",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !0,
					},
					"is equal to": {
						operator: "EQ",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !1,
					},
					"is not equal to": {
						operator: "EQ",
						transform: function (e) {
							const t = Number(e);
							return assert(!isNaN(t) && "" !== e), t;
						},
						negation: !0,
					},
					includes: {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `*${eval(v)}*`;
						},
						negation: !1,
					},
					"does not include": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `*${eval(v)}*`;
						},
						negation: !0,
					},
					"begins with": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `${eval(v)}*`;
						},
						negation: !1,
					},
					"does not begin with": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `${eval(v)}*`;
						},
						negation: !0,
					},
					"ends with": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `*${eval(v)}`;
						},
						negation: !1,
					},
					"does not end with": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), `*${eval(v)}`;
						},
						negation: !0,
					},
					"is not": {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), eval(v);
						},
						negation: !0,
					},
					is: {
						operator: "IS",
						transform: function (v) {
							return assert(!v.includes("*") && v.startsWith('"') && v.endsWith('"')), eval(v);
						},
						negation: !1,
					},
				},
				keys = {
					courses: {
						fields: [
							{key: "audit", label: "Audit"},
							{key: "avg", label: "Average"},
							{key: "dept", label: "Department"},
							{key: "fail", label: "Fail"},
							{key: "id", label: "ID"},
							{key: "instructor", label: "Instructor"},
							{key: "pass", label: "Pass"},
							{key: "title", label: "Title"},
							{key: "uuid", label: "UUID"},
							{key: "year", label: "Year"},
						],
					},
					rooms: {
						fields: [
							{key: "address", label: "Address"},
							{key: "fullname", label: "Full Name"},
							{key: "furniture", label: "Furniture"},
							{key: "href", label: "Link"},
							{key: "lat", label: "Latitude"},
							{key: "lon", label: "Longitude"},
							{key: "name", label: "Name"},
							{key: "number", label: "Number"},
							{key: "seats", label: "Seats"},
							{key: "shortname", label: "Short Name"},
							{key: "type", label: "Type"},
						],
					},
				};
			function singleOrMoreRegex(e) {
				const t = new RegExp(`${e.source} and ${e.source}`),
					n = new RegExp(`(${e.source}, )+${t.source}`);
				return new RegExp(`((${n.source})|${e.source}|${t.source})`);
			}
			class Converter {
				constructor(e) {
					global.DELIVERABLE_D1;
					const t = /[a-zA-Z0-9_ ]+/,
						n = singleOrMoreRegex(t),
						r = singleOrMoreRegex(new RegExp(`${t.source} is the (AVG|SUM|MIN|MAX|COUNT) of ${t.source}`)),
						i = new RegExp(
							"(is greater than|is not greater than|is less than|is not less than|is equal to|is not equal to|includes|does not include|begins with|does not begin with|ends with|does not end with|is|is not)"
						),
						o = new RegExp(`${t.source} ${i.source} ("[^*"]*"|[+-]?([0-9]*[.])?[0-9]+)`);
					let a = /(courses|rooms)/;
					!0 === global.DELIVERABLE_D1 && (a = /courses/);
					let l = new RegExp(
						`^In ${a.source} dataset [a-zA-Z0-9]+( grouped by ${n.source})?, find (entries whose ${o.source}( (and|or) ${o.source})*|all entries); show ${n.source}(, where ${r.source})?(; sort in (ascending|descending) order by ${n.source})?[.]$`
					);
					!0 === global.DELIVERABLE_D1 &&
						(l = new RegExp(
							`^In ${a.source} dataset [a-zA-Z0-9]+, find (entries whose ${o.source}( (and|or) ${o.source})*|all entries); show ${n.source}(; sort in ascending order by ${t.source})?[.]$`
						)),
						assert(l.test(e)),
						e.endsWith(".") && (e = e.substring(0, e.length - 1));
					let s = e.split(/[;]/);
					for (let e of s)
						(e = e.trim()).startsWith("In")
							? (this.loadTypeAndId(e), this.loadWhere(e), this.loadGroup(e))
							: e.startsWith("sort")
							? this.loadSort(e)
							: e.startsWith("show") && (this.loadColumns(e), this.loadApply(e));
				}
				loadTypeAndId(e) {
					(this.kind = e.split(" dataset ")[0].split("In ")[1].trim()),
						(this.id = e
							.split(/ grouped by |,/)[0]
							.split(`${this.kind} dataset`)[1]
							.trim());
				}
				loadGroup(e) {
					if (e.includes(" grouped by ")) {
						const t = e
							.split(/ grouped by /)[1]
							.split(/ find /)[0]
							.split(/,| and /)
							.filter((e) => "" !== e.trim())
							.map((e) => e.trim());
						this.GROUP = t.map((e) => this.label2Key(e));
					}
				}
				loadWhere(e) {
					if (e.includes("find all entries")) return void (this.WHERE = {});
					let t = e.split(", find entries whose")[1],
						n = t.split(/ and | or /).map((e) => e.trim()),
						r = (t.match(/ and | or /g) || []).map((e) => e.trim());
					this.WHERE = this.parseFilters(n, r);
				}
				parseFilters(e, t) {
					if (0 === t.length) return this.parseFilter(e[0]);
					let n = {};
					return (
						(n[t.slice(-1)[0].toUpperCase()] = [
							this.parseFilters(e.slice(0, -1), t.slice(0, -1)),
							this.parseFilter(e.slice(-1)[0]),
						]),
						n
					);
				}
				parseFilter(e) {
					for (let t in comparators)
						if (e.includes(t)) {
							const n = e.split(t)[0].trim();
							!0 === global.DELIVERABLE_D1 && assert("Year" !== n);
							const r = keys[this.kind].fields.filter((e) => e.label === n)[0].key,
								i = e.split(t)[1].trim();
							let o = {};
							return (
								(o[comparators[t].operator] = {}),
								(o[comparators[t].operator][`${this.id}_${r}`] = comparators[t].transform(i.trim())),
								comparators[t].negation && (o = {NOT: o}),
								o
							);
						}
					throw new Error("Something wrong here");
				}
				loadSort(e) {
					const t = e.split("sort in")[1].split("order")[0].trim();
					switch (((this.ORDER = {}), t)) {
						case "ascending":
							this.ORDER.dir = "UP";
							break;
						default:
							this.ORDER.dir = "DOWN";
					}
					this.ORDER.keys = e
						.split("order by ")[1]
						.split(/,| and /)
						.map((e) => e.trim())
						.filter((e) => "" !== e)
						.map((e) => this.label2Key(e));
				}
				label2Key(e) {
					!0 === global.DELIVERABLE_D1 && assert("Year" !== e);
					const t = keys[this.kind].fields.filter((t) => t.label === e);
					return 1 === t.length ? `${this.id}_${t[0].key}` : e;
				}
				loadColumns(e) {
					const t = e
						.split("show")[1]
						.split(" where ")[0]
						.split(/,| and /)
						.map((e) => e.trim())
						.filter((e) => "" !== e)
						.map((e) => this.label2Key(e));
					this.COLUMNS = t;
				}
				loadApply(e) {
					if (e.includes(" where ")) {
						this.APPLY = [];
						const t = e.split(" where ")[1].split(/,| and /);
						for (const e of t) {
							const t = e.split(" is the ")[0].trim(),
								n = e.split(" is the ")[1].split(" of ")[0].trim(),
								r = e.split(" of ")[1].trim();
							let i = {};
							(i[t] = {}), (i[t][n] = this.label2Key(r)), this.APPLY.push(i);
						}
					} else void 0 !== this.GROUP && (this.APPLY = []);
				}
				toJSON() {
					let e = {};
					return (
						(e.WHERE = this.WHERE),
						(e.OPTIONS = {}),
						(e.OPTIONS.COLUMNS = this.COLUMNS),
						void 0 !== this.ORDER && (e.OPTIONS.ORDER = this.ORDER),
						void 0 !== this.GROUP && (e.TRANSFORMATIONS = {GROUP: this.GROUP, APPLY: this.APPLY}),
						e
					);
				}
			}
			module.exports = Converter;
		}.call(exports, __webpack_require__(7)));
	},
	function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = n(9);
		n(10), n(11);
		(window.CampusExplorer = {
			buildQuery: function (e) {
				return console.log("CampusExplorer.buildQuery not implemented yet."), null;
			},
			sendQuery: function (e, t) {
				return new Promise(function (e, t) {
					console.log("CampusExplorer.sendQuery not implemented yet.");
				});
			},
			renderResult: r.InstructorModule.renderResult,
		}),
			(window.____BUILD_INFO____ = {PLATFORM: "310", TARGET: "prod", QUERY_LANGUAGE: "json", TABS: "plain"});
	},
]);
