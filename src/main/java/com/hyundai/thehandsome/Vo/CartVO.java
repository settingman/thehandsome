package com.hyundai.thehandsome.Vo;

import java.util.List;

import lombok.Data;

/**
 * @filename CartVO
 * @author 최태승 
 * @since 2023.02.07
 * 장바구니 vo
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.07  	최태승        최초 생성
 * </pre>
 */


@Data
public class CartVO {

	private String mid; // 회원아이디
	private String psid; // 상품 재고 PK
	private int pquantity; // 상품수량

	private String bname; // 브랜드명
	private String pname; // 물품명
	private String pccolorcode; // 색상 코드
	private String pcimg1; // 이미지 1개
	private int pcprice; // 판매가격
	private int realPcPrice; // 사이트상 판매 가격
	private String psize; // 사이즈
	private String pcolorname; // 색상명
	private String pcchipimg; // 칩 이미지
	
	private String sized;
	private String pcid;
	
	private List<String> sizeList;
	
	private int index; // 인덱스

	public void convert() { // 최종 가격 처리
		this.realPcPrice = pcprice * pquantity;
	}
}