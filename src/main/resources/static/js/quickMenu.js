/**
 *
 * quickMenu.js
 * @author 박성환
 * @since 2023. 2. 8.
 *
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박성환      최초 생성, 메인페이지 퀵메뉴 JS
 * </pre>
 */

let template = `
<style rel="stylesheet" type="text/css">
body {
  line-height: inherit;
}
.btn_wrap .btn {
  margin-left: 0;
}
.swiper-slide {
  font-size: 0;
}
</style>
<script type="text/javascript">
$(document).ready(function () {
  $('body').addClass('hold_body');
  if (
    handsomePageId == 'mobileMain201903Page' &&
    handsomePageId == 'mobile-homepage' &&
    goToMySmartFilterYn == 'Y'
  ) {
    goToMySmartFilterYn = 'N';
    setTimeout(function () {
      $('#navTab03').click();
      setTimeout(function () {
        $('#mySmartFilterRing').click();
      }, 1);
    }, 1);
  } else if (
    handsomePageId == 'productList' ||
    handsomePageId == 'outletMainPage' ||
    handsomePageId == 'edShopMainPage'
  ) {
    if (gnbType == 'ca' || gnbType == 'ou' || gnbType == 'ed') {
      setTimeout(function () {
        $('#navTab02').click();
      }, 1);
    }
    gnbType = 'br';
  } else if ('mainYoursPage' == handsomePageId) {
    if ('ca' == mainYourPageParam) {
      setTimeout(function () {
        $('#navTab02').click();
      }, 0);
      mainYourPageParam = 'br';
    }
  }
});
function navShopClose() {
  $('body').removeClass('hold_body');
}

function moveBrandLookBook(brandCode) {
  var url = '/ko/magazine/lookbook';
  var $form = $('<form></form>');
  $form.attr('action', url);
  $form.attr('method', 'post');
  $form.append(
    "<input type='hidden' name='CSRFToken' value='b2d55a21-4fa7-43dd-8fe0-5651039a697e' />"
  );
  $form.append(
    "<input type='hidden' name='paramBrandCode' value='" +
      brandCode +
      "' />"
  );
  $form.appendTo('body');

  $form.submit();
}
</script>
<!-- Contents -->
<div class="hand_footer_gnb_wrap hand_footer_gnb_wrap2002">
<div class="header">
  <h2>샵</h2>
  <ul class="ui_tab red_border_tab active">
    <li class=""><a href="#tab_01" id="navTab01">브랜드</a></li>
    <li class="on"><a href="#tab_02" id="navTab02">카테고리</a></li>

    <li class="fcs" style="transform: translateX(124.5px)"></li>
  </ul>

  <a href="#" class="pre"><i>이전</i>스마트 필터링</a>
</div>
<div class="container">
  <div class="content">
    <div class="shop_cont">
      <div class="tab_cont">
        <!-- 브랜드 -->
        <script type="text/javascript">
          $(document).ready(function () {
            //scrollFix200217_3();//탑메뉴 스크롤 이벤트
            //scrollEvent2002_lnb();//탐메뉴 클릭 이벤트
            lnbBrandTab(); // 브랜드 탭메뉴 클릭
            if (
              $('.brd_shop_cate_wrap2002_single').find('.like.on')
                .length > 0
            ) {
              $('.my_heart_flag2002').show();
            } else {
              $('.flag_fixed_wrap2002').css('visibility', 'hidden');
            }
            //$(".brd_shop_cate_wrap2002_single > ul:last").addClass("last_ul2002");

            var ua = navigator.userAgent.toLowerCase();
            if (
              ua.indexOf('iphone') > -1 ||
              ua.indexOf('ipad') > -1 ||
              ua.indexOf('ipod') > -1
            ) {
              $('.hand_footer_gnb_wrap').css(
                'height',
                $('.hand_footer_gnb_wrap').height() + 3
              );
            }
            //$('.hand_footer_gnb_wrap2002 .shop_cont .shop_list_brand.last_ul2002').css('height', $(window).height() - 157);
          });
          function scrollFix200217_3() {
            $('.hand_footer_gnb_wrap2002 .container').scroll(
              function () {
                var y = $(
                  '.hand_footer_gnb_wrap2002 .container'
                ).scrollTop();
                var $fixedLayer = $('.brd_navigator_bar2002_wrap');
                var naviH = $fixedLayer.height();
                var $append_cnt2 = 0;
                if (y >= 0) {
                  if (
                    $append_cnt2 == 0 &&
                    $fixedLayer.find('.fcs2').length == 0
                  ) {
                    $fixedLayer
                      .find('ul')
                      .append('<li class="fcs2"></li>');
                    $append_cnt2 = 1;
                  }
                  $fixedLayer.find('.default_fcs2').hide();
                  var chLength =
                    $fixedLayer.find('.scr_btn200217').length;
                  var i = 1;
                  var brd_index = 0;

                  if ($('#brandCountryCd').val() == 'ko') {
                    if (
                      163 >= $('#brd_cate_' + i).offset().top &&
                      163 < $('#brd_cate_' + (i + 1)).offset().top
                    ) {
                      brd_index = i - 1;
                      translateByIndex(brd_index, $fixedLayer);
                    } else if (
                      163 >= $('#brd_cate_' + (i + 1)).offset().top &&
                      163 < $('#brd_cate_' + (i + 2)).offset().top
                    ) {
                      brd_index = i;
                      translateByIndex(brd_index, $fixedLayer);
                    } else if (
                      163 >= $('#brd_cate_' + (i + 2)).offset().top &&
                      163 < $('#brd_cate_' + (i + 3)).offset().top
                    ) {
                      brd_index = i + 1;
                      translateByIndex(brd_index, $fixedLayer);
                    } else if (
                      163 >= $('#brd_cate_' + (i + 3)).offset().top
                    ) {
                      brd_index = i + 2;
                      translateByIndex(brd_index, $fixedLayer);
                    }
                  } else {
                    if (
                      163 >= $('#brd_cate_' + i).offset().top &&
                      163 < $('#brd_cate_' + (i + 1)).offset().top
                    ) {
                      brd_index = i - 1;
                      translateByIndex(brd_index, $fixedLayer);
                    } else if (
                      163 >= $('#brd_cate_' + (i + 1)).offset().top &&
                      163 < $('#brd_cate_' + (i + 2)).offset().top
                    ) {
                      brd_index = i;
                      translateByIndex(brd_index, $fixedLayer);
                    } else if (
                      163 >= $('#brd_cate_' + (i + 2)).offset().top
                    ) {
                      brd_index = i + 1;
                      translateByIndex(brd_index, $fixedLayer);
                    }
                  }
                }
              }
            );
          }
          function scrollEvent2002_lnb() {
            var $append_cnt2 = 0;
            $('.scr_btn200217 a').on('click', function (event) {
              var $fixedLayer = $('.brd_navigator_bar2002_wrap');
              if (
                $append_cnt2 == 0 &&
                $fixedLayer.find('.fcs2').length == 0
              ) {
                $fixedLayer.find('ul').append('<li class="fcs2"></li>');
                $append_cnt2 = 1;
              }
              event.preventDefault();
              var $list1_H = $('#brd_cate_1').outerHeight() + 12,
                $list2_H = $('#brd_cate_2').outerHeight() + 12,
                $list3_H = $('#brd_cate_3').outerHeight() + 12,
                $list4_H = $('#brd_cate_4').outerHeight() + 12;
              var _total_height = 0;
              if (this.hash == '#brd_cate_1') {
                _total_height = 0;
                scrollTopAnimate(_total_height);
              } else if (this.hash == '#brd_cate_2') {
                _total_height = $list1_H;
                scrollTopAnimate(_total_height);
              } else if (this.hash == '#brd_cate_3') {
                _total_height = $list1_H + $list2_H;
                scrollTopAnimate(_total_height);
              } else if (
                this.hash == '#brd_cate_4' &&
                $('#brandCountryCd').val() == 'ko'
              ) {
                _total_height = $list1_H + $list2_H + $list3_H;
                scrollTopAnimate(_total_height);
              }
            });
          }
          function scrollTopAnimate(_total_height) {
            $('.hand_footer_gnb_wrap2002 .container').animate(
              {
                scrollTop: _total_height,
              },
              800,
              'swing'
            );
          }
          function scrollTopAnimate_s0(_total_height) {
            $('.hand_footer_gnb_wrap2002 .container').animate(
              {
                scrollTop: _total_height,
              },
              0,
              'swing'
            );
          }
          function translateByIndex(brd_index, $fixedLayer) {
            var _fixedLayer = $fixedLayer;
            _fixedLayer
              .find('li')
              .eq(brd_index)
              .siblings('li')
              .removeClass('on');
            _fixedLayer.find('li').eq(brd_index).addClass('on');
            _fixedLayer.find('.fcs2').css({
              transform:
                'translateX(' +
                _fixedLayer.find('li').eq(brd_index).position().left +
                'px)',
            });
          }

          var navParentBrandCode = '';
          var navBrandCode = '';
          var navBrandName = '';
          var navSortIndex = '';

          function applyNavBrand(id, tabType) {
            // tabType : single, all
            var valueSplitArray = $('#' + id)
              .val()
              .split('#');

            $('#' + id + '_like').removeClass('on');
            var lc = new layerConfirm(
              '로그인 후 당신만의 브랜드 즐겨찾기를 <br /> 완성하세요.',
              '',
              ''
            );
            lc.cancleAction = function () {
              //취소 호출 펑션
              $('#' + id + '_like').removeClass('on');
              return;
            };

            lc.confirmAction = function () {
              //확인 호출 펑션
              location.href = '/ko/member/login';
            };
            $('#' + id + '_like').removeClass('on');
          }

          function replaceNavBrandSplitStr(
            str1,
            str2,
            str3,
            str4,
            str5
          ) {
            var replaceStr2 = '';
            var replaceStr3 = '';
            var replaceStr4 = '';
            var replaceStr5 = '';
            var replaceStrArr2 = str2.split(',');
            var replaceStrArr3 = str3.split(',');
            var replaceStrArr4 = str4.split(',');
            var replaceStrArr5 = str5.split(',');
            replaceStrArr2.reverse();
            replaceStrArr3.reverse();
            replaceStrArr4.reverse();
            replaceStrArr5.reverse();

            for (var i = 0; i < replaceStrArr2.length; i++) {
              var checkStr =
                replaceStrArr2[i] + '_' + replaceStrArr3[i];
              //var checkStr = replaceStrArr2[i]+"_"+replaceStrArr3[i]+"_"+replaceStrArr4[i];
              //var checkStr = replaceStrArr3[i];
              if (checkStr != str1) {
                if (replaceStr2 == '') {
                  replaceStr2 = replaceStrArr2[i];
                  replaceStr3 = replaceStrArr3[i];
                  replaceStr4 = replaceStrArr4[i];
                } else {
                  replaceStr2 = replaceStrArr2[i] + ',' + replaceStr2;
                  replaceStr3 = replaceStrArr3[i] + ',' + replaceStr3;
                  replaceStr4 = replaceStrArr4[i] + ',' + replaceStr4;
                }
              }

              if (i < replaceStrArr2.length - 1) {
                if (replaceStr5 == '') {
                  replaceStr5 = replaceStrArr5[i];
                } else {
                  replaceStr5 = replaceStrArr5[i] + ',' + replaceStr5;
                }
              }
            }
            navParentBrandCode = replaceStr2;
            navBrandCode = replaceStr3;
            navBrandName = replaceStr4;
            navSortIndex = replaceStr5;
          }

          function gaLike(brandName) {
            GA_Event('공통_브랜드', '좋아요', brandName);
          }

          function gaNotLike(brandName, gubun) {
            var v_action = '좋아요 취소';
            if (gubun != 'heart') {
              v_action = '하단 좋아요 취소';
            }
            GA_Event('공통_브랜드', v_action, brandName);
          }

          //브랜드 탭메뉴 클릭
          function lnbBrandTab() {
            $('.js-brand-tab-btn-2012 a').on('click', function () {
              scrollTopAnimate_s0(0);
              var $el = $(this);
              var $el_parent = $el.closest('li');
              var tab_id = $el.attr('id');
              var $tab_cont = $(tab_id);

              if (tab_id != '#brd_cate_0') {
                $('#brd_cate_0').hide();
              } else {
                $("[id^='brd_cate_']").hide();
              }

              $el_parent.siblings('li').removeClass('on');
              $tab_cont.siblings('ul').hide();
              $el_parent.addClass('on');
              $tab_cont.show();
            });
          }
        </script>
        <div class="cont" id="tab_01">
          <div class="brd_navigator_bar2012_wrap">
            <div class="brd_navigator_bar2012">
              <ul class="ui_tab2_202012">
                <li class="js-brand-tab-btn-2012">
                  <a
                    href="#"
                    id="#brd_cate_0"
                    onclick="GA_Event('공통_브랜드', '브랜드 탭', '전체');">
                    전체</a
                  >
                </li>
                <li class="js-brand-tab-btn-2012">
                  <a
                    href="#"
                    id="#brd_cate_1"
                    onclick="GA_Event('공통_브랜드', '브랜드 탭', '여성');">
                    여성</a
                  >
                </li>
                <li class="js-brand-tab-btn-2012 on">
                  <a
                    href="#"
                    id="#brd_cate_2"
                    onclick="GA_Event('공통_브랜드', '브랜드 탭', '남성');">
                    남성</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="brd_shop_cate_wrap2002">
            <input type="hidden" value="ko" id="brandCountryCd" />
            <input type="hidden" value="" id="whereLikeCancel" />

            <ul
              class="shop_list_brand one_depth"
              id="brd_cate_0"
              style="display: none">
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'TIME');">
                    <span class="logo">TIME</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR01_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR01', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br01/br01"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br01');GA_Event('공통_브랜드', '2DEPTH', 'TIME_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br01"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br01"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'TIME HOMME');">
                    <span class="logo">TIME HOMME</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ME_BR06_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR06', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br06/br06"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br06');GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/me09/br06"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me04/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                수트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br06"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'SYSTEM');">
                    <span class="logo">SYSTEM</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR03_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR03', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br03/br03"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br03');GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br03"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br03"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'SYSTEM HOMME');">
                    <span class="logo">SYSTEM HOMME</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ME_BR07_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR07', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br07/br07"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br07');GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/me09/br07"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me04/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                수트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br07"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'MINE');">
                    <span class="logo">MINE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR02_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR02', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br02/br02"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br02');GA_Event('공통_브랜드', '2DEPTH', 'MINE_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br02"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_뷰티');">
                            뷰티</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/be02/br02"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '메이크업');">
                                메이크업</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'the CASHMERE');">
                    <span class="logo">the CASHMERE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR08_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR08', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br08/br08"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br08');GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_룩북');"
                            >룩북*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_뷰티');">
                            뷰티</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/be01/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스킨케어');">
                                스킨케어</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/be02/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '메이크업');">
                                메이크업</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/be03/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '바디/헤어케어');">
                                바디/헤어케어</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/be04/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '향수');">
                                향수</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls02/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                배스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls03/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                키친</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls04/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                데스크</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls06/br08"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                키즈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN COLLECTION');">
                    <span class="logo">LANVIN COLLECTION</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR19_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR19', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br19/br19"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br19');GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_룩북');"
                            >룩북*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br19"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN BLANC');">
                    <span class="logo lanvin-blanc"
                      >LANVIN BLANC<img
                        class="icon-new-m"
                        src="http://cdn.thehandsome.com/_ui/handsomemobile/images/common_sub/icon_new_m.png"
                        alt="newIcon" />
                    </span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR63_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR63', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br63/br63"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br63');GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_룩북');"
                            >룩북*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="/ko/c/gf01/br63"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_여성웨어');">
                            여성웨어</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/gf02/br63"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_남성웨어');">
                            남성웨어</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/gf03/br63"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_ACC');">
                            ACC</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'CLUB MONACO');">
                    <span class="logo">CLUB MONACO</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR44_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR44', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br44/br44"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br44');GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/me09/br44"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_SPECIAL SHOP*');">
                            SPECIAL SHOP*(M)
                          </a>
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me04/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                수트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br44"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'SJSJ');">
                    <span class="logo">SJSJ</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR04_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR04', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br04/br04"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br04');GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br04"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br04"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'LÄTT');">
                    <span class="logo">LÄTT</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR31_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR31', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br31/br31"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br31');GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br31"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br31"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'OBZEE');">
                    <span class="logo">OBZEE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR43_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR43', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br43/br43"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br43');GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br43"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br43"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'O&amp;#039;2nd');">
                    <span class="logo">O'2nd</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR45_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR45', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br45/br45"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br45');GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_룩북');"
                            >룩북*</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br45"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br45"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'TOM GREYHOUND');">
                    <span class="logo">TOM GREYHOUND</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR15_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR15', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br15/br15"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_브랜드');"
                            tab="BR15"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br15"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_SPECIAL SHOP*');">
                            SPECIAL SHOP*(W)
                          </a>
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_뷰티');">
                            뷰티</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/be03/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '바디/헤어케어');">
                                바디/헤어케어</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'TOM GREYHOUND_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls02/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                배스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls03/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                키친</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls04/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                데스크</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls05/br15"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '펫');">
                                펫</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'FOURM THE STORE');">
                    <span class="logo">FOURM THE STORE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR35_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR35', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br35/br35"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_브랜드');"
                            tab="BR35"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/we09/br35"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_SPECIAL SHOP*');">
                            SPECIAL SHOP*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM THE STORE_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls02/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                배스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls03/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                키친</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls06/br35"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                키즈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'FOURM STUDIO');">
                    <span class="logo">FOURM STUDIO</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR30_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR30', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br30/br30"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_브랜드');"
                            tab="BR30"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_뷰티');">
                            뷰티</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/be03/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '바디/헤어케어');">
                                바디/헤어케어</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/be04/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '향수');">
                                향수</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM STUDIO_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls02/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                배스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls03/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                키친</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls04/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                데스크</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls06/br30"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                키즈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'FOURM MEN&amp;#039;S LOUNGE');">
                    <span class="logo">FOURM MEN'S LOUNGE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR32_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR32', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br32/br32"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM MEN&amp;#039;S LOUNGE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM MEN&amp;#039;S LOUNGE_브랜드');"
                            tab="BR32"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM MEN&amp;#039;S LOUNGE_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM MEN&amp;#039;S LOUNGE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'FOURM MEN&amp;#039;S LOUNGE_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls03/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                키친</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls04/br32"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                데스크</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'MUE');">
                    <span class="logo">MUE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR16_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR16', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br16/br16"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_브랜드');"
                            tab="BR16"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'MUE_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls04/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                데스크</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls06/br16"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                키즈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'H : SCENE');">
                    <span class="logo">H : SCENE</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR47_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR47', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br47/br47"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'H : SCENE_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'H : SCENE_브랜드');"
                            tab="BR47"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'H : SCENE_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'H : SCENE_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br47"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'BALLY');">
                    <span class="logo">BALLY</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_OS_BR21_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_OS_BR21', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br21/br21"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'BALLY_전체보기');"
                            >전체보기</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'BALLY_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'BALLY_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br21"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN PARIS');">
                    <span class="logo">LANVIN PARIS</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_OS_BR20_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_OS_BR20', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br20/br20"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN PARIS_전체보기');"
                            >전체보기</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN PARIS_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN PARIS_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br20"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', '3.1 Phillip Lim');">
                    <span class="logo">3.1 Phillip Lim</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_OS_BR41_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_OS_BR41', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br41/br41"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', '3.1 Phillip Lim_전체보기');"
                            >전체보기</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', '3.1 Phillip Lim_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', '3.1 Phillip Lim_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br41"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'ROCHAS');">
                    <span class="logo">ROCHAS</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_OS_BR37_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_OS_BR37', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br37/br37"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'ROCHAS_전체보기');"
                            >전체보기</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'ROCHAS_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'ROCHAS_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br37"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'oera');">
                    <span class="logo oera">oera</span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_WE_BR61_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR61', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br61/br61"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_전체보기');"
                            >전체보기</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="/ko/c/be01/br61"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_스킨케어');">
                            스킨케어</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/be02/br61"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_메이크업');">
                            메이크업</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="/ko/c/be03/br61"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_바디/헤어케어');">
                            바디/헤어케어</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'Liquides Perfume Bar');">
                    <span class="logo liquide"
                      >Liquides Perfume Bar</span
                    >
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_ED_BR62_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ED_BR62', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br62/br62"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'Liquides Perfume Bar_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <!-- 													</a> -->
                          <a
                            href=".hs_brand_category_pop2"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'Liquides Perfume Bar_브랜드');"
                            tab="BR62"
                            id="categoryPopup"
                            class="link btn_popup_trigger"
                            >브랜드</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'Liquides Perfume Bar_뷰티');">
                            뷰티</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/be04/br62"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '향수');">
                                향수</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'Liquides Perfume Bar_라이프스타일');">
                            라이프스타일</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/ls01/br62"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                홈</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="javascript:noLink();"
                    class="one_link"
                    onclick="GA_Event('공통_브랜드', '1DEPTH', 'OUR LEGACY');">
                    <span class="logo ourlegacy"
                      >OUR LEGACY<img
                        class="icon-new-m"
                        src="http://cdn.thehandsome.com/_ui/handsomemobile/images/common_sub/icon_new_m.png"
                        alt="newIcon" />
                    </span>
                  </a>
                  <button
                    type="button"
                    id="gnb_br_NEW_NORMAL_BRANDS_OS_BR64_like_0"
                    class="like"
                    onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_OS_BR64', 'all');">
                    찜하기</button
                  ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                </div>
                <div class="two_depth" style="">
                  <div class="two-depth-arrow">
                    <div class="two_depth_inner">
                      <ul class="depth_two depth_two_01">
                        <li class="two_lists">
                          <a
                            href="/ko/c/br64/br64"
                            class="two_link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OUR LEGACY_전체보기');"
                            >전체보기</a
                          >
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:void(0);"
                            class="two_link"
                            onclick="moveBrandLookBook('br64');GA_Event('공통_브랜드', '2DEPTH', 'OUR LEGACY_룩북');"
                            >룩북*</a
                          >
                        </li>
                      </ul>
                      <ul class="depth_two depth_two_02">
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OUR LEGACY_여성');">
                            여성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/we05/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we10/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we01/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we04/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                드레스</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we02/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/we03/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                스커트</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OUR LEGACY_남성');">
                            남성</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/me03/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                아우터</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me10/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                니트</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me01/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                탑</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/me02/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                팬츠</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="two_lists">
                          <a
                            href="javascript:noLink();"
                            class="two_link js-brand-link"
                            onclick="GA_Event('공통_브랜드', '2DEPTH', 'OUR LEGACY_잡화');">
                            잡화</a
                          >
                          <ul class="three_depth" style="">
                            <li class="three_lists">
                              <a
                                href="/ko/c/as01/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                여성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as02/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                남성슈즈</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as03/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                여성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as04/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                남성백</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as05/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                머플러/스카프</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as06/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                주얼리</a
                              >
                            </li>
                            <li class="three_lists">
                              <a
                                href="/ko/c/as07/br64"
                                class="three_link"
                                onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                기타 ACC</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div class="brd_shop_cate_wrap2002_single">
              <ul
                class="shop_list_brand one_depth"
                id="brd_cate_1"
                style="display: none">
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'TIME');">
                      <span class="logo">TIME</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR01"
                      value="NEW_NORMAL_BRANDS_WE#BR01#TIME#0#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR01_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR01', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br01/br01"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br01');GA_Event('공통_브랜드', '2DEPTH', 'TIME_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br01"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br01"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'MINE');">
                      <span class="logo">MINE</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR02"
                      value="NEW_NORMAL_BRANDS_WE#BR02#MINE#1#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR02_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR02', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br02/br02"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br02');GA_Event('공통_브랜드', '2DEPTH', 'MINE_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br02"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'MINE_뷰티');">
                              뷰티</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be02/br02"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '메이크업');">
                                  메이크업</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN COLLECTION');">
                      <span class="logo">LANVIN COLLECTION</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR19"
                      value="NEW_NORMAL_BRANDS_WE#BR19#LANVIN COLLECTION#2#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR19_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR19', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br19/br19"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br19');GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN COLLECTION_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br19"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN BLANC');">
                      <span class="logo lanvin-blanc"
                        >LANVIN BLANC<img
                          class="icon-new-m"
                          src="http://cdn.thehandsome.com/_ui/handsomemobile/images/common_sub/icon_new_m.png"
                          alt="newIcon" />
                      </span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR63"
                      value="NEW_NORMAL_BRANDS_WE#BR63#LANVIN BLANC#3#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR63_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR63', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br63/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br63');GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf01/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_여성웨어');">
                              여성웨어</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf02/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_남성웨어');">
                              남성웨어</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf03/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_ACC');">
                              ACC</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'SYSTEM');">
                      <span class="logo">SYSTEM</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR03"
                      value="NEW_NORMAL_BRANDS_WE#BR03#SYSTEM#4#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR03_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR03', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br03/br03"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br03');GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br03"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br03"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'SJSJ');">
                      <span class="logo">SJSJ</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR04"
                      value="NEW_NORMAL_BRANDS_WE#BR04#SJSJ#5#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR04_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR04', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br04/br04"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br04');GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br04"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SJSJ_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br04"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'the CASHMERE');">
                      <span class="logo">the CASHMERE</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR08"
                      value="NEW_NORMAL_BRANDS_WE#BR08#the CASHMERE#6#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR08_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR08', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br08/br08"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br08');GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_뷰티');">
                              뷰티</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스킨케어');">
                                  스킨케어</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '메이크업');">
                                  메이크업</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '바디/헤어케어');">
                                  바디/헤어케어</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be04/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '향수');">
                                  향수</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_라이프스타일');">
                              라이프스타일</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                  홈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                  배스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                  키친</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls04/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                  데스크</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls06/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                  키즈</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'LÄTT');">
                      <span class="logo">LÄTT</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR31"
                      value="NEW_NORMAL_BRANDS_WE#BR31#LÄTT#7#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR31_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR31', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br31/br31"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br31');GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br31"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LÄTT_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br31"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'OBZEE');">
                      <span class="logo">OBZEE</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR43"
                      value="NEW_NORMAL_BRANDS_WE#BR43#OBZEE#8#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR43_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR43', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br43/br43"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br43');GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br43"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'OBZEE_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br43"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'O&amp;#039;2nd');">
                      <span class="logo">O'2nd</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR45"
                      value="NEW_NORMAL_BRANDS_WE#BR45#O'2nd#9#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR45_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR45', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br45/br45"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br45');GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/we09/br45"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'O&amp;#039;2nd_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br45"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'CLUB MONACO');">
                      <span class="logo">CLUB MONACO</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR44"
                      value="NEW_NORMAL_BRANDS_WE#BR44#CLUB MONACO#10#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR44_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR44', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br44/br44"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br44');GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_여성');">
                              여성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we05/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we10/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we01/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we04/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '드레스');">
                                  드레스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we02/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/we03/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스커트');">
                                  스커트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as02/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                  남성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as04/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                  남성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'oera');">
                      <span class="logo oera">oera</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR61"
                      value="NEW_NORMAL_BRANDS_WE#BR61#oera#11#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_WE_BR61_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_WE_BR61', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br61/br61"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_전체보기');"
                              >전체보기</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="/ko/c/be01/br61"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_스킨케어');">
                              스킨케어</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/be02/br61"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_메이크업');">
                              메이크업</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/be03/br61"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'oera_바디/헤어케어');">
                              바디/헤어케어</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul
                class="shop_list_brand one_depth"
                id="brd_cate_2"
                style="display: block">
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'LANVIN BLANC');">
                      <span class="logo lanvin-blanc"
                        >LANVIN BLANC<img
                          class="icon-new-m"
                          src="http://cdn.thehandsome.com/_ui/handsomemobile/images/common_sub/icon_new_m.png"
                          alt="newIcon" />
                      </span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR63"
                      value="NEW_NORMAL_BRANDS_ME#BR63#LANVIN BLANC#0#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR63_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR63', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br63/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br63');GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf01/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_여성웨어');">
                              여성웨어</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf02/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_남성웨어');">
                              남성웨어</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/gf03/br63"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'LANVIN BLANC_ACC');">
                              ACC</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'TIME HOMME');">
                      <span class="logo">TIME HOMME</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR06"
                      value="NEW_NORMAL_BRANDS_ME#BR06#TIME HOMME#1#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR06_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR06', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br06/br06"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br06');GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/me09/br06"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_남성');">
                              남성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me03/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me10/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me01/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me02/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me04/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                  수트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as02/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                  남성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as04/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                  남성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'TIME HOMME_라이프스타일');">
                              라이프스타일</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls01/br06"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                  홈</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'SYSTEM HOMME');">
                      <span class="logo">SYSTEM HOMME</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR07"
                      value="NEW_NORMAL_BRANDS_ME#BR07#SYSTEM HOMME#2#false#1" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR07_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR07', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br07/br07"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br07');GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/me09/br07"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_남성');">
                              남성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me03/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me10/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me01/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me02/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me04/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                  수트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'SYSTEM HOMME_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as02/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                  남성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as04/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                  남성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br07"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'the CASHMERE');">
                      <span class="logo">the CASHMERE</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR08"
                      value="NEW_NORMAL_BRANDS_ME#BR08#the CASHMERE#3#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR08_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR08', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br08/br08"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br08');GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_룩북');"
                              >룩북*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_남성');">
                              남성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me10/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성슈즈');">
                                  여성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_뷰티');">
                              뷰티</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '스킨케어');">
                                  스킨케어</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '메이크업');">
                                  메이크업</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '바디/헤어케어');">
                                  바디/헤어케어</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/be04/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '향수');">
                                  향수</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'the CASHMERE_라이프스타일');">
                              라이프스타일</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls01/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '홈');">
                                  홈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls02/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '배스');">
                                  배스</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls03/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '키친');">
                                  키친</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls04/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '데스크');">
                                  데스크</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/ls06/br08"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '키즈');">
                                  키즈</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="one_lists">
                  <div class="one_wrap">
                    <a
                      href="javascript:noLink();"
                      class="one_link"
                      onclick="GA_Event('공통_브랜드', '1DEPTH', 'CLUB MONACO');">
                      <span class="logo">CLUB MONACO</span>
                    </a>
                    <input
                      type="hidden"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR44"
                      value="NEW_NORMAL_BRANDS_ME#BR44#CLUB MONACO#4#false#2" />
                    <button
                      type="button"
                      id="gnb_br_NEW_NORMAL_BRANDS_ME_BR44_like"
                      class="like"
                      onclick="applyNavBrand('gnb_br_NEW_NORMAL_BRANDS_ME_BR44', 'single');">
                      찜하기</button
                    ><!-- 찜한 브랜드에 on 클래스 붙음 -->
                  </div>
                  <div class="two_depth" style="">
                    <div class="two-depth-arrow">
                      <div class="two_depth_inner">
                        <ul class="depth_two depth_two_01">
                          <li class="two_lists">
                            <a
                              href="/ko/c/br44/br44"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_전체보기');"
                              >전체보기</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:void(0);"
                              class="two_link"
                              onclick="moveBrandLookBook('br44');GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_룩북');"
                              >룩북*</a
                            >
                          </li>
                          <li class="two_lists">
                            <a
                              href="/ko/c/me09/br44"
                              class="two_link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_SPECIAL SHOP*');">
                              SPECIAL SHOP*</a
                            >
                          </li>
                        </ul>
                        <ul class="depth_two depth_two_02">
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_남성');">
                              남성</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me03/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '아우터');">
                                  아우터</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me10/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '니트');">
                                  니트</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me01/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '탑');">
                                  탑</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me02/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '팬츠');">
                                  팬츠</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/me04/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '수트');">
                                  수트</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li class="two_lists">
                            <a
                              href="javascript:noLink();"
                              class="two_link js-brand-link"
                              onclick="GA_Event('공통_브랜드', '2DEPTH', 'CLUB MONACO_잡화');">
                              잡화</a
                            >
                            <ul class="three_depth" style="">
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as02/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성슈즈');">
                                  남성슈즈</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as03/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '여성백');">
                                  여성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as04/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '남성백');">
                                  남성백</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as05/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '머플러/스카프');">
                                  머플러/스카프</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as06/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '주얼리');">
                                  주얼리</a
                                >
                              </li>
                              <li class="three_lists">
                                <a
                                  href="/ko/c/as07/br44"
                                  class="three_link"
                                  onclick="GA_Event('공통_브랜드', '3DEPTH', '기타 ACC');">
                                  기타 ACC</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div
                class="flag_fixed_wrap2002"
                style="visibility: hidden">
                <div
                  id="fadeEff"
                  class="flag_wrap scroll_flag swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android swiper-container-wp8-horizontal">
                  <ul
                    class="swiper-wrapper"
                    id="setBrandList"
                    style="transform: translate3d(0px, 0px, 0px)">
                    <!-- 찜한 브랜드가 한 개라도 있으면 ul 태그에 active 클래스 붙임 -->
                  </ul>
                  <div class="my_heart_flag2002">
                    <div>
                      MY<span class="ico_heart200214">heart</span>
                      <span class="white_action200219"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--// 브랜드 -->
        <!-- 카테고리 -->
        <script type="text/javascript">
          var categoryCode = '';
          var categoryName = '';
          var flag = '';
          var processYn = false;

          var lnbLinkUrl = '';
          var lnbImageUrl = '';
          var lnbMenuName = '';
          $(document).ready(function () {
            shopCateListHeightSet(); //카테고리 텝 컨텐츠 높이 설정
            setLnbMenu(); //이미지메뉴 셋팅
          });
          function setLnbMenu() {
            var html = '';
            var liveCommerceBannerHtml = '';

            html += '<li>';
            html +=
              "<a href=\"/magazine/lookbook\" onclick=\"GA_Event('공통_카테고리', '컨텐츠', '룩북');\">";
            html += '<div class="maga_wrap">';
            html += '<div class="circle_img">';
            html +=
              '<img src="http://cdn.thehandsome.com/mobile/lnb/image/20220421_37113375502350198_ko.jpg" alt="circle img">';
            html += '</div>';
            html += '<p class="maga_txt">룩북</p>';
            html += '</div>';
            html += '</a>';
            html += '</li>';

            html += '<li>';
            html +=
              "<a href=\"/magazine/exhibitions\" onclick=\"GA_Event('공통_카테고리', '컨텐츠', '기획전');\">";
            html += '<div class="maga_wrap">';
            html += '<div class="circle_img">';
            html +=
              '<img src="http://cdn.thehandsome.com/mobile/lnb/image/20220421_37113357562565650_ko.jpg" alt="circle img">';
            html += '</div>';
            html += '<p class="maga_txt">기획전</p>';
            html += '</div>';
            html += '</a>';
            html += '</li>';

            html += '<li>';
            html +=
              "<a href=\"/magazine/events\" onclick=\"GA_Event('공통_카테고리', '컨텐츠', '이벤트');\">";
            html += '<div class="maga_wrap">';
            html += '<div class="circle_img">';
            html +=
              '<img src="http://cdn.thehandsome.com/mobile/lnb/image/20220421_37113881020441632_ko.jpg" alt="circle img">';
            html += '</div>';
            html += '<p class="maga_txt">이벤트</p>';
            html += '</div>';
            html += '</a>';
            html += '</li>';

            html += '<li>';
            html +=
              "<a href=\"/magazine/submain\" onclick=\"GA_Event('공통_카테고리', '컨텐츠', 'THE 매거진');\">";
            html += '<div class="maga_wrap">';
            html += '<div class="circle_img">';
            html +=
              '<img src="http://cdn.thehandsome.com/mobile/lnb/image/20220421_37113368536417995_ko.jpg" alt="circle img">';
            html += '</div>';
            html += '<p class="maga_txt">THE 매거진</p>';
            html += '</div>';
            html += '</a>';
            html += '</li>';

            $(
              '.lnb_themaga_sns_wrap2004 .lnb_themagazine_2004 ul'
            ).append(html);
            if ('방송 전/후' != '') {
              liveCommerceBannerHtml +=
                '<div class="live_shopping_banner2008">';
              liveCommerceBannerHtml +=
                "<a href=\"/live/liveTV\" onclick=\"GA_Event('공통_카테고리', '컨텐츠', '핸썸TV');\">";
              liveCommerceBannerHtml +=
                '<img src="http://cdn.thehandsome.com/_ui/handsomemobile/images/event/banner_handsometv_vod.png" alt="circle img">';
              liveCommerceBannerHtml += '</a>';
              liveCommerceBannerHtml += '</div>';

              $(
                '.lnb_themaga_sns_wrap2004 .lnb_themagazine_2004'
              ).after(liveCommerceBannerHtml);
            }
          }
          function applyCategory(id) {
            if (!processYn) {
              var valueSplitArray = $('#' + id)
                .val()
                .split('|');

              $('#' + id + '_like').removeClass('on');
              var lc = new layerConfirm(
                '로그인 후 당신만의 선호 카테고리를 <br /> 선택하세요.',
                '',
                ''
              );
              lc.cancleAction = function () {
                //취소 호출 펑션
                $('#' + id + '_like').removeClass('on');
                if ($('#setUserCategory li').length == 0) {
                  $(quickSCaterogyTagSelector).removeClass('active');
                }
                return;
              };

              lc.confirmAction = function () {
                //확인 호출 펑션
                location.href = '/ko/member/login';
              };

              $('#confirmCloseDiv').click(function () {
                lc.cancleAction();
              });

              $('#' + id + '_like').removeClass('on');
            }
          }

          function replaceSplitStr(str1, str2) {
            var replaceStr = '';
            var replaceStrArr = str1.split('|');
            var replaceStrCheck = 'N';
            for (var i = 0; i < replaceStrArr.length; i++) {
              if (replaceStrArr[i] == str2 && replaceStrCheck == 'N') {
                replaceStrCheck = 'Y';
              } else {
                if (replaceStr == '') {
                  replaceStr = replaceStrArr[i];
                } else {
                  replaceStr += '|' + replaceStrArr[i];
                }
              }
            }
            return replaceStr;
          }

          // 재정렬
          function replaceSplitStr2(str, idx) {
            var replaceStr = '';
            var replaceStrArr = str.split('|');
            for (var i = 0; i < replaceStrArr.length; i++) {
              if (i != idx) {
                if (replaceStr == '') {
                  replaceStr = replaceStrArr[i];
                } else {
                  replaceStr += '|' + replaceStrArr[i];
                }
              }
            }
            return replaceStr;
          }

          function replaceSplitIdx(str1, str2) {
            var replaceIdx = '';
            var replaceStrArr = str1.split('|');
            for (var i = 0; i < replaceStrArr.length; i++) {
              if (replaceStrArr[i] == str2) {
                replaceIdx = i;
                break;
              }
            }
            return replaceIdx;
          }

          function removeCategory(id) {
            if (!processYn) {
              processYn = true;
              var valueSplitArray = $('#' + id)
                .val()
                .split('|');
              var replaceIdx = '';
              replaceIdx = replaceSplitIdx(
                categoryCode,
                valueSplitArray[0]
              );
              categoryCode = replaceSplitStr(
                categoryCode,
                valueSplitArray[0]
              );
              //             categoryName = replaceSplitStr(categoryName,valueSplitArray[1]);
              //             flag = replaceSplitStr(flag,valueSplitArray[2]);
              categoryName = replaceSplitStr2(categoryName, replaceIdx);
              flag = replaceSplitStr2(flag, replaceIdx);
              $.ajax({
                type: 'GET',
                url: '/ko/intro/setUserCategory',
                data: { categoryName: '', categoryCode: '', flag: '' },
                success: function (data) {
                  $('#' + id).val(
                    valueSplitArray[0] +
                      '|' +
                      valueSplitArray[1] +
                      '|' +
                      valueSplitArray[2] +
                      '|false'
                  );
                  var setUserCategoryHtml = '';
                  var categoryCodeArr = categoryCode.split('|');
                  var categoryNameArr = categoryName.split('|');
                  var flagArr = flag.split('|');
                  for (
                    var i = categoryCodeArr.length - 1;
                    i >= 0;
                    i--
                  ) {
                    if (categoryCodeArr[i] != '') {
                      setUserCategoryHtml +=
                        '<li class="flag swiper-slide ' +
                        flagArr[i] +
                        ' active" style="margin-right: 6px;"> \n';
                      setUserCategoryHtml +=
                        '    <a href="/ko/c/' +
                        categoryCodeArr[i] +
                        '" class="name">' +
                        categoryNameArr[i] +
                        '</a> \n';
                      setUserCategoryHtml +=
                        '    <a href="javascript:noLink();" class="delete" onclick="removeCategory(\'gnb_' +
                        categoryCodeArr[i] +
                        '\');">삭제</a> \n';
                      setUserCategoryHtml += '</li> \n';
                    }
                  }

                  $('#setUserCategory').html(setUserCategoryHtml);
                  $('#' + id + '_like').removeClass('on');
                  if ($('#setUserCategory li').length == 0) {
                    $(quickSCaterogyTagSelector).removeClass('active');
                    $('.lnb_themaga_sns_wrap2004').css(
                      'padding-bottom',
                      '0'
                    );
                    var $shopCateList = $(
                      '.hand_footer_gnb_wrap2002 .cate_shop_cate_wrap2004 .shop_list_category'
                    );
                    var shopCateListH =
                      $(window).height() -
                      (107 +
                        $('.lnb_themaga_sns_wrap2004').outerHeight());
                    $shopCateList.css(
                      'min-height',
                      shopCateListH + 'px'
                    );
                  }

                  processYn = false;
                  if (categoryCode != '') {
                    // 남은 선호카테고리가 있을 때 재등록
                    setCategory(id, 'remove');
                  }
                },
                error: function (e) {
                  console.log('error', e);
                },
              });
            }
          }

          function setCategory(id, gubun) {
            if (!processYn) {
              processYn = true;
              var valueSplitArray = $('#' + id)
                .val()
                .split('|');
              $.ajax({
                type: 'GET',
                url: '/ko/intro/setUserCategory',
                data: {
                  categoryName: categoryName,
                  categoryCode: categoryCode,
                  flag: flag,
                },
                success: function (data) {
                  if (gubun == 'set') {
                    $('#' + id).val(
                      valueSplitArray[0] +
                        '|' +
                        valueSplitArray[1] +
                        '|' +
                        valueSplitArray[2] +
                        '|true'
                    );
                  }
                  var setUserCategoryHtml = '';
                  var categoryCodeArr = categoryCode.split('|');
                  var categoryNameArr = categoryName.split('|');
                  var flagArr = flag.split('|');
                  for (
                    var i = categoryCodeArr.length - 1;
                    i >= 0;
                    i--
                  ) {
                    setUserCategoryHtml +=
                      '<li class="flag swiper-slide ' +
                      flagArr[i] +
                      ' active" style="margin-right: 6px;"> \n';
                    setUserCategoryHtml +=
                      '	<a href="/ko/c/' +
                      categoryCodeArr[i] +
                      "\" class=\"name\" onclick=\"GA_Event('공통_카테고리', '좋아요한_카테고리', '" +
                      escape(categoryNameArr[i].replace('&44;', ',')) +
                      '\');" >' +
                      categoryNameArr[i] +
                      '</a> \n';
                    setUserCategoryHtml +=
                      '	<a href="javascript:noLink();" class="delete" onclick="removeCategory(\'gnb_' +
                      categoryCodeArr[i] +
                      '\');">삭제</a> \n';
                    setUserCategoryHtml += '</li> \n';
                  }

                  $('#setUserCategory').html(setUserCategoryHtml);
                  quickSCaterogyTagSwiper.update();
                  processYn = false;
                },
                error: function (e) {
                  console.log('error', e);
                },
              });
            }
          }

          function shopCateListHeightSet() {
            var winH = $(window).height();
            /* bottomConH = $('.lnb_themaga_sns_wrap2004').outerHeight(); */
            if ($('#setUserCategory').find('.flag').length >= 1) {
              // 즐겨찾기한 카테고리가 있을 때
              $('.lnb_themaga_sns_wrap2004').css(
                'padding-bottom',
                '56px'
              );
              var $shopCateList = $(
                '.hand_footer_gnb_wrap2002 .cate_shop_cate_wrap2004 .shop_list_category'
              );
              var shopCateListH =
                $(window).height() -
                (107 + $('.lnb_themaga_sns_wrap2004').outerHeight());
              $shopCateList.css('min-height', shopCateListH + 'px');
            } else {
              $('.lnb_themaga_sns_wrap2004').css('padding-bottom', '0');
              var $shopCateList = $(
                '.hand_footer_gnb_wrap2002 .cate_shop_cate_wrap2004 .shop_list_category'
              );
              var shopCateListH =
                $(window).height() -
                (107 + $('.lnb_themaga_sns_wrap2004').outerHeight());
              $shopCateList.css('min-height', shopCateListH + 'px');
            }
            var $shopCateList = $(
              '.hand_footer_gnb_wrap2002 .cate_shop_cate_wrap2004 .shop_list_category'
            );
            $shopCateList.css('min-height', shopCateListH + 'px');
          }
        </script>
        <div class="cont on" id="tab_02">
          <div class="cate_shop_cate_wrap2004">
            <ul
              class="shop_list_category ctgr one_depth"
              style="min-height: 633px">
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_we"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '여성');">
                    <span class="category_tit">여성</span>
                  </a>
                </div>
                <ul class="two_depth" style="display: none">
                  <li class="two_lists">
                    <a
                      href="/ko/c/we"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_아우터');"
                      >아우터</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we05"
                        value="we05|아우터>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we05_like"
                          onclick="applyCategory('gnb_we05');GA_Event('공통_카테고리', '좋아요', '여성_아우터_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we05"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we051"
                        value="we051|아우터>재킷|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we051_like"
                          onclick="applyCategory('gnb_we051');GA_Event('공통_카테고리', '좋아요', '여성_아우터_재킷');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we051"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_재킷');"
                          >재킷</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we052"
                        value="we052|아우터>점퍼|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we052_like"
                          onclick="applyCategory('gnb_we052');GA_Event('공통_카테고리', '좋아요', '여성_아우터_점퍼');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we052"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_점퍼');"
                          >점퍼</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we015"
                        value="we015|아우터>가디건/베스트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we015_like"
                          onclick="applyCategory('gnb_we015');GA_Event('공통_카테고리', '좋아요', '여성_아우터_가디건/베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we015"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_가디건/베스트');"
                          >가디건/베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we053"
                        value="we053|아우터>트렌치 코트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we053_like"
                          onclick="applyCategory('gnb_we053');GA_Event('공통_카테고리', '좋아요', '여성_아우터_트렌치 코트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we053"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_트렌치 코트');"
                          >트렌치 코트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we054"
                        value="we054|아우터>코트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we054_like"
                          onclick="applyCategory('gnb_we054');GA_Event('공통_카테고리', '좋아요', '여성_아우터_코트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we054"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_코트');"
                          >코트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we055"
                        value="we055|아우터>다운/패딩|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we055_like"
                          onclick="applyCategory('gnb_we055');GA_Event('공통_카테고리', '좋아요', '여성_아우터_다운/패딩');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we055"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_아우터_다운/패딩');"
                          >다운/패딩</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_니트');"
                      >니트</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we10"
                        value="we10|니트>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we10_like"
                          onclick="applyCategory('gnb_we10');GA_Event('공통_카테고리', '좋아요', '여성_니트_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we10"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we101"
                        value="we101|니트>탑/스웨터|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we101_like"
                          onclick="applyCategory('gnb_we101');GA_Event('공통_카테고리', '좋아요', '여성_니트_탑/스웨터');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we101"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_탑/스웨터');"
                          >탑/스웨터</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we102"
                        value="we102|니트>점퍼/가디건|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we102_like"
                          onclick="applyCategory('gnb_we102');GA_Event('공통_카테고리', '좋아요', '여성_니트_점퍼/가디건');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we102"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_점퍼/가디건');"
                          >점퍼/가디건</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we103"
                        value="we103|니트>베스트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we103_like"
                          onclick="applyCategory('gnb_we103');GA_Event('공통_카테고리', '좋아요', '여성_니트_베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we103"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_베스트');"
                          >베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we104"
                        value="we104|니트>드레스|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we104_like"
                          onclick="applyCategory('gnb_we104');GA_Event('공통_카테고리', '좋아요', '여성_니트_드레스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we104"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_드레스');"
                          >드레스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we105"
                        value="we105|니트>팬츠|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we105_like"
                          onclick="applyCategory('gnb_we105');GA_Event('공통_카테고리', '좋아요', '여성_니트_팬츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we105"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_팬츠');"
                          >팬츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we106"
                        value="we106|니트>스커트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we106_like"
                          onclick="applyCategory('gnb_we106');GA_Event('공통_카테고리', '좋아요', '여성_니트_스커트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we106"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_니트_스커트');"
                          >스커트</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_탑');"
                      >탑</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we01"
                        value="we01|탑>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we01_like"
                          onclick="applyCategory('gnb_we01');GA_Event('공통_카테고리', '좋아요', '여성_탑_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_탑_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we011"
                        value="we011|탑>티셔츠|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we011_like"
                          onclick="applyCategory('gnb_we011');GA_Event('공통_카테고리', '좋아요', '여성_탑_티셔츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_탑_티셔츠');"
                          >티셔츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we012"
                        value="we012|탑>블라우스|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we012_like"
                          onclick="applyCategory('gnb_we012');GA_Event('공통_카테고리', '좋아요', '여성_탑_블라우스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_탑_블라우스');"
                          >블라우스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we013"
                        value="we013|탑>셔츠|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we013_like"
                          onclick="applyCategory('gnb_we013');GA_Event('공통_카테고리', '좋아요', '여성_탑_셔츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_탑_셔츠');"
                          >셔츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we014"
                        value="we014|탑>니트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we014_like"
                          onclick="applyCategory('gnb_we014');GA_Event('공통_카테고리', '좋아요', '여성_탑_니트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we014"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_탑_니트');"
                          >니트</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_드레스');"
                      >드레스</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we04"
                        value="we04|드레스>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we04_like"
                          onclick="applyCategory('gnb_we04');GA_Event('공통_카테고리', '좋아요', '여성_드레스_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we04"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_드레스_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we041"
                        value="we041|드레스>미니 드레스|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we041_like"
                          onclick="applyCategory('gnb_we041');GA_Event('공통_카테고리', '좋아요', '여성_드레스_미니 드레스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we041"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_드레스_미니 드레스');"
                          >미니 드레스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we042"
                        value="we042|드레스>미디 드레스|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we042_like"
                          onclick="applyCategory('gnb_we042');GA_Event('공통_카테고리', '좋아요', '여성_드레스_미디 드레스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we042"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_드레스_미디 드레스');"
                          >미디 드레스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we043"
                        value="we043|드레스>롱/맥시 드레스|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we043_like"
                          onclick="applyCategory('gnb_we043');GA_Event('공통_카테고리', '좋아요', '여성_드레스_롱/맥시 드레스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we043"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_드레스_롱/맥시 드레스');"
                          >롱/맥시 드레스</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_팬츠');"
                      >팬츠</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we02"
                        value="we02|팬츠>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we02_like"
                          onclick="applyCategory('gnb_we02');GA_Event('공통_카테고리', '좋아요', '여성_팬츠_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_팬츠_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we021"
                        value="we021|팬츠>캐주얼|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we021_like"
                          onclick="applyCategory('gnb_we021');GA_Event('공통_카테고리', '좋아요', '여성_팬츠_캐주얼');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we021"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_팬츠_캐주얼');"
                          >캐주얼</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we022"
                        value="we022|팬츠>포멀|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we022_like"
                          onclick="applyCategory('gnb_we022');GA_Event('공통_카테고리', '좋아요', '여성_팬츠_포멀');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we022"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_팬츠_포멀');"
                          >포멀</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we023"
                        value="we023|팬츠>데님|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we023_like"
                          onclick="applyCategory('gnb_we023');GA_Event('공통_카테고리', '좋아요', '여성_팬츠_데님');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we023"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_팬츠_데님');"
                          >데님</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we024"
                        value="we024|팬츠>쇼츠|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we024_like"
                          onclick="applyCategory('gnb_we024');GA_Event('공통_카테고리', '좋아요', '여성_팬츠_쇼츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we024"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_팬츠_쇼츠');"
                          >쇼츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_스커트');"
                      >스커트</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we03"
                        value="we03|스커트>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we03_like"
                          onclick="applyCategory('gnb_we03');GA_Event('공통_카테고리', '좋아요', '여성_스커트_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_스커트_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we031"
                        value="we031|스커트>미니 스커트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we031_like"
                          onclick="applyCategory('gnb_we031');GA_Event('공통_카테고리', '좋아요', '여성_스커트_미니 스커트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_스커트_미니 스커트');"
                          >미니 스커트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we032"
                        value="we032|스커트>펜슬 스커트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we032_like"
                          onclick="applyCategory('gnb_we032');GA_Event('공통_카테고리', '좋아요', '여성_스커트_펜슬 스커트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_스커트_펜슬 스커트');"
                          >펜슬 스커트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we033"
                        value="we033|스커트>플레어 스커트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we033_like"
                          onclick="applyCategory('gnb_we033');GA_Event('공통_카테고리', '좋아요', '여성_스커트_플레어 스커트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_스커트_플레어 스커트');"
                          >플레어 스커트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we034"
                        value="we034|스커트>롱/맥시 스커트|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we034_like"
                          onclick="applyCategory('gnb_we034');GA_Event('공통_카테고리', '좋아요', '여성_스커트_롱/맥시 스커트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_스커트_롱/맥시 스커트');"
                          >롱/맥시 스커트</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '여성_SPECIAL SHOP*');"
                      >SPECIAL SHOP*</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_we09"
                        value="we09|SPECIAL SHOP*>전체|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09_like"
                          onclick="applyCategory('gnb_we09');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/we09"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we098"
                        value="we098|SPECIAL SHOP*>SYSTEM : PARIS COLLECTION|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we098_like"
                          onclick="applyCategory('gnb_we098');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_SYSTEM : PARIS COLLECTION');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we098"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_SYSTEM : PARIS COLLECTION');"
                          >SYSTEM : PARIS COLLECTION</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we091"
                        value="we091|SPECIAL SHOP*>OBZEE : ICONIC OBZEE|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we091_like"
                          onclick="applyCategory('gnb_we091');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_OBZEE : ICONIC OBZEE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we091"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_OBZEE : ICONIC OBZEE');"
                          >OBZEE : ICONIC OBZEE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09s"
                        value="we09s|SPECIAL SHOP*>SYSTEM : MODULAR COMFORT|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09s_like"
                          onclick="applyCategory('gnb_we09s');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_SYSTEM : MODULAR COMFORT');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09s"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_SYSTEM : MODULAR COMFORT');"
                          >SYSTEM : MODULAR COMFORT</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09f"
                        value="we09f|SPECIAL SHOP*>SYSTEM : 한국타이어 COLLABORATION|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09f_like"
                          onclick="applyCategory('gnb_we09f');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_SYSTEM : 한국타이어 COLLABORATION');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09f"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_SYSTEM : 한국타이어 COLLABORATION');"
                          >SYSTEM : 한국타이어 COLLABORATION</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09h"
                        value="we09h|SPECIAL SHOP*>O'2nd : WE|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09h_like"
                          onclick="applyCategory('gnb_we09h');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_O&amp;#039;2nd : WE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09h"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_O&amp;#039;2nd : WE');"
                          >O'2nd : WE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09n"
                        value="we09n|SPECIAL SHOP*>SJSJ : Wheat Capsule|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09n_like"
                          onclick="applyCategory('gnb_we09n');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_SJSJ : Wheat Capsule');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09n"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_SJSJ : Wheat Capsule');"
                          >SJSJ : Wheat Capsule</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09b"
                        value="we09b|SPECIAL SHOP*>O'2nd : Midnight in Paris|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09b_like"
                          onclick="applyCategory('gnb_we09b');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_O&amp;#039;2nd : Midnight in Paris');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09b"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_O&amp;#039;2nd : Midnight in Paris');"
                          >O'2nd : Midnight in Paris</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09q"
                        value="we09q|SPECIAL SHOP*>LATT : VISIONARY COLLECTION|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09q_like"
                          onclick="applyCategory('gnb_we09q');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_LATT : VISIONARY COLLECTION');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09q"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_LATT : VISIONARY COLLECTION');"
                          >LATT : VISIONARY COLLECTION</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09x"
                        value="we09x|SPECIAL SHOP*>TIME : 22 FALL CAPSULE COLLECTION|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09x_like"
                          onclick="applyCategory('gnb_we09x');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_TIME : 22 FALL CAPSULE COLLECTION');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09x"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_TIME : 22 FALL CAPSULE COLLECTION');"
                          >TIME : 22 FALL CAPSULE COLLECTION</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09j"
                        value="we09j|SPECIAL SHOP*>tomgreyhound: EXCLUSIVE|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09j_like"
                          onclick="applyCategory('gnb_we09j');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_tomgreyhound: EXCLUSIVE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09j"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_tomgreyhound: EXCLUSIVE');"
                          >tomgreyhound: EXCLUSIVE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we095"
                        value="we095|SPECIAL SHOP*>FOURM THE STORE: EXCLUSIVE|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we095_like"
                          onclick="applyCategory('gnb_we095');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_FOURM THE STORE: EXCLUSIVE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we095"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_FOURM THE STORE: EXCLUSIVE');"
                          >FOURM THE STORE: EXCLUSIVE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09r"
                        value="we09r|SPECIAL SHOP*>LATT : THE FIRST|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09r_like"
                          onclick="applyCategory('gnb_we09r');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_LATT : THE FIRST');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09r"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_LATT : THE FIRST');"
                          >LATT : THE FIRST</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_we09i"
                        value="we09i|SPECIAL SHOP*>MINE : CODE MINE S|woman|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_we09i_like"
                          onclick="applyCategory('gnb_we09i');GA_Event('공통_카테고리', '좋아요', '여성_SPECIAL SHOP*_MINE : CODE MINE S');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/we09i"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '여성_SPECIAL SHOP*_MINE : CODE MINE S');"
                          >MINE : CODE MINE S</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="one_lists on">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_me"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '남성');">
                    <span class="category_tit">남성</span>
                  </a>
                </div>
                <ul class="two_depth" style="display: block">
                  <li class="two_lists">
                    <a
                      href="/ko/c/me"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_아우터');"
                      >아우터</a
                    >
                    <ul class="three_depth" style="display: none">
                      <input
                        type="hidden"
                        id="gnb_me03"
                        value="me03|아우터>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me03_like"
                          onclick="applyCategory('gnb_me03');GA_Event('공통_카테고리', '좋아요', '남성_아우터_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me031"
                        value="me031|아우터>재킷|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me031_like"
                          onclick="applyCategory('gnb_me031');GA_Event('공통_카테고리', '좋아요', '남성_아우터_재킷');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_재킷');"
                          >재킷</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me032"
                        value="me032|아우터>점퍼|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me032_like"
                          onclick="applyCategory('gnb_me032');GA_Event('공통_카테고리', '좋아요', '남성_아우터_점퍼');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_점퍼');"
                          >점퍼</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me015"
                        value="me015|아우터>가디건/베스트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me015_like"
                          onclick="applyCategory('gnb_me015');GA_Event('공통_카테고리', '좋아요', '남성_아우터_가디건/베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me015"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_가디건/베스트');"
                          >가디건/베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me033"
                        value="me033|아우터>트렌치코트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me033_like"
                          onclick="applyCategory('gnb_me033');GA_Event('공통_카테고리', '좋아요', '남성_아우터_트렌치코트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_트렌치코트');"
                          >트렌치코트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me034"
                        value="me034|아우터>코트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me034_like"
                          onclick="applyCategory('gnb_me034');GA_Event('공통_카테고리', '좋아요', '남성_아우터_코트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_코트');"
                          >코트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me035"
                        value="me035|아우터>다운/패딩|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me035_like"
                          onclick="applyCategory('gnb_me035');GA_Event('공통_카테고리', '좋아요', '남성_아우터_다운/패딩');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me035"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_아우터_다운/패딩');"
                          >다운/패딩</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_니트');"
                      >니트</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_me10"
                        value="me10|니트>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me10_like"
                          onclick="applyCategory('gnb_me10');GA_Event('공통_카테고리', '좋아요', '남성_니트_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me10"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_니트_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me101"
                        value="me101|니트>탑/스웨터|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me101_like"
                          onclick="applyCategory('gnb_me101');GA_Event('공통_카테고리', '좋아요', '남성_니트_탑/스웨터');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me101"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_니트_탑/스웨터');"
                          >탑/스웨터</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me102"
                        value="me102|니트>점퍼/가디건|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me102_like"
                          onclick="applyCategory('gnb_me102');GA_Event('공통_카테고리', '좋아요', '남성_니트_점퍼/가디건');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me102"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_니트_점퍼/가디건');"
                          >점퍼/가디건</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me103"
                        value="me103|니트>베스트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me103_like"
                          onclick="applyCategory('gnb_me103');GA_Event('공통_카테고리', '좋아요', '남성_니트_베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me103"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_니트_베스트');"
                          >베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me104"
                        value="me104|니트>팬츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me104_like"
                          onclick="applyCategory('gnb_me104');GA_Event('공통_카테고리', '좋아요', '남성_니트_팬츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me104"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_니트_팬츠');"
                          >팬츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_탑');"
                      >탑</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_me01"
                        value="me01|탑>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me01_like"
                          onclick="applyCategory('gnb_me01');GA_Event('공통_카테고리', '좋아요', '남성_탑_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_탑_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me011"
                        value="me011|탑>티셔츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me011_like"
                          onclick="applyCategory('gnb_me011');GA_Event('공통_카테고리', '좋아요', '남성_탑_티셔츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_탑_티셔츠');"
                          >티셔츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me012"
                        value="me012|탑>셔츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me012_like"
                          onclick="applyCategory('gnb_me012');GA_Event('공통_카테고리', '좋아요', '남성_탑_셔츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_탑_셔츠');"
                          >셔츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me013"
                        value="me013|탑>니트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me013_like"
                          onclick="applyCategory('gnb_me013');GA_Event('공통_카테고리', '좋아요', '남성_탑_니트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_탑_니트');"
                          >니트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me014"
                        value="me014|탑>스웨터|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me014_like"
                          onclick="applyCategory('gnb_me014');GA_Event('공통_카테고리', '좋아요', '남성_탑_스웨터');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me014"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_탑_스웨터');"
                          >스웨터</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_팬츠');"
                      >팬츠</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_me02"
                        value="me02|팬츠>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me02_like"
                          onclick="applyCategory('gnb_me02');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me021"
                        value="me021|팬츠>루즈/테이퍼드|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me021_like"
                          onclick="applyCategory('gnb_me021');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_루즈/테이퍼드');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me021"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_루즈/테이퍼드');"
                          >루즈/테이퍼드</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me025"
                        value="me025|팬츠>슬림/스트레이트|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me025_like"
                          onclick="applyCategory('gnb_me025');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_슬림/스트레이트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me025"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_슬림/스트레이트');"
                          >슬림/스트레이트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me028"
                        value="me028|팬츠>조거/트랙|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me028_like"
                          onclick="applyCategory('gnb_me028');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_조거/트랙');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me028"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_조거/트랙');"
                          >조거/트랙</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me022"
                        value="me022|팬츠>데님|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me022_like"
                          onclick="applyCategory('gnb_me022');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_데님');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me022"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_데님');"
                          >데님</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me023"
                        value="me023|팬츠>쇼츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me023_like"
                          onclick="applyCategory('gnb_me023');GA_Event('공통_카테고리', '좋아요', '남성_팬츠_쇼츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me023"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_팬츠_쇼츠');"
                          >쇼츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_수트');"
                      >수트</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_me04"
                        value="me04|수트>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me04_like"
                          onclick="applyCategory('gnb_me04');GA_Event('공통_카테고리', '좋아요', '남성_수트_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me04"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_수트_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me041"
                        value="me041|수트>드레스셔츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me041_like"
                          onclick="applyCategory('gnb_me041');GA_Event('공통_카테고리', '좋아요', '남성_수트_드레스셔츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me041"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_수트_드레스셔츠');"
                          >드레스셔츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me042"
                        value="me042|수트>수트재킷|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me042_like"
                          onclick="applyCategory('gnb_me042');GA_Event('공통_카테고리', '좋아요', '남성_수트_수트재킷');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me042"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_수트_수트재킷');"
                          >수트재킷</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me044"
                        value="me044|수트>수트팬츠|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me044_like"
                          onclick="applyCategory('gnb_me044');GA_Event('공통_카테고리', '좋아요', '남성_수트_수트팬츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me044"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_수트_수트팬츠');"
                          >수트팬츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '남성_SPECIAL SHOP*');"
                      >SPECIAL SHOP*</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_me09"
                        value="me09|SPECIAL SHOP*>전체|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me09_like"
                          onclick="applyCategory('gnb_me09');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/me09"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me094"
                        value="me094|SPECIAL SHOP*>SYSTEM HOMME: PARIS COLLECTION|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me094_like"
                          onclick="applyCategory('gnb_me094');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_SYSTEM HOMME: PARIS COLLECTION');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me094"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_SYSTEM HOMME: PARIS COLLECTION');"
                          >SYSTEM HOMME: PARIS COLLECTION</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me098"
                        value="me098|SPECIAL SHOP*>SYSTEM HOMME : RE DENIM|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me098_like"
                          onclick="applyCategory('gnb_me098');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_SYSTEM HOMME : RE DENIM');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me098"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_SYSTEM HOMME : RE DENIM');"
                          >SYSTEM HOMME : RE DENIM</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me093"
                        value="me093|SPECIAL SHOP*>SYSTEM HOMME : TYPE 2|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me093_like"
                          onclick="applyCategory('gnb_me093');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_SYSTEM HOMME : TYPE 2');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me093"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_SYSTEM HOMME : TYPE 2');"
                          >SYSTEM HOMME : TYPE 2</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me091"
                        value="me091|SPECIAL SHOP*>CLUB MONACO : PANTS ARCHIVE|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me091_like"
                          onclick="applyCategory('gnb_me091');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_CLUB MONACO : PANTS ARCHIVE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me091"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_CLUB MONACO : PANTS ARCHIVE');"
                          >CLUB MONACO : PANTS ARCHIVE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me095"
                        value="me095|SPECIAL SHOP*>TIME HOMME : ONLINE EXCLUSIVE|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me095_like"
                          onclick="applyCategory('gnb_me095');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_TIME HOMME : ONLINE EXCLUSIVE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me095"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_TIME HOMME : ONLINE EXCLUSIVE');"
                          >TIME HOMME : ONLINE EXCLUSIVE</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_me09f"
                        value="me09f|SPECIAL SHOP*>SYSTEM HOMME : ONLINE EXCLUSIVE|man|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_me09f_like"
                          onclick="applyCategory('gnb_me09f');GA_Event('공통_카테고리', '좋아요', '남성_SPECIAL SHOP*_SYSTEM HOMME : ONLINE EXCLUSIVE');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/me09f"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '남성_SPECIAL SHOP*_SYSTEM HOMME : ONLINE EXCLUSIVE');"
                          >SYSTEM HOMME : ONLINE EXCLUSIVE</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_as"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '잡화');">
                    <span class="category_tit">잡화</span>
                  </a>
                </div>
                <ul class="two_depth" style="">
                  <li class="two_lists">
                    <a
                      href="/ko/c/as"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_여성슈즈');"
                      >여성슈즈</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as01"
                        value="as01|여성슈즈>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as01_like"
                          onclick="applyCategory('gnb_as01');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as011"
                        value="as011|여성슈즈>부츠|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as011_like"
                          onclick="applyCategory('gnb_as011');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_부츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_부츠');"
                          >부츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as012"
                        value="as012|여성슈즈>로퍼/블로퍼|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as012_like"
                          onclick="applyCategory('gnb_as012');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_로퍼/블로퍼');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_로퍼/블로퍼');"
                          >로퍼/블로퍼</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as013"
                        value="as013|여성슈즈>스니커즈|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as013_like"
                          onclick="applyCategory('gnb_as013');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_스니커즈');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_스니커즈');"
                          >스니커즈</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as014"
                        value="as014|여성슈즈>플랫|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as014_like"
                          onclick="applyCategory('gnb_as014');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_플랫');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as014"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_플랫');"
                          >플랫</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as015"
                        value="as015|여성슈즈>힐/슬링백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as015_like"
                          onclick="applyCategory('gnb_as015');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_힐/슬링백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as015"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_힐/슬링백');"
                          >힐/슬링백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as016"
                        value="as016|여성슈즈>샌들/슬라이드|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as016_like"
                          onclick="applyCategory('gnb_as016');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_샌들/슬라이드');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as016"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_샌들/슬라이드');"
                          >샌들/슬라이드</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as017"
                        value="as017|여성슈즈>기타 슈즈|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as017_like"
                          onclick="applyCategory('gnb_as017');GA_Event('공통_카테고리', '좋아요', '잡화_여성슈즈_기타 슈즈');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as017"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성슈즈_기타 슈즈');"
                          >기타 슈즈</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_남성슈즈');"
                      >남성슈즈</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as02"
                        value="as02|남성슈즈>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as02_like"
                          onclick="applyCategory('gnb_as02');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as021"
                        value="as021|남성슈즈>부츠|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as021_like"
                          onclick="applyCategory('gnb_as021');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_부츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as021"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_부츠');"
                          >부츠</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as022"
                        value="as022|남성슈즈>포멀슈즈|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as022_like"
                          onclick="applyCategory('gnb_as022');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_포멀슈즈');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as022"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_포멀슈즈');"
                          >포멀슈즈</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as023"
                        value="as023|남성슈즈>스니커즈|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as023_like"
                          onclick="applyCategory('gnb_as023');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_스니커즈');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as023"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_스니커즈');"
                          >스니커즈</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as024"
                        value="as024|남성슈즈>샌들/슬라이드|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as024_like"
                          onclick="applyCategory('gnb_as024');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_샌들/슬라이드');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as024"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_샌들/슬라이드');"
                          >샌들/슬라이드</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as025"
                        value="as025|남성슈즈>기타 슈즈|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as025_like"
                          onclick="applyCategory('gnb_as025');GA_Event('공통_카테고리', '좋아요', '잡화_남성슈즈_기타 슈즈');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as025"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성슈즈_기타 슈즈');"
                          >기타 슈즈</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_여성백');"
                      >여성백</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as03"
                        value="as03|여성백>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as03_like"
                          onclick="applyCategory('gnb_as03');GA_Event('공통_카테고리', '좋아요', '잡화_여성백_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성백_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as031"
                        value="as031|여성백>토트백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as031_like"
                          onclick="applyCategory('gnb_as031');GA_Event('공통_카테고리', '좋아요', '잡화_여성백_토트백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성백_토트백');"
                          >토트백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as032"
                        value="as032|여성백>숄더/크로스바디백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as032_like"
                          onclick="applyCategory('gnb_as032');GA_Event('공통_카테고리', '좋아요', '잡화_여성백_숄더/크로스바디백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성백_숄더/크로스바디백');"
                          >숄더/크로스바디백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as033"
                        value="as033|여성백>클러치 백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as033_like"
                          onclick="applyCategory('gnb_as033');GA_Event('공통_카테고리', '좋아요', '잡화_여성백_클러치 백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성백_클러치 백');"
                          >클러치 백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as034"
                        value="as034|여성백>기타 백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as034_like"
                          onclick="applyCategory('gnb_as034');GA_Event('공통_카테고리', '좋아요', '잡화_여성백_기타 백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_여성백_기타 백');"
                          >기타 백</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_남성백');"
                      >남성백</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as04"
                        value="as04|남성백>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as04_like"
                          onclick="applyCategory('gnb_as04');GA_Event('공통_카테고리', '좋아요', '잡화_남성백_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as04"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성백_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as041"
                        value="as041|남성백>토트백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as041_like"
                          onclick="applyCategory('gnb_as041');GA_Event('공통_카테고리', '좋아요', '잡화_남성백_토트백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as041"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성백_토트백');"
                          >토트백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as042"
                        value="as042|남성백>숄더/크로스바디백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as042_like"
                          onclick="applyCategory('gnb_as042');GA_Event('공통_카테고리', '좋아요', '잡화_남성백_숄더/크로스바디백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as042"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성백_숄더/크로스바디백');"
                          >숄더/크로스바디백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as043"
                        value="as043|남성백>클러치 백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as043_like"
                          onclick="applyCategory('gnb_as043');GA_Event('공통_카테고리', '좋아요', '잡화_남성백_클러치 백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as043"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성백_클러치 백');"
                          >클러치 백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as044"
                        value="as044|남성백>기타 백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as044_like"
                          onclick="applyCategory('gnb_as044');GA_Event('공통_카테고리', '좋아요', '잡화_남성백_기타 백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as044"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_남성백_기타 백');"
                          >기타 백</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_머플러/스카프');"
                      >머플러/스카프</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as05"
                        value="as05|머플러/스카프>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as05_like"
                          onclick="applyCategory('gnb_as05');GA_Event('공통_카테고리', '좋아요', '잡화_머플러/스카프_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as05"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_머플러/스카프_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as051"
                        value="as051|머플러/스카프>머플러|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as051_like"
                          onclick="applyCategory('gnb_as051');GA_Event('공통_카테고리', '좋아요', '잡화_머플러/스카프_머플러');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as051"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_머플러/스카프_머플러');"
                          >머플러</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as052"
                        value="as052|머플러/스카프>스카프|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as052_like"
                          onclick="applyCategory('gnb_as052');GA_Event('공통_카테고리', '좋아요', '잡화_머플러/스카프_스카프');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as052"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_머플러/스카프_스카프');"
                          >스카프</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_주얼리');"
                      >주얼리</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as06"
                        value="as06|주얼리>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as06_like"
                          onclick="applyCategory('gnb_as06');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as06"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as061"
                        value="as061|주얼리>이어링/커프|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as061_like"
                          onclick="applyCategory('gnb_as061');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_이어링/커프');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as061"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_이어링/커프');"
                          >이어링/커프</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as062"
                        value="as062|주얼리>목걸이|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as062_like"
                          onclick="applyCategory('gnb_as062');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_목걸이');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as062"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_목걸이');"
                          >목걸이</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as063"
                        value="as063|주얼리>팔찌|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as063_like"
                          onclick="applyCategory('gnb_as063');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_팔찌');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as063"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_팔찌');"
                          >팔찌</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as064"
                        value="as064|주얼리>반지|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as064_like"
                          onclick="applyCategory('gnb_as064');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_반지');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as064"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_반지');"
                          >반지</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as065"
                        value="as065|주얼리>기타 주얼리|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as065_like"
                          onclick="applyCategory('gnb_as065');GA_Event('공통_카테고리', '좋아요', '잡화_주얼리_기타 주얼리');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as065"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_주얼리_기타 주얼리');"
                          >기타 주얼리</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '잡화_기타 ACC');"
                      >기타 ACC</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_as07"
                        value="as07|기타 ACC>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as07_like"
                          onclick="applyCategory('gnb_as07');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/as07"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as071"
                        value="as071|기타 ACC>모자|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as071_like"
                          onclick="applyCategory('gnb_as071');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_모자');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as071"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_모자');"
                          >모자</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as072"
                        value="as072|기타 ACC>양말|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as072_like"
                          onclick="applyCategory('gnb_as072');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_양말');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as072"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_양말');"
                          >양말</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as073"
                        value="as073|기타 ACC>장갑|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as073_like"
                          onclick="applyCategory('gnb_as073');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_장갑');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as073"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_장갑');"
                          >장갑</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as074"
                        value="as074|기타 ACC>벨트|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as074_like"
                          onclick="applyCategory('gnb_as074');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_벨트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as074"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_벨트');"
                          >벨트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as075"
                        value="as075|기타 ACC>지갑|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as075_like"
                          onclick="applyCategory('gnb_as075');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_지갑');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as075"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_지갑');"
                          >지갑</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as076"
                        value="as076|기타 ACC>헤어ACC|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as076_like"
                          onclick="applyCategory('gnb_as076');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_헤어ACC');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as076"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_헤어ACC');"
                          >헤어ACC</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as077"
                        value="as077|기타 ACC>테크ACC|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as077_like"
                          onclick="applyCategory('gnb_as077');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_테크ACC');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as077"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_테크ACC');"
                          >테크ACC</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_as078"
                        value="as078|기타 ACC>기타소품|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_as078_like"
                          onclick="applyCategory('gnb_as078');GA_Event('공통_카테고리', '좋아요', '잡화_기타 ACC_기타소품');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/as078"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '잡화_기타 ACC_기타소품');"
                          >기타소품</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_gf"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '골프');">
                    <span class="category_tit"
                      >골프<img
                        class="icon-new-m"
                        src="http://cdn.thehandsome.com/_ui/handsomemobile/images/common_sub/icon_new_m.png"
                        alt="newIcon" />
                    </span>
                  </a>
                </div>
                <ul class="two_depth" style="display: none">
                  <li class="two_lists">
                    <a
                      href="/ko/c/gf"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '골프_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '골프_여성웨어');"
                      >여성웨어</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_gf01"
                        value="gf01|여성웨어>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf01_like"
                          onclick="applyCategory('gnb_gf01');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/gf01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf011"
                        value="gf011|여성웨어>아우터|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf011_like"
                          onclick="applyCategory('gnb_gf011');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_아우터');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_아우터');"
                          >아우터</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf012"
                        value="gf012|여성웨어>가디건/베스트|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf012_like"
                          onclick="applyCategory('gnb_gf012');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_가디건/베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_가디건/베스트');"
                          >가디건/베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf013"
                        value="gf013|여성웨어>탑|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf013_like"
                          onclick="applyCategory('gnb_gf013');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_탑');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_탑');"
                          >탑</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf014"
                        value="gf014|여성웨어>스커트/원피스|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf014_like"
                          onclick="applyCategory('gnb_gf014');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_스커트/원피스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf014"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_스커트/원피스');"
                          >스커트/원피스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf015"
                        value="gf015|여성웨어>팬츠|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf015_like"
                          onclick="applyCategory('gnb_gf015');GA_Event('공통_카테고리', '좋아요', '골프_여성웨어_팬츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf015"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_여성웨어_팬츠');"
                          >팬츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '골프_남성웨어');"
                      >남성웨어</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_gf02"
                        value="gf02|남성웨어>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf02_like"
                          onclick="applyCategory('gnb_gf02');GA_Event('공통_카테고리', '좋아요', '골프_남성웨어_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/gf02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_남성웨어_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf021"
                        value="gf021|남성웨어>아우터|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf021_like"
                          onclick="applyCategory('gnb_gf021');GA_Event('공통_카테고리', '좋아요', '골프_남성웨어_아우터');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf021"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_남성웨어_아우터');"
                          >아우터</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf022"
                        value="gf022|남성웨어>베스트|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf022_like"
                          onclick="applyCategory('gnb_gf022');GA_Event('공통_카테고리', '좋아요', '골프_남성웨어_베스트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf022"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_남성웨어_베스트');"
                          >베스트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf023"
                        value="gf023|남성웨어>탑|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf023_like"
                          onclick="applyCategory('gnb_gf023');GA_Event('공통_카테고리', '좋아요', '골프_남성웨어_탑');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf023"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_남성웨어_탑');"
                          >탑</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf024"
                        value="gf024|남성웨어>팬츠|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf024_like"
                          onclick="applyCategory('gnb_gf024');GA_Event('공통_카테고리', '좋아요', '골프_남성웨어_팬츠');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf024"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_남성웨어_팬츠');"
                          >팬츠</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '골프_ACC');"
                      >ACC</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_gf03"
                        value="gf03|ACC>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf03_like"
                          onclick="applyCategory('gnb_gf03');GA_Event('공통_카테고리', '좋아요', '골프_ACC_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/gf03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf031"
                        value="gf031|ACC>골프백|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf031_like"
                          onclick="applyCategory('gnb_gf031');GA_Event('공통_카테고리', '좋아요', '골프_ACC_골프백');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_골프백');"
                          >골프백</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf032"
                        value="gf032|ACC>골프화|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf032_like"
                          onclick="applyCategory('gnb_gf032');GA_Event('공통_카테고리', '좋아요', '골프_ACC_골프화');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_골프화');"
                          >골프화</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf033"
                        value="gf033|ACC>모자|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf033_like"
                          onclick="applyCategory('gnb_gf033');GA_Event('공통_카테고리', '좋아요', '골프_ACC_모자');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_모자');"
                          >모자</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf034"
                        value="gf034|ACC>장갑|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf034_like"
                          onclick="applyCategory('gnb_gf034');GA_Event('공통_카테고리', '좋아요', '골프_ACC_장갑');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_장갑');"
                          >장갑</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf035"
                        value="gf035|ACC>양말|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf035_like"
                          onclick="applyCategory('gnb_gf035');GA_Event('공통_카테고리', '좋아요', '골프_ACC_양말');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf035"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_양말');"
                          >양말</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf036"
                        value="gf036|ACC>벨트|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf036_like"
                          onclick="applyCategory('gnb_gf036');GA_Event('공통_카테고리', '좋아요', '골프_ACC_벨트');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf036"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_벨트');"
                          >벨트</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_gf037"
                        value="gf037|ACC>기타|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_gf037_like"
                          onclick="applyCategory('gnb_gf037');GA_Event('공통_카테고리', '좋아요', '골프_ACC_기타');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/gf037"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '골프_ACC_기타');"
                          >기타</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_be"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '뷰티');">
                    <span class="category_tit">뷰티</span>
                  </a>
                </div>
                <ul class="two_depth" style="">
                  <li class="two_lists">
                    <a
                      href="/ko/c/be"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '뷰티_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '뷰티_스킨케어');"
                      >스킨케어</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_be01"
                        value="be01|스킨케어>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be01_like"
                          onclick="applyCategory('gnb_be01');GA_Event('공통_카테고리', '좋아요', '뷰티_스킨케어_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/be01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_스킨케어_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be011"
                        value="be011|스킨케어>토너/에멀전/크림|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be011_like"
                          onclick="applyCategory('gnb_be011');GA_Event('공통_카테고리', '좋아요', '뷰티_스킨케어_토너/에멀전/크림');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_스킨케어_토너/에멀전/크림');"
                          >토너/에멀전/크림</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be012"
                        value="be012|스킨케어>세럼/앰플/오일/밤|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be012_like"
                          onclick="applyCategory('gnb_be012');GA_Event('공통_카테고리', '좋아요', '뷰티_스킨케어_세럼/앰플/오일/밤');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_스킨케어_세럼/앰플/오일/밤');"
                          >세럼/앰플/오일/밤</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be013"
                        value="be013|스킨케어>클렌징/스크럽/마스크|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be013_like"
                          onclick="applyCategory('gnb_be013');GA_Event('공통_카테고리', '좋아요', '뷰티_스킨케어_클렌징/스크럽/마스크');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_스킨케어_클렌징/스크럽/마스크');"
                          >클렌징/스크럽/마스크</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '뷰티_메이크업');"
                      >메이크업</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_be02"
                        value="be02|메이크업>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be02_like"
                          onclick="applyCategory('gnb_be02');GA_Event('공통_카테고리', '좋아요', '뷰티_메이크업_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/be02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_메이크업_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be021"
                        value="be021|메이크업>페이스 메이크업|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be021_like"
                          onclick="applyCategory('gnb_be021');GA_Event('공통_카테고리', '좋아요', '뷰티_메이크업_페이스 메이크업');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be021"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_메이크업_페이스 메이크업');"
                          >페이스 메이크업</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be023"
                        value="be023|메이크업>립 메이크업|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be023_like"
                          onclick="applyCategory('gnb_be023');GA_Event('공통_카테고리', '좋아요', '뷰티_메이크업_립 메이크업');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be023"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_메이크업_립 메이크업');"
                          >립 메이크업</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '뷰티_바디/헤어케어');"
                      >바디/헤어케어</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_be03"
                        value="be03|바디/헤어케어>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be03_like"
                          onclick="applyCategory('gnb_be03');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/be03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be031"
                        value="be031|바디/헤어케어>핸드·바디로션/크림/오일|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be031_like"
                          onclick="applyCategory('gnb_be031');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_핸드·바디로션/크림/오일');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_핸드·바디로션/크림/오일');"
                          >핸드·바디로션/크림/오일</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be032"
                        value="be032|바디/헤어케어>핸드·바디워시/스크럽|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be032_like"
                          onclick="applyCategory('gnb_be032');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_핸드·바디워시/스크럽');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_핸드·바디워시/스크럽');"
                          >핸드·바디워시/스크럽</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be033"
                        value="be033|바디/헤어케어>샴푸/컨디셔너|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be033_like"
                          onclick="applyCategory('gnb_be033');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_샴푸/컨디셔너');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_샴푸/컨디셔너');"
                          >샴푸/컨디셔너</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be034"
                        value="be034|바디/헤어케어>트리트먼트/오일/스프레이|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be034_like"
                          onclick="applyCategory('gnb_be034');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_트리트먼트/오일/스프레이');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_트리트먼트/오일/스프레이');"
                          >트리트먼트/오일/스프레이</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be035"
                        value="be035|바디/헤어케어>기타 바디/헤어케어|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be035_like"
                          onclick="applyCategory('gnb_be035');GA_Event('공통_카테고리', '좋아요', '뷰티_바디/헤어케어_기타 바디/헤어케어');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be035"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_바디/헤어케어_기타 바디/헤어케어');"
                          >기타 바디/헤어케어</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '뷰티_향수');"
                      >향수</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_be04"
                        value="be04|향수>전체|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be04_like"
                          onclick="applyCategory('gnb_be04');GA_Event('공통_카테고리', '좋아요', '뷰티_향수_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/be04"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_향수_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_be041"
                        value="be041|향수>향수|normal|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_be041_like"
                          onclick="applyCategory('gnb_be041');GA_Event('공통_카테고리', '좋아요', '뷰티_향수_향수');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/be041"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '뷰티_향수_향수');"
                          >향수</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="one_lists">
                <div class="one_wrap">
                  <a
                    href="#"
                    class="one_link"
                    id="cate_ls"
                    onclick="GA_Event('공통_카테고리', '1DEPTH', '라이프스타일');">
                    <span class="category_tit">라이프스타일</span>
                  </a>
                </div>
                <ul class="two_depth" style="">
                  <li class="two_lists">
                    <a
                      href="/ko/c/ls"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_전체보기');"
                      >전체보기</a
                    >
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_홈');"
                      >홈</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls01"
                        value="ls01|홈>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls01_like"
                          onclick="applyCategory('gnb_ls01');GA_Event('공통_카테고리', '좋아요', '라이프스타일_홈_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls01"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_홈_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls011"
                        value="ls011|홈>패브릭|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls011_like"
                          onclick="applyCategory('gnb_ls011');GA_Event('공통_카테고리', '좋아요', '라이프스타일_홈_패브릭');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls011"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_홈_패브릭');"
                          >패브릭</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls012"
                        value="ls012|홈>프래그런스|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls012_like"
                          onclick="applyCategory('gnb_ls012');GA_Event('공통_카테고리', '좋아요', '라이프스타일_홈_프래그런스');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls012"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_홈_프래그런스');"
                          >프래그런스</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls013"
                        value="ls013|홈>데코레이션|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls013_like"
                          onclick="applyCategory('gnb_ls013');GA_Event('공통_카테고리', '좋아요', '라이프스타일_홈_데코레이션');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls013"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_홈_데코레이션');"
                          >데코레이션</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls014"
                        value="ls014|홈>기타소품|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls014_like"
                          onclick="applyCategory('gnb_ls014');GA_Event('공통_카테고리', '좋아요', '라이프스타일_홈_기타소품');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls014"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_홈_기타소품');"
                          >기타소품</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_배스');"
                      >배스</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls02"
                        value="ls02|배스>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls02_like"
                          onclick="applyCategory('gnb_ls02');GA_Event('공통_카테고리', '좋아요', '라이프스타일_배스_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls02"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_배스_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls022"
                        value="ls022|배스>욕실용품|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls022_like"
                          onclick="applyCategory('gnb_ls022');GA_Event('공통_카테고리', '좋아요', '라이프스타일_배스_욕실용품');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls022"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_배스_욕실용품');"
                          >욕실용품</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_키친');"
                      >키친</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls03"
                        value="ls03|키친>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls03_like"
                          onclick="applyCategory('gnb_ls03');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls03"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls031"
                        value="ls031|키친>그릇|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls031_like"
                          onclick="applyCategory('gnb_ls031');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_그릇');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls031"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_그릇');"
                          >그릇</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls032"
                        value="ls032|키친>보드/트레이|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls032_like"
                          onclick="applyCategory('gnb_ls032');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_보드/트레이');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls032"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_보드/트레이');"
                          >보드/트레이</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls033"
                        value="ls033|키친>커트러리|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls033_like"
                          onclick="applyCategory('gnb_ls033');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_커트러리');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls033"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_커트러리');"
                          >커트러리</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls034"
                        value="ls034|키친>커피/티|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls034_like"
                          onclick="applyCategory('gnb_ls034');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_커피/티');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls034"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_커피/티');"
                          >커피/티</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls035"
                        value="ls035|키친>패브릭/냅킨|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls035_like"
                          onclick="applyCategory('gnb_ls035');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_패브릭/냅킨');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls035"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_패브릭/냅킨');"
                          >패브릭/냅킨</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls036"
                        value="ls036|키친>기타소품|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls036_like"
                          onclick="applyCategory('gnb_ls036');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키친_기타소품');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls036"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키친_기타소품');"
                          >기타소품</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_데스크');"
                      >데스크</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls04"
                        value="ls04|데스크>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls04_like"
                          onclick="applyCategory('gnb_ls04');GA_Event('공통_카테고리', '좋아요', '라이프스타일_데스크_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls04"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_데스크_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls041"
                        value="ls041|데스크>문구|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls041_like"
                          onclick="applyCategory('gnb_ls041');GA_Event('공통_카테고리', '좋아요', '라이프스타일_데스크_문구');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls041"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_데스크_문구');"
                          >문구</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls042"
                        value="ls042|데스크>책|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls042_like"
                          onclick="applyCategory('gnb_ls042');GA_Event('공통_카테고리', '좋아요', '라이프스타일_데스크_책');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls042"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_데스크_책');"
                          >책</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls043"
                        value="ls043|데스크>기타소품|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls043_like"
                          onclick="applyCategory('gnb_ls043');GA_Event('공통_카테고리', '좋아요', '라이프스타일_데스크_기타소품');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls043"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_데스크_기타소품');"
                          >기타소품</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_키즈');"
                      >키즈</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls06"
                        value="ls06|키즈>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls06_like"
                          onclick="applyCategory('gnb_ls06');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키즈_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls06"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키즈_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls061"
                        value="ls061|키즈>의류|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls061_like"
                          onclick="applyCategory('gnb_ls061');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키즈_의류');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls061"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키즈_의류');"
                          >의류</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls062"
                        value="ls062|키즈>잡화|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls062_like"
                          onclick="applyCategory('gnb_ls062');GA_Event('공통_카테고리', '좋아요', '라이프스타일_키즈_잡화');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls062"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_키즈_잡화');"
                          >잡화</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="two_lists">
                    <a
                      href="#"
                      class="two_link js-cate-link"
                      onclick="GA_Event('공통_카테고리', '2DEPTH', '라이프스타일_펫');"
                      >펫</a
                    >
                    <ul class="three_depth" style="">
                      <input
                        type="hidden"
                        id="gnb_ls05"
                        value="ls05|펫>전체|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls05_like"
                          onclick="applyCategory('gnb_ls05');GA_Event('공통_카테고리', '좋아요', '라이프스타일_펫_전체');">
                          찜하기</button
                        ><!-- 찜한 카테고리에 on 클래스 붙음 -->
                        <a
                          href="/ko/c/ls05"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_펫_전체');"
                          >전체</a
                        >
                      </li>
                      <input
                        type="hidden"
                        id="gnb_ls051"
                        value="ls051|펫>패션|life|false" />
                      <li class="three_lists">
                        <button
                          type="button"
                          class="like"
                          id="gnb_ls051_like"
                          onclick="applyCategory('gnb_ls051');GA_Event('공통_카테고리', '좋아요', '라이프스타일_펫_패션');">
                          찜하기
                        </button>
                        <a
                          href="/ko/c/ls051"
                          class="three_link"
                          onclick="GA_Event('공통_카테고리', '3DEPTH', '라이프스타일_펫_패션');"
                          >패션</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- lnb_themaga_sns_wrap2004-->

            <!-- //lnb_themaga_sns_wrap2004-->
          </div>
        </div>
        <!--// 카테고리 -->
      </div>
    </div>
  </div>
</div>
<div class="footer">
  <a href="javascript:noLink();" class="close" onclick="closeMenu()"
    >닫기</a
  >
</div>
</div>
`;

$(".hsome_quickMenu .shop a").click(function (e) {
  e.preventDefault();
  console.log("Quick");
  $(".hsome_quickMenu_contents").addClass("active absolute");
  $(".hsome_quickMenu_contents").html(template);
});

$(".hsome_quickMenu  .sns a").click(function (e) {
  e.preventDefault();
  console.log("sns click");
});
$(".hsome_quickMenu .home a").click(function (e) {
  e.preventDefault();
  console.log("home click");
});
$(".hsome_quickMenu .myheart a").click(function (e) {
  e.preventDefault();
  console.log("my heart click");
});
$(".hsome_quickMenu .mypage a").click(function (e) {
  e.prevnetDefault();
  console.log("mypage click");
});

function closeMenu() {
  console.log("tt");
  $("body").removeClass("hold_body");
  $(".hsome_quickMenu_contents").removeClass("active absolute");
  $(".hsome_quickMenu_contents").html("");
}
