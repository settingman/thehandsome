package com.hyundai.thehandsome.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.domain.member.Member;

/**
  * @Date    : 2023. 1. 31.
  * @FileName: MemberMapper.java
  * @작성자  : 박성환
  * @설명    : DateBase Member Mapper Interface
  */

@Mapper
public interface MemberMapper {
	Member findById(String mId);

	void save(Member member);
}
