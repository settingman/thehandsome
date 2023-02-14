package com.hyundai.thehandsome.mapper;

package com.hyundai.thehandsome.mapper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.hyundai.thehandsome.domain.order.OrderRequest;

/**
 * @filename OrderMapperTest
 * @author 최태승 
 * @since 2023.02.12
 * OrderMapper 테스트 파일
 * JUnit4 사용
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.12  	최태승        최초 생성 
 * </pre>
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class OrderMapperTest {
	
	@Autowired
	private OrderMapper orderMapper;
	
	private OrderRequest request;
	
	@Before
	public void setUp() {
		request = new OrderRequest();
		request.setMid("testuser");
		request.setTotalPrice(20000);
		request.setPaymentType("card");
	}
	
	@Test
	public void saveTest() {
		int result = orderMapper.save(request);
		assertEquals(1, result);
		assertNotNull(request.getOid());
	}
	
	@Test
	public void saveItemTest() {
		request.setPsid("PS00001");
		request.setPquantity(0);
		int result = orderMapper.saveItem(request);
		assertEquals(1, result);
		assertNotNull(request.getOid());
	}
	
	@Test
	public void savePaymentTest() {
		int result = orderMapper.savePayment(request);
		assertEquals(1, result);
	}
	
	@Test
	public void findOidTest() {
		String uuid = "d34f6bc3-b9fc-42c8-bbcb-2e857e1b46e7";
		int count = orderMapper.findOid(uuid);
		assertEquals(1, count);
	}

}
