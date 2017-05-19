const TIME_PATTERNS_BASE = [
    /^(1[0-2]|0?[0-9]):[0-5][0-9](:[0-5][0-9](\.\d+)?)? ((A|P)M|(A|P)\.M\.)$/i,     // 12 hour time
    /^(2[0-3]|[01]?[0-9]):[0-5][0-9](:[0-5][0-9](\.\d+)?)?Z?$/                      // 24 hour time
];

// See: https://www.cl.cam.ac.uk/~mgk25/iso-time.html
const TIME_PATTERNS_NODELIM = [
    /^[0-2][0-9][0-5][0-9]([0-5][0-9](\.\d+)?)?$/
];

module.exports = function isTime(str, options = {}) {
    if (typeof str !== "string") {
        return false;
    }
    const timePatterns = [...TIME_PATTERNS_BASE];
    if (options.requireDelimiters === false) {
        timePatterns.push(...TIME_PATTERNS_NODELIM);
    }
    const normalisedTimeStr = str.trim();
    return timePatterns.some(patt => patt.test(normalisedTimeStr));
};
