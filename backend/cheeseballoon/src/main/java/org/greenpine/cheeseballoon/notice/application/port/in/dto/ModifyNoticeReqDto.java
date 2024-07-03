package org.greenpine.cheeseballoon.notice.application.port.in.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModifyNoticeReqDto {
    Long noticeId;
    String content;
    String title;
    String thumbnail;
}
