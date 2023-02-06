package com.hyundai.thehandsome.Vo.product.detail;

import java.util.List;

import com.hyundai.thehandsome.Vo.product.ColorVO;

import lombok.Data;

@Data
public class ProductDetailVO {
	private String BNAME;
	private String PNAME;
	private int PCPRICE;
	private String PNOTE;
	private List<ColorVO> COLORLIST;
}
