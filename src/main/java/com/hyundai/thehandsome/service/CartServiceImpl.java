package com.hyundai.thehandsome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.mapper.CartMapper;

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
 * </pre>
 */


@Service
@Slf4j
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartMapper cartMapper;

	@Override
	public void cInsert(CartVO cart) {
		cartMapper.insert(cart);		
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
			
		}
		return cartList;
	}

	@Override
	public void cDeleteAll(CartVO cart) {
		cartMapper.deleteAll(cart);
		
	}

	@Override
	public void cDelete(String mid, String psid) {
		cartMapper.delete(mid, psid);
		
	}

	@Override
	public void cUpdate(CartVO cart) {
        cartMapper.update(cart.getMid(), cart.getPsid(), cart.getPquantity(),
        				  cart.getPsize(), cart.getPccolorcode());	
	}

	@Override
	public int checkCart(CartVO cart) {
		return cartMapper.checkCart(cart.getMid(), cart.getPsid());
	}

	@Override
	public int checkStock(CartVO cart) {
		return cartMapper.checkStock(cart.getMid(), cart.getPsid());
	}
}