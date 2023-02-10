package com.hyundai.thehandsome.Vo;

import java.util.List;

import lombok.Data;

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
	private String psize; // 사이즈
	private String pcolorname; // 색상명
	private String pcchipimg;
	private String sized;
	private String pcid;
	
	private List<String> sizeList;
	
}