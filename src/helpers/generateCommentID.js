export const generateCommentID = (array) => {
    let id;

    if (array.length === 0) {
        return id = 1;
    }

    if (array.length > 0) {
        const arrayOfIDs = array.reduce((a, comment) => [...a, comment.commentId], [])
        const arraySorted = arrayOfIDs.sort((a, b) => a - b);
        for (let i = 1; i <= arraySorted.length + 1; i++) {
            if (arraySorted.indexOf(i) === -1) {
                return id = i;
            }
        }
    }
}