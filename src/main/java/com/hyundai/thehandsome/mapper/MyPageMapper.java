package com.hyundai.thehandsome.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hyundai.thehandsome.domain.mypage.Voucher;
import com.hyundai.thehandsome.domain.mypage.WishList;


/**
 * @since   : 2023. 2. 8.
 * @FileName: MyPageMapper.java
 * @author  : 박성환
 * @설명    : 마이페이지 연계 Mapper

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 8.     박성환      최초생성
 * 2023. 2. 9.     박성환      위시리스트 기능 추가
 * </pre>
 */
@Mapper
public interface MyPageMapper {

	void insertWishlist(@Param("mId") String mId, @Param("productCode") String productCode,@Param("sysdate") String sysdate);

	void deleteWishlist(@Param("mId") String mId, @Param("productCode") String productCode);

	List<WishList> findWishlist(@Param("mId") String mId);
	
	String findWish(@Param("mId") String mId, @Param("productCode") String productCode);
	
	List<Voucher> findVoucher(@Param("mId") String mId,@Param("CPSTATUS") String CPSTATUS);

}
