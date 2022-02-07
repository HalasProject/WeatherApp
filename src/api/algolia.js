import places from 'places.js'
import { ALGOLIA_API_KEY, ALGOLIA_APP_ID } from '../environment'
export default function PlaceInstance(elm) {

    const fixedOptions = {
        appId: ALGOLIA_APP_ID,
        apiKey: ALGOLIA_API_KEY,
        container: document.querySelector(elm),
    };
      
    const reconfigurableOptions = {
        language: 'fr', // Receives results in German
        // countries: ['us', 'ru'], // Search in the United States of America and in the Russian Federation
        // type: 'city', // Search only for cities names
        // aroundLatLngViaIP: false // disable the extra search/boost around the source IP
    };

    return places(fixedOptions).configure(reconfigurableOptions);
}