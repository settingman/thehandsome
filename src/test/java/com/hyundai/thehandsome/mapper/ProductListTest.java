package com.hyundai.thehandsome.mapper;

import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ColorVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.mapper.ProductListDAO;

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
 * 2023.02.03  	박세영        getProductColorTest() 추가
 *          </pre>
 */

@SpringBootTest
@Log4j2
public class ProductListTest {
	@Autowired
	private ProductListDAO pListDAO;

	@Disabled
	void getListTest() {
		List<ListVO> list = pListDAO.getProductList();
		for (ListVO listVO : list) {
			System.out.println(listVO);
		}
	}

	@Disabled
	void getPListWithCategoryTest() {
//		List<CatePListVO> list = pListDAO.getPListWithCategory("we", "", "");
//		List<CatePListVO> list = pListDAO.getPListWithCategory("we", "05", "");
		List<CatePListVO> list = pListDAO.getPListWithCategory("we", "05", "2");
		for (CatePListVO item : list) {
			log.info(item);
		}
	}
	
	@Test
	void getProductColorTest() {
		List<ColorVO> list= pListDAO.getProductColor("TG2C7TJM002W29");
		for (ColorVO color : list){
			log.info(color);
		}
	}
}
