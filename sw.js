// Minimal service worker: lets the app be installed. It does not cache pages, so updates always load fresh.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(()=>new Response('<meta name="viewport" content="width=device-width,initial-scale=1"><h3 style="font-family:sans-serif;padding:24px">You are offline. Please reconnect to use Nirmal Library.</h3>',{headers:{'Content-Type':'text/html'}})));
  }
});
