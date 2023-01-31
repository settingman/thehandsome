package com.hyundai.thehandsome.service;



import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberFormDto;
import com.hyundai.thehandsome.mapper.MemberMapper;

import lombok.extern.slf4j.Slf4j;


/**
  * @Date    : 2023. 1. 30.
  * @FileName: MemberServiceTest.java
  * @작성자  : 박성환
  * @설명    : MembeService Test Code
  */

@Slf4j
@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    MemberService memberService;
    
    @Autowired
    MemberMapper memberMapper;

    
    @Test
    @DisplayName("아이디 찾기 테스트")
    @WithMockUser
    void findTest() {
    	System.out.println("354");
    	Member member = memberMapper.findById("test@tset.com");
    	System.out.println(member.getMId());
    }
    
    @Autowired
    PasswordEncoder passwordEncoder;

    public Member createMember() {
        MemberFormDto memberFormDto = MemberFormDto.builder()
        	    .mId("test2@test.com")
        		.mPassword ("1234")
        		.mName("테스트")
        		.mPhone("01000000000")
        		.mEmail("tset.test.com")
        		.mZipCode("08101")
        		.mAddress1("테스트서울시")
        		.mAddress2("테스트양천구")
        		.mBirth(950908)
        		.mGender(1)    
                .build();
        return Member.createMember(memberFormDto, passwordEncoder);
    } 

    @Test
    @DisplayName("회원가입 테스트")
    @WithMockUser
    void saveMemberTest() {
        Member member = createMember();
        Member savedMember = memberService.saveMember(member);
        
        log.info(member.getMId());
        log.info(savedMember.getMId());

        assertThat(member.getMId()).isEqualTo(savedMember.getMId());
    }
}
