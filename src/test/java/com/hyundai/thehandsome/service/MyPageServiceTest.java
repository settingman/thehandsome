package com.hyundai.thehandsome.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.hyundai.thehandsome.mapper.MyPageMapper;

import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 14.
 * @FileName: MyPageServiceTest.java
 * @author : 박성환
 * @설명 : MyPageService Test
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 14.     박성환      최초생성
 *     </pre>
 */
@Slf4j
@SpringBootTest
@Transactional
public class MyPageServiceTest {

	@Autowired
	MyPageMapper mypageMapper;

	@Test
	public void testChangeWish() {

		String pId = mypageMapper.findWish("abcd@naver.com", "YS2D3KCD001W46_YL");
		assertThat(pId).isEmpty();
	}

}
