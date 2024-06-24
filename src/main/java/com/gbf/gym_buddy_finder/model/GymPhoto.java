package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Setter
@Entity
public class GymPhoto {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="gym_id", nullable = false)
    private Gym gym;

    @Getter
    private String url;

}
