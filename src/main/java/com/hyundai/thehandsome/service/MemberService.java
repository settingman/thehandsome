package com.hyundai.thehandsome.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.security.dto.SecurityMember;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @Date : 2023. 1. 31.
 * @FileName: MemberService.java
 * @작성자 : 박성환
 * @설명 : 회원서비스 정의
 */

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class MemberService implements UserDetailsService {

	private final MemberMapper memberMapper;

	// 회원 저장
	public Member saveMember(Member member) {
		validateDuplicateMember(member);
		memberMapper.save(member);

		return memberMapper.findById(member.getMId());
	}

	// 회원가입 중복확인
	private void validateDuplicateMember(Member member) {
		Member findMember = memberMapper.findById(member.getMId());
		if (findMember != null) {
			throw new IllegalStateException("이미 가입된 회원입니다.");
		}
	}

	// Security User 생성
	@Override
	public UserDetails loadUserByUsername(String mId) throws UsernameNotFoundException {
		Member member = memberMapper.findById(mId);
		log.info("userdetails");

		if (member == null) {
			log.info("No user");
			throw new UsernameNotFoundException(mId);

		}
		log.info("-------------------");
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority("ROLE_" + member.getMRole()));

		log.info(member.getMPassword());
		SecurityMember securityMember = new SecurityMember(member.getMId(), member.getMPassword(), authorities);
		log.info(securityMember.toString());

		securityMember.setMName(member.getMName());

		log.info(securityMember.toString());

		return securityMember;

	}

}