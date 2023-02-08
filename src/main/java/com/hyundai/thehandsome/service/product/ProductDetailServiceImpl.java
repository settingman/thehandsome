package com.hyundai.thehandsome.service.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;
import com.hyundai.thehandsome.mapper.ProductListDAO;
import com.hyundai.thehandsome.mapper.product.ProductDetailDAO;
import com.hyundai.thehandsome.service.ProductListServiceImpl;

import lombok.extern.log4j.Log4j2;

/**
 * 
 * ProductDetailService.java
 * 
 * @author 박세영
 * @since 2023. 2. 8.
 * 
 *        <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 8.  박세영      최초 생성
 *        </pre>
 */
@Service
@Log4j2
public class ProductDetailServiceImpl implements ProductDetailService {

	@Autowired
	private ProductDetailDAO detailDAO;

	@Override
	public List<ProductStockVO> getStock(String PCID) {
		List<ProductStockVO> stockList = null;
		try {
			stockList = detailDAO.getStock(PCID);
		} catch (Exception e) {
			log.info(e.getMessage());
		}
		return stockList;
	}

}
