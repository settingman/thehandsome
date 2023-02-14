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
 * 2023. 2. 6.     박성환      최초생성
 * 2023. 2. 7.     박성환      changeWish 추가 - 상품페이지 위시버튼
 * </pre>
 */


@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class MyPageService {

	private final MyPageMapper mypageMapper;



	// 상품 페이지 위시리스트 버튼
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
