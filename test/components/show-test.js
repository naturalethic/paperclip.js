var expect     = require("expect.js"),
pc             = require("../../lib")
template       = pc.template,
stringifyView = require("../utils/stringifyView");

/*

var tpl = paperclip.template("abba")
*/

describe(__filename + "#", function () {

  xit("can show conditional content", function () {
    var v = pc.template(
      "hello <show when={{true}}>" + 
        "world" +
      "</show>" 
    , pc).view();

    expect(stringifyView(v)).to.be("hello world");
  });

  xit("can hide conditional content", function () {
    var v = pc.template(
      "hello <show when={{false}}>" + 
        "world" +
      "</show>" 
    , pc).view();

    expect(stringifyView(v)).to.be("hello ");
  });

  xit("can toggle conditional content", function () {
    var v = pc.template(
      "hello <show when={{show}}>" + 
        "world" +
      "</show>" 
    , pc).view({show:true});

    expect(stringifyView(v)).to.be("hello world");
    v.context.set("show", false);
    v.runner.update();
    expect(stringifyView(v)).to.be("hello ");
    v.context.set("show", true);
    v.runner.update();
    expect(stringifyView(v)).to.be("hello world");
  });

  it("works when the conditional is a different type", function () {
    var v = pc.template(
      "<show when={{show}}>" + 
        "a" +
      "</show>" 
    , pc).view({show:1});
    expect(stringifyView(v)).to.be("a");
    v.context.set("show", 2);
    v.runner.update();
    expect(stringifyView(v)).to.be("a");
    v.context.set("show", 3);
    v.runner.update();
    expect(stringifyView(v)).to.be("a");
  });

  it("doesn't show is conditional is undefined", function () {
    var v = pc.template(
      "<show when={{show}}>" + 
        "a" +
      "</show>" 
    , pc).view({show:void 0});
    expect(stringifyView(v)).to.be("");
  });

  it("can add a show block to an existing element", function () {
    var v = pc.template(
      "hello <span show.when={{show}}>world</span>"
    , pc).view({show:true});
    expect(stringifyView(v)).to.be("hello <span>world</span>");
    v.context.set("show", false);
    v.runner.update();
    expect(stringifyView(v)).to.be("hello <span></span>");
    v.context.set("show", true);
    v.runner.update();
    expect(stringifyView(v)).to.be("hello <span>world</span>");
  });

});
