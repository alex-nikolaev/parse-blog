$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("Q8tYpQ96qWx3NAppgObaBP2Afe3EgID6IL7ejMan", "QsDrW7VzkUAfVk5WQPPhoZnESQQDjpHawQPjcbZz");

    var Blog = Parse.Object.extend("Blog");

    var Blogs = Parse.Collection.extend({
        model: Blog
    });

    var blogs = new Blogs();

    blogs.fetch({
        success: function(blogs) {
            console.log(blogs);
        },
        error: function(blogs, error) {
            console.log(error);
        }
    });

    var BlogsView = Parse.View.extend({
        template: Handlebars.compile($('#blogs-tpl').html()),
        render: function() {
            var collection = {
                blog: this.collection.toJSON()
            };
            this.$el.html(this.template(collection));
        }
    });

});
