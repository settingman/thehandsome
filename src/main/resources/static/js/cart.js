// 쇼핑백 Script
$(function() {
    var psidList = "";
    var sendMid = "";
    var countList = "";
    var brandList = "";
    var priceList = "";

    // 상품 선택 체크박스 Event
    /*
    $(".cart_item").on("click", function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const pmbutns = document.querySelectorAll('input[type="count_box"]');
        const prices = document.querySelectorAll('.price');
        const psid = document.querySelectorAll('.psid');
        const mid = document.querySelectorAll('.mid');
        const counts = document.querySelectorAll('.pquantity');
        const brands = document.querySelectorAll('.brand');

        psidList = "";
        countList = "";
        brandList = "";
        priceList = "";

        // Calculate the total price
        for(let i = 1; i < checkboxes.length; i++) {
            let total = 0;

            if($('#gl_check_'+i).is(':checked')) {
                var selectPsid = psid[i-1].innerText;
                var count = counts[i-1].innerText;
                var brand = brands[i-1].innerText;
                var price = prices[i-1].innerText;
                total += parseInt(price);

                if(count.indexOf("개") > -1) {
                    count = count.replace("개", "");
                }

                psidList += (psidList != "" ? "," : "") + selectPsid;
                countList += (countList != "" ? "," : "") + count;
                brandList += (brandList != "" ? "," : "") + brand;
                priceList += (priceList != "" ? "," : "") + price;
            }

            let origin = intToWon(total);

            document.getElementById('total').innerText = origin;
            document.getElementById('total2').innerText = origin;
        }

        sendMid = mid[1].innerText;
    });

     */

    // 가격
    document.addEventListener("DOMContentLoaded", function () {
        // Get the checkbox elements

    });

    // 선택상품 주문하기 버튼 클릭 Event
    $("#orderProduct").on("click", function() {
        if(Number(document.getElementById('total2').innerHTML) < 1) {
            alert("상품을 선택해 주세요.");
        } else {
            location.href = 'http://192.168.0.101.nip.io:8080/order/order';
        }
    });

    function wonToInt(s) {
        return parseInt(s.substr(0, s.length - 1).replaceAll(',', ''));
    }

    function intToWon(s) {
        return s.toLocaleString() + '원';
    }


    $(document).on("click", '.btn', function(){
        var prodid = $(this).prop('id').split("_");

        if(prodid[0] == 'optCancelLayer') {
            $(this).parents('.basket_info').slideUp('fast');
        }

        // 개수변경
        if(prodid[0] == 'QuantityProduct') {
            var form = $('#updateCartForm' + prodid[1]);
            var psid = form.find('input[name=psid]').val();
            //var initialCartQuantity = form.find('input[name=initialQuantity]').val();
            var newCartQuantity = form.find('input[name=pquantity]').val();
            var cartData = form.data("cart");
            var mid = $("#mid").val();

            console.log("개수변경중입니다");
            console.log(psid);
            console.log(initialCartQuantity);
            console.log(newCartQuantity);

            // 초기값과 다르면
            //if(initialCartQuantity != newCartQuantity)
            if(true) {
                $.ajax({
                    type: "GET",
                    url: "cartAjax/updateQuantity/"+ mid +"/"+ psid +"/"+ newCartQuantity,
                    async : false,
                    cache : false,
                    data: {},
                    success: function(){
                        console.log("성공!");
                        location.reload();
                    },
                    error: function(xhr,  Status, error) {
                        var msg = "sendRequest error : " + xhr.status + " ( " + error + " ) ";
                        alert(msg);
                    }
                });
            }
        }

        // 물품 하나 삭제
        if(prodid[0] == 'RemoveProduct'){
            var mid      = $("#mid").val();
            var form      = $('#updateCartForm' + prodid[1]);
            var psid      = form.find('input[name=psid]').val();
            var pquantity = form.find('input[name=pquantity]');
            var cartData  = form.data("cart");

            $.ajax({
                type:      "GET",
                url:      "/cartAjax/RemoveProduct/"+mid+"/"+psid,
                dataType: "json",
                async:    false,
                cache:    false,
                data:      {},
                success:  function(data) {
                    console.log("성공!");
                    location.reload();
                    cartCount();
                },
                error: function(xhr, Status, error) {
                    alert('sendRequest error : ' + xhr.status + " ( " + error + " ) " );
                }
            });
        }

        if(prodid[0] == 'UpdateCart') {
            var form = $('#updateCartForm' + prodid[1]);
            var productCode = form.find('input[name=productCode]');
            var initialCartQuantity = form.find('input[name=initialQuantity]');
            var cartQuantity = form.find('input[name=quantity]');
            var chgProductCode = form.find('input[name=chgProductCode]').val();
            var storeId = form.find('input[name=storeId]').val();
            var storePickupDate = form.find('input[name=storePickupDate]').val();
            var cartData = form.data("cart");

            if($(".fourpm").length > 0) {
                form.find('input[name=deliveryKind]').val("4PM");
            } else {
                form.find('input[name=deliveryKind]').val("");
            }

            if(chgProductCode == '') {
                layerAlert('사이즈를 선택해 주세요.');
                return;
            }

            if(chgProductCode != '') {
                productCode.val(chgProductCode);
            }

            form.prop('action', '/ko/shoppingbag/updateCartProduct');
            form.submit();
        }

        if(prodid[0] == 'deliveryTypeChange') {
            var checkedVal = "";
            var storeInfo = "";
            $("input[type='radio'][name='deliveryType"+prodid[1]+"']:checked").each(function() {
                if($(this).prop("checked") == true) {
                    checkedVal = $(this).val();
                    storeInfo = $(this).data("storeinfo");
                    return false;
                }
            });

            if(checkedVal == "") {
                layerAlert("선택되지 않았습니다.");
                return false;
            }

            if(checkedVal == "store") {
                //layerAlert('개발중입니다.');
                deliveryKindChange(prodid[1], "store", storeInfo);
            } else {
                deliveryKindChange(prodid[1], "", "");
            }
        }

    });

    // 수량 버튼 조작
    let quantity = $(".quantity_input").val();

    $(".plus_btn").on("click", function(){
        $(".quantity_input").val(++quantity);
    });

    $(".minus_btn").on("click", function(){
        $(".quantity_input").val(--quantity);
    });

    // Datum to Server
    const form = {
        mid:      '${item.mid}',
        psid:      '${item.psid}',
        pquantity:   '',
        psize:      '${item.psize}',
        pccolorcode:'${item.pccolorcode}'
    }

    // 장바구니 추가 버튼
/*    $(".btn bg_black save_btn").on("click", function(e) {
        e.preventDefault();
        form.pquantity = $(".pquantity").val();

        console.log("eeeeeeee");
        $.ajax({
            url: '/cart/update',
            type: 'GET',
            data: form,
            success: function(result){
                alert("변경되었습니다.")
            }
        })
    });*/

})