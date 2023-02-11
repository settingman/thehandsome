console.log("TEST :pl~");

// 컬러칩 누를시 이미지 변경
function chgColor(pid, pcid) {
  var url = $("#" + pid).attr("src");
  var target = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("_"));
  url = url.replace(target, pcid);
  $("#" + pid).attr("src", url);
  $("#" + pid + "_link").attr("href", "/product/ProductDetail/" + pcid);
}

// FEAT: depth가 1일때
function getSecondDepth(url) {
  console.log("getSecondDepth" + url);
  $.getJSON(`http://localhost:8080/productList/category/${url}`, function (data) {
    let depthList = `
    <div class="flag_wrap case swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android swiper-container-wp8-horizontal"> 
      <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        <li class="swiper-slide flag on swiper-slide-active" id="categoryNav01" style="margin-right: 6px; width:fit-content">
          <a href="/product/ProductList/${url}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '&nbsp;전체');">${url} 전체</a>
        </li>
      `;

    $(data).each(function () {
      console.log(this);
      depthList += `
        <li class="swiper-slide flag swiper-slide-next" style="margin-right: 6px; width: fit-content;">
          <a href="/product/ProductList/${url}${this}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${this}</a>
        </li>
        `;
    });
    depthList += `</ul></div>`;
    $(".cate_wrap191028").html(depthList);
    makeNewSwiper();
  });

}

// TODO: depth가 2 이상일때
function getThirdDepth(url) {
  console.log("getNextDepth" + url);
  console.log(url.substring(0, 2) + " / " + url.substring(2, 4));
  const depth1 = url.substring(0, 2);
  const depth2 = url.substring(2, 4);

  let depthList = "";
  //previous_category
  $.getJSON(`http://localhost:8080/productList/category/${depth1}`, function (data) {
    depthList += `
    <div class="previous_category191028">
        <div class="cate_icon">
          <a href="#;" onclick="GA_Event('카테고리_리스트', '카테고리', '이전카테고리');">이전카테고리아이콘</a>
        </div>
        <div class="cate_list">
          <ul>
      `;
    depthList += `<li><a href="/product/ProductList/${depth1}" class="two_link">전체보기</a></li>`;

    $(data).each(function () {
      console.log(this);
      depthList += `
            <li>
              <a href="/product/ProductList/${depth1}${this}" class="two_link">${this}</a>
            </li>
            
          `;
    });

    depthList += `</ul>
              <a href="#;" class="btn_ul_close191028">
                <span>닫기</span>
              </a>
            </div>
          </div>`;
    depthList += `</ul></div></div></div>`;
  });

  $.getJSON(`http://localhost:8080/productList/category/${depth1}/${depth2}`, function (data) {
    depthList += `
    <div class="flag_wrap case swiper-container depth2 swiper-container-horizontal swiper-container-free-mode swiper-container-android swiper-container-wp8-horizontal"> 
      <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        <li class="swiper-slide flag swiper-slide-next on" style="margin-right: 6px; width: fit-content;  ">
          <a href="/product/ProductList/${depth1}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${depth2} 전체</a>
        </li>
      `;

    $(data).each(function () {
      console.log(this);
      depthList += `
        <li class="swiper-slide flag swiper-slide-next" style="margin-right: 6px; width: fit-content;  ">
          <a href="/product/ProductList/${depth1}${depth2}${this}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${this}</a>
        </li>
        `;
    });
    depthList += `</ul></div>`;
    $(".cate_wrap191028").html(depthList);
    makeNewSwiper();
  });
}

function makeNewSwiper(){
  var flagWrapSwiper = new Swiper(".flag_wrap.case.swiper-container", {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 6,
    freeModeMomentumBounce: false,
  });
}

/*
스와이퍼가 움직이지 않습니다.
swiper 참고 : https://github.com/nolimits4web/Swiper/issues/1053
*/