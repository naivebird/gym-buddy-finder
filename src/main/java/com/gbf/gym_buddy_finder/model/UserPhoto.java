package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;


@Setter
@Entity
public class UserPhoto {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private UserAccount userAccount;

    @Getter
    private String url;

    @Getter
    private boolean isDeleted;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
