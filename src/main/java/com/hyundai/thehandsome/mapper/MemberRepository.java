package com.hyundai.thehandsome.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.Vo.MemberVo;

@Mapper
public interface MemberRepository {
	List<MemberVo> getAllMember();
}
