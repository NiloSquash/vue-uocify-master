<template>
    <section class="playlist-list row">
        <Playlist
            v-for="playlist in playlists"
            :key="playlist.playlistId"
            :playlist="playlist"
        />
    </section>
</template>

<script>
import Playlist from './Playlist'

export default {
    components: { Playlist },
    name: 'Playlists',
    props: { playlists: Array },
}
</script>