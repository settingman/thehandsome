package com.hyundai.thehandsome.mapper.product;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ColorVO;
import com.hyundai.thehandsome.domain.Criteria;

import lombok.extern.log4j.Log4j2;

/**
 * ProductListTest
 * 
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 *          <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        최초 생성, getListTest() 추가
 * 2023.02.02  	박세영        getPListWithCategoryTest() 추가
 * 2023.02.03  	박세영        getProductColorTest() 추가
 * 2023.02.10  	박세영        카테고리() 추가
 *          </pre>
 */

@SpringBootTest
@Log4j2
public class ProductListTest {
	@Autowired
	private ProductListDAO pListDAO;

	@Test
	void getPListWithCategoryTest() {
		Criteria cri = new Criteria();

		List<CatePListVO> list = pListDAO.getPListWithCategory(cri, "we", "05", "", 0);
//		List<CatePListVO> list = pListDAO.getPListWithCategory(cri, "we", "05", "2", 0);
//		List<CatePListVO> list = pListDAO.getPListWithCategory(cri, "we", "05", "2", 3);
		for (CatePListVO item : list) {
			log.info(item);
		}
	}
	
	@Disabled
	void getProductColorTest() {
		List<ColorVO> list= pListDAO.getProductColor("TG2C7TJM002W29");
		for (ColorVO color : list){
			log.info(color);
		}
	}
	
	@Disabled
	void getCategory12() {
		List<String> list = pListDAO.getCategory12("we");
		log.info(list);
	}
	
	@Disabled
	void getCategory23() {
		List<String> list = pListDAO.getCategory23("we", "10");
		log.info(list);
	}
	
	@Disabled
	void isLiked() {
		//대분류에 따른 중분류
//		Boolean isLiked = pListDAO.isLiked("abcd@naver.com", "SY2D0KTO604W_PE"); //true
		Boolean isLiked = pListDAO.isLiked("abcd@naver.com", "SY2D0KTO604W_BL"); //false
		log.info(isLiked);
	}
}
