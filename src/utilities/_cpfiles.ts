import ncp from "ncp";

async function copypaste() {
  ncp("./src/public", "./build/public", function (err) {
    if (err) {
      return console.error(err);
    }
  });

  ncp("./views", "./build/views", function (err) {
    if (err) {
      return console.error(err);
    }
  });

  ncp("./src/css", "./build/css", function (err) {
    if (err) {
      return console.error(err);
    }
  });

  await console.log("Successfully compiled");
}

copypaste();
