const display = document.getElementById("container");

function one(cb = () => {}) {
  display.innerHTML = "<p>10</p>";
  cb();
}

function two(cb = () => {}) {
  display.innerHTML = "<p>9</p>";

  cb();
}

function three(cb = () => {}) {
  display.innerHTML = "<p>8</p>";

  cb();
}

function four(cb = () => {}) {
  display.innerHTML = "<p>7</p>";

  cb();
}

function five(cb = () => {}) {
  display.innerHTML = "<p>6</p>";
  cb();
}

function six(cb = () => {}) {
  display.innerHTML = "<p>5</p>";
  cb();
}

function seven(cb = () => {}) {
  display.innerHTML = "<p>4</p>";
  cb();
}

function eight(cb = () => {}) {
  display.innerHTML = "<p>3</p>";
  cb();
}

function nine(cb = () => {}) {
  display.innerHTML = "<p>2</p>";
  cb();
}

function ten(cb = () => {}) {
  display.innerHTML = "<p>1</p>";
  cb();
}

function wishMsg(cb = () => {}) {
  display.innerHTML = "<p>Happy Independence Day!!!!</p>";
  cb();
}

function greet() {
  one(() =>
    setTimeout(() => {
      two(() =>
        setTimeout(() => {
          three(() =>
            setTimeout(() => {
              four(() =>
                setTimeout(() => {
                  five(() =>
                    setTimeout(() => {
                      six(() =>
                        setTimeout(() => {
                          seven(() =>
                            setTimeout(() => {
                              eight(() =>
                                setTimeout(() => {
                                  nine(() =>
                                    setTimeout(() => {
                                      ten(() => setTimeout(() => {}, 1000));
                                      wishMsg(() => setTimeout(() => {}, 1000));
                                    }, 1000)
                                  );
                                }, 1000)
                              );
                            }, 1000)
                          );
                        }, 1000)
                      );
                    }, 1000)
                  );
                }, 1000)
              );
            }, 1000)
          );
        }, 1000)
      );
    }, 1000)
  );
}

greet();
