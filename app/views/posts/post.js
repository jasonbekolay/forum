function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),post = locals_.post,moment = locals_.moment;buf.push("<div class=\"post\"><div class=\"meta clearfix\"><div class=\"username datum\">" + (jade.escape(null == (jade.interp = post.user.name) ? "" : jade.interp)) + "</div><div class=\"time datum\"><i class=\"fa fa-clock-o\"></i><div" + (jade.attrs({ 'data-timestamp':(post.created_at), "class": [('distance')] }, {"data-timestamp":true})) + ">" + (jade.escape(null == (jade.interp = moment(post.created_at).fromNow()) ? "" : jade.interp)) + "</div></div></div><div class=\"content\">" + (null == (jade.interp = post.body) ? "" : jade.interp) + "</div></div>");;return buf.join("");
}
