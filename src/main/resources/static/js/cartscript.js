$(function(){

    // common :: S

    // footer
    // fix_bar가 있을때만 푸터에 클래스
    if($('.fix_bar').length > 0) {
        $('#footer').addClass('fixbar_on')
    }

    // footer 정보 show / hide
    $('#footer .toggle_btn').on('click', function(){
        $(this).toggleClass('active');
        $('#footer .toggle_cont').slideToggle();
    })

    // top btn scroll
    let scrollTop;
    let endScroll = 0;
    $(window).on('scroll', function(){
        scrollTop = $(window).scrollTop();
        if(scrollTop < endScroll) {
            // up
            $('#top_btn').addClass('up');
        } else {
            // down
            $('#top_btn').removeClass('up');
        }
        if(scrollTop === 0) {
            $('#top_btn').addClass('op');
        } else {
            $('#top_btn').removeClass('op');
        }
        endScroll = scrollTop;
    })

    //top btn click
    $('#top_btn').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    })

    // common :: E


    // cart page :: S

    // cart tab
    $('.cart_tab ul li .btn').on('click', function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        return false;
    })

    // checkbox
    $('#check_all').on('change', function(){
        let allCheck = $(this).is(':checked');
        if(allCheck){
			$('.cart_list input[type="checkbox"]:not(:checked)').click();
		}else{
			$('.cart_list input[type="checkbox"]:checked').click();
		}
        //$('.cart_list input[type="checkbox"]').prop('checked', allCheck);

        
        $('.p_cart .fix_bar .check_off').css('display', allCheck ? 'none' : 'block');
        $('.p_cart .fix_bar .check_on').css('display', allCheck ? 'block' : 'none');

    })
    $('.cart_list input[type="checkbox"]').on('change', function(){
        let itemTotal = $('.cart_list input[type="checkbox"]').length;
        let checkTotal = $('.cart_list input[type="checkbox"]:checked').length;
        let check = itemTotal === checkTotal ? true : false;
        $('#check_all').prop('checked', check);

        
        $('.p_cart .fix_bar .check_off').css('display', checkTotal > 0 ? 'none' : 'block');
        $('.p_cart .fix_bar .check_on').css('display', checkTotal > 0 ? 'block' : 'none');

    })

    // like_btn
    $('.cart_item .like_btn').on('click', function(){
        $(this).toggleClass('on');
    })
    

    // 옵션 수정 폼 show / hide
    $('.prd_opt .opt_change').on('click', function(){
        let changeForm = $(this).parents('li').find('.change_form');
        $(this).toggleClass('on');
        changeForm.slideToggle();
    })
    $('.change_form .btn_row button').on('click', function(){
        let changeForm = $(this).parents('.change_form');
        let optChange = $(this).parents('li').find('.opt_change');
        changeForm.slideToggle();
        optChange.toggleClass('on');
    })

    // color chip
    $('.color_list .color_chip input[type="radio"]').on('change', function(){
        let colorName = $(this).parents('.color_list_box').find('.color_name');
        colorName.text($(this).val());
    })

    // opt count
    $('.count_box button').on('click', function(){
        let btnClass = $(this).attr('class');
        let input = $(this).siblings('input');
        let inputVal = input.val();
    })

    // cart page :: E
    
    // 추가
    
    let total_price = 0;
$('.cart_item').each(function() {
  let price = parseInt($(this).find('.price').text().replace(',', ''));
  let quantity = parseInt($(this).find('.count').val());
  if (!isNaN(price) && !isNaN(quantity)) {
    total_price += price * quantity;
  }
});
//$('.total_price').text(numberWithCommas(total_price));
})

// checkbox
$('#check_all').on('change', function(){
    let allCheck = $(this).is(':checked');
    $('.cart_list input[type="checkbox"]').prop('checked', allCheck);

    let total = 0;
    $('.cart_list input[type="checkbox"]:checked').each(function() {
        let $item = $(this).closest('.cart_item');
        let price = parseFloat($item.find('.price_num').text().replace(',', ''));
        if (!isNaN(price)) {
            total += price;
        }
    });
    $('.total_num').text(total.toLocaleString());

    $('.p_cart .fix_bar .check_off').css('display', allCheck ? 'none' : 'block');
    $('.p_cart .fix_bar .check_on').css('display', allCheck ? 'block' : 'none');
})
$('.cart_list input[type="checkbox"]').on('change', function(){
    let itemTotal = $('.cart_list input[type="checkbox"]').length;
    let checkTotal = $('.cart_list input[type="checkbox"]:checked').length;
    let check = itemTotal === checkTotal ? true : false;
    $('#check_all').prop('checked', check);

    let total = 0;
    $('.cart_list input[type="checkbox"]:checked').each(function() {
        let $item = $(this).closest('.cart_item');
        let price = parseFloat($item.find('.price_num').text().replace(',', ''));
        if (!isNaN(price)) {
            total += price;
        }
    });
    $('.total_num').text(total.toLocaleString());

    $('.p_cart .fix_bar .check_off').css('display', checkTotal > 0 ? 'none' : 'block');
    $('.p_cart .fix_bar .check_on').css('display', checkTotal > 0 ? 'block' : 'none');
})

