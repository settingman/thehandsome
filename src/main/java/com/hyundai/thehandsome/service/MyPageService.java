package com.hyundai.thehandsome.service;

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
			mypageMapper.insertWishlist(mId, productCode);
			return "insert";
		} else {
			mypageMapper.deleteWishlist(mId, productCode);
			return "delete";
		}

	}
	
	
	
	
	
	
	
}
