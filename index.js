const n = parseInt(prompt('Enter your number'));
function fib() {
    let a = 1;
    let b = 1;
    for (i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib());

function array() {
    let f = [1, 1];
    if (n <= 2) {
     return f;
    } else {
        for (i = 0; i < n - 2; i++) {
            f.push(f[f.length - 1] + f[f.length - 2]);
        }
        let result = f;

    }
    return f;
}
alert(array());

function rec(n) {
    
    if (n <= 2) {
        return 1;
    } else if (n <= 40) {
        return rec(n - 1) + rec(n - 2);
    } else {
        return ('excessive number');
    }
}
alert(rec(n));
