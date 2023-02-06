package com.hyundai.thehandsome.service.product;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.service.ProductListService;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class ProductDetailServiceTest {
	@Autowired
	private ProductListService pService;

	@Disabled
	void getProductDetail() {
		ProductDetailVO item = pService.getProductDetail("CS2D1KTO002WLV_BK");
		log.info(item);
	}

	@Test
	void getProductImg() {
		List<String> item = pService.getProductImg("CS2D1KTO002WLV_BK");
		log.info(item);
	}
}
