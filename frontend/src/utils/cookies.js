function saveAuthToCookie(value) {
    document.cookie = `ryl_auth=${value}`;
}

function saveUserNameToCookie(value) {
    document.cookie = `ryl_username=${value}`;
}

function saveUserIdToCookie(value) {
    document.cookie = `ryl_userid=${value}`;
}

function getAuthFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)ryl_auth\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function getUserNameFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)ryl_username\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function getUserIdFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)ryl_userid\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

export {
    saveAuthToCookie,
    saveUserNameToCookie,
    saveUserIdToCookie,
    getAuthFromCookie,
    getUserNameFromCookie,
    getUserIdFromCookie,
}