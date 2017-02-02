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
	'a': 'alt-right',
	'b': 'blacks',
	'c': 'cuckold',
	'd': 'dummy',
	'e': 'extra',
	'f': 'fabulous',
	'g': 'great',
	'h': 'hussy',
	'i': 'idiot',
	'j': 'jerk',
	'k': 'klan',
	'l': 'loser',
	'm': 'mexican',
	'n': 'nasty',
	'o': 'opponent',
	'p': 'pussy',
	'q': 'queer',
	'r': 'russia',
	's': 'snowflake',
	't': 'tough',
	'u': 'ugly',
	'v': 'vicious',
	'w': 'wall',
	'x': 'xoxoxo',
	'y': 'yuck',
	'z': 'zzz',
    };

    // REPLACE TEXT IN CURRENT NODE
    for (var i = 0; i < orig.length; i++) {

	// replace any Roman characters
	if (orig[i] in letters) {
	    new_text += letters[orig[i]];
	}

	// (handle capitalized letters too)
	else if (orig[i].toLowerCase() in letters) {
	    new_text += letters[orig[i].toLowerCase()].toUpperCase();
	}

	// keep all other characters (e.g. puncutation)
	else {
	    new_text += orig[i];
	}
    }
    // set text node to replaced text
    text.nodeValue = new_text;
}
