<template>
    <div>地図表示する</div>
    <div id="map" ref="mapRef"></div>
</template>
<script lang="ts">
import { googleMapApiLoader } from '@/map/index';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    setup() {
        // eslint-disable-next-line
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
                // eslint-disable-next-line
                map = new google.maps.Map(mapRef.value, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
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
