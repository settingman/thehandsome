package com.hyundai.thehandsome.mapper;

import static org.junit.jupiter.api.Assertions.assertThrows;

import java.sql.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberRole;
import com.hyundai.thehandsome.domain.mypage.Order;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@SpringBootTest
@Transactional
public class MemberMapperTest {
	
	
	@Autowired
	MemberMapper memberMapper;
	
	
	@Autowired
	OrderMapper orderMapper;

	@Test
	public void testFindById() {
		Member member = memberMapper.findById("test.com");
	}

	@Test
	public void testSave() {
		Member member = new Member("test.com","1234","테스트","01011111111","test.com","08101","테스트주소1","테스트주소2",new Date(199912123),1,MemberRole.USER);
		
		DuplicateKeyException e = assertThrows(DuplicateKeyException.class,
		 		() -> memberMapper.save(member));//예외가 발생해야 한다.
				
	}
	
	@Test
	public void testFindB() {
		List<Order> order =orderMapper.findOrder("dev");
		log.info(order.toString());
	}
	
	

	@Test
	public void testFindByNameBirth() {
		memberMapper.findByNameBirth("테스트","950908");
	}

	@Test
	public void testFindByNameId() {
		memberMapper.findByNameId("테스트","test.com");
	}



}
