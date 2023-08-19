/*
These functions are copied from watch_private_display.c

I've split the watch_display_character in 2 parts for debug purposes but it
should still behave the same.
 */

function watch_display_character(character: string, position: number): string {
    // special cases for positions 4 and 6
    if (position == 4 || position == 6) {
        if (character == '7') character = '&'; // "lowercase" 7
        else if (character == 'A') character = 'a'; // A needs to be lowercase
        else if (character == 'o') character = 'O'; // O needs to be uppercase
        else if (character == 'L') character = '!'; // L needs to be in top half
        else if (character == 'M' || character == 'm' || character == 'N') character = 'n'; // M and uppercase N need to be lowercase n
        else if (character == 'c') character = 'C'; // C needs to be uppercase
        else if (character == 'J') character = 'j'; // same
        else if (character == 'v' || character == 'V' || character == 'U' || character == 'W' || character == 'w') character = 'u'; // bottom segment duplicated, so show in top half
    } else {
        if (character == 'u') character = 'v'; // we can use the bottom segment; move to lower half
        else if (character == 'j') character = 'J'; // same but just display a normal J
    }
    if (position > 1) {
        if (character == 'T') character = 't'; // uppercase T only works in positions 0 and 1
    }
    if (position == 1) {
        if (character == 'a') character = 'A'; // A needs to be uppercase
        else if (character == 'o') character = 'O'; // O needs to be uppercase
        else if (character == 'i') character = 'l'; // I needs to be uppercase (use an l, it looks the same)
        else if (character == 'n') character = 'N'; // N needs to be uppercase
        else if (character == 'r') character = 'R'; // R needs to be uppercase
        else if (character == 'd') character = 'D'; // D needs to be uppercase
        else if (character == 'v' || character == 'V' || character == 'u') character = 'U'; // side segments shared, make uppercase
        else if (character == 'b') character = 'B'; // B needs to be uppercase
        else if (character == 'c') character = 'C'; // C needs to be uppercase
    } else {
        if (character == 'R') character = 'r'; // R needs to be lowercase almost everywhere
    }
    if (position != 0) {
        if (character == 'I') character = 'l'; // uppercase I only works in position 0
    }
    return character
}

const Character_Set = [
    0b00000000, //  
    0b01100000, // ! (L in the top half for positions 4 and 6)
    0b00100010, // "
    0b01100011, // # (degree symbol, hash mark doesn't fit)
    0b00101101, // $ (S without the center segment)
    0b00000000, // % (unused)
    0b01000100, // & ("lowercase 7" for positions 4 and 6)
    0b00100000, // '
    0b00111001, // (
    0b00001111, // )
    0b11000000, // * (The + sign for use in position 0)
    0b01110000, // + (segments E, F and G; looks like ┣╸)
    0b00000100, // ,
    0b01000000, // -
    0b01000000, // . (same as -, semantically most useful)
    0b00010010, // /
    0b00111111, // 0
    0b00000110, // 1
    0b01011011, // 2
    0b01001111, // 3
    0b01100110, // 4
    0b01101101, // 5
    0b01111101, // 6
    0b00000111, // 7
    0b01111111, // 8
    0b01101111, // 9
    0b00000000, // : (unused)
    0b00000000, // ; (unused)
    0b01011000, // <
    0b01001000, // =
    0b01001100, // >
    0b01010011, // ?
    0b11111111, // @ (all segments on)
    0b01110111, // A
    0b01111111, // B
    0b00111001, // C
    0b00111111, // D
    0b01111001, // E
    0b01110001, // F
    0b00111101, // G
    0b01110110, // H
    0b10001001, // I (only works in position 0)
    0b00001110, // J
    0b01110101, // K
    0b00111000, // L
    0b10110111, // M (only works in position 0)
    0b00110111, // N
    0b00111111, // O
    0b01110011, // P
    0b01100111, // Q
    0b11110111, // R (only works in position 1)
    0b01101101, // S
    0b10000001, // T (only works in position 0; set (1, 12) to make it work in position 1)
    0b00111110, // U
    0b00111110, // V
    0b10111110, // W (only works in position 0)
    0b01111110, // X
    0b01101110, // Y
    0b00011011, // Z
    0b00111001, // [
    0b00100100, // backslash
    0b00001111, // ]
    0b00100011, // ^
    0b00001000, // _
    0b00000010, // `
    0b01011111, // a
    0b01111100, // b
    0b01011000, // c
    0b01011110, // d
    0b01111011, // e
    0b01110001, // f
    0b01101111, // g
    0b01110100, // h
    0b00010000, // i
    0b01000010, // j (appears as superscript to work in more positions)
    0b01110101, // k
    0b00110000, // l
    0b10110111, // m (only works in position 0)
    0b01010100, // n
    0b01011100, // o
    0b01110011, // p
    0b01100111, // q
    0b01010000, // r
    0b01101101, // s
    0b01111000, // t
    0b01100010, // u (appears in (u)pper half to work in more positions)
    0b00011100, // v (looks like u but in the lower half)
    0b10111110, // w (only works in position 0)
    0b01111110, // x
    0b01101110, // y
    0b00011011, // z
    0b00010110, // { (open brace doesn't really work; overriden to represent the two character ligature "il")
    0b00110110, // | (overriden to represent the two character ligature "ll")
    0b00110100, // } (overriden to represent the two character ligature "li")
    0b00000001, // ~
]

const Segment_Map = [
    [0x4e, 0x4f, 0x0e, 0x8e, 0x8f, 0x8d, 0x4d, 0x0d], // Position 0, mode
    [0x0c, 0x8c, 0x4c, 0x4c, 0x8b, 0x4b, 0x4b, 0x0b], // Position 1, mode (Segments B and C shared, as are segments E and F)
    [0xc0, 0x49, 0xc0, 0x0a, 0x49, 0x89, 0x09, 0x49], // Position 2, day of month (Segments A, D, G shared; missing segment F)
    [0xc0, 0x48, 0x08, 0x88, 0x86, 0x87, 0x47, 0x07], // Position 3, day of month
    [0xc0, 0x53, 0x92, 0x12, 0x52, 0x13, 0x93, 0x52], // Position 4, clock hours (Segments A and D shared)
    [0xc0, 0x54, 0x51, 0x14, 0x15, 0x55, 0x95, 0x94], // Position 5, clock hours
    [0xc0, 0x57, 0x96, 0x56, 0x16, 0x17, 0x97, 0x16], // Position 6, clock minutes (Segments A and D shared)
    [0xc0, 0x41, 0x80, 0x40, 0x00, 0x01, 0x8a, 0x81], // Position 7, clock minutes
    [0xc0, 0x43, 0x42, 0x02, 0x03, 0x04, 0x83, 0x82], // Position 8, clock seconds
    [0xc0, 0x45, 0x44, 0x05, 0x06, 0x46, 0x85, 0x84], // Position 9, clock seconds
]

export type pixels = Set<string> // each pixel is represented as a string "com,seg"

// used to update multiple pixels at a time
export type pixelUpdate = Map<string, boolean>

function computePixels(character: string, position: number): pixelUpdate {
    const upd = new Map<string, boolean>
    const watch_set_pixel = (com: number, seg: number) => {
        upd.set(`${com},${seg}`, true)
    }
    const watch_clear_pixel = (com: number, seg: number) => {
        upd.set(`${com},${seg}`, false)
    }

    let segmaps = Segment_Map[position];
    let segdata = Character_Set[character.charCodeAt(0) - 0x20];

    if (position == 0)
        watch_clear_pixel(0, 15); // clear funky ninth segment

    for (let i = 0; i < 8; i++) {
        const segmap = segmaps[7 - i]
        const com = segmap >> 6

        if (com > 2) {
            // COM3 means no segment exists; skip it.
            segdata = segdata >> 1;
            continue;
        }
        let seg = segmap & 0x3F;

        if (segdata & 1)
            watch_set_pixel(com, seg);
        else
            watch_clear_pixel(com, seg);

        segdata = segdata >> 1;
    }

    if (character == 'T' && position == 1) watch_set_pixel(1, 12); // add descender
    else if (position == 0 && (character == 'B' || character == 'D' || character == '@')) watch_set_pixel(0, 15); // add funky ninth segment
    else if (position == 1 && (character == 'B' || character == 'D' || character == '@')) watch_set_pixel(0, 12); // add funky ninth segment

    return upd
}

export function computeAllPixels(dispStr: string): pixelUpdate {
    const upd = new Map<string, boolean>

    for (let i = 0; i < 10; i++) {
        const c = dispStr.charAt(i)
        const u = computePixels(c, i)
        u.forEach((value, key) => {
            upd.set(key, value)
        })
    }

    return upd
}

export function computeActualDispString(s: string): string {
    let a = ""
    for (let i = 0; i < 10; i++) {
        const c = s.charAt(i)
        if (c == "") {
            a += " "
            continue
        }
        a += watch_display_character(c, i)
    }
    return a
}
