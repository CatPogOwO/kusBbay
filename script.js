let aTag = document.querySelector("a");

aTag.style.display = "none";

setTimeout(() => {
  aTag.style.display = "initial";
}, 84000);

const start = () => {
  const pTags = document.querySelectorAll("p");
  let len = pTags.length;
  console.log(len);
  const styles = (prop, val) => {
    pTags.forEach((e) => (e.style[prop] = val));
  };

  let delayInSeconds = 5;
  let num = 0;

  const displayText = () => {
    pTags[num].style.display = "block";
    if (num <= len) {
      num++;
      console.log(num);
      if (num == len) {
        clearInterval(addTextInterval);
      }
    }
    if (num === 6) {
      styles("color", "red");
    } else if (num == 10) {
      styles("color", "orange");
    } else if (num == 11) {
      styles("color", "blue");
    } else if (num == 12) {
      styles("color", "#00ff00");
    } else if (num == 14) {
      document.body.style.backgroundImage = "url('./assets/clouds.png')";
      document.body.style.backgroundColor = "black";
    } else if (num == 15) {
      styles("fontSize", "1.65rem");
      styles("fontFamily", "Nunito");
      styles(
        "textShadow",
        "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 3px 5px 5px #0000ff"
      );
      styles("margin", "5px");
    }

    // for (let i = 0; i < len; i++) {
    //   pTags[i].style.display = "block";
    //   if (i === 5) {
    //     styles("color", "red");
    //   }
  };

  let addTextInterval = setInterval(displayText, delayInSeconds * 1000);
};

//   // displayText();
// };

start();
