define([
    "jquery",
    "backbone",
    "underscore",
    "text!example_tmpl.html"
  ],
  function ($, Backbone, _, tmpl) {

  "use strict";

  var ExampleView = Backbone.View.extend({
    el: $("body"),
    events:{
      "click a": "hello"
    },
    initialize: function() {
      this.$el.html(_.template(tmpl)());
    },
    hello: function(evt){
      evt.preventDefault();
      console.log("hello");
    }
  });

  return ExampleView;
});