import { Loader } from '@googlemaps/js-api-loader';

export const googleMapApiLoader = new Loader({
    apiKey: process.env.GOOGLE_MAP_API_KEY,
    version: 'weekly',
});
