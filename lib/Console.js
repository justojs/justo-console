//imports
import util from "util";
import logUpdate from "log-update";
import indent from "./indent";

//internal data
const INDENT = "  ";

/**
 * A console.
 */
export default class Console {
  /**
   * Constructor.
   *
   * @param opts:object The options: level (number, default 0).
   */
  constructor(opts) {
    //(1) args
    if (!opts) opts = {};

    //(2) init
    Object.defineProperty(this, "level", {value: opts.level || 0, writable: true});
    Object.defineProperty(this, "updatable", {value: false, writable: true});
  }

  /**
   * Print to stdout with newline.
   */
  log(...args) {
    if (this.updatable) {
      logUpdate.done();
      this.updatable = false;
    }

    logUpdate(indent(args.join(" "), this.level, INDENT));
    logUpdate.done();
  }

  /**
   * Print to stdout with newline.
   */
  dir(obj) {
    this.log(util.inspect(obj));
  }

  /**
   * @alias log
   */
  info(...args) {
    this.log(...args);
  }

  /**
   * Print a line starting a new updatable session.
   */
  print(...args) {
    logUpdate.done();
    logUpdate(indent(args.join(" "), this.level, INDENT));
    this.updatable = true;
  }

  /**
   * Clear the current line and print to stdout.
   */
  update(...args) {
    logUpdate(indent(args.join(" "), this.level, INDENT));
    this.updatable = true;
  }

  /**
   * Update the current line and end the stdout.
   */
  confirm(...args) {
    this.update(...args);
    logUpdate.done();
    this.updatable = false;
  }

  /**
   * Clear the output.
   */
  clear() {
    logUpdate.clear();
  }

  /**
   * Print to stderr with newline.
   */
  error(...args) {
    logUpdate.stderr(indent(args.join(" "), this.level, INDENT));
    logUpdate.stderr.done();
  }
}
