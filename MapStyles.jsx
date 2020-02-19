export default [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#878787"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#373737"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#e2a161"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#907e6d"
            },
            {
                saturation: -20
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#907e6d"
            },
            {
                lightness: -17
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                visibility: "on"
            },
            {
                weight: 0.9
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#373737"
            },
            {
                lightness: -10
            }
        ]
    },
    {},
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#373737"
            },
            {
                weight: 0.7
            }
        ]
    }
];