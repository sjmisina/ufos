# The Truth is Out There - UFOs
<b>Are we alone in the universe? For millennia, humans have turned to the sky to answer this question. Now, thanks to research generously funded by W. Avy, a UFO-enthusiast and amateur ufologist, we can supplement our sky-searching with data analysis.</b>
<br>
<br>
Analyst: Stan Misina<br>
Technology employed:
- html and bootstrap for building and styling the page
- javascript for database query building and filtering
- tested for usability and layout on Chrome Version 92.0
- Data source: data.js as provided by W. Avy
<br>
<br>
***
## Project Overview
We have created a landing page where you can dig through the data funded and provided by W. Avy. As a user you can browse the entire dataset, or filter it by Country, State, City, Date, and even the Shape of the anomoly. The results are presented with the duration of the event and even comments from the witnesses.

Are we alone? Consider these encounters ...
<br>
<br>
***
## Results 
Navigation of this site is intentionally simple, so anyone can use this resource. There are five filter fields:<br><br>

![filters screen shot](static/images/filter_screenshot.png)<br><br>

- The date filter is looking for an exact match in the database; therefore, no leading zeros should be included for the month or day.
- The database provided is for the first weeks of January 2010. Do not enter a date later than 1/13/2010 to return results.
- The filters are looking for exact matches, i.e., no capitalization or misspellings. This will cause comprimised results.
- The results are filtered every time the user presses <kbd>ENTER</kbd>.
<br>
<br>

***


## Summary
This is a fantstic format to share results of the database. It is clear and easy for users to navigate. Clutter is minimized and the color palate is appropriate and easy to read.

The main drawbacks of this resource is that the dataset is such a small sample size, and it is easy to enter typos that will end up returning empty sets.

For updates, upgrades, and further optimization, consider these suggestions:
- a `clear filters` function to reset all of the filters easily
- this front end can easily handle much larger Javascript data sets to expand the results
- a drop down box could be more appropriate entering these filters by eliminating typos, or parameters that will not return the requested data
