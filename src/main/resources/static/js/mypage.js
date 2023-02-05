/**
 * Common Methods
 */
 
console.log("test.js");

//180814 추가 시작
var quickSTagSwiperOption = {
		slidesPerView: 'auto',
		freeMode: true,
		spaceBetween: 6,
		freeModeMomentumBounce: false
	},
	quickSBrandTagSelector = '.hand_footer_gnb_wrap #tab_01 .flag_wrap.swiper-container',
	quickSBrandTagSwiper = null,
	quickSCaterogyTagSelector = '.hand_footer_gnb_wrap #tab_02 .flag_wrap.swiper-container',
	quickSCaterogyTagSwiper = null,
	quickSSmartTagSelector = '.hand_footer_gnb_wrap #tab_03 .flag_wrap.swiper-container',
	quickSSmartTagSwiper = null;
//180814 추가 끝

(function ( $ ) {
	$(document).ready(function() {

		//퀵메뉴 show & hide 시작 20180530 수정(TOP버튼 추가)
		var lastScrollPosition;
		var scrollPosition = 0;
		$(window).scroll(function(){
			scrollPosition = $(this).scrollTop();
			if (!main_bul) {//180909 메인 페이지가 아니라면 실행
				if ((scrollPosition < lastScrollPosition) || (scrollPosition <= 0)) {
					if (scrollPosition >= ($(document).height() - $(window).height())){
						if (scrollPosition != ($(document).height() - $(window).height())){
							$('.hsome_quickMenu').removeClass('active');
							$('a.hsome_topBtn').removeClass('upper');
						}
					} else {
						$('.hsome_quickMenu').addClass('active');
						$('a.hsome_topBtn').addClass('upper');
					}
				} else {
					$('.hsome_quickMenu').removeClass('active');
					$('a.hsome_topBtn').removeClass('upper');
				}
			}

			if (scrollPosition > 0) {
			    if (!main_bul) {
			        $('a.hsome_topBtn').addClass('active');
			    }
			} else {
				$('a.hsome_topBtn').removeClass('active');
			}

			lastScrollPosition = scrollPosition;
		});

		$('a.hsome_topBtn').click(function(){

			console.log("hi");

			$('.hsome_allContents_wrapper').addClass('op');
			setTimeout(function(){
				$('html, body').scrollTop(0);
				$('.hsome_allContents_wrapper').removeClass('op');
			}, 300);

			return false;
		});
		//퀵메뉴 show & hide 끝

		//퀵메뉴 클릭 시작
		var curScrollPosition = 0;
		//180723 수정 시작
		$('.hsome_quickMenu a, .main202103-look-ahead.more a').click(function(){

			console.log("hi222");
			curScrollPosition = $(window).scrollTop();

			var $page_url = $(this).attr('href');

			if ($page_url.indexOf('layout_') != -1 || $(this).parent().index() == 0 || $(this).parent().index() == 5 || $(this).parent().index() == 6) {//샵, 마이페이지 퀵메뉴 클릭하면 해당 화면 로딩 180802 수정
				//비로그인 || global 이면 페이지 이동
				if ($(this).parent().hasClass('pageMove')) {
					location.href = $page_url;
					return false;
				}
				$(".hsome_quickMenu_contents").addClass('active');

				//180615 수정 시작
				setTimeout(function(){
					getPage($page_url);
					$('.hsome_allContents').addClass('disabled');

				}, 300);
				setTimeout(function(){
					$('.hsome_quickMenu_contents').addClass('absolute');
				}, 400);
				//180615 수정 끝
      		} else {
      			$('.hsome_quickMenu li').removeClass('active');
	  			$(this).parent().addClass('active');

	  			setTimeout(function(){
					location.href = $page_url;
	  			}, 320);//181002 속도 수정
      		}
      		return false;
		});
		//180723 수정 끝

		quickSBrandTagSwiper = new Swiper(quickSBrandTagSelector, quickSTagSwiperOption);
		quickSCaterogyTagSwiper = new Swiper(quickSCaterogyTagSelector, quickSTagSwiperOption);
		quickSSmartTagSwiper = new Swiper(quickSSmartTagSelector, quickSTagSwiperOption);
		
		function getPage(page_url) {
			$('.hsome_quickMenu_contents').html('<img src="/_ui/handsomemobile/images/common/Spinner-1s-200px.png" alt="loading" class="hsome_quickMenu_loader" />');
			jQuery.ajax({
				url: page_url,
				data:'',
				type: "get",
				success:function(data){
					setTimeout(function(){
						$('.hsome_quickMenu_contents').html(data);
						
						if ( page_url != null ) { //190612 수정
    						if ( page_url.indexOf('myPagePopup') > -1 ) {
    						    initMypage();//180627 추가
    						}
						}

						//180813 마이하트 리스트 슬라이드 시작
						var myheartSwiperClass = '.hand_footer_gnb_wrap .hs_product_list .img_slide_wrap.active.swiper-container';
						if ($(myheartSwiperClass).length > 0) {
							new Swiper(myheartSwiperClass, { loop: true });
						}
						//180813 마이하트 리스트 슬라이드 끝

						$('.hand_footer_gnb_wrap .footer a.close').click(function(){
							console.log("hi3");
							clsPage(curScrollPosition);
						});

						//180814 추가 시작
						quickSTagSwiperOption = {
							slidesPerView: 'auto',
							freeMode: true,
							spaceBetween: 6,
							freeModeMomentumBounce: false
						};
						quickSBrandTagSwiper = new Swiper(quickSBrandTagSelector, quickSTagSwiperOption);
						quickSCaterogyTagSwiper = new Swiper(quickSCaterogyTagSelector, quickSTagSwiperOption);
						quickSSmartTagSwiper = new Swiper(quickSSmartTagSelector, quickSTagSwiperOption);
						//180814 추가 끝
					}, 0);
				}
			});
		}
		//퀵메뉴 클릭 끝

		//퀵메뉴 닫기 시작
		function clsPage(par_top){

			$('.hsome_quickMenu_contents').removeClass('absolute');

			setTimeout(function(){//180615 수정
				$(".hsome_quickMenu_contents").removeClass('active');
			}, 0);

			//$('.hsome_allContents').show();
			$('.hsome_allContents').css({ marginTop: par_top*-1 });
			$('.hsome_allContents').removeClass('disabled');
			setTimeout(function(){
				$('.hsome_allContents').css({ marginTop: 0 });
				$(window).scrollTop(par_top);
				$(".hsome_quickMenu_contents").empty();
			}, 300);

			$append_cnt = 0;//180716 추가
			$('.red_border_tab').removeClass('active');//180719 추가
			return false;
		}
		//퀵메뉴 닫기 끝

		//배경색 지정 시작
		backPage();
		function backPage(){
			if ($('.hsome_footer').length > 0) {
				$('html, body').addClass('back');
			}
		}
		//배경색 지정 끝

		//footer toggle 시작
		$('.hsome_footer a.f_info_viewer').click(function(){
			console.log("hi");
			$(this).toggleClass('active');
			$(this).next().slideToggle('fast');
			return false;
		});
		//footer toggle 끝

		/*tab 180716 수정*/
		var $append_cnt = 0;
		$(document).on('click', '.ui_tab li a', function(){

			console.log("hidden");
			
			
			var $this = $(this),
				$this_parent = $this.closest('.ui_tab');

				$this_parent.addClass('active');
				
			if($(".product-style-pop ul.style_codi").hasClass("size02") && ($this_parent.find('.fcs').length == 0)){
				$this_parent.append('<li class="fcs"></li>');	
				$(".hs_red_border_tab.ui_tab.active li.on:first-child a").css("border-color","transparent");
				$append_cnt = 0;
			}
				
			if (($append_cnt == 0) && ($this_parent.find('.fcs').length == 0)) {//180802 수정
				$this_parent.append('<li class="fcs"></li>');	
				$append_cnt = 1;
			}
			
			$this_parent.find('.fcs').css({
				transform: 'translateX('+ $this.position().left +'px)'
			});
			$(window).resize(function(){
				$this_parent.find('.fcs').css({
					transform: 'translateX('+ $this.position().left +'px)'
				});
			});

			if (main_bul) {//181015 메인 플루팅 탭 클래스 토글링 추가
				$('.hsome_main .ui_tab li').removeClass('on');
				$('.hsome_main .ui_tab li').eq($this.parent().index()).addClass('on');
				$this.parent('li').siblings('li').removeClass('on');
	            $this.parent('li').addClass('on');
			} else {//서브 페이지 탭 클래스 토글링
				$this.parent('li').siblings('li').removeClass('on');
				$this.parent('li').addClass('on');
			}

			var activeCont = $this.attr('href');
			var selectCont = $('.tab_cont .cont'+activeCont+'');

			selectCont.siblings('.cont').removeClass('on');
			$('.tab_cont '+activeCont+'').addClass('on');
			if(activeCont == '#tab_02'){
			    try {
			      shopCateListHeightSet();
			    } catch(err){
			      console.log(err);
			    }
    			
			}
			
			if($this.parents('div').hasClass('hand_footer_gnb_wrap2002') && $this.attr('href') == '#tab_01'){
                $('.scr_btn200217').eq(0).addClass('on');
                $('.scr_btn200217').eq(0).siblings().removeClass('on');
            }

			return false;
		});

		/*shop*/
		$(document).on('click', '.shop_cont .one_link', function(){

			if($(this).parent('.one_wrap').siblings().is('.two_depth')){
				if($(this).parent('.one_wrap').parent('li').hasClass('on')){
					$(this).parent('.one_wrap').parent('li').toggleClass('on');
					$('.brd_shop_cate_wrap2002').find('.one_depth').find('li').removeClass('disable');
				}else{
				    if($(this).parents('div').hasClass('brd_shop_cate_wrap2002')){// 200213 lnb 수정
                        $('.brd_shop_cate_wrap2002').find('.one_depth').find('li').removeClass('on');
                        $('.brd_shop_cate_wrap2002').find('.one_depth').find('li').removeClass('disable');
                        $(this).parent('.one_wrap').parent('li').addClass('on');
                        $(this).parent('.one_wrap').parent('li').siblings('li').addClass('disable');
                    }else{
                        $(this).parent('.one_wrap').parents('.one_depth').find('li').removeClass('on');
                        $(this).parent('.one_wrap').parent('li').addClass('on');
                    }
				}

				$(this).parents('.shop_cont').find('.two_depth, .three_depth, .four_depth, .five_depth').slideUp(300);//181001 수정(1뎁스 메뉴 클릭했을 때 하위메뉴 닫힘)
				$(this).parents('.shop_cont').find('.one_depth .on .two_depth').slideDown(300);

				return false;
			}
		});

		$(document).on('click', '.shop_cont .two_link.js-brand-link', function(){ // two depth 브랜드 샵
            var $this = $(this);
            var $parent = $this.parent('li');
            var $shop_cont = $this.parents('.shop_cont');

            if($this.siblings().is('.three_depth')){
                if($parent.hasClass('on')){
                    $parent.removeClass('on');
                }else{
                    $this.parents().find('.depth_two').children('li').removeClass('on');
                    $parent.addClass('on');
                }

                $shop_cont.find('.three_depth, .four_depth, .five_depth').slideUp(300);
                $shop_cont.find('.two_depth .on .three_depth').slideDown(300);

                return false;
            }
        });

        $(document).on('click', '.shop_cont .two_link.js-cate-link', function(){ // two depth 카테고리 샵
            if($(this).siblings().is('.three_depth')){
                if($(this).parent('li').hasClass('on')){
                    $(this).parent('li').removeClass('on');
                }else{
                    $(this).parents().find('.two_depth').children('li').removeClass('on');
                    $(this).parent('li').addClass('on');
                }

                $(this).parents('.shop_cont').find('.three_depth, .four_depth, .five_depth').slideUp(300);//181001 수정(2뎁스 메뉴 클릭했을 때 하위메뉴 닫힘)
                $(this).parents('.shop_cont').find('.two_depth .on .three_depth').slideDown(300);

                return false;
            }
        });

		//shop > 3뎁스 메뉴 토글링 181001 추가 시작
		$(document).on('click', '.shop_cont .three_link', function(){//3뎁스 메뉴의 하위 메뉴가 있을 때에만 실행
			if($(this).siblings().is('.four_depth')){
				if($(this).parent('li').hasClass('on')){
					$(this).parent('li').toggleClass('on');
				}else{
					$(this).parents().find('.three_depth').children('li').removeClass('on');
					$(this).parent('li').addClass('on');
				}

				$(this).parents('.shop_cont').find('.four_depth, .five_depth').stop(false, true).slideUp(300);
				$(this).parents('.shop_cont').find('.three_depth .on .four_depth').stop(false, true).slideDown(300);

				return false;
			}
		});
		//shop > 3뎁스 메뉴 토글링 181001 추가 끝

		//shop > 4뎁스 메뉴 토글링 181001 추가 시작
		$(document).on('click', '.shop_cont .four_link', function(){//4뎁스 메뉴의 하위 메뉴가 있을 때에만 실행
			if($(this).siblings().is('.five_depth')){
				if($(this).parent('li').hasClass('on')){
					$(this).parent('li').toggleClass('on');
				}else{
					$(this).parents().find('.four_depth').children('li').removeClass('on');
					$(this).parent('li').addClass('on');
				}

				$(this).parents('.shop_cont').find('.five_depth').stop(false, true).slideUp(300);
				$(this).parents('.shop_cont').find('.four_depth .on .five_depth').stop(false, true).slideDown(300);

				return false;
			}
		});
		//shop > 4뎁스 메뉴 토글링 181001 추가 끝
		
		$(document).on('click', '.hand_footer_gnb_wrap .ui_tab li a', function(){
			$('.smart_pop').hide();
			$('.smart_wrap').show();
			$('.shop_cont .two_depth , .shop_cont .three_depth').slideUp(300);
			$('.one_lists , .two_lists').removeClass('on');

			$(".hand_footer_gnb_wrap2002 .container").scrollTop(0); //navShop 메뉴 클릭시 스크롤 최상단으로 설정
			//180814 추가 시작
			quickSBrandTagSwiper.update();
			quickSCaterogyTagSwiper.update();
			quickSSmartTagSwiper.update();
			//180814 추가 끝
			
			
		})

		/*smart*/
		$(document).on('click', '.smart_list .left_tab a', function(){
			$(this).parent('li').siblings('li').removeClass('on');
			$(this).parent('li').addClass('on');
			$('.defalut_all').hide();
			$('.list_cont').addClass('on');
		});

		/*smart_pop*/
		$(document).on('click', '.smart_top .filter_link', function(){//180615 수정
			$('.smart_pop').show();
			$('.smart_wrap').hide();

			$('.hand_footer_gnb_wrap a.pre').show();
			$('.hand_footer_gnb_wrap .header .ui_tab').hide();

			var smartSwiper = new Swiper('.smart_pop .product_list', {
				slidesPerView:'auto',
				spaceBetween:5,
				freeMode:true
			});
		});

		$(document).on('click', '.smart_pop .smart_check_btn .check_btn, .hand_footer_gnb_wrap a.pre', function(){//180615 수정
			$('.smart_pop').hide();
			$('.smart_wrap').show();

			$('.hand_footer_gnb_wrap a.pre').hide();
			$('.hand_footer_gnb_wrap .header .ui_tab').show();
		});

		//180814 삭제 시작
		// function new_tag_append (el){
		// 	var $el_wid = el.width(),
		// 		$el_parent_wid = el.parent().width();

		// 	if ($el_wid > $el_parent_wid) {
		// 	//if (($el_wid - $el_parent_wid) >= 0) {
		// 		el.parent().stop().animate({
		// 			scrollLeft: $el_wid - $el_parent_wid// + 6
		// 		}, 400);
		// 	}
		// }
		//180814 삭제 끝

		//샵 퀵메뉴 > NOMAL 탭 > 브랜드 탭 > 즐겨찾기 추가/삭제 시작 180814 수정
		var $brand = '',
			$appended_html = '';

		if (handsomeUserLoginYn == "Y") {
			$(document).on('click', '.hand_footer_gnb_wrap .shop_cont .shop_list_brand .like', function(){
				var $this = $(this);
				
				$(quickSBrandTagSelector).addClass('active');
				$('.brd_shop_cate_wrap2002 .my_heart_flag2002').stop().fadeIn(500);//200213 lnb 수정
				
				if (!$(this).hasClass('on')) {
					$(this).addClass('on');
	
					$brand = $(this).parent().find('.logo').text();//브랜드 명 가져오기
	
					$appended_html = '<li class="swiper-slide flag" data-idx='+$(this).closest('.shop_list_brand').index()+'>' +
                        '<a href="#" class="name">'+ $brand +'</a>' +
                        '<a href="#" class="delete">삭제</a>' +
                        '<input type="hidden" name=' + $(this).closest('.one_lists').index() + ' />'
                    '</li>';
					
					//200221 하트애니메이션 추가 - s
	                $active_heart = '<span class="active_heart" style="top:'+ ($(this).closest('.one_lists').offset().top+13.5) +'px;left:'+ $(this).closest('.one_lists').offset().left +'px;"></span>';
	                $('.brd_shop_cate_wrap2002').append($active_heart);
	                $('.active_heart').animate({top:$('.ico_heart200214').offset().top, left:$('.ico_heart200214').offset().left},200,
	                    function(){
	                            $(this).remove();
	                });
	                //200221 하트애니메이션 추가 - e
					
					quickSBrandTagSwiper.prependSlide($appended_html);//200213 lnb 수정
					
					setTimeout(function(){
						$(quickSBrandTagSelector + ' ul li.flag').each(function(){
							if (!$(this).hasClass('active')) {
								$(this).addClass('active');
							}
						});
					}, 0);
					if ($(".brd_shop_cate_wrap2002").find(".like.on").length == 1) {
						$('.flag_fixed_wrap2002').css("visibility","visible");
					}
					
					quickSBrandTagSwiper.slideTo(0, 400);//200213 lnb 수정
					
					//200213 lnb 수정
					$('.brd_shop_cate_wrap2002 .my_heart_flag2002').find('.white_action200219').stop().show();
	                setTimeout(function(){
	                    $('.brd_shop_cate_wrap2002 .my_heart_flag2002').addClass('add_like2002');
	                },300);
	                setTimeout(function(){
	                    $('.brd_shop_cate_wrap2002 .my_heart_flag2002').find('.white_action200219').stop().hide();
	                    $('.brd_shop_cate_wrap2002 .my_heart_flag2002').removeClass('add_like2002');
	                },800);
	
				} else {
					//활성화된 하트버튼을 클릭하면 하트버튼이 비활성화 되고, 추가된 태그가 삭제됨
					$this.removeClass('on');
					
	
					$(quickSBrandTagSelector + ' ul li input[name='+ $this.closest('.one_lists').index().toString() +']').parent().removeClass('active');
					setTimeout(function(){
						quickSBrandTagSwiper.removeSlide($(quickSBrandTagSelector + ' ul li input[name='+ $this.closest('.one_lists').index().toString() +']').parent().index());
	
					}, 300);
	
					if($(".brd_shop_cate_wrap2002").find(".like.on").length == 0){
        			    $(quickSBrandTagSelector).removeClass('active');
        			    $('.brd_shop_cate_wrap2002 .my_heart_flag2002').stop().hide();//200213 lnb 수정
        			    $('.flag_fixed_wrap2002').css("visibility","hidden");
    			    }
    			    /*if (quickSBrandTagSwiper.slides.length == 1) {
        			    $(quickSBrandTagSelector).removeClass('active');
        			    $('.my_heart_flag2002').stop().hide();//200213 lnb 수정
    			    }*/
				}
			});
		}
		$(document).on('click', quickSBrandTagSelector + ' ul .delete', function() {//200213 lnb 수정
            var $parent = $(this).parent();
            $('.hand_footer_gnb_wrap .shop_cont .shop_list_brand').eq($parent.attr('data-idx')).find('.one_lists').eq($parent.find('input').attr('name')*1).find('.like').removeClass('on');

            $parent.removeClass('active');
            setTimeout(function(){
                quickSBrandTagSwiper.removeSlide($parent.index());
            }, 300);
            if ($(".brd_shop_cate_wrap2002").find(".like.on").length == 1) {
                $(quickSBrandTagSelector).removeClass('active');
                $('.brd_shop_cate_wrap2002 .my_heart_flag2002').stop().hide();
                $('.flag_fixed_wrap2002').css("visibility","hidden");
            }

            return false;
        });
		//샵 퀵메뉴 > NOMAL 탭 > 브랜드 탭 > 즐겨찾기 추가/삭제 끝 180814 수정

		//샵 퀵메뉴 > NOMAL 탭 > 카테고리 탭 > 즐겨찾기 추가/삭제 시작 180814 수정
		var $category_1dth = '',
			// $category_2dth = '',
			$category_3dth = '',
			$category_appended_html = '';
		var processYn = false;
		if (handsomeUserLoginYn == "Y") {
		$(document).on('click', '.hand_footer_gnb_wrap .shop_cont .shop_list_category .like', function(){
			if ( !processYn ) {
	            processYn = true;
			var $this = $(this);

			$(quickSCaterogyTagSelector).addClass('active'); //my하트 활성화
			$('.lnb_themaga_sns_wrap2004').css('padding-bottom','56px');
			var $shopCateList = $('.hand_footer_gnb_wrap2002 .cate_shop_cate_wrap2004 .shop_list_category');
			var shopCateListH = $(window).height() - (107 + $('.lnb_themaga_sns_wrap2004').outerHeight());
			$shopCateList.css('min-height',shopCateListH+'px');
			
			
			/*//현의 1뎁스가 어떤건지 확인 
			if ($this.closest('.one_lists').index() == 0) {
				$category_1dth = 'woman';
			} else if ($this.closest('.one_lists').index() == 1) {
				$category_1dth = 'man';
			} else if ($this.closest('.one_lists').index() == 2) {
				$category_1dth = 'life';
			}*/

			if (!$this.hasClass('on')) {
				$this.addClass('on');
				/*$category_3dth = $this.parent().find('a').text();//카테고리 명 가져오기
				$category_appended_html = 	'<li class="flag swiper-slide ' + $category_1dth + '">' +
												'<a href="#" class="name">'+ $this.closest('.two_lists').find('.two_link').text() + '&gt;' + $category_3dth +'</a>' +
												'<a href="#" class="delete">삭제</a>' +
												'<input type="hidden" name=' +
													$this.closest('.one_lists').index() + 'n' +
													$this.closest('.two_lists').index() + 'n' +
													$this.parent().index() + //3depth
												' />' +
											'</li>';*/

				//200410 하트애니메이션 추가 - s
                $active_heart = '<span class="active_heart" style="top:'+ ($(this).closest('.three_lists').offset().top+13.5) +'px;left:'+ $(this).closest('.three_lists').offset().left +'px;"></span>';
                $('.cate_shop_cate_wrap2004').append($active_heart);
                $('.active_heart').animate({top:$('.flag_fixed_wrap2004 .ico_heart200214').offset().top, left:$('.flag_fixed_wrap2004 .ico_heart200214').offset().left},200,function(){
                    $(this).remove();
                });
                //200410 하트애니메이션 추가 - e
                quickSCaterogyTagSwiper.prependSlide($category_appended_html);//200410 lnb 수정

				setTimeout(function(){
					$(quickSCaterogyTagSelector + ' ul li.flag').each(function(){
						if (!$(this).hasClass('active')) {
							$(this).addClass('active');
						}
					});
				}, 0);

				quickSCaterogyTagSwiper.slideTo(0, 400);//200410 lnb 수정
				
				//200410 lnb 수정
                $('.cate_shop_cate_wrap2004 .my_heart_flag2002').find('.white_action200219').stop().show();
                setTimeout(function(){
                        $('.cate_shop_cate_wrap2004 .my_heart_flag2002').addClass('add_like2002');
                },300);
                setTimeout(function(){
                        $('.cate_shop_cate_wrap2004 .my_heart_flag2002').find('.white_action200219').stop().hide();
                        $('.cate_shop_cate_wrap2004 .my_heart_flag2002').removeClass('add_like2002');
                },800);

			} else {
				//활성화된 하트버튼을 클릭하면 하트버튼이 비활성화 되고, 추가된 태그가 삭제됨
//				$this.removeClass('on');

				// console.log(
				// 	($this.closest('.one_lists').index() + 'n' + $this.closest('.two_lists').index() + 'n' + $this.parent().index()).toString()
				// 	);

//				$(quickSCaterogyTagSelector + ' ul li input[name='+ ($this.closest('.one_lists').index() + 'n' + $this.closest('.two_lists').index() + 'n' + $this.parent().index()).toString() +']').parent().removeClass('active');
/*				setTimeout(function(){
					quickSCaterogyTagSwiper.removeSlide($(quickSCaterogyTagSelector + ' ul li input[name='+ ($this.closest('.one_lists').index() + 'n' + $this.closest('.two_lists').index() + 'n' + $this.parent().index()).toString() +']').parent().index());
				}, 300);*/
				
			}
			
			processYn = false;
			}
		});
		}
/*		$(document).on('click', quickSCaterogyTagSelector + ' ul .delete', function() {//200410 lnb 수정
            var $parent = $(this).parent(),
                    $parent_name = $parent.find('input').attr('name'),
                    $one_list_li = $parent_name.split('n')[0]*1,
                    $two_list_li = $parent_name.split('n')[1]*1,
                    heart_list = $('.hand_footer_gnb_wrap .shop_cont .shop_list_category .one_lists').eq($one_list_li).find('.two_lists').eq($two_list_li).find('.three_lists');
            for(var i = 0;i < heart_list.length;i++){
                if($parent.find('.name').text().split('>')[1] == heart_list.eq(i).find('.three_link').text()){
                     heart_list.eq(i).find('.like').removeClass('on');
                }
            }

            $parent.removeClass('active');
            setTimeout(function(){
                quickSCaterogyTagSwiper.removeSlide($parent.index());
            }, 300);

            if (quickSCaterogyTagSwiper.slides.length == 1) {
                $(quickSCaterogyTagSelector).removeClass('active');
            }
            if ($(".cate_shop_cate_wrap2004").find(".like.on").length == 0) {
                    $(quickSBrandTagSelector).removeClass('active');
            }

            return false;
        });
		//샵 퀵메뉴 > NOMAL 탭 > 카테고리 탭 > 즐겨찾기 추가/삭제 끝 180814 수정
*/
		//샵 퀵메뉴 > SMART 탭 > 필터 조건 추가/삭제 시작 180814 수정
		$(document).on('click', '.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_list ul[class*=check_list] li[class*=check] input', function(){

			var $this = $(this);

			if ($this.prop('checked')) {
				$(quickSSmartTagSelector).addClass('active');
				$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_check_btn').addClass('active');//180615 수정

				switch ($('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_list .left_tab li.on').index()) {
					case 0 : $smart_category_1dth = 'woman'; break;
					case 1 : $smart_category_1dth = 'man'; break;
					case 2 : $smart_category_1dth = 'life'; break;
					default : $smart_category_1dth = ''; break;
				}

				$smart_category_3dth = $this.next().html();//카테고리 명 가져오기
				$smart_category_appended_html = '<li class="flag swiper-slide ' + $smart_category_1dth + '">' +
													'<span class="name">'+ $smart_category_3dth +'</span>' +
													'<a href="#" class="delete">삭제</a>' +
													'<input type="hidden" name=' +
														$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_list .left_tab li.on').index() + 'n' +
														$(this).parent().index() + //2depth
													' />' +
												'</li>';
				
				//quickSSmartTagSwiper.appendSlide($smart_category_appended_html);

					setTimeout(function(){
						$(quickSSmartTagSelector + ' ul li.flag').each(function(){
							if (!$(this).hasClass('active')) {
								$(this).addClass('active');
							}
						});
					}, 0);
					
					quickSSmartTagSwiper.slideTo(quickSSmartTagSwiper.slides.length, 400);

			} else {
				$(quickSSmartTagSelector + ' ul li input[name='+ ($this.closest('.cont').index() + 'n' + $this.parent().index()).toString() +']').parent().removeClass('active');
				setTimeout(function(){
					quickSSmartTagSwiper.removeSlide($(quickSSmartTagSelector + ' ul li input[name='+ ($this.closest('.cont').index() + 'n' + $this.parent().index()).toString() +']').parent().index());
				}, 300);

				if (quickSSmartTagSwiper.slides.length == 1) {
					$(quickSSmartTagSelector).removeClass('active');
					$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_check_btn').removeClass('active');
				}
			}

		});

		//$(document).on('click', quickSSmartTagSelector + ' ul .delete', function() {
		//	var $parent = $(this).parent();
			//$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_list div[id*=smart_tab]').eq($parent.find('input').attr('name').split('n')[0]*1).find('ul[class*=check_list] li').eq($parent.find('input').attr('name').split('n')[1]*1).find('input').prop('checked', false);

			//$parent.removeClass('active');
			//setTimeout(function(){
			//	quickSSmartTagSwiper.removeSlide($parent.index());
			//}, 300);

			//if (quickSSmartTagSwiper.slides.length == 1) {
			//	$(quickSSmartTagSelector).removeClass('active');
			//	$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_check_btn').removeClass('active');
			//}

		//	return false;
		//});
		//샵 퀵메뉴 > SMART 탭 > 필터 조건 추가/삭제 끝 180814 수정

		$(document).on('click', '.hand_footer_gnb_wrap .red_border_tab li:nth-child(3) a', function(){//SMART 탭 클릭하면 상품 갯수 카운팅 애니메이션 시작 180719 수정
			jQuery({someValue: $('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_top .filter_num').text()*1}).animate({someValue: $("#nextSmartTotalCount").val()}, {
				duration: 1000,
				easing:'swing', // can be anything
				step: function() { // called on every step
					// Update the element's text with rounded-up value:
					$('.hand_footer_gnb_wrap .shop_cont .smart_wrap .smart_top .filter_num').text(Math.floor(this.someValue));
				}, complete: function() {$("#smartTotalCount").text($("#nextSmartTotalCount").val());}
			});
		});

		//180625 추가 시작
		$(document).on('click', '.hand_footer_gnb_wrap .hs_product_list li .chk_mark input', function(){
			if ($(this).is(':checked')) {
				$(this).parent().parent().find('.func_as').addClass('active');
			} else {
				$(this).parent().parent().find('.func_as').removeClass('active');
			}	
		});
		//180625 추가 끝

		//180813 마이하트 추가 시작
		$(document).on('click', '.hand_footer_gnb_wrap .hs_product_list .info_cont .color_chip .chip', function(){
			$chipId = $(this).attr('id');
			$activeSlide = $(this).parents('li').find('.img_slide_contain').children('.'+$chipId+'');

			if($activeSlide.hasClass('active') == false){
				$(this).parents('li').find('.img_slide_contain .img_slide_wrap').removeClass('active');
				$activeSlide.addClass('active');
				new Swiper( $activeSlide , {
					loop: true
				});
			};
		});
		//180813 마이하트 추가 끝

		//gnb > 마이페이지 180627 추가 시작
		var mypage_opts = {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 30,
//				pagination: {
//	                el: '.mpg_card_indicator1903',
//	            },
		};

		var mypage_card_swiper = new Swiper('.mypage_card_container.swiper-container', mypage_opts);
		var couponFirstFlag = true;
		var infoFirstFlag = true;
		var activityFirstFlag = true;
		
		function initMypage(){

			console.log("hi");

			mypage_card_swiper = new Swiper('.mypage_card_container.swiper-container', mypage_opts);
			
			if ($('.mypage_card_container.swiper-container').length > 0) {
				mypage_card_swiper.on('slideChange', function(){
					var $current_slide = $('.mypage_card_container.swiper-container .swiper-slide').eq(mypage_card_swiper.activeIndex);
					var $order = $current_slide.attr('class').indexOf('order'),
						$benefit = $current_slide.attr('class').indexOf('benefit'),
						$infomation = $current_slide.attr('class').indexOf('infomation'),
						$activity = $current_slide.attr('class').indexOf('activity');
					var tabSlideIdx = $current_slide.attr('data-index');
					$('.hand_footer_gnb_wrap.mypage .red_border_tab li').removeClass('on');
					$('.mpg_card_indicator1903 .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					if ($order != -1) {
						$('.hand_footer_gnb_wrap.mypage .red_border_tab li').eq(0).addClass('on');
						createBullet($('.card-type.order').length,tabSlideIdx);
					} else if ($benefit != -1) {
						$('.hand_footer_gnb_wrap.mypage .red_border_tab li').eq(1).addClass('on');
						createBullet($('.card-type.benefit').length,tabSlideIdx);
						if (couponFirstFlag) {
						    getPointInfo();
						    couponFirstFlag = getMypageVoucherList();
						}
					} else if ($infomation != -1) {
					    
						$('.hand_footer_gnb_wrap.mypage .red_border_tab li').eq(2).addClass('on');
						createBullet($('.card-type.infomation').length,tabSlideIdx);

//                            if( 'slideChartView1901' == $current_slide.attr('id') ){
//                                setTimeout(function(){eChartMypage('customerGrade1901_1','#746766',vipGraph)},300); // VVIP 등급
//                                setTimeout(function(){eChartMypage('customerGrade1901_2','#e46764',onGraph)},300); // 온라인 등급
//                            } else if( 'slideChartView1902' == $current_slide.attr('id') ){
//                                setTimeout(function(){eChartMypage('customerGrade1901_3','#e46764',onGraph)},300); // 온라인 등급
//                            }
                        
                        if (infoFirstFlag) {
                            getPointInfo();
                            getcardList();
                            getDeliveryList();
                            infoFirstFlag = false;
                        }

					} else {
						$('.hand_footer_gnb_wrap.mypage .red_border_tab li').eq(3).addClass('on');
						createBullet($('.card-type.activity').length,tabSlideIdx);
						
						/*if(activityFirstFlag){ //보류
						    getWishList();
						    activityFirstFlag = false;
						}*/
					}
	
					mypage_card_tab_focus($('.hand_footer_gnb_wrap.mypage .red_border_tab li.on a'));//180725 edit
	
					/*
					 * myPagePupupjs.tag 에서 호출로 변경
					 * 마이페이지 플로팅팝업에서 주문금액으로 동적 차트 사용을 위해 주석처리 
					 */
					//if ($current_slide.find('#chartView').length > 0) {
					//	mypage_chart();
					//}
				});
				
			}

			//180725 edit start
			if ($('.hand_footer_gnb_wrap.mypage').length > 0 && window.sessionStorage.getItem('mypage_index') == null) {
				var $mypage_tab = $('.hand_footer_gnb_wrap.mypage .red_border_tab');
				var $mypage_tab_focus = $mypage_tab.find('li:first-child a');
				$mypage_tab.append('<li class="fcs"></li>');

				mypage_card_tab_focus($mypage_tab_focus); 
            } else {
                var mypage_index = window.sessionStorage.getItem('mypage_index');
                if ( mypage_index != null ) {
                    window.sessionStorage.removeItem('mypage_index');
                    
                    if ( window.sessionStorage.getItem('mypage_main') != null ) {
                        mypage_index = '0';
                        window.sessionStorage.removeItem('mypage_main');
                    }
                    
                    mypage_card_swiper.slideTo(mypage_index);
                    
                    var $mypage_tab = $('.hand_footer_gnb_wrap.mypage .red_border_tab');
                    var $mypage_tab_focus = $mypage_tab.find('.on a');
                    
                    $mypage_tab.append('<li class="fcs"></li>');
                    mypage_card_tab_focus($mypage_tab_focus);
                }
			}

			$(document).on('click', '.hand_footer_gnb_wrap.mypage .red_border_tab li a', function(){

				console.log("hi222clcik");
				//180830 index 수정
				mypage_card_swiper.slideTo($('.mypage_card_container.swiper-container .swiper-slide').index($('.mypage_card_container.swiper-container .swiper-slide.' + $(this).attr('class') + '.start')));

				mypage_card_tab_focus($(this));

				return false;
			});
			//180725 edit end

			// mypage_chart();
		}
		

		initMypage();


		var befActiveTab = "";
		function mypage_card_tab_focus($that){//180725 add

            window.sessionStorage.setItem('mypage_index', mypage_card_swiper.activeIndex);

            if (typeof $that != 'undefined') {
                var $this = $that,
                $this_parent = $this.closest('.red_border_tab');
                $this_parent.find('.fcs').css({
                    transform: 'translateX('+ $this.position().left +'px)',
                    width: $this.outerWidth()
                });
                $(window).resize(function() {
                    $this_parent.find('.fcs').css({
                        transform: 'translateX('+ $this.position().left +'px)',
                        width: $this.outerWidth()
                    });
                });
            }
            
            if ( $this_parent.prevObject[0].attributes["tab"].textContent != befActiveTab ) {
                
            }
            befActiveTab = $this_parent.prevObject[0].attributes["tab"].textContent;
        }

		function eChartMypage(customerGradeId,colorC,value){

	        if ( document.getElementById(customerGradeId) !== null ) {
	            var data = [{
                    name:"",
                    value:value,
                    itemStyle: {
                        normal: {color: colorC}
                    }
	            }]

	            var searchChart = echarts.init(document.getElementById(customerGradeId));
	            var searchChartOption = {
	                angleAxis: {
	                    min:0,
	                    max:100,
	                    interval:10,
	                    startAngle:90,
	                    axisLine: {show: false},
	                    axisTick:{show:false},
	                    axisLabel:{show:false},
	                    splitLine:{show:false}
	            },
	            radiusAxis: {
	                    min:-12,
	                    max:0,
	              type: 'category',
	                    axisLine: {show: false}
	            },
	            polar: {radius:'100%'},
	            series: [
	                    {
	                type: 'bar',
	                        data: data,
	                coordinateSystem: 'polar',
	                        hoverAnimation: false,
	                        animationDuration:2000
	                },
	                    {
	                     type: "custom",
	                     coordinateSystem: 'polar',
	                     renderItem: function(params, api) {
	                             var values = [api.value(0), api.value(1)];
	                             var coord = api.coord(values);
	                             return {
	                                     type: 'circle',
	                                     shape: {
	                                        cx: coord[0], cy: coord[1], r: 3.5
	                             },
	                                     style: api.style()
	                             };
	                     },
	                     data: data,
	                     animationDuration:1000,
	                     animationDelay:1500
	                 }
	                ]
	            };
	            searchChart.setOption(searchChartOption);
	            window.onresize = function() {
	                searchChart.resize();
	            };
		    }
	    };

		$(document).on('click', '.mypage_card_container .grade_stage.front .s-circle a', function(){//나의 회원등급 혜택 보기
			$(this).closest('.swiper-slide').addClass('active');
			return false;
		});
		$(document).on('click', '.mypage_card_container .grade_stage.back .s-bt a', function(){//온라인 회원 등급 보기
			$(this).closest('.swiper-slide').removeClass('active');
			return false;
		});

		$(document).on('click', '.mypage_card_container .s-grade-wrapper .s-grade span', function(){//나의 회원등급 혜택 토글링 180811 추가
			$(this).siblings().removeClass('on');
			$(this).addClass('on');
			$(this).closest('.s-grade-wrapper').find('.s-guide-toggle ul').removeClass('on');
			$(this).closest('.s-grade-wrapper').find('.s-guide-toggle ul').eq($(this).index()).addClass('on');
		});
		//gnb > 마이페이지 180627 추가 끝

	});
})( jQuery );

function handleChange (el) {//타이틀 영역의 셀렉트 박스
  document
  .querySelector('.hsome_header .selected_text span')
  .innerHTML = el.value
}

window.onpageshow = function(e) {
    var now_url = document.location.href; 
    if (now_url.indexOf('mypage/mypageFloatingPopup') > -1) {
        if ( e.persisted || (window.performance && window.performance.navigation.type == 2) ) {  // 뒤로가기
            window.sessionStorage.removeItem('mypage_main');
        } else {
            window.sessionStorage.setItem('mypage_main', 'Y');
        }
    }
};

