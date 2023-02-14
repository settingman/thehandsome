package com.hyundai.thehandsome.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.mypage.Voucher;
import com.hyundai.thehandsome.domain.mypage.WishList;

import lombok.extern.slf4j.Slf4j;

/**
 * @since   : 2023. 2. 14.
 * @FileName: MyPageMapperTest.java
 * @author  : 박성환
 * @설명    : MyPageMapper

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 09.     박성환      최초생성
 * </pre>
 */
@Slf4j
@SpringBootTest
@Transactional
public class MyPageMapperTest {

	@Autowired
	private MyPageMapper myPageMapper;

	@Test
	public void testFindWishlist() {
		List<WishList> wishList = myPageMapper.findWishlist("abcd@naver.com");
		assertThat(wishList.size()).isNotEqualTo(0);

	}

	@Test
	public void testFindfindVoucher() {
		List<Voucher> VoucherList = myPageMapper.findVoucher("abcd@naver.com", "0");
		assertThat(VoucherList.size()).isEqualTo(0);

	}

}
