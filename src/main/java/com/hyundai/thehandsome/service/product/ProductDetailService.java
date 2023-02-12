package com.hyundai.thehandsome.service.product;

import java.util.List;

import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;

/**
 * 
 * ProductDetailService.java
 * @author 박세영
 * @since 2023. 2. 8.
 * 
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박세영      최초 생성
 * </pre>
 */
public interface ProductDetailService {
	List<ProductStockVO> getStock(String PCID); 
}
