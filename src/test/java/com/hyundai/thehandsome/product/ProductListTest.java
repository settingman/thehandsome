package com.hyundai.thehandsome.product;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.mapper.ProductListDAO;

/**
 * ProductListTest
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        최초 생성, getListTest() 추가
 * </pre>
 */

@SpringBootTest
public class ProductListTest {
	@Autowired
	private ProductListDAO pListDAO;

	@Test
	void getListTest() {
		List<ListVO> list = pListDAO.getProductList();
		for (ListVO listVO : list) {
			System.out.println(listVO);
		}
	}
}
