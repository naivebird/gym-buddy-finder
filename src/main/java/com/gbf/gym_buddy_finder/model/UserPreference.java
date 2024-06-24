package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Setter
@Entity
public class UserPreference {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserAccount userAccount;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    @ManyToOne
    @JoinColumn(name = "choice_id", nullable = false)
    private Choice choice;
}
