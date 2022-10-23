<template>
  <div class="hoge">
    <div
        id="map-left"
        ref="mapLeftRef">
    </div>
    <div
        id="map-right"
        ref="mapRightRef">
    </div>
  </div>
</template>
<script lang="ts">
import { googleMapApiLoader } from '@/map/index';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    setup() {
        let mapLeft: google.maps.Map | null = null;
        const mapLeftRef = ref<HTMLElement>();

        let mapRight: google.maps.Map | null = null;
        const mapRightRef = ref<HTMLElement>();

        console.log(`mapRef.value: ${mapLeftRef.value}`);

        onMounted(async () => {
            console.log('>> onMounted()');
            console.log(`mapRef.value: ${mapLeftRef.value}`);

            await googleMapApiLoader.load().catch((e) => {
                console.error('Failed to load GoogleMapAPI', e);
            });

            // NOTE: 左側の地図のセットアップ
            if (mapLeftRef.value && mapLeftRef.value instanceof HTMLElement) {
                mapLeft = new google.maps.Map(mapLeftRef.value, {
                    center: { lat: 35.65470224381655, lng: 139.7586351565618 },
                    zoom: 17,
                });

                // ポリゴンを描画する
                const polgonCoords = [
                    {lat: 35.65621910187391, lng: 139.75806652827342},
                    {lat: 35.65398739267577, lng: 139.7574657134781},
                    {lat: 35.65370842464135, lng: 139.759472005741},
                    {lat: 35.655704768174516, lng: 139.75968658245364}
                ]

                const polygonSample = new google.maps.Polygon({
                    paths: polgonCoords,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                });

                polygonSample.setMap(mapLeft);

                // ポリゴンをクリックしたら右側の地図のピンの色を変える
                polygonSample.addListener('click', () => {
                    console.log("click");
                    polygonSample.setOptions({
                        strokeColor: "#00FF00",
                        fillColor: "#00FF00",
                    });
                    if (mapLeft != null && mapRight != null) {
                        // 右の地図のズームを変える
                        mapRight.setCenter(mapLeft.getCenter() as  google.maps.LatLng);
                        mapRight.setZoom(mapLeft.getZoom() as number);
                    }
                });

                // ピンを立てる
                const marker = new google.maps.Marker({
                    position: { lat: -25.344, lng: 131.031 },
                    map: mapLeft ,
                });

                // 押すと中心位置に移動し、ズームレベルをあげる
                marker.addListener('click', () => {
                    mapLeft?.panTo({ lat: -25.344, lng: 131.031 });
                    mapLeft?.setZoom(10);
                });
            }
            
            // NOTE: 右側の地図のセットアップ
            if (mapRightRef.value && mapRightRef.value instanceof HTMLElement) {
                mapRight = new google.maps.Map(mapRightRef.value, {
                    center: { lat: 35.65470224381655, lng: 139.7586351565618 },
                    zoom: 17,
                });
            }

            console.log(mapRight);
            console.log('<< onMounted()');
        });

        return { mapLeftRef, mapRightRef };
    },
});
</script>
<style scoped>
.hoge {
    display: flex;
    height: 100%;    
    width: 100%;
}
#map-left {
    height: 100%;
    width: 50%;
}
#map-right {
    height: 100%;
    width: 50%;
}
</style>
