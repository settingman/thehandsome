package com.hyundai.thehandsome.domain.cart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @filename Cart
 * @author 최태승 
 * @since 2023.02.06
 * 장바구니 DTO
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.06  	최태승        최초 생성 
 * </pre>
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	private String mid;
	private String psid;
	private Integer pQuantity;
}




