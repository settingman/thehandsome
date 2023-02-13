package com.hyundai.thehandsome.service.product;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ColorVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
import com.hyundai.thehandsome.domain.Criteria;
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
 * 2023.02.07  	박성환        getPListWithLikes 추가 (위시리스트 아이템 랜더링)
 * 2023.02.09  	박세영        getListTest 삭제, getPListWithCategory() 브랜드까지 추가
 * 2023.02.11  	박세영        getIsLiked() 추가, getPListWithCategory()에 좋아요 추가
 *          </pre>
 */

@Service
@Log4j2
public class ProductListServiceImpl implements ProductListService {
	@Autowired
	private ProductListDAO plistDAO;

//	categoryCode, brand, 유저 정보에 따라 14개 단위로 상품 리스트를 불러온다. 페이징을 포함한다.
	@Override
	public List<CatePListVO> getPListWithCategory(Criteria cri, String categoryCode, String brand, Principal principal) {
		try {
			
			// 파라미터들 null 예외 처리
			String depth1 = "";
			String depth2 = "";
			String depth3 = "";
			int bno = 0;

			if (categoryCode != null && categoryCode != "") {
				depth1 = categoryCode.substring(0, 2);
				depth2 = (categoryCode.length() ==4 ? categoryCode.substring(2, 4) : "");
				depth3 = (categoryCode.length() ==5 ? categoryCode.substring(4, 5) : "");
			}

			if (brand != null && brand != "") {
				bno = Integer.parseInt(brand);
			}
			
			String mid = (principal == null) ? "" : principal.getName();
			
			// 상품 list 불러오기
			List<CatePListVO> list = plistDAO.getPListWithCategory(cri, depth1, depth2, depth3, bno);
			for (CatePListVO item : list) {
				item.setColorList(plistDAO.getProductColor(item.getPid()));
				for(ColorVO color : item.getColorList()) {
					color.setLiked(plistDAO.isLiked(mid, color.getPCID()));
				}
				log.info(item);
			}

			return list;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw e;
		}
	}

//	PCID를 통해 각 상품의 상세 정보를 불러오는 Service
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
	
	// PCID를 통해 각 상품의 상세 이미지를 불러오는 Service
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
	
	//각 depth input에 따라 다음 카테고리 depth를 받아오는 Service
	@Override
	public List<String> getCategory(String depth1) {
		List<String> list = plistDAO.getCategory12(depth1);
		return list;
	}

	@Override
	public List<String> getCategory(String depth1, String depth2) {
		List<String> list = plistDAO.getCategory23(depth1, depth2);
		return list;
	}

	//PCID, MID를 통해 마이위시 여부를 판별하는 Service
	@Override
	public Boolean getIsLiked(String PCID, String MID) {
		MID = (MID == null) ? "" : MID;
		Boolean isLike = plistDAO.isLiked(MID, PCID);
		return isLike;
	}
}
