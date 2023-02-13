console.log("TEST :pl~");

// 컬러칩 누를시 이미지 변경
function chgColor(pid, pcid) {
  var url = $("#" + pid).attr("src");
  var target = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("_"));
  url = url.replace(target, pcid);
  $("#" + pid).attr("src", url);
  $("#" + pid + "_link").attr("href", "/product/ProductDetail/" + pcid);
  $("#" + pid + "Like").attr("data-value", pcid);
}

// FEAT: 좋아요 확인
function getIsLiked(PCID, MID) {
  console.log(`TESTLISKE: ${PCID} , ${MID}`);
  $.ajax({
    url: `/productList/like/${PCID}/${MID}`,
    type: "get",
    dataType: "json",
    error: function (request, status, error) {
      console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    },
    success: function (result) {
      const PID = `${PCID.split("_")[0]}Like`;
      if (result == true) {
        $(`#${PID}`).addClass("on");
      } else {
        $(`#${PID}`).removeClass("on");
      }
    },
  });
}

// FEAT: depth가 1일때
function getSecondDepth(url) {
  $.getJSON(`http://localhost:8080/productList/category/${url}`, function (data) {
    let depthList = `
    <div class="flag_wrap case swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android swiper-container-wp8-horizontal"> 
      <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        <li class="swiper-slide flag on swiper-slide-active" id="categoryNav01" style="margin-right: 6px; widfit-content">
          <a href="/product/ProductList/${url}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '&nbsp;전체');">${url} 전체</a>
        </li>
      `;

    $(data).each(function () {
      depthList += `
        <li class="swiper-slide flag swiper-slide-next" style="margin-right: 6px; wid fit-content;">
          <a href="/product/ProductList/${url}${this}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${this}</a>
        </li>
        `;
    });
    depthList += `</ul></div>`;
    $(".cate_wrap191028").html(depthList);

    makeNewSwiper();
    chgHeaderTitle(url);
  });
}

// FEAT: depth가 2 이상일때
function getThirdDepth(url) {
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
        <li class="swiper-slide flag swiper-slide-next on" style="margin-right: 6px; wid fit-content;  ">
          <a href="/product/ProductList/${depth1}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${depth2} 전체</a>
        </li>
      `;

    $(data).each(function () {
      depthList += `
        <li class="swiper-slide flag swiper-slide-next" style="margin-right: 6px; wid fit-content;  ">
          <a href="/product/ProductList/${depth1}${depth2}${this}/" class="name" onclick="GA_Event('카테고리_리스트', '카테고리', '재킷');">${this}</a>
        </li>
        `;
    });
    depthList += `</ul></div>`;
    $(".cate_wrap191028").html(depthList);
    makeNewSwiper();
    chgHeaderTitle(depth1);
  });
}

function makeNewSwiper() {
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

// FEAT : 리스트 헤더 변경
function chgHeaderTitle(title) {
  var headerTitleHtml = `<a href="javascript:noLink();" onclick="openGnbPopup();" class="select_">${title}</a>`;
  $("#headerTitle").html(headerTitleHtml);
}

let canLoadNextPage = true; // 일회용 글로벌 변수
// TODO: 무한 스크롤
function YesScroll() {
  const pagination = document.querySelector("#listEnd"); // 페이지네이션 정보획득
  const fullContent = document.querySelector("#hsProductList"); // 전체를 둘러싼 컨텐츠 정보획득
  const screenHeight = screen.height; // 화면 크기
//   let canLoadNextPage = false; // 일회용 글로벌 변수

  document.addEventListener("scroll", OnScroll, { passive: true }); // 스크롤 이벤트함수정의

  function OnScroll() {
    //스크롤 이벤트 함수
    const fullHeight = fullContent.clientHeight; // listBody 클래스의 높이
    const scrollPosition = pageYOffset; // 스크롤 위치
    console.log(`${fullHeight} | ${scrollPosition} >> ${canLoadNextPage}`)
    if (fullHeight - 200 - screenHeight / 2 <= scrollPosition && canLoadNextPage) {
      // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 canLoadNextPage 변수가 거짓이라면
      canLoadNextPage = false; // canLoadNextPage 변수를 true로 변경해주고,
      console.log("madeBox");
      madeBox();
    }
  }
}

let currentpage = 2; //다음 로딩할 페이지 글로벌 변수
function madeBox() {
  console.log("url", window.location.href);
  var token = $("meta[name='_csrf']").attr("content");
  var header = $("meta[name='_csrf_header']").attr("content");
  $.ajax({
    url: `/productList/getList`,
    type: "post",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(header, token);
      console.log("-------------------------------------------세팅끝");
    },
    data: {
      currentPage: currentpage,
      categoryCode: "we051",
      brand: "",
    },
    dataType: "json",
    error: function (request, status, error) {
      console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    },
    success: function (result) {
      let itemList = ``;
      result.forEach(pInfo => {
        console.log(pInfo);
        itemList += `
            <li class="float active" id="listBody1_li8">
                <a href="/product/ProductDetail/${pInfo.colorList[0].pcid}" class="categoryImgBox" id="|${pInfo.pid}_link|">
                <div class="img">
                    <img
                    src="${pInfo.colorList[0].pcimg1}"
                    data-original="http://newmedia.thehandsome.com/SJ/2D/SS/SJ2D1WJC361W_BK_T01.jpg"
                    id="${pInfo.pid}"
                    alt="${pInfo.pname}"
                    text="http://newmedia.thehandsome.com/SJ/2D/SS/SJ2D1WJC361W_BK_T01.jpg"
                    class="respon_image lazy"
                    style="display: block" />
                </div>
                </a>
                <div class="info_cont">
                <div class="color_chip">`;

        pInfo.colorList.forEach((color, index) => {
          console.log(color);
          // 컬러칩 더하기
          itemList += `
                    <a href="javascript:noLink();" 
                        data-pid="${pInfo.pid}" 
                        data-pcid="${color.pcid}"  
                        onclick="chgColor(this.getAttribute('data-pid'), this.getAttribute('data-pcid'));">
                        <button
                            class="${index == 0 ? "chip on" : "chip"}"
                            id="${color.pcid}"
                            style="background:${color.pccolorcode} url(${color.pcchipimg})">"
                        </button>
                    </a>`;
        });

        itemList += `</div>
            <p class="brand">${pInfo.bname}</p>
            <p class="name">${pInfo.pname}</p>
            <p class="price" id="listPrice8">
                <span id="price_SJ2D1WJC361W_BK" text="'₩'+ ${pInfo.pcprice}'"></span>
            </p>
            </div>

            <button
            type="button"
            class="like"
            like-data="${pInfo.colorList[0].pcid}"
            classappend="${pInfo.colorList[0].isLiked} == true ? on"
            id="${pInfo.pid}+Like"
            onclick="callWishListClick($(this), this.getAttribute('data-value'), '%uB9B0%uB128%20%uBE14%uB80C%uB4DC%20%uBC84%uD2BC%20%uC5C5%20%uC2F1%uAE00%20%uC7AC%uD0B7', '1','8');"
            data-value="${pInfo.colorList[0].pcid}">
            찜하기
            </button>
        </li>`;
      });
      $("#listBody").append(itemList);

      canLoadNextPage = true; 
      currentpage ++;
      console.log("DONE");
    },
  });
}
