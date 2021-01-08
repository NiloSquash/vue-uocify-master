<template>
    <main class="page-home">
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <playlist-list :playlists="playlists" />
        </div>
    </main>
</template>

<script>
    import PlaylistList from '@/components/Playlists/PlaylistList';
    import {getPlaylists} from '@/api';

    export default {
        name:'Home',
        components:{ PlaylistList },
        data(){
            return{
                playlists: [] 
            }
        }, async created () {
            await this.loadPlaylists();      
        }, methods: {
            async loadPlaylists () {
                this.playlists = await getPlaylists();
            }
        }
    }

</script>

<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 35px;
            margin-bottom: 35px;
        }

        .main-title {
            padding-bottom: 1em;
        }
        #playlistsContainer {
            
        }
    }
</style>