package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Entity
public class Choice {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="question_id", nullable = false)
    private Question question;

    @Getter
    private String answer;

    @OneToMany(mappedBy = "choice")
    private List<UserPreference> preferences;

}
