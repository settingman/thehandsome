package com.hyundai.thehandsome.service.product;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.mapper.product.ProductListTest;

import lombok.extern.log4j.Log4j2;

/**
 * ProductListServiceTest
 * 
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 *          <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.03  	박세영       최초 생성, getPListWithCategoryTest() 추가
 * 2023.02.10  	박세영       getCategory() 추가
 *          </pre>
 */

@SpringBootTest
@Log4j2
public class ProductListServiceTest {
	@Autowired
	private ProductListService pService;
	
	@Disabled
	void getPListWithCategoryTest() {
		List<CatePListVO> list = pService.getPListWithCategory("we052", null);
//		List<CatePListVO> list = pService.getPListWithCategory("we052", "");
//		List<CatePListVO> list = pService.getPListWithCategory("we052", "br01");
//		List<CatePListVO> list = pService.getPListWithCategory("we052", "br35");
		for (CatePListVO item : list) {
			log.info(item);
		}
	}
	
	@Test
	void getCategory() {
		//대분류에 따른 중분류
		List<String> list = pService.getCategory("we101", 12);
		//중분류에 따른 소분류
//		List<String> list = pService.getCategory("we101", 23); 
		log.info(list);
	}
}
