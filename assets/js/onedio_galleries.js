String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

var Galleries = function() {

  var apiUrl = "https://onedio.com/index.json?scope=galleries&after=0&iteration=0",
    galleries = ".galleries";

  var prepareHtml = function(data) {
    var source = $("#galleries_list").html();
    var template = Handlebars.compile(source);

    var data = {
      galleries: data.galleries || []
    };
    $(galleries).append(template(data));
  };


  return {
    init: function() {
      return $.get(apiUrl, prepareHtml);
    }
  };
};
$(function() {
  var og = new Galleries();
  og.init();


});
