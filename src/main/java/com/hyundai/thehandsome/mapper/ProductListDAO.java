package com.hyundai.thehandsome.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ColorVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;

/**
 * ProductListDAO
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        최초 생성, getProductList() 추가
 * 2023.02.02  	박세영        getPListWithCategory(), getProductColor() 추가
 * 2023.02.04  	박세영        getProductDetail() 추가
 * </pre>
 */

@Mapper
public interface ProductListDAO {
	// Product List 불러오기
	List<ListVO> getProductList();
	
	List<CatePListVO> getPListWithCategory(String depth1name, String depth2name, String depth3name);
	
	List<ColorVO> getProductColor(String PID);
	
	ProductDetailVO getProductDetail(String PCID);
}
