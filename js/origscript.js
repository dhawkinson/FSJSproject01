// Initialize varialbles

// quotes Array

var $quotes = new Array(7);
for (i=0; 1<9; i++);
	$quotes[i] = new Array(7);

$quotes[0][0]="Of two evils, choose neither.";$quotes[0][1]="Charles H. Spurgeon";$quotes[0][2]="British";$quotes[0][3]="Clergyman";$quotes[0][4]="6/19/1834";$quotes[0][5]="1/31/1892";$quotes[0][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/c/charlesspu165811.html.";$quotes[0][7]="5/6/2016";
$quotes[1][0]="A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.";$quotes[1][1]="George Bernard Shaw";$quotes[1][2]="Irish";$quotes[1][3]="Dramatist";$quotes[1][4]="7/26/1856";$quotes[1][5]="11/2/1950";$quotes[1][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/g/georgebern102967.html.";$quotes[1][7]="5/6/2016";
$quotes[2][0]="For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?";$quotes[2][1]="Jesus Christ";$quotes[2][2]="Jewish";$quotes[2][3]="Leader";$quotes[2][4]="Unstated";$quotes[2][5]="Unstated";$quotes[2][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/j/jesuschris414647.html.";$quotes[2][7]="5/9/2016";
$quotes[3][0]="It isn't that they can't see the solution. It is that they can't see the problem.";$quotes[3][1]="Gilbert K. Chesterton";$quotes[3][2]="English";$quotes[3][3]="Writer";$quotes[3][4]="5/29/1874";$quotes[3][5]="6/14/1936";$quotes[3][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/g/gilbertkc124669.html.";$quotes[3][7]="5/9/2016";
$quotes[4][0]="Whenever you find yourself on the side of the majority, it is time to pause and reflect.";$quotes[4][1]="Mark Twain";$quotes[4][2]="American";$quotes[4][3]="Author";$quotes[4][4]="11/30/1835";$quotes[4][5]="4/21/1910";$quotes[4][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/m/marktwain122378.html.";$quotes[4][7]="5/9/2016";
$quotes[5][0]="The least productive people are usually the ones who are most in favor of holding meetings."; $quotes[5][1]="Thomas Sowell";$quotes[5][2]="American";$quotes[5][3]="Economist";$quotes[5][4]="6/30/1930";$quotes[5][5]="";$quotes[5][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/t/thomassowe381907.html.";$quotes[5][7]="5/9/2016";
$quotes[6][0]="Truth that is not undergirded by love makes the truth obnoxious and the possessor of it repulsive.";$quotes[6][1]="Ravi Zacharias";$quotes[6][2]="American";$quotes[6][3]="Author";$quotes[6][4]="3/26/1946";$quotes[6][5]="";$quotes[6][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/r/ravizachar527677.html.";$quotes[6][7]="5/9/2016";
$quotes[7][0]="Your are never too old to set a new goal or dream another dream.";$quotes[7][1]="C. S. Lewis";$quotes[7][2]="Irish";$quotes[7][3]="Author";$quotes[7][4]="11/29/1898";$quotes[7][5]="11/22/1963";$quotes[7][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/c/cslewis119176.html.";$quotes[7][7]="5/9/2016";
$quotes[8][0]="Ignoring facts does not make them go away.";$quotes[8][1]="Fran Tarkenton";$quotes[8][2]="American";$quotes[8][3]="Althete";$quotes[8][4]="2/3/1940";$quotes[8][5]="";$quotes[8][6]="BrainyQuote.com, Xplore Inc, 2016. http://www.brainyquote.com/quotes/quotes/f/frantarken507657.html.";$quotes[8][7]="5/9/2016";

// colors Array

var $colors = new Array[2];
for (i=0; 1<3; i++);
	$quotes[i] = new Array(2);

$colors[0][0]="#F44336";$colors[0][1]="#B71C1C";$colors[0][2]="#1cb7b7";	//	red background
$colors[1][0]="#3F51B5";$colors[1][1]="#1A237E";$colors[1][2]="#b71c1c";	//	indigo background
$colors[2][0]="#009688";$colors[2][1]="#004D40";$colors[2][2]="#4d000d";	//	teal background
$colors[3][0]="#FFEB3B";$colors[3][1]="#F57F17";$colors[3][2]="#178df5";	//	yellow background
$colors[4][0]="#9E9E9E";$colors[4][1]="#212121";$colors[4][2]="#f9f9f9";	//	gray background
$colors[5][0]="#FF5722";$colors[5][1]="#BF360C";$colors[5][2]="#0c95bf";	//	deep orange background
$colors[6][0]="#CDDC39";$colors[6][1]="#827717";$colors[6][2]="#172282";	//	lime background
$colors[7][0]="#03A9F4";$colors[7][1]="#01579B";$colors[7][2]="#9b4501";	//	light blue background
$colors[8][0]="#9C27B0";$colors[8][1]="#4A148C";$colors[8][2]="#568c14";	//	purple background

// event listener to respond to clicks on the 'Show Another Quote' button
// when user clicks anywhere on the button, the "makeQuote" function is called

document.getElementById('loadQuote').addEventListener("click", makeQuote(), false);

function makeQuote() {
	//	generate random number q
	var q = Math.floor((Math.random() * 10) + 1);
	q-=1;
	//	index into $quotes with q
	var $thisQuote = $quotes[q,0];
	alert(q+ ' '+$thisQuote);
	//	generate random number c
	//	index into $colors with c
	//	set body background
	//	set text color
	//	set box background
	//	set box shadow
}

// event listener to respond to clicks on the 'Steam Quotes' button
// when user clicks anywhere on the button, the "streamQuote" function is called

document.getElementById('streamQuote').addEventListener("click", streamQuote(), false);

function streamQuote() {
}
