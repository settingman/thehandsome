package com.hyundai.thehandsome.mapper;


import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.domain.member.Member;

@Mapper
public interface MemberMapper {
	 Member findById(String mId);
	 
	 void save(Member member);
}
