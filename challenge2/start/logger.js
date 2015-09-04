// TODO: expose a function called "info" which prints the date and a logging string.
function info(msg) {
  console.log(new Date()+": "+msg);
}
exports.info = info;
