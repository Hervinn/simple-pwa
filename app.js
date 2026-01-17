// button interaction
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('output').textContent = 'Button Clicked!';
});
// register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load",() => {
        navigator.serviceWorker
        .register("service-worker.js")
        .then(() => console.log("Service Worker registered"))
        .catch(err => console.log("Service Worker registration failed", err));
    });
}