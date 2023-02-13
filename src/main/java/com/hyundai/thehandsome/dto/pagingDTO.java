package com.hyundai.thehandsome.dto;

import com.hyundai.thehandsome.domain.Criteria;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class pagingDTO {
	// input variables
		private Criteria cri;
		private int total;

		// derived values(유도 계산되는 값들)
		private int startPage;
		private int endPage;
		private boolean prev;
		private boolean next;

		public pagingDTO(Criteria cri, int total) {
			this.cri = cri;
			this.total = total;

			this.endPage = (int) (Math.ceil(cri.getPageNum() / 14.0)) * 14;
			this.startPage = 1;
			
			// -number : 총 페이지에 따라 수정 (n-1)
			this.startPage = this.endPage - 13;
			
			int realEnd = (int) (Math.ceil((double)total / cri.getAmount()));

			if (realEnd < this.endPage)
				this.endPage = realEnd;

			this.prev = this.startPage > 1;
			this.next = this.endPage < realEnd;
		}
}
