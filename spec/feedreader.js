/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
  
    describe('RSS Feeds', function() {
        /* Running the first teest using the it function */
        
      	/* A url was placed for one of the feeds*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Is the url length equal to 0, if so that is a failed test */

        it('This feed is missing a URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        it('This feed is missing a name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    describe('The menu', function() {
        it('Menu exited properly and is now hidden', function(){   
            const body = document.querySelector('body')
            expect(body.hasClass('menu-hidden')).toBeTruthy();

        });

        /* Triggered on click that the button is working properly and presenting the class*/
        it('The menu is working properly.', function(){ 
            const body = document.querySelector('body') 
            const menu = document.querySelector('.menu-icon-link')
            
            menu.click();
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            menu.click();
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

     });        

    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('Feed loaded successfully.', function(){   
        // Select the DOM element
           expect($('.feed.entry').children.length > 0).toBe(true) 
        });

     });

    
    /* We have the URL now is the feed loaded into the document?*/
    describe('New Feed Selection', function() {

        var loadingfeed;
        beforeEach(function(done){
            loadFeed(0, function(){
                loadingfeed = $('.feed').html();

                loadFeed(1, function() {
                    done();
                })
            })            
        })

         it('RSS Feed text.', function(done){   
           var newLoadingFeed = $('.feed').html();
           expect(newLoadingFeed).not.toBe(LoadingFeed);
           done();
        });

     });
   
}());
