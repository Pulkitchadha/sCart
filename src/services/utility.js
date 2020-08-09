
export const showMessage = (type = 'success', msg) => {
    return alert(msg);
};

export const truncateString = (string, maxLength = 50) => {
    if (!string) return;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
};

export default {
    showMessage,
    truncateString
};