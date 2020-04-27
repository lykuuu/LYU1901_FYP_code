var bigInt = require('big-integer');
const base = (bigInt(2).pow(511)).toString();
const limit = ((bigInt(2).pow(512)).minus(1)).toString();

function bigP_generation() {

    var p = bigInt.randBetween(base, limit);

    while (!p.isPrime()) {
        p = p.minus(1);
    }

    return p.toString();

}

function g_generation(p) {
    var sp = bigInt(p).minus(1).toString();
    var g = bigInt.randBetween("1", sp);

    return g.toString();
}

function privateKey_gen(p, g) {
    var sp = bigInt(p).minus(1).toString();
    var g1 = bigInt(g);
    var pri_Key = bigInt.randBetween("1", sp);
    while (bigInt.gcd(g1, pri_Key).neq(1))
        pri_Key = bigInt.randBetween("1", sp);

    return pri_Key.toString();
}

function publicKey_gen(p, g, pri_Key) {
    var p1 = bigInt(p);
    var g1 = bigInt(g);
    var pri_Key1 = bigInt(pri_Key)
    var pub_Key = g1.modPow(pri_Key1, p1);

    return pub_Key.toString();
}

function encrypt(m, p, g, pub_Key) {
    var sp = bigInt(p).minus(1).toString();
    var m1 = bigInt(m);
    var p1 = bigInt(p);
    var g1 = bigInt(g);
    var pub_Key1 = bigInt(pub_Key);
    var randNum = bigInt.randBetween("1", "100");
    while (bigInt.gcd(p1, randNum).neq(1))
        randNum = bigInt.randBetween("1", "100");

    var a = g1.modPow(randNum, p1);
    var b = pub_Key1.modPow(randNum, p1);
    m1 = g1.modPow(m1, p1);

    b = b.multiply(m1);
    b = b.mod(p1);

    return a.toString() + "+" + b.toString();
}

function decrypt(encrypted, p, g, pri_Key) {

    var encrypted_Arr = encrypted.split("+");
    var a = bigInt(encrypted_Arr[0]);
    var b = bigInt(encrypted_Arr[1]);
    var p1 = bigInt(p);
    var g1 = bigInt(g);
    var pri_Key1 = bigInt(pri_Key);
    var i = 0;

    var m = a.modPow(pri_Key1, p1);
    m = m.modInv(p1);
    m = m.multiply(b);
    m = m.mod(p1);

    while (g1.modPow(i, p1).neq(m)) {
        i++;
    }

    m = i;


    return m.toString();
}

function add_encrypted(e1, e2) {
    var e1_Arr = e1.split("+");
    var e2_Arr = e2.split("+");

    var a1 = bigInt(e1_Arr[0]);
    var a2 = bigInt(e2_Arr[0]);
    var b1 = bigInt(e1_Arr[1]);
    var b2 = bigInt(e2_Arr[1]);


    var a = a1.multiply(a2);
    var b = b1.multiply(b2);

    return a.toString() + "+" + b.toString();
}

export { bigP_generation, g_generation, privateKey_gen, publicKey_gen, encrypt, decrypt, add_encrypted };