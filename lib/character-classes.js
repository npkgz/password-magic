// character classes
const cc_special = ['#', '.', ':', ',', ';', '-', '_', '+', '~', '*', '?', '}', '=', ']', ')', '[', '(', '{', '/', '&', '%', '$', '§', '!'];
const cc_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const cc_general_uc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',      'J', 'K', 'L', 'M', 'N',      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cc_general_lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const cc_chars =      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const cc_nato = ['ALFA','BRAVO','CHARLIE','DELTA','ECHO','FOXTROT','GOLF','HOTEL','INDIA','JULIETT','KILO','LIMA','MIKE','NOVEMBER','OSCAR','PAPA','QUEBEC','ROMEO','SIERRA','TANGO','UNIFORM','VICTOR','WHISKEY','XRAY','YANKEE','ZULU'];
const cc_numberstext = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
const cc_greek = ['ALPHA', 'BETA', 'GAMMA', 'DELTA', 'EPSILON', 'ZETA', 'ETA', 'THETA', 'IOTA', 'KAPPA', 'LAMBDA', 'MU', 'NU', 'XI', 'OMICRON', 'PI', 'RHO', 'SIGMA', 'TAU', 'UPSILON', 'PHI', 'CHI', 'PSI', 'OMEGA'];

// combined classes
const cc_general =  cc_general_uc.concat(cc_general_lc);
const cc_all =      cc_general.concat(cc_numbers).concat(cc_special);
const cc_words =    cc_greek.concat(cc_nato).concat(cc_numberstext);

module.exports = {
    special: cc_special,
    numbers: cc_numbers,
    general_uc: cc_general_uc,
    general_lc: cc_general_lc,
    nato: cc_nato,
    numberstext: cc_numberstext,
    greek: cc_greek,
    general: cc_general,
    all: cc_all,
    words: cc_words,
    chars: cc_chars
};