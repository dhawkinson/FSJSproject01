//	debugger;
/****************************************************************
*****************************************************************

	DECLARE - Global Variables

*****************************************************************
****************************************************************/

// quotes Array - all the quotes & sources to be displayed

var quotes = [

	{quote:'"Of two evils, choose neither."',source:"Charles H. Spurgeon",nationality:"British",vocation:"Clergyman",born:"6/19/1834",died:"1/31/1892",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/6/2016"},
	{quote:'"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing."',source:"George Bernard Shaw",nationality:"Irish",vocation:"Dramatist",born:"7/26/1856",died:"11/2/1950",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/6/2016"},
	{quote:'"For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?"',source:"Jesus Christ",nationality:"Jewish",vocation:"Leader",born:"c. 4 BC",died:"c. 29 AD",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"It isn'+"'"+'t that they can'+"'"+'t see the solution. It is that they can'+"'"+'t see the problem."',source:"Gilbert K. Chesterton",nationality:"English",vocation:"Writer",born:"5/29/1874",died:"6/14/1936",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"Whenever you find yourself on the side of the majority, it is time to pause and reflect."',source:"Mark Twain",nationality:"American",vocation:"Author",born:"11/30/1835",died:"4/21/1910",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"The least productive people are usually the ones who are most in favor of holding meetings."',source:"Thomas Sowell",nationality:"American",vocation:"Economist",born:"6/30/1930",died:"",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"Truth that is not undergirded by love makes the truth obnoxious and the possessor of it repulsive."',source:"Ravi Zacharias",nationality:"American",vocation:"Author",born:"3/26/1946",died:"",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"You are never too old to set a new goal or dream another dream."',source:"C. S. Lewis",nationality:"Irish",vocation:"Author",born:"11/29/1898",died:"11/22/1963",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"},
	{quote:'"Ignoring facts does not make them go away."',source:"Fran Tarkenton",nationality:"American",vocation:"Althete",born:"2/3/1940",died:"",citation:"BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com...",accessed:"5/9/2016"}
];

// colors Array - all the color schemes to be used

var colors = [

	{bkgd:"#F44336",text:"#4336F4",boxBkgd:"#36F443"},	//	red background
	{bkgd:"#3F51B5",text:"#51B53F",boxBkgd:"#B53F51"},	//	indigo background
	{bkgd:"#009688",text:"#968800",boxBkgd:"#880096"},	//	teal background
	{bkgd:"#FFEB3B",text:"#EB3BFF",boxBkgd:"#3BFFEB"},	//	yellow background
	{bkgd:"#607D8B",text:"#7D8B60",boxBkgd:"#8B607D"},	//	blue grey background
	{bkgd:"#FF5722",text:"#5722FF",boxBkgd:"#22FF57"},	//	deep orange background
	{bkgd:"#CDDC39",text:"#DC39CD",boxBkgd:"#39CDDC"},	//	lime background
	{bkgd:"#03A9F4",text:"#A9F403",boxBkgd:"#F403A9"},	//	light blue background
	{bkgd:"#FFC107",text:"#C107FF",boxBkgd:"#07FFC1"}	//	amber background
];

//	One-off Global variables

var timer = '';    				//	display timer
var q = -1;						//	random number for quotes
var quoteTracker = '';			//	string built up from quote indices used

/****************************************************************
*****************************************************************

	DECLARE - the functions

*****************************************************************
****************************************************************/

function displayQuote() {		//	define display function

	//	index into quotes with q and extract variables

	var quote = quotes[q].quote;			//	the text of the quote
	var source = quotes[q].source;			//	the source/author of the quote
	var nationality = quotes[q].nationality;//	the nationality of the source
	var vocation = quotes[q].vocation;		//	the vocation of the source
	var born = quotes[q].born;				//	the birthdate of the source
	var died = quotes[q].died;				//	the death date of the source
	var citation = quotes[q].citation;		//	the citation for the quote
	var accessed = quotes[q].accessed;		//	date the quote was found

	//	build html

	var p1 = '<div id="quoteItem"><p class="quote">'+quote+'</p>';
	var p2 = '<p class="source">'+source+
	'<span class="nationality">'+nationality+
	'</span><span class="profession">'+vocation+
	'</span><span class="birth">'+born+'</span><span class="death">';
	if (died.length === 0) {
		p2=p2+'“'+new Array(10).join(' ')+'”';
	} else {
		p2=p2+died;
	}
	p2=p2+'</span></p>';
	var p3 = '<p class="citation">'+citation+'<span class="dateAccessed">'+accessed+'</span></p></div>';

	var newQuote = p1+p2+p3;				//	the body of the quote

	//	index into colors with q and set colors

	var bkgd = colors[q].bkgd;		//	body background-color
	var text = colors[q].text;		//	quotebox text
	var boxBkgd = colors[q].boxBkgd;	//	quotebox background color
	var boxShadow = colors[q].text;	//	quotebox box-shadow

	//	build html - body backgound color, quote content & quote style

	var bodyStyle = 'background-color: '+bkgd+'; width: 100%; height: 100%';	//	set value of background color 
	var quoteStyle = 'background-color: '+boxBkgd+'; color: '+
	text+'; box-shadow: 10px 10px 30px '+boxShadow;								//	set value of quote box background, text color, shadow color
	// .setAttribute avoids Safari limitation of one style element in a .style
	document.getElementById('bodyContainer').setAttribute('style',bodyStyle);	//	modify HTML for page background 
	document.getElementById('quoteContainer').innerHTML = newQuote;				//	modify HTML for quote content
	
	document.getElementById('quoteContainer').setAttribute('style',quoteStyle);	//	modify HTML for quote box color-scheme 

	return;
} 

function getRandomQuote() {		// define getQuote function

	//	generate random number q between 0 & 9 and only used once 
	//	until all others are picked - for quotes

	var quoteDisplayed = false;						//	assume quote has not yet been displayed
	
	if (quoteTracker.length < 9) {						// Tracker.length < 9 until all quotes have been displayed
		do {
			q = Math.floor((Math.random() * 9) + 1);
			q-=1;
			var s=q.toString();

			if (quoteTracker.search(s) === -1) {		//	test - if -1, quote not yet displayed
				quoteTracker=quoteTracker+s;			//	concatenate random number to tracker
				displayQuote();							//	invoke displayQuote function
				quoteDisplayed=true;					//	set Displayed value for next test
			} 
		} while (quoteDisplayed === false);
	} else {
		endOfQuotes();
	}
	return;		//	return to invoker, could be loadItem click Event. Could be streamRandomQuotes function
}

function clockStart() { 
	if (timer) return;
	timer = setInterval(getRandomQuote, 5000);
}

function clockStop() {
	clearInterval(timer);
	timer = null;
	return;
}

function endOfQuotes() {		// define end of job function

	var endOfList = '<div class="endOfList"><p>You have reached the end of the Quotes</p></div>';
	endOfList=endOfList+'<style>'+'.endOfList {'+'background-color: #FFEEEE;'+
	' border: 2px solid black; border-radius: 10px; color: #212121; padding: 10px;}</style>';

	document.getElementById('btnContainer').innerHTML = endOfList;

	clockStop();

	return;
}

/******************************************************************
*******************************************************************

	Main Processing

*******************************************************************
******************************************************************/
//
//	I could have used HTML inline coding for the click event as follows:
//
//		<button id="loadItem" onclick="getRandomQuote()">Show Another Quote</button>
//
//	I made the decision to use the external (js) call to the click handler for the following reasons
//
//		1. It is a best pratcie to use external js when possible
//		2. The only browser for which the approach will not work is IE 8 and below
//		3. According to stats from caniuse.com the coverage is over 95% in the US and over 94% globally
//
//	I am documenting this so I will remember it later.

//debugger;

var clickElement = document.getElementById("loadItem");
clickElement.addEventListener("click", getRandomQuote, false);

clockStart();

