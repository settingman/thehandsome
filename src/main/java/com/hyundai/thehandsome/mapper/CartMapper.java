package com.hyundai.thehandsome.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.Vo.UpdateCartCountReq;

/**
 * @filename CartMapper
 * @author 최태승 
 * @since 2023.02.08
 * Mybatis 매핑 XML에 기재된 SQL을 호출하기 위한 인터페이스
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.08  	최태승        최초 생성
 * 2023.02.11	최태승		상품 수량 업데이트
 * </pre>
 */

@Mapper
public interface CartMapper {
	
	// 장바구니에 있는 상품 view에 출력하기
	public List<CartVO> selectList(String mid);
	
	// 장바구니에 상품 넣기
	public void insert(CartVO cart);
	
	// 장바구니 내 모든 상품 삭제
	public void deleteAll(CartVO cart);
	
	// 장바구니 내 선택한 상품 삭제
	public void delete(@Param("mid") String mid, @Param("psid") String psid); 
	
	// 장바구니 업데이트(수량, 사이즈, 색깔)
	public void update(@Param("mid") String mid, 
					   @Param("psid") String psid, 
					   @Param("pquantity") int pquantity,
					   @Param("psize") String psize,
					   @Param("pccolorcode") String pccolorcode);
	
	// 장바구니 내 상품 중복 확인
	public int checkCart(@Param("mid") String mid, @Param("psid") String psid); 
	
	// 상품 재고 확인
	public int checkStock(@Param("mid") String mid, @Param("psid") String psid); 
	
	// 상품 수량 업데이트
	@Update("update CART set PQUANTITY=#{count} where MID=#{mid} and PSID = #{psId}")
	public void updateCartCount(UpdateCartCountReq updateCartCountReq);

	// 상품 수량 업데이트에 필요한 정보 가져오기
	@Select("select PQUANTITY from CART where MID=#{mid} and PSID = #{psId}")
	public int findByMidPsId(@Param("mid")String mid, @Param("psId") String psId);
	
	
	
}