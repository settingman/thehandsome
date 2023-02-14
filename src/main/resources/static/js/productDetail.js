console.log("TEST");
/**
 *
 * ProductDetail.js
 * @author 박세영
 * @since 2023. 2. 8.
 *
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박세영      최초 생성, getStock 추가
 * </pre>
 */

/*사이즈 버튼 추가 ajax*/
function getStock(PCID) {
  $.getJSON("http://localhost:8080/info/stock/" + PCID, function (data) {
    let sizeButton = "";
    $(data).each(function () {
      sizeButton += `
				<span class="size">
                  <button type="button" class="btn" onclick="sizeBtnClick(this)" data-value="${this.psize}">${this.psize}</button>
                </span>
				`;
    });
    $("#size_btn_area").html(sizeButton);
  });
}

function getImage(PCID, name) {
  $.getJSON("http://localhost:8080/info/imgList/" + PCID, function (data) {
    let imgList ="";
    console.log(data);
    $(data).each(function(){
	console.log(name);
      imgList += `
      <li class="swiper-slide" style="width: 100%;">
                    <div
                      class="slide-inner"
                      style="
                        background-image: url('${this}');
                        transform: translate3d(0px, 0px, 0px);
                      "></div>
                    <div style="display: none">
                      <img
                        src="${this}"
                        onerror="fnProductNoImage(this, 'W01')" />
                    </div>
                    <a href="#">
                      <img
                        src="${this}/dims/resize/750x1131"
                        onerror="this.src='http://www.thehandsome.com/_ui/handsomemobile/images/common/no_img.jpg'"
                        alt="${name}" />
                    </a>
                  </li>
      `

    });

    $("#prodImages").html(imgList);
  });
}

/* 장바구니 연동 - 최태승 */
function Add_Cart(){
	console.log("장바구니에 추가 완료")
	var psid = $('#psid').text();
	console.log("psid : "+psid)
   $.ajax({
            url: '/cart/cartProduct/'+psid,
            type: 'GET',
            success: function(result){
                console.log("result : "+ result);
                location.href = "/cart";
            }
        })   
} 



/* 장바구니 연동 - 최태승 */
/*
$("#insertProduct").on("click", function() {
	var psid = $('#psid').text();
	console.log("psid : "+psid)
   $.ajax({
            url: '/cart/cartProduct/'+psid,
            type: 'GET',
            data: {
				mid : 'dev',
				psi : psid,
				pQuantity : 1
			},
            success: function(result){
				console.log("쇼핑백 담기 = " + result)
                alert("변경되었습니다.")
                location.href = "http://localhost:8080/cart";
            }, error:function(result) {
				alert('문제 발생');
			}
		});
});*/



/* $(".hs_btm_btn black trigger cart").on("click", function(e) {
        e.preventDefault();
        form.pquantity = $(".pquantity").val();
        form.psid = $(".psid").val();
        form.mid = $(".mid").val();

        console.log("장바구니로 상품 보내기");
        
        $.ajax({
            url: '/cart/insert',
            type: 'GET',
            data: form,
            success: function(result){
                alert("변경되었습니다.")
            }
        })
    });*/


