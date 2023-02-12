package com.hyundai.thehandsome.Vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @filename ProductVOforCart
 * @author 최태승 
 * @since 2023.02.11
 * 카트에 필요한 상품 vo
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
public class ProductVOforCart {
	
		   private String bname; // 브랜드명
		   private String pname; // 물품명	      
		   private String pccolorcode; // 물품색테이블 색상
		   private String pcimg1; // 물품색테이블 이미지 1개
		   private int pcprice; // 물품색테이블 판매가격	      
		   private String psize; // 물품재고테이블 사이즈
		
}