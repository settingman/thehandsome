package com.hyundai.thehandsome.mapper;

import java.sql.Date;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

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
	
	Member findByNameBirth(@Param("mName") String mName, @Param("mBirth")  String mBirth);
	
}
