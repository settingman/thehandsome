package com.hyundai.thehandsome.Vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @filename OrderItemVO
 * @author 최태승 
 * @since 2023.02.11
 * 주문 상품 vo
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.05	최태승		최초 생성
 * </pre>
 */

@Data
@AllArgsConstructor
@NoArgsConstructor

public class OrderItemVO {
	
		private String psid; // 제품 재고 id
		private String oid; // 주문 번호
		private int oicount; // 상품 개수
		private int oitotalprice; // 상품에 대한 가격
		
		private ProductVOforCart productDetail; // 상품 정보
	
}

