<template>
    <article class="playlist col-sm-6 col-md-4 col-lg-3 col-xl-2"> 
        <router-link :to="'/playlist/'+ playlist.id"><img class="playlist-picture" :src="playlist.picture_medium" :alt="playlist.name"></router-link>
        <span class="playlist-title">{{playlist.title}}</span>
        <span class="playlist-tracks">{{playlist.nb_tracks}} canciones</span>
    </article>
</template>

<script>

export default {
    name: 'Playlist',
    props: { playlist: Object },
}
</script>

<style lang="scss">
    .playlist{
        margin-bottom: 15px;
        text-align: center;
        line-height: 1.3em;
    }

    .playlist-title{
        display: block;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;    
        font-weight: 600;    
    }

    .playlist-tracks{
        font-size: 12px;
    }

    .playlist-picture{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        border-radius: 50%;
        background: $grey-light;
        border: 1px solid $border-color;
        display: block;
    }
</style>
