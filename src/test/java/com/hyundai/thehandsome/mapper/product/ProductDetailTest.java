package com.hyundai.thehandsome.mapper.product;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;

import lombok.extern.log4j.Log4j2;
/**
 * 
 * ProductDetailTest.java
 * @author 박세영
 * @since 2023. 2. 6.
 * 
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 6.  박세영		getProductDetailTest, getProductImgTest 추가 
 * 2023. 2. 8.  박세영		getSizeTest 추가       
 * </pre>
 */
@SpringBootTest
@Log4j2
public class ProductDetailTest {
	@Autowired
	private ProductListDAO pListDAO;
	
	@Autowired
	private ProductDetailDAO detailDAO;
	
	@Test
	void getProductDetailTest() {
		ProductDetailVO info= pListDAO.getProductDetail("CS2D1KTO002WLV_BK");
		log.info(info);
	}
	
	@Test
	void getProductImgTest() {
		List<String> imgList= pListDAO.getProductImg("CS2D1KTO002WLV_BK");
		for(String src : imgList) {			
			log.info(src);
		}
	}
	
	@Test
	void getSizeTest() {
		List<ProductStockVO> stockList = detailDAO.getStock("CS2D1KTO002WLV_BK");
		for (ProductStockVO stock : stockList) {
			log.info(stock);
		}
	}
	
}
