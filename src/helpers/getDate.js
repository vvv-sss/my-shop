export const getDate = () => {
    const date = new Date();

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours24 = date.getHours().toString().padStart(2, '0');
    const minutes24 = date.getMinutes().toString().padStart(2, '0');

    return `${hours24}:${minutes24} ${day}.${month}.${year}`;
}