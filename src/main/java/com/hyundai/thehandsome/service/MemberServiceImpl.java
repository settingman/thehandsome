package com.hyundai.thehandsome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.Vo.MemberVo;
import com.hyundai.thehandsome.mapper.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public List<MemberVo> getAllMember(){
		return memberRepository.getAllMember();
	}
}