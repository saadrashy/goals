

const xmlString =
'<map version="0.9.0">'+
    '<node TEXT="" FOLDED="false" POSITION="right" ID="63fa0b98f400c4e947a9119f" X_COGGLE_POSX="-185" X_COGGLE_POSY="33">'+
        '<edge COLOR="#b4b4b4"/>'+
        '<font NAME="Helvetica" SIZE="17"/>'+
        '<node TEXT="1" FOLDED="false" POSITION="right" ID="aabda3c6fb22315bf567c26b">' +
            '<edge COLOR="#ebd95f"/>'+
            '<font NAME="Helvetica" SIZE="15"/>'+
            '<node TEXT="2" FOLDED="false" POSITION="right" ID="b6a86351321734c1ac2b5bef">'+
                '<edge COLOR="#ebd65d"/>'+
               ' <font NAME="Helvetica" SIZE="13"/>'+
                '<node TEXT="3" FOLDED="false" POSITION="right" ID="42c836aa7330f91b5ca3fa94">'+
                   ' <edge COLOR="#ebd253"/>'+
                   ' <font NAME="Helvetica" SIZE="12"/>'+
                  '  <node TEXT="4" FOLDED="false" POSITION="right" ID="a84dc4cf38ea87bb18982c2f">'+
                       ' <edge COLOR="#ebd055"/>'+
                        '<font NAME="Helvetica" SIZE="12"/>'+
                    '</node>'+
                '</node>'+
            '</node>'+
        '</node>'+
        '<node TEXT="a" FOLDED="false" POSITION="right" ID="7581b273dbfebfbb63eb8548">'+
            '<edge COLOR="#efa670"/>'+
            '<font NAME="Helvetica" SIZE="15"/>'+
            '<node TEXT="b" FOLDED="false" POSITION="right" ID="ebd3df451497a6d405ac6e62">'+
               ' <edge COLOR="#efa26c"/>'+
                '<font NAME="Helvetica" SIZE="13"/>'+
                '<node TEXT="4" FOLDED="false" POSITION="right" ID="10b2e5a75b0d79b339c7b9c4">'+
                    '<edge COLOR="#ed9962"/>'+
                   ' <font NAME="Helvetica" SIZE="12"/>'+
             '</node>'+
            '</node>'+
        '</node>'+
    '</node>'+
'</map>'; // replace with the XML string
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const nodes = xmlDoc.getElementsByTagName("node");
const nodeTexts = [];

for (let i = 0; i < nodes.length; i++) {
  const node = nodes[i];
  const text = node.getAttribute("TEXT");
  if (text !== null && text !== "") {
    nodeTexts.push(text);
  }
}

const nodeTextsHtml = nodeTexts.map(text => `<li>${text}</li>`).join("");
const html = `<ul>${nodeTextsHtml}</ul>`;

// display the HTML somewhere in the page
document.body.innerHTML += html;







