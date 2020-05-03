# RookiesRetro
Work Day Planner
4-29-20

very behind. trying get local storage to work and using the save button. I had a minor issue with the order of script loading and then figured it out
moment.js has been kind of a bearcat to figure out. I really had to ask for help on how to call functions from it and having the syntax right for formatting.

I used a retro NES style sheet and an old 8-bit font. super duper.

4-30-20

Was able with a little help finally figure out where I went wrong with local storage. I am cleaning up the HTML and then trying to get the CSS ready for the color changing in present, future, and current hours.

5-1-20

Took a bunch of stuff out trying to make the jqueary easier. $("textarea[data-value='" + click + "']") set a key and a value but since had gone over this JSON parse method before with brian I wasn't going to waste a bunch of time reinventing the wheel. especially because on the last homework I had such a time trying to use storage. 
JSON Parse was not an easy task. As usual i felt like this whole thing is a frankenstein of stackoverflow(SOF). Even when I asked one of the TA's they sent me a SOF link.

5-2-20
found that by adding bootstrap i can be formatting with it and using NES CSS to keep the style true. I added the final touches AFTER I submitted. I got localStorage.getItem('workDay') and .setItem by JSON.stringify(workDay) and if statements to initialize the local stuff on refresh. I played around with this constantly and tried to use a different method but I guess the hard way is my right way. I didn't have enough time to get everything right. i'd like to have the fields clear on a new day and i'd like the css/bootstrap cleaned up.

good riddens.

