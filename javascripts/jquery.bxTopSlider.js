! function (a) {
    a.fn.TopSlider = function (b) {
        var c = a.extend({
            blogURL: "", labelName: "", maxItem: 6, showPostTitle: true, postTitleStyle: "default", imageWidth: 544, imageHeight: 280, animation: "fade", controlNav: true, directionNav: true, pauseOnHover: false, slideshowSpeed: 7000, animationSpeed: 600, animationLoop: true,
        }, b);
        return this.each(function () {
            var b = a(this), d = b.attr("id"), e = c.blogURL + "/feeds/posts/default/" + (0 == c.labelName.length ? "" : "-/" + c.labelName.replace(/\,(\s+)?/g, "/")) + "?max-results=" + c.maxItem + "&orderby=published&alt=json-in-script"; a.ajax({
                type: "GET", url: e, async: !1, contentType: "application/json", dataType: "jsonp", success: function (a) { var css, content, f, g, h, i, j, k, l, m, n, o, p, q, e = a.feed.entry || []; for (f = "", f += '<div class="carousel-inner" role="listbox">', g = 0; g < e.length; ++g) { for (i = e[g], j = i.title.$t, content = i.content.$t, k = i.media$thumbnail ? i.media$thumbnail.url : "http://3.bp.blogspot.com/-sWtp_qRPNT8/UZYmQq5sAdI/AAAAAAAAEec/7YDbpK4Q6g8/s72-c/default+image.png", l = k.replace("s72-c", "w" + c.imageWidth + "-h" + c.imageHeight + "-c"), m = i.link || [], h = 0; h < m.length && "alternate" != m[h].rel; ++h); css = (g == 0) ? 'active' : '', n = m[h].href, o = '<img src="' + l + '"/>', p = c.showPostTitle ? '<p class="carousel-caption' + ("default" == c.postTitleStyle ? "" : " " + c.postTitleStyle) + '"><span>' + j + "</span></p>" : "", q = '<a href="' + n + '" target="_self" title="' + j + '">' + content + "</a>", f += "<div class='item " + css + "'>" + q + "</div>" } f += "</div>", b.append(f) }, error: function (a, c, d) { b.append('<div class="error"><p>No Result! Or Error Loading Feed</p></div') },
                complete: function () { a("#" + d).bxSlider({
}) }
            })
        })
    }
