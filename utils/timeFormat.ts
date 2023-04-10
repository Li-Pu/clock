export const timeNumberFormat = (time: number, length = 2) => {
    let t = time.toString();
    while (t.length < length) {
        t = '0' + t;
    }
    return t;
}