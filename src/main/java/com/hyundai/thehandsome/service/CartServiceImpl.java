package com.hyundai.thehandsome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.Vo.UpdateCartCountReq;
import com.hyundai.thehandsome.domain.cart.Cart;
import com.hyundai.thehandsome.mapper.CartMapper;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;


/**
 * @filename CartServiceImpl
 * @author 최태승 
 * @since 2023.02.08
 * 인터페이스와 구현체를 분리
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.08  	최태승        최초 생성
 * 2023.02.11 	최태승		장바구니 수량 업데이트 
 * </pre>
 */


@Service
@Slf4j
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartMapper cartMapper;
	
	// insert
	@Override
	public void cInsert(Cart cart) {
		if(checkCart(cart) > 0) { // 중복 상품이 담겨 있으면 수량 증가
			UpdateCartCountReq req = new UpdateCartCountReq();
			req.setMid(cart.getMid());
			req.setPsId(cart.getPsid());
			req.setCount(1);
			updateCartCount(req);
		} else {
			cartMapper.insert(cart);
		}	
	}
	
	@Override
	public List<CartVO> cSelectAll(String mid) {
		List<CartVO> cartList = cartMapper.selectList(mid);
		
	
		
		for(CartVO cart : cartList) {
			String pcid = cart.getPcid();
			if(pcid==null) {
				cartList.remove(0);
				return cartList;
			}
			

			cart.setSizeList(cartMapper.selectSizes(pcid));
			// 여기에는 파라미터로 pcid가 들어가도록 하기
			// psid를 문자열 잘라서 넣기
			
			log.info(cart.getSizeList().get(0));
			
		}
		return cartList;
	}


	// 상품 전체 삭제
	@Override
	public void cDeleteAll(CartVO cart) {
		cartMapper.deleteAll(cart);
		
	}
	
	// 개별 상품 삭제
	@Override
	public void cDelete(String mid, String psid) {
		cartMapper.delete(mid, psid);
		
	}



	@Override
	public int checkCart(Cart cart) {
		return cartMapper.checkCart(cart.getMid(), cart.getPsid());
	}

	@Override
	public int checkStock(Cart cart) {
		return cartMapper.checkStock(cart.getMid(), cart.getPsid());
	}
	
	@Override
	public void updateCartCount(UpdateCartCountReq updateCartCountReq) {
		int countNow = cartMapper.findByMidPsId(updateCartCountReq.getMid(), updateCartCountReq.getPsId());
		updateCartCountReq.convert(countNow);	
		cartMapper.updateCartCount(updateCartCountReq);
	}
	
}