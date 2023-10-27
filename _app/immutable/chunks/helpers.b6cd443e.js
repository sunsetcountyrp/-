const f = "3pyisqe8",
    d = "production";

function o(e, n, s) {
    let t = "";
    return e.internalLink != null ? (n.forEach(i => {
        i._id == e.internalLink._ref && (t = `/pages/${i.slug.current}`)
    }), s.forEach(i => {
        i._id == e.internalLink._ref && (t = `/guides/${i.slug.current}`)
    })) : e.externalUrl != null && (t = e.externalUrl), t
}

function g(e, n) {
    let s = [];
    return e.forEach(t => {
        let i = n.find(a => a._id == t._ref);
        s.push(i)
    }), s
}

function h(e) {
    const n = new Date,
        s = new Date(e),
        t = Math.floor((n.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 31)),
        i = n.getTime() - s.getTime(),
        a = Math.floor(i / (1e3 * 60 * 60 * 24)),
        l = Math.floor(a / 31),
        r = Math.floor(l / 12),
        u = a - l * 31,
        c = l - r * 12;
    return t < 12 ? t == 1 ? "1 month" : t + " months" : c !== 0 ? r + " years, " + c + " months, and " + u + " days" : r + " years, " + u + " days"
}

function T(e) {
    let n = "Member";
    return e == null || e.length == 0 || (e.includes("653832106602135590") ? n = "Server Owner" : e.includes("610616878267891733") ? n = "Super Admin" : e.includes("556292977606262826") ? n = "Admin" : e.includes("997977544953442405") ? n = "Liaison" : e.includes("785671621070946346") ? n = "New Member" : e.includes("816117664384679936") ? n = "Tebex Mythic" : e.includes("816121525945499760") ? n = "Tebex WTF" : e.includes("816117142911057920") ? n = "Tebex Legend" : e.includes("816116980272201778") ? n = "Tebex Onyx" : e.includes("816116727329980517") ? n = "Tebex Diamond" : e.includes("816116579389538304") ? n = "Tebex Ruby" : e.includes("816116425097740289") ? n = "Tebex Sapphire" : e.includes("816116061094936596") && (n = "Tebex Emerald")), n
}

function p(e) {
    return !!(e.includes("816117664384679936") || e.includes("816121525945499760") || e.includes("816117142911057920") || e.includes("816116980272201778") || e.includes("816116727329980517") || e.includes("816116579389538304") || e.includes("816116425097740289") || e.includes("816116061094936596"))
}

function y(e, n = 1024, s = 768) {
    if (!e || typeof e != "string") return "";
    let t = e.replace("image-", "");
    const i = t.lastIndexOf("-");
    return t = t.slice(0, i) + "." + t.slice(i + 1), "https://cdn.sanity.io/images/" + f + "/" + d + "/" + t + "?w=" + n + "&h=" + s + "&auto=format"
}

function x(e) {
    let n = e.split("/");
    return n[n.length - 2].split(".")[0]
}

function I(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
export {
    h as a, o as b, g as c, p as d, x as e, I as f, T as g, y as h
};