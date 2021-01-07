
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

async function getPlaylists(){
    const url = baseURL + 'chart/0/playlists';
    var response =  await fetch(url);
    var { data: playlists } =  await response.json();
    return playlists;
}    

async function getPlaylist(id){
    var url = baseURL + 'playlist/' + id
    var response =  await fetch(url)
    var playlist =  await response.json()
    return playlist
} 

async function getArtists(q){
    return await search('artist',q);
} 

async function getAlbums(q){
    return await search('album',q);
}

async function getTracks(q){
    return await search('track',q);
}

async function search(obj, q){
    var url = baseURL + 'search/' + obj + '?q=' + q;
    var response =  await fetch(url);
    var objs =  await response.json();
    return objs;
}


export { getPlaylists, getPlaylist, getArtists, getAlbums, getTracks }



