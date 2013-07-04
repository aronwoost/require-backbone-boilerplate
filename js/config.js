require.config({
  paths:{
    jquery: "vendor/jquery-1.10.1",
    underscore: "vendor/underscore-1.4.4",
    backbone: "vendor/backbone.1.0.0-master-fd0cb9695d",

    text: "vendor/text-2.0.7"
  },

  shim:{
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require(
  [
    "example_view"
  ],
  function (ExampleView) {

    "use strict";

    var view = new ExampleView();
  }
);