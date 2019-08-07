function templateFunction(locals) {
  var buf = [];
  var pug_mixins = {};
  var pug_interp;

  var locals_for_with = (locals || {});

  (function (author) {
    buf.push("<h1>This is a template</h1><h2>From "
      + (pug.escape((pug_interp = author) == null ? '' : pug_interp))
      + "</h2>");
  }.call(this, "author" in locals_for_with ?
    locals_for_with.author : typeof author !== "undefined" ?
      author : undefined)
  );

  return buf.join("");
}