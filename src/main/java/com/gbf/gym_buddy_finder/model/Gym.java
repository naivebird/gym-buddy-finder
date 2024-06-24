package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;


@Setter
@Entity
public class Gym {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    private String name;

    @Getter
    private String phone;

    @Getter
    private String email;

    @Getter
    private String websiteUrl;

    @Getter
    private Rating rating;

    @Getter
    @Lob
    private String description;

    @Getter
    private String address;

    @Getter
    private String city;

    @Getter
    private String province;

    @Getter
    private String country;

    @Getter
    private String postCode;

    @OneToMany(mappedBy = "gym")
    private List<GymPhoto> gymPhotos;

    @OneToMany(mappedBy = "gym")
    private List<GymReview> gymReviews;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
