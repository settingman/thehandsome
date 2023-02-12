package com.hyundai.thehandsome.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.hyundai.thehandsome.domain.event.Event;

/**
 * @filename EventMapper
 * @author 최태승 
 * @since 2023.02.11
 * 쿠폰 이벤트 처리
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.11  	최태승        최초 생성 
 * </pre>
 */
@Mapper
public interface EventMapper {
	Event findByName(String eCouponName);
}
