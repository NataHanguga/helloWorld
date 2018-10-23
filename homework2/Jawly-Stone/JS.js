let J = "z",
    S = "ZZz",
    cout = 0;

for (let x = 0; x < J.length; x++) {
    for (let y = 0; y < S.length; y++) {
        if (J[x] == S[y]) cout++;
        console.log(J[x] + "-" + S[y] + "=" + cout);
    }
    console.log(cout);

}