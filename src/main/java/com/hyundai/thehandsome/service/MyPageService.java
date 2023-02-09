package com.hyundai.thehandsome.service;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.mapper.MyPageMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


/**
 * @since   : 2023. 2. 7.
 * @FileName: MyPageService.java
 * @author  : 박성환
 * @설명    : 마이페이지 로직을 위한 서비스

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      메일 시스템, 임시 비밀번호 전송 및 업데이트
 * </pre>
 */


@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class MyPageService {

	private final MyPageMapper mypageMapper;

	public String ChangeWish(String mId, String productCode) {

		String pId = mypageMapper.findWish(mId, productCode);

		if (pId == null) {
			
			Date nowDate = new Date();					
	        
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd"); 
	   
			String strNowDate = simpleDateFormat.format(nowDate); 
			
			
			mypageMapper.insertWishlist(mId, productCode,strNowDate);
			return "insert";
		} else {
			mypageMapper.deleteWishlist(mId, productCode);
			return "delete";
		}

	}
	
	
	
	
	
	
	
}
