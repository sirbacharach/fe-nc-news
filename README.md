# NC - NEWS Documentation.

Link to deployed version of app:
https://robs-nc-news.netlify.app/
Link to back end project, to which this app connects:
https://github.com/sirbacharach/Robs-News-API

Minimum version of **Node** required to run locally: **v20.6.1**

## Instructions to run locally:
Open a terminal
Navigate to the folder where you wish ti install the project

Type the following commands:
git clone https://github.com/sirbacharach/fe-nc-news.git
npm install
npm run dev

You should see a link in your terminal which you can navigate to to open the app in your browser.

### Overview: ###

This app is an article browser, it allows a user to browse articles, comment on them and like the articles, it also allows the deletion of comments, users must be logged in to add or delete comments and may only delete their own.
The app connects to a back end server, which has access to an sql database, which contains several tables with all information needed to run the app.
The app handles errors if invalid paths are entered, if non existant information is requested and if there are issues with the connection or the posting, getting, updating and deletion of data. There is also a loading message when retrieving information for those who may have a slow internet connection.

### Here is a description of each of the app screens. ###

#### Home: ####
You will find 3 buttons here, Users, Articles and Topics, each will be described below, you may click on them to navigate to those pages. You will also see who is logged on at the top of this and alls screens.

#### Users: ####
This page allows the user to click on a user in order to log on, you will see a message on the user icon that shows this user is logged on, this will also update the header bar at the top to tell you who is logged in on all pages.

#### Articles ####
The articles page is the home page.
Here you will find a list of all articles with some, but not all of the article details, on this page you may apply different filters by clicking on the filter options above the articles. You may also click the Sort Ascending/Descending button to sort your chosen results.
You may click on an individual article to be taken to the individual article page.

#### Individual Article: ####
This page expands upon the information given on the Articles page, providing you with the actual article content, you have the ability to add or deduct votes on this article, which will affect the results on the articles page when sorted by votes.

You may hide and unhide the comments below the article.  If you are not logged on, you may browse the comments, but you may not add or delete one. When logged in, you will notice that your user articles are availbale for deletion, with an additional link that appears on the comment.

#### Topics: ####
This page lists all available topics, you may click on them to be taken back to the articles page, but this time with a filter on your chosen topic, all of the usual articles functionality will apply once you are on that page.