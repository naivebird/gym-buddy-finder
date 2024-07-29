package com.gbf.gym_buddy_finder.dto;

import lombok.Getter;

public class UserPreferenceDtoImpl implements UserPreferenceDto {
    private Long userId;
    private String question;
    private String answer;

    public UserPreferenceDtoImpl(Long userId, String question, String answer) {
        this.userId = userId;
        this.question = question;
        this.answer = answer;
    }

    @Override
    public Long getUserId() {
        return userId;
    }

    @Override
    public String getQuestion() {
        return question;
    }


    @Override
    public String getAnswer() {
        return answer;
    }

}
