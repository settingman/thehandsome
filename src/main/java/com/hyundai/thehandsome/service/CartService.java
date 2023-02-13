package com.hyundai.thehandsome.service;

import java.util.List;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.Vo.UpdateCartCountReq;
import com.hyundai.thehandsome.domain.cart.Cart;

/**
 * @filename CartService
 * @author 최태승 
 * @since 2023.02.08
 * DB에서 장바구니 데이터를 받아와 CRUD 처리
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.08  	최태승        최초 생성
 * 2023.02.11 	최태승		장바구니 수량 업데이트  
 * </pre>
 */


public interface CartService {

	// insert
	public void cInsert(Cart cart);

	// select
	public List<CartVO> cSelectAll(String mid);

	// delete
	public void cDeleteAll(CartVO cart);

	// delete
	public void cDelete(String mid, String psid);

	// update
	public void cUpdate(CartVO cart);
	
	// 장바구니 중복 검사
	public int checkCart(Cart cart);
	
	// 재고 검사
	public int checkStock(Cart cart);
	
	// 상품 개수 업데이트
	public void updateCartCount(UpdateCartCountReq updateCartCountReq);

}