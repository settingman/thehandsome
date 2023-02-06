package com.hyundai.thehandsome.vo.product.detail;

import java.util.List;

import com.hyundai.thehandsome.vo.product.ColorVO;

import lombok.Data;

@Data
public class ProductDetailVO {
	private String BNAME;
	private String PNAME;
	private int PCPRICE;
	private String PNOTE;
	private List<ColorVO> COLORLIST;
}
