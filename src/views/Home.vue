<template>
    <main class="page-home">
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <div id="playlistContainer">
            <playlist-list :playlists="playlists" />
            </div>
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
        
        @media only screen and (max-width: 600px) {
             #playlistContainer {
                 display: flex;
                 flex-wrap: wrap;
                
                .playlists {
                    flex: 1 0 21%;
                    margin: 20px;
                }
             }
        }
    }
</style>