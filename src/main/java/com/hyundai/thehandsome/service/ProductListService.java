package com.hyundai.thehandsome.service;

import java.util.List;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ListVO;

/**
 * ProductListService
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        최초 생성, getListTest() 추가
 * </pre>
 */

public interface ProductListService {
	List<ListVO> getProductList();
	List<CatePListVO> getPListWithCategory(String categoryCode);
	String wishList(String mId, String productCode);
}
