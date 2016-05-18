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
      console.updatable.must.be.eq(false);
    });

    test("log(arg)", function() {
      console.log("hello");
      console.updatable.must.be.eq(false);
    });

    test("log(...args)", function() {
      console.log("hello", "bye");
      console.updatable.must.be.eq(false);
    });
  });

  test("#info()", function() {
    console.info("buongiorno");
    console.updatable.must.be.eq(false);
  });

  suite("#print()", function() {
    test("print()", function() {
      console.print();
      console.updatable.must.be.eq(true);
    });

    test("print(arg)", function() {
      console.print("buongiorno");
      console.updatable.must.be.eq(true);
    });

    test("print(...args)", function() {
      console.print("buongiorno", "buonasera");
      console.updatable.must.be.eq(true);
    });
  });

  suite("#update()", function() {
    test("update()", function() {
      console.update();
      console.updatable.must.be.eq(true);
    });

    test("update(arg)", function() {
      console.update("hello");
      console.updatable.must.be.eq(true);
    });

    test("update(...args)", function() {
      console.update("hello", "hi");
      console.updatable.must.be.eq(true);
    });
  });

  suite("#confirm()", function() {
    test("confirm()", function() {
      console.confirm();
      console.updatable.must.be.eq(false);
    });

    test("confirm(arg)", function() {
      console.confirm("hello");
      console.updatable.must.be.eq(false);
    });

    test("confirm(...args)", function() {
      console.confirm("hello", "hi");
      console.updatable.must.be.eq(false);
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
