﻿(function (b) {
    var g = function (a) { if (a.metaKey || a.ctrlKey) return !0; if (32 === a.which) return !1; if (0 === a.which || (8 === a.which || 46 === a.which) || 33 > a.which) return !0; a = String.fromCharCode(a.which); return !!/[\d\s]/.test(a) }, k = function (a) { var d = String.fromCharCode(a.which), c = b(a.currentTarget).val(); return 0 === c.length ? /[a-uA-U]/.test(d) : -1 !== [8, 46].indexOf(a.which) ? !0 : 19 === c.length ? !1 : g(a) }, h = function (a) {
        var d, c = b(a.currentTarget).val(); return setTimeout(function () {
            d = b(a.currentTarget).val(); /^\d+$/.test(d) ||
                b(a.currentTarget).val(c)
        }, 0)
    }, l = function (a) { var d, c, f, e; e = b(a.currentTarget); f = /(^\d{3}$)|(^\d{3} \d{7}$)/; d = String.fromCharCode(a.which); c = e.val(); return 11 < (c.replace(/\D/g, "") + d).length ? !1 : f.test(c) ? (a.preventDefault(), e.val(c + " " + d)) : f.test(c + d) ? (a.preventDefault(), e.val(c + d + " ")) : !0 }, j = {
        cedula: function () { var a = this; a.on("keypress", g); a.on("keypress", l); a.on("paste", h); a.validar = function () { return b.SDQ.validarCedula(a.val()) }; return a }, rnc: function () {
            var a = this; a.on("keypress", g); a.on("paste",
                h); a.validar = function () { return b.SDQ.validarRNC(a.val()) }; return a
        }, nss: function () { var a = this; a.on("keypress", g); a.on("paste", h); a.validar = function () { return b.SDQ.validarNSS(a.val()) }; return a }, ncf: function () { var a = this; a.on("keypress", k); a.validar = function () { return b.SDQ.validarNCF(a.val()) }; return a }
    }, m = "00000000018 11111111123 00100759932 00105606543 00114272360 00200123640 00200409772 00800106971 01200004166 01400074875 01400000282 03103749672 03200066940 03800032522 03900192284 04900026260 05900072869 07700009346 00114532330 03121982479 40200700675 40200639953 00121581750 00119161853 22321581834 00121581800 09421581768 22721581818 90001200901 00301200901 40200452735 40200401324 10621581792".split(" ");
    b.SDQ || (b.SDQ = {}); b.fn.SDQ = function (a) { if (j[a]) return j[a].apply(this, Array.prototype.slice.call(arguments, 1)); if ("object" === typeof a || !a) return j.init.apply(this, arguments); b.error("Method " + a + " does not exist on jQuery.SDQ") }; b.SDQ.validarCedula = function (a) { a = a.replace(/\s/g, ""); if (11 !== a.length || !/^\d+$/.test(a)) return !1; if (-1 < jQuery.inArray(a, m)) return !0; var d, c, b = 0, e = 1; for (c = a.length - 1; 0 <= c; c -= 1)d = Number(a.charAt(c)) * e, 9 < d && (b += 1, d -= 10), b += d, e = 1 === e ? 2 : 1; return 0 === b % 10 }; b.SDQ.validarRNC = function (a) {
        a =
        a.replace(/\s/g, ""); if (9 !== a.length || !/^\d+$/.test(a)) return !1; var b, c; c = 0; var f = [7, 9, 8, 6, 5, 4, 3, 2]; a = a.split("").map(function (a) { return parseInt(a, 10) }); for (b = f.length - 1; 0 <= b; b -= 1)c += f[b] * a[b]; c %= 11; switch (c) { case 0: c = 2; break; case 1: c = 1; break; default: c = 11 - c }return c === a.slice(-1)[0]
    }; b.SDQ.validarNCF = function (a) { a = a.replace(/\s/g, ""); return /[a-uA-U]\d{2}\d{3}\d{3}\d{2}\d{8}/.test(a) && 19 === a.length }; b.SDQ.validarNSS = function (a) { a = a.replace(/\s/g, ""); return 9 !== a.length || !/^\d+$/.test(a) ? !1 : !0 }
})(jQuery);
