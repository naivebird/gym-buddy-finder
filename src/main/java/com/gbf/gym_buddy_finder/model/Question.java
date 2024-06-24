package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Setter
@Entity
public class Question {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;

    @OneToMany(mappedBy = "question")
    private List<Choice> choices;

    @OneToMany(mappedBy = "question")
    private List<UserPreference> preferences;

}
