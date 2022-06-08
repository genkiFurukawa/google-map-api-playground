<template>
  <div
    id="map"
    ref="mapRef"
  />
</template>
<script lang="ts">
import { googleMapApiLoader } from '@/map/index';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    setup() {
        let map: google.maps.Map | null = null;
        const mapRef = ref<HTMLElement>();

        console.log(`mapRef.value: ${mapRef.value}`);

        onMounted(async () => {
            console.log('>> onMounted()');
            console.log(`mapRef.value: ${mapRef.value}`);

            await googleMapApiLoader.load().catch((e) => {
                console.error('Failed to load GoogleMapAPI', e);
            });

            if (mapRef.value && mapRef.value instanceof HTMLElement) {
                map = new google.maps.Map(mapRef.value, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                });

                // ピンを立てる
                const marker = new google.maps.Marker({
                    position: { lat: -25.344, lng: 131.031 },
                    map: map,
                });

                // 押すと中心位置に移動し、ズームレベルをあげる
                marker.addListener('click', () => {
                    map?.panTo({ lat: -25.344, lng: 131.031 });
                    map?.setZoom(10);
                });
            }

            console.log(`map: ${map}`);
            console.log('<< onMounted()');
        });

        return { mapRef };
    },
});
</script>
<style scoped>
#map {
    height: 100%;
}
</style>
