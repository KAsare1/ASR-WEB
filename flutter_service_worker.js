'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f229cdc97e2e7272c545f8d6b85ff0d2",
".git/config": "41c7dd18837e12363f48785e687cdc79",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ba2755138077585d7712a64554837595",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b840cf68711b7d0a40d187aed006cf8",
".git/logs/refs/heads/main": "0b840cf68711b7d0a40d187aed006cf8",
".git/logs/refs/remotes/origin/main": "f366bdbee1b583fdfaf2f5acd0ab1cc5",
".git/objects/03/448536f161f1ea90c52afa75cf750e917fc8f8": "72ebfcf0c1f0422607f8670f2282463f",
".git/objects/03/d74467c95ffbebce1ebfd792ed13321e428c38": "cd1392d614d1984eeb89689aa9f7deca",
".git/objects/04/6ef0c7dc98ac51323c5964671fe569a317a4db": "ae686fe048148ad5715bb74a8fa932f3",
".git/objects/06/5a659dc5210dcc51f93551c2004e82d1f3898b": "d310de11bb4bb6f05a05d834ab6a33b9",
".git/objects/06/d6b53ed420c67cd4c7f1de0d81c4319017af80": "5877a1d86c25cf050330c8fed35c4d24",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "bec738ccbb995c0fea9822b6c3907464",
".git/objects/0d/ba949fadadca049f58cbea62e71d560abd1c0d": "96666418ef902f30d78b4799070b7c98",
".git/objects/0f/779dc3d627db54754ffe67c2783a9a39ad6c27": "b9f73c384a423c630e32e8191497a523",
".git/objects/11/15b25712e7da5e02f7b1020d1b8fff80730ddf": "34ae3509ccc36f44431fbb8b0cb84d40",
".git/objects/17/d3148931f0766a7c5dfdd8e30e6cca007e92d2": "3c7381758ced365294d80b628a9ad3ed",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/27/c777597f5cba8165c10f7e692d59671d2f5998": "fbc7ca08b5ad6b30458b0ef92f2dda5d",
".git/objects/31/e617f642365189e14f651bedd616b7c897d6ae": "30bedac04ca0c80e7657e85134b92e20",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/12109d8f985925fc548cea7d73a085718dc18c": "db7ccb631bfb158ea74859f1da1453fd",
".git/objects/43/7cee5d6ef02ae15f8e79da04828e7855862ab9": "2012622ebf6a9d72a169d95b6eef01d9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/69/3be70e20891e371b8489845d34f3369fc96a51": "362e2bd87c24b35f94a89af4913ec9a3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/b15d8ec7291eb5ef74d2c69044effe7861fc9c": "2891e4ea26a42b7fb20d3f77e1043dab",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/bff34d22d2b2041a6f9030f629fed161243973": "1d5ae3038d772994de5be99b371cb561",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/56d8cea47d0f40fb2ff528d96cde6791b96588": "6372a2fa68039b66e984068b347285f8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/0797a94cc9319ed21f10d65ca99a124cec080f": "d99312f165c6f989a1cdd9a1a62229c8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/48b0c493239debdd4189b82fc8a87cc13f1085": "b3e47709c03f5f0d1896d30c3390723f",
".git/objects/9c/ff884fbf72037799d518f58625b74212321e80": "851b8afad0c70ef1f79644290fa86928",
".git/objects/9e/9950da028b189cc1f5548b420c78c8731cd43d": "1a6e2976feb5b3c66ee397113eaf3e1c",
".git/objects/a4/cd7292badd30d90fe799a6d31e3a0a74a4e058": "96d1d63679a705d60e3f3f6000c8eeaf",
".git/objects/a8/1c685dd57e339edb86f8723357cadc65551788": "fea22624a61f3a3890419d620e4c4043",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/dc1f586d6e923b9664363336d11427040bfa50": "c4154a025c6bf5b1abfd016bfac9f1ca",
".git/objects/b6/2cdcb05bea9d162ff5690fcf4439996ae4ae1a": "a2b8bc942a8b5becb8014f7f9e9ccc77",
".git/objects/b6/87005120229e85e3972c1425de848efa0346a7": "915c029cab3a3fd33ca3a0f9b4d7b69c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/cf76f47676a01c5688fc7bbb7057819234a6f7": "40dfbea0aacab5cb55bfbb3a2b1bad37",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c0/dc11ad5a7950c91e84fc14daecc891e4fcbb53": "803f801a04c303a0a75fdb79a5acd9cd",
".git/objects/c1/b3b1d62fe62eef9abd2ef0e3c222e74ed68923": "fe6c120227c80d63d8d4b7d17aef7e58",
".git/objects/c2/71b146ed1c9aa49981d12f2f813e7dc1acd578": "0f775ac57ce0bb9aabfc3777305f8fbb",
".git/objects/ce/cc918de3e611950cd257bef9df6d12fe6de4ff": "1e846bbbc591a9740d69b1ba3aeb5ecb",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/c7b6c92d7a0534707cbe695bc6389dfdbcdece": "35612f3128c327ffe3edb5039dc33540",
".git/objects/d3/d278daecaf2c30ad565ed026339ae51186db57": "bcc9aa1352af96c3e5e4648e8e57baa7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ade441dbc53c0956f55b58bd7b2c506b8a67ec": "17a26c56fd013774c6f99b79416f3d96",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b489b1b6fa2924acb4925edeebe60cf8709142": "8301f563645a6c38ac146df312712be2",
".git/objects/da/8428005ba40d95a4af8a06c20f6a4a0e93420a": "131a5003e21c39922d41914478debdb9",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/53ed101c4d5e6d1960388433353b4ad4654ef6": "7c3dd9a730a42790c1b37ad7ef43dff3",
".git/objects/e4/016ac421b518180060450fa44e6655c7ec0558": "b241c94268b7e469a2254742d673d2cd",
".git/objects/e5/2250dad3716149f5a82505059a30422203a771": "95b0ce6969aea8f6e27859fe634b3fc1",
".git/objects/e5/6e4a94efbe0b6ad1fc6c59d5985099cd5a7e61": "9a12198b52d597dbabe21f178d4a6aef",
".git/objects/e7/eb81dc2f90e6d5c4e60aeefa385d3e884b0bfb": "e04547e21fe9b7cbb3395453e4ebfe0f",
".git/objects/eb/45084cc504e977b5605c48d4e1698eed0f1e2e": "f049b4cde26d958baade0206264ce934",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/ff1f75cb7ef589c535c3b825f3c4e353f9966c": "6c0f7c32ef651c2d7d8487c4735478a5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/6fae9908491d874df6c609bcf87d23132aeb3f": "21a3c34186279123bdd584c798987d98",
".git/objects/f7/561345d49ed570e8ab51e7a6e7b4f1eccff19e": "d0d0745a9d8b17738c209329ea7c062f",
".git/objects/f9/5253ffc41e0097242641c8f661459c9ebf9442": "642c0a77269c387f92602c9d7a93e77e",
".git/objects/fb/2ec995fa2064d897a0140e9568def98b7247f2": "598a7715eb0b2ce37e31c26bb3e0293a",
".git/refs/heads/main": "bd433dbada59728c5d62fa1056ae16ad",
".git/refs/remotes/origin/main": "bd433dbada59728c5d62fa1056ae16ad",
"assets/AssetManifest.bin": "955dd5fc2525f511136cd3580f8aec57",
"assets/AssetManifest.bin.json": "4b38fb72324c5e98602d05df28959770",
"assets/AssetManifest.json": "fd663b6d1931ff9c82430c32dae34768",
"assets/assets/asr_logo.jpg": "2e8a56da13e2dc9942e24bba48ab4794",
"assets/assets/ghana.png": "720468c0d4a6b07500cbb2a28e1b5f0c",
"assets/assets/google.png": "ba042bfc83ba42ea424662abe44e428c",
"assets/assets/history.jpg": "e2e9bf369af8928e691d817c2c7a1d82",
"assets/assets/intro.png": "731e772d146db9a120bb7334caaa944c",
"assets/assets/ladyanim.png": "50f2f64efc55bba302ee07daab9d001e",
"assets/assets/legon.png": "0a819e383f51685e6ec2d67f5afba5d2",
"assets/assets/micro.jpg": "47bdeced774d33d82042fcb6eacf5a00",
"assets/assets/padlock.png": "b4c4c7053e4de91eb67d7ef0dd834fcf",
"assets/assets/progress.png": "d2ab3ed7a55010417d539e47611cac55",
"assets/assets/qna.png": "e3d8060759bfa32b93e46dca7d0144bf",
"assets/assets/qnathree.png": "20522eb2fbe034590604ec0adb95cd24",
"assets/assets/qnatwo.png": "7b21d9fda08b84781dd1d371fcce97c3",
"assets/assets/ranking.png": "bb8347dabee57ae32035934b5ad4d381",
"assets/assets/record.jpg": "26b023bd064d70430d99fafb3b487d73",
"assets/assets/sealips.png": "9fc986aeb4fd8bd1f4e227f16e4c526a",
"assets/assets/surveymodal.png": "5e9be2859f889457edcd61af16ede10f",
"assets/assets/team.png": "ac66dbc084f6421d003076d744dd3d77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9317b52b8a22d65048d330d926698f2c",
"assets/NOTICES": "5a77b2762d5c740616dec5b560327451",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2ee66c4b71198a6d80aa743287c527b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e018eb68d888334f6d731f3652cf8355",
"/": "e018eb68d888334f6d731f3652cf8355",
"main.dart.js": "f0d3aa899f48b652cb1bf4812f0b1bb1",
"manifest.json": "73c1724a0b12d2adc6ba278ae011af84",
"version.json": "bb2d4e78f2fae5c58d6e84f6240d0718"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
