package com.hyundai.thehandsome.mapper.product;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;

/**
 * 
 * productDetailDAO.java
 * @author 박세영
 * @since 2023. 2. 8.
 * 
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박세영      최초 생성, getStock 추가
 * </pre>
 */
@Mapper
public interface ProductDetailDAO {
	List<ProductStockVO> getStock(String PCID);
}
