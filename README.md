# PROJECT TITLE: "My X-men book"
#### Video Demo:  <https://www.youtube.com/watch?v=QmBtl5Ugj8c>
#### HOW TO RUN: npm start (in terminal)
#### Description:

**1** This project is based on NodeJS, ExpressJS and mongolDB. I used a lot of extensions, sorry, I didn't remember, because I did this before reading the last project guide. ( it contains like: npm-watch, mongoose-delete-npm, npm)

**2**  I'm web developer ( not that new) so I used the "MVC model": like this: 
https://minhtringuyen.info/static/mo-hinh-mvc-2-6122e73042b1e282de2261bc3475dde5-edd43.png

My src folder contains:
**index.js**: where I glue everthing together and assure if the web is running or not
**app**:
- controllers folder: with controllers - cotaining all the METHOD AND FUNCTIONS for a specific JS file in "routes folder"
- middleware folder: I use Sorting (desc, asc) middleware to perform some functions
- models folder: I named it "Course", like course of action, here I created the Schema for my X-men Character(containing all the info), I use mongoose extension.
**config**:
- index.js: config and check if mongoose is connected successfully or not
**helpers**:
 - handlebars.js: contain all the functions I create to pass into to .html/ .hbs(handlebars) file, as I cannot pass them into html/handlebars files
**img**:
 - contain all photos for me too choose for the icon
**public**:
 - It just a default thing in nodeJS, I do not USE or MODIFY THIS!!!!!!
**resources**:
 - scss folder: aka my CSS files
 - view folder:  ----courses_______create.hbs: create new 'character' HTML
               |            |______edit.hbs: similar to create, but it's about updating the 'character's info' HTML when 'update' button triggered
               |            |
               |            |______show.hbs: when click on the character, we see all the info of the character HTML
               |
               |------layouts:____main.hbs: the outline, head of HTML like in jinja, like 'layout.html'
               |
               |-------me: _______deleted-characters.hbs: deleting that character when 'delete' button triggered
               |          |
               |          |_______news.hbs: news that I linked up in "my news"
               |          |_______stored-characters: containing all the created you characters
               |
               |------- partials: contains footer and header of the page 
               |
               |------- home.hbs: when redirect to '/' or click on the "MY X-MEN BOOK", redirect to the home page containing all the courses of characters u created
               |
               |------- news.hbs: 
               |------- search.hbs: 

**routes**: cotaining all the routes of COntroller, everything will go through here then get to app/controller to get out the functions

**utils**: contains mongoose.js for converting "mongoose objects to plain JS objects"



      