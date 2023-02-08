package com.hyundai.thehandsome.service.product;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;
import com.hyundai.thehandsome.service.ProductListService;

import lombok.extern.log4j.Log4j2;
/**
 * 
 * ProductDetailServiceTest.java
 * @author 박세영
 * @since 2023. 2. 8.
 * 
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박세영      최초 생성, getProductDetail, getProductImg 추가
 * </pre>
 */
@SpringBootTest
@Log4j2
public class ProductDetailServiceTest {
	@Autowired
	private ProductListService pService;
	@Autowired
	private ProductDetailService detailService;

	@Disabled
	void getProductDetail() {
		ProductDetailVO item = pService.getProductDetail("CS2D1KTO002WLV_BK");
		log.info(item);
	}

	@Disabled
	void getProductImg() {
		List<String> item = pService.getProductImg("CS2D1KTO002WLV_BK");
		log.info(item);
	}
	
	@Test
	void getStock() {
		List<ProductStockVO> list = detailService.getStock("CS2D1KTO002WLV_BK");
		log.info(list);
	}
}
