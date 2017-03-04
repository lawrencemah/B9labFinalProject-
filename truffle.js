module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/jquery.min.js",
      "javascripts/bootstrap-select.min.js",
      "javascripts/bootstrap.min.js",
      "javascripts/moment.min.js",
      "javascripts/bootstrap-datetimepicker.min.js",
      "javascripts/main.js"
    ],
    "app.css": [
      "stylesheets/bootstrap.min.css",
      "stylesheets/bootstrap-datetimepicker.min.css",
      "stylesheets/bootstrap-select.min.css",
      "stylesheets/styles.css"
    ],
    "images/": "images/",
    "fonts/" : "fonts/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
