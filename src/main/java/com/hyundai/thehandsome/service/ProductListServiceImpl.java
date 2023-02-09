package com.hyundai.thehandsome.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.domain.mypage.WishList;
import com.hyundai.thehandsome.mapper.product.ProductListDAO;

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
 * 2023.02.03  	박세영        getProductDetail() 추가
 * 2023.02.03  	박세영        getProductImg() 추가
 *          </pre>
 */

@Service
@Log4j2
public class ProductListServiceImpl implements ProductListService {
	@Autowired
	private ProductListDAO plistDAO;

	@Override
	public List<CatePListVO> getPListWithCategory(String categoryCode) {
		try {
//			categoryCode = String.format("%-5d", categoryCode);
			String depth1="";
			String depth2="";
			String depth3="";
			depth1 = categoryCode.substring(0, 2);
			depth2 = categoryCode.substring(2, 4);
			depth3 = categoryCode.substring(4, 5);
			log.info(depth1, depth2, depth3);
			
			List<CatePListVO> list = plistDAO.getPListWithCategory(depth1, depth2, depth3);
			for (CatePListVO item : list) {
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
	public ProductDetailVO getProductDetail(String PCID) {
		try {
			ProductDetailVO list = plistDAO.getProductDetail(PCID);
			list.setCOLORLIST(plistDAO.getProductColor(PCID.split("_")[0]));
			log.info(list);

			return list;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}

	@Override
	public List<String> getProductImg(String PCID) {
		try {
			List<String> list = plistDAO.getProductImg(PCID);
			log.info(list);

			return list;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}

	@Override
	public List<CatePListVO> getPListWithLikes(List<WishList> wishList) {

		List<String> pIdList = new ArrayList<>();

		for (WishList Wish : wishList) {
			pIdList.add(Wish.productCode.split("_")[0]);
		}

		try {
			List<CatePListVO> list = plistDAO.getPListWithLikes(pIdList);
			for (CatePListVO item : list) {
				item.setColorList(plistDAO.getProductColor(item.getPid()));
				log.info(item);
			}
			return list;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}
}
