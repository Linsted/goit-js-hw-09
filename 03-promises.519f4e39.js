!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u,r,a,c,l,d=i("iU1Pc"),f={inputDelay:document.querySelector('[name="delay"]'),inputStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),button:document.querySelector('[type="submit"]'),form:document.querySelector(".form")};f.form.addEventListener("submit",(function(n){var t=function(n){setTimeout((function(){var t,o,i;(t=n,o=c,i=Math.random()>.3,new Promise((function(e,n){i?e({position:t,delay:o}):n({position:t,delay:o})}))).then((function(n){var t=n.position,o=n.delay;e(d).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(d).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),c+=+r}),l),l+=+r};n.preventDefault(),u=f.inputDelay.value,r=f.inputStep.value,a=f.inputAmount.value,l=+u,c=+u;for(var o=1;o<=a;o++)t(o)}))}();
//# sourceMappingURL=03-promises.519f4e39.js.map