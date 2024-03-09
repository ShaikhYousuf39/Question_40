function makeAlbum(artist:string, title:string): {artist:string ; title:string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() +artist.slice(1),
        title: title.charAt(0).toUpperCase() +title.slice(1)
    }
    return dictionaries;
};

let album = makeAlbum("John","Elephant in the room")
console.log(album);

album = makeAlbum("Chris","We made it")
console.log(album);

album = makeAlbum("Jerry","It was never easy")
console.log(album);