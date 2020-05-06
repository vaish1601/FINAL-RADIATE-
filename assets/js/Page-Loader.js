$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 3000;
function hidePreloader() {
var preloader = $('.preloader');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
