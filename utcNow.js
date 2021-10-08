function utcNow() {
    const today = new Date();
    let D = today.getUTCDate();
    let M = today.getUTCMonth() + 1;
    let Y = today.getUTCFullYear();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    M = checkTime(M);
    D = checkTime(D);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('utcNow').innerHTML = today.toUTCString();
    setTimeout(utcNow, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}