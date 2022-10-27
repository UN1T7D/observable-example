const PROXY_CONFIG = [
    {
        context: ["/api/v2/pokemon"],
        target: "https://pokeapi.co",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
];

module.exports = PROXY_CONFIG;
