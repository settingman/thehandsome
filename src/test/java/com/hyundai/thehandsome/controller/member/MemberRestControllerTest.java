package com.hyundai.thehandsome.controller.member;


import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberRole;
import com.hyundai.thehandsome.mapper.MemberMapper;

import lombok.extern.slf4j.Slf4j;


/**
 * @since   : 2023. 2. 14.
 * @FileName: MemberRestControllerTest.java
 * @author  : 박성환
 * @설명    : MemberReestController Test

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 10.     박성환      최초생성
 * </pre>
 */
@Slf4j
@SpringBootTest
@Transactional
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MemberRestControllerTest {
	
	
	@Autowired
	private MemberMapper memberMapper;
	
	@Autowired
	private MemberRestController memberRestController;
	
	
	
	@BeforeAll
	void createTestMember() {
		Member member = new Member("test.com","1234","테스트","01011111111","test.com","08101","테스트주소1","테스트주소2",new Date(199912123),1,MemberRole.USER);

		memberMapper.save(member);;
	}

	@Test
	public void testCheckId() {
		
		String result = memberRestController.checkId("test.com");
		assertThat(result).isEqualTo("1");
		
	}


}
