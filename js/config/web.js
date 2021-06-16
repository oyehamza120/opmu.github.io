(function(root) {
    var CONFIG = {
        //demoMode: true,
        build: 'web',
        platform: "web",
        os: "web",
        enableSave: false,
        enableSaveCopy: true,
        enableShare: false,
        enableGallery: false,
        enableGalleryTransitions: false,
        enablePurchases: false,
        enableBackgroundBlur: false,
        enableStartScreen: true,
        enableBatchExport: true,
        importLimit: 50,
        scripts: [
            'js/build/editor.js',
            'js/build/dcraw.js'
        ],
        purchases: {} // this must remain empty for license key to work
    };

    if (typeof exports === 'object') {
        module.exports = CONFIG;
    } else {
        root.CONFIG = CONFIG;
    }
}(this));