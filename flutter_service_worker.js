'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b09a1da6e111df64da2a9c77fc9f5a42",
".git/config": "2eac44713bc11b99e54b12954fc73d14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "753422aca06db7c1a43f60738fa53e02",
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
".git/index": "33c21bf3c887340c62e5fb651d1f09ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17c8f6fb03311b512a9051931d2d2816",
".git/logs/refs/heads/main": "17c8f6fb03311b512a9051931d2d2816",
".git/logs/refs/remotes/origin/main": "98cb87f8086b5aa21cd0b44e4117e3a9",
".git/objects/03/4162ccd71874a9673beabc3b83982a3a53673b": "f88b50ac05699be0747bb6c1ade98344",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/936e7ef3c9642887e0f9cde416dd6819287d1b": "3eba816458827fa8b31b24690ade171c",
".git/objects/10/d384c575b16340e040fb4313a15f95f36df64c": "d5a7b0631adec591b5fd6f5b1c56ed3b",
".git/objects/11/53465e2c5d8a6ebbe5f9388f39c94aa84c20b8": "9393b747bd2cde4b0ac11f129312a9d3",
".git/objects/18/fa379d7c3c0f2d3e64dfe27736a2c383833f4d": "fffcf34b8c676e426266d862007c6878",
".git/objects/1d/826ff87b49da8c2575b5c25663de1cc00445d3": "922a9c7fd2a0621afbc9206876f8e217",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/6f822e9e76a83a976ccd365b385979d36400b4": "2d712b7c641812a5dffc61390c7942df",
".git/objects/25/2a3f450794a26a8ab3e48de2ce94a8364f1bee": "d1559b0099bd96972518b41d28189863",
".git/objects/25/9f06faa28c01ff098e4fc322178420bdb2721e": "c3c625b0d3b1b2e44cd879716c6111e7",
".git/objects/26/fa91ea73c524a912571563407d74073fef379e": "8e0e2489f46bd032815164ef622853e3",
".git/objects/29/28b29bb6b7acfa2bb43d9a3013e94f6dc37d23": "0447aa6f8802b5112500d797d1dd281a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c20d1527a5443a8f93dfc4c8e7afe140619f71": "030c07a09fbde86ca866dfd0d025733c",
".git/objects/36/a340ed5b6e35483929fd13d5265718fd239778": "76237f3c7971393ca55ea9cde2a38d9f",
".git/objects/36/be18dc5720fac99e61b4449de97bc785bf1f97": "07ae6196c9a686eda0a66907253bf1c5",
".git/objects/3a/b9bde22ac246c48fc38ccc0b5ae83a5073ea58": "960001582cb63ed5eae99f093c2f4993",
".git/objects/3d/8ff9742814ca68c0f00ad5a4389fecc6bea0c3": "a3269c7afcde7049cccc682beebf29c0",
".git/objects/3e/9c047283d0b65432b6e243cfa175272dead375": "229ada7e1e4a437adad0f15422e62b67",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/10446cfc05b2db12557138219244d5f252bd38": "c3f735906e18c5fb03cf2b58be4b43cf",
".git/objects/50/81be9534d091206b7ab8cc88e24c783445154a": "351c5e055a2acae2252a306417771cd7",
".git/objects/54/1e2f019ff6c38be427271a9730e93424b3584a": "4433f89a30e37ed6beced355cf97fb98",
".git/objects/54/b2e191ae2b4221cffa49b1c1630558a504f339": "cfa3995872a8762682f9a162d1cc8c1d",
".git/objects/56/556e3845019a407700f63d31ff1bf36410f881": "3bb1c891a56dc304a64b35d254c6d08b",
".git/objects/56/aa0c168c2be2c2ebc137bab1eef5758ca20bf3": "9bb105a8ee67043d13f381cb1415d85e",
".git/objects/57/35c897aa07c8f28c1a42c3e9ceb803873f3c9d": "b71ab395b3f40bb9079dbf4d77db17c8",
".git/objects/59/99a97dce159055cb56cafefccf6709a5cf0b4a": "16c372cb9694d6d462892dbfa475fe65",
".git/objects/5a/e2a9417e14cd40baa05f3d016747f24805f88c": "625029724072ce291b922777e55c45b0",
".git/objects/5f/9fbf5b86c054414249e15ba4bb858b38eebacd": "391506aece0047f4fae9e4c6f53a9c28",
".git/objects/65/d7f3fe2add8ff5e6685056404d7247119ebf73": "f6757074463de9529b5da87fa265ee20",
".git/objects/66/be3291c5059e999836aa3d6d4946db605e77f4": "e99115b02771ff2c110376d1d5a665df",
".git/objects/69/ff6024b41e5f88575a85eb9eeb04955f14ff4a": "a308a348a0ee1b72e5700850c25d0044",
".git/objects/6c/398f79abc1275699bf35f5515006fd080fd739": "cd445c4e4ec91ce667149fefdec3f6ec",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/76/dcdd2485c0b2c96c3907a6b890657482039f4f": "c3dbc17833cb1ff5fa785340127d9a80",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/1b254cf504c46708c0ffc5f338b57a32454900": "b1f6bdd9ac2caca124a4b9a2834708fb",
".git/objects/7e/e12b56a0ba1a8c3e49efc260fd9987f9348b11": "798e4310c24b2c6fa6ca40095a90b5ea",
".git/objects/7e/ef9286e37173ffc4222de220c28f0df8e3210f": "5158676b8a63c9f9c4c023edf4b843d2",
".git/objects/81/4fa01c84b1ccc45b7c43b2999db470d65f4962": "55b59644251641d168c943fb33db2b3f",
".git/objects/87/40fd2a3672631d578cdd26d01e6af2b3a8c2b7": "d610c7bd2087796652d3aea02cdfbc89",
".git/objects/87/d7514607fbba12df77474845448ba9249992ff": "46919bf876ffc381f02e557722822702",
".git/objects/88/398006ad9991fb26febe2fe8ae7107912e6511": "d93339571bf197d7942a3d0c14dc28bf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d06c36ece96f2c58f2704c84244eb42789df0a": "a94762f797b2615f0bc1a355f30351a9",
".git/objects/91/3ec8f507d5ba53c27fe89fc9ec4fcf199676dc": "7b22a0dac9b8b0f718ce1340785c7a35",
".git/objects/98/278dd8c124aa964c107fa1a2c3c80873b905ab": "3675a5fa4426ce1786a93d73a6d66751",
".git/objects/9a/f841455c1623158de0eb7a3d60cdc639aebd6c": "17742745b13bcaae79e388b11e3c8911",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/0b6eaede6ae28375dec69e76a1dd00ee51eb1b": "b43f8c4d5e5dbd5d8eb967c8d0306730",
".git/objects/a4/b439050991bfa81ecd3b71165232e102e77d45": "20dd5c0e24488c48923f9657cd01e462",
".git/objects/a6/dfedc373198ec353bc719de2f0e8ef0ededa83": "e3a0df11c012d3a03f001c438b6cb58f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/c8a40b98f1140d94975e4059cb445dc5a2b71b": "79db7895ad92280459c0a22c4bdc15bb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/696f2153a94b96adff3879a33cdd6f117a01f2": "3e9329e7b5e890148352c0c31f83bfc9",
".git/objects/b0/40c488419eca128da665c6a947d177d914c18a": "4b8d83141b107e054cdef18af5369f01",
".git/objects/b1/ba3b0fd34c412a3e9addb2f375119cb552a349": "770c9e610bb98df64873e3eb4e13da19",
".git/objects/b4/e00a9691ab3f0ccdbe705904038d890f93b028": "af53beae348b2f15ad933fa3965e1935",
".git/objects/b5/e00a5113f30fe632f36388c10d4bb2e0be49e8": "978c56c469539a72de2df3e62f5a28a8",
".git/objects/b6/a3fc36df17ee8abe16951137da933601203efd": "ddfd6fff388bfd241dd9006eb292588c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cf8e639928de8d5fffba9d93629f1b0c981bde": "d3061340c5752eabc4bd1d240f13b28f",
".git/objects/b9/2c4c669158080a82bffffc23779e5da2bf3b38": "19e81f49ef3159bb0fbe5e2e49dc0dcb",
".git/objects/bf/0e07462fc2196874f636af5d44b99f5adf6d6d": "2a6835097e47eca0291a4ddc9a4de74a",
".git/objects/c0/d060a833855dc628bbd22788b65629f6e410e9": "2a3fa660cf3b5092979406e57d19daa6",
".git/objects/c5/0fd573299c4aecabcc754281d87ae240c8f976": "255facc580695a39434bce17c8c630d6",
".git/objects/c6/446b3de86361ae6eb7d21d22672d5dffc74fe3": "6b0fb25db53a5c5de5b4a2155023b251",
".git/objects/c7/bdce06cf2c0745acffe9933907a6f1a0d357d4": "9d9eb6416d10e85b7f8ab810db9d9fc9",
".git/objects/c8/c44dd53363a7b571cacface2fa4d0b358ba7e0": "64f26cd58d1a2b6419900a10a9cbebee",
".git/objects/c9/08c85e6e1adcf01ee4b4bd9d2374540c145c95": "530ff4818988ab6b6ef7c79f6f521691",
".git/objects/ca/c3e9bc66bca63da6046890a6d4930427a9b95a": "69e733ee10b12f221018460a7eb03f52",
".git/objects/ce/96778ef97c727e73a2b4a058e696e97f194c9f": "b52f6d2b76c9f9453287abf90c157b1b",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ec58f5f8ec5babc79d4e01280d6586fed81397": "4f5e3e1d4e99983f44af48585696b2a5",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/5e362e20baead58cf49a48aeb02182ad8b2963": "6257b7780f9ec62325c9ad24d53e946d",
".git/objects/e9/ceebed2c5b97c1bc9daec567b4898508e9ae81": "cf06c0d02fa0343f429892b8a964b954",
".git/objects/ea/d42166a11486aade0a689ba456728b088fc654": "caa503906405b5f5ec5182305a21967f",
".git/objects/ec/4124ad843bfef35e4f113657caa5c11747283e": "157fe9d4d46c378a557dd5978b9d9188",
".git/objects/ec/4ad55845da59ab6037bbc30821461f4fde2858": "0db5abff02973d9e7a31b5d8720bf2f5",
".git/objects/ed/05b5966f7776286851ce141b9d3922dd769a44": "51bbb6be608c1fab8f064d04d0881e03",
".git/objects/ee/3d004de6210dd004d77e48553fa656338a4018": "23a57c05d5907116afa803e2a9880439",
".git/objects/ef/943dcdb1efbbd44fb89399aa764163987a10e7": "4ba605557ff440b923a08cc899f73f09",
".git/objects/f2/a9d20857327819a980e1a595de334883e34740": "dba09207132135403e252e0e06d5a0c9",
".git/objects/f4/046f8b1e2ff803b4ed32547249ff8746f5001d": "31b326b7dfbbc6c7e74c786980036746",
".git/objects/f5/bdc54685cf1f815408120ddaf70d0dabdbd129": "1e678665c2277e496533a8c092961c5e",
".git/objects/f8/6bcbe5f59a634c35be58241ed2b4130916a9a7": "6c60a405d70db36df9d2bdd21d1dbf0b",
".git/objects/f9/344a7a8c01942a282781d93d87b4b8dfe93384": "81b9b8454342a1505374cfde6bc3e2ed",
".git/objects/fb/fe6d2c143b089a0a12fa87a49a76c3f08e57d3": "85d04ff154c5078d418a3e8acd4d6098",
".git/objects/fc/910b147e9f3e861698036f1143edfaf85be8fc": "30069a9b85d512f0a23ea56359073958",
".git/refs/heads/main": "b2c13e3deecddb761db22c8f27b364be",
".git/refs/remotes/origin/main": "b2c13e3deecddb761db22c8f27b364be",
"assets/AssetManifest.json": "ca758d9044d1567a5e6cb78f02e88eb0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/background.jpg": "579f82403baef26485eebb2d15ec31be",
"assets/images/cover.png": "a03df63c849d506abf955c41af36ca7d",
"assets/NOTICES": "1fe37f60916cf72651b5c8a5854d13ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1bfcec6868bf864bed4824d79e06dca2",
"/": "1bfcec6868bf864bed4824d79e06dca2",
"main.dart.js": "9f147e55c39282c43aefa4cf90cfb872",
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
