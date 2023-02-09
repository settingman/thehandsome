package com.hyundai.thehandsome.service;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.mapper.MyPageMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
