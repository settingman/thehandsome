package com.hyundai.thehandsome.service;

import static org.assertj.core.api.Assertions.assertThat;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberFormDto;
import com.hyundai.thehandsome.mapper.MemberMapper;

import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 3.
 * @FileName: MemberServiceTest.java
 * @author : 박성환
 * @설명 : 회원기능 테스트
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      MembeService Test Code
 *     </pre>
 */
@Slf4j
@SpringBootTest
@Transactional
public class MemberServiceTest {

	@Autowired
	MemberService memberService;

	@Autowired
	MemberMapper memberMapper;

	@Autowired
	PasswordEncoder passwordEncoder;

	public Member createMember() {
		log.info("테스트 맴버 생성");
		MemberFormDto memberFormDto = MemberFormDto.builder().mId("test2@test.com").mPassword("1234").mName("테스트")
				.mPhone("01000000000").mEmail("tset@test.com").mZipCode("08101").mAddress1("테스트서울시").mAddress2("테스트양천구")
				.mBirth(19950908).mGender(1).build();
		return Member.createMember(memberFormDto, passwordEncoder);
	}

	@Test
	@DisplayName("이메일로 아이디 찾기 테스트")
	@WithMockUser
	void findTest() {
		log.info("이메일로 아이디 찾기 테스트");
		Member member = memberMapper.findById("95parksh@naver.com");
		assertThat(member.getMId()).isEqualTo("95parksh@naver.com");
	}

	@Test
	@DisplayName("이름으로 아이디 찾기 테스트")
	@WithMockUser
	void findByNameTest() {

		Member member = memberMapper.findByNameBirth("차민수", "19991213");
		System.out.println(member.getMId());
	}

	@Test
	@DisplayName("회원가입 테스트")
	@WithMockUser
	void saveMemberTest() {

		log.info("회원가입 테스트");
		Member member = createMember();
		Member savedMember = memberService.saveMember(member);

		log.info(member.getMId());
		log.info(savedMember.getMId());

		assertThat(member.getMId()).isEqualTo(savedMember.getMId());
	}

	@Test
	@DisplayName("아이디 중복 체크 테스트")
	@WithMockUser
	void validateDuplicateMember() {

		log.info("아이디 중복 체크 테스트");

		Member member = createMember();
		memberService.validateDuplicateMember(member);

	}

	@Test
	@DisplayName("시큐리티 맴버 생성")
	@WithMockUser
	void loadUserByUsername() {

		// 디비에 저장시켜야함

		log.info("시큐리티 맴버 생성");

		Member member = createMember();
		memberService.saveMember(member);

		UserDetails SecurityMember = memberService.loadUserByUsername(member.getMId());
		log.info("____________");
		log.info(SecurityMember.getAuthorities().toString());

		assertThat(SecurityMember.getAuthorities().size()).isEqualTo(1);

	}

}
