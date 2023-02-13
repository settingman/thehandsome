package com.hyundai.thehandsome.service;


import com.hyundai.thehandsome.domain.order.OrderRequest;
import com.hyundai.thehandsome.mapper.OrderMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.UUID;

/**
 * @filename OrderService
 * @author 최태승 
 * @since 2023.02.05
 * DB에 주문 정보 저장
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.08  	최태승        최초 생성
 * 2023.02.11	최태승		uuid 추가
 * </pre>
 */

@Slf4j
@RequiredArgsConstructor
@Service
public class OrderService {

	private final OrderMapper orderMapper;

	// 회원 저장
	@Transactional(propagation = Propagation.REQUIRED)
	public synchronized int saveOrder(OrderRequest request) {
	//	int save = orderMapper.savePayment(request); // 무결성제어
	//	int save2 = orderMapper.saveItem(request);


		String uuid = UUID.randomUUID().toString();

		request.setOid(uuid);


		int save3 = orderMapper.save(request);

		if(  save3 == 1){
			return 1;
		}else{
			return 0;
		}
	}




}