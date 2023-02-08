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
	$.getJSON("http://localhost:8080/info/stock/" + PCID, function(data) {
		let sizeButton = "";
		$(data).each(
			function() {
				sizeButton += `
				<span class="size">
                  <button type="button" class="btn" onclick="sizeBtnClick(this)" data-value="${this.psize}">${this.psize}</button>
                </span>
				`
			}
		)
		$("#size_btn_area").html(sizeButton);
	})
}
