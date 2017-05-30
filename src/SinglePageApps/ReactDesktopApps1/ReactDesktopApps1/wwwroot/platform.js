document.documentElement.className += ' web';
window.nativeHost = {
    quit: function () {
        window.close();
    },
    showAbout: function () {
        alert("ReactDesktopApps1 - ServiceStack + React");
    },
    ready: function () { },
    toggleFormBorder: function () { }
};
