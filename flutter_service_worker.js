'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "85571afa8e06a6d2c08ed4bcb98d5c14",
".git/config": "2eac44713bc11b99e54b12954fc73d14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c52de55938eb9b60508750d6696a6ecd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "904030ff80d863ec73da41ea5605fabf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d27bba2c962c40b4404a9d693e1aff1a",
".git/logs/refs/heads/main": "d27bba2c962c40b4404a9d693e1aff1a",
".git/logs/refs/remotes/origin/main": "04b56306e87a99eb10ce15d09e616a75",
".git/objects/07/936e7ef3c9642887e0f9cde416dd6819287d1b": "3eba816458827fa8b31b24690ade171c",
".git/objects/10/d384c575b16340e040fb4313a15f95f36df64c": "d5a7b0631adec591b5fd6f5b1c56ed3b",
".git/objects/11/53465e2c5d8a6ebbe5f9388f39c94aa84c20b8": "9393b747bd2cde4b0ac11f129312a9d3",
".git/objects/18/fa379d7c3c0f2d3e64dfe27736a2c383833f4d": "fffcf34b8c676e426266d862007c6878",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/2a3f450794a26a8ab3e48de2ce94a8364f1bee": "d1559b0099bd96972518b41d28189863",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c20d1527a5443a8f93dfc4c8e7afe140619f71": "030c07a09fbde86ca866dfd0d025733c",
".git/objects/36/a340ed5b6e35483929fd13d5265718fd239778": "76237f3c7971393ca55ea9cde2a38d9f",
".git/objects/36/be18dc5720fac99e61b4449de97bc785bf1f97": "07ae6196c9a686eda0a66907253bf1c5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/10446cfc05b2db12557138219244d5f252bd38": "c3f735906e18c5fb03cf2b58be4b43cf",
".git/objects/50/81be9534d091206b7ab8cc88e24c783445154a": "351c5e055a2acae2252a306417771cd7",
".git/objects/54/b2e191ae2b4221cffa49b1c1630558a504f339": "cfa3995872a8762682f9a162d1cc8c1d",
".git/objects/57/35c897aa07c8f28c1a42c3e9ceb803873f3c9d": "b71ab395b3f40bb9079dbf4d77db17c8",
".git/objects/59/99a97dce159055cb56cafefccf6709a5cf0b4a": "16c372cb9694d6d462892dbfa475fe65",
".git/objects/66/be3291c5059e999836aa3d6d4946db605e77f4": "e99115b02771ff2c110376d1d5a665df",
".git/objects/69/ff6024b41e5f88575a85eb9eeb04955f14ff4a": "a308a348a0ee1b72e5700850c25d0044",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/76/dcdd2485c0b2c96c3907a6b890657482039f4f": "c3dbc17833cb1ff5fa785340127d9a80",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/ef9286e37173ffc4222de220c28f0df8e3210f": "5158676b8a63c9f9c4c023edf4b843d2",
".git/objects/87/40fd2a3672631d578cdd26d01e6af2b3a8c2b7": "d610c7bd2087796652d3aea02cdfbc89",
".git/objects/87/d7514607fbba12df77474845448ba9249992ff": "46919bf876ffc381f02e557722822702",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d06c36ece96f2c58f2704c84244eb42789df0a": "a94762f797b2615f0bc1a355f30351a9",
".git/objects/91/3ec8f507d5ba53c27fe89fc9ec4fcf199676dc": "7b22a0dac9b8b0f718ce1340785c7a35",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/0b6eaede6ae28375dec69e76a1dd00ee51eb1b": "b43f8c4d5e5dbd5d8eb967c8d0306730",
".git/objects/a4/b439050991bfa81ecd3b71165232e102e77d45": "20dd5c0e24488c48923f9657cd01e462",
".git/objects/a6/dfedc373198ec353bc719de2f0e8ef0ededa83": "e3a0df11c012d3a03f001c438b6cb58f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/c8a40b98f1140d94975e4059cb445dc5a2b71b": "79db7895ad92280459c0a22c4bdc15bb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/40c488419eca128da665c6a947d177d914c18a": "4b8d83141b107e054cdef18af5369f01",
".git/objects/b1/ba3b0fd34c412a3e9addb2f375119cb552a349": "770c9e610bb98df64873e3eb4e13da19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2c4c669158080a82bffffc23779e5da2bf3b38": "19e81f49ef3159bb0fbe5e2e49dc0dcb",
".git/objects/bf/0e07462fc2196874f636af5d44b99f5adf6d6d": "2a6835097e47eca0291a4ddc9a4de74a",
".git/objects/c6/446b3de86361ae6eb7d21d22672d5dffc74fe3": "6b0fb25db53a5c5de5b4a2155023b251",
".git/objects/c7/bdce06cf2c0745acffe9933907a6f1a0d357d4": "9d9eb6416d10e85b7f8ab810db9d9fc9",
".git/objects/c9/08c85e6e1adcf01ee4b4bd9d2374540c145c95": "530ff4818988ab6b6ef7c79f6f521691",
".git/objects/ca/c3e9bc66bca63da6046890a6d4930427a9b95a": "69e733ee10b12f221018460a7eb03f52",
".git/objects/ce/96778ef97c727e73a2b4a058e696e97f194c9f": "b52f6d2b76c9f9453287abf90c157b1b",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/ceebed2c5b97c1bc9daec567b4898508e9ae81": "cf06c0d02fa0343f429892b8a964b954",
".git/objects/ec/4124ad843bfef35e4f113657caa5c11747283e": "157fe9d4d46c378a557dd5978b9d9188",
".git/objects/ec/4ad55845da59ab6037bbc30821461f4fde2858": "0db5abff02973d9e7a31b5d8720bf2f5",
".git/objects/ee/3d004de6210dd004d77e48553fa656338a4018": "23a57c05d5907116afa803e2a9880439",
".git/objects/ef/943dcdb1efbbd44fb89399aa764163987a10e7": "4ba605557ff440b923a08cc899f73f09",
".git/objects/f2/a9d20857327819a980e1a595de334883e34740": "dba09207132135403e252e0e06d5a0c9",
".git/objects/f9/344a7a8c01942a282781d93d87b4b8dfe93384": "81b9b8454342a1505374cfde6bc3e2ed",
".git/refs/heads/main": "703caf8d6a3691a3a7a8a0226b5f5619",
".git/refs/remotes/origin/main": "703caf8d6a3691a3a7a8a0226b5f5619",
"assets/AssetManifest.json": "fb669b6bd376f9b7b73966d7d149ce07",
"assets/assets/images/background.jpg": "579f82403baef26485eebb2d15ec31be",
"assets/assets/images/cover.png": "a03df63c849d506abf955c41af36ca7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "524b9308ca2d6c07553b772c0258cbb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1ffed1d4a25a263ea77eda058bd98275",
"/": "1ffed1d4a25a263ea77eda058bd98275",
"main.dart.js": "6350615370a34816a29a49afbfd11a57",
"manifest.json": "17cb5329627b8b3a2a31eb3c39715802",
"version.json": "279442584cd49ea0da632b16a9157cc0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
