console.log("TEST :pl~")

// 컬러칩 누를시 이미지 변경
      function chgColor(pid, pcid) {
        var url = $("#" + pid).attr("src");
        var target = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("_"));
        url = url.replace(target, pcid);
        $("#" + pid).attr("src", url);
        $("#" + pid+"_link").attr("href", "/product/ProductDetail/"+pcid);
      }

function getFilter() {
	console.log("getFilter");
}