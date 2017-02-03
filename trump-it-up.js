walk(document.body);

function walk(node) {

    // This function copied from Stack Overflow answer: // http://is.gd/mwZp7E
    
    var child, next;

    switch (node.nodeType) {
    case 1: 
    case 9:  
    case 11: 
	child = node.firstChild;
	while (child) {
	    next = child.nextSibling; 
	    walk(child);
	    child = next;
	}
	break;

    case 3: 
	replaceText(node);
	break;
    }
}


function replaceText(text) 
{
    // SET UP VARS & NEW ALPHABET
    var orig = text.nodeValue;
    var new_text = ""

    var letters = {
	'a': 'news ',
	'b': 'swamp ',
	'c': 'washington ',
	'd': 'hate ',
	'e': 'america ',
	'f': 'safe ',
	'g': 'dope ',
	'h': 'ego ',
	'i': 'bad ',
	'j': 'fake ',
	'k': 'nasty ',
	'l': 'totally ',
	'm': 'failing ',
	'n': 'amazing ',
	'o': 'vote ',
	'p': 'dead ',
	'q': 'destroyed ',
	'r': 'crooked ',
	's': 'media ',
	't': 'president ',
	'u': 'dumb ',
	'v': 'backruptcy ',
	'w': 'talking ',
	'x': 'guns ',
	'y': 'biggly ',
	'z': 'worthless ',

	'A': 'A mess! ',
	'B': 'Overrated! ',
	'C': 'Fools! ',
	'D': 'Incompetent! ',
	'E': 'Great! ',
	'F': 'Unfair! ',
	'G': 'Clowns! ',
	'H': 'Haters! ',
	'I': 'Stupid! ',
	'J': 'Slobs! ',
	'K': 'Total loser! ',
	'L': 'Boring! ',
	'M': 'Biased! ',
	'N': 'Weak! ',
	'O': 'Terrible! ',
	'P': 'Disgusting! ',
	'Q': 'No talent! ',
	'R': 'Huge! ',
	'S': 'Losers! ',
	'T': 'Sad! ',
	'U': 'Pathetic! ',
	'V': 'Irrelevant! ',
	'W': 'Moron! ',
	'X': 'No money! ',
	'Y': 'Very sad! ',
	'Z': 'Gross! ',

	'1': 'President Obama, ',
	'2': 'Hillary Clinton, ',
	'3': 'Elizabeth Warren, ',
	'4': 'David Brooks, ',
	'5': 'Mitt Romney, ',
	'6': 'John Kasich, ',
	'7': 'Marco Rubio, ',
	'8': 'Rich Lowry, ',
	'9': 'Nicole Wallace, ',
	'0': 'Megyn Kelly, ',
    };

    // REPLACE TEXT IN CURRENT NODE
    for (var i = 0; i < orig.length; i++) {

	// replace any characters in new alphabet
	if (orig[i] in letters)
	    new_text += letters[orig[i]];

	// keep all other characters (e.g. punctuation)
	else 
	    new_text += orig[i];
    }
    // set text node to replaced text
    text.nodeValue = new_text;
}
