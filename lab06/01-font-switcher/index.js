const makeBigger = () => {
    let curval = parseInt(getComputedStyle(document.getElementsByClassName("content")[0]).getPropertyValue("font-size"));
    console.log(curval)
    let curvalheader = parseInt(getComputedStyle(document.getElementsByTagName("h1")[0]).getPropertyValue("font-size"));
    document.querySelector(".content").style.fontSize = curval+5 + "px";
    document.querySelector("h1").style.fontSize = curvalheader+5 + "px";
};

const makeSmaller = () => {
    let curval = parseInt(getComputedStyle(document.getElementsByClassName("content")[0]).getPropertyValue("font-size"));
    console.log(curval)
    let curvalheader = parseInt(getComputedStyle(document.getElementsByTagName("h1")[0]).getPropertyValue("font-size"));
    if (curval > 5) {
        document.querySelector(".content").style.fontSize = curval-5 + "px";
        document.querySelector("h1").style.fontSize = curvalheader-5 + "px";
    }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

 