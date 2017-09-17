// Ctrl-[ is the same as Escape
map('<Ctrl-[>', '<Esc>');
cmap('<Ctrl-[>', '<Esc>');
imap('<Ctrl-[>', '<Esc>');
vmap('<Ctrl-[>', '<Esc>');

// zh and zl scroll left and right
map('zh', 'h');
map('zl', 'l');

// h and l switch to the tab to the left or right
map('h', 'E');
map('l', 'R');

// H and L move tabs to the left or right
map('H', '<<');
map('L', '>>');

// < and > move backward and forward in history
map('<', 'S');
map('>', 'D');

// S chooses a tab
map('S', 'T');

// b goes to the last tab used, B goes to the next tab used
map('b', 'B');
map('B', 'F');

// F opens a link in a non-active new tab
// TODO: find out why this sometimes gives the same link a higher number.
//       I presume it's because the hint regex is different.
map('F', 'gf');

// gf opens plain-text urls in the page
map('gf', 'O');

// J opens a URL from history
map('J', 'oh');

// K opens a recently-closed URL
map('K', 'ox');

// Ctrl-u and Ctrl-d scroll half a page up and down
mapkey('<Ctrl-u>', '#2Scroll half a page up', 'Normal.scroll("pageUp")',
       {repeatIgnore: true});
mapkey('<Ctrl-d>', '#2Scroll half a page down', 'Normal.scroll("pageDown")',
       {repeatIgnore: true});

// Ctrl-b and Ctrl-f scroll one page up and down
// TODO: These scroll roughly page and a quarter. Make them scroll a bit less
// than a page for context.
mapkey('<Ctrl-b>', '#2Scroll a full page up', 'Normal.scroll("fullPageUp")',
       {repeatIgnore: true});
mapkey('<Ctrl-f>', '#2Scroll a full page down', 'Normal.scroll("fullPageDown")',
       {repeatIgnore: true});

// d closes current tab, u restores last closed tab
map('d', 'x');
map('u', 'X');

// Ctrl-w deletes a word backwards
imap('<Ctrl-w>', '<Alt-w>');

// Ctrl-f and Ctrl-b move cursor forward and backward
// function moveCursorInActiveElementBy(amount) {
//        // Setting selectionStart and selectionEnd to a position will move the
//        // cursor to that position and remove any active selection. Removing the
//        // active selection is undesirable, but not worth fixing at the moment.
//        const activeElement = document.activeElement;
//        activeElement.selectionStart = activeElement.selectionStart + amount;
//        activeElement.selectionEnd   = activeElement.selectionEnd + amount;
// }
// imapkey('<Ctrl-f>', moveCursorInActiveElementBy.bind(1, 1));
// imapkey('<Ctrl-b>', moveCursorInActiveElementBy.bind(-1, 1));

// imapkey('q', function() { alert("q pressed"); } );


// e, E, and W all move forward a word in visual mode
vmap('e', 'w');
vmap('E', 'w');
vmap('W', 'w');

mapkey(';s', '#2Open stackoverflow',
       'window.open("https://stackoverflow.com/questions/tagged/clojure")');
mapkey(';g', '#2Open gmail',
       'window.open("https://gmail.com")');
mapkey(';c', '#2Open calendar',
       'window.open("https://calendar.google.com/calendar/render#main_7")');

settings.hintAlign = "left";
Hints.characters = "1234567890";

mapkey('o', '#8Open Search with duckduckgo',
       'Front.openOmnibar({type: "SearchEngine", extra: "d"})');

// available: p, P, e, E, O, T

// mapkey('om', '#8Open URL from vim-like marks', 'Front.openOmnibar({type: "VIMarks"})');
