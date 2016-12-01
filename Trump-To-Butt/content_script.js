walk(document.body);

var rpl = "butt";
function loadRpl() {
  var rpl = localStorage["rpl"];
  return rpl;
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

  rpl = loadRpl();
	v = v.replace(/\bTrump\b/g, rpl);
	
	textNode.nodeValue = v;
}


