package com.hyundai.thehandsome.service.product;

import java.util.List;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.domain.mypage.WishList;

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
 * 2023.02.05  	박세영       getProductDetail(), getProductImg() 추가
 * 2023.02.06  	박성환       getPListWithLikes() 추가
 * </pre>
 */

public interface ProductListService {
	// 
	List<CatePListVO> getPListWithCategory(String categoryCode, String brand);
	List<CatePListVO> getPListWithLikes(List<WishList> wishList);
	
	ProductDetailVO getProductDetail(String PCID);
	List<String> getProductImg(String PCID);
}
