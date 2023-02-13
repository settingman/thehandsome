package com.hyundai.thehandsome.controller.mypage;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberRole;
import com.hyundai.thehandsome.domain.mypage.Voucher;
import com.hyundai.thehandsome.domain.mypage.WishList;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.mapper.MyPageMapper;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@SpringBootTest
@Transactional
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MyPageRestControllerTest {
	
	

	
	@Autowired
	private MyPageRestController myPageRestController;
	
	@Autowired
	private MyPageMapper myPageMapper;
	
	@Autowired
	private MemberMapper memberMapper;
	
	
	/*
	 * @BeforeAll void createTestMember() { Member member = new
	 * Member("test.com","1234","테스트","01011111111","test.com","08101","테스트주소1",
	 * "테스트주소2",new Date(199912123),1,MemberRole.USER);
	 * 
	 * memberMapper.save(member);; }
	 */
	
	
	@Test
	public void testAjaxVoucher() {
		
		Map<String, Object> data = new HashMap<>();
		List<Voucher> voucherList = myPageMapper.findVoucher("test.com", "N");
		
		assertThat(voucherList.size()).isEqualTo(0);
		
		
	}

	@Test
	public void testAjaxWishList() {
		
		Map<String, Object> data = new HashMap<>();

		List<WishList> wishList = myPageMapper.findWishlist("test.com");
		
		assertThat(wishList.size()).isEqualTo(0);
		
	}


}
