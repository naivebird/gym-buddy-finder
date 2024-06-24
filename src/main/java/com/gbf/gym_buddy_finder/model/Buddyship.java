package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

enum Status {
    PENDING, ACCEPTED, REJECTED, UNFRIENDED
}

@Setter
@Entity
public class Buddyship {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private UserAccount userAccount;

    @ManyToOne
    @JoinColumn(name="buddy_id", nullable = false)
    private UserAccount buddyAccount;


    @Getter
    private Status status;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
