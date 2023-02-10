package com.hyundai.thehandsome.mapper;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hyundai.thehandsome.domain.mypage.Voucher;
import com.hyundai.thehandsome.domain.mypage.WishList;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class MyPageMapperTest {

	@Autowired
	private MyPageMapper myPageMapper;


	@Test
	public void testFindWishlist() {
		List<WishList> wishList = myPageMapper.findWishlist("95parksh@naver.com");
		log.info(wishList.get(0).toString());

	}
	
	@Test
	public void testFindfindVoucher() {
		List<Voucher> VoucherList = myPageMapper.findVoucher("dev");
		log.info(VoucherList.get(0).toString());

	}


	

}
