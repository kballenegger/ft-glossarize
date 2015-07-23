// to extract glossary
function doNotCallMe () {
  var glossary = {};
  $('tr[align][class][style]').each(function () {
    var children   = $(this).children();
    var term       = $(children[0]).text();
    var definition = $(children[1]).text();
    if (glossary[term]) {
      glossary[term] = glossary[term] + "\n- OR -\n" + definition;
    } else {
      glossary[term] = definition;
    }
  });
  document.body.innerHTML = JSON.stringify(glossary);
}
