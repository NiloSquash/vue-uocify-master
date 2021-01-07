<template>
    <main class="page-search">
        <h1 class="main-title">Resultados de <span>{{query}}</span></h1>
        <b-tabs>
            <b-tab id="tabAll" title="Todo" active>
                <h2 class="title">Canciones <fa-icon icon="chevron-right" class="icon" /></h2>
                <track-list :tracks="tracks.slice(0,6)" />

                <h2 class="title">Álbumes <fa-icon icon="chevron-right" class="icon" /></h2>
                <album-list :albums="albums.slice(0,6)" />

                <h2 class="title">Artistas <fa-icon icon="chevron-right" class="icon" /></h2>
                <artist-list :artists="artists.slice(0,6)" />                

            </b-tab>    <!-- No s'ha trobat cap artista/àlbum/cançó que coincideixi amb la cerca  -->      
            <b-tab id="tabTracks" title="Canciones">
                <h2 class="title" v-if="tracksTotal !== 0">{{tracksTotal}} canciones</h2><h2 class="title" v-else>No s'ha trobat cap cançó que coincideixi amb la cerca</h2>
               <track-list :tracks="tracks" />
               <a :href="moreTracksURL">Más canciones...</a>
            </b-tab>
            <b-tab id="tabAlbums" title="Álbumes">
                 <h2 class="title" v-if="albumsTotal !== 0">{{albumsTotal}} álbumes</h2><h2 class="title" v-else>No s'ha trobat cap àlbum/cançó que coincideixi amb la cerca</h2>
                <album-list :albums="albums" />
                <a :href="moreAlbumsURL">Más álbumes...</a>
            </b-tab>            
            <b-tab id="tabArtists" title="Artistas">
                <h2 class="title" v-if="artistsTotal !== 0">{{artistsTotal}} artistas</h2><h2 class="title" v-else>No s'ha trobat cap artista que coincideixi amb la cerca</h2>
                <artist-list :artists="artists" />
                <a :href="moreArtistsURL">Más artistas...</a>
            </b-tab>
        </b-tabs>
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import ArtistList from '@/components/Artists/ArtistList'

import {getArtists, getAlbums, getTracks } from '@/api';

export default {
    name:'SearchResults',
    components:{ AlbumList, ArtistList, TrackList },
    data(){
        return{
            tracks: [],
            albums: [],
            artists: [],
            tracksTotal: null,
            albumsTotal: null,
            artistsTotal: null,
            moreArtistsURL: null,
            moreTracksURL: null,
            moreAlbumsURL: null,
            query: this.$route.params.q || ''
        }
    }, watch: {
        '$route.params.q': function (q) {
            
            if (this.query != q){
                this.query = q;
                this.$forceUpdate();
            }
        }
    }, async created () {
            await this.search(this.$route.params.q);  
    }, methods: {
        async updateTracks (q) {
            this.tracks = [];
            this.tracksTotal = null;
            this.moreTracksURL = null;

            var tracksResult = await getTracks(q);
            this.tracks = tracksResult.data;
            this.tracksTotal = tracksResult.total;
            if (this.tracksTotal>25){
                this.moreTracksURL = tracksResult.next;
            }
        }, async updateAlbums (q) {
            this.albums = [];
            this.albumsTotal = null;
            this.moreAlbumsURL = null;

            var albumsResult = await getAlbums(q);
            this.albums = albumsResult.data;
            this.albumsTotal = albumsResult.total;
            if (this.albumsTotal>25){
                this.moreAlbumsURL = albumsResult.next;
            }
        }, async updateArtists (q) {
            this.artists = [];
            this.artistsTotal = null;
            this.moreArtistsURL = null;
            
            var artistsResult = await getArtists(q);
            this.artists = artistsResult.data;
            this.artistsTotal = artistsResult.total;
            if (this.artistsTotal > 25){
                this.moreArtistsURL = artistsResult.next;
            }
        }, async search(q) {
            this.query = q;
            await this.updateTracks (q); 
            await this.updateAlbums (q);
            await this.updateArtists (q);
        }
    }
}
</script>


<style lang="scss" >

    .page-search{
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