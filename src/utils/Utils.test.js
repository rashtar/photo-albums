import {formatPhotoTitle} from "./Utils";

test('it should return a string for the title when there is no searchString', () => {
    const testTitle = 'Lorem ipsum dolor sit amet';
    expect(formatPhotoTitle(null, testTitle)).toEqual(testTitle);
    expect(formatPhotoTitle('', testTitle)).toEqual(testTitle);
});

test('it should return a list of elements and words when the search string matches a word', () => {
    const testTitle = 'Lorem ipsum dolor sit amet';
    const numberOfWordsInSentence = testTitle.split(' ').length;
    const title = formatPhotoTitle('lor', testTitle);

    expect(title.length).toEqual(numberOfWordsInSentence);
    expect(title[0]).toEqual(<i><strong>Lorem </strong></i>);
    expect(title[1]).toEqual('ipsum ');
    expect(title[2]).toEqual(<i><strong>dolor </strong></i>);
    expect(title[3]).toEqual('sit ');
    expect(title[4]).toEqual('amet ');
});

test('it should match two words', () => {
    const funTitle = 'refunds are not a fun time';
    const numberOfWordsInSentence = funTitle.split(' ').length;
    const title = formatPhotoTitle('fun', funTitle);

    expect(title.length).toEqual(numberOfWordsInSentence);
    expect(title[0]).toEqual(<i><strong>refunds </strong></i>);
    expect(title[1]).toEqual('are ');
    expect(title[2]).toEqual('not ');
    expect(title[3]).toEqual('a ');
    expect(title[4]).toEqual(<i><strong>fun </strong></i>);
    expect(title[5]).toEqual('time ');
});

test('it should not match words with spaces in the searchString', () => {
    const customTitle = 'kungfu nearby';
    const title = formatPhotoTitle('fun', customTitle);

    expect(title[0]).toEqual('kungfu ');
    expect(title[1]).toEqual('nearby ');
});