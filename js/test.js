! function(t, e) {
	var s = e.body,
		n = e.querySelector.bind(e),
		a = e.querySelectorAll.bind(e),
		o = n("html"),
		r = n("#header"),
		d = n("#mask"),
		m = t.requestAnimationFrame,
		v = 12,
		g = Array.prototype.forEach,
		p = "ontouchstart" in t && /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent) ? "touchstart" : "click",
		L = /micromessenger/i.test(navigator.userAgent),
		y = function() {},
		w = function(t) {
			var e = t.offsetLeft,
				i = t.offsetTop;
			if (t.offsetParent) {
				var s = arguments.callee(t.offsetParent);
				e += s.x, i += s.y
			}
			return {
				x: e,
				y: i
			}
		},
		x = function() {
			return e.documentElement.scrollTop || e.body.scrollTop
		},
		$ = {
			
			fixedHeader: function(t) {
				t > r.clientHeight ? r.classList.add("fixed") : r.classList.remove("fixed")
			},
			toc: function() {
				var t = n("#markdown-toc");
				if (!t || !t.children.length) return {
					fixed: y,
					actived: y
				};
				var e = n("#header").clientHeight,
					s = r.clientHeight,
					a = n("#post-content").querySelectorAll("h1, h2, h3, h4, h5, h6");
				t.querySelector('a[href="#' + a[0].id + '"]').parentNode.classList.add("active");
				var o = t.querySelectorAll(".post-toc-child");
				for (i = 0, len = o.length; i < len; i++) o[i].classList.add("post-toc-shrink");
				var c = t.querySelector('a[href="#' + a[0].id + '"]').nextElementSibling;
				c && (c.classList.add("post-toc-expand"), c.classList.remove("post-toc-shrink")), t.classList.remove("post-toc-shrink");
				var l = function(t, e) {
					t.classList.remove("active"), e.classList.add("active");
					var i = e.parentElement.querySelectorAll(".post-toc-child");
					for (j = 0, len1 = i.length; j < len1; j++) i[j].classList.remove("post-toc-expand"), i[j].classList.add("post-toc-shrink");
					var s = e.querySelector(".post-toc-child");
					s && (s.classList.remove("post-toc-shrink"), s.classList.add("post-toc-expand"))
				};
				return {
					fixed: function(i) {
						i >= e - s ? t.classList.add("fixed") : t.classList.remove("fixed")
					},
					actived: function(e) {
						for (i = 0, len = a.length; i < len; i++)
							if (e > w(a[i]).y - s - 5) {
								var n = t.querySelector("li.active"),
									o = t.querySelector('a[href="#' + a[i].id + '"]').parentNode;
								l(n, o)
							}
						e < w(a[0]).y && l(t.querySelector("li.active"), t.querySelector('a[href="#' + a[0].id + '"]').parentNode)
					}
				}
			}(),
			
			tabBar: function(t) {
				t.parentNode.parentNode.classList.toggle("expand")
			}
		};
	t.addEventListener("DOMContentLoaded", function() {
		var t = x();
		$.toc.fixed(t), $.toc.actived(t)
	});
	 e.addEventListener("scroll", function() {
		var t = x();
		 $.toc.fixed(t), $.toc.actived(t)
	}, !1)
}(window, document);