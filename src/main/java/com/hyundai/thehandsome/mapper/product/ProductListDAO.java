package com.hyundai.thehandsome.mapper.product;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ColorVO;
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
 * 2023. 2. 6.  박세영		getProductImg() 추가
 * 2023. 2.10.  박세영		getCategory12(), getCategory23() 추가
 * </pre>
 */

@Mapper
public interface ProductListDAO {
	// Product List 불러오기
	List<CatePListVO> getPListWithCategory(String depth1name, 
										   String depth2name, 
										   String depth3name,
										   int brand);
	// 각 product에 따른 colorVO 호출 
	List<ColorVO> getProductColor(String PID);

	// 좋아요 리스트
	List<CatePListVO> getPListWithLikes(List<String> pidList);
	// 좋아요 여부
	Boolean isLiked(String mid, String pcid);
	
	// 상세정보 불러오기
	ProductDetailVO getProductDetail(String PCID);
	
	// 상세 상품 이미지 리스트 불러오기
	List<String> getProductImg(String PCID);
	
	// 상품 카테고리 헤더 
	List<String> getCategory12 (String depth1name);
	List<String> getCategory23 (String depth1name, String depth2name);
}
