package com.hyundai.thehandsome.domain.mypage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @since   : 2023. 2. 8.
 * @FileName: WishList.java
 * @author  : 박성환
 * @설명    : 마이페이지 _ 위시리스트 객체

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 6.     박성환      최초생성
 * </pre>
 */
@Getter
@Setter
@ToString
public class WishList {

	public String productCode;
	public String productImages;

	public WishList(String productCode, String productImages) {
		this.productCode = productCode;
		this.productImages = productImages;
	}

}
