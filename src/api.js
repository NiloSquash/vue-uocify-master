

async function getPlaylists(){
    const response =  await fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists")
    const { data: playlists } =  await response.json()
    return playlists
}    

async function getPlaylist(id){
    const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/' + id
    const response =  await fetch(url)
    const playlist =  await response.json()
    return playlist
} 

export { getPlaylists, getPlaylist }



