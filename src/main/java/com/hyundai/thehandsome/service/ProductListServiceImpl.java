package com.hyundai.thehandsome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.mapper.ProductListDAO;

import lombok.extern.log4j.Log4j2;

/**
 * ProductListServiceImpl
 * 
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 *          <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        최초 생성, getListTest() 추가
 *          </pre>
 */

@Service
@Log4j2
public class ProductListServiceImpl implements ProductListService {
	@Autowired
	private ProductListDAO plistDAO;

	@Override
	public List<ListVO> getProductList() {
		try {
			return plistDAO.getProductList();
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}

	@Override
	public List<CatePListVO> getPListWithCategory(String categoryCode) {
		try {
			List<CatePListVO> list = plistDAO.getPListWithCategory(categoryCode.substring(0, 2), categoryCode.substring(2, 4), categoryCode.substring(4, 5));
			for(CatePListVO item : list) {
				item.setColorList(plistDAO.getProductColor(item.getPid()));
				log.info(item);
			}
			return list;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}

	@Override
	public String wishList(String mId, String productCode) {
		
		String pId = plistDAO.findWishlist(mId, productCode);
		
		if(pId == null) {
			plistDAO.insertWishlist(mId, productCode);
			return "insert";
		}else {
			plistDAO.insertWishlist(mId, productCode);
			return "delete";
		}
		
	
	}
}
