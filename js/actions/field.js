export const windBlow = () => ({
    type: "WIND_BLOW"
});

export const setWindScale = (windScale) => ({
    type: "SET_WIND_SCALE",
    data: {
        windScale
    }
});