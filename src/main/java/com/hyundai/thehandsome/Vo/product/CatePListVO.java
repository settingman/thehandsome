package com.hyundai.thehandsome.vo.product;

import java.util.List;

import lombok.Data;

@Data
public class CatePListVO {
	private String bname;
	private String pname;
	private int pcprice;
	private String pid;
	private List<ColorVO> colorList;
}
