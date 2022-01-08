// defer: This attribute tells the browser to execute the <script> file when the entire HTML document gets fully parsed.
// The defer attribute is not allowed in older browsers, so for older browsers we have to use the alternative of the defer attribute. The alternative solution is that we must have to specify the <script> section just before the </body> tag of HTML file. 

function talksAbout(node, string) { 

    if (node.nodeType == Node.ELEMENT_NODE) { 
      for (let child of node.childNodes) { 
        if (talksAbout(child, string)) { 
          return true; 
        } 
      } return false; 
    } else if (node.nodeType == Node.TEXT_NODE) { 
      return node.nodeValue.indexOf(string) > -1; 
    }  
}

console.log(talksAbout(document.body, "book")); 
// → true
let link = document.body.getElementsByTagName("a")[0]; // get the 1st link of body
console.log(link.href);

let paragraphs = document.body.getElementsByTagName("p"); 
document.body.insertBefore(paragraphs[6], paragraphs[4]); 

//Creating nodes
function replaceImages() { 
    let images = document.body.getElementsByTagName("img"); 

    for (let i = images.length - 1; i >= 0; i--) { 
        let image = images[i]; 

        if (image.alt) { 
            let text = document.createTextNode(image.alt); 
            image.parentNode.replaceChild(text, image); 
        }
    }
} 

function elt(type, ...children) { 
    let node = document.createElement(type); 

    for (let child of children) { 
        if (typeof child != "string") node.appendChild(child); 
        else node.appendChild(document.createTextNode(child)); 
    } 

    return node;
}

document.getElementById("quote").appendChild( 
    elt("footer", "—", 
        elt("strong", "Karl Popper"), ", preface to the second edition of ", 
            elt("em", "The Open Society and Its Enemies"), ", 1950")
); 


