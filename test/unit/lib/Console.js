//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const Console = require("../../../dist/es5/nodejs/justo-console");

//suite
suite("Console", function() {
  var console;

  init({title: "Create Console instance"}, function() {
    console = new Console();
  });

  suite("#log()", function() {
    test("log()", function() {
      console.log();
    });

    test("log(arg)", function() {
      console.log("hello");
    });

    test("log(args)", function() {
      console.log("hello", "bye");
    });
  });

  test("#info()", function() {
    console.info("buongiorno");
  });

  suite("#print()", function() {
    test("print()", function() {
      console.print();
    });

    test("print(arg)", function() {
      console.print("buongiorno");
    });

    test("print(args)", function() {
      console.print("buongiorno", "buonasera");
    });
  });

  suite("#update()", function() {
    test("update()", function() {
      console.update();
    });

    test("update(arg)", function() {
      console.update("hello");
    });

    test("update(args)", function() {
      console.update("hello", "hi");
    });
  });

  test("#clear()", function() {
    console.clear();
  });

  suite("#error()", function() {
    test("error()", function() {
      console.error();
    });

    test("error(arg)", function() {
      console.error("my error");
    });

    test("error(args)", function() {
      console.error("the", "error");
    });
  });
})();
