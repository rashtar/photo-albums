/* Format the title of a photo using the given searchString
*  if the searchString exists in the title, italicize and bolden that word */
export const formatPhotoTitle = (searchString, title) => {
    if (searchString) {
        return title?.split(' ').map(word => {
            if ( word.toLowerCase().includes(searchString.toLowerCase()) ) {
                return <i><strong>{word + ' '}</strong></i>
            } else {
                return word + ' ';
            }
        })
    } else {
        return title;
    }
};
