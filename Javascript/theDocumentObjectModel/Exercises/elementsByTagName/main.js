function byTagName(node, tagName) {
    var found = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName)
            found.push(child);
          explore(child);
        }
      }
    }

    explore(node);
    return found;
}

console.log(byTagName(document.body, "h1").length); // prints 1
console.log(byTagName(document.body, "span").length); // prints 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length); // prints 2
