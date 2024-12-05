window.onloadTurnstileCallback = function () {
    turnstile.render("#notrespassing", {
        sitekey: "0x4AAAAAAA1hE4LsuFxVO-LB",
        callback: function (token) {
            console.log(`Challenge Success ${token}`);
        },
    });
};