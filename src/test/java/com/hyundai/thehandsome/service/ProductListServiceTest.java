package com.hyundai.thehandsome.service;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.mapper.ProductListTest;
import com.hyundai.thehandsome.vo.product.CatePListVO;

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
 * 2023.02.3  	박세영       최초 생성, getPListWithCategoryTest() 추가
 *          </pre>
 */

@SpringBootTest
@Log4j2
public class ProductListServiceTest {
	@Autowired
	private ProductListService pService;
	
	@Test
	void getPListWithCategoryTest() {
		List<CatePListVO> list = pService.getPListWithCategory("we052");
		for (CatePListVO item : list) {
			log.info(item);
		}
	}

}
