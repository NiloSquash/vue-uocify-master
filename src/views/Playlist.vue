<template>
    <main class="playlist">
        <h1 class="main-title">Playlist <span>{{title}}</span></h1>
        <h2 class="title">{{description}}</h2> 
        <track-list :tracks="tracks" />
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList';
import {getPlaylist} from '@/api';

export default {
    name:'Playlist',
    components:{ TrackList },
    data(){
        return{
            playlist: null,
            tracks: [],
            id: null,
            title: null,
            description: null
        }
    }, async created () {
            await this.loadPlaylist();      
    }, methods: {
        async loadPlaylist () {
            this.playlist = await getPlaylist(this.$route.params.l);
            this.title = this.playlist.title;
            this.description = this.playlist.description;
            this.tracks = this.playlist.tracks.data;
        }
    },watch: {
    '$route.params.l': function (l) {
            this.id = l
        }
    }, 
}
</script>


<style lang="scss" >

    .playlist{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }

        .tabs{
            background: white;
            flex: 1;
            height: 100%;
        }

        #tabAll{
            .title{
                font-size: 18px;

                .icon{
                    font-size: 14px;
                    margin-left: 3px;
                }
            }

            .track-list{
                margin-bottom: 30px;
                thead{
                    display: none;
                }
            }

            section{
                margin-bottom: 30px;
            }
        }
    }


</style>