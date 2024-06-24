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
public class Subscription {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserAccount userAccount;

    @ManyToOne
    @JoinColumn(name = "plan_id", nullable = false)
    private SubscriptionPlan subscriptionPlan;

    @Getter
    private LocalDateTime startAt;

    @Getter
    private LocalDateTime endAt;

    @Getter
    private boolean isActive;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "subscription")
    private List<Payment> payments;

}
