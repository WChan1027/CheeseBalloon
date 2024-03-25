package org.greenpine.cheeseballoon.ranking.application.port.in.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FindRankingReqDto {

    int limit;
    int offset;
    int startDate;
    char platform;

}
