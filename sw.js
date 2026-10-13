// Minimal service worker so the staff app can be installed. It does not cache
// anything: every request goes to the network, so staff always see live data.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
