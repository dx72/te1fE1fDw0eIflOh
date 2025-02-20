var FILTERS = ["112.6.83.33:8088","119.29.29.29","120.92.215.64","ali.pull.yximgs.com","ali.static.yximgs.com","ali2.a.yximgs.com","ali2-course.video.yximgs.com","ali-adaptive.pull.yximgs.com","alicmmov.a.etoote.com","alimov2.a.yximgs.com","ali-origin.pull.yximgs.com","ali-proxy.pull.yximgs.com","aliqcmmov.a.etoote.com","api3.gifshow.com","apihb6.ksapisrv.com","apihn1.gifshow.com","apihn1.ksapisrv.com","api-p1.yximgs.com","apis2.gifshow.com","apissl.gifshow.com","bd.pull.yximgs.com","bd-adaptive.pull.yximgs.com","bdcm.a.etoote.com","bdcmmov.a.etoot.com","bdcmmov.a.etoote.com","bd-livemate.pull.yximgs.com","bdmov.a.yximgs.com","bd-origin.pull.yximgs.com","bd-proxy.pull.yximgs.com","gdfp.gifshow.com","httpdns.alicdn.com","httpdns.bcelive.com","httpdns.c.cdnhwc2.com","js2.a.yximgs.com","jscmmov.a.etoote.com","jsmov2.a.yximgs.com","jsqcmmov.a.etoote.com","js-rwk.pull.etoote.com","ks.proxy.pull.yximgs.com","ks.pull.yximgs.com","ks-adaptive.pull.yximgs.com","ks-origin.pull.yximgs.com","ks-orign.pull.yximgs.com","ks-proxy.pull.yximgs.com","ntp.en.gifshow.com","ntp.nc.gifshow.com","sdkoptedge.chinanetcenter.com","spissl.gifshow.com","static.yximgs.com","tx.a.kspkg.com","tx.static.yximgs.com","tx2.a.yximgs.com","tx2-course.video.etoot.com","tx2-course.video.yximgs.com","tx-adaptive.pull.yximgs.com","txcmmov.a.etoot.com","txdwk.a.yximgs.com","txdwk-course.video.yximgs.com","txdwkmov.a.yximgs.com","tx-game.pull.yximgs.com","tx-livemate.pull.yximgs.com","txmov2.a.yximgs.com","tx-origin.pull.yximgs.com","tx-proxy.pull.yximgs.com","txqcmmov.a.etoote.com","tx-rwk.pull.etoote.com","upload.ksapisrv.com","uploads2.gifshow.com",".yximgs.com",".etoote.com",".gifshow.com",".ksapisrv.com",".bcelive.com",];
var PROXY = "PROXY 127.0.0.1:9999";
var DERECT = "DIRECT";
function FindProxyForURL(url, host) {
  function rule_filter(domain) {
    for (var i = 0; i < FILTERS.length; i++) {
      if (domain.search(FILTERS[i]) !== -1) {
        return false;
      }
    }
    return true;
  }
  if (rule_filter(host) === true) {
    return DERECT;
  } else {
    return PROXY;
  }
}
