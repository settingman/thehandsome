package com.hyundai.thehandsome.mapper;

import java.sql.Date;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hyundai.thehandsome.domain.member.Member;

/**
 * @since   : 2023. 2. 3.
 * @FileName: MemberMapper.java
 * @author  : 박성환
 * @설명    : 데이터베이스 mybatis Interface

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      DateBase Member Mapper Interface
 * </pre>
 */
@Mapper
public interface MemberMapper {
	
	Member findById(String mId);

	void save(Member member);
	
	Member findByNameBirth(@Param("mName") String mName, @Param("mBirth")  String mBirth);
	
	Member findByNameId(@Param("mName") String mName, @Param("mId")  String mId);
	
	void updatePassword(@Param("mId") String mId, @Param("encryptPassword")  String encryptPassword);
	
}
